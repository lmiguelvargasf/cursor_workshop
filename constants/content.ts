/**
 * Single source for site copy and structure. Edit here, not scattered in JSX.
 */

export type ServiceIconName = "Code2" | "Layers" | "Rocket";

export const content = {
  brand: "Alejandro Laufer Corella",

  nav: {
    ctaLabel: "View work",
    ctaHref: "#work",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ] as const,
  },

  hero: {
    id: "home",
    /** Full-bleed hero photography — calm desk light, space for headline overlay */
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    imageAlt:
      "Bright open studio workspace with desks and natural light from tall windows",
    headlineParts: [
      { text: "Interfaces that feel ", emphasized: false },
      { text: "fast, calm, and built to last", emphasized: true },
      { text: "—from first sketch to prod traffic.", emphasized: false },
    ] as const,
    subtitle:
      "Frontend-led product development: clear UX, disciplined TypeScript, and UI that still makes sense six months later.",
    primaryCta: { label: "See selected work", href: "#work" },
    secondaryCta: { label: "Start a conversation", href: "#contact" },
    kicker: "Portfolio · Open to collaborations",
  },

  about: {
    id: "about",
    title: "About",
    lead:
      "I sit in the overlap between design sensibility and engineering rigor: predictable states, readable code, and micro-interactions that reinforce trust—not noise.",
    points: [
      {
        title: "How I partner",
        body: "Short feedback loops, written decisions when they matter, and prototypes when words aren’t enough. You get progress you can review, not a black box.",
      },
      {
        title: "What moves the needle",
        body: "Performance budgets, accessible defaults, and component APIs that teammates actually reuse. Craft without bottlenecks.",
      },
      {
        title: "Best fit",
        body: "Teams shipping web products who want someone to own the UI layer end-to-end—layout systems, edge cases, and polish under real data.",
      },
    ] as const,
  },

  services: {
    id: "services",
    title: "What working together unlocks",
    items: [
      {
        icon: "Code2" as const,
        title: "Product-aware delivery",
        description:
          "Scopes tied to user outcomes: skeleton loaders, empty states, and errors treated as part of the journey—not a bug tail three weeks later.",
      },
      {
        icon: "Layers" as const,
        title: "UI systems that scale",
        description:
          "Tokens, composition, and constraints so new screens inherit quality instead of reinventing buttons, spacing, and motion each time.",
      },
      {
        icon: "Rocket" as const,
        title: "Ship with evidence",
        description:
          "Lean bundles, instrumentation where it counts, and handoffs another engineer can pick up—docs in the repo, not buried in chat.",
      },
    ] as const,
  },

  process: {
    id: "process",
    title: "How engagements run",
    subtitle:
      "A simple rhythm so you always know what’s next—no mystery phases or endless decks.",
    steps: [
      {
        label: "Discover",
        title: "Align on outcomes",
        body: "We clarify users, success metrics, constraints, and timeline. If something is fuzzy, we prototype the riskiest assumption first.",
      },
      {
        label: "Shape",
        title: "Design the skeleton",
        body: "Information architecture, key flows, and component boundaries. You get a map of screens and states before we polish pixels.",
      },
      {
        label: "Build",
        title: "Iterate in the product",
        body: "Vertical slices with real data hooks. Every merge is demoable; feedback lands on something tangible, not mockups drifting from reality.",
      },
      {
        label: "Harden",
        title: "Prepare for real traffic",
        body: "Performance passes, accessibility checks, and cleanup of tech debt we introduced along the way—documented so the next milestone is easier.",
      },
    ] as const,
  },

  portfolio: {
    id: "work",
    title: "Selected work",
    subtitle:
      "Snapshots of the kind of problems I like—clarity under complexity, speed without fragility.",
    cases: [
      {
        title: "Ops dashboard refresh",
        tag: "SaaS · React",
        description:
          "Rebuilt dense operational views into a calmer hierarchy: fewer competing accents, consistent filters, and tables that stay scan-friendly on laptops.",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Laptop screen showing analytics charts in a dark interface",
      },
      {
        title: "Onboarding that respects time",
        tag: "Product · Next.js",
        description:
          "Shortened activation by cutting optional fields, progressive disclosure, and optimistic UI where the API allowed—fewer drop-offs without sloppy shortcuts.",
        imageSrc:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Desk with laptop displaying a business analytics workspace",
      },
      {
        title: "Marketing site with spine",
        tag: "Brand · Performance",
        description:
          "A narrative landing stack with one accent, editorial spacing, and images tuned for LCP—built so marketing can iterate copy without breaking layout.",
        imageSrc:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Team collaborating around a laptop in a modern office",
      },
    ] as const,
  },

  testimonials: {
    id: "testimonials",
    title: "Signals from people I’ve shipped with",
    items: [
      {
        quote:
          "Alejandro is the rare engineer who edits copy in the PR when a label would confuse users. Our support tickets on that flow dropped immediately after launch.",
        name: "Marina Ortega",
        role: "Product lead",
        org: "Fin tooling startup",
      },
      {
        quote:
          "He inherited a messy component folder and left us with patterns our juniors could follow. Velocity went up because decisions stopped living in one person’s head.",
        name: "Daniel Köhler",
        role: "Engineering manager",
        org: "B2B workflow platform",
      },
      {
        quote:
          "Our lighthouse scores weren’t vanity—he traced layout shifts to a few lines and fixed the real culprits. The exec dashboard finally felt premium on real devices.",
        name: "Priya N.",
        role: "Design director",
        org: "Enterprise analytics",
      },
    ] as const,
  },

  faq: {
    id: "faq",
    title: "FAQ",
    subtitle: "Straight answers so you don’t have to guess how I work.",
    items: [
      {
        question: "Do you take on maintenance after launch?",
        answer:
          "Yes—either a focused handoff window or ongoing light retainers for tuning, accessibility regressions, and performance as traffic grows.",
      },
      {
        question: "What’s your stack preference?",
        answer:
          "React and TypeScript-first ecosystems (Next.js when it fits). I’m pragmatic about backend touchpoints but strongest owning the UI surface and client architecture.",
      },
      {
        question: "How do you communicate progress?",
        answer:
          "Written updates with demo links, async Loom when visuals help, and a shared board for decisions. No surprise drops before deadlines.",
      },
      {
        question: "Can you work across time zones?",
        answer:
          "I overlap with EU and Americas hours regularly. For deeper collaboration I block core hours for pairing and reviews.",
      },
      {
        question: "What does partnership look like for hiring managers?",
        answer:
          "A short call to confirm fit, a paid trial week when budgets allow, or a scoped pilot milestone—your choice, documented in a one-page scope.",
      },
    ] as const,
  },

  contact: {
    id: "contact",
    title: "Contact",
    lead: "Tell me about the problem, the timeline, and where the UI hurts today. I answer within two business days—often sooner.",
    emailCta: "Email",
    whatsappCta: "WhatsApp",
    responseNote: "If it’s urgent, note it in the subject line.",
  },

  finalCta: {
    id: "hire",
    title: "If this sounds like the craft you need—say hello.",
    subtitle:
      "Share role or project context, links, and the outcomes you’re chasing. I’ll respond with relevant examples and honest availability.",
    buttonLabel: "Email me",
  },

  contactDetails: {
    email: "lauferalejandro@gmail.com",
    emailSubject: "Portfolio inquiry",
    whatsappE164: "593995430209",
    whatsappLabel: "WhatsApp",
  },

  social: {
    linkedin:
      "https://www.linkedin.com/in/alejandro-laufer-corella-3435231b1",
    x: "",
    instagram: "",
  },

  footer: {
    copyright: "Alejandro Laufer Corella",
    rightsSuffix: "All rights reserved.",
    blurb:
      "Frontend craft for teams that care how software feels under load.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Process", href: "#process" },
          { label: "Work", href: "#work" },
        ] as const,
      },
      {
        title: "Connect",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ] as const,
      },
    ] as const,
  },
} as const;

export type SiteContent = typeof content;
