"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnnouncementBar } from "@/components/announcement";
import { MainHeader } from "@/components/header/header-2";
import { HomePageWrapper } from "@/components/wrapper";

interface ClientPageWrapperProps {
  children: ReactNode;
}

/**
 * Client-side wrapper for the homepage to handle local state (announcements).
 * This allows the parent Page component to be a Server Component.
 */
export function ClientPageWrapper({ children }: { children: ReactNode }) {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <div className="relative bg-accent">
      <AnnouncementBar
        isVisible={isAnnouncementVisible}
        onClose={() => setIsAnnouncementVisible(false)}
      />

      <HomePageWrapper isAnnouncementVisible={isAnnouncementVisible}>
        <MainHeader
          isAnnouncementVisible={isAnnouncementVisible}
          isFullWidth={false}
        />
        {children}
      </HomePageWrapper>
    </div>
  );
}
