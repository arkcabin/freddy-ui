import { NextRequest, NextResponse } from "next/server";
import { likesService } from "@/lib/services/likes.service";
import { z } from "zod";

/**
 * DTO Validation Schema
 * Follows 'security-validate-all-input' best practice.
 */
const LikeSchema = z.object({
  fingerprint: z.string().min(1, "Fingerprint is required"),
});

/**
 * GET: Fetch the current like count for a specific block.
 * URL: /api/blocks/[name]/likes
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const count = await likesService.getCount(name);
  return NextResponse.json({ count });
}

/**
 * POST: Toggle a like (Like/Unlike) for a specific block.
 * URL: /api/blocks/[name]/likes
 * BODY: { "fingerprint": "visitor-id" }
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  try {
    const body = await req.json();
    const result = LikeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid DTO", details: result.error.errors },
        { status: 400 }
      );
    }

    const { fingerprint } = result.data;
    const { action, count } = await likesService.toggle(name, fingerprint);

    return NextResponse.json(
      {
        success: true,
        action,
        count,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(`[API] Fatal error in likes toggle for ${name}:`, error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
