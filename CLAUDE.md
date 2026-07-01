# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This repository currently contains a single file: `README.md`. Despite the
`.md` extension, its entire content is a raw Python script (no Markdown
formatting or code fences) that uses the `turtle` module to draw a simple
scene: a two-person "family" plus a dog, over a background image.

There is no build system, package manifest, test suite, linter, or CI
configuration in this repo — running any test/lint/build command will fail
because none exist.

## Running the script

The script is standard-library only (`turtle`), so no dependencies need to
be installed. Because the actual Python source lives inside `README.md`,
running it requires extracting it first, e.g.:

```bash
python3 README.md
```

works on POSIX systems since `python3` doesn't care about file extension,
but for clarity you may want to copy/rename it to a `.py` file before
running or editing:

```bash
cp README.md family.py
python3 family.py
```

Note: the script calls `turtle.bgpic("forest_background.gif")`, but no such
image file exists in the repository. The script will raise an error (or
turtle will fail to set the background) unless that GIF is created/added
alongside the script before running it.

## Conventions to be aware of

- Comments and variable/function intent in the script are written in
  Portuguese (e.g. `Cabeça`, `Braço esquerdo`, `Perna direita`); follow this
  language convention if extending the same script rather than mixing in
  English comments.
- If this repository grows into a real project (e.g. adding a proper
  package structure, tests, or a build/lint toolchain), update this file to
  document the new commands and architecture rather than leaving this
  minimal-state description in place.
