import { create } from "zustand";

export type ThemeMode = "light" | "dark";

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

const getInitialMode = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem("news-ia-theme") as ThemeMode | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: getInitialMode(),
  setMode: (mode) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("news-ia-theme", mode);
      document.documentElement.dataset.theme = mode;
    }
    set({ mode });
  },
  toggleMode: () => {
    const nextMode = get().mode === "dark" ? "light" : "dark";
    get().setMode(nextMode);
  },
}));
