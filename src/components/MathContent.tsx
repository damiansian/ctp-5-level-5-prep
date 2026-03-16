import React, { useEffect, useRef } from 'react';

interface MathContentProps {
  content: string;
  className?: string;
  inline?: boolean;
}

interface MathJaxAPI {
  typesetPromise: (elements: HTMLElement[]) => Promise<void>;
}

declare global {
  interface Window {
    MathJax?: MathJaxAPI;
  }
}

const MathContent: React.FC<MathContentProps> = ({ content, className, inline = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && window.MathJax) {
      window.MathJax.typesetPromise([containerRef.current]).catch((err: Error) =>
        console.error('MathJax typesetting failed:', err)
      );
    }
  }, [content]);

  if (inline) {
    return (
      <span
        ref={containerRef as React.RefObject<HTMLSpanElement>}
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MathContent;
