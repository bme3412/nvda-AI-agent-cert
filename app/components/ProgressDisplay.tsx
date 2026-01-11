'use client';

import { useState } from 'react';
import styles from './ContentViewer.module.css';
import ProgressCategory from './ProgressCategory';

export interface ProgressStats {
  total: number;
  read: number;
  percentage: number;
  byCategory: Array<{
    name: string;
    total: number;
    read: number;
    percentage: number;
  }>;
}

interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}

interface ProgressDisplayProps {
  progress: ProgressStats;
  structure: SummaryItem[];
  getCategoryFiles: (categoryName: string, items: SummaryItem[]) => Array<{ path: string; name: string; isRead: boolean }>;
  onFileSelect?: (path: string) => void;
}

export default function ProgressDisplay({ 
  progress, 
  structure, 
  getCategoryFiles, 
  onFileSelect 
}: ProgressDisplayProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className={styles.progressSection}>
      <div className={styles.progressHeader}>
        <div className={styles.progressOverall}>
          <div className={styles.progressMain}>
            <div className={styles.progressNumberLarge}>{progress.percentage}%</div>
            <div className={styles.progressText}>
              <span className={styles.progressRead}>{progress.read}</span>
              <span className={styles.progressOf}> of </span>
              <span className={styles.progressTotal}>{progress.total}</span>
              <span className={styles.progressLabel}> articles completed</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressBarFill}
                style={{ width: `${progress.percentage}%` } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </div>

      {progress.byCategory.length > 0 && (
        <div className={styles.progressCategories}>
          <h3 className={styles.progressCategoriesTitle}>By Category</h3>
          <div className={styles.progressCategoriesList}>
            {progress.byCategory.map((category) => (
              <ProgressCategory
                key={category.name}
                category={category}
                structure={structure}
                getCategoryFiles={getCategoryFiles}
                isExpanded={expandedCategory === category.name}
                onToggle={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                onFileSelect={onFileSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
