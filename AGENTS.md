# AGENTS.md

## Project Overview
- This is my Personal developer portfolio, I would like to showcase all my projects and work experience

## Goals (Short)
- Fast, clean, mobile-first portfolio focused on hiring outcomes
- Clear navigation: Home, About, Projects, Contact
- Content should be data-driven to reduce JSX duplication

## Content Sources
- Projects data: `src/data/projects.ts`
- Experience data: `src/data/experience.ts`
- Education data: `src/data/education.ts`
- Static assets: `public/images/*`

## Setup Commands
- install dependencies: 'npm i'
- Start dev server: 'npm run dev'

## Code Style
- TypeScript
- Scss

## Conventions
- Prefer functional components with named exports per file
- Prefer data arrays + map over repeated JSX
- Use `Link` from `react-router-dom` for internal routes
- Public assets should use absolute paths: `/images/filename.ext`
- Keep headings in order (h1 -> h2 -> h3)

## Quality Bar
- No console errors or broken routes
- Mobile layout first, then tablet/desktop
- Lighthouse: focus on Accessibility and Performance

## Workflow
1. Review `recommendations.txt` and pick a slice (e.g., navigation + new page).
2. Create/Update data files in `src/data/`.
3. Build or refactor components to consume data.
4. Wire routes and navigation links.
5. Run `npm run dev` and smoke-test pages.
6. Optional: add screenshots to `public/images/` and update data.

## Git
- Branch per task, base `develop`
- Commit per task so changes can be reviewed together
- Provide a concise summary of changes after each task
