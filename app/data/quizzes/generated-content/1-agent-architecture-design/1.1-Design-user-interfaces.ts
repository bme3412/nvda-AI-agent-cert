import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what is the fundamental difference between traditional software interfaces and agent interfaces when handling user requests?',
    options: [
      'Agent interfaces require more complex authentication and security protocols than traditional software',
      'Traditional software provides instant actions while agent interfaces must expose the reasoning journey and multi-step process in real-time',
      'Agent interfaces only work with voice commands while traditional software uses visual elements',
      'Traditional software is faster and more reliable than agent interfaces for all types of tasks'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "When someone clicks \'save\' on a document, they expect an instant action. But when they ask an agent to \'analyze Q3 sales trends and recommend strategy adjustments,\' there\'s a journey happening—the agent is breaking down the request, gathering information, reasoning through data, and synthesizing recommendations. Your interface needs to expose this journey in real-time without overwhelming the user."'
  },
  {
    id: 'q2',
    question: 'What does the document identify as the foundation of intuitive human-agent interaction?',
    options: [
      'Fast response times and minimal loading delays',
      'Transparency and visibility of what the agent is thinking and doing',
      'Advanced natural language processing capabilities',
      'Integration with multiple external APIs and databases'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The foundation of intuitive human-agent interaction starts with transparency and visibility. Users need to see what the agent is thinking and doing, not just the final output." This transparency builds trust and allows users to course-correct if needed.'
  },
  {
    id: 'q3',
    question: 'According to the document, what approach should conversational design in agent interfaces take?',
    options: [
      'Make every interaction feel exactly like talking to a human with no structured elements',
      'Use only traditional UI elements like buttons and forms to avoid confusion',
      'Support natural language input while providing escape hatches through multi-modal interaction combining chat with structured UI elements',
      'Focus exclusively on voice-based interactions without any visual components'
    ],
    correctAnswer: 2,
    explanation: 'The document explains that interfaces "should support natural language input because that\'s how humans think and express complex needs, but it also needs escape hatches for when conversation fails. This means designing for multi-modal interaction—combining chat interfaces with buttons, forms, sliders, and other traditional UI elements."'
  },
  {
    id: 'q4',
    question: 'What does "agent state awareness" refer to in the context of interface design?',
    options: [
      'The agent\'s ability to remember previous conversations and user preferences',
      'Clear communication of what the agent knows, what it\'s doing, what it can do next, and what it cannot do',
      'The technical status of servers and databases the agent connects to',
      'The agent\'s emotional intelligence and ability to detect user mood'
    ],
    correctAnswer: 1,
    explanation: 'The document defines agent state awareness as the interface clearly communicating "what the agent knows, what it\'s currently doing, what it can do next, and what it cannot do." This includes showing "the agent\'s current context, available tools, and memory" to transform user confidence.'
  },
  {
    id: 'q5',
    question: 'How should error handling and recovery be designed differently for agent interfaces compared to traditional software?',
    options: [
      'Agent interfaces should hide all errors to avoid confusing users',
      'Use simple error codes and technical messages like traditional software',
      'Support graceful degradation and collaborative problem-solving, explaining what went wrong, what was accomplished, and offering concrete next steps',
      'Automatically restart the agent process without informing the user'
    ],
    correctAnswer: 2,
    explanation: 'The document emphasizes that agent error handling should "support graceful degradation and collaborative problem-solving. Instead of dead-end error messages, design interfaces that explain what went wrong in plain language, show what was accomplished before the failure, and offer concrete next steps."'
  },
  {
    id: 'q6',
    question: 'According to the document, what is the ultimate test of an intuitive human-agent interface?',
    options: [
      'Whether it can process requests faster than competing agent systems',
      'Whether users can accomplish their goals with minimal friction while maintaining full understanding and control of what the agent is doing',
      'Whether it supports the maximum number of concurrent users without performance degradation',
      'Whether it can integrate with the most external systems and databases'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The ultimate test of an intuitive human-agent interface is whether users can accomplish their goals with minimal friction while maintaining full understanding and control of what the agent is doing. It\'s a delicate balance between automation and transparency, between conversational fluidity and structured precision, between agent autonomy and human oversight."'
  }
];

