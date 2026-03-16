export interface Question {
  id: number;
  category: string;
  psychometricCategory: string;
  subTheme: string;
  stimulus?: string;
  stem: string;
  choices: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  key: 'a' | 'b' | 'c' | 'd';
  feedback: {
    correct: string;
    incorrect: string;
  };
  customHints?: string[];
}