import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What are the two distinct batching strategies provided by Triton Inference Server?',
    options: [
      'Dynamic batching for stateless models and sequence batching for stateful models',
      'Synchronous batching for real-time requests and asynchronous batching for batch processing',
      'Local batching for single-node deployments and distributed batching for multi-node clusters',
      'Priority batching for critical requests and standard batching for regular traffic'
    ],
    correctAnswer: 0,
    explanation: 'Triton provides dynamic batching for stateless models by combining concurrent requests, and sequence batching for stateful models where request sequences must maintain routing to specific instances for correct state management.'
  },
  {
    id: 'q2',
    question: 'How does batching improve computational efficiency in inference workloads?',
    options: [
      'By reducing model accuracy requirements and enabling faster approximate computations',
      'Through automatic model compression and quantization during request processing',
      'By amortizing fixed overhead across multiple instances and transforming vector-matrix into matrix-matrix operations',
      'Via parallel model loading across multiple GPU devices for distributed processing'
    ],
    correctAnswer: 2,
    explanation: 'Batching amortizes fixed computational overhead like kernel launch costs and memory allocation across multiple inference instances, and transforms computation from inefficient vector-matrix operations into matrix-matrix operations with better hardware utilization.'
  },
  {
    id: 'q3',
    question: 'What is the primary tradeoff consideration when configuring maximum queue delays in dynamic batching?',
    options: [
      'Memory usage versus computational accuracy when forming larger batch sizes',
      'Per-request latency increases versus throughput improvements through larger average batch sizes',
      'Power consumption versus model prediction accuracy across different batch configurations',
      'Storage requirements versus network bandwidth utilization for request queuing'
    ],
    correctAnswer: 1,
    explanation: 'Maximum queue delay enables request deferral for bounded periods to allow larger batches, trading increased per-request latency for improved throughput through larger average batch sizes.'
  },
  {
    id: 'q4',
    question: 'How does priority-based scheduling work in Triton\'s dynamic batching system?',
    options: [
      'By automatically adjusting batch sizes based on the computational complexity of different request types',
      'By allocating dedicated GPU resources to requests based on their assigned priority levels',
      'Through separate queues for each priority level, processing higher-priority queues before lower-priority ones',
      'Via dynamic load balancing that distributes requests across model instances based on current utilization'
    ],
    correctAnswer: 2,
    explanation: 'Priority-based scheduling maintains separate queues for each configured priority level, processing higher-priority queues before lower-priority queues while still forming batches within each priority tier.'
  },
  {
    id: 'q5',
    question: 'When should models specify preferred batch sizes rather than relying on maximum batch sizes?',
    options: [
      'When models require specific memory alignment patterns for optimal GPU utilization',
      'For models with highly non-uniform performance across batch dimensions, particularly TensorRT models with optimization profiles',
      'When dealing with variable-length input sequences that require specialized padding strategies',
      'For models that need to maintain consistent latency characteristics across all request types'
    ],
    correctAnswer: 1,
    explanation: 'Preferred batch sizes prove valuable primarily for models with highly non-uniform performance across batch dimensions, particularly TensorRT models utilizing multiple optimization profiles where specific batch sizes align with performance-optimized profiles.'
  },
  {
    id: 'q6',
    question: 'What functionality does custom batching provide beyond standard dynamic batching?',
    options: [
      'Automatic model optimization and hyperparameter tuning based on request patterns',
      'Application-specific batch formation logic through extensible interfaces with custom decision making',
      'Integration with external monitoring systems for real-time performance analytics',
      'Built-in load balancing across multiple data centers and geographic regions'
    ],
    correctAnswer: 1,
    explanation: 'Custom batching enables application-specific batch formation logic beyond standard behavior through extensible interfaces that inject custom decision making into batch construction processes.'
  },
  {
    id: 'q7',
    question: 'How does sequence batching differ from dynamic batching in terms of state management?',
    options: [
      'Sequence batching requires dedicated GPU memory allocation for each request sequence',
      'Sequence batching processes requests synchronously while dynamic batching operates asynchronously',
      'Sequence batching uses different model architectures optimized for temporal data processing',
      'Sequence batching maintains state isolation across concurrent sequences while ensuring sequence-instance affinity'
    ],
    correctAnswer: 3,
    explanation: 'Sequence batching maintains state isolation across concurrent sequences while achieving batching efficiency through parallel processing, ensuring sequence-instance affinity preservation for correct state management.'
  },
  {
    id: 'q8',
    question: 'What are the key cost efficiency advantages that batching provides?',
    options: [
      'Reduced software licensing costs through shared model instances across multiple requests',
      'Lower bandwidth requirements through compressed request and response data formats',
      'Higher per-GPU throughput reducing server count, hardware costs, and operational complexity',
      'Decreased training time and data requirements for achieving target model performance'
    ],
    correctAnswer: 2,
    explanation: 'Higher per-GPU throughput reduces the server count required to handle target request volumes, directly decreasing hardware acquisition costs, data center space, power consumption, and operational complexity.'
  },
  {
    id: 'q9',
    question: 'How does the batch formation algorithm balance competing objectives?',
    options: [
      'By using machine learning algorithms to predict optimal batch configurations in real-time',
      'Through maximizing batch sizes for throughput while respecting latency budgets with maximum delay constraints',
      'By prioritizing accuracy over speed and adjusting batch sizes based on model confidence scores',
      'Via dynamic resource allocation that scales GPU memory and compute based on current demand'
    ],
    correctAnswer: 1,
    explanation: 'The formation algorithm balances competing goals of maximizing batch sizes for throughput while respecting latency budgets through maximum delay constraints that bound request waiting times.'
  },
  {
    id: 'q10',
    question: 'What tools are mentioned for automated exploration of delay parameter optimization?',
    options: [
      'TensorBoard and MLflow for experiment tracking and parameter optimization',
      'Model Analyzer for automated exploration of delay parameter spaces to identify optimal configurations',
      'NVIDIA Nsight Systems for profiling and performance analysis of batching behavior',
      'Triton Model Navigator for automatic model optimization and deployment configuration'
    ],
    correctAnswer: 1,
    explanation: 'Model Analyzer supports automated exploration of delay parameter spaces to identify configurations achieving desired latency-throughput tradeoffs by evaluating performance across delay value ranges.'
  },
  {
    id: 'q11',
    question: 'What are the five key functions that custom batching implementations must provide?',
    options: [
      'Authentication, authorization, encryption, compression, and caching for secure request handling',
      'Batch initialization, request inclusion decisions, batch finalization, lifecycle management, and resource allocation',
      'Load balancing, health checking, retry logic, timeout handling, and error recovery',
      'Model loading, input validation, inference execution, output processing, and result formatting'
    ],
    correctAnswer: 1,
    explanation: 'Custom batching implementations provide five key functions: batch initialization, request inclusion decisions, batch finalization, lifecycle management, and resource allocation for controlling batch construction processes.'
  },
  {
    id: 'q12',
    question: 'How does batching affect memory bandwidth utilization and cache effectiveness?',
    options: [
      'By increasing memory requirements and reducing cache hit rates due to larger working sets',
      'Through reduced memory traffic per inference via shared weight access and improved cache locality',
      'By requiring specialized memory management algorithms for handling variable batch sizes',
      'Via automatic memory compression and decompression during batch processing operations'
    ],
    correctAnswer: 1,
    explanation: 'Batched execution reduces memory traffic per inference through shared weight access, improved cache locality, and reduced overhead from repeated model loading, improving overall efficiency.'
  },
  {
    id: 'q13',
    question: 'What queue management capabilities does the priority framework provide?',
    options: [
      'Automatic request routing based on geographic location and network latency',
      'Maximum queue sizes, timeout mechanisms, and per-request timeout specifications',
      'Integration with external message queuing systems like Apache Kafka or RabbitMQ',
      'Built-in request deduplication and result caching for improved efficiency'
    ],
    correctAnswer: 1,
    explanation: 'Queue policy specifications enable fine-grained control including maximum queue sizes to bound memory consumption, timeout mechanisms for requests exceeding wait durations, and per-request timeout specifications.'
  },
  {
    id: 'q14',
    question: 'In what scenarios is priority-based scheduling particularly valuable?',
    options: [
      'When processing requests from different geographic regions with varying network latencies',
      'For multi-tenant scenarios, latency-sensitive interactive workloads coexisting with batch processing, and business-critical requests',
      'When dealing with models that have different computational requirements and memory usage patterns',
      'For managing requests across different programming languages and client SDK implementations'
    ],
    correctAnswer: 1,
    explanation: 'Priority scheduling proves valuable in multi-tenant scenarios, when latency-sensitive interactive workloads coexist with throughput-oriented batch processing, or when business-critical requests require preferential handling.'
  },
  {
    id: 'q15',
    question: 'How does the custom batching library deployment hierarchy work?',
    options: [
      'Libraries are deployed globally and automatically distributed to all model instances',
      'Deployment checks version, model, and backend directories in sequence for flexible deployment patterns',
      'Custom libraries must be compiled for each specific GPU architecture and CUDA version',
      'Libraries are loaded dynamically from remote repositories based on model requirements'
    ],
    correctAnswer: 1,
    explanation: 'The loading hierarchy checks version, model, and backend directories in sequence, enabling flexible deployment patterns from highly specialized per-model logic through broadly applicable backend-default strategies.'
  }
];