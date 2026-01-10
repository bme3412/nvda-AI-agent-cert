import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is AI agent memory and how does it differ from traditional AI models?',
    options: [
      'A hardware component that provides additional storage capacity for large language models during inference',
      'A software library that enables AI models to access external databases and knowledge repositories',
      'An artificial intelligence system\'s ability to store and recall past experiences to improve decision-making, unlike traditional models that process each task independently',
      'A training technique that helps AI models memorize large datasets more efficiently during the learning process'
    ],
    correctAnswer: 2,
    explanation: 'AI agent memory refers to an artificial intelligence system\'s ability to store and recall past experiences to improve decision-making, perception and overall performance. Unlike traditional AI models that process each task independently, AI agents with memory can retain context and recognize patterns over time.'
  },
  {
    id: 'q2',
    question: 'What is one of the biggest challenges in AI memory design mentioned in the document?',
    options: [
      'Ensuring perfect accuracy in all stored memories without any information degradation over time',
      'Optimizing retrieval efficiency, as storing excessive data can lead to slower response times',
      'Providing unlimited storage capacity for all possible past experiences and interactions',
      'Automatically organizing memories into hierarchical categories without human intervention'
    ],
    correctAnswer: 1,
    explanation: 'One of the biggest challenges in AI memory design is optimizing retrieval efficiency, as storing excessive data can lead to slower response times, requiring careful balance between memory completeness and system performance.'
  },
  {
    id: 'q3',
    question: 'How do memory systems enable AI agents to go beyond simple reflex behaviors?',
    options: [
      'Through faster processing speeds that enable real-time decision-making in complex environments',
      'By providing access to larger datasets and more comprehensive training information',
      'Through improved natural language processing capabilities for better user communication',
      'By allowing agents to learn patterns, adapt to user behavior, and optimize performance like smart thermostats vs. basic thermostats'
    ],
    correctAnswer: 3,
    explanation: 'Memory systems allow AI agents to go beyond simple reflex behaviors by enabling learning from patterns, adapting to user behavior, and optimizing performance, as exemplified by smart thermostats that learn and adapt versus basic thermostats that operate without memory.'
  },
  {
    id: 'q4',
    question: 'What key benefits does AI agent memory provide for intelligent system development?',
    options: [
      'Enhanced contextual understanding, personalization capabilities, continuous learning, pattern recognition, and efficiency improvements',
      'Reduced computational costs, simplified programming interfaces, and guaranteed accuracy in all applications',
      'Unlimited scalability, perfect memory retention, and instant access to all historical information',
      'Complete automation of decision-making processes without any human oversight or intervention'
    ],
    correctAnswer: 0,
    explanation: 'AI agent memory provides enhanced contextual understanding for coherent interactions, personalization based on historical data, continuous learning and adaptation, pattern recognition across time, and efficiency improvements through stored procedures and skills.'
  },
  {
    id: 'q5',
    question: 'How is short-term memory (STM) typically implemented in AI agents?',
    options: [
      'Through permanent storage in distributed databases with real-time synchronization across systems',
      'Using rolling buffers or context windows that hold limited recent data before being overwritten',
      'Via cloud-based storage systems that automatically backup all recent interactions',
      'Using specialized neural networks trained exclusively for memory storage and retrieval'
    ],
    correctAnswer: 1,
    explanation: 'Short-term memory (STM) is typically implemented using rolling buffers or context windows that hold limited recent data before being overwritten, enabling agents to remember recent inputs for immediate decision-making while maintaining computational efficiency.'
  },
  {
    id: 'q6',
    question: 'What storage mechanisms are used for implementing long-term memory (LTM) in AI agents?',
    options: [
      'Only temporary cache systems that are cleared at the end of each user session',
      'Exclusively in-memory storage that relies on system RAM for all historical information',
      'Permanent storage through databases, knowledge graphs, or vector embeddings for cross-session information retention',
      'File-based storage using plain text documents without any indexing or search capabilities'
    ],
    correctAnswer: 2,
    explanation: 'Long-term memory (LTM) uses permanent storage through databases, knowledge graphs, or vector embeddings, enabling agents to store and recall information across different sessions for personalization and intelligence development over time.'
  },
  {
    id: 'q7',
    question: 'How does episodic memory function in AI agents and what does it support?',
    options: [
      'Stores only the most recent interactions and automatically deletes older information to save storage space',
      'Focuses exclusively on successful outcomes while ignoring failed attempts and negative experiences',
      'Maintains general knowledge and facts without any connection to specific events or experiences',
      'Enables agents to recall specific past experiences for case-based reasoning, learning from past events to make better future decisions'
    ],
    correctAnswer: 3,
    explanation: 'Episodic memory enables agents to recall specific past experiences, similar to human event memory, supporting case-based reasoning where agents learn from past events to make better future decisions through logging key events, actions, and outcomes.'
  },
  {
    id: 'q8',
    question: 'What type of information does semantic memory store and how is it typically implemented?',
    options: [
      'Stores structured factual knowledge like facts, definitions, and rules using knowledge bases, symbolic AI, or vector embeddings',
      'Contains only personal user preferences and customization settings for individual agent behavior',
      'Focuses on procedural information and step-by-step instructions for task completion',
      'Maintains emotional and contextual information about user interactions and relationship building'
    ],
    correctAnswer: 0,
    explanation: 'Semantic memory stores structured factual knowledge including facts, definitions, and rules rather than specific events, implemented using knowledge bases, symbolic AI, or vector embeddings for efficient information processing and reasoning.'
  },
  {
    id: 'q9',
    question: 'How does procedural memory help AI agents improve their efficiency?',
    options: [
      'Provides real-time access to external databases and knowledge repositories during task execution',
      'Stores skills, rules, and learned behaviors enabling automatic task performance without explicit reasoning each time',
      'Maintains detailed logs of all past decisions and outcomes for comprehensive audit trails',
      'Enables perfect recall of all previous conversations and interactions without any information loss'
    ],
    correctAnswer: 1,
    explanation: 'Procedural memory stores skills, rules, and learned behaviors enabling automatic task performance without explicit reasoning each time, helping agents improve efficiency by automating complex action sequences and reducing computation time for repeated tasks.'
  },
  {
    id: 'q10',
    question: 'How do agents typically learn procedures according to the document?',
    options: [
      'By downloading pre-built skill packages from centralized repositories and installing them automatically',
      'Through manual programming where developers explicitly code all possible procedures and behaviors',
      'Via direct knowledge transfer from other AI systems using standardized communication protocols',
      'Through training, often using reinforcement learning to optimize performance over time and reduce computation for repeated tasks'
    ],
    correctAnswer: 3,
    explanation: 'Agents learn procedures through training, often using reinforcement learning to optimize performance over time, which helps reduce computation time for repeated tasks by automating complex action sequences through learned experience.'
  },
  {
    id: 'q11',
    question: 'What role does LangChain play in implementing memory for AI agents?',
    options: [
      'Facilitates integration of memory, APIs, and reasoning workflows combined with vector databases for storing past interactions',
      'Provides only basic file storage capabilities without any advanced memory management features',
      'Serves as a proprietary database system exclusively for large enterprise AI deployments',
      'Functions as a simple logging tool that records agent activities without any retrieval capabilities'
    ],
    correctAnswer: 0,
    explanation: 'LangChain facilitates integration of memory, APIs, and reasoning workflows for building memory-enabled AI agents, and when combined with vector databases, agents can efficiently store and retrieve large volumes of past interactions for more coherent responses.'
  },
  {
    id: 'q12',
    question: 'How does LangGraph enhance AI agent memory capabilities?',
    options: [
      'Provides only basic visualization tools for displaying memory usage statistics and performance metrics',
      'Allows developers to construct hierarchical memory graphs, improving agents\' ability to track dependencies and learn over time',
      'Serves as a simple database connector without any advanced graph-based memory management',
      'Functions exclusively as a debugging tool for identifying memory leaks and performance issues'
    ],
    correctAnswer: 1,
    explanation: 'LangGraph allows developers to construct hierarchical memory graphs, improving agents\' ability to track dependencies and learn over time by providing structured representations of memory relationships and interactions.'
  },
  {
    id: 'q13',
    question: 'What role do open source frameworks play in memory-enhanced AI agent development?',
    options: [
      'Serve only as basic documentation repositories without any practical implementation tools or resources',
      'Focus exclusively on theoretical research without providing any working code or implementation examples',
      'Provide only commercial licensing options without any free or community-driven development resources',
      'Have accelerated development by providing tools and templates for integrating memory into AI workflows on platforms like GitHub'
    ],
    correctAnswer: 3,
    explanation: 'Open source frameworks have accelerated memory-enhanced AI agent development by providing tools and templates for integrating memory into AI workflows, with platforms like GitHub hosting repositories that facilitate practical implementation.'
  },
  {
    id: 'q14',
    question: 'How does Hugging Face contribute to AI memory system development?',
    options: [
      'Offers pretrained models that can be fine-tuned with memory components to improve recall capabilities',
      'Provides only basic data storage services without any model development or training capabilities',
      'Serves exclusively as a model hosting platform without any memory-specific tools or resources',
      'Functions only as a documentation repository for memory research without practical implementation support'
    ],
    correctAnswer: 0,
    explanation: 'Hugging Face offers pretrained models that can be fine-tuned with memory components to improve recall capabilities, contributing practical tools for developing memory-enhanced AI systems alongside the broader ecosystem of available models.'
  },
  {
    id: 'q15',
    question: 'Why is Python mentioned as a primary choice for implementing AI memory systems?',
    options: [
      'Is the only programming language that can handle the complex mathematical operations required for memory systems',
      'Offers exclusive licensing agreements with major AI companies for memory system development',
      'Provides built-in memory management that automatically handles all AI agent memory requirements without programming',
      'Provides libraries for handling orchestration, memory storage, and retrieval mechanisms making it ideal for AI memory implementation'
    ],
    correctAnswer: 3,
    explanation: 'Python is a primary choice for implementing AI memory systems because it provides comprehensive libraries for handling orchestration, memory storage, and retrieval mechanisms, making it well-suited for the complex requirements of memory-enhanced AI development.'
  }
];