import { Question } from '../data/types';

interface ValidationError {
  questionId: number;
  category: string;
  field: string;
  message: string;
}

/**
 * Validates an array of questions at load time and logs warnings
 * for any malformed entries. Does not throw — the app still runs,
 * but developers see actionable console warnings.
 */
export const validateQuestions = (questions: Question[]): ValidationError[] => {
  const errors: ValidationError[] = [];
  const seenIds = new Map<string, Set<number>>();

  questions.forEach((q, index) => {
    const ctx = { questionId: q.id ?? index, category: q.category ?? 'unknown' };

    // Required fields
    if (typeof q.id !== 'number') {
      errors.push({ ...ctx, field: 'id', message: 'Missing or non-numeric id' });
    }
    if (!q.category || typeof q.category !== 'string') {
      errors.push({ ...ctx, field: 'category', message: 'Missing or empty category' });
    }
    if (!q.stem || typeof q.stem !== 'string') {
      errors.push({ ...ctx, field: 'stem', message: 'Missing or empty stem' });
    }

    // Choices validation
    if (!q.choices || typeof q.choices !== 'object') {
      errors.push({ ...ctx, field: 'choices', message: 'Missing choices object' });
    } else {
      for (const letter of ['a', 'b', 'c', 'd'] as const) {
        if (typeof q.choices[letter] !== 'string' || q.choices[letter].trim() === '') {
          errors.push({ ...ctx, field: `choices.${letter}`, message: `Missing or empty choice "${letter}"` });
        }
      }
    }

    // Key validation
    if (!['a', 'b', 'c', 'd'].includes(q.key)) {
      errors.push({ ...ctx, field: 'key', message: `Invalid answer key "${q.key}"` });
    }

    // Feedback validation
    if (!q.feedback?.correct) {
      errors.push({ ...ctx, field: 'feedback.correct', message: 'Missing correct feedback' });
    }
    if (!q.feedback?.incorrect) {
      errors.push({ ...ctx, field: 'feedback.incorrect', message: 'Missing incorrect feedback' });
    }

    // Duplicate ID check within category
    if (q.category && typeof q.id === 'number') {
      if (!seenIds.has(q.category)) seenIds.set(q.category, new Set());
      const categoryIds = seenIds.get(q.category)!;
      if (categoryIds.has(q.id)) {
        errors.push({ ...ctx, field: 'id', message: `Duplicate id ${q.id} in category "${q.category}"` });
      }
      categoryIds.add(q.id);
    }
  });

  // Log warnings in development
  if (errors.length > 0) {
    console.warn(
      `[Question Validation] Found ${errors.length} issue(s):`,
      errors.map(e => `${e.category} Q${e.questionId}: ${e.field} — ${e.message}`)
    );
  }

  return errors;
};
