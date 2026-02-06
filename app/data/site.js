const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
export const basePath = configuredBasePath !== undefined ? configuredBasePath : "/new-website";

export const siteConfig = {
  name: "Goutham Pamarthy",
  title: "Offensive Security Engineer | OSEP & CRTE",
  mission:
    "I secure cloud-native businesses by translating adversary tradecraft into measurable risk reduction. I deliver executive-ready remediation roadmaps, hardened identity controls, and resilient detection pipelines.",
  location: "Remote · Global",
  email: "hello@gouthampamarthy.com",
  resumeUrl: `${basePath}/resume.pdf`,
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://gpamarthy.github.io/new-website/"
};

export const heroStats = [
  {
    label: "Cloud Security Assessments",
    value: "30+",
    detail: "Enterprise and scale-up engagements."
  },
  {
    label: "Risk Reduction",
    value: "42%",
    detail: "Average control hardening uplift."
  },
  {
    label: "Detection Coverage",
    value: "24x",
    detail: "Expanded alerting & telemetry."
  }
];

export const aboutHighlights = [
  "Adversary emulation across AWS, Azure, and hybrid estates.",
  "Cloud threat modeling and breach simulation with stakeholder briefings.",
  "Secure architecture reviews aligned to compliance and resilience goals."
];

export const skills = [
  {
    category: "Cloud & Platform",
    items: ["AWS", "Azure", "Kubernetes", "Terraform", "Serverless"]
  },
  {
    category: "Offensive Security",
    items: ["Red Team", "Adversary Emulation", "AppSec", "Penetration Testing"]
  },
  {
    category: "Detection & Response",
    items: ["SIEM Engineering", "EDR Telemetry", "SOAR Automation", "Threat Hunting"]
  }
];

export const socialLinks = [
  { label: "Email me", href: "mailto:hello@gouthampamarthy.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/goutham-pamarthy/", external: true },
  { label: "GitHub", href: "https://github.com/gpamarthy", external: true }
];
