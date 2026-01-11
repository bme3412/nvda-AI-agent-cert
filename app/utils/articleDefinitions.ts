// Article-specific term definitions
// These definitions are specific to individual articles and take precedence over global definitions
// Organized by section for easy maintenance

import { TermDefinition } from './termDefinitions';
import { SECTION1_DEFINITIONS } from './articleDefinitions/section1';
import { SECTION2_DEFINITIONS } from './articleDefinitions/section2';
import { SECTION3_DEFINITIONS } from './articleDefinitions/section3';
import { SECTION4_DEFINITIONS } from './articleDefinitions/section4';
import { SECTION5_DEFINITIONS } from './articleDefinitions/section5';
import { SECTION6_DEFINITIONS } from './articleDefinitions/section6';
import { SECTION7_DEFINITIONS } from './articleDefinitions/section7';
import { SECTION8_DEFINITIONS } from './articleDefinitions/section8';
import { SECTION9_DEFINITIONS } from './articleDefinitions/section9';
import { SECTION10_DEFINITIONS } from './articleDefinitions/section10';

// Combine all section definitions into a single object
export const ARTICLE_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  ...SECTION1_DEFINITIONS,
  ...SECTION2_DEFINITIONS,
  ...SECTION3_DEFINITIONS,
  ...SECTION4_DEFINITIONS,
  ...SECTION5_DEFINITIONS,
  ...SECTION6_DEFINITIONS,
  ...SECTION7_DEFINITIONS,
  ...SECTION8_DEFINITIONS,
  ...SECTION9_DEFINITIONS,
  ...SECTION10_DEFINITIONS
};

// Helper function to normalize article path for lookup
export function normalizeArticlePath(articlePath: string): string {
  let normalized = articlePath;
  // Remove .txt extension
  normalized = normalized.replace(/\.txt$/, '');
  // Remove common path prefixes
  normalized = normalized.replace(/^summaries\//, '');
  normalized = normalized.replace(/^app\/data\/content\/summaries\//, '');
  return normalized;
}

// Helper function to get article-specific definition
export function getArticleDefinition(articlePath: string, term: string): TermDefinition | null {
  const normalizedPath = normalizeArticlePath(articlePath);
  const articleDefs = ARTICLE_DEFINITIONS[normalizedPath];
  if (articleDefs && articleDefs[term]) {
    return articleDefs[term];
  }
  
  // Try case-insensitive match
  if (articleDefs) {
    const lowerTerm = term.toLowerCase();
    const matchingKey = Object.keys(articleDefs).find(
      key => key.toLowerCase() === lowerTerm
    );
    if (matchingKey) {
      return articleDefs[matchingKey];
    }
  }
  
  return null;
}

// Helper function to get all definitions for an article
export function getArticleDefinitions(articlePath: string): Record<string, TermDefinition> | null {
  const normalizedPath = normalizeArticlePath(articlePath);
  return ARTICLE_DEFINITIONS[normalizedPath] || null;
}
