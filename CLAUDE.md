# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

This is `jeffersonrfdantas/jeffersonrfdantas` — a GitHub "profile README" repository. Because the repo name matches the account username, GitHub renders `README.md` directly on the user's public profile page (https://github.com/jeffersonrfdantas). It is not a software project: there is no build system, package manifest, linter, or test suite, and none should be assumed or added unless explicitly requested.

## Current state of README.md

`README.md` does not currently contain profile markdown (bio, badges, stats, etc.). Instead, it holds a raw Python script (using the `turtle` module) that draws a simple family scene, with in-code comments in Portuguese. The script references an external image, `forest_background.gif`, which is not present in the repository.

Because this file is rendered as Markdown on the GitHub profile, the Python code is **not** wrapped in a fenced code block — so as-is it displays as broken/garbled plain text on the profile page rather than as a bio or as formatted code.

When making changes here, keep this in mind:
- If the goal is a working profile page, `README.md` needs actual Markdown content (or the Python script wrapped in a ```` ```python ... ``` ```` fence if the intent is to showcase the snippet).
- If the goal is to keep/fix the turtle-graphics script, treat it as a standalone Python file: it depends only on the standard-library `turtle` module and expects `forest_background.gif` to exist alongside it when run locally (`python README.md` won't work directly since the extension is `.md`; the code would need to live in a `.py` file to execute).
- Do not invent additional project structure (src directories, configs, CI, etc.) — this repository intentionally has a single file.
