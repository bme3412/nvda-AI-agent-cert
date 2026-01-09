import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does TensorRT performance optimization primarily address for deep learning inference workloads?',
    options: [
      'Model accuracy improvement through advanced training techniques and data augmentation',
      'Latency reduction, throughput maximization, resource utilization efficiency, and cost-effective scaling',
      'Hardware compatibility across different GPU architectures and vendor platforms',
      'Software integration with cloud-based machine learning platforms and services'
    ],
    correctAnswer: 1,
    explanation: 'TensorRT performance optimization addresses critical deployment requirements including latency reduction, throughput maximization, resource utilization efficiency, and cost-effective scaling of production inference workloads.'
  },
  {
    id: 'q2',
    question: 'What is the primary performance benchmarking tool for TensorRT models?',
    options: [
      'The trtexec command-line utility that provides standardized measurements for various model formats',
      'NVIDIA Nsight Systems for comprehensive application profiling and analysis',
      'CUDA Profiler for kernel-level performance monitoring and optimization',
      'TensorBoard for visualization and monitoring of training and inference metrics'
    ],
    correctAnswer: 0,
    explanation: 'The trtexec command-line utility serves as the primary performance benchmarking tool, providing standardized measurements for ONNX models, quantized networks, and pre-built TensorRT engines across various configurations.'
  },
  {
    id: 'q3',
    question: 'Which optimization techniques are mentioned as key strategies for TensorRT performance enhancement?',
    options: [
      'Data preprocessing, model compression, transfer learning, and ensemble methods',
      'Cloud deployment, containerization, microservices architecture, and load balancing',
      'Version control, continuous integration, automated testing, and monitoring',
      'Batching, layer fusion, multi-streaming, CUDA Graphs, and quantization'
    ],
    correctAnswer: 3,
    explanation: 'Optimization strategies leverage batching for parallel processing, layer fusion to combine operations, multi-streaming for concurrency, CUDA Graphs for overhead reduction, and quantization for reduced-precision arithmetic.'
  },
  {
    id: 'q4',
    question: 'How does NVIDIA Nsight Systems support TensorRT profiling?',
    options: [
      'By providing automated model optimization recommendations based on profiling data',
      'Through real-time inference monitoring and alerting for production deployments',
      'By capturing kernel execution timelines, CPU activity traces, and API call sequences with NVTX markers',
      'Via integration with cloud platforms for distributed profiling and analysis'
    ],
    correctAnswer: 2,
    explanation: 'NVIDIA Nsight Systems captures kernel execution timelines, CPU activity traces, memory transfer operations, and API call sequences, with NVTX markers correlating high-level layer operations with underlying kernel executions.'
  },
  {
    id: 'q5',
    question: 'What is the recommended approach for batch size selection in TensorRT optimization?',
    options: [
      'Always use the largest possible batch size to maximize throughput regardless of other constraints',
      'Batch sizes should be multiples of 32 for optimal performance with FP16 and INT8 precision on Tensor Cores',
      'Use batch sizes of exactly 1 to minimize latency for real-time applications',
      'Select batch sizes based solely on available GPU memory without considering computational efficiency'
    ],
    correctAnswer: 1,
    explanation: 'Batch sizes as multiples of 32 often deliver optimal performance for FP16 and INT8 precision on hardware supporting Tensor Cores, aligning with hardware execution granularities.'
  },
  {
    id: 'q6',
    question: 'What is layer fusion and how does it improve performance?',
    options: [
      'Combining adjacent operations into optimized kernels that eliminate intermediate memory traffic',
      'Combining multiple models into a single ensemble for improved accuracy',
      'Merging training and inference phases to reduce overall computation time',
      'Fusing multiple GPU devices to increase available computational resources'
    ],
    correctAnswer: 0,
    explanation: 'Layer fusion combines multiple adjacent operations into single optimized kernels that eliminate intermediate memory traffic, reduce kernel launch overhead, and enable hardware-specific optimizations.'
  },
  {
    id: 'q7',
    question: 'How do CUDA Graphs improve TensorRT performance?',
    options: [
      'By automatically optimizing model architecture for better accuracy',
      'Through dynamic memory allocation and garbage collection optimization',
      'By capturing kernel launch sequences into reusable execution templates that eliminate per-inference overhead',
      'Via parallel execution across multiple GPU devices simultaneously'
    ],
    correctAnswer: 2,
    explanation: 'CUDA Graphs capture kernel launch sequences into reusable execution templates that eliminate per-inference overhead from kernel queueing, particularly beneficial for enqueue-bound workloads.'
  },
  {
    id: 'q8',
    question: 'What profiling capabilities does the built-in TensorRT profiling interface provide?',
    options: [
      'Automatic model compression and quantization recommendations',
      'Layer-level timing information during inference execution through IProfiler implementations',
      'Real-time GPU utilization monitoring and thermal management',
      'Integration with external monitoring systems and alerting platforms'
    ],
    correctAnswer: 1,
    explanation: 'TensorRT provides native profiling interfaces through IProfiler implementations that receive layer-level timing information during inference execution, supporting performance analysis without external tools.'
  },
  {
    id: 'q9',
    question: 'What is opportunistic batching and when is it beneficial?',
    options: [
      'A technique for combining models with different architectures into unified inference pipelines',
      'Static allocation of fixed batch sizes based on historical workload patterns',
      'Dynamic aggregation of multiple requests within time windows for combined processing',
      'Automatic adjustment of model precision based on available computational resources'
    ],
    correctAnswer: 2,
    explanation: 'Opportunistic batching implements dynamic aggregation strategies that collect multiple requests arriving within time windows for combined processing, adding bounded latency while substantially improving throughput.'
  },
  {
    id: 'q10',
    question: 'Which types of operations commonly benefit from layer fusion in TensorRT?',
    options: [
      'Data loading and preprocessing operations with file I/O optimization',
      'Convolution with activation functions, convolution with element-wise operations, and multi-head attention',
      'Model serialization and deserialization for deployment optimization',
      'Network communication and distributed inference coordination'
    ],
    correctAnswer: 1,
    explanation: 'Common fusion patterns include convolution with activation functions (ReLU, GELU, Clip), convolution with element-wise operations, and multi-head attention fusion for transformer architectures.'
  },
  {
    id: 'q11',
    question: 'How does multi-streaming improve TensorRT performance?',
    options: [
      'By distributing model weights across multiple storage devices for faster loading',
      'Through concurrent execution across multiple contexts or within single inference passes using auxiliary streams',
      'By automatically scaling inference workloads across cloud-based GPU clusters',
      'Via compression of input data streams to reduce memory bandwidth requirements'
    ],
    correctAnswer: 1,
    explanation: 'Multi-streaming exploits parallelism through concurrent stream utilization, with auxiliary streams allowing compatible layers to execute in parallel and cross-inference streaming enabling concurrent processing.'
  },
  {
    id: 'q12',
    question: 'What considerations are important for graph-based execution in TensorRT?',
    options: [
      'Automatic model architecture optimization and hyperparameter tuning',
      'Memory management with fixed buffer addresses and shape-specific capture requirements',
      'Integration with distributed training frameworks and gradient synchronization',
      'Real-time adaptation to changing input data characteristics and distributions'
    ],
    correctAnswer: 1,
    explanation: 'Graph-based execution requires careful memory management since buffer addresses captured during graph creation remain fixed, and captured graphs remain specific to input shapes and execution context states.'
  },
  {
    id: 'q13',
    question: 'What types of performance metrics does trtexec provide for TensorRT benchmarking?',
    options: [
      'Model accuracy metrics, validation scores, and prediction confidence intervals',
      'Throughput as queries per second, latency statistics, and breakdown metrics isolating transfers and compute time',
      'Hardware utilization percentages, power consumption, and thermal characteristics',
      'Memory allocation patterns, garbage collection statistics, and cache hit rates'
    ],
    correctAnswer: 1,
    explanation: 'Performance measurements include throughput as queries per second, latency statistics with percentiles, and breakdown metrics isolating host-to-device transfers, GPU compute time, and device-to-host transfers.'
  },
  {
    id: 'q14',
    question: 'What limitations exist for CUDA Graph compatibility in TensorRT?',
    options: [
      'Incompatibility with multi-GPU deployments and distributed inference scenarios',
      'Limited support for batch sizes larger than 32 or precision modes other than FP32',
      'Dynamic control flow like loops and conditionals, data-dependent shapes, and specialized operations',
      'Restrictions on model architectures that use convolutional or attention mechanisms'
    ],
    correctAnswer: 2,
    explanation: 'Graph compatibility limitations include dynamic control flow like loops and conditionals, data-dependent shapes, and certain specialized operations incompatible with graph semantics that require mid-pipeline CPU interaction.'
  },
  {
    id: 'q15',
    question: 'How does quantization fusion work in TensorRT optimization?',
    options: [
      'By automatically determining optimal precision modes based on hardware capabilities',
      'Through propagating quantization specifications and enabling INT8 or FP8 execution while maintaining accuracy',
      'By combining multiple quantization techniques to achieve maximum compression ratios',
      'Via dynamic adjustment of quantization parameters based on input data characteristics'
    ],
    correctAnswer: 1,
    explanation: 'Quantization fusion handles QuantizeLinear and DequantizeLinear operations by propagating quantization specifications through networks, enabling INT8 or FP8 execution while maintaining accuracy through proper scaling.'
  }
];