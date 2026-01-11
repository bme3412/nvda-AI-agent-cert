import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What fundamental shift does agentic AI represent compared to traditional AI systems?',
    options: [
      'Moving from simple prompt-and-response interactions to sophisticated systems that use advanced reasoning and planning to solve complex, multi-step problems autonomously',
      'Transitioning from cloud-based to edge-based computing models with reduced latency requirements',
      'Shifting from supervised learning to unsupervised learning approaches exclusively',
      'Moving from GPU-accelerated to CPU-only processing for cost optimization'
    ],
    correctAnswer: 0,
    explanation: 'Agentic AI represents a fundamental shift in artificial intelligence capabilities, moving beyond simple prompt-and-response interactions to sophisticated systems that use advanced reasoning and planning to solve complex, multi-step problems autonomously. Unlike traditional AI systems that require explicit instructions for each step, agentic AI systems ingest vast amounts of data from multiple sources to analyze challenges, develop strategies, and complete tasks independently. This autonomous capability transforms enterprise data into actionable knowledge, enabling organizations to leverage their information assets in ways that were previously impossible.'
  },
  {
    id: 'q2',
    question: 'What is the data flywheel and why is it important for agentic AI systems?',
    options: [
      'A self-reinforcing cycle where human and AI feedback is systematically used to refine models and improve outcomes, creating a virtuous cycle where each interaction makes the agent more capable',
      'A data storage mechanism that rotates information through different storage tiers based on access patterns and frequency',
      'A processing architecture that cycles through multiple model checkpoints to optimize inference performance',
      'A training methodology that alternates between different datasets to prevent overfitting and improve generalization'
    ],
    correctAnswer: 0,
    explanation: 'The transformative power of agentic AI lies in its ability to learn and improve continuously through what\'s known as a data flywheel. This self-reinforcing cycle occurs when human and AI feedback is systematically used to refine models and improve outcomes. As agents interact with real-world scenarios, they generate data about their performance, which feeds back into the system to enhance future decision-making. This creates a virtuous cycle where each interaction makes the agent more capable, more accurate, and more valuable to the organization. The data flywheel is particularly powerful because it enables agents to adapt to specific organizational contexts, learning the nuances of particular industries, workflows, and business requirements.'
  },
  {
    id: 'q3',
    question: 'What role does NVIDIA NeMo serve in building production-ready agentic AI systems?',
    options: [
      'It serves as the foundational platform for managing the complete AI agent lifecycle, providing tools for building, training, monitoring, and optimizing agents across their entire operational span',
      'It functions exclusively as a model training platform with specialized GPU acceleration for large language models',
      'It provides only inference optimization services without supporting development or deployment phases',
      'It serves as a data preprocessing pipeline that prepares datasets before model training begins'
    ],
    correctAnswer: 0,
    explanation: 'Building production-ready agentic AI systems requires a comprehensive technology stack that addresses the entire agent lifecycle from development through deployment and optimization. NVIDIA NeMo serves as the foundational platform for managing the complete AI agent lifecycle, providing tools for building, training, monitoring, and optimizing agents across their entire operational span. NeMo enables organizations to deliver enterprise-ready large language models with precise data curation, cutting-edge customization capabilities, scalable data ingestion pipelines, retrieval-augmented generation (RAG) integration, and accelerated performance. The platform\'s comprehensive approach ensures that agents can be developed with the reliability, security, and scalability required for production environments.'
  },
  {
    id: 'q4',
    question: 'What is NVIDIA NIM and how does it support agentic AI deployment?',
    options: [
      'NVIDIA Inference Microservices that provide optimized inference microservices for fast, enterprise-ready deployment of performance-optimized generative AI models with stable and secure APIs',
      'A neural network architecture model specifically designed for multi-modal agent interactions',
      'A memory management system that optimizes data access patterns for agent workflows',
      'A distributed computing framework that coordinates multiple agents across different network nodes'
    ],
    correctAnswer: 0,
    explanation: 'For fast, enterprise-ready deployment, NVIDIA NIM (NVIDIA Inference Microservices) provides optimized inference microservices that speed up deployment of performance-optimized generative AI models. NIM microservices enable organizations to run business applications with stable and secure APIs backed by enterprise-grade support, ensuring that agentic systems can be deployed quickly without compromising on reliability or performance. The microservices architecture allows teams to deploy models with minimal configuration while maintaining the flexibility to customize for specific use cases. NIM comes with accelerated inference engines from NVIDIA and the community, including NVIDIA TensorRT and TensorRT-LLM, all prebuilt and optimized for low-latency, high-throughput inferencing on NVIDIA-accelerated infrastructure. This optimization is critical for agentic systems, which often require rapid responses to maintain user experience quality.'
  },
  {
    id: 'q5',
    question: 'What are NVIDIA Blueprints and how do they accelerate agentic AI development?',
    options: [
      'Customizable reference workflows and applications for common generative AI use cases that include partner microservices, AI agents, reference code, comprehensive documentation, and Helm charts for streamlined deployment',
      'Pre-trained model templates that can be directly deployed without any customization or configuration',
      'Hardware configuration specifications that define optimal GPU setups for different agent workloads',
      'Network architecture diagrams that illustrate recommended deployment topologies for agent systems'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA Blueprints accelerate development by providing customizable reference workflows and applications for common generative AI use cases, such as digital humans and multimodal retrieval-augmented generation. These blueprints include partner microservices, one or more AI agents, reference code, comprehensive customization documentation, and Helm charts for streamlined deployment. By starting with proven reference implementations, development teams can significantly reduce time-to-market while ensuring best practices are built into their solutions from the beginning. Blueprints serve as both learning tools and production-ready starting points, allowing organizations to understand how to structure agentic systems effectively while having working code they can adapt to their specific needs.'
  },
  {
    id: 'q6',
    question: 'What is an AI factory and why is it important for agentic AI systems?',
    options: [
      'Specialized computing infrastructure that optimizes the entire AI lifecycle, from initial data ingestion through high-volume inference, delivering real-time intelligence and driving innovation at scale',
      'A manufacturing facility that produces physical hardware components for AI systems',
      'A software development methodology that emphasizes rapid iteration and continuous deployment',
      'A data center architecture that focuses exclusively on training large language models'
    ],
    correctAnswer: 0,
    explanation: 'The infrastructure foundation for agentic AI systems is built on high-performance, scalable, and secure AI factories. An AI factory represents specialized computing infrastructure that optimizes the entire AI lifecycle, from initial data ingestion through high-volume inference, delivering real-time intelligence and driving innovation at scale. These factories are designed to handle the computational demands of agentic systems, which often require significant processing power for complex reasoning tasks, multiple model invocations, and real-time decision-making. AI factories provide the scalability needed to support agents as they grow from pilot projects to enterprise-wide deployments, ensuring that performance remains consistent even as workloads increase.'
  },
  {
    id: 'q7',
    question: 'How do NVIDIA GPUs support the AI factory infrastructure for agentic AI?',
    options: [
      'They form the computational backbone, enabling organizations to launch cloud instances accelerated by the latest-generation hardware and start building within minutes, supporting both quick-start development and custom configurations',
      'They provide only storage acceleration without supporting compute-intensive agent workloads',
      'They function exclusively as network interface cards that optimize data transfer between agent components',
      'They serve only as display adapters for visualizing agent decision-making processes'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA GPUs form the computational backbone of these AI factories, enabling organizations to launch cloud instances accelerated by the latest-generation hardware and start building within minutes. The GPU infrastructure supports both quick-start development with preconfigured instances and custom configurations for organizations with specific requirements. This flexibility is essential for agentic AI development, where different stages of the lifecycle may require different computational profiles—development and experimentation might benefit from flexible, on-demand resources, while production deployments require consistent, high-performance infrastructure optimized for specific workloads.'
  },
  {
    id: 'q8',
    question: 'What advantage does the modular nature of NVIDIA\'s agentic AI building blocks provide?',
    options: [
      'Teams can adopt components incrementally, starting with components that provide immediate value and expanding as their agentic AI capabilities mature',
      'All components must be deployed simultaneously to ensure proper integration and compatibility',
      'Components are tightly coupled and cannot be used independently of each other',
      'Modularity requires specialized expertise that limits adoption to large enterprises only'
    ],
    correctAnswer: 0,
    explanation: 'The integration of these building blocks—NeMo for lifecycle management, NIM for optimized deployment, Blueprints for accelerated development, and GPU infrastructure for computational power—creates a comprehensive ecosystem for building and deploying agentic AI systems. This ecosystem addresses the full spectrum of requirements from initial development through production deployment, ensuring that organizations have the tools, infrastructure, and support needed to successfully implement agentic AI solutions. The modular nature of these components allows teams to adopt them incrementally, starting with the components that provide immediate value and expanding as their agentic AI capabilities mature.'
  },
  {
    id: 'q9',
    question: 'What makes agentic AI systems different from traditional AI in terms of data processing?',
    options: [
      'They ingest vast amounts of data from multiple sources to analyze challenges, develop strategies, and complete tasks independently, rather than requiring explicit instructions for each step',
      'They process only structured data from single sources with predefined schemas and validation rules',
      'They require manual data preprocessing before any analysis can occur, limiting autonomous operation',
      'They exclusively use batch processing without support for real-time data ingestion or analysis'
    ],
    correctAnswer: 0,
    explanation: 'Unlike traditional AI systems that require explicit instructions for each step, agentic AI systems ingest vast amounts of data from multiple sources to analyze challenges, develop strategies, and complete tasks independently. This autonomous capability transforms enterprise data into actionable knowledge, enabling organizations to leverage their information assets in ways that were previously impossible. The ability to process diverse data sources autonomously is a key differentiator that enables agentic systems to handle complex, real-world scenarios that traditional systems cannot address effectively.'
  },
  {
    id: 'q10',
    question: 'Why is low-latency, high-throughput inferencing critical for agentic systems?',
    options: [
      'Agentic systems often require rapid responses to maintain user experience quality, making optimization critical for real-time decision-making',
      'Low latency is only important for training phases, not for inference operations',
      'Throughput optimization is unnecessary since agents process requests sequentially',
      'Inference performance has no impact on agent effectiveness or user experience'
    ],
    correctAnswer: 0,
    explanation: 'NIM comes with accelerated inference engines from NVIDIA and the community, including NVIDIA TensorRT and TensorRT-LLM, all prebuilt and optimized for low-latency, high-throughput inferencing on NVIDIA-accelerated infrastructure. This optimization is critical for agentic systems, which often require rapid responses to maintain user experience quality. Unlike simple single-query systems, agentic AI systems may need to make multiple model invocations, perform complex reasoning steps, and coordinate with various tools—all of which must happen quickly enough to provide responsive user experiences. The combination of low latency and high throughput ensures that agents can handle both individual requests quickly and scale to support high volumes of concurrent interactions.'
  }
];
