"use client";

import { SITE_NAME } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import type { TweetData } from "@/types";

const tweets: TweetData[] = [
  {
    id: "1",
    name: "Alex River",
    handle: "@ariver_dev",
    content: `Wow, ${SITE_NAME} is a game changer. The Shadcn blocks are so well-designed. My landing page looks premium in minutes! 🚀`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    id: "2",
    name: "Sarah Chen",
    handle: "@sarah_designs",
    content: `${SITE_NAME} is on another level. The dark mode aesthetic is just perfect for modern SaaS. 🌑✨`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "3",
    name: "Jordan Smith",
    handle: "@jordan_codes",
    content: `Finally a library that doesn't feel generic. The glassmorphism and grid patterns are exactly what I needed.`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    handle: "@elena_ui",
    content: `The responsiveness is incredible. Saved me hours of CSS debugging. Highly recommend ${SITE_NAME}! 🙌`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    id: "5",
    name: "Marcus Thorne",
    handle: "@mthorne_v",
    content: `${SITE_NAME} is literally the best tool I've used this year. The code is so clean and easy to follow.`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    id: "6",
    name: "Lisa Wong",
    handle: "@lisa_wong",
    content: `Just shipped my first project using ${SITE_NAME}. The UI looks expensive and clients are raving! 💎`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
  {
    id: "7",
    name: "David Kim",
    handle: "@davidk_tech",
    content: `I've replaced bunch of custom CSS with ${SITE_NAME} blocks. It's much cleaner and easier to maintain now.`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: "8",
    name: "Emma Wilson",
    handle: "@emma_designs",
    content: `The attention to typography and spacing in ${SITE_NAME} is unmatched. It just feels 'right' out of the box.`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: "9",
    name: "Ryan Park",
    handle: "@ryan_dev",
    content: `My dev team is 2x faster since we started using ${SITE_NAME}. The consistency across blocks is a huge plus.`,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
  },
];

const firstRow = tweets.slice(0, 5);
const secondRow = tweets.slice(5);

export const Tweets = () => (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
    <div className="mb-12 space-y-2 text-center">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Loved by the community
      </h2>
      <p className="text-muted-foreground">
        Join thousands of developers building with {SITE_NAME}.
      </p>
    </div>

    <div className="flex flex-col gap-y-6">
      <Marquee className="[--duration:40s]">
        {firstRow.map((tweet) => (
          <DummyTweet key={tweet.id} {...tweet} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:35s]">
        {secondRow.map((tweet) => (
          <DummyTweet key={tweet.id} {...tweet} />
        ))}
      </Marquee>
    </div>

    {/* Gradient masks for smooth edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div>
  </div>
);

function Marquee({
  children,
  reverse,
  pauseOnHover = true,
  className,
  ...props
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) flex-row",
        className
      )}
    >
      <div
        className={cn("flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row", {
          "animate-marquee-reverse": reverse,
          "group-hover:paused": pauseOnHover,
        })}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

function DummyTweet({ name, handle, content, avatar }: TweetData) {
  return (
    <div className="relative w-72 cursor-default overflow-hidden rounded-xl border border-white/10 bg-white/3 p-3 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5">
      <div className="flex flex-row items-center gap-2">
        <img
          className="size-8 rounded-full border border-white/10 bg-white/5"
          alt={name}
          src={avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white leading-tight">
            {name}
          </figcaption>
          <p className="text-[10px] text-muted-foreground">{handle}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs leading-relaxed text-white/80">
        {content}
      </blockquote>
    </div>
  );
}
