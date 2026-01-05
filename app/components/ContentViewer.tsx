'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './ContentViewer.module.css';
import Quiz from './Quiz';

interface ContentViewerProps {
  filePath?: string;
  onFileSelect?: (path: string | undefined) => void;
}

interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}

interface ProgressStats {
  total: number;
  read: number;
  percentage: number;
  byCategory: Array<{
    name: string;
    total: number;
    read: number;
    percentage: number;
  }>;
}

interface FormattedContent {
  title: string;
  sections: Array<{ type: 'heading' | 'paragraph'; content: string; level?: number }>;
}

// Key terms to automatically bold - only the most important concepts
const KEY_TERMS = [
  // Core foundational concepts
  'Enterprise AI Factory', 'Agentic AI', 'autonomous agents',
  
  // Critical infrastructure components
  'Kubernetes', 'RAG', 'retrieval-augmented generation', 'vector databases',
  'GitOps', 'observability', 'defense-in-depth',
  
  // Key NVIDIA technologies
  'NIM', 'NeMo', 'NVIDIA NeMo', 'NVIDIA AI Blueprints', 'NeMo Guardrails',
  'Triton Inference Server', 'TensorRT', 'Agent Intelligence Toolkit', 'AIQ',
  
  // Important operational concepts
  'Agent Ops', 'microservices', 'artifact repository',
  
  // Critical metrics
  'Time To First Token', 'faithfulness metrics',
  
  // Security essentials
  'RBAC', 'IAM',
  
  // Memory concepts
  'short-term memory', 'long-term memory',
  
  // Planning concepts
  'task decomposition', 'Chain of Thought',
  
  // Agent development concepts
  'dynamic batching', 'model instances', 'LoRA', 'P-tuning', 'prompt tuning',
  'Circuit Breaker', 'Retry pattern', 'transient faults', 'exponential back-off',
  'idempotency', 'LangChain', 'LlamaIndex', 'CrewAI',
];

// Quiz data organized by reading/section
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSet {
  [key: string]: QuizQuestion[];
}

// Quiz questions organized by reading files
const QUIZ_DATA: QuizSet = {
  '1-agent-architecture-design/1-agentic-AI-factory.txt': [
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
],
  
  '1-agent-architecture-design/2-building-autonomous-AI.txt': [
    {
      id: 'q1',
      question: 'What distinguishes Agentic AI systems from traditional Large Language Models (LLMs)?',
      options: [
        'Agentic AI systems can process larger datasets and generate longer text outputs with better grammatical accuracy than traditional LLMs',
        'Agentic AI systems engage in continuous cycles of goal identification, planning, action execution, memory updates, and feedback reflection',
        'Agentic AI systems require less computational resources and can run on smaller hardware configurations than traditional LLMs',
        'Agentic AI systems are primarily focused on text generation tasks while traditional LLMs handle multimodal inputs'
      ],
      correctAnswer: 1,
      explanation: 'The document defines Agentic AI as systems that "autonomously perceive goals, generate plans, execute multi-step actions, adapt based on environmental feedback, and reason over time." Unlike traditional LLMs that "respond statically to prompts," agentic systems engage in "continuous cycles of: Goal Identification, Planning and Reasoning, Action Execution, Memory Update, and Feedback Reflection."'
    },
    {
      id: 'q2',
      question: 'Which core building block of Agentic NeMo enables agents to retrieve up-to-date, task-relevant information from external databases in real time?',
      options: [
        'Memory and Context Management',
        'Tool-Use and API Action Layer',
        'NeMo Guardrails',
        'Retrieval-Augmented Generation (RAG) Pipelines'
      ],
      correctAnswer: 3,
      explanation: 'The document specifically states that "Agentic NeMo integrates Retrieval-Augmented Generation (RAG) Pipelines that allow agents to retrieve up-to-date, task-relevant information from external vector databases like FAISS, RedisVector, or ElasticSearch. Instead of relying solely on static pretrained knowledge, NeMo agents can dynamically pull documents, facts, or structured data in real time."'
    },
    {
      id: 'q3',
      question: 'What is the primary function of the Planning and Reasoning Layer in the Agentic NeMo architecture?',
      options: [
        'It manages authentication, authorization, request routing, load balancing, and traffic management for user requests',
        'It stores session information, past interactions, task progress, and intermediate outputs to maintain context over time',
        'It analyzes user inputs to generate structured, multi-step plans using techniques like chain-of-thought prompting and task decomposition',
        'It validates conversational outputs, monitors tool-use actions, and ensures compliance with enterprise security policies'
      ],
      correctAnswer: 2,
      explanation: 'The document describes the Planning and Reasoning Layer as the "heart of the system" where "NeMo foundation models analyze user inputs to generate structured, multi-step plans instead of simple single-turn outputs. Leveraging techniques like chain-of-thought prompting, task decomposition, and advanced reasoning, this layer enables the agent to dynamically build actionable workflows and truly \"think\" through complex tasks."'
    },
    {
      id: 'q4',
      question: 'According to the document, which optimization technique specifically addresses LLM inference latency in Agentic NeMo?',
      options: [
        'Memory Sharding across clusters for faster lookup operations',
        'Parallel Execution of external tool calls and RAG retrievals',
        'TensorRT-LLM Inference Acceleration with model quantization to FP8 or INT8',
        'DeepSpeed Integration for multi-GPU communication optimization'
      ],
      correctAnswer: 2,
      explanation: 'The document explicitly states that "TensorRT-LLM Inference Acceleration plays a pivotal role by quantizing models to lower precision formats like FP8 or INT8 and applying graph optimizations, significantly reducing the LLM inference latency." While the other options are optimization techniques mentioned, they address different aspects of performance.'
    },
    {
      id: 'q5',
      question: 'In the evolution timeline of NVIDIA NeMo, what major capability was introduced in 2024 that transformed it into a platform for building autonomous AI agents?',
      options: [
        'Megatron-LM Integration for training massive LLMs across distributed clusters',
        'Fine-tuning techniques like LoRA, QLoRA, and Prefix Tuning for efficient model adaptation',
        'NeMo Guardrails for safety and Retrieval-Augmented Generation (RAG) pipelines',
        'Agentic Enablement providing orchestration of planning, memory, tool-use, and safety modules'
      ],
      correctAnswer: 3,
      explanation: 'The document\'s timeline shows that "2024 — Agentic Enablement: Represented a pivotal shift, providing full orchestration of planning, memory, tool-use, and safety modules, transforming NeMo into a platform for building truly autonomous AI agents." This was the key development that enabled autonomous agent capabilities.'
    },
    {
      id: 'q6',
      question: 'Which real-world use case demonstrates how Agentic NeMo can combine text and image processing for industrial applications?',
      options: [
        'Healthcare AI Assistant interfacing with clinical trial databases and research papers',
        'Financial Analysis Agent monitoring APIs and analyzing corporate filings for risk assessment',
        'IT Support Agent integrating with ticketing systems like Jira for automated resolution',
        'Multimodal Manufacturing Assistant analyzing equipment maintenance manuals and schematics'
      ],
      correctAnswer: 3,
      explanation: 'The document describes a "Multimodal Manufacturing Assistant: In industrial settings, a multimodal agent can combine text and image processing to analyze equipment maintenance manuals and schematics. The agent can retrieve specifications, generate detailed repair workflows, and assist technicians in real-time by fusing visual and textual information." This is the only use case that specifically mentions combining text and image processing.'
    }
  ],

  '1-agent-architecture-design/3-building-blocks-customer-service.txt': [
    {
      id: 'q1',
      question: 'What are the three main functional components of the NVIDIA AI Blueprint for AI virtual assistants architecture?',
      options: [
        'User Interface, Language Processing, and Database Management',
        'Data ingestion and retrieval pipeline, AI agent, and Operations pipeline',
        'Authentication Layer, Processing Engine, and Analytics Dashboard',
        'Input Validation, Response Generation, and Feedback Collection'
      ],
      correctAnswer: 1,
      explanation: 'The document clearly outlines three functional components: "1. Data ingestion and retrieval pipeline" where administrators load structured and unstructured data, "2. AI agent" which handles user interactions through LangGraph, and "3. Operations pipeline" which provides insights to customer service operators through chat history, analytics, and feedback.'
    },
    {
      id: 'q2',
      question: 'Which NVIDIA NIM microservice is specifically responsible for enhancing retrieval performance with fine-tuned reranking to find the most relevant passages?',
      options: [
        'NVIDIA NIM for LLM',
        'NeMo Retriever Embedding NIM',
        'NeMo Retriever Reranking NIM',
        'Llama 3.1 70B Instruct NIM'
      ],
      correctAnswer: 2,
      explanation: 'The document states that "NeMo Retriever Reranking NIM: Enhances the retrieval performance further with a fine-tuned reranker, finding the most relevant passages to provide as context when querying an LLM." This microservice specifically handles the reranking functionality to improve retrieval accuracy.'
    },
    {
      id: 'q3',
      question: 'How does the AI agent handle multi-turn conversations and maintain context throughout customer interactions?',
      options: [
        'It stores all conversation data in external cloud databases for later reference',
        'It uses short-term and long-term memory functions, embedding conversation queries and responses for retrieval as context',
        'It requires customers to provide their full interaction history at the start of each session',
        'It maintains context only within a single session and resets between conversations'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "The AI agent also uses short-term and long-term memory functions to enable multi-turn conversation history. The active conversation queries and responses are embedded so they can be retrieved later in the conversation as additional context. This allows more human-like interactions and eliminates the need for customers to repeat information they\'ve already shared with the agent."'
    },
    {
      id: 'q4',
      question: 'What framework is used to implement the AI agent for handling complex customer queries and recursive problem-solving?',
      options: [
        'TensorFlow Agents',
        'LangChain Framework',
        'LangGraph agentic LLM programming framework',
        'PyTorch Lightning'
      ],
      correctAnswer: 2,
      explanation: 'The document specifically states that "An AI agent, implemented in the LangGraph agentic LLM programming framework, plans how to handle complex customer queries and solves recursively." LangGraph is identified as the framework used for the agentic AI implementation.'
    },
    {
      id: 'q5',
      question: 'What types of analytics can the operations pipeline generate to provide insights to customer service administrators?',
      options: [
        'Social media sentiment and competitor analysis metrics',
        'Average call time, time to resolution, and customer satisfaction',
        'Server performance metrics and system uptime statistics',
        'Marketing conversion rates and sales pipeline data'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The analytics microservice, which leverages the Llama 3.1 70B Instruct NIM, can be used to generate analytics such as average call time, time to resolution, and customer satisfaction. The analytics are also leveraged as user feedback to retrain the LLM models to improve accuracy."'
    },
    {
      id: 'q6',
      question: 'According to the document, what happens at the end of each customer conversation to improve future interactions?',
      options: [
        'The system automatically generates a customer satisfaction survey',
        'All conversation data is permanently deleted for privacy compliance',
        'The AI agent summarizes the discussion with sentiment determination and stores conversation history in the structured database',
        'The conversation is forwarded to human agents for quality review'
      ],
      correctAnswer: 2,
      explanation: 'The document explains that "at the end of the conversation, the AI agent summarizes the discussion along with a sentiment determination and stores the conversation history in the structured database. Subsequent interactions from the same user can be retrieved as additional context in future conversations." This process enables improved future interactions and provides valuable insights.'
    }
  ],

  '1-agent-architecture-design/4-agentic-AI-autonomous-AI-agents.txt': [
    {
      id: 'q1',
      question: 'According to the document, what are the key components that comprise an agent in the CrewAI framework?',
      options: [
        'Agent Core, Memory Module, Tools, and Planning Module',
        'Role Playing, Focus, Tools, Cooperation, Guardrails, and Memory',
        'Data Processing, Model Training, Evaluation, and Documentation',
        'Natural Language Processing, Decision Making, Task Execution, and Feedback'
      ],
      correctAnswer: 1,
      explanation: 'The document specifically states that "In CrewAI, the key components comprising the agent are Role Playing, Focus, Tools, Cooperation, Guardrails, and Memory." While the first option describes general agent components, CrewAI has its own specific framework with these six distinct components.'
    },
    {
      id: 'q2',
      question: 'What are the two main crews described in the financial services modeling system, and what is their primary relationship?',
      options: [
        'The Data Analysis Crew and the Reporting Crew work independently on separate datasets',
        'The Modeling Crew and the Model Risk Management (MRM) Crew, where MRM serves as a safeguard team ensuring the modeling crew operates as intended',
        'The Training Crew and the Testing Crew collaborate to validate machine learning algorithms',
        'The Compliance Crew and the Audit Crew work together to ensure regulatory adherence'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "The model risk management (MRM) crew can be seen as a safeguard team that ensures the modeling crew is operating as intended while upholding regulatory rules, business objectives, and modeling functions." The modeling crew performs tasks like data analysis and model training, while the MRM crew validates and ensures compliance.'
    },
    {
      id: 'q3',
      question: 'According to the document, what is the purpose of guardrails in agentic systems?',
      options: [
        'To increase the computational speed and efficiency of multi-agent processing',
        'To ensure operational safety and ethical practices by reducing bias, unsafe actions, and hallucinations',
        'To facilitate better communication protocols between different agent types',
        'To optimize memory allocation and improve data storage capabilities'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "Guardrails are a set of rules that ensure operational safety and ethical practices in machine learning applications" and "Guardrails reduce the likelihood of issues like bias, potential for unsafe actions, dataset poisoning, lack of explainability, hallucinations, and non-reproducibility." They are primarily safety and ethics mechanisms.'
    },
    {
      id: 'q4',
      question: 'What is the role of the planning module in LLM-based agentic systems?',
      options: [
        'It stores and manages long-term and short-term memory for personalized interactions',
        'It provides external APIs and tools for agents to interact with the outside world',
        'It acts as a task orchestration engine that breaks down complex tasks into manageable steps and manages decision-making',
        'It handles the natural language processing and text generation capabilities of the system'
      ],
      correctAnswer: 2,
      explanation: 'The document explains that "In LLM-based agentic systems, a planning module is responsible for managing the decision-making and task execution process by breaking down complex tasks into manageable steps. In other words, the planning module acts as a task orchestration engine that manages how an agent handles multi-step, goal-oriented tasks."'
    },
    {
      id: 'q5',
      question: 'What approach does the document recommend to address safety concerns and harmful outputs in agentic systems?',
      options: [
        'Complete automation without any human oversight to eliminate bias',
        'Using only pre-trained models without any fine-tuning or customization',
        'Implementation of human-in-the-loop (HITL) systems that allow humans to provide oversight, feedback, and intervention',
        'Restricting agents to simple, single-step tasks to minimize complexity'
      ],
      correctAnswer: 2,
      explanation: 'The document emphasizes that "One of the ways to tackle this issue is the introduction of human-in-the-loop. This is the ability for humans to intervene or be a part of the processing capabilities of agentic systems. This approach, when applied properly, will be critical to protecting end-users from biased or incorrect outputs." It also states that "humans can provide oversight, feedback, and intervention to prevent the agents from taking harmful actions."'
    },
    {
      id: 'q6',
      question: 'According to the memory system described in CrewAI, what types of memory help agents recall, reason, and learn from past events?',
      options: [
        'Cache memory, buffer memory, and volatile memory',
        'Short-term memory, long-term memory, entity memory, and contextual memory',
        'Working memory, episodic memory, and semantic memory',
        'Local memory, distributed memory, and shared memory'
      ],
      correctAnswer: 1,
      explanation: 'The document specifically states that "The memory system in CrewAI helps agents to recall, reason, and effectively learn from past events and interactions. The memory system consists of short-term memory, long-term memory, entity memory, and contextual memory." These four types of memory enable agents to maintain context and learn from interactions.'
    }
  ],

  '1-agent-architecture-design/5-catch-me-if-you-can.txt': [
    {
      id: 'q1',
      question: 'According to the document, what are the main limitations of traditional fraud detection models that lead to their failure in modern fraud scenarios?',
      options: [
        'They require too much computational power and are expensive to operate in real-time environments',
        'They function as black boxes with little interpretability and struggle with concept drift when attacker behavior changes over time',
        'They can only detect fraud patterns that occur during business hours and fail with international transactions',
        'They are too complex for analysts to understand and require specialized technical expertise to maintain'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "despite their statistical power, these models often function as black boxes, offering little interpretability and struggling with concept drift — a critical issue in fraud scenarios where attacker behavior changes over time." This lack of interpretability and inability to adapt to changing fraud patterns are identified as key limitations.'
    },
    {
      id: 'q2',
      question: 'What are the six specialized AI agents in the multi-agent fraud detection system described in the document?',
      options: [
        'Data Collector, Pattern Matcher, Risk Calculator, Report Generator, Decision Maker, and Feedback Processor',
        'Contextual Feature Extractor, Pattern Divergence Analyst, Risk Synthesizer Agent, Explanation Generation Agent, Decision Recommender Agent, and Feedback Integration Loop',
        'Transaction Monitor, Anomaly Detector, Fraud Classifier, Alert Generator, Review Router, and Learning Engine',
        'Input Validator, Behavior Analyzer, Threat Assessor, Compliance Checker, Action Executor, and Performance Tracker'
      ],
      correctAnswer: 1,
      explanation: 'The document explicitly lists the six agents: "Agent 1: Contextual Feature Extractor," "Agent 2: Pattern Divergence Analyst," "Agent 3: Risk Synthesizer Agent," "Agent 4: Explanation Generation Agent," "Agent 5: Decision Recommender Agent," and "Agent 6: Feedback Integration Loop." Each agent has a specialized role in the fraud detection pipeline.'
    },
    {
      id: 'q3',
      question: 'What is the primary function of the Pattern Divergence Analyst agent in the multi-agent fraud detection system?',
      options: [
        'It generates plain-language justifications for risk classifications to meet audit requirements',
        'It compares transactions to dynamic behavioral profiles and evaluates deviations in transaction patterns, devices, and frequency',
        'It enriches transaction metadata with contextual signals like merchant behavior and device fingerprint anomalies',
        'It performs weighted decisioning based on risk scores, confidence thresholds, and customer tiers'
      ],
      correctAnswer: 1,
      explanation: 'The document describes Agent 2 as comparing "the transaction to a dynamic behavioral profile of the user" and evaluating "Deviations in transaction size/time/geo, New devices or merchant IDs, Sudden frequency bursts." This agent specifically focuses on detecting patterns that diverge from normal user behavior.'
    },
    {
      id: 'q4',
      question: 'According to the document, what key benefits does the multi-agent architecture provide over monolithic fraud models?',
      options: [
        'Lower computational costs, faster processing speeds, and reduced memory requirements',
        'Explainability, Scalability, Domain Adaptability, Resilience, and Human-in-the-loop readiness',
        'Better data compression, improved network security, and enhanced database performance',
        'Simplified maintenance, reduced training time, and automatic feature selection'
      ],
      correctAnswer: 1,
      explanation: 'The document explicitly states the key benefits: "Explainability: Every decision is narratively justified and traceable. Scalability: Each agent can scale independently. Domain Adaptability: You can swap or fine-tune agents per region or risk category. Resilience: If one agent fails, others can still carry the signal forward. Human-in-the-loop Ready: Designed for seamless analyst intervention."'
    },
    {
      id: 'q5',
      question: 'What does the Feedback Integration Loop agent learn from to ensure long-term improvement without full model retraining?',
      options: [
        'Real-time transaction volumes, system performance metrics, and database query speeds',
        'Market trends, economic indicators, and seasonal spending patterns',
        'Analyst overrides, post-event fraud labeling, and customer dispute resolutions',
        'Network traffic patterns, API response times, and user interface interactions'
      ],
      correctAnswer: 2,
      explanation: 'The document specifies that the Feedback Integration Loop agent "learns from feedback loops: Analyst overrides, Post-event fraud labeling, Customer dispute resolutions. It fine-tunes the agent-specific prompting and weights based on this feedback, ensuring long-term improvement without full model retraining."'
    },
    {
      id: 'q6',
      question: 'According to the document, what specific improvements were achieved by implementing the agentic fraud detection system?',
      options: [
        'Processing time reduced by 50%, storage costs decreased by 40%, and system uptime improved to 99.9%',
        'Precision improved by 18%, false positives reduced by 30%, and analysts now use AI-generated rationale summaries in their workflows',
        'Customer satisfaction increased by 25%, transaction volume capacity doubled, and regulatory compliance scores improved by 35%',
        'Energy consumption decreased by 20%, hardware requirements reduced by 15%, and maintenance costs lowered by 45%'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The implementation has shown early success. Precision improved by 18%, false positives reduced by 30%, and analysts now use rationale summaries generated by Agent 4 directly in their review workflows." These specific metrics demonstrate the quantifiable improvements achieved.'
    }
  ],

  '1-agent-architecture-design/6-multi-agent-systems.txt': [
    {
      id: 'q1',
      question: 'According to the document, what defines multi-agent systems and how do they work?',
      options: [
        'A single AI agent with multiple specialized modules that processes tasks sequentially',
        'A collection of specialized AI agents that work together to solve complex problems, each with specific roles contributing to a common goal',
        'A centralized system where one main agent delegates simple tasks to subordinate processing units',
        'A database of AI models that can be called upon individually to handle specific types of requests'
      ],
      correctAnswer: 1,
      explanation: 'The document defines multi-agent systems as "a collection of specialized AI agents that work together to solve a complex problem. Each agent has a specific role in executing varied tasks that contribute to achieving a common goal." This emphasizes the collaborative nature and specialization of agents working toward shared objectives.'
    },
    {
      id: 'q2',
      question: 'What are the four types of AI agent orchestration described in the document, and what characterizes each type?',
      options: [
        'Sequential, Parallel, Conditional, and Loop-based orchestration based on execution patterns',
        'Centralized, Decentralized, Federated, and Hierarchical orchestration based on control and coordination structures',
        'Synchronous, Asynchronous, Real-time, and Batch orchestration based on timing requirements',
        'Local, Regional, Global, and Universal orchestration based on geographical distribution'
      ],
      correctAnswer: 1,
      explanation: 'The document describes four orchestration types: "Centralized" (single supervisor coordinates), "Decentralized" (each agent operates autonomously), "Federated" (multiple agent systems collaborate across organizations), and "Hierarchical" (higher-level agents supervise lower-level agents in tiers). Each type represents different control and coordination structures.'
    },
    {
      id: 'q3',
      question: 'According to the document, what are the key capabilities that Agentic RAG must be able to provide?',
      options: [
        'Fast query processing, automated data backup, real-time synchronization, and error recovery mechanisms',
        'Access knowledge across diverse data types, efficiently process petabyte-scale data, provide high-accuracy retrieval and reranking, and store learnings to create an AI data flywheel',
        'User authentication, data encryption, network security, and compliance monitoring for enterprise systems',
        'Model training, hyperparameter tuning, performance optimization, and automated deployment capabilities'
      ],
      correctAnswer: 1,
      explanation: 'The document states that Agentic RAG must: "Access knowledge across structured, semi-structured, and unstructured data... Efficiently process data at petabyte scale... Provide high-accuracy, high-performance retrieval and reranking... Store and leverage learnings from AI-powered applications and agents in production, automatically increasing the knowledge of the enterprise and creating an AI data flywheel."'
    },
    {
      id: 'q4',
      question: 'What types of organizations benefit most from multi-agent systems according to the document?',
      options: [
        'Small startups with limited resources and simple operational requirements',
        'Organizations with demanding workloads, rapidly changing environments, distributed control needs, and essential fault tolerance requirements',
        'Traditional manufacturing companies with established processes and minimal technology integration',
        'Educational institutions focused primarily on theoretical research and academic publishing'
      ],
      correctAnswer: 1,
      explanation: 'The document identifies organizations that benefit most as those that: "Experience demanding, growing workloads... Face rapidly changing environments... Must monitor and distribute control intelligence... Require essential fault tolerance." These characteristics describe complex, dynamic environments where multi-agent systems provide the most value.'
    },
    {
      id: 'q5',
      question: 'What are the three main components of NVIDIA AI Enterprise that help build agentic systems?',
      options: [
        'NVIDIA GPUs, NVIDIA CUDA, and NVIDIA Deep Learning Libraries',
        'NVIDIA NeMo, NVIDIA NeMo Retriever, and NVIDIA NIM',
        'NVIDIA Omniverse, NVIDIA Metropolis, and NVIDIA Clara',
        'NVIDIA TensorRT, NVIDIA Triton, and NVIDIA TAO'
      ],
      correctAnswer: 1,
      explanation: 'The document specifically lists: "NVIDIA NeMo: A set of microservices that help agentic AI developers... NVIDIA NeMo Retriever: A collection of microservices for data ingestion, extraction, embedding, retrieval, and reranking... NVIDIA NIM: A set of inference microservices, optimized for leading open generative AI models." These three components are identified as the main building blocks.'
    },
    {
      id: 'q6',
      question: 'According to the document, what benefits do multi-agent systems provide over single AI agents?',
      options: [
        'Lower computational requirements, simpler maintenance, and reduced training time',
        'Greater efficiency through specialization, scalability, transparency, and the ability to update individual agents without complete system overhaul',
        'Faster processing speeds, better data compression, and improved network security',
        'Reduced energy consumption, smaller memory footprint, and simplified user interfaces'
      ],
      correctAnswer: 1,
      explanation: 'The document states that multi-agent systems "consist of many agents tailored for specialized or niche tasks, leading to overall greater efficiency and performance" and "are scalable and transparent, as systems don\'t require a complete overhaul or retraining—individual agents can be replaced or updated." This emphasizes the modularity and adaptability advantages.'
    }
  ],

  'generated-content/1-agent-architecture-design/1.1-Design-user-interfaces.txt': [
    {
      id: 'q1',
      question: 'According to the document, what is the fundamental difference between traditional software interfaces and agent interfaces when handling user requests?',
      options: [
        'Agent interfaces require more complex authentication and security protocols than traditional software',
        'Traditional software provides instant actions while agent interfaces must expose the reasoning journey and multi-step process in real-time',
        'Agent interfaces only work with voice commands while traditional software uses visual elements',
        'Traditional software is faster and more reliable than agent interfaces for all types of tasks'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "When someone clicks \'save\' on a document, they expect an instant action. But when they ask an agent to \'analyze Q3 sales trends and recommend strategy adjustments,\' there\'s a journey happening—the agent is breaking down the request, gathering information, reasoning through data, and synthesizing recommendations. Your interface needs to expose this journey in real-time without overwhelming the user."'
    },
    {
      id: 'q2',
      question: 'What does the document identify as the foundation of intuitive human-agent interaction?',
      options: [
        'Fast response times and minimal loading delays',
        'Transparency and visibility of what the agent is thinking and doing',
        'Advanced natural language processing capabilities',
        'Integration with multiple external APIs and databases'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The foundation of intuitive human-agent interaction starts with transparency and visibility. Users need to see what the agent is thinking and doing, not just the final output." This transparency builds trust and allows users to course-correct if needed.'
    },
    {
      id: 'q3',
      question: 'According to the document, what approach should conversational design in agent interfaces take?',
      options: [
        'Make every interaction feel exactly like talking to a human with no structured elements',
        'Use only traditional UI elements like buttons and forms to avoid confusion',
        'Support natural language input while providing escape hatches through multi-modal interaction combining chat with structured UI elements',
        'Focus exclusively on voice-based interactions without any visual components'
      ],
      correctAnswer: 2,
      explanation: 'The document explains that interfaces "should support natural language input because that\'s how humans think and express complex needs, but it also needs escape hatches for when conversation fails. This means designing for multi-modal interaction—combining chat interfaces with buttons, forms, sliders, and other traditional UI elements."'
    },
    {
      id: 'q4',
      question: 'What does "agent state awareness" refer to in the context of interface design?',
      options: [
        'The agent\'s ability to remember previous conversations and user preferences',
        'Clear communication of what the agent knows, what it\'s doing, what it can do next, and what it cannot do',
        'The technical status of servers and databases the agent connects to',
        'The agent\'s emotional intelligence and ability to detect user mood'
      ],
      correctAnswer: 1,
      explanation: 'The document defines agent state awareness as the interface clearly communicating "what the agent knows, what it\'s currently doing, what it can do next, and what it cannot do." This includes showing "the agent\'s current context, available tools, and memory" to transform user confidence.'
    },
    {
      id: 'q5',
      question: 'How should error handling and recovery be designed differently for agent interfaces compared to traditional software?',
      options: [
        'Agent interfaces should hide all errors to avoid confusing users',
        'Use simple error codes and technical messages like traditional software',
        'Support graceful degradation and collaborative problem-solving, explaining what went wrong, what was accomplished, and offering concrete next steps',
        'Automatically restart the agent process without informing the user'
      ],
      correctAnswer: 2,
      explanation: 'The document emphasizes that agent error handling should "support graceful degradation and collaborative problem-solving. Instead of dead-end error messages, design interfaces that explain what went wrong in plain language, show what was accomplished before the failure, and offer concrete next steps."'
    },
    {
      id: 'q6',
      question: 'According to the document, what is the ultimate test of an intuitive human-agent interface?',
      options: [
        'Whether it can process requests faster than competing agent systems',
        'Whether users can accomplish their goals with minimal friction while maintaining full understanding and control of what the agent is doing',
        'Whether it supports the maximum number of concurrent users without performance degradation',
        'Whether it can integrate with the most external systems and databases'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The ultimate test of an intuitive human-agent interface is whether users can accomplish their goals with minimal friction while maintaining full understanding and control of what the agent is doing. It\'s a delicate balance between automation and transparency, between conversational fluidity and structured precision, between agent autonomy and human oversight."'
    }
  ],

  'generated-content/1-agent-architecture-design/1.2-Implement-Reasoning-ReAct.txt': [
    {
      id: 'q1',
      question: 'According to the document, how does ReAct differ from traditional AI systems in terms of reasoning and action capabilities?',
      options: [
        'ReAct systems are faster and require less computational resources than traditional AI systems',
        'Traditional AI systems had pure reasoning systems that could think but not act, or action-taking systems that could execute but not think, while ReAct bridges this gap with continuous reasoning-action loops',
        'ReAct systems only work with pre-programmed responses while traditional systems can adapt to new situations',
        'Traditional AI systems are more reliable and accurate than ReAct systems in complex scenarios'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "Before ReAct and similar frameworks, most AI systems fell into two camps. You had pure reasoning systems that could think through problems and generate plans but couldn\'t actually do anything in the real world. Then you had action-taking systems that could execute tasks but didn\'t really think through their approach... ReAct bridges this gap by creating a continuous loop where agents alternate between reasoning about what they should do next and actually taking actions based on that reasoning."'
    },
    {
      id: 'q2',
      question: 'What does the ReAct cycle consist of, and how does it operate in practice?',
      options: [
        'Plan-Execute-Evaluate in a linear sequence without iteration',
        'Reason, Act, Observe in a continuous loop until the task is complete',
        'Input-Process-Output with feedback mechanisms',
        'Search-Analyze-Report with human validation at each step'
      ],
      correctAnswer: 1,
      explanation: 'The document describes the ReAct cycle as "reason, act, observe, reason, act, observe—until the agent has enough information to provide a comprehensive answer." It operates by having the agent "alternate between reasoning about what they should do next and actually taking actions based on that reasoning," creating "a continuous loop."'
    },
    {
      id: 'q3',
      question: 'What are the key benefits of explicit reasoning traces in ReAct frameworks?',
      options: [
        'They reduce computational costs and improve processing speed',
        'They make agent behavior interpretable and debuggable, allow course-correction mid-execution, and create natural checkpoint systems for human intervention',
        'They eliminate the need for human oversight and monitoring',
        'They simplify the agent architecture and reduce complexity'
      ],
      correctAnswer: 1,
      explanation: 'The document states that explicit reasoning traces serve multiple purposes: "First, it makes the agent\'s behavior interpretable and debuggable... Second, it allows the agent to course-correct mid-execution... Third, it creates a natural checkpoint system where human operators can intervene, approve actions, or redirect the agent\'s approach."'
    },
    {
      id: 'q4',
      question: 'According to the document, what distinguishes high-quality reasoning in ReAct implementations from poor reasoning?',
      options: [
        'High-quality reasoning uses more complex vocabulary and longer sentences',
        'High-quality reasoning is specific and analytical, explaining why certain actions are needed rather than being vague',
        'High-quality reasoning always leads to successful task completion without errors',
        'High-quality reasoning requires fewer reasoning steps to reach conclusions'
      ],
      correctAnswer: 1,
      explanation: 'The document emphasizes that "Effective ReAct implementations encourage the agent to be specific and analytical in its thought steps. Instead of vague thoughts like \'I should search for information,\' high-quality reasoning looks like \'The user asked about recent developments, and my knowledge cutoff is January 2025, so I need to search for events after that date to provide accurate information.\' This specificity directly improves action selection."'
    },
    {
      id: 'q5',
      question: 'How does error recovery work naturally in ReAct frameworks?',
      options: [
        'The system automatically restarts from the beginning when errors occur',
        'Errors are handled through the reasoning loop, where the next reasoning step can acknowledge failures and adjust strategy',
        'Human operators must manually intervene to correct any errors that occur',
        'The agent stops execution and reports the error to the user immediately'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "Error recovery in ReAct frameworks happens naturally through the reasoning loop. If an action fails or returns unexpected results, the next reasoning step can acknowledge this and adjust strategy." It provides examples of how agents can reason through failures and try different approaches, making "ReAct-based agents much more robust than systems that commit to an action sequence upfront."'
    },
    {
      id: 'q6',
      question: 'What fundamental shift does implementing ReAct represent in how agents approach problems?',
      options: [
        'From complex decision-making to simple rule-following',
        'From "do this specific thing" to "figure out what needs to be done and do it thoughtfully"',
        'From collaborative problem-solving to autonomous operation',
        'From real-time processing to batch processing of requests'
      ],
      correctAnswer: 1,
      explanation: 'The document concludes that "When you implement ReAct in your own systems... You\'re moving from \'do this specific thing\' to \'figure out what needs to be done and do it thoughtfully.\' That shift is what separates basic automation from true agentic behavior, and mastering ReAct frameworks is essential for building AI agents that can handle real-world complexity with the kind of adaptive intelligence we expect from capable human assistants."'
    }
  ],

  'generated-content/1-agent-architecture-design/1.3-Config-Agent-agent-protocol.txt': [
    {
      id: 'q1',
      question: 'According to the document, what is the foundation of any multi-agent communication system?',
      options: [
        'High-speed network connections and low-latency protocols',
        'The message structure using standardized formats like JSON with specific fields for sender, recipient, message type, content, and metadata',
        'Advanced natural language processing capabilities for conversational interactions',
        'Centralized databases that store all agent information and communication logs'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The foundation of any multi-agent communication system is the message structure. Agents need a common language—not just natural language, but a standardized way of packaging information. The most common approach uses structured formats like JSON, where each message contains specific fields: who sent it, who should receive it, what type of message it is, the actual content, and often a timestamp and unique identifier."'
    },
    {
      id: 'q2',
      question: 'What are the different communication patterns described for agent interactions, and when are they used?',
      options: [
        'Only direct point-to-point communication between two agents with established relationships',
        'Direct point-to-point, broadcast, publish-subscribe, request-reply, and message queue patterns for different interaction scenarios',
        'Synchronous communication only, to ensure immediate responses and coordination',
        'Natural language conversations with automatic translation between different agent vocabularies'
      ],
      correctAnswer: 1,
      explanation: 'The document describes multiple patterns: "direct point-to-point communication," "broadcast communication where one agent sends information to multiple other agents simultaneously," "publish-subscribe patterns where agents subscribe to specific topics," "request-reply patterns for synchronous interactions," and "message queue patterns for asynchronous work distribution."'
    },
    {
      id: 'q3',
      question: 'What is the purpose of service discovery and registration in multi-agent systems?',
      options: [
        'To monitor agent performance and automatically remove poorly performing agents',
        'To allow agents to find each other and understand what capabilities each agent offers through a registry service',
        'To encrypt all communications between agents for security purposes',
        'To schedule and coordinate when different agents can communicate to avoid conflicts'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that service discovery and registration provides "a way for agents to find each other and understand what capabilities each agent offers. This typically involves a registry service—think of it as a phone book for agents. When an agent starts up, it registers itself with this service, advertising its capabilities... When another agent needs web search capabilities, it queries the registry, discovers available search agents, and can then establish communication."'
    },
    {
      id: 'q4',
      question: 'According to the document, what are the main benefits of using message brokers in multi-agent communication?',
      options: [
        'They eliminate the need for error handling and fault tolerance mechanisms',
        'They provide decoupling, message persistence when recipients are offline, and complex routing logic capabilities',
        'They automatically translate between different agent programming languages',
        'They ensure all messages are delivered instantly without any queuing or delays'
      ],
      correctAnswer: 1,
      explanation: 'The document states that message brokers provide several benefits: "First, it decouples agents—the sender doesn\'t need to know where the recipient is or even if it\'s currently running. Second, it enables persistence—if the recipient is offline, the broker can queue messages for later delivery. Third, it facilitates more complex routing logic, like sending one message to multiple recipients, filtering messages based on content, or transforming message formats on the fly."'
    },
    {
      id: 'q5',
      question: 'What security and trust mechanisms are essential for multi-agent communication protocols?',
      options: [
        'Only network firewalls and basic password protection for agent endpoints',
        'Authentication mechanisms, authorization checks, and encryption, potentially with capability tokens for fine-grained permissions',
        'Complete isolation of agents with no direct communication allowed',
        'Manual approval required for every message sent between agents'
      ],
      correctAnswer: 1,
      explanation: 'The document emphasizes that "Communication protocols need authentication mechanisms—often using cryptographic signatures or shared secrets to verify sender identity. They need authorization checks to ensure agents only access information and invoke actions they\'re permitted to. And they need encryption for sensitive data in transit... you might implement more sophisticated protocols with capability tokens that grant specific, limited permissions rather than blanket access."'
    },
    {
      id: 'q6',
      question: 'What is conversational coherence and why is it important in multi-agent systems?',
      options: [
        'The ability for agents to speak the same programming language',
        'Maintaining conversational context across agent handoffs so users experience seamless collaboration rather than disconnected interactions',
        'Ensuring all agents respond at the same speed to maintain conversation flow',
        'The requirement that only one agent can communicate with a user at any given time'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "When multiple agents collaborate on a user request, the user shouldn\'t experience it as talking to a bunch of disconnected robots. The agents need to maintain conversational context across handoffs... This often requires agents to pass not just the immediate query but also relevant conversation state, user preferences, and the reasoning that led to involving the second agent. The goal is seamless collaboration that feels to the user like working with a coordinated team rather than being bounced between separate systems."'
    }
  ],

  'generated-content/1-agent-architecture-design/1.4-Manage-memory.txt': [
    {
      id: 'q1',
      question: 'According to the document, what is the fundamental problem with AI agents regarding memory, and why does this occur?',
      options: [
        'AI agents have too much memory and become overwhelmed by information overload',
        'AI agents naturally have the memory span of a goldfish and start fresh each interaction unless deliberate memory architecture is built',
        'AI agents can only remember numerical data but forget all text-based information',
        'AI agents share memories across different users, creating privacy and security issues'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "they\'re incredibly intelligent in the moment but naturally have the memory span of a goldfish. Without deliberate memory architecture, an agent might brilliantly solve a complex problem for you on Monday and then have absolutely no recollection of it by Tuesday. This isn\'t a bug—it\'s how the underlying models work. Each time you interact with an agent, you\'re essentially starting fresh unless you\'ve built systems to explicitly manage memory."'
    },
    {
      id: 'q2',
      question: 'How is short-term memory typically implemented in agentic systems, and what is its main limitation?',
      options: [
        'Through permanent database storage that persists across all sessions indefinitely',
        'Through the context window that contains conversation history, with the limitation of finite capacity that requires deciding what to keep and what to let go',
        'Through cloud storage that automatically backs up every interaction for future reference',
        'Through human operators who manually track and record important conversation details'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "Short-term memory in agentic systems is all about maintaining context within a single session or task... This is typically implemented through the context window—the actual text that gets fed to the language model with each request." The limitation is that "context windows aren\'t infinite. Even with modern models boasting huge context lengths, you\'re still dealing with hard limits... This creates the core challenge of short-term memory management—deciding what to keep in the active context and what to let go."'
    },
    {
      id: 'q3',
      question: 'How does long-term memory work using vector databases and semantic search?',
      options: [
        'Information is stored exactly as typed and retrieved only through exact keyword matches',
        'Important information gets converted to embeddings (mathematical representations of meaning) and stored in databases, then retrieved through semantic similarity rather than keyword matching',
        'All conversations are recorded as audio files and processed through speech recognition when needed',
        'Long-term memory is maintained by human reviewers who manually categorize and index all interactions'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "When the agent encounters information worth remembering... that sentence gets converted into a mathematical representation called an embedding. Think of it as a unique fingerprint that captures the meaning of that information. This embedding gets stored in a specialized database alongside the original text. Later... the system searches the database for similar embeddings." The brilliance is that "it finds relevant memories based on meaning, not just keyword matching."'
    },
    {
      id: 'q4',
      question: 'What is memory consolidation and why is it important for agent memory systems?',
      options: [
        'The process of backing up all memory data to prevent loss during system failures',
        'The process of refining and organizing memories over time, merging related fragments into coherent understanding to reduce redundancy and improve retrieval',
        'The automatic deletion of old memories to make space for new information',
        'The encryption of sensitive memories to ensure user privacy and data security'
      ],
      correctAnswer: 1,
      explanation: 'The document describes memory consolidation as "the process of refining and organizing memories over time, similar to how human brains process and integrate new information during sleep. An agent might have dozens of individual memories about your preferences scattered across many conversations... Rather than storing these as separate fragments, a consolidation process might merge them into a single, comprehensive preference... This reduces redundancy, improves retrieval efficiency, and creates more coherent understanding."'
    },
    {
      id: 'q5',
      question: 'What is working memory and how does it differ from short-term and long-term memory?',
      options: [
        'Working memory is identical to short-term memory and serves no distinct purpose',
        'Working memory is task-specific memory that\'s more persistent than conversation context but not necessarily permanent, serving as the agent\'s active project workspace',
        'Working memory only stores computational results and mathematical calculations',
        'Working memory is controlled entirely by the user and cannot be accessed by the agent'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "The working memory layer sits between short-term and long-term memory... This is task-specific memory that\'s more persistent than conversation context but not necessarily permanent. When an agent is working on a complex multi-day project with you, it needs memory that lasts beyond a single chat session but might not be relevant forever. Think of this as the agent\'s active project workspace... This memory persists across sessions related to the specific project but doesn\'t clutter the general long-term memory with hyper-specific details that won\'t matter once the project is complete."'
    },
    {
      id: 'q6',
      question: 'According to the document, what is the ultimate goal of memory management in AI agents?',
      options: [
        'To minimize computational costs and storage requirements for memory systems',
        'To create agents that genuinely feel like they know you and get smarter over time, becoming indispensable partners rather than mere tools',
        'To ensure perfect recall of every single detail from all previous interactions',
        'To enable agents to share memories and learnings across different users and contexts'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The ultimate goal of memory management is creating agents that genuinely feel like they know you and get smarter over time. When you can return to an agent after a week away and it immediately picks up where you left off, references your preferences without being asked, and builds on previous conversations rather than starting from scratch—that\'s when memory architecture has succeeded. It\'s the difference between a tool you use and a partner you work with... Get memory right, and you\'ve built the foundation for agents that become indispensable parts of how people work and think."'
    }
  ],

  'generated-content/1-agent-architecture-design/1.5-Orchestrate-multi-agent.txt': [
    {
      id: 'q1',
      question: 'According to the document, what are the two main approaches to multi-agent orchestration, and how do they differ?',
      options: [
        'Sequential and parallel execution based on timing requirements',
        'Centralized orchestration with a conductor agent managing everything, and distributed orchestration where agents coordinate among themselves',
        'Synchronous and asynchronous communication patterns for message handling',
        'Hierarchical and flat organizational structures for agent relationships'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "There are two main approaches... The first is centralized orchestration, where you have a conductor agent or orchestration layer that acts like a project manager... The alternative is distributed orchestration, where there\'s no single boss. Instead, agents coordinate among themselves through direct communication, negotiation, and shared protocols."'
    },
    {
      id: 'q2',
      question: 'What are the different workflow patterns described for multi-agent task execution?',
      options: [
        'Linear, circular, and branching patterns based on data flow',
        'Sequential, parallel, conditional, and iterative execution patterns based on task dependencies and logic',
        'Push, pull, and hybrid patterns based on how agents receive work',
        'Master-slave, peer-to-peer, and client-server patterns based on control relationships'
      ],
      correctAnswer: 1,
      explanation: 'The document describes four workflow patterns: "sequential execution where Agent A completes its task, passes results to Agent B... Parallel execution runs multiple agents simultaneously when tasks are independent... Conditional workflows add decision points where the orchestrator chooses different paths based on results... Iterative workflows involve cycles where agents repeat tasks until some condition is met."'
    },
    {
      id: 'q3',
      question: 'What is the purpose of modeling workflows as DAGs (Directed Acyclic Graphs) in multi-agent orchestration?',
      options: [
        'To encrypt communication between agents and ensure data security',
        'To provide a formal way to model dependencies, determine parallel execution opportunities, identify critical paths, and detect deadlock cycles',
        'To compress workflow data and reduce storage requirements for orchestration systems',
        'To automatically generate user interfaces for monitoring agent activities'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that DAGs "provides a formal way to model complex orchestration. Each task is a node, and edges between nodes represent dependencies... By modeling your workflow as a DAG, you can programmatically determine which tasks can run in parallel, identify the critical path that determines minimum completion time, and detect dependency cycles that would create deadlock."'
    },
    {
      id: 'q4',
      question: 'According to the document, what makes error handling and recovery in multi-agent workflows particularly complex?',
      options: [
        'Multi-agent systems use different programming languages that are incompatible',
        'Failures cascade and propagate, requiring compensating transactions, retry logic, and circuit breakers to handle interconnected failures',
        'Agents operate in different time zones causing synchronization issues',
        'Multi-agent systems require more computational resources than single-agent systems'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "Error handling and recovery in multi-agent workflows is exponentially more complex than single-agent systems because failures cascade and propagate." It describes solutions including "compensating transactions—the ability to undo work that\'s already been done," "retry logic with backoff," and "circuit breakers that detect when an agent is persistently failing and route work around it."'
    },
    {
      id: 'q5',
      question: 'What is dynamic task allocation and how does it improve multi-agent orchestration?',
      options: [
        'A method for encrypting task assignments to prevent unauthorized access',
        'A system that assigns work based on real-time conditions like agent availability, performance, and capabilities rather than predetermined assignments',
        'A technique for automatically generating new tasks based on user behavior patterns',
        'A process for converting task descriptions from natural language to code'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "Dynamic task allocation is where orchestration gets really sophisticated. Instead of predetermining exactly which agent handles which task, the system assigns work based on real-time conditions. Maybe you have multiple agents capable of web research, but one is currently busy while another is idle—dynamic allocation routes the new search task to the available agent."'
    },
    {
      id: 'q6',
      question: 'What does adaptive orchestration represent, and how does it differ from traditional workflow management?',
      options: [
        'A system that only handles simple, predefined tasks without any complexity',
        'The cutting edge where workflows modify themselves based on results and context, learning from past executions to optimize future orchestrations',
        'A method for manually configuring every aspect of agent behavior in advance',
        'A technique for reducing the number of agents needed in multi-agent systems'
      ],
      correctAnswer: 1,
      explanation: 'The document describes adaptive orchestration as "the cutting edge where workflows modify themselves based on results and context. Instead of following a rigid predetermined plan, the orchestrator might observe that research agents are returning low-quality results and dynamically add more research steps... Machine learning can be applied here—the orchestration system learns from past workflow executions which sequences of agents produce the best outcomes for different types of tasks, and optimizes future orchestrations accordingly."'
    }
  ],

  '1-agent-architecture-design/12-applying-logic-trees.txt': [
    {
      id: 'q1',
      question: 'According to the document, what is the primary benefit of using logic trees for agent reasoning?',
      options: [
        'They reduce computational costs by limiting the number of reasoning steps',
        'They make reasoning explicit and traceable, allowing you to see exactly which factors were considered and which decision path was followed',
        'They automatically generate the correct answer without human oversight',
        'They eliminate the need for multiple LLM calls in complex reasoning tasks'
      ],
      correctAnswer: 1,
      explanation: 'The document states that "The power of logic trees is that they make reasoning explicit and traceable. Instead of the agent producing a mysterious recommendation through opaque pattern matching, you can see exactly which factors it considered, how it evaluated each one, and which decision path it followed. This is crucial for debugging—when an agent makes a wrong recommendation, you can trace through the logic tree and identify exactly where the reasoning went off track."'
    },
    {
      id: 'q2',
      question: 'What distinguishes prompt chains from single-prompt approaches in multi-step reasoning?',
      options: [
        'Prompt chains use multiple different AI models while single prompts use only one',
        'Prompt chains break complex reasoning into focused, sequential steps where each call builds on previous outputs, allowing for verification at each step',
        'Prompt chains are faster and more efficient than single-prompt approaches',
        'Prompt chains only work with structured data while single prompts handle unstructured input'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "Instead of trying to cram an entire complex reasoning task into one massive prompt, you break it into a series of focused prompts where each one handles a specific aspect of the problem... The elegance of prompt chains is that each step is focused and verifiable. Instead of asking the agent to do everything at once—which often leads to superficial analysis or missing important steps—you\'re forcing it to tackle one aspect thoroughly before moving to the next."'
    },
    {
      id: 'q3',
      question: 'What role does stateful orchestration play in multi-step reasoning systems?',
      options: [
        'It speeds up processing by caching previous results for reuse',
        'It manages all the information gathered, decisions made, and context established as the agent works through problems, serving as working memory',
        'It automatically corrects errors in agent reasoning without human intervention',
        'It translates between different programming languages used by various agents'
      ],
      correctAnswer: 1,
      explanation: 'The document defines stateful orchestration as managing "all the information that\'s been gathered, decisions that have been made, and context that\'s been established as the agent works through the problem. Without state management, each step is isolated... With proper state management, every step builds on accumulated knowledge, creating coherent reasoning that actually goes somewhere rather than wandering in circles."'
    },
    {
      id: 'q4',
      question: 'According to the document, what is the purpose of pruning strategies in logic trees?',
      options: [
        'To remove incorrect information from the knowledge base',
        'To make complex reasoning computationally feasible by eliminating branches that don\'t need full exploration',
        'To ensure all possible reasoning paths are explored thoroughly',
        'To convert unstructured reasoning into structured decision trees'
      ],
      correctAnswer: 1,
      explanation: 'The document explains that "Logic trees also enable pruning strategies that make complex reasoning computationally feasible. Not every branch needs to be explored fully. If the agent determines early on that a company has unsustainable debt levels, it might prune away entire branches of analysis about long-term growth prospects—there\'s no point in detailed valuation work if the company might not survive its debt obligations."'
    },
    {
      id: 'q5',
      question: 'What are reasoning checkpoints and why are they important in multi-step reasoning?',
      options: [
        'Automatic save points that prevent data loss during system failures',
        'Points where the orchestrator pauses to evaluate whether reasoning is on track and decides whether to continue, backtrack, or terminate',
        'Locations where human operators must manually approve each reasoning step',
        'Technical benchmarks that measure the performance speed of reasoning algorithms'
      ],
      correctAnswer: 1,
      explanation: 'The document describes checkpoints as "points where the orchestrator pauses to evaluate whether reasoning is on track and decides whether to continue, backtrack, or terminate. After completing a major reasoning branch... a checkpoint might evaluate whether the accumulated evidence is sufficient and coherent. If financial metrics are internally contradictory or if critical information is missing, the checkpoint triggers corrective action... Checkpoints prevent agents from barreling ahead with reasoning built on flawed foundations."'
    },
    {
      id: 'q6',
      question: 'What is the ultimate goal of applying logic trees, prompt chains, and stateful orchestration in AI agents?',
      options: [
        'To reduce the cost and complexity of deploying AI systems in production',
        'To build agents that can genuinely think through complex problems systematically with transparent, verifiable reasoning rather than just pattern-matching',
        'To ensure all AI agents produce identical results for the same input queries',
        'To eliminate the need for human oversight in AI decision-making processes'
      ],
      correctAnswer: 1,
      explanation: 'The document concludes that "The ultimate goal of applying logic trees, prompt chains, and stateful orchestration is building agents that can genuinely think through complex problems systematically rather than just pattern-matching to superficially similar training examples. When you ask such an agent a hard question, it doesn\'t immediately guess an answer—it breaks the problem down, gathers relevant information, analyzes different aspects, considers alternatives, synthesizes findings, and reaches evidence-based conclusions. The reasoning is transparent, verifiable, and can be refined as you identify weaknesses."'
    }
  ]
};

function boldKeyTerms(text: string): string {
  let result = text;
  
  // Sort by length (longest first) to avoid partial matches
  const sortedTerms = [...KEY_TERMS].sort((a, b) => b.length - a.length);
  
  for (const term of sortedTerms) {
    // Create regex that matches whole words, case-insensitive
    const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
    
    // Check if already wrapped in strong tags
    const alreadyBolded = new RegExp(`<strong>${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</strong>`, 'gi');
    
    if (!alreadyBolded.test(result)) {
      result = result.replace(regex, '<strong>$1</strong>');
    }
  }
  
  return result;
}

function formatContent(content: string): FormattedContent {
  const lines = content.split('\n').map(line => line.trim());
  
  if (lines.length === 0 || lines.every(line => line.length === 0)) {
    return { title: '', sections: [] };
  }

  // First line is typically the title
  const title = lines[0];
  const sections: Array<{ type: 'heading' | 'paragraph'; content: string; level?: number }> = [];
  let skipRemaining = false;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines
    if (line.length === 0) {
      continue;
    }
    
    // Check if this is the REVIEW QUESTIONS section - skip it and everything after
    if (line.toUpperCase().includes('REVIEW QUESTIONS')) {
      skipRemaining = true;
      break;
    }
    
    // If we've hit REVIEW QUESTIONS, skip everything
    if (skipRemaining) {
      continue;
    }
    
    // Check if line is a heading (all caps, or ends with colon, or short line with specific patterns)
    const isAllCaps = line === line.toUpperCase() && line.length < 100 && /^[A-Z\s:]+$/.test(line);
    const endsWithColon = line.endsWith(':') && line.length < 80 && !line.includes('.');
    const isShortHeading = line.length < 60 && !line.includes('.') && !line.match(/^[a-z]/);
    
    if (isAllCaps || endsWithColon || isShortHeading) {
      // Determine heading level
      let level = 1;
      if (isAllCaps) level = 1;
      else if (endsWithColon) level = 2;
      else level = 3;
      
      sections.push({
        type: 'heading',
        content: line.replace(/:$/, ''),
        level
      });
    } else {
      // Treat each non-empty line as a separate paragraph
      // This works well for files where each line is a complete paragraph
      sections.push({
        type: 'paragraph',
        content: boldKeyTerms(line)
      });
    }
  }

  return { title, sections };
}

export default function ContentViewer({ filePath, onFileSelect }: ContentViewerProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRead, setIsRead] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState<ProgressStats | null>(null);
  const [structure, setStructure] = useState<SummaryItem[]>([]);
  const [navigation, setNavigation] = useState<{ prev: string | null; next: string | null }>({ prev: null, next: null });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [readStatusUpdate, setReadStatusUpdate] = useState(0);

  // Format display name helper (moved up for use in getCategoryFiles)
  const formatDisplayName = useCallback((name: string): string => {
    let display = name.replace(/\.txt$/, '');
    display = display.replace(/^\d+-/, '');
    const words = display.split('-');
    const formatted = words.map(word => {
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'nvidia') return 'NVIDIA';
      if (word.toLowerCase() === 'nemo') return 'NeMo';
      if (word.toLowerCase() === 'nim') return 'NIM';
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formatted.join(' ');
  }, []);

  // Get files for a specific category
  const getCategoryFiles = useCallback((categoryName: string, items: SummaryItem[]): Array<{ path: string; name: string; isRead: boolean }> => {
    const files: Array<{ path: string; name: string; isRead: boolean }> = [];
    
    const findCategory = (items: SummaryItem[], targetCategory: string): SummaryItem[] | null => {
      for (const item of items) {
        if (item.type === 'folder') {
          const categoryName = item.name.replace(/^\d+-/, '').replace(/-/g, ' ');
          const formattedName = categoryName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          if (formattedName === targetCategory && item.children) {
            return item.children;
          }
          if (item.children) {
            const found = findCategory(item.children, targetCategory);
            if (found) return found;
          }
        }
      }
      return null;
    };

    const categoryItems = findCategory(items, categoryName);
    if (categoryItems) {
      categoryItems.forEach((item) => {
        if (item.type === 'file') {
          const isRead = typeof window !== 'undefined' && localStorage.getItem(`read:${item.path}`) === 'true';
          files.push({
            path: item.path,
            name: formatDisplayName(item.name),
            isRead,
          });
        }
      });
    }
    
    return files.sort((a, b) => {
      // Put review.txt first
      if (a.path.toLowerCase().includes('review.txt')) return -1;
      if (b.path.toLowerCase().includes('review.txt')) return 1;
      return a.path.localeCompare(b.path);
    });
  }, [formatDisplayName, readStatusUpdate]);

  // Calculate progress stats
  const calculateProgress = useCallback((structure: SummaryItem[]): ProgressStats => {
    if (typeof window === 'undefined') {
      return { total: 0, read: 0, percentage: 0, byCategory: [] };
    }

    let totalFiles = 0;
    let readFiles = 0;
    const categoryStats: Map<string, { total: number; read: number }> = new Map();

    const countFiles = (items: SummaryItem[], categoryName?: string) => {
      items.forEach((item) => {
        if (item.type === 'file') {
          totalFiles++;
          const isRead = localStorage.getItem(`read:${item.path}`) === 'true';
          if (isRead) readFiles++;

          if (categoryName) {
            const stats = categoryStats.get(categoryName) || { total: 0, read: 0 };
            stats.total++;
            if (isRead) stats.read++;
            categoryStats.set(categoryName, stats);
          }
        } else if (item.type === 'folder' && item.children) {
          const categoryName = item.name.replace(/^\d+-/, '').replace(/-/g, ' ');
          countFiles(item.children, categoryName);
        }
      });
    };

    countFiles(structure);

    const byCategory = Array.from(categoryStats.entries()).map(([name, stats]) => ({
      name: name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      total: stats.total,
      read: stats.read,
      percentage: stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0,
    }));

    return {
      total: totalFiles,
      read: readFiles,
      percentage: totalFiles > 0 ? Math.round((readFiles / totalFiles) * 100) : 0,
      byCategory: byCategory.sort((a, b) => a.name.localeCompare(b.name)),
    };
  }, []);

  // Load structure for navigation
  useEffect(() => {
    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data: SummaryItem[]) => {
        setStructure(data);
        // Mark as ready after structure loads
        setTimeout(() => {
          setIsReady(true);
          setIsInitialLoad(false);
        }, 100);
      })
      .catch((err) => {
        console.error('Failed to load structure:', err);
        setIsReady(true);
        setIsInitialLoad(false);
      });
  }, []);

  // Find previous and next files
  const findNavigation = useCallback((items: SummaryItem[], currentPath: string): { prev: string | null; next: string | null } => {
    const allFiles: string[] = [];
    
    const collectFiles = (items: SummaryItem[]) => {
      items.forEach((item) => {
        if (item.type === 'file') {
          allFiles.push(item.path);
        } else if (item.type === 'folder' && item.children) {
          collectFiles(item.children);
        }
      });
    };
    
    collectFiles(items);
    
    // Sort files to match sidebar order (folders first, then files, review.txt at top)
    allFiles.sort((a, b) => {
      const aParts = a.split('/');
      const bParts = b.split('/');
      const aName = aParts[aParts.length - 1];
      const bName = bParts[bParts.length - 1];
      
      // Put review.txt first
      if (aName.toLowerCase() === 'review.txt') return -1;
      if (bName.toLowerCase() === 'review.txt') return 1;
      
      return a.localeCompare(b);
    });
    
    const currentIndex = allFiles.findIndex(path => path === currentPath);
    if (currentIndex === -1) {
      return { prev: null, next: null };
    }
    
    return {
      prev: currentIndex > 0 ? allFiles[currentIndex - 1] : null,
      next: currentIndex < allFiles.length - 1 ? allFiles[currentIndex + 1] : null,
    };
  }, []);

  // Update navigation when filePath changes
  useEffect(() => {
    if (filePath && structure.length > 0) {
      const nav = findNavigation(structure, filePath);
      setNavigation(nav);
    } else {
      setNavigation({ prev: null, next: null });
    }
  }, [filePath, structure, findNavigation]);

  // Load and update progress stats
  const updateProgress = useCallback(() => {
    if (filePath) return; // Only show progress when no file is selected

    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data: SummaryItem[]) => {
        setProgress(calculateProgress(data));
      })
      .catch((err) => {
        console.error('Failed to load progress:', err);
      });
  }, [filePath, calculateProgress]);

  // Load progress on initial mount (only when no file selected and ready)
  useEffect(() => {
    if (!filePath && isReady) {
      updateProgress();
    }
  }, [filePath, isReady, updateProgress]);

  // Load progress stats on mount
  useEffect(() => {
    updateProgress();
  }, [updateProgress]);

  // Update progress when read status changes
  useEffect(() => {
    if (filePath || !isReady) return;

    const handleUpdate = () => {
      updateProgress();
      setReadStatusUpdate(prev => prev + 1);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('readStatusChanged', handleUpdate);
      window.addEventListener('storage', handleUpdate);
      return () => {
        window.removeEventListener('readStatusChanged', handleUpdate);
        window.removeEventListener('storage', handleUpdate);
      };
    }
  }, [filePath, isReady, updateProgress]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!expandedCategory) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.progressCategory}`)) {
        setExpandedCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCategory]);

  // Load read status from localStorage
  useEffect(() => {
    if (!filePath) {
      setIsRead(false);
      return;
    }
    
    const readStatus = localStorage.getItem(`read:${filePath}`);
    setIsRead(readStatus === 'true');
  }, [filePath]);

  // Handle checkbox change
  const handleReadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!filePath) return;
    
    const checked = e.target.checked;
    setIsRead(checked);
    localStorage.setItem(`read:${filePath}`, checked.toString());
    
    // Dispatch custom event to notify Sidebar
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('readStatusChanged'));
    }
    
    // Show celebration animation when marked as read
    if (checked) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
      }, 2000);
    }
  };

  useEffect(() => {
    // Mark initial load as complete after first render
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }

    if (!filePath) {
      setContent('');
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    fetch(`/api/summaries/${encodeURIComponent(filePath)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load file');
        }
        return res.json();
      })
      .then((data) => {
        setContent(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load file:', err);
        setError('Failed to load file content');
        setLoading(false);
      });
  }, [filePath, isInitialLoad]);

  if (!filePath && isReady) {
    return (
      <main className={styles.viewer}>
        <div className={styles.empty}>
          <div className={styles.emptyContent}>
            <div className={styles.emptyIcon}>📚</div>
            <h1 className={styles.emptyTitle}>NVIDIA Agentic AI Study Guide</h1>
            <p className={styles.emptyDescription}>
              Welcome to your comprehensive study guide for NVIDIA Agentic AI certification. 
              Explore articles, summaries, and key concepts organized by topic.
            </p>

            {progress && progress.total > 0 && (
              <div className={styles.progressSection}>
                <div className={styles.progressHeader}>
                  <h2 className={styles.progressTitle}>Your Progress</h2>
                  <div className={styles.progressOverall}>
                    <div className={styles.progressMain}>
                      <div className={styles.progressNumberLarge}>{progress.percentage}%</div>
                      <div className={styles.progressText}>
                        <span className={styles.progressRead}>{progress.read}</span>
                        <span className={styles.progressOf}> of </span>
                        <span className={styles.progressTotal}>{progress.total}</span>
                        <span className={styles.progressLabel}> articles completed</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressBarFill}
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {progress.byCategory.length > 0 && (
                  <div className={styles.progressCategories}>
                    <h3 className={styles.progressCategoriesTitle}>By Category</h3>
                    <div className={styles.progressCategoriesList}>
                      {progress.byCategory.map((category) => {
                        const isExpanded = expandedCategory === category.name;
                        const categoryFiles = isExpanded ? getCategoryFiles(category.name, structure) : [];
                        
                        return (
                          <div key={category.name} className={styles.progressCategory}>
                            <div className={styles.progressCategoryHeader}>
                              <div className={styles.progressCategoryInfo}>
                                <span className={styles.progressCategoryName}>{category.name}</span>
                                <span className={styles.progressCategoryPercent}>
                                  {category.read}/{category.total}
                                </span>
                              </div>
                              <button
                                className={styles.progressCategoryToggle}
                                onClick={() => setExpandedCategory(isExpanded ? null : category.name)}
                                aria-label={isExpanded ? 'Collapse' : 'Expand'}
                              >
                                {isExpanded ? '▼' : '▶'}
                              </button>
                            </div>
                            <div className={styles.progressCategoryBar}>
                              <div 
                                className={styles.progressCategoryBarFill}
                                style={{ width: `${category.percentage}%` }}
                              />
                            </div>
                            {isExpanded && categoryFiles.length > 0 && (
                              <div className={styles.progressCategoryDropdown}>
                                {categoryFiles.map((file) => (
                                  <button
                                    key={file.path}
                                    className={`${styles.progressCategoryFile} ${file.isRead ? styles.progressCategoryFileRead : ''}`}
                                    onClick={() => onFileSelect?.(file.path)}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={file.isRead}
                                      readOnly
                                      className={styles.progressCategoryCheckbox}
                                    />
                                    <span className={styles.progressCategoryFileName}>{file.name}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className={styles.emptyFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📖</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Structured Learning</h3>
                  <p className={styles.featureText}>Articles organized by topic with clear navigation</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎯</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Key Concepts</h3>
                  <p className={styles.featureText}>Important terms automatically highlighted for quick reference</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Progress Tracking</h3>
                  <p className={styles.featureText}>Mark articles as read to track your learning progress</p>
                </div>
              </div>
            </div>
            <div className={styles.emptyCta}>
              <p className={styles.emptyCtaText}>Select an article from the sidebar to begin</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show loading state during initial load or when loading content
  if (!isReady || (loading && filePath)) {
    return (
      <main className={styles.viewer}>
        <div className={styles.loading}>Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.viewer}>
        <div className={styles.error}>{error}</div>
      </main>
    );
  }

  const { title, sections } = formatContent(content);
  const fileName = filePath ? filePath.split('/').pop()?.replace('.txt', '') || '' : '';
  const isReview = fileName.toLowerCase() === 'review';
  // Check if this file has a quiz
  const hasQuiz = filePath && QUIZ_DATA[filePath];
  const quizQuestions = hasQuiz ? QUIZ_DATA[filePath] : null;

  // Build breadcrumbs
  const breadcrumbs = filePath ? filePath.split('/').map((part, index, array) => {
    const path = array.slice(0, index + 1).join('/');
    const isLast = index === array.length - 1;
    const displayName = formatDisplayName(part);
    return { name: displayName, path, isLast };
  }) : [];

  return (
    <main className={styles.viewer}>
      {showCelebration && (
        <div className={styles.celebration}>
          <div className={styles.celebrationContent}>
            <span className={styles.celebrationIcon}>🎉</span>
            <span className={styles.celebrationText}>Great job! Article marked as read</span>
          </div>
        </div>
      )}
      <div className={`${styles.header} ${isReview ? styles.reviewHeader : ''}`}>
        {breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <button
              className={styles.breadcrumbLink}
              onClick={() => onFileSelect?.(undefined as any)}
            >
              Home
            </button>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.path} className={styles.breadcrumbItem}>
                <span className={styles.breadcrumbSeparator}>›</span>
                {crumb.isLast ? (
                  <span className={styles.breadcrumbCurrent}>{crumb.name}</span>
                ) : (
                  <span className={styles.breadcrumbText}>{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className={styles.headerTop}>
          <h1 className={styles.title}>{title || fileName}</h1>
          <label className={styles.readCheckbox}>
            <input
              type="checkbox"
              checked={isRead}
              onChange={handleReadChange}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxLabel}>Mark as read</span>
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <article className={styles.article}>
          {sections.map((section, index) => {
            if (section.type === 'heading') {
              const HeadingTag = section.level === 1 ? 'h2' : section.level === 2 ? 'h3' : 'h4';
              const headingClass = section.level === 1 
                ? styles.heading1 
                : section.level === 2 
                ? styles.heading2 
                : styles.heading3;
              return (
                <div key={index}>
                  <HeadingTag className={headingClass}>
                    {section.content}
                  </HeadingTag>
                </div>
              );
            } else {
              return (
                <p 
                  key={index} 
                  className={styles.paragraph}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            }
          })}
          
          {/* Quiz - appears after all content if available */}
          {hasQuiz && quizQuestions && (
            <div className={styles.quizSection}>
              <Quiz questions={quizQuestions} articleTitle={title || fileName} />
            </div>
          )}
        </article>
      </div>
    </main>
  );
}



