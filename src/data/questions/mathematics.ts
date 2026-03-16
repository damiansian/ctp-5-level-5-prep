import { Question } from '../types';

const fraction = (numerator: string, denominator: string) =>
  `<span class="math-fraction" aria-label="${numerator} over ${denominator}"><span class="math-fraction-top">${numerator}</span><span class="math-fraction-bottom">${denominator}</span></span>`;

export const mathematicsQuestions: Question[] = [
  {
    id: 1,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stimulus: `<div class="math-figure"><p>Lisa's patio is shown below.</p><img src="/math/math-practice-m1-rectangle.svg" alt="A rectangle labeled 11 feet across and 7 feet tall." /></div>`,
    stem: 'If she wants to cover the entire patio with tiles, what is the largest possible area that the tiles can cover?',
    choices: {
      a: '77 square feet',
      b: '77 feet',
      c: '77 cubic feet',
      d: '36 feet'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Area is length times width, so 11 x 7 = 77, and area is measured in square feet.',
      incorrect: 'Multiply 11 by 7 to get the area, then choose the answer with square feet because area uses square units.'
    },
    customHints: [
      'This is an area question about a rectangle.',
      'Multiply the two side lengths: 11 and 7.',
      'Area should be written in square units, not feet or cubic feet.'
    ]
  },
  {
    id: 2,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'Which of the following shapes could also be called a rhombus?',
    choices: {
      a: 'circle',
      b: 'trapezoid',
      c: 'square',
      d: 'rectangle'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! A square is a special kind of rhombus because all four sides are equal.',
      incorrect: 'A rhombus has four equal sides. A square fits that rule, even though it also has four right angles.'
    },
    customHints: [
      'Think about which shape must have all four sides equal.',
      'A rhombus is a quadrilateral with four equal sides.',
      'A square is a special case that still counts as a rhombus.'
    ]
  },
  {
    id: 3,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'The probability of drawing a red card from a standard deck is 1/2. Maria draws a card, puts it back, and draws again. What is the probability that both cards are red?',
    choices: {
      a: '1',
      b: '1/2',
      c: '1/4',
      d: '0'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Because the card is replaced, the draws are independent, so multiply 1/2 by 1/2 to get 1/4.',
      incorrect: 'Since the card is put back, the chance stays 1/2 each time. Multiply the two probabilities for both events happening.'
    },
    customHints: [
      'Putting the card back makes the two draws independent.',
      'For independent events, multiply the probabilities.',
      '1/2 x 1/2 = 1/4.'
    ]
  },
  {
    id: 4,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A bag contains red, yellow, and blue beads. The probability of picking a red bead is 0.15. The probability of picking a red or yellow bead is 0.55. What is the probability of picking a blue bead?',
    choices: {
      a: '0.55',
      b: '0.15',
      c: '0.40',
      d: '0.45'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! Blue is the part not included in red or yellow, so 1 - 0.55 = 0.45.',
      incorrect: 'Red or yellow already covers 0.55 of the bag. Subtract that from 1 to find the probability of blue.'
    },
    customHints: [
      'All possible outcomes together add up to 1.',
      'Red or yellow already accounts for 0.55.',
      'Blue is the complement of red or yellow.'
    ]
  },
  {
    id: 5,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'There are 250 people at a movie theater. If 75 people in the audience are children, what is the probability of randomly selecting an adult?',
    choices: {
      a: '30%',
      b: '70%',
      c: '75%',
      d: '25%'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! There are 250 - 75 = 175 adults, and 175/250 = 0.70, or 70%.',
      incorrect: 'First find the number of adults, then divide by the total number of people and convert to a percent.'
    },
    customHints: [
      'Adults are everyone who is not a child.',
      'Subtract 75 from 250 first.',
      'Then compare adults to the total number of people.'
    ]
  },
  {
    id: 6,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `<div class="math-figure"><p>The calendar shows the days it rained during October.</p><img src="/math/math-practice-m6-calendar.svg" alt="An October calendar with 10 rainy days marked with X." /></div>`,
    stem: 'If a weather reporter claims the probability of rain on November 1st is the same as the probability of it having rained on any given day in October, what is the probability of rain on November 1st? Express as a fraction.',
    choices: {
      a: '10/30',
      b: '10/31',
      c: '21/31',
      d: '10/21'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The calendar shows 10 rainy days out of 31 days in October, so the probability is 10/31.',
      incorrect: 'Count the rainy days and use the total number of days in October, which is 31.'
    },
    customHints: [
      'October has 31 days.',
      'Count how many days are marked with X.',
      'Probability is rainy days over total days.'
    ]
  },
  {
    id: 7,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'What is another way to express 6<sup>2</sup>?',
    choices: {
      a: '6 + 6',
      b: '6 x 2',
      c: '2 x 2 x 2 x 2 x 2 x 2',
      d: '6 x 6'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! 6 squared means 6 multiplied by itself once, which is 6 x 6.',
      incorrect: 'An exponent of 2 means multiply the base by itself. It does not mean multiply by 2.'
    },
    customHints: [
      'Read 6² as "6 squared."',
      'Squared means multiply the number by itself.',
      'So the base should appear twice in a multiplication sentence.'
    ]
  },
  {
    id: 8,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'The number 245 is NOT evenly divisible by which of the following numbers?',
    choices: {
      a: '5',
      b: '7',
      c: '3',
      d: '49'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 245 is divisible by 5, 7, and 49, but 2 + 4 + 5 = 11, so it is not divisible by 3.',
      incorrect: 'Check each divisor one at a time. For 3, you can use the digit-sum test: 2 + 4 + 5 = 11, which is not divisible by 3.'
    },
    customHints: [
      'Test the choices systematically instead of guessing.',
      'A number is divisible by 3 if its digits add to a multiple of 3.',
      '245 ends in 5, so it is divisible by 5.'
    ]
  },
  {
    id: 9,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Which of the following fractions is greater than 0.5?',
    choices: {
      a: '3/7',
      b: '2/5',
      c: '4/9',
      d: '5/8'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! 5/8 = 0.625, which is greater than 0.5.',
      incorrect: 'Compare each fraction to one-half. Converting them to decimals can help.'
    },
    customHints: [
      'Try changing the fractions to decimals.',
      'One-half is 0.5.',
      'Only one answer is greater than one-half.'
    ]
  },
  {
    id: 10,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'If the number x is multiplied by 10,000, how many places and in which direction does the decimal move?',
    choices: {
      a: '4 places to the left',
      b: '3 places to the right',
      c: '4 places to the right',
      d: '5 places to the right'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Multiplying by 10,000 moves the decimal 4 places to the right.',
      incorrect: 'Each factor of 10 moves the decimal one place to the right. Since 10,000 = 10 x 10 x 10 x 10, the decimal moves 4 places.'
    },
    customHints: [
      'Multiplying by powers of 10 makes the number larger.',
      '10,000 has four zeros.',
      'Each zero represents one place movement.'
    ]
  },
  {
    id: 11,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `4 ${fraction('3', '8')} &#x25A1; 4.375`,
    stem: 'What symbol completes the number sentence below?',
    choices: {
      a: '>',
      b: '<',
      c: '=',
      d: '≤'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! 3/8 = 0.375, so 4 3/8 equals 4.375.',
      incorrect: 'Convert 3/8 to a decimal first. Then compare the two numbers.'
    },
    customHints: [
      'Start by changing 3/8 into a decimal.',
      '3/8 = 0.375.',
      'Both sides name the same number.'
    ]
  },
  {
    id: 12,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stimulus: `<div class="math-figure"><p>The rectangular prism is shown below.</p><img src="/math/math-practice-m12-prism.svg" alt="A rectangular prism labeled with base area 18 square centimeters and height 5 centimeters." /></div>`,
    stem: 'What is the volume of a rectangular prism that has a base area of 18 square centimeters and a height of 5 centimeters?',
    choices: {
      a: '23 cubic centimeters',
      b: '72 cubic centimeters',
      c: '90 cubic centimeters',
      d: '108 cubic centimeters'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Volume equals base area times height, so 18 x 5 = 90 cubic centimeters.',
      incorrect: 'You already know the base area. Multiply 18 by the height of 5 to get the volume.'
    },
    customHints: [
      'Use the formula volume = base area x height.',
      'The base area is already given for you.',
      'Multiply 18 by 5.'
    ]
  },
  {
    id: 13,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Geometry',
    stem: 'What is the height of a rectangular prism whose volume is 240 cubic meters and base area is 80 square meters?',
    choices: {
      a: '2 meters',
      b: '3 meters',
      c: '4 meters',
      d: '8 meters'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Height = volume / base area = 240 / 80 = 3 meters.',
      incorrect: 'Rearrange the volume formula. If volume = base area x height, then height = volume divided by base area.'
    },
    customHints: [
      'Use the relationship volume = base area x height.',
      'You need to divide, not multiply.',
      'Compute 240 / 80.'
    ]
  },
  {
    id: 14,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'It took Sandra 3 hours and 48 minutes to drive to her aunt\'s house. If Sandra had taken the bus, she would have arrived 76 minutes earlier. If Sandra had gotten on a 2:25 PM bus, what time would she have arrived?',
    choices: {
      a: '4:37 PM',
      b: '4:57 PM',
      c: '5:17 PM',
      d: '6:13 PM'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The bus ride would take 2 hours 32 minutes, and 2:25 PM + 2:32 = 4:57 PM.',
      incorrect: 'Subtract 76 minutes from 3 hours 48 minutes first. Then add the shorter travel time to 2:25 PM.'
    },
    customHints: [
      'First find the bus travel time.',
      '76 minutes is 1 hour 16 minutes.',
      'After subtracting, add 2 hours 32 minutes to 2:25 PM.'
    ]
  },
  {
    id: 15,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'What is 5 1/3 + 3 1/6 + 2 1/4?',
    choices: {
      a: '10 1/12',
      b: '10 3/4',
      c: '11 1/4',
      d: '10 9/12'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! With denominator 12, the fractions become 4/12, 2/12, and 3/12, for a total of 9/12 = 3/4. The sum is 10 3/4.',
      incorrect: 'Use a common denominator of 12 for the fraction parts, then add the whole numbers and simplify the fraction.'
    },
    customHints: [
      'Find a common denominator for 1/3, 1/6, and 1/4.',
      'A common denominator of 12 works for all three fractions.',
      'After adding, simplify 9/12.'
    ]
  },
  {
    id: 16,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Algebra',
    stem: 'A school holds a banquet for all teachers and their guests. Every teacher attends. One-fourth of those in attendance are guests of teachers. If there are 60 guests in attendance, how many teachers attended without a guest?',
    choices: {
      a: '60 teachers',
      b: '120 teachers',
      c: '180 teachers',
      d: '240 teachers'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! If 60 is one-fourth of the attendees, then total attendance is 240. That means 180 attendees are teachers, and since 60 teachers brought guests, 120 teachers attended without a guest.',
      incorrect: 'Use 60 as one-fourth of the total to find total attendance first. Then separate teachers from guests and subtract the teachers who brought a guest.'
    },
    customHints: [
      'If guests are 1/4 of the group, multiply 60 by 4 to get the total.',
      'Teachers make up the remaining 3/4 of the attendees.',
      'Teachers who brought guests match the number of guests.'
    ]
  },
  {
    id: 17,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stimulus: `<div class="math-figure"><p>The bar graph shows the percentage of students in each of four school clubs.</p><img src="/math/math-practice-m17-barchart.svg" alt="A bar graph with Drama Club at 0.35, Art Club at 0.20, Science Club at 0.30, and Music Club at 0.15." /></div>`,
    stem: 'If 80 students are in the Art Club, how many students are in the Drama Club and Science Club combined?',
    choices: {
      a: '160 students',
      b: '200 students',
      c: '260 students',
      d: '320 students'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! If 0.20 of the students is 80, then the total is 400. Drama plus Science is 0.65 of 400, which is 260.',
      incorrect: 'Use the Art Club bar to find the total number of students first, then apply the combined percentage for Drama and Science.'
    },
    customHints: [
      'Art Club is 20% of the total.',
      'If 20% equals 80 students, then 100% equals 400 students.',
      'Drama and Science together make 65% of the total.'
    ]
  },
  {
    id: 18,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Sophia has a goal to read 60 pages over the weekend. If she reads 7 1/2 pages every hour, how many hours will it take her to reach her goal?',
    choices: {
      a: '6 hours',
      b: '8 hours',
      c: '10 hours',
      d: '12 hours'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! 7 1/2 pages per hour is 7.5 pages per hour, and 60 / 7.5 = 8 hours.',
      incorrect: 'This is a rate problem. Divide the total pages by the number of pages read each hour.'
    },
    customHints: [
      'Use hours = total pages divided by pages per hour.',
      '7 1/2 pages is the same as 7.5 pages.',
      'Compute 60 / 7.5.'
    ]
  },
  {
    id: 19,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A pizza shop prepares 240 slices for a party. The order specifies that 1/4 must be pepperoni, 2/10 must be veggie, and 3/10 must be cheese. The rest are plain. How many plain slices are in the order?',
    choices: {
      a: '48',
      b: '54',
      c: '60',
      d: '72'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Pepperoni is 60 slices, veggie is 48, and cheese is 72, for a total of 180 specified slices. That leaves 60 plain slices.',
      incorrect: 'Find each fractional part of 240, add those totals, and subtract from 240 to find the plain slices.'
    },
    customHints: [
      'Compute each category as a fraction of 240.',
      '1/4 of 240 is 60.',
      'After adding the specified slices, subtract from 240.'
    ]
  },
  {
    id: 20,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A pie eating contest had 5 first-place winners and 4 second-place winners. The total pies eaten was 380. Each second-place winner ate 30 pies. How many pies did each first-place winner eat?',
    choices: {
      a: '40',
      b: '48',
      c: '52',
      d: '60'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The second-place winners ate 4 x 30 = 120 pies. That leaves 260 pies for the 5 first-place winners, so each ate 52 pies.',
      incorrect: 'Start by finding how many pies the second-place winners ate altogether. Subtract that from 380, then divide the remainder by 5.'
    },
    customHints: [
      'Find the total for the 4 second-place winners first.',
      'Subtract that amount from 380.',
      'Then divide the remaining pies among 5 first-place winners.'
    ]
  },
  {
    id: 21,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'Rocks in a collection weigh: 4.2, 3.5, 6.8, 5.1, 2.9, 7.5 grams. The goal is 40 grams total. Two more rocks of equal weight are added to reach the goal. How much does each new rock weigh?',
    choices: {
      a: '3.0 grams',
      b: '4.0 grams',
      c: '5.0 grams',
      d: '6.0 grams'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The current rocks total 30.0 grams, leaving 10.0 grams to reach 40. Two equal rocks must therefore weigh 5.0 grams each.',
      incorrect: 'Add the existing weights first. Then subtract from 40 and split the remaining weight evenly between two rocks.'
    },
    customHints: [
      'Find the total weight of the existing rocks first.',
      '40 - 30 = 10 grams remain to be added.',
      'Two equal rocks share the remaining 10 grams.'
    ]
  },
  {
    id: 22,
    category: 'Mathematics',
    psychometricCategory: 'Mathematics',
    subTheme: 'Basic Arithmetic',
    stem: 'A fence post is 2 yards, 2 feet, and 3 inches tall. A second fence post is 4 yards, 1 foot, and 0 inches tall. How much taller is the second post? Express in inches.',
    choices: {
      a: '57 inches',
      b: '69 inches',
      c: '81 inches',
      d: '93 inches'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! The first post is 99 inches tall and the second is 156 inches tall, so the difference is 57 inches.',
      incorrect: 'Convert each measurement completely into inches first, then subtract the shorter height from the taller one.'
    },
    customHints: [
      '1 yard = 36 inches and 1 foot = 12 inches.',
      'Convert both post heights to inches before subtracting.',
      'The second post is 156 inches and the first is 99 inches.'
    ]
  }
];
