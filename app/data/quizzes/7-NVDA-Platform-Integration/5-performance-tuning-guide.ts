import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does NeMo Framework performance optimization encompass for large language model training?',
    options: [
      'Training efficiency maximization, memory utilization optimization, and computational throughput enhancement on GPU infrastructure',
      'Model architecture design, hyperparameter search, and automated machine learning workflows',
      'Data preprocessing pipelines, distributed storage systems, and network optimization',
      'Model deployment, inference acceleration, and production monitoring systems'
    ],
    correctAnswer: 0,
    explanation: 'NeMo Framework performance optimization encompasses comprehensive strategies for maximizing training efficiency, memory utilization, and computational throughput when training large language models on GPU infrastructure.'
  },
  {
    id: 'q2',
    question: 'What does Model FLOPS Utilization (MFU) quantify in performance optimization?',
    options: [
      'The total number of floating-point operations performed during model training',
      'How effectively training workloads leverage theoretical GPU computational capacity',
      'The ratio of model parameters to available GPU memory capacity',
      'The percentage of time GPUs spend actively computing versus idle waiting'
    ],
    correctAnswer: 1,
    explanation: 'Model FLOPS Utilization quantifies how effectively training workloads leverage theoretical GPU computational capacity, indicating how well the training process exploits available computational resources.'
  },
  {
    id: 'q3',
    question: 'What MFU percentages do optimized configurations typically achieve compared to naive implementations?',
    options: [
      'Optimized configurations achieve 50-70% MFU compared to naive implementations reaching 20-30%',
      'Optimized configurations achieve 80-90% MFU compared to naive implementations reaching 60-70%',
      'Optimized configurations achieve 30-40% MFU compared to naive implementations reaching 10-15%',
      'Optimized configurations achieve 90-95% MFU compared to naive implementations reaching 70-80%'
    ],
    correctAnswer: 0,
    explanation: 'Optimized configurations achieving 50-70 percent MFU compared to naive implementations reaching 20-30 percent for equivalent model architectures and hardware resources, demonstrating substantial efficiency improvements.'
  },
  {
    id: 'q4',
    question: 'What precision level represents the lowest commonly employed for LLM training?',
    options: [
      'FP32 (32-bit floating point) for maximum numerical precision and stability',
      'FP16 (16-bit floating point) as the standard reduced precision format',
      'FP8 (8-bit floating point) offering substantial performance advantages over BF16',
      'INT8 (8-bit integer) for maximum memory and computational efficiency'
    ],
    correctAnswer: 2,
    explanation: 'FP8 arithmetic represents the lowest precision commonly employed for LLM training, offering substantial performance advantages over BF16 default precision through reduced memory bandwidth and faster operations.'
  },
  {
    id: 'q5',
    question: 'What speedup factors does FP8 training typically achieve compared to BF16 baseline?',
    options: [
      '3.0-4.0X speedup through dramatic reduction in computational requirements',
      '2.0-3.0X speedup across all operations with universal FP8 implementation',
      '1.2-1.5X speedup when applied selectively to linear layers in Transformer blocks',
      '1.1-1.2X speedup due to limited applicability and overhead considerations'
    ],
    correctAnswer: 2,
    explanation: 'FP8 training applies selectively to linear layers within Transformer blocks where most computational work concentrates, typically achieving 1.2-1.5X speedup factors compared to BF16 baseline performance.'
  },
  {
    id: 'q6',
    question: 'Why do models with limited hidden dimensions exhibit lower FP8 speedup percentages?',
    options: [
      'FP8 arithmetic becomes less accurate for smaller model architectures',
      'Linear layer computation represents smaller fractions of total work compared to attention operations',
      'Memory bandwidth limitations prevent effective utilization of FP8 acceleration',
      'Smaller models require different optimization techniques incompatible with FP8'
    ],
    correctAnswer: 1,
    explanation: 'Models with limited hidden dimensions exhibit lower FP8 speedup because linear layer computation represents smaller fractions of total work compared to attention operations and element-wise operations.'
  },
  {
    id: 'q7',
    question: 'What is the foundational parallelism strategy that offers optimal performance?',
    options: [
      'Tensor parallelism that shards individual tensors across multiple GPUs',
      'Pipeline parallelism that distributes model layers across different devices',
      'Data parallelism that replicates models across GPUs while sharding training data',
      'Expert parallelism that distributes mixture-of-experts across computational resources'
    ],
    correctAnswer: 2,
    explanation: 'Data parallelism represents the foundational strategy replicating models across GPUs while sharding training data, offering optimal performance when models and activations fit within individual GPU memory capacities.'
  },
  {
    id: 'q8',
    question: 'What advantage does distributed optimizer implementation provide?',
    options: [
      'Faster convergence through improved gradient synchronization algorithms',
      'Shards master parameters and optimizer states across ranks, reducing memory consumption',
      'Automatic hyperparameter tuning based on distributed training dynamics',
      'Built-in fault tolerance and recovery for distributed training failures'
    ],
    correctAnswer: 1,
    explanation: 'Distributed optimizer implementation shards master parameters and optimizer states across data parallel ranks, reducing model state memory consumption without increasing communication overhead compared to traditional approaches.'
  },
  {
    id: 'q9',
    question: 'When is tensor parallelism appropriate and what are its constraints?',
    options: [
      'For all model sizes to maximize GPU utilization across available hardware',
      'Only for inference workloads where communication overhead is less critical',
      'When training small models that need distributed processing for faster iteration',
      'When models exceed single GPU memory capacity, confined to high-bandwidth NVLink domains'
    ],
    correctAnswer: 3,
    explanation: 'Tensor parallelism addresses scenarios where models exceed single GPU memory capacity by sharding tensors across multiple GPUs, but must be confined to NVLink domains to avoid slower inter-node communication overhead.'
  },
  {
    id: 'q10',
    question: 'What factors can limit FP8 speedup realization in training workloads?',
    options: [
      'Insufficient GPU memory capacity for storing FP8-optimized model weights',
      'Host performance boundedness when small GPU kernels underutilize computational capacity',
      'Incompatibility between FP8 arithmetic and standard optimization algorithms',
      'Network bandwidth limitations preventing efficient distributed FP8 synchronization'
    ],
    correctAnswer: 1,
    explanation: 'Host performance boundedness can limit FP8 speedup when training employs small GPU kernels that underutilize computational capacity, causing host-side coordination overhead to dominate execution time.'
  },
  {
    id: 'q11',
    question: 'What techniques help address host performance bottlenecks for FP8 acceleration?',
    options: [
      'Automatic model architecture optimization and layer pruning techniques',
      'Increased batch sizes, reduced parallelism, CUDA graph capture, and manual garbage collection synchronization',
      'Dynamic learning rate adjustment and gradient clipping optimization',
      'Advanced data augmentation and regularization techniques'
    ],
    correctAnswer: 1,
    explanation: 'Addressing host bottlenecks through techniques including increased batch sizes, reduced unnecessary parallelism, CUDA graph capture, and manual garbage collection synchronization is essential for realizing full FP8 potential.'
  },
  {
    id: 'q12',
    question: 'How does quantization block size selection affect FP8 performance?',
    options: [
      'Larger blocks always provide better performance regardless of accuracy considerations',
      'Smaller blocks incur higher overhead but may offer accuracy advantages in specific scenarios',
      'Block size has no significant impact on FP8 training performance characteristics',
      'Medium-sized blocks provide optimal balance across all model architectures'
    ],
    correctAnswer: 1,
    explanation: 'Smaller quantization blocks incur higher overhead from increased quantization operations and less efficient matrix multiplication kernels, while fine-grained approaches may offer accuracy advantages in specific scenarios.'
  },
  {
    id: 'q13',
    question: 'What determines the effectiveness of different parallelism strategies?',
    options: [
      'The specific GPU architecture and CUDA version being used',
      'The programming language and framework used for model implementation',
      'Balancing computational efficiency, communication overhead, and memory requirements',
      'The geographic distribution of computational resources across data centers'
    ],
    correctAnswer: 2,
    explanation: 'Parallelism strategies distribute training workloads through different sharding and replication patterns that balance computational efficiency, communication overhead, and memory requirements for optimal performance.'
  },
  {
    id: 'q14',
    question: 'Why do performance characteristics vary substantially across different scenarios?',
    options: [
      'Due to differences in model architectures, training scenarios, and infrastructure configurations requiring empirical tuning',
      'Because of variations in software licensing and framework compatibility issues',
      'Due to regulatory compliance requirements that differ across industries and regions',
      'Because of differences in team expertise and organizational development practices'
    ],
    correctAnswer: 0,
    explanation: 'Performance characteristics vary substantially across different model architectures, training scenarios, and infrastructure configurations, requiring empirical tuning guided by profiling data and systematic experimentation.'
  },
  {
    id: 'q15',
    question: 'What combination of optimization levels does NeMo Framework employ?',
    options: [
      'Software-level optimizations exclusively focusing on algorithm and framework efficiency',
      'Hardware-level utilization, algorithmic efficiency, and high-level orchestration strategies',
      'Cloud-based optimizations through managed services and automated resource scaling',
      'User interface optimizations for improved developer productivity and workflow efficiency'
    ],
    correctAnswer: 1,
    explanation: 'The optimization approach combines hardware-level optimizations leveraging GPU features, algorithmic optimizations using efficient parallelism and communication, and orchestration-level optimizations coordinating distributed training.'
  }
];