import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
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
    explanation: 'The document describes the Planning and Reasoning Layer as the "heart of the system" where "NeMo foundation models analyze user inputs to generate structured, multi-step plans instead of simple single-turn outputs. Leveraging techniques like chain-of-thought prompting, task decomposition, and advanced reasoning, this layer enables the agent to dynamically build actionable workflows and truly "think" through complex tasks."'
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
];

