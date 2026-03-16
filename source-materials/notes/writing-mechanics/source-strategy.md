# Writing Mechanics Source Strategy

This note defines how to use the available Writing Mechanics sources together.

## Canonical Files

- OCR PDF: [writing-mechanics-ocr.pdf](./writing-mechanics-ocr.pdf)
- OCR text extracted from PDF: [writing-mechanics-ocr.txt](./writing-mechanics-ocr.txt)
- Claude-generated Markdown draft: [ctp5-writing-mechanics-claude.md](./ctp5-writing-mechanics-claude.md)
- Page map: [page-map.md](./page-map.md)

## Best Use Of Each Source

### 1. Claude Markdown

Use [`ctp5-writing-mechanics-claude.md`](./ctp5-writing-mechanics-claude.md) as the primary drafting source.

Why:
- it is already structured by question ranges
- it preserves directions and answer choices clearly
- it includes useful interpretive notes
- it is much cleaner than raw OCR text

### 2. OCR PDF

Use [`writing-mechanics-ocr.pdf`](./writing-mechanics-ocr.pdf) as the visual verification source.

Why:
- it is the closest thing to the original scanned material in searchable form
- it preserves page layout and underlined segments
- it can be checked when the Markdown looks uncertain

### 3. OCR Text

Use [`writing-mechanics-ocr.txt`](./writing-mechanics-ocr.txt) as a backup machine-readable reference only.

Why:
- it confirms that the PDF has embedded OCR
- it is helpful for search and spot checks
- it is noisier than the Claude Markdown and should not be treated as the main authoring source

## Working Decision

For Writing Mechanics, the practical source hierarchy should be:

1. Claude Markdown for drafting
2. OCR PDF for verification
3. OCR text for backup search/reference
4. Original page photos only if a visual detail still needs confirmation

## What This Unlocks

This is now good enough to move out of intake mode and into structured content creation.

The next production step should be:
- convert the Claude Markdown into a normalized review draft
- preserve question numbers, directions, student answers, and correctness notes
- then begin transforming that normalized draft into app-ready question objects in small batches

## Recommended Batch Size

To keep the workflow calm and reviewable:

- Batch 1: Questions 1-8
- Batch 2: Questions 9-15
- Batch 3: Questions 16-30

Start with the first batch only.
