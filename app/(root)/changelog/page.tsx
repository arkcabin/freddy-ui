"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionGrid } from "@/components/section-grid";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { MainHeader } from "@/components/header/header-2";
import { HomePageWrapper } from "@/components/wrapper";
import { CHANGELOG_DATA } from "@/lib/data/changelog-data";

export default function ChangelogPage() {
  return (
    <main className="bg-background">
      <HomePageWrapper isAnnouncementVisible={false}>
        <MainHeader isFullWidth={false} />

        <SectionGrid
          className="pb-24 pt-12"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={release.version}
                  className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
                >
                  {/* Left Side (Desktop): Version & Metadata - STICKY */}
                  <div className="md:sticky md:top-24 z-10 flex flex-col items-start justify-center md:items-end md:pr-16 bg-background/95 md:bg-transparent py-4 md:py-0 border-b border-border/50 md:border-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] md:text-sm font-bold text-muted-foreground/60">{release.date}</span>
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors uppercase tracking-widest font-bold text-[9px] md:text-[10px]">
                        {release.status}
                      </Badge>
                    </div>
                    <h2 className="mt-1 md:mt-2 text-2xl md:text-4xl font-extrabold tracking-tightest">v{release.version}</h2>
                    <p className="mt-2 md:mt-4 text-muted-foreground/80 text-[11px] md:text-xs font-medium leading-relaxed text-left md:text-right max-w-full md:max-w-[280px]">
                      {release.description}
                    </p>
                  </div>

                  {/* Right Side: Detailed Updates */}
                  <div className="mt-8 md:mt-0 md:pl-16">
                    <div className="space-y-10">
                      {release.groups.map((group) => (
                        <motion.div
                          initial={{ opacity: 0.5, x: 5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          viewport={{ margin: "-20% 0px -40% 0px" }}
                          key={group.category}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-6 md:w-8 bg-primary/30" />
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-primary">{group.category}</span>
                          </div>
                          <ul className="space-y-2">
                            {group.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 group">
                                <Check className="size-3.5 mt-0.5 shrink-0 text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                <span className="text-[13px] md:text-[14px] font-medium text-foreground/80 transition-all group-hover:text-foreground group-hover:translate-x-1">
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
