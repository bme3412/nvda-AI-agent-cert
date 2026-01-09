import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA NeMo primarily described as?',
    options: [
      'A modular software suite for managing the AI agent lifecycle',
      'A specialized hardware platform for GPU-accelerated AI training',
      'A cloud-based service for deploying machine learning models',
      'A programming language designed for artificial intelligence development'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA NeMo is a modular software suite for managing the AI agent lifecycle. It provides microservices and toolkits for data processing, model fine-tuning and evaluation, reinforcement learning, policy enforcement, and system observability.'
  },
  {
    id: 'q2',
    question: 'Which three primary phases organize NeMo\'s features around the AI agent lifecycle?',
    options: [
      'Build, Deploy, and Optimize phases for developing and improving AI agents in production',
      'Design, Test, and Launch phases for systematic AI development workflows',
      'Create, Train, and Execute phases for end-to-end AI model development',
      'Plan, Develop, and Monitor phases for comprehensive AI system management'
    ],
    correctAnswer: 0,
    explanation: 'NeMo\'s features are organized around three primary phases: Build, Deploy, and Optimize. The Build phase encompasses data preparation and model selection, Deploy focuses on production deployment, and Optimize enables continuous improvement through monitoring and feedback.'
  },
  {
    id: 'q3',
    question: 'What does NeMo Curator enable teams to accomplish in the Build phase?',
    options: [
      'Clean, filter, and prepare multimodal data, processing existing datasets into high-quality, AI-ready formats',
      'Deploy trained models to production environments with automatic scaling capabilities',
      'Monitor model performance and collect user feedback for continuous improvement',
      'Generate synthetic training data using advanced generative AI techniques exclusively'
    ],
    correctAnswer: 0,
    explanation: 'NeMo Curator enables teams to clean, filter, and prepare multimodal data, processing existing multimodal datasets into high-quality, AI-ready formats for development pipelines during the Build phase.'
  },
  {
    id: 'q4',
    question: 'Which component provides state-of-the-art open multimodal reasoning models for model selection?',
    options: [
      'NVIDIA Nemotron provides models enabling teams to pick or build models suited to their use case',
      'NeMo Retriever offers extraction and embedding models specifically for RAG pipeline development',
      'NeMo Agent Toolkit serves as the primary framework for building custom reasoning models',
      'NeMo Data Designer creates domain-specific models from scratch using synthetic data generation'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA Nemotron provides state-of-the-art open multimodal reasoning models, enabling teams to pick or build models suited to their specific use case during the model selection process.'
  },
  {
    id: 'q5',
    question: 'How does NVIDIA NIM function in the Deploy phase?',
    options: [
      'Runs AI models in optimized containers, exposed as OpenAI-compatible APIs for high-throughput, low-latency inference',
      'Provides automated testing frameworks for validating model performance before production deployment',
      'Creates distributed training clusters for scaling model fine-tuning across multiple GPU nodes',
      'Implements continuous integration pipelines for seamless model versioning and rollback capabilities'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA NIM enables organizations to run AI models in optimized containers, exposed as OpenAI-compatible APIs, optimizing agents for production with high-throughput, low-latency inference to ensure they can scale to meet enterprise demands.'
  },
  {
    id: 'q6',
    question: 'What capability does NeMo Guardrails provide in the Deploy phase?',
    options: [
      'Automatically scales inference infrastructure based on real-time demand patterns',
      'Enforces safety, compliance, and control across AI interactions with content moderation guardrails',
      'Provides load balancing and traffic routing for distributed AI model deployments',
      'Implements advanced caching mechanisms to reduce response latency in production systems'
    ],
    correctAnswer: 1,
    explanation: 'NeMo Guardrails enforces safety, compliance, and control across AI interactions, applying safety, compliance, and content moderation guardrails to ensure secure agent behavior during deployment.'
  },
  {
    id: 'q7',
    question: 'Which component enables fine-tuning and aligning models with domain data in the Optimize phase?',
    options: [
      'NeMo Retriever provides domain-specific embedding models for improved accuracy in specialized tasks',
      'NeMo Agent Toolkit offers automated hyperparameter optimization for model performance tuning',
      'NeMo Customizer enables fine-tuning and aligning models with domain data for continuous improvement',
      'NeMo Framework handles distributed training coordination for large-scale model optimization'
    ],
    correctAnswer: 2,
    explanation: 'NeMo Customizer enables fine-tuning and aligning models with domain data during the Optimize phase, supporting continuous improvement of AI agents through domain-specific customization.'
  },
  {
    id: 'q8',
    question: 'What does NeMo RL provide for advanced reinforcement learning in the optimization process?',
    options: [
      'Post-trains and aligns models at scale with advanced reinforcement learning techniques',
      'Creates supervised learning datasets from reinforcement learning interaction logs',
      'Implements reward model training for human preference alignment exclusively',
      'Provides distributed inference capabilities for reinforcement learning policy deployment'
    ],
    correctAnswer: 0,
    explanation: 'NeMo RL post-trains and aligns models at scale with advanced reinforcement learning techniques, enabling continuous improvement with data flywheels during the optimization phase.'
  },
  {
    id: 'q9',
    question: 'Which industries and companies are mentioned as leading adopters of NVIDIA NeMo?',
    options: [
      'Tesla (autonomous vehicles), Netflix (content recommendation), and Amazon (cloud services) across automotive, entertainment, and cloud computing',
      'Microsoft (enterprise software), Google (search optimization), and Meta (social media) across technology platforms and digital services',
      'Worley (EPC business), Shell (custom AI chatbot), and Amdocs (telecommunications) across energy, construction, and telecom sectors',
      'JPMorgan Chase (financial services), Pfizer (pharmaceutical research), and Boeing (aerospace engineering) across finance, healthcare, and aerospace'
    ],
    correctAnswer: 2,
    explanation: 'Leading adopters include Worley deploying NVIDIA NIM for EPC business transformation, Shell training custom AI chatbots, and Amdocs building generative AI agents for telecommunications, demonstrating adoption across energy, construction, and telecom sectors.'
  },
  {
    id: 'q10',
    question: 'What are the three starting options organizations can choose from to begin with NVIDIA NeMo?',
    options: [
      'Try NVIDIA-optimized foundation models, build with the complete NeMo platform, or jump-start with NVIDIA Blueprints',
      'Start with cloud deployment, begin with on-premises installation, or opt for hybrid infrastructure setup',
      'Choose basic licensing, select enterprise support, or purchase premium consulting services',
      'Begin with proof-of-concept, advance to pilot deployment, or proceed directly to full production implementation'
    ],
    correctAnswer: 0,
    explanation: 'Organizations can start with NVIDIA NeMo through three pathways: trying NVIDIA-optimized foundation models like Nemotron, building with the complete NeMo platform, or jump-starting with NVIDIA Blueprints that provide pre-configured workflows and templates.'
  },
  {
    id: 'q11',
    question: 'What is the new NVIDIA AI Blueprint that was recently made available?',
    options: [
      'Enterprise Security Framework for implementing comprehensive AI governance and compliance measures',
      'Multimodal Model Development for creating advanced vision-language AI systems',
      'Cloud Migration Toolkit for seamlessly transitioning AI workloads to distributed infrastructures',
      'Building Data Flywheels that continuously powers generative and agentic AI applications with more accurate models'
    ],
    correctAnswer: 3,
    explanation: 'A new NVIDIA AI Blueprint for Building Data Flywheels is now available, enabling developers to build an automated data flywheel that continuously powers generative and agentic AI applications with more accurate and efficient models.'
  },
  {
    id: 'q12',
    question: 'How does NeMo support deployment flexibility across different infrastructure environments?',
    options: [
      'Integrates with existing AI platforms and supports cloud, on-premises, and hybrid deployment environments',
      'Requires specialized NVIDIA hardware but provides optimized performance across all deployment scenarios',
      'Exclusively supports cloud-based deployments with automatic scaling and load balancing capabilities',
      'Focuses on on-premises deployment with optional cloud backup and disaster recovery features'
    ],
    correctAnswer: 0,
    explanation: 'NeMo integrates with existing AI platforms and supports cloud, on-premises, and hybrid deployment, enabling enterprises to rapidly manage and create data flywheels across various infrastructure configurations.'
  },
  {
    id: 'q13',
    question: 'What does NeMo Gym provide in the context of reinforcement learning and agent training?',
    options: [
      'Physical robot simulation platforms for testing autonomous agent behaviors in realistic scenarios',
      'Competitive multi-agent training scenarios where different AI models compete against each other',
      'Virtual reality environments for training agents to interact with human users in immersive settings',
      'Simulated training environments to generate high-quality agentic RL rollouts for model improvement'
    ],
    correctAnswer: 3,
    explanation: 'NeMo Gym provides simulated training environments to generate high-quality agentic RL rollouts, supporting the reinforcement learning training process for continuous agent improvement.'
  },
  {
    id: 'q14',
    question: 'Which specific AI capabilities are mentioned as use cases that NeMo supports across various industries?',
    options: [
      'AI assistants, information retrieval systems, content generation tools, and humanoid robot control systems',
      'Computer vision applications, natural language processing, speech recognition, and recommendation engines exclusively',
      'Automated trading systems, fraud detection algorithms, supply chain optimization, and predictive maintenance tools',
      'Virtual reality experiences, augmented reality overlays, mixed reality interfaces, and immersive gaming environments'
    ],
    correctAnswer: 0,
    explanation: 'NeMo supports various use cases including AI assistants, information retrieval systems, content generation tools, and humanoid robot control systems, demonstrating its versatility across different AI application domains.'
  },
  {
    id: 'q15',
    question: 'What key benefits does NeMo deliver for enterprises developing agentic AI systems?',
    options: [
      'Reduced hardware costs, simplified programming interfaces, automated model selection, and guaranteed performance metrics',
      'Unlimited scalability, zero-latency responses, perfect accuracy guarantees, and complete automation of AI development',
      'Universal compatibility, instant deployment, maintenance-free operation, and automatic regulatory compliance',
      'Modular AI agent lifecycle management, increased ROI through faster deployment, accelerated GPU performance, and safer AI'
    ],
    correctAnswer: 3,
    explanation: 'NeMo delivers modular AI agent lifecycle management, increased ROI by enabling quick training and deployment of models, accelerated performance through GPU optimization, and safer agentic AI through model vetting and guardrailing capabilities.'
  }
];