import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does Triton Inference Server optimization encompass for production serving environments?',
    options: [
      'Systematic strategies for maximizing inference throughput, minimizing latency, and improving resource utilization',
      'Automated model training and fine-tuning for improved accuracy on specific tasks',
      'Security protocols and access control mechanisms for enterprise deployments',
      'Data preprocessing and feature engineering pipelines for model input preparation'
    ],
    correctAnswer: 0,
    explanation: 'Triton Inference Server optimization encompasses systematic strategies and techniques for maximizing inference throughput, minimizing latency, and improving resource utilization when deploying models in production serving environments.'
  },
  {
    id: 'q2',
    question: 'What fundamental tradeoff exists in performance optimization?',
    options: [
      'Model accuracy versus inference speed requiring careful balance for production deployment',
      'Latency-throughput tradeoffs where improvements in one dimension often involve compromises in the other',
      'Memory usage versus computational complexity across different model architectures',
      'Cost efficiency versus feature completeness in system design and implementation'
    ],
    correctAnswer: 1,
    explanation: 'Performance optimization requires careful analysis of latency-throughput tradeoffs where improvements in one dimension often involve compromises in the other, requiring balanced configuration choices.'
  },
  {
    id: 'q3',
    question: 'What characterizes minimum latency configurations in Triton optimization?',
    options: [
      'Maximum hardware utilization through aggressive batching and parallel processing',
      'Single request processing without batching or instance replication, eliminating coordination overhead',
      'Dynamic load balancing across multiple server instances for optimal response times',
      'Automated scaling based on real-time demand patterns and resource availability'
    ],
    correctAnswer: 1,
    explanation: 'Minimum latency configurations typically employ single request processing without batching or instance replication, eliminating coordination overhead and queue waiting times at cost of reduced throughput.'
  },
  {
    id: 'q4',
    question: 'How do maximum throughput configurations achieve their performance goals?',
    options: [
      'By reducing model complexity and computational requirements for faster processing',
      'Through specialized hardware acceleration and custom kernel implementations',
      'By implementing advanced caching mechanisms and result precomputation strategies',
      'Via aggressive batching, multiple model instances, and concurrent request processing to saturate resources'
    ],
    correctAnswer: 3,
    explanation: 'Maximum throughput configurations leverage aggressive batching, multiple model instances, and concurrent request processing to saturate available computational resources, accepting increased individual request latency.'
  },
  {
    id: 'q5',
    question: 'What types of optimization strategies does Triton employ?',
    options: [
      'Only framework-specific optimizations tailored to individual inference engines',
      'Model-agnostic strategies applicable across all backends and framework-specific optimizations for particular engines',
      'Exclusively universal strategies that work identically across all model types',
      'Hardware-dependent optimizations that require specific GPU architectures'
    ],
    correctAnswer: 1,
    explanation: 'The optimization approach combines model-agnostic strategies applicable across all framework backends with framework-specific optimizations leveraging unique capabilities of particular inference engines.'
  },
  {
    id: 'q6',
    question: 'What optimization technique typically provides the largest performance improvements?',
    options: [
      'Model quantization and precision reduction for memory and computational efficiency',
      'Dynamic batching for models supporting batch inference, combining individual requests into larger batches',
      'Hardware acceleration through specialized inference engines and custom kernels',
      'Caching and result precomputation for frequently requested inference patterns'
    ],
    correctAnswer: 1,
    explanation: 'Dynamic batching represents the optimization technique typically providing largest performance improvements for models supporting batch inference, combining individual requests into larger batches executing more efficiently.'
  },
  {
    id: 'q7',
    question: 'Why do modern GPU architectures benefit substantially from batching?',
    options: [
      'Batching reduces power consumption and thermal requirements for sustained operation',
      'Better hardware utilization, reduced per-inference overhead, and improved memory access patterns',
      'Batching enables automatic load balancing across multiple GPU devices simultaneously',
      'Larger batches allow for more accurate numerical computations with higher precision'
    ],
    correctAnswer: 1,
    explanation: 'Modern GPU architectures achieve substantially higher throughput processing larger batches through better hardware utilization, reduced per-inference overhead from amortized setup costs, and improved memory access patterns.'
  },
  {
    id: 'q8',
    question: 'What requirement is essential for dynamic batching effectiveness?',
    options: [
      'Models must be specifically designed and trained for batch processing operations',
      'Specialized hardware with dedicated batching acceleration capabilities',
      'Sufficient concurrent requests to form meaningful batches from request streams',
      'Complex scheduling algorithms that predict optimal batch formation timing'
    ],
    correctAnswer: 2,
    explanation: 'Request concurrency requirements scale with batching effectiveness, as dynamic batching requires sufficient concurrent requests to form meaningful batches from concurrent request streams.'
  },
  {
    id: 'q9',
    question: 'How does model instance replication improve performance?',
    options: [
      'By automatically distributing model weights across multiple storage devices',
      'Through multiple independent model copies processing requests concurrently and enabling overlap of operations',
      'By creating backup copies that provide fault tolerance and high availability',
      'Through dynamic load balancing that routes requests to the least busy instances'
    ],
    correctAnswer: 1,
    explanation: 'Model instance replication enables multiple independent copies of models to process requests concurrently, improving throughput through parallel execution and enabling overlap of memory transfers with inference computation.'
  },
  {
    id: 'q10',
    question: 'For which scenarios is model instance replication particularly effective?',
    options: [
      'Large models that fully saturate GPU computational capacity with single instances',
      'Smaller models where single instances fail to saturate available GPU computational capacity',
      'Models requiring extensive memory bandwidth that exceeds single GPU capabilities',
      'Complex models with irregular computation patterns that benefit from load distribution'
    ],
    correctAnswer: 1,
    explanation: 'Instance replication proves particularly effective for smaller models where single instances fail to saturate available GPU computational capacity, with multiple instances enabling better hardware utilization.'
  },
  {
    id: 'q11',
    question: 'What controls does dynamic batcher configuration provide?',
    options: [
      'Maximum batch sizes, delay budgets, preferred batch sizes, and queue policies',
      'Automatic model selection, precision optimization, and memory management',
      'Load balancing algorithms, failover mechanisms, and health check procedures',
      'Security policies, access controls, and audit logging configurations'
    ],
    correctAnswer: 0,
    explanation: 'Dynamic batcher configuration controls multiple behaviors including maximum batch sizes, delay budgets constraining wait times, preferred batch sizes guiding formation, and queue policies managing prioritization.'
  },
  {
    id: 'q12',
    question: 'What methodology does Triton optimization follow?',
    options: [
      'Trial-and-error experimentation without systematic measurement or analysis',
      'Automatic configuration tuning without human intervention or performance analysis',
      'Single-pass optimization that applies all available techniques simultaneously',
      'Baseline characterization, incremental optimization application, and configuration selection balancing objectives'
    ],
    correctAnswer: 3,
    explanation: 'Optimization methodology follows systematic processes beginning with baseline performance characterization, followed by incremental application of optimization techniques while measuring impact.'
  },
  {
    id: 'q13',
    question: 'How do throughput improvements benefit organizations economically?',
    options: [
      'By eliminating the need for model training and development infrastructure',
      'Through serving higher request volumes on fixed infrastructure, reducing per-inference costs',
      'By automatically negotiating better pricing with cloud service providers',
      'Through reduced software licensing costs and improved vendor relationships'
    ],
    correctAnswer: 1,
    explanation: 'Throughput improvements enable serving higher request volumes on fixed infrastructure, reducing per-inference infrastructure costs and enabling greater scaling without proportional hardware expansion.'
  },
  {
    id: 'q14',
    question: 'In what scenarios are latency reductions particularly valuable?',
    options: [
      'Batch processing applications where throughput is more important than individual response times',
      'Interactive applications, real-time inference, autonomous systems, and fraud detection where delays degrade effectiveness',
      'Offline analysis and reporting systems that process data in scheduled batches',
      'Archive and backup systems where response time is less critical than data integrity'
    ],
    correctAnswer: 1,
    explanation: 'Lower latency proves particularly valuable for interactive applications, real-time inference scenarios, autonomous systems, fraud detection, and interactive content generation where delays degrade effectiveness.'
  },
  {
    id: 'q15',
    question: 'How does deployment flexibility increase from optimization techniques?',
    options: [
      'By automatically adapting to different hardware architectures without configuration changes',
      'Through diverse configuration options supporting different performance profiles from single deployments',
      'By eliminating the need for performance tuning and manual optimization efforts',
      'Through automatic scaling that adjusts resources based on current demand patterns'
    ],
    correctAnswer: 1,
    explanation: 'Deployment flexibility increases from optimization techniques enabling diverse configuration options supporting different performance profiles from single deployments, allowing tuning for specific applications balancing different requirements.'
  }
];