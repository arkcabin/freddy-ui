import type { BundledLanguage } from "shiki/bundle/web";

export type PreviewMode = "preview" | "code";

export type BlockFile = {
  type: "page" | "component" | "hook";
  name: string;
  code: string;
  lang: BundledLanguage;
};

export type Block = {
  name: string;
  category: string;
  block_number: string;
  description: string;
  files: BlockFile[];
  height: string;
  tier?: "free" | "pro";
  isPinned?: boolean;
  activeForDays?: number;
  createdAt?: string;
};

export type Category = {
  id: string;
  name: string;
  blocksCount: number;
  isNew: boolean;
};

export interface TweetData {
  id: string;
  name: string;
  handle: string;
  content: string;
  avatar: string;
}
