'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './KeyTermsSidebar.module.css';
import { TERM_DEFINITIONS } from '@/app/utils/termDefinitions';

interface KeyTermsSidebarProps {
  terms: Array<{ term: string; definition: string }>;
  isOpen: boolean;
  onToggle: () => void;
  highlightTerm?: string | null;
}

export default function KeyTermsSidebar({ terms, isOpen, onToggle, highlightTerm }: KeyTermsSidebarProps) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const termRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  
  // Handle external term highlighting
  useEffect(() => {
    if (highlightTerm) {
      // Open sidebar if closed
      if (!isOpen) {
        onToggle();
      }
      
      // Expand the term
      setExpandedTerm(highlightTerm);
      
      // Scroll to the term after a short delay to ensure sidebar is open
      setTimeout(() => {
        const termElement = termRefs.current[highlightTerm];
        if (termElement) {
          termElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
          // Add a highlight effect with smooth animation
          requestAnimationFrame(() => {
            termElement.classList.add(styles.highlighted);
            setTimeout(() => {
              termElement.classList.remove(styles.highlighted);
            }, 2500);
          });
        }
      }, 400); // Wait for sidebar animation to complete
    }
  }, [highlightTerm, isOpen, onToggle]);

  if (terms.length === 0) {
    return null;
  }

  const handleTermClick = (term: string) => {
    if (expandedTerm === term) {
      setExpandedTerm(null);
    } else {
      setExpandedTerm(term);
    }
  };

  // Get definition from TERM_DEFINITIONS if available, otherwise use the definition from terms array
  const getTermDefinition = (term: string) => {
    const termData = TERM_DEFINITIONS[term];
    if (termData) {
      return {
        definition: termData.definition,
        example: termData.example
      };
    }
    // Fallback to definition from terms array
    const termItem = terms.find(t => t.term === term);
    return {
      definition: termItem?.definition || '',
      example: undefined
    };
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Key Terms</h3>
        <button 
          className={styles.toggleButton}
          onClick={onToggle}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? '→' : '←'}
        </button>
      </div>
      
      {isOpen && (
        <div className={styles.content}>
          <ul className={styles.termsList}>
            {terms.map((termItem, index) => {
              const term = termItem.term;
              const isExpanded = expandedTerm === term;
              const { definition, example } = getTermDefinition(term);
              
              return (
                <li 
                  key={index} 
                  className={styles.termItem}
                  ref={(el) => { termRefs.current[term] = el; }}
                >
                  <button
                    className={styles.termButton}
                    onClick={() => handleTermClick(term)}
                    aria-expanded={isExpanded}
                  >
                    <span className={styles.termName}>{term}</span>
                    <span className={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</span>
                  </button>
                  
                  {isExpanded && (
                    <div className={styles.definitionContainer}>
                      <div className={styles.definition}>
                        {definition}
                      </div>
                      {example && (
                        <div className={styles.example}>
                          <strong>Example:</strong> {example}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
}
