import { Question } from '../types';

const segment = (label: 'A' | 'B' | 'C', text: string) =>
  `<span class="wm-segment"><span class="wm-segment-text">${text}</span><span class="wm-segment-label">${label}</span></span>`;

export const writingMechanicsPracticeQuestions: Question[] = [
  {
    id: 1,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `Last ${segment('A', 'summer,')} Daniela flew to ${segment('B', 'Denver Colorado')} to visit her ${segment('C', 'cousins.')}`,
    stem: 'Find the punctuation error, if there is one.',
    choices: {
      a: 'summer,',
      b: 'Denver Colorado',
      c: 'cousins.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. A comma is needed between the city and the state: "Denver, Colorado."',
      incorrect: 'Look at the place name in the middle of the sentence. City and state names need a comma between them.'
    }
  },
  {
    id: 2,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `All of the ${segment('A', "player's")} uniforms were ${segment('B', 'washed, folded,')} and returned to their ${segment('C', 'lockers.')}`,
    stem: 'Find the punctuation error, if there is one.',
    choices: {
      a: "player's",
      b: 'washed, folded,',
      c: 'lockers.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. The possessive should be plural: "players\'" because the sentence refers to multiple players.',
      incorrect: 'Check the apostrophe in the first segment. The sentence points to more than one player.'
    }
  },
  {
    id: 3,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `We went to visit ${segment('A', 'aunt')} ${segment('B', 'Maria')} at her new apartment ${segment('C', 'downtown.')}`,
    stem: 'Find the capitalization error, if there is one.',
    choices: {
      a: 'aunt',
      b: 'Maria',
      c: 'downtown.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. "Aunt" should be capitalized when it is used as a title directly before a name.',
      incorrect: 'Look for the family title used right before a person\'s name.'
    }
  },
  {
    id: 4,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `On ${segment('A', 'Wednesday,')} Dr. ${segment('B', 'ramirez')} will present her research at the ${segment('C', 'conference.')}`,
    stem: 'Find the capitalization error, if there is one.',
    choices: {
      a: 'Wednesday,',
      b: 'ramirez',
      c: 'conference.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. Ramirez is a proper name and should be capitalized.',
      incorrect: 'Check the doctor\'s last name. Proper names always need capital letters.'
    }
  },
  {
    id: 5,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The ${segment('A', 'students')} visited the ${segment('B', 'aquarium')} and learned about different ${segment('C', 'species')} of fish.`,
    stem: 'Find the capitalization error, if there is one.',
    choices: {
      a: 'students',
      b: 'aquarium',
      c: 'species',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. All of the capitalization in this sentence is already correct.',
      incorrect: 'None of the marked words are proper nouns or titles here.'
    }
  },
  {
    id: 6,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The company hired a new ${segment('A', 'Engineer')} to lead the ${segment('B', 'design')} ${segment('C', 'team.')}`,
    stem: 'Find the capitalization error, if there is one.',
    choices: {
      a: 'Engineer',
      b: 'design',
      c: 'team.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. Engineer is being used as a common noun here, so it should not be capitalized.',
      incorrect: 'Look for the job title. It is not being used as a formal title before a name.'
    }
  },
  {
    id: 7,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Which word is misspelled?',
    choices: {
      a: 'seperate',
      b: 'kitchen',
      c: 'holiday',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. "Seperate" is misspelled; the correct spelling is "separate."',
      incorrect: 'Look for the common vowel-order mistake.'
    }
  },
  {
    id: 8,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Which word is misspelled?',
    choices: {
      a: 'necessary',
      b: 'recieve',
      c: 'ordinary',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. "Recieve" is misspelled; the correct spelling is "receive."',
      incorrect: 'Watch the vowel order in the second choice.'
    }
  },
  {
    id: 9,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Which word is misspelled?',
    choices: {
      a: 'squirrel',
      b: 'dolphin',
      c: 'giraffe',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct. All three words are spelled correctly.',
      incorrect: 'Read each animal name carefully. None of them contains a spelling error.'
    }
  },
  {
    id: 10,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `There ${segment('A', 'is')} thirty ${segment('B', 'desks')} in the classroom arranged in five neat ${segment('C', 'rows.')}`,
    stem: 'Find the usage error, if there is one.',
    choices: {
      a: 'is',
      b: 'desks',
      c: 'rows.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct. The sentence should say "There are" because "desks" is plural.',
      incorrect: 'Find the verb that should agree with the plural subject "desks."'
    }
  },
  {
    id: 11,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Jake ${segment('A', 'earned')} a perfect score on his test because he ${segment('B', 'practice')} every night for two ${segment('C', 'weeks.')}`,
    stem: 'Find the usage error, if there is one.',
    choices: {
      a: 'earned',
      b: 'practice',
      c: 'weeks.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. "Practice" should be "practiced" to match the past-tense time frame.',
      incorrect: 'Check the verb near the middle of the sentence. It needs to match the past time frame.'
    }
  },
  {
    id: 12,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `The ${segment('A', 'rainbow')} is a natural event ${segment('B', 'to happen')} when sunlight ${segment('C', 'passes')} through water droplets.`,
    stem: 'Find the usage error, if there is one.',
    choices: {
      a: 'rainbow',
      b: 'to happen',
      c: 'passes',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct. "To happen" is awkward here; the sentence needs a phrasing like "that happens."',
      incorrect: 'Look for the part that sounds awkward rather than matching the rest of the sentence naturally.'
    }
  },
  {
    id: 13,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `The ${segment('A', 'stack')} of books on the desk of the ${segment('B', 'teacher')} ${segment('C', 'were')} about to topple and fall.`,
    stem: 'Find the usage error, if there is one.',
    choices: {
      a: 'stack',
      b: 'teacher',
      c: 'were',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. The subject is "stack," which is singular, so the verb should be "was."',
      incorrect: 'Ignore the prepositional phrases and match the verb to the true subject.'
    }
  },
  {
    id: 14,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `At the science fair on ${segment('A', 'Friday,')} the ${segment('B', 'results')} of the experiment ${segment('C', 'was')} presented to the judges.`,
    stem: 'Find the usage error, if there is one.',
    choices: {
      a: 'Friday,',
      b: 'results',
      c: 'was',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct. The subject is "results," which is plural, so the verb should be "were."',
      incorrect: 'Look for the verb that should agree with the plural subject.'
    }
  }
];
