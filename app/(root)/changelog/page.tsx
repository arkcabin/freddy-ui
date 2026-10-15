"use client";

import { Check, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { MainHeader } from "@/components/header/header-2";
import { SectionGrid } from "@/components/section-grid";
import { SectionHeader } from "@/components/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HomePageWrapper } from "@/components/wrapper";
import { CHANGELOG_DATA } from "@/lib/data/changelog-data";

export default function ChangelogPage() {
  return (
    <main className="bg-background">
      <HomePageWrapper isAnnouncementVisible={false}>
        <MainHeader isFullWidth={false} />

        <SectionGrid
          className="pt-12 pb-24"
          markerType="plus"
          showBottomMarkers={true}
          showDoubleBorders={true}
          showTopMarkers={true}
        >
          <SectionHeader
            subtitle="Release notes and updates for the Freddy UI library."
            title="Changelog"
          />

          <div className="relative mx-auto mt-12 max-w-6xl px-4 md:px-0">
            <div className="space-y-24">
              {CHANGELOG_DATA.map((release, index) => (
                <motion.div
                  className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
                  initial={{ opacity: 0, y: 20 }}
                  key={release.version}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {/* Left Side (Desktop): Version & Metadata - STICKY */}
                  <div className="z-10 flex flex-col items-start justify-center border-border/50 border-b bg-background/95 py-4 md:sticky md:top-24 md:items-end md:border-0 md:bg-transparent md:py-0 md:pr-16">
                    <div className="flex items-center gap-3">
                      <span className="font-bold font-mono text-[10px] text-muted-foreground/60 md:text-sm">
                        {release.date}
                      </span>
                      <Badge className="border-primary/20 bg-primary/10 font-bold text-[9px] text-primary uppercase tracking-widest transition-colors hover:bg-primary/20 md:text-[10px]">
                        {release.status}
                      </Badge>
                    </div>
                    <h2 className="mt-1 font-extrabold text-2xl tracking-tightest md:mt-2 md:text-4xl">
                      v{release.version}
                    </h2>
                    <p className="mt-2 max-w-full text-left font-medium text-[11px] text-muted-foreground/80 leading-relaxed md:mt-4 md:max-w-[280px] md:text-right md:text-xs">
                      {release.description}
                    </p>

                    {release.contributors &&
                      release.contributors.length > 0 && (
                        <div className="mt-6 flex flex-col items-start md:items-end">
                          <div className="mb-2.5 flex items-center gap-2">
                            <span className="font-bold font-mono text-[9px] text-muted-foreground/60 uppercase tracking-wider md:text-[10px]">
                              Contributors
                            </span>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 font-bold font-mono text-[9px] text-primary">
                              {release.contributors.length}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5 md:justify-end">
                            {release.contributors.map((contributor) => (
                              <HoverCard
                                key={contributor.username}
                                openDelay={150}
                              >
                                <HoverCardTrigger asChild>
                                  <a
                                    className="group/contributor flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 py-1 pr-2.5 pl-1 transition-all hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                    href={contributor.profileUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    <Avatar
                                      className="size-5 border border-background shadow-xs"
                                      size="sm"
                                    >
                                      <AvatarImage
                                        alt={contributor.name}
                                        src={contributor.avatarUrl}
                                      />
                                      <AvatarFallback className="font-bold text-[9px]">
                                        {contributor.username
                                          .slice(0, 2)
                                          .toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="max-w-[120px] truncate font-medium text-[11px] text-muted-foreground transition-colors group-hover/contributor:text-foreground">
                                      @{contributor.username}
                                    </span>
                                  </a>
                                </HoverCardTrigger>
                                <HoverCardContent
                                  align="end"
                                  className="w-72 border-border/70 bg-card/95 p-4 shadow-2xl backdrop-blur-xl"
                                  side="top"
                                >
                                  <div className="flex items-start gap-3.5">
                                    <Avatar className="size-11 shrink-0 border border-border/60 shadow-xs">
                                      <AvatarImage
                                        alt={contributor.name}
                                        src={contributor.avatarUrl}
                                      />
                                      <AvatarFallback className="font-bold text-xs">
                                        {contributor.username
                                          .slice(0, 2)
                                          .toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex min-w-0 flex-1 flex-col">
                                      <div className="flex items-center justify-between gap-1">
                                        <h4 className="truncate font-bold text-foreground text-sm">
                                          {contributor.name}
                                        </h4>
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 font-bold text-[9px] text-primary uppercase tracking-wider">
                                          Contributor
                                        </span>
                                      </div>
                                      <p className="truncate font-medium text-muted-foreground text-xs">
                                        @{contributor.username}
                                      </p>
                                      <div className="mt-3 flex items-center justify-between border-border/50 border-t pt-2.5">
                                        <span className="font-mono text-[10px] text-muted-foreground/70">
                                          v{release.version}
                                        </span>
                                        <a
                                          className="inline-flex items-center gap-1 font-semibold text-[11px] text-primary hover:underline"
                                          href={contributor.profileUrl}
                                          rel="noopener noreferrer"
                                          target="_blank"
                                        >
                                          GitHub Profile
                                          <ExternalLink className="size-3" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Right Side: Detailed Updates */}
                  <div className="mt-8 md:mt-0 md:pl-16">
                    <div className="space-y-10">
                      {release.groups.map((group) => (
                        <motion.div
                          initial={{ opacity: 0.5, x: 5 }}
                          key={group.category}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          viewport={{ margin: "-20% 0px -40% 0px" }}
                          whileInView={{ opacity: 1, x: 0 }}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <div className="h-px w-6 bg-primary/30 md:w-8" />
                            <span className="font-black text-[10px] text-primary uppercase tracking-[0.25em] md:text-[11px]">
                              {group.category}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {group.items.map((item) => (
                              <li
                                className="group flex items-start gap-3"
                                key={item}
                              >
                                <Check className="-translate-x-2 mt-0.5 size-3.5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                <span className="font-medium text-[13px] text-foreground/80 transition-all group-hover:translate-x-1 group-hover:text-foreground md:text-[14px]">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionGrid>
      </HomePageWrapper>
    </main>
  );
}
