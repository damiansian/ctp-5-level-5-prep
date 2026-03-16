import { Question } from '../types';
import { verbalReasoningQuestions as rawVerbalReasoningQuestions } from './verbal-reasoning';
import { vocabularyQuestions as rawVocabularyQuestions } from './vocabulary';
import { vocabularyPracticeQuestions } from './vocabulary-practice';
import { readingComprehensionQuestions as rawReadingComprehensionQuestions } from './reading-comprehension';
import { writingMechanicsQuestions as rawWritingMechanicsQuestions } from './writing-mechanics';
import { writingMechanicsPracticeQuestions } from './writing-mechanics-practice';
import { mathematicsQuestions as rawMathematicsQuestions } from './mathematics';
import { quantitativeReasoningQuestions as rawQuantitativeReasoningQuestions } from './quantitative-reasoning';

export interface Category {
  name: string;
  key: string;
  questions: Question[];
  description: string;
}

const retainedQuestionIds: Record<string, Set<number>> = {
  'Verbal Reasoning': new Set([7, 18, 21, 26, 42, 47, 50, 53, 54, 55, 59]),
  'Vocabulary': new Set([12, 20, 21, 24, 46, 48, 54, 57, 60]),
  'Writing Mechanics': new Set([5, 7, 16, 18, 23, 29, 31, 35, 41, 46, 48, 54, 58, 59]),
  'Mathematics': new Set([1, 3, 5, 7, 8, 9, 13, 18, 21, 25, 31, 32, 34, 37, 38, 39, 40, 42, 43, 44, 47, 48]),
  'Quantitative Reasoning': new Set([1, 3, 5, 9, 10, 12, 14, 22, 23, 25, 27, 28, 30, 31]),
};

const filterRetainedQuestions = (categoryName: string, questions: Question[]): Question[] => {
  const idsToKeep = retainedQuestionIds[categoryName];
  return idsToKeep ? questions.filter((question) => idsToKeep.has(question.id)) : [];
};

export const verbalReasoningQuestions = filterRetainedQuestions('Verbal Reasoning', rawVerbalReasoningQuestions);
export const retainedVocabularyQuestions = filterRetainedQuestions('Vocabulary', rawVocabularyQuestions);
export const vocabularyQuestions = vocabularyPracticeQuestions;
export const readingComprehensionQuestions = filterRetainedQuestions('Reading Comprehension', rawReadingComprehensionQuestions);
export const retainedWritingMechanicsQuestions = filterRetainedQuestions('Writing Mechanics', rawWritingMechanicsQuestions);
export const writingMechanicsQuestions = writingMechanicsPracticeQuestions;
export const mathematicsQuestions = rawMathematicsQuestions;
export const quantitativeReasoningQuestions = rawQuantitativeReasoningQuestions;

export const categories: Category[] = [
  {
    name: 'Verbal Reasoning',
    key: 'verbal-reasoning',
    questions: verbalReasoningQuestions,
    description: 'Tests ability to analyze and evaluate written material'
  },
  {
    name: 'Vocabulary',
    key: 'vocabulary',
    questions: vocabularyQuestions,
    description: 'Assesses understanding of word meanings and context'
  },
  {
    name: 'Reading Comprehension',
    key: 'reading-comprehension',
    questions: readingComprehensionQuestions,
    description: 'Evaluates ability to understand and interpret text passages'
  },
  {
    name: 'Writing Mechanics',
    key: 'writing-mechanics',
    questions: writingMechanicsQuestions,
    description: 'Tests understanding of grammar, punctuation, and sentence structure'
  },
  {
    name: 'Mathematics',
    key: 'mathematics',
    questions: mathematicsQuestions,
    description: 'Tests mathematical understanding and problem-solving skills'
  },
  {
    name: 'Quantitative Reasoning',
    key: 'quantitative-reasoning',
    questions: quantitativeReasoningQuestions,
    description: 'Tests ability to analyze numerical patterns and relationships'
  }
].filter((category) => category.questions.length > 0);

export const questions: Question[] = [
  ...verbalReasoningQuestions,
  ...vocabularyQuestions,
  ...writingMechanicsQuestions,
  ...mathematicsQuestions,
  ...quantitativeReasoningQuestions
];
