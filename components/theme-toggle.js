"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-emerald-300 hover:text-emerald-200 dark:text-white"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={currentTheme === "dark"}
    >
      {mounted ? (currentTheme === "dark" ? "Light Mode" : "Dark Mode") : "Mode"}
    </button>
  );
}
