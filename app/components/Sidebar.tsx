'use client';

import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';

export interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}

function formatDisplayName(name: string): string {
  // Remove .txt extension
  let display = name.replace(/\.txt$/, '');
  
  // Remove leading numbers and hyphens (e.g., "1-agent-architecture-design" -> "agent-architecture-design")
  display = display.replace(/^\d+-/, '');
  
  // Split by hyphens and capitalize each word
  const words = display.split('-');
  const formatted = words.map(word => {
    // Handle special cases
    if (word.toLowerCase() === 'ai') return 'AI';
    if (word.toLowerCase() === 'llm') return 'LLM';
    if (word.toLowerCase() === 'llms') return 'LLMs';
    if (word.toLowerCase() === 'rag') return 'RAG';
    if (word.toLowerCase() === 'hitl') return 'HITL';
    if (word.toLowerCase() === 'nvidia') return 'NVIDIA';
    if (word.toLowerCase() === 'nemo') return 'NeMo';
    if (word.toLowerCase() === 'nim') return 'NIM';
    
    // Capitalize first letter
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  return formatted.join(' ');
}

interface SidebarProps {
  onFileSelect: (path: string) => void;
  selectedPath?: string;
  isOpen?: boolean;
}

export default function Sidebar({ onFileSelect, selectedPath, isOpen = false }: SidebarProps) {
  const [structure, setStructure] = useState<SummaryItem[]>([]);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data) => {
        setStructure(data);
        // Expand all folders by default
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

  const renderItem = (item: SummaryItem, depth: number = 0) => {
    // item.path already contains the full relative path from summaries root
    const fullPath = item.path;
    const isExpanded = expandedFolders.has(fullPath);
    const isSelected = selectedPath === fullPath;
    const isReview = item.name.toLowerCase() === 'review.txt';
    const displayName = formatDisplayName(item.name);

    if (item.type === 'folder') {
      return (
        <div key={fullPath}>
          <div
            className={styles.folderItem}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
            onClick={() => toggleFolder(fullPath)}
          >
            <span className={styles.folderIcon}>
              {isExpanded ? '📂' : '📁'}
            </span>
            <span className={styles.folderName}>{displayName}</span>
          </div>
          {isExpanded && item.children && (
            <div>
              {item.children.map((child) =>
                renderItem(child, depth + 1)
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div
          key={fullPath}
          className={`${styles.fileItem} ${isSelected ? styles.selected : ''} ${isReview ? styles.reviewFile : ''}`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => onFileSelect(fullPath)}
        >
          <span className={styles.fileIcon}>{isReview ? '📋' : '📄'}</span>
          <span className={styles.fileName}>{displayName}</span>
        </div>
      );
    }
  };

  if (loading) {
    return (
      <aside className={styles.sidebar}>
        <div className={styles.loading}>Loading summaries...</div>
      </aside>
    );
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h2>Summaries</h2>
      </div>
      <div className={styles.content}>
        {structure.map((item) => renderItem(item))}
      </div>
    </aside>
  );
}

