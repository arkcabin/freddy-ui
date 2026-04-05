import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Package manager types supported by Freddy UI.
 */
export type PackageManager = "npx" | "npm" | "pnpm" | "bun";

interface FreddyStore {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
  favorites: string[];
  toggleFavorite: (name: string) => void;
  lastAuthProvider: "google" | "github" | null;
  setLastAuthProvider: (provider: "google" | "github" | null) => void;
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
      favorites: [],
      toggleFavorite: (name) =>
        set((state) => ({
          favorites: state.favorites.includes(name)
            ? state.favorites.filter((f) => f !== name)
            : [...state.favorites, name],
        })),
      lastAuthProvider: null,
      setLastAuthProvider: (provider) => set({ lastAuthProvider: provider }),
    }),
    {
      name: "freddy-ui-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
