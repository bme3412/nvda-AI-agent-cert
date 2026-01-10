import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does large language model inference optimization primarily address?',
    options: [
      'Reducing computational costs, memory consumption, and latency when deploying transformer-based models in production',
      'Improving model accuracy and training convergence rates for better performance outcomes',
      'Enhancing data preprocessing and feature engineering pipelines for model input preparation',
      'Securing model weights and protecting against adversarial attacks during inference operations'
    ],
    correctAnswer: 0,
    explanation: 'LLM inference optimization encompasses comprehensive strategies for reducing computational costs, memory consumption, and latency when deploying transformer-based models in production environments.'
  },
  {
    id: 'q2',
    question: 'What characterizes the prefill phase in autoregressive generation?',
    options: [
      'Highly parallelized matrix-matrix operations processing all input tokens simultaneously to generate intermediate states',
      'Sequential token processing with memory-bandwidth-bound operations requiring iterative computation',
      'Mixed-precision arithmetic operations that optimize memory usage while maintaining computational accuracy',
      'Dynamic batching operations that combine multiple requests into unified execution patterns'
    ],
    correctAnswer: 0,
    explanation: 'Prefill phase processing computes intermediate key and value tensors for all input tokens simultaneously, leveraging parallel matrix-matrix operations that effectively saturate GPU computational capacity.'
  },
  {
    id: 'q3',
    question: 'What distinguishes the decode phase execution characteristics?',
    options: [
      'Matrix-vector operations generating tokens autoregressively with memory-bandwidth-bound execution',
      'Parallel processing of multiple tokens simultaneously using advanced speculation techniques',
      'Highly optimized matrix-matrix computations achieving maximum hardware utilization percentages',
      'Batch processing operations that scale linearly with input length and context size'
    ],
    correctAnswer: 0,
    explanation: 'Decode phase generates output tokens autoregressively as matrix-vector operations with lower computational intensity, resulting in memory-bandwidth-bound execution where data transfer dominates.'
  },
  {
    id: 'q4',
    question: 'Why does traditional static batching prove suboptimal for language model inference?',
    options: [
      'Variable output lengths across batch members force completed requests to wait for longest generation',
      'Static batching cannot effectively utilize GPU computational resources due to hardware limitations',
      'Static allocation prevents dynamic memory optimization and efficient resource utilization patterns',
      'Batch size limitations arise from fundamental transformer architecture constraints and dependencies'
    ],
    correctAnswer: 0,
    explanation: 'Static batching proves suboptimal due to variable output lengths across batch members, forcing completed requests to wait for the longest batch member before processing completes.'
  },
  {
    id: 'q5',
    question: 'How does in-flight batching address static batching limitations?',
    options: [
      'By dynamically managing batch composition throughout execution, removing completed sequences and adding new requests',
      'Through automatic hardware optimization and specialized kernel implementations for improved performance',
      'Through advanced scheduling algorithms that predict optimal batch formation timing and resource allocation',
      'By implementing sophisticated caching mechanisms that reduce redundant computation across batch members'
    ],
    correctAnswer: 0,
    explanation: 'In-flight batching dynamically manages batch composition throughout execution, with completed sequences immediately exiting batches and new pending requests inserted into freed slots.'
  },
  {
    id: 'q6',
    question: 'What fundamental optimization does key-value caching provide?',
    options: [
      'Avoiding redundant recomputation of attention tensors during autoregressive token generation',
      'Compression of attention mechanisms to reduce memory consumption and computational complexity',
      'Optimizing matrix multiplication operations through specialized kernel implementations and scheduling',
      'Enabling parallel processing of multiple attention heads across different computational devices'
    ],
    correctAnswer: 0,
    explanation: 'Key-value caching represents fundamental optimization avoiding redundant recomputation of attention tensors during autoregressive generation by storing tensors in GPU memory.'
  },
  {
    id: 'q7',
    question: 'How does dynamic cache management improve memory efficiency?',
    options: [
      'Through block-based allocation enabling storage of logical sequences in non-contiguous physical memory',
      'By implementing compression algorithms that reduce the storage requirements for cached tensors',
      'By automatically determining optimal cache sizes based on workload characteristics and usage patterns',
      'Through specialized data structures that optimize memory access patterns for attention computations'
    ],
    correctAnswer: 0,
    explanation: 'Dynamic cache management uses block-based allocation partitioning caches into fixed-size units, enabling storage of continuous logical sequences in non-contiguous physical memory blocks.'
  },
  {
    id: 'q8',
    question: 'What characterizes pipeline parallelism in model distribution?',
    options: [
      'Vertical partitioning of models into sequential layer groups distributed across devices with pipeline processing',
      'Horizontal partitioning of individual layers into independent computational blocks across devices',
      'Simultaneous processing of different input sequences across multiple devices for increased throughput',
      'Dynamic load balancing that distributes computational work based on current device utilization'
    ],
    correctAnswer: 0,
    explanation: 'Pipeline parallelism partitions models vertically into sequential layer groups distributed across devices, with each device executing subset of layers in pipeline fashion.'
  },
  {
    id: 'q9',
    question: 'What limitation does pipeline bubble inefficiency represent?',
    options: [
      'Sequential processing creating idle periods where devices wait for predecessor outputs before execution',
      'Memory bandwidth constraints that limit the effective utilization of distributed computational resources',
      'Communication overhead from inter-device data movement reducing overall system throughput',
      'Load balancing challenges arising from heterogeneous hardware capabilities across pipeline stages'
    ],
    correctAnswer: 0,
    explanation: 'Pipeline bubble inefficiency arises from sequential processing where devices wait for predecessor outputs, creating idle periods during forward and backward passes.'
  },
  {
    id: 'q10',
    question: 'How does tensor parallelism partition model computation?',
    options: [
      'By partitioning individual layers horizontally into independent computational blocks executing across devices',
      'Through distributing different input sequences across multiple devices for concurrent processing',
      'Through dynamic allocation of computational resources based on real-time workload characteristics',
      'By implementing specialized scheduling algorithms that optimize communication patterns between devices'
    ],
    correctAnswer: 0,
    explanation: 'Tensor parallelism partitions individual layers horizontally into independent computational blocks executing across multiple devices, with each device processing full batch using parameter subsets.'
  },
  {
    id: 'q11',
    question: 'What advantage does multi-query attention provide over standard multi-head attention?',
    options: [
      'Substantial reduction in memory bandwidth requirements through shared key-value projections across heads',
      'Improved model accuracy through enhanced representational capacity and learning capabilities',
      'Enhanced computational efficiency through optimized matrix multiplication operations and scheduling',
      'Better parallelization opportunities through independent processing of attention operations'
    ],
    correctAnswer: 0,
    explanation: 'Multi-query attention shares key and value projections across multiple attention heads while maintaining separate queries, substantially reducing memory bandwidth requirements during decode phase.'
  },
  {
    id: 'q12',
    question: 'What does Flash attention achieve through computation reordering?',
    options: [
      'Input-output aware attention leveraging GPU memory hierarchy more effectively without changing mathematics',
      'Approximate attention computation that trades accuracy for significant performance improvements',
      'Parallel attention computation across multiple heads with optimized inter-head communication patterns',
      'Dynamic attention patterns that adapt to input characteristics for improved computational efficiency'
    ],
    correctAnswer: 0,
    explanation: 'Flash attention implements input-output aware attention computation reordering operations to leverage GPU memory hierarchy more effectively while preserving exact mathematical equivalence.'
  },
  {
    id: 'q13',
    question: 'How does quantization reduce inference requirements?',
    options: [
      'Through reducing numerical precision of weights and activations from 32-bit to lower precision formats',
      'By approximating model computations with simplified algorithms that maintain acceptable accuracy',
      'By eliminating unnecessary model parameters through structured pruning and sparsity techniques',
      'Through optimizing model architectures by removing redundant layers and computational components'
    ],
    correctAnswer: 0,
    explanation: 'Quantization reduces numerical precision of model weights and activations from standard 32-bit or 16-bit floating point to lower precision formats like 8-bit integers.'
  },
  {
    id: 'q14',
    question: 'What does sparsity optimization achieve for model compression?',
    options: [
      'Exploitation of model robustness to pruning where values near zero become exactly zero without accuracy loss',
      'Dynamic adjustment of model architecture based on input characteristics and computational requirements',
      'Optimization of memory access patterns through specialized data structures and caching mechanisms',
      'Automatic hyperparameter tuning that optimizes model configuration for specific deployment scenarios'
    ],
    correctAnswer: 0,
    explanation: 'Sparsity exploits model robustness to pruning where values near zero become exactly zero without significantly degrading accuracy, enabling sparse matrix representations.'
  },
  {
    id: 'q15',
    question: 'How does speculative inference achieve parallelization in sequential token generation?',
    options: [
      'By predicting multiple future tokens speculatively and verifying predictions in parallel with draft models',
      'Through advanced scheduling algorithms that predict optimal resource allocation across computational devices',
      'Through dynamic batching that combines multiple generation requests into unified execution patterns',
      'By implementing sophisticated caching mechanisms that eliminate redundant computation in token generation'
    ],
    correctAnswer: 0,
    explanation: 'Speculative inference parallelizes sequential token generation by predicting multiple future tokens speculatively using draft models and verifying predictions in parallel with the main model.'
  }
];