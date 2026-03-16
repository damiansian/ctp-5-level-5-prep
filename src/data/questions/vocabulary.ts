import { Question } from '../types';

const henryPassage =
  'The reign of King Henry VIII in England lasted from 1509 until his death in 1547 AD. Some historians believe that Henry was a charming and humorous leader. Conversely, other historians claim that he was a selfish and insecure ruler. Henry was married a total of six times while he was king!';

const everestPassage =
  "If you ever have the opportunity to travel to the remote reaches of Tibet, you should make time to see the tallest mountain on Earth. Mount Everest, at an altitude of 29,029 feet, is the highest point in the world! Many adventurous travelers over the years have climbed and reached the mountain's tallest summit.";

const bookReportPassage =
  'When I discovered that I had to write a book report for class, I assumed that the project was going to be boring. However, the book I read actually turned out to be thrilling! The protagonist, a secret agent, is being held captive and must escape from a fortress on a small island. My favorite part is when he uses explosives to stall the guards while he escapes on a speedboat. Since I found the book so entertaining, I had no problem writing a book report on it; it was actually kind of fun!';

const trickPassage =
  'Trick-or-treating has become a major Halloween custom in America. It is difficult to trace the history of trick-or-treating, but American children are far from being the first groups of children to go door to door in costume and gorge on candy. This practice has been recorded in many different European countries over the course of hundreds of years. The "trick" of the question was originally used as a threat to cause mischief to someone\'s property unless a treat was given.';

const sunPassage =
  "The Sun is one of numerous stars in the Milky Way. Although the Sun is one of billions of stars in our galaxy, it is the solitary source of light and heat for our planet. Without the Sun, life would not be possible on Earth. It is also the perfect distance from Earth so that our planet doesn't get too cold or too hot. The Sun is responsible for causing plants and trees to grow and produce the oxygen that sustains all life on Earth.";

const oldFaithfulPassage =
  'Yellowstone National Park in Wyoming is the home of a geyser named "Old Faithful"; the geyser earned its name due to its prompt eruptions of boiling water hundreds of feet into the air approximately every 90 minutes. A geyser is formed when the intense heat below the Earth\'s crust needs to be released. The pressure builds and erupts from the ground, releasing a huge spurt of hot water vapor into the air.';

const owlPassage =
  'The Great Grey Owl is the largest species of owl in the northern hemisphere of the globe. These fantastic birds of prey have the nickname "Phantom of the North" for their ghostly coloring and fluffy feathers. Great Grey Owls use their sharp talons to intercept small prey, such as mice and weasels. These swift carnivores are also known to find rabbits and small birds edible.';

export const vocabularyQuestions: Question[] = [
  {
    id: 1,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'The busy day was a blur. What does blur most nearly mean?',
    choices: { a: 'A smudge', b: 'Something indistinct', c: 'A clear view', d: 'A crowded area' },
    key: 'b',
    feedback: {
      correct: 'Correct. Here blur means something unclear or indistinct.',
      incorrect: 'Think about how a busy day can feel unclear or hard to remember in detail.'
    }
  },
  {
    id: 2,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'My little brother is such a nuisance at the grocery store. What does nuisance most nearly mean?',
    choices: { a: 'An annoying person', b: 'A loud noise', c: 'Someone who is helpful', d: 'A tyrant' },
    key: 'a',
    feedback: {
      correct: 'Correct. A nuisance is something or someone annoying.',
      incorrect: 'Use the grocery-store context to think about behavior that bothers others.'
    }
  },
  {
    id: 3,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'Tony offered me an earnest apology for his behavior. What does earnest most nearly mean?',
    choices: { a: 'Completely fair', b: 'A boring statement', c: 'Something very expensive', d: 'Showing sincerity' },
    key: 'd',
    feedback: {
      correct: 'Correct. An earnest apology is sincere.',
      incorrect: 'Think about what kind of apology would make sense after bad behavior.'
    }
  },
  {
    id: 4,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'We travelled abroad to see my aunt on vacation. What does abroad most nearly mean?',
    choices: { a: 'Widely', b: 'On a ship or boat', c: 'Out of the country', d: 'A tropical location' },
    key: 'c',
    feedback: {
      correct: 'Correct. Abroad means in or to another country.',
      incorrect: 'Traveling abroad means leaving your home country.'
    }
  },
  {
    id: 5,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'The goal of the game is to evade capture by the enemy. What does evade most nearly mean?',
    choices: { a: 'Enter forcefully', b: 'Fight head-on', c: 'Invite someone', d: 'Avoid something' },
    key: 'd',
    feedback: {
      correct: 'Correct. Evade means avoid or escape.',
      incorrect: 'Look at the phrase evade capture.'
    }
  },
  {
    id: 6,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'Jennifer was dismayed to learn that she had two cavities. What does dismayed most nearly mean?',
    choices: { a: 'Having hunger', b: 'Feeling discouraged', c: 'Outraged at a result', d: 'Delighted' },
    key: 'b',
    feedback: {
      correct: 'Correct. Dismayed means upset or discouraged.',
      incorrect: 'Getting bad dental news would not make someone delighted.'
    }
  },
  {
    id: 7,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'The flowers would perish without water. What does perish most nearly mean?',
    choices: { a: 'Disappear', b: 'A local church', c: 'Die', d: 'Flourish' },
    key: 'c',
    feedback: {
      correct: 'Correct. Perish means die.',
      incorrect: 'Think about what happens to flowers with no water.'
    }
  },
  {
    id: 8,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'We took a different route to school than usual. What does route most nearly mean?',
    choices: { a: 'A course or way for travel', b: 'The fundamental part of something', c: 'A new plan', d: 'A starting or ending point' },
    key: 'a',
    feedback: {
      correct: 'Correct. A route is a way or path for travel.',
      incorrect: 'Think about how you get from home to school.'
    }
  },
  {
    id: 9,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: "Frank was exasperated by the hot weather at his school's track meet. What does exasperated most nearly mean?",
    choices: { a: 'Sweating a lot', b: 'Irritated and angry', c: 'Having a difficult time breathing', d: 'Dehydrated and exhausted' },
    key: 'b',
    feedback: {
      correct: 'Correct. Exasperated means very irritated.',
      incorrect: 'Hot weather can make someone annoyed rather than just tired.'
    }
  },
  {
    id: 10,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'In the story, the rebels came up with a brilliant plan to overthrow the evil emperor. What does overthrow most nearly mean?',
    choices: { a: 'Outlast', b: 'Throw or toss something too far', c: 'Remove from power', d: 'Establish something' },
    key: 'c',
    feedback: {
      correct: 'Correct. To overthrow a ruler is to remove that ruler from power.',
      incorrect: 'The clue is evil emperor.'
    }
  },
  {
    id: 11,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'A gazelle moves at a brisk pace when in danger. What does brisk most nearly mean?',
    choices: { a: 'Rapid and swift', b: 'Thoughtful and clear', c: 'Startling or abrupt', d: 'A sharp chilling breeze' },
    key: 'a',
    feedback: {
      correct: 'Correct. Brisk here means quick and swift.',
      incorrect: 'A gazelle in danger would move quickly.'
    }
  },
  {
    id: 12,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'The wispy clouds seemed to move in the wind. What does wispy most nearly mean?',
    choices: { a: 'Quiet and tranquil', b: 'Brightly shining', c: 'Light and faint', d: 'Whitish gray' },
    key: 'c',
    feedback: {
      correct: 'Correct. Wispy clouds are thin, light, and faint.',
      incorrect: 'Picture clouds that are thin and delicate.'
    }
  },
  {
    id: 13,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'Tammy had the foresight to buy supplies in preparation for the big storm. What does foresight most nearly mean?',
    choices: { a: 'A cheap bargain', b: 'Examination of every detail', c: 'An end result', d: 'Care for the future' },
    key: 'd',
    feedback: {
      correct: 'Correct. Foresight means planning ahead or showing care for the future.',
      incorrect: 'Buying supplies before a storm is planning ahead.'
    }
  },
  {
    id: 14,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'Bianca had to compose herself before she went on stage to perform her dance routine. What does compose herself most nearly mean?',
    choices: { a: 'Make peaceful or calm', b: 'Create a piece of music', c: 'Breathe', d: 'Stretch' },
    key: 'a',
    feedback: {
      correct: 'Correct. Compose herself means calm herself.',
      incorrect: 'The clue is before going on stage.'
    }
  },
  {
    id: 15,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'His parents taught him to be a thrifty shopper. What does thrifty most nearly mean?',
    choices: { a: 'Extravagant', b: 'Economical', c: 'Expensive', d: 'Successful' },
    key: 'b',
    feedback: {
      correct: 'Correct. Thrifty means careful with money.',
      incorrect: 'A thrifty shopper saves money.'
    }
  },
  {
    id: 16,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: "The loss of any job can put a financial strain on a family's expenses. What does strain most nearly mean?",
    choices: { a: 'A stress or tension', b: 'Freedom', c: 'A brave attempt', d: 'A loss of confidence' },
    key: 'a',
    feedback: {
      correct: 'Correct. A financial strain is financial stress.',
      incorrect: 'The clue is job loss affecting expenses.'
    }
  },
  {
    id: 17,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'There was a minor glitch in the newsletter. What does minor most nearly mean?',
    choices: { a: 'A young person', b: 'A spelling error', c: 'Catastrophic', d: 'Not seriously important' },
    key: 'd',
    feedback: {
      correct: 'Correct. Minor means small or not very important.',
      incorrect: 'Minor problems are not major problems.'
    }
  },
  {
    id: 18,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: "The larger dog tolerated the smaller dog's yapping. What does tolerated most nearly mean?",
    choices: { a: 'To annoy', b: 'To forgive', c: 'To ignore', d: 'To endure' },
    key: 'd',
    feedback: {
      correct: 'Correct. Tolerated means put up with or endure.',
      incorrect: 'The larger dog accepted the noise without stopping it.'
    }
  },
  {
    id: 19,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: "The baby gazed at his babysitter's funny face with awe. What does awe most nearly mean?",
    choices: { a: 'A shocking change', b: 'A feeling of wonder', c: 'Fearful of something', d: 'Humor' },
    key: 'b',
    feedback: {
      correct: 'Correct. Awe means wonder and amazement.',
      incorrect: 'The clue is the baby gazed at the face with amazement.'
    }
  },
  {
    id: 20,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Context Clues',
    stem: 'The boss would usually dictate the business letters for her assistant to type up. What does dictate most nearly mean?',
    choices: { a: 'Give direct orders', b: 'Write neatly', c: 'Say words out loud', d: 'Rule with absolute power' },
    key: 'c',
    feedback: {
      correct: 'Correct. To dictate a letter is to say it aloud so someone else can write or type it.',
      incorrect: 'The clue is assistant to type up.'
    }
  },
  {
    id: 21,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: henryPassage,
    stem: 'In the passage, the word reign most nearly means',
    choices: { a: 'regime', b: 'throne', c: 'leash', d: 'crown' },
    key: 'a',
    feedback: {
      correct: 'Correct. Reign refers to the period or system of rule.',
      incorrect: 'The passage is talking about Henry VIII ruling England over time, not the chair he sat on.'
    }
  },
  {
    id: 22,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: henryPassage,
    stem: 'The OPPOSITE of conversely in the passage is',
    choices: { a: 'oppositely', b: 'silently', c: 'similarly', d: 'ordinarily' },
    key: 'c',
    feedback: {
      correct: 'Correct. Conversely means in contrast, so similarly is the opposite.',
      incorrect: 'Look for the choice that means in the same way.'
    }
  },
  {
    id: 23,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: everestPassage,
    stem: 'In the passage, the word remote most nearly means',
    choices: { a: 'device', b: 'watery', c: 'distant', d: 'mountainous' },
    key: 'c',
    feedback: {
      correct: 'Correct. Remote means far away or distant.',
      incorrect: 'The phrase remote reaches suggests a faraway place.'
    }
  },
  {
    id: 24,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: everestPassage,
    stem: 'The OPPOSITE of altitude in the passage is',
    choices: { a: 'cliff', b: 'depth', c: 'hill', d: 'height' },
    key: 'b',
    feedback: {
      correct: 'Correct. Altitude means height, so depth is the opposite.',
      incorrect: 'Look for the word that contrasts with height.'
    }
  },
  {
    id: 25,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: everestPassage,
    stem: 'In the passage, the word summit most nearly means',
    choices: { a: 'valley', b: 'point', c: 'flat', d: 'peak' },
    key: 'd',
    feedback: {
      correct: 'Correct. Summit means the top or peak of a mountain.',
      incorrect: 'Mount Everest clues you toward the top of a mountain.'
    }
  },
  {
    id: 26,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: bookReportPassage,
    stem: 'In the passage, the word assumed most nearly means',
    choices: { a: 'read', b: 'expected', c: 'doubted', d: 'stated' },
    key: 'b',
    feedback: {
      correct: 'Correct. Assumed here means expected.',
      incorrect: 'The writer thought the project would be boring before it began.'
    }
  },
  {
    id: 27,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: bookReportPassage,
    stem: 'The OPPOSITE of protagonist in the passage is',
    choices: { a: 'hero', b: 'scene', c: 'character', d: 'antagonist' },
    key: 'd',
    feedback: {
      correct: 'Correct. The opposite role to protagonist is antagonist.',
      incorrect: 'Think in story-character terms: hero versus opponent.'
    }
  },
  {
    id: 28,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: bookReportPassage,
    stem: 'In the passage, the word stall most nearly means',
    choices: { a: 'stable', b: 'allow', c: 'delay', d: 'release' },
    key: 'c',
    feedback: {
      correct: 'Correct. Stall means delay or hold off.',
      incorrect: 'The secret agent uses explosives to slow the guards down.'
    }
  },
  {
    id: 29,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: trickPassage,
    stem: 'In the passage, the word custom most nearly means',
    choices: { a: 'tradition', b: 'inspection', c: 'outfit', d: 'party' },
    key: 'a',
    feedback: {
      correct: 'Correct. A custom is a tradition.',
      incorrect: 'The sentence describes a long-standing Halloween practice.'
    }
  },
  {
    id: 30,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: trickPassage,
    stem: 'In the passage, the word gorge most nearly means',
    choices: { a: 'canyon', b: 'devour', c: 'collect', d: 'give' },
    key: 'b',
    feedback: {
      correct: 'Correct. Gorge means eat greedily or devour.',
      incorrect: 'The clue is children going door to door in costume and consuming candy.'
    }
  },
  {
    id: 31,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: trickPassage,
    stem: 'The OPPOSITE of mischief in the passage is',
    choices: { a: 'obedience', b: 'prank', c: 'greed', d: 'joy' },
    key: 'a',
    feedback: {
      correct: 'Correct. Mischief contrasts with obedience.',
      incorrect: 'Look for the choice that means behaving properly.'
    }
  },
  {
    id: 32,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: sunPassage,
    stem: 'In the passage, the word numerous most nearly means',
    choices: { a: 'many', b: 'numbers', c: 'long', d: 'few' },
    key: 'a',
    feedback: {
      correct: 'Correct. Numerous means many.',
      incorrect: 'The phrase billions of stars helps define numerous.'
    }
  },
  {
    id: 33,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: sunPassage,
    stem: 'The OPPOSITE of solitary in the passage is',
    choices: { a: 'deadly', b: 'bright', c: 'solo', d: 'multiple' },
    key: 'd',
    feedback: {
      correct: 'Correct. Solitary means single, so multiple is the opposite.',
      incorrect: 'Look for the choice that means more than one.'
    }
  },
  {
    id: 34,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: sunPassage,
    stem: 'In the passage, the word sustains most nearly means',
    choices: { a: 'burns', b: 'transforms', c: 'supports', d: 'deprives' },
    key: 'c',
    feedback: {
      correct: 'Correct. Sustains means supports or keeps going.',
      incorrect: 'The clue is oxygen that keeps life possible.'
    }
  },
  {
    id: 35,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: oldFaithfulPassage,
    stem: 'In the passage, the word prompt most nearly means',
    choices: { a: 'late', b: 'crazy', c: 'lofty', d: 'timely' },
    key: 'd',
    feedback: {
      correct: 'Correct. Prompt means timely or on time.',
      incorrect: 'Old Faithful is known for being regular and on schedule.'
    }
  },
  {
    id: 36,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: oldFaithfulPassage,
    stem: 'The OPPOSITE of intense in the passage is',
    choices: { a: 'strong', b: 'mild', c: 'soft', d: 'keen' },
    key: 'b',
    feedback: {
      correct: 'Correct. Mild is the opposite of intense.',
      incorrect: 'Look for the least forceful choice.'
    }
  },
  {
    id: 37,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: oldFaithfulPassage,
    stem: 'In the passage, the word spurt most nearly means',
    choices: { a: 'quick', b: 'gush', c: 'liquid', d: 'waterfall' },
    key: 'b',
    feedback: {
      correct: 'Correct. A spurt is a gush or sudden burst.',
      incorrect: 'The clue is hot water vapor shooting into the air.'
    }
  },
  {
    id: 38,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: owlPassage,
    stem: 'In the passage, the word intercept most nearly means',
    choices: { a: 'catch', b: 'assist', c: 'release', d: 'interpret' },
    key: 'a',
    feedback: {
      correct: 'Correct. Intercept here means catch.',
      incorrect: 'The owl uses talons on prey, so the meaning is close to catch.'
    }
  },
  {
    id: 39,
    category: 'Vocabulary',
    psychometricCategory: 'Word Meaning in Context',
    subTheme: 'Passage Vocabulary',
    stimulus: owlPassage,
    stem: 'In the passage, the word swift most nearly means',
    choices: { a: 'flying', b: 'deliberate', c: 'rapid', d: 'normal' },
    key: 'c',
    feedback: {
      correct: 'Correct. Swift means rapid or fast.',
      incorrect: 'The clue is quick hunting movement.'
    }
  },
  {
    id: 40,
    category: 'Vocabulary',
    psychometricCategory: 'Antonyms',
    subTheme: 'Opposites in Passage',
    stimulus: owlPassage,
    stem: 'The OPPOSITE of edible in the passage is',
    choices: { a: 'hungry', b: 'tired', c: 'diet', d: 'unsuitable' },
    key: 'd',
    feedback: {
      correct: 'Correct. Edible means fit to eat, so unsuitable is the closest opposite among the choices.',
      incorrect: 'Look for the choice that suggests not fit for use or eating.'
    }
  },
  {
    id: 41,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The old man had a ___ amount of hair on his wrinkled head.',
    choices: { a: 'total', b: 'sparse', c: 'medium', d: 'curly' },
    key: 'b',
    feedback: {
      correct: 'Correct. Sparse means thin or not much.',
      incorrect: 'The sentence suggests very little hair.'
    }
  },
  {
    id: 42,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'When she opened her closet, an ___ of clothing and shoes toppled down on her head.',
    choices: { a: 'avalanche', b: 'advertisement', c: 'entrance', d: 'order' },
    key: 'a',
    feedback: {
      correct: 'Correct. Avalanche fits the image of many things falling down at once.',
      incorrect: 'Look for the word that suggests a sudden heavy fall.'
    }
  },
  {
    id: 43,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'During the concert, several people ___ and held their ears when the singer was off-pitch.',
    choices: { a: 'spoke', b: 'tripped', c: 'marched', d: 'winced' },
    key: 'd',
    feedback: {
      correct: 'Correct. Winced means reacted with discomfort.',
      incorrect: 'The clue is off-pitch and held their ears.'
    }
  },
  {
    id: 44,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The captain of the ship was forced to ___ the original plan of sailing north in order to avoid the oncoming storm.',
    choices: { a: 'steer', b: 'maintain', c: 'abandon', d: 'swerve' },
    key: 'c',
    feedback: {
      correct: 'Correct. The captain had to give up the original plan, so abandon fits.',
      incorrect: 'Avoiding a storm means changing the plan, not keeping it.'
    }
  },
  {
    id: 45,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'It was rather ___ for Tim to cook a four course dinner for his entire family when he had never cooked a meal before.',
    choices: { a: 'lazy', b: 'effortless', c: 'ambitious', d: 'jealous' },
    key: 'c',
    feedback: {
      correct: 'Correct. Ambitious fits because the goal was challenging and unusually large.',
      incorrect: 'The clue is he had never cooked before.'
    }
  },
  {
    id: 46,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The neighborhood watch would ___ witness any criminal activity since the neighborhood was so close to the police station.',
    choices: { a: 'frequently', b: 'seldom', c: 'honestly', d: 'likely' },
    key: 'b',
    feedback: {
      correct: 'Correct. If the neighborhood is close to the police station, criminal activity would be rare, so the watch would seldom see it.',
      incorrect: 'The clue is close to the police station, which suggests crime would be rare.'
    }
  },
  {
    id: 47,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: "New Year's Eve is the only special ___ when Denise will wear a dress.",
    choices: { a: 'reason', b: 'meal', c: 'corral', d: 'occasion' },
    key: 'd',
    feedback: {
      correct: 'Correct. Occasion means a special event or time.',
      incorrect: 'New Year’s Eve is a special event, not a meal or place.'
    }
  },
  {
    id: 48,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Nothing could explain the sudden ___ in the popularity of the new restaurant despite the many excellent reviews.',
    choices: { a: 'decline', b: 'recline', c: 'define', d: 'incline' },
    key: 'a',
    feedback: {
      correct: 'Correct. Despite excellent reviews, popularity went down, so decline fits.',
      incorrect: 'The clue is despite many excellent reviews.'
    }
  },
  {
    id: 49,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: "The teacher had a hard time ___ the student's sloppy handwriting on the test.",
    choices: { a: 'fulfilling', b: 'deciphering', c: 'writing', d: 'spoiling' },
    key: 'b',
    feedback: {
      correct: 'Correct. Deciphering means figuring out something difficult to read.',
      incorrect: 'Sloppy handwriting needs to be interpreted or read.'
    }
  },
  {
    id: 50,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: "There's a sign in the building saying that ___ is only allowed to qualified personnel.",
    choices: { a: 'excess', b: 'failing', c: 'speaking', d: 'access' },
    key: 'd',
    feedback: {
      correct: 'Correct. Access is the word that means permission to enter or use.',
      incorrect: 'The phrase allowed to qualified personnel points to permission or entry.'
    }
  },
  {
    id: 51,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Each morning, the ___ of doughnuts, pastries, and other delicacies float down the block and encourage the neighborhood\'s inhabitants to visit the bakery.',
    choices: { a: 'taste', b: 'creativity', c: 'aroma', d: 'heft' },
    key: 'c',
    feedback: {
      correct: 'Correct. Aroma means smell, which can float down the block.',
      incorrect: 'Think about what from a bakery can travel through the air.'
    }
  },
  {
    id: 52,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'My social studies teacher has an uncanny ___ to a famous movie star.',
    choices: { a: 'ambulance', b: 'resemblance', c: 'ensemble', d: 'detection' },
    key: 'b',
    feedback: {
      correct: 'Correct. Resemblance means similarity in appearance.',
      incorrect: 'The clue is to a famous movie star.'
    }
  },
  {
    id: 53,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: "I'm not easily ___, but I thought it was amazing when the acrobat was able to bend into the shape of a pretzel and still ride a bicycle!",
    choices: { a: 'unnerved', b: 'impressed', c: 'terrified', d: 'disappointed' },
    key: 'b',
    feedback: {
      correct: 'Correct. Impressed fits the reaction of thinking something was amazing.',
      incorrect: 'The clue is amazing.'
    }
  },
  {
    id: 54,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The clever thief in the story told the police that they must ___ with his demands or else he would destroy the precious piece of artwork.',
    choices: { a: 'comply', b: 'rumble', c: 'compile', d: 'reconsider' },
    key: 'a',
    feedback: {
      correct: 'Correct. Comply with his demands is the standard phrase.',
      incorrect: 'Look for the verb that naturally goes with with his demands.'
    }
  },
  {
    id: 55,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: "___ was expressed throughout the auditorium when it was announced that one of the school's most successful students won a national award for excellence.",
    choices: { a: 'Frustration', b: 'Anguish', c: 'Laughter', d: 'Jubilation' },
    key: 'd',
    feedback: {
      correct: 'Correct. Jubilation means joyful celebration.',
      incorrect: 'Winning a national award would lead to celebration.'
    }
  },
  {
    id: 56,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The athletic dancer made a flamboyant leap into the air that proved difficult for his students to ___.',
    choices: { a: 'enforce', b: 'change', c: 'duplicate', d: 'congratulate' },
    key: 'c',
    feedback: {
      correct: 'Correct. Duplicate means copy or do in the same way.',
      incorrect: 'The sentence is about students trying to repeat a difficult leap.'
    }
  },
  {
    id: 57,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Evan made the unfortunate ___ of a car whose engine must be replaced.',
    choices: { a: 'perchance', b: 'suspension', c: 'purchase', d: 'detention' },
    key: 'c',
    feedback: {
      correct: 'Correct. Purchase means buy.',
      incorrect: 'The sentence is about buying a car.'
    }
  },
  {
    id: 58,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'The ___ of the book that we read in our English class was that one should treat others with respect.',
    choices: { a: 'chapter', b: 'moral', c: 'title', d: 'story' },
    key: 'b',
    feedback: {
      correct: 'Correct. The moral of a story is its lesson.',
      incorrect: 'The sentence asks for the lesson taught by the book.'
    }
  },
  {
    id: 59,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Emmy has been ___ of sleep lately because of the construction work going on next door at all hours of the night.',
    choices: { a: 'deprived', b: 'offended', c: 'honored', d: 'languid' },
    key: 'a',
    feedback: {
      correct: 'Correct. Deprived of sleep is the standard phrase.',
      incorrect: 'The clue is lack of sleep because of noise.'
    }
  },
  {
    id: 60,
    category: 'Vocabulary',
    psychometricCategory: 'Sentence Completion',
    subTheme: 'Best-Fit Word',
    stem: 'Caleb constantly argues that going to the library is ___ because of the internet, but Alice thinks that the internet cannot replace going to the library.',
    choices: { a: 'obsolete', b: 'unreliable', c: 'magical', d: 'modern' },
    key: 'a',
    feedback: {
      correct: 'Correct. Obsolete means outdated or no longer needed.',
      incorrect: 'The clue is Caleb thinks the internet has replaced the library.'
    }
  }
];
