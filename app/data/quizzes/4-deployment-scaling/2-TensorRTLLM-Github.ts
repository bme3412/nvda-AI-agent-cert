import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What foundational framework is TensorRT LLM architected on to provide its optimization capabilities?',
    options: [
      'TensorFlow with custom operators designed specifically for efficient inference on NVIDIA hardware',
      'JAX with XLA compilation optimizing models automatically for GPU execution and deployment',
      'PyTorch providing high-level Python LLM API supporting wide range of inference setups',
      'Pure C++ implementation with custom CUDA kernels without any high-level framework dependencies'
    ],
    correctAnswer: 2,
    explanation: 'TensorRT LLM is architected on PyTorch and provides a high-level Python LLM API that supports a wide range of inference setups from single-GPU to multi-GPU or multi-node deployments. This PyTorch-native architecture allows developers to experiment and extend functionality easily.'
  },
  {
    id: 'q2',
    question: 'What state-of-the-art optimizations does TensorRT LLM provide for efficient LLM inference?',
    options: [
      'Exclusively model compression techniques without any runtime optimization or batching capabilities',
      'Only quantization support without custom kernels, caching mechanisms, or batching strategies',
      'Solely GPU memory management without attention optimizations or speculative decoding features',
      'Custom attention kernels, inflight batching, paged KV caching, quantization, and speculative decoding'
    ],
    correctAnswer: 3,
    explanation: 'TensorRT LLM provides state-of-the-art optimizations including custom attention kernels, inflight batching, paged KV caching, quantization (FP8, FP4, INT4 AWQ, INT8 SmoothQuant), speculative decoding, and more. These optimizations enable efficient inference on NVIDIA GPUs.'
  },
  {
    id: 'q3',
    question: 'What quantization formats does TensorRT LLM support for model optimization?',
    options: [
      'FP8, FP4, INT4 AWQ, and INT8 SmoothQuant for various precision-performance tradeoffs',
      'Exclusively FP16 and FP32 floating-point formats without any integer quantization support',
      'Only INT8 quantization without support for lower precision or floating-point formats',
      'Solely FP8 precision without any integer quantization or lower bit-width options'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT LLM supports multiple quantization formats including FP8, FP4, INT4 AWQ, and INT8 SmoothQuant. These various precision options allow developers to choose appropriate tradeoffs between model accuracy and inference performance.'
  },
  {
    id: 'q4',
    question: 'What is TensorRT LLM\'s deprecation policy migration period after features are marked as deprecated?',
    options: [
      '1-month migration period requiring rapid updates to avoid breaking changes in deployments',
      '6-month migration period allowing extended time for developers to update their implementations',
      '3-month migration period during which deprecated features continue working but trigger warnings',
      '12-month migration period providing maximum stability for production systems and gradual transitions'
    ],
    correctAnswer: 2,
    explanation: 'TensorRT LLM provides a 3-month migration period after deprecation. During this period, deprecated APIs, tools, or parameters continue to work but trigger warnings, giving developers time to migrate before removal.'
  },
  {
    id: 'q5',
    question: 'What impressive performance milestone did TensorRT LLM achieve running Llama 4 on B200 GPUs?',
    options: [
      'Processing over 40,000 tokens per second demonstrating exceptional throughput on latest GPU hardware',
      'Achieving approximately 10,000 tokens per second with standard optimization techniques on consumer GPUs',
      'Reaching about 25,000 tokens per second using aggressive quantization and batching strategies',
      'Delivering roughly 30,000 tokens per second through model parallelism across multiple devices'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT LLM can run Llama 4 at over 40,000 tokens per second on B200 GPUs. This demonstrates the exceptional performance capabilities of TensorRT LLM when combined with NVIDIA\'s latest Blackwell architecture.'
  },
  {
    id: 'q6',
    question: 'What barrier did Blackwell GPUs break when running Meta\'s Llama 4 Maverick with TensorRT LLM?',
    options: [
      'The 500 tokens per second per user barrier enabling real-time conversational AI experiences',
      'The 1,000 tokens per second per user barrier delivering unprecedented throughput for users',
      'The 750 tokens per second per user threshold allowing efficient multi-user deployments',
      'The 2,000 tokens per second per user milestone achieving extreme performance optimization'
    ],
    correctAnswer: 1,
    explanation: 'Blackwell breaks the 1,000 TPS (tokens per second) per user barrier with Meta\'s Llama 4 Maverick. This represents a significant milestone in per-user throughput for LLM inference.'
  },
  {
    id: 'q7',
    question: 'With which NVIDIA technologies does TensorRT LLM\'s LLM API integrate seamlessly?',
    options: [
      'NVIDIA Dynamo and Triton Inference Server as part of broader inference ecosystem',
      'Exclusively NVIDIA GPUs without any software framework or inference server integrations',
      'Only Triton Inference Server without support for other NVIDIA software ecosystem components',
      'Solely CUDA toolkit without integration with higher-level deployment or serving platforms'
    ],
    correctAnswer: 0,
    explanation: 'The LLM API integrates seamlessly with the broader inference ecosystem, including NVIDIA Dynamo and the Triton Inference Server. This integration enables comprehensive deployment and serving capabilities.'
  },
  {
    id: 'q8',
    question: 'What deployment configurations does TensorRT LLM\'s high-level Python API support?',
    options: [
      'Wide range from single-GPU to multi-GPU or multi-node deployments with parallelism strategies',
      'Only single-GPU setups without any distributed computing or multi-device deployment capabilities',
      'Exclusively multi-node clusters requiring minimum of eight GPUs for any operational deployment',
      'Solely edge devices with limited compute resources without datacenter-scale deployment support'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT LLM provides a high-level Python LLM API that supports a wide range of inference setups from single-GPU to multi-GPU or multi-node deployments. It includes built-in support for various parallelism strategies.'
  },
  {
    id: 'q9',
    question: 'What advantage does TensorRT LLM\'s PyTorch-native architecture provide for developers?',
    options: [
      'Rigid structure requiring developers to use only pre-defined models without modification options',
      'Modular design allowing developers to experiment with runtime or extend functionality easily',
      'Complete abstraction from underlying implementation preventing any customization or experimentation',
      'Exclusively compiled execution without any dynamic modification or extension capabilities'
    ],
    correctAnswer: 1,
    explanation: 'TensorRT LLM is designed to be modular and easy to modify. Its PyTorch-native architecture allows developers to experiment with the runtime or extend functionality, and several popular models can be customized using native PyTorch code.'
  },
  {
    id: 'q10',
    question: 'What does TensorRT LLM\'s "Day-0 support" refer to in the context of new model releases?',
    options: [
      'Delivering immediate support for latest open-weights models upon or shortly after release',
      'Supporting models only after extensive testing period following their public release and validation',
      'Providing optimization support for models within weeks of their initial publication and availability',
      'Exclusively supporting models after they achieve widespread adoption in the developer community'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT LLM delivers Day-0 support for latest models like OpenAI\'s GPT-OSS-120B and GPT-OSS-20B, LG AI Research\'s EXAONE 4.0, and others. This means support is available immediately upon or very shortly after model release.'
  },
  {
    id: 'q11',
    question: 'What advanced batching technique does TensorRT LLM implement for improved inference efficiency?',
    options: [
      'Inflight batching enabling efficient request processing and resource utilization during inference',
      'Static batching requiring all requests to wait until batch is full before processing begins',
      'Simple dynamic batching grouping requests without any sophisticated scheduling or optimization',
      'Exclusively offline batching processing pre-collected requests without real-time capabilities'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT LLM implements inflight batching as one of its state-of-the-art optimizations. This technique enables more efficient processing of requests and better resource utilization compared to traditional batching approaches.'
  },
  {
    id: 'q12',
    question: 'How does TensorRT LLM communicate deprecation notices to developers using the library?',
    options: [
      'Documentation in Release Notes, source code statements, and runtime deprecation warnings',
      'Exclusively through email notifications sent to registered developers without any code-level warnings',
      'Only via social media announcements without any formal documentation or in-code notifications',
      'Solely through third-party changelog aggregators without official NVIDIA communication channels'
    ],
    correctAnswer: 0,
    explanation: 'Deprecation notices are documented in Release Notes, deprecated APIs include statements in source code indicating when they were deprecated, and if used, they issue runtime deprecation warnings. This multi-channel approach ensures developers are well-informed.'
  },
  {
    id: 'q13',
    question: 'What performance achievement did NVIDIA announce for DeepSeek-R1 inference on Blackwell GPUs?',
    options: [
      'World-record DeepSeek-R1 inference performance demonstrating breakthrough capabilities with TensorRT LLM',
      'Baseline performance matching previous generation GPUs without significant optimization advantages',
      'Moderate performance improvements showing incremental gains over previous generation hardware',
      'Competitive performance reaching parity with alternative inference frameworks on same hardware'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA Blackwell delivers world-record DeepSeek-R1 inference performance with TensorRT LLM. This represents breakthrough performance for this specific model on NVIDIA\'s latest GPU architecture.'
  },
  {
    id: 'q14',
    question: 'What memory optimization technique does TensorRT LLM use for managing key-value caches?',
    options: [
      'Paged KV caching enabling efficient memory utilization and management during inference',
      'Contiguous memory allocation requiring pre-allocation of maximum possible cache size',
      'Simple dynamic allocation without any sophisticated memory management or paging strategies',
      'Exclusively static buffers fixed at model initialization without runtime flexibility'
    ],
    correctAnswer: 0,
    explanation: 'TensorRT LLM uses paged KV caching as one of its state-of-the-art optimizations. This technique enables more efficient memory utilization for key-value caches during inference compared to contiguous allocation approaches.'
  },
  {
    id: 'q15',
    question: 'What happens after the 3-month migration period ends for deprecated TensorRT LLM features?',
    options: [
      'Deprecated APIs, tools, or parameters are removed consistent with semantic versioning practices',
      'Deprecated features continue indefinitely with warnings but remain fully functional for backward compatibility',
      'Features are disabled but remain in codebase for potential re-enablement in future releases',
      'All deprecated functionality is immediately deleted without any versioning or compatibility considerations'
    ],
    correctAnswer: 0,
    explanation: 'After the 3-month migration period ends, deprecated APIs, tools, or parameters are removed in a manner consistent with semantic versioning. Major version changes may include these breaking removals.'
  }
];

