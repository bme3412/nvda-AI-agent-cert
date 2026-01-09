import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA NeMo Agent Toolkit and what does it enable?',
    options: [
      'A hardware acceleration platform for training large language models on GPU clusters',
      'An open-source framework for building, profiling, and optimizing AI agent systems with cross-framework integration',
      'A cloud-based service for deploying and managing machine learning models at scale',
      'A data preprocessing pipeline for preparing training datasets for agent development'
    ],
    correctAnswer: 1,
    explanation: 'NVIDIA NeMo Agent Toolkit represents an open-source framework for building, profiling, and optimizing AI agent systems across diverse agent frameworks, enabling unified cross-framework integration and comprehensive observability.'
  },
  {
    id: 'q2',
    question: 'How does the toolkit operate as a universal integration layer?',
    options: [
      'By replacing all existing agent frameworks with a unified NVIDIA-specific implementation',
      'Through supporting major agent frameworks like LangChain, CrewAI, and custom implementations via standardized interfaces',
      'By requiring all agents to be rewritten using proprietary NVIDIA development tools',
      'Through automatic conversion of existing agents to a single standardized framework'
    ],
    correctAnswer: 1,
    explanation: 'The framework operates as universal integration layer supporting major agent frameworks including LangChain, CrewAI, and custom implementations through standardized interfaces that enable mixing frameworks within single workflows.'
  },
  {
    id: 'q3',
    question: 'What is the significance of framework-agnostic design in the toolkit?',
    options: [
      'It requires all frameworks to use identical programming languages and coding standards',
      'It automatically optimizes performance across all frameworks without manual configuration',
      'Framework-agnostic design allows selection of optimal frameworks for specific tasks while maintaining cohesive operation',
      'Framework independence eliminates the need for any specific agent development expertise'
    ],
    correctAnswer: 2,
    explanation: 'Framework-agnostic design allows selection of optimal frameworks for specific tasks while maintaining cohesive system operation, coordinated monitoring, and unified optimization across heterogeneous agent compositions.'
  },
  {
    id: 'q4',
    question: 'How does NeMo Agent Toolkit integrate within the broader NVIDIA NeMo software suite?',
    options: [
      'As a completely independent tool with no integration with other NVIDIA products',
      'It functions as component complementing capabilities for model training, evaluation, deployment, and safety enforcement',
      'Only through cloud-based APIs that require internet connectivity for all operations',
      'As a replacement for all other NeMo suite components in agent-focused deployments'
    ],
    correctAnswer: 1,
    explanation: 'NeMo Agent Toolkit functions as component within broader NVIDIA NeMo software suite, complementing capabilities for model training, evaluation, deployment, and safety enforcement through unified tooling.'
  },
  {
    id: 'q5',
    question: 'What does Model Context Protocol (MCP) support enable in the toolkit?',
    options: [
      'Automatic model compression and quantization for improved inference performance',
      'Integration with MCP-compliant tool ecosystems, allowing bidirectional tool sharing and access',
      'Enhanced security protocols for protecting model weights and inference data',
      'Real-time monitoring and alerting for production agent deployments'
    ],
    correctAnswer: 1,
    explanation: 'Model Context Protocol support enables toolkit integration with MCP-compliant tool ecosystems, allowing agents to access tools served by remote MCP servers and exposing toolkit-native tools to external agents.'
  },
  {
    id: 'q6',
    question: 'What development advantages does the toolkit provide?',
    options: [
      'Automatic code generation from high-level specifications without any manual development',
      'Configuration-driven agent composition, reusable component libraries, and framework flexibility for experimentation',
      'Built-in user interface design tools for creating custom agent interaction experiences',
      'Exclusive access to proprietary NVIDIA models not available through other channels'
    ],
    correctAnswer: 1,
    explanation: 'Development simplification emerges from configuration-driven agent composition enabling rapid prototyping, reusable component libraries reducing implementation effort, and framework flexibility supporting experimentation.'
  },
  {
    id: 'q7',
    question: 'What types of metrics does the observability framework capture?',
    options: [
      'Only basic performance metrics like latency and throughput without detailed insights',
      'Comprehensive telemetry capturing agent coordination, tool usage patterns, resource consumption, and workflow execution',
      'Exclusively financial metrics related to infrastructure costs and resource pricing',
      'Simple binary success/failure indicators for individual agent operations'
    ],
    correctAnswer: 1,
    explanation: 'Operational visibility advantages stem from comprehensive telemetry capturing granular metrics across agent coordination, tool usage patterns, computational resource consumption, and workflow execution characteristics.'
  },
  {
    id: 'q8',
    question: 'How does the toolkit enable performance optimization?',
    options: [
      'Through automatic algorithm replacement and model architecture modifications',
      'Via detailed profiling data identifying opportunities for parallelization, caching, and efficiency improvements',
      'By exclusively focusing on hardware upgrades and infrastructure scaling',
      'Through mandatory migration to NVIDIA-optimized model implementations'
    ],
    correctAnswer: 1,
    explanation: 'Performance optimization capabilities leverage detailed profiling data identifying opportunities for parallelization, caching, and computational efficiency improvements that reduce latency and increase throughput.'
  },
  {
    id: 'q9',
    question: 'What does the YAML configuration builder enable?',
    options: [
      'Automatic model training and fine-tuning based on specified performance targets',
      'Declarative agent system composition through universal descriptors for agents, tools, and workflows',
      'Real-time monitoring and alerting configuration for production deployments',
      'Integration with external databases and data sources for agent knowledge'
    ],
    correctAnswer: 1,
    explanation: 'YAML configuration builder enables declarative agent system composition through universal descriptors for agents, tools, and workflows without extensive imperative code, simplifying rapid prototyping.'
  },
  {
    id: 'q10',
    question: 'What purpose does the tool registry architecture serve?',
    options: [
      'Managing software licenses and compliance requirements for different tool implementations',
      'Providing version control and backup capabilities for agent development projects',
      'Organizing reusable collections of tools, pipelines, and agentic workflows accessible across deployments',
      'Handling authentication and authorization for tool access across different user groups'
    ],
    correctAnswer: 2,
    explanation: 'Tool registry architecture organizes reusable collections of tools, pipelines, and agentic workflows accessible across organizational deployments, providing access to best-available architectures and workflow components.'
  },
  {
    id: 'q11',
    question: 'How does framework interoperability benefit complex agent systems?',
    options: [
      'By enforcing identical interfaces and capabilities across all supported frameworks',
      'Through enabling mixing of agents from different frameworks within unified workflows based on their strengths',
      'By automatically converting all agents to use the highest-performing framework available',
      'Through eliminating the need for any framework-specific knowledge or expertise'
    ],
    correctAnswer: 1,
    explanation: 'Framework interoperability enables mixing agents from different frameworks within unified workflows, selecting optimal frameworks for specific tasks based on their strengths and design patterns.'
  },
  {
    id: 'q12',
    question: 'What does telemetry collection capture for comprehensive observability?',
    options: [
      'Per-agent resource consumption, tool invocation patterns, communication patterns, and workflow execution traces',
      'Only high-level system metrics without detailed component-level visibility',
      'Exclusively error logs and failure notifications for debugging purposes',
      'Basic usage statistics for billing and resource allocation purposes'
    ],
    correctAnswer: 0,
    explanation: 'Telemetry collection captures comprehensive execution metrics including per-agent resource consumption, tool invocation patterns and costs, inter-agent communication patterns, and workflow execution traces.'
  },
  {
    id: 'q13',
    question: 'What insights does performance profiling provide?',
    options: [
      'Computational bottlenecks, expensive operations, and optimization opportunities including parallelization and caching',
      'Only simple timing measurements without analysis of optimization opportunities',
      'Exclusively memory usage patterns without computational performance insights',
      'Basic throughput metrics without detailed component-level performance analysis'
    ],
    correctAnswer: 0,
    explanation: 'Performance profiling identifies computational bottlenecks, expensive operations consuming disproportionate resources, and optimization opportunities including parallelization potential and caching candidates.'
  },
  {
    id: 'q14',
    question: 'How does NVIDIA Accelerated Computing integration enhance the toolkit?',
    options: [
      'By providing specialized optimizations leveraging GPU acceleration and coordinated scheduling',
      'Through automatic hardware provisioning and cloud resource management',
      'By eliminating the need for any manual optimization or performance tuning',
      'Through exclusive access to next-generation hardware not available to other platforms'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA Accelerated Computing integration provides specialized optimizations leveraging GPU acceleration, optimized inference engines, and coordinated scheduling across computational resources.'
  },
  {
    id: 'q15',
    question: 'What cost management benefits derive from toolkit visibility capabilities?',
    options: [
      'Automatic cost reduction through elimination of expensive operations regardless of functionality impact',
      'Resource consumption visibility enabling identification of expensive operations and optimization targeting',
      'Built-in financial reporting and budget management for enterprise deployments',
      'Guaranteed cost reductions through mandatory optimization policies and restrictions'
    ],
    correctAnswer: 1,
    explanation: 'Cost management benefits derive from resource consumption visibility enabling identification of expensive operations requiring optimization, caching strategies reducing redundant computation, and right-sizing model selection.'
  }
];