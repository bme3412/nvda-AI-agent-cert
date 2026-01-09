import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does NeMo Curator memory management address in data curation workflows?',
    options: [
      'GPU memory optimization for neural model training and fine-tuning processes',
      'Efficiently processing large-scale text datasets within constrained memory resources during curation',
      'Database memory management for storing and retrieving training data efficiently',
      'Network memory optimization for distributed data processing across multiple nodes'
    ],
    correctAnswer: 1,
    explanation: 'NeMo Curator memory management encompasses strategies for efficiently processing large-scale text datasets within constrained memory resources during data curation workflows.'
  },
  {
    id: 'q2',
    question: 'What are the fundamental memory challenges that NeMo Curator addresses?',
    options: [
      'Dataset scales exceeding RAM/VRAM, memory-intensive operations, memory leaks, and distributed memory balancing',
      'Hardware compatibility issues across different GPU architectures and memory types',
      'Software licensing restrictions that limit memory usage across different frameworks',
      'Network latency and bandwidth limitations affecting data transfer and processing speeds'
    ],
    correctAnswer: 0,
    explanation: 'Memory management addresses fundamental challenges including dataset scales exceeding available RAM and VRAM capacities, memory-intensive operations like deduplication, long-running processes with memory leaks, and distributed system memory balancing.'
  },
  {
    id: 'q3',
    question: 'How do partitioning strategies help manage memory consumption?',
    options: [
      'By automatically compressing data to reduce storage requirements',
      'Through dividing datasets into manageable chunks processed incrementally rather than loading complete datasets',
      'By distributing data processing across multiple cloud regions simultaneously',
      'Through dynamic scaling of computational resources based on current memory usage'
    ],
    correctAnswer: 1,
    explanation: 'Partitioning strategies divide datasets into manageable chunks processed incrementally rather than loading complete datasets into memory simultaneously, with configurable partition sizes balancing memory consumption against processing efficiency.'
  },
  {
    id: 'q4',
    question: 'What types of memory-intensive operations does NeMo Curator optimize?',
    options: [
      'Model training, gradient computation, and backpropagation algorithms',
      'Exact deduplication, quality classification, and other computationally demanding curation steps',
      'Network communication, data serialization, and distributed coordination protocols',
      'User interface rendering, visualization, and interactive data exploration tools'
    ],
    correctAnswer: 1,
    explanation: 'Memory-aware operation implementations optimize resource-intensive tasks including exact deduplication requiring comparison across extensive document collections, quality classification executing neural models, and other computationally demanding curation steps.'
  },
  {
    id: 'q5',
    question: 'What monitoring capabilities enable proactive memory management?',
    options: [
      'Real-time visibility into CPU and GPU memory utilization patterns for detecting capacity limits',
      'Automated performance benchmarking against industry-standard datasets',
      'Integration with external monitoring services for alerting and incident management',
      'Built-in cost tracking and resource allocation optimization across cloud providers'
    ],
    correctAnswer: 0,
    explanation: 'Monitoring capabilities enable proactive memory management through real-time visibility into CPU and GPU memory utilization patterns, enabling detection of approaching capacity limits and identification of memory leak symptoms.'
  },
  {
    id: 'q6',
    question: 'How does effective memory management impact dataset scale capabilities?',
    options: [
      'It automatically optimizes model architectures for improved accuracy on smaller datasets',
      'It enables real-time processing of streaming data with minimal latency requirements',
      'Memory management determines the maximum corpus sizes processable on given hardware',
      'Memory optimization primarily affects training speed rather than dataset size limits'
    ],
    correctAnswer: 2,
    explanation: 'Dataset scale enablement proves fundamental as effective memory management determines the maximum corpus sizes processable on given hardware, with optimized strategies enabling processing of multi-terabyte text collections on modest infrastructure.'
  },
  {
    id: 'q7',
    question: 'What operational reliability improvements emerge from controlled memory utilization?',
    options: [
      'Automatic model checkpointing and recovery from training failures',
      'Prevention of out-of-memory failures that abort long-running workflows and waste computational investment',
      'Built-in data validation and error detection during processing workflows',
      'Integration with version control systems for tracking data processing changes'
    ],
    correctAnswer: 1,
    explanation: 'Operational reliability improvements emerge from controlled memory utilization preventing out-of-memory failures that abort long-running workflows, waste computational investment, and delay project timelines.'
  },
  {
    id: 'q8',
    question: 'What are the two main approaches to partition control in memory management?',
    options: [
      'Sequential processing and parallel processing based on available computational resources',
      'Target-size partitioning based on memory footprint and count-based partitioning using fixed file numbers',
      'Compression-based partitioning and encryption-based partitioning for security optimization',
      'Local partitioning for single-node processing and distributed partitioning for cluster environments'
    ],
    correctAnswer: 1,
    explanation: 'Target-size partitioning specifies desired memory footprint for individual partitions, while count-based partitioning groups fixed numbers of files into partitions regardless of individual file sizes.'
  },
  {
    id: 'q9',
    question: 'When is target-size partitioning particularly valuable?',
    options: [
      'When processing structured data with uniform field lengths and data types',
      'When file sizes vary substantially across datasets, ensuring consistent memory utilization',
      'When dealing with real-time streaming data that requires immediate processing',
      'When implementing distributed processing across heterogeneous hardware architectures'
    ],
    correctAnswer: 1,
    explanation: 'Target-size partitioning proves particularly valuable when file sizes vary substantially across datasets, ensuring consistent memory utilization regardless of underlying file size distributions.'
  },
  {
    id: 'q10',
    question: 'What factors must partition size selection balance?',
    options: [
      'Data accuracy versus processing speed across different quality thresholds',
      'Security requirements versus accessibility needs for different user groups',
      'Cost optimization versus performance requirements across different deployment scenarios',
      'Memory consumption minimization, processing efficiency, parallelism enablement, and I/O efficiency'
    ],
    correctAnswer: 3,
    explanation: 'Partition size selection balances competing objectives including memory consumption minimization preferring smaller partitions, processing efficiency favoring larger partitions, parallelism enablement, and I/O efficiency.'
  },
  {
    id: 'q11',
    question: 'How do batch processing architectures maintain data integrity?',
    options: [
      'Through cryptographic signatures and hash verification for all processed data',
      'By implementing iterative workflows processing data subsets sequentially while maintaining correctness',
      'Via automatic backup and replication across multiple storage locations',
      'Through real-time validation against external data sources and reference databases'
    ],
    correctAnswer: 1,
    explanation: 'Batch processing implements iterative workflows processing data subsets sequentially while maintaining overall processing correctness and output integrity through careful coordination of reader and writer components.'
  },
  {
    id: 'q12',
    question: 'What approach does file-based batching use for processing datasets?',
    options: [
      'Processing datasets as sequences of file groups with each batch comprising manageable numbers of files',
      'Converting all data to a standardized file format before processing individual records',
      'Merging multiple small files into larger consolidated files for improved efficiency',
      'Creating temporary file copies in high-speed storage for accelerated processing'
    ],
    correctAnswer: 0,
    explanation: 'File-based batching processes datasets as sequences of file groups, with each batch comprising manageable numbers of files processable within memory constraints, mapping naturally to file-oriented storage systems.'
  },
  {
    id: 'q13',
    question: 'How does size-based batching ensure predictable memory usage?',
    options: [
      'By automatically adjusting computational algorithms based on available memory',
      'Through target partition sizes that control memory consumption directly regardless of input characteristics',
      'By implementing dynamic memory allocation and garbage collection optimization',
      'Through preprocessing data to uniform sizes before batch formation'
    ],
    correctAnswer: 1,
    explanation: 'Size-based batching controls memory consumption directly through target partition sizes, automatically grouping data to approximate specified memory footprints, ensuring predictable memory usage regardless of input data characteristics.'
  },
  {
    id: 'q14',
    question: 'What cost management benefits accumulate from effective memory optimization?',
    options: [
      'Infrastructure requirement reductions, operational cost decreases, and reduced waste from failed workflows',
      'Reduced software licensing costs through more efficient utilization of framework features',
      'Automatic negotiation of better cloud service pricing based on resource usage patterns',
      'Integration with financial systems for real-time cost tracking and budget management'
    ],
    correctAnswer: 0,
    explanation: 'Cost management benefits accumulate from infrastructure requirement reductions through efficient memory utilization, operational cost decreases from higher throughput per dollar, and reduced waste from failed workflows requiring reprocessing.'
  },
  {
    id: 'q15',
    question: 'How do monitoring frameworks support both development and production environments?',
    options: [
      'By providing identical interfaces and metrics across all deployment environments',
      'Through development-time memory profiling for optimization decisions and production-time monitoring for intervention',
      'By automatically migrating monitoring configurations from development to production systems',
      'Through integration with popular development tools and production management platforms'
    ],
    correctAnswer: 1,
    explanation: 'The monitoring framework supports both development-time memory profiling guiding optimization decisions and production-time operational monitoring enabling proactive intervention before memory exhaustion causes workflow failures.'
  }
];