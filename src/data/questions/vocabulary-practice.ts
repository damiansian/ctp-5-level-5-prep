import { Question } from '../types';

const cleopatraPassage =
  'The rule of Queen Cleopatra VII over Egypt lasted from 51 BC until her death in 30 BC. Some historians portray Cleopatra as a brilliant and strategic leader. Alternatively, other historians describe her as reckless and overly ambitious. Cleopatra formed powerful alliances with Roman leaders during her time as queen.';

const underline = (text: string) => `<u>${text}</u>`;

export const vocabularyPracticeQuestions: Question[] = [
  {
    id: 1,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: `The ${underline('feeble')} old cat could barely jump onto the couch anymore.`,
    choices: {
      a: 'Weak and frail',
      b: 'Hungry and tired',
      c: 'Loud and angry',
      d: 'Small and young'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. Feeble means weak and frail, which matches the clue that the cat could barely jump.',
      incorrect: 'Focus on the clue barely jump. That points to weakness, not hunger or youth.'
    }
  },
  {
    id: 2,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: `The teacher asked Marcus to ${underline('elaborate')} on his answer during the class discussion.`,
    choices: {
      a: 'Erase completely',
      b: 'Repeat exactly',
      c: 'Provide more detail',
      d: 'Argue against'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. Elaborate means to explain further or provide more detail.',
      incorrect: 'The clue is on his answer during the class discussion. Marcus is being asked to explain more.'
    }
  },
  {
    id: 3,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: cleopatraPassage,
    stem: `In the passage, the word ${underline('rule')} most nearly means`,
    choices: {
      a: 'law',
      b: 'guideline',
      c: 'reign',
      d: 'command'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. Rule here means a reign, or a period of governing.',
      incorrect: 'The passage is about Cleopatra leading Egypt over time, so rule means her period of governance.'
    }
  },
  {
    id: 4,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: cleopatraPassage,
    stem: `The OPPOSITE of ${underline('alternatively')} in the passage is`,
    choices: {
      a: 'differently',
      b: 'similarly',
      c: 'quietly',
      d: 'quickly'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. Alternatively means in contrast, so similarly is the opposite.',
      incorrect: 'Look for the word that means in the same way, not another word for differently.'
    }
  },
  {
    id: 5,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The lifeguard would ___ need to rescue a swimmer at the indoor pool since the water was only three feet deep.',
    choices: {
      a: 'rarely',
      b: 'frequently',
      c: 'always',
      d: 'immediately'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. Since the water is shallow, rescue situations would be rare.',
      incorrect: 'The clue is since the water was only three feet deep. That points to a low-frequency answer.'
    }
  },
  {
    id: 6,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'No one could explain the sudden ___ in attendance at the popular summer camp despite the program receiving its best reviews ever.',
    choices: {
      a: 'incline',
      b: 'define',
      c: 'recline',
      d: 'decline'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. Despite strong reviews, attendance went down, so decline fits.',
      incorrect: 'The clue is despite the program receiving its best reviews ever. The surprising outcome is a drop in attendance.'
    }
  },
  {
    id: 7,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The striking workers announced that the company must ___ with the new safety regulations or they would refuse to return to work.',
    choices: {
      a: 'compete',
      b: 'comply',
      c: 'compare',
      d: 'complain'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. Comply with means to follow rules or regulations.',
      incorrect: 'Look for the verb that naturally goes with with the new safety regulations.'
    }
  },
  {
    id: 8,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Mia made the difficult ___ between attending the art program or the science camp for the summer.',
    choices: {
      a: 'performance',
      b: 'preference',
      c: 'decision',
      d: 'permission'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. Choosing between two options means making a decision.',
      incorrect: 'The clue is between attending the art program or the science camp. That describes a choice.'
    }
  },
  {
    id: 9,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Grandpa insists that writing letters by hand is ___ now that everyone sends text messages, but Maya believes there is still value in handwritten notes.',
    choices: {
      a: 'popular',
      b: 'reliable',
      c: 'expensive',
      d: 'obsolete'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. Obsolete means outdated or replaced by something newer.',
      incorrect: 'The clue is now that everyone sends text messages. Grandpa is saying handwritten letters have been replaced.'
    }
  }
];
