// Quiz matching utility for finding quiz data by file path

import type { QuizQuestion } from '@/app/data/quizzes/types';
import type { QuizSet } from '@/app/data/quizzes';

/**
 * Finds quiz data for a given file path using flexible matching strategies
 * @param path - The file path to match against quiz data
 * @param quizData - The quiz data set to search
 * @returns Matching quiz questions or null if no match found
 */
export function findQuizData(path: string | undefined, quizData: QuizSet): QuizQuestion[] | null {
  if (!path) return null;
  
  // Try exact match first
  if (quizData[path]) {
    console.log('Quiz found: exact match for', path);
    return quizData[path];
  }
  
  // Try matching without directory prefix (e.g., "1-agent-architecture-design/file.txt")
  const pathWithoutPrefix = path.replace(/^(summaries|readings|generated-content)\//, '');
  if (quizData[pathWithoutPrefix]) {
    console.log('Quiz found: match without prefix for', path, '->', pathWithoutPrefix);
    return quizData[pathWithoutPrefix];
  }
  
  // Try with different directory prefixes
  const possiblePaths = [
    `summaries/${pathWithoutPrefix}`,
    `readings/${pathWithoutPrefix}`,
    `generated-content/${pathWithoutPrefix}`,
    pathWithoutPrefix
  ];
  
  for (const possiblePath of possiblePaths) {
    if (quizData[possiblePath]) {
      console.log('Quiz found: match with prefix for', path, '->', possiblePath);
      return quizData[possiblePath];
    }
  }
  
  // Try fuzzy matching by normalizing file names
  // Extract the base filename and normalize it
  const baseFileName = path.split('/').pop()?.replace('.txt', '').toLowerCase() || '';
  const normalizedBase = baseFileName
    .replace(/^\d+[-.]/, '') // Remove leading numbers with dash or dot
    .replace(/[-_]/g, '-') // Normalize separators
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .trim();
  
  // Get directory path without prefix
  const pathDir = path.substring(0, path.lastIndexOf('/'));
  const pathDirWithoutPrefix = pathDir.replace(/^(summaries|readings|generated-content)\//, '');
  
  // Extract key words from filename (remove common words like "design", "implement", etc.)
  const extractKeywords = (name: string): string[] => {
    const words = name.split('-').filter(w => w.length > 2);
    // Remove common prefixes/suffixes
    return words.filter(w => 
      !['design', 'implement', 'config', 'manage', 'orchestrate', 'apply', 'ensure', 'user', 'interfaces', 
        'overview', 'tutorials', 'faq', 'launching', 'intro', 'introductory'].includes(w.toLowerCase())
    );
  };
  
  const baseKeywords = extractKeywords(normalizedBase);
  
  // Search through all quiz data keys for a match
  for (const [key, questions] of Object.entries(quizData)) {
    const keyFileName = key.split('/').pop()?.replace('.txt', '').toLowerCase() || '';
    const normalizedKey = keyFileName
      .replace(/^\d+[-.]/, '') // Remove leading numbers
      .replace(/[-_]/g, '-') // Normalize separators
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .trim();
    
    // Get key directory without prefix
    const keyDir = key.substring(0, key.lastIndexOf('/'));
    const keyDirWithoutPrefix = keyDir.replace(/^(summaries|readings|generated-content)\//, '');
    
    // Check directory match first (must be in same category)
    const dirsMatch = keyDirWithoutPrefix === pathDirWithoutPrefix || 
        keyDirWithoutPrefix.includes(pathDirWithoutPrefix) ||
        pathDirWithoutPrefix.includes(keyDirWithoutPrefix);
    
    if (!dirsMatch) continue;
    
    // Try multiple matching strategies
    const exactMatch = normalizedBase === normalizedKey;
    const substringMatch = normalizedBase.includes(normalizedKey) || normalizedKey.includes(normalizedBase);
    
    // Keyword-based matching
    const keyKeywords = extractKeywords(normalizedKey);
    const keywordOverlap = baseKeywords.length > 0 && keyKeywords.length > 0 &&
      baseKeywords.some(kw => keyKeywords.some(kk => kw.includes(kk) || kk.includes(kw)));
    
    // Check if significant portion of words match
    const baseWords = normalizedBase.split('-').filter(w => w.length > 2);
    const keyWords = normalizedKey.split('-').filter(w => w.length > 2);
    const wordOverlap = baseWords.length > 0 && keyWords.length > 0 &&
      baseWords.filter(bw => keyWords.some(kw => bw === kw || bw.includes(kw) || kw.includes(bw))).length >= 
      Math.min(2, Math.min(baseWords.length, keyWords.length));
    
    // Special handling for agent intelligence toolkit files - match based on core keywords
    // Files like "agent-intelligence-toolkit-overview" should match "agent-intelligence-toolkit-FAQ"
    // if they're in the same directory category
    const coreAgentTerms = ['agent', 'intelligence', 'toolkit'];
    const baseHasCoreTerms = coreAgentTerms.every(term => normalizedBase.includes(term));
    const keyHasCoreTerms = coreAgentTerms.every(term => normalizedKey.includes(term));
    
    // If both files contain the core agent intelligence toolkit terms, they're related
    // This allows overview/tutorials files to match FAQ/launching quiz data in the same category
    const agentIntelligenceMatch = baseHasCoreTerms && keyHasCoreTerms;
    
    if (exactMatch || substringMatch || keywordOverlap || wordOverlap || agentIntelligenceMatch) {
      console.log('Quiz found: fuzzy match for', path, '->', key, 
        '(normalized:', normalizedBase, 'vs', normalizedKey, 
        ', keywords:', baseKeywords, 'vs', keyKeywords, ')');
      return questions;
    }
  }
  
  console.log('No quiz found for', path, '- checked', Object.keys(quizData).length, 'quiz entries');
  return null;
}
