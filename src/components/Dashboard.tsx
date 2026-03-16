import { useState } from 'react';
import { categories } from '../data/questions';

type QuestionStatusKey = `${string}-${number}`;

interface DashboardProps {
  score?: {
    correct: number;
    incorrect: number;
    total: number;
  };
  questionStatuses: { [key: QuestionStatusKey]: 'correct' | 'incorrect' | null };
  getStatusKey?: (category: string, id: number) => string;
}

// Colorblind-friendly palette
const COLORS = {
  correct: "#0173B2", // Blue - colorblind safe
  incorrect: "#DE8F05", // Orange - colorblind safe
};

function getColor(pct: number) {
  if (pct >= 80) return { bg: "#E3F2FD", text: "#01579B", bar: COLORS.correct };
  if (pct >= 65) return { bg: "#FFF3E0", text: "#E65100", bar: "#FB8C00" };
  return { bg: "#FFE0B2", text: "#E65100", bar: COLORS.incorrect };
}

interface BarProps {
  correct: number;
  total: number;
}

const Bar: React.FC<BarProps> = ({ correct, total }) => {
  const pct = Math.round((correct / total) * 100);
  const c = getColor(pct);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
      <div style={{ flex: 1, height: 14, background: "#f0efe8", borderRadius: 7, overflow: "hidden", position: "relative" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: c.bar, borderRadius: 7, transition: "width 0.4s ease" }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 500, minWidth: 44, textAlign: "right", color: c.text }}>{pct}%</span>
    </div>
  );
};

interface CategoryStats {
  label: string;
  correct: number;
  incorrect: number;
  total: number;
}

interface StackedBarChartProps {
  sections: CategoryStats[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ sections }) => {
  const maxVal = Math.max(...sections.map((s) => s.total));
  const gridMax = Math.ceil(maxVal / 10) * 10;
  const gridLines = Array.from({ length: gridMax / 10 + 1 }, (_, i) => i * 10);
  const barHeight = 200;

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e8e7e0",
      borderRadius: 12,
      padding: "20px 20px 16px",
      marginBottom: 12,
    }}>
      {/* Chart area */}
      <div style={{ display: "flex", overflow: "visible" }}>
        {/* Y axis labels */}
        <div style={{ width: 30, height: barHeight, position: "relative", flexShrink: 0 }}>
          {gridLines.map((v) => (
            <span key={v} style={{
              position: "absolute",
              bottom: `${(v / gridMax) * 100}%`,
              right: 4,
              fontSize: 11,
              color: "#888780",
              transform: "translateY(50%)",
            }}>{v}</span>
          ))}
        </div>

        {/* Bars area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", height: barHeight }}>
            {/* Grid lines */}
            {gridLines.map((v) => (
              <div key={v} style={{
                position: "absolute",
                bottom: `${(v / gridMax) * 100}%`,
                left: 0, right: 0,
                borderBottom: "1px solid #f0efe8",
                zIndex: 0,
              }} />
            ))}

            {/* Bars */}
            <div style={{ display: "flex", flex: 1, justifyContent: "space-around", alignItems: "flex-end", position: "relative", height: "100%" }}>
              {sections.map((sec, i) => {
                const correctH = (sec.correct / gridMax) * barHeight;
                const incorrectH = (sec.incorrect / gridMax) * barHeight;
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: 80 }}>
                      <div style={{
                        height: incorrectH,
                        background: COLORS.incorrect,
                        borderRadius: "6px 6px 0 0",
                        transition: "height 0.4s ease",
                      }} />
                      <div style={{
                        height: correctH,
                        background: COLORS.correct,
                        borderRadius: incorrectH === 0 ? "6px 6px 0 0" : "0",
                        transition: "height 0.4s ease",
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category labels below the chart */}
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: 8 }}>
            {sections.map((sec, i) => (
              <div key={i} style={{ width: 80, textAlign: "center" }}>
                <span style={{ fontSize: 12, color: "#5f5e5a", lineHeight: 1.3 }}>
                  {sec.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend at bottom */}
      <div style={{ display: "flex", gap: 20, marginTop: 20, fontSize: 14, fontWeight: 500, justifyContent: "center" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 16, height: 16, borderRadius: 3, background: COLORS.correct, display: "inline-block" }} />
          <span style={{ color: "#2c2c2a" }}>Correct</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 16, height: 16, borderRadius: 3, background: COLORS.incorrect, display: "inline-block" }} />
          <span style={{ color: "#2c2c2a" }}>Incorrect</span>
        </span>
      </div>
    </div>
  );
};


interface SectionCardProps {
  id: string;
  label: string;
  correct: number;
  total: number;
  questionDetails: Array<{ id: number; status: 'correct' | 'incorrect' | 'unanswered' }>;
  isOpen: boolean;
  onToggle: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ id: _id, label, correct, total, questionDetails, isOpen, onToggle }) => {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const c = getColor(pct);

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e8e7e0",
      borderRadius: 12,
      overflow: "hidden",
      transition: "box-shadow 0.2s",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 10,
            background: c.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 600, color: c.text,
            flexShrink: 0,
          }}>
            {pct}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#2c2c2a" }}>{label}</div>
            <div style={{ fontSize: 13, color: "#888780" }}>{correct} / {total} correct</div>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
          flexShrink: 0,
        }}>
          <path d="M4 6L8 10L12 6" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div style={{ padding: "0 20px 16px", borderTop: "1px solid #f0efe8" }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 13, color: "#5f5e5a", marginBottom: 6 }}>Overall Progress</div>
            <Bar correct={correct} total={total} />
          </div>
          <div style={{ fontSize: 13, color: "#5f5e5a", marginTop: 12 }}>
            <div style={{ marginBottom: 6 }}>Question Details:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {questionDetails.map((q) => (
                <span
                  key={q.id}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 4,
                    fontSize: 12,
                    fontWeight: 500,
                    background: q.status === 'correct' ? '#E3F2FD' : q.status === 'incorrect' ? '#FFE0B2' : '#f0efe8',
                    color: q.status === 'correct' ? '#01579B' : q.status === 'incorrect' ? '#E65100' : '#888780',
                  }}
                >
                  Q{q.id}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ questionStatuses }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculate live statistics from questionStatuses
  const categoryStats = categories
    .filter(cat => cat.name !== 'Verbal Reasoning') // Exclude "OLD" category
    .map(category => {
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

      return {
        key: category.key,
        label: category.name,
        correct,
        incorrect,
        total,
        questionDetails
      };
    });

  // Prepare data for stacked bar chart
  const chartSections: CategoryStats[] = categoryStats.map(cat => ({
    label: cat.label,
    correct: cat.correct,
    incorrect: cat.incorrect,
    total: cat.total
  }));

  return (
    <div style={{ padding: "24px", maxWidth: 900, margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: "#2c2c2a", marginBottom: 8 }}>Practice Performance</h1>
      <p style={{ fontSize: 14, color: "#888780", marginBottom: 24 }}>Track your progress as you practice</p>

      <StackedBarChart sections={chartSections} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {categoryStats.map((cat) => (
          <SectionCard
            key={cat.key}
            id={cat.key}
            label={cat.label}
            correct={cat.correct}
            total={cat.total}
            questionDetails={cat.questionDetails}
            isOpen={!!openSections[cat.key]}
            onToggle={() => toggleSection(cat.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
