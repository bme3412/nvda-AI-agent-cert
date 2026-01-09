import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NeMo RL and what is its primary purpose within the NeMo Framework?',
    options: [
      'An open-source post-training library designed to streamline and scale reinforcement learning methods for multimodal models',
      'A specialized hardware accelerator for optimizing reinforcement learning computations on NVIDIA GPUs',
      'A cloud-based service for deploying trained reinforcement learning models in production environments',
      'A data preprocessing toolkit for preparing multimodal datasets for reinforcement learning training'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL is an open-source post-training library within the NeMo Framework, designed to streamline and scale reinforcement learning methods for multimodal models, including LLMs and VLMs.'
  },
  {
    id: 'q2',
    question: 'What key capabilities make NeMo RL suitable for both research and production environments?',
    options: [
      'Flexibility with modular design, efficient resource management using Ray, hackable PyTorch paths, and high performance through Megatron Core',
      'Automatic hyperparameter optimization, built-in model compression, pre-trained foundation models, and guaranteed convergence algorithms',
      'Cloud-native deployment, serverless execution, automatic scaling, and integrated monitoring dashboards',
      'Visual programming interface, drag-and-drop model building, automated code generation, and one-click deployment capabilities'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL provides flexibility with modular design, efficient resource management using Ray, hackable native PyTorch-only paths for quick research prototypes, high performance through Megatron Core, and seamless Hugging Face integration.'
  },
  {
    id: 'q3',
    question: 'How many independent training backends does NeMo RL support, and what are they?',
    options: [
      'Two independent backends: native PyTorch DTensor and Megatron Core, which can be installed and used separately',
      'Three backends: PyTorch Lightning, Megatron Core, and Distributed TensorFlow for comprehensive framework support',
      'Four backends: CPU-only, single-GPU, multi-GPU, and multi-node configurations for different hardware setups',
      'Five backends: Research, Development, Testing, Staging, and Production for different deployment phases'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL supports two independent training backends: the native PyTorch DTensor backend and the Megatron Core backend. Both are independent, meaning users can install and use either one on its own.'
  },
  {
    id: 'q4',
    question: 'Which learning algorithms are currently available in NeMo RL?',
    options: [
      'Q-learning, Policy Gradient, Actor-Critic, and Monte Carlo methods for traditional reinforcement learning',
      'GRPO, GSPO, SFT, and DPO algorithms supporting various reinforcement learning and supervised fine-tuning approaches',
      'Supervised Learning, Unsupervised Learning, Semi-supervised Learning, and Transfer Learning for general machine learning',
      'CNN, RNN, Transformer, and GAN architectures for deep learning model development'
    ],
    correctAnswer: 1,
    explanation: 'NeMo RL currently supports multiple learning algorithms including GRPO, GSPO, SFT, and DPO, providing a comprehensive set of options for reinforcement learning and supervised fine-tuning.'
  },
  {
    id: 'q5',
    question: 'What advanced parallelism techniques does NeMo RL support through its DTensor backend?',
    options: [
      'PyTorch FSDP2, TP (Tensor Parallelism), CP (Context Parallelism), and SP (Sequence Parallelism) for efficient training',
      'Data parallelism, model parallelism, pipeline parallelism, and gradient parallelism exclusively',
      'Horizontal scaling, vertical scaling, elastic scaling, and automatic scaling for dynamic resource management',
      'CPU parallelism, GPU parallelism, memory parallelism, and network parallelism for comprehensive acceleration'
    ],
    correctAnswer: 0,
    explanation: 'The DTensor backend supports advanced parallelism with PyTorch FSDP2, TP (Tensor Parallelism), CP (Context Parallelism), and SP (Sequence Parallelism) for efficient distributed training.'
  },
  {
    id: 'q6',
    question: 'Which additional parallelism techniques are available through the Megatron Core backend?',
    options: [
      'Only basic data parallelism and model parallelism without advanced distributed training features',
      'Exclusively pipeline parallelism and tensor parallelism for traditional transformer model training',
      'TP, PP, CP, SP, EP, and FSDP including support for larger models with longer sequences',
      'Custom NVIDIA-specific parallelism techniques that are not compatible with standard PyTorch'
    ],
    correctAnswer: 2,
    explanation: 'The Megatron Core backend provides larger model support with longer sequences through performant parallelisms including TP, PP, CP, SP, EP, and FSDP, enabling efficient training of very large models.'
  },
  {
    id: 'q7',
    question: 'What MoE (Mixture of Experts) models does NeMo RL specifically support?',
    options: [
      'DeepSeekV3 and Qwen-3 MoE models through the Megatron backend with full training and inference support',
      'Only generic MoE architectures without specific model implementations or optimizations',
      'GPT-4 MoE and Claude MoE variants through proprietary licensing agreements',
      'Custom NVIDIA-developed MoE models exclusively available through enterprise licensing'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL supports MoE models including DeepSeekV3 and Qwen-3 MoE models through the Megatron backend, providing comprehensive support for these large-scale mixture of experts architectures.'
  },
  {
    id: 'q8',
    question: 'What significant performance improvement does sequence packing provide in NeMo RL?',
    options: [
      'Reduces memory usage by 50% but increases training time for complex model architectures',
      'Only works with specific model sizes and requires manual configuration for each training job',
      'Available in both DTensor and Megatron Core backends for significant training performance gains',
      'Provides marginal improvements and is mainly useful for debugging and development purposes'
    ],
    correctAnswer: 2,
    explanation: 'Sequence packing is available in both DTensor and Megatron Core backends and provides significant training performance gains by efficiently utilizing computational resources.'
  },
  {
    id: 'q9',
    question: 'What new features are planned for NeMo RL version 0.4?',
    options: [
      'Megatron Inference, Async RL, VLM support, improved native performance, and end-to-end FP8 training',
      'Complete rewrite in Rust, quantum computing integration, brain-computer interfaces, and autonomous code generation',
      'Web-based UI, mobile app support, voice control, and augmented reality visualization capabilities',
      'Blockchain integration, NFT model ownership, decentralized training, and cryptocurrency reward systems'
    ],
    correctAnswer: 0,
    explanation: 'Version 0.4 will include Megatron Inference for fast Day-0 support, Async RL for asynchronous rollouts, VLM support through DTensor, improved native performance, and end-to-end FP8 low-precision training.'
  },
  {
    id: 'q10',
    question: 'Which generation and rollout backends does NeMo RL support for model inference?',
    options: [
      'vLLM backend for high-throughput inference and Megatron backend for high-performance native inference',
      'Only PyTorch native inference without any specialized optimization backends',
      'Exclusively cloud-based inference through managed services and APIs',
      'Custom NVIDIA inference engines that require proprietary hardware acceleration'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL supports the vLLM backend for high-throughput and memory-efficient inference, and the Megatron backend for high-performance Megatron-native inference that eliminates weight conversion between training and inference.'
  },
  {
    id: 'q11',
    question: 'What multi-turn capabilities does NeMo RL provide for complex training scenarios?',
    options: [
      'Only single-turn interactions with basic question-answer patterns',
      'Multi-turn support limited to conversational AI applications exclusively',
      'Turn-based training restricted to gaming applications and simulated environments',
      'Multi-turn generation and training for RL with tool use, games, and other complex scenarios'
    ],
    correctAnswer: 3,
    explanation: 'NeMo RL enables multi-turn generation and training for RL with tool use, games, and other complex scenarios, supporting sophisticated interaction patterns beyond simple single-turn exchanges.'
  },
  {
    id: 'q12',
    question: 'How does NeMo RL handle process isolation and global state management?',
    options: [
      'Provides worker isolation ensuring process isolation between RL Actors, eliminating concerns about global state',
      'Uses shared global state across all processes for improved coordination and data sharing',
      'Requires manual process management and global state synchronization by users',
      'Implements distributed locks and semaphores for coordinating access to shared resources'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL provides worker isolation that ensures process isolation between RL Actors, eliminating concerns about global state and providing clean separation between different training components.'
  },
  {
    id: 'q13',
    question: 'What evaluation capabilities does NeMo RL provide for assessing trained models?',
    options: [
      'Checkpoint conversion to Hugging Face format and evaluation scripts with customizable parameters',
      'Only basic accuracy metrics without comprehensive evaluation frameworks',
      'Automatic benchmark comparison against industry-standard models exclusively',
      'Real-time monitoring dashboards without offline evaluation capabilities'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL provides evaluation tools including checkpoint conversion from PyTorch DCP or Megatron format to Hugging Face format, and evaluation scripts with customizable parameters for comprehensive model assessment.'
  },
  {
    id: 'q14',
    question: 'What Hugging Face model parameter ranges does NeMo RL integration support?',
    options: [
      'Only small models under 1B parameters for efficient training and inference',
      'Models ranging from 1B to 70B parameters, including Qwen and Llama model families',
      'Exclusively large models over 100B parameters requiring distributed infrastructure',
      'Custom NVIDIA models that are not compatible with standard Hugging Face formats'
    ],
    correctAnswer: 1,
    explanation: 'NeMo RL supports Hugging Face integration with models ranging from 1B to 70B parameters, including popular model families like Qwen and Llama models.'
  },
  {
    id: 'q15',
    question: 'What algorithm expansions are planned for future NeMo RL releases?',
    options: [
      'DAPO, GSPO, and On-policy Distillation algorithms to expand the available training methods',
      'Classical reinforcement learning algorithms like Q-learning and SARSA for broader compatibility',
      'Supervised learning algorithms to replace reinforcement learning approaches entirely',
      'Proprietary NVIDIA algorithms that will be available only through enterprise licensing'
    ],
    correctAnswer: 0,
    explanation: 'Future releases will include algorithm expansion with DAPO, GSPO, and On-policy Distillation, broadening the range of available training methods beyond the current GRPO, SFT, and DPO algorithms.'
  }
];