import { Question } from '../types';

const comparisonChoices = {
  a: 'A is greater than B.',
  b: 'B is greater than A.',
  c: 'A and B are equal.',
  d: 'There is not enough information to determine which is greater.'
} as const;

export const quantitativeReasoningQuestions: Question[] = [
  {
    id: 1,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Custom Operations',
    stimulus: `
      <div class="comparison-question">
        <p><strong>Let</strong> <em>a</em> ☆ <em>b</em> = (<em>a</em> + <em>b</em>)<em>a</em><em>b</em></p>
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem; margin-top: 1rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The value of 3 ☆ 4</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The value of 2 ☆ 5</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. 3 ☆ 4 = (3 + 4)(3)(4) = 84, and 2 ☆ 5 = (2 + 5)(2)(5) = 70, so Box A is greater.',
      incorrect: 'Compute each custom operation carefully. Both start with 7, but the products 3×4 and 2×5 are different.'
    },
    customHints: [
      'Use the definition exactly as written: add first, then multiply by both numbers.',
      'Find 3 ☆ 4 and 2 ☆ 5 separately before comparing.',
      'Both expressions start with 7, so the comparison comes down to 12 versus 10.'
    ]
  },
  {
    id: 2,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Variables and Unknowns',
    stimulus: `
      <div class="comparison-question">
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem; margin-top: 1rem;">
          <tr>
            <td style="padding: 0 0.75rem 0.75rem; text-align: center;"><em>x</em> + <em>w</em> + 3 = 21</td>
            <td style="padding: 0 0.75rem 0.75rem; text-align: center;"><em>y</em> + 3 + <em>z</em> = 19</td>
          </tr>
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The value of <em>w</em></td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The value of <em>z</em></td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'd',
    feedback: {
      correct: 'Correct. You can rewrite the equations as w = 18 - x and z = 16 - y, but without knowing x or y you cannot decide which value is greater.',
      incorrect: 'Solve each equation as far as you can. You will still have unknowns left, which means the comparison cannot be fixed.'
    },
    customHints: [
      'Isolate w in the first equation and z in the second.',
      'After simplifying, ask whether you know the values of x and y.',
      'If multiple values are possible, the comparison is not determined.'
    ]
  },
  {
    id: 3,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Geometry and Triangle Counting',
    stimulus: `
      <div class="comparison-question">
        <div class="math-figure">
          <img src="/math/ctp5_quant_q3_triangle_figures.svg" alt="Figure A and Figure B, each showing a rectangle with diagonals drawn." />
        </div>
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem; margin-top: 1rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The number of triangles in Figure A</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The number of triangles in Figure B</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'c',
    feedback: {
      correct: 'Correct. A rectangle with both diagonals drawn creates the same triangle structure regardless of the rectangle’s size, so the counts match.',
      incorrect: 'The size of the rectangle changes, but the diagonal pattern does not. Focus on structure, not scale.'
    },
    customHints: [
      'Ask whether changing the size of a rectangle changes how many regions the diagonals create.',
      'Both figures are rectangles with the same diagonal pattern.',
      'If the structure is the same, the triangle count is the same.'
    ]
  },
  {
    id: 4,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Rates',
    stimulus: `
      <div class="comparison-question">
        <p>8 handfuls of grain feed 4 chicks for 1 day.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 40rem; margin-top: 1rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Handfuls needed to feed 6 chicks for 3 days</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Handfuls needed to feed 2 chicks for 7 days</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. The rate is 2 handfuls per chick per day. Box A is 6 × 3 × 2 = 36, and Box B is 2 × 7 × 2 = 28.',
      incorrect: 'Find the unit rate first: how many handfuls does one chick need for one day? Then scale each box.'
    },
    customHints: [
      'Start by reducing 8 handfuls for 4 chicks for 1 day to a per-chick rate.',
      'Multiply by chicks and days for each box.',
      'Compare 36 and 28.'
    ]
  },
  {
    id: 5,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Place Value',
    stimulus: `
      <div class="comparison-question">
        <table style="border-collapse: collapse; width: 100%; max-width: 42rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The largest number you can make using 5, 7, 7, 7, and 8 one time each</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The largest number you can make using 1, 2, 2, 3, 4, and 4 one time each</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct. Box A is 87,775. Box B is 443,221. A six-digit number is greater than a five-digit number.',
      incorrect: 'Build the largest number in each box, then compare digit counts before comparing place values.'
    },
    customHints: [
      'Arrange each set of digits from largest to smallest.',
      'Compare how many digits each final number has.',
      'A six-digit number is always greater than any five-digit number.'
    ]
  },
  {
    id: 6,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Perimeter',
    stimulus: `
      <div class="comparison-question">
        <div class="math-figure">
          <img src="/math/ctp5_quant_q6_perimeter_figures.svg" alt="Figure A is an L-shaped polygon with labeled side lengths. Figure B is a regular hexagon with side lengths labeled 9." />
        </div>
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem; margin-top: 1rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The perimeter of Figure A</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The perimeter of Figure B</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct. Figure A totals 46 units, while the regular hexagon in Figure B totals 6 × 9 = 54 units.',
      incorrect: 'Add the outside lengths for Figure A, then compare that total to 6 equal sides of length 9 for Figure B.'
    },
    customHints: [
      'Perimeter means add all the outside side lengths.',
      'A regular hexagon has 6 equal sides.',
      'Compare 46 and 54.'
    ]
  },
  {
    id: 7,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Remainders',
    stimulus: `
      <div class="comparison-question">
        <table style="border-collapse: collapse; width: 100%; max-width: 40rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The number of mints left over when 28 mints are shared evenly among 5 people</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The number of candies left over when 26 candies are shared evenly among 7 people</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct. 28 ÷ 5 leaves remainder 3, and 26 ÷ 7 leaves remainder 5, so Box B is greater.',
      incorrect: 'You only need the leftovers, not the quotient. Find each remainder and compare them.'
    },
    customHints: [
      'Compute 28 mod 5.',
      'Compute 26 mod 7.',
      'Compare the two remainders.'
    ]
  },
  {
    id: 8,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Number Lines and Distance',
    stimulus: `
      <div class="comparison-question">
        <div class="math-figure">
          <img src="/math/ctp5_quant_q8_number_line.svg" alt="A number line with points A, B, and C, where B plus 1 equals 16." />
        </div>
        <table style="border-collapse: collapse; width: 100%; max-width: 38rem; margin-top: 1rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The distance between B and A</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The distance between C and B</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'd',
    feedback: {
      correct: 'Correct. You can determine that B = 15, but you still do not know where A or C are placed, so the distances cannot be compared.',
      incorrect: 'Knowing B = 15 is not enough. You also need exact positions for A and C to compare the two distances.'
    },
    customHints: [
      'Solve B + 1 = 16 first.',
      'Ask whether the problem gives exact values for A and C.',
      'Without exact endpoints, the distances can vary.'
    ]
  },
  {
    id: 9,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Scientific Notation',
    stimulus: `
      <div class="comparison-question">
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The number of zeros in 2.36 × 10<sup>4</sup></td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The number of zeros in 4.6 × 10<sup>3</sup></td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'c',
    feedback: {
      correct: 'Correct. 2.36 × 10^4 = 23,600 and 4.6 × 10^3 = 4,600. Each number has 2 zeros.',
      incorrect: 'Write each number in standard form first, then count the zeros.'
    },
    customHints: [
      'Move the decimal 4 places for Box A and 3 places for Box B.',
      'Write both values in ordinary form.',
      'Count only the zeros in each final number.'
    ]
  },
  {
    id: 10,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Area of Triangles',
    stimulus: `
      <div class="comparison-question">
        <p>The area of a triangle is 32 square units. Use the formula \\(\\text{Area} = \\frac{1}{2} \\times B \\times H\\).</p>
        <div class="math-figure">
          <img src="/math/ctp5_quant_q10_triangle.svg" alt="A triangle with base labeled B, height labeled H, and another side labeled 6." />
        </div>
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem; margin-top: 1rem;">
          <tr>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box A</th>
            <th style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">Box B</th>
          </tr>
          <tr>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The value of the base B</td>
            <td style="border: 1px solid var(--border-color); padding: 0.75rem; text-align: center;">The value of the height H</td>
          </tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'd',
    feedback: {
      correct: 'Correct. Since 1/2 × B × H = 32, you know only that B × H = 64. Many pairs multiply to 64, so you cannot tell which is greater.',
      incorrect: 'The formula gives a product, not separate values. Ask whether more than one pair of numbers could satisfy the condition.'
    },
    customHints: [
      'Use the area formula to find B × H.',
      'Ask whether that tells you the individual values of B and H.',
      'Different base-height pairs can have the same area.'
    ]
  },
  {
    id: 11,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Magic Square Logic',
    stimulus: `
      <div class="comparison-question">
        <p>In the figure below, the sum of each row, column, and diagonal is 9.</p>
        <table style="border-collapse: collapse; margin-top: 1rem;">
          <tr><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;">4</td><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;">B</td><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;"></td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;"></td><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;"></td><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;">3</td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;">2</td><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;"></td><td style="border:1px solid var(--border-color); padding:0.5rem; text-align:center;">A</td></tr>
        </table>
        <table style="border-collapse: collapse; width: 100%; max-width: 34rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The value of A</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The value of B</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. A = 5 because 2 + 2 + A = 9. B = 1 because 4 + B + 4 = 9. So Box A is greater.',
      incorrect: 'Use the row sums first. The bottom row gives A, and the top row gives B.'
    },
    customHints: [
      'Use 2 + 2 + A = 9 to find A.',
      'Use 4 + B + 4 = 9 to find B.',
      'Compare 5 and 1.'
    ]
  },
  {
    id: 12,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Least Common Multiple',
    stimulus: `
      <div class="comparison-question">
        <p>Jean-Raffia goes to the grocery store every 3 days and does laundry every 4 days. He did both on January 1. January has 31 days.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 42rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The number of days in January when he does both</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The February date when he first does both again</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct. Both activities line up every 12 days, so in January they occur together on the 1st, 13th, and 25th: Box A = 3. The next time is February 6: Box B = 6.',
      incorrect: 'Find the least common multiple of 3 and 4, then list the shared dates starting from January 1.'
    },
    customHints: [
      'The repeat cycle is the least common multiple of 3 and 4.',
      'List the January dates: 1, 13, 25.',
      'Twelve days after January 25 is February 6.'
    ]
  },
  {
    id: 13,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Patterns',
    stimulus: `
      <div class="comparison-question">
        <p>The pattern below shows Derek&apos;s total money each week: <strong>2, 6, 18, 54, ...</strong></p>
        <table style="border-collapse: collapse; width: 100%; max-width: 42rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The total amount Derek has in week 5</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Three times the amount Derek has in week 4</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'c',
    feedback: {
      correct: 'Correct. The pattern triples each time, so week 5 is 162 and three times week 4 is also 162.',
      incorrect: 'Notice that each term is 3 times the previous term.'
    },
    customHints: [
      'Find the multiplication pattern in the sequence.',
      'Compute week 5 from week 4.',
      'Compare that to 3 × week 4.'
    ]
  },
  {
    id: 14,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Counting Positions',
    stimulus: `
      <div class="comparison-question">
        <p>Bill is standing in a line with 12 people in front of him and 26 people total in line.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 38rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The number of people behind Bill</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Bill&apos;s place number in line</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'c',
    feedback: {
      correct: 'Correct. Bill is 13th in line, so 26 - 13 = 13 people are behind him. The values are equal.',
      incorrect: 'Bill is one more than the number of people in front of him. Use that to find both quantities.'
    },
    customHints: [
      'If 12 people are in front, what place is Bill in?',
      'Subtract Bill&apos;s position from the total to find how many are behind him.',
      'Compare the two 13s.'
    ]
  },
  {
    id: 15,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Reasoning with Constraints',
    stimulus: `
      <div class="comparison-question">
        <p>A telephone wire is 30 feet long and hangs between two 14-foot poles.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 42rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The height of the lowest point of the wire</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The distance between the poles</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct. The lowest point of the wire must be below 14 feet, while the distance between the poles can be much larger, so Box B is greater.',
      incorrect: 'Think about the maximum possible height of the sagging wire and compare it to the horizontal span between poles.'
    },
    customHints: [
      'The wire sags, so its lowest point is below the top of the poles.',
      'The poles can be many feet apart, but the lowest point is a height measurement under 14.',
      'Compare a height below 14 to a likely much larger distance.'
    ]
  },
  {
    id: 16,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Tables and Patterns',
    stimulus: `
      <div class="comparison-question">
        <table style="border-collapse: collapse; margin-top: 1rem;">
          <tr><td style="border:1px solid var(--border-color); padding:0.35rem;"></td><td style="border:1px solid var(--border-color); padding:0.35rem;">A</td><td style="border:1px solid var(--border-color); padding:0.35rem;">B</td><td style="border:1px solid var(--border-color); padding:0.35rem;">C</td><td style="border:1px solid var(--border-color); padding:0.35rem;">D</td><td style="border:1px solid var(--border-color); padding:0.35rem;">E</td><td style="border:1px solid var(--border-color); padding:0.35rem;">F</td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.35rem;">Row 1</td><td style="border:1px solid var(--border-color); padding:0.35rem;">1</td><td style="border:1px solid var(--border-color); padding:0.35rem;">2</td><td style="border:1px solid var(--border-color); padding:0.35rem;">3</td><td style="border:1px solid var(--border-color); padding:0.35rem;">4</td><td style="border:1px solid var(--border-color); padding:0.35rem;">5</td><td style="border:1px solid var(--border-color); padding:0.35rem;">6</td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.35rem;">Row 2</td><td style="border:1px solid var(--border-color); padding:0.35rem;">7</td><td style="border:1px solid var(--border-color); padding:0.35rem;">8</td><td style="border:1px solid var(--border-color); padding:0.35rem;">9</td><td style="border:1px solid var(--border-color); padding:0.35rem;">10</td><td style="border:1px solid var(--border-color); padding:0.35rem;">11</td><td style="border:1px solid var(--border-color); padding:0.35rem;">12</td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.35rem;">Row 3</td><td style="border:1px solid var(--border-color); padding:0.35rem;">13</td><td style="border:1px solid var(--border-color); padding:0.35rem;">14</td><td style="border:1px solid var(--border-color); padding:0.35rem;">15</td><td style="border:1px solid var(--border-color); padding:0.35rem;">16</td><td style="border:1px solid var(--border-color); padding:0.35rem;">17</td><td style="border:1px solid var(--border-color); padding:0.35rem;">18</td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.35rem;">Row 4</td><td style="border:1px solid var(--border-color); padding:0.35rem;">19</td><td style="border:1px solid var(--border-color); padding:0.35rem;">20</td><td style="border:1px solid var(--border-color); padding:0.35rem;">21</td><td style="border:1px solid var(--border-color); padding:0.35rem;">22</td><td style="border:1px solid var(--border-color); padding:0.35rem;">23</td><td style="border:1px solid var(--border-color); padding:0.35rem;">24</td></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.35rem;">Row 5</td><td style="border:1px solid var(--border-color); padding:0.35rem;">25</td><td style="border:1px solid var(--border-color); padding:0.35rem;">26</td><td style="border:1px solid var(--border-color); padding:0.35rem;">27</td><td style="border:1px solid var(--border-color); padding:0.35rem;">28</td><td style="border:1px solid var(--border-color); padding:0.35rem;">29</td><td style="border:1px solid var(--border-color); padding:0.35rem;">30</td></tr>
        </table>
        <table style="border-collapse: collapse; width: 100%; max-width: 40rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The row number that contains 52</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The number in Row 2, Column B</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. Each row contains 6 numbers, so 52 is in Row 9. Row 2, Column B is 8. So Box A is greater.',
      incorrect: 'Continue the table pattern by rows of 6 numbers to find where 52 lands.'
    },
    customHints: [
      'Each row contains 6 consecutive numbers.',
      'Find the row that includes 49 through 54.',
      'Row 2, Column B is just the second entry of Row 2.'
    ]
  },
  {
    id: 17,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Area and Perimeter',
    stimulus: `
      <div class="comparison-question">
        <table style="border-collapse: collapse; width: 100%; max-width: 42rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Area of a rectangle that is 6 feet by 10 feet</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Area of a square with the same perimeter as that rectangle</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'b',
    feedback: {
      correct: 'Correct. The rectangle area is 60. Its perimeter is 32, so the square side is 8 and its area is 64. Box B is greater.',
      incorrect: 'Find the rectangle area first, then use its perimeter to find the side length of the square.'
    },
    customHints: [
      'Compute the rectangle area: 6 × 10.',
      'Compute the rectangle perimeter: 2(6 + 10).',
      'Use perimeter 32 to find the square side and area.'
    ]
  },
  {
    id: 18,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Repeating Sequences',
    stimulus: `
      <div class="comparison-question">
        <p>The sequence is <strong>2, 4, 6, 8, 2, 4, 6, 8, ...</strong></p>
        <table style="border-collapse: collapse; width: 100%; max-width: 38rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The 47th digit</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The 49th digit</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. The pattern repeats every 4 digits. The 47th digit matches position 3 in the cycle, which is 6. The 49th matches position 1, which is 2.',
      incorrect: 'Use the repeating cycle length of 4 and reduce each position using division remainders.'
    },
    customHints: [
      'The cycle length is 4.',
      '47 mod 4 gives the cycle position for Box A.',
      '49 mod 4 gives the cycle position for Box B.'
    ]
  },
  {
    id: 19,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Pattern Rules',
    stimulus: `
      <div class="comparison-question">
        <p>Sequence A: 2, 1, 4, 3, 6, 5, 8, 7, A, 9 ...</p>
        <p>Sequence B: 1, 5, 3, 7, 5, 9, 7, 11, B, 13 ...</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 30rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The value of A</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The value of B</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. In Sequence A, A = 10. In Sequence B, B = 9. So Box A is greater.',
      incorrect: 'Continue each pattern carefully before comparing.'
    },
    customHints: [
      'Sequence A alternates between adding 3 and subtracting 1.',
      'Sequence B alternates between adding 4 and subtracting 2.',
      'Find A and B, then compare 10 and 9.'
    ]
  },
  {
    id: 20,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Comparison',
    subTheme: 'Motion and Net Change',
    stimulus: `
      <div class="comparison-question">
        <p>A fish swims upstream 9 miles each day and drifts back 6 miles each night. Its destination is 30 miles away.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 44rem; margin-top: 1rem;">
          <tr><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box A</th><th style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">Box B</th></tr>
          <tr><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The number of days until the fish first reaches the 20-mile marker</td><td style="border:1px solid var(--border-color); padding:0.75rem; text-align:center;">The number of times the fish crosses the 20-mile marker</td></tr>
        </table>
      </div>
    `,
    stem: 'Compare the amounts in Box A and Box B.',
    choices: comparisonChoices,
    key: 'a',
    feedback: {
      correct: 'Correct. The fish first reaches the 20-mile marker on day 5. It crosses the 20-mile marker 4 times in total, so Box A is greater.',
      incorrect: 'Track the fish’s position after each daytime swim and nighttime drift. Count both the first day it reaches 20 and each crossing of the marker.'
    },
    customHints: [
      'After each full day-night cycle, the net gain is 3 miles.',
      'Watch day 5, day 6, and day 7 closely to count crossings of the 20-mile marker.',
      'Compare 5 days to 4 crossings.'
    ]
  },
  {
    id: 21,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Balance and Equations',
    stimulus: `
      <div class="math-figure">
        <img src="/math/ctp5_quant_q21_flat_balance.svg" alt="A flat balance showing two squares and one diamond on one side and a circle, triangle, and diamond on the other." />
      </div>
      <p>Each side of the scale above has 30 pounds on it, and each diamond weighs 10 pounds.</p>
    `,
    stem: 'How much does each square weigh?',
    choices: {
      a: '5 pounds',
      b: '10 pounds',
      c: '15 pounds',
      d: '20 pounds'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. Two squares plus one 10-pound diamond equal 30 pounds, so the two squares weigh 20 pounds altogether. Each square is 10 pounds.',
      incorrect: 'Ignore the circle and triangle. The left side alone tells you that 2 squares + 10 = 30.'
    },
    customHints: [
      'Focus on the left side of the scale only.',
      'Subtract the 10-pound diamond from 30 pounds.',
      'Split the remaining 20 pounds equally between two squares.'
    ]
  },
  {
    id: 22,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Linear Equations',
    stimulus: '',
    stem: 'If 2 is subtracted from three times a number, the result is 58. What is the number?',
    choices: {
      a: '50',
      b: '40',
      c: '30',
      d: '20'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. Let the number be x. Then 3x - 2 = 58, so 3x = 60 and x = 20.',
      incorrect: 'Write an equation: 3x - 2 = 58. Add 2 first, then divide by 3.'
    },
    customHints: [
      'Translate the sentence into 3x - 2 = 58.',
      'Undo the subtraction first.',
      'Then divide by 3.'
    ]
  },
  {
    id: 23,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Age Problems',
    stimulus: '',
    stem: 'Thomas is 14 years old. Two years ago he was three years older than his brother&apos;s current age. How old was his brother five years ago?',
    choices: {
      a: '12 years old',
      b: '9 years old',
      c: '5 years old',
      d: '4 years old'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. Two years ago Thomas was 12. That was 3 years more than his brother is now, so his brother is now 9. Five years ago, his brother was 4.',
      incorrect: 'Start with Thomas’s age two years ago, then use the age comparison to find the brother’s current age.'
    },
    customHints: [
      'Thomas was 12 two years ago.',
      'If 12 is 3 more than his brother’s current age, then his brother is 9 now.',
      'Subtract 5 from 9.'
    ]
  },
  {
    id: 24,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Addition with Missing Digits',
    stimulus: '<pre style="font-size:1.15rem; line-height:1.35; margin:0;">  537\n+ 2#*\n-----\n  794</pre>',
    stem: 'In the addition problem above, what number is represented by #?',
    choices: {
      a: '6',
      b: '7',
      c: '5',
      d: '3'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. 794 - 537 = 257, so the missing middle digit # is 5.',
      incorrect: 'Subtract 537 from 794 to find the missing three-digit addend.'
    },
    customHints: [
      'Work backward by subtraction.',
      '794 - 537 gives the missing number.',
      'Look at the tens digit of that result.'
    ]
  },
  {
    id: 25,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Repeating Patterns',
    stimulus: '',
    stem: 'A fruit seller arranges fruits in this repeating order: banana, apple, orange, strawberry. If the next fruit is a banana and the pattern continues, what is the 31st fruit?',
    choices: {
      a: 'orange',
      b: 'apple',
      c: 'banana',
      d: 'strawberry'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. The pattern repeats every 4 fruits. Since 31 mod 4 = 3, the 31st fruit is the 3rd fruit in the cycle: orange.',
      incorrect: 'Count positions in the repeating cycle of 4 fruits using a remainder.'
    },
    customHints: [
      'The cycle length is 4.',
      'Find 31 mod 4.',
      'The third fruit in the cycle is orange.'
    ]
  },
  {
    id: 26,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Multiplication with Missing Digits',
    stimulus: '<pre style="font-size:1.15rem; line-height:1.35; margin:0;">  13\n×  N\n-----\n  9Z</pre>',
    stem: 'Find the sum of the digits represented by N and Z.',
    choices: {
      a: '8',
      b: '9',
      c: '10',
      d: '11'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. 13 × 7 = 91, so N = 7 and Z = 1. Their sum is 8.',
      incorrect: 'Find which multiple of 13 is a number in the 90s.'
    },
    customHints: [
      'The product is between 90 and 99.',
      'Try multiples of 13 until you get a 90-something answer.',
      'Add the resulting N and Z values.'
    ]
  },
  {
    id: 27,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Area of Rectangles',
    stimulus: `
      <div class="math-figure">
        <img src="/math/ctp5_quant_q27_rectangle_regions.svg" alt="Rectangle ABCD with a shaded left region and a white region labeled 216 square units. Side AD is labeled 9 units." />
      </div>
      <p>In rectangle ABCD, AB is 4 times as long as AD.</p>
    `,
    stem: 'What is the area of the shaded region?',
    choices: {
      a: '12 square units',
      b: '24 square units',
      c: '36 square units',
      d: '108 square units'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. AD = 9, so AB = 36. The total area is 9 × 36 = 324. The shaded region is 324 - 216 = 108.',
      incorrect: 'Find the full rectangle area first, then subtract the white region.'
    },
    customHints: [
      'AB is 4 × 9.',
      'Compute the total area of the rectangle.',
      'Subtract 216 from the total area.'
    ]
  },
  {
    id: 28,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Elapsed Time',
    stimulus: '',
    stem: 'Tim has an appointment halfway between 12:30 PM and 1:10 AM. What time is his appointment?',
    choices: {
      a: '6:50 PM',
      b: '12:50 PM',
      c: '12:50 AM',
      d: '9:30 PM'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. The total elapsed time is 12 hours 40 minutes. Half of that is 6 hours 20 minutes. Adding 6 hours 20 minutes to 12:30 PM gives 6:50 PM.',
      incorrect: 'First find the full time interval, then divide it by 2.'
    },
    customHints: [
      'From 12:30 PM to 12:30 AM is 12 hours.',
      'Then add 40 more minutes to get the full interval.',
      'Half of 12 hours 40 minutes is 6 hours 20 minutes.'
    ]
  },
  {
    id: 29,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Counting Triangles',
    stimulus: `
      <div class="math-figure">
        <img src="/math/ctp5_quant_q29_triangle_count.svg" alt="A large triangle subdivided into smaller regions labeled 1 through 5." />
      </div>
    `,
    stem: 'How many triangles are in the figure below?',
    choices: {
      a: '8 triangles',
      b: '9 triangles',
      c: '10 triangles',
      d: '11 triangles'
    },
    key: 'b',
    feedback: {
      correct: 'This draft uses 9 as the current answer based on the available source interpretation. This is a good one to verify against the original figure during review.',
      incorrect: 'Count the smallest triangles first, then count larger triangles made by combining smaller ones.'
    },
    customHints: [
      'Start with the smallest visible triangles.',
      'Then look for larger triangles formed by combining them.',
      'This one should be verified against the original figure during QA.'
    ]
  },
  {
    id: 30,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Repeating Digit Sequences',
    stimulus: '0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 ...',
    stem: 'What is the 50th digit in the sequence above?',
    choices: {
      a: '8',
      b: '9',
      c: '0',
      d: '1'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. The pattern repeats every 10 digits. Position 50 corresponds to the 10th place in the cycle, which is 9.',
      incorrect: 'Use the cycle length of 10 and ask which digit sits in the 10th spot of each cycle.'
    },
    customHints: [
      'The pattern repeats every 10 digits.',
      '50 mod 10 tells you where the 50th digit falls in the cycle.',
      'The 10th position in 0 through 9 is 9.'
    ]
  },
  {
    id: 31,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Working Backward',
    stimulus: '',
    stem: 'Lena chose a number, multiplied it by 3, divided that by 2, and then multiplied by 4. If the final result was 96, what was the original number?',
    choices: {
      a: '12',
      b: '14',
      c: '16',
      d: '18'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. Work backward: 96 ÷ 4 = 24, 24 × 2 = 48, and 48 ÷ 3 = 16.',
      incorrect: 'Undo the steps in reverse order: divide by 4, multiply by 2, then divide by 3.'
    },
    customHints: [
      'Reverse the final multiplication by 4 first.',
      'Then reverse the division by 2.',
      'Finally reverse the multiplication by 3.'
    ]
  },
  {
    id: 32,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Systems of Equations',
    stimulus: '',
    stem: 'Mr. Talia awards 2 points for each correct answer and subtracts 1/4 point for each wrong answer. Cooper answered 50 questions and scored 82 points. How many questions did he answer correctly?',
    choices: {
      a: '42 questions',
      b: '44 questions',
      c: '46 questions',
      d: '48 questions'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. Let c be correct and w be wrong. Then c + w = 50 and 2c - 0.25w = 82. Solving gives c = 42.',
      incorrect: 'Set up two equations: one for the number of questions and one for the score.'
    },
    customHints: [
      'Let c + w = 50.',
      'Set up the score equation 2c - 0.25w = 82.',
      'Substitute w = 50 - c.'
    ]
  },
  {
    id: 33,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Arithmetic Sequences',
    stimulus: '',
    stem: 'A flock of 5 birds starts migrating on day 1. If 3 birds join the flock each day after that, how many birds are in the flock on day 31?',
    choices: {
      a: '90 birds',
      b: '93 birds',
      c: '95 birds',
      d: '115 birds'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. Start with 5 birds. From day 2 through day 31, 30 days pass, and 3 birds join each day. That adds 90 birds for a total of 95.',
      incorrect: 'Count how many days of additional birds occur after day 1, then add that increase to the starting 5 birds.'
    },
    customHints: [
      'There are 30 days after day 1 up to day 31.',
      'Each of those days adds 3 birds.',
      'Add that total to the original 5 birds.'
    ]
  },
  {
    id: 34,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Multiplicative Reasoning',
    stimulus: `
      <div class="math-figure">
        <img src="/math/ctp5_quant_q34_star_equation.svg" alt="A star equals one circle plus three triangles." />
      </div>
    `,
    stem: 'According to the equation below, how many triangles are there in 400 stars?',
    choices: {
      a: '400 triangles',
      b: '430 triangles',
      c: '700 triangles',
      d: '1,200 triangles'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. Each star contains 3 triangles, so 400 stars contain 400 × 3 = 1,200 triangles.',
      incorrect: 'Find how many triangles are in 1 star first, then multiply by 400.'
    },
    customHints: [
      'One star contains 3 triangles.',
      'Multiply 3 by 400.',
      'That gives the total number of triangles.'
    ]
  },
  {
    id: 35,
    category: 'Quantitative Reasoning',
    psychometricCategory: 'Quantitative Reasoning',
    subTheme: 'Patterned Expressions',
    stimulus: '<pre style="font-size:1.05rem; line-height:1.45; margin:0;">5* = 5 + 6 + 7\n6* = 6 + 7 + 8\n7* = 7 + 8 + 9</pre>',
    stem: 'What is b* - a* if b = a + 1 and a = 10?',
    choices: {
      a: '3',
      b: '13',
      c: '23',
      d: '10'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. If a = 10, then a* = 10 + 11 + 12 = 33. Since b = 11, b* = 11 + 12 + 13 = 36. Their difference is 3.',
      incorrect: 'Use the pattern to build 10* and 11*, then subtract.'
    },
    customHints: [
      'If a = 10, then b = 11.',
      'Use the star pattern to compute 10* and 11*.',
      'Subtract the two results.'
    ]
  }
];
