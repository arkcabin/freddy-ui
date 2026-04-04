"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "boneyard-js/react";

interface SafeSkeletonProps {
  name: string;
  loading?: boolean;
  children?: React.ReactNode;
}

/**
 * SafeSkeleton Wrapper
 * 
 * Prevents Next.js Hydration Mismatches by ensuring the 
 * Boneyard Skeleton only initializes after the component has mounted.
 * On the server, it renders a stable placeholder that matches the final height.
 */
export function SafeSkeleton({ name, loading = false, children }: SafeSkeletonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On server/initial hydration pass, render a stable div to prevent mismatch.
  if (!mounted) {
    return <div className="min-h-1" data-skeleton-placeholder={name} />;
  }

  // On client, render the full Boneyard logic.
  return (
    <Skeleton loading={loading} name={name}>
      {children || <div />}
    </Skeleton>
  );
}
