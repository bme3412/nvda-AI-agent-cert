import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what is the fundamental problem with AI agents regarding memory, and why does this occur?',
    options: [
      'AI agents have too much memory and become overwhelmed by information overload',
      'AI agents naturally have the memory span of a goldfish and start fresh each interaction unless deliberate memory architecture is built',
      'AI agents can only remember numerical data but forget all text-based information',
      'AI agents share memories across different users, creating privacy and security issues'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "they\'re incredibly intelligent in the moment but naturally have the memory span of a goldfish. Without deliberate memory architecture, an agent might brilliantly solve a complex problem for you on Monday and then have absolutely no recollection of it by Tuesday. This isn\'t a bug—it\'s how the underlying models work. Each time you interact with an agent, you\'re essentially starting fresh unless you\'ve built systems to explicitly manage memory."'
  },
  {
    id: 'q2',
    question: 'How is short-term memory typically implemented in agentic systems, and what is its main limitation?',
    options: [
      'Through permanent database storage that persists across all sessions indefinitely',
      'Through the context window that contains conversation history, with the limitation of finite capacity that requires deciding what to keep and what to let go',
      'Through cloud storage that automatically backs up every interaction for future reference',
      'Through human operators who manually track and record important conversation details'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "Short-term memory in agentic systems is all about maintaining context within a single session or task... This is typically implemented through the context window—the actual text that gets fed to the language model with each request." The limitation is that "context windows aren\'t infinite. Even with modern models boasting huge context lengths, you\'re still dealing with hard limits... This creates the core challenge of short-term memory management—deciding what to keep in the active context and what to let go."'
  },
  {
    id: 'q3',
    question: 'How does long-term memory work using vector databases and semantic search?',
    options: [
      'Information is stored exactly as typed and retrieved only through exact keyword matches',
      'Important information gets converted to embeddings (mathematical representations of meaning) and stored in databases, then retrieved through semantic similarity rather than keyword matching',
      'All conversations are recorded as audio files and processed through speech recognition when needed',
      'Long-term memory is maintained by human reviewers who manually categorize and index all interactions'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "When the agent encounters information worth remembering... that sentence gets converted into a mathematical representation called an embedding. Think of it as a unique fingerprint that captures the meaning of that information. This embedding gets stored in a specialized database alongside the original text. Later... the system searches the database for similar embeddings." The brilliance is that "it finds relevant memories based on meaning, not just keyword matching."'
  },
  {
    id: 'q4',
    question: 'What is memory consolidation and why is it important for agent memory systems?',
    options: [
      'The process of backing up all memory data to prevent loss during system failures',
      'The process of refining and organizing memories over time, merging related fragments into coherent understanding to reduce redundancy and improve retrieval',
      'The automatic deletion of old memories to make space for new information',
      'The encryption of sensitive memories to ensure user privacy and data security'
    ],
    correctAnswer: 1,
    explanation: 'The document describes memory consolidation as "the process of refining and organizing memories over time, similar to how human brains process and integrate new information during sleep. An agent might have dozens of individual memories about your preferences scattered across many conversations... Rather than storing these as separate fragments, a consolidation process might merge them into a single, comprehensive preference... This reduces redundancy, improves retrieval efficiency, and creates more coherent understanding."'
  },
  {
    id: 'q5',
    question: 'What is working memory and how does it differ from short-term and long-term memory?',
    options: [
      'Working memory is identical to short-term memory and serves no distinct purpose',
      'Working memory is task-specific memory that\'s more persistent than conversation context but not necessarily permanent, serving as the agent\'s active project workspace',
      'Working memory only stores computational results and mathematical calculations',
      'Working memory is controlled entirely by the user and cannot be accessed by the agent'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "The working memory layer sits between short-term and long-term memory... This is task-specific memory that\'s more persistent than conversation context but not necessarily permanent. When an agent is working on a complex multi-day project with you, it needs memory that lasts beyond a single chat session but might not be relevant forever. Think of this as the agent\'s active project workspace... This memory persists across sessions related to the specific project but doesn\'t clutter the general long-term memory with hyper-specific details that won\'t matter once the project is complete."'
  },
  {
    id: 'q6',
    question: 'According to the document, what is the ultimate goal of memory management in AI agents?',
    options: [
      'To minimize computational costs and storage requirements for memory systems',
      'To create agents that genuinely feel like they know you and get smarter over time, becoming indispensable partners rather than mere tools',
      'To ensure perfect recall of every single detail from all previous interactions',
      'To enable agents to share memories and learnings across different users and contexts'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The ultimate goal of memory management is creating agents that genuinely feel like they know you and get smarter over time. When you can return to an agent after a week away and it immediately picks up where you left off, references your preferences without being asked, and builds on previous conversations rather than starting from scratch—that\'s when memory architecture has succeeded. It\'s the difference between a tool you use and a partner you work with... Get memory right, and you\'ve built the foundation for agents that become indispensable parts of how people work and think."'
  }
];

