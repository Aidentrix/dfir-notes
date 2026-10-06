# DFIR Journey

Practical DFIR notes, reproducible labs, and forensic artifact analysis.

This repository is the public, curated layer of my DFIR study work. It is intentionally evidence-first: conclusions should be traceable to the artifact, the relevant structure, the observed value, and the validation method.

## Stack

- Fumadocs
- Next.js static export
- shadcn/ui design tokens
- Tailwind CSS
- GitHub Pages

The documentation UI uses Fumadocs' documentation shell with shadcn-style design tokens, including a left navigation tree, page table of contents, search, and light/dark themes.

## Local development

~~~bash
npm install
npm run dev
~~~

Open http://localhost:3000.

## Validation

~~~bash
npm run typecheck
npm run build
~~~

The production build is exported to out/.

## Training scope

Laboratory exercises use public or otherwise authorized training data. They are educational analyses and are not presented as real-world investigative casework.
