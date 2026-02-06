import Image from "next/image";
import {
  aboutHighlights,
  heroStats,
  siteConfig,
  skills,
  socialLinks
} from "./data/site";
import { projects } from "./data/projects";
import { experience } from "./data/experience";
import { certifications } from "./data/certifications";

export default function HomePage() {
  return (
    <div>
      <section id="home" className="section">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="pill text-emerald-300">Declassified Enterprise Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
              {siteConfig.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{siteConfig.mission}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.resumeUrl}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-400"
              >
                Download Resume (PDF)
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white transition hover:border-emerald-300 hover:text-emerald-200"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="card flex flex-col items-center gap-6 text-center">
            <Image
              src="/images/headshot-placeholder.svg"
              alt="Professional headshot placeholder"
              width={360}
              height={360}
              className="h-60 w-60 rounded-3xl object-cover"
              priority
            />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Clearance
              </p>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-200">Cloud Security | Red Team | Risk Reduction</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.label} className="card space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="pill text-emerald-300">About</p>
            <h2 className="section-title text-slate-900 dark:text-white">Mission-ready offensive security leadership.</h2>
            <p className="text-slate-600 dark:text-slate-300">
              I partner with security and engineering leaders to validate defenses against real adversary tactics.
              Engagements focus on measurable risk reduction, resiliency, and clear remediation roadmaps.
            </p>
          </div>
          <div className="card space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Focus Areas
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {aboutHighlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="space-y-6">
          <p className="pill text-emerald-300">Skills</p>
          <h2 className="section-title text-slate-900 dark:text-white">Core security capabilities.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="space-y-4">
          <p className="pill text-emerald-300">Projects</p>
          <h2 className="section-title text-slate-900 dark:text-white">Security engagements with measurable outcomes.</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Project dossiers are structured to highlight findings, remediation, and business impact.
          </p>
        </div>
        <div className="mt-8 grid gap-8">
          {projects.map((project) => (
            <article key={project.title} className="card grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                      Findings & Remediation
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      {project.outcomes.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                      Focus Areas
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <Image
                  src={project.diagram}
                  alt={`${project.title} architecture placeholder`}
                  width={640}
                  height={420}
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="space-y-4">
          <p className="pill text-emerald-300">Experience</p>
          <h2 className="section-title text-slate-900 dark:text-white">Operational timeline.</h2>
        </div>
        <div className="mt-8 space-y-8">
          {experience.map((role, index) => (
            <div key={role.company} className="relative grid gap-6 lg:grid-cols-[0.2fr_1fr]">
              <div className="flex items-start justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-slate-900/60 text-sm font-semibold text-emerald-200">
                  {index + 1}
                </div>
              </div>
              <div className="card space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Image src={role.logo} alt={`${role.company} logo`} width={180} height={72} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{role.role}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {role.company} · {role.period}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{role.summary}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {role.achievements.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="space-y-4">
          <p className="pill text-emerald-300">Certifications</p>
          <h2 className="section-title text-slate-900 dark:text-white">Verified credentials.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="card flex flex-col items-center gap-4 text-center">
              <Image src={cert.badge} alt={`${cert.name} badge`} width={200} height={200} />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{cert.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="pill text-emerald-300">Contact</p>
            <h2 className="section-title text-slate-900 dark:text-white">Secure comms channel.</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Provide scope objectives, compliance constraints, and timelines. I will return a mission plan with
              deliverables, testing windows, and a remediation roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-400"
              >
                Email me
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="card space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>Primary Email</span>
              <span className="font-semibold text-emerald-300">{siteConfig.email}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>Location</span>
              <span className="font-semibold text-emerald-300">{siteConfig.location}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>Availability</span>
              <span className="font-semibold text-emerald-300">Q4 2024 Intake</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
              Preferred engagements include cloud security assessments, adversary emulation, and executive readiness
              briefings.
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-200"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
