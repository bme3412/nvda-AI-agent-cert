import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what is the primary benefit of using logic trees for agent reasoning?',
    options: [
      'They reduce computational costs by limiting the number of reasoning steps',
      'They make reasoning explicit and traceable, allowing you to see exactly which factors were considered and which decision path was followed',
      'They automatically generate the correct answer without human oversight',
      'They eliminate the need for multiple LLM calls in complex reasoning tasks'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The power of logic trees is that they make reasoning explicit and traceable. Instead of the agent producing a mysterious recommendation through opaque pattern matching, you can see exactly which factors it considered, how it evaluated each one, and which decision path it followed. This is crucial for debugging—when an agent makes a wrong recommendation, you can trace through the logic tree and identify exactly where the reasoning went off track."'
  },
  {
    id: 'q2',
    question: 'What distinguishes prompt chains from single-prompt approaches in multi-step reasoning?',
    options: [
      'Prompt chains break complex reasoning into focused, sequential steps where each call builds on previous outputs, allowing for verification at each step',
      'Prompt chains use multiple different AI models while single prompts use only one',
      'Prompt chains are faster and more efficient than single-prompt approaches',
      'Prompt chains only work with structured data while single prompts handle unstructured input'
    ],
    correctAnswer: 0,
    explanation: 'The document explains that "Instead of trying to cram an entire complex reasoning task into one massive prompt, you break it into a series of focused prompts where each one handles a specific aspect of the problem... The elegance of prompt chains is that each step is focused and verifiable. Instead of asking the agent to do everything at once—which often leads to superficial analysis or missing important steps—you\'re forcing it to tackle one aspect thoroughly before moving to the next."'
  },
  {
    id: 'q3',
    question: 'What role does stateful orchestration play in multi-step reasoning systems?',
    options: [
      'It speeds up processing by caching previous results for reuse',
      'It manages all the information gathered, decisions made, and context established as the agent works through problems, serving as working memory',
      'It automatically corrects errors in agent reasoning without human intervention',
      'It translates between different programming languages used by various agents'
    ],
    correctAnswer: 1,
    explanation: 'The document defines stateful orchestration as managing "all the information that\'s been gathered, decisions that have been made, and context that\'s been established as the agent works through the problem. Without state management, each step is isolated... With proper state management, every step builds on accumulated knowledge, creating coherent reasoning that actually goes somewhere rather than wandering in circles."'
  },
  {
    id: 'q4',
    question: 'According to the document, what is the purpose of pruning strategies in logic trees?',
    options: [
      'To remove incorrect information from the knowledge base',
      'To ensure all possible reasoning paths are explored thoroughly',
      'To convert unstructured reasoning into structured decision trees',
      'To make complex reasoning computationally feasible by eliminating branches that don\'t need full exploration'
    ],
    correctAnswer: 3,
    explanation: 'The document explains that "Logic trees also enable pruning strategies that make complex reasoning computationally feasible. Not every branch needs to be explored fully. If the agent determines early on that a company has unsustainable debt levels, it might prune away entire branches of analysis about long-term growth prospects—there\'s no point in detailed valuation work if the company might not survive its debt obligations."'
  },
  {
    id: 'q5',
    question: 'What are reasoning checkpoints and why are they important in multi-step reasoning?',
    options: [
      'Automatic save points that prevent data loss during system failures',
      'Points where the orchestrator pauses to evaluate whether reasoning is on track and decides whether to continue, backtrack, or terminate',
      'Locations where human operators must manually approve each reasoning step',
      'Technical benchmarks that measure the performance speed of reasoning algorithms'
    ],
    correctAnswer: 1,
    explanation: 'The document describes checkpoints as "points where the orchestrator pauses to evaluate whether reasoning is on track and decides whether to continue, backtrack, or terminate. After completing a major reasoning branch... a checkpoint might evaluate whether the accumulated evidence is sufficient and coherent. If financial metrics are internally contradictory or if critical information is missing, the checkpoint triggers corrective action... Checkpoints prevent agents from barreling ahead with reasoning built on flawed foundations."'
  },
  {
    id: 'q6',
    question: 'What is the ultimate goal of applying logic trees, prompt chains, and stateful orchestration in AI agents?',
    options: [
      'To build agents that can genuinely think through complex problems systematically with transparent, verifiable reasoning rather than just pattern-matching',
      'To reduce the cost and complexity of deploying AI systems in production',
      'To ensure all AI agents produce identical results for the same input queries',
      'To eliminate the need for human oversight in AI decision-making processes'
    ],
    correctAnswer: 0,
    explanation: 'The document concludes that "The ultimate goal of applying logic trees, prompt chains, and stateful orchestration is building agents that can genuinely think through complex problems systematically rather than just pattern-matching to superficially similar training examples. When you ask such an agent a hard question, it doesn\'t immediately guess an answer—it breaks the problem down, gathers relevant information, analyzes different aspects, considers alternatives, synthesizes findings, and reaches evidence-based conclusions. The reasoning is transparent, verifiable, and can be refined as you identify weaknesses."'
  }
];
