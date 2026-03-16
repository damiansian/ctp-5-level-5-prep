import React from 'react';
import { categories } from '../data/questions';

type QuestionStatusKey = `${string}-${number}`;

interface ScoreTrackerProps {
  score: {
    correct: number;
    incorrect: number;
    total: number;
  };
  questionStatuses: { [key: QuestionStatusKey]: 'correct' | 'incorrect' | null };
}

const ScoreTracker: React.FC<ScoreTrackerProps> = ({ score, questionStatuses }) => {
  // Filter out Verbal Reasoning to match sidebar
  const visibleCategories = categories.filter(cat => cat.name !== 'Verbal Reasoning');

  // Calculate statistics based only on visible categories
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalQuestions = 0;

  visibleCategories.forEach(category => {
    category.questions.forEach(question => {
      const statusKey = `${category.name}-${question.id}` as QuestionStatusKey;
      const status = questionStatuses[statusKey];

      totalQuestions++;
      if (status === 'correct') {
        totalCorrect++;
      } else if (status === 'incorrect') {
        totalIncorrect++;
      }
    });
  });

  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const handlePrintScore = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow pop-ups to print the score report');
      return;
    }

    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    // Calculate category statistics (excluding Verbal Reasoning)
    const categoryStats = visibleCategories.map(category => {
      const questions = category.questions;
      let correct = 0;
      let incorrect = 0;
      const questionDetails: Array<{ id: number; status: 'correct' | 'incorrect' | 'unanswered' }> = [];

      questions.forEach(question => {
        const statusKey = `${category.name}-${question.id}` as QuestionStatusKey;
        const status = questionStatuses[statusKey];

        if (status === 'correct') {
          correct++;
          questionDetails.push({ id: question.id, status: 'correct' });
        } else if (status === 'incorrect') {
          incorrect++;
          questionDetails.push({ id: question.id, status: 'incorrect' });
        } else {
          questionDetails.push({ id: question.id, status: 'unanswered' });
        }
      });

      const total = questions.length;
      const categoryPercentage = total > 0 ? Math.round((correct / total) * 100) : 0;

      return {
        name: category.name,
        correct,
        incorrect,
        unanswered: total - correct - incorrect,
        total,
        percentage: categoryPercentage,
        questionDetails
      };
    });

    // Generate category sections HTML
    const categorySectionsHTML = categoryStats.map(cat => {
      const correctQuestions = cat.questionDetails.filter(q => q.status === 'correct').map(q => q.id);
      const incorrectQuestions = cat.questionDetails.filter(q => q.status === 'incorrect').map(q => q.id);
      const unansweredQuestions = cat.questionDetails.filter(q => q.status === 'unanswered').map(q => q.id);

      return `
        <div class="category-section">
          <div class="category-header">
            <h2>${cat.name}</h2>
            <div class="category-score">${cat.percentage}%</div>
          </div>
          <div class="category-stats">
            <div class="stat-row">
              <span class="stat-label">Correct:</span>
              <span class="stat-value correct">${cat.correct}/${cat.total}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Incorrect:</span>
              <span class="stat-value incorrect">${cat.incorrect}/${cat.total}</span>
            </div>
            ${cat.unanswered > 0 ? `
            <div class="stat-row">
              <span class="stat-label">Unanswered:</span>
              <span class="stat-value unanswered">${cat.unanswered}/${cat.total}</span>
            </div>
            ` : ''}
          </div>
          <div class="question-breakdown">
            ${correctQuestions.length > 0 ? `
              <div class="question-group">
                <strong>✅ Correct:</strong> ${correctQuestions.join(', ')}
              </div>
            ` : ''}
            ${incorrectQuestions.length > 0 ? `
              <div class="question-group incorrect-group">
                <strong>❌ Needs Review:</strong> ${incorrectQuestions.join(', ')}
              </div>
            ` : ''}
            ${unansweredQuestions.length > 0 ? `
              <div class="question-group unanswered-group">
                <strong>⏸️ Not Attempted:</strong> ${unansweredQuestions.join(', ')}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Score Report for Dad</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              color: #333;
            }
            h1 {
              color: #2c5aa0;
              border-bottom: 3px solid #2c5aa0;
              padding-bottom: 10px;
              margin-bottom: 20px;
              font-size: 24px;
            }
            h2 {
              font-size: 18px;
              margin: 0;
              color: #2c5aa0;
            }
            .header-info {
              background-color: #f5f5f5;
              padding: 12px 15px;
              border-radius: 8px;
              margin-bottom: 20px;
              font-size: 14px;
            }
            .header-info p {
              margin: 5px 0;
            }
            .overall-summary {
              background-color: #e8f4f8;
              border: 2px solid #2c5aa0;
              border-radius: 8px;
              padding: 15px;
              margin: 20px 0;
              text-align: center;
            }
            .overall-summary h3 {
              margin: 0 0 10px 0;
              color: #2c5aa0;
            }
            .summary-stats {
              display: flex;
              justify-content: space-around;
              margin-top: 10px;
            }
            .summary-stat {
              text-align: center;
            }
            .summary-stat-value {
              font-size: 24px;
              font-weight: bold;
              color: #2c5aa0;
            }
            .summary-stat-label {
              font-size: 12px;
              color: #666;
            }
            .category-section {
              background-color: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 15px;
              margin: 15px 0;
              page-break-inside: avoid;
            }
            .category-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 12px;
              padding-bottom: 10px;
              border-bottom: 2px solid #e0e0e0;
            }
            .category-score {
              font-size: 24px;
              font-weight: bold;
              color: #2c5aa0;
              background-color: #e8f4f8;
              padding: 5px 15px;
              border-radius: 6px;
            }
            .category-stats {
              margin: 10px 0;
            }
            .stat-row {
              display: flex;
              justify-content: space-between;
              padding: 6px 0;
              font-size: 14px;
            }
            .stat-label {
              font-weight: 600;
              color: #555;
            }
            .stat-value {
              font-weight: bold;
            }
            .stat-value.correct {
              color: #28a745;
            }
            .stat-value.incorrect {
              color: #dc3545;
            }
            .stat-value.unanswered {
              color: #ffc107;
            }
            .question-breakdown {
              margin-top: 12px;
              padding-top: 12px;
              border-top: 1px solid #e0e0e0;
            }
            .question-group {
              margin: 8px 0;
              padding: 8px;
              background-color: #f8f9fa;
              border-radius: 4px;
              font-size: 13px;
              line-height: 1.6;
            }
            .question-group.incorrect-group {
              background-color: #fff5f5;
              border-left: 3px solid #dc3545;
            }
            .question-group.unanswered-group {
              background-color: #fffbf0;
              border-left: 3px solid #ffc107;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #eee;
              text-align: center;
              color: #888;
              font-size: 12px;
            }
            @media print {
              body {
                margin: 10px;
              }
              .category-section {
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <h1>📊 CTP Level 5 Practice Test - Detailed Score Report</h1>

          <div class="header-info">
            <p><strong>Date:</strong> ${currentDate}</p>
            <p><strong>Time:</strong> ${currentTime}</p>
          </div>

          <div class="overall-summary">
            <h3>Overall Performance</h3>
            <div class="summary-stats">
              <div class="summary-stat">
                <div class="summary-stat-value">${percentage}%</div>
                <div class="summary-stat-label">Final Score</div>
              </div>
              <div class="summary-stat">
                <div class="summary-stat-value" style="color: #28a745;">${totalCorrect}</div>
                <div class="summary-stat-label">Correct</div>
              </div>
              <div class="summary-stat">
                <div class="summary-stat-value" style="color: #dc3545;">${totalIncorrect}</div>
                <div class="summary-stat-label">Needs Review</div>
              </div>
              <div class="summary-stat">
                <div class="summary-stat-value">${totalQuestions}</div>
                <div class="summary-stat-label">Total Questions</div>
              </div>
            </div>
          </div>

          <h2 style="margin-top: 30px; margin-bottom: 15px;">Performance by Category</h2>

          ${categorySectionsHTML}

          <div class="footer">
            <p>Keep up the great work! 🌟</p>
            <p>Generated from CTP Level 5 Practice App</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    // Automatically open print dialog after a brief delay
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="score-tracker">
      <div className="score-item">
        <div className="score-label">Correct</div>
        <div className="score-value">{totalCorrect}</div>
      </div>
      <div className="score-item">
        <div className="score-label">Needs attention</div>
        <div className="score-value">{totalIncorrect}</div>
      </div>
      <div className="score-item">
        <div className="score-label">Score</div>
        <div className="score-value">{totalCorrect}/{totalQuestions}</div>
      </div>
      <div className="score-item">
        <div className="score-label">Percentage</div>
        <div className="score-value">{percentage}%</div>
      </div>
      <button
        className="send-to-dad-button"
        onClick={handlePrintScore}
        aria-label="Print score report for Dad"
      >
        📤 Send to Dad
      </button>
    </div>
  );
};

export default ScoreTracker;