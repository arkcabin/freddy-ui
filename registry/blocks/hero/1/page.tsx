"use client";

import React from "react";
import { AiWorkAnnouncement } from "./announcement";
import { AiWorkHeader } from "./header";
import { AiWorkHero } from "./hero";
import { AiWorkWrapper } from "./wrapper";
import { DemoLayout } from "@/components/demo-layout";

/**
 * AI-WORK BLOCK (Page Entry)
 * Composed high-fidelity landing experience with cinematic scroll effects.
 */
export default function AiWorkPage() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = React.useState(true);

  return (
    <div className="w-full bg-accent text-foreground selection:bg-background selection:text-background font-sans">
      {/* 1. Announcement Bar */}
      <AiWorkAnnouncement
        isVisible={isAnnouncementVisible}
        onClose={() => setIsAnnouncementVisible(false)}
      />

      {/* 2. Master Content Wrapper (Handles Cinematic Layering) */}
      <AiWorkWrapper isAnnouncementVisible={isAnnouncementVisible}>

        {/* 3. Navigation Header */}
        <AiWorkHeader isScrolled={false} isFullWidth={false} />

        {/* 4. Hero Landing Section */}
        <AiWorkHero />

        {/* Additional sections can be modularly added here */}

        <DemoLayout />

      </AiWorkWrapper>
    </div>
  );
}
