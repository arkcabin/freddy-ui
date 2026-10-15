import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

type ParsedContributor = {
  name: string;
  username: string;
  avatarUrl: string;
  profileUrl: string;
};

type ParsedGroup = {
  category: string;
  items: string[];
};

type ParsedRelease = {
  version: string;
  dateStr: string;
  groups: ParsedGroup[];
  contributors: ParsedContributor[];
};

const VERSION_REGEX =
  /^##\s+\[?v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)(?:\]\([^)]+\)|\])?(?:\s+-\s+|\s+\()(\d{4}-\d{2}-\d{2})\)?/;
const CATEGORY_REGEX = /^###\s+/;
const LIST_BULLET_REGEX = /^[*-]\s+/;
const COMMIT_HASH_REGEX = /\[([a-f0-9]{7,})\]\([^)]+\)/gi;
const COMMIT_HASH_PAREN_REGEX = /\(\[[a-f0-9]{7,}\]\([^)]+\)\)/gi;
const BOLD_REGEX = /\*\*(.*?)\*\*/g;
const CONTRIBUTOR_HANDLE_REGEX = /@([a-zA-Z0-9_-]+)(?:\s*\(([^)]+)\))?/;

function formatDate(isoDate: string): string {
  try {
    const parts = isoDate.split("-");
    if (parts.length === 3) {
      const year = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1;
      const day = Number.parseInt(parts[2], 10);
      const date = new Date(Date.UTC(year, month, day));
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    }
  } catch {
    // fallback to original string
  }
  return isoDate;
}

function cleanItemText(line: string): string {
  return line
    .replace(LIST_BULLET_REGEX, "")
    .replace(COMMIT_HASH_REGEX, "")
    .replace(COMMIT_HASH_PAREN_REGEX, "")
    .replace(BOLD_REGEX, "$1")
    .trim();
}

function parseContributorLine(line: string): ParsedContributor | null {
  const match = line.match(CONTRIBUTOR_HANDLE_REGEX);
  if (!match) {
    return null;
  }
  const username = match[1];
  const name = match[2] || username;
  return {
    name,
    username,
    avatarUrl: `https://github.com/${username}.png`,
    profileUrl: `https://github.com/${username}`,
  };
}

function parseVersionHeader(line: string): ParsedRelease | null {
  const match = line.match(VERSION_REGEX);
  if (!match) {
    return null;
  }
  return {
    version: match[1],
    dateStr: formatDate(match[2]),
    groups: [],
    contributors: [],
  };
}

type ParserState = {
  isParsingContributors: boolean;
  currentGroup: ParsedGroup | null;
};

function handleCategoryHeader(line: string, state: ParserState): void {
  const cat = line.replace(CATEGORY_REGEX, "").trim();
  if (cat.toLowerCase().includes("contributor")) {
    state.isParsingContributors = true;
    state.currentGroup = null;
    return;
  }
  state.isParsingContributors = false;
  state.currentGroup = {
    category: cat,
    items: [],
  };
}

function handleBulletItem(
  line: string,
  release: ParsedRelease,
  state: ParserState
): void {
  if (state.isParsingContributors) {
    const contributor = parseContributorLine(line);
    if (
      contributor &&
      !release.contributors.some(
        (c) => c.username.toLowerCase() === contributor.username.toLowerCase()
      )
    ) {
      release.contributors.push(contributor);
    }
    return;
  }

  if (state.currentGroup) {
    const itemText = cleanItemText(line);
    if (itemText) {
      state.currentGroup.items.push(itemText);
    }
  }
}

const DEFAULT_REPO = "arkcabin/freddy-ui";
const TAG_PREFIXES = ["freddy-ui-v", "v"] as const;
const RELEASE_HEADING_REGEX = /^##\s+\[?v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)/;

type GithubCommit = { author: { login: string } | null };
type GithubUser = { name: string | null };

type ReleaseBlock = {
  version: string;
  start: number;
  end: number;
  hasContributors: boolean;
};

async function githubGet<T>(apiPath: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  try {
    const res = await fetch(`https://api.github.com${apiPath}`, { headers });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

function findReleaseBlocks(lines: string[]): ReleaseBlock[] {
  const blocks: ReleaseBlock[] = [];
  for (const [index, line] of lines.entries()) {
    const match = line.match(RELEASE_HEADING_REGEX);
    if (match) {
      blocks.push({
        version: match[1],
        start: index,
        end: lines.length,
        hasContributors: false,
      });
    }
  }
  for (const [i, block] of blocks.entries()) {
    block.end = blocks[i + 1]?.start ?? lines.length;
    block.hasContributors = lines
      .slice(block.start, block.end)
      .some((l) => l.toLowerCase().startsWith("### contributors"));
  }
  return blocks;
}

function loginsFromCommits(commits: GithubCommit[]): string[] {
  const logins = commits
    .map((c) => c.author?.login)
    .filter((l): l is string => Boolean(l) && !l?.endsWith("[bot]"));
  return [...new Set(logins)];
}

async function fetchLoginsForTag(
  repo: string,
  prevVersion: string | undefined,
  version: string
): Promise<string[]> {
  for (const prefix of TAG_PREFIXES) {
    const head = `${prefix}${version}`;
    const base = prevVersion ? `${prefix}${prevVersion}` : null;
    const apiPath = base
      ? `/repos/${repo}/compare/${base}...${head}?per_page=100`
      : `/repos/${repo}/commits?sha=${head}&per_page=100`;
    const data = await githubGet<{ commits?: GithubCommit[] } | GithubCommit[]>(
      apiPath
    );
    const commits = Array.isArray(data) ? data : data?.commits;
    if (commits) {
      return loginsFromCommits(commits);
    }
  }
  return [];
}

async function buildContributorLines(logins: string[]): Promise<string[]> {
  return await Promise.all(
    logins.map(async (login) => {
      const user = await githubGet<GithubUser>(`/users/${login}`);
      return user?.name ? `* @${login} (${user.name})` : `* @${login}`;
    })
  );
}

async function addMissingContributors(markdown: string): Promise<string> {
  const repo = process.env.GITHUB_REPOSITORY ?? DEFAULT_REPO;
  const lines = markdown.split("\n");
  const blocks = findReleaseBlocks(lines);

  const additions = await Promise.all(
    blocks.map(async (block, i) => {
      if (block.hasContributors) {
        return null;
      }
      const logins = await fetchLoginsForTag(
        repo,
        blocks[i + 1]?.version,
        block.version
      );
      return logins.length > 0
        ? { block, entries: await buildContributorLines(logins) }
        : null;
    })
  );

  // Apply bottom-up so earlier line indexes stay valid
  for (const item of additions.reverse()) {
    if (item) {
      let insertAt = item.block.end;
      while (insertAt > item.block.start && lines[insertAt - 1].trim() === "") {
        insertAt -= 1;
      }
      lines.splice(
        insertAt,
        0,
        "",
        "### Contributors",
        "",
        ...item.entries,
        ""
      );
    }
  }
  return lines.join("\n");
}

function parseChangelog(markdown: string): ParsedRelease[] {
  const releases: ParsedRelease[] = [];
  const lines = markdown.split("\n");

  let currentRelease: ParsedRelease | null = null;
  const state: ParserState = {
    isParsingContributors: false,
    currentGroup: null,
  };

  const flush = () => {
    if (state.currentGroup && currentRelease) {
      currentRelease.groups.push(state.currentGroup);
      state.currentGroup = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const newRelease = parseVersionHeader(line);
    if (newRelease) {
      flush();
      if (currentRelease) {
        releases.push(currentRelease);
      }
      currentRelease = newRelease;
      state.isParsingContributors = false;
      continue;
    }

    if (!currentRelease) {
      continue;
    }

    if (line.startsWith("### ")) {
      flush();
      handleCategoryHeader(line, state);
      continue;
    }

    if (line.startsWith("* ") || line.startsWith("- ")) {
      handleBulletItem(line, currentRelease, state);
    }
  }

  flush();
  if (currentRelease) {
    releases.push(currentRelease);
  }

  return releases;
}

function getIconForCategory(category: string): string {
  const lower = category.toLowerCase();
  if (lower.includes("feature")) {
    return '<Rocket className="size-4 text-primary" />';
  }
  if (lower.includes("fix") || lower.includes("bug")) {
    return '<Sparkles className="size-4 text-amber-500" />';
  }
  if (
    lower.includes("infra") ||
    lower.includes("perf") ||
    lower.includes("chore") ||
    lower.includes("tech")
  ) {
    return '<Zap className="size-4 text-blue-500" />';
  }
  return '<Sparkles className="size-4 text-primary" />';
}

function generateReleaseEntryCode(rel: ParsedRelease, index: number): string {
  const status = index === 0 ? "Latest" : "Stable";
  const title = `Release v${rel.version}`;
  const description = `Updates and improvements shipped in Freddy UI v${rel.version}.`;

  const groupsCode = rel.groups
    .map((g) => {
      const icon = getIconForCategory(g.category);
      const itemsJson = JSON.stringify(g.items, null, 10);
      return `      {
        category: "${g.category}",
        icon: ${icon},
        items: ${itemsJson.trim()},
      }`;
    })
    .join(",\n");

  const contributorsCode =
    rel.contributors.length > 0
      ? `\n    contributors: ${JSON.stringify(rel.contributors, null, 6)},`
      : "";

  return `  {
    version: "${rel.version}",
    title: "${title}",
    date: "${rel.dateStr}",
    status: "${status}",
    description: "${description}",${contributorsCode}
    groups: [
${groupsCode}
    ],
  }`;
}

async function syncChangelog() {
  const changelogPath = path.join(process.cwd(), "CHANGELOG.md");
  const targetPath = path.join(process.cwd(), "lib/data/changelog-data.tsx");

  const exists = await fs
    .access(changelogPath)
    .then(() => true)
    .catch(() => false);
  if (!exists) {
    console.error("❌ CHANGELOG.md not found.");
    return;
  }

  const rawContent = await fs.readFile(changelogPath, "utf8");
  const enrichedContent = await addMissingContributors(rawContent);
  if (enrichedContent !== rawContent) {
    await fs.writeFile(changelogPath, enrichedContent, "utf8");
    console.log("👥 Added contributors to CHANGELOG.md from GitHub commits.");
  }
  const releases = parseChangelog(enrichedContent);

  if (releases.length === 0) {
    console.log("⚠️ No release entries found in CHANGELOG.md.");
    return;
  }

  const entriesCode = releases
    .map((rel, index) => generateReleaseEntryCode(rel, index))
    .join(",\n");

  const fileContent = `// This file is autogenerated from CHANGELOG.md by scripts/sync-changelog.mts
// Run "npm run sync:changelog" to regenerate.

import { Rocket, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";

export type ChangelogContributor = {
  name: string;
  username: string;
  avatarUrl: string;
  profileUrl: string;
};

export type ChangelogGroup = {
  category: string;
  icon: ReactNode;
  items: string[];
};

export type ChangelogEntry = {
  version: string;
  title: string;
  date: string;
  status: "Latest" | "Stable" | "Legacy";
  description: string;
  contributors?: ChangelogContributor[];
  groups: ChangelogGroup[];
};

export const CHANGELOG_DATA: ChangelogEntry[] = [
${entriesCode}
];
`;

  await fs.writeFile(targetPath, fileContent, "utf8");

  try {
    const { execSync } = await import("node:child_process");
    execSync(`npx @biomejs/biome format --write "${targetPath}"`, {
      stdio: "ignore",
    });
  } catch {
    // Formatting fallback
  }

  console.log(`✅ Synced ${releases.length} releases into ${targetPath}`);
}

syncChangelog().catch((err) => {
  console.error("❌ Failed to sync changelog:", err);
  process.exit(1);
});
