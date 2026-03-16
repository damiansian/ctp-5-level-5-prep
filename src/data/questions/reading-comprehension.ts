import { Question } from '../types';

export const readingComprehensionQuestions: Question[] = [
  {
    id: 1,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 16 of your packet.',
    stem: 'What did Justin have to do before he could turn off the water?',
    choices: {
      a: 'Go for help',
      b: 'Wake the child',
      c: 'Locate the source',
      d: 'Dig up the mud'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The passage shows Justin running around to locate where the water was coming from before he could turn off the faucet.',
      incorrect: 'Look at what Justin did when he first encountered the water - he had to find where it was coming from.'
    },
    customHints: [
      "Read lines 6-7 where Justin considers his options",
      "Notice how Justin has to run around to find the source",
      "The passage mentions Justin finding a faucet that was still running"
    ]
  },
  {
    id: 2,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Drawing Conclusions',
    stimulus: 'Refer to the reading on page 16 of your packet.',
    stem: 'Why do you think Justin used his teeth to turn off the faucet?',
    choices: {
      a: 'He had injured his paws while swimming to the main door.',
      b: 'He couldn\'t balance himself in the water and use his paws at the same time.',
      c: 'He did not know how to turn off a faucet properly.',
      d: 'His paws were filled with things he was carrying for Christopher.'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The passage shows Justin swimming and needing one forepaw to help him float, making it impossible to use his paws to turn off the faucet.',
      incorrect: 'Look at lines 3-4 where it describes how Justin was moving through the water and what he needed his paw for.'
    },
    customHints: [
      "Notice that Justin was swimming through deep water",
      "The passage mentions he needed his forepaw to help him float",
      "Think about why he couldn't use his paws while in the water"
    ]
  },
  {
    id: 3,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 16 of your packet.',
    stem: 'At the end of the passage, how did Justin feel toward Christopher?',
    choices: {
      a: 'Indifferent',
      b: 'Angry',
      c: 'Enthusiastic',
      d: 'Anxious'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Justin was angry at Christopher, as shown by his reaction to Christopher being unconcerned about the potential catastrophe.',
      incorrect: 'Read lines 12-15 where Justin reacts to Christopher\'s unconcerned attitude about the near catastrophe.'
    },
    customHints: [
      "Look at Justin's response when Christopher seems unconcerned",
      "Notice Justin's tone when he mentions the potential damage",
      "Consider Justin's reaction to Christopher's lack of concern about the nest"
    ]
  },
  {
    id: 4,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Information Integration',
    stimulus: 'Refer to the reading on page 16 of your packet.',
    stem: 'What did Justin do earlier that enabled him to save the nest?',
    choices: {
      a: 'He fell asleep.',
      b: 'He listened for the sound of running water.',
      c: 'He decided to stay home from the party.',
      d: 'He went to look for Christopher.'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! As mentioned in the last lines, Justin had stayed home from the party, which allowed him to be there to prevent the disaster.',
      incorrect: 'Look at the final lines where Justin mentions what could have happened if he hadn\'t stayed home from the party.'
    },
    customHints: [
      "Read the last few lines of the passage",
      "Notice what Justin says about the party",
      "Think about what decision allowed Justin to be there to prevent the disaster"
    ]
  },
  {
    id: 5,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 18 of your packet.',
    stem: 'Which of the following statements is the best summary of the passage?',
    choices: {
      a: 'Modern Egyptian farmers use the same agricultural methods as their ancestors.',
      b: 'Egypt is a dry country that is inhospitable to people and most wildlife.',
      c: 'The Nile River was recognized long ago as the longest river in the world.',
      d: 'The Nile River helps support life in an otherwise hostile environment.'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The passage emphasizes how the Nile River makes life possible in Egypt\'s desert environment, supporting agriculture, wildlife, and human settlement.',
      incorrect: 'Look at the overall message of the passage - how does the Nile River transform the desert environment of Egypt?'
    },
    customHints: [
      "Consider the contrast between Egypt's desert climate and the life-giving properties of the Nile",
      "Notice how the passage describes both the harsh environment and the river's benefits",
      "Think about what makes the Nile so important to Egypt's inhabitants"
    ]
  },
  {
    id: 6,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 18 of your packet.',
    stem: 'The passage suggests that the people of Egypt',
    choices: {
      a: 'are knowledgeable about crocodiles',
      b: 'need the Nile to survive',
      c: 'are mostly farmers',
      d: 'boast that the Nile is the longest river in the world'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The passage emphasizes how the Nile River is essential for life in Egypt, providing water in an otherwise very dry environment.',
      incorrect: "Consider what the passage says about Egypt's climate and how the Nile makes life possible there."
    },
    customHints: [
      "Look at how the passage describes Egypt's climate without the Nile",
      "Notice the details about rainfall and the desert environment",
      "Think about why the Nile is called 'the gift of the Nile'"
    ]
  },
  {
    id: 7,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 18 of your packet.',
    stem: 'Which of the following statements is an opinion?',
    choices: {
      a: 'The river is the habitat of many reptiles, fish, and birds.',
      b: 'The Nile valley is never more than twelve miles wide.',
      c: 'Egypt is most appropriately called "the gift of the Nile."',
      d: 'Channeling water helps to grow crops.'
    },
    key: 'c',
    feedback: {
      correct: "Correct! This statement represents Herodotus's opinion about Egypt's relationship with the Nile, rather than a verifiable fact.",
      incorrect: "Look for the statement that expresses a judgment or personal view rather than a measurable fact."
    },
    customHints: [
      "Consider which statement cannot be measured or verified objectively",
      "Look for words that suggest judgment or evaluation",
      "Think about the difference between facts that can be proven and statements of belief"
    ]
  },
  {
    id: 8,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 20 of your packet.',
    stem: 'Aerial photographs of the Sinai Desert taken in 1920 revealed for the first time the',
    choices: {
      a: 'beautiful shadows in the desert',
      b: 'plants that grow in the desert',
      c: 'magnetic field around the desert',
      d: 'ruins of cities buried in the desert'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The passage states that the first aerial photographs of the Sinai Desert in 1920 showed several ancient cities lying beneath the sand.',
      incorrect: 'Look at lines 15-16 which describe what the first aerial photographs of the Sinai Desert revealed.'
    },
    customHints: [
      "Find the paragraph that discusses the first aerial photographs",
      "Notice what significant discovery was made in 1920",
      "Think about what was found beneath the sand"
    ]
  },
  {
    id: 9,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 20 of your packet.',
    stem: 'Which of the following statements is an opinion?',
    choices: {
      a: 'Technology has been helpful in searching for burial sites.',
      b: 'A magnetometer can detect objects buried as deep as 15 feet.',
      c: 'The most valuable finds in the desert are burial mounds.',
      d: 'Photography from space can reveal details on the Earth\'s surface.'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The statement about burial mounds being "the most valuable finds" is a subjective judgment that cannot be proven as fact.',
      incorrect: 'Look for the statement that expresses a personal judgment rather than a measurable or verifiable fact.'
    },
    customHints: [
      "Consider which statement involves a value judgment",
      "Look for words that suggest personal preference or evaluation",
      "Think about which statement cannot be objectively measured or proven"
    ]
  },
  {
    id: 10,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 20 of your packet.',
    stem: 'The passage suggests which of the following about technology?',
    choices: {
      a: 'It has proven to be very useful to archaeologists.',
      b: 'It will eventually replace archaeologists.',
      c: 'It can lead archaeologists to wrong conclusions about ancient peoples.',
      d: 'It cannot replace human instinct.'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! Throughout the passage, various technological tools are described as helpful in archaeological work, from aerial photography to ground-penetrating radar and magnetometers.',
      incorrect: 'Consider how the passage describes the various technological tools and their benefits to archaeological work.'
    },
    customHints: [
      "Look at how different technologies are described throughout the passage",
      "Notice the positive outcomes of using these tools",
      "Think about how technology has enhanced archaeological discoveries"
    ]
  },
  {
    id: 11,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 22 of your packet.',
    stem: 'Nellie is writing Mr. Cockerill because he is her',
    choices: {
      a: 'father',
      b: 'friend',
      c: 'sponsor',
      d: 'employer'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The passage identifies Mr. Cockerill as the managing editor of the New York World newspaper, making him Nellie\'s employer.',
      incorrect: 'Look at the introduction paragraph where Mr. Cockerill\'s role at the New York World newspaper is described.'
    },
    customHints: [
      "Read the introductory paragraph about who Mr. Cockerill is",
      "Notice his position at the New York World newspaper",
      "Think about the professional relationship between a reporter and managing editor"
    ]
  },
  {
    id: 12,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 22 of your packet.',
    stem: 'What is the purpose of the fifth paragraph (lines 46-57)?',
    choices: {
      a: 'To explain why Nellie takes the detour',
      b: 'To persuade Mr. Cockerill to finance Nellie\'s trip',
      c: 'To thank Mr. Cockerill for allowing Nellie to travel',
      d: 'To describe Nellie\'s visit with a famous author'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The fifth paragraph describes Nellie\'s meeting with Jules Verne, including details about their conversation and his study.',
      incorrect: 'Look at lines 46-57, which focus on Nellie\'s interaction with Jules Verne and what she observed during their meeting.'
    },
    customHints: [
      "Find the paragraph that begins with 'With the help of a translator'",
      "Notice what information this paragraph provides about Jules Verne",
      "Consider what main event this paragraph is describing"
    ]
  },
  {
    id: 13,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 22 of your packet.',
    stem: 'The tone of the letter can best be described as',
    choices: {
      a: 'serious',
      b: 'enthusiastic',
      c: 'concerned',
      d: 'insistent'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! Throughout the letter, Nellie shows excitement about her journey, her meeting with Jules Verne, and her determination to set a new record.',
      incorrect: 'Consider Nellie\'s word choice and attitude throughout the letter, especially when describing her experiences and future plans.'
    },
    customHints: [
      "Look at how Nellie describes her experiences and upcoming plans",
      "Notice her excitement about meeting Jules Verne and continuing her journey",
      "Think about her positive and energetic attitude throughout the letter"
    ]
  },
  {
    id: 14,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 22 of your packet.',
    stem: 'Which of the following is NOT directly stated in the passage?',
    choices: {
      a: 'The dress Nellie Bly wears is made of strong fabric.',
      b: 'Nellie speaks a different language than Jules Verne.',
      c: 'Nellie has ridden by train and boat on her journey.',
      d: 'The house of Jules Verne is magnificent and rich.'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! While the passage mentions using a translator to speak with Jules Verne, it never directly states that they speak different languages.',
      incorrect: 'Look for information that must be inferred rather than being explicitly stated in the passage.'
    },
    customHints: [
      "Check if each statement is explicitly mentioned in the text",
      "Pay attention to details about the meeting with Jules Verne",
      "Consider what information requires you to make assumptions"
    ]
  },
  {
    id: 15,
    category: 'Reading Comprehension',
    psychometricCategory: 'Reading Comprehension',
    subTheme: 'Text Analysis',
    stimulus: 'Refer to the reading on page 22 of your packet.',
    stem: 'Why does Nellie Bly take a detour?',
    choices: {
      a: 'She needs to cross the English Channel.',
      b: 'She wants to see a new country.',
      c: 'Jules Verne has asked to meet her.',
      d: 'Her editor has asked her to report about Amiens.'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! The passage states that Jules Verne had heard of her trip and wanted to meet her, which led to her detour to Amiens.',
      incorrect: 'Look at lines 35-43 where Nellie explains why she made the detour to Amiens.'
    },
    customHints: [
      "Find where Nellie explains her reason for going to Amiens",
      "Notice what Jules Verne did when he heard about her trip",
      "Think about who initiated the meeting in Amiens"
    ]
  }
]; 