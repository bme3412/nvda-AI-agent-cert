import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA NeMo Agent Toolkit and what does it provide?',
    options: [
      'A specialized training platform for developing large language models exclusively for NVIDIA hardware',
      'A cloud-based service for automated deployment of machine learning models at enterprise scale',
      'A flexible lightweight framework for connecting enterprise agents to data sources and tools across heterogeneous ecosystems',
      'A security framework for protecting agent systems from adversarial attacks and unauthorized access'
    ],
    correctAnswer: 2,
    explanation: 'NVIDIA NeMo Agent Toolkit represents a flexible lightweight framework for connecting enterprise agents to data sources and tools across heterogeneous agent framework ecosystems.'
  },
  {
    id: 'q2',
    question: 'How does the toolkit achieve framework-agnostic design?',
    options: [
      'By requiring all frameworks to use identical programming languages and standardized interfaces',
      'Through automatic conversion of existing agents to a single unified framework architecture',
      'Through preserving technology stack investments while enabling enhanced capabilities via standardized interfaces',
      'By forcing migration to NVIDIA-specific development tools and proprietary agent implementations'
    ],
    correctAnswer: 2,
    explanation: 'Framework-agnostic design preserves existing technology stack investments while enabling enhanced capabilities through standardized interfaces abstracting framework-specific implementation details.'
  },
  {
    id: 'q3',
    question: 'What agent frameworks does the toolkit support through non-invasive integration?',
    options: [
      'LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, Google ADK, and custom implementations',
      'Only NVIDIA-developed frameworks and enterprise-licensed proprietary solutions',
      'Exclusively open-source frameworks with community-driven development and maintenance',
      'Only cloud-native frameworks designed specifically for distributed agent deployments'
    ],
    correctAnswer: 0,
    explanation: 'The integration architecture operates alongside existing frameworks including LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, Google Agent Development Kit, custom enterprise implementations, and Python-based agents.'
  },
  {
    id: 'q4',
    question: 'What principles guide the composability approach in the toolkit?',
    options: [
      'Agents, tools, and workflows as reusable function calls combining through standardized interfaces',
      'Event-driven architectures using message passing and asynchronous communication patterns',
      'Hierarchical inheritance structures with specialized classes for different agent capabilities',
      'Microservices decomposition with container-based deployment and orchestration management'
    ],
    correctAnswer: 0,
    explanation: 'Composability principles organize agents, tools, and workflows as reusable function calls that combine into complex software applications through standardized interfaces.'
  },
  {
    id: 'q5',
    question: 'How does Model Context Protocol (MCP) support enable bidirectional tool interoperability?',
    options: [
      'Through toolkit functioning as both MCP client accessing remote servers and MCP server publishing native capabilities',
      'By providing automatic protocol translation between different agent communication standards',
      'Through real-time synchronization of tool states across distributed agent deployment environments',
      'By implementing universal middleware converting all tool interfaces to standardized formats'
    ],
    correctAnswer: 0,
    explanation: 'MCP support enables bidirectional tool interoperability where toolkit functions as MCP client accessing remote servers and as MCP server publishing toolkit-native capabilities.'
  },
  {
    id: 'q6',
    question: 'What reusability advantages emerge from the toolkit\'s component libraries?',
    options: [
      'Pre-built agents, tools, and workflows that eliminate redundant implementation effort and accelerate development',
      'Automatic code generation creating custom components for each specific deployment scenario',
      'Universal templates that work identically across all possible use cases without customization',
      'Mandatory standardization forcing all implementations to use identical patterns and structures'
    ],
    correctAnswer: 0,
    explanation: 'Reusability advantages emerge from component libraries providing pre-built agents, tools, and workflows that accelerate development by eliminating redundant implementation effort.'
  },
  {
    id: 'q7',
    question: 'How does experimentation flexibility benefit organizations using the toolkit?',
    options: [
      'Through enabling exploration of approaches and architectures without extensive implementation overhead',
      'By eliminating all testing requirements through guaranteed correctness of generated implementations',
      'By providing built-in artificial intelligence that optimizes all configurations automatically',
      'Through mandatory adoption of proven patterns that eliminate risk from experimental approaches'
    ],
    correctAnswer: 0,
    explanation: 'Experimentation flexibility enables freely exploring different approaches, architectures, and optimizations without extensive implementation overhead or framework constraints.'
  },
  {
    id: 'q8',
    question: 'What does comprehensive profiling capture for performance analysis?',
    options: [
      'Token tracking, timing measurements, and granular metrics across workflows, agents, and tools',
      'Only high-level system metrics without detailed component-level visibility into execution',
      'Exclusively error logs and failure notifications for debugging and troubleshooting purposes',
      'Basic usage statistics for billing allocation and resource utilization reporting'
    ],
    correctAnswer: 0,
    explanation: 'Comprehensive profiling capabilities track execution characteristics across complete workflows down through individual tools and agents, with token tracking and timing measurements.'
  },
  {
    id: 'q9',
    question: 'How does integration flexibility enable selective instrumentation?',
    options: [
      'Through enabling instrumentation at desired granularity levels based on monitoring requirements',
      'By requiring comprehensive instrumentation across all components for complete visibility',
      'By automatically determining optimal instrumentation without any manual configuration',
      'Through mandatory instrumentation policies that ensure consistent monitoring across deployments'
    ],
    correctAnswer: 0,
    explanation: 'Integration flexibility enables selective instrumentation where components wrap to desired granularity levels based on monitoring requirements and analysis objectives.'
  },
  {
    id: 'q10',
    question: 'What observability platform integrations does the toolkit provide?',
    options: [
      'Phoenix for AI-specific monitoring, Weave for experiment tracking, and Langfuse for LLM observability',
      'Only generic OpenTelemetry compatibility without specialized platform optimizations',
      'Exclusively proprietary NVIDIA monitoring solutions requiring vendor-specific infrastructure',
      'Basic logging capabilities without integration to external monitoring or analytics platforms'
    ],
    correctAnswer: 0,
    explanation: 'Observability platform integration supports dedicated connections to Phoenix for AI-specific monitoring, Weave for experiment tracking, and Langfuse for LLM application observability.'
  },
  {
    id: 'q11',
    question: 'What does automatic hyperparameter tuning optimize across?',
    options: [
      'Accuracy maximization, cost minimization, latency reduction, and custom domain-specific metrics',
      'Only accuracy maximization without considering computational costs or resource constraints',
      'Exclusively infrastructure costs and resource allocation without quality considerations',
      'Basic performance metrics like throughput without considering accuracy or specialized requirements'
    ],
    correctAnswer: 0,
    explanation: 'Hyperparameter optimization considers multiple objectives simultaneously including accuracy maximization, cost minimization, latency reduction, and custom metrics addressing domain-specific requirements.'
  },
  {
    id: 'q12',
    question: 'How does prompt optimization improve agent effectiveness?',
    options: [
      'By systematic prompt engineering guided by performance metrics measuring accuracy, cost, and latency',
      'Through automatic prompt generation from high-level specifications without manual intervention',
      'Through mandatory adoption of standardized prompt templates that work across all applications',
      'By eliminating the need for prompt engineering through intelligent default configurations'
    ],
    correctAnswer: 0,
    explanation: 'Prompt optimization refines agent instructions improving effectiveness through systematic prompt engineering guided by performance metrics, experimenting with variations and measuring impact.'
  },
  {
    id: 'q13',
    question: 'What evaluation capabilities does the toolkit provide for quality assurance?',
    options: [
      'Systematic assessment through automated metrics and human evaluation for accuracy and groundedness',
      'Only basic functional correctness testing without quality or accuracy assessment capabilities',
      'Exclusively automated evaluation without support for subjective judgment or expert assessment',
      'Simple binary success/failure indicators without detailed quality measurement or analysis'
    ],
    correctAnswer: 0,
    explanation: 'Evaluation framework provides systematic assessment of accuracy, groundedness, and alignment through built-in tools supporting both automated metrics and human evaluation workflows.'
  },
  {
    id: 'q14',
    question: 'How do Function Groups simplify management of related capabilities?',
    options: [
      'Through organizing related functions together sharing configuration, context, and resources',
      'By automatically generating optimal groupings based on usage patterns and performance analytics',
      'By enforcing identical interfaces across all functions within each defined group',
      'Through automatic load balancing that distributes function calls across group members'
    ],
    correctAnswer: 0,
    explanation: 'Function Groups organize related functions together sharing configuration, context, and resources, simplifying management of cohesive capability sets and reducing configuration duplication.'
  },
  {
    id: 'q15',
    question: 'What does MCP authorization support enable for enterprise deployments?',
    options: [
      'Secure tool access with appropriate access controls when using streamable HTTP protocol',
      'Automatic security policy generation based on organizational structure and roles',
      'Built-in compliance reporting and audit logging for regulatory requirement satisfaction',
      'Universal authentication that works with any identity provider without configuration'
    ],
    correctAnswer: 0,
    explanation: 'Authorization support for MCP interactions ensures secure tool access when using streamable HTTP protocol, enabling enterprise deployments with appropriate access controls integrated with existing security infrastructure.'
  }
];