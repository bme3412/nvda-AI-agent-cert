import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA NeMo Framework and what does it enable?',
    options: [
      'Scalable cloud-native generative AI development platform built for researchers and practitioners across multiple domains',
      'A specialized deployment platform exclusively for large language model inference and serving',
      'A data preprocessing toolkit for preparing training datasets for machine learning applications',
      'A security framework for protecting deployed AI models against adversarial attacks'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA NeMo Framework represents scalable cloud-native generative AI development platform built for researchers and practitioners working across large language models, multimodal models, speech recognition, text-to-speech, and computer vision domains.'
  },
  {
    id: 'q2',
    question: 'How does the unified framework address multiple AI modalities?',
    options: [
      'Through automatic model conversion that adapts any model type to work with unified infrastructure',
      'By providing integrated tooling supporting language understanding, visual-linguistic reasoning, and speech processing',
      'Through universal compatibility ensuring identical performance characteristics across all modalities',
      'By implementing specialized hardware acceleration optimized for each specific AI domain'
    ],
    correctAnswer: 1,
    explanation: 'The unified framework addresses multiple AI modalities through integrated tooling supporting language understanding and generation, visual-linguistic reasoning, speech processing, and computer vision with cross-domain integration enabling multimodal model development.'
  },
  {
    id: 'q3',
    question: 'What does platform architecture provide for complete model lifecycle support?',
    options: [
      'Automatic model deployment and scaling without manual configuration or optimization requirements',
      'Training, alignment, optimization, and production serving through integrated microservices',
      'Universal compatibility ensuring models work identically across all deployment environments',
      'Real-time performance monitoring and automatic optimization based on usage patterns'
    ],
    correctAnswer: 1,
    explanation: 'Platform architecture provides complete model lifecycle support encompassing training including pretraining and fine-tuning, alignment through preference optimization, optimization for inference deployment, and production serving through integrated microservices.'
  },
  {
    id: 'q4',
    question: 'How does training performance optimization achieve efficiency at scale?',
    options: [
      'Through automatic hardware selection and resource allocation based on predicted computational requirements',
      'By leveraging distributed training techniques including tensor parallelism, pipeline parallelism, and data parallelism',
      'Through universal optimization algorithms that work identically regardless of model architecture or size',
      'By implementing specialized compression techniques that reduce model complexity without accuracy loss'
    ],
    correctAnswer: 1,
    explanation: 'Training performance optimization leverages cutting-edge distributed training techniques including tensor parallelism distributing layers across devices, pipeline parallelism partitioning models into sequential stages, and fully sharded data parallelism eliminating parameter replication.'
  },
  {
    id: 'q5',
    question: 'What does precision optimization through mixed-precision training achieve?',
    options: [
      'Automatic accuracy improvements and enhanced model performance without computational overhead',
      'Reduced memory consumption and accelerated computation through BFloat16 and FP8 arithmetic',
      'Universal compatibility ensuring models work identically across all possible hardware types',
      'Real-time adaptation that optimizes precision based on current computational requirements'
    ],
    correctAnswer: 1,
    explanation: 'Precision optimization through mixed-precision training using BFloat16 and FP8 arithmetic reduces memory consumption and accelerates computation through specialized hardware acceleration, with FP8 training on Hopper GPUs achieving substantial speedups.'
  },
  {
    id: 'q6',
    question: 'How does framework architecture transition from version 1.0 to 2.0?',
    options: [
      'Through automatic migration that converts all existing configurations without manual intervention',
      'From YAML-based configuration to Python-based configuration providing enhanced flexibility and programmatic control',
      'By implementing universal compatibility ensuring identical behavior across all version types',
      'Through specialized hardware requirements that optimize performance for next-generation infrastructure'
    ],
    correctAnswer: 1,
    explanation: 'Framework architecture transitions from YAML-based configuration in version 1.0 to Python-based configuration in version 2.0, providing enhanced flexibility and programmatic control over experimental setups through dynamic parameter generation and conditional configuration.'
  },
  {
    id: 'q7',
    question: 'What does automatic scaling enable for training infrastructure?',
    options: [
      'Universal model compatibility ensuring any architecture can train on any hardware configuration',
      'Support for models from few billion through hundreds of billions of parameters using automatic parallelism strategy selection',
      'Real-time cost optimization that minimizes infrastructure expenses without impacting performance',
      'Automatic accuracy improvements through intelligent hyperparameter tuning and optimization'
    ],
    correctAnswer: 1,
    explanation: 'Training infrastructure supports models from few billion parameters through hundreds of billions using automatic scaling across GPU clusters, with scaling automation handling parallelism strategy selection, gradient accumulation configuration, and communication optimization.'
  },
  {
    id: 'q8',
    question: 'What alignment capabilities does the framework provide beyond supervised fine-tuning?',
    options: [
      'Automatic data generation and quality validation without human oversight or annotation requirements',
      'SteerLM for attribute-based control, Direct Preference Optimization, and Reinforcement Learning from Human Feedback',
      'Universal compatibility ensuring models work identically across all possible application domains',
      'Real-time performance monitoring and optimization based on user interaction patterns'
    ],
    correctAnswer: 1,
    explanation: 'Alignment capabilities include SteerLM for attribute-based control, Direct Preference Optimization for preference learning without reinforcement learning complexity, and Reinforcement Learning from Human Feedback for learning from preference comparisons.'
  },
  {
    id: 'q9',
    question: 'How does vision-language integration enable multimodal reasoning?',
    options: [
      'Through automatic format conversion that standardizes all input types to unified representations',
      'By combining vision encoders extracting visual features with language models processing textual information',
      'Through universal compatibility protocols that work identically across all possible modality combinations',
      'By implementing specialized hardware acceleration optimized for cross-modal processing patterns'
    ],
    correctAnswer: 1,
    explanation: 'Vision-language integration enables models reasoning across visual and textual modalities by combining vision encoders extracting visual features with language models processing textual information, enabling joint reasoning through attention mechanisms and cross-modal fusion.'
  },
  {
    id: 'q10',
    question: 'What does NIM microservices enable for model deployment?',
    options: [
      'Automatic model optimization and performance tuning without manual configuration requirements',
      'Optimized model deployment through containerized inference engines, standardized APIs, and performance optimization',
      'Universal compatibility ensuring models work identically across all possible infrastructure types',
      'Real-time scaling and load balancing based on current demand patterns and usage characteristics'
    ],
    correctAnswer: 1,
    explanation: 'NIM microservices enable optimized model deployment through containerized inference engines, standardized APIs supporting diverse client integrations, and performance optimization achieving production throughput and latency requirements.'
  },
  {
    id: 'q11',
    question: 'How do inference optimization techniques improve serving efficiency?',
    options: [
      'Through automatic model architecture modifications that reduce computational complexity without accuracy loss',
      'Via quantization reducing precision, kernel fusion combining operations, and batching aggregating requests',
      'Through universal protocols that optimize performance identically regardless of model type or size',
      'By implementing predictive analytics that anticipate demand patterns and pre-allocate resources'
    ],
    correctAnswer: 1,
    explanation: 'Inference optimization techniques including quantization reducing precision for faster execution, kernel fusion combining operations eliminating memory traffic, and batching aggregating requests for better hardware utilization substantially improve serving efficiency.'
  },
  {
    id: 'q12',
    question: 'What does Lightning integration provide for standardized training?',
    options: [
      'Automatic hyperparameter tuning and model optimization without manual intervention requirements',
      'Standardized training abstractions including trainer coordination, callbacks, and logging integration',
      'Universal compatibility ensuring identical training behavior across all model types and architectures',
      'Real-time performance monitoring and automatic scaling based on computational demand patterns'
    ],
    correctAnswer: 1,
    explanation: 'Lightning integration provides standardized training abstractions including trainer coordinating training loops, callbacks implementing training customizations, and logging integrating with monitoring systems, reducing boilerplate code while maintaining flexibility.'
  },
  {
    id: 'q13',
    question: 'How does Transformer Engine acceleration leverage FP8 capabilities?',
    options: [
      'Through automatic model compression that reduces memory requirements without accuracy degradation',
      'By achieving substantial speedups through reduced precision arithmetic on Hopper GPUs',
      'Through universal optimization that works identically across all transformer architectures',
      'By implementing intelligent caching that eliminates redundant computation for attention mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Transformer Engine acceleration leverages FP8 capabilities on Hopper GPUs achieving substantial speedups through reduced precision arithmetic, with engine integration handling FP8 scaling and maintaining numerical stability.'
  },
  {
    id: 'q14',
    question: 'What do automatic configuration tools determine for optimization?',
    options: [
      'Universal model architectures that work optimally across all possible application domains',
      'Optimal parallelism strategies, batch sizes, and training parameters based on model architecture and infrastructure',
      'Real-time resource allocation that adapts to changing computational demands and usage patterns',
      'Automatic accuracy improvements through intelligent model architecture and hyperparameter selection'
    ],
    correctAnswer: 1,
    explanation: 'Automatic configuration tools determine optimal parallelism strategies, batch sizes, and other training parameters based on model architecture and available infrastructure, eliminating trial-and-error parameter tuning and ensuring efficient resource utilization.'
  },
  {
    id: 'q15',
    question: 'How do memory optimization techniques enable training of largest models?',
    options: [
      'Through automatic model compression and architecture simplification without accuracy impact',
      'Via gradient checkpointing trading computation for memory, activation recomputation, and efficient optimizer state management',
      'Through universal memory allocation that works identically regardless of model size or complexity',
      'By implementing intelligent caching that eliminates memory requirements for intermediate computations'
    ],
    correctAnswer: 1,
    explanation: 'Memory optimization techniques including gradient checkpointing trading computation for memory, activation recomputation avoiding storing intermediate values, and efficient optimizer state management prove essential for training largest models where memory constraints fundamentally limit achievable scales.'
  }
];