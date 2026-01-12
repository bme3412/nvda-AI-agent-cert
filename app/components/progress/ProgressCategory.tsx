'use client';

import styles from '../viewer/ContentViewer.module.css';
import ProgressFileList from './ProgressFileList';
import { SummaryItem } from '../sidebar/types';

interface Category {
  name: string;
  total: number;
  read: number;
  percentage: number;
}

interface ProgressCategoryProps {
  category: Category;
  structure: SummaryItem[];
  getCategoryFiles: (categoryName: string, items: SummaryItem[]) => Array<{ path: string; name: string; isRead: boolean }>;
  isExpanded: boolean;
  onToggle: () => void;
  onFileSelect?: (path: string) => void;
}

export default function ProgressCategory({
  category,
  structure,
  getCategoryFiles,
  isExpanded,
  onToggle,
  onFileSelect
}: ProgressCategoryProps) {
  const categoryFiles = isExpanded ? getCategoryFiles(category.name, structure) : [];

  return (
    <div className={styles.progressCategory}>
      <div className={styles.progressCategoryHeader}>
        <div className={styles.progressCategoryInfo}>
          <span className={styles.progressCategoryName}>{category.name}</span>
          <span className={styles.progressCategoryPercent}>
            {category.read}/{category.total}
          </span>
        </div>
        <button
          className={styles.progressCategoryToggle}
          onClick={onToggle}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? '▼' : '▶'}
        </button>
      </div>
      <div className={styles.progressCategoryBar}>
        <div 
          className={styles.progressCategoryBarFill}
          style={{ width: `${category.percentage}%` } as React.CSSProperties}
        />
      </div>
      {isExpanded && categoryFiles.length > 0 && (
        <ProgressFileList files={categoryFiles} onFileSelect={onFileSelect} />
      )}
    </div>
  );
}
