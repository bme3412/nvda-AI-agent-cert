import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what are the two main approaches to multi-agent orchestration, and how do they differ?',
    options: [
      'Sequential and parallel execution based on timing requirements',
      'Centralized orchestration with a conductor agent managing everything, and distributed orchestration where agents coordinate among themselves',
      'Synchronous and asynchronous communication patterns for message handling',
      'Hierarchical and flat organizational structures for agent relationships'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "There are two main approaches... The first is centralized orchestration, where you have a conductor agent or orchestration layer that acts like a project manager... The alternative is distributed orchestration, where there\'s no single boss. Instead, agents coordinate among themselves through direct communication, negotiation, and shared protocols."'
  },
  {
    id: 'q2',
    question: 'What are the different workflow patterns described for multi-agent task execution?',
    options: [
      'Linear, circular, and branching patterns based on data flow',
      'Sequential, parallel, conditional, and iterative execution patterns based on task dependencies and logic',
      'Push, pull, and hybrid patterns based on how agents receive work',
      'Master-slave, peer-to-peer, and client-server patterns based on control relationships'
    ],
    correctAnswer: 1,
    explanation: 'The document describes four workflow patterns: "sequential execution where Agent A completes its task, passes results to Agent B... Parallel execution runs multiple agents simultaneously when tasks are independent... Conditional workflows add decision points where the orchestrator chooses different paths based on results... Iterative workflows involve cycles where agents repeat tasks until some condition is met."'
  },
  {
    id: 'q3',
    question: 'What is the purpose of modeling workflows as DAGs (Directed Acyclic Graphs) in multi-agent orchestration?',
    options: [
      'To encrypt communication between agents and ensure data security',
      'To provide a formal way to model dependencies, determine parallel execution opportunities, identify critical paths, and detect deadlock cycles',
      'To compress workflow data and reduce storage requirements for orchestration systems',
      'To automatically generate user interfaces for monitoring agent activities'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that DAGs "provides a formal way to model complex orchestration. Each task is a node, and edges between nodes represent dependencies... By modeling your workflow as a DAG, you can programmatically determine which tasks can run in parallel, identify the critical path that determines minimum completion time, and detect dependency cycles that would create deadlock."'
  },
  {
    id: 'q4',
    question: 'According to the document, what makes error handling and recovery in multi-agent workflows particularly complex?',
    options: [
      'Multi-agent systems use different programming languages that are incompatible',
      'Failures cascade and propagate, requiring compensating transactions, retry logic, and circuit breakers to handle interconnected failures',
      'Agents operate in different time zones causing synchronization issues',
      'Multi-agent systems require more computational resources than single-agent systems'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "Error handling and recovery in multi-agent workflows is exponentially more complex than single-agent systems because failures cascade and propagate." It describes solutions including "compensating transactions—the ability to undo work that\'s already been done," "retry logic with backoff," and "circuit breakers that detect when an agent is persistently failing and route work around it."'
  },
  {
    id: 'q5',
    question: 'What is the human-in-the-loop pattern, and why is it important in orchestration?',
    options: [
      'A requirement that humans must approve every action taken by any agent',
      'A pattern where orchestration pauses for human approval before proceeding with expensive or conflicting decisions, with timeout handling',
      'A system where humans manually route all messages between agents',
      'A backup system that activates when all agents fail simultaneously'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "The human-in-the-loop pattern is an important orchestration consideration... Sometimes you want the orchestrator to pause and get human approval before proceeding—perhaps before making an expensive hotel booking or when agent recommendations conflict significantly. This requires workflow states that represent \'waiting for human input,\' mechanisms to surface decisions to users in understandable ways, and the ability to resume orchestration once humans provide feedback."'
  }
];

