'use client';

import styles from '../viewer/ContentViewer.module.css';

interface File {
  path: string;
  name: string;
  isRead: boolean;
}

interface ProgressFileListProps {
  files: File[];
  onFileSelect?: (path: string) => void;
}

export default function ProgressFileList({ files, onFileSelect }: ProgressFileListProps) {
  return (
    <div className={styles.progressCategoryDropdown}>
      {files.map((file) => (
        <div
          key={file.path}
          className={`${styles.progressCategoryFile} ${file.isRead ? styles.progressCategoryFileRead : ''}`}
          onClick={() => onFileSelect?.(file.path)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onFileSelect?.(file.path);
            }
          }}
          aria-label={`${file.name} - ${file.isRead ? 'read' : 'unread'}`}
        >
          <span 
            className={`${styles.progressCategoryCheckbox} ${file.isRead ? styles.progressCategoryCheckboxChecked : ''}`}
            aria-hidden="true"
          />
          <span className={styles.progressCategoryFileName}>{file.name}</span>
        </div>
      ))}
    </div>
  );
}
