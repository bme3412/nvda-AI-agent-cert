'use client';

import { useState } from 'react';
import styles from './Flashcard.module.css';

interface FlashcardProps {
  term: string;
  definition: string;
}

export default function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      aria-label={`Flashcard: ${term}. Click to flip.`}
    >
      <div className={styles.flashcardInner}>
        <div className={styles.flashcardFront}>
          <div className={styles.flashcardHeader}>
            <div className={styles.flashcardLabel}>Term</div>
          </div>
          <div className={styles.flashcardContent}>
            <div className={styles.flashcardTerm}>{term}</div>
          </div>
          <div className={styles.flashcardFooter}>
            <div className={styles.flashcardHint}>Click to flip</div>
          </div>
        </div>
        <div className={styles.flashcardBack}>
          <div className={styles.flashcardHeader}>
            <div className={styles.flashcardLabel}>Definition</div>
          </div>
          <div className={styles.flashcardContent}>
            <div className={styles.flashcardDefinition}>{definition}</div>
          </div>
          <div className={styles.flashcardFooter}>
            <div className={styles.flashcardHint}>Click to flip</div>
          </div>
        </div>
      </div>
    </div>
  );
}
