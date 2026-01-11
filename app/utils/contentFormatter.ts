// Content formatting utilities for parsing and processing text content

import { getCategoryFromPath, getKeyTermsForCategory } from './categoryKeyTerms';

export interface FormattedContent {
  title: string;
  sections: Array<{ 
    type: 'heading' | 'paragraph' | 'key-terms' | 'table' | 'definition'; 
    content: string; 
    level?: number;
    terms?: Array<{ term: string; definition: string }>;
    rows?: string[][];
  }>;
}

// Track which terms have been bolded per document (only once per article)
let boldedTermsInDocument = new Set<string>();
let currentCategory: string | null = null;
let currentKeyTerms: string[] = [];

export function boldKeyTerms(text: string, filePath?: string): string {
  // Update category and key terms if file path is provided
  if (filePath) {
    const category = getCategoryFromPath(filePath);
    if (category !== currentCategory) {
      currentCategory = category;
      currentKeyTerms = getKeyTermsForCategory(category);
    }
  }
  
  // Use current category's terms, or fallback to empty array
  const KEY_TERMS = currentKeyTerms.length > 0 ? currentKeyTerms : [];
  let result = text;
  
  // Skip if text is a heading (all caps, short) - don't bold headings
  if (text === text.toUpperCase() && text.length < 100 && /^[A-Z\s:]+$/.test(text)) {
    return result;
  }
  
  // If no key terms for this category, return text as-is
  if (KEY_TERMS.length === 0) {
    return result;
  }
  
  // Sort by length (longest first) to avoid partial matches
  const sortedTerms = [...KEY_TERMS].sort((a, b) => b.length - a.length);
  
  for (const term of sortedTerms) {
    const termKey = term.toLowerCase();
    
    // Check if already wrapped in strong tags
    const alreadyBolded = new RegExp(`<strong[^>]*>${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</strong>`, 'gi');
    if (alreadyBolded.test(result)) {
      continue;
    }
    
    // Create regex that matches whole words, case-insensitive
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let pattern: string;
    
    if (term.includes(' ')) {
      // Multi-word terms: match as phrase with word boundaries
      pattern = `\\b${escapedTerm}\\b`;
    } else {
      // Single word: match as whole word
      pattern = `\\b${escapedTerm}\\b`;
    }
    
    const regex = new RegExp(`(${pattern})`, 'gi');
    
    // Check if term appears in text
    const matches = [...result.matchAll(regex)];
    if (matches.length > 0) {
      // Only bold if not already bolded in this document
      if (!boldedTermsInDocument.has(termKey)) {
        const firstMatch = matches[0];
        const firstMatchIndex = firstMatch.index!;
        const matchedText = firstMatch[0];
        
        // Just bold the term (no tooltip data attribute needed)
        result = result.substring(0, firstMatchIndex) + 
                 `<strong>${matchedText}</strong>` + 
                 result.substring(firstMatchIndex + matchedText.length);
        
        // Mark as bolded for this document
        boldedTermsInDocument.add(termKey);
      }
    }
  }
  
  return result;
}

export function formatContent(content: string, filePath?: string): FormattedContent {
  const lines = content.split('\n').map(line => line.trim());
  
  if (lines.length === 0 || lines.every(line => line.length === 0)) {
    return { title: '', sections: [] };
  }

  // First line is typically the title
  const title = lines[0];
  const sections: Array<{ 
    type: 'heading' | 'paragraph' | 'key-terms' | 'table' | 'definition'; 
    content: string; 
    level?: number;
    terms?: Array<{ term: string; definition: string }>;
    rows?: string[][];
  }> = [];
  let skipRemaining = false;
  let inKeyTermsSection = false;
  let keyTerms: Array<{ term: string; definition: string }> = [];
  
  // Reset bolded terms tracking for new document
  boldedTermsInDocument.clear();
  
  // Update category and key terms based on file path
  if (filePath) {
    const category = getCategoryFromPath(filePath);
    currentCategory = category;
    currentKeyTerms = getKeyTermsForCategory(category);
  }
  
  let lastWasHeading = false;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines
    if (line.length === 0) {
      continue;
    }
    
    // Check if this is the REVIEW QUESTIONS section - skip it and everything after
    if (line.toUpperCase().includes('REVIEW QUESTIONS')) {
      skipRemaining = true;
      break;
    }
    
    // If we've hit REVIEW QUESTIONS, skip everything
    if (skipRemaining) {
      continue;
    }
    
    // Check for KEY TERMS section
    if (line.toUpperCase().includes('KEY TERMS') || line.toUpperCase().includes('KEY CONCEPTS')) {
      inKeyTermsSection = true;
      keyTerms = [];
      sections.push({
        type: 'heading',
        content: line,
        level: 1
      });
      lastWasHeading = true;
      continue;
    }
    
    // Parse key terms definitions (format: "Term: Definition" or "Term - Definition")
    if (inKeyTermsSection) {
      const colonMatch = line.match(/^(.+?):\s*(.+)$/);
      const dashMatch = line.match(/^(.+?)\s+-\s+(.+)$/);
      
      if (colonMatch || dashMatch) {
        const match = colonMatch || dashMatch;
        if (match) {
          keyTerms.push({
            term: match[1].trim(),
            definition: match[2].trim()
          });
          continue;
        }
      }
      
      // If we hit a new heading, close key terms section
      const isAllCaps = line === line.toUpperCase() && line.length < 100 && /^[A-Z\s:]+$/.test(line);
      if (isAllCaps && keyTerms.length > 0) {
        sections.push({
          type: 'key-terms',
          content: '',
          terms: keyTerms
        });
        keyTerms = [];
        inKeyTermsSection = false;
      }
    }
    
    // Check if line is a heading (all caps, or ends with colon, or short line with specific patterns)
    const isAllCaps = line === line.toUpperCase() && line.length < 100 && /^[A-Z\s:]+$/.test(line);
    const endsWithColon = line.endsWith(':') && line.length < 80 && !line.includes('.');
    const isShortHeading = line.length < 60 && !line.includes('.') && !line.match(/^[a-z]/);
    
    if (isAllCaps || endsWithColon || isShortHeading) {
      // Close key terms section if we hit a new major heading
      if (inKeyTermsSection && keyTerms.length > 0 && isAllCaps) {
        sections.push({
          type: 'key-terms',
          content: '',
          terms: keyTerms
        });
        keyTerms = [];
        inKeyTermsSection = false;
      }
      
      // Determine heading level
      let level = 1;
      if (isAllCaps) level = 1;
      else if (endsWithColon) level = 2;
      else level = 3;
      
      sections.push({
        type: 'heading',
        content: line.replace(/:$/, ''),
        level
      });
      lastWasHeading = true;
    } else {
      // Treat each non-empty line as a separate paragraph
      // Bold terms using category-specific list
      sections.push({
        type: 'paragraph',
        content: boldKeyTerms(line, filePath)
      });
      lastWasHeading = false;
    }
  }
  
  // Close any remaining key terms section
  if (inKeyTermsSection && keyTerms.length > 0) {
    sections.push({
      type: 'key-terms',
      content: '',
      terms: keyTerms
    });
  }

  return { title, sections };
}
