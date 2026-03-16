import { Question } from '../types';

export const verbalReasoningQuestions: Question[] = [
  {
    id: 1,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Verbal Analogies',
    subTheme: 'Sequential/Temporal Relationships',
    stem: 'INTRODUCTION : CONCLUSION ::',
    choices: {
      a: 'sunrise : sunset',
      b: 'apartment : house',
      c: 'bow : applause',
      d: 'match : flame'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Just as an introduction begins something and a conclusion ends it, a sunrise begins the day and a sunset ends it.',
      incorrect: 'Incorrect. Think about the relationship between introduction and conclusion - they represent the beginning and end of something. Which answer pair shows a similar beginning and end?'
    }
  },
  {
    id: 2,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Verbal Analogies',
    subTheme: 'Antonyms/Opposing Concepts',
    stem: 'HOARD : DISPERSE ::',
    choices: {
      a: 'obtain : acquire',
      b: 'oppose : disapprove',
      c: 'save : spend',
      d: 'donate : support'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Hoard and disperse are opposites (keeping vs. scattering), just as save and spend are opposites (keeping money vs. using it).',
      incorrect: 'Incorrect. Think about how hoard and disperse are opposites. Which answer pair shows a similar opposite relationship?'
    }
  },
  {
    id: 3,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Logical Reasoning',
    subTheme: 'Relative Ordering/Sequencing',
    stem: 'If Jessica is older than Sarah but younger than Nate, and if Rosa is younger than Sarah, which person is the oldest?',
    choices: {
      a: 'Jessica',
      b: 'Rosa',
      c: 'Nate',
      d: 'Sarah'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Since Jessica is younger than Nate but older than Sarah, and Rosa is younger than Sarah, Nate must be the oldest.',
      incorrect: 'Incorrect. Try ordering the ages: Rosa is younger than Sarah, who is younger than Jessica, who is younger than Nate.'
    }
  },
  {
    id: 4,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Classification',
    subTheme: 'Hierarchical Relationships',
    stem: 'Which of the following words is a heading for the others?',
    choices: {
      a: 'Snake',
      b: 'Crocodile',
      c: 'Reptile',
      d: 'Lizard'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Reptile is the category that includes snakes, crocodiles, and lizards.',
      incorrect: 'Incorrect. Look for the word that could be used as a category name for all the other options.'
    }
  },
  {
    id: 5,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Classification',
    subTheme: 'Category Recognition',
    stimulus: 'Guitar\nTrumpet\nFlute',
    stem: 'Which of the following words is the best heading for the list above?',
    choices: {
      a: 'Note',
      b: 'Piano',
      c: 'Musician',
      d: 'Instrument'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! Instrument is the category that includes guitar, trumpet, and flute.',
      incorrect: 'Incorrect. Look for the word that could be used as a category name for all the items in the list.'
    }
  },
  {
    id: 6,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Logical Reasoning',
    subTheme: 'Conditional Reasoning',
    stem: 'A zrem is a tool that is used for cutting, has two handles, and sometimes has three blades. If a tweeg is used for cutting and has two handles, then',
    choices: {
      a: 'a tweeg will have three blades',
      b: 'a tweeg could be a type of zrem',
      c: 'all cutting tools must be zrems',
      d: 'all cutting tools have two handles'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Since a tweeg has two of the three characteristics of a zrem (cutting tool and two handles), it could be a type of zrem.',
      incorrect: 'Incorrect. Consider what we know about zrems and what we know about tweegs - does a tweeg meet the requirements to potentially be a zrem?'
    }
  },
  {
    id: 7,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Verbal Analogies',
    subTheme: 'Relationship Analysis',
    stem: '["branch" is to "tree"] as ["engine" is to "automobile"]\n\nThe relationship suggested by each set of analogies above is best described as',
    choices: {
      a: 'object to purpose',
      b: 'definition to example',
      c: 'cause to effect',
      d: 'part to whole'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! A branch is a part of a tree, just as an engine is a part of an automobile. This shows a part-to-whole relationship.',
      incorrect: 'Think about how a branch relates to a tree - is it used by the tree (purpose), is it an example of a tree, does it cause the tree, or is it a piece of the whole tree? Similarly, how does an engine relate to an automobile?'
    },
    customHints: [
      "Look at the first pair: what is a branch in relation to a tree?",
      "Then look at the second pair: what is an engine in relation to an automobile?",
      "Are these components (parts) of the larger thing, or do they serve some other relationship?"
    ]
  },
  {
    id: 8,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Classification',
    subTheme: 'Category Exclusion',
    stem: 'Which of the following words does NOT belong with the others?',
    choices: {
      a: 'Planet',
      b: 'Spaceship',
      c: 'Meteor',
      d: 'Asteroid'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! A spaceship is the only human-made object in the list. Planets, meteors, and asteroids are all natural celestial bodies.',
      incorrect: 'Look at what makes these objects similar or different. Think about which ones occur naturally in space versus which ones are created by humans.'
    },
    customHints: [
      "Think about what these objects have in common - are they all natural objects?",
      "Consider which of these objects humans have created versus which ones exist naturally in space",
      "Group these items by their origin - which one stands out?"
    ]
  },
  {
    id: 9,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Logical Reasoning',
    subTheme: 'Conditional Reasoning',
    stem: 'If most mountains have jagged peaks, and if Stowe is a mountain in Vermont, then.',
    choices: {
      a: 'Stowe is the only mountain in Vermont with a jagged peak',
      b: 'all things with peaks are mountains',
      c: 'Stowe is probably over 15,000 feet high',
      d: 'Stowe probably has a jagged peak'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! Since most mountains have jagged peaks, and Stowe is a mountain, it\'s reasonable to conclude that Stowe probably has a jagged peak. This follows the logical pattern without making additional assumptions.',
      incorrect: 'Consider what we can reasonably conclude from the two given facts: (1) most mountains have jagged peaks, and (2) Stowe is a mountain. Which conclusion follows without making extra assumptions?'
    },
    customHints: [
      "What does 'most mountains have jagged peaks' tell us about any given mountain?",
      "Can we be certain about Stowe's peak, or only make a probable conclusion?",
      "Which answer avoids making assumptions beyond what the facts tell us?"
    ]
  },
  {
    id: 10,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Classification',
    subTheme: 'Category Exclusion',
    stem: 'Which of the following words does NOT belong with the others?',
    choices: {
      a: 'Round',
      b: 'Square',
      c: 'Hollow',
      d: 'Oval'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! Round, square, and oval all describe shapes, while hollow describes the inside condition or state of an object.',
      incorrect: 'Think about what type of characteristic each word describes. Most of these words describe a similar type of characteristic - which word describes something different?'
    },
    customHints: [
      "What kind of characteristic does each word describe?",
      "Which words describe the outline or shape of something?",
      "Is there a word that describes something other than shape?"
    ]
  },
  {
    id: 11,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: `(1) What are these loud crashes and bright, flashing lights outside? (2) Are they the footsteps of a giant, invisible monster with a giant flashlight coming to get me? (3) Did I anger it when I buried that bone in the backyard this afternoon, or does it just want to have me fordinner? (4) And why does it keep emptying huge buckets of water all over the ground? (5) I scamper beneath the sofa—safe refuge unless it finds me!`,
    stem: 'The passage does NOT include information that',
    choices: {
      a: 'dramatizes the action',
      b: 'gives specific examples',
      c: 'describes the setting',
      d: 'identifies the narrator'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! While the passage includes dramatic action, specific examples (crashes, lights, bone), and setting elements (outside, backyard, sofa), it never directly identifies who the narrator is (though we can infer it\'s likely a dog).',
      incorrect: 'Review what information is explicitly given in the passage. Look for dramatic elements, specific details mentioned, setting descriptions, and any direct identification of who is telling the story.'
    },
    customHints: [
      "Let's check each option against the passage - what evidence can you find for each?",
      "For dramatic action, look at words that create excitement or tension",
      "For specific examples, look for concrete details mentioned",
      "For setting, look at where things are happening",
      "For narrator identification, is there any direct statement about who is telling the story?"
    ]
  },
  {
    id: 12,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Information Integration',
    stimulus: `(1) What are these loud crashes and bright, flashing lights outside? (2) Are they the footsteps of a giant, invisible monster with a giant flashlight coming to get me? (3) Did I anger it when I buried that bone in the backyard this afternoon, or does it just want to have me fordinner? (4) And why does it keep emptying huge buckets of water all over the ground? (5) I scamper beneath the sofa—safe refuge unless it finds me!`,
    stem: 'Which of the following statements would add the most important information to the passage?',
    choices: {
      a: 'The giant\'s breath is causing the trees to shiver with fright.',
      b: 'The lights and crashing grow closer by the minute.',
      c: 'I am surprised that my owners remain unconcerned.',
      d: 'I feel safe beneath the sofa because it is dark there.'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The statement about unconcerned owners adds important context that contrasts with the narrator\'s fear, suggesting that the scary situation might be perceived differently by others.',
      incorrect: 'Think about which statement would add new, meaningful information that helps us better understand the situation or provides an important different perspective.'
    },
    customHints: [
      "Which statement adds a new perspective to the story?",
      "Look for information that might help explain if the narrator's fears are justified",
      "Consider which option provides context about how others are reacting to the situation"
    ]
  },
  {
    id: 13,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Author\'s Purpose',
    stimulus: `(1) What are these loud crashes and bright, flashing lights outside? (2) Are they the footsteps of a giant, invisible monster with a giant flashlight coming to get me? (3) Did I anger it when I buried that bone in the backyard this afternoon, or does it just want to have me fordinner? (4) And why does it keep emptying huge buckets of water all over the ground? (5) I scamper beneath the sofa—safe refuge unless it finds me!`,
    stem: 'Having information about which of the following would most help the reader understand the passage?',
    choices: {
      a: 'The narrator\'s appearance',
      b: 'The narrator\'s age',
      c: 'The house\'s size and shape',
      d: 'The time of day'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! Knowing the time of day would help explain the narrator\'s interpretation of the events - the flashing lights and loud noises might be more easily understood if we knew it was nighttime during a storm.',
      incorrect: 'Think about what information would help explain why the narrator is interpreting these events in such a frightening way. What context would help us understand the situation better?'
    },
    customHints: [
      "What information would help explain why the narrator might be scared?",
      "Which detail would help explain the presence of flashing lights and loud noises?",
      "Consider how different times of day might affect how we interpret mysterious sights and sounds"
    ]
  },
  {
    id: 14,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Critical Thinking',
    stimulus: `(1) What are these loud crashes and bright, flashing lights outside? (2) Are they the footsteps of a giant, invisible monster with a giant flashlight coming to get me? (3) Did I anger it when I buried that bone in the backyard this afternoon, or does it just want to have me fordinner? (4) And why does it keep emptying huge buckets of water all over the ground? (5) I scamper beneath the sofa—safe refuge unless it finds me!`,
    stem: 'To understand what is happening outside, it would be LEAST useful for the narrator to find out',
    choices: {
      a: 'where it is safest to hide',
      b: 'what is causing the loud crashing',
      c: 'why there are bright, flashing lights outside',
      d: 'how buckets of water can be falling from the sky'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! While finding a safe hiding place might help the narrator feel better, it wouldn\'t help understand what\'s actually happening outside. The other options would help explain the actual phenomena being observed.',
      incorrect: 'Consider which option would help explain the actual events occurring outside versus which option only deals with the narrator\'s reaction to those events.'
    },
    customHints: [
      "Which of these options would explain the actual events occurring?",
      "Consider which option is about reacting to the situation rather than understanding it",
      "Think about which information would help solve the mystery versus just responding to it"
    ]
  },
  {
    id: 15,
    category: 'Verbal Reasoning',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Drawing Conclusions',
    stimulus: `Every day for the past fifty years, the bells in the tower had rung at exactly noon. For as long as Clarissa could remember, whenever she heard the noon bells and looked out her window, she would see Newt walking toward the tower. When she saw him, she would smile and wave and he would wave back.`,
    stem: 'Which of the following conclusions can best be drawn from the information above?',
    choices: {
      a: 'Clarissa and Newt are friendly toward each other.',
      b: 'Clarissa is always home during the day.',
      c: 'Newt is more than fifty years old.',
      d: 'It is Newt\'s job to ring the bells.'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! The passage directly shows friendly interaction between Clarissa and Newt through their mutual smiling and waving, making this the most reliable conclusion we can draw from the information given.',
      incorrect: 'Look carefully at what the passage actually tells us. While we know about the bells ringing for fifty years and the friendly interaction between Clarissa and Newt, the other conclusions require assumptions beyond what\'s directly supported by the text.'
    },
    customHints: [
      "What specific interaction is described between Clarissa and Newt?",
      "Which conclusion requires the fewest assumptions beyond what's directly stated?",
      "Consider what we know for certain versus what we might be tempted to assume"
    ]
  }
]; 