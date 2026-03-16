import { useState, useEffect } from 'react';
import { Question } from '../data/types';
import { hints } from '../data/hints/index';
import HintModal from './HintModal';
import MathContent from './MathContent';
import Dashboard from './Dashboard';

interface QuestionWindowProps {
  question: Question | null;
  onAnswerSubmit: (answer: string, questionId: number) => void;
  onNavigate: (direction: 'next' | 'prev') => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  score?: {
    correct: number;
    incorrect: number;
    total: number;
  };
  questionStatuses?: Record<string, 'correct' | 'incorrect' | null>;
  getStatusKey?: (category: string, id: number) => string;
  answeredQuestion?: {
    answer: string;
    isCorrect: boolean;
    showFeedback: boolean;
  };
}

const QuestionWindow: React.FC<QuestionWindowProps> = ({
  question,
  onAnswerSubmit,
  onNavigate,
  isFirstQuestion,
  isLastQuestion,
  questionStatuses,
  answeredQuestion
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [showHintModal, setShowHintModal] = useState(false);

  // Update local state when question changes
  useEffect(() => {
    if (answeredQuestion) {
      setSelectedAnswer(answeredQuestion.answer);
      setShowFeedback(answeredQuestion.showFeedback);
      setIsCorrect(answeredQuestion.isCorrect);
    } else {
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    }
    setShowHint(false);
    setHintIndex(0);
  }, [question?.id, question?.category, answeredQuestion]);

  if (!question) {
    return (
      <div className="question-window">
        <Dashboard questionStatuses={questionStatuses || {}} />
      </div>
    );
  }

  const handleAnswerClick = (answer: string) => {
    // If the question is already answered correctly, don't allow changes
    if (answeredQuestion?.isCorrect) return;
    
    // If showing feedback but the answer was incorrect, allow new attempts
    if (showFeedback && !isCorrect) {
      setShowFeedback(false);
    }
    
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || !question) return;
    
    const correct = selectedAnswer === question.key;
    setIsCorrect(correct);
    setShowFeedback(true);
    onAnswerSubmit(selectedAnswer, question.id);

    if (!correct) {
      const availableHints = getAvailableHints();
      if (availableHints.length > 0) {
        setShowHintModal(true);
      }
    }
  };

  const handleModalClose = () => {
    setShowHintModal(false);
    setHintIndex((prev) => (prev + 1) % getAvailableHints().length);
  };

  const getAvailableHints = () => {
    try {
      if (!question?.psychometricCategory || !question?.subTheme) return [];
      
      const categoryHints = hints[question.psychometricCategory];
      if (!categoryHints?.subThemes?.[question.subTheme]) return [];

      const subThemeHints = categoryHints.subThemes[question.subTheme];
      return [
        categoryHints.description,
        ...(subThemeHints?.understanding || []),
        ...(subThemeHints?.process || []),
        ...(question.customHints || [])
      ].filter(Boolean); // Remove any undefined/null values
    } catch (error) {
      console.error('Error getting hints:', error);
      return [];
    }
  };

  const getHintText = () => {
    const availableHints = getAvailableHints();
    if (availableHints.length === 0) return 'No hints available for this question.';
    return availableHints[hintIndex] || 'No more hints available.';
  };

  const handleHint = () => {
    const availableHints = getAvailableHints();
    if (availableHints.length > 0) {
      setShowHintModal(true);
    }
  };

  const isCorrectAnswer = (choiceKey: string) => {
    return choiceKey === question?.key;
  };

  const isIncorrectSelection = (choiceKey: string) => {
    return showFeedback && selectedAnswer === choiceKey && !isCorrectAnswer(choiceKey);
  };

  // Helper function to determine if a choice should be disabled
  const isChoiceDisabled = (choiceKey: string) => {
    return answeredQuestion?.isCorrect && selectedAnswer !== choiceKey;
  };

  return (
    <div className="question-window">
      <div className="question-header">
        <div className="question-number">Question {question.id}</div>
        <div className="question-classification">
          <div className="category">{question.psychometricCategory}</div>
          <div className="sub-theme">{question.subTheme}</div>
        </div>
      </div>
      
      <div className="question-content">
        {question.stimulus && (
          <MathContent
            className="stimulus-container"
            content={question.stimulus}
          />
        )}
        <div className="question-text">
          <MathContent content={`<p>${question.stem}</p>`} />
          <div className="choices">
            {Object.entries(question.choices).map(([key, value]) => {
              const isCorrect = isCorrectAnswer(key);
              const isIncorrect = isIncorrectSelection(key);
              const shouldShowCorrect = showFeedback && !showHintModal && isCorrect && selectedAnswer === key;
              const shouldShowIncorrect = showFeedback && isIncorrect;
              
              return (
                <div
                  key={key}
                  className={`choice ${selectedAnswer === key ? 'selected' : ''} ${
                    shouldShowCorrect ? 'correct-answer' : ''
                  } ${shouldShowIncorrect ? 'incorrect-answer' : ''} ${
                    isChoiceDisabled(key) ? 'disabled' : ''
                  }`}
                  onClick={() => handleAnswerClick(key)}
                  style={{ cursor: isChoiceDisabled(key) ? 'not-allowed' : 'pointer' }}
                >
                  <div className="choice-content">
                    <span>
                      {key.toUpperCase()}. <MathContent content={value} inline />
                    </span>
                    {shouldShowCorrect && (
                      <span className="status-icon" aria-label="correct">✓</span>
                    )}
                    {shouldShowIncorrect && (
                      <span className="status-icon incorrect" aria-label="incorrect">✕</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="button-container">
          <button 
            className="submit-button" 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
          >
            Submit
          </button>
          <button
            className="hint-button"
            onClick={handleHint}
          >
            {showHint ? 'Next Hint' : 'Hint'}
          </button>

          <button 
            className="nav-button"
            onClick={() => onNavigate('prev')}
            disabled={isFirstQuestion}
          >
            Previous
          </button>

          <button 
            className="nav-button"
            onClick={() => onNavigate('next')}
            disabled={isLastQuestion}
          >
            Next
          </button>
        </div>

        {showFeedback && isCorrect && (
          <div className="feedback correct">
            {question?.feedback.correct}
          </div>
        )}

        {showFeedback && !isCorrect && (
          <div className="feedback incorrect">
            {question?.feedback.incorrect}
          </div>
        )}

        <HintModal
          isOpen={showHintModal}
          onClose={handleModalClose}
          hint={getHintText() || ''}
          attemptNumber={hintIndex + 1}
        />
      </div>
    </div>
  );
};

export default QuestionWindow; 
