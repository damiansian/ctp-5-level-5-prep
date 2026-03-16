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
        <p><strong>Let</strong> <em>a</em> ♦ <em>b</em> = (<em>a</em> + <em>b</em>) x <em>a</em> x <em>b</em></p>
        ${comparisonTable('The value of 4 ♦ 3', 'The value of 2 ♦ 6')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct! 4 ♦ 3 = 84 and 2 ♦ 6 = 96, so Box B is greater.',
      incorrect: 'Work out each custom operation separately. Box A is (4 + 3) x 4 x 3, and Box B is (2 + 6) x 2 x 6.'
    },
    customHints: [
      'Add the two numbers first, then multiply by both original numbers.',
      '4 ♦ 3 = 7 x 4 x 3.',
      '2 ♦ 6 = 8 x 2 x 6, and 96 is greater than 84.'
    ]
  },
  {
    id: 2,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Geometry',
    stimulus: `
      <div class="comparison-question">
        <div class="math-figure">
          <img src="/math/quant-practice-qr2-triangles.svg" alt="Figure A is a square with both diagonals. Figure B is a square with both diagonals and a horizontal line through the center." />
        </div>
        ${comparisonTable('The number of triangles in Figure A', 'The number of triangles in Figure B')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct! Figure A has 4 triangles, while Figure B has more because of the added horizontal line, so Box B is greater.',
      incorrect: 'Count the triangles in each figure carefully. The extra line in Figure B creates additional smaller and larger triangles.'
    },
    customHints: [
      'Start by counting the smallest triangles in each figure.',
      'Then look for larger triangles made by combining smaller regions.',
      'Figure B has more triangles because it has one extra line.'
    ]
  },
  {
    id: 3,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Number Properties',
    stimulus: `
      <div class="comparison-question">
        ${comparisonTable(
          'The largest number you can make using each of the digits 6, 6, 8, 9 one time',
          'The largest number you can make using each of the digits 2, 3, 4, 5, 7 one time'
        )}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct! Box A is 9,866 and Box B is 75,432. A five-digit number is greater than any four-digit number.',
      incorrect: 'Build the largest number in each box first. Then compare the number of digits before comparing place values.'
    },
    customHints: [
      'Arrange each set of digits from greatest to least.',
      'Count the digits in each number.',
      'A number with more digits is larger if both are positive whole numbers.'
    ]
  },
  {
    id: 4,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Number Properties',
    stimulus: `
      <div class="comparison-question">
        ${comparisonTable('The number of zeros in 3.15 x 10<sup>3</sup>', 'The number of zeros in 7.4 x 10<sup>2</sup>')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'c',
    feedback: {
      correct: 'Correct! 3.15 x 10³ = 3,150 and 7.4 x 10² = 740. Each number has one zero.',
      incorrect: 'Write each number in standard form first, then count the zeros in the result.'
    },
    customHints: [
      'Move the decimal right 3 places for 3.15 x 10³.',
      'Move the decimal right 2 places for 7.4 x 10².',
      'Now count the zeros in 3,150 and 740.'
    ]
  },
  {
    id: 5,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Geometry',
    stimulus: `
      <div class="comparison-question">
        <p>The area of the triangle below is 50 square units. Area of a triangle = 1/2 (B x H).</p>
        <div class="math-figure">
          <img src="/math/quant-practice-qr5-triangle.svg" alt="A triangle with base labeled B, height labeled H, and one slanted side labeled 10." />
        </div>
        ${comparisonTable('The value of the base B', 'The value of the height H')}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'd',
    feedback: {
      correct: 'Correct! Knowing the area tells us that B x H = 100, but many different base-height pairs could make that true.',
      incorrect: 'Use the area formula to relate B and H, then ask whether one exact pair is forced. It is not.'
    },
    customHints: [
      'From the area formula, 1/2 x B x H = 50.',
      'That means B x H = 100.',
      'Different pairs like 10 and 10 or 20 and 5 both work, so the comparison is not fixed.'
    ]
  },
  {
    id: 6,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Pattern Recognition',
    stimulus: `
      <div class="comparison-question">
        <p>Rosa goes to the gym every 4 days. She goes to the library every 5 days. Rosa went to both the gym and the library on March 1. There are 31 days in March.</p>
        ${comparisonTable(
          'The number of days Rosa will go to both the gym and the library during March',
          'The date of the day in April when she will first go to both the gym and the library'
        )}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct! Rosa does both activities every 20 days, so the March dates are March 1 and March 21. The next one is April 10, so 10 is greater than 2.',
      incorrect: 'Find the least common multiple of 4 and 5 first. Then list the matching dates and compare the two results.'
    },
    customHints: [
      'The schedule repeats every LCM of 4 and 5 days.',
      'LCM(4, 5) = 20.',
      'Rosa does both on March 1, March 21, and then April 10.'
    ]
  },
  {
    id: 7,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stimulus: `
      <div class="comparison-question">
        <p>There are 15 people in front of Carlos in a line. There are 30 people in the line total.</p>
        ${comparisonTable('The number of people behind Carlos', "Carlos's place number in the line")}
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct! Carlos is 16th in line, so there are 14 people behind him. Box B is greater.',
      incorrect: 'Remember to count Carlos himself when finding his place in line. Then subtract from the total to find how many are behind him.'
    },
    customHints: [
      'If 15 people are in front, Carlos is one place after them.',
      'That makes Carlos 16th.',
      'Subtract 16 from 30 to find how many people are behind him.'
    ]
  },
  {
    id: 8,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Balance and Equations',
    stem: 'If 3 is added to five times a number, the result is 48. What is the number?',
    choices: {
      a: '15',
      b: '9',
      c: '12',
      d: '51'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The equation is 5x + 3 = 48, so 5x = 45 and x = 9.',
      incorrect: 'Translate the words into an equation first: five times a number, plus 3, equals 48.'
    },
    customHints: [
      'Let the number be x.',
      'Write 5x + 3 = 48.',
      'Subtract 3, then divide by 5.'
    ]
  },
  {
    id: 9,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Geometry',
    stimulus: `
      <div class="math-figure">
        <img src="/math/quant-practice-qr9-rectangle.svg" alt="Rectangle ABCD with height 8 units, a narrow shaded strip on the left, and a white region labeled 168 square units." />
      </div>
    `,
    stem: 'In rectangle ABCD, AB is 3 times as long as AD. If the area of the white region of the rectangle is 168 square units, what is the area of the shaded region?',
    choices: {
      a: '8 square units',
      b: '16 square units',
      c: '24 square units',
      d: '48 square units'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! AD = 8 and AB = 24, so the whole rectangle has area 192. The shaded region is 192 - 168 = 24 square units.',
      incorrect: 'Use the side relationship to find the total area of the whole rectangle first. Then subtract the white region.'
    },
    customHints: [
      'AD is 8, so AB is 3 x 8 = 24.',
      'The whole rectangle has area 24 x 8 = 192.',
      'Subtract the white region area from the total.'
    ]
  },
  {
    id: 10,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stem: "Emma is 12 years old. Three years ago she was two years older than her brother's current age. How old was her brother four years ago?",
    choices: {
      a: '3 years old',
      b: '5 years old',
      c: '7 years old',
      d: '9 years old'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Three years ago Emma was 9, so her brother is currently 7. Four years ago he was 3.',
      incorrect: 'Go step by step: find Emma\'s age three years ago, then use that to find her brother\'s current age, then go back four years.'
    },
    customHints: [
      'Emma was 9 three years ago.',
      'At that time she was 2 years older than her brother is now.',
      'So her brother is 7 now and 3 four years ago.'
    ]
  },
  {
    id: 11,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Pattern Recognition',
    stem: 'A bead maker strings beads in this pattern: red, blue, green, white. If the first bead is red and she continues the pattern, what color is the 34th bead?',
    choices: {
      a: 'red',
      b: 'blue',
      c: 'green',
      d: 'white'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The pattern repeats every 4 beads, and 34 leaves remainder 2 when divided by 4. The second bead in the pattern is blue.',
      incorrect: 'Use the repeating cycle length of 4. The remainder tells you where the 34th bead falls in the pattern.'
    },
    customHints: [
      'The pattern length is 4.',
      'Find 34 mod 4.',
      'A remainder of 2 points to the second color in the pattern.'
    ]
  },
  {
    id: 12,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stem: 'Kevin has an appointment halfway between 2:00 PM and 10:00 PM. What time is his appointment?',
    choices: {
      a: '4:00 PM',
      b: '5:00 PM',
      c: '6:00 PM',
      d: '8:00 PM'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The time span from 2:00 PM to 10:00 PM is 8 hours, and halfway is 4 hours after 2:00 PM, which is 6:00 PM.',
      incorrect: 'First find the total time difference, then take half of it and add that amount to 2:00 PM.'
    },
    customHints: [
      'From 2:00 PM to 10:00 PM is 8 hours.',
      'Half of 8 hours is 4 hours.',
      '2:00 PM plus 4 hours is 6:00 PM.'
    ]
  },
  {
    id: 13,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Pattern Recognition',
    stem: 'The following digits repeat: 3, 6, 9, 3, 6, 9, 3, 6, 9 ... What is the 40th digit in this sequence?',
    choices: {
      a: '3',
      b: '6',
      c: '9',
      d: 'cannot determine'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! The pattern repeats every 3 digits, and 40 leaves remainder 1 when divided by 3. The first digit in the pattern is 3.',
      incorrect: 'Use the cycle length of 3. A remainder of 1 means the term matches the first item in the repeating block.'
    },
    customHints: [
      'The repeating block is 3 digits long.',
      'Find 40 mod 3.',
      'A remainder of 1 corresponds to the first number in the pattern.'
    ]
  },
  {
    id: 14,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Logic and Problem Solving',
    stem: 'Marcus chose a number, multiplied it by 5, subtracted 8, then divided by 3. His final answer was 14. What was his original number?',
    choices: {
      a: '8',
      b: '10',
      c: '12',
      d: '14'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Work backward from 14: multiply by 3 to get 42, add 8 to get 50, then divide by 5 to get 10.',
      incorrect: 'Undo the operations in reverse order: first multiply by 3, then add 8, then divide by 5.'
    },
    customHints: [
      'Work backward from the final answer.',
      'Undo divide by 3 with multiply by 3, then undo subtract 8.',
      'After that, divide by 5 to get the starting number.'
    ]
  }
];
