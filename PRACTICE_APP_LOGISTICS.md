# Practice App Logistics

This project is now best treated as the source-analysis app.

Its job:
- preserve the original paper-test questions
- analyze what each item measures
- identify weak spots and performance patterns
- serve as the source of truth for authoring future practice

The new app should be a separate repo.

Its job:
- give Holly fresh questions
- target specific weak skills
- track whether she improves on similar item types
- avoid answer-memory contamination from the original test set

## Recommended Structure

Keep this repo:
- `CTP-5-LEVEL-5`
- role: paper test analysis and source archive

Create new repo:
- working name: `CTP-5-LEVEL-5-PRACTICE`
- role: targeted practice and progress tracking

## Why A Separate Repo

A separate repo keeps these concerns cleanly separated:

- original source questions vs fresh authored questions
- analysis of baseline performance vs intervention practice
- answer review vs skill-growth measurement
- archival fidelity vs iterative practice design

## What Stays Here

Keep these in this repo:

- paper-test question data
- source scans and OCR artifacts
- psychometric classification work
- baseline paper-test performance summaries
- notes about what each original item is measuring

## What Moves To The New App

The practice repo should contain:

- newly authored questions
- skill tags derived from paper-test analysis
- practice-session results
- progress views based on fresh attempts
- minimal references back to source item families, not full original answers

## Minimum Data Flow

The flow should be:

1. Paper test performance reveals a weak area.
2. This repo maps that weakness to a skill or performance factor.
3. The new repo contains fresh questions for that factor.
4. Holly works those fresh questions.
5. The new repo tracks whether performance improves on first-attempt unseen items.

## Immediate Next Logistics

1. Finish the performance-factor map from the paper test.
2. Group those factors into practice-worthy skill buckets.
3. Decide the new repo name.
4. Duplicate this repo into a new local project folder.
5. Strip the new repo down so it no longer presents original paper-test answers as the main practice experience.
6. Replace original question sets with fresh practice-question structures.

## Decision Rule

If a feature helps analyze the original paper test, it belongs here.

If a feature helps Holly practice on unseen but similar questions, it belongs in the new app.
