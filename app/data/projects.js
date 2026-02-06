export const projects = [
  {
    title: "Cloud Identity Hardening Program",
    category: "Cloud Security",
    summary:
      "Scoped a multi-account IAM attack surface review to reduce privileged exposure across a global SaaS platform.",
    outcomes: [
      "Identified 18 overly permissive roles and remediated blast radius within two sprints.",
      "Built automated IAM drift detection with quarterly executive reporting."
    ],
    focus: ["IAM policy redesign", "Guardrails & monitoring", "Privilege access reviews"],
    diagram: "/images/project-cloud.svg"
  },
  {
    title: "Adversary Emulation - Finance Workloads",
    category: "Red Team",
    summary:
      "Simulated threat actor tradecraft across VPCs, container workloads, and CI pipelines to validate detection coverage.",
    outcomes: [
      "Mapped 14 detection gaps and prioritized mitigation by business impact.",
      "Implemented SOAR playbooks to cut mean time to response by 37%."
    ],
    focus: ["Lateral movement", "Secrets exposure", "Detection engineering"],
    diagram: "/images/project-topology.svg"
  },
  {
    title: "SOC Automation & Response Modernization",
    category: "SOC Automation",
    summary:
      "Designed automation workflows for triage and containment to scale the security operations center.",
    outcomes: [
      "Reduced alert fatigue through contextual enrichment and severity scoring.",
      "Automated containment for high-fidelity alerts within 10 minutes."
    ],
    focus: ["SIEM tuning", "SOAR automation", "Playbook orchestration"],
    diagram: "/images/project-cloud.svg"
  },
  {
    title: "Secure SDLC & Application Security",
    category: "AppSec",
    summary:
      "Built a secure SDLC program with continuous scanning, threat modeling, and secure design reviews.",
    outcomes: [
      "Embedded security checks into CI/CD with developer enablement sessions.",
      "Cut critical vulnerabilities by 52% quarter over quarter."
    ],
    focus: ["Threat modeling", "SAST/DAST", "Developer enablement"],
    diagram: "/images/project-topology.svg"
  }
];
