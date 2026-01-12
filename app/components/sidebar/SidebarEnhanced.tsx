'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './SidebarEnhanced.module.css';
import { SummaryItem } from './types';

interface SidebarEnhancedProps {
  onFileSelect: (path: string | undefined) => void;
  selectedPath?: string;
  isOpen?: boolean;
}

function formatDisplayName(name: string, isFolder: boolean = false): string {
  let display = name.replace(/\.txt$/, '');
  const numberMatch = display.match(/^(\d+)-/);
  const number = numberMatch ? numberMatch[1] : null;
  display = display.replace(/^\d+-/, '');
  
  const words = display.split('-');
  const formatted = words.map(word => {
    if (word.toLowerCase() === 'ai') return 'AI';
    if (word.toLowerCase() === 'llm') return 'LLM';
    if (word.toLowerCase() === 'llms') return 'LLMs';
    if (word.toLowerCase() === 'rag') return 'RAG';
    if (word.toLowerCase() === 'hitl') return 'HITL';
    if (word.toLowerCase() === 'nvidia') return 'NVIDIA';
    if (word.toLowerCase() === 'nemo') return 'NeMo';
    if (word.toLowerCase() === 'nim') return 'NIM';
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  const formattedName = formatted.join(' ');
  if (isFolder && number) {
    return `${number}. ${formattedName}`;
  }
  return formattedName;
}

interface CategoryStats {
  total: number;
  read: number;
  percentage: number;
}

export default function SidebarEnhanced({ onFileSelect, selectedPath, isOpen = false }: SidebarEnhancedProps) {
  const [structure, setStructure] = useState<SummaryItem[]>([]);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [readFiles, setReadFiles] = useState<Set<string>>(new Set());
  const [categoryStats, setCategoryStats] = useState<Map<string, CategoryStats>>(new Map());

  const isFileRead = (path: string): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(`read:${path}`) === 'true';
  };

  const updateReadStatus = useCallback(() => {
    if (typeof window === 'undefined' || structure.length === 0) return;
    const read = new Set<string>();
    const stats = new Map<string, CategoryStats>();
    
    const checkItems = (items: SummaryItem[], categoryPath?: string) => {
      items.forEach((item) => {
        if (item.type === 'file' && isFileRead(item.path)) {
          read.add(item.path);
        }
        if (item.type === 'folder') {
          const folderPath = item.path;
          const folderStats: CategoryStats = { total: 0, read: 0, percentage: 0 };
          
          if (item.children) {
            item.children.forEach(child => {
              if (child.type === 'file') {
                folderStats.total++;
                if (isFileRead(child.path)) {
                  folderStats.read++;
                }
              }
            });
            folderStats.percentage = folderStats.total > 0 
              ? Math.round((folderStats.read / folderStats.total) * 100) 
              : 0;
            stats.set(folderPath, folderStats);
            checkItems(item.children, folderPath);
          }
        }
      });
    };
    
    checkItems(structure);
    setReadFiles(read);
    setCategoryStats(stats);
  }, [structure]);

  useEffect(() => {
    updateReadStatus();
  }, [updateReadStatus]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleStorageChange = () => {
      updateReadStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('readStatusChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('readStatusChanged', handleStorageChange);
    };
  }, [updateReadStatus]);

  useEffect(() => {
    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data) => {
        setStructure(data);
        const allFolders = new Set<string>();
        const collectFolders = (items: SummaryItem[]) => {
          items.forEach((item) => {
            if (item.type === 'folder') {
              allFolders.add(item.path);
              if (item.children) {
                collectFolders(item.children);
              }
            }
          });
        };
        collectFolders(data);
        setExpandedFolders(allFolders);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load summaries:', err);
        setLoading(false);
      });
  }, []);

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allFolders = new Set<string>();
    const collectFolders = (items: SummaryItem[]) => {
      items.forEach((item) => {
        if (item.type === 'folder') {
          allFolders.add(item.path);
          if (item.children) {
            collectFolders(item.children);
          }
        }
      });
    };
    collectFolders(structure);
    setExpandedFolders(allFolders);
  };

  const collapseAll = () => {
    setExpandedFolders(new Set());
  };


  const shouldShowItem = (item: SummaryItem): boolean => {
    return true;
  };

  const renderItem = (item: SummaryItem, depth: number = 0): React.ReactNode | null => {
    const fullPath = item.path;
    const isExpanded = expandedFolders.has(fullPath);
    const isSelected = selectedPath === fullPath;
    const isReview = item.name.toLowerCase() === 'review.txt';
    const displayName = formatDisplayName(item.name, item.type === 'folder');

    if (item.type === 'folder') {
      const stats = categoryStats.get(fullPath);
      const hasUnread = stats && stats.read < stats.total;
      
      // Check if folder has any visible children
      const hasVisibleChildren = item.children?.some(child => {
        if (child.type === 'file') {
          return shouldShowItem(child);
        } else {
          // For nested folders, we'd need to check recursively, but for simplicity...
        }
      });

      if (!hasVisibleChildren) return null;

      return (
        <div key={fullPath} className={styles.categoryContainer}>
          <div
            className={`${styles.folderItem} ${isExpanded ? styles.expanded : ''}`}
            style={{ paddingLeft: `${depth * 12 + 12}px` }}
            onClick={() => toggleFolder(fullPath)}
          >
            <span className={styles.folderIcon}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d={isExpanded 
                    ? "M2 3L8 1L14 3V13L8 15L2 13V3Z" 
                    : "M2 4L8 2L14 4V13L8 15L2 13V4Z"
                  }
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.folderName}>{displayName}</span>
            {stats && (
              <div className={styles.categoryProgress}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
                <span className={styles.progressText}>
                  {stats.read}/{stats.total}
                </span>
              </div>
            )}
            {hasUnread && <span className={styles.unreadBadge} />}
          </div>
          {isExpanded && item.children && (
            <div className={styles.childrenContainer}>
              {item.children
                .filter(child => shouldShowItem(child))
                .map((child) => renderItem(child, depth + 1))
                .filter(Boolean)}
            </div>
          )}
        </div>
      );
    } else {
      if (!shouldShowItem(item)) return null;
      
      const isRead = readFiles.has(fullPath);
      
      return (
        <div key={fullPath} className={styles.fileContainer}>
          <div
            className={`${styles.fileItem} ${isSelected ? styles.selected : ''} ${isReview ? styles.reviewFile : ''} ${isRead ? styles.read : ''}`}
            style={{ paddingLeft: `${depth * 12 + 32}px` }}
            onClick={() => onFileSelect(fullPath)}
          >
            <span className={styles.fileIcon}>
              {isReview ? (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2H14V14H2V2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M5 6H11M5 9H11M5 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2H9L13 6V14H3V2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                  <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              )}
            </span>
            <span className={styles.fileName}>{displayName}</span>
            {isRead ? (
              <span className={styles.readIndicator}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            ) : (
              <span className={styles.unreadDot} />
            )}
          </div>
        </div>
      );
    }
  };

  const totalStats = useMemo(() => {
    let total = 0;
    let read = 0;
    categoryStats.forEach(stats => {
      total += stats.total;
      read += stats.read;
    });
    return { total, read, percentage: total > 0 ? Math.round((read / total) * 100) : 0 };
  }, [categoryStats]);

  if (loading) {
    return (
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.loading}>Loading summaries...</div>
      </aside>
    );
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h2>Summaries</h2>
        <div className={styles.headerActions}>
          <button 
            className={styles.actionButton}
            onClick={expandAll}
            title="Expand all"
            aria-label="Expand all categories"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className={styles.actionButton}
            onClick={collapseAll}
            title="Collapse all"
            aria-label="Collapse all categories"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Progress</span>
          <span className={styles.statValue}>{totalStats.percentage}%</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Read</span>
          <span className={styles.statValue}>{totalStats.read}/{totalStats.total}</span>
        </div>
      </div>


      <div className={styles.content}>
        {structure.length === 0 ? (
          <div className={styles.emptyState}>No summaries found</div>
        ) : (
          structure.map((item) => renderItem(item)).filter(Boolean)
        )}
      </div>
    </aside>
  );
}
