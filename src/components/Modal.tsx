import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  hint: string;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  hint,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-content"
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">Hint</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close hint"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          {hint}
        </div>
        <div className="modal-footer">
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="modal-nav-button"
            aria-label="Previous hint"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="modal-nav-button"
            aria-label="Next hint"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal; 