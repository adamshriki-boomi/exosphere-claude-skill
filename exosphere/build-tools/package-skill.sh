#!/usr/bin/env bash
# package-skill.sh — produce `exosphere.skill` from the current source tree.
#
# Why this wrapper exists:
# The upstream packager (skill-creator's `package_skill.py`) doesn't know about
# this repo's layout. Run it directly against `exosphere/` and it cheerfully
# includes `build-tools/` (~30 MB of scraper code + its node_modules) inside
# the shipped `.skill`. Users don't need any of that. This script stages a
# clean copy of the source with the right exclusions, then invokes the
# packager against the staged copy.
#
# Usage:
#   exosphere/build-tools/package-skill.sh [output-dir]
#     output-dir defaults to the repo root (one level above exosphere/).
#
# Environment:
#   PACKAGE_SKILL_PY   Path to the skill-creator's package_skill.py. If unset,
#                      defaults to the macOS Claude Code plugin cache location
#                      (~/.claude/plugins/marketplaces/...).

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_SRC="$(cd "$HERE/.." && pwd)"          # .../exosphere
REPO_ROOT="$(cd "$SKILL_SRC/.." && pwd)"     # repo root

OUTPUT_DIR="${1:-$REPO_ROOT}"
mkdir -p "$OUTPUT_DIR"
OUTPUT_DIR="$(cd "$OUTPUT_DIR" && pwd)"

DEFAULT_PACKAGER="$HOME/.claude/plugins/marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/scripts/package_skill.py"
PACKAGE_SKILL_PY="${PACKAGE_SKILL_PY:-$DEFAULT_PACKAGER}"

if [[ ! -f "$PACKAGE_SKILL_PY" ]]; then
  echo "[package-skill] ✗ package_skill.py not found at:" >&2
  echo "                  $PACKAGE_SKILL_PY" >&2
  echo "                Install the skill-creator plugin (via Claude Code's plugin marketplace)," >&2
  echo "                or point PACKAGE_SKILL_PY at your copy:" >&2
  echo "                  PACKAGE_SKILL_PY=/path/to/package_skill.py $0 $*" >&2
  exit 1
fi

# The packager does `from scripts.quick_validate import validate_skill`, which
# only resolves when the skill-creator root is on sys.path.
PACKAGE_SKILL_HOME="$(cd "$(dirname "$PACKAGE_SKILL_PY")/.." && pwd)"

if ! python3 -c "import yaml" 2>/dev/null; then
  echo "[package-skill] ✗ python3 can't import yaml; the packager's validator needs it." >&2
  echo "                Run:  python3 -m pip install --user pyyaml" >&2
  exit 1
fi

STAGE="$(mktemp -d -t exo-stage)"
trap 'rm -rf "$STAGE"' EXIT

echo "[package-skill] Source:       $SKILL_SRC"
echo "[package-skill] Staging dir:  $STAGE"
echo "[package-skill] Output dir:   $OUTPUT_DIR"
echo "[package-skill] Packager:     $PACKAGE_SKILL_PY"
echo ""

# Exclusions:
#   build-tools  — this pipeline itself; not user-facing
#   evals        — also excluded by the packager, kept here for parallel layouts
#   node_modules — never ship
#   .DS_Store    — macOS noise
echo "[package-skill] Staging clean skill tree..."
rsync -a \
  --exclude='build-tools' \
  --exclude='evals' \
  --exclude='node_modules' \
  --exclude='.DS_Store' \
  "$SKILL_SRC/" "$STAGE/exosphere/"

echo "[package-skill] Running package_skill.py..."
(
  cd "$PACKAGE_SKILL_HOME"
  python3 -m scripts.package_skill "$STAGE/exosphere" "$OUTPUT_DIR" > /tmp/package-skill.log 2>&1
)
tail -n 3 /tmp/package-skill.log

FINAL="$OUTPUT_DIR/exosphere.skill"
if [[ ! -f "$FINAL" ]]; then
  echo "[package-skill] ✗ expected output at $FINAL but it's missing. Full log:" >&2
  cat /tmp/package-skill.log >&2
  exit 1
fi

SZ="$(wc -c < "$FINAL" | tr -d ' ')"
VERSION="$(python3 -c "import zipfile, json; z=zipfile.ZipFile('$FINAL'); print(json.load(z.open('exosphere/manifest.json'))['skill_version'])")"
echo ""
echo "[package-skill] ✓ wrote $FINAL"
echo "                version: $VERSION   size: $SZ bytes"
