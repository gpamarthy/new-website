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
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full px-6 py-4 shadow-command backdrop-blur" style={{ border: "1px solid var(--border)", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(90, 200, 255, 0.14))" }}>
        <div className="text-accent flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          Command Bar
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em]" aria-label="Primary">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition ${activeId === section.id ? "text-accent" : "text-muted hover:text-accent"}`}
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
