<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Carolina Collegiate Racing — Project Instructions

## 1. Project Overview

This project is the official website for Carolina Collegiate Racing, a collegiate motorsports organization associated with the University of South Carolina.

The website should be visually distinctive, technically polished, fast, responsive, and easy to maintain.

It will initially serve as a showcase website, with the architecture designed to support dynamic content and external integrations later.

## 2. Technology Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- React
- Git and GitHub for version control
- Vercel for production hosting
- Sanity CMS for future content management

Follow the installed Next.js documentation and existing project conventions. Do not rely on outdated framework patterns.

Do not introduce additional libraries, frameworks, or services without explaining their purpose.

## 3. Design Philosophy

The website should feel like a professionally art-directed motorsports brand, not a generic corporate website or AI-generated template.

The website should use a predominantly dark charcoal aesthetic, with Racing Red (#CC2E40) as the primary visual brand color.

Traditional USC garnet (#73000A) is a secondary supporting color, not the dominant red.

Use white typography for strong contrast. Racing Red should feature prominently in headings, calls to action, navigation states, graphic elements, and major visual compositions.

Do not treat Racing Red as a minor accent color. Follow CCR_COLORS.md for the complete palette and usage guidelines.

### Visual identity
- Primary colors: garnet, black, white, and #CC2E40.
- Use official Carolina Collegiate Racing logos and supplied brand assets.
- Emphasize high-quality racing photography.
- Use expressive typography and deliberate visual hierarchy.
- Favor editorial layouts, asymmetric compositions, and strong visual rhythm.
- Incorporate purposeful motion and subtle interactive details.
- Maintain a consistent design language across all pages.

### Avoid
- Generic SaaS-style layouts.
- Excessive rounded cards and floating panels.
- Unnecessary gradients, glow effects, and decorative elements.
- Generic marketing phrases and exaggerated value statements.
- Repetitive layouts with identical section structures.
- Overly complicated animations that reduce usability or performance.
- Unapproved or invented brand assets.

Design decisions should be justified by visual quality, usability, and brand identity rather than convenience.

### Authoritative Visual Reference

Before implementing or modifying website design, read:

1. `CCR_CONTEXT.md` — Organizational facts, website requirements, and design direction.
2. `CCR_COLORS.md` — Approved color palette and usage rules.
3. `CCR_Sponsorship_Packet_2026-2027_v4.pdf` — Primary visual reference.

The website must follow the sponsorship packet's established design language, including Anton headings, Gilroy body typography, alternating dark/light compositions, Racing Red emphasis, monochrome motorsports photography, and editorial layout principles.

The sponsorship packet takes precedence over earlier website design inspiration.

Preserve all generated Next.js instructions in `AGENTS.md`.

## 4. Development Standards

- Write clean, readable, maintainable TypeScript.
- Use reusable React components where appropriate.
- Prefer React Server Components unless client-side interactivity is required.
- Use semantic HTML and accessible interactions.
- Ensure responsive behavior across desktop, tablet, and mobile devices.
- Optimize images using Next.js image handling where appropriate.
- Avoid unnecessary dependencies.
- Keep data, presentation, and application logic appropriately separated.
- Follow established project conventions.
- Avoid modifying unrelated files.

## 5. AI Agent Workflow

The project owner will primarily direct development through natural-language prompts.

When receiving a task:

1. Inspect the relevant files and understand the existing implementation.
2. Consult installed Next.js documentation when relevant.
3. Identify dependencies and potential conflicts.
4. Implement the requested change without unnecessarily altering other features.
5. Run appropriate validation checks.
6. Summarize the work completed.

For complex architectural changes, explain the proposed approach before implementing it.

For straightforward changes, proceed directly.

### Communication
- Be concise and technically accurate.
- Explain important decisions in accessible language.
- Avoid excessive technical jargon unless necessary.
- Clearly identify assumptions and missing information.
- Do not claim a feature works unless it has been tested.
- Report any failed checks or unresolved problems.

## 6. Content and Brand Integrity

- Never invent team members, sponsors, race results, achievements, or organizational history.
- Use supplied content whenever available.
- Clearly distinguish temporary placeholders from verified information.
- Preserve official logos and their proportions.
- Do not alter third-party sponsor branding without authorization.
- Use appropriate image assets and respect licensing restrictions.

## 7. Dynamic Content Architecture

The initial website may use local structured data.

Future content management should support:
- Team member profiles
- Vehicles and technical specifications
- Sponsors and partnerships
- News and announcements
- Events and race results
- Photography and media

Prefer modular data access patterns so local data can later be replaced by Sanity CMS or external APIs without extensive redesign.

Do not implement a database, authentication system, or CMS until explicitly requested.

## 8. Quality Assurance

After significant changes:
- Run ESLint.
- Run TypeScript validation.
- Verify the production build when appropriate.
- Check responsive behavior.
- Check for broken images, links, and navigation.
- Consider accessibility and performance.
- Report which checks were actually completed.

Do not introduce unrelated changes merely to satisfy a requested feature.

## 9. Security and Deployment

- Never expose private API keys or credentials in client-side code.
- Use environment variables appropriately.
- Never commit secrets or `.env.local` files.
- Avoid destructive terminal commands without explicit approval.
- Do not deploy to production unless requested.
- Preserve Git history and existing project configuration.

## 10. Guiding Principle

Prioritize design quality, maintainability, and precise execution over speed or unnecessary complexity.

The AI agent should function as a capable development partner while preserving the project owner's creative direction and control.
