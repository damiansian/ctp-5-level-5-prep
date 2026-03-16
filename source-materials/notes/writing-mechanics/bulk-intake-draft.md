# Writing Mechanics Bulk Intake Draft

This file summarizes the first bulk OCR pass for the Writing Mechanics unit.

## Goal

Use a bulk-first workflow so the scans can be processed page by page without requiring manual transcription of every item.

## Source Set

- Raw images: `source-materials/raw-scans/writing-mechanics/`
- Working PNGs: `source-materials/processed-items/writing-mechanics/`
- OCR outputs: `source-materials/notes/writing-mechanics/ocr/`
- Page map: `source-materials/notes/writing-mechanics/page-map.md`

## Reality Check

The OCR run completed successfully for all pages, but extraction quality varies sharply.

- `IMG_1073` is partially usable
- most other pages are too noisy for safe direct item import
- the two-column page `IMG_1078` is especially poor in the current pass

This means the bulk workflow gave us a useful intake baseline, but not a trustworthy question-by-question draft for the full unit yet.

## Page Summary

| Page | Question Range | OCR Output | Confidence | Notes |
| --- | --- | --- | --- | --- |
| `IMG_1073` | 1-8 | `ocr/IMG_1073.txt` | Medium | Directions and most question stems are partly recoverable. Punctuation fidelity is still weak. |
| `IMG_1074` | 9-13 | `ocr/IMG_1074.txt` | Low | OCR is mostly gibberish in current pass. |
| `IMG_1075` | 14-15 | `ocr/IMG_1075.txt` | Low | OCR is mostly unusable in current pass. |
| `IMG_1076` | 16-25 | `ocr/IMG_1076.txt` | Low | OCR quality too noisy for drafting. |
| `IMG_1077` | 26-30 | `ocr/IMG_1077.txt` | Low | OCR quality too noisy for drafting. |
| `IMG_1078` | 31-40 | `ocr/IMG_1078.txt` | Very low | Two-column layout breaks the current OCR approach badly. |
| `IMG_1079` | 41-45 | `ocr/IMG_1079.txt` | Low | OCR quality too noisy for drafting. |
| `IMG_1080` | 46-55 | `ocr/IMG_1080.txt` | Low | OCR quality too noisy for drafting. |
| `IMG_1081` | 56-60 | `ocr/IMG_1081.txt` | Low | OCR quality too noisy for drafting. |

## What Worked

- The repo now has a complete Writing Mechanics intake structure.
- All page images were converted into PNG working copies.
- All pages were mapped to question ranges.
- All pages now have saved OCR text files for future comparison or retry.
- The first page gave enough signal to confirm that the unit is punctuation-focused and suitable for psychometric classification work.

## What Did Not Work Well

- Full-page OCR is not preserving punctuation reliably enough for Writing Mechanics.
- Several pages are too noisy to extract useful question text in the current pass.
- Multi-question and two-column layouts degrade accuracy sharply.

## Best Current Use Of This Draft

Treat this as an intake manifest, not as app-ready content.

It tells us:
- what source pages exist
- which question numbers each page contains
- where the OCR outputs are stored
- which pages may be recoverable with additional processing
- which pages need a different extraction strategy

## Recommended Next Step

The most efficient next move is not manual transcription.

Instead, use one better text source for the unit:

1. a text-selectable PDF created from a scanner workflow, or
2. copied OCR text from the phone or scanner app, or
3. a higher-quality OCR pipeline than the current raw Tesseract pass

Once we have better source text, I can:
- bulk-clean the unit draft
- classify item types
- identify psychometric purpose
- generate structured question objects
- flag only ambiguous cases for human review

## Current Status

Bulk-first intake setup: complete  
Bulk OCR archive: complete  
Bulk question drafting from current OCR alone: not reliable enough yet
