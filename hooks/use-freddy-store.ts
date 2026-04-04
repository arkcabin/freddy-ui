import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Package manager types supported by Freddy UI.
 */
export type PackageManager = "npx" | "npm" | "pnpm" | "bun";

interface FreddyStore {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
}

/**
 * Global store for Freddy UI user preferences.
 * Persists to localStorage to remember your choice across sessions.
 */
export const useFreddyStore = create<FreddyStore>()(
  persist(
    (set) => ({
      packageManager: "pnpm",
      setPackageManager: (pm) => set({ packageManager: pm }),
    }),
    {
      name: "freddy-ui-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
