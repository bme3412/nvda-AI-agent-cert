'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  term: string;
  definition: string;
  example?: string;
  children: React.ReactNode;
}

type Position = 'top' | 'bottom' | 'left' | 'right';

export default function Tooltip({ term, definition, example, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<Position>('top');
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const calculatePosition = useCallback(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 16; // Minimum distance from viewport edges
    const arrowSize = 8; // Size of the arrow
    const gap = 16; // Gap between trigger and tooltip

    // Calculate available space in each direction
    const spaceAbove = triggerRect.top;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceLeft = triggerRect.left;
    const spaceRight = viewportWidth - triggerRect.right;

    // Calculate required space for tooltip
    const tooltipWidth = tooltipRect.width || 320; // Fallback width
    const tooltipHeight = tooltipRect.height || 200; // Fallback height

    let newPosition: Position = 'top';
    let newCoords = { top: 0, left: 0 };
    let newOffset = { x: 0, y: 0 };

    // Determine best position based on available space
    if (spaceBelow >= tooltipHeight + padding + arrowSize) {
      newPosition = 'bottom';
      newCoords.top = triggerRect.bottom + gap;
      newCoords.left = triggerRect.left + triggerRect.width / 2;
    } else if (spaceAbove >= tooltipHeight + padding + arrowSize) {
      newPosition = 'top';
      newCoords.top = triggerRect.top - gap;
      newCoords.left = triggerRect.left + triggerRect.width / 2;
    } else if (spaceRight >= tooltipWidth + padding + arrowSize) {
      newPosition = 'right';
      newCoords.top = triggerRect.top + triggerRect.height / 2;
      newCoords.left = triggerRect.right + gap;
    } else if (spaceLeft >= tooltipWidth + padding + arrowSize) {
      newPosition = 'left';
      newCoords.top = triggerRect.top + triggerRect.height / 2;
      newCoords.left = triggerRect.left - gap;
    } else {
      // Fallback: use the side with most space
      const maxVertical = Math.max(spaceAbove, spaceBelow);
      const maxHorizontal = Math.max(spaceLeft, spaceRight);
      if (maxVertical > maxHorizontal) {
        newPosition = spaceAbove > spaceBelow ? 'top' : 'bottom';
        newCoords.top = newPosition === 'top' 
          ? triggerRect.top - gap 
          : triggerRect.bottom + gap;
        newCoords.left = triggerRect.left + triggerRect.width / 2;
      } else {
        newPosition = spaceLeft > spaceRight ? 'left' : 'right';
        newCoords.top = triggerRect.top + triggerRect.height / 2;
        newCoords.left = newPosition === 'left'
          ? triggerRect.left - gap
          : triggerRect.right + gap;
      }
    }

    // Calculate horizontal offset to keep tooltip in viewport
    if (newPosition === 'top' || newPosition === 'bottom') {
      const tooltipLeft = newCoords.left - tooltipWidth / 2;
      const tooltipRight = tooltipLeft + tooltipWidth;

      if (tooltipLeft < padding) {
        newOffset.x = padding - tooltipLeft;
      } else if (tooltipRight > viewportWidth - padding) {
        newOffset.x = (viewportWidth - padding) - tooltipRight;
      }
    }

    // Calculate vertical offset to keep tooltip in viewport
    if (newPosition === 'left' || newPosition === 'right') {
      const tooltipTop = newCoords.top - tooltipHeight / 2;
      const tooltipBottom = tooltipTop + tooltipHeight;

      if (tooltipTop < padding) {
        newOffset.y = padding - tooltipTop;
      } else if (tooltipBottom > viewportHeight - padding) {
        newOffset.y = (viewportHeight - padding) - tooltipBottom;
      }
    }

    setPosition(newPosition);
    setCoords(newCoords);
    setOffset(newOffset);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure tooltip is rendered before calculating
      const timeoutId = setTimeout(() => {
        calculatePosition();
      }, 0);

      // Recalculate on scroll and resize
      window.addEventListener('scroll', calculatePosition, true);
      window.addEventListener('resize', calculatePosition);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', calculatePosition, true);
        window.removeEventListener('resize', calculatePosition);
      };
    }
  }, [isVisible, calculatePosition]);

  return (
    <span 
      ref={triggerRef}
      className={styles.tooltipWrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          ref={tooltipRef}
          className={`${styles.tooltip} ${styles[position]}`}
          role="tooltip"
          style={{
            top: `${coords.top + offset.y}px`,
            left: `${coords.left + offset.x}px`,
            '--offset-x': `${offset.x}px`,
            '--offset-y': `${offset.y}px`,
          } as React.CSSProperties}
        >
          <div className={styles.tooltipHeader}>
            <div className={styles.tooltipIcon}>ℹ️</div>
            <span className={styles.tooltipTerm}>{term}</span>
          </div>
          <div className={styles.tooltipContent}>
            <div className={styles.definitionSection}>
              <p className={styles.tooltipDefinition}>{definition}</p>
            </div>
            {example && (
              <div className={styles.tooltipExample}>
                <div className={styles.exampleHeader}>
                  <span className={styles.exampleIcon}>💡</span>
                  <span className={styles.exampleLabel}>Example</span>
                </div>
                <p className={styles.exampleText}>{example}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </span>
  );
}
