import React from 'react';
import DOMPurify from 'dompurify';

interface MathExpressionProps {
  expression: string;
}

const MathExpression: React.FC<MathExpressionProps> = ({ expression }) => {
  // Convert basic math expression to MathML
  const toMathML = (expr: string): string => {
    // Handle multiplication symbol
    expr = expr.replace(/×/g, '*');
    
    // Split the expression into parts
    const parts = expr.split(/([+\-*/=])/);
    
    // Build MathML
    const mathML = parts.map(part => {
      part = part.trim();
      if (!part) return '';
      
      // Operators
      if (part === '+') return '<mo>+</mo>';
      if (part === '-') return '<mo>−</mo>';
      if (part === '*') return '<mo>×</mo>';
      if (part === '/') return '<mo>÷</mo>';
      if (part === '=') return '<mo>=</mo>';
      
      // Numbers and variables
      return `<mn>${part}</mn>`;
    }).join('');

    return `<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow>${mathML}</mrow></math>`;
  };

  return (
    <span
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(toMathML(expression), { ADD_TAGS: ['math', 'mrow', 'mo', 'mn', 'mi', 'msup', 'msub', 'mfrac', 'mtext'], ADD_ATTR: ['xmlns'] }) }}
      role="math"
      aria-label={expression.replace(/×/g, ' times ')}
    />
  );
};

export default MathExpression; 