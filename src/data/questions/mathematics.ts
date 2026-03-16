import { Question } from '../types';

const fraction = (numerator: string, denominator: string) =>
  `<span class="math-fraction" aria-label="${numerator} over ${denominator}"><span class="math-fraction-top">${numerator}</span><span class="math-fraction-bottom">${denominator}</span></span>`;

const repeatingDecimal = (whole: string, repeating: string, suffix = '') =>
  `${whole}<span class="math-repeat">${repeating}</span>${suffix}`;

export const mathematicsQuestions: Question[] = [
  {
    id: 1,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Area',
    stimulus: `<div class="math-figure"><p>Tom's backyard is shown below.</p><img src="/math/ctp5_math_q1_backyard_rectangle.svg" alt="A rectangle representing Tom's backyard labeled 13 inches across and 9 inches tall." /></div>`,
    stem: 'If he wants to turn his entire backyard into a garden, what is the largest possible area that the garden can have?',
    choices: {
      a: '117 feet',
      b: '117 inches',
      c: '117 cubic inches',
      d: '117 square inches'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! Area of a rectangle is length × width, so 13 × 9 = 117 square inches.',
      incorrect: 'This asks for area, so multiply the side lengths and make sure the unit is square inches.'
    },
    customHints: [
      'This is an area question about a rectangle.',
      'Multiply the two side lengths: 13 and 9.',
      'Area is measured in square units, not just inches.'
    ]
  },
  {
    id: 2,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Prime Numbers',
    stem: 'Which of the following numbers is a prime number?',
    choices: {
      a: '17',
      b: '21',
      c: '28',
      d: '39'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! 17 is prime because it has exactly two factors: 1 and 17.',
      incorrect: 'Check whether each number has factors besides 1 and itself. A prime number has exactly two factors.'
    },
    customHints: [
      'A prime number has exactly two factors.',
      'Try checking whether each answer can be divided evenly by smaller whole numbers.',
      '17 can only be divided evenly by 1 and 17.'
    ]
  },
  {
    id: 3,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Comparing Numbers',
    stimulus: `3 ${fraction('2', '5')} □ 3.4`,
    stem: 'What symbol completes the number sentence below?',
    choices: {
      a: '>',
      b: '=',
      c: '≤',
      d: '<'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 3 2/5 is equal to 3.4, so the missing symbol is =.',
      incorrect: 'Convert the mixed number to a decimal before comparing. Two-fifths is 0.4.'
    },
    customHints: [
      'Change 2/5 into a decimal first.',
      'Two-fifths equals 0.4.',
      'So 3 2/5 and 3.4 name the same number.'
    ]
  },
  {
    id: 4,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stimulus: `<div class="math-figure"><p>Which of the following shapes has one pair of perpendicular lines?</p><img src="/math/ctp5_math_q4_answer_shapes.svg" alt="Four labeled shapes: A is a triangle, B is a trapezoid, C is a pentagon, and D is a right triangle with a right-angle marker." /></div>`,
    stem: 'Choose the letter of the shape that has one pair of perpendicular lines.',
    choices: {
      a: 'Triangle',
      b: 'Trapezoid',
      c: 'Pentagon',
      d: 'Right triangle'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The right triangle has a marked 90-degree corner, so it has one pair of perpendicular lines.',
      incorrect: 'Look for the shape with one right angle. Perpendicular lines meet to form a 90-degree angle.'
    },
    customHints: [
      'Perpendicular lines meet at a right angle.',
      'Look for the little square corner marker in the figure.',
      'Only one of these shapes shows a 90-degree angle.'
    ]
  },
  {
    id: 5,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Probability',
    stem: 'The chances of a coin landing on heads is 0.5. Stan flips a coin twice. What is the probability that the coin will land on heads both times?',
    choices: {
      a: '0',
      b: '0.25',
      c: '0.5',
      d: '1'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! For two independent flips, multiply 0.5 by 0.5. That gives 0.25.',
      incorrect: 'Think about both flips happening. Multiply the probability of heads on the first flip by the probability of heads on the second flip.'
    },
    customHints: [
      'This is a both-times probability question.',
      'For independent events, multiply the probabilities.',
      '0.5 × 0.5 = 0.25.'
    ]
  },
  {
    id: 6,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Measurement Conversion',
    stem: "Judy's baby weighs 8 pounds. How many ounces does the baby weigh?",
    choices: {
      a: '128 ounces',
      b: '64 ounces',
      c: '256 ounces',
      d: '24 ounces'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! There are 16 ounces in 1 pound, and 8 × 16 = 128.',
      incorrect: 'Use the fact that 1 pound equals 16 ounces, then multiply by 8.'
    },
    customHints: [
      'Start with the conversion: 1 pound = 16 ounces.',
      'Multiply 8 by 16.',
      '8 × 16 = 128.'
    ]
  },
  {
    id: 7,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Volume',
    stem: 'What is the volume of a rectangular prism that has a base area of 22 square inches and a height of 8 inches?',
    choices: {
      a: '160 cubic inches',
      b: '128 cubic inches',
      c: '176 cubic inches',
      d: '144 cubic inches'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Volume = base area × height, so 22 × 8 = 176 cubic inches.',
      incorrect: 'Use the given base area directly and multiply it by the height.'
    },
    customHints: [
      'You already know the base area.',
      'Volume = base area × height.',
      '22 × 8 = 176.'
    ]
  },
  {
    id: 8,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Probability',
    stem: 'A bag contains red, blue, green, and yellow marbles. The probability of picking a red marble is 0.2. The probability of picking a blue or a red marble is 0.6. What is the probability of picking a green or a yellow marble?',
    choices: {
      a: '0.2',
      b: '0.4',
      c: '0.6',
      d: '0.8'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Green or yellow is everything that is not blue or red, so 1 - 0.6 = 0.4.',
      incorrect: 'Blue or red already accounts for 0.6 of the whole bag. Subtract that from 1 to find the rest.'
    },
    customHints: [
      'All probabilities together must add up to 1.',
      'Blue or red has probability 0.6.',
      'So green or yellow is 1 - 0.6.'
    ]
  },
  {
    id: 9,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Exponents',
    stem: 'What is another way to express 8<sup>2</sup>?',
    choices: {
      a: '8 + 8',
      b: '8 × 8',
      c: `${fraction('1', '8')} × ${fraction('1', '8')}`,
      d: '8 × 2'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 8² means 8 multiplied by itself once, or 8 × 8.',
      incorrect: 'A number squared means the number is multiplied by itself.'
    },
    customHints: [
      'Read 8² as "8 squared."',
      'Squared means multiply the number by itself.',
      'So 8² = 8 × 8.'
    ]
  },
  {
    id: 10,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'Which of the following is NOT a property of a right triangle?',
    choices: {
      a: 'One angle measures 90°.',
      b: 'All angles have a sum of 180°.',
      c: 'It has one pair of parallel lines.',
      d: 'It has two acute angles.'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! A triangle cannot have parallel sides, so that is not a property of a right triangle.',
      incorrect: 'Think about what must be true for every triangle, and then check which choice cannot happen in a triangle.'
    },
    customHints: [
      'Every triangle has angle sum 180°.',
      'A right triangle has one 90° angle and two acute angles.',
      'Ask yourself whether a triangle can have parallel sides.'
    ]
  },
  {
    id: 11,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Algebra',
    stem: 'Jackie bought x amount of cupcakes at a bake sale. Each cupcake costs $2.50. He also bought one brownie that cost $1.50. If he spent $16.50 at the bake sale, how many cupcakes did Jackie buy?',
    choices: {
      a: '3 cupcakes',
      b: '8 cupcakes',
      c: '12 cupcakes',
      d: '6 cupcakes'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! First subtract the brownie cost: $16.50 - $1.50 = $15. Then divide by $2.50 per cupcake to get 6 cupcakes.',
      incorrect: 'Remove the $1.50 brownie cost first, then divide the remaining total by $2.50.'
    },
    customHints: [
      'One brownie costs $1.50, so subtract that from the total first.',
      'The rest of the money was spent on cupcakes.',
      '$15 divided by $2.50 equals 6.'
    ]
  },
  {
    id: 12,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Place Value',
    stimulus: '4,223.234',
    stem: 'What place values share the same digit?',
    choices: {
      a: 'ones and tenths',
      b: 'thousands and hundredths',
      c: 'hundreds and hundredths',
      d: 'thousands and thousandths'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The thousands digit is 4 and the thousandths digit is also 4.',
      incorrect: 'Check each place carefully from left to right and then after the decimal.'
    },
    customHints: [
      'The thousands place is the first digit to the left of the comma.',
      'The thousandths place is the third digit to the right of the decimal.',
      'Both of those digits are 4.'
    ]
  },
  {
    id: 13,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Divisibility',
    stem: 'The number 342 is not evenly divisible by which of the following numbers?',
    choices: {
      a: '4',
      b: '3',
      c: '9',
      d: '2'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! 342 divided by 4 is 85.5, so it is not evenly divisible by 4.',
      incorrect: 'Test each divisor. 342 is divisible by 2, 3, and 9, but not by 4.'
    },
    customHints: [
      'A number divisible by 4 has last two digits divisible by 4.',
      '42 is not divisible by 4.',
      'So 342 is not evenly divisible by 4.'
    ]
  },
  {
    id: 14,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Equivalent Expressions',
    stimulus: `32 × ${fraction('5', '10')}`,
    stem: 'Which expression is equivalent to the one above?',
    choices: {
      a: '32 × 5 ÷ 10',
      b: '32 ÷ 5 ÷ 10',
      c: '32 ÷ 5 × 10',
      d: '32 × 5 × 10'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Multiplying by 5/10 is the same as multiplying by 5 and then dividing by 10.',
      incorrect: 'A fraction means numerator divided by denominator. So multiplying by 5/10 means multiply by 5, then divide by 10.'
    },
    customHints: [
      'Think of 5/10 as 5 divided by 10.',
      'Keep the 32 and the multiplication in the same order.',
      'Multiply by 5, then divide by 10.'
    ]
  },
  {
    id: 15,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Measurement Conversion',
    stem: 'A battery weighs 23 grams. How many milligrams does the battery weigh?',
    choices: {
      a: '2,300 milligrams',
      b: '0.023 milligrams',
      c: '23,000 milligrams',
      d: '0.0023 milligrams'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! There are 1,000 milligrams in 1 gram, so 23 grams is 23,000 milligrams.',
      incorrect: 'Use the conversion 1 gram = 1,000 milligrams, then multiply by 23.'
    },
    customHints: [
      'Milligrams are smaller than grams.',
      'So the number should get larger when you convert grams to milligrams.',
      '23 × 1,000 = 23,000.'
    ]
  },
  {
    id: 16,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Patterns',
    stimulus: '22, 27, 31, 36, 40 ...',
    stem: 'What is the next number in the pattern?',
    choices: {
      a: '44',
      b: '45',
      c: '48',
      d: '50'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The pattern alternates +5, +4, +5, +4, so the next step is 40 + 5 = 45.',
      incorrect: 'Look at the changes between the numbers. The pattern alternates between adding 5 and adding 4.'
    },
    customHints: [
      '27 - 22 = 5, then 31 - 27 = 4.',
      'The pattern keeps alternating +5 and +4.',
      'After 40, add 5.'
    ]
  },
  {
    id: 17,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Volume',
    stimulus: `<div class="math-figure"><p>Look at the figure below.</p><img src="/math/ctp5_math_q17_prism_v3.svg" alt="A rectangular prism made of unit cubes arranged 6 cubes long, 3 cubes deep, and 3 cubes high." /></div>`,
    stem: 'How many cubic units is the figure?',
    choices: {
      a: '18 cubic units',
      b: '36 cubic units',
      c: '54 cubic units',
      d: '72 cubic units'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The prism is 6 units long, 3 units wide, and 3 units tall, so 6 × 3 × 3 = 54 cubic units.',
      incorrect: 'Count the dimensions of the prism and multiply length × width × height.'
    },
    customHints: [
      'This is a rectangular prism made of unit cubes.',
      'Volume is length × width × height.',
      '6 × 3 × 3 = 54.'
    ]
  },
  {
    id: 18,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Comparing Fractions',
    stem: 'Which of the following fractions is greater than 0.33333?',
    choices: {
      a: fraction('1', '4'),
      b: fraction('3', '10'),
      c: fraction('4', '13'),
      d: fraction('6', '17')
    },
    key: 'd',
    feedback: {
      correct: 'Correct! 6/17 is about 0.353, which is greater than 0.33333. The other fractions are all smaller than one-third.',
      incorrect: 'Compare each fraction to one-third, or turn them into decimals to see which one is larger than 0.33333.'
    },
    customHints: [
      '0.33333 is about one-third.',
      '1/4 and 3/10 are both clearly less than one-third.',
      '6/17 is a little more than one-third.'
    ]
  },
  {
    id: 19,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Angles',
    stimulus: `<div class="math-figure"><p>Look at the angle below.</p><img src="/math/ctp5_math_q19_supplementary_angle.svg" alt="An angle diagram with one angle labeled 150 degrees and the adjacent supplementary angle labeled x." /></div>`,
    stem: 'What is the measure of x?',
    choices: {
      a: '30°',
      b: '210°',
      c: '60°',
      d: '45°'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! The two angles form a straight line, so they are supplementary. 180° - 150° = 30°.',
      incorrect: 'Angles on a straight line add to 180°. Subtract 150° from 180°.'
    },
    customHints: [
      'These two angles make a straight line.',
      'Angles on a straight line are supplementary.',
      '180° - 150° = 30°.'
    ]
  },
  {
    id: 20,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Decimal Multiplication',
    stem: 'What is 2.25 × 5.2?',
    choices: {
      a: '10.5',
      b: '11.7',
      c: '10.05',
      d: '117'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 2.25 × 5.2 = 11.7.',
      incorrect: 'Multiply as whole numbers first, then place the decimal point correctly, or break 5.2 into 5 + 0.2.'
    },
    customHints: [
      'You can think of 5.2 as 5 + 0.2.',
      '2.25 × 5 = 11.25 and 2.25 × 0.2 = 0.45.',
      '11.25 + 0.45 = 11.7.'
    ]
  },
  {
    id: 21,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Adding Mixed Numbers',
    stem: `Samantha is swimming in a race. She finished her first lap in 8 ${fraction('1', '4')} seconds, her second lap in 7 ${fraction('2', '5')} seconds, and her third lap in 9 ${fraction('3', '8')} seconds. How many total seconds did it take Samantha to finish all three laps?`,
    choices: {
      a: `25 ${fraction('1', '40')} seconds`,
      b: `24 ${fraction('3', '20')} seconds`,
      c: `24 ${fraction('6', '17')} seconds`,
      d: `25 ${fraction('2', '3')} seconds`
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Using a common denominator of 40 gives 8 10/40 + 7 16/40 + 9 15/40 = 24 41/40 = 25 1/40.',
      incorrect: 'Add the whole numbers and fractional parts separately. A common denominator of 40 works for 1/4, 2/5, and 3/8.'
    },
    customHints: [
      'Use a common denominator for 1/4, 2/5, and 3/8.',
      'A common denominator of 40 works well.',
      'After adding the fractions, regroup if the numerator is greater than the denominator.'
    ]
  },
  {
    id: 22,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Exponents',
    stem: 'How many zeros are there in 10<sup>5</sup>?',
    choices: {
      a: '15 zeros',
      b: '10 zeros',
      c: '5 zeros',
      d: '50 zeros'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 10^5 = 100,000, which has 5 zeros.',
      incorrect: 'Write out 10^5 as 10 × 10 × 10 × 10 × 10 and think about the number it makes.'
    },
    customHints: [
      '10^5 means 10 multiplied by itself 5 times.',
      'That number is 100,000.',
      'Count the zeros.'
    ]
  },
  {
    id: 23,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Multiples',
    stem: 'Which of the following numbers is a multiple of 9?',
    choices: {
      a: '2,133',
      b: '987',
      c: '1,009',
      d: '1,821'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! The digits of 2,133 add to 9, so it is divisible by 9.',
      incorrect: 'Use the divisibility rule for 9: if the sum of the digits is a multiple of 9, the number is a multiple of 9.'
    },
    customHints: [
      'Add the digits of each number.',
      'A number is divisible by 9 if its digits add to 9, 18, 27, and so on.',
      '2 + 1 + 3 + 3 = 9.'
    ]
  },
  {
    id: 24,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Ratios',
    stem: "Aunt Olivia's Bakery sells three types of cookies: chocolate chip, peanut butter, and oatmeal raisin. The bakery typically sells twice as many chocolate chip cookies as peanut butter cookies, and three times as many chocolate chip cookies as oatmeal raisin cookies. If the bakery hopes to sell 120 peanut butter cookies next week, what's a good estimation of the number of oatmeal raisin cookies they will sell next week?",
    choices: {
      a: '240 oatmeal raisin cookies',
      b: '160 oatmeal raisin cookies',
      c: '60 oatmeal raisin cookies',
      d: '80 oatmeal raisin cookies'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! Chocolate chip is twice peanut butter, so 240. Oatmeal raisin is one-third of chocolate chip, so 80.',
      incorrect: 'First find the number of chocolate chip cookies using the peanut butter amount. Then use the relationship between chocolate chip and oatmeal raisin.'
    },
    customHints: [
      'Chocolate chip is twice the peanut butter amount.',
      'So chocolate chip is 240.',
      'Oatmeal raisin is one-third of 240.'
    ]
  },
  {
    id: 25,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'Which of the following could also be called a rhombus?',
    choices: {
      a: 'rectangle',
      b: 'square',
      c: 'trapezoid',
      d: 'circle'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! A square is a special rhombus because all four sides are equal.',
      incorrect: 'A rhombus has four equal sides. Think about which choice always has four equal sides.'
    },
    customHints: [
      'A rhombus is a quadrilateral with four equal sides.',
      'A square also has four equal sides.',
      'So a square can also be called a rhombus.'
    ]
  },
  {
    id: 26,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Place Value',
    stem: 'What is the greatest place value of the product of 2.5 and 3.6?',
    choices: {
      a: 'hundreds',
      b: 'tens',
      c: 'ones',
      d: 'tenths'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 2.5 × 3.6 = 9. The greatest place value with a nonzero digit is the ones place.',
      incorrect: 'Multiply 2.5 by 3.6 first, then identify the leftmost nonzero digit in the product.'
    },
    customHints: [
      '2.5 × 3.6 = 9.',
      'The digit 9 is in the ones place.',
      'So the greatest place value is ones.'
    ]
  },
  {
    id: 27,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Money',
    stem: 'Wilson went shopping for school supplies. He purchased 3 notebooks that each cost $1.60, a pack of pencils that cost $4.35, and 5 folders that each cost $0.45. How much money did Wilson spend?',
    choices: {
      a: '$9.60',
      b: '$6.40',
      c: '$11.40',
      d: '$7.20'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 3 × 1.60 = 4.80 and 5 × 0.45 = 2.25. Then 4.80 + 4.35 + 2.25 = $11.40.',
      incorrect: 'Find the cost of the notebooks and folders first, then add those to the pencils.'
    },
    customHints: [
      '3 notebooks at $1.60 cost $4.80.',
      '5 folders at $0.45 cost $2.25.',
      'Now add $4.80, $4.35, and $2.25.'
    ]
  },
  {
    id: 28,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Equations',
    stimulus: '18 ÷ x = 4.5',
    stem: 'Which of the following values for x makes the equation true?',
    choices: {
      a: '9',
      b: '4',
      c: '5',
      d: '3'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 18 ÷ 4 = 4.5.',
      incorrect: 'Substitute each answer choice for x and see which one makes the equation true.'
    },
    customHints: [
      'You need 18 divided by x to equal 4.5.',
      'Try the choices one at a time.',
      '18 ÷ 4 = 4.5.'
    ]
  },
  {
    id: 29,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Probability',
    stimulus: `<table style="border-collapse: collapse; margin: 1em auto; min-width: 320px;">
      <tr>
        <th style="border: 1px solid var(--border-color); padding: 8px;"></th>
        <th style="border: 1px solid var(--border-color); padding: 8px;">Male</th>
        <th style="border: 1px solid var(--border-color); padding: 8px;">Female</th>
      </tr>
      <tr>
        <td style="border: 1px solid var(--border-color); padding: 8px;">Wears Glasses</td>
        <td style="border: 1px solid var(--border-color); padding: 8px; text-align: center;">5</td>
        <td style="border: 1px solid var(--border-color); padding: 8px; text-align: center;">8</td>
      </tr>
      <tr>
        <td style="border: 1px solid var(--border-color); padding: 8px;">Does Not Wear Glasses</td>
        <td style="border: 1px solid var(--border-color); padding: 8px; text-align: center;">9</td>
        <td style="border: 1px solid var(--border-color); padding: 8px; text-align: center;">8</td>
      </tr>
    </table>`,
    stem: "The chart above represents the 30 students in Ms. Busby's class. What is the probability that a randomly selected student will be a male student who wears glasses?",
    choices: {
      a: '1 out of 5',
      b: '7 out of 15',
      c: '4 out of 15',
      d: '1 out of 6'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! There are 5 male students who wear glasses out of 30 total students. 5/30 simplifies to 1/6.',
      incorrect: 'Use the number of male students who wear glasses as the favorable outcomes, and 30 as the total number of students.'
    },
    customHints: [
      'Look for the Male and Wears Glasses cell.',
      'That cell shows 5 students.',
      'The probability is 5 out of 30, which simplifies to 1 out of 6.'
    ]
  },
  {
    id: 30,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Exponents',
    stimulus: '8 × 10<sup>n</sup>',
    stem: 'If n is a whole number, how many zeros does the product above have?',
    choices: {
      a: 'n',
      b: '10',
      c: '8',
      d: '80'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Multiplying 8 by 10^n adds n zeros after the 8.',
      incorrect: 'Try small examples like 8 × 10^2 = 800 and 8 × 10^3 = 8,000.'
    },
    customHints: [
      'Think about what 10^n means.',
      'Try a few simple values of n.',
      'Each power of 10 contributes one zero.'
    ]
  },
  {
    id: 31,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Probability',
    stem: 'There are 360 people at the local theater watching a play. If 120 people in the audience are below the age of 30, what is the probability of randomly selecting one person in the audience who is at least 30 years old?',
    choices: {
      a: '10%',
      b: '50%',
      c: `${repeatingDecimal('33.', '33', '%')}`,
      d: `${repeatingDecimal('66.', '66', '%')}`
    },
    key: 'd',
    feedback: {
      correct: 'Correct! 360 - 120 = 240 people are at least 30. Then 240/360 = 2/3 ≈ 66.66%.',
      incorrect: 'First find how many people are at least 30, then divide by the total number of people.'
    },
    customHints: [
      'Subtract 120 from 360 first.',
      'That leaves 240 people who are at least 30.',
      '240 out of 360 is 2/3, or about 66.66%.'
    ]
  },
  {
    id: 32,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Rates',
    stem: `Karen has a goal to run a total of 50 miles over the summer. If she runs 2 ${fraction('1', '2')} miles every day, how long will it take her to reach her goal?`,
    choices: {
      a: '25 days',
      b: '30 days',
      c: '20 days',
      d: '18 days'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 50 ÷ 2.5 = 20 days.',
      incorrect: 'Divide the total distance by the number of miles Karen runs each day.'
    },
    customHints: [
      '2 1/2 miles is the same as 2.5 miles.',
      'You need total miles ÷ miles per day.',
      '50 ÷ 2.5 = 20.'
    ]
  },
  {
    id: 33,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Decimals',
    stimulus: `<div class="math-figure">
      <p>Look at the figure below.</p>
      <div style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;">
        <div style="display: grid; grid-template-columns: repeat(10, 14px); gap: 1px; background: var(--border-color); padding: 1px;">
          ${Array.from({ length: 100 }, (_, i) => `<span style="width: 14px; height: 14px; display: block; background: ${i < 45 ? 'var(--primary-blue)' : '#fff'};"></span>`).join('')}
        </div>
        <div style="display: grid; grid-template-columns: repeat(10, 14px); gap: 1px; background: var(--border-color); padding: 1px;">
          ${Array.from({ length: 100 }, (_, i) => `<span style="width: 14px; height: 14px; display: block; background: ${i < 36 ? 'var(--primary-blue)' : '#fff'};"></span>`).join('')}
        </div>
      </div>
    </div>`,
    stem: 'What is the sum represented by the decimal models?',
    choices: {
      a: '0.77',
      b: '0.81',
      c: '0.71',
      d: '0.75'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The first model shows 0.45 and the second shows 0.36. Their sum is 0.81.',
      incorrect: 'Count the shaded hundredths in each model and then add the two decimals.'
    },
    customHints: [
      'Each full grid represents 1 whole, so each small square is 0.01.',
      'The left model shows 45 hundredths and the right shows 36 hundredths.',
      '45 hundredths + 36 hundredths = 81 hundredths.'
    ]
  },
  {
    id: 34,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Fractions',
    stem: 'A local college holds an annual meeting for all faculty members and their spouses. Every faculty member attends the meeting. One-fifth of those in attendance are spouses of faculty members. If there are 108 spouses in attendance, how many faculty members attended without a spouse?',
    choices: {
      a: '108 faculty members',
      b: '216 faculty members',
      c: '324 faculty members',
      d: '540 faculty members'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! If spouses are 1/5 of attendees, then total attendees are 540. That means 432 faculty members attended. Since 108 of those had spouses present, 432 - 108 = 324 attended without a spouse.',
      incorrect: 'Use the 108 spouses to find the total number of attendees first, then separate faculty who had spouses from faculty who did not.'
    },
    customHints: [
      'If 108 is 1/5 of the total, multiply by 5 to get total attendance.',
      'The remaining 4/5 are faculty members.',
      'Subtract the faculty members who had spouses present.'
    ]
  },
  {
    id: 35,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Number Theory',
    stem: 'The product of a prime number and a composite number is always',
    choices: {
      a: 'a composite number',
      b: 'a prime number',
      c: 'an odd number',
      d: 'none of the above'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! A prime times a composite will always have factors besides 1 and itself, so it is composite.',
      incorrect: 'Think about whether the product can have more than two factors.'
    },
    customHints: [
      'A composite number already has extra factors.',
      'Multiplying by a prime keeps the product from being prime.',
      'So the result is composite.'
    ]
  },
  {
    id: 36,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Data Interpretation',
    stimulus: `<div class="math-figure">
      <p>The following shows the number of times a group of people do their laundry over a two-week period. Each X represents 5 people.</p>
      <table style="border-collapse: collapse; margin: 0 auto;">
        <tr><th style="padding: 6px 12px; border-bottom: 1px solid var(--border-color);">Times</th><th style="padding: 6px 12px; border-bottom: 1px solid var(--border-color);">X count</th></tr>
        <tr><td style="padding: 6px 12px; text-align: center;">0</td><td style="padding: 6px 12px;">XXX</td></tr>
        <tr><td style="padding: 6px 12px; text-align: center;">1</td><td style="padding: 6px 12px;">XXXX</td></tr>
        <tr><td style="padding: 6px 12px; text-align: center;">2</td><td style="padding: 6px 12px;">XXXX</td></tr>
        <tr><td style="padding: 6px 12px; text-align: center;">3</td><td style="padding: 6px 12px;">XXXXX</td></tr>
        <tr><td style="padding: 6px 12px; text-align: center;">4</td><td style="padding: 6px 12px;">X</td></tr>
      </table>
    </div>`,
    stem: 'How many people participated in the experiment?',
    choices: {
      a: '10 people',
      b: '17 people',
      c: '85 people',
      d: '265 people'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! There are 17 total Xs, and each X represents 5 people. 17 × 5 = 85.',
      incorrect: 'Count all the X symbols first, then multiply by 5 people per X.'
    },
    customHints: [
      'There are 3 + 4 + 4 + 5 + 1 Xs total.',
      'That makes 17 Xs.',
      'Each X is worth 5 people.'
    ]
  },
  {
    id: 37,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Volume',
    stem: 'What is the height of a rectangular prism whose volume is 288 cubic meters and base area is 96 square meters?',
    choices: {
      a: '3 meters',
      b: '12 meters',
      c: '8 meters',
      d: '6 meters'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Height = volume ÷ base area = 288 ÷ 96 = 3 meters.',
      incorrect: 'Use the relationship volume = base area × height. Divide the volume by the base area.'
    },
    customHints: [
      'Volume = base area × height.',
      'So height = volume ÷ base area.',
      '288 ÷ 96 = 3.'
    ]
  },
  {
    id: 38,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Time',
    stem: "It took Richard 4 hours and 36 minutes to drive to his grandmother's house. If Richard had taken the train, he would have arrived 92 minutes earlier. If Richard had gotten on a 1:17 PM train, what time would he have arrived at his grandmother's house?",
    choices: {
      a: '4:16 PM',
      b: '2:49 PM',
      c: '5:53 PM',
      d: '4:21 PM'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The train trip would take 4 hours 36 minutes minus 92 minutes, which is 3 hours 4 minutes. 1:17 PM + 3:04 = 4:21 PM.',
      incorrect: 'Subtract 92 minutes from the driving time first, then add that travel time to 1:17 PM.'
    },
    customHints: [
      'Convert 92 minutes to 1 hour 32 minutes.',
      '4 hours 36 minutes minus 1 hour 32 minutes equals 3 hours 4 minutes.',
      'Now add 3 hours 4 minutes to 1:17 PM.'
    ]
  },
  {
    id: 39,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Decimals',
    stem: 'If the number x is multiplied by 1,000, how many places and in which direction does the decimal move in the product?',
    choices: {
      a: '3 places to the right',
      b: '2 places to the right',
      c: '3 places to the left',
      d: '2 places to the left'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Multiplying by 1,000 moves the decimal point 3 places to the right.',
      incorrect: 'Each factor of 10 moves the decimal one place to the right when multiplying.'
    },
    customHints: [
      '1,000 = 10 × 10 × 10.',
      'Each factor of 10 moves the decimal one place to the right.',
      'So the decimal moves 3 places to the right.'
    ]
  },
  {
    id: 40,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Percents',
    stimulus: `<div class="math-figure">
      <p>The bar graph below shows the percentages of four different sources of money that a school used to raise funds for their new physics laboratory program.</p>
      <iframe class="math-embed-frame" src="/math/ctp5_math_q40_school_funding_bar_chart.html" title="School funding bar chart" loading="lazy"></iframe>
    </div>`,
    stem: 'If $2,000 came from donations, how much money came from fundraising and the school budget combined?',
    choices: {
      a: '$2,000',
      b: '$3,200',
      c: '$5,600',
      d: '$8,000'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! If 0.25 of the total is $2,000, then the total is $8,000. Fundraising plus school budget is 0.70 of the total, and 0.70 × $8,000 = $5,600.',
      incorrect: 'Use the donations amount to find the total first. Then find 70% of that total for fundraising plus school budget.'
    },
    customHints: [
      'Donations represent 25% of the total.',
      '$2,000 ÷ 0.25 = $8,000 total.',
      'Fundraising and school budget together are 0.40 + 0.30 = 0.70 of the total.'
    ]
  },
  {
    id: 41,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Volume',
    stem: "Archie the architect is modeling a room for one of his clients. According to their requests, they want a room with a length of 18 feet, a width of 20 feet, and a height of 30 feet. What is the volume of the room?",
    choices: {
      a: '10,800 cubic feet',
      b: '1,080 cubic feet',
      c: '1,260 cubic feet',
      d: '68 cubic feet'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Volume = length × width × height = 18 × 20 × 30 = 10,800 cubic feet.',
      incorrect: 'Use the volume formula for a rectangular prism: length × width × height.'
    },
    customHints: [
      'This is a rectangular prism.',
      'Volume = length × width × height.',
      '18 × 20 × 30 = 10,800.'
    ]
  },
  {
    id: 42,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Fractions',
    stem: `A sushi restaurant is preparing sushi rolls for the lunch rush. A large order was placed requesting a total of 180 sushi rolls. The order also specified that ${fraction('3', '10')} of the total order must consist of salmon rolls, ${fraction('1', '4')} must consist of tuna rolls, and ${fraction('2', '10')} must consist of yellowtail rolls. If the only other type of roll in the order is an eel roll, how many eel rolls are in the order?`,
    choices: {
      a: '45 eel rolls',
      b: '54 eel rolls',
      c: '36 eel rolls',
      d: '75 eel rolls'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Salmon = 54, tuna = 45, yellowtail = 36, for a total of 135 non-eel rolls. 180 - 135 = 45 eel rolls.',
      incorrect: 'Find each fractional part of 180 first, add those amounts, then subtract from 180.'
    },
    customHints: [
      'Find 3/10 of 180, 1/4 of 180, and 2/10 of 180.',
      'Add those three types of rolls together.',
      'Subtract that total from 180 to find the eel rolls.'
    ]
  },
  {
    id: 43,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Division',
    stem: "Last year's hot dog eating contest in Brooklyn resulted in a tie between 4 participants for first place and 6 participants for second place. If the total number of hot dogs eaten by first and second place winners was 540 hot dogs, and the second place winners each ate 50 hot dogs, how many hot dogs did each first place winner eat?",
    choices: {
      a: '40 hot dogs',
      b: '50 hot dogs',
      c: '60 hot dogs',
      d: '90 hot dogs'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Second place total = 6 × 50 = 300. First place total = 540 - 300 = 240. Then 240 ÷ 4 = 60.',
      incorrect: 'Find the total eaten by the second-place winners first, subtract from 540, then divide the remainder among the 4 first-place winners.'
    },
    customHints: [
      'Six second-place winners ate 50 each.',
      'Subtract that total from 540.',
      'Divide the remaining hot dogs by 4 first-place winners.'
    ]
  },
  {
    id: 44,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Decimals',
    stimulus: '3.7, 7.1, 5.2, 6.6, 4.8, 9.4, 6.1, 3.8',
    stem: 'Yolanda collects rare stones and wants to collect a total of 65 grams of rare stones one day. Yesterday, she had a collection of 8 rare stones that each weigh the amounts above in grams. Today, Yolanda found three rare stones that all weighed the same number of grams. She then discovered that she had reached her goal of 65 total grams. How much does each new rare stone weigh?',
    choices: {
      a: '6.0 grams',
      b: '6.1 grams',
      c: '6.3 grams',
      d: '18.3 grams'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The first 8 stones total 46.7 grams. The remaining 18.3 grams are split equally among 3 stones, so each new stone weighs 6.1 grams.',
      incorrect: 'Add the original 8 weights first, subtract from 65, and then divide the remainder by 3.'
    },
    customHints: [
      'First add the 8 original stone weights.',
      'Subtract that total from 65 grams.',
      'Divide the remaining grams equally among 3 new stones.'
    ]
  },
  {
    id: 45,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Money',
    stem: 'Rita went to a football game. She spent $13 on snacks and $17 on merchandise at the game. If the ticket for entry to the game cost three times as much as the snacks and merchandise combined, how much did Rita spend on the ticket?',
    choices: {
      a: '$30',
      b: '$60',
      c: '$90',
      d: '$120'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Snacks and merchandise cost $30 total, and the ticket cost 3 times that amount: $90.',
      incorrect: 'Add the snacks and merchandise first, then multiply by 3.'
    },
    customHints: [
      '$13 + $17 = $30.',
      'The ticket cost three times the combined amount.',
      '3 × $30 = $90.'
    ]
  },
  {
    id: 46,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Prime Numbers',
    stem: 'How many prime numbers are there between 1 and 30?',
    choices: {
      a: '8',
      b: '9',
      c: '10',
      d: '11'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The prime numbers between 1 and 30 are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29, for a total of 10.',
      incorrect: 'List the prime numbers between 1 and 30 carefully. Remember that 1 is not prime.'
    },
    customHints: [
      'A prime number has exactly two factors.',
      '1 is not prime.',
      'Count the primes from 2 through 29.'
    ]
  },
  {
    id: 47,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Probability',
    stem: 'The chart below marks the number of times it rained during September. An "X" indicates that it rained that day. If a weather reporter claims that the probability of it raining on October 1st is the same as the probability of it having rained on any given day in September, what is the probability of it raining on October 1st? Express your answer as a decimal.',
    stimulus: `<div class="math-figure"><img src="/math/ctp5_math_q47_september_rain_calendar.svg" alt="A September calendar with X marks on 12 days showing rainy days." /></div>`,
    choices: {
      a: '0.3',
      b: '0.4',
      c: '0.12',
      d: '0.6'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! It rained on 12 of the 30 days in September, so the probability is 12/30 = 0.4.',
      incorrect: 'Count the rain days first, then divide by the total number of days in September.'
    },
    customHints: [
      'September has 30 days.',
      'Count the number of days marked with an X.',
      '12 ÷ 30 = 0.4.'
    ]
  },
  {
    id: 48,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Measurement Conversion',
    stem: 'Dr. Smith dug up two large dinosaur bones in an excavation site. The first bone was 4 yards, 1 foot, and 5 inches long. The second bone was 6 yards, 2 feet, and 8 inches long. How much longer was the second bone than the first bone? Express your answer in inches.',
    choices: {
      a: '67 inches',
      b: '87 inches',
      c: '97 inches',
      d: '203 inches'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The first bone is 161 inches and the second is 248 inches. Their difference is 87 inches.',
      incorrect: 'Convert each length completely into inches first, then subtract the first from the second.'
    },
    customHints: [
      '1 yard = 36 inches and 1 foot = 12 inches.',
      'Convert each bone length entirely into inches.',
      'Subtract the shorter bone from the longer one.'
    ]
  }
];
