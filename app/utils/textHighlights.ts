// Utility functions for managing text highlights

export interface TextHighlight {
  id: string;
  text: string;
  articlePath: string;
  timestamp: number;
}

const STORAGE_KEY = 'article-highlights';

// Get all highlights for a specific article
export function getHighlightsForArticle(articlePath: string): TextHighlight[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      console.log('[Highlights] No highlights in localStorage');
      return [];
    }
    
    const allHighlights: TextHighlight[] = JSON.parse(stored);
    const filtered = allHighlights.filter(h => h.articlePath === articlePath);
    console.log('[Highlights] Loaded highlights for', articlePath, ':', filtered.length, 'highlights');
    return filtered;
  } catch (error) {
    console.error('Error loading highlights:', error);
    return [];
  }
}

// Save a new highlight
export function saveHighlight(articlePath: string, text: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const allHighlights: TextHighlight[] = stored ? JSON.parse(stored) : [];
    
    // Normalize text - remove extra whitespace and normalize line breaks
    const normalizedText = text.trim().replace(/\s+/g, ' ');
    
    // Check if this exact text (or very similar) is already highlighted for this article
    const exists = allHighlights.some(
      h => {
        const hNormalized = h.text.trim().replace(/\s+/g, ' ');
        return h.articlePath === articlePath && 
               (hNormalized === normalizedText || 
                hNormalized.toLowerCase() === normalizedText.toLowerCase());
      }
    );
    
    if (!exists && normalizedText.length > 0) {
      const newHighlight: TextHighlight = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: normalizedText,
        articlePath,
        timestamp: Date.now()
      };
      
      allHighlights.push(newHighlight);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allHighlights));
      console.log('[Highlights] Saved highlight:', { articlePath, text: normalizedText, id: newHighlight.id });
    } else {
      console.log('[Highlights] Highlight already exists or is empty');
    }
  } catch (error) {
    console.error('Error saving highlight:', error);
  }
}

// Remove a highlight
export function removeHighlight(articlePath: string, highlightId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const allHighlights: TextHighlight[] = JSON.parse(stored);
    const filtered = allHighlights.filter(
      h => !(h.articlePath === articlePath && h.id === highlightId)
    );
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing highlight:', error);
  }
}

// Remove all highlights for an article
export function clearHighlightsForArticle(articlePath: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const allHighlights: TextHighlight[] = JSON.parse(stored);
    const filtered = allHighlights.filter(h => h.articlePath !== articlePath);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error clearing highlights:', error);
  }
}

// Apply highlights to HTML content
export function applyHighlightsToText(
  htmlContent: string,
  highlights: TextHighlight[]
): string {
  if (!highlights || highlights.length === 0) {
    return htmlContent;
  }
  
  console.log('[Highlights] Applying', highlights.length, 'highlights to content');
  
  // Use DOM-based approach for more reliable matching
  if (typeof window !== 'undefined' && typeof DOMParser !== 'undefined') {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${htmlContent}</div>`, 'text/html');
      const container = doc.body.firstChild as HTMLElement;
      
      if (!container) {
        console.log('[Highlights] No container found, using fallback');
        return applyHighlightsSimple(htmlContent, highlights);
      }
      
      // Sort highlights by length (longest first) to avoid partial matches
      const sortedHighlights = [...highlights].sort((a, b) => b.text.length - a.text.length);
      
      let totalMatches = 0;
      
      for (const highlight of sortedHighlights) {
        const text = highlight.text.trim();
        if (text.length === 0) continue;
        
        console.log('[Highlights] Looking for:', text);
        
        // Get all text content from container (ignoring HTML tags)
        const containerText = container.textContent || '';
        const normalizedContainerText = containerText.replace(/\s+/g, ' ').toLowerCase();
        const normalizedHighlightText = text.replace(/\s+/g, ' ').toLowerCase();
        
        // Check if the text exists in the container
        if (normalizedContainerText.indexOf(normalizedHighlightText) === -1) {
          console.log('[Highlights] Text not found in container:', text);
          continue;
        }
        
        // Walk through all text nodes and find matches
        const findTextNodes = (node: Node, nodes: Text[] = []): Text[] => {
          if (node.nodeType === Node.TEXT_NODE) {
            // Skip text nodes inside mark elements
            const parent = node.parentElement;
            if (parent && !parent.closest('mark')) {
              nodes.push(node as Text);
            }
          } else {
            for (let i = 0; i < node.childNodes.length; i++) {
              findTextNodes(node.childNodes[i], nodes);
            }
          }
          return nodes;
        };
        
        const textNodesList = findTextNodes(container);
        console.log('[Highlights] Found', textNodesList.length, 'text nodes');
        
        // Try to find the text across text nodes (it might be split by HTML tags)
        // First, try to find it in a single text node
        let found = false;
        
        for (let i = textNodesList.length - 1; i >= 0; i--) {
          const node = textNodesList[i];
          const nodeText = node.textContent || '';
          const normalizedNodeText = nodeText.replace(/\s+/g, ' ').toLowerCase();
          
          // Check if this text node contains our highlight text
          const index = normalizedNodeText.indexOf(normalizedHighlightText);
          if (index === -1) continue;
          
          found = true;
          totalMatches++;
          
          // Find the actual position accounting for whitespace differences
          let actualIndex = 0;
          let normalizedIndex = 0;
          let nodeIndex = 0;
          
          // Find where the match starts in the original text
          while (normalizedIndex < index && nodeIndex < nodeText.length) {
            if (/\s/.test(nodeText[nodeIndex])) {
              // Skip whitespace in normalized text
              if (normalizedNodeText[normalizedIndex] === ' ') {
                normalizedIndex++;
              }
            } else {
              normalizedIndex++;
            }
            nodeIndex++;
            actualIndex++;
          }
          
          // Split the text node
          const beforeText = nodeText.substring(0, actualIndex);
          const matchText = nodeText.substring(actualIndex, actualIndex + text.length);
          const afterText = nodeText.substring(actualIndex + text.length);
          
          // Create highlight element
          const mark = doc.createElement('mark');
          mark.className = 'text-highlight';
          mark.setAttribute('data-highlight-id', highlight.id);
          mark.textContent = matchText;
          
          // Replace text node with: before + mark + after
          const parent = node.parentNode;
          if (parent) {
            if (beforeText) {
              parent.insertBefore(doc.createTextNode(beforeText), node);
            }
            parent.insertBefore(mark, node);
            if (afterText) {
              parent.insertBefore(doc.createTextNode(afterText), node);
            }
            parent.removeChild(node);
          }
          
          break; // Only highlight first match per highlight
        }
        
        if (!found) {
          console.log('[Highlights] Could not find text in any text node:', text);
        }
      }
      
      console.log('[Highlights] Applied', totalMatches, 'highlights');
      
      // Return the innerHTML of the container
      return container.innerHTML;
    } catch (error) {
      console.error('[Highlights] Error applying highlights with DOM parser:', error);
      // Fallback to simple string replacement
      return applyHighlightsSimple(htmlContent, highlights);
    }
  }
  
  // Fallback for server-side rendering
  return applyHighlightsSimple(htmlContent, highlights);
}

// Simple fallback for server-side rendering
function applyHighlightsSimple(
  htmlContent: string,
  highlights: TextHighlight[]
): string {
  if (!highlights || highlights.length === 0) return htmlContent;
  
  let result = htmlContent;
  const sortedHighlights = [...highlights].sort((a, b) => b.text.length - a.text.length);
  
  for (const highlight of sortedHighlights) {
    const text = highlight.text.trim();
    if (text.length === 0) continue;
    
    const normalizedText = text.replace(/\s+/g, ' ');
    const escapedText = normalizedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const flexiblePattern = escapedText.replace(/\s+/g, '\\s+');
    const regex = new RegExp(flexiblePattern, 'gi');
    
    const matches: Array<{ start: number; end: number; text: string }> = [];
    let match;
    const tempResult = result;
    regex.lastIndex = 0;
    
    while ((match = regex.exec(tempResult)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      const beforeMatch = tempResult.substring(0, start);
      
      const lastOpenTag = beforeMatch.lastIndexOf('<');
      const lastCloseTag = beforeMatch.lastIndexOf('>');
      if (lastOpenTag > lastCloseTag) continue;
      
      const lastMarkOpen = beforeMatch.lastIndexOf('<mark');
      const lastMarkClose = beforeMatch.lastIndexOf('</mark>');
      if (lastMarkOpen > lastMarkClose) continue;
      
      matches.push({ start, end, text: match[0] });
    }
    
    for (let i = matches.length - 1; i >= 0; i--) {
      const { start, end, text: matchText } = matches[i];
      result = result.substring(0, start) + 
               `<mark class="text-highlight" data-highlight-id="${highlight.id}">${matchText}</mark>` + 
               result.substring(end);
    }
  }
  
  return result;
}
