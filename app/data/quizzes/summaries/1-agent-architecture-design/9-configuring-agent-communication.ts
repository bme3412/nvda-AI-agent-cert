import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what is the foundation of any multi-agent communication system?',
    options: [
      'High-speed network connections and low-latency protocols',
      'The message structure using standardized formats like JSON with specific fields for sender, recipient, message type, content, and metadata',
      'Advanced natural language processing capabilities for conversational interactions',
      'Centralized databases that store all agent information and communication logs'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The foundation of any multi-agent communication system is the message structure. Agents need a common language—not just natural language, but a standardized way of packaging information. The most common approach uses structured formats like JSON, where each message contains specific fields: who sent it, who should receive it, what type of message it is, the actual content, and often a timestamp and unique identifier."'
  },
  {
    id: 'q2',
    question: 'What are the different communication patterns described for agent interactions, and when are they used?',
    options: [
      'Only direct point-to-point communication between two agents with established relationships',
      'Direct point-to-point, broadcast, publish-subscribe, request-reply, and message queue patterns for different interaction scenarios',
      'Synchronous communication only, to ensure immediate responses and coordination',
      'Natural language conversations with automatic translation between different agent vocabularies'
    ],
    correctAnswer: 1,
    explanation: 'The document describes multiple patterns: "direct point-to-point communication," "broadcast communication where one agent sends information to multiple other agents simultaneously," "publish-subscribe patterns where agents subscribe to specific topics," "request-reply patterns for synchronous interactions," and "message queue patterns for asynchronous work distribution."'
  },
  {
    id: 'q3',
    question: 'What is the purpose of service discovery and registration in multi-agent systems?',
    options: [
      'To monitor agent performance and automatically remove poorly performing agents',
      'To allow agents to find each other and understand what capabilities each agent offers through a registry service',
      'To encrypt all communications between agents for security purposes',
      'To schedule and coordinate when different agents can communicate to avoid conflicts'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that service discovery and registration provides "a way for agents to find each other and understand what capabilities each agent offers. This typically involves a registry service—think of it as a phone book for agents. When an agent starts up, it registers itself with this service, advertising its capabilities... When another agent needs web search capabilities, it queries the registry, discovers available search agents, and can then establish communication."'
  },
  {
    id: 'q4',
    question: 'According to the document, what are the main benefits of using message brokers in multi-agent communication?',
    options: [
      'They eliminate the need for error handling and fault tolerance mechanisms',
      'They provide decoupling, message persistence when recipients are offline, and complex routing logic capabilities',
      'They automatically translate between different agent programming languages',
      'They ensure all messages are delivered instantly without any queuing or delays'
    ],
    correctAnswer: 1,
    explanation: 'The document states that message brokers provide several benefits: "First, it decouples agents—the sender doesn\'t need to know where the recipient is or even if it\'s currently running. Second, it enables persistence—if the recipient is offline, the broker can queue messages for later delivery. Third, it facilitates more complex routing logic, like sending one message to multiple recipients, filtering messages based on content, or transforming message formats on the fly."'
  },
  {
    id: 'q5',
    question: 'What is conversational coherence, and why is it unique to AI agents versus traditional distributed systems?',
    options: [
      'The ability to maintain consistent performance across multiple conversations simultaneously',
      'Ensuring that multiple agents collaborating on a user request maintain conversational context across handoffs so users experience seamless coordination',
      'The requirement that all agents use the same natural language processing model',
      'The need for agents to complete conversations within a specific time limit'
    ],
    correctAnswer: 1,
    explanation: 'The document defines conversational coherence as a challenge where "multiple agents collaborate on a user request, the user shouldn\'t experience it as talking to a bunch of disconnected robots. The agents need to maintain conversational context across handoffs... This often requires agents to pass not just the immediate query but also relevant conversation state, user preferences, and the reasoning that led to involving the second agent. The goal is seamless collaboration that feels to the user like working with a coordinated team."'
  }
];

