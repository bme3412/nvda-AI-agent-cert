'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './KeyTermsSidebar.module.css';
import { TERM_DEFINITIONS } from '@/app/utils/termDefinitions';
import { getArticleDefinition } from '@/app/utils/articleDefinitions';

interface KeyTermsSidebarProps {
  terms: Array<{ term: string; definition: string }>;
  isOpen: boolean;
  onToggle: () => void;
  highlightTerm?: string | null;
  articlePath?: string;
}

export default function KeyTermsSidebar({ terms, isOpen, onToggle, highlightTerm, articlePath }: KeyTermsSidebarProps) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const termRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  
  // Handle external term highlighting
  useEffect(() => {
    if (highlightTerm) {
      // Open sidebar if closed
      if (!isOpen) {
        onToggle();
      }
      
      // Find the matching term in the terms array (handle variations)
      const findMatchingTerm = (searchTerm: string): string | null => {
        const searchLower = searchTerm.toLowerCase();
        
        // Try exact match first
        let match = terms.find(t => t.term.toLowerCase() === searchLower);
        if (match) return match.term;
        
        // Try fuzzy matching
        match = terms.find(t => {
          const tLower = t.term.toLowerCase();
          return tLower === searchLower ||
                 searchLower.includes(tLower) ||
                 tLower.includes(searchLower) ||
                 tLower.replace(/\s+/g, '-') === searchLower.replace(/\s+/g, '-') ||
                 tLower.replace(/-/g, ' ') === searchLower.replace(/-/g, ' ');
        });
        if (match) return match.term;
        
        return null;
      };
      
      const matchingTerm = findMatchingTerm(highlightTerm);
      
      if (matchingTerm) {
        // Expand the matching term
        setExpandedTerm(matchingTerm);
        
        // Scroll to the term after a short delay to ensure sidebar is open
        setTimeout(() => {
          const termElement = termRefs.current[matchingTerm];
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
    }
  }, [highlightTerm, isOpen, onToggle, terms]);

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

  // Get definition with priority: article-specific > global TERM_DEFINITIONS > terms array
  const getTermDefinition = (term: string) => {
    // First, try article-specific definition
    if (articlePath) {
      const articleDef = getArticleDefinition(articlePath, term);
      if (articleDef) {
        return {
          definition: articleDef.definition,
          example: articleDef.example
        };
      }
    }
    
    // Second, try global TERM_DEFINITIONS
    const termData = TERM_DEFINITIONS[term] || TERM_DEFINITIONS[term.toLowerCase()];
    if (termData) {
      return {
        definition: termData.definition,
        example: termData.example
      };
    }
    
    // Fallback to definition from terms array (from KEY TERMS section)
    const termItem = terms.find(t => t.term === term || t.term.toLowerCase() === term.toLowerCase());
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
