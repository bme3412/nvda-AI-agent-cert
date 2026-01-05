import { NextResponse } from 'next/server';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Generate questions based on article content
function generateQuestions(content: string, articleTitle: string): Question[] {
  const questions: Question[] = [];
  const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  // Extract key concepts and definitions
  const keyTerms: string[] = [];
  const definitions: Record<string, string> = {};
  
  // Find KEY TERMS section (could be "KEY TERMS AND DEFINITIONS" or just "KEY TERMS")
  let inKeyTerms = false;
  for (let i = 0; i < lines.length; i++) {
    const lineUpper = lines[i].toUpperCase();
    if (lineUpper.includes('KEY TERMS') && !lineUpper.includes('REVIEW')) {
      inKeyTerms = true;
      continue;
    }
    // Stop at REVIEW QUESTIONS or other major sections
    if (inKeyTerms && (lineUpper.includes('REVIEW QUESTIONS') || 
        (lineUpper.match(/^[A-Z][A-Z\s:]+$/) && lineUpper.length < 50 && !lineUpper.includes('KEY TERMS')))) {
      break;
    }
    if (inKeyTerms && lines[i].includes(':')) {
      const [term, ...defParts] = lines[i].split(':');
      if (term && defParts.length > 0) {
        const cleanTerm = term.trim().replace(/^[-•]\s*/, '');
        const definition = defParts.join(':').trim();
        if (cleanTerm.length > 0 && definition.length > 20) {
          keyTerms.push(cleanTerm);
          definitions[cleanTerm] = definition;
        }
      }
    }
  }
  
  // If no key terms found with that format, try extracting from paragraphs
  if (keyTerms.length === 0) {
    // Look for definitions in the content more broadly
    const allLines = content.split('\n');
    for (let i = 0; i < allLines.length; i++) {
      const line = allLines[i].trim();
      // Look for lines with colons that might be definitions
      if (line.includes(':') && line.length > 30 && line.length < 300) {
        const colonIndex = line.indexOf(':');
        const beforeColon = line.substring(0, colonIndex).trim();
        const afterColon = line.substring(colonIndex + 1).trim();
        
        // Check if it looks like a term: definition pattern
        if (beforeColon.length > 5 && beforeColon.length < 80 && 
            afterColon.length > 20 && 
            !beforeColon.includes('.') && 
            !afterColon.startsWith('http')) {
          const cleanTerm = beforeColon.replace(/^[-•]\s*/, '');
          if (cleanTerm.length > 0) {
            keyTerms.push(cleanTerm);
            definitions[cleanTerm] = afterColon;
          }
        }
      }
    }
  }

  // Extract paragraphs for context
  const paragraphs = content.split('\n\n').filter(p => p.length > 100);
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 30);

  // Generate application and scenario-based questions
  const selectedTerms = keyTerms.slice(0, Math.min(5, keyTerms.length));
  
  selectedTerms.forEach((term, index) => {
    const definition = definitions[term];
    if (!definition || definition.length < 30) return;

    // Extract key characteristics from definition
    const keyPoints = definition.split(/[,;]/).map(p => p.trim()).filter(p => p.length > 15);
    if (keyPoints.length === 0) return;

    // Find relevant context paragraph
    const contextParagraph = paragraphs.find(p => 
      p.toLowerCase().includes(term.toLowerCase()) && p.length > 150
    ) || paragraphs[0] || '';

    // Create different types of questions
    const questionTypes = [
      // Application question
      {
        question: `In which scenario would ${term} be most critical?`,
        generateCorrect: () => {
          // Extract use case from definition or context
          const useCaseMatch = definition.match(/for\s+([^,\.]+)|enables\s+([^,\.]+)|used\s+to\s+([^,\.]+)/i);
          if (useCaseMatch) {
            return `When ${useCaseMatch[1] || useCaseMatch[2] || useCaseMatch[3]}`;
          }
          // Extract from context
          const contextMatch = contextParagraph.match(new RegExp(`${term}[^.]{0,100}(for|enables|allows|supports)[^.]{0,80}`, 'i'));
          if (contextMatch) {
            return contextMatch[0].substring(0, 120);
          }
          return `When managing complex multi-step workflows that require ${term.toLowerCase()}`;
        },
        generateDistractors: () => {
          const otherTerms = keyTerms.filter(t => t !== term).slice(0, 3);
          return otherTerms.map(t => {
            const otherDef = definitions[t];
            const otherUseCase = otherDef?.match(/for\s+([^,\.]+)|enables\s+([^,\.]+)/i);
            return otherUseCase ? `When ${otherUseCase[1] || otherUseCase[2]}` : `When handling ${t.toLowerCase()} operations`;
          });
        }
      },
      // Comparison question
      {
        question: `What distinguishes ${term} from traditional approaches?`,
        generateCorrect: () => {
          const diffMatch = definition.match(/(unlike|differs|rather than|instead of)[^,\.]{0,100}/i);
          if (diffMatch) {
            return diffMatch[0].substring(0, 120);
          }
          const keyPoint = keyPoints[0];
          return keyPoint.length > 120 ? keyPoint.substring(0, 117) + '...' : keyPoint;
        },
        generateDistractors: () => {
          return [
            `It requires more manual configuration than traditional systems`,
            `It operates only in centralized environments`,
            `It focuses exclusively on data storage rather than processing`
          ];
        }
      },
      // Function question
      {
        question: `What is the primary function of ${term}?`,
        generateCorrect: () => {
          // Extract main function
          const funcMatch = definition.match(/^(an?|the)\s+([^,\.]{20,100})/i);
          if (funcMatch && funcMatch[2].length > 20) {
            return funcMatch[2].substring(0, 120);
          }
          // Use first key point
          return keyPoints[0].length > 120 ? keyPoints[0].substring(0, 117) + '...' : keyPoints[0];
        },
        generateDistractors: () => {
          const otherTerms = keyTerms.filter(t => t !== term).slice(0, 2);
          return [
            ...otherTerms.map(t => {
              const otherDef = definitions[t];
              const otherFunc = otherDef?.match(/^(an?|the)\s+([^,\.]{20,80})/i);
              return otherFunc ? otherFunc[2] : `To manage ${t.toLowerCase()}`;
            }),
            `To provide basic data storage capabilities`
          ];
        }
      },
      // Benefit/Advantage question
      {
        question: `What is a key advantage of using ${term}?`,
        generateCorrect: () => {
          const benefitMatch = definition.match(/(enables|allows|provides|ensures|improves|reduces|increases)[^,\.]{0,100}/i);
          if (benefitMatch) {
            return benefitMatch[0].substring(0, 120);
          }
          // Look in context
          const contextBenefit = contextParagraph.match(new RegExp(`${term}[^.]{0,80}(enables|allows|provides)[^.]{0,60}`, 'i'));
          if (contextBenefit) {
            return contextBenefit[0].substring(0, 120);
          }
          return `It enables more efficient and scalable operations`;
        },
        generateDistractors: () => {
          return [
            `It eliminates the need for any infrastructure setup`,
            `It works only with proprietary vendor solutions`,
            `It requires minimal computational resources compared to alternatives`
          ];
        }
      }
    ];

    // Select a random question type
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    const question: Question = {
      id: `q${index + 1}`,
      question: questionType.question,
      options: [],
      correctAnswer: 0,
      explanation: definition.length > 250 ? definition.substring(0, 247) + '...' : definition
    };

    // Generate correct answer
    const correctAnswer = questionType.generateCorrect();
    question.options.push(correctAnswer);

    // Generate distractors
    const distractors = questionType.generateDistractors();
    distractors.forEach(distractor => {
      if (question.options.length < 4 && distractor && distractor.length > 20) {
        question.options.push(distractor.length > 120 ? distractor.substring(0, 117) + '...' : distractor);
      }
    });

    // Fill remaining slots with plausible distractors
    while (question.options.length < 4) {
      const genericDistractors = [
        `It provides basic functionality without specialized features`,
        `It requires extensive manual configuration and maintenance`,
        `It operates only in single-server environments`,
        `It focuses on data storage rather than processing capabilities`
      ];
      const distractor = genericDistractors[question.options.length - 1];
      if (distractor && !question.options.includes(distractor)) {
        question.options.push(distractor);
      } else {
        break;
      }
    }

    // Ensure we have exactly 4 options
    while (question.options.length < 4) {
      question.options.push(`A standard approach for handling ${term.toLowerCase()}`);
    }

    // Shuffle options but keep track of correct answer
    const correct = question.options[0];
    question.options = question.options.sort(() => Math.random() - 0.5);
    question.correctAnswer = question.options.indexOf(correct);

    questions.push(question);
  });

  // Generate concept-based questions from paragraphs
  const conceptPatterns = [
    { pattern: /Kubernetes/gi, name: 'Kubernetes' },
    { pattern: /RAG|retrieval-augmented generation/gi, name: 'RAG' },
    { pattern: /vector database/gi, name: 'vector databases' },
    { pattern: /observability/gi, name: 'observability' },
    { pattern: /GitOps/gi, name: 'GitOps' },
    { pattern: /multi-agent/gi, name: 'multi-agent systems' },
    { pattern: /orchestration/gi, name: 'orchestration' },
  ];

  conceptPatterns.slice(0, 2).forEach(({ pattern, name }, idx) => {
    if (questions.length >= 5) return;
    
    const matches = content.match(pattern);
    if (matches && matches.length >= 2) {
      const relevantParagraph = paragraphs.find(p => p.toLowerCase().includes(name.toLowerCase()) && p.length > 200);
      if (relevantParagraph) {
        // Extract a key statement about the concept
        const conceptSentences = relevantParagraph.split(/[.!?]+/).filter(s => 
          s.toLowerCase().includes(name.toLowerCase()) && s.length > 40 && s.length < 200
        );
        
        if (conceptSentences.length > 0) {
          const keySentence = conceptSentences[0].trim();
          
          // Create application question
          const question: Question = {
            id: `concept${idx + 1}`,
            question: `Which statement best describes how ${name} functions in an Enterprise AI Factory?`,
            options: [],
            correctAnswer: 0,
            explanation: keySentence.length > 250 ? keySentence.substring(0, 247) + '...' : keySentence
          };

          // Correct answer - extract or create from key sentence
          let correctOption = keySentence;
          if (correctOption.length > 150) {
            // Try to find a shorter, more focused part
            const shorterMatch = correctOption.match(/[^,]{30,120}/);
            if (shorterMatch) {
              correctOption = shorterMatch[0];
            } else {
              correctOption = correctOption.substring(0, 147) + '...';
            }
          }
          question.options.push(correctOption);

          // Generate plausible distractors
          const distractors = [
            `${name} primarily handles user authentication and access control`,
            `${name} is used exclusively for storing large model files`,
            `${name} requires manual intervention for every operation`,
            `${name} operates independently without integration with other systems`
          ];

          distractors.forEach(distractor => {
            if (question.options.length < 4) {
              question.options.push(distractor);
            }
          });

          // Shuffle
          const correct = question.options[0];
          question.options = question.options.sort(() => Math.random() - 0.5);
          question.correctAnswer = question.options.indexOf(correct);

          questions.push(question);
        }
      }
    }
  });

  // Limit to 5 questions total
  return questions.slice(0, 5);
}

// Helper function to find matching file across directories
async function findMatchingFile(filePath: string): Promise<{ content: string; title: string } | null> {
  const fileName = filePath.split('/').pop() || '';
  const baseName = fileName.replace('.txt', '');
  
  // Try to find matching files in all three directories
  const directories = ['summaries', 'readings', 'generated-content'];
  const contents: string[] = [];
  let title = 'Article';
  
  for (const dir of directories) {
    // Try exact match first
    let fullPath = join(process.cwd(), dir, filePath);
    if (existsSync(fullPath)) {
      try {
        const content = await readFile(fullPath, 'utf-8');
        contents.push(content);
        if (!title || title === 'Article') {
          title = content.split('\n')[0] || title;
        }
      } catch (err) {
        console.error(`Error reading ${fullPath}:`, err);
      }
    } else {
      // Try to find file with similar name in the same directory
      const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
      const dirFullPath = join(process.cwd(), dir, dirPath);
      
      if (existsSync(dirFullPath)) {
        // Look for files that might match (e.g., different numbering)
        try {
          const entries = await readdir(dirFullPath, { withFileTypes: true });
          
          for (const entry of entries) {
            if (entry.isFile() && entry.name.endsWith('.txt')) {
              // Normalize names: remove numbers, dots, and common prefixes
              const normalizeName = (name: string) => {
                return name
                  .replace(/^\d+[.-]/, '') // Remove leading numbers with dot or dash
                  .replace(/\.txt$/, '')
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, '-') // Normalize separators
                  .split('-')
                  .filter(part => part.length > 2) // Filter out short words
                  .sort()
                  .join('-');
              };
              
              const entryNormalized = normalizeName(entry.name);
              const targetNormalized = normalizeName(baseName);
              
              // Extract key words (longer words are more meaningful)
              const entryWords = entryNormalized.split('-').filter(w => w.length > 3);
              const targetWords = targetNormalized.split('-').filter(w => w.length > 3);
              
              // Check if there's significant overlap in key words
              const matchingWords = entryWords.filter(word => 
                targetWords.some(tWord => 
                  word.includes(tWord) || tWord.includes(word) || 
                  word.substring(0, 4) === tWord.substring(0, 4) // First 4 chars match
                )
              );
              
              // Match if normalized names are similar or if key words overlap significantly
              const isSimilar = entryNormalized === targetNormalized ||
                matchingWords.length >= Math.min(2, Math.min(entryWords.length, targetWords.length)) ||
                (entryWords.length > 0 && targetWords.length > 0 && 
                 matchingWords.length / Math.max(entryWords.length, targetWords.length) > 0.5);
              
              if (isSimilar) {
                const matchedPath = join(dirFullPath, entry.name);
                try {
                  const content = await readFile(matchedPath, 'utf-8');
                  contents.push(content);
                  if (!title || title === 'Article') {
                    title = content.split('\n')[0] || title;
                  }
                  break; // Found a match, move to next directory
                } catch (err) {
                  console.error(`Error reading ${matchedPath}:`, err);
                }
              }
            }
          }
        } catch (err) {
          // Directory doesn't exist or can't read, continue
        }
      }
    }
  }
  
  if (contents.length === 0) {
    return null;
  }
  
  // Combine all contents
  const combinedContent = contents.join('\n\n---\n\n');
  
  return { content: combinedContent, title };
}

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join('/');
    
    // Security check
    if (filePath.includes('..') || filePath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    // Only generate questions for agent architecture design articles
    if (!filePath.startsWith('1-agent-architecture-design/')) {
      return NextResponse.json({ questions: [] });
    }

    if (!filePath.endsWith('.txt')) {
      return NextResponse.json({ questions: [] });
    }

    // Try to find matching file across all directories
    const fileData = await findMatchingFile(filePath);
    
    if (!fileData) {
      return NextResponse.json({ questions: [] });
    }
    
    const questions = generateQuestions(fileData.content, fileData.title);
    
    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Error generating quiz:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz', questions: [] },
      { status: 500 }
    );
  }
}
