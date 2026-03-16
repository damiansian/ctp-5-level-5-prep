# Writing Mechanics Questions 1-8 Normalized

Primary drafting source:
- `ctp5-writing-mechanics-claude.md`

Verification source:
- `writing-mechanics-ocr.pdf`

Status:
- normalized draft ready for review
- suitable as the intake template for the first Writing Mechanics batch

## Directions

For questions 1-8, find the punctuation error, if there is one, in the sentence. Some sentences will not have any punctuation errors. If there is no punctuation error in the sentence, circle choice `D` on the answer sheet.

Psychometric read for this batch:
- category: `Writing Mechanics`
- psychometric focus: punctuation and sentence conventions
- core subskills:
  - introductory punctuation
  - end punctuation
  - punctuation in dialogue
  - commas in geographic names
  - apostrophes and possessives
  - recognizing when there is no punctuation error

## Question 1

- id: `1`
- sentence: `Margret who is always late for class, was given detention for a week.`
- choices:
  - `A`: `Margret who`
  - `B`: `class,`
  - `C`: `week.`
  - `D`: `No error`
- student answer: `A`
- expected answer: `A`
- normalized note: A comma is needed after `Margret` to set off the interrupting clause `who is always late for class`.
- confidence: `high`

## Question 2

- id: `2`
- sentence: `Fernando was hired to work in one of the best law firms in New York City?`
- choices:
  - `A`: `was hired`
  - `B`: `of the best law firms`
  - `C`: `City?`
  - `D`: `No error`
- student answer: `C`
- expected answer: `C`
- normalized note: The sentence is declarative, so the question mark is incorrect.
- confidence: `high`

## Question 3

- id: `3`
- sentence: `"The moon is beautiful tonight." Loretta said to her fiancee.`
- choices:
  - `A`: `tonight.`
  - `B`: `Loretta`
  - `C`: `said`
  - `D`: `No error`
- student answer: `B`
- expected answer: `B`
- normalized note: The punctuation error is in the dialogue boundary. The period after `tonight` should be a comma inside the quotation marks because the sentence continues with a speech attribution.
- confidence: `medium`
- qa note: The underlined segment labels come from the workbook layout, and `B` appears to be the intended answer region even though the punctuation issue visually centers on the quoted sentence ending.

## Question 4

- id: `4`
- sentence: `After the dismissal bell rang the students excitedly rushed out of their classrooms.`
- choices:
  - `A`: `rang`
  - `B`: `excitedly`
  - `C`: `classrooms.`
  - `D`: `No error`
- student answer: `A`
- expected answer: `A`
- normalized note: A comma is needed after `rang` to separate the introductory clause from the main clause.
- confidence: `high`

## Question 5

- id: `5`
- sentence: `In 2008, Johnny went back to his hometown of Austin Texas to visit his family.`
- choices:
  - `A`: `2008,`
  - `B`: `Austin Texas`
  - `C`: `family.`
  - `D`: `No error`
- student answer: `D`
- expected answer: `B`
- normalized note: A comma is needed between `Austin` and `Texas`.
- confidence: `high`

## Question 6

- id: `6`
- sentence: `"You're going the wrong way?" Felix shouted to his brother.`
- choices:
  - `A`: `way?`
  - `B`: `shouted`
  - `C`: `brother.`
  - `D`: `No error`
- student answer: `B`
- expected answer: `A`
- normalized note: The punctuation issue appears to be the question mark after `way`. In context, the sentence reads more like an exclamation or shouted statement than a genuine question.
- confidence: `medium`
- qa note: This item remains slightly interpretive from scan evidence alone, but `A` is the strongest normalized answer.

## Question 7

- id: `7`
- sentence: `All of the student's exam scores were revised, graded, and mailed to their parents.`
- choices:
  - `A`: `student's`
  - `B`: `revised, graded,`
  - `C`: `mailed to`
  - `D`: `No error`
- student answer: `D`
- expected answer: `A`
- normalized note: The possessive should likely be plural, `students'`, rather than singular `student's`, because the sentence refers to multiple exam scores and `their parents`.
- confidence: `medium`
- qa note: This appears to be the intended workbook answer, though the sentence blends punctuation and usage/agreement in a way that is slightly less clean than the other items.

## Question 8

- id: `8`
- sentence: `Lauren tried to teach herself to juggle, but she just couldnt figure out how to do it.`
- choices:
  - `A`: `juggle,`
  - `B`: `but`
  - `C`: `couldnt`
  - `D`: `No error`
- student answer: `C`
- expected answer: `C`
- normalized note: The word `couldnt` needs an apostrophe: `couldn't`.
- confidence: `high`

## Batch Summary

- total questions: `8`
- student correct with current normalization: `5`
- student likely incorrect: `3`
- medium-confidence items needing extra care during app conversion:
  - `3`
  - `6`
  - `7`

## Recommended Next Step

Use this normalized file as the source for the first app-ready conversion batch.

When converting to question objects:
- preserve the sentence text exactly as normalized here
- preserve student answer data separately from the official key
- carry forward the confidence and QA notes for questions `3`, `6`, and `7`
