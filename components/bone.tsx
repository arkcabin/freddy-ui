"use client";

import { useEffect, useState } from "react";
import { Skeleton, registerBones } from "boneyard-js/react";

interface BoneProps {
  name: string;
  loading?: boolean;
  children?: React.ReactNode;
  /**
   * Optional local 'bones.json' data for autonomous, encapsulated sync.
   * This allows distributed blocks to carry their own DNA.
   */
  data?: any;
}

/**
 * Bone Wrapper (Freddy Pro)
 * 
 * Prevents Next.js Hydration Mismatches and enables encapsulated DNA sync. 
 * On the client, it registers the provided 'data' automatically if it's missing.
 */
export function Bone({ name, loading = false, data, children }: BoneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 🧬 If local DNA is provided, register it with Boneyard
    if (data) {
      registerBones({ [name]: data });
    }
    setMounted(true);
  }, [name, data]);

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
