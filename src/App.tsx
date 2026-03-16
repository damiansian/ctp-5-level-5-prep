import { useState, useMemo } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import QuestionWindow from './components/QuestionWindow'
import ScoreTracker from './components/ScoreTracker'
import { Question } from './data/types'
import {
  getTotalQuestionCount,
  getQuestionsByCategory,
  isFirstQuestionInCategory,
  isLastQuestionInCategory
} from './utils/categoryHelpers'

type QuestionStatusKey = `${string}-${number}`;

function App() {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
    total: getTotalQuestionCount()
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionStatuses, setQuestionStatuses] = useState<{ [key: QuestionStatusKey]: 'correct' | 'incorrect' | null }>({});
  const [answeredQuestions, setAnsweredQuestions] = useState<{
    [key: string]: {
      answer: string;
      isCorrect: boolean;
      showFeedback: boolean;
      attempts: number;
    }
  }>({});

  const getStatusKey = (category: string, id: number): QuestionStatusKey => {
    return `${category}-${id}` as QuestionStatusKey;
  };

  const handleAnswerSubmit = (answer: string, questionId: number) => {
    if (!currentQuestion) return;
    
    const isCorrect = answer === currentQuestion.key;
    const answerKey = getStatusKey(currentQuestion.category, questionId);
    const previousAnswer = answeredQuestions[answerKey];
    const currentAttempts = previousAnswer?.attempts || 0;
    const isMultipleAttempts = currentAttempts > 0;

    // Update score based on the new logic
    setScore(prev => {
      let newIncorrect = prev.incorrect;
      
      // If this is a first attempt
      if (!previousAnswer) {
        if (!isCorrect) newIncorrect++; // Only increment if incorrect
      } 
      // If this is a subsequent attempt
      else {
        // If previously incorrect and now correct, decrement the count
        if (!previousAnswer.isCorrect && isCorrect && !isMultipleAttempts) {
          newIncorrect--;
        }
        // If still incorrect and not already counted for multiple attempts, increment
        else if (!isCorrect && !isMultipleAttempts) {
          newIncorrect++;
        }
      }

      return {
        ...prev,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        incorrect: newIncorrect
      };
    });

    const statusKey = getStatusKey(currentQuestion.category, questionId);
    setQuestionStatuses(prev => ({
      ...prev,
      [statusKey]: isCorrect ? 'correct' : 'incorrect'
    }));

    setAnsweredQuestions(prev => {
      return {
        ...prev,
        [answerKey]: {
          answer,
          isCorrect,
          showFeedback: true,
          attempts: currentAttempts + 1
        }
      };
    });
  };

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!currentQuestion) return;

    const allQuestions = getQuestionsByCategory(currentQuestion.category);

    const currentIndex = allQuestions.findIndex(q => q.id === currentQuestion.id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < allQuestions.length) {
      setCurrentQuestion(allQuestions[newIndex]);
    }
  };

  // Memoize expensive computation to prevent re-calculation on every render
  const questionAttempts = useMemo(() =>
    Object.fromEntries(
      Object.entries(answeredQuestions)
        .filter(([key]) => key.startsWith(currentQuestion?.category || ''))
        .map(([key, data]) => [key.split('-')[1], data.attempts])
    ),
    [answeredQuestions, currentQuestion?.category]
  );

  const handleHomeClick = () => {
    setCurrentQuestion(null);
  };

  return (
    <div className="app-container">
      <Sidebar
        onQuestionSelect={setCurrentQuestion}
        onHomeClick={handleHomeClick}
        currentQuestion={currentQuestion}
        questionStatuses={questionStatuses}
        getStatusKey={getStatusKey}
        questionAttempts={questionAttempts}
      />
      <div className="main-content">
        <ScoreTracker
          score={score}
          questionStatuses={questionStatuses}
        />
        <QuestionWindow
          question={currentQuestion}
          onAnswerSubmit={handleAnswerSubmit}
          onNavigate={handleNavigate}
          isFirstQuestion={isFirstQuestionInCategory(currentQuestion)}
          isLastQuestion={isLastQuestionInCategory(currentQuestion)}
          questionStatuses={questionStatuses}
          getStatusKey={getStatusKey}
          answeredQuestion={currentQuestion ? answeredQuestions[getStatusKey(currentQuestion.category, currentQuestion.id)] : undefined}
        />
      </div>
    </div>
  )
}

export default App
