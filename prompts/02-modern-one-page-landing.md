# Context
You are an expert Senior Frontend Engineer and UI/UX Designer. Your task is to build a high-conversion, modern, one-page landing page using **React (Next.js App Router)** and **Tailwind CSS**. 

Below is the core information for the page. Please use this data to populate the text and links.

## Project Data
- **Brand/Name:** [INSERT NAME / BUSINESS NAME]
- **Type:** [e.g., Personal Portfolio / Tech Startup / Freelance Service]
- **Main Goal:** [e.g., Generate leads / Showcase projects / Sell a service]
- **Target Audience:** [e.g., Tech Founders / Local Businesses / Recruiters]
- **Primary CTA:** [e.g., Book a Call / View My Work / Contact Me]
- **Email:** [INSERT EMAIL]
- **WhatsApp:** [INSERT WHATSAPP OR DELETE]
- **Social Links:** [INSERT LINKEDIN / X / INSTAGRAM]

---

## 1. Architecture & Global State
Instead of hardcoding the data throughout the components, **first create a `constants/content.ts` file**. 
Store all the project data, copy, and links in this file. Every component must import its text and links from this configuration object so I can easily update my site later in one place. Add comments like `// UPDATE YOUR INFO HERE`.

## 2. Tech Stack & Design System
- **Framework:** Next.js (App Router) & Tailwind CSS.
- **Icons:** Use `lucide-react`.
- **Animations:** Use `framer-motion` for subtle entrance animations (e.g., fade up on scroll).
- **Typography:** Modern, clean sans-serif (Inter, Geist, or similar).
- **Aesthetic:** Clean, high-whitespace "SaaS" or "Premium Portfolio" aesthetic. Use a refined color palette (subtle grays/zinc for backgrounds, and a high-contrast color for primary buttons). 

## 3. Section Requirements
Build the page with the following 5 modular components in this exact order:

### 1. Header & Navigation
- Sticky header with a glassmorphism effect (`backdrop-blur`).
- Left side: Brand/Name.
- Right side: Primary CTA button.

### 2. Hero Section
- Large, impactful `H1` headline (use a subtle gradient on key words).
- A persuasive subheadline explaining the value proposition.
- Two buttons: Primary CTA (solid background, hover scale effect) and a Secondary CTA (outline or ghost).
- Ensure the layout is visually balanced and centered or split-screen.

### 3. About / Mission
- A simple, clean section explaining who I am or what the project does.
- Avoid walls of text. Use a two-column layout or a highly readable, narrow text block.

### 4. Services / Value Grid
- A 3-column "Bento-box" or card grid.
- Each card must include: a `lucide-react` icon, a bold title, and a short description of the benefit/service.
- Add a subtle border highlight or lift effect on hover.

### 5. Final CTA & Footer
- A high-contrast strip (e.g., dark background) to break the scroll and make a final push for the Primary CTA.
- A clean footer containing: Email, WhatsApp link, Social Icons, and a copyright notice.

## 4. Technical Rules
- **Responsive Design:** The layout must be flawless on mobile (`px-4`, stacked columns) and desktop (`max-w-7xl`, `md:grid-cols-3`).
- **Clean Code:** Separate sections into their own functional components within a `components/` folder.
- **Placeholder Copy:** Do NOT use "Lorem Ipsum." Generate realistic, professional placeholder copy based on the "Type" and "Target Audience" provided above.

## 5. Execution Instructions for the AI (CRITICAL)
- **Zero Assumptions:** If any of the above instructions are ambiguous, if crucial information is missing, or if there are conflicting dependencies, **STOP and ask me the necessary questions** before you begin generating code or planning the structure.
- Show me the step-by-step plan first and wait for my confirmation before writing any files.