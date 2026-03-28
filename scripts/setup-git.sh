#!/usr/bin/env bash
# Interactive Git identity setup for this workshop. Sets global user.name and/or user.email
# only when they are not already set (skips prompts and writes when both exist).
# Run with bash:  bash scripts/setup-git.sh
# Works on macOS, Linux, and Windows (Git Bash). On Windows, use Git Bash from Git for Windows.

set -euo pipefail

GIT_WINDOWS_URL="https://git-scm.com/download/win"
WINGET_GIT="Git.Git"

say() { printf '%s\n' "$*"; }

kernel="$(uname -s 2>/dev/null || echo unknown)"
case "$kernel" in
  Darwin) os="macOS" ;;
  Linux*) os="Linux" ;;
  MINGW* | MSYS* | CYGWIN*) os="Windows" ;;
  *) os="Unix ($kernel)" ;;
esac

have() { command -v "$1" >/dev/null 2>&1; }

trim() {
  local s="$1"
  s="${s#"${s%%[![:space:]]*}"}"
  s="${s%"${s##*[![:space:]]}"}"
  printf '%s' "$s"
}

if ! have git; then
  say "Git is not installed or not on PATH (detected: $os)."
  say ""
  if [[ "$os" == "Windows" ]]; then
    say "Install Git for Windows, then open Git Bash and run this script again:"
    say "  $GIT_WINDOWS_URL"
    say "  or:  winget install --id $WINGET_GIT -e --accept-source-agreements --accept-package-agreements"
  else
    say "Install Git, then run this script again. Examples:"
    say "  macOS:  xcode-select --install   or   brew install git"
    say "  Debian/Ubuntu:  sudo apt update && sudo apt install -y git"
    say "  Fedora:  sudo dnf install -y git"
  fi
  exit 1
fi

existing_name="$(git config --global user.name 2>/dev/null || true)"
existing_email="$(git config --global user.email 2>/dev/null || true)"

if [[ -n "$existing_name" && -n "$existing_email" ]]; then
  say "Global Git identity is already set. Leaving values unchanged."
  say "  user.name:  $existing_name"
  say "  user.email: $existing_email"
  exit 0
fi

if [[ -n "$existing_name" || -n "$existing_email" ]]; then
  say "Current global Git identity:"
  [[ -n "$existing_name" ]] && say "  user.name:  $existing_name" || say "  user.name:  (not set)"
  [[ -n "$existing_email" ]] && say "  user.email: $existing_email" || say "  user.email: (not set)"
  say ""
fi

set_name=false
set_email=false
[[ -z "$existing_name" ]] && set_name=true
[[ -z "$existing_email" ]] && set_email=true

if $set_name && $set_email; then
  say "Enter the name and email you want on every Git commit (GitHub shows these on your activity)."
  say ""
fi

if $set_name; then
  read -r -p "Your full name: " name
  name="$(trim "$name")"
  if [[ -z "$name" ]]; then
    say "Error: name cannot be empty."
    exit 1
  fi
  git config --global user.name "$name"
fi

if $set_email; then
  read -r -p "Your email (use the one tied to GitHub if you push there): " email
  email="$(trim "$email")"
  if [[ -z "$email" ]]; then
    say "Error: email cannot be empty."
    exit 1
  fi
  if [[ "$email" != *"@"* ]]; then
    say "Warning: email usually contains @. Continuing anyway."
  fi
  git config --global user.email "$email"
fi

say ""
say "Global Git identity:"
say "  user.name  = $(git config --global user.name)"
say "  user.email = $(git config --global user.email)"
