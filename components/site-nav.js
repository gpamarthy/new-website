"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export default function SiteNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full border border-white/20 bg-command-bar px-6 py-4 shadow-command backdrop-blur">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          Command Bar
        </div>
        <nav
          className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200"
          aria-label="Primary"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition hover:text-emerald-200 ${
                activeId === section.id
                  ? "text-emerald-300"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              aria-current={activeId === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
