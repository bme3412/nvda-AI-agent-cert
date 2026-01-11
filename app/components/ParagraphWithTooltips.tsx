'use client';

import { useMemo } from 'react';
import Tooltip from './Tooltip';
import { TERM_DEFINITIONS } from '@/app/utils/termDefinitions';

interface ParagraphWithTooltipsProps {
  htmlContent: string;
}

// Parse HTML string and convert to React elements with Tooltips
function parseHTMLWithTooltips(html: string): React.ReactNode[] {
  // Wrap in a container to ensure proper parsing
  const wrappedHtml = `<div>${html}</div>`;
  const parser = new DOMParser();
  const doc = parser.parseFromString(wrappedHtml, 'text/html');
  const container = doc.body.firstChild as Element;
  
  if (!container) {
    return [{ __html: html }];
  }
  
  let currentIndex = 0;
  
  // Process each node recursively, returning React nodes
  const processNode = (node: Node): React.ReactNode[] => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      return text ? [text] : [];
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      
      if (element.tagName === 'STRONG' && element.hasAttribute('data-term')) {
        const term = element.getAttribute('data-term') || '';
        const termData = TERM_DEFINITIONS[term];
        const text = element.textContent || '';
        
        if (termData) {
          return [
            <Tooltip
              key={`tooltip-${currentIndex++}`}
              term={term}
              definition={termData.definition}
              example={termData.example}
            >
              <strong>{text}</strong>
            </Tooltip>
          ];
        } else {
          return [<strong key={`strong-${currentIndex++}`}>{text}</strong>];
        }
      } else if (element.tagName === 'STRONG') {
        // Regular strong tag without data-term - process children
        const children: React.ReactNode[] = [];
        Array.from(element.childNodes).forEach(child => {
          children.push(...processNode(child));
        });
        return [<strong key={`strong-${currentIndex++}`}>{children}</strong>];
      } else {
        // For other elements (like div wrapper), process all children
        const children: React.ReactNode[] = [];
        Array.from(element.childNodes).forEach(child => {
          children.push(...processNode(child));
        });
        return children;
      }
    }
    return [];
  };
  
  // Process all nodes in the container
  const result: React.ReactNode[] = [];
  if (container) {
    Array.from(container.childNodes).forEach(child => {
      result.push(...processNode(child));
    });
  }
  
  // If no content was processed, return the original HTML as fallback
  if (result.length === 0) {
    return [{ __html: html }];
  }
  
  return result;
}

export default function ParagraphWithTooltips({ htmlContent }: ParagraphWithTooltipsProps) {
  const content = useMemo(() => {
    return parseHTMLWithTooltips(htmlContent);
  }, [htmlContent]);
  
  // If content is a single object with __html, use dangerouslySetInnerHTML
  if (content.length === 1 && typeof content[0] === 'object' && content[0] !== null && '__html' in content[0]) {
    return <span dangerouslySetInnerHTML={content[0] as { __html: string }} />;
  }
  
  return <>{content}</>;
}
