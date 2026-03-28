// Central site copy and links — import this from components only.
// UPDATE YOUR INFO HERE when your details change.

export const site = {
  title: "DanielHwang — DevOps & cloud",
  description:
    "DevOps engineer focused on AWS, Terraform, and Kubernetes — reliable platforms, reviewable infrastructure, and calmer releases.",
};

export const brand = {
  name: "DanielHwang", // UPDATE YOUR INFO HERE (display name)
  descriptor: "DevOps · AWS · Terraform · Kubernetes",
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Proof", href: "#proof" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  primaryCta: {
    label: "Contact me",
    href: "mailto:click92ec@gmail.com?subject=DevOps%20%2F%20cloud%20inquiry%20%E2%80%94%20DanielHwang",
  },
};

export const hero = {
  image: {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80",
    alt: "Abstract global network visualization suggesting cloud infrastructure",
  },
  /** Shown as pills under the subheadline — core stack emphasis */
  stackBadges: ["AWS", "Terraform", "Kubernetes"],
  headlineBefore: "Platforms that stay ",
  headlineGradient: "boring on launch day",
  headlineAfter: " — AWS, Terraform, and Kubernetes done with discipline.",
  subheadline:
    "I design and operate cloud foundations your team can trust: infrastructure as code you can review in PRs, clusters that behave predictably, and guardrails that turn release anxiety into a checklist.",
  primaryCta: {
    label: "Start a conversation",
    href: "mailto:click92ec@gmail.com?subject=DevOps%20%2F%20cloud%20inquiry%20%E2%80%94%20DanielHwang",
  },
  secondaryCta: {
    label: "See how I work",
    href: "#process",
  },
};

export const about = {
  eyebrow: "About",
  title: "DevOps, not dashed-board theater",
  lead:
    "You are hiring someone who lives in change requests, blast radius, and the difference between 'it works on my laptop' and 'it works when you are not in the room.'",
  body:
    "My focus is AWS for the substrate, Terraform for repeatable environments, and Kubernetes when workloads need orchestration at scale — always with observability, least privilege, and rollback paths you can actually use. This page is a concise snapshot for teams who want a serious DevOps partner before the first architecture call.",
};

export const servicesSection = {
  id: "services",
  eyebrow: "Services",
  title: "What you get when we collaborate",
  intro:
    "Three pillars I own end to end — so you get clarity on scope, security, and day-two operations.",
};

export const services = [
  {
    icon: "Cloud" as const,
    title: "AWS foundations that scale with the org",
    description:
      "Account strategy, networking, IAM boundaries, and cost-aware patterns — built so new services land in a pit of success instead of a pile of exceptions.",
  },
  {
    icon: "Layers" as const,
    title: "Terraform stacks people want to review",
    description:
      "Modules, workspaces, and state discipline that make infra changes legible in PRs: plans you trust, patterns you reuse, drift you can detect.",
  },
  {
    icon: "Boxes" as const,
    title: "Kubernetes you can run, not just install",
    description:
      "Clusters with upgrades, add-ons, ingress, and workloads wired for health checks and rollbacks — opinionated enough to move fast, flexible enough to evolve.",
  },
];

export const processSection = {
  id: "process",
  eyebrow: "Process",
  title: "How it works",
  intro:
    "A delivery rhythm that respects production — discovery first, then small, reversible changes.",
  steps: [
    {
      title: "Map risk, constraints, and the next milestone",
      body:
        "We align on environments, compliance needs, traffic patterns, and what 'good' looks like for the next release — SLOs, budgets, and who owns the pager.",
    },
    {
      title: "Design the platform slice in Terraform",
      body:
        "I translate decisions into modules and layers with clear ownership: networking, identity, data plane, workloads — so changes stay reviewable and composable.",
    },
    {
      title: "Prove it in a lower environment, then promote with confidence",
      body:
        "Plan/apply discipline, policy checks where they matter, and kubernetes rollout strategies that fail closed — canaries, surge, or blue/green when the risk warrants it.",
    },
    {
      title: "Hand off playbooks operators actually read",
      body:
        "Runbooks for upgrades and incidents, dashboards that answer 'what changed,' and a short retro on what to automate next so the system gets easier every sprint.",
    },
  ],
};

export const testimonialsSection = {
  id: "proof",
  eyebrow: "Social proof",
  title: "What partners say about working together",
  intro: "Placeholder quotes — swap for real stakeholders when your case studies go public.",
  items: [
    {
      quote:
        "Daniel turned our Terraform sprawl into something contributors could navigate without a three-hour onboarding. Plans became readable, modules actually matched how the org thinks, and deploys stopped feeling like bingo night.",
      name: "Alex Rivera",
      role: "Head of Platform · Series B SaaS",
    },
    {
      quote:
        "We finally had someone who could speak AWS, Terraform, and Kubernetes in one coherent thread — fewer handoffs, fewer 'mystery' outages, and a cluster upgrade that did not become a weekend saga.",
      name: "Jordan Kim",
      role: "CTO · Data-heavy B2B",
    },
    {
      quote:
        "Security and velocity stopped arguing in circles. IAM boundaries were clear, pipelines had guardrails that engineers did not fight, and auditors got answers without pulling engineering off the roadmap.",
      name: "Sam Okonkwo",
      role: "Director of Engineering · Fintech",
    },
  ],
};

export const portfolioSection = {
  id: "work",
  eyebrow: "Portfolio",
  title: "Representative platform work",
  intro:
    "Illustrative snapshots — replace titles, metrics, and links with your own shipped work when you can share it.",
  projects: [
    {
      name: "Multi-account AWS landing zone",
      tag: "AWS · Terraform · IAM",
      description:
        "Baseline org with guardrailed accounts, centralized logging, VPC patterns, and Terraform pipelines so new teams could self-serve subnets without opening security debt.",
      href: "https://github.com/DanielHwang",
      image: {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Network and cloud connectivity visualization",
      },
    },
    {
      name: "EKS platform upgrade & add-on hardening",
      tag: "Kubernetes · EKS · GitOps",
      description:
        "Cluster lifecycle with tested upgrades, ingress and DNS patterns, workload identity, and rollout automation so platform releases stopped being a quarterly cliff.",
      href: "https://github.com/DanielHwang",
      image: {
        src: "https://images.unsplash.com/photo-1558494949-ef5865d280ea?auto=format&fit=crop&w=1200&q=80",
        alt: "Server racks in a data center",
      },
    },
    {
      name: "Terraform CI for safe, fast infra changes",
      tag: "Terraform · CI/CD · Policy",
      description:
        "Plan-on-PR workflows with policy gates, drift detection, and workspace strategy so infra changes shipped with the same rigor as application code.",
      href: "https://github.com/DanielHwang",
      image: {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        alt: "Team collaborating over engineering work",
      },
    },
  ],
};

export const faqSection = {
  id: "faq",
  eyebrow: "FAQ",
  title: "FAQ",
  intro: "Answers teams usually want before a DevOps engagement kicks off.",
  items: [
    {
      question: "Are you AWS-first, or multi-cloud?",
      answer:
        "My deepest day-to-day work is AWS — VPC, IAM, EKS, and the services teams lean on for data and messaging. I can integrate with external DNS, identity, or SaaS where needed, but I optimize for one cloud done well instead of three clouds done vaguely.",
    },
    {
      question: "How do you approach Terraform state and blast radius?",
      answer:
        "State layout follows team boundaries and risk: separate state per environment where it matters, workspaces when they reduce drift, and modules that encode your standards. Changes land in small PRs with plans everyone can read — no surprise applies Friday afternoon.",
    },
    {
      question: "When do you recommend Kubernetes versus something simpler?",
      answer:
        "When you have multiple services with independent cadence, need strong isolation between them, or already carry operational muscle for clusters. If you are a single API on a queue, we talk about cost of ownership honestly — K8s when it earns its complexity.",
    },
    {
      question: "What does handoff look like for internal platform teams?",
      answer:
        "Repo ownership, pipeline ownership, and on-call boundaries documented on day one. You get diagrams, runbooks, upgrade checklists, and dashboard links — not a PDF hand wave.",
    },
    {
      question: "What should I send for a fast yes/no on fit?",
      answer:
        "Current AWS footprint (accounts, regions), how you deploy today, pain points (cost, reliability, speed, compliance), and what the next 90-day milestone is. That is enough to see if I am the right engineer for your phase.",
    },
  ],
};

export const contactSection = {
  id: "contact",
  eyebrow: "Contact",
  title: "Contact",
  intro:
    "Email for scope and attachments; WhatsApp when you need a quick ping. You will reach me directly — not a ticketing void.",
  emailCta: {
    label: "Email DanielHwang",
    href: "mailto:click92ec@gmail.com?subject=DevOps%20%2F%20AWS%20%E2%80%94%20hello",
    hint: "Open mail app",
  },
  whatsappCta: {
    label: "Message on WhatsApp",
    href: "https://wa.me/593999999999", // UPDATE YOUR INFO HERE (digits only)
    hint: "WhatsApp",
  },
};

export const finalCta = {
  id: "cta",
  eyebrow: "Next step",
  title: "If the platform work is real, let us talk",
  subtitle:
    "Tell me what is running today, what is breaking trust with stakeholders, and what good looks like in the next quarter. I will reply with an honest take on approach, sequence, and whether I am the right DevOps engineer for it.",
  buttonLabel: "Email me",
  buttonHref:
    "mailto:click92ec@gmail.com?subject=DevOps%20%2F%20cloud%20inquiry%20%E2%80%94%20DanielHwang",
};

export const siteFooter = {
  tagline:
    "DevOps engineer — AWS, Terraform, Kubernetes — building platforms teams can operate without heroics.",
  columns: [
    {
      title: "Navigate",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Work", href: "#work" },
      ],
    },
    {
      title: "Learn more",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Proof", href: "#proof" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  contact: {
    email: {
      label: "Email",
      display: "click92ec@gmail.com", // UPDATE YOUR INFO HERE
      href: "mailto:click92ec@gmail.com",
    },
    whatsapp: {
      label: "WhatsApp",
      display: "0999999999", // UPDATE YOUR INFO HERE
      waMeHref: "https://wa.me/593999999999", // UPDATE YOUR INFO HERE
    },
  },
  social: {
    label: "GitHub",
    handle: "@DanielHwang",
    href: "https://github.com/DanielHwang", // UPDATE YOUR INFO HERE
  },
  copyrightPrefix: "©",
  copyrightOwner: "DanielHwang", // UPDATE YOUR INFO HERE
};

export type ServiceIconKey = (typeof services)[number]["icon"];
