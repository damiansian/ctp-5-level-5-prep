# CTP-5-LEVEL-5

CTP-5-LEVEL-5 is the 2026 Level 5 practice and analysis project for turning paper-based assessment questions into a deeper digital learning experience for a child.

Live app: https://ctp-5-level-5.vercel.app/

The app is designed to help a parent scan questions from printed practice materials, analyze what each item is really measuring, classify the psychometric skill being assessed, and build additional targeted practice beyond the limited paper set. The goal is not only to help a student answer more questions correctly, but to unpack the purpose of each question, identify areas that need support, and create a calmer, more confidence-building path into test preparation.

## Product Vision

This project exists to decode assessment questions so a child can prepare with clarity instead of fear.

Paper practice tests often hide their real intent. A single question may be measuring vocabulary in context, inferential reading, quantitative reasoning, sentence control, or another underlying skill. This app is meant to make that hidden structure visible, so the parent and child can understand:

- why a question is being asked
- what psychometric assessment or skill it is targeting
- what pattern of thinking is expected
- where support is needed
- how to generate more practice questions that train the same ability

The intended outcome is precise, supportive preparation for a highly capable child who experiences test anxiety. The app should make practice feel more understandable, more targeted, and less emotionally overwhelming.

## Core Experience

- Capture questions from paper assessments and enter them into the app
- Classify each question by category, subtheme, and psychometric purpose
- Explain the reasoning behind the question and what it is assessing
- Provide immediate feedback and progressive hints
- Track performance to reveal strengths and support needs
- Build or author similar custom questions for additional practice
- Create a stable, child-friendly experience that supports confidence

## This Year's Workflow

This repo is the working space for the current year's paper materials. The intended sequence is:

- collect and organize scanned paper items
- preserve raw originals before any processing
- prefer searchable OCR PDFs over page photos whenever possible
- use AI-assisted drafting plus OCR verification instead of manual transcription whenever possible
- convert source material into structured question data in small testable batches
- identify the psychometric purpose of each item
- add hints, feedback, and parent-readable interpretation
- build similar custom practice from the analyzed source material
- use the app to reveal areas needing support and build confidence before testing

## Practical Intake Method

The workflow used in this project has become more concrete through Writing Mechanics and Mathematics work:

- Keep iPhone originals as raw source files, including `.heic` if that is the capture format.
- Create tool-friendly working copies such as `.png` only when needed.
- For OCR-heavy sections, searchable PDFs are the preferred source.
- If both exist, use sources in this priority order:
  - structured AI/Claude markdown draft as the primary drafting source
  - searchable OCR PDF as the verification source
  - plain OCR text as a backup search/reference source only
- Avoid manual transcription unless the workflow truly cannot recover the content efficiently.
- Work in batches small enough to QA in the app before continuing.

## Handling Different Question Types

Not all sections should be processed the same way.

- Text-first questions can be added directly from the normalized draft.
- Figure-dependent questions should keep or recreate the visual stimulus in the app.
- When full math rendering is not worth the complexity, use lightweight HTML/CSS display for fractions, superscripts, repeating decimals, and simple tables.
- For diagrams or charts, prefer project-local assets in `public/` so the app does not depend on external services at runtime.

## Current Progress

The current repo already reflects two full intake passes:

- Writing Mechanics: complete through Question 60
- Mathematics: complete through Question 48

Those sections established the current house workflow for:

- source organization
- OCR verification
- figure handling
- in-app QA loops
- child-friendly hints and feedback

## Current Technical Direction

- Frontend: React + TypeScript with Vite
- Architecture: client-side SPA with static TypeScript data
- State management: local React state
- Data model: structured question and hint definitions in `src/data`
- Backend: none currently
- Math rendering: lightweight HTML/CSS first, with selective MathJax support only where it is worth the complexity

## Design Principles

- Child-friendly and low-stress
- Psychometrically informed, not just answer-key driven
- Accessible and WCAG-conscious
- Stable visual layout to reduce discomfort and motion sensitivity
- Parent-assisted authoring and interpretation
- Built to expand beyond the original paper materials

## Deployment Notes

- Vercel and GitHub deployment work well for this repo.
- On Hobby plans, Vercel can block deployments if the latest commit author is not associated with the GitHub account that owns the repo.
- For this repo, commits intended for deployment should use the GitHub identity rather than an enterprise Git identity.
