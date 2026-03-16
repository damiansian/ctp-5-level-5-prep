# Current Development Status

## File Structure
```
src/
├── data/
│   ├── questions/
│   │   ├── verbal-reasoning.ts
│   │   ├── vocabulary.ts
│   │   ├── reading-comprehension.ts
│   │   ├── writing-mechanics.ts
│   │   ├── mathematics.ts
│   │   ├── quantitative-reasoning.ts
│   │   └── index.ts
```

## Recent Changes & Features
1. **Content Intake Progress**
   - Writing Mechanics imported through Question 60
   - Mathematics imported through Question 48
   - Source notes and planning docs created for Mathematics
   - Local visual assets added for figure-based Math items

2. **Current Working Features**
   - Question navigation within categories
   - Hint system with progressive hints
   - Score tracking
   - Category-based sidebar organization
   - Status indicators with WCAG 2.1 AA compliant contrast
   - Inline segment rendering for Writing Mechanics error-identification questions
   - Lightweight math display for fractions, superscripts, repeating decimals, tables, and embedded visuals
   - Project-specific title and favicon

3. **Operational Lessons Captured**
   - Searchable PDFs are the preferred OCR source
   - AI-assisted markdown drafts are the preferred drafting source when available
   - Full-page photo OCR is fallback only
   - Figure-dependent Math items should use local assets in `public/`
   - GitHub-linked commit identity is required for smooth Vercel deployment on Hobby plans

## Next Steps
1. Begin Quantitative Reasoning intake
2. Replace any remaining simplified Math visuals with source-faithful assets as needed
3. Decide whether to build a dedicated free-response interaction model
4. Continue documenting source-processing patterns that reduce manual effort

## Important Notes
- All imports now use the new file structure
- Question IDs must be unique within their category
- Hints are organized by category and subtheme
- WCAG 2.1 AA compliance is maintained for all UI elements
- The long-term goal is deeper than paper question storage: the app should help explain what each question measures, reveal support needs, and enable custom follow-up practice
- Vercel deployment can be blocked if the latest commit author is not associated with the owning GitHub account
