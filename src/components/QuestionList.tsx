import React from 'react';
import { Question } from '../data/types';

interface QuestionListProps {
  questions: Question[];
  currentQuestionId: number;
  onQuestionSelect: (id: number) => void;
  answeredQuestions: {
    [key: string]: {
      answer: string;
      isCorrect: boolean;
      attempts: number;
    }
  };
}

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  currentQuestionId,
  onQuestionSelect,
  answeredQuestions
}) => {
  return (
    <div className="question-list">
      <h2>Questions</h2>
      <div className="question-buttons">
        {questions.map((question) => {
          const answer = answeredQuestions[question.id.toString()];
          const isMultipleAttempts = answer?.attempts > 1 && !answer?.isCorrect;
          
          let statusIcon = null;
          if (answer) {
            if (answer.isCorrect) {
              statusIcon = '✓';
            } else if (isMultipleAttempts) {
              statusIcon = '⚠️';
            } else {
              statusIcon = '✗';
            }
          }
          
          return (
            <button
              key={question.id}
              onClick={() => onQuestionSelect(question.id)}
              className={`question-button ${currentQuestionId === question.id ? 'active' : ''}`}
            >
              <span>Question {question.id}</span>
              {statusIcon && (
                <span 
                  className={`status-icon ${answer.isCorrect ? 'correct' : isMultipleAttempts ? 'warning' : 'incorrect'}`}
                  title={isMultipleAttempts ? `${answer.attempts} attempts` : ''}
                >
                  {statusIcon}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionList; 