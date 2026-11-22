<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# UI / UX Design Standards (Mandatory)
- **NEVER use oval / pill / rounded-full buttons anywhere**:
  - Do NOT use `rounded-full` for action buttons, button boxes, preset selectors, segmented controls, filter bars, or tabs.
  - Always use modern, crisp rectangular radii: `rounded-lg`, `rounded-xl`, or `rounded-md` with subtle borders (`border-zinc-800`).
  - Only circular avatars (`rounded-full`) and tiny status / notification dot badges may be circular.
  - Interactive boxes, buttons, and presets must NEVER look like ovals or capsules.

# Zero-Cost Deployment Standard (Mandatory)
- **NEVER use Google Cloud Build (`gcloud builds submit`)**:
  - ALWAYS build locally on this Mac.
  - Deploy directly to Vercel for ₹0.
