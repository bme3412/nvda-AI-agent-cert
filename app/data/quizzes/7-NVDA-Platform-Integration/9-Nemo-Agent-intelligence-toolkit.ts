import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA Agent Intelligence Toolkit and what does it provide?',
    options: [
      'A flexible lightweight framework for connecting enterprise agents to data sources and tools across heterogeneous ecosystems',
      'A specialized training platform for developing custom large language models for agent applications',
      'A cloud-based service for deploying and scaling agent workloads across distributed infrastructure',
      'A security framework for protecting agent systems from adversarial attacks and data breaches'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA Agent Intelligence Toolkit represents a flexible lightweight framework for connecting enterprise agents to data sources and tools across heterogeneous agent framework ecosystems.'
  },
  {
    id: 'q2',
    question: 'How does the toolkit approach integration with existing agent frameworks?',
    options: [
      'By requiring complete replacement of existing frameworks with NVIDIA-specific implementations',
      'Through operating alongside existing frameworks without requiring framework replacement or extensive refactoring',
      'By automatically converting all existing agents to use standardized interfaces and protocols',
      'Through mandatory migration to cloud-based deployment platforms for optimal performance'
    ],
    correctAnswer: 1,
    explanation: 'The integration architecture operates alongside and around existing agentic frameworks without requiring framework replacement or extensive refactoring, preserving existing technology stack investments.'
  },
  {
    id: 'q3',
    question: 'What agent frameworks does the toolkit support through its integration architecture?',
    options: [
      'Only NVIDIA-developed frameworks and proprietary enterprise solutions',
      'LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, custom implementations, and Python-based agents',
      'Exclusively open-source frameworks with community-driven development and support',
      'Only cloud-native frameworks designed for distributed agent deployments'
    ],
    correctAnswer: 1,
    explanation: 'The architecture supports diverse frameworks including LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, custom enterprise implementations, and simple Python-based agents.'
  },
  {
    id: 'q4',
    question: 'What principles organize the toolkit\'s composability approach?',
    options: [
      'Agents, tools, and workflows as reusable function calls combining into complex applications through standardized interfaces',
      'Hierarchical inheritance structures with specialized classes for different agent capabilities',
      'Event-driven architectures using message passing and asynchronous communication patterns',
      'Microservices decomposition with container-based deployment and orchestration'
    ],
    correctAnswer: 0,
    explanation: 'Composability principles organize agents, tools, and workflows as reusable function calls that combine into complex software applications through standardized interfaces.'
  },
  {
    id: 'q5',
    question: 'How does Model Context Protocol (MCP) support enable bidirectional interoperability?',
    options: [
      'By providing automatic protocol translation between different agent communication standards',
      'By implementing universal middleware that converts all tool interfaces to standardized formats',
      'Through real-time synchronization of tool states across distributed agent deployments',
      'Through toolkit functioning as MCP client accessing remote servers and as MCP server publishing native capabilities'
    ],
    correctAnswer: 3,
    explanation: 'MCP support enables bidirectional tool interoperability where toolkit functions as MCP client accessing tools served by remote MCP servers and as MCP server publishing toolkit-native capabilities.'
  },
  {
    id: 'q6',
    question: 'What advantages does framework compatibility provide for organizations?',
    options: [
      'Automatic performance optimization and cost reduction without any configuration changes',
      'Preservation of existing investments while enabling enhancement through toolkit capabilities without replatforming',
      'Guaranteed compatibility with all future framework versions and updates',
      'Built-in security and compliance features that meet all regulatory requirements'
    ],
    correctAnswer: 1,
    explanation: 'Framework compatibility preserves existing investments in agent development infrastructure, training, and operational knowledge while enabling enhancement through toolkit capabilities without costly replatforming initiatives.'
  },
  {
    id: 'q7',
    question: 'How do reusability advantages emerge from the toolkit\'s component libraries?',
    options: [
      'Through automatic code generation that creates custom components for each deployment',
      'Via pre-built agents, tools, and workflows that accelerate development by eliminating redundant implementation',
      'By providing universal templates that work identically across all possible use cases',
      'Through mandatory standardization that forces all implementations to use identical patterns'
    ],
    correctAnswer: 1,
    explanation: 'Reusability advantages emerge from component libraries providing pre-built agents, tools, and workflows that accelerate development by eliminating redundant implementation effort and enabling building once and deploying across scenarios.'
  },
  {
    id: 'q8',
    question: 'What does rapid development acceleration result from in the toolkit approach?',
    options: [
      'Automatic deployment and scaling without any manual configuration or management',
      'Starting with pre-built implementations customized to requirements rather than building from scratch',
      'Built-in artificial intelligence that writes code automatically based on natural language descriptions',
      'Elimination of all testing requirements through guaranteed correctness of generated code'
    ],
    correctAnswer: 1,
    explanation: 'Rapid development acceleration results from starting with pre-built implementations customized to specific requirements rather than building from scratch, allowing teams to focus on unique requirements.'
  },
  {
    id: 'q9',
    question: 'What profiling capabilities does the toolkit provide?',
    options: [
      'Basic performance metrics limited to overall system throughput and response times',
      'Only high-level monitoring suitable for production operations without development insights',
      'Visibility into workflow execution at multiple granularity levels with token tracking and timing measurements',
      'Specialized profiling focused exclusively on memory usage and resource allocation'
    ],
    correctAnswer: 2,
    explanation: 'Profiling capabilities provide visibility into workflow execution characteristics at multiple granularity levels from complete workflows down to individual tools, with token tracking and timing measurements.'
  },
  {
    id: 'q10',
    question: 'How does observability integration ensure compatibility with existing infrastructure?',
    options: [
      'By requiring migration to NVIDIA-specific monitoring and alerting platforms',
      'Through OpenTelemetry-compatible tooling ensuring compatibility with existing observability infrastructure',
      'By automatically adapting to any monitoring system without any configuration requirements',
      'Through proprietary integration APIs that work exclusively with enterprise monitoring solutions'
    ],
    correctAnswer: 1,
    explanation: 'Observability integration enables monitoring through OpenTelemetry-compatible tooling, ensuring compatibility with existing observability infrastructure and preventing vendor lock-in while enabling powerful monitoring.'
  },
  {
    id: 'q11',
    question: 'What do evaluation capabilities validate in agentic workflows?',
    options: [
      'Only basic functional correctness without any quality or accuracy assessment',
      'Workflow accuracy through built-in evaluation tools supporting automated metrics and human evaluation',
      'Exclusively performance characteristics like latency and throughput optimization',
      'Only security and compliance requirements without functional validation'
    ],
    correctAnswer: 1,
    explanation: 'Evaluation capabilities validate and maintain agentic workflow accuracy through built-in evaluation tools supporting both automated metric computation and human evaluation workflows.'
  },
  {
    id: 'q12',
    question: 'What user interface components does the toolkit provide?',
    options: [
      'Advanced graphical design tools for creating custom agent interaction experiences',
      'Chat-based interaction and visualization capabilities for testing, debugging, and demonstration',
      'Only command-line interfaces suitable for developer and administrative use',
      'Comprehensive business intelligence dashboards for executive reporting and analytics'
    ],
    correctAnswer: 1,
    explanation: 'User interface components provide chat-based interaction with agents and visualization capabilities exposing workflow execution patterns, supporting development, testing, debugging, and demonstration.'
  },
  {
    id: 'q13',
    question: 'How do abstraction layers provide unified interfaces over heterogeneous implementations?',
    options: [
      'By forcing all implementations to use identical programming languages and data structures',
      'By automatically converting all frameworks to use standardized internal representations',
      'Through requiring all implementations to migrate to cloud-based deployment architectures',
      'Through enabling toolkit capabilities to operate consistently regardless of underlying framework diversity'
    ],
    correctAnswer: 3,
    explanation: 'Abstraction layers provide unified interfaces over heterogeneous implementations, enabling toolkit capabilities to operate consistently regardless of underlying framework diversity.'
  },
  {
    id: 'q14',
    question: 'What does long-term memory independence ensure for toolkit operation?',
    options: [
      'Automatic memory optimization and garbage collection without any manual management',
      'Operation without commitment to particular memory implementations, supporting diverse backends',
      'Built-in backup and recovery capabilities for all stored agent memory and state',
      'Guaranteed memory persistence across all types of system failures and restarts'
    ],
    correctAnswer: 1,
    explanation: 'Long-term memory independence ensures toolkit operation without commitment to particular memory implementations, supporting diverse memory backends from vector databases to graph databases to custom persistence layers.'
  },
  {
    id: 'q15',
    question: 'How does data source flexibility support enterprise data access?',
    options: [
      'Through requiring all data to be migrated to toolkit-specific storage formats and representations',
      'Via connections to diverse enterprise data through abstraction over storage systems without requiring migration',
      'By automatically creating data lakes that consolidate all enterprise information sources',
      'Through mandatory adoption of standardized data models and query interfaces across all systems'
    ],
    correctAnswer: 1,
    explanation: 'Data source flexibility supports connections to diverse enterprise data through abstraction over specific storage systems, enabling direct connectivity without requiring data migration or format standardization.'
  }
];