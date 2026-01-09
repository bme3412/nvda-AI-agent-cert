import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA Llama Nemotron API and what capabilities does it provide?',
    options: [
      'A containerized deployment platform for scaling machine learning models across distributed infrastructure',
      'A programmatic interface for accessing reasoning-optimized large language models designed for advanced AI agent development',
      'A data preprocessing pipeline for preparing training datasets for natural language processing applications',
      'A security framework for protecting deployed models against adversarial attacks and unauthorized access'
    ],
    correctAnswer: 1,
    explanation: 'NVIDIA Llama Nemotron API represents programmatic interface for accessing family of reasoning-optimized large language models designed for advanced AI agent development and complex cognitive tasks.'
  },
  {
    id: 'q2',
    question: 'How does the model family accommodate different deployment scenarios?',
    options: [
      'Through automatic scaling that dynamically adjusts model complexity based on available computational resources',
      'By providing three distinct variants with parameter counts ranging from edge-deployable to multi-GPU configurations',
      'Through intelligent model compression that adapts precision based on target hardware capabilities',
      'By implementing universal compatibility ensuring identical performance across all deployment environments'
    ],
    correctAnswer: 1,
    explanation: 'The model family encompasses three distinct variants targeting different deployment scenarios and resource constraints, with parameter counts ranging from lightweight edge-deployable through balanced single-GPU to massive multi-GPU deployments.'
  },
  {
    id: 'q3',
    question: 'What distinctive control mechanism enables dynamic reasoning optimization?',
    options: [
      'Advanced scheduling algorithms that predict optimal resource allocation for varying query complexity',
      'Dynamic toggling of reasoning capabilities through system prompt configuration based on query characteristics',
      'Automatic model selection that routes requests to appropriate variants based on computational requirements',
      'Intelligent caching mechanisms that eliminate redundant computation for repeated query patterns'
    ],
    correctAnswer: 1,
    explanation: 'Distinctive reasoning control mechanisms enable dynamic toggling of advanced reasoning capabilities through system prompt configuration, allowing selective activation of intensive reasoning for complex queries while disabling for straightforward tasks.'
  },
  {
    id: 'q4',
    question: 'How does API delivery through NVIDIA NIM microservices enable deployment flexibility?',
    options: [
      'By providing automatic hardware optimization and resource allocation without manual configuration',
      'Through encapsulating optimized inference engines and standardized interfaces for consistent access across environments',
      'By implementing universal protocols that work identically across all possible infrastructure configurations',
      'Through automatic scaling that adjusts computational resources based on real-time demand patterns'
    ],
    correctAnswer: 1,
    explanation: 'API delivery through NVIDIA NIM microservices enables deployment flexibility by encapsulating optimized inference engines, runtime dependencies, and standardized interfaces enabling consistent access patterns regardless of deployment environment.'
  },
  {
    id: 'q5',
    question: 'What architectural foundation enhances the models beyond base Llama capabilities?',
    options: [
      'Specialized hardware acceleration through custom silicon designed for transformer computations',
      'Distillation techniques and reinforcement learning from human feedback improving reasoning abilities',
      'Advanced compression algorithms that reduce model size while maintaining computational accuracy',
      'Custom attention mechanisms that optimize memory usage for longer context sequences'
    ],
    correctAnswer: 1,
    explanation: 'Architecture foundation builds on Meta\'s Llama framework while extending capabilities through specialized post-training enhancements including distillation techniques transferring knowledge from larger teacher models and reinforcement learning from human feedback.'
  },
  {
    id: 'q6',
    question: 'What does the extended context window capacity enable for applications?',
    options: [
      'Processing lengthy documents, maintaining extended conversations, and handling complex multi-turn interactions',
      'Automatic summarization and compression of large text inputs for efficient processing',
      'Parallel processing of multiple independent queries for improved throughput and efficiency',
      'Real-time translation and language conversion for international business applications'
    ],
    correctAnswer: 0,
    explanation: 'Extended context window capacity supporting 128,000 tokens enables processing lengthy documents, maintaining context across extended conversations, and handling complex multi-turn interactions requiring substantial historical context.'
  },
  {
    id: 'q7',
    question: 'How does RESTful interface design facilitate API integration?',
    options: [
      'Through automatic code generation that creates client libraries for all programming languages',
      'By following standard HTTP conventions enabling integration through any language supporting HTTP communications',
      'Through universal adapters that convert between different API protocols and data formats',
      'By implementing specialized protocols optimized for machine learning model inference patterns'
    ],
    correctAnswer: 1,
    explanation: 'RESTful interface design follows standard HTTP conventions enabling integration through any programming language or framework supporting HTTP communications, accepting POST requests with JSON payloads.'
  },
  {
    id: 'q8',
    question: 'What does reasoning activation parameter control enable?',
    options: [
      'Automatic model optimization based on predicted query complexity and resource availability',
      'Dynamic toggling of advanced reasoning capabilities based on system prompt configuration for resource optimization',
      'Intelligent load balancing across multiple model instances for optimal response times',
      'Real-time model updates that improve performance based on user feedback and interaction patterns'
    ],
    correctAnswer: 1,
    explanation: 'Reasoning activation toggles advanced reasoning capabilities through system prompt configuration, enabling deep logical processing for complex problems while using standard generation for straightforward tasks, optimizing resource utilization.'
  },
  {
    id: 'q9',
    question: 'How do token count reporting capabilities support operational management?',
    options: [
      'By automatically optimizing model parameters to reduce computational costs for future requests',
      'Through quantifying generation volume enabling usage tracking, cost calculation, and capacity planning',
      'By providing real-time performance metrics for automatic scaling and load balancing decisions',
      'Through intelligent caching that reduces redundant computation based on usage pattern analysis'
    ],
    correctAnswer: 1,
    explanation: 'Token count reporting quantifies generation volume enabling usage tracking, cost calculation, and capacity planning, with input and output token counts supporting separate tracking revealing prompt efficiency and response verbosity.'
  },
  {
    id: 'q10',
    question: 'What application pattern leverages reasoning capabilities for complex technical diagnosis?',
    options: [
      'Automated documentation generation and technical writing assistance for software development teams',
      'Customer support automation for troubleshooting complex technical issues requiring multi-step diagnosis',
      'Real-time monitoring and alerting for infrastructure performance and security incident detection',
      'Predictive analytics for forecasting system failures and maintenance requirements'
    ],
    correctAnswer: 1,
    explanation: 'Customer support automation leverages reasoning capabilities for troubleshooting complex technical issues requiring multi-step diagnosis and solution formulation, enabling understanding problem descriptions and generating detailed resolution guidance.'
  },
  {
    id: 'q11',
    question: 'How do educational applications benefit from reasoning transparency?',
    options: [
      'Through automatic assessment and grading that eliminates need for human evaluation',
      'By explaining complex concepts through step-by-step reasoning making abstract ideas accessible',
      'Through personalized learning paths that adapt content difficulty based on student performance',
      'By providing real-time feedback and correction for student work and assignments'
    ],
    correctAnswer: 1,
    explanation: 'Educational applications build intelligent tutoring systems explaining complex concepts through step-by-step reasoning, with mathematical problem solving demonstrating work through logical progression and reasoning transparency aiding learning.'
  },
  {
    id: 'q12',
    question: 'What does software development assistance provide through reasoning about program behavior?',
    options: [
      'Automatic deployment and scaling of applications without manual configuration requirements',
      'Code generation, debugging through logical error identification, and detailed functionality explanations',
      'Real-time performance monitoring and optimization recommendations for production applications',
      'Universal compatibility testing that ensures code works across all possible runtime environments'
    ],
    correctAnswer: 1,
    explanation: 'Software development assistance generates code implementing natural language specifications, debugs existing implementations identifying logical errors, and explains code functionality through detailed analysis using reasoning about program behavior.'
  },
  {
    id: 'q13',
    question: 'How does resource optimization through selective reasoning activation benefit production deployments?',
    options: [
      'By automatically scaling hardware resources based on predicted computational demand patterns',
      'Through preventing unnecessary computational overhead by engaging advanced processing only when beneficial',
      'By implementing intelligent caching that reduces redundant computation for frequently requested operations',
      'Through dynamic load balancing that distributes requests optimally across available computational resources'
    ],
    correctAnswer: 1,
    explanation: 'Resource optimization through selective reasoning activation prevents unnecessary computational overhead by engaging advanced processing only when beneficial, with applications implementing query complexity assessment routing simple requests to lightweight processing.'
  },
  {
    id: 'q14',
    question: 'What does batch processing aggregation achieve for high-volume workloads?',
    options: [
      'Automatic quality control and validation ensuring all outputs meet accuracy requirements',
      'Improved efficiency through amortized overhead and better resource utilization for offline processing',
      'Real-time response capabilities that eliminate latency for interactive user applications',
      'Universal format conversion enabling processing of any input data type or structure'
    ],
    correctAnswer: 1,
    explanation: 'Batch processing aggregates multiple prompts into unified requests improving efficiency through amortized overhead and better resource utilization, proving particularly valuable for offline processing, bulk document analysis, or batch jobs where latency tolerance permits request aggregation.'
  },
  {
    id: 'q15',
    question: 'How does open licensing enable enterprise deployment flexibility?',
    options: [
      'Through automatic compliance monitoring that ensures all usage meets regulatory requirements',
      'By providing enterprise deployment without restrictive usage constraints common in proprietary offerings',
      'Through universal compatibility that guarantees integration with any existing enterprise infrastructure',
      'By implementing automatic cost optimization that reduces licensing fees based on actual usage patterns'
    ],
    correctAnswer: 1,
    explanation: 'Open licensing enables enterprise deployment without restrictive usage constraints common in proprietary model offerings, providing flexibility for internal development, customization, and production deployment without licensing limitations constraining commercial applications.'
  }
];