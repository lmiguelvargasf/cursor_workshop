#!/usr/bin/env bash
# Checks Node.js (v24.x) and Git for this workshop. Works on macOS, Linux, and Windows (Git Bash).
# Optional: bash scripts/check-setup.sh --install
#   Unix: nvm + Node 24. Windows: fnm + Node 24; Git via winget (Windows) / Homebrew (macOS, if present).

set -u

NVM_VERSION="0.40.4"
NODE_NVM_MAJOR="24"
WINGET_FNM="Schniz.fnm"

NODEJS_URL="https://nodejs.org/en/download/"
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

INSTALL=false
for a in "$@"; do [[ "$a" == "--install" ]] && INSTALL=true; done

have() { command -v "$1" >/dev/null 2>&1; }

node_ver() { have node && node --version 2>/dev/null | head -n1 | tr -d '\r\n' || true; }
git_ver() { have git && git --version 2>/dev/null | head -n1 | tr -d '\r' || true; }

sync_node_ok() {
  nv="$(node_ver)"
  if [[ -z "$nv" ]]; then node_ok=false; return; fi
  local maj="${nv#v}"
  maj="${maj%%.*}"
  [[ "$maj" == "$NODE_NVM_MAJOR" ]] && node_ok=true || node_ok=false
}

try_winget() {
  # Git Bash often does not put WindowsApps on PATH; try several wrappers Windows ships with.
  local id="$1"
  local wg="" ex=0

  if have winget.exe; then
    winget.exe install --id "$id" -e --accept-source-agreements --accept-package-agreements
    return $?
  fi
  if have winget; then
    winget install --id "$id" -e --accept-source-agreements --accept-package-agreements
    return $?
  fi

  if [[ -n "${LOCALAPPDATA:-}" ]] && have cygpath; then
    wg="$(cygpath -u "$LOCALAPPDATA" 2>/dev/null)/Microsoft/WindowsApps/winget.exe"
    if [[ -x "$wg" ]]; then
      MSYS2_ARG_CONV_EXCL='*' "$wg" install --id "$id" -e --accept-source-agreements --accept-package-agreements
      return $?
    fi
  fi

  if have cmd.exe; then
    MSYS2_ARG_CONV_EXCL='*' cmd.exe //c "winget install --id $id -e --accept-source-agreements --accept-package-agreements"
    ex=$?
    [[ $ex -eq 0 ]] && return 0
  fi

  if have powershell.exe; then
    MSYS2_ARG_CONV_EXCL='*' powershell.exe -NoProfile -ExecutionPolicy Bypass -Command \
      "winget install --id $id -e --accept-source-agreements --accept-package-agreements"
    return $?
  fi
  return 1
}

try_unix_nvm_node() {
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  local nvm_sh="$NVM_DIR/nvm.sh"
  if [[ ! -s "$nvm_sh" ]]; then
    say "Installing nvm v${NVM_VERSION}..."
    curl -fsSL "https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh" | bash || return 1
  fi
  if [[ ! -s "$nvm_sh" ]]; then
    return 1
  fi
  # shellcheck source=/dev/null
  . "$nvm_sh"
  say "Installing Node.js ${NODE_NVM_MAJOR} via nvm..."
  nvm install "${NODE_NVM_MAJOR}" || return 1
  nvm alias default "${NODE_NVM_MAJOR}" >/dev/null 2>&1 || true
  nvm use default >/dev/null 2>&1 || nvm use "${NODE_NVM_MAJOR}" >/dev/null 2>&1 || true
  return 0
}

try_windows_fnm_node() {
  local fnm_bin=""

  resolve_fnm() {
    fnm_bin=""
    if have fnm; then fnm_bin="$(command -v fnm)"; return 0; fi
    if have fnm.exe; then fnm_bin="$(command -v fnm.exe)"; return 0; fi
    return 1
  }

  if ! resolve_fnm; then
    say "Installing fnm via winget..."
    try_winget "$WINGET_FNM" || return 1
    hash -r 2>/dev/null || true
  fi
  if ! resolve_fnm; then
    return 1
  fi

  # shellcheck disable=SC2091
  eval "$("$fnm_bin" env --use-on-cd --shell bash)"
  say "Installing Node.js ${NODE_NVM_MAJOR} via fnm..."
  "$fnm_bin" install "${NODE_NVM_MAJOR}" || return 1
  "$fnm_bin" default "${NODE_NVM_MAJOR}" 2>/dev/null || true
  # shellcheck disable=SC2091
  eval "$("$fnm_bin" env --use-on-cd --shell bash)"
  return 0
}

nv=""
node_ok=false
sync_node_ok
gv="$(git_ver)"
[[ -n "$gv" ]] && git_ok=true || git_ok=false

if $INSTALL && [[ "$os" == "Windows" ]]; then
  winget_tried=false
  if ! $node_ok; then
    try_windows_fnm_node || true
    winget_tried=true
    sync_node_ok
  fi
  if ! $git_ok; then try_winget "$WINGET_GIT" || true; winget_tried=true; fi
  sync_node_ok
  gv="$(git_ver)"
  [[ -n "$gv" ]] && git_ok=true || git_ok=false
  if $winget_tried; then say "If winget or fnm installed anything, open a new terminal and run this script again."; fi
fi

if $INSTALL && [[ "$os" == "macOS" ]]; then
  if ! $node_ok; then
    try_unix_nvm_node || true
    sync_node_ok
    if $node_ok; then
      say "If nvm or Node were just installed, open a new terminal or run:  . \"\$HOME/.nvm/nvm.sh\""
    fi
  fi
  if ! $git_ok && have brew; then
    brew install git || true
    gv="$(git_ver)"
    [[ -n "$gv" ]] && git_ok=true || git_ok=false
    say "If Homebrew just installed Git, you may need a new terminal window."
  fi
fi

if $INSTALL && [[ "$os" == "Linux" ]]; then
  if ! $node_ok; then
    try_unix_nvm_node || true
    sync_node_ok
    if $node_ok; then
      say "If nvm or Node were just installed, open a new terminal or run:  . \"\$HOME/.nvm/nvm.sh\""
    fi
  fi
fi

say ""
say "Workshop setup check — detected: $os (Node.js v${NODE_NVM_MAJOR}.x required)"
say ""
if [[ -z "$nv" ]]; then
  say "  Node.js: not found"
elif $node_ok; then
  say "  Node.js: OK — $nv"
else
  say "  Node.js: wrong version — $nv (need v${NODE_NVM_MAJOR}.x)"
fi
if $git_ok; then say "  Git:     OK — $gv"; else say "  Git:     not found"; fi
say ""

if $node_ok && $git_ok; then
  say "You are ready:  npm install  &&  npm run dev"
  exit 0
fi

say "Install what is missing, then run this script again."
say ""
if ! $git_ok; then
  if [[ "$os" == "Windows" ]]; then
    say "Git:  $GIT_WINDOWS_URL"
    say "      or:  winget install --id $WINGET_GIT -e --accept-source-agreements --accept-package-agreements"
  else
    say "Git:  macOS: xcode-select --install   or   brew install git"
    say "      Debian/Ubuntu: sudo apt update && sudo apt install -y git"
    say "      Fedora: sudo dnf install -y git"
  fi
  say ""
fi

if ! $node_ok; then
  say "Node.js v${NODE_NVM_MAJOR}.x: $NODEJS_URL"
  if [[ "$os" == "macOS" || "$os" == "Linux" ]]; then
    say "      nvm:  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash"
    say "            . \"\$HOME/.nvm/nvm.sh\"  &&  nvm install ${NODE_NVM_MAJOR}"
  fi
  if [[ "$os" == "Windows" ]]; then
    say "      fnm:  winget install $WINGET_FNM"
    say "            eval \"\$(fnm env --use-on-cd --shell bash)\"  &&  fnm install ${NODE_NVM_MAJOR}  &&  fnm default ${NODE_NVM_MAJOR}"
  fi
fi

if [[ "$os" == "Windows" ]]; then
  say ""
  say "Tip: use Git Bash (from Git for Windows) or WSL so bash is available."
fi
exit 1
