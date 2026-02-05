import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            Declassified Enterprise Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Offensive Security Engineer <span className="text-emerald-300">|</span> OSEP &amp; CRTE
          </h1>
          <p className="text-lg text-slate-300">
            Mission Statement: I secure modern cloud environments by translating adversarial tactics into
            measurable risk reduction. Every engagement focuses on hardened identity controls, resilient
            detection pipelines, and executive-ready remediation roadmaps.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/operations"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-400"
            >
              View Operations
            </Link>
            <Link
              href="/comms"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Open Comms
            </Link>
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
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Clearance</p>
            <p className="text-lg font-medium text-slate-200">Cloud Security | Red Team | Risk Reduction</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            label: "Cloud Defense Programs",
            value: "12+",
            detail: "Enterprise-grade assessments with measurable outcomes."
          },
          {
            label: "Risk Reduction",
            value: "38%",
            detail: "Average control improvement per engagement."
          },
          {
            label: "Detection Uplift",
            value: "24x",
            detail: "Expanded coverage across cloud telemetry."
          }
        ].map((item) => (
          <div key={item.label} className="card space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
