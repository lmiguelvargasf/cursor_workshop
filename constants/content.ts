// Central site copy and links — import this from components only.
// UPDATE YOUR INFO HERE when your details change.

export const site = {
  title: "DanielHwang — Portfolio",
  description:
    "Personal portfolio: how I build with Cursor, ship interfaces, and stay in touch.",
};

export const brand = {
  name: "DanielHwang", // UPDATE YOUR INFO HERE (display name)
};

export const nav = {
  primaryCta: {
    label: "Contact Me",
    // UPDATE YOUR INFO HERE (your email)
    href: "mailto:click92ec@gmail.com?subject=Hello%20from%20your%20portfolio",
  },
};

export const hero = {
  headlineBefore: "I design and ship ",
  // Gradient emphasis — keep this phrase short for best line breaks
  headlineGradient: "thoughtful web experiences",
  headlineAfter: " — with Cursor in the loop.",
  subheadline:
    "This page is my home base: a calm, fast snapshot of how I work, what I care about in product UI, and the easiest way to reach me when you want to collaborate.",
  primaryCta: {
    label: "Contact Me",
    href: "mailto:click92ec@gmail.com?subject=Hello%20from%20your%20portfolio", // UPDATE YOUR INFO HERE
  },
  secondaryCta: {
    label: "About me",
    href: "#about",
  },
};

export const about = {
  title: "About & mission",
  lead:
    "I am a frontend-focused builder who likes clarity, momentum, and tools that get out of the way.",
  body:
    "Cursor is part of my daily workflow: it helps me iterate faster, explore alternatives, and keep polish high without burning time on boilerplate. This portfolio exists as a simple, honest reference for people who want to see how I think — and as a playground to keep learning in public.",
};

export const servicesSection = {
  title: "How I can help",
  intro:
    "Three focus areas — packaged so you know what you get on day one.",
};

export const services = [
  {
    icon: "Sparkles" as const,
    title: "Interface craft",
    description:
      "Layouts, typography, and motion that feel intentional — readable on mobile, confident on desktop.",
  },
  {
    icon: "Code2" as const,
    title: "Frontend delivery",
    description:
      "Modern React and Next.js patterns, accessible markup, and components you can evolve without regret.",
  },
  {
    icon: "MessageSquare" as const,
    title: "Collaboration",
    description:
      "Clear async updates, tight feedback loops, and a bias toward shipping something you can react to early.",
  },
];

export const footer = {
  finalCta: {
    title: "Want to work together?",
    subtitle:
      "Tell me what you are building — a quick note is enough. I will get back with next steps.",
    buttonLabel: "Contact Me",
    // UPDATE YOUR INFO HERE
    buttonHref:
      "mailto:click92ec@gmail.com?subject=Hello%20from%20your%20portfolio",
  },
  contact: {
    email: {
      label: "Email",
      display: "click92ec@gmail.com", // UPDATE YOUR INFO HERE
      href: "mailto:click92ec@gmail.com",
    },
    whatsapp: {
      label: "WhatsApp",
      // UPDATE YOUR INFO HERE — replace with your real number (display)
      display: "0999999999",
      // UPDATE YOUR INFO HERE — use full international digits only (no +, no spaces) for wa.me
      // Example Ecuador mobile: country 593 + 9XXXXXXXX without leading 0
      // UPDATE YOUR INFO HERE — wa.me needs country code + number, digits only
      waMeHref: "https://wa.me/593999999999",
    },
  },
  social: {
    label: "GitHub",
    handle: "@DanielHwang",
    // UPDATE YOUR INFO HERE if your username differs
    href: "https://github.com/DanielHwang",
  },
  /** Appended with current year in the component */
  copyrightPrefix: "©",
  copyrightOwner: "DanielHwang", // UPDATE YOUR INFO HERE
};

export type ServiceIconKey = (typeof services)[number]["icon"];
