import React, { useEffect, useRef } from 'react';

interface HintModalProps {
  isOpen: boolean;
  onClose: () => void;
  hint: string;
  attemptNumber: number;
}

const HintModal: React.FC<HintModalProps> = ({ isOpen, onClose, hint, attemptNumber }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const displayHint = hint.trim() || 'No hint text is available for this question yet.';

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && isOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleFocusTrap);
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleFocusTrap);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby="hint-title"
        aria-describedby="hint-content"
        className="modal-content"
      >
        <div className="modal-header">
          <h2 id="hint-title">Hint {attemptNumber}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="modal-close"
            aria-label="Close hint"
          >
            ×
          </button>
        </div>
        <div id="hint-content" className="modal-body">
          <p>{displayHint}</p>
        </div>
      </div>
    </div>
  );
};

export default HintModal; 
