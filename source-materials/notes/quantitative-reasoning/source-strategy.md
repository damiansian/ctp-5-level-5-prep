# Quantitative Reasoning Source Strategy

## Source Files

- Primary draft source: [ctp5-quantitative-reasoning-claude.md](./ctp5-quantitative-reasoning-claude.md)
- Verification source: [quantitative-reasoning-ocr.pdf](./quantitative-reasoning-ocr.pdf)
- Backup extracted text: [quantitative-reasoning-ocr.txt](./quantitative-reasoning-ocr.txt)

## Current Read

Quantitative Reasoning looks workable, but it has a different structure from Mathematics.

- The Claude markdown is much cleaner than the OCR text.
- The OCR PDF is still useful for checking wording, symbols, and figures.
- The plain OCR text is noisy and should be treated as a search/reference source only.
- Questions 1-20 use an A-vs-B comparison format instead of ordinary multiple choice.
- Later questions are likely to mix comparisons, tables, simple visuals, and more standard quantitative prompts.

## Recommended Workflow

1. Draft from the Claude markdown.
2. Verify wording and symbols against the OCR PDF.
3. Split the section into:
   - comparison-format questions
   - figure-dependent questions
   - table/chart-dependent questions
4. Import in small batches and QA in the app before scaling.

## Important UI Note

For Questions 1-20, the paper answers mean:

- `A`: Box A is greater
- `B`: Box B is greater
- `C`: The amounts are equal
- `D`: Not enough information

That means the app should preserve the A/B comparison structure instead of rewriting those as ordinary unrelated answer texts.

## Recommended First Batch

Start with Questions `1-10`.

- They are enough to establish the comparison-item workflow.
- They include both text-first and figure-dependent examples.
- They should reveal quickly whether we need a specialized comparison stimulus layout.

## Source Priority

Use this order:

1. Claude markdown for structure and first-pass content
2. Searchable OCR PDF for verification
3. OCR text for quick searching only
