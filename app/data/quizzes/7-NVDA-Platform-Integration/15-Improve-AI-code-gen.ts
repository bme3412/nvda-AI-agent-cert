import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does AI code generation with NeMo Agent Toolkit represent?',
    options: [
      'A simple code completion interface that generates syntax suggestions for developers',
      'Application of agentic architectures to automated software development tasks leveraging test-time computation scaling',
      'A cloud-based platform for collaborative software development and version control management',
      'An integrated development environment optimized for machine learning model development workflows'
    ],
    correctAnswer: 1,
    explanation: 'AI code generation with NeMo Agent Toolkit represents application of agentic architectures to automated software development tasks leveraging test-time computation scaling and reasoning model integration, extending beyond simple code completion.'
  },
  {
    id: 'q2',
    question: 'How does test-driven development integration create effective feedback loops?',
    options: [
      'Through automatic documentation generation and code review processes without human intervention',
      'By enabling agents to generate code, execute tests, analyze failures, and iteratively refine until tests pass',
      'Through real-time collaboration features that connect developers with automated assistance tools',
      'By implementing universal compatibility ensuring code works across all possible runtime environments'
    ],
    correctAnswer: 1,
    explanation: 'Test-driven development integration creates feedback loops where agents generate code, execute tests against generated implementations, analyze failures through reasoning models, and iteratively refine solutions until tests pass or iteration budgets exhaust.'
  },
  {
    id: 'q3',
    question: 'What advantage does verifiable correctness provide for code generation?',
    options: [
      'Automatic performance optimization and resource allocation without manual tuning requirements',
      'Objective quality metrics distinguishing correct from incorrect implementations without subjective evaluation',
      'Universal compatibility testing that ensures code works across all possible deployment scenarios',
      'Real-time debugging assistance that identifies errors before code execution and testing'
    ],
    correctAnswer: 1,
    explanation: 'Verifiable correctness through automated testing provides objective quality metrics distinguishing correct from incorrect implementations without requiring subjective human evaluation, with test-driven workflows ensuring generated code satisfies functional requirements.'
  },
  {
    id: 'q4',
    question: 'How does inference-time computation scaling differ from traditional pre-training scaling?',
    options: [
      'By using specialized hardware acceleration and custom silicon for improved computational efficiency',
      'Through allocating computational resources during inference via iterative refinement and solution path exploration',
      'By implementing automatic model compression that reduces resource requirements without accuracy loss',
      'Through distributed processing that spreads computational work across multiple data centers'
    ],
    correctAnswer: 1,
    explanation: 'Inference-time computation scaling represents alternative to traditional pre-training scaling where performance improvements emerge from increased computational resources during inference through iterative refinement and exploration of alternative solution paths.'
  },
  {
    id: 'q5',
    question: 'What does flow engineering achieve in agent architecture design?',
    options: [
      'Automatic code generation from high-level specifications without manual implementation requirements',
      'Middle-ground approach defining explicit states and transitions while permitting agent autonomy within states',
      'Universal compatibility ensuring agents work identically across all possible development environments',
      'Real-time performance optimization that adjusts computational resources based on task complexity'
    ],
    correctAnswer: 1,
    explanation: 'Flow engineering represents middle-ground approach defining explicit states and transitions while permitting agent autonomy within states, balancing reliability against adaptability by decomposing complex tasks into manageable phases with clear objectives.'
  },
  {
    id: 'q6',
    question: 'How do memory systems maintain context across agent interactions?',
    options: [
      'Through automatic backup and recovery mechanisms that prevent data loss during processing operations',
      'By storing immediate task context and accumulating reusable knowledge including solution patterns and debugging strategies',
      'Through intelligent compression algorithms that reduce memory requirements without losing information',
      'By implementing universal storage formats that work across all agent types and deployment scenarios'
    ],
    correctAnswer: 1,
    explanation: 'Memory systems maintain context across interactions with working memory storing immediate task context including current code state and recent test results, while long-term memory accumulates reusable knowledge including successful solution patterns and debugging strategies.'
  },
  {
    id: 'q7',
    question: 'What does reasoning model integration enable for failure analysis?',
    options: [
      'Automatic code repair and optimization without human oversight or validation requirements',
      'Sophisticated logical processing decomposing complex failures into constituent issues and formulating targeted corrections',
      'Real-time performance monitoring that prevents errors before they impact system functionality',
      'Universal error handling that works identically for any programming language or runtime environment'
    ],
    correctAnswer: 1,
    explanation: 'Reasoning model integration enables sophisticated failure analysis beyond simple error message parsing, with advanced reasoning capabilities decomposing complex failures into constituent issues and formulating targeted corrections addressing root causes.'
  },
  {
    id: 'q8',
    question: 'How does verification-guided exploration improve solution efficiency?',
    options: [
      'Through automatic performance tuning that optimizes code execution speed without manual intervention',
      'By leveraging objective correctness measures focusing computational effort on promising approaches',
      'Through intelligent caching mechanisms that eliminate redundant computation for repeated operations',
      'By implementing universal optimization techniques that work across all programming paradigms'
    ],
    correctAnswer: 1,
    explanation: 'Verification-guided exploration leverages objective correctness measures focusing computational effort on promising approaches, with test results providing clear signals distinguishing progress toward correct solutions from unproductive modifications.'
  },
  {
    id: 'q9',
    question: 'What does multi-model coordination architecture achieve through specialization?',
    options: [
      'Automatic load balancing that distributes computational work across available processing resources',
      'Synergistic combinations where specialized models handle appropriate workflow phases optimizing task-appropriate capabilities',
      'Universal compatibility ensuring models work identically regardless of specific task requirements',
      'Real-time adaptation that adjusts model behavior based on current performance and accuracy metrics'
    ],
    correctAnswer: 1,
    explanation: 'Multi-model coordination architecture combines code generation models specializing in syntactically correct code with reasoning models providing sophisticated failure analysis, creating synergistic combinations where specialized models handle appropriate workflow phases.'
  },
  {
    id: 'q10',
    question: 'How do sandboxed execution environments provide essential protection?',
    options: [
      'Through automatic performance optimization and resource allocation for improved execution efficiency',
      'By providing isolated contexts preventing unintended effects on development infrastructure or production systems',
      'Through intelligent error detection and correction that prevents runtime failures before execution',
      'By implementing universal compatibility ensuring code runs identically across all deployment environments'
    ],
    correctAnswer: 1,
    explanation: 'Sandboxed execution environments provide isolated contexts for running generated code preventing unintended effects on development infrastructure or production systems, with isolation mechanisms including containerization and resource limits.'
  },
  {
    id: 'q11',
    question: 'What does declarative workflow specification through configuration enable?',
    options: [
      'Automatic code generation from natural language descriptions without manual programming requirements',
      'Rapid iteration on agent architectures without code modifications through configuration-based changes',
      'Universal compatibility ensuring workflows work identically across all possible deployment scenarios',
      'Real-time performance monitoring and optimization without manual tuning or intervention requirements'
    ],
    correctAnswer: 1,
    explanation: 'Declarative workflow specification through configuration files enables rapid iteration on agent architectures without code modifications, with configuration encompassing tool definitions, model selections, and workflow structure while separating workflow logic from implementation details.'
  },
  {
    id: 'q12',
    question: 'How does hierarchical coordination organize complex workflows?',
    options: [
      'Through automatic task optimization and resource allocation based on predicted computational requirements',
      'By organizing through supervisor agents managing specialized sub-agents handling specific tasks',
      'Through universal protocols that standardize communication across all agent types and capabilities',
      'By implementing real-time adaptation that adjusts workflow structure based on current performance metrics'
    ],
    correctAnswer: 1,
    explanation: 'Hierarchical coordination organizes complex workflows through supervisor agents managing specialized sub-agents handling specific tasks, with supervisors handling task decomposition, agent selection, and result synthesis while delegating execution to specialists.'
  },
  {
    id: 'q13',
    question: 'What does parallel execution enable for workflow efficiency improvement?',
    options: [
      'Automatic error detection and recovery that prevents failures from impacting system functionality',
      'Concurrent processing of independent subtasks improving overall workflow efficiency through parallelization',
      'Universal optimization that works identically regardless of specific task characteristics or requirements',
      'Real-time resource scaling that adjusts computational capacity based on current demand patterns'
    ],
    correctAnswer: 1,
    explanation: 'Parallel execution enables concurrent processing of independent subtasks improving overall workflow efficiency, with supervisors identifying parallelization opportunities where tasks lack dependencies and coordinating simultaneous execution across multiple agents.'
  },
  {
    id: 'q14',
    question: 'How does workflow profiling identify performance optimization opportunities?',
    options: [
      'Through automatic code generation that creates optimized implementations without manual intervention',
      'By providing detailed execution analysis capturing timing, resource consumption, and behavior patterns',
      'Through universal monitoring that works identically across all workflow types and deployment scenarios',
      'By implementing predictive analytics that anticipate performance issues before they impact operations'
    ],
    correctAnswer: 1,
    explanation: 'Workflow profiling identifies performance bottlenecks through detailed execution analysis capturing timing, resource consumption, and behavior patterns, revealing expensive operations and serialization points limiting parallelization while guiding optimization efforts.'
  },
  {
    id: 'q15',
    question: 'What does integration with specialized optimization frameworks enable?',
    options: [
      'Automatic model training and fine-tuning that improves performance without human oversight',
      'Sophisticated performance enhancement through intelligent caching, predictive prefetching, and adaptive resource allocation',
      'Universal compatibility ensuring optimization works identically across all possible system configurations',
      'Real-time error detection and correction that prevents performance issues before they impact users'
    ],
    correctAnswer: 1,
    explanation: 'Integration with specialized optimization frameworks enables sophisticated performance enhancement through techniques including intelligent caching, predictive prefetching, and adaptive resource allocation, leveraging domain expertise without requiring agent developers to implement low-level optimizations.'
  }
];