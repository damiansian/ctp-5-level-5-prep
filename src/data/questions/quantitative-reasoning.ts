import { Question } from '../types';

const comparisonChoices = {
  a: 'A is greater than B.',
  b: 'B is greater than A.',
  c: 'A and B are equal.',
  d: 'There is not enough information.'
} as const;

const comparisonTable = (boxA: string, boxB: string) => `
  <table style="border-collapse: collapse; width: 100%; max-width: 40rem; margin-top: 1rem;">
    <tr>
      <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
      <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">${boxA}</td>
      <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">${boxB}</td>
    </tr>
  </table>
`;

export const quantitativeReasoningQuestions: Question[] = [
  {
    id: 1,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stimulus: `
      <div class="comparison-question">
        <p><strong>Let</strong> <em>a</em> ★ <em>b</em> = (<em>a</em> x <em>b</em>) + (<em>a</em> − <em>b</em>)</p>
        ${comparisonTable('The value of 7 ★ 3', 'The value of 5 ★ 4')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct! 7 ★ 3 = (7 x 3) + (7 − 3) = 21 + 4 = 25, and 5 ★ 4 = (5 x 4) + (5 − 4) = 20 + 1 = 21. Box A is greater.',
      incorrect: 'Follow the rule: multiply the two numbers, then add the difference between them. Do this for each box separately.'
    },
    customHints: [
      'The rule has two parts: multiply the numbers, then add the difference.',
      '7 ★ 3 = (7 x 3) + (7 − 3) = 21 + 4.',
      '5 ★ 4 = (5 x 4) + (5 − 4) = 20 + 1. Now compare 25 and 21.'
    ]
  },
  {
    id: 2,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Number Properties',
    stimulus: `
      <div class="comparison-question">
        ${comparisonTable('The number of zeros in 2.5 x 10<sup>4</sup>', 'The number of zeros in 6.03 x 10<sup>3</sup>')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct! 2.5 x 10⁴ = 25,000 which has 3 zeros, and 6.03 x 10³ = 6,030 which has 2 zeros. Box A is greater.',
      incorrect: 'Write each number in standard form by moving the decimal point. Then count all the zeros in each number.'
    },
    customHints: [
      'Move the decimal right 4 places for 2.5 x 10⁴ to get 25,000.',
      'Move the decimal right 3 places for 6.03 x 10³ to get 6,030.',
      'Count the zeros: 25,000 has three zeros and 6,030 has two zeros.'
    ]
  },
  {
    id: 3,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stimulus: `
      <div class="comparison-question">
        <p>There are 42 students in a class. Mia's desk is 13th from the front of the room and 8th from the right side.</p>
        ${comparisonTable('The number of students sitting behind Mia', 'The number of students sitting in front of Mia')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'd',
    feedback: {
      correct: 'Correct! We know Mia is 13th from the front, so 12 students sit in front of her. But we don\'t know how many rows or columns there are, so we can\'t determine how many sit behind her.',
      incorrect: 'Think carefully: knowing Mia is 13th from the front tells you how many are in front. But can you figure out how many are behind her without knowing the arrangement of desks?'
    },
    customHints: [
      'Being 13th from the front means 12 students are in front of Mia.',
      'But how are the 42 desks arranged? We don\'t know the number of rows or columns.',
      'Without knowing the layout, we cannot determine how many students are behind her.'
    ]
  },
  {
    id: 4,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stem: "Sara is 15 years old. Three years ago she was twice as old as her brother was at that time. How old is her brother now?",
    choices: {
      a: '6 years old',
      b: '7 years old',
      c: '9 years old',
      d: '12 years old'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Three years ago Sara was 12. She was twice her brother\'s age then, so her brother was 6 at that time. Add 3 years back and he is 9 now.',
      incorrect: 'Go step by step: find Sara\'s age three years ago, then use "twice as old" to find her brother\'s age at that time, then add 3 years to get his current age.'
    },
    customHints: [
      'Three years ago Sara was 15 − 3 = 12.',
      'She was twice her brother\'s age, so her brother was 12 ÷ 2 = 6 at that time.',
      'That was 3 years ago, so her brother is 6 + 3 = 9 now.'
    ]
  },
  {
    id: 5,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stem: 'A movie starts at 11:30 AM and ends at 2:10 PM. The intermission happens exactly in the middle of the movie. What time does the intermission start?',
    choices: {
      a: '12:30 PM',
      b: '12:50 PM',
      c: '1:00 PM',
      d: '1:10 PM'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The movie is 2 hours and 40 minutes long. Half of that is 1 hour and 20 minutes. 11:30 AM plus 1 hour 20 minutes is 12:50 PM.',
      incorrect: 'First find the total length of the movie, then take half of that time and add it to the start time.'
    },
    customHints: [
      'From 11:30 AM to 2:10 PM is 2 hours and 40 minutes.',
      'Half of 2 hours and 40 minutes is 1 hour and 20 minutes.',
      '11:30 AM plus 1 hour and 20 minutes is 12:50 PM.'
    ]
  }
];
