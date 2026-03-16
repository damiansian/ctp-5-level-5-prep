# Mathematics Source Strategy

## Source Files

- Primary draft source: [ctp5-mathematics-claude.md](./ctp5-mathematics-claude.md)
- Verification source: [mathematics-ocr.pdf](./mathematics-ocr.pdf)
- Backup extracted text: [mathematics-ocr.txt](./mathematics-ocr.txt)

## Current Read

Mathematics is more complex than Writing Mechanics, but for a different reason.

- The Claude markdown is much cleaner than the raw OCR text.
- The OCR PDF is still useful because it lets us verify wording, answer choices, and figure references.
- The extracted OCR text produced repeated stream warnings during `pdftotext`, so it should not be treated as the primary intake source.
- Many items depend on diagrams, shapes, angle drawings, prisms, or other visual information.

## Recommended Intake Workflow

1. Draft from the Claude markdown.
2. Verify wording and choices against the OCR PDF.
3. Split questions into two groups:
   - text-first questions that can be added directly
   - figure-dependent questions that need image handling or careful figure descriptions
4. Import a small batch into the app.
5. QA in the dev server before moving to the next batch.

## Working Assumption

For the first pass, we should prefer speed and usability over perfect figure rendering.

- If a question is fully understandable from text alone, import it directly.
- If a question depends on a figure, keep the prompt usable by including a short figure description or by extracting the figure later.
- We do not need to solve every graphics problem before starting the Mathematics set.

## Risk Areas

- Geometry and measurement questions may lose meaning if the figure is missing.
- Unit-cube, angle, prism, and shape-identification items may need custom stimulus rendering later.
- Some student markings in the source may be mixed with the original content, so answer keys should be verified carefully.

## Best Use Of Sources

- Claude markdown: structure, first-pass wording, likely answer key
- OCR PDF: confirmation of exact choices, symbols, and figure-dependent wording
- OCR text file: quick searching only
