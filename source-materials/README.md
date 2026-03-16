# Source Materials

This folder holds scanned paper practice materials for the current CTP-5-LEVEL-5 project.

Recommended organization:

- `raw-scans/` for original images or PDFs
- `processed-items/` for converted or cropped working files
- `notes/` for section plans, OCR outputs, normalized drafts, and parent interpretation notes

Recommended source priority:

1. Searchable OCR PDF
2. AI-assisted normalized markdown draft
3. OCR text extracted from the PDF
4. Raw image OCR

Practical rules:

- Keep raw originals untouched.
- `.heic` is acceptable as a raw source format.
- Convert to `.png` or `.jpg` only when you need a working copy.
- Prefer searchable PDFs over page-photo OCR whenever possible.
- Use AI-assisted drafts to reduce manual transcription, but verify against the OCR PDF.
- Work in small app-testable batches instead of giant all-at-once imports.

Question-type guidance:

- Text-first items can be normalized directly into app data.
- Figure-dependent items should keep or recreate their visual stimulus.
- Local project assets in `public/` are preferred for figures, charts, and diagrams.

The goal is to preserve the original question, identify what it is measuring, and convert it into structured app content without losing the purpose of the assessment item.
