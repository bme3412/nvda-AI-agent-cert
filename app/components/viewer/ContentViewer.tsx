'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styles from './ContentViewer.module.css';
import Quiz from '../quiz/Quiz';
import Flashcard from '../flashcard/Flashcard';
import KeyTermsSidebar from '../sidebar/KeyTermsSidebar';
import ProgressDisplay, { type ProgressStats } from '../progress/ProgressDisplay';
import { formatContent, type FormattedContent } from '@/app/utils/contentFormatter';
import { findQuizData } from '@/app/utils/quizMatcher';
import { QUIZ_DATA } from '@/app/data/quizzes';
import { getCategoryFromPath, getKeyTermsForCategory } from '@/app/utils/categoryKeyTerms';
import { TERM_DEFINITIONS } from '@/app/utils/termDefinitions';
import { getArticleDefinitions, normalizeArticlePath } from '@/app/utils/articleDefinitions';
import { getArticleSummary } from '@/app/utils/articleSummaries';
import { getHighlightsForArticle, saveHighlight, applyHighlightsToText, removeHighlight, type TextHighlight } from '@/app/utils/textHighlights';

interface ContentViewerProps {
  filePath?: string;
  onFileSelect?: (path: string | undefined) => void;
}

interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}


export default function ContentViewer({ filePath, onFileSelect }: ContentViewerProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRead, setIsRead] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [checkboxJustChecked, setCheckboxJustChecked] = useState(false);
  const [progress, setProgress] = useState<ProgressStats | null>(null);
  const [structure, setStructure] = useState<SummaryItem[]>([]);
  const [navigation, setNavigation] = useState<{ prev: string | null; next: string | null }>({ prev: null, next: null });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [readStatusUpdate, setReadStatusUpdate] = useState(0);
  const [keyTermsSidebarOpen, setKeyTermsSidebarOpen] = useState(true);
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);
  const [highlights, setHighlights] = useState<TextHighlight[]>([]);
  const [isSticky, setIsSticky] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const flashcardsRef = useRef<HTMLElement | null>(null);

  // Format display name helper (moved up for use in getCategoryFiles)
  const formatDisplayName = useCallback((name: string): string => {
    let display = name.replace(/\.txt$/, '');
    display = display.replace(/^\d+-/, '');
    const words = display.split('-');
    const formatted = words.map(word => {
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'nvidia') return 'NVIDIA';
      if (word.toLowerCase() === 'nemo') return 'NeMo';
      if (word.toLowerCase() === 'nim') return 'NIM';
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formatted.join(' ');
  }, []);

  // Get files for a specific category
  const getCategoryFiles = useCallback((categoryName: string, items: SummaryItem[]): Array<{ path: string; name: string; isRead: boolean }> => {
    const files: Array<{ path: string; name: string; isRead: boolean }> = [];
    
    const findCategory = (items: SummaryItem[], targetCategory: string): SummaryItem[] | null => {
      for (const item of items) {
        if (item.type === 'folder') {
          const categoryName = item.name.replace(/^\d+-/, '').replace(/-/g, ' ');
          const formattedName = categoryName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          if (formattedName === targetCategory && item.children) {
            return item.children;
          }
          if (item.children) {
            const found = findCategory(item.children, targetCategory);
            if (found) return found;
          }
        }
      }
      return null;
    };

    const categoryItems = findCategory(items, categoryName);
    if (categoryItems) {
      categoryItems.forEach((item) => {
        if (item.type === 'file') {
          const isRead = typeof window !== 'undefined' && localStorage.getItem(`read:${item.path}`) === 'true';
          files.push({
            path: item.path,
            name: formatDisplayName(item.name),
            isRead,
          });
        }
      });
    }
    
    return files.sort((a, b) => {
      // Put review.txt first
      if (a.path.toLowerCase().includes('review.txt')) return -1;
      if (b.path.toLowerCase().includes('review.txt')) return 1;
      return a.path.localeCompare(b.path);
    });
  }, [formatDisplayName, readStatusUpdate]);

  // Calculate progress stats
  const calculateProgress = useCallback((structure: SummaryItem[]): ProgressStats => {
    if (typeof window === 'undefined') {
      return { total: 0, read: 0, percentage: 0, byCategory: [] };
    }

    let totalFiles = 0;
    let readFiles = 0;
    const categoryStats: Map<string, { total: number; read: number }> = new Map();

    const countFiles = (items: SummaryItem[], categoryName?: string) => {
      items.forEach((item) => {
        if (item.type === 'file') {
          totalFiles++;
          const isRead = localStorage.getItem(`read:${item.path}`) === 'true';
          if (isRead) readFiles++;

          if (categoryName) {
            const stats = categoryStats.get(categoryName) || { total: 0, read: 0 };
            stats.total++;
            if (isRead) stats.read++;
            categoryStats.set(categoryName, stats);
          }
        } else if (item.type === 'folder' && item.children) {
          const categoryName = item.name.replace(/^\d+-/, '').replace(/-/g, ' ');
          countFiles(item.children, categoryName);
        }
      });
    };

    countFiles(structure);

    const byCategory = Array.from(categoryStats.entries()).map(([name, stats]) => ({
      name: name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      total: stats.total,
      read: stats.read,
      percentage: stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0,
    }));

    return {
      total: totalFiles,
      read: readFiles,
      percentage: totalFiles > 0 ? Math.round((readFiles / totalFiles) * 100) : 0,
      byCategory: byCategory.sort((a, b) => a.name.localeCompare(b.name)),
    };
  }, []);

  // Load structure for navigation
  useEffect(() => {
    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data: SummaryItem[]) => {
        setStructure(data);
        // Mark as ready after structure loads
        setTimeout(() => {
          setIsReady(true);
          setIsInitialLoad(false);
        }, 100);
      })
      .catch((err) => {
        console.error('Failed to load structure:', err);
        setIsReady(true);
        setIsInitialLoad(false);
      });
  }, []);

  // Find previous and next files
  const findNavigation = useCallback((items: SummaryItem[], currentPath: string): { prev: string | null; next: string | null } => {
    const allFiles: string[] = [];
    
    const collectFiles = (items: SummaryItem[]) => {
      items.forEach((item) => {
        if (item.type === 'file') {
          allFiles.push(item.path);
        } else if (item.type === 'folder' && item.children) {
          collectFiles(item.children);
        }
      });
    };
    
    collectFiles(items);
    
    // Sort files to match sidebar order (folders first, then files, review.txt at top)
    allFiles.sort((a, b) => {
      const aParts = a.split('/');
      const bParts = b.split('/');
      const aName = aParts[aParts.length - 1];
      const bName = bParts[bParts.length - 1];
      
      // Put review.txt first
      if (aName.toLowerCase() === 'review.txt') return -1;
      if (bName.toLowerCase() === 'review.txt') return 1;
      
      return a.localeCompare(b);
    });
    
    const currentIndex = allFiles.findIndex(path => path === currentPath);
    if (currentIndex === -1) {
      return { prev: null, next: null };
    }
    
    return {
      prev: currentIndex > 0 ? allFiles[currentIndex - 1] : null,
      next: currentIndex < allFiles.length - 1 ? allFiles[currentIndex + 1] : null,
    };
  }, []);

  // Update navigation when filePath changes
  useEffect(() => {
    if (filePath && structure.length > 0) {
      const nav = findNavigation(structure, filePath);
      setNavigation(nav);
    } else {
      setNavigation({ prev: null, next: null });
    }
  }, [filePath, structure, findNavigation]);

  // Load and update progress stats
  const updateProgress = useCallback(() => {
    if (filePath) return; // Only show progress when no file is selected

    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data: SummaryItem[]) => {
        setProgress(calculateProgress(data));
      })
      .catch((err) => {
        console.error('Failed to load progress:', err);
      });
  }, [filePath, calculateProgress]);

  // Load progress on initial mount (only when no file selected and ready)
  useEffect(() => {
    if (!filePath && isReady) {
      updateProgress();
    }
  }, [filePath, isReady, updateProgress]);

  // Load progress stats on mount
  useEffect(() => {
    updateProgress();
  }, [updateProgress]);

  // Update progress when read status changes
  useEffect(() => {
    if (filePath || !isReady) return;

    const handleUpdate = () => {
      updateProgress();
      setReadStatusUpdate(prev => prev + 1);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('readStatusChanged', handleUpdate);
      window.addEventListener('storage', handleUpdate);
      return () => {
        window.removeEventListener('readStatusChanged', handleUpdate);
        window.removeEventListener('storage', handleUpdate);
      };
    }
  }, [filePath, isReady, updateProgress]);


  // Load read status from localStorage
  useEffect(() => {
    if (!filePath) {
      setIsRead(false);
      return;
    }
    
    const readStatus = localStorage.getItem(`read:${filePath}`);
    setIsRead(readStatus === 'true');
  }, [filePath]);

  // Handle checkbox change
  const handleReadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!filePath) return;
    
    const checked = e.target.checked;
    setIsRead(checked);
    localStorage.setItem(`read:${filePath}`, checked.toString());
    
    // Dispatch custom event to notify Sidebar
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('readStatusChanged'));
    }
    
    // Trigger animation when checking (not unchecking)
    if (checked) {
      setCheckboxJustChecked(true);
      setTimeout(() => setCheckboxJustChecked(false), 800);
      
      // Show celebration if this is the first time marking as read
      if (!isRead) {
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
        }, 2200);
      }
    }
  };

  useEffect(() => {
    // Mark initial load as complete after first render
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }

    if (!filePath) {
      setContent('');
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    fetch(`/api/summaries/${encodeURIComponent(filePath)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load file');
        }
        return res.json();
      })
      .then((data) => {
        setContent(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load file:', err);
        setError('Failed to load file content');
        setLoading(false);
      });
  }, [filePath, isInitialLoad]);

  // Load highlights when filePath changes
  useEffect(() => {
    if (filePath) {
      console.log('[ContentViewer] Loading highlights for filePath:', filePath);
      const articleHighlights = getHighlightsForArticle(filePath);
      console.log('[ContentViewer] Loaded', articleHighlights.length, 'highlights');
      setHighlights(articleHighlights);
    } else {
      setHighlights([]);
    }
  }, [filePath]);

  // Format content and extract key terms - must be before any early returns
  const formattedContent = useMemo(() => {
    if (!content || !filePath) {
      return { title: '', sections: [] };
    }
    const formatted = formatContent(content, filePath);
    
    // Apply highlights to paragraph sections
    if (highlights.length > 0) {
      formatted.sections = formatted.sections.map(section => {
        if (section.type === 'paragraph') {
          return {
            ...section,
            content: applyHighlightsToText(section.content, highlights)
          };
        }
        return section;
      });
    }
    
    return formatted;
  }, [content, filePath, highlights]);

  const { title, sections } = formattedContent;
  const fileName = filePath ? filePath.split('/').pop()?.replace('.txt', '') || '' : '';
  const isReview = fileName.toLowerCase() === 'review';

  // Set up Intersection Observer to detect when flashcards section comes into view
  useEffect(() => {
    if (typeof window === 'undefined' || !filePath) return;
    
    let observer: IntersectionObserver | null = null;
    let flashcardsElement: HTMLElement | null = null;
    let handleScroll: (() => void) | null = null;
    
    // Wait for content to render
    const timeoutId = setTimeout(() => {
      flashcardsElement = document.getElementById('article-flashcards');
      if (!flashcardsElement) {
        // No flashcards section, keep header sticky
        setIsSticky(true);
        return;
      }

      flashcardsRef.current = flashcardsElement;
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When flashcards section enters viewport (top of viewport), make header not sticky
            // entry.boundingClientRect.top tells us where the element is relative to viewport
            if (entry.isIntersecting && entry.boundingClientRect.top < 150) {
              setIsSticky(false);
            } else if (!entry.isIntersecting || entry.boundingClientRect.top >= 150) {
              // When flashcards are not visible or are below the threshold, make header sticky
              setIsSticky(true);
            }
          });
        },
        {
          rootMargin: '0px',
          threshold: [0, 0.1, 0.5],
        }
      );

      observer.observe(flashcardsElement);

      // Also check on scroll for more responsive updates
      handleScroll = () => {
        if (!flashcardsElement) return;
        const rect = flashcardsElement.getBoundingClientRect();
        // If flashcards section is within 150px of top, stop being sticky
        if (rect.top < 150 && rect.bottom > 0) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer && flashcardsElement) {
        observer.unobserve(flashcardsElement);
      }
      if (handleScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [sections, filePath]);
  
  // Extract key terms from sections - article-specific
  const keyTerms = useMemo(() => {
    if (!sections || sections.length === 0) {
      return [];
    }
    
    // Normalize file path for article definitions lookup
    const normalizedPath = filePath ? normalizeArticlePath(filePath) : '';
    
    // Check if we have article-specific definitions
    const articleDefs = normalizedPath ? getArticleDefinitions(normalizedPath) : null;
    
    // First, try to get key terms from KEY TERMS section (most relevant)
    let terms = sections
      .filter(section => section.type === 'key-terms' && section.terms)
      .flatMap(section => section.terms || []);
    
    // If we have article-specific definitions, prioritize them
    // This ensures articles with specific definitions always show them
    if (articleDefs && Object.keys(articleDefs).length > 0) {
      // If we have KEY TERMS section, merge with article-specific definitions
      // Otherwise, use article-specific definitions directly
      if (terms.length > 0) {
        // Merge: article-specific definitions take precedence
        const termsMap = new Map(terms.map(t => [t.term.toLowerCase(), t]));
        Object.keys(articleDefs).forEach(term => {
          const lowerTerm = term.toLowerCase();
          if (termsMap.has(lowerTerm)) {
            // Update existing term with article-specific definition
            termsMap.get(lowerTerm)!.definition = articleDefs[term].definition;
          } else {
            // Add new term from article-specific definitions
            terms.push({
              term: term,
              definition: articleDefs[term].definition
            });
          }
        });
      } else {
        // No KEY TERMS section, use article-specific definitions directly
        terms = Object.keys(articleDefs).map(term => ({
          term: term,
          definition: articleDefs[term].definition
        }));
      }
    }
    
    // If no KEY TERMS section and no article-specific definitions, extract from bolded terms
    if (terms.length === 0) {
      // No KEY TERMS section and no article-specific definitions
      // Extract from bolded terms actually used in this article
      const category = getCategoryFromPath(filePath || '');
      const categoryTerms = getKeyTermsForCategory(category);
      
      // Extract unique bolded terms from all paragraph sections (article-specific)
      const boldedTermsMap = new Map<string, number>(); // Track frequency
      sections.forEach(section => {
        if (section.type === 'paragraph') {
          // Parse HTML to find bolded terms
          const parser = new DOMParser();
          const doc = parser.parseFromString(`<div>${section.content}</div>`, 'text/html');
          const strongElements = doc.querySelectorAll('strong, b');
          strongElements.forEach(el => {
            const termText = el.textContent?.trim() || '';
            if (termText && termText.length > 2) { // Filter out very short terms
              const count = boldedTermsMap.get(termText) || 0;
              boldedTermsMap.set(termText, count + 1);
            }
          });
        }
      });
      
      // Convert to array and prioritize by frequency and relevance
      const boldedTermsArray = Array.from(boldedTermsMap.entries())
        .map(([term, frequency]) => ({ term, frequency }))
        .sort((a, b) => {
          // Prioritize terms that:
          // 1. Have definitions in TERM_DEFINITIONS
          // 2. Match category-specific terms
          // 3. Appear more frequently in the article
          const aHasDef = !!(TERM_DEFINITIONS[a.term] || TERM_DEFINITIONS[a.term.toLowerCase()]);
          const bHasDef = !!(TERM_DEFINITIONS[b.term] || TERM_DEFINITIONS[b.term.toLowerCase()]);
          const aIsCategory = categoryTerms.some(ct => 
            ct.toLowerCase() === a.term.toLowerCase() ||
            a.term.toLowerCase().includes(ct.toLowerCase()) ||
            ct.toLowerCase().includes(a.term.toLowerCase())
          );
          const bIsCategory = categoryTerms.some(ct => 
            ct.toLowerCase() === b.term.toLowerCase() ||
            b.term.toLowerCase().includes(ct.toLowerCase()) ||
            ct.toLowerCase().includes(b.term.toLowerCase())
          );
          
          // Priority: has definition > is category term > frequency
          if (aHasDef && !bHasDef) return -1;
          if (!aHasDef && bHasDef) return 1;
          if (aIsCategory && !bIsCategory) return -1;
          if (!aIsCategory && bIsCategory) return 1;
          return b.frequency - a.frequency;
        })
        .map(({ term }) => term);
      
      // Create key terms array - only include terms that appear in this article
      terms = boldedTermsArray
        .filter(term => {
          // Only include if it has a definition or is a category term
          return TERM_DEFINITIONS[term] || 
                 TERM_DEFINITIONS[term.toLowerCase()] ||
                 categoryTerms.some(ct => 
                   ct.toLowerCase() === term.toLowerCase() ||
                   term.toLowerCase().includes(ct.toLowerCase()) ||
                   ct.toLowerCase().includes(term.toLowerCase())
                 );
        })
        .map(term => {
          // Find the best matching definition
          const termDef = TERM_DEFINITIONS[term] || TERM_DEFINITIONS[term.toLowerCase()];
          if (termDef) {
            return {
              term: term,
              definition: termDef.definition
            };
          }
          // If no definition found, skip it (we only want terms with definitions)
          return null;
        })
        .filter((term): term is { term: string; definition: string } => term !== null)
        .slice(0, 30); // Limit to 30 most relevant terms for this article
    }
    
    return terms;
  }, [sections, filePath]);

  if (!filePath && isReady) {
    return (
      <main className={styles.viewer}>
        <div className={styles.empty}>
          <div className={styles.emptyContent}>
            {progress && progress.total > 0 && (
              <ProgressDisplay
                progress={progress}
                structure={structure}
                getCategoryFiles={getCategoryFiles}
                onFileSelect={onFileSelect}
              />
            )}
          </div>
        </div>
      </main>
    );
  }

  // Show loading state during initial load or when loading content
  if (!isReady || (loading && filePath)) {
    return (
      <main className={styles.viewer}>
        <div className={styles.loading}>Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.viewer}>
        <div className={styles.error}>{error}</div>
      </main>
    );
  }
  
  // Check if this file has a quiz
  const quizQuestions = findQuizData(filePath, QUIZ_DATA);
  const hasQuiz = quizQuestions !== null;

  // Build breadcrumbs
  const breadcrumbs = filePath ? filePath.split('/').map((part, index, array) => {
    const path = array.slice(0, index + 1).join('/');
    const isLast = index === array.length - 1;
    const displayName = formatDisplayName(part);
    return { name: displayName, path, isLast };
  }) : [];

  return (
    <main className={styles.viewer}>
      {showCelebration && (
        <div className={styles.celebration}>
          <div className={styles.celebrationContent}>
            <span className={styles.celebrationIcon}>🎉</span>
            <span className={styles.celebrationText}>Great job! Article marked as read</span>
          </div>
        </div>
      )}
      <div 
        ref={headerRef}
        className={`${styles.header} ${isReview ? styles.reviewHeader : ''} ${keyTermsSidebarOpen ? styles.sidebarOpen : ''} ${isSticky ? styles.sticky : ''}`}
      >
        {breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <button
              className={styles.breadcrumbLink}
              onClick={() => onFileSelect?.(undefined as any)}
            >
              Home
            </button>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.path} className={styles.breadcrumbItem}>
                <span className={styles.breadcrumbSeparator}>›</span>
                {crumb.isLast ? (
                  <span className={styles.breadcrumbCurrent}>{crumb.name}</span>
                ) : (
                  <span className={styles.breadcrumbText}>{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className={styles.headerTop}>
          <h1 className={styles.title}>{title || fileName}</h1>
          <div className={styles.headerActions}>
            <button
              className={styles.highlightActionButton}
              onClick={() => {
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0 && filePath) {
                  // Get plain text from selection (not HTML)
                  const selectedText = selection.toString().trim();
                  
                  if (selectedText.length > 3) {
                    // Save the highlight with plain text only
                    saveHighlight(filePath, selectedText);
                    
                    // Clear selection
                    window.getSelection()?.removeAllRanges();
                    
                    // Reload highlights to update the display
                    setTimeout(() => {
                      const articleHighlights = getHighlightsForArticle(filePath);
                      setHighlights(articleHighlights);
                    }, 100);
                  }
                } else {
                  // Show a message if no text is selected
                  alert('Please select some text to highlight first.');
                }
              }}
              title="Highlight selected text"
            >
              <span className={styles.highlightActionIcon}>🖍️</span>
              <span>Highlight</span>
            </button>
            <label className={`${styles.readCheckbox} ${checkboxJustChecked ? styles.justChecked : ''} ${isRead ? styles.checked : ''}`}>
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                checked={isRead}
                onChange={handleReadChange}
                className={styles.checkboxInput}
              />
              {isRead && (
                <div className={styles.checkmarkContainer}>
                  <svg 
                    className={styles.checkmark} 
                    viewBox="0 0 20 20" 
                    fill="none"
                  >
                    <path
                      d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className={styles.checkmarkRipple} />
                </div>
              )}
            </div>
            <span className={styles.checkboxLabel}>
              {isRead ? (
                <>
                  <span className={styles.readBadge}>✓</span>
                  <span>Completed</span>
                </>
              ) : (
                'Mark as read'
              )}
            </span>
          </label>
          </div>
        </div>
      </div>
      <div className={`${styles.content} ${keyTermsSidebarOpen ? styles.sidebarOpen : ''}`}>
        <article className={styles.article}>
          {/* Article Summary */}
          {filePath && (() => {
            const summary = getArticleSummary(filePath);
            return summary ? (
              <div className={`${styles.articleSummary} ${isReview ? styles.reviewSummary : ''}`}>
                <p>{summary}</p>
              </div>
            ) : null;
          })()}
          
          {/* Article Navigation Links */}
          <nav className={styles.articleNav} aria-label="Article navigation">
            <button 
              className={styles.navButton}
              onClick={() => {
                const element = document.getElementById('article-content');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className={styles.navIcon}>📄</span>
              <span className={styles.navText}>Content</span>
            </button>
            {sections.some(s => s.type === 'key-terms' && s.terms && s.terms.length > 0) && (
              <button 
                className={styles.navButton}
                onClick={() => {
                  const element = document.getElementById('article-flashcards');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <span className={styles.navIcon}>🃏</span>
                <span className={styles.navText}>Flash Cards</span>
              </button>
            )}
            {hasQuiz && (
              <button 
                className={styles.navButton}
                onClick={() => {
                  const element = document.getElementById('article-quiz');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <span className={styles.navIcon}>📝</span>
                <span className={styles.navText}>Practice Questions</span>
              </button>
            )}
          </nav>

          {/* Article Content Section */}
          <section id="article-content" className={styles.contentSection}>
            {sections.map((section, index) => {
            if (section.type === 'heading') {
              const HeadingTag = section.level === 1 ? 'h2' : section.level === 2 ? 'h3' : 'h4';
              const headingClass = section.level === 1 
                ? styles.heading1 
                : section.level === 2 
                ? styles.heading2 
                : styles.heading3;
              return (
                <div key={index}>
                  <HeadingTag className={headingClass}>
                    {section.content}
                  </HeadingTag>
                </div>
              );
            } else if (section.type === 'key-terms' && section.terms) {
              return (
                <section key={`flashcards-${index}`} id="article-flashcards" className={styles.flashcardsSection}>
                  <div className={styles.flashcardsContainer}>
                    {section.terms.map((item, termIndex) => (
                      <Flashcard
                        key={`${index}-${termIndex}`}
                        term={item.term}
                        definition={item.definition}
                      />
                    ))}
                  </div>
                </section>
              );
            } else {
              return (
                <p 
                  key={index} 
                  className={styles.paragraph}
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    
                    // Handle clicks on existing highlights to remove them
                    const highlightElement = target.closest('.text-highlight');
                    if (highlightElement) {
                      e.preventDefault();
                      e.stopPropagation();
                      const highlightId = highlightElement.getAttribute('data-highlight-id');
                      if (highlightId && filePath) {
                        // Remove highlight
                        removeHighlight(filePath, highlightId);
                        // Reload highlights
                        setTimeout(() => {
                          const articleHighlights = getHighlightsForArticle(filePath);
                          setHighlights(articleHighlights);
                        }, 50);
                        return;
                      }
                    }
                    
                    // Handle clicks on bolded terms
                    
                    // Check if clicked element is a bolded term or inside one
                    let termElement: HTMLElement | null = null;
                    if (target.tagName === 'STRONG' || target.tagName === 'B' || target.classList.contains('key-term-clickable')) {
                      termElement = target;
                    } else {
                      // Check if parent is a bolded term
                      const parent = target.closest('strong, b, .key-term-clickable');
                      if (parent) {
                        termElement = parent as HTMLElement;
                      }
                    }
                    
                    if (termElement) {
                      // Try to get term from data attribute first (most reliable)
                      const termFromData = termElement.getAttribute('data-term');
                      const termText = termFromData || termElement.textContent || '';
                      
                      if (termText) {
                        // Find matching term in keyTerms - try exact match first, then fuzzy
                        let matchingTerm = keyTerms.find(t => 
                          t.term.toLowerCase() === termText.toLowerCase()
                        );
                        
                        // If no exact match, try fuzzy matching
                        if (!matchingTerm) {
                          matchingTerm = keyTerms.find(t => {
                            const tLower = t.term.toLowerCase();
                            const textLower = termText.toLowerCase();
                            return tLower === textLower ||
                                   textLower.includes(tLower) ||
                                   tLower.includes(textLower) ||
                                   tLower.replace(/\s+/g, '-') === textLower.replace(/\s+/g, '-') ||
                                   tLower.replace(/-/g, ' ') === textLower.replace(/-/g, ' ');
                          });
                        }
                        
                        if (matchingTerm) {
                          // Open sidebar if closed
                          if (!keyTermsSidebarOpen) {
                            setKeyTermsSidebarOpen(true);
                          }
                          // Set highlighted term (this will trigger expansion in sidebar)
                          setHighlightedTerm(matchingTerm.term);
                        }
                      }
                    }
                  }}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            }
          })}
          
          </section>
          
          {/* Quiz - appears after all content if available */}
          {hasQuiz && quizQuestions && (
            <section id="article-quiz" className={styles.quizSection}>
              <h2 className={styles.sectionHeader}>Practice Questions</h2>
              <Quiz questions={quizQuestions} articleTitle={title || fileName} />
            </section>
          )}
          
        </article>
      </div>
      <KeyTermsSidebar 
        terms={keyTerms}
        isOpen={keyTermsSidebarOpen}
        onToggle={() => setKeyTermsSidebarOpen(!keyTermsSidebarOpen)}
        highlightTerm={highlightedTerm}
        articlePath={filePath}
      />
    </main>
  );
}



