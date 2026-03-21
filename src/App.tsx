import { useState, useMemo, useEffect } from 'react'
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

const STORAGE_KEYS = {
  questionStatuses: 'ctp5-questionStatuses',
  answeredQuestions: 'ctp5-answeredQuestions',
};

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
    total: getTotalQuestionCount()
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionStatuses, setQuestionStatuses] = useState<{ [key: QuestionStatusKey]: 'correct' | 'incorrect' | null }>(
    () => loadFromStorage(STORAGE_KEYS.questionStatuses, {})
  );
  const [answeredQuestions, setAnsweredQuestions] = useState<{
    [key: string]: {
      answer: string;
      isCorrect: boolean;
      showFeedback: boolean;
      attempts: number;
    }
  }>(() => loadFromStorage(STORAGE_KEYS.answeredQuestions, {}));

  // Persist answer data to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.questionStatuses, JSON.stringify(questionStatuses));
  }, [questionStatuses]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.answeredQuestions, JSON.stringify(answeredQuestions));
  }, [answeredQuestions]);

  const getStatusKey = (category: string, id: number): QuestionStatusKey => {
    return `${category}-${id}` as QuestionStatusKey;
  };

  const handleAnswerSubmit = (answer: string, questionId: number) => {
    if (!currentQuestion) return;

    const isCorrect = answer === currentQuestion.key;
    const answerKey = getStatusKey(currentQuestion.category, questionId);
    const previousAnswer = answeredQuestions[answerKey];

    // Update score based on the new logic
    setScore(prev => {
      // First attempt — simple increment
      if (!previousAnswer) {
        return {
          ...prev,
          correct: isCorrect ? prev.correct + 1 : prev.correct,
          incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect
        };
      }
      // Subsequent attempt — only adjust if result changed
      const wasCorrect = previousAnswer.isCorrect;
      if (wasCorrect === isCorrect) return prev; // No change
      return {
        ...prev,
        correct: prev.correct + (isCorrect ? 1 : -1),
        incorrect: prev.incorrect + (isCorrect ? -1 : 1)
      };
    });

    const statusKey = getStatusKey(currentQuestion.category, questionId);
    setQuestionStatuses(prev => ({
      ...prev,
      [statusKey]: isCorrect ? 'correct' : 'incorrect'
    }));

    setAnsweredQuestions(prev => {
      const currentAttempts = previousAnswer?.attempts || 0;
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
        .map(([key, data]) => [key, data.attempts])
    ),
    [answeredQuestions]
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
