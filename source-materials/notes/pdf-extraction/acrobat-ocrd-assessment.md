# Acrobat OCR Assessment

Canonical PDF source copied into project:
- `source-materials/notes/pdf-extraction/adobe-scan-ocrd.pdf`

## Result

The Acrobat-OCR version is the better source.

## Why

- It contains embedded OCR text (`HiddenHorzOCR` is present).
- `pdftotext -layout` extracts cleaner, denser text than the earlier PDF version.
- It preserves question blocks more coherently.
- It is still imperfect, but it is much closer to a bulk-draftable source than full-page image OCR.

## Practical Decision

For this project, searchable PDFs created or post-processed in Acrobat should be the preferred intake path whenever possible.

Use page photos only as visual reference or fallback.
