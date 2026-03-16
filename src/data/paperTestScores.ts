export interface Subsection {
  label: string;
  correct: number;
  total: number;
}

export interface Section {
  label: string;
  subsections: Subsection[];
}

export interface PaperTestScores {
  vocabulary: Section;
  writing: Section;
  math: Section;
  quantitative: Section;
}

export const paperTestScores: PaperTestScores = {
  vocabulary: {
    label: "Vocabulary",
    subsections: [
      { label: "Practice questions (Q1-Q9)", correct: 0, total: 9 },
    ],
  },
  writing: {
    label: "Writing mechanics",
    subsections: [
      { label: "Retained questions", correct: 0, total: 14 },
    ],
  },
  math: {
    label: "Mathematics",
    subsections: [
      { label: "Retained questions", correct: 0, total: 22 },
    ],
  },
  quantitative: {
    label: "Quantitative reasoning",
    subsections: [
      { label: "Retained questions", correct: 0, total: 14 },
    ],
  },
};

export interface FocusArea {
  area: string;
  section: string;
  priority: "High" | "Medium" | "Low";
  notes: string;
}

export const focusAreas: FocusArea[] = [
  { area: "Probability", section: "Math", priority: "High", notes: "Confuses complement vs. probability; doesn't multiply for independent events (Q5, Q8, Q31)" },
  { area: "Unit conversion", section: "Math", priority: "High", notes: "Wrong operations or direction on measurement conversions (Q7, Q37, Q38, Q48)" },
  { area: "Exponents & expressions", section: "Math", priority: "High", notes: "Doesn't yet grasp what notation like 8² means (Q9, Q39)" },
  { area: "Fraction arithmetic", section: "Math", priority: "Medium", notes: "Errors adding mixed numbers and computing fractional parts (Q21, Q42)" },
  { area: "Subject-verb agreement", section: "Writing", priority: "Medium", notes: "Consistently chose 'No error' when verb didn't match subject (Q46, Q58, Q59)" },
  { area: "Capitalization rules", section: "Writing", priority: "Medium", notes: "Titles before names, job titles as common nouns (Q16, Q18, Q29)" },
  { area: "Logic/elimination puzzles", section: "Verbal", priority: "Low", notes: "Doesn't always work through each constraint methodically (Q53, Q55)" },
  { area: "Reading graphs & data", section: "Math", priority: "Medium", notes: "Misread bar graph proportions and computed wrong totals (Q40)" },
  { area: "Multi-step word problems", section: "Quant", priority: "High", notes: "Loses track of steps in age problems, reverse operations, and scheduling (QR Q22, Q23, Q28, Q31)" },
  { area: "Modular/cyclic reasoning", section: "Quant", priority: "High", notes: "Off-by-one errors on repeating sequences and cycle position (QR Q25, Q30)" },
  { area: "Custom operators & notation", section: "Quant", priority: "Medium", notes: "Misapplied defined operator; didn't compute (a+b)ab correctly (QR Q1)" },
  { area: "Scientific notation", section: "Quant", priority: "Medium", notes: "Miscounted zeros after expanding scientific notation (QR Q9)" },
  { area: "Insufficient information recognition", section: "Quant", priority: "Medium", notes: "Chose a definite answer when not enough info was given (QR Q10)" },
];

