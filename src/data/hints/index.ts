interface HintStrategy {
  understanding: string[];  // Questions to help understand the concept
  process: string[];       // Questions to guide through solving
}

interface ClassificationHints {
  [key: string]: {
    description: string;
    subThemes: {
      [key: string]: HintStrategy;
    };
  };
}

export const hints: ClassificationHints = {
  "Verbal Analogies": {
    description: "These questions help you see how words and ideas are connected to each other.",
    subThemes: {
      "Sequential/Temporal Relationships": {
        understanding: [
          "What happens first, and what happens next?",
          "How are these words connected by time or order?",
          "Can you think of other things that always happen in a specific order?"
        ],
        process: [
          "What's the relationship between the first two words?",
          "Does one thing lead to another?",
          "Can you find a similar pattern in the answer choices?"
        ]
      },
      "Antonyms/Opposing Concepts": {
        understanding: [
          "How are these words opposites of each other?",
          "What makes these words different from each other?",
          "Can you think of other words that are opposites?"
        ],
        process: [
          "How does the first word contrast with the second word?",
          "Which answer pair shows the same kind of opposite relationship?",
          "Try using the words in a sentence - how do they work against each other?"
        ]
      },
      "Relationship Analysis": {
        understanding: [
          "What connects these pairs of words?",
          "How do these words work together?",
          "What pattern do you see in how these words relate?"
        ],
        process: [
          "What's the relationship between the first pair of words?",
          "Can you find the same relationship in the second pair?",
          "Which option best describes how both pairs are connected?"
        ]
      }
    }
  },
  "Classification": {
    description: "These questions test how well you can group things that belong together.",
    subThemes: {
      "Hierarchical Relationships": {
        understanding: [
          "What makes one thing a type or kind of another thing?",
          "Can you think of examples that fit into bigger groups?",
          "How do we organize things into categories?"
        ],
        process: [
          "Which word could include all the other words as examples?",
          "What do all these things have in common?",
          "If you were organizing these into folders, which would be the main folder?"
        ]
      },
      "Category Recognition": {
        understanding: [
          "What do all these items share in common?",
          "How are these things similar to each other?",
          "What group would all these things belong to?"
        ],
        process: [
          "What's one thing that's true about all the items in the list?",
          "Which answer would make a good label for all these items?",
          "If you were organizing these items, what shelf would they go on?"
        ]
      },
      "Category Exclusion": {
        understanding: [
          "What makes things belong or not belong in a group?",
          "How can you spot the item that's different?",
          "What patterns do you see in the list?"
        ],
        process: [
          "What do most of these items have in common?",
          "Which item doesn't share that common feature?",
          "How is one item different from all the others?"
        ]
      }
    }
  },
  "Logical Reasoning": {
    description: "These questions test how well you can follow steps in thinking to reach an answer.",
    subThemes: {
      "Relative Ordering/Sequencing": {
        understanding: [
          "How can you arrange things in order?",
          "What clues tell you about the order of things?",
          "How can you use words like 'older than' or 'younger than' to make a list?"
        ],
        process: [
          "Can you draw a line showing the order?",
          "What's the first thing you know for sure?",
          "How can you use the clues to put everything in order?"
        ]
      },
      "Conditional Reasoning": {
        understanding: [
          "What do we know must be true?",
          "What are the rules or conditions we're given?",
          "How can we use 'if-then' statements to solve this?"
        ],
        process: [
          "What facts do we know for sure?",
          "What must be true based on these facts?",
          "Which answer follows from what we know without guessing?"
        ]
      }
    }
  },
  "Reading Comprehension": {
    description: "These questions test how well you understand and analyze written passages.",
    subThemes: {
      "Text Analysis": {
        understanding: [
          "What is the main idea of the passage?",
          "What details support the main idea?",
          "What is the author's purpose?"
        ],
        process: [
          "What information is directly stated in the text?",
          "What can you infer from the details given?",
          "How do different parts of the text connect?"
        ]
      },
      "Information Integration": {
        understanding: [
          "How do different pieces of information work together?",
          "What connections can you make between ideas?",
          "What's missing from the passage?"
        ],
        process: [
          "What information would make the passage clearer?",
          "Which details help explain the main idea?",
          "What additional context would be most helpful?"
        ]
      },
      "Author's Purpose": {
        understanding: [
          "What is the author trying to achieve?",
          "How does the author present the information?",
          "What effect does the writing have on the reader?"
        ],
        process: [
          "What clues suggest the author's intent?",
          "How does the writing style support the purpose?",
          "What information would help clarify the author's goals?"
        ]
      },
      "Critical Thinking": {
        understanding: [
          "What are the key elements to analyze?",
          "How can we evaluate the information?",
          "What questions should we ask about the situation?"
        ],
        process: [
          "Which information is most relevant to understanding?",
          "How can we distinguish important from unimportant details?",
          "What would help us better understand the situation?"
        ]
      },
      "Drawing Conclusions": {
        understanding: [
          "What evidence supports each possible conclusion?",
          "What assumptions are we making?",
          "What can we say with certainty based on the text?"
        ],
        process: [
          "What facts are directly stated in the passage?",
          "Which conclusion requires the fewest assumptions?",
          "How can we test if our conclusion is supported by the text?"
        ]
      }
    }
  },
  "Word Meaning in Context": {
    description: "These questions test how well you can understand what words mean based on how they're used.",
    subThemes: {
      "Context Clues": {
        understanding: [
          "What clues around the word help explain its meaning?",
          "How is the word being used in this sentence?",
          "What other words or phrases give hints about the meaning?"
        ],
        process: [
          "Look at the words before and after the target word",
          "Think about what makes sense in this context",
          "Consider how the word affects the meaning of the whole sentence"
        ]
      },
      "Story Context": {
        understanding: [
          "How does the word fit into the story?",
          "What's happening when this word is used?",
          "How does the word help tell the story?"
        ],
        process: [
          "Look at what happens before and after the word is used",
          "Think about how the word affects the characters or action",
          "Consider why the author chose this word"
        ]
      }
    }
  },
  "Word Choice": {
    description: "These questions test how well you can choose the most appropriate word for a specific context.",
    subThemes: {
      "Physical Sensations": {
        understanding: [
          "What physical feeling is being described?",
          "How do different words describe different sensations?",
          "Which word best matches the physical experience?"
        ],
        process: [
          "Think about how each word feels physically",
          "Consider which word best matches the situation",
          "Compare the intensity of different words"
        ]
      },
      "Word Precision": {
        understanding: [
          "What makes one word more precise than another?",
          "How can specific word choices improve clarity?",
          "Which word best captures the exact meaning needed?"
        ],
        process: [
          "Consider the context and specific meaning needed",
          "Compare general words with more specific alternatives",
          "Think about technical or specialized vocabulary that might be more precise"
        ]
      }
    }
  },
  "Antonyms": {
    description: "These questions test your understanding of words with opposite meanings.",
    subThemes: {
      "Word Opposites": {
        understanding: [
          "What is the core meaning of the given word?",
          "What would be the opposite of this meaning?",
          "How can context help determine the exact opposite?"
        ],
        process: [
          "First, define the word in your own terms",
          "Think about what would be completely different from this meaning",
          "Look for the choice that provides the clearest contrast"
        ]
      }
    }
  },
  "Punctuation": {
    description: "These questions test your understanding of how punctuation marks are used to clarify meaning in sentences.",
    subThemes: {
      "Comma Usage": {
        understanding: [
          "What are the different reasons we use commas?",
          "How do commas help readers understand the structure of a sentence?",
          "What parts of the sentence need to be separated by commas?"
        ],
        process: [
          "Look for introductory phrases or clauses that need commas",
          "Check for independent clauses joined by coordinating conjunctions",
          "Consider where a reader would naturally pause in the sentence"
        ]
      }
    }
  },
  "Spelling": {
    description: "These questions test your ability to identify correctly spelled words and common spelling patterns.",
    subThemes: {
      "Word Recognition": {
        understanding: [
          "What spelling patterns do you notice in these words?",
          "Are there any special rules that apply to these words?",
          "How do similar words follow spelling patterns?"
        ],
        process: [
          "Look for common spelling patterns",
          "Check for doubled letters or silent letters",
          "Consider plural forms and their rules"
        ]
      }
    }
  },
  "Grammar": {
    description: "These questions test your understanding of proper grammar usage and sentence structure.",
    subThemes: {
      "Verb Tense": {
        understanding: [
          "What time period is being discussed?",
          "How do different verb forms show when something happened?",
          "What clues in the sentence tell you about timing?"
        ],
        process: [
          "Look for time-related words in the sentence",
          "Consider when the action happened",
          "Think about which verb form matches the time"
        ]
      },
      "Conjunctions": {
        understanding: [
          "How are the two parts of the sentence related?",
          "What kind of relationship needs to be shown?",
          "What does each conjunction typically indicate?"
        ],
        process: [
          "Identify the relationship between the ideas",
          "Consider how the events are connected",
          "Think about the meaning each conjunction adds"
        ]
      },
      "Transitions": {
        understanding: [
          "What is the relationship between the ideas?",
          "How do different transitions affect meaning?",
          "What kind of connection needs to be shown?"
        ],
        process: [
          "Look at how the ideas relate to each other",
          "Consider what the transition word needs to express",
          "Think about the logical connection between statements"
        ]
      },
      "Adverbs and Adjectives": {
        understanding: [
          "What is the difference between adjectives and adverbs?",
          "How do we describe actions versus things?",
          "When do we use -ly endings?"
        ],
        process: [
          "Identify what is being described (an action or a thing)",
          "Consider whether you need to describe how something is done",
          "Check if you need to modify a verb (use an adverb) or a noun (use an adjective)"
        ]
      },
      "Usage": {
        understanding: [
          "How should verb tenses match in a sentence?",
          "What makes sentence parts work together properly?",
          "How do different parts of speech work together?"
        ],
        process: [
          "Check for consistent verb tenses",
          "Look for proper agreement between parts",
          "Consider how different words relate to each other"
        ]
      }
    }
  },
  "Capitalization": {
    description: "These questions test your understanding of when to use capital letters.",
    subThemes: {
      "Proper Nouns": {
        understanding: [
          "What kinds of words need capital letters?",
          "When do titles get capitalized?",
          "How do we handle proper names and titles?"
        ],
        process: [
          "Identify proper nouns and titles in the sentence",
          "Check if titles are used before names",
          "Consider whether words are being used as names or general terms"
        ]
      }
    }
  },
  "Language": {
    description: "These questions test your understanding of grammar, punctuation, and language mechanics.",
    subThemes: {
      "Punctuation": {
        understanding: [
          "What is the purpose of punctuation in this sentence?",
          "How does punctuation affect the meaning?",
          "What rules govern this type of punctuation?"
        ],
        process: [
          "Identify the sentence structure (simple, compound, complex)",
          "Check if independent clauses are properly joined",
          "Consider where natural pauses occur in the sentence"
        ]
      },
      "Usage": {
        understanding: [
          "What is the relationship between different parts of the sentence?",
          "How do verb tenses work together?",
          "What patterns should be consistent?"
        ],
        process: [
          "Check for agreement between subjects and verbs",
          "Verify that verb tenses are consistent",
          "Look for proper word forms and combinations"
        ]
      },
      "Capitalization": {
        understanding: [
          "What types of words require capitalization?",
          "When are titles or proper nouns capitalized?",
          "How do capitalization rules affect meaning?"
        ],
        process: [
          "Identify proper nouns and titles",
          "Check for correct capitalization of names and places",
          "Consider special capitalization rules for titles and headings"
        ]
      }
    }
  },
  "Mathematics": {
    description: "These questions test mathematical understanding and problem-solving skills across various topics.",
    subThemes: {
      "Basic Arithmetic": {
        understanding: [
          "What mathematical operations are involved?",
          "How can you break down this problem into simpler steps?",
          "What patterns do you notice in the numbers?"
        ],
        process: [
          "Try working with smaller numbers first",
          "Check if the order of operations matters here",
          "Consider if there's a faster way to solve this"
        ]
      },
      "Algebra": {
        understanding: [
          "What is the unknown value we're trying to find?",
          "What information do we have about this value?",
          "How can we represent this situation mathematically?"
        ],
        process: [
          "Write out the equation that represents the problem",
          "Identify what steps will isolate the variable",
          "Check if your solution makes sense in context"
        ]
      },
      "Geometry": {
        understanding: [
          "What geometric shapes or concepts are involved?",
          "What properties of these shapes are important here?",
          "How do the given measurements relate to each other?"
        ],
        process: [
          "Draw and label a diagram if one isn't provided",
          "List the relevant formulas you might need",
          "Consider if there are multiple ways to solve this"
        ]
      }
    }
  },
  "Quantitative Reasoning": {
    description: "These questions test your ability to analyze numerical patterns and relationships.",
    subThemes: {
      "Pattern Recognition": {
        understanding: [
          "What operation changes each number to the next?",
          "How do the numbers increase or decrease?",
          "Is there a consistent rule being applied?"
        ],
        process: [
          "Look at the difference between consecutive numbers",
          "Check if multiplication or division is involved",
          "Try applying the pattern to the last number"
        ]
      },
      "Number Properties": {
        understanding: [
          "What patterns do you notice about the numbers?",
          "How do even and odd numbers behave?",
          "What happens when you combine different types of numbers?"
        ],
        process: [
          "Try testing the pattern with a few examples",
          "Look for consistent results in the given examples",
          "Check if the pattern holds true for all cases shown"
        ]
      },
      "Logic and Problem Solving": {
        understanding: [
          "What information is given in the problem?",
          "How are different values related to each other?",
          "What do you need to find or prove?"
        ],
        process: [
          "Break down the problem into smaller steps",
          "Calculate known values first",
          "Test each option systematically"
        ]
      },
      "Balance and Equations": {
        understanding: [
          "What does each symbol represent?",
          "How are the sides of the equation related?",
          "What needs to be equal or balanced?"
        ],
        process: [
          "Start with the known values",
          "Use the balance concept to find unknowns",
          "Check if your solution maintains balance"
        ]
      },
      "Geometry": {
        understanding: [
          "What geometric shapes are involved?",
          "What properties of these shapes are important?",
          "How do measurements relate to the shape?"
        ],
        process: [
          "Draw or visualize the problem",
          "Use known geometric formulas",
          "Consider how shapes combine or interact"
        ]
      }
    }
  }
}; 