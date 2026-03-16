import { Question } from '../data/types';
import { categories } from '../data/questions';

/**
 * Get the question array for a given category name
 */
export const getQuestionsByCategory = (categoryName: string): Question[] => {
  const category = categories.find(cat => cat.name === categoryName);
  return category?.questions || [];
};

/**
 * Get the first question in a category
 */
export const getFirstQuestionInCategory = (categoryName: string): Question | null => {
  const questions = getQuestionsByCategory(categoryName);
  return questions.length > 0 ? questions[0] : null;
};

/**
 * Get the last question in a category
 */
export const getLastQuestionInCategory = (categoryName: string): Question | null => {
  const questions = getQuestionsByCategory(categoryName);
  return questions.length > 0 ? questions[questions.length - 1] : null;
};

/**
 * Check if a question is the first in its category
 */
export const isFirstQuestionInCategory = (question: Question | null): boolean => {
  if (!question) return false;
  const firstQuestion = getFirstQuestionInCategory(question.category);
  return firstQuestion?.id === question.id;
};

/**
 * Check if a question is the last in its category
 */
export const isLastQuestionInCategory = (question: Question | null): boolean => {
  if (!question) return false;
  const lastQuestion = getLastQuestionInCategory(question.category);
  return lastQuestion?.id === question.id;
};

/**
 * Get the total number of questions across all categories
 */
export const getTotalQuestionCount = (): number => {
  return categories.reduce((total, category) => total + category.questions.length, 0);
};

/**
 * Get all questions as a flat array
 */
export const getAllQuestions = (): Question[] => {
  return categories.flatMap(category => category.questions);
};

