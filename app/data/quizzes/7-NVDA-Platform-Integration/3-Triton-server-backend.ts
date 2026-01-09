import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What are Triton Inference Server backends and what role do they serve?',
    options: [
      'Hardware acceleration modules that optimize GPU utilization for specific model architectures',
      'Execution implementations that process model inference requests and interface between Triton orchestration and model computation',
      'Data preprocessing pipelines that transform input data before sending to inference models',
      'Monitoring and logging components that track inference performance and system health'
    ],
    correctAnswer: 1,
    explanation: 'Triton backends are execution implementations that process model inference requests, serving as the interface between Triton\'s orchestration infrastructure and actual model computation logic.'
  },
  {
    id: 'q2',
    question: 'What types of implementations can Triton backends include?',
    options: [
      'Framework wrappers for PyTorch, TensorFlow, TensorRT, ONNX Runtime and custom computational logic',
      'Only officially supported NVIDIA frameworks with proprietary optimization libraries',
      'Exclusively cloud-based services requiring internet connectivity for model execution',
      'Hardware-specific drivers and firmware optimizations for particular GPU architectures'
    ],
    correctAnswer: 0,
    explanation: 'Backend implementations range from framework wrappers integrating deep learning environments like PyTorch, TensorFlow, TensorRT, and ONNX Runtime to custom computational logic performing preprocessing, postprocessing, or specialized inference algorithms.'
  },
  {
    id: 'q3',
    question: 'How many backends can each model associate with in Triton?',
    options: [
      'Multiple backends can be used simultaneously for load balancing and redundancy',
      'Each model associates with exactly one backend that handles inference execution',
      'Backend association changes dynamically based on current system load and performance',
      'Models can use different backends for different types of inference requests'
    ],
    correctAnswer: 1,
    explanation: 'Each model deployed in Triton associates with exactly one backend that handles inference execution for that model, with backend selection specified through model configuration parameters.'
  },
  {
    id: 'q4',
    question: 'What key advantage does the backend abstraction provide for organizations?',
    options: [
      'Automatic model optimization and hyperparameter tuning across different frameworks',
      'Built-in model versioning and rollback capabilities for production deployments',
      'Framework-agnostic serving infrastructure enabling unified deployment pipelines across diverse training frameworks',
      'Real-time performance monitoring and alerting for inference workloads'
    ],
    correctAnswer: 2,
    explanation: 'The abstraction enables framework-agnostic serving infrastructure where organizations deploy models from diverse training frameworks through unified deployment pipelines, eliminating per-framework serving infrastructure redundancy.'
  },
  {
    id: 'q5',
    question: 'What does the backend API specification define?',
    options: [
      'Network protocols for distributed inference across multiple data centers',
      'Lifecycle management, request processing, response generation, and state management capabilities',
      'Hardware requirements and compatibility matrices for different GPU architectures',
      'Security protocols and authentication mechanisms for production deployments'
    ],
    correctAnswer: 1,
    explanation: 'The API encompasses lifecycle management including initialization and finalization, request processing interfaces for executing inference batches, response generation mechanisms, and state management capabilities.'
  },
  {
    id: 'q6',
    question: 'What are the two categories of backends in the Triton ecosystem?',
    options: [
      'Local backends running on-premises and cloud backends running in distributed environments',
      'Officially supported implementations maintained by NVIDIA and community-developed backends',
      'Synchronous backends for real-time inference and asynchronous backends for batch processing',
      'Open-source backends with public code and proprietary backends with restricted access'
    ],
    correctAnswer: 1,
    explanation: 'The backend ecosystem includes officially supported implementations maintained by NVIDIA alongside Triton releases and community-developed backends addressing specialized requirements or framework integrations.'
  },
  {
    id: 'q7',
    question: 'How does the backend architecture organize functionality across abstraction levels?',
    options: [
      'Via horizontal scaling across multiple server nodes with load balancing',
      'Using layered security models with authentication, authorization, and encryption',
      'By separating compute resources from storage resources in distributed architectures',
      'Through backends, models, model instances, and inference requests in a hierarchical structure'
    ],
    correctAnswer: 3,
    explanation: 'Backend architecture organizes functionality across multiple abstraction levels representing backends themselves, models using backends, model instances executing inferences, and inference requests processed by instances.'
  },
  {
    id: 'q8',
    question: 'When does backend initialization occur and what does it involve?',
    options: [
      'During server startup for all configured backends regardless of model loading',
      'When Triton first requires a backend for model loading, involving library loading and setup',
      'Continuously throughout server operation based on dynamic resource availability',
      'Only when explicitly triggered by administrator commands or API calls'
    ],
    correctAnswer: 1,
    explanation: 'Backend initialization occurs when Triton first requires a backend for model loading, triggering shared library loading, backend object creation, and optional initialization function invocation.'
  },
  {
    id: 'q9',
    question: 'What is the timing of backend finalization in relation to model usage?',
    options: [
      'Immediately when the last model using the backend is unloaded',
      'Backend finalization defers until server shutdown regardless of model usage',
      'After a configurable timeout period following the last model unload',
      'Based on memory pressure and resource availability in the system'
    ],
    correctAnswer: 1,
    explanation: 'Backend finalization defers until server shutdown regardless of whether loaded models continue using the backend, enabling long-lived resource maintenance and avoiding repeated initialization-finalization cycles.'
  },
  {
    id: 'q10',
    question: 'What does the model object represent in the backend architecture?',
    options: [
      'Individual inference requests with their input data and processing requirements',
      'Specific models using backends, maintaining model-specific state shared across all instances',
      'Hardware resources allocated for model execution including GPUs and memory',
      'Configuration templates that define how models should be deployed and managed'
    ],
    correctAnswer: 1,
    explanation: 'The model object represents specific models using backends, maintaining model-specific state shared across all instances of that model, including loaded artifacts and configurations.'
  },
  {
    id: 'q11',
    question: 'What threading considerations must model initialization and finalization handle?',
    options: [
      'All operations must execute on the main thread to avoid synchronization issues',
      'Dynamic thread pool sizing based on current system load and available resources',
      'Concurrent invocations across different models using the same backend on separate threads',
      'Automatic thread migration to optimize performance across different CPU cores'
    ],
    correctAnswer: 2,
    explanation: 'Threading considerations require implementations to handle potential concurrent invocations across different models using the same backend, as Triton may invoke functions simultaneously for different models on separate threads.'
  },
  {
    id: 'q12',
    question: 'What do model instance objects represent in the architecture?',
    options: [
      'Backup copies of models stored for disaster recovery and high availability',
      'Individual model replicas created based on instance group configurations for parallelism',
      'Cached model outputs stored for performance optimization and response acceleration',
      'Monitoring and logging data collected during model inference execution'
    ],
    correctAnswer: 1,
    explanation: 'Model instance objects represent individual model replicas created based on instance group configurations specifying desired parallelism and placement, enabling concurrent inference execution.'
  },
  {
    id: 'q13',
    question: 'How does ecosystem integration benefit from backend standardization?',
    options: [
      'By requiring all backends to use identical implementation languages and coding standards',
      'Through enabling broad framework support via community contributions and specialized implementations',
      'By enforcing strict performance requirements that all backends must meet',
      'Through automatic code generation that creates backends from framework specifications'
    ],
    correctAnswer: 1,
    explanation: 'Ecosystem integration advantages emerge from backend standardization enabling broad framework support through community contributions and specialized implementations addressing domain-specific requirements.'
  },
  {
    id: 'q14',
    question: 'What development efficiency improvements result from the backend architecture?',
    options: [
      'Automatic generation of backend code from high-level model specifications',
      'Backend developers focus exclusively on model execution logic while leveraging Triton capabilities',
      'Built-in debugging and profiling tools that automatically optimize backend performance',
      'Universal compatibility ensuring all backends work across different hardware architectures'
    ],
    correctAnswer: 1,
    explanation: 'Backend developers focus exclusively on model execution logic while leveraging Triton capabilities for request batching, model versioning, ensemble orchestration, metrics collection, and health monitoring.'
  },
  {
    id: 'q15',
    question: 'What operational consistency benefits does the backend architecture provide?',
    options: [
      'Identical performance characteristics across all backends regardless of underlying complexity',
      'Unified management interfaces where monitoring, logging, and deployment procedures remain consistent',
      'Automatic failover and load balancing across different backend implementations',
      'Standardized pricing and licensing models for all backend types and implementations'
    ],
    correctAnswer: 1,
    explanation: 'Operational consistency benefits derive from unified management interfaces across all backends where monitoring, logging, configuration management, and deployment procedures remain consistent regardless of framework diversity.'
  }
];