import { Question } from '../types';

const segment = (label: 'A' | 'B' | 'C', text: string) =>
  `<span class="wm-segment"><span class="wm-segment-text">${text}</span><span class="wm-segment-label">${label}</span></span>`;

export const writingMechanicsQuestions: Question[] = [
  {
    id: 1,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `${segment('A', 'Margret who')} is always late for ${segment('B', 'class,')} was given detention for a ${segment('C', 'week.')}`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: 'Margret who',
      b: 'class,',
      c: 'week.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! A comma is needed after "Margret" to set off the interrupting clause "who is always late for class."',
      incorrect: 'Look for the place where punctuation is needed to separate the interrupting clause from the main sentence.'
    },
    customHints: [
      'Read the sentence aloud and listen for a pause near the beginning.',
      'The phrase "who is always late for class" interrupts the main sentence.',
      'Where should a comma go to set off that interrupting phrase?'
    ]
  },
  {
    id: 2,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `Fernando ${segment('A', 'was hired')} to work in one ${segment('B', 'of the best law firms')} in New York ${segment('C', 'City?')}`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: 'was hired',
      b: 'of the best law firms',
      c: 'City?',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! This sentence is a statement, so it should end with a period instead of a question mark.',
      incorrect: 'Check the punctuation at the end of the sentence and ask whether the sentence is making a statement or asking a question.'
    },
    customHints: [
      'Read the sentence as if you were saying it out loud.',
      'Does the sentence ask a question or make a statement?',
      'Which ending mark fits a declarative sentence?'
    ]
  },
  {
    id: 3,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `${segment('A', '"The moon')} is beautiful ${segment('B', 'tonight,"')} Loretta ${segment('C', 'said to her')} fiancee.`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: '"The moon',
      b: 'tonight,"',
      c: 'said to her',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The punctuation error is in the quoted phrase ending. The sentence should place a comma correctly with the quotation before continuing to the speech attribution.',
      incorrect: 'Look at the punctuation where the quoted words connect to the speaker tag.'
    },
    customHints: [
      'This is a dialogue sentence with quoted speech and a speaker tag.',
      'When quoted words are followed by "Loretta said...", the punctuation usually changes.',
      'Check the punctuation right before the closing quotation mark.'
    ]
  },
  {
    id: 4,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `After the dismissal bell ${segment('A', 'rang the')} students ${segment('B', 'excitedly rushed')} out of their ${segment('C', 'classrooms.')}`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: 'rang the',
      b: 'excitedly rushed',
      c: 'classrooms.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! A comma is needed after "rang" to separate the introductory clause from the main clause.',
      incorrect: 'Look for the place where the opening part of the sentence should be separated from the rest of the sentence.'
    },
    customHints: [
      'The sentence begins with an introductory clause.',
      'Read the sentence aloud and notice the pause after the first action.',
      'Where would a comma go after the opening clause ends?'
    ]
  },
  {
    id: 5,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `In ${segment('A', '2008, Johnny')} went back to ${segment('B', 'his hometown')} of ${segment('C', 'Austin Texas')} to visit his family.`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: '2008, Johnny',
      b: 'his hometown',
      c: 'Austin Texas',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! A comma is needed between the city and the state: "Austin, Texas."',
      incorrect: 'Check the punctuation in the place name near the end of the sentence.'
    },
    customHints: [
      'Look at the city and state in the sentence.',
      'City and state names are usually separated by punctuation.',
      'What mark belongs between "Austin" and "Texas"?'
    ]
  },
  {
    id: 6,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `${segment('A', `"You're`)} going the wrong ${segment('B', 'way?"')} Felix shouted to ${segment('C', 'his brother.')}`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: `"You're`,
      b: 'way?"',
      c: 'his brother.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The punctuation at the end of the quoted phrase is the issue here. The sentence should not end that quoted statement with a question mark in this context.',
      incorrect: 'Focus on the punctuation inside the quotation marks and ask whether Felix is truly asking a question.'
    },
    customHints: [
      'This sentence is dialogue, so pay attention to the punctuation inside the quotation marks.',
      'Felix is shouting, but is he actually asking a question?',
      'Which ending mark would better match a strong shouted statement?'
    ]
  },
  {
    id: 7,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `All of the ${segment('A', "student's")} exam scores were ${segment('B', 'revised, graded,')} and ${segment('C', 'mailed to')} their parents.`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: "student's",
      b: 'revised, graded,',
      c: 'mailed to',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! The possessive punctuation is wrong here. Because the sentence refers to multiple students, the possessive should be plural: "students\' exam scores."',
      incorrect: 'Look closely at the apostrophe in the possessive noun near the beginning of the sentence.'
    },
    customHints: [
      'Pay attention to the apostrophe near the beginning of the sentence.',
      'Ask whether the sentence is talking about one student or more than one student.',
      'How does the apostrophe change when a possessive noun is plural?'
    ]
  },
  {
    id: 8,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stimulus: `${segment('A', 'Lauren tried')} to teach herself to ${segment('B', 'juggle, but')} she just ${segment('C', 'couldnt')} figure out how to do it.`,
    stem: 'Find the punctuation error in the sentence, if there is one.',
    choices: {
      a: 'Lauren tried',
      b: 'juggle, but',
      c: 'couldnt',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Couldnt" is missing an apostrophe. The correct form is "couldn\'t."',
      incorrect: 'Look for a contraction that needs punctuation inside the word itself.'
    },
    customHints: [
      'One word in the sentence is a contraction.',
      'Contractions use apostrophes to show missing letters.',
      'Which choice points to the word that needs an apostrophe?'
    ]
  },
  {
    id: 9,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: 'With the help, of a map, and a compass, Cindy was able to find her way out of the forest.',
      b: 'With the help of a map and a compass, Cindy was able to find her way out of the forest.',
      c: 'With the help of a map and a compass Cindy was able to find her way out of the forest.',
      d: 'With the help of a map and a. compass, Cindy was able to find her way, out of the forest.'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! This version uses commas properly and avoids unnecessary punctuation.',
      incorrect: 'Look for the choice that removes extra commas but still keeps the sentence punctuated correctly.'
    },
    customHints: [
      'Check whether any commas are unnecessary.',
      'Read each sentence aloud and listen for natural pauses.',
      'Choose the version that sounds smooth and correctly punctuated.'
    ]
  },
  {
    id: 10,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: '"No!" I shouted repeatedly as rain began to fall on my head',
      b: '"No!" I shouted, repeatedly as rain began to fall on my head.',
      c: '"No!" I shouted repeatedly as rain began to fall on my head.',
      d: '"No" I shouted repeatedly as rain began to fall on my head.'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! This sentence keeps the exclamation mark inside the quotation marks and uses the rest of the punctuation correctly.',
      incorrect: 'Look at the punctuation around the quoted word "No!" and avoid adding an unnecessary comma.'
    },
    customHints: [
      'Pay attention to punctuation around quoted speech.',
      'Check whether the sentence needs a comma after "shouted."',
      'Choose the option that keeps the quotation and the rest of the sentence punctuated cleanly.'
    ]
  },
  {
    id: 11,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: "Isabels' pet dog Spike likes to dig holes in the backyard.",
      b: "Isabel's pet dog Spike, likes to dig holes in the backyard.",
      c: 'Isabels pet dog, Spike, likes to dig holes, in the backyard.',
      d: "Isabel's pet dog, Spike, likes to dig holes in the backyard."
    },
    key: 'd',
    feedback: {
      correct: 'Correct! This version uses the possessive apostrophe correctly and sets off the appositive "Spike" with commas.',
      incorrect: 'Look for the choice that fixes both the possessive apostrophe and the punctuation around the dog\'s name.'
    },
    customHints: [
      'Check whether "Isabel" needs an apostrophe.',
      'Notice that "Spike" renames the dog, so it may need commas.',
      'Choose the version with both correct possession and correct appositive punctuation.'
    ]
  },
  {
    id: 12,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: "Where does Greg's family live?",
      b: 'Where does Gregs family live?',
      c: "Where does Greg's family live.",
      d: 'Where does Gregs family live.'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! This choice uses both the apostrophe in "Greg\'s" and the question mark correctly.',
      incorrect: 'Look for the option that correctly shows possession and ends the sentence with the right punctuation mark.'
    },
    customHints: [
      'This sentence asks a question, so check the ending mark.',
      'Greg\'s family needs a possessive apostrophe.',
      'Only one choice gets both the apostrophe and the question mark right.'
    ]
  },
  {
    id: 13,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: 'Theresa drinks a lot of water; she is trying to cut down on sugary drinks.',
      b: 'Theresa drinks a lot of water, she is trying to cut down on sugary drinks.',
      c: 'Theresa drinks a lot of water she is trying to cut down on sugary drinks.',
      d: 'Theresa, drinks a lot of water, she is trying to cut down on sugary drinks.'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! A semicolon properly joins these two related independent clauses.',
      incorrect: 'Look for the choice that correctly connects two complete thoughts without creating a comma splice.'
    },
    customHints: [
      'This sentence contains two complete thoughts.',
      'A comma by itself is not enough to join two independent clauses.',
      'Which choice uses punctuation that correctly joins both parts?'
    ]
  },
  {
    id: 14,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: 'Julius doesnt want to go to the beach because it is too hot outside.',
      b: "Julius doesn't want to go to the beach because it is too hot outside.",
      c: 'Julius doesnt want to go to the beach, because it is too hot outside.',
      d: "Julius doesn't want to go to the beach; because it is too hot outside."
    },
    key: 'b',
    feedback: {
      correct: 'Correct! This version uses the apostrophe in "doesn\'t" and avoids unnecessary punctuation.',
      incorrect: 'Look for the choice that fixes the contraction and keeps the sentence punctuated simply and correctly.'
    },
    customHints: [
      'Check the contraction in the sentence.',
      'Ask whether the sentence needs extra punctuation after "beach."',
      'Choose the simplest correctly punctuated version.'
    ]
  },
  {
    id: 15,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Punctuation',
    stem: 'Choose the best way to write the sentence.',
    choices: {
      a: 'A volcanoes hot lava is very dangerous to touch.',
      b: "A volcanoes' hot lava is very dangerous to touch.",
      c: 'A volcanos hot lava is very dangerous to touch.',
      d: "A volcano's hot lava is very dangerous to touch."
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The singular possessive form is "volcano\'s."',
      incorrect: 'Look for the choice that shows singular possession with the correct apostrophe placement.'
    },
    customHints: [
      'The lava belongs to one volcano, not many volcanoes.',
      'A singular possessive noun usually adds apostrophe-s.',
      'Which option shows possession correctly for one volcano?'
    ]
  },
  {
    id: 16,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `${segment('A', 'When')} I visited ${segment('B', 'uncle')} Bob's farm, I saw so many different types of ${segment('C', 'animals.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'When',
      b: 'uncle',
      c: 'animals.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Uncle" should be capitalized because it is used as a title before Bob\'s name.',
      incorrect: 'Look for the word that is acting like a title before a person\'s name.'
    },
    customHints: [
      'Titles before names are often capitalized.',
      'Read the phrase "uncle Bob" as if it were a name.',
      'Which word should be capitalized because it functions like a title?'
    ]
  },
  {
    id: 17,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `Cathy went to ${segment('A', 'School')} in ${segment('B', 'Minnesota')} for the last ${segment('C', 'four')} years.`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'School',
      b: 'Minnesota',
      c: 'four',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "School" should not be capitalized here because it is a common noun, not part of a proper name.',
      incorrect: 'Look for a word that is capitalized even though it is not a proper noun.'
    },
    customHints: [
      'Not every important word needs a capital letter.',
      'Check whether the capitalized word is a real name or just a general noun.',
      'Which word is capitalized even though it is not a proper noun?'
    ]
  },
  {
    id: 18,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `On ${segment('A', 'Tuesday,')} ${segment('B', 'Mr. kramer')} is taking his class to the ${segment('C', 'museum.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'Tuesday,',
      b: 'Mr. Kramer',
      c: 'museum.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Kramer" is a proper name and should be capitalized.',
      incorrect: 'Look for the person\'s name in the sentence.'
    },
    customHints: [
      'Days of the week are already capitalized correctly here.',
      'Find the proper name in the sentence.',
      'Which word should be capitalized because it is a last name?'
    ]
  },
  {
    id: 19,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `${segment('A', 'Los Angeles')} is the ${segment('B', 'city')} I want to move to when I grow ${segment('C', 'up.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'Los Angeles',
      b: 'city',
      c: 'up.',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! All capitalization in this sentence is already correct.',
      incorrect: 'Check whether any of the highlighted words really need a capitalization change.'
    },
    customHints: [
      'Proper place names should be capitalized.',
      'Common nouns like "city" usually stay lowercase.',
      'This may be a no-error sentence.'
    ]
  },
  {
    id: 20,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `Mr. ${segment('A', 'Rivera')} gave his daughter ${segment('B', 'Susie')} a new doll for ${segment('C', 'christmas.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'Rivera',
      b: 'Susie',
      c: 'christmas.',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Christmas" should be capitalized because it is the name of a holiday.',
      incorrect: 'Look for the holiday name in the sentence.'
    },
    customHints: [
      'Names of people are already capitalized correctly here.',
      'Holidays are proper nouns.',
      'Which word names a holiday and should start with a capital letter?'
    ]
  },
  {
    id: 21,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `${segment('A', 'I')} have to wait until ${segment('B', 'November')} to go to ${segment('C', 'florida.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'I',
      b: 'November',
      c: 'florida.',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Florida" is a proper noun and should be capitalized.',
      incorrect: 'Look for the place name in the sentence.'
    },
    customHints: [
      'The pronoun "I" is already capitalized correctly.',
      'Months of the year are capitalized.',
      'Which word is the name of a state?'
    ]
  },
  {
    id: 22,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The ${segment('A', 'great')} ${segment('B', 'Wall')} of China is one of the most famous attractions on ${segment('C', 'Earth.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'great',
      b: 'Wall',
      c: 'Earth.',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! In the proper name "Great Wall of China," the word "Great" should be capitalized.',
      incorrect: 'Look at the full proper name of the landmark.'
    },
    customHints: [
      'This sentence contains the name of a famous landmark.',
      'Words inside a proper name are usually capitalized.',
      'Which word in the landmark\'s name should start with a capital letter?'
    ]
  },
  {
    id: 23,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The ${segment('A', 'monkey')} chased after a ${segment('B', 'butterfly')} through the ${segment('C', 'rainforest.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'monkey',
      b: 'butterfly',
      c: 'rainforest.',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! None of these words should be capitalized in this sentence.',
      incorrect: 'Check whether any of the highlighted words are actual proper nouns.'
    },
    customHints: [
      'Animals and common nouns are usually lowercase.',
      'Ask whether any of these words are names of specific people or places.',
      'This may be a no-error sentence.'
    ]
  },
  {
    id: 24,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `"When in ${segment('A', 'Rome,')} do as the ${segment('B', 'romans')} do," said ${segment('C', 'Jennifer.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'Rome,',
      b: 'romans',
      c: 'Jennifer.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Romans" should be capitalized because it refers to people from Rome.',
      incorrect: 'Look for the word that names a group of people connected to Rome.'
    },
    customHints: [
      'Place names and names for people from those places are capitalized.',
      'Rome is already capitalized correctly.',
      'Which word naming a group of people should begin with a capital letter?'
    ]
  },
  {
    id: 25,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The largest ${segment('A', 'planet')} in the ${segment('B', 'Solar System')} is ${segment('C', 'jupiter.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'planet',
      b: 'Solar System',
      c: 'jupiter.',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Jupiter" is the name of a planet and should be capitalized.',
      incorrect: 'Look for the proper noun that names a specific planet.'
    },
    customHints: [
      'Common nouns like "planet" are usually lowercase.',
      'The name of our solar system is capitalized here correctly.',
      'Which specific planet name should start with a capital letter?'
    ]
  },
  {
    id: 26,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The ${segment('A', 'author')} of the book is from the ${segment('B', 'countryside')} of ${segment('C', 'Ohio.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'author',
      b: 'countryside',
      c: 'Ohio.',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! The capitalization in this sentence is already correct.',
      incorrect: 'Check whether any of the highlighted words actually need to change capitalization.'
    },
    customHints: [
      'State names should be capitalized.',
      'Common nouns like "author" and "countryside" stay lowercase here.',
      'This may be a no-error sentence.'
    ]
  },
  {
    id: 27,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `${segment('A', "Jesse's")} pet ${segment('B', 'dog')} is named ${segment('C', 'bones.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: "Jesse's",
      b: 'dog',
      c: 'bones.',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Bones" is a pet\'s name, so it should be capitalized.',
      incorrect: 'Look for the word that is being used as the pet\'s name.'
    },
    customHints: [
      'Names of pets are capitalized just like names of people.',
      'Possessive words like "Jesse\'s" are already handled correctly here.',
      'Which word is the dog\'s name?'
    ]
  },
  {
    id: 28,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The ${segment('A', 'flower')} shop sells ${segment('B', 'petunias,')} roses, and ${segment('C', 'marigolds.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'flower',
      b: 'petunias,',
      c: 'marigolds.',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! All of the capitalization in this sentence is correct.',
      incorrect: 'Check whether any of these highlighted words are proper nouns.'
    },
    customHints: [
      'Flower names are common nouns here.',
      'Nothing in the sentence is a special name or title.',
      'This may be a no-error sentence.'
    ]
  },
  {
    id: 29,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `Mr. ${segment('A', 'Bryant')} hired Ben for the open ${segment('B', 'Accountant')} position at his ${segment('C', 'company.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'Bryant',
      b: 'Accountant',
      c: 'company.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Accountant" should not be capitalized here because it is a common noun, not a title before a name.',
      incorrect: 'Look for the word that is capitalized even though it is just the name of a job, not a formal title before a person\'s name.'
    },
    customHints: [
      'People\'s names are capitalized correctly here.',
      'Job titles are only capitalized in certain situations.',
      'Which word is a common noun job title and should stay lowercase?'
    ]
  },
  {
    id: 30,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Capitalization',
    stimulus: `The Baker ${segment('A', 'family')} ordered a pizza from ${segment('B', "lenny's pizzeria")} in ${segment('C', 'New York City.')}`,
    stem: 'Find the capitalization error in the sentence, if there is one.',
    choices: {
      a: 'family',
      b: "lenny's pizzeria",
      c: 'New York City.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Lenny\'s" is part of a business name and should be capitalized.',
      incorrect: 'Look for the part of the sentence that names a specific business.'
    },
    customHints: [
      'Family names and city names are already capitalized correctly here.',
      'Business names are proper nouns.',
      'Which word in the business name should begin with a capital letter?'
    ]
  },
  {
    id: 31,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'lonley',
      b: 'napkin',
      c: 'tablet',
      d: 'no error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "Lonley" is misspelled. The correct spelling is "lonely."',
      incorrect: 'Look carefully for the word whose letters are out of order.'
    },
    customHints: [
      'One of these words has its letters in the wrong order.',
      'Think about the correct spelling of "lonely."',
      'Look for the word where the vowels are misplaced.'
    ]
  },
  {
    id: 32,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'jellyfish',
      b: 'pinapple',
      c: 'snowing',
      d: 'no error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Pinapple" is misspelled. The correct spelling is "pineapple."',
      incorrect: 'Look for the fruit name that is missing a letter.'
    },
    customHints: [
      'Check the fruit word carefully.',
      'This word usually has "pine" at the beginning.',
      'Which word is missing the letter e?'
    ]
  },
  {
    id: 33,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'hydrate',
      b: 'purple',
      c: 'plastick',
      d: 'no error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Plastick" is misspelled. The correct spelling is "plastic."',
      incorrect: 'Look for the word that has an extra letter at the end.'
    },
    customHints: [
      'Most words like this do not end with k.',
      'Think about the spelling of the material "plastic."',
      'Which word has one extra letter?'
    ]
  },
  {
    id: 34,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'garbege',
      b: 'radio',
      c: 'scent',
      d: 'no error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "Garbege" is misspelled. The correct spelling is "garbage."',
      incorrect: 'Look for the word that sounds right but has the wrong vowel pattern.'
    },
    customHints: [
      'This word names trash.',
      'Think about the correct spelling of "garbage."',
      'Which word has the wrong middle vowel pattern?'
    ]
  },
  {
    id: 35,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'bycicle',
      b: 'cloud',
      c: 'imagine',
      d: 'no error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "Bycicle" is misspelled. The correct spelling is "bicycle."',
      incorrect: 'Look for the transportation word with the wrong vowel pattern.'
    },
    customHints: [
      'Think about the correct spelling of the word "bicycle."',
      'This word needs an i and a y in the right places.',
      'Which word has the wrong letter order?'
    ]
  },
  {
    id: 36,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'reptile',
      b: 'cleanse',
      c: 'boulder',
      d: 'no error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! All of these words are spelled correctly.',
      incorrect: 'Check each word carefully. This may be a no-error item.'
    },
    customHints: [
      'Read each word slowly.',
      'These may all already be spelled correctly.',
      'Do not choose an error unless you can point to a real spelling mistake.'
    ]
  },
  {
    id: 37,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'spectacular',
      b: 'painting',
      c: 'jacket',
      d: 'no error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! All of these words are spelled correctly.',
      incorrect: 'Look carefully again. This may be another no-error item.'
    },
    customHints: [
      'Check each word one by one.',
      'None of these words may contain a spelling mistake.',
      'Only choose a letter if you can spot a real misspelling.'
    ]
  },
  {
    id: 38,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'tremble',
      b: 'franchize',
      c: 'shovel',
      d: 'no error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Franchize" is misspelled. The correct spelling is "franchise."',
      incorrect: 'Look for the word that uses the wrong letter in the ending sound.'
    },
    customHints: [
      'Pay attention to the ending sound in the second word.',
      'This word should end with s, not z.',
      'Which word has the wrong final letter pattern?'
    ]
  },
  {
    id: 39,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'scissors',
      b: 'extremeley',
      c: 'standard',
      d: 'no error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Extremeley" is misspelled. The correct spelling is "extremely."',
      incorrect: 'Look for the adverb that has too many letters in the middle.'
    },
    customHints: [
      'This is an adverb ending in -ly.',
      'Think about the correct spelling of "extremely."',
      'Which word has an extra e in it?'
    ]
  },
  {
    id: 40,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'invention',
      b: 'telephone',
      c: 'frantik',
      d: 'no error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Frantik" is misspelled. The correct spelling is "frantic."',
      incorrect: 'Look for the word with the wrong vowel in the final syllable.'
    },
    customHints: [
      'Think about the correct spelling of "frantic."',
      'This word should not end with tik.',
      'Which word has the wrong vowel pattern near the end?'
    ]
  },
  {
    id: 41,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'braces',
      b: 'pencil',
      c: 'allegator',
      d: 'no error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Allegator" is misspelled. The correct spelling is "alligator."',
      incorrect: 'Look for the animal name with the wrong middle vowel sound.'
    },
    customHints: [
      'One of these words is an animal name.',
      'Think about the correct spelling of "alligator."',
      'Which word is missing the correct letter pattern in the middle?'
    ]
  },
  {
    id: 42,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'sunglassess',
      b: 'mighty',
      c: 'cardboard',
      d: 'no error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "Sunglassess" is misspelled. The correct spelling is "sunglasses."',
      incorrect: 'Look for the plural word with one letter too many at the end.'
    },
    customHints: [
      'This word is already plural.',
      'It should end with es, not ess.',
      'Which word has an extra s at the end?'
    ]
  },
  {
    id: 43,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'system',
      b: 'awfull',
      c: 'electronic',
      d: 'no error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Awfull" is misspelled. The correct spelling is "awful."',
      incorrect: 'Look for the word with one consonant too many.'
    },
    customHints: [
      'This word should not have a double l at the end.',
      'Think about the correct spelling of "awful."',
      'Which word has an extra letter?'
    ]
  },
  {
    id: 44,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'swamp',
      b: 'colorful',
      c: 'windows',
      d: 'no error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! All of these words are spelled correctly.',
      incorrect: 'Check each word carefully. This may be a no-error item.'
    },
    customHints: [
      'Read each word slowly.',
      'Nothing may be misspelled here.',
      'Only choose a letter if you can find a definite spelling mistake.'
    ]
  },
  {
    id: 45,
    category: 'Writing Mechanics',
    psychometricCategory: 'Spelling',
    subTheme: 'Word Recognition',
    stem: 'Find the misspelled word, if there is one.',
    choices: {
      a: 'attendance',
      b: 'sparkle',
      c: 'argueing',
      d: 'no error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Argueing" is misspelled. The correct spelling is "arguing."',
      incorrect: 'Look for the verb that has the wrong letter combination before the ending.'
    },
    customHints: [
      'Think about the correct spelling of "arguing."',
      'This word drops a letter when the ending is added.',
      'Which word has the wrong vowel combination in the middle?'
    ]
  },
  {
    id: 46,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `There ${segment('A', 'is')} fifteen ${segment('B', 'minutes')} in a quarter of ${segment('C', 'an')} hour.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'is',
      b: 'minutes',
      c: 'an',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "There is" should be "There are" because "fifteen minutes" is plural.',
      incorrect: 'Look for the verb that needs to agree with the plural phrase "fifteen minutes."'
    },
    customHints: [
      'Check subject-verb agreement.',
      'The phrase "fifteen minutes" is plural in this sentence.',
      'Which verb should change to match a plural subject?'
    ]
  },
  {
    id: 47,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `${segment('A', 'My')} friends ${segment('B', 'are')} going to a music ${segment('C', 'festival this')} weekend.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'My',
      b: 'are',
      c: 'festival this',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! This sentence has no usage error.',
      incorrect: 'Check each highlighted part carefully. This may be a no-error sentence.'
    },
    customHints: [
      'Make sure the subject and verb match.',
      'Read the sentence as a whole and listen for anything that sounds off.',
      'This may be a no-error item.'
    ]
  },
  {
    id: 48,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Luna received a good ${segment('A', 'score')} on her exam ${segment('B', 'because')} she ${segment('C', 'studies')} for a long time last night.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'score',
      b: 'because',
      c: 'studies',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Studies" should be "studied" because the action happened last night.',
      incorrect: 'Look for the word that does not match the past-time clue "last night."'
    },
    customHints: [
      'Check the time clue at the end of the sentence.',
      'The phrase "last night" signals past tense.',
      'Which verb should be changed to the past tense?'
    ]
  },
  {
    id: 49,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `The ${segment('A', 'athletes')} ran very ${segment('B', 'fast')} in the ${segment('C', 'competition.')}`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'athletes',
      b: 'fast',
      c: 'competition.',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! This sentence has no usage error.',
      incorrect: 'Read the sentence again. This may be a no-error sentence.'
    },
    customHints: [
      'Make sure each word is being used naturally in the sentence.',
      'Nothing may need to change here.',
      'This may be a no-error item.'
    ]
  },
  {
    id: 50,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Patricia waited ${segment('A', 'in a')} twenty-minute line ${segment('B', 'and eat')} a ${segment('C', 'cheesesteak.')}`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'in a',
      b: 'and eat',
      c: 'cheesesteak.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Eat" should be "ate" to match the past-tense verb "waited."',
      incorrect: 'Look for the verb that does not match the tense of "waited."'
    },
    customHints: [
      'Check the verb tense in the sentence.',
      'One verb is already in the past tense.',
      'Which other verb should also be in the past tense?'
    ]
  },
  {
    id: 51,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Toby, ${segment('A', 'the puppy,')} is ${segment('B', 'in trouble')} for climbing ${segment('C', 'onto')} the dinner table.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'the puppy,',
      b: 'in trouble',
      c: 'onto',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! This sentence has no usage error.',
      incorrect: 'Check whether any highlighted phrase is actually being used incorrectly.'
    },
    customHints: [
      'Read the sentence naturally from start to finish.',
      'The phrases may all already be correct.',
      'This may be a no-error item.'
    ]
  },
  {
    id: 52,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `The flying snake can ${segment('A', 'moves')} from one tree ${segment('B', 'to another')} by ${segment('C', 'gliding')} through the air.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'moves',
      b: 'to another',
      c: 'gliding',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! After "can," the verb should be in its base form: "move," not "moves."',
      incorrect: 'Look at the verb that comes after the helping verb "can."'
    },
    customHints: [
      'Helping verbs like "can" affect the form of the main verb.',
      'After "can," we use the base verb.',
      'Which verb should lose its final s?'
    ]
  },
  {
    id: 53,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Frank ${segment('A', 'loves')} to ${segment('B', 'baseballs catch')} in the ${segment('C', 'park.')}`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'loves',
      b: 'baseballs catch',
      c: 'park',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! The word order is wrong. It should be "catch baseballs."',
      incorrect: 'Look for the phrase where the words are in the wrong order.'
    },
    customHints: [
      'Check whether the action and object are in the right order.',
      'Say the phrase out loud: does it sound natural?',
      'Which part should be reordered to make sense?'
    ]
  },
  {
    id: 54,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `The ${segment('A', 'solar eclipse')} is a phenomenon ${segment('B', 'to occur')} when the moon ${segment('C', 'passes between')} the Earth and the Sun.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'solar eclipse',
      b: 'to occur',
      c: 'passes between',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "To occur" is the usage problem here. The sentence needs a different construction, such as "that occurs."',
      incorrect: 'Look for the phrase that does not fit grammatically with the rest of the sentence.'
    },
    customHints: [
      'The problem is not the subject or the verb "passes."',
      'Focus on the phrase after "phenomenon."',
      'Which phrase needs a different grammatical form to fit the sentence?'
    ]
  },
  {
    id: 55,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Mrs. Taylor's students ${segment('A', 'forms')} two lines ${segment('B', 'when going')} to the lunchroom ${segment('C', 'after')} class.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'forms',
      b: 'when going',
      c: 'after',
      d: 'No error'
    },
    key: 'a',
    feedback: {
      correct: 'Correct! "Forms" should be "form" to agree with the plural subject "students."',
      incorrect: 'Look for the verb that does not match the plural subject.'
    },
    customHints: [
      'Check subject-verb agreement.',
      'The subject "students" is plural.',
      'Which verb should be plural too?'
    ]
  },
  {
    id: 56,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Edgard ${segment('A', 'climbed')} a ${segment('B', 'very large')} mountain ${segment('C', 'on')} South America.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'climbed',
      b: 'very large',
      c: 'on',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! We say "in South America," not "on South America."',
      incorrect: 'Look for the preposition that does not fit with a continent.'
    },
    customHints: [
      'Focus on the preposition before "South America."',
      'We use different prepositions with continents than with surfaces.',
      'Which small word should change?'
    ]
  },
  {
    id: 57,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `"That was a fantastic ${segment('A', 'meal!')} " Trisha ${segment('B', 'shouted')} to ${segment('C', 'the chef.')}`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'meal!',
      b: 'shouted',
      c: 'the chef.',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! This sentence has no usage error.',
      incorrect: 'Check whether any highlighted word or phrase is actually being used incorrectly.'
    },
    customHints: [
      'The sentence may already be correct.',
      'Read it aloud and see whether anything sounds grammatically wrong.',
      'This may be a no-error item.'
    ]
  },
  {
    id: 58,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Professor ${segment('A', "Martin's")} expressive sentence contain no ${segment('C', 'mistakes.')}`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: "Martin's",
      b: 'sentence',
      c: 'mistakes',
      d: 'No error'
    },
    key: 'd',
    feedback: {
      correct: 'Correct! This item is treated as a no-error sentence under the paper segmentation currently in the app.',
      incorrect: 'Check whether any of the highlighted segments actually contain the usage problem under this item\'s current segmentation.'
    },
    customHints: [
      'Read the highlighted segments carefully.',
      'This may be a no-error item under the current paper segmentation.',
      'Only choose an error if one of the marked regions clearly contains it.'
    ]
  },
  {
    id: 59,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `The problems ${segment('A', 'with the')} presentation ${segment('B', 'was')} his ${segment('C', 'fault.')}`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'with the',
      b: 'was',
      c: 'fault.',
      d: 'No error'
    },
    key: 'b',
    feedback: {
      correct: 'Correct! "Was" should be "were" to agree with the plural subject "problems."',
      incorrect: 'Look for the verb that does not match the plural subject.'
    },
    customHints: [
      'Check subject-verb agreement.',
      'The subject "problems" is plural.',
      'Which verb should be plural too?'
    ]
  },
  {
    id: 60,
    category: 'Writing Mechanics',
    psychometricCategory: 'Language',
    subTheme: 'Usage',
    stimulus: `Sam has ${segment('A', 'a few')} treasured belongings ${segment('B', 'that')} she ${segment('C', 'kept')} under her bed.`,
    stem: 'Find the usage error in the sentence, if there is one.',
    choices: {
      a: 'a few',
      b: 'that',
      c: 'kept',
      d: 'No error'
    },
    key: 'c',
    feedback: {
      correct: 'Correct! "Kept" should be "keeps" to match the present tense in the rest of the sentence.',
      incorrect: 'Look for the verb that does not match the present tense of "has."'
    },
    customHints: [
      'Check the verb tense in the sentence.',
      'The sentence starts in the present tense with "has."',
      'Which later verb should also be in the present tense?'
    ]
  }
];
