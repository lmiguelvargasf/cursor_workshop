export const landingContent = {
  brand: {
    name: "Mac Mixer",
    tag: "Per-app audio control for macOS",
  },
  repository: {
    owner: "pepefeliblu",
    name: "mac-mixer",
    defaultBranch: "master",
    repoUrl: "https://github.com/pepefeliblu/mac-mixer",
    repoGitUrl: "https://github.com/pepefeliblu/mac-mixer.git",
    releasesUrl: "https://github.com/pepefeliblu/mac-mixer/releases/latest",
    issuesUrl: "https://github.com/pepefeliblu/mac-mixer/issues",
  },
  contact: {
    email: "dev.rueda@hotmail.com",
    location: "Remote-friendly | UTC-5",
    responseTime: "Replies within 1 business day",
    linkedin: "https://www.linkedin.com/in/dev-rueda/",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Open-source utility for focused Mac workflows",
    title: "Control every app's volume without breaking your flow.",
    description:
      "Mac Mixer gives you precise, per-app volume control from your menu bar, so meetings stay clear, music stays in the background, and interruptions stop eating your attention.",
    primaryCtaLabel: "Download latest release",
    secondaryCtaLabel: "View source on GitHub",
    proofPoints: [
      "Menu bar-first experience with near-zero setup friction",
      "Built for remote workers, creators, and multitaskers",
      "Transparent open-source roadmap and issue tracking",
    ],
  },
  about: {
    title: "Why teams and creators adopt Mac Mixer",
    subtitle:
      "Most audio interruptions are tiny, frequent, and expensive for deep work. Mac Mixer solves them in seconds.",
    paragraphs: [
      "macOS still treats sound as one global knob, but modern work involves calls, browser tabs, background music, and recording tools all at once. Mac Mixer separates those channels so you can prioritize what matters right now.",
      "The app is intentionally lightweight: it launches fast, sits quietly in your menu bar, and gives instant control when you need it. No bloated dashboard, no learning curve, just predictable audio control.",
    ],
    stats: [
      { label: "Setup time", value: "Under 2 minutes" },
      { label: "Workflow impact", value: "Fewer call interruptions" },
      { label: "Contribution model", value: "Open-source on GitHub" },
    ],
  },
  services: {
    title: "What you can do with Mac Mixer",
    subtitle: "Three practical capabilities that make audio management feel effortless.",
    items: [
      {
        icon: "Volume2",
        title: "Mix apps independently",
        description:
          "Lower Spotify, boost your browser call, and mute distracting tabs without touching system-wide output.",
        bullets: [
          "Fine-grained level adjustments per active app",
          "No need to jump across multiple system menus",
        ],
      },
      {
        icon: "Gauge",
        title: "Adjust audio instantly from the menu bar",
        description:
          "Open, tweak, and continue your task in seconds with a layout optimized for speed and clarity.",
        bullets: [
          "Always one click away in your top bar",
          "Fast interactions built for frequent micro-adjustments",
        ],
      },
      {
        icon: "ShieldCheck",
        title: "Build with confidence in open source",
        description:
          "Review the codebase, propose features, and follow roadmap discussions in a transparent public repository.",
        bullets: [
          "Public issues and release history",
          "Community-friendly contribution flow",
        ],
      },
    ],
  },
  process: {
    title: "How it works",
    subtitle: "From install to daily use, the workflow stays straightforward.",
    steps: [
      {
        title: "Install in minutes",
        description:
          "Download the latest release and launch Mac Mixer once. It integrates into your menu bar and stays ready.",
      },
      {
        title: "View active app channels",
        description:
          "Mac Mixer detects your running apps and exposes individual sliders so each source can be controlled independently.",
      },
      {
        title: "Tune your session live",
        description:
          "Balance calls, music, and productivity tools on the fly without interrupting your current task.",
      },
      {
        title: "Iterate with community updates",
        description:
          "Track improvements in releases and issues, then upgrade when new capabilities align with your workflow.",
      },
    ],
  },
  testimonials: {
    title: "Trusted by people who live in multitasking mode",
    items: [
      {
        quote:
          "Mac Mixer fixed one of my biggest daily frustrations. I can keep client calls clear while background music stays exactly where I want it.",
        name: "Laura M.",
        role: "Freelance Product Designer",
      },
      {
        quote:
          "The menu bar workflow is perfect. I adjust audio in two clicks and jump straight back into coding or meetings.",
        name: "Daniel R.",
        role: "Senior Frontend Engineer",
      },
      {
        quote:
          "I recommend it to every remote teammate on Mac. It removes small interruptions that add up across the week.",
        name: "Jenna K.",
        role: "Operations Lead, SaaS Team",
      },
    ],
  },
  portfolio: {
    title: "Real usage scenarios",
    subtitle: "Examples of where Mac Mixer adds immediate value.",
    items: [
      {
        title: "Remote Standups",
        situation:
          "During daily standups, engineers often need browser call audio louder than ambient music or notification sounds.",
        result:
          "Mac Mixer keeps communication clear while preserving focus, reducing repeated 'can you repeat that?' moments.",
      },
      {
        title: "Content Recording Sessions",
        situation:
          "Creators recording tutorials need microphone monitoring, reference audio, and system sounds all at balanced levels.",
        result:
          "Per-app controls prevent accidental audio spikes and produce cleaner recordings with less post-edit cleanup.",
      },
      {
        title: "Deep Work Blocks",
        situation:
          "Knowledge workers switch between research tabs, task tools, and timed focus playlists throughout the day.",
        result:
          "Mac Mixer enables quiet background context without letting any single app break concentration.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Does Mac Mixer replace macOS system volume?",
        answer:
          "No. macOS system volume still works as usual. Mac Mixer adds per-app controls so you can fine-tune each source independently.",
      },
      {
        question: "Is Mac Mixer free to use?",
        answer:
          "Yes. It is open-source and available through GitHub releases. You can use it, inspect the code, and contribute improvements.",
      },
      {
        question: "Who is Mac Mixer built for?",
        answer:
          "It is especially useful for remote professionals, streamers, creators, and anyone frequently running multiple audio apps.",
      },
      {
        question: "Where can I request features or report bugs?",
        answer:
          "Use the GitHub Issues page to report problems, suggest features, and follow progress on planned updates.",
      },
    ],
  },
  cta: {
    title: "Ready for cleaner, calmer audio sessions on macOS?",
    description:
      "Install the latest release and start controlling every app's volume with the precision your workflow deserves.",
    primaryButtonLabel: "Download latest release",
    secondaryButtonLabel: "Report an issue",
  },
  footer: {
    copyright: "Mac Mixer",
    links: [
      { label: "GitHub Repository", href: "https://github.com/pepefeliblu/mac-mixer" },
      { label: "Latest Release", href: "https://github.com/pepefeliblu/mac-mixer/releases/latest" },
      { label: "Issue Tracker", href: "https://github.com/pepefeliblu/mac-mixer/issues" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-rueda/" },
    ],
  },
} as const;

export type LandingContent = typeof landingContent;
