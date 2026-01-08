import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary benefit of enabling dynamic batching in Triton Inference Server?',
    options: [
      'It reduces GPU memory consumption by 50%',
      'It combines individual inference requests into larger batches that execute more efficiently',
      'It automatically selects the optimal model framework',
      'It distributes requests across multiple GPUs simultaneously'
    ],
    correctAnswer: 1,
    explanation: 'Dynamic batching is a key optimization technique that allows Triton to combine multiple individual inference requests into a single larger batch. This is more efficient because GPUs are designed to process batches of data in parallel, achieving better throughput than processing requests individually. This doesn\'t reduce memory consumption, select frameworks, or distribute across GPUs - it specifically optimizes batch processing on a single model instance.'
  },
  {
    id: 'q2',
    question: 'Why does throughput typically increase when moving from concurrency 1 to concurrency 2, even without dynamic batching enabled?',
    options: [
      'The GPU automatically enables parallel processing at concurrency 2',
      'Triton overlaps processing of one request with communication of another request',
      'The model switches to a more efficient precision mode automatically',
      'Additional CPU cores are automatically allocated at higher concurrency levels'
    ],
    correctAnswer: 1,
    explanation: 'With only one concurrent request, Triton is idle during the time when the response is being returned to the client and the next request is being received. With two concurrent requests, Triton can overlap the processing of one request with the communication (sending/receiving) of the other, effectively hiding communication latency. This is especially noticeable when the client and server are on the same system.'
  },
  {
    id: 'q3',
    question: 'What is the recommended formula for calculating optimal request concurrency to maximize throughput when using dynamic batching?',
    options: [
      '2 × maximum batch size × model instance count',
      'Maximum batch size + model instance count',
      'Model instance count × GPU count × 2',
      'Maximum batch size ÷ model instance count'
    ],
    correctAnswer: 0,
    explanation: 'The rule of thumb for maximum throughput is to set request concurrency to 2 × max_batch_size × model_instance_count. The factor of 2 accounts for overlapping communication with computation. This formula ensures enough concurrent requests are available for the dynamic batcher to create full batches while keeping the inference pipeline continuously fed.'
  },
  {
    id: 'q4',
    question: 'What is the primary advantage of using multiple model instances in Triton?',
    options: [
      'It reduces the model\'s memory footprint through sharing',
      'It allows overlap of memory transfer operations with inference compute',
      'It automatically enables dynamic batching',
      'It converts models to TensorRT format on-the-fly'
    ],
    correctAnswer: 1,
    explanation: 'Multiple model instances improve performance by allowing memory transfer operations (such as CPU-to-GPU or GPU-to-CPU transfers) to overlap with inference computation. This increases GPU utilization by keeping the GPU busy with inference work while memory operations for other instances are happening. Smaller models especially benefit as they can have multiple instances executing simultaneously on the GPU.'
  },
  {
    id: 'q5',
    question: 'When combining dynamic batching with multiple model instances, what principle should guide your optimization strategy?',
    options: [
      'Always use the maximum number of instances your GPU memory allows',
      'The benefit is model-specific and requires experimentation with your workload',
      'Only combine them when using TensorRT optimization',
      'Use twice as many instances as your batch size'
    ],
    correctAnswer: 1,
    explanation: 'The document emphasizes that benefits are model-specific. In the example, adding multiple instances with dynamic batching didn\'t improve performance because dynamic batching alone already fully utilized the GPU. The optimal configuration depends on your specific model\'s characteristics, GPU utilization patterns, and latency/throughput requirements, requiring experimentation with tools like perf_analyzer.'
  },
  {
    id: 'q6',
    question: 'What was the key observation when two model instances were combined with dynamic batching in the inception_graphdef example?',
    options: [
      'Throughput doubled compared to dynamic batching alone',
      'Latency decreased significantly while throughput remained constant',
      'Throughput increased minimally while latency increased significantly',
      'GPU memory usage decreased by 40%'
    ],
    correctAnswer: 2,
    explanation: 'The results showed that adding a second instance with dynamic batching only marginally improved throughput (289.6 vs 272 infer/sec) while significantly increasing latency (59817 vs 35988 usec). This occurred because the dynamic batcher with one instance was already fully utilizing the GPU, so additional instances just added overhead without meaningful performance gains.'
  },
  {
    id: 'q7',
    question: 'What fundamental GPU capability does TensorRT optimization leverage to improve ONNX model performance?',
    options: [
      'Automatic precision reduction and kernel fusion optimizations',
      'Distributing computation across multiple GPU streams',
      'Converting the model to a proprietary binary format',
      'Caching inference results for repeated inputs'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT optimizes models through techniques like precision mode reduction (e.g., FP16 instead of FP32) and kernel fusion, which combines multiple operations into optimized kernels. In the example, using FP16 precision with TensorRT provided approximately 2x throughput improvement while reducing latency by half, demonstrating these optimization techniques\' effectiveness.'
  },
  {
    id: 'q8',
    question: 'Which execution accelerator should be used to optimize ONNX models running on CPU hardware?',
    options: [
      'TensorRT',
      'CUDA Graphs',
      'OpenVINO',
      'cuDNN'
    ],
    correctAnswer: 2,
    explanation: 'OpenVINO is Intel\'s toolkit specifically designed for accelerating inference on CPU (and Intel GPU/VPU) hardware. TensorRT is for NVIDIA GPUs, CUDA Graphs is a GPU feature, and cuDNN is for GPU-accelerated deep learning primitives. When deploying ONNX models on CPU infrastructure, OpenVINO provides the optimization path.'
  },
  {
    id: 'q9',
    question: 'What is the fundamental purpose of NUMA optimization in Triton Inference Server?',
    options: [
      'To automatically distribute models across multiple server nodes',
      'To exploit locality characteristics of cores, memories, and interconnects in multi-socket systems',
      'To enable dynamic batching across network boundaries',
      'To compress model weights for faster cross-node communication'
    ],
    correctAnswer: 1,
    explanation: 'NUMA (Non-Uniform Memory Access) optimization addresses the reality that modern multi-core CPUs have different performance characteristics depending on which core, memory, and interconnect is used. By assigning model instances to specific NUMA nodes and CPU cores through host policies, you can optimize for memory locality and reduce cross-socket communication overhead.'
  },
  {
    id: 'q10',
    question: 'What two settings can be configured in a Triton host policy for NUMA optimization?',
    options: [
      'batch-size and precision-mode',
      'numa-node and cpu-cores',
      'gpu-memory and thread-count',
      'latency-target and throughput-limit'
    ],
    correctAnswer: 1,
    explanation: 'Host policies in Triton allow you to specify numa-node (which NUMA node to bind to for memory allocation) and cpu-cores (which specific CPU cores the instance should run on). These settings enable you to optimize for NUMA locality by keeping computation and memory access on the same socket, reducing cross-socket memory access latency.'
  },
  {
    id: 'q11',
    question: 'What does the numa-node setting in a host policy control?',
    options: [
      'The number of NUMA nodes to distribute the workload across',
      'Memory allocation restriction to a specific NUMA node for locality',
      'The priority level for scheduling on NUMA architectures',
      'Automatic detection and load balancing across NUMA nodes'
    ],
    correctAnswer: 1,
    explanation: 'The numa-node setting restricts memory allocation to the specified NUMA node. This ensures memory locality - when a model instance runs on CPU cores attached to a specific NUMA node, its memory allocations are also on that same node. This avoids expensive cross-socket memory access, which can significantly impact performance on multi-socket systems.'
  },
  {
    id: 'q12',
    question: 'What is the recommended configuration for achieving minimum latency with Triton?',
    options: [
      'Maximum request concurrency with dynamic batching enabled',
      'Request concurrency of 1, dynamic batching disabled, single model instance',
      'Multiple model instances with TensorRT optimization',
      'Dynamic batching with concurrency equal to batch size'
    ],
    correctAnswer: 1,
    explanation: 'For minimum latency, you want to process each request immediately without waiting to form batches or introducing overhead from multiple instances. Setting concurrency to 1, disabling dynamic batching, and using only 1 model instance ensures the request is processed immediately without batching delays or instance scheduling overhead. This trades throughput for latency.'
  },
  {
    id: 'q13',
    question: 'What tool is specifically mentioned as essential for optimizing model performance in Triton?',
    options: [
      'Model Analyzer for GPU memory optimization',
      'Performance Analyzer for latency and throughput measurement',
      'TensorBoard for training metrics',
      'NVIDIA Profiler for kernel analysis'
    ],
    correctAnswer: 1,
    explanation: 'The Performance Analyzer (perf_analyzer) is highlighted as an essential tool for optimization. It\'s used throughout the document to measure throughput and latency under different configurations and concurrency levels. While Model Analyzer is mentioned for understanding GPU memory utilization across multiple models, perf_analyzer is the primary tool for optimization experiments.'
  },
  {
    id: 'q14',
    question: 'What potential operational issue should you anticipate when enabling TensorRT optimization for ONNX models in production?',
    options: [
      'Increased memory consumption during inference',
      'Loss of model accuracy in all cases',
      'Significantly slower model loading and initialization at startup',
      'Incompatibility with dynamic batching features'
    ],
    correctAnswer: 2,
    explanation: 'The document explicitly warns that ONNX model loading can be significantly slower when TensorRT optimization is enabled, as TensorRT needs to analyze and optimize the model graph. In production, this startup delay can be mitigated using model warmup. This isn\'t about inference-time memory, accuracy loss, or incompatibility with batching - it\'s specifically about the one-time initialization cost.'
  },
  {
    id: 'q15',
    question: 'What technique is recommended to mitigate the model startup slowdown caused by TensorRT optimization in production environments?',
    options: [
      'Pre-compiling models offline before deployment',
      'Model warmup to handle optimization during initialization',
      'Lazy loading to defer optimization until first request',
      'Progressive optimization across multiple requests'
    ],
    correctAnswer: 1,
    explanation: 'Model warmup allows Triton to perform the TensorRT optimization and initialization during the startup phase, before the server begins accepting production requests. This way, the optimization cost is paid upfront rather than impacting the first production requests. This ensures consistent performance from the start of production traffic.'
  },
  {
    id: 'q16',
    question: 'In the dynamic batching example, what pattern emerges regarding latency as concurrency increases from 1 to 8?',
    options: [
      'Latency decreases proportionally to throughput increases',
      'Latency remains relatively stable while throughput increases significantly',
      'Latency increases exponentially beyond concurrency 4',
      'Latency becomes unpredictable at higher concurrency levels'
    ],
    correctAnswer: 1,
    explanation: 'The results show that as concurrency increased from 1 to 8, throughput increased dramatically (from 66.8 to 272 infer/sec), but latency remained relatively stable (19785 to 35988 usec). This demonstrates that dynamic batching allows Triton to maintain acceptable latency while significantly improving throughput by efficiently batching concurrent requests.'
  },
  {
    id: 'q17',
    question: 'What is the purpose of the Model Analyzer tool in the Triton ecosystem?',
    options: [
      'To benchmark model inference latency across different frameworks',
      'To understand GPU memory utilization and optimize multi-model deployment',
      'To automatically generate optimal model configurations',
      'To convert models between different framework formats'
    ],
    correctAnswer: 1,
    explanation: 'Model Analyzer helps you understand GPU memory utilization of your models, which is crucial for deciding how to run multiple models on a single GPU effectively. This is different from Performance Analyzer (which measures latency/throughput) - Model Analyzer focuses on memory footprint analysis to optimize multi-model deployments and resource allocation.'
  },
  {
    id: 'q18',
    question: 'Why might smaller models benefit more from having more than two instances compared to larger models?',
    options: [
      'Smaller models require less GPU memory, allowing more concurrent instances',
      'Smaller models leave more GPU compute capacity available for parallel execution',
      'Smaller models have faster memory transfers, reducing contention',
      'Smaller models automatically enable better batching algorithms'
    ],
    correctAnswer: 1,
    explanation: 'The document suggests smaller models may benefit from more than two instances because they don\'t fully utilize the GPU\'s compute capacity. When a model\'s computation is relatively light, multiple instances can execute simultaneously on the GPU, increasing overall utilization. Larger models that already saturate GPU compute won\'t benefit as much from additional instances.'
  },
  {
    id: 'q19',
    question: 'What command-line option format is used to specify host policies in Triton?',
    options: [
      '--host-policy=<policy_name>,<setting>=<value>',
      '--policy <name>:<setting>:<value>',
      '--numa-config=<policy_name>/<setting>/<value>',
      '--set-policy <name> <setting> <value>'
    ],
    correctAnswer: 0,
    explanation: 'Triton uses the format --host-policy=<policy_name>,<setting>=<value> for specifying host policies at startup. This format allows you to define named policies with specific NUMA and CPU core bindings that can then be referenced in model instance group configurations.'
  },
  {
    id: 'q20',
    question: 'In the example showing GPU 0 bound with NUMA node 0 having CPU cores 0-15, what is the significance of this binding?',
    options: [
      'It demonstrates random assignment of resources for load balancing',
      'It shows the physical locality relationship between GPU and CPU resources',
      'It indicates the maximum number of instances that can run simultaneously',
      'It specifies the failover configuration for high availability'
    ],
    correctAnswer: 1,
    explanation: 'This example illustrates the physical locality relationship in NUMA architectures - GPU 0 is physically closer to (has lower latency access to) NUMA node 0 and its associated CPU cores (0-15). By configuring host policies to match this locality, you minimize data transfer latency between CPU and GPU by keeping operations on the same physical socket/interconnect.'
  },
  {
    id: 'q21',
    question: 'What is the relationship between maximum batch size and optimal concurrency for throughput in the provided guidelines?',
    options: [
      'Concurrency should equal the maximum batch size',
      'Concurrency should be double the maximum batch size (per instance)',
      'Concurrency should be half the maximum batch size',
      'Concurrency is independent of batch size'
    ],
    correctAnswer: 1,
    explanation: 'The guideline states that for maximum throughput, concurrency should be 2 × max_batch_size × instance_count. The factor of 2 is important because it ensures there are enough requests in the queue for the dynamic batcher to form optimal batches while maintaining pipeline efficiency through overlapping communication and computation.'
  },
  {
    id: 'q22',
    question: 'What does the optimization policy in Triton\'s model configuration control?',
    options: [
      'The schedule for periodic model retraining',
      'Framework-specific optimization settings like TensorRT or OpenVINO',
      'The priority order for serving requests under load',
      'Automatic scaling rules for model instances'
    ],
    correctAnswer: 1,
    explanation: 'The optimization policy section in model configuration controls framework-specific optimization settings. This includes specifying execution accelerators like TensorRT for ONNX models on GPU or OpenVINO for ONNX models on CPU, along with their parameters like precision mode and workspace size.'
  },
  {
    id: 'q23',
    question: 'When experimenting with different optimization strategies, what two key metrics should you balance?',
    options: [
      'Memory usage and model accuracy',
      'Throughput and latency',
      'GPU utilization and power consumption',
      'Batch size and precision mode'
    ],
    correctAnswer: 1,
    explanation: 'Throughout the document, the focus is on balancing throughput (inferences per second) and latency (response time). Different optimization strategies offer different tradeoffs - for example, dynamic batching increases throughput but may increase latency, while minimum-latency configuration (concurrency=1, no batching) sacrifices throughput. Your optimization strategy should align with your specific throughput and latency requirements.'
  },
  {
    id: 'q24',
    question: 'What is a key indicator that dynamic batching alone has fully utilized GPU capacity?',
    options: [
      'GPU temperature reaches maximum operating threshold',
      'Adding more model instances provides minimal throughput improvement',
      'Latency becomes unstable across different concurrency levels',
      'Memory usage reaches 100% of available GPU memory'
    ],
    correctAnswer: 1,
    explanation: 'In the inception_graphdef example, when two instances were added with dynamic batching, throughput barely improved compared to one instance with dynamic batching. This indicated that dynamic batching alone was already fully utilizing the GPU\'s compute capacity. Adding more instances just added overhead without meaningful performance gains because there was no unused GPU capacity to exploit.'
  },
  {
    id: 'q25',
    question: 'What aspect of model configuration should you specify to enable multiple copies of a model for inferencing?',
    options: [
      'replication_factor parameter',
      'instance_group with count specification',
      'parallel_execution setting',
      'model_copies directive'
    ],
    correctAnswer: 1,
    explanation: 'Instance groups are used to specify how many copies (instances) of each model should be available for inferencing. The configuration uses instance_group [ { count: N }] syntax to specify N instances. By default, each model has one instance, but you can configure any number based on performance requirements.'
  }
];

