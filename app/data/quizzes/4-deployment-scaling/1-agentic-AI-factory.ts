import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What foundational technology provides agility, scalability, and resilience for the Enterprise AI Factory?',
    options: [
      'Traditional virtual machine hypervisors managing dedicated compute resources for each AI workload independently',
      'Proprietary cloud platforms requiring vendor-specific infrastructure and limiting deployment flexibility across environments',
      'Enterprise Cloud Native Platform with Kubernetes orchestrating containers and managing microservice-based agent architectures',
      'Monolithic application servers running all AI services on single physical machines without containerization'
    ],
    correctAnswer: 2,
    explanation: 'The Enterprise Cloud Native Platform, with Kubernetes at its core, provides agility, scalability, and resilience. Kubernetes orchestrates containers, manages microservice-based agent architectures, and enables dynamic automation including deployment, scaling, self-healing, and resource management for GPU resources.'
  },
  {
    id: 'q2',
    question: 'What are the two levels of NVIDIA-Certified Storage program certification?',
    options: [
      'Foundation for PCIe-optimized configurations and Enterprise for HGX reference configurations',
      'Basic for small deployments and Advanced for large-scale enterprise implementations',
      'Standard for CPU-based systems and Premium for GPU-accelerated infrastructure',
      'Developer for testing environments and Production for live operational deployments'
    ],
    correctAnswer: 0,
    explanation: 'The NVIDIA-Certified Storage program offers Foundation-level certification for PCIe-optimized reference configurations (specifically for NVIDIA RTX PRO 6000 Blackwell Server Edition) and Enterprise-level certification for HGX reference configurations (particularly for NVIDIA HGX B200).'
  },
  {
    id: 'q3',
    question: 'What role does the artifact repository serve in on-premises Enterprise AI Factory setups following GitOps principles?',
    options: [
      'Exclusively hosting public container images without any local caching or version control capabilities',
      'Only storing source code repositories without any support for containerized applications or models',
      'Primarily managing user authentication credentials and access control policies for platform services',
      'Serving as secure, version-controlled local hub for NVIDIA AI Enterprise artifacts like NIMs and models'
    ],
    correctAnswer: 3,
    explanation: 'The artifact repository serves as a secure, version-controlled local hub for essential NVIDIA AI Enterprise artifacts, including containerized NVIDIA NIM microservices, AI models, libraries, and tools. It enables security scanning, reliable access without public registries, dependency management, and reproducible deployments.'
  },
  {
    id: 'q4',
    question: 'How does a GitOps controller maintain system consistency in the Enterprise AI Factory?',
    options: [
      'It manually deploys configurations based on administrator approval without any automated reconciliation processes',
      'It continuously monitors desired state in Git and automatically reconciles differences with actual system state',
      'It exclusively handles network routing without involvement in application deployment or configuration management',
      'It only validates syntax of configuration files without actually applying changes to infrastructure'
    ],
    correctAnswer: 1,
    explanation: 'A GitOps controller continuously monitors the desired state stored in Git repositories and ensures the actual state matches by automatically reconciling any differences. It operates as a Kubernetes controller running a reconciliation loop to maintain consistency between Git and the cluster.'
  },
  {
    id: 'q5',
    question: 'What does Time To First Token (TTFT) measure in AI agent observability?',
    options: [
      'The delay before the agent produces its initial response token after receiving a request',
      'The total duration required to process all tokens in the complete response sequence',
      'The average time between consecutive token generations throughout the entire response',
      'The latency for loading model weights into GPU memory before beginning inference'
    ],
    correctAnswer: 0,
    explanation: 'TTFT (Time To First Token) measures the delay before the agent produces its initial response token after receiving a request. This is a critical latency metric distinct from overall throughput or end-to-end latency measurements.'
  },
  {
    id: 'q6',
    question: 'What observability metrics specifically measure the quality and correctness of AI agent outputs?',
    options: [
      'Exclusively latency measurements including TTFT, TPS, and end-to-end response timing',
      'Only resource utilization tracking GPU, CPU, and memory consumption during operations',
      'Task completion rate, accuracy/relevance, faithfulness to sources, and reasoning step correctness',
      'Primarily error rates and fault frequencies across different agent workflow components'
    ],
    correctAnswer: 2,
    explanation: 'Accuracy and faithfulness metrics include task completion rate (percentage of successfully completed tasks), accuracy/relevance of responses (particularly for RAG systems), faithfulness to provided sources, and correctness of individual reasoning steps or tool outputs.'
  },
  {
    id: 'q7',
    question: 'What security approach does the Enterprise AI Factory implement at the network level?',
    options: [
      'Relying exclusively on perimeter firewalls without any internal network segmentation or traffic controls',
      'Defense-in-depth strategies using network policies to control traffic flow and isolate workloads',
      'Completely open internal networks trusting all services to implement their own security measures',
      'Single-layer encryption at the application level without any network-based traffic restrictions'
    ],
    correctAnswer: 1,
    explanation: 'The first line of defense uses defense-in-depth strategies, primarily utilizing network policies native to the container orchestration platform. These policies control traffic flow between services and pods, isolating workloads and restricting communication to authorized pathways only.'
  },
  {
    id: 'q8',
    question: 'At what levels is Role-Based Access Control (RBAC) implemented in the Enterprise AI Factory?',
    options: [
      'Only at the operating system level without any application or platform-specific controls',
      'Exclusively within database systems without orchestration or AI platform RBAC implementations',
      'Solely in the network layer without involvement in application or data access management',
      'Orchestration platform RBAC, integrated AI/ML platform RBAC, and database-level RBAC for granular data access'
    ],
    correctAnswer: 3,
    explanation: 'RBAC is implemented at multiple levels: orchestration platform RBAC (controlling cluster resources), integrated platform RBAC (AI/ML platform-specific functionalities), and database-level RBAC (fine-grained access to data elements like datasets, tables, or collections).'
  },
  {
    id: 'q9',
    question: 'What is the primary responsibility of the IT Admin role regarding the enterprise cloud native platform?',
    options: [
      'Platform Admin & Provisioning managing OS, hardware, orchestration lifecycle, and ensuring GPU resource availability',
      'Exclusively configuring network policies without any involvement in compute or storage provisioning',
      'Only monitoring system logs without any administrative privileges for infrastructure changes',
      'Developing AI models and applications without any platform infrastructure management responsibilities'
    ],
    correctAnswer: 0,
    explanation: 'The IT Admin role handles Platform Admin & Provisioning, which includes managing OS, hardware, orchestration lifecycle, and compute resources (especially GPUs). This role ensures stability and resource availability for the AI Factory infrastructure.'
  },
  {
    id: 'q10',
    question: 'What emerging standard aims to provide structured ways for AI agents to discover and interact with external data sources?',
    options: [
      'OpenTelemetry protocol exclusively designed for observability and tracing without data access capabilities',
      'Kubernetes Custom Resource Definitions for declaring AI agent configurations and permissions',
      'Model Context Protocol (MCP) enabling structured agent interaction with external data and tools',
      'NVIDIA NIM microservices providing standardized deployment APIs without data connector functionality'
    ],
    correctAnswer: 2,
    explanation: 'Model Context Protocol (MCP) is an emerging standard that aims to provide structured ways for AI agents to discover and interact with external data sources and tools, facilitating better integration with enterprise systems.'
  },
  {
    id: 'q11',
    question: 'What capabilities does NVIDIA NeMo provide within the AI platform?',
    options: [
      'Exclusively GPU driver management without any model development or training capabilities',
      'Cloud-native, end-to-end framework for building, training, and deploying LLMs and AI models',
      'Only inference optimization without any support for model training or customization',
      'Solely observability and monitoring tools without model development or deployment features'
    ],
    correctAnswer: 1,
    explanation: 'NVIDIA NeMo provides a cloud-native, end-to-end framework for building, training, and deploying large language models (LLMs) and other AI models. This enables organizations to efficiently develop and customize generative AI systems within the AI platform.'
  },
  {
    id: 'q12',
    question: 'What does NVIDIA\'s Mega Omniverse Blueprint enable for supply chain optimization?',
    options: [
      'Simulating warehouse operations using physics-informed digital twins and reinforcement learning techniques',
      'Exclusively managing inventory databases without any simulation or optimization capabilities',
      'Only visualizing existing warehouse layouts without any operational optimization features',
      'Primarily handling shipping logistics without warehouse operations or physics-based modeling'
    ],
    correctAnswer: 0,
    explanation: 'The Mega Omniverse Blueprint simulates warehouse operations for supply chain optimization using physics-informed digital twins and reinforcement learning. This enables enterprises to test and optimize warehouse configurations before physical implementation.'
  },
  {
    id: 'q13',
    question: 'How does the storage solution address the challenge of becoming a bottleneck in AI workflows?',
    options: [
      'Using exclusively local SSDs without any network-attached storage to minimize access latency',
      'Implementing only sequential read optimization without supporting random access patterns',
      'Relying solely on public cloud storage without any on-premises infrastructure components',
      'Utilizing tiered storage architecture with NVIDIA-Certified Storage meeting performance and reliability standards'
    ],
    correctAnswer: 3,
    explanation: 'The Enterprise AI Factory\'s storage solution utilizes a tiered storage architecture including NVIDIA-Certified Storage, which adheres to stringent performance and reliability standards specifically for AI tasks. This ensures efficient data access for large model weights, Vector Database I/O, and knowledgebases.'
  },
  {
    id: 'q14',
    question: 'What functionality does the Digital Human Blueprint provide using avatar animation and speech AI?',
    options: [
      'Warehouse simulation and supply chain optimization through physics-based digital twins',
      'Marketing content generation using multimodal extraction and hybrid vector search',
      'Virtual customer service assistants with multimodal reasoning capabilities',
      'Code generation and software development automation for enterprise applications'
    ],
    correctAnswer: 2,
    explanation: 'The Digital Human Blueprint uses avatar animation, speech AI, and multimodal reasoning to create virtual customer service assistants. This enables more natural and engaging interactions with customers through AI-powered digital humans.'
  },
  {
    id: 'q15',
    question: 'What security mechanisms are employed for AI agent and model security in the Enterprise AI Factory?',
    options: [
      'Relying exclusively on network firewalls without any application-level security controls',
      'Tools like NVIDIA NeMo Guardrails ensuring input validation, output filtering, and secure execution',
      'Only database encryption without any validation of inputs or outputs from models',
      'Exclusively using access control lists without any content filtering or validation mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Tools such as NVIDIA NeMo Guardrails and partner solutions are employed for AI agent and model security. These tools ensure input validation, output filtering, and secure execution, adhering to internally validated best practices for safe AI operations.'
  }
];

