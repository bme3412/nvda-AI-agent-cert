'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentViewer from './components/ContentViewer';
import styles from './page.module.css';

export default function Home() {
  const [selectedPath, setSelectedPath] = useState<string | undefined>();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFileSelect = (path: string | undefined) => {
    setSelectedPath(path);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.menuButton}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {sidebarOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar 
        onFileSelect={handleFileSelect} 
        selectedPath={selectedPath}
        isOpen={sidebarOpen}
      />
      <ContentViewer filePath={selectedPath} onFileSelect={handleFileSelect} />
    </div>
  );
}

