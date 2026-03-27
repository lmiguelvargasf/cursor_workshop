# Environment setup (facilitators & helpers)

Use this page when you need to **check** or help **fix** attendees’ **Node.js**, **Git**, and **npm** before or during the workshop. It documents the same flow as the short [README](README.md) prerequisites, plus copy-paste steps for `scripts/check-setup.sh` and `scripts/setup-git.sh`.

## Before you run anything

1. **Fork on the attendee’s GitHub account.** While signed in as the **attendee**, open this workshop repo on GitHub and use **Fork** so a copy exists under **their** username (or org). They need their **own** fork to **push** changes and to **publish on Vercel**, which imports a GitHub repo from the account you connect. If they only **clone** the original upstream repo and never fork, they usually **cannot push** to that remote and **Vercel** will not be set up against a repo they control the way the workshop expects.

2. **Clone the fork**, not the upstream repo. Example (replace the owner with their GitHub username and the repo name if they renamed the fork):  
   `git clone https://github.com/THEIR_USERNAME/cursor_workshop.git`  
   Facilitators can also work from a machine that already has that attendee’s fork checked out.

3. Open a terminal and **`cd`** into the **project root** (the folder that contains `package.json`).

4. Run the commands below for **the attendee’s** operating system.

### macOS

Use **Terminal** (or any shell where `bash` is available).

Check only (prints what is missing):

```bash
bash scripts/check-setup.sh
```

Try to install missing tools with **Homebrew** when `brew` is available (optional):

```bash
bash scripts/check-setup.sh --install
```

### Linux

Use a normal terminal (or **WSL** if that is where development happens).

Check only:

```bash
bash scripts/check-setup.sh
```

With `--install` (optional): the script **does not** run `apt`, `dnf`, or `sudo` for you—it only prints distro-appropriate hints.

```bash
bash scripts/check-setup.sh --install
```

### Windows

The script must run under **bash**. Use **one** of these environments (plain **Command Prompt** or **PowerShell** will **not** work unless you are inside **WSL**):

- **Git Bash** — install [Git for Windows](https://git-scm.com/download/win), open **Git Bash** from the Start menu, then `cd` to the project (paths look like `/c/Users/you/.../cursor_workshop`).
- **WSL** — open the Linux distro, `cd` to the repo (often `/mnt/c/Users/you/.../cursor_workshop`).

Check only:

```bash
bash scripts/check-setup.sh
```

Try **winget** for missing **Node** or **Git** (optional; may ask for elevation; open a **new** terminal afterward):

```bash
bash scripts/check-setup.sh --install
```

## Configure Git (name and email)

Use this so commits show the right **name** and **email** (and GitHub can link commits to an account when the email matches). It runs `git config --global user.name` and `user.email`; pushing to GitHub still needs a one-time sign-in (HTTPS, SSH, or `gh auth login`).

**Same folder and terminal rules as above:** `cd` to the **project root** (folder with `package.json`). The script must run under **bash**—**Terminal** on macOS, a normal terminal or **WSL** on Linux, and on Windows **Git Bash** or **WSL** (not plain Command Prompt or PowerShell unless you are inside WSL).

Copy and paste:

```bash
bash scripts/setup-git.sh
```

Follow the prompts. If Git is not installed yet, install it first (see the hints printed by `bash scripts/check-setup.sh` or use **Git for Windows** on Windows), then run the command again.
