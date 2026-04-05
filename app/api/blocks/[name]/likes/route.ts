import { NextRequest, NextResponse } from "next/server";
import { likesService } from "@/lib/services/likes.service";
import { z } from "zod";

// ─── Security Constants ───────────────────────────────────────────────────────
const RATE_LIMIT_MAX = 30; // Max 30 POSTs per window per IP
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute window

// In-memory store for rate limiting (resets on serverless cold start — sufficient for anonymous abuse prevention)
const ipRateMap = new Map<string, { count: number; resetAt: number }>();

// ─── DTO Schemas ──────────────────────────────────────────────────────────────

/**
 * Validates and sanitizes the POST body.
 * - fingerprint: trimmed, min 8, max 64 chars (FingerprintJS IDs are ~32 chars)
 */
const LikeBodySchema = z.object({
  fingerprint: z
    .string()
    .trim()
    .min(8, "Invalid fingerprint")
    .max(64, "Invalid fingerprint"),
});

/**
 * Validates the URL [name] param.
 * Block names follow the pattern: category-number (e.g., auth-1)
 */
const BlockNameSchema = z
  .string()
  .trim()
  .regex(/^[a-z0-9-]+$/, "Invalid block name")
  .max(64);

// ─── Security Headers ─────────────────────────────────────────────────────────
const SECURE_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Cache-Control": "no-store",
};

// ─── Rate Limiter ─────────────────────────────────────────────────────────────
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ─── Route Handlers ───────────────────────────────────────────────────────────

/**
 * GET /api/blocks/[name]/likes
 * Returns the current like count + whether this fingerprint has liked.
 * Query: ?fp=<fingerprint>
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  const nameResult = BlockNameSchema.safeParse(name);
  if (!nameResult.success) {
    return NextResponse.json(
      { error: "Invalid block identifier" },
      { status: 400, headers: SECURE_HEADERS }
    );
  }

  const fp = req.nextUrl.searchParams.get("fp") ?? "";
  const { count, liked } = await likesService.getCountAndStatus(
    nameResult.data,
    fp
  );

  return NextResponse.json({ count, liked }, { headers: SECURE_HEADERS });
}

/**
 * POST /api/blocks/[name]/likes
 * Toggles a like for a block. Rate-limited per IP.
 * BODY: { "fingerprint": "visitor-id" }
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const ip = getClientIp(req);

  // Rate limiting check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429, headers: { ...SECURE_HEADERS, "Retry-After": "60" } }
    );
  }

  const { name } = await params;

  // Validate block name
  const nameResult = BlockNameSchema.safeParse(name);
  if (!nameResult.success) {
    return NextResponse.json(
      { error: "Invalid block identifier" },
      { status: 400, headers: SECURE_HEADERS }
    );
  }

  try {
    const body = await req.json();
    const bodyResult = LikeBodySchema.safeParse(body);

    if (!bodyResult.success) {
      // Never leak internal validation details to the client
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400, headers: SECURE_HEADERS }
      );
    }

    const { fingerprint } = bodyResult.data;
    const { action, count } = await likesService.toggle(
      nameResult.data,
      fingerprint
    );

    return NextResponse.json(
      { success: true, action, count },
      { status: 201, headers: SECURE_HEADERS }
    );
  } catch (error) {
    // Never expose internal errors to the client
    console.error(`[API /likes] Error for block "${name}":`, error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500, headers: SECURE_HEADERS }
    );
  }
}

