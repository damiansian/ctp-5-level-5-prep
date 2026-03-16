# Test Prep Application Development Log

## Start all chats with an emoji
- Use an emoji of a brain to begin all chat responses. 

## Project Overview
Creating a child-friendly CTP test preparation application with React and TypeScript using Vite as the build tool.

The deeper purpose of the project is to transform paper-based assessment questions into an interpretable digital learning system. The app should help a parent scan or enter questions taken from paper practice materials, analyze the purpose of each question, identify the psychometric skill being measured, and build additional targeted practice based on that analysis.

This is not only a quiz interface. It is an attempt to decode what the paper assessment is asking, surface where support is needed, and give a bright child with test anxiety a calmer, more confident path into assessment prep.

## Product Vision

CTP Test Prep should turn opaque paper test practice into insight, targeted support, and confidence-building repetition.

Each question in the system should ideally answer several layers of meaning:
- What is the correct answer?
- Why is that answer correct?
- Why is this question being asked at all?
- What psychometric skill or subskill is being assessed?
- What kind of similar question could be written to practice the same ability?

The long-term value of the app is not just storing questions. It is building an internal model of question types, assessment intent, and support strategies so new practice can be authored beyond the original paper packet.

## Guiding Principles

- Keep the experience emotionally safe for a child with test anxiety
- Assume the learner is intelligent and capable, even when performance is uneven
- Use analysis and classification to make assessment questions legible
- Support parent-led curation, interpretation, and question authoring
- Build targeted reinforcement around areas of need
- Preserve accessibility, visual stability, and clarity

## Established Workflow

The project now has a proven intake and authoring workflow based on actual section conversion work.

### 1. Source Hierarchy

When multiple source forms exist for the same section, use them in this order:

1. AI-assisted markdown draft for structure and initial wording
2. Searchable OCR PDF for verification
3. Raw OCR text for search only
4. Page photos as fallback only

### 2. Scan Handling

- Keep raw scan originals untouched.
- `.heic` originals are acceptable as raw source files.
- Convert to `.png` or `.jpg` only for working copies when needed.
- Prefer searchable PDFs over full-page photo OCR whenever possible.

### 3. Batch Strategy

- Do not process an entire section at once unless the source is unusually clean.
- Normalize and import in small batches.
- QA each batch in the dev server before moving on.
- Use the app itself as part of the intake verification loop.

### 4. Question-Type Strategy

- Writing Mechanics error-identification items can use inline labeled segments in the stimulus.
- Standard multiple-choice items can stay in the normal answer-choice format.
- Math items should be split early into:
  - text-first items
  - figure-dependent items
- Figure-dependent questions should use project-local assets in `public/` whenever possible.

### 5. Math Display Strategy

- Do not assume full MathJax is always the best answer.
- Prefer lightweight HTML/CSS for:
  - fractions
  - superscripts
  - repeating decimals
  - simple tables
- Use MathJax only selectively if it clearly improves the learner experience and behaves reliably.

### 6. Deployment Strategy

- Vercel works for this repo, but Hobby deployments can be blocked if the commit author is not associated with the owning GitHub account.
- Use the GitHub identity for deploy-bound commits in this repo.
- Avoid enterprise-only Git identities when the goal is automatic Vercel deployment from GitHub.

## Completed Features

### Application Structure
- Set up React + TypeScript project using Vite
- Created main application layout with sidebar and question window
- Implemented responsive and accessible design with WCAG 2.1 compliant contrast ratios
- Established fixed-width layout (1440px) for consistent user experience

### Layout Improvements
1. **Fixed Width Implementation**
   - Root container: 1440px width
   - Sidebar: 300px fixed width
   - Main content: 1020px fixed width
   - Consistent 40px padding and margins
   - Eliminated dynamic resizing to prevent motion sickness

2. **Component Spacing**
   - Added proper padding in question window (40px)
   - Implemented consistent margins between components
   - Fixed spacing in score tracker and answer choices
   - Added border radius (12px) for visual consistency

### Components Created
1. **App.tsx**
   - Main application state management
   - Question navigation logic
   - Score tracking

2. **Sidebar.tsx**
   - Category-based navigation
   - Question list with current question highlighting
   - Two-column grid layout for compact question display

3. **QuestionWindow.tsx**
   - Question display with number, stimulus, and stem
   - Multiple choice answer selection
   - Submit button functionality
   - Next/Previous navigation
   - Feedback display

4. **Data Structure**
   - Created questions.ts with Verbal Reasoning questions
   - Implemented Question interface with proper typing

## Current Status

### Working Features
- Question navigation (Next/Previous)
- Answer selection
- Visual feedback for current question
- High contrast UI elements
- Compact sidebar layout
- Fixed-width layout preventing motion sickness
- Progressive hints tied to question classifications
- Writing Mechanics section imported and testable
- Mathematics section imported and testable
- Figure-backed stimuli supported through local assets in `public/`
- Lightweight formatted math display for fractions, superscripts, and repeating decimals
- Project-specific browser title and favicon

### Known Constraints
1. **Free Response UI**
   - The app still primarily supports choice-based interaction.
   - Free-response source items may need temporary multiple-choice adaptation until a dedicated response UI exists.

2. **Figure Complexity**
   - Some Math and future Quantitative Reasoning items may need custom visuals or embedded assets.

3. **Source Quality Variance**
   - Searchable PDFs are far more efficient than page-photo OCR.
   - Photo-only workflows increase cleanup time significantly.

## Next Steps

1. Begin Quantitative Reasoning intake using the same source hierarchy and batch workflow
2. Continue replacing simplified placeholder visuals with source-faithful local assets where helpful
3. Decide whether to build a true free-response UI for questions 41-48 style items
4. Improve chart and model rendering for more visual Quantitative Reasoning items
5. Continue refining hint tone for clarity, calmness, and anxiety reduction

## Current Work
The app has moved beyond initial scaffolding and is now in sustained content-ingestion mode. The main work is converting paper source material into structured, testable, psychometrically meaningful digital practice.

## Notes for Next Session
1. Prefer searchable PDFs and structured AI drafts over raw page OCR
2. Start new sections with a source-strategy note and a first-batch plan
3. Separate text-first items from figure-dependent items early
4. Keep assets local and app-test each batch before scaling up
5. Use GitHub-linked commit identity for deployment-bound commits

## Adding New Questions and Sections

### Question Addition Workflow
1. **Preparation**
   - Review existing questions in the target section
   - Check `hints/index.ts` for valid psychometricCategory and subTheme values
   - Have the question image ready for reference
   - Prefer a searchable PDF and a normalized draft if available
   - Identify what skill the source question is trying to measure
   - Write down why the question is being asked, not just what the answer is

2. **Adding Questions**
   - Add one question at a time
   - Or work in very small batches when the source is clean
   - Test after each addition or batch using the development server
   - Fix any errors before proceeding to the next question
   - Create git checkpoints after each set of related questions
   - Preserve the original question intent when converting from paper
   - Add enough metadata that a similar practice question could later be authored
   - For figure-based items, keep the visual source local in `public/`

3. **Required Steps**
   ```typescript
   // 1. Use correct psychometricCategory from hints/index.ts
   psychometricCategory: 'Language', // for Writing Mechanics
   // or
   psychometricCategory: 'Word Meaning in Context', // for Vocabulary
   // or
   psychometricCategory: 'Reading Comprehension', // for Reading questions

   // 2. Use proper text formatting
   stem: 'Find the error in the sentence, if there is one.\n\nThe sentence goes here.',
   choices: {
     a: 'Descriptive answer text',
     b: 'Clear explanation',
     c: 'Specific error identification',
     d: 'No error'  // When applicable
   }

   // 3. Include proper feedback
   feedback: {
     correct: 'Specific explanation of why the answer is correct',
     incorrect: 'Guide to finding the correct answer'
   }
   ```

   In addition to the visible fields, every question should be authored with these goals in mind:
   - clear identification of the underlying skill being assessed
   - a parent-readable explanation of the question's purpose
   - enough structure to support future similar-question generation
   - hints that reduce anxiety and support reasoning, not just answer retrieval

4. **Testing Checklist**
   - [ ] Question displays correctly
   - [ ] All answer choices are visible
   - [ ] Hint button works
   - [ ] Feedback appears for correct/incorrect answers
   - [ ] Navigation works to/from the question
   - [ ] No console errors
   - [ ] Psychometric classification is accurate and consistent
   - [ ] Explanation of the question purpose is clear
   - [ ] The item could plausibly support a similar-question authoring workflow
   - [ ] The source hierarchy was respected: draft first, OCR verification second

### Adding New Sections
1. **Hint Categories First**
   ```typescript
   // In hints/index.ts
   export const hints: ClassificationHints = {
     "New Category": {
       description: "Description of what these questions test",
       subThemes: {
         "SubTheme Name": {
           understanding: [
             "Understanding question 1",
             "Understanding question 2"
           ],
           process: [
             "Process step 1",
             "Process step 2"
           ]
         }
       }
     }
   };
   ```

2. **Create Question File**
   ```typescript
   // In questions/new-category.ts
   import { Question } from '../../App';

   export const newCategoryQuestions: Question[] = [
     // Add questions following the schema
   ];
   ```

3. **Update Index**
   ```typescript
   // In questions/index.ts
   import { newCategoryQuestions } from './new-category';

   export const allQuestions = [
     ...existingQuestions,
     ...newCategoryQuestions
   ];
   ```

### Common Pitfalls to Avoid
1. **Text Formatting**
   - Don't use curly quotes or apostrophes
   - Escape special characters properly
   - Avoid HTML tags unless necessary

2. **Category Management**
   - Always add hint categories before questions
   - Use exact category names from hints/index.ts
   - Keep subThemes consistent within categories

3. **Testing**
   - Test each question immediately after adding
   - Don't add multiple questions without testing
   - Create git checkpoints regularly
   - If the source is visual, confirm the asset is readable on the app background

4. **Error Prevention**
   - Follow the Question interface exactly
   - Use consistent formatting for similar questions
   - Avoid relying on external runtime services for essential visuals when a local asset will do
   - Keep backup copies of working versions

5. **Assessment Interpretation**
   - Don't treat a question as only an answer key entry
   - Don't lose the original assessment intent when transcribing from paper
   - Don't invent psychometric labels inconsistently
   - Don't add hints that give away the answer without supporting understanding
