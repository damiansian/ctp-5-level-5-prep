import { useState, useRef } from 'react';
import { Question } from '../data/types';
import { getVisibleCategories } from '../utils/categoryHelpers';

type QuestionStatusKey = `${string}-${number}`;

interface SidebarProps {
  onQuestionSelect: (question: Question) => void;
  onHomeClick: () => void;
  currentQuestion: Question | null;
  questionStatuses: { [key: QuestionStatusKey]: 'correct' | 'incorrect' | null };
  getStatusKey: (category: string, id: number) => QuestionStatusKey;
  questionAttempts: { [key: string]: number };
}

const Sidebar: React.FC<SidebarProps> = ({ onQuestionSelect, onHomeClick, currentQuestion, questionStatuses, getStatusKey, questionAttempts }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const questionRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const legacyCategories = new Set(['Verbal Reasoning', 'Reading Comprehension']);

  const getStatusIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') {
      return '✓';
    } else if (status === 'incorrect') {
      return '×';
    }
    return '';
  };

  const isCurrentQuestion = (question: Question) => {
    return currentQuestion?.id === question.id && currentQuestion?.category === question.category;
  };

  const getCategoryCompletion = (questions: Question[]) => {
    let completed = 0;
    questions.forEach(question => {
      const status = questionStatuses[getStatusKey(question.category, question.id)];
      if (status === 'correct') completed++;
    });
    return completed;
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  const getQuestionKey = (question: Question) => {
    return `${question.category}-${question.id}`;
  };

  const handleQuestionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    questions: Question[],
    currentIndex: number
  ) => {
    let nextIndex = -1;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = currentIndex + 1;
        if (nextIndex < questions.length) {
          const nextQuestion = questions[nextIndex];
          onQuestionSelect(nextQuestion);
          // Focus the next button using ref
          const nextKey = getQuestionKey(nextQuestion);
          const nextButton = questionRefs.current.get(nextKey);
          if (nextButton) {
            nextButton.focus();
          }
        }
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        nextIndex = currentIndex - 1;
        if (nextIndex >= 0) {
          const prevQuestion = questions[nextIndex];
          onQuestionSelect(prevQuestion);
          // Focus the previous button using ref
          const prevKey = getQuestionKey(prevQuestion);
          const prevButton = questionRefs.current.get(prevKey);
          if (prevButton) {
            prevButton.focus();
          }
        }
        break;

      case 'Home':
        event.preventDefault();
        const firstQuestion = questions[0];
        onQuestionSelect(firstQuestion);
        const firstKey = getQuestionKey(firstQuestion);
        const firstButton = questionRefs.current.get(firstKey);
        if (firstButton) {
          firstButton.focus();
        }
        break;

      case 'End':
        event.preventDefault();
        const lastQuestion = questions[questions.length - 1];
        onQuestionSelect(lastQuestion);
        const lastKey = getQuestionKey(lastQuestion);
        const lastButton = questionRefs.current.get(lastKey);
        if (lastButton) {
          lastButton.focus();
        }
        break;
    }
  };

  return (
    <div className="sidebar">
      <button
        className="home-button"
        onClick={onHomeClick}
        aria-label="Go to home page"
      >
        <svg className="home-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="home-text">Home</span>
      </button>
      {getVisibleCategories()
        .map((category) => {
        const isExpanded = expandedCategory === category.name;
        const categoryId = `category-${category.name.toLowerCase().replace(/\s+/g, '-')}`;
        const contentId = `content-${categoryId}`;

        return (
          <div key={category.name} className="category">
            <button
              className={`category-header ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleCategory(category.name)}
              aria-expanded={isExpanded}
              aria-controls={contentId}
              id={categoryId}
            >
              <h2 className="category-title">
                {category.name}
                {legacyCategories.has(category.name) ? (
                  <span className="old-badge">OLD</span>
                ) : null}
                {category.questions.length > 0 && (
                  <span className="completed-count">
                    ({getCategoryCompletion(category.questions)}/{category.questions.length})
                  </span>
                )}
                <span className="accordion-icon" aria-hidden="true">
                  {isExpanded ? '−' : '+'}
                </span>
              </h2>
            </button>
            <div
              id={contentId}
              role="region"
              aria-labelledby={categoryId}
              className={`category-content ${isExpanded ? 'expanded' : ''}`}
              hidden={!isExpanded}
            >
              {category.questions.length > 0 ? (
                <ul className="question-list" role="list" aria-label={`${category.name} questions`}>
                  {category.questions.map((question, index) => {
                    const status = questionStatuses[getStatusKey(question.category, question.id)];
                    const attempts = questionAttempts[getStatusKey(question.category, question.id)] || 0;
                    const hasMultipleAttempts = attempts > 1 && status === 'correct';
                    const isCurrent = isCurrentQuestion(question);

                    // Roving tabindex: only current question (or first if none selected) is tabbable
                    const isFirstInCategory = index === 0;
                    const hasCurrentInCategory = category.questions.some(q => isCurrentQuestion(q));
                    const shouldBeTabbable = isCurrent || (!hasCurrentInCategory && isFirstInCategory);

                    return (
                      <li key={`${question.category}-${question.id}`}>
                        <button
                          ref={(el) => {
                            if (el) {
                              questionRefs.current.set(getQuestionKey(question), el);
                            } else {
                              questionRefs.current.delete(getQuestionKey(question));
                            }
                          }}
                          className={`question-button ${isCurrent ? 'active' : ''} ${status ? `status-${status}` : ''}`}
                          onClick={() => onQuestionSelect(question)}
                          onKeyDown={(e) => handleQuestionKeyDown(e, category.questions, index)}
                          tabIndex={shouldBeTabbable ? 0 : -1}
                          aria-current={isCurrent ? 'true' : 'false'}
                          aria-label={`Question ${question.id}`}
                          title={`Question ${question.id}`}
                        >
                          <span className="question-button-content">
                            <span className="question-text">Q{question.id}</span>
                            {status && !hasMultipleAttempts && <span className="status-icon" aria-label={status}>{getStatusIcon(status)}</span>}
                            {hasMultipleAttempts && <span className="status-icon warning" aria-label="multiple attempts">⚠️</span>}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="category-empty">No questions available</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar; 
