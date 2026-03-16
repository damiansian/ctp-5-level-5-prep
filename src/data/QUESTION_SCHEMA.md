# Question Schema and Image Processing Guide

## Question Object Structure
```typescript
interface Question {
  id: number;                    // Unique identifier for the question
  category: string;              // Main category (e.g., 'Verbal Reasoning', 'Vocabulary')
  psychometricCategory: string;  // Specific skill being tested
  subTheme: string;             // More specific classification of the skill
  stimulus?: string;            // Optional reading passage or context
  stem: string;                 // The actual question text
  choices: {                    // Answer choices
    a: string;
    b: string;
    c: string;
    d: string;
  };
  key: 'a' | 'b' | 'c' | 'd';  // Correct answer
  feedback: {                   // Feedback for student responses
    correct: string;
    incorrect: string;
  };
  customHints: string[];       // Array of progressive hints
}
```

## Image Processing Workflow

1. **Image Analysis**
   - Identify question number and section
   - Locate passage/stimulus if present
   - Identify question stem
   - Locate answer choices
   - Note any special formatting or features

2. **Classification**
   - Determine main category
   - Identify psychometric category based on question type
   - Determine appropriate subtheme
   - Consider what skills are being tested

3. **Content Extraction**
   - Copy passage text exactly as shown
   - Maintain any paragraph breaks or formatting
   - Extract question stem verbatim
   - Copy each answer choice exactly
   - Note the correct answer

4. **Enhancement**
   - Write clear, instructive feedback for both correct and incorrect answers
   - Create 2-3 progressive hints that:
     - Guide thinking without giving away answers
     - Focus on process and understanding
     - Use grade-appropriate language

## Example
```typescript
{
  id: 15,
  category: 'Verbal Reasoning',
  psychometricCategory: 'Reading Comprehension',
  subTheme: 'Drawing Conclusions',
  stimulus: `Every day for the past fifty years...`,  // Exact passage text
  stem: 'Which of the following conclusions can best be drawn from the information above?',
  choices: {
    a: 'Clarissa and Newt are friendly toward each other.',
    b: 'Clarissa is always home during the day.',
    c: 'Newt is more than fifty years old.',
    d: 'It is Newt\'s job to ring the bells.'
  },
  key: 'a',
  feedback: {
    correct: 'Correct! The passage directly shows friendly interaction...',
    incorrect: 'Look carefully at what the passage actually tells us...'
  },
  customHints: [
    "What specific interaction is described between Clarissa and Newt?",
    "Which conclusion requires the fewest assumptions beyond what's directly stated?",
    "Consider what we know for certain versus what we might be tempted to assume"
  ]
}
```

## Best Practices

1. **Accuracy**
   - Copy text exactly as shown in the image
   - Maintain original punctuation and formatting
   - Double-check question numbers and correct answers

2. **Classifications**
   - Use consistent category names
   - Choose specific, descriptive subthemes
   - Align psychometric categories with skills being tested

3. **Feedback & Hints**
   - Make feedback instructive, not just confirmatory
   - Create hints that progress from general to specific
   - Focus on developing critical thinking skills
   - Use clear, grade-appropriate language

4. **Accessibility**
   - Ensure all text is screen-reader friendly
   - Maintain proper contrast ratios
   - Use clear, semantic structure
   - Provide text alternatives for any visual elements 

# Question Addition Guide

## File Structure
```
src/
├── data/
│   ├── questions/
│   │   ├── verbal-reasoning.ts
│   │   ├── vocabulary.ts
│   │   ├── reading-comprehension.ts
│   │   └── index.ts
│   ├── hints/
│   │   ├── verbal-reasoning.ts
│   │   ├── vocabulary.ts
│   │   ├── reading-comprehension.ts
│   │   └── index.ts
│   └── images/
│       └── questions/
│           ├── verbal-reasoning/
│           ├── vocabulary/
│           └── reading-comprehension/
```

## Question Object Structure
```typescript
interface Question {
  id: number;                    // Unique within category
  category: string;              // Main category (e.g., "Vocabulary")
  psychometricCategory: string;  // Psychological aspect being tested
  subTheme: string;             // Specific skill being assessed
  stimulus?: string;            // Optional context/passage
  stem: string;                 // The actual question
  choices: {                    // Multiple choice options
    a: string;
    b: string;
    c: string;
    d: string;
  };
  key: 'a' | 'b' | 'c' | 'd';  // Correct answer
  feedback: {                   // Feedback for answers
    correct: string;
    incorrect: string;
  };
  customHints?: string[];      // Progressive hints
  imageUrl?: string;           // Optional image path
}
```

## Image Processing Workflow
1. Place images in the appropriate category folder under `src/data/images/questions/`
2. Use the following naming convention: `[category]-q[id]-[descriptor].png`
   Example: `vocabulary-q1-context.png`
3. Images should be:
   - Compressed for web (< 200KB recommended)
   - In PNG or WebP format
   - Accessible (include alt text in question data)
   - WCAG 2.1 AA compliant for contrast

## Adding New Questions
1. Choose the appropriate category file in `src/data/questions/`
2. Add the question object following the schema
3. Update the corresponding hints file in `src/data/hints/`
4. If adding a new category:
   - Create new files for questions and hints
   - Update the category list in `src/data/questions/index.ts`
   - Add the category to the sidebar configuration

## Best Practices
1. **Consistency**
   - Maintain consistent ID numbering within categories
   - Use standardized subThemes within categories
   - Follow established feedback patterns

2. **Accessibility**
   - Ensure all images have descriptive alt text
   - Maintain contrast ratios (4.5:1 for text, 3:1 for UI)
   - Provide clear, concise instructions

3. **Hints**
   - Progressive disclosure (easier to harder)
   - 3-4 hints per question
   - Start with conceptual hints, move to specific

4. **Feedback**
   - Explain why answers are correct/incorrect
   - Reference specific concepts
   - Provide learning opportunities

## Example Question
```typescript
{
  id: 1,
  category: "Vocabulary",
  psychometricCategory: "Word Meaning",
  subTheme: "Context Clues",
  stimulus: "The artist's ethereal paintings seemed to float off the canvas, creating an atmosphere of otherworldly beauty.",
  stem: "In this context, what does 'ethereal' most likely mean?",
  choices: {
    a: "Heavy and substantial",
    b: "Delicate and heavenly",
    c: "Bright and colorful",
    d: "Dark and mysterious"
  },
  key: "b",
  feedback: {
    correct: "Correct! 'Ethereal' means delicate, light, and heavenly. The context clues of 'float' and 'otherworldly' support this meaning.",
    incorrect: "The word 'ethereal' means delicate and heavenly. Notice how the context describes the paintings as floating and creating an otherworldly atmosphere."
  },
  customHints: [
    "Look at the words used to describe the paintings in the sentence.",
    "Consider how the paintings are described as affecting the atmosphere.",
    "Think about what kind of quality would make something seem to 'float off the canvas'."
  ],
  imageUrl: "src/data/images/questions/vocabulary-q1-painting.png"
}
```

## Common Issues and Prevention

### 1. Psychometric Categories and Hints
- **Issue**: Questions without working hints due to mismatched categories
- **Prevention**:
  - Always use categories from the established list in `hints/index.ts`
  - Current valid psychometricCategories include:
    - "Language" (for Writing Mechanics)
    - "Word Meaning in Context" (for Vocabulary)
    - "Reading Comprehension" (for Reading questions)
    - "Quantitative Reasoning" (for Math and Logic questions)
  - Check `hints/index.ts` for the complete list of valid categories and subThemes
  - When adding new question types, first add corresponding hint categories

### 2. SubTheme and Hint System Matching
- **Issue**: Hint button not working due to mismatched subThemes
- **Prevention**:
  - Before adding questions, check available subThemes in `hints/index.ts`
  - For Quantitative Reasoning, current valid subThemes are:
    - "Pattern Recognition"
  - To add new subThemes:
    1. First update `hints/index.ts` with the new subTheme
    2. Add both 'understanding' and 'process' hint arrays
    3. Then use the new subTheme in questions
  - Never create questions with subThemes that don't exist in the hints system
  - Example hint structure:
    ```typescript
    "Quantitative Reasoning": {
      description: "These questions test your ability to analyze numerical patterns and relationships.",
      subThemes: {
        "Pattern Recognition": {
          understanding: [
            "What operation changes each number to the next?",
            "How do the numbers increase or decrease?",
            "Is there a consistent rule being applied?"
          ],
          process: [
            "Look at the difference between consecutive numbers",
            "Check if multiplication or division is involved",
            "Try applying the pattern to the last number"
          ]
        }
      }
    }
    ```

### 3. Text Formatting
- **Issue**: Syntax errors from smart quotes and apostrophes
- **Prevention**:
  - Always use straight quotes (`'`) and apostrophes (`'`), not curly ones (`'` or `'`)
  - Use escaped apostrophes in contractions and possessives (`It\'s`, `students\'`)
  - For quotes within text, use escaped straight quotes (`\"quote\"`)

### 4. Answer Choices Format
- **Issue**: Inconsistent or unclear answer choice formatting
- **Prevention**:
  - Use descriptive text for each choice (e.g., "Lower case j in judge" instead of just "judge")
  - Include "No error" as option 'd' when appropriate
  - Don't use HTML formatting (like `<u>`) in stems or choices unless specifically needed
  - Keep answer choice text concise but clear

### 5. Question Structure
- **Issue**: Missing or inconsistent question components
- **Prevention**:
  - Always include all required fields from the Question interface
  - Follow the pattern:
    1. Clear stem with complete instructions
    2. Source text or sentence (if applicable)
    3. Lettered answer choices (a, b, c, d)
    4. Both correct and incorrect feedback
    5. At least 3 progressive hints

### 6. Version Control
- **Issue**: Lost changes or merge conflicts
- **Prevention**:
  - Create git checkpoints after adding each set of related questions
  - Test questions locally before committing
  - Use descriptive commit messages that specify which questions were added/modified
  - Review changes in the development server before committing 

## Adding New Categories Checklist

### 1. Create New Files (Required Order)
```typescript
// Step 1: Add hint categories first
// In src/data/hints/index.ts
"New Category": {
  description: "Description of what these questions test",
  subThemes: {
    "SubTheme Name": {
      understanding: ["hint1", "hint2", "hint3"],
      process: ["hint1", "hint2", "hint3"]
    }
  }
}

// Step 2: Create question file
// In src/data/questions/new-category.ts
import { Question } from '../../App';
export const newCategoryQuestions: Question[] = [
  // Add questions here
];

// Step 3: Update questions index
// In src/data/questions/index.ts
import { newCategoryQuestions } from './new-category';
export const categories: Category[] = [
  // ... existing categories
  {
    name: 'New Category',
    key: 'new-category',
    questions: newCategoryQuestions,
    description: 'Description'
  }
];

// Step 4: Update Sidebar component
// In src/components/Sidebar.tsx
import { newCategoryQuestions } from '../data/questions/new-category';
const categories: Category[] = [
  // ... existing categories
  {
    name: 'New Category',
    questions: newCategoryQuestions,
    completed: 0
  }
];

// Step 5: Update App.tsx navigation
// In src/App.tsx
import { newCategoryQuestions } from './data/questions/new-category';
// Update handleNavigate and isFirstQuestion/isLastQuestion logic
```

### 2. Required Component Updates
1. **Hints System** (`src/data/hints/index.ts`)
   - [ ] Add new category with description
   - [ ] Add all subThemes
   - [ ] Add understanding hints
   - [ ] Add process hints

2. **Questions** (`src/data/questions/new-category.ts`)
   - [ ] Create new file
   - [ ] Import Question interface
   - [ ] Add at least one question
   - [ ] Export questions array

3. **Questions Index** (`src/data/questions/index.ts`)
   - [ ] Import new category
   - [ ] Add to categories array
   - [ ] Add to exports
   - [ ] Add to combined questions array

4. **Sidebar** (`src/components/Sidebar.tsx`)
   - [ ] Import new category
   - [ ] Add to categories array
   - [ ] Verify category name matches exactly

5. **App Component** (`src/App.tsx`)
   - [ ] Import new category
   - [ ] Update handleNavigate logic
   - [ ] Update isFirstQuestion check
   - [ ] Update isLastQuestion check

### 3. Verification Steps
1. **Before Starting Dev Server**
   - [ ] All files created
   - [ ] All imports added
   - [ ] All exports defined
   - [ ] All component updates made

2. **After Starting Dev Server**
   - [ ] New category appears in sidebar
   - [ ] Category expands/collapses
   - [ ] Questions are visible
   - [ ] Navigation works
   - [ ] Hints work
   - [ ] Score tracking works

3. **Common Issues to Check**
   - [ ] Category names match exactly across all files
   - [ ] Import paths are correct
   - [ ] No duplicate IDs within category
   - [ ] Hints match psychometricCategory and subTheme

### 4. Testing New Category
1. **Basic Functionality**
   - [ ] Click category to expand
   - [ ] Select a question
   - [ ] Submit an answer
   - [ ] Check hint system
   - [ ] Verify feedback

2. **Navigation**
   - [ ] Next/Previous within category
   - [ ] First question behavior
   - [ ] Last question behavior
   - [ ] Category switching

3. **State Management**
   - [ ] Score updates correctly
   - [ ] Progress tracking works
   - [ ] Multiple attempts handled
   - [ ] Status icons appear

// ... rest of existing content ... 