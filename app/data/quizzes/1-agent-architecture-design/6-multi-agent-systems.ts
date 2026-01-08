import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
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
];

