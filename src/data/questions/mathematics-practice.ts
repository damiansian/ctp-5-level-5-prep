import { Question } from '../types';

const fraction = (numerator: string, denominator: string) =>
  `<span class="math-fraction" aria-label="${numerator} over ${denominator}"><span class="math-fraction-top">${numerator}</span><span class="math-fraction-bottom">${denominator}</span></span>`;

export const mathematicsPracticeQuestions: Question[] = [
  // ============================================================
  // CLUSTER 1: PROBABILITY (Holly scored 3/7 — high priority)
  // ============================================================

  // 1. Independent events — multiply probabilities
  {
    id: 1,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A spinner has an equal chance of landing on red or blue. Marcus spins the spinner three times. What is the probability that the spinner lands on red all three times?',
    choices: {
      a: '1/2',
      b: '1/4',
      c: '1/8',
      d: '1/6'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Each spin has a 1/2 chance of red, and the spins are independent. Multiply: 1/2 × 1/2 × 1/2 = 1/8.',
      incorrect: 'Each spin is independent with a 1/2 chance of red. For all three events to happen, multiply the probabilities together.'
    },
    customHints: [
      'Each spin has a 1/2 chance of landing on red.',
      'Since the spinner resets each time, the spins are independent events.',
      'For independent events, multiply: 1/2 × 1/2 × 1/2.'
    ]
  },

  // 2. Complement rule — P(not A) = 1 - P(A)
  {
    id: 2,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A jar contains orange, green, and purple gumballs. The probability of picking an orange gumball is 0.3. The probability of picking an orange or green gumball is 0.75. What is the probability of picking a purple gumball?',
    choices: {
      a: '0.30',
      b: '0.75',
      c: '0.25',
      d: '0.45'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Orange or green accounts for 0.75 of the jar. Purple is everything else: 1 − 0.75 = 0.25.',
      incorrect: 'The total probability of all outcomes must equal 1. Orange or green is already 0.75. Purple is what remains.'
    },
    customHints: [
      'All probabilities in the jar add up to 1.',
      'Orange or green together make 0.75.',
      'Subtract 0.75 from 1 to find the probability of purple.'
    ]
  },

  // 3. Finding probability from a group — complement
  {
    id: 3,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'There are 200 people at a concert. If 50 people in the audience are under the age of 18, what is the probability of randomly selecting someone who is 18 or older?',
    choices: {
      a: '25%',
      b: '50%',
      c: '75%',
      d: '80%'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! There are 200 − 50 = 150 people who are 18 or older. 150/200 = 0.75, which is 75%.',
      incorrect: 'First subtract to find the number of people 18 or older. Then divide that by the total and convert to a percent.'
    },
    customHints: [
      'People 18 or older = total minus people under 18.',
      '200 − 50 = 150 people are 18 or older.',
      'Divide 150 by 200 and convert to a percentage.'
    ]
  },

  // 4. Independent events with replacement — coins
  {
    id: 4,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A bag contains 3 red marbles and 3 blue marbles. Kenji picks a marble, puts it back, and picks again. What is the probability that both marbles are blue?',
    choices: {
      a: '1/2',
      b: '1/3',
      c: '1/6',
      d: '1/4'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The probability of blue each time is 3/6 = 1/2. Since the marble is replaced, multiply: 1/2 × 1/2 = 1/4.',
      incorrect: 'First find the probability of picking blue on one draw. Since the marble is replaced, the second draw has the same probability. Multiply them.'
    },
    customHints: [
      'There are 3 blue marbles out of 6 total, so the chance of blue is 1/2.',
      'Replacing the marble means the probability stays the same for the second pick.',
      'Multiply 1/2 × 1/2 for both events happening.'
    ]
  },

  // 5. Probability from a two-way table
  {
    id: 5,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `<div class="math-figure"><p>The table shows the 40 animals at a pet shelter.</p><table class="math-table" aria-label="Pet shelter animals"><tr><th></th><th>Cat</th><th>Dog</th></tr><tr><td>Male</td><td>8</td><td>12</td></tr><tr><td>Female</td><td>10</td><td>10</td></tr></table></div>`,
    stem: 'What is the probability that a randomly selected animal is a female dog?',
    choices: {
      a: '1 out of 2',
      b: '1 out of 4',
      c: '1 out of 5',
      d: '1 out of 10'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! There are 10 female dogs out of 40 total animals. 10/40 simplifies to 1/4.',
      incorrect: 'Find the number of female dogs in the table, then divide by the total number of animals.'
    },
    customHints: [
      'Look at the cell where "Female" and "Dog" meet.',
      'There are 10 female dogs and 40 animals total.',
      'Simplify 10/40.'
    ]
  },

  // ============================================================
  // CLUSTER 2: EXPONENTS & POWERS OF 10 (Holly scored 0/2 — high priority)
  // ============================================================

  // 6. Exponent meaning — n² = n × n
  {
    id: 6,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'What is another way to express 5<sup>3</sup>?',
    choices: {
      a: '5 × 3',
      b: '5 + 5 + 5',
      c: '3 × 3 × 3 × 3 × 3',
      d: '5 × 5 × 5'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! 5³ means 5 multiplied by itself 3 times: 5 × 5 × 5.',
      incorrect: 'The exponent tells you how many times the base is used as a factor. 5³ means use 5 as a factor three times.'
    },
    customHints: [
      'The small number (3) is the exponent. It tells you how many times to multiply.',
      'The base (5) is the number being multiplied.',
      '5³ = 5 × 5 × 5, not 5 × 3.'
    ]
  },

  // 7. Exponent meaning — squared
  {
    id: 7,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Which expression has the same value as 9<sup>2</sup>?',
    choices: {
      a: '9 × 2',
      b: '9 + 9',
      c: '81',
      d: '29'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 9² means 9 × 9, which equals 81.',
      incorrect: 'Remember that the exponent 2 means "multiply the base by itself," not "multiply the base by 2." Compute 9 × 9.'
    },
    customHints: [
      '"Squared" means the number times itself.',
      '9² = 9 × 9.',
      'Compute: 9 × 9 = 81.'
    ]
  },

  // 8. Powers of 10 — decimal shift right
  {
    id: 8,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'If the number 3.47 is multiplied by 100, what is the result?',
    choices: {
      a: '0.0347',
      b: '34.7',
      c: '347',
      d: '3,470'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Multiplying by 100 moves the decimal 2 places to the right: 3.47 → 34.7 → 347.',
      incorrect: 'Multiplying by a power of 10 moves the decimal point to the right. 100 has 2 zeros, so the decimal moves 2 places right.'
    },
    customHints: [
      'Multiplying makes the number bigger, so the decimal moves to the right.',
      '100 has two zeros, so the decimal moves two places.',
      '3.47 → 34.7 → 347.'
    ]
  },

  // 9. Powers of 10 — direction matters
  {
    id: 9,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'If the number y is divided by 1,000, how many places and in which direction does the decimal move?',
    choices: {
      a: '3 places to the right',
      b: '3 places to the left',
      c: '4 places to the left',
      d: '4 places to the right'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Dividing by 1,000 moves the decimal 3 places to the left, making the number smaller.',
      incorrect: 'Dividing makes a number smaller. Each factor of 10 moves the decimal one place to the left. 1,000 has 3 zeros.'
    },
    customHints: [
      'Dividing by a power of 10 makes the number smaller.',
      'A smaller number means the decimal moves to the left.',
      '1,000 has three zeros, so three places to the left.'
    ]
  },

  // 10. Zeros in powers of 10
  {
    id: 10,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'What is the value of 4 × 10<sup>3</sup>?',
    choices: {
      a: '400',
      b: '4,000',
      c: '40,000',
      d: '12'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 10³ = 1,000, and 4 × 1,000 = 4,000.',
      incorrect: 'First figure out what 10³ equals. The exponent 3 means 10 × 10 × 10 = 1,000. Then multiply by 4.'
    },
    customHints: [
      '10³ means 10 multiplied by itself 3 times.',
      '10 × 10 × 10 = 1,000.',
      '4 × 1,000 = 4,000.'
    ]
  },

  // ============================================================
  // CLUSTER 3: VOLUME FORMULA INVERSIONS (missed Q7, Q37)
  // ============================================================

  // 11. Volume = base area × height
  {
    id: 11,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'A rectangular prism has a base area of 36 square centimeters and a height of 4 centimeters. What is its volume?',
    choices: {
      a: '40 cubic centimeters',
      b: '144 cubic centimeters',
      c: '9 cubic centimeters',
      d: '128 cubic centimeters'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Volume = base area × height = 36 × 4 = 144 cubic centimeters.',
      incorrect: 'Use the formula: volume = base area × height. Multiply 36 by 4.'
    },
    customHints: [
      'The formula is volume = base area × height.',
      'The base area is already given as 36 square centimeters.',
      'Multiply: 36 × 4.'
    ]
  },

  // 12. Find the height from volume and base area
  {
    id: 12,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'What is the height of a rectangular prism whose volume is 180 cubic feet and base area is 45 square feet?',
    choices: {
      a: '3 feet',
      b: '4 feet',
      c: '5 feet',
      d: '6 feet'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Height = volume ÷ base area = 180 ÷ 45 = 4 feet.',
      incorrect: 'If volume = base area × height, then height = volume ÷ base area. Divide 180 by 45.'
    },
    customHints: [
      'Start with the formula: volume = base area × height.',
      'To find height, rearrange: height = volume ÷ base area.',
      'Compute: 180 ÷ 45.'
    ]
  },

  // 13. Find the base area from volume and height
  {
    id: 13,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'A box has a volume of 360 cubic inches and a height of 9 inches. What is the base area of the box?',
    choices: {
      a: '40 square inches',
      b: '45 square inches',
      c: '36 square inches',
      d: '30 square inches'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Base area = volume ÷ height = 360 ÷ 9 = 40 square inches.',
      incorrect: 'Rearrange the volume formula. If volume = base area × height, then base area = volume ÷ height.'
    },
    customHints: [
      'The volume formula is: volume = base area × height.',
      'Solve for base area by dividing both sides by height.',
      '360 ÷ 9 = 40.'
    ]
  },

  // 14. Volume = length × width × height
  {
    id: 14,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'A storage container is 15 feet long, 8 feet wide, and 6 feet tall. What is the volume of the container?',
    choices: {
      a: '480 cubic feet',
      b: '720 cubic feet',
      c: '540 cubic feet',
      d: '600 cubic feet'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Volume = length × width × height = 15 × 8 × 6 = 720 cubic feet.',
      incorrect: 'Multiply all three dimensions together: length × width × height.'
    },
    customHints: [
      'For a rectangular container, volume = length × width × height.',
      'Start by multiplying two dimensions: 15 × 8 = 120.',
      'Then multiply by the third: 120 × 6.'
    ]
  },

  // ============================================================
  // CLUSTER 4: UNIT CONVERSION & MEASUREMENT (Holly scored 3/6 — high priority)
  // ============================================================

  // 15. Compound unit conversion — yards/feet/inches to inches
  {
    id: 15,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A shelf is 2 yards, 1 foot, and 8 inches long. How many inches long is the shelf?',
    choices: {
      a: '80 inches',
      b: '92 inches',
      c: '104 inches',
      d: '68 inches'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 2 yards = 72 inches, 1 foot = 12 inches, plus 8 inches: 72 + 12 + 8 = 92 inches.',
      incorrect: 'Convert each unit to inches separately. 1 yard = 36 inches, 1 foot = 12 inches. Then add all the inches together.'
    },
    customHints: [
      '1 yard = 36 inches and 1 foot = 12 inches.',
      'Convert: 2 yards = 2 × 36 = 72 inches. 1 foot = 12 inches.',
      'Add: 72 + 12 + 8.'
    ]
  },

  // 16. Subtraction of compound measurements (like Q48)
  {
    id: 16,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A rope is 3 yards, 1 foot, and 10 inches long. A shorter rope is 2 yards, 0 feet, and 7 inches long. How much longer is the first rope? Express your answer in inches.',
    choices: {
      a: '51 inches',
      b: '57 inches',
      c: '63 inches',
      d: '45 inches'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! First rope: (3 × 36) + (1 × 12) + 10 = 108 + 12 + 10 = 130 inches. Second rope: (2 × 36) + 0 + 7 = 72 + 7 = 79 inches. Difference: 130 − 79 = 51 inches.',
      incorrect: 'Convert both lengths entirely to inches first, then subtract the shorter from the longer.'
    },
    customHints: [
      '1 yard = 36 inches. 1 foot = 12 inches.',
      'Convert both ropes to inches before subtracting.',
      'First rope: (3 × 36) + (1 × 12) + 10 = 130. Second rope: (2 × 36) + 7 = 79.'
    ]
  },

  // 17. Time elapsed with subtraction (like Q38)
  {
    id: 17,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'It took Maya 3 hours and 24 minutes to drive to the lake. If Maya had taken the express bus, she would have arrived 48 minutes earlier. If Maya had gotten on a 10:15 AM bus, what time would she have arrived?',
    choices: {
      a: '12:31 PM',
      b: '12:51 PM',
      c: '1:39 PM',
      d: '1:03 PM'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Bus time = 3 hours 24 minutes − 48 minutes = 2 hours 36 minutes. 10:15 AM + 2 hours 36 minutes = 12:51 PM.',
      incorrect: 'First subtract 48 minutes from 3 hours 24 minutes to get the bus travel time. Then add that time to 10:15 AM.'
    },
    customHints: [
      'Find the bus travel time by subtracting 48 minutes from 3 hours 24 minutes.',
      '3 hours 24 minutes − 48 minutes = 2 hours 36 minutes.',
      'Now add 2 hours 36 minutes to 10:15 AM.'
    ]
  },

  // 18. Weight conversion — pounds to ounces
  {
    id: 18,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A package weighs 5 pounds and 4 ounces. How many total ounces does the package weigh?',
    choices: {
      a: '54 ounces',
      b: '64 ounces',
      c: '84 ounces',
      d: '74 ounces'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 5 pounds = 5 × 16 = 80 ounces, plus 4 ounces = 84 ounces.',
      incorrect: 'There are 16 ounces in 1 pound. Convert the pounds to ounces first, then add the extra ounces.'
    },
    customHints: [
      '1 pound = 16 ounces.',
      '5 pounds = 5 × 16 = 80 ounces.',
      'Add the remaining 4 ounces: 80 + 4 = 84.'
    ]
  },

  // ============================================================
  // CLUSTER 5: FRACTION ARITHMETIC (medium priority)
  // ============================================================

  // 19. Adding three mixed numbers with unlike denominators
  {
    id: 19,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'What is 3 1/4 + 2 1/3 + 1 1/6?',
    choices: {
      a: '6 1/12',
      b: '6 3/4',
      c: '7 1/4',
      d: '6 9/12'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Using 12 as the common denominator: 3/12 + 4/12 + 2/12 = 9/12 = 3/4. Whole numbers: 3 + 2 + 1 = 6. Total: 6 3/4.',
      incorrect: 'Find a common denominator for the fractions (12 works). Convert each fraction, add, then simplify.'
    },
    customHints: [
      'The denominators are 4, 3, and 6. A common denominator is 12.',
      '1/4 = 3/12, 1/3 = 4/12, 1/6 = 2/12.',
      'Add: 3/12 + 4/12 + 2/12 = 9/12 = 3/4. Whole numbers: 3 + 2 + 1 = 6.'
    ]
  },

  // 20. Adding two mixed numbers — requires regrouping
  {
    id: 20,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'What is 5 5/6 + 4 3/4?',
    choices: {
      a: '9 8/10',
      b: '10 7/12',
      c: '9 7/12',
      d: '10 1/2'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Common denominator is 12. 5/6 = 10/12, 3/4 = 9/12. 10/12 + 9/12 = 19/12 = 1 7/12. Total: 5 + 4 + 1 7/12 = 10 7/12.',
      incorrect: 'Use 12 as the common denominator. When the fraction parts add to more than 1, regroup by carrying over to the whole number.'
    },
    customHints: [
      'Find a common denominator. 12 works for both 6 and 4.',
      '5/6 = 10/12 and 3/4 = 9/12. Adding gives 19/12.',
      '19/12 = 1 and 7/12. Add that to the whole numbers: 5 + 4 + 1 = 10.'
    ]
  },

  // 21. Fractional parts of a total — then subtract (like Q42, Q19 original)
  {
    id: 21,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A bakery makes 200 muffins for a morning order. The order specifies that 1/5 must be blueberry, 3/10 must be chocolate, and 1/4 must be banana. The rest are plain. How many plain muffins are in the order?',
    choices: {
      a: '45',
      b: '50',
      c: '40',
      d: '55'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Blueberry: 1/5 of 200 = 40. Chocolate: 3/10 of 200 = 60. Banana: 1/4 of 200 = 50. Total specified: 40 + 60 + 50 = 150. Plain: 200 − 150 = 50.',
      incorrect: 'Calculate each fraction of 200 separately, add them up, then subtract from 200 to find the plain muffins.'
    },
    customHints: [
      'Compute each fraction of 200.',
      '1/5 of 200 = 40. 3/10 of 200 = 60. 1/4 of 200 = 50.',
      'Add those up and subtract from 200.'
    ]
  },

  // 22. Comparing a mixed number to a decimal
  {
    id: 22,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `6 ${fraction('2', '5')} &#x25A1; 6.4`,
    stem: 'What symbol completes the number sentence below?',
    choices: {
      a: '>',
      b: '<',
      c: '=',
      d: '≤'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 2/5 = 0.4, so 6 2/5 = 6.4. The two sides are equal.',
      incorrect: 'Convert the fraction 2/5 to a decimal first. Divide 2 by 5.'
    },
    customHints: [
      'Convert 2/5 to a decimal.',
      '2 ÷ 5 = 0.4.',
      '6 2/5 = 6.4, so both sides are the same.'
    ]
  },

  // ============================================================
  // CLUSTER 6: "FIND THE WHOLE FROM A PART" (missed Q34, Q40)
  // ============================================================

  // 23. Find total from a fractional part — then subtract
  {
    id: 23,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Algebra',
    stem: 'A community center holds a dinner for all volunteers and their families. Every volunteer attends. One-third of those in attendance are family members. If there are 80 family members in attendance, how many volunteers attended without a family member?',
    choices: {
      a: '80 volunteers',
      b: '160 volunteers',
      c: '100 volunteers',
      d: '240 volunteers'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! If 80 is one-third of attendance, then total = 80 × 3 = 240. Volunteers = 2/3 × 240 = 160. Since 80 volunteers brought family, volunteers without family = 160 − 80 = 80.',
      incorrect: 'Use 80 as one-third of the total to find total attendance. Then figure out how many are volunteers, and subtract the ones who brought family.'
    },
    customHints: [
      'If 1/3 of attendees are family, total attendance = 80 × 3 = 240.',
      'Volunteers make up 2/3 of 240 = 160.',
      '80 volunteers brought family members. The rest did not: 160 − 80 = 80.'
    ]
  },

  // 24. Find total from a percentage — then compute another part
  {
    id: 24,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `<div class="math-figure"><p>The bar graph shows how students at Pine Elementary get to school.</p><img src="/math/math-practice-mp24-barchart.svg" alt="A bar graph showing: Walk 0.15, Car 0.35, Bus 0.40, Bike 0.10." /></div>`,
    stem: 'If 42 students walk to school, how many students take the bus?',
    choices: {
      a: '80 students',
      b: '96 students',
      c: '112 students',
      d: '120 students'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Walk = 0.15 of total. If 42 students walk, total = 42 ÷ 0.15 = 280. Bus = 0.40 × 280 = 112.',
      incorrect: 'Use the Walk bar to find the total number of students first. If Walk is 0.15 and Walk = 42, then total = 42 ÷ 0.15. Then apply the Bus percentage.'
    },
    customHints: [
      'Walking is 15% of the total student body.',
      'If 15% = 42 students, divide to find 100%: 42 ÷ 0.15 = 280 total students.',
      'Bus is 40% of 280.'
    ]
  },

  // 25. Find total — one-sixth
  {
    id: 25,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Algebra',
    stem: 'At a science fair, one-sixth of the projects are about biology. If there are 12 biology projects, how many projects are at the science fair in total?',
    choices: {
      a: '48',
      b: '60',
      c: '72',
      d: '84'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! If 12 is one-sixth of the total, then total = 12 × 6 = 72.',
      incorrect: 'If one-sixth of the total equals 12, multiply 12 by 6 to get the whole.'
    },
    customHints: [
      'One-sixth means the total is divided into 6 equal parts.',
      'Each part = 12 projects.',
      'Total = 12 × 6.'
    ]
  },

  // ============================================================
  // CLUSTER 7: DATA READING / GRAPH INTERPRETATION (missed Q40)
  // ============================================================

  // 26. Reading a pictograph
  {
    id: 26,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `<div class="math-figure"><p>The chart shows how many books each student read last month. Each star represents 4 books.</p><table class="math-table" aria-label="Books read chart"><tr><td>Amir</td><td>★ ★ ★ ★ ★</td></tr><tr><td>Beth</td><td>★ ★ ★</td></tr><tr><td>Carlos</td><td>★ ★ ★ ★</td></tr><tr><td>Dana</td><td>★ ★</td></tr></table></div>`,
    stem: 'How many more books did Amir read than Dana?',
    choices: {
      a: '3 books',
      b: '8 books',
      c: '12 books',
      d: '15 books'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Amir has 5 stars = 20 books. Dana has 2 stars = 8 books. Difference: 20 − 8 = 12 books.',
      incorrect: 'Count each person\'s stars and multiply by 4 (since each star = 4 books). Then find the difference.'
    },
    customHints: [
      'Each star represents 4 books.',
      'Amir: 5 × 4 = 20 books. Dana: 2 × 4 = 8 books.',
      'Subtract: 20 − 8.'
    ]
  },

  // 27. Reading a calendar for probability (like Q6/Q47)
  {
    id: 27,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `<div class="math-figure"><p>The calendar shows the days it snowed during January. An "X" marks each snow day.</p><img src="/math/math-practice-mp27-calendar.svg" alt="A January calendar with 8 snow days marked with X on January 3, 7, 10, 14, 18, 21, 25, and 29." /></div>`,
    stem: 'A forecaster says the probability of snow on February 1st is the same as the probability it snowed on any given day in January. What is the probability of snow on February 1st? Express as a fraction.',
    choices: {
      a: '8/30',
      b: '8/31',
      c: '23/31',
      d: '8/28'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! There are 8 snow days out of 31 days in January, so the probability is 8/31.',
      incorrect: 'Count the snow days (X marks) and divide by the total number of days in January. January has 31 days.'
    },
    customHints: [
      'January has 31 days total.',
      'Count the number of days marked with X.',
      'Probability = snow days / total days in the month.'
    ]
  },

  // ============================================================
  // CLUSTER 8: DIVISIBILITY & NUMBER SENSE (missed Q13)
  // ============================================================

  // 28. Divisibility test
  {
    id: 28,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'The number 315 is NOT evenly divisible by which of the following numbers?',
    choices: {
      a: '3',
      b: '5',
      c: '7',
      d: '4'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! 315 ÷ 3 = 105 ✓, 315 ÷ 5 = 63 ✓, 315 ÷ 7 = 45 ✓, but 315 ÷ 4 = 78.75, so 315 is not divisible by 4.',
      incorrect: 'Test each number. A number is divisible by 3 if its digits add up to a multiple of 3. A number is divisible by 4 if its last two digits form a number divisible by 4.'
    },
    customHints: [
      'Check each divisor one at a time.',
      '315 ends in 5, so it is divisible by 5. Digit sum: 3 + 1 + 5 = 9, divisible by 3.',
      'For 4, check if the last two digits (15) are divisible by 4. 15 ÷ 4 = 3.75 — not evenly divisible.'
    ]
  },

  // ============================================================
  // CLUSTER 9: FRACTION COMPARISON (missed Q18 — chose 1/4 instead of 6/17)
  // ============================================================

  // 29. Fraction greater than a benchmark
  {
    id: 29,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Which of the following fractions is greater than 0.75?',
    choices: {
      a: '5/8',
      b: '7/10',
      c: '11/14',
      d: '3/5'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 11/14 ≈ 0.786, which is greater than 0.75. The other choices are all less than 0.75.',
      incorrect: 'Convert each fraction to a decimal and compare to 0.75. Only one is larger.'
    },
    customHints: [
      'Convert each fraction to a decimal by dividing.',
      '0.75 is the same as 3/4.',
      'Check: 5/8 = 0.625, 7/10 = 0.70, 11/14 ≈ 0.786, 3/5 = 0.60.'
    ]
  },

  // ============================================================
  // CLUSTER 10: MULTI-STEP WORD PROBLEMS (mixed)
  // ============================================================

  // 30. Rate problem (like Q18/Q32 original)
  {
    id: 30,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Aiden wants to save $150 for a new bike. If he saves $12.50 each week, how many weeks will it take him to reach his goal?',
    choices: {
      a: '10 weeks',
      b: '12 weeks',
      c: '15 weeks',
      d: '14 weeks'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 150 ÷ 12.50 = 12 weeks.',
      incorrect: 'This is a rate problem. Divide the total goal by the amount saved each week.'
    },
    customHints: [
      'Weeks = total goal ÷ savings per week.',
      '$12.50 per week is the same as $12.50.',
      '150 ÷ 12.50 = 12.'
    ]
  },

  // 31. Multi-step with subtraction then division (like Q43/Q20 original)
  {
    id: 31,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A spelling bee had 4 first-place winners and 5 second-place winners. The total words spelled correctly was 450. Each second-place winner spelled 50 words correctly. How many words did each first-place winner spell correctly?',
    choices: {
      a: '40',
      b: '50',
      c: '55',
      d: '60'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Second-place total: 5 × 50 = 250. First-place total: 450 − 250 = 200. Each first-place winner: 200 ÷ 4 = 50 words.',
      incorrect: 'Find the total for second-place winners first. Subtract from 450. Then divide the remainder by the number of first-place winners.'
    },
    customHints: [
      'Find the total words by second-place winners: 5 × 50.',
      'Subtract that from 450 to find the first-place total.',
      'Divide the first-place total by 4.'
    ]
  },

  // 32. Decimal sum then divide (like Q44 original)
  {
    id: 32,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Emma collects seashells. Her current collection weighs: 2.4, 5.1, 3.8, 4.6, 7.2, and 1.9 grams. She wants 35 grams total. She finds two more shells of equal weight to reach her goal. How much does each new shell weigh?',
    choices: {
      a: '4.0 grams',
      b: '5.0 grams',
      c: '4.5 grams',
      d: '5.5 grams'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Current total: 2.4 + 5.1 + 3.8 + 4.6 + 7.2 + 1.9 = 25.0 grams. Remaining: 35 − 25 = 10 grams. Each shell: 10 ÷ 2 = 5.0 grams.',
      incorrect: 'First add up the weights of the existing shells. Subtract from 35 to find how much weight is still needed. Divide by 2.'
    },
    customHints: [
      'Add all the existing shell weights.',
      '2.4 + 5.1 + 3.8 + 4.6 + 7.2 + 1.9 = 25.0 grams.',
      'Remaining weight: 35 − 25 = 10. Divide by 2 shells.'
    ]
  }
];
