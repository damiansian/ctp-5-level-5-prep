# OCR Approach Comparison

## Goal

Compare the two OCR approaches currently available:

1. Raw image OCR from HEIC/PNG page photos using `tesseract`
2. Acrobat-generated OCR embedded in the scanned PDF, extracted with `pdftotext`

## Sources Compared

Image OCR source:
- `source-materials/processed-items/writing-mechanics/*.png`
- `source-materials/notes/writing-mechanics/ocr/*.txt`

PDF OCR source:
- `/Users/dsian/Downloads/Adobe Scan Mar 14, 2026.pdf`
- `source-materials/notes/pdf-extraction/adobe-scan-layout.txt`

## Result

The Acrobat PDF OCR approach is clearly stronger.

## Why

### Acrobat PDF OCR

- Produces real embedded text that tools can extract
- Preserves question numbering much better
- Retains more sentence structure
- Keeps enough layout to identify sections and question ranges
- Is good enough for bulk intake and cleanup

### Raw Tesseract On Full-Page Photos

- Works inconsistently on dense workbook pages
- Loses punctuation detail, which is especially harmful for Writing Mechanics
- Breaks badly on multi-question and two-column layouts
- Produces too much noise for trustworthy direct import

## Important Limitation

This was not a perfect apples-to-apples comparison because the PDF appears to contain a Verbal Reasoning unit, while the image OCR run was done on Writing Mechanics photos.

Even with that limitation, the extraction quality difference is still obvious:

- the PDF OCR is usable as a drafting source
- the full-page photo OCR is mostly only usable as a backup or rough intake artifact

## Workflow Recommendation

For future units, prefer this order:

1. Searchable PDF from Acrobat or Adobe Scan with OCR applied
2. Extract text from the PDF with `pdftotext`
3. Build page maps and draft intake notes from that extracted text
4. Use page images only when formatting or punctuation needs visual confirmation

## Practical Conclusion

If you can produce OCR-enabled PDFs for this year's materials, that should become the primary intake pipeline.

The photo-based Tesseract workflow should be treated as a fallback, not the main path.
