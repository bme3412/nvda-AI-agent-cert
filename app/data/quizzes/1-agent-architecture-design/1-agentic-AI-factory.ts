import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Why is a tiered storage architecture with NVIDIA-Certified Storage critical for an Enterprise AI Factory?',
    options: [
      'It provides the scalability, diverse data access patterns, and verified performance needed to prevent storage from becoming a bottleneck in AI workflows',
      'It enables automatic backup and disaster recovery for all AI models without requiring additional configuration or monitoring by IT administrators',
      'It replaces the need for vector databases by storing embeddings directly in the storage layer using proprietary compression algorithms',
      'It ensures that all data is encrypted by default and cannot be accessed without multi-factor authentication from authorized users'
    ],
    correctAnswer: 0,
    explanation: 'The document emphasizes that storage "can potentially become a significant bottleneck if not architected correctly" and must handle "continuous and high-volume data flow." NVIDIA-Certified Storage addresses this by ensuring "efficient data access, which is vital for handling large model weights, managing Vector Database I/O for Retrieval Augmented Generation (RAG), and supporting knowledgebases for AI Agents." The tiered architecture provides the necessary scalability, flexibility for diverse access patterns (high-throughput sequential reads for training, low-latency random access for inference), and verified performance. While the document mentions data protection and security features, these aren\'t the primary reason for the tiered architecture. Options B, C, and D introduce capabilities not described in the document.'
  },
  {
    id: 'q2',
    question: 'In the context of AI agent observability, which metric specifically measures the delay before an agent produces its initial response token after receiving a request?',
    options: [
      'Output Throughput (TPS)',
      'Time To First Token (TTFT)',
      'End-to-End Latency',
      'Component Latency'
    ],
    correctAnswer: 1,
    explanation: 'The document defines "Time To First Token (TTFT)" as "The delay before the agent produces its initial response token after receiving a request." While End-to-End Latency measures the total time from request to completion, and Component Latency measures individual processing steps, TTFT specifically focuses on the initial response delay. Output Throughput (TPS) measures the rate of token generation over time, not the initial delay.'
  },
  {
    id: 'q3',
    question: 'What is the primary function of a GitOps controller in the Enterprise AI Factory architecture?',
    options: [
      'It stores and versions all NVIDIA artifacts, container images, and AI models in a centralized repository accessible to the Kubernetes cluster',
      'It monitors the desired state in Git repositories and automatically reconciles differences with the actual system state by applying necessary changes',
      'It provides authentication and authorization services by integrating with enterprise IAM solutions and enforcing role-based access controls',
      'It aggregates observability data from logging, metrics, and tracing systems into consolidated dashboards for different stakeholder roles'
    ],
    correctAnswer: 1,
    explanation: 'The document defines a GitOps controller as "a software component that continuously monitors the desired state of infrastructure and application configurations stored in a Git repository and ensures that the actual state of a system, such as a Kubernetes cluster, matches this declared state." It operates by "regularly comparing the live state of resources in the environment with the version-controlled configurations in Git" and automatically reconciling differences. Option A describes the Artifact Repository, Option C describes the Security/IAM layer, and Option D describes the Observability reporting mechanism.'
  },
  {
    id: 'q4',
    question: 'According to the role mapping for the AI platform, which role is primarily responsible for defining and managing application and infrastructure configurations in Git and managing the GitOps controller for deployments?',
    options: [
      'IT Admin',
      'Network Administrator',
      'AI Developer',
      'MLOps'
    ],
    correctAnswer: 3,
    explanation: 'The document\'s role mapping table clearly indicates that MLOps serves as the "GitOps Automation Lead" who "Defines/manages application and infrastructure configurations in Git. Manages GitOps controller for deployments." While IT Admin provides infrastructure support, Network Administrator ensures network access, and AI Developer is an indirect user who benefits from GitOps, the MLOps role has primary responsibility for GitOps operations.'
  },
  {
    id: 'q5',
    question: 'What emerging standard does the document mention for providing structured ways for AI agents to discover and interact with external data sources and tools?',
    options: [
      'OpenTelemetry (OTEL)',
      'Model Context Protocol (MCP)',
      'Application Performance Management (APM)',
      'NVIDIA Data Center GPU Manager (DCGM)'
    ],
    correctAnswer: 1,
    explanation: 'The document specifically states that "Emerging standards, such as Model Context Protocol (MCP), aim to provide structured ways for AI agents to discover and interact with external data sources and tools." While OpenTelemetry (OTEL) is mentioned for metrics collection and tracing, APM is referenced for application performance monitoring, and DCGM for infrastructure metrics, only MCP is described as the emerging standard for agent-data source interactions.'
  },
  {
    id: 'q6',
    question: 'Which two NVIDIA frameworks are specifically mentioned as being natively integrated into the AI platform for building, training, and deploying AI models?',
    options: [
      'NVIDIA Guardrails and Agent Intelligence toolkit',
      'NVIDIA AI Enterprise and NVIDIA-Certified Systems',
      'NVIDIA NeMo and NIM',
      'NVIDIA Blueprints and Jupyter Notebooks'
    ],
    correctAnswer: 2,
    explanation: 'The document explicitly states that "The AI platform natively integrates frameworks like NVIDIA NeMo and NIM, enabling organizations to efficiently develop and customize large language models (LLMs) and other generative AI systems." It further explains that "NVIDIA NeMo provides a cloud-native, end-to-end framework for building, training, and deploying LLMs" while "NIM offers standardized microservices and APIs for seamless model deployment." While the other options mention valid NVIDIA technologies discussed in the document, they are not described as the natively integrated frameworks within the AI platform.'
  }
];

