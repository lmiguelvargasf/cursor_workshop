# Cursor Workshop

This repository contains the practice project for the workshop.

You will open it in **Cursor** and make small changes step by step during the session, with support from the facilitator.

You do **not** need to be a programmer to participate.

## What is Cursor?

**Cursor** is an editor with built-in AI.

In the workshop, you will use it to open this project, describe changes in simple language, and update the website little by little.

## Before you start

You need:

1. **This project on your computer**  
   Your facilitator will show you how to get it.

2. **Node.js installed**  
   Download it here if you do not already have it: [Node.js (LTS)](https://nodejs.org/)

If you are unsure whether everything is ready, ask a helper.

## Run the project

Open a terminal in the main folder of this project, then run:

```bash
npm install
```

After that, run:

```bash
npm run dev
```

Then open:

[http://localhost:3000](http://localhost:3000)

When you save changes, the page will usually update automatically.

## The command you will usually use

After the first setup, most of the time you will only need:

```bash
npm run dev
```

## Project notes

This project uses a few modern web tools:

* **Next.js** for the website
* **React** for the interface
* **TypeScript** for the code structure
* **Tailwind CSS** for styling

You do not need to understand these tools before the workshop.

## Main files

* `app/page.tsx` → main page
* `app/globals.css` → shared styles
