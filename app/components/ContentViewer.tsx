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

// Import quiz questions from separate files
import { questions as agenticAIFactoryQuestions } from '@/app/data/quizzes/1-agent-architecture-design/1-agentic-AI-factory';
import { questions as buildingAutonomousAIQuestions } from '@/app/data/quizzes/1-agent-architecture-design/2-building-autonomous-AI';
import { questions as buildingBlocksCustomerServiceQuestions } from '@/app/data/quizzes/1-agent-architecture-design/3-building-blocks-customer-service';
import { questions as agenticAIAutonomousAIAgentsQuestions } from '@/app/data/quizzes/1-agent-architecture-design/4-agentic-AI-autonomous-AI-agents';
import { questions as catchMeIfYouCanQuestions } from '@/app/data/quizzes/1-agent-architecture-design/5-catch-me-if-you-can';
import { questions as multiAgentSystemsQuestions } from '@/app/data/quizzes/1-agent-architecture-design/6-multi-agent-systems';
import { questions as designUserInterfacesQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.1-Design-user-interfaces';
import { questions as implementReasoningReActQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.2-Implement-Reasoning-ReAct';
import { questions as configAgentProtocolQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.3-Config-Agent-agent-protocol';
import { questions as manageMemoryQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.4-Manage-memory';
import { questions as orchestrateMultiAgentQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.5-Orchestrate-multi-agent';
import { questions as applyingLogicTreesQuestions } from '@/app/data/quizzes/1-agent-architecture-design/12-applying-logic-trees';
import { questions as designingUserInterfacesSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/7-designing-user-interfaces';
import { questions as implementingReasoningReactSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/8-implementing-reasoning-react';
import { questions as configuringAgentCommunicationSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/9-configuring-agent-communication';
import { questions as orchestratingMultiAgentWorkflowsSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/11-orchestrating-multi-agent-workflows';
import { questions as implementingKnowledgeGraphsQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/13-implementing-knowledge-graphs';
import { questions as ensuringAdaptabilityAndScalabilityQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/14-ensuring-adaptability-and-scalability';
import { questions as optimizationNVDATritonQuestions } from '@/app/data/quizzes/2-agent-development/1-optimization-NVDA-Triton';
import { questions as nvdaAgentIntelligenceToolkitQuestions } from '@/app/data/quizzes/2-agent-development/2-NVDA-agent-intelligence-toolkit';
import { questions as introLLMPTuningQuestions } from '@/app/data/quizzes/2-agent-development/3-intro-LLM-p-tuning';
import { questions as buildingMultiModalAIRAGQuestions } from '@/app/data/quizzes/2-agent-development/4-building-multi-modal-AI-RAG';
import { questions as designConsiderationsAgenticQuestions } from '@/app/data/quizzes/2-agent-development/5-design-considerations-Agentic';
import { questions as transientFaultHandlingQuestions } from '@/app/data/quizzes/2-agent-development/6-transient-fault-handling';
import { questions as circuitBreakerPatternQuestions } from '@/app/data/quizzes/2-agent-development/7-circuit-breaker-pattern';
import { questions as retryPatternQuestions } from '@/app/data/quizzes/2-agent-development/8-retry-pattern';
import { questions as evaluateDecisionStrategiesQuestions } from '@/app/data/quizzes/generated-content/2-agent-development/2.6-Evaluate-decision-strategies';
import { questions as agentIntelligenceToolkitFAQQuestions } from '@/app/data/quizzes/3-evaluation-tuning/4-agent-intelligence-toolkit-FAQ';
import { questions as launchingAgentIntelligenceToolkitQuestions } from '@/app/data/quizzes/3-evaluation-tuning/5-launching-agent-intelligence-toolkit';

// Quiz questions organized by reading files
const QUIZ_DATA: QuizSet = {
  '1-agent-architecture-design/1-agentic-AI-factory.txt': agenticAIFactoryQuestions,
  '1-agent-architecture-design/2-building-autonomous-AI.txt': buildingAutonomousAIQuestions,
  '1-agent-architecture-design/3-building-blocks-customer-service.txt': buildingBlocksCustomerServiceQuestions,
  '1-agent-architecture-design/4-agentic-AI-autonomous-AI-agents.txt': agenticAIAutonomousAIAgentsQuestions,
  '1-agent-architecture-design/5-catch-me-if-you-can.txt': catchMeIfYouCanQuestions,
  '1-agent-architecture-design/6-multi-agent-systems.txt': multiAgentSystemsQuestions,
  '1-agent-architecture-design/12-applying-logic-trees.txt': applyingLogicTreesQuestions,
  'generated-content/1-agent-architecture-design/1.1-Design-user-interfaces.txt': designUserInterfacesQuestions,
  'generated-content/1-agent-architecture-design/1.2-Implement-Reasoning-ReAct.txt': implementReasoningReActQuestions,
  'generated-content/1-agent-architecture-design/1.3-Config-Agent-agent-protocol.txt': configAgentProtocolQuestions,
  'generated-content/1-agent-architecture-design/1.4-Manage-memory.txt': manageMemoryQuestions,
  'generated-content/1-agent-architecture-design/1.5-Orchestrate-multi-agent.txt': orchestrateMultiAgentQuestions,
  'summaries/1-agent-architecture-design/7-designing-user-interfaces.txt': designingUserInterfacesSummaryQuestions,
  'summaries/1-agent-architecture-design/8-implementing-reasoning-react.txt': implementingReasoningReactSummaryQuestions,
  'summaries/1-agent-architecture-design/9-configuring-agent-communication.txt': configuringAgentCommunicationSummaryQuestions,
  'summaries/1-agent-architecture-design/11-orchestrating-multi-agent-workflows.txt': orchestratingMultiAgentWorkflowsSummaryQuestions,
  'summaries/1-agent-architecture-design/13-implementing-knowledge-graphs.txt': implementingKnowledgeGraphsQuestions,
  'summaries/1-agent-architecture-design/14-ensuring-adaptability-and-scalability.txt': ensuringAdaptabilityAndScalabilityQuestions,
  '2-agent-development/1-optimization-NVDA-Triton.txt': optimizationNVDATritonQuestions,
  '2-agent-development/2-NVDA-agent-intelligence-toolkit.txt': nvdaAgentIntelligenceToolkitQuestions,
  '2-agent-development/3-intro-LLM-p-tuning.txt': introLLMPTuningQuestions,
  '2-agent-development/4-building-multi-modal-AI-RAG.txt': buildingMultiModalAIRAGQuestions,
  '2-agent-development/5-design-considerations-Agentic.txt': designConsiderationsAgenticQuestions,
  '2-agent-development/6-transient-fault-handling.txt': transientFaultHandlingQuestions,
  '2-agent-development/7-circuit-breaker-pattern.txt': circuitBreakerPatternQuestions,
  '2-agent-development/8-retry-pattern.txt': retryPatternQuestions,
  'generated-content/2-agent-development/2.6-Evaluate-decision-strategies.txt': evaluateDecisionStrategiesQuestions,
  '3-evaluation-tuning/4-agent-intelligence-toolkit-FAQ.txt': agentIntelligenceToolkitFAQQuestions,
  '3-evaluation-tuning/5-launching-agent-intelligence-toolkit.txt': launchingAgentIntelligenceToolkitQuestions,
  
  '3-evaluation-tuning/6-NVDA-NEMO-agent.txt': [
    {
      id: 'q1',
      question: 'What was the previous name of NVIDIA NeMo Agent Toolkit before its recent rebranding?',
      options: [
        'Both Agent Intelligence (AIQ) toolkit and AgentIQ were previous names for this library',
        'NVIDIA Agent Intelligence Toolkit or AIQ toolkit, which was the intermediate naming convention',
        'NVIDIA AgentIQ, which later evolved into Agent Intelligence toolkit before the final rename',
        'NVIDIA Agent Development Kit or ADK, which was used during the early beta releases'
      ],
      correctAnswer: 0,
      explanation: 'The library was previously known as both Agent Intelligence (AIQ) toolkit and AgentIQ before being renamed to NeMo Agent Toolkit. The rename better reflects the toolkit\'s purpose and aligns with the NVIDIA NeMo family of products, while the core technologies and API remain fully compatible with previous releases.'
    },
    {
      id: 'q2',
      question: 'What is the primary architectural philosophy of NeMo Agent Toolkit regarding existing frameworks?',
      options: [
        'It works side-by-side with existing frameworks like LangChain without requiring replatforming efforts',
        'It requires complete migration to NVIDIA-specific frameworks and abandonment of existing implementations',
        'It selectively replaces underperforming frameworks while maintaining compatibility with efficient ones',
        'It creates abstraction layers that isolate applications from underlying framework implementation details'
      ],
      correctAnswer: 0,
      explanation: 'NeMo Agent Toolkit is framework agnostic and works side-by-side with existing agentic frameworks such as LangChain, LlamaIndex, CrewAI, and Microsoft Semantic Kernel. This allows you to use your current technology stack without replatforming, complementing whatever framework or memory tool you\'re already using.'
    },
    {
      id: 'q3',
      question: 'Which new feature allows automatic optimization of agent parameters and prompts for performance?',
      options: [
        'Automatic Hyperparameter Tuning that maximizes performance, minimizes cost, and increases accuracy automatically',
        'Dynamic Parameter Optimization that adjusts settings in real-time based on observed performance metrics',
        'Intelligent Configuration Management that learns optimal settings from successful workflow executions',
        'Adaptive Prompt Engineering that continuously refines prompts based on user feedback patterns'
      ],
      correctAnswer: 0,
      explanation: 'Automatic Hyperparameter Tuning is a new feature that automatically tunes the parameters and prompts of agents, tools, and workflows. This optimization aims to maximize performance, minimize cost, and increase accuracy without manual intervention.'
    },
    {
      id: 'q4',
      question: 'What Python versions are supported for installing and using NeMo Agent Toolkit?',
      options: [
        'Python versions 3.11, 3.12, and 3.13 which are the currently supported versions',
        'Python versions 3.8, 3.9, and 3.10 which represent the most stable releases',
        'Python versions 3.9 through 3.12 covering the broadest compatibility range possible',
        'Python version 3.10 exclusively to ensure maximum compatibility with all dependencies'
      ],
      correctAnswer: 0,
      explanation: 'NeMo Agent Toolkit requires Python 3.11, 3.12, or 3.13 to be installed on your system. These are the officially supported Python versions for the toolkit\'s current release.'
    },
    {
      id: 'q5',
      question: 'How does NeMo Agent Toolkit\'s approach to profiler integration differ from mandatory requirements?',
      options: [
        'Users can integrate at any level they choose, from individual tools to complete workflows',
        'All tools and agents must be decorated comprehensively before any profiling capabilities become available',
        'The profiler automatically instruments all code without requiring any explicit user decoration actions',
        'Only workflow-level integration is supported, requiring full instrumentation for profiling to function'
      ],
      correctAnswer: 0,
      explanation: 'While the toolkit encourages wrapping (decorating) every tool and agent for maximum profiler benefit, you have freedom to integrate to whatever level you want. You can start small where you\'ll see the most value and expand from there.'
    },
    {
      id: 'q6',
      question: 'What capability does Model Context Protocol (MCP) support provide in NeMo Agent Toolkit?',
      options: [
        'MCP allows the toolkit to function as both client and server for tool sharing',
        'MCP enables encrypted communication between distributed agents across multiple data centers and regions',
        'MCP provides standardized data serialization formats for improved interoperability across platforms',
        'MCP implements authentication protocols specifically designed for enterprise agent deployments'
      ],
      correctAnswer: 0,
      explanation: 'NeMo Agent Toolkit has full MCP support, allowing it to function as an MCP client to connect to and use tools from remote MCP servers, and as an MCP server to publish tools via MCP. The toolkit now also supports MCP authorization for the streamable HTTP protocol.'
    },
    {
      id: 'q7',
      question: 'What new organizational feature allows packaging multiple related functions together in the toolkit?',
      options: [
        'Function Groups that package related functions together sharing configuration, context, and resources',
        'Function Collections that bundle similar operations with shared execution contexts and resource pools',
        'Function Modules that organize operations hierarchically with inheritance and dependency management',
        'Function Bundles that aggregate operations with common performance characteristics and scaling behavior'
      ],
      correctAnswer: 0,
      explanation: 'Function Groups is a new feature that allows packaging multiple related functions together to share configuration, context, and resources. This organizational capability helps manage related functionality more effectively within your workflows.'
    },
    {
      id: 'q8',
      question: 'Which observability platforms are specifically mentioned as having dedicated integrations?',
      options: [
        'Phoenix, Weave, and Langfuse plus compatibility with OpenTelemetry-based observability platforms',
        'Datadog, New Relic, and Prometheus with native integration support for comprehensive monitoring',
        'Grafana, Splunk, and Elastic Stack with custom adapters for agent-specific telemetry collection',
        'CloudWatch, Azure Monitor, and Google Cloud Operations with cloud-native integration capabilities'
      ],
      correctAnswer: 0,
      explanation: 'NeMo Agent Toolkit provides dedicated integrations for Phoenix, Weave, and Langfuse, plus compatibility with any OpenTelemetry-based observability platform. These integrations allow you to monitor and debug workflows while tracking performance and gaining insights into agent behaviors.'
    },
    {
      id: 'q9',
      question: 'What command is used to run a workflow using the nat CLI tool?',
      options: [
        'nat run --config_file workflow.yml --input "your question" to execute the specified workflow',
        'nat execute --config_file workflow.yml --input "your question" to run configured workflows',
        'nat start --config_file workflow.yml --input "your question" to initialize workflow execution',
        'nat launch --config_file workflow.yml --input "your question" to begin processing queries'
      ],
      correctAnswer: 0,
      explanation: 'The correct command is nat run --config_file workflow.yml --input "your question". This runs the workflow defined in the configuration file with the provided input and outputs results to the console.'
    },
    {
      id: 'q10',
      question: 'Which framework support was recently added to NeMo Agent Toolkit according to the new features?',
      options: [
        'Google\'s Agent Development Kit (ADK) framework for users of Google\'s agent tooling',
        'Microsoft AutoGen framework for building conversational agents with multiple personas and roles',
        'OpenAI\'s Assistants API framework for direct integration with GPT-based agent capabilities',
        'Anthropic\'s Claude framework for leveraging Claude-specific features and optimizations'
      ],
      correctAnswer: 0,
      explanation: 'Google ADK Support is a new feature that extends NeMo Agent Toolkit compatibility to users of Google\'s Agent Development Kit (ADK) framework. This expands the range of frameworks that can work with the toolkit.'
    },
    {
      id: 'q11',
      question: 'What is the purpose of the reusability principle in NeMo Agent Toolkit\'s design?',
      options: [
        'To allow building agents and tools once and reusing them across different scenarios',
        'To reduce licensing costs by enabling shared components across multiple enterprise deployments',
        'To enable automatic code generation from high-level specifications without manual implementation',
        'To facilitate sharing of trained models between different organizations using standard formats'
      ],
      correctAnswer: 0,
      explanation: 'The reusability principle means every agent, tool, and workflow exists as a function call that works together in complex applications. The composability between these components allows you to build once and reuse in different scenarios.'
    },
    {
      id: 'q12',
      question: 'What environment variable must be set to run examples that use NVIDIA NIMs?',
      options: [
        'NVIDIA_API_KEY with your API key obtained by creating an account at build.nvidia.com',
        'NVIDIA_MODEL_KEY with your personal access token obtained from the developer portal',
        'NIM_ACCESS_TOKEN with your authentication credentials from the NVIDIA cloud services',
        'NVIDIA_AUTH_KEY with your enterprise license key for commercial NIM deployments'
      ],
      correctAnswer: 0,
      explanation: 'You must set the NVIDIA_API_KEY environment variable to allow examples to use NVIDIA NIMs. An API key can be obtained by visiting build.nvidia.com and creating an account.'
    },
    {
      id: 'q13',
      question: 'How can users install NeMo Agent Toolkit with LangChain framework support specifically?',
      options: [
        'pip install "nvidia-nat[langchain]" using bracket notation to include the LangChain plugin',
        'pip install nvidia-nat-langchain as a separate package with framework-specific dependencies',
        'pip install nvidia-nat --with-langchain using command-line flags for optional dependencies',
        'pip install nvidia-nat && pip install langchain-plugin to add framework support separately'
      ],
      correctAnswer: 0,
      explanation: 'To install NeMo Agent Toolkit with LangChain support, use pip install "nvidia-nat[langchain]". Optional dependencies are grouped by framework and can be installed with the core package using bracket notation.'
    },
    {
      id: 'q14',
      question: 'What Amazon service integration was recently added to NeMo Agent Toolkit?',
      options: [
        'Amazon Bedrock AgentCore runtime for building Strands Agents and secure deployment',
        'Amazon SageMaker integration for deploying agents on managed ML infrastructure with auto-scaling',
        'Amazon Lambda functions for serverless agent execution with event-driven architectures',
        'Amazon ECS integration for containerized agent deployments with orchestration capabilities'
      ],
      correctAnswer: 0,
      explanation: 'NeMo Agent Toolkit now supports building agents using the Strands Agents framework and deploying them securely on Amazon Bedrock AgentCore runtime. This integration enables secure enterprise deployment on Amazon\'s infrastructure.'
    },
    {
      id: 'q15',
      question: 'Where can users run simple workflows and examples without local setup according to the documentation?',
      options: [
        'In Google Colab notebooks with no setup required, accessible via provided links',
        'On NVIDIA\'s cloud platform with pre-configured environments accessible through the developer portal',
        'Through GitHub Codespaces with automatically configured development containers',
        'On Jupyter Hub instances hosted by NVIDIA specifically for agent development'
      ],
      correctAnswer: 0,
      explanation: 'The documentation mentions it\'s possible to run simple workflows and examples in Google Colab with no setup. Users can click provided links to open introduction notebooks directly in Colab.'
    }
  ],
  
  '3-evaluation-tuning/7-agentic-AI-next-big-thing.txt': [
    {
      id: 'q1',
      question: 'What distinguishes agentic AI from traditional AI systems in terms of operational autonomy?',
      options: [
        'Agentic AI can make autonomous decisions toward goals with minimal oversight, planning and executing steps independently',
        'Agentic AI requires constant human supervision and prompting for each individual decision and action',
        'Traditional AI systems have greater autonomy while agentic AI follows stricter rule-based protocols',
        'Agentic AI exclusively processes predefined inputs without any capability for independent decision-making'
      ],
      correctAnswer: 0,
      explanation: 'Agentic AI can make autonomous decisions based on both past performance and current assessment of what\'s needed to accomplish tasks, operating with minimal human oversight. Unlike traditional AI locked into input/output models, agentic AI can take complex steps toward goals, checking in with humans only when required.'
    },
    {
      id: 'q2',
      question: 'Using the manager versus technician analogy, how does agentic AI differ from specialized AI agents?',
      options: [
        'Agentic AI acts like a manager deploying various techniques and making decisions, while agents are like technicians doing set tasks',
        'Specialized AI agents manage multiple systems while agentic AI performs single focused tasks like technicians',
        'Both operate identically with no meaningful distinction between their operational capabilities and decision-making authority',
        'Agentic AI requires more training data than specialized agents which can function with minimal supervision'
      ],
      correctAnswer: 0,
      explanation: 'Specialized AI agents are trained to do set tasks based on external inputs, like skilled technicians assigned to jobs. Agentic AI can deploy various AI techniques while making autonomous decisions, like a manager deciding which technicians are necessary to complete a project.'
    },
    {
      id: 'q3',
      question: 'What represents the "third wave" of AI development according to the article?',
      options: [
        'The ability to bring disparate elements together under autonomous choice and decision-making capabilities',
        'The introduction of recommendation engines and auto-fill text that analyze large datasets for correlations',
        'The development of algorithms enabling AI to generate creative content including text, images, and music',
        'The integration of quantum computing with traditional neural networks for exponential processing improvements'
      ],
      correctAnswer: 0,
      explanation: 'The third wave of AI focuses on bringing disparate elements and abilities together under the umbrella of choice. Agentic AI analyzes paths to goals and makes decisions on the best way to complete tasks autonomously.'
    },
    {
      id: 'q4',
      question: 'How do agentic AI systems differ from individual AI agents in terms of scope and capability?',
      options: [
        'Agentic AI systems weave together individual AI agents and tools into cohesive wholes for larger objectives',
        'Individual agents are more powerful than agentic systems which simply coordinate basic operations between components',
        'Both terms describe identical concepts with no practical distinction in their architecture or implementation',
        'AI agents handle complex strategic decisions while agentic systems perform narrowly defined tactical operations'
      ],
      correctAnswer: 0,
      explanation: 'Agentic AI systems go bigger by weaving together individual AI agents and other appropriate systems or tools into a cohesive whole. For example, an agentic system can use data from individual agents to help multiple departments adapt offerings.'
    },
    {
      id: 'q5',
      question: 'In the fraud detection example, how does agentic AI improve upon traditional AI approaches?',
      options: [
        'Agentic AI can gather additional contextual information from external systems like weather data for better decisions',
        'Traditional AI provides more context by analyzing broader patterns while agentic AI focuses narrowly',
        'Traditional AI makes autonomous decisions while agentic AI strictly follows predefined detection rules',
        'Agentic AI processes transactions faster but with lower accuracy than traditional rule-based systems'
      ],
      correctAnswer: 0,
      explanation: 'Agentic AI can communicate with other systems to gather further details, such as requesting weather information that might explain unusual purchasing patterns. This additional context enables better-informed decisions compared to traditional AI\'s predefined task execution.'
    },
    {
      id: 'q6',
      question: 'What is the key difference between generative AI and agentic AI in terms of workflow?',
      options: [
        'Generative AI focuses on content creation from prompts while agentic AI focuses on autonomous decision-making toward goals',
        'Generative AI operates autonomously without prompts while agentic AI requires constant human input and supervision',
        'Both technologies function identically with no meaningful distinction in their operational characteristics or purposes',
        'Generative AI makes strategic decisions while agentic AI exclusively handles content generation and creative tasks'
      ],
      correctAnswer: 0,
      explanation: 'Generative AI focuses on content generation and still requires prompts (data in/data out workflow). Agentic AI focuses on decision-making and actions, autonomously refining outputs and communicating with multiple sources to achieve goals.'
    },
    {
      id: 'q7',
      question: 'Using the real-world analogy, how does agentic AI compare to generative AI and individual AI agents?',
      options: [
        'GenAI is a toolkit for DIY, AI agents are individual contractors, and agentic AI is a general contractor coordinating specialists',
        'GenAI is like hiring a general contractor, AI agents are plumbers, and agentic AI is a basic toolkit',
        'All three function as identical toolkits with no differentiation in capability or coordination requirements',
        'GenAI coordinates all activities, AI agents provide tools, and agentic AI performs manual implementation tasks'
      ],
      correctAnswer: 0,
      explanation: 'GenAI is like a toolkit to DIY fix a leak, an AI agent is like bringing in a plumber to fix and explore related issues, and agentic AI is like a general contractor who can direct specialists and coordinate across multiple domains.'
    },
    {
      id: 'q8',
      question: 'What healthcare application demonstrates agentic AI\'s autonomous decision-making capabilities?',
      options: [
        'Processing patient data from multiple sources to identify emerging patterns and autonomously gather additional information',
        'Following strict protocols to input patient information into electronic health record systems without deviation',
        'Generating medical images from text descriptions provided by healthcare professionals during diagnostic procedures',
        'Translating medical documents between languages while maintaining exact terminology without contextual interpretation'
      ],
      correctAnswer: 0,
      explanation: 'Agentic AI can quickly process all incoming patient data from wearables, blood results, and vitals to identify emerging patterns. The agent has autonomy to grab additional data as needed to identify issues and produce reports for physicians.'
    },
    {
      id: 'q9',
      question: 'How does agentic AI improve supply chain management beyond traditional optimization?',
      options: [
        'By interfacing with multiple systems to consider weather, traffic, and political factors for route optimization',
        'By strictly following predetermined logistics routes without considering external variables or contextual factors',
        'By generating synthetic data to simulate supply chain scenarios without accessing real-time information',
        'By replacing human decision-makers entirely and operating without any oversight or intervention mechanisms'
      ],
      correctAnswer: 0,
      explanation: 'In transportation management, AI agents can interface with other systems to consider route optimization based on weather, traffic, political stability, and national holidays. This autonomous data gathering and analysis enables agent-generated adjustments for optimal delivery routes.'
    },
    {
      id: 'q10',
      question: 'What key benefit distinguishes agentic AI\'s "always-on operations" from traditional AI systems?',
      options: [
        'Agentic AI works autonomously toward goals without needing input after completing tasks, enabling continuous operations',
        'Traditional AI can work continuously without breaks while agentic AI requires regular maintenance downtime',
        'Both systems require identical levels of human intervention and supervision throughout their operational lifecycle',
        'Agentic AI consumes less power than traditional systems allowing for extended continuous operation periods'
      ],
      correctAnswer: 0,
      explanation: 'Agentic AI goes beyond nonagentic AI\'s need for input upon finishing tasks and instead works toward goals autonomously. This decision-making autonomy enables always-on operations for data processing, research, customer responses, and other functions.'
    },
    {
      id: 'q11',
      question: 'What challenge does "accuracy" present for newly deployed agentic AI systems?',
      options: [
        'Bad data can lead to undesirable outcomes, requiring monitoring like a new employee until consistently correct',
        'Agentic systems always produce perfect results but are extremely slow in processing decisions',
        'Accuracy is never a concern because agentic AI inherently self-corrects without any human oversight',
        'Traditional AI systems are always more accurate than agentic systems regardless of training data quality'
      ],
      correctAnswer: 0,
      explanation: 'Agentic systems generally improve on human-level accuracy, but bad data can lead to undesirable outcomes. Like new employees, businesses should monitor newly deployed systems until results are consistently correct, starting with low-risk tasks.'
    },
    {
      id: 'q12',
      question: 'Why is transparency particularly important for agentic AI systems compared to traditional AI?',
      options: [
        'Agents should explain decisions and conclusions, with logic and evaluation methods made accessible for verification',
        'Traditional AI requires no explanation while agentic AI must document every calculation for compliance',
        'Transparency is irrelevant because agentic AI systems operate in completely isolated environments',
        'Agentic AI decisions are always correct and therefore require no explanation or justification mechanisms'
      ],
      correctAnswer: 0,
      explanation: 'Agents should be developed with means to explain decisions and conclusions. Key elements like the agent\'s logic and evaluation methods should be accessible so they can be confirmed as well-founded or corrected if needed.'
    },
    {
      id: 'q13',
      question: 'What is the recommended first step when implementing an agentic AI project?',
      options: [
        'Define clear objectives to focus team efforts and inform what prebuilt system to start with',
        'Immediately deploy the most advanced agentic system available without preliminary planning or assessment',
        'Purchase expensive hardware infrastructure before determining what the system will actually accomplish',
        'Hire additional staff members specifically dedicated to manually supervising every AI decision made'
      ],
      correctAnswer: 0,
      explanation: 'Until the desired objective is defined, teams can\'t focus on building a system based on available resources. Objectives can also inform what prebuilt system to start with, making this the critical first step.'
    },
    {
      id: 'q14',
      question: 'Why should initial tasks for agentic AI systems be "low risk and easily fixable"?',
      options: [
        'Starting with low-risk tasks allows monitoring and trust-building, similar to onboarding new employees',
        'Complex tasks are impossible for agentic AI systems regardless of their training or capabilities',
        'Agentic AI performs better on simple tasks and deteriorates rapidly when handling complex operations',
        'High-risk tasks require traditional AI systems which are inherently more reliable than agentic approaches'
      ],
      correctAnswer: 0,
      explanation: 'Just like a new employee, trust should be earned for agentic AI systems. Early tasks should be low risk and easily fixable, allowing businesses to monitor systems until results are consistently correct before expanding to higher-stakes applications.'
    },
    {
      id: 'q15',
      question: 'What future development area focuses on addressing AI\'s "greatest challenges" for agentic systems?',
      options: [
        'Energy efficiency to reduce the power consumption footprint of complex agentic AI processes',
        'Integration into enterprise systems with more adaptable and customizable entry points across functions',
        'Improving accuracy through reinforcement learning and better filtering and validation techniques',
        'Achieving proper balance of autonomy, functionality, and control without requiring human oversight'
      ],
      correctAnswer: 0,
      explanation: 'Power consumption is one of AI\'s greatest challenges. Agentic AI, with inherently more complex processes and self-directed research, is projected to use more resources than previous AI use cases, making energy efficiency key to long-term success.'
    }
  ],
  
  '3-evaluation-tuning/8-agentic-AI-challenges.txt': [
    {
      id: 'q1',
      question: 'According to Gartner\'s prediction, what percentage of day-to-day work decisions will be made autonomously by agentic AI by 2028?',
      options: [
        'At least 15% of day-to-day work decisions, up from 0% in 2024 showing rapid adoption',
        'At least 5% of day-to-day work decisions, representing a modest but significant initial adoption phase',
        'At least 25% of day-to-day work decisions, indicating mainstream enterprise integration and deployment',
        'At least 35% of day-to-day work decisions, demonstrating complete transformation of workplace operations'
      ],
      correctAnswer: 0,
      explanation: 'Gartner predicts that by 2028, at least 15% of day-to-day work decisions will be made autonomously by agentic AI, up from 0% in 2024. This represents a significant and rapid adoption of agentic AI technology in enterprise environments.'
    },
    {
      id: 'q2',
      question: 'How does agentic AI differ from generative AI in terms of operational complexity?',
      options: [
        'Agentic AI engages in complex multi-step processes interacting with different systems, unlike generative AI\'s one-step process',
        'Generative AI handles multi-step processes while agentic AI focuses on simple one-step prompt-response interactions',
        'Both technologies operate identically with no meaningful distinction in their process complexity or capabilities',
        'Generative AI requires complex orchestration while agentic AI simply responds to straightforward user prompts'
      ],
      correctAnswer: 0,
      explanation: 'With agentic AI, we\'re not just prompting models and receiving answers in a simple one-step process. The AI engages in complex multi-step processes, often interacting with different systems to achieve desired outcomes.'
    },
    {
      id: 'q3',
      question: 'What role does the "critical thinker" function play in agentic AI systems?',
      options: [
        'It provides feedback on the planner\'s output and different agents\' execution, improving results through insights',
        'It writes the initial code that programmers use to build the foundational agent architecture and infrastructure',
        'It handles all customer-facing interactions while other agents focus exclusively on internal operations',
        'It monitors system performance metrics and automatically scales computational resources based on demand patterns'
      ],
      correctAnswer: 0,
      explanation: 'The critical thinker model offers feedback on the output of the planner and the different agents executing those instructions. The more feedback created, the more insights the model has, and the better the outputs become.'
    },
    {
      id: 'q4',
      question: 'What training challenge does the critical thinker model face before it can function effectively?',
      options: [
        'It requires hundreds or thousands of iterations with specific goals, plans, actions, and results before adequate training',
        'It needs only a few dozen examples to understand complex reasoning patterns and decision-making processes',
        'It must be trained exclusively on synthetic data to avoid bias from real-world examples and scenarios',
        'It can function immediately without training by leveraging pre-trained foundation models from external providers'
      ],
      correctAnswer: 0,
      explanation: 'The critical thinker needs training data closely grounded in reality with information on specific goals, plans, actions, and results. This can require many iterations—running through hundreds or even thousands of plans and results before the model has enough data.'
    },
    {
      id: 'q5',
      question: 'How does the programming paradigm shift with agentic AI compared to traditional software development?',
      options: [
        'With agentic AI, we specify the outcome and let the agent determine how to reach the goal autonomously',
        'Traditional software is unpredictable while agentic AI systems follow exact step-by-step instructions from engineers',
        'Agentic AI follows predetermined scripts while traditional programming allows for autonomous decision-making capabilities',
        'Both traditional programming and agentic AI require identical approaches with no fundamental differences in methodology'
      ],
      correctAnswer: 0,
      explanation: 'With traditional software, engineers write code telling computers exactly what to do step by step. With agentic AI, we lead with the outcome we want to achieve, and the agent determines how to reach the goal with some degree of autonomy.'
    },
    {
      id: 'q6',
      question: 'What similar challenge did early generative AI systems face that agentic AI now confronts?',
      options: [
        'Inconsistent and random outputs requiring fine-tuning, human feedback, and consistent training efforts for reliability',
        'Excessive energy consumption requiring specialized cooling systems and dedicated power infrastructure for operation',
        'Inability to process natural language inputs requiring users to learn specialized query languages and syntax',
        'Limited access to training data forcing developers to rely exclusively on synthetic datasets for model development'
      ],
      correctAnswer: 0,
      explanation: 'Early ChatGPT and LLM-based generative AI systems had consistency issues with outputs. Considerable improvements came from fine-tuning, human feedback loops, and consistent training efforts, which agentic AI will also need.'
    },
    {
      id: 'q7',
      question: 'Why are data privacy and security concerns potentially more serious for agentic AI than generative AI?',
      options: [
        'Software agents with high autonomy accessing many systems create increased risk of exposing private data from more sources',
        'Generative AI uses stronger encryption protocols that agentic AI systems cannot implement due to performance constraints',
        'Agentic AI stores all data permanently while generative AI automatically deletes information after processing requests',
        'Agentic AI requires internet connectivity while generative AI operates entirely offline within secure environments'
      ],
      correctAnswer: 0,
      explanation: 'While generative AI embeds information in models permanently, software agents have access to many different systems with high autonomy. This increased access creates greater risk of exposing private data from multiple sources.'
    },
    {
      id: 'q8',
      question: 'What approach is recommended for companies to address data privacy concerns when implementing agentic AI?',
      options: [
        'Start small with containerized data and anonymize information by stripping personally identifiable details before processing',
        'Immediately deploy across all systems to maximize efficiency and return on investment with minimal preparation',
        'Avoid using any real customer or employee data, relying exclusively on synthetic datasets for all operations',
        'Grant unlimited system access to agents to maximize their effectiveness and autonomous decision-making capabilities'
      ],
      correctAnswer: 0,
      explanation: 'Companies need to start small, containerizing data as much as possible to ensure it\'s not exposed beyond where needed. It\'s critical to anonymize data by obscuring users and stripping personally identifiable information before sending prompts to models.'
    },
    {
      id: 'q9',
      question: 'What distinguishes "Consumer agentic AI" in terms of business control and security implications?',
      options: [
        'Companies have zero control over the AI itself, only over the data and prompts they send to external models',
        'Companies have complete control over both the AI model and all data that flows through the system',
        'Companies control the AI model but have no control over what data users choose to input',
        'Companies have full control over model training but limited control over inference and output generation'
      ],
      correctAnswer: 0,
      explanation: 'Consumer agentic AI typically involves an internal user interface with an external AI model. As a company, we have zero control over the AI itself, only over the data and prompts we send to it.'
    },
    {
      id: 'q10',
      question: 'What risk does "Employee agentic AI" pose even though it\'s built internally for internal use?',
      options: [
        'Exposing highly private information to nonqualified users within the company who shouldn\'t have access to it',
        'External hackers can easily access internal systems due to insufficient external security measures and protocols',
        'Employees will become overly dependent on AI and lose all critical thinking and problem-solving capabilities',
        'Internal models always perform worse than external models, leading to poor decision-making and reduced productivity'
      ],
      correctAnswer: 0,
      explanation: 'While employee agentic AI has less risk than consumer-facing systems, it still poses the risk of exposing highly private information to nonqualified users within the company, even when built for internal use only.'
    },
    {
      id: 'q11',
      question: 'What fundamental data challenge do agentic AI systems face beyond what generative AI encounters?',
      options: [
        'Needing to access relevant, quality data across a wide variety of different platforms and sources simultaneously',
        'Agentic AI only works with structured data while generative AI handles all data types seamlessly',
        'Agentic AI requires manually labeled training data while generative AI uses completely unsupervised learning approaches',
        'Generative AI processes data faster than agentic AI which experiences significant performance bottlenecks'
      ],
      correctAnswer: 0,
      explanation: 'Generative AI models often fail when disconnected from accurate, current data. Agentic AI systems face additional issues because they need to access data across a wide variety of different platforms and sources for their multi-step processes.'
    },
    {
      id: 'q12',
      question: 'How can data streaming platforms (DSP) help address agentic AI\'s data quality challenges?',
      options: [
        'DSPs provide tools like Kafka Connect and Apache Flink to bring in data from disparate sources and communicate with models',
        'DSPs automatically generate synthetic training data to supplement insufficient real-world datasets for model training',
        'DSPs eliminate the need for any data preprocessing or cleaning by automatically correcting all quality issues',
        'DSPs store all historical data permanently, allowing agents to access complete information from any time period'
      ],
      correctAnswer: 0,
      explanation: 'Data streaming platforms provide engineers with tools to enable relevant answers using high-quality data. Developers can use Apache Kafka and Kafka Connect to bring in data from disparate sources, and Apache Flink to communicate with other models.'
    },
    {
      id: 'q13',
      question: 'What infrastructure investments are required for companies to implement agentic AI successfully?',
      options: [
        'Purchasing new hardware and GPUs, creating data infrastructure with specialized memory management and inference models',
        'Only software licensing fees with no hardware requirements since agentic AI runs exclusively in cloud environments',
        'Minimal investment since agentic AI reuses all existing infrastructure without requiring any new capabilities or resources',
        'Simple API integrations with existing systems requiring no additional computational resources or storage capacity'
      ],
      correctAnswer: 0,
      explanation: 'AI requires companies to purchase new hardware and GPUs, create new data infrastructure with memory management for caching and storage, and build inference models in-house. This represents significant upfront investment.'
    },
    {
      id: 'q14',
      question: 'What talent-related challenge do companies face when adopting agentic AI technology?',
      options: [
        'Hiring new talent with specialized AI skills or training existing workers on AI technologies and methodologies',
        'An oversupply of AI specialists makes hiring difficult due to candidates having too many competing offers',
        'AI specialists refuse to work on agentic AI projects preferring to focus exclusively on generative AI applications',
        'Automated tools eliminate all need for human talent, creating organizational resistance from existing employees'
      ],
      correctAnswer: 0,
      explanation: 'Companies need to hire new talent with specialized AI skills or train existing workers on AI technologies. This talent requirement, combined with infrastructure needs, means return on investment will take time, especially for early adopters.'
    },
    {
      id: 'q15',
      question: 'What evolution in Microsoft Copilot demonstrates the shift toward agentic AI capabilities?',
      options: [
        'Moving from automating certain code processes to acting agentically by writing and testing code autonomously',
        'Transitioning from cloud-based services to exclusively on-premises deployment models for enhanced security measures',
        'Shifting from enterprise focus to consumer applications targeting individual users rather than business customers',
        'Evolving from text-based interactions to exclusively voice-controlled interfaces for improved accessibility'
      ],
      correctAnswer: 0,
      explanation: 'Microsoft Copilot has evolved from simply automating certain code processes to acting in an agentic way to write and test code. This demonstrates how AI technology vendors are moving toward agentic capabilities.'
    }
  ],
  
  '3-evaluation-tuning/9-AI-agents-beginners.txt': [
    {
      id: 'q1',
      question: 'What do traces and spans represent in agent observability tools like Langfuse?',
      options: [
        'Traces represent complete agent tasks from start to finish while spans are individual steps within traces',
        'Traces show individual tool calls while spans represent the complete workflow from beginning to end',
        'Both traces and spans are identical concepts referring to the same level of execution granularity',
        'Traces track user interactions while spans exclusively monitor external API calls and service dependencies'
      ],
      correctAnswer: 0,
      explanation: 'Traces represent complete agent tasks from start to finish (like handling a user query), while spans are individual steps within the trace (like calling a language model or retrieving data). This hierarchical structure enables detailed analysis of agent behavior.'
    },
    {
      id: 'q2',
      question: 'Why is observability considered critical rather than "nice-to-have" in production environments?',
      options: [
        'It enables debugging, cost management, trust/compliance, and continuous improvement loops essential for production reliability',
        'Observability only matters during initial development and becomes less important once agents are deployed',
        'Production environments require less observability than development since agents are already tested and validated',
        'Observability tools automatically fix all agent issues without requiring any human intervention or analysis'
      ],
      correctAnswer: 0,
      explanation: 'Observability is critical for debugging and root-cause analysis, latency and cost management, trust/safety/compliance, and continuous improvement loops. These capabilities are essential for production environments where agents face real-world challenges and requirements.'
    },
    {
      id: 'q3',
      question: 'What metaphor describes the transformation that observability provides for AI agents?',
      options: [
        'From "black box" agents with opaque behavior to "glass box" systems offering vital transparency',
        'From "white box" systems with full transparency to "black box" systems with enhanced security',
        'From "gray box" partially observable systems to "opaque box" fully encrypted implementations',
        'From "transparent box" open systems to "locked box" secure implementations with restricted access'
      ],
      correctAnswer: 0,
      explanation: 'Without observability, AI agents feel like "black boxes" with opaque internal state and reasoning. With observability, agents become "glass boxes," offering transparency vital for building trust and ensuring they operate as intended.'
    },
    {
      id: 'q4',
      question: 'Why is tracking latency particularly important for AI agents in production?',
      options: [
        'Long response times negatively impact user experience, requiring measurement to identify optimization opportunities',
        'Latency has no impact on user experience since users expect AI systems to be slow',
        'Latency tracking is only relevant for debugging and has no relationship to operational costs',
        'Faster agents always produce lower quality results making latency optimization counterproductive'
      ],
      correctAnswer: 0,
      explanation: 'Latency measures how quickly agents respond, and long waiting times negatively impact user experience. Tracing agent runs helps identify slow operations, enabling optimization through faster models or parallel execution strategies.'
    },
    {
      id: 'q5',
      question: 'What insight can cost tracking provide beyond just monitoring expenses?',
      options: [
        'It can identify excessive API calls from bugs, assess if multiple LLM calls justify quality improvements',
        'Cost tracking exclusively monitors spending without providing any actionable insights for system optimization',
        'Cost monitoring only matters for small startups and is irrelevant for established enterprises',
        'Tracking costs reduces agent accuracy by limiting the computational resources available for reasoning'
      ],
      correctAnswer: 0,
      explanation: 'Cost tracking reveals if frequent tool usage or multiple prompts rapidly increase expenses. It helps assess whether multiple LLM calls justify quality improvements, identify bugs causing excessive API loops, and determine if cheaper models could work.'
    },
    {
      id: 'q6',
      question: 'What is the difference between explicit and implicit user feedback for agent evaluation?',
      options: [
        'Explicit feedback includes ratings and comments while implicit feedback comes from behaviors like query rephrasing',
        'Implicit feedback is always more accurate than explicit feedback which can be biased and unreliable',
        'Explicit feedback tracks system performance while implicit feedback exclusively monitors user demographics',
        'Both feedback types provide identical information with no meaningful distinction in evaluation value'
      ],
      correctAnswer: 0,
      explanation: 'Explicit user feedback includes ratings (thumbs up/down, stars) or textual comments. Implicit feedback comes from user behaviors like immediate question rephrasing, repeated queries, or clicking retry buttons, which provide indirect signals about agent performance.'
    },
    {
      id: 'q7',
      question: 'What is OpenTelemetry\'s role in agent observability?',
      options: [
        'It\'s an industry standard providing APIs, SDKs, and tools for generating and exporting telemetry data',
        'OpenTelemetry is a proprietary NVIDIA tool exclusively designed for GPU monitoring in agent systems',
        'OpenTelemetry only works with specific cloud providers and cannot be used in on-premises deployments',
        'It exclusively monitors network performance without any capabilities for application-level tracing or metrics'
      ],
      correctAnswer: 0,
      explanation: 'OpenTelemetry (OTel) has emerged as an industry standard for LLM observability. It provides APIs, SDKs, and tools for generating, collecting, and exporting telemetry data, with instrumentation libraries wrapping existing agent frameworks.'
    },
    {
      id: 'q8',
      question: 'What advantage do manual spans provide beyond automatic instrumentation libraries?',
      options: [
        'They allow enriching spans with custom attributes like user_id, session_id, or business-specific data',
        'Manual spans are always faster and consume fewer resources than automatic instrumentation approaches',
        'Manual instrumentation eliminates the need for any automatic tracing or monitoring capabilities',
        'Automatic instrumentation provides more detailed information making manual spans completely unnecessary'
      ],
      correctAnswer: 0,
      explanation: 'While instrumentation libraries provide good baselines, manual spans enable adding custom application logic and enriching spans with custom attributes (metadata) including business-specific data, intermediate computations, or debugging context like user_id or model_version.'
    },
    {
      id: 'q9',
      question: 'What distinguishes offline evaluation from online evaluation for AI agents?',
      options: [
        'Offline uses test datasets in controlled settings while online evaluates real-world production performance',
        'Offline uses live user queries in production while online uses curated test datasets in controlled settings',
        'Both evaluation approaches are identical with no meaningful differences in methodology or data sources',
        'Offline evaluation is more accurate than online evaluation which always produces unreliable results'
      ],
      correctAnswer: 0,
      explanation: 'Offline evaluation uses curated test datasets with known expected outputs in controlled settings, often during development. Online evaluation monitors live production performance with real user interactions, capturing real-world behavior patterns and edge cases.'
    },
    {
      id: 'q10',
      question: 'What is the key challenge with relying solely on offline evaluation?',
      options: [
        'Test datasets may not be comprehensive or stay relevant to real-world production query patterns',
        'Offline evaluation is too expensive and time-consuming to be practical for most development teams',
        'Offline evaluation always produces more errors than online evaluation making it completely unreliable',
        'Development teams lack the technical expertise required to construct appropriate offline test datasets'
      ],
      correctAnswer: 0,
      explanation: 'The key challenge is ensuring test datasets are comprehensive and stay relevant. Agents might perform well on fixed test sets but encounter very different queries in production, requiring updated test sets with new edge cases reflecting real-world scenarios.'
    },
    {
      id: 'q11',
      question: 'How do online and offline evaluations complement each other in practice?',
      options: [
        'Insights from online monitoring improve offline datasets, while offline testing enables confident deployment for online monitoring',
        'Teams should choose one approach exclusively since combining them creates conflicting and contradictory results',
        'Offline evaluation replaces the need for online monitoring once agents achieve acceptable test performance',
        'Online evaluation eliminates the value of offline testing which becomes obsolete in production environments'
      ],
      correctAnswer: 0,
      explanation: 'The approaches are highly complementary. Online insights (like new failure cases) improve offline test datasets. Agents performing well offline can be confidently deployed and monitored online, creating a continuous improvement loop: evaluate offline → deploy → monitor → refine.'
    },
    {
      id: 'q12',
      question: 'What strategy addresses AI agents running into continuous loops?',
      options: [
        'Ensure clear termination conditions so agents know when to stop, and use larger reasoning models for complex tasks',
        'Increase computational resources and allow agents unlimited time to explore all possible solution paths',
        'Continuous loops are beneficial for agent learning and should be encouraged rather than prevented',
        'Reduce the number of available tools since tool access is the primary cause of all looping behaviors'
      ],
      correctAnswer: 0,
      explanation: 'To prevent continuous loops, ensure clear termination terms and conditions so agents know when to stop. For complex tasks requiring reasoning and planning, use larger models specialized for reasoning tasks to improve decision-making quality.'
    },
    {
      id: 'q13',
      question: 'How can smaller language models (SLMs) help manage costs in agent deployments?',
      options: [
        'SLMs can perform well on certain agentic use-cases like simple tasks, reducing costs while maintaining performance',
        'SLMs always produce identical results to large models while consuming significantly less computational resources',
        'Using SLMs eliminates the need for any evaluation since smaller models are inherently more reliable',
        'SLMs should never be used in production since they consistently underperform on all tasks compared to large models'
      ],
      correctAnswer: 0,
      explanation: 'Small Language Models can perform well on certain agentic use-cases and significantly reduce costs. Consider using SLMs for simpler tasks like intent classification or parameter extraction, while reserving larger models for complex reasoning requiring more capability.'
    },
    {
      id: 'q14',
      question: 'What is the purpose of implementing a router model in multi-model agent architectures?',
      options: [
        'A router directs requests based on complexity to appropriate model sizes, optimizing cost and performance',
        'Routers exclusively handle network traffic without any involvement in model selection or request routing',
        'Router models eliminate the need for evaluation by automatically selecting the perfect model for every scenario',
        'Routing increases costs by adding an extra processing layer without providing any efficiency benefits'
      ],
      correctAnswer: 0,
      explanation: 'Using a router model or serverless function to route requests based on complexity ensures the best fit models are used. Route simple queries to smaller, faster models, and reserve expensive large models for complex reasoning tasks.'
    },
    {
      id: 'q15',
      question: 'What evaluation strategy is demonstrated in the flight booking code example?',
      options: [
        'It demonstrates handling external service failures with backup functions and allowing agents to continue operating',
        'The example shows how to prevent all errors by thoroughly testing tools before any production deployment',
        'The code prevents agents from ever encountering errors by validating all inputs before processing',
        'It shows that agents should immediately stop all operations when any single tool experiences failures'
      ],
      correctAnswer: 0,
      explanation: 'The example shows handling HTTP errors when flight times service is unavailable by having a backup function. Rather than failing completely, the agent can continue operating using available tools, demonstrating production resilience strategies for external service failures.'
    }
  ],
  
  '3-evaluation-tuning/10-navigating-challenges.txt': [
    {
      id: 'q1',
      question: 'According to the 2024 survey, what percentage of organizations need to upgrade their technology stack to deploy AI agents?',
      options: [
        '66% of organizations must upgrade their technology infrastructure while maintaining current organizational structures',
        '86% of organizations need to upgrade existing technology stack and reevaluate their structures and processes',
        '76% of organizations need to upgrade existing infrastructure and completely reevaluate their structures and processes',
        '96% of organizations require comprehensive technology upgrades along with fundamental restructuring of operational workflows'
      ],
      correctAnswer: 1,
      explanation: 'The 2024 survey revealed that 86% of organizations need to upgrade their existing technology stack and reevaluate their structures and processes to deploy AI agents effectively. This demonstrates that agentic AI requires more than just plug-and-play technology solutions.'
    },
    {
      id: 'q2',
      question: 'What is the primary risk of taking a technology-only approach to agentic AI adoption?',
      options: [
        'Technology-only approaches are the most cost-effective method for implementing agentic AI in enterprise environments',
        'Focusing solely on technology while ignoring broader organizational context like strategy and workforce development leads to breakdowns',
        'Technology-focused approaches always produce better results than holistic strategies involving multiple organizational dimensions',
        'Prioritizing technology eliminates the need for change management or employee training in AI implementations'
      ],
      correctAnswer: 1,
      explanation: 'Treating agentic AI as merely a plug-and-play solution often leads to breakdowns. Successful AI transformation requires a holistic approach encompassing strategy, capabilities, ethical standards, and workforce development, not just technology.'
    },
    {
      id: 'q3',
      question: 'What components should organizational readiness assessments evaluate before implementing agentic AI?',
      options: [
        'Only financial budgets and projected return on investment timelines for the implementation project',
        'Technical and data preparedness, leadership alignment, AI literacy, support systems, and governance frameworks',
        'Exclusively technical infrastructure capacity without considering human factors or organizational culture elements',
        'Primarily employee satisfaction scores and existing technology vendor relationships within the organization'
      ],
      correctAnswer: 1,
      explanation: 'Organizational readiness assessments should evaluate technical and data preparedness (data availability and quality), leadership alignment, AI literacy, support systems, and governance frameworks. This comprehensive evaluation identifies gaps needing improvement for successful adoption.'
    },
    {
      id: 'q4',
      question: 'What statistic reveals the challenge leaders face in demonstrating AI value?',
      options: [
        'More than 90% of IT executives implemented AI, yet nearly half aren\'t sure how to demonstrate the value',
        'Approximately 75% of IT executives have implemented AI and all can clearly demonstrate measurable value',
        'Less than 50% of IT executives have attempted any AI implementation due to unclear value propositions',
        'Around 60% of IT executives implemented AI but most can easily quantify returns on investment'
      ],
      correctAnswer: 0,
      explanation: 'Recent data shows more than 90% of IT executives have implemented at least one instance of AI, yet nearly half aren\'t sure how to demonstrate the value. This highlights the critical importance of establishing clear ROI expectations.'
    },
    {
      id: 'q5',
      question: 'Why is strong leadership alignment particularly critical for agentic AI adoption?',
      options: [
        'Leaders only need to approve budgets without understanding capabilities, limitations, or implementation details',
        'Leadership involvement is unnecessary since technical teams can independently handle all adoption decisions',
        'Leaders must understand AI capabilities, limitations, risks, and how it aligns with organizational goals and values',
        'Leaders should delegate all AI decisions to data scientists without providing strategic direction or oversight'
      ],
      correctAnswer: 2,
      explanation: 'For agentic AI to effectively support strategic goals and values, leaders must understand its capabilities, limitations, and potential risks. They need to know how AI makes decisions, expected outcomes, and how to implement it responsibly and ethically.'
    },
    {
      id: 'q6',
      question: 'What percentage of AI-driven breakdowns come from leadership\'s unrealistic ROI timelines?',
      options: [
        'More than half of AI-driven breakdowns in enterprise come from leadership\'s unrealistic timelines for ROI',
        'Approximately 35% of AI-driven enterprise breakdowns result from leadership setting unrealistic ROI expectations',
        'Around 40% of AI implementation failures trace back to unrealistic leadership timelines for returns',
        'Nearly 25% of AI adoption challenges stem from leadership establishing impossible timeline expectations'
      ],
      correctAnswer: 0,
      explanation: 'More than half of AI-driven breakdowns in enterprise come from leadership\'s unrealistic timelines for ROI. This underscores why upskilling leadership in AI governance is critical for successful adoption.'
    },
    {
      id: 'q7',
      question: 'How does AI literacy impact employee acceptance and trust in agentic AI systems?',
      options: [
        'AI literacy has no measurable impact on employee acceptance since trust develops naturally over time',
        'Lower AI literacy actually increases trust because employees ask fewer questions about AI operations',
        'Employees with higher AI literacy are less likely to harbor misconceptions and more likely to accept and trust AI',
        'AI literacy exclusively benefits technical staff without affecting general employee acceptance or adoption rates'
      ],
      correctAnswer: 2,
      explanation: 'Employees with higher AI literacy are less likely to harbor misconceptions and more likely to accept and trust AI. Conversely, low AI literacy can significantly hinder adoption, limiting AI\'s transformative potential within organizations.'
    },
    {
      id: 'q8',
      question: 'What role did driver feedback and AI training play in UPS\'s ORION routing agent success?',
      options: [
        'Driver training delayed implementation but eventually reduced costs by approximately $50 million annually',
        'Driver feedback loops and training on AI systems were major contributors to success and $300 million annual savings',
        'Driver involvement was minimal and had negligible impact on the routing agent\'s performance outcomes',
        'UPS succeeded by implementing the routing agent without any driver input or training programs'
      ],
      correctAnswer: 1,
      explanation: 'UPS\'s ORION routing agent example shows that drivers\' feedback loops and training on AI systems were major contributors to AI success and a $300 million annual cost savings. This demonstrates the value of empowering employees with AI literacy.'
    },
    {
      id: 'q9',
      question: 'What percentage of AI adoption failures trace back to process or people issues rather than technical problems?',
      options: [
        'About 70% of AI adoption failures trace back to process or people issues rather than technical problems',
        'Approximately 50% of AI adoption failures result from process or people challenges instead of technology',
        'Around 60% of AI implementation failures stem from human factors rather than technical shortcomings',
        'Nearly 80% of AI deployment failures are caused by organizational factors instead of technological limitations'
      ],
      correctAnswer: 0,
      explanation: 'Recent data shows that 70% of AI adoption failures trace back to process or people issues rather than technical shortcomings. This emphasizes the critical importance of engaging employees and addressing human factors in AI adoption.'
    },
    {
      id: 'q10',
      question: 'Why is early and continuous employee involvement crucial for agentic AI adoption success?',
      options: [
        'Employee involvement is only necessary during initial planning phases and becomes irrelevant during implementation',
        'Continuous involvement slows adoption processes and should be minimized to accelerate deployment timelines',
        'Employee engagement matters exclusively for user interface design without affecting broader adoption outcomes',
        'Early engagement allows employees to identify risks, enhancing their confidence and understanding of AI\'s benefits'
      ],
      correctAnswer: 3,
      explanation: 'Early and continuous employee involvement from pilot phases to full-scale implementation mitigates both practical and psychological barriers. Engaging employees allows them to identify and address potential risks, enhancing their confidence and understanding of AI\'s benefits.'
    },
    {
      id: 'q11',
      question: 'What approach helps reduce perceived risks and build employee confidence in using AI?',
      options: [
        'Immediately deploying fully autonomous agents without any gradual introduction or training period for staff',
        'Preventing employee interaction with AI systems until they complete extensive certification programs',
        'Providing AI "co-pilot" modes before going fully autonomous, enabling staff to observe and learn from AI behavior',
        'Restricting AI access to senior management while keeping general employees completely isolated from systems'
      ],
      correctAnswer: 2,
      explanation: 'Some firms provide AI "co-pilot" modes before going fully autonomous, enabling staff to observe and learn from AI behavior. Experimenting with autonomous agents and offering feedback on outcomes reduces perceived risks and builds confidence.'
    },
    {
      id: 'q12',
      question: 'According to the late-2024 study, what do tech leaders cite as the top challenge in deploying AI agents?',
      options: [
        'Security concerns are cited by 53% of tech leaders as the top challenge in deploying AI agents',
        'High implementation costs and insufficient budget allocation represent the primary obstacles to deployment',
        'Lack of technical expertise and difficulty recruiting qualified AI talent create the biggest challenges',
        'Integration complexity with legacy systems poses the greatest difficulty for most organizations'
      ],
      correctAnswer: 0,
      explanation: 'A late-2024 study found 53% of tech leaders cite security as the top challenge in deploying AI agents. This underscores the importance of robust governance and addressing security concerns for successful adoption.'
    },
    {
      id: 'q13',
      question: 'What governance approach do many enterprises implement for early agentic AI deployments?',
      options: [
        'Fully autonomous operations without any human oversight to maximize efficiency and deployment speed',
        'Minimal governance frameworks that evolve only after significant adoption and operational experience',
        'AI governance committees and requiring human-in-the-loop approach, especially for early deployments',
        'Delegating all governance decisions to external consultants without internal committee involvement'
      ],
      correctAnswer: 2,
      explanation: 'Many enterprises are setting up AI governance committees and requiring a human-in-the-loop approach, especially for early deployments. This provides appropriate oversight while building trust and ensuring responsible AI implementation.'
    },
    {
      id: 'q14',
      question: 'What human role transitions are necessary as AI agents take on decision-making tasks?',
      options: [
        'Humans must focus exclusively on manual data entry and routine administrative tasks AI cannot handle',
        'Human roles become completely eliminated as AI agents achieve full autonomy in all organizational functions',
        'Humans shift entirely to technical programming roles maintaining and debugging AI agent systems exclusively',
        'Humans transition to more strategic, supervisory, and creative roles requiring critical thinking and problem-solving skills'
      ],
      correctAnswer: 3,
      explanation: 'As AI agents increasingly take on decision-making tasks, humans must transition to more strategic, supervisory, and creative roles, while broadening skills in critical thinking, complex problem-solving, and collaboration with autonomous systems.'
    },
    {
      id: 'q15',
      question: 'What elements can help mitigate employee anxiety about autonomous AI decision-making?',
      options: [
        'Limiting information about AI systems to prevent employees from understanding how decisions are made',
        'Accelerating deployment without addressing concerns to demonstrate AI capabilities through immediate results',
        'Restricting AI access to senior leadership while keeping most employees isolated from systems',
        'Transparent communication, strategic guidance, increased AI literacy, and updated interaction models'
      ],
      correctAnswer: 3,
      explanation: 'Transparent communication, strategic guidance, increased AI literacy, and updated interaction models can mitigate anxieties about perceived loss of control and ethical concerns. These elements help align autonomous decisions with organizational values and build trust.'
    }
  ],
  
  '4-deployment-scaling/1-agentic-AI-factory.txt': [
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
  ],
  
  '4-deployment-scaling/2-TensorRTLLM-Github.txt': [
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
  ],
  
  '4-deployment-scaling/3-measure-improve-AI-workload.txt': [
    {
      id: 'q1',
      question: 'What is the primary purpose of NVIDIA DGX Cloud Benchmarking beyond comparing raw GPU specifications?',
      options: [
        'Exclusively measuring individual GPU floating-point operations without considering infrastructure or software factors',
        'Only comparing hourly cost per GPU across different cloud providers without performance analysis',
        'Primarily validating hardware specifications match manufacturer datasheets without application-level testing',
        'Assessing real-world, end-to-end AI workload performance and total cost of ownership across platforms'
      ],
      correctAnswer: 3,
      explanation: 'DGX Cloud Benchmarking assesses training and inference performance across AI workloads and platforms, accounting for infrastructure software, cloud platforms, and application configurations—not just GPUs. It focuses on real-world, end-to-end performance and total cost of ownership.'
    },
    {
      id: 'q2',
      question: 'What impressive performance improvement was achieved when training Llama 3 70B by scaling GPU count?',
      options: [
        'Approximately 50% reduction in training time with proportional 50% increase in overall costs',
        'About 75% reduction in time to solution requiring 80% additional investment in resources',
        'Nearly 85% faster training completion but with 60% higher total cost of ownership',
        'Up to 97% reduction in time to train 1 trillion tokens for only 2.6% cost increase'
      ],
      correctAnswer: 3,
      explanation: 'When training Llama 3 70B, scaling GPU count achieved up to a 97% reduction in time to train 1 trillion tokens (from 115.4 days to 3.8 days) for a cost increase of only 2.6%, demonstrating exceptional efficiency.'
    },
    {
      id: 'q3',
      question: 'Why does perfect linear scaling rarely occur when increasing GPU counts for AI training?',
      options: [
        'Increased communication overhead at higher GPU counts causes slight deviation from perfect linearity',
        'Hardware limitations in GPU memory bandwidth prevent any scaling beyond eight devices',
        'Software frameworks inherently cannot support more than 64 GPUs in single training job',
        'Cloud providers intentionally throttle performance to maintain consistent pricing across configurations'
      ],
      correctAnswer: 0,
      explanation: 'While well-optimized AI workloads can come very close to perfect linear scaling, the slight deviation at higher GPU counts is typically due to increased communication overhead between GPUs during distributed training operations.'
    },
    {
      id: 'q4',
      question: 'What key advantage does FP8 precision provide compared to BF16 for AI model training?',
      options: [
        'FP8 eliminates all numerical stability concerns making it universally superior to BF16',
        'FP8 provides identical performance to BF16 but requires less storage for checkpoints',
        'Only marginal performance gains insufficient to justify the complexity of implementation',
        'Significantly increased throughput and cost-efficiency due to higher math throughput and lower memory requirements'
      ],
      correctAnswer: 3,
      explanation: 'FP8 precision significantly increases throughput and cost-efficiency compared to BF16 due to higher math or communication throughput and lower memory bandwidth requirements. This can also enable training larger models on fewer GPUs.'
    },
    {
      id: 'q5',
      question: 'What challenge does FP8 precision introduce that requires specialized mitigation techniques?',
      options: [
        'Narrower dynamic range that can cause instability or divergence requiring per-tensor scaling techniques',
        'FP8 requires completely different optimizer algorithms that are incompatible with existing training pipelines',
        'FP8 consumes more GPU memory than BF16 despite offering higher computational throughput',
        'Complete incompatibility with modern GPU architectures limiting adoption to legacy systems'
      ],
      correctAnswer: 0,
      explanation: 'FP8 training introduces challenges such as narrower dynamic range that can cause instability or divergence. Specialized techniques providing per-tensor or sub-block scaling for conversions between BF16 and FP8 are required to maintain numerical stability.'
    },
    {
      id: 'q6',
      question: 'How does Transformer Engine in Hopper and Blackwell architectures help developers use FP8?',
      options: [
        'By completely eliminating the need for any BF16 computations throughout entire training process',
        'Automatically converting all operations to FP8 without requiring any developer intervention or configuration',
        'Exclusively handling inference workloads without providing any benefits during model training phases',
        'Enabling selective FP8 use on per-layer basis, using reduced precision only where it won\'t affect accuracy'
      ],
      correctAnswer: 3,
      explanation: 'Transformer Engine in Hopper and Blackwell architectures helps developers use FP8 selectively on a per-layer basis, using reduced precision only where it will not adversely affect model accuracy and training stability.'
    },
    {
      id: 'q7',
      question: 'What performance improvement did NeMo Framework optimization achieve in 2024?',
      options: [
        'Approximately 10% increase in platform performance through minor efficiency improvements and bug fixes',
        'Nearly 50% performance boost requiring significant changes to existing training workflows and configurations',
        'Roughly 15% improvement limited to specific model architectures without broader applicability',
        'About 25% increase in overall platform performance with proportional cost savings due to hardware-software co-engineering'
      ],
      correctAnswer: 3,
      explanation: 'In 2024, NeMo software optimization resulted in a 25% increase in overall platform performance with proportional cost savings to users. This was achieved through deep hardware and software co-engineering efforts.'
    },
    {
      id: 'q8',
      question: 'Why does framework selection significantly impact training performance even with identical models and hardware?',
      options: [
        'Only licensing costs vary between frameworks without any actual performance differences in training',
        'Framework selection exclusively affects user interface without influencing underlying computation efficiency',
        'Differences are negligible making framework choice irrelevant for performance optimization considerations',
        'Frameworks differ in workload infrastructure fingerprint, communication patterns, and continuous optimization efforts'
      ],
      correctAnswer: 3,
      explanation: 'Framework choice affects performance due to differences in workload infrastructure fingerprint (how it interacts with infrastructure), communication patterns (efficiency of data exchange), and continuous optimization efforts by framework developers.'
    },
    {
      id: 'q9',
      question: 'What advantage does training models in FP8 provide for subsequent inference deployment?',
      options: [
        'FP8-trained models require mandatory quantization before any inference deployment can begin',
        'FP8 training provides no inference benefits requiring full BF16 precision for deployment',
        'Inference performance remains identical regardless of training precision used during development',
        'Models can be deployed directly for FP8 inference reducing inference costs without additional quantization'
      ],
      correctAnswer: 3,
      explanation: 'Training a model in FP8 can additionally reduce inference costs since the model can be deployed directly for FP8 inference without requiring additional quantization steps or post-training modifications.'
    },
    {
      id: 'q10',
      question: 'What is the objective of NVIDIA DGX Cloud Benchmarking Performance Explorer for GPU count optimization?',
      options: [
        'Always recommending maximum available GPU count regardless of workload characteristics or budget constraints',
        'Exclusively minimizing costs without considering training time or throughput requirements for projects',
        'Only analyzing single-GPU performance without any multi-GPU or distributed training considerations',
        'Identifying ideal GPU count that minimizes both total training time and costs for given workloads'
      ],
      correctAnswer: 3,
      explanation: 'The Performance Explorer helps users identify the ideal GPU count that minimizes both total training time and costs. The objective is finding the right number of GPUs that maximizes throughput and minimizes expenses across projects.'
    },
    {
      id: 'q11',
      question: 'What benefit does completing training work sooner provide beyond just faster iteration cycles?',
      options: [
        'Slower time to market delaying when trained models can be deployed to generate organizational value',
        'Training completion speed has no relationship to business value generation or deployment timelines',
        'Only technical benefits without any impact on business outcomes or revenue generation potential',
        'Faster time to market where trained model can be deployed to generate value for organization'
      ],
      correctAnswer: 3,
      explanation: 'Completing training work sooner means faster time to market where the trained model can be deployed to generate value for the organization. This represents a significant business benefit beyond just technical efficiency.'
    },
    {
      id: 'q12',
      question: 'Which organizations are early adopters of DGX Cloud Benchmarking Performance Recipes?',
      options: [
        'Exclusively academic institutions and research laboratories without any commercial cloud provider participation',
        'Only NVIDIA\'s internal teams without external validation or adoption by industry partners',
        'Primarily small startups without involvement from major cloud infrastructure providers or enterprises',
        'Leading cloud providers AWS, Google Cloud, Microsoft Azure, Oracle Cloud, and partners CoreWeave, Crusoe, Nebius'
      ],
      correctAnswer: 3,
      explanation: 'Early adopters include leading cloud providers AWS, Google Cloud, Microsoft Azure, and Oracle Cloud, as well as NVIDIA cloud partners CoreWeave, Crusoe, and Nebius, demonstrating broad industry adoption.'
    },
    {
      id: 'q13',
      question: 'What approach does NVIDIA take to ensure DGX Cloud Benchmarking optimizations remain practical?',
      options: [
        'Exclusively using synthetic benchmarks without considering real-world application scenarios or workloads',
        'Focusing solely on theoretical maximum performance without validation against actual usage patterns',
        'Only testing with NVIDIA\'s internal workloads without external validation or customer input',
        'Characterizing real user workloads through Benchmarking Recipes to ground optimizations in practical scenarios'
      ],
      correctAnswer: 3,
      explanation: 'By leveraging DGX Cloud Benchmarking Recipes, NVIDIA characterizes real user workloads to ensure optimizations are grounded in practical scenarios. This ensures recommendations are relevant to actual deployment situations.'
    },
    {
      id: 'q14',
      question: 'Why does DGX Cloud Benchmarking emphasize continuous performance assessment beyond initial validation?',
      options: [
        'Initial validation provides sufficient data making ongoing assessment redundant and unnecessary overhead',
        'Hardware specifications never change making continuous monitoring wasteful use of engineering resources',
        'Only required for compliance purposes without any technical or performance optimization benefits',
        'Ensuring delivered throughput closely matches theoretical specifications throughout infrastructure lifecycle'
      ],
      correctAnswer: 3,
      explanation: 'Continuous performance assessment, beyond initial infrastructure validation, ensures that delivered throughput closely matches theoretical specifications. This ongoing validation helps identify when performance degrades or optimization opportunities arise.'
    },
    {
      id: 'q15',
      question: 'How does DGX Cloud Benchmarking evolve to remain relevant for AI industry needs?',
      options: [
        'Remaining static after initial release to maintain consistency and comparability across time periods',
        'Exclusively focusing on legacy hardware without adapting to new GPU architectures or frameworks',
        'Only updating pricing information without changing performance testing methodologies or model coverage',
        'Regular updates incorporating new models, emerging hardware platforms, and innovative software optimizations'
      ],
      correctAnswer: 3,
      explanation: 'DGX Cloud Benchmarking is designed to evolve alongside the AI industry with regular updates incorporating new models, emerging hardware platforms, and innovative software optimizations. This ensures users have access to most relevant and up-to-date insights.'
    }
  ],
  
  '4-deployment-scaling/4-Kubernetes-glossary.txt': [
    {
      id: 'q1',
      question: 'What foundational concept did Kubernetes introduce to enable multiple containers to share resources without conflict?',
      options: [
        'Pods grouping multiple containers on host machines with shared services like directories, IP addresses, or storage',
        'Virtual machines providing complete isolation through hardware virtualization without any resource sharing capabilities',
        'Namespaces creating virtual clusters within clusters for logical separation of workloads across teams',
        'Microservices architecture decomposing monolithic applications into independently deployable distributed service components'
      ],
      correctAnswer: 0,
      explanation: 'Kubernetes introduced the "pod" concept that enables multiple containers to run on a host machine and share resources without risk of conflict. A pod can define shared services like directories, IP addresses, or storage and expose them to all containers in the pod.'
    },
    {
      id: 'q2',
      question: 'How do containers differ from virtual machines in terms of virtualization approach and resource efficiency?',
      options: [
        'Containers virtualize hardware like VMs but require significantly more system resources for operation',
        'Virtual machines virtualize operating systems while containers virtualize complete hardware stacks for isolation',
        'Containers virtualize the operating system instead of hardware, making them more lightweight and portable',
        'Both approaches use identical virtualization techniques without any meaningful differences in resource consumption'
      ],
      correctAnswer: 2,
      explanation: 'Containers virtualize the operating system instead of hardware, making them more lightweight than virtual machines. They are more portable, take up less space, use far fewer system resources, and can be spun up in seconds.'
    },
    {
      id: 'q3',
      question: 'What organization serves as the vendor-neutral home for Kubernetes and other cloud-native open source projects?',
      options: [
        'Docker Foundation established to govern container technology standards and prevent proprietary implementations',
        'Open Container Initiative focusing exclusively on container image format specifications and runtime standards',
        'Cloud Native Computing Foundation (CNCF) created as Linux Foundation project to drive cloud-native adoption',
        'Kubernetes Foundation operating independently to manage the orchestration platform without external governance'
      ],
      correctAnswer: 2,
      explanation: 'The Cloud Native Computing Foundation (CNCF) was established as a Linux Foundation project in 2015 to drive adoption of cloud-native technologies. The CNCF serves as the vendor-neutral home for Kubernetes and many fastest-growing open source projects.'
    },
    {
      id: 'q4',
      question: 'What component in Kubernetes manages pods, containers, and images at the node level?',
      options: [
        'Master controller exclusively handling all pod operations across entire cluster without node-level agents',
        'Node agent called kubelet managing pods, containers, and images on individual host machines',
        'Container runtime directly managing all orchestration without any Kubernetes-specific management components',
        'Scheduler responsible for pod placement decisions without involvement in ongoing container management'
      ],
      correctAnswer: 1,
      explanation: 'A node agent called a kubelet manages the pods, containers, and images at the individual node level. Kubernetes controllers then manage clusters of pods to ensure adequate resources are allocated for desired scalability and performance.'
    },
    {
      id: 'q5',
      question: 'What key services does Kubernetes automate to simplify clustered environment management?',
      options: [
        'Exclusively handles storage provisioning without any networking, discovery, or deployment automation capabilities',
        'Only manages container placement without monitoring health, implementing rollouts, or handling sensitive information',
        'Automates service discovery, load balancing, storage mounting, rollouts/rollbacks, and health monitoring',
        'Primarily focuses on security without providing any automation for deployment, scaling, or resource management'
      ],
      correctAnswer: 2,
      explanation: 'Kubernetes automates service discovery and load balancing, automatically mounts storage systems, automates rollouts and rollbacks, monitors container health, restarts failed containers, and enables safe storage of sensitive information like passwords and encryption keys.'
    },
    {
      id: 'q6',
      question: 'Why did containers quickly become popular and create need for orchestration tools like Kubernetes?',
      options: [
        'Containers required less developer training than virtual machines making them immediately accessible to teams',
        'Organizations rapidly scaled to thousands of containers creating need to automate management at scale',
        'Container technology was mandated by cloud providers forcing rapid adoption across enterprise environments',
        'Virtual machines were completely deprecated making containers the only viable deployment option available'
      ],
      correctAnswer: 1,
      explanation: 'Because of their benefits, containers became an immediate hit and quickly popular for cloud deployment. Organizations soon ran thousands of them, creating a need to automate management, which drove Kubernetes adoption and made containers mainstream.'
    },
    {
      id: 'q7',
      question: 'What namespace feature in Kubernetes enables teams to share physical infrastructure without conflicts?',
      options: [
        'Physical partitioning dividing hardware into dedicated segments for each team with complete isolation',
        'Virtual cluster within cluster allowing operations and development teams to share machines and services',
        'Container segregation preventing any communication between different teams\' workloads on shared infrastructure',
        'Hardware allocation requiring separate physical servers for each team to prevent any resource contention'
      ],
      correctAnswer: 1,
      explanation: 'Kubernetes namespaces create virtual clusters within clusters. This enables operations and development teams to share the same set of physical machines and access the same services without creating conflicts.'
    },
    {
      id: 'q8',
      question: 'How does Kubernetes benefit data scientists in creating reproducible machine learning experiments?',
      options: [
        'Kubernetes exclusively handles model training without providing any support for experiment tracking or reproducibility',
        'Data scientists must manually configure all dependencies without any automation or containerization benefits',
        'Containers enable repeatable pipelines with coordinated stages and declarative configurations describe service connections',
        'Kubernetes only supports production deployment without any capabilities for development or experimentation workflows'
      ],
      correctAnswer: 2,
      explanation: 'Containers offer the ability to create repeatable pipelines with multiple coordinated stages that work reproducibly. Declarative configurations in Kubernetes describe connections between services, and microservices architectures enable easier debugging and improved team collaboration.'
    },
    {
      id: 'q9',
      question: 'What functionality does Kubeflow provide for machine learning workflows in Kubernetes environments?',
      options: [
        'Exclusively handles data storage without any support for training pipelines or model deployment',
        'Only manages compute resources without providing any ML-specific workflow or pipeline capabilities',
        'Streamlines setting up and maintaining machine learning workflows and pipelines in Kubernetes',
        'Primarily focuses on model serving without any support for training or development workflows'
      ],
      correctAnswer: 2,
      explanation: 'Kubeflow streamlines the process of setting up and maintaining machine learning workflows and pipelines in Kubernetes. Combined with the orchestrator\'s portability benefits, data scientists can develop on laptops and deploy anywhere.'
    },
    {
      id: 'q10',
      question: 'What service mesh layer makes it easy to create networks of deployed services with automated features?',
      options: [
        'Docker Swarm providing basic orchestration without advanced networking or traffic management capabilities',
        'Kubernetes native networking exclusively handling pod-to-pod communication without service mesh features',
        'CoreDNS only providing DNS resolution without any traffic management or service-to-service authentication',
        'Istio offering configurable service mesh with load balancing, authentication, and monitoring with minimal code changes'
      ],
      correctAnswer: 3,
      explanation: 'Istio is a configurable, open-source service-mesh layer that makes it easy to create networks with automated load balancing, service-to-service authentication, and monitoring with little or no code changes. It provides fine-grained traffic control, routing rules, retries, failovers, and fault injection.'
    },
    {
      id: 'q11',
      question: 'How does NVIDIA device plug-in enable GPU support within Kubernetes environments?',
      options: [
        'GPUs are automatically detected without requiring any plug-ins or special configuration for Kubernetes',
        'NVIDIA plug-ins exclusively handle monitoring without enabling actual GPU allocation to containers',
        'Device plug-ins only support CPU resources without any capabilities for specialized hardware like GPUs',
        'Device plug-ins enable pods access to GPU hardware features and expose them as schedulable resources'
      ],
      correctAnswer: 3,
      explanation: 'Device plug-ins enable pods to access specialized hardware features such as GPUs and expose them as schedulable resources. This makes it easy to configure and use GPU resources for accelerating data science, machine learning, and deep learning workloads.'
    },
    {
      id: 'q12',
      question: 'What key capabilities does Kubernetes on NVIDIA GPUs provide for heterogeneous GPU clusters?',
      options: [
        'Only supports homogeneous GPU clusters without any capabilities for mixed GPU types or configurations',
        'Exclusively handles GPU monitoring without enabling specification of GPU attributes or deployment requirements',
        'Enables GPU plug-in support, specifies GPU attributes like type and memory, and allows visualization of GPU metrics',
        'Provides GPU allocation but without any monitoring, metrics visualization, or attribute specification capabilities'
      ],
      correctAnswer: 2,
      explanation: 'Kubernetes on NVIDIA GPUs enables GPU support using NVIDIA device plug-in, specifies GPU attributes such as GPU type and memory requirements for heterogeneous clusters, and allows visualization and monitoring of GPU metrics with integrated stack of NVIDIA DCGM, Prometheus, and Grafana.'
    },
    {
      id: 'q13',
      question: 'What is NVIDIA Triton\'s role in abstracting hardware within Kubernetes-managed nodes?',
      options: [
        'Triton exclusively handles cluster orchestration while Kubernetes manages individual node hardware abstraction',
        'Triton only provides monitoring capabilities without any model serving or hardware abstraction features',
        'Kubernetes handles all hardware abstraction making Triton unnecessary for GPU-based inference workloads',
        'Open-source inference serving platform deploying AI models on any GPU/CPU, abstracting hardware within nodes'
      ],
      correctAnswer: 3,
      explanation: 'NVIDIA Triton is an open-source inference serving platform that enables deploying AI training models on any GPU or CPU-based interface. Triton handles hardware abstraction within the node, while Kubernetes orchestrates the cluster, enabling effective scale-out.'
    },
    {
      id: 'q14',
      question: 'What breakthrough capability does Multi-Instance GPU (MIG) provide on NVIDIA A100 GPUs?',
      options: [
        'MIG exclusively improves training performance without providing any benefits for inference or deployment',
        'MIG combines multiple physical GPUs into single logical unit for increased memory capacity',
        'Only supports single workload per GPU without any partitioning or instance isolation capabilities',
        'Single A100 GPU can be segmented into seven smaller GPUs enabling finer-grained application scaling'
      ],
      correctAnswer: 3,
      explanation: 'MIG enables a single A100 GPU to be segmented into seven smaller GPUs, similar to CPU core segmentation. This allows users to automatically scale applications with much greater granularity, with a single A100 now supporting up to seven smaller nodes.'
    },
    {
      id: 'q15',
      question: 'How does the CNCF\'s work benefit the Kubernetes ecosystem regarding code base fragmentation?',
      options: [
        'CNCF encourages multiple incompatible forks to promote innovation and competitive development approaches',
        'CNCF exclusively manages licensing without any involvement in technical direction or code governance',
        'Multiple fragmented versions exist despite CNCF efforts making cross-platform compatibility challenging',
        'Vendor-neutral governance credited with preventing Kubernetes code base forks from emerging across implementations'
      ],
      correctAnswer: 3,
      explanation: 'The CNCF\'s work has been credited with helping to prevent forks of the Kubernetes code base from emerging. As a result, every major computing platform and cloud provider now supports the same Kubernetes code base, despite branded versions like Red Hat OpenShift or Amazon EKS.'
    }
  ],
  
  '4-deployment-scaling/5-NVDA-NSight.txt': [
    {
      id: 'q1',
      question: 'What is the primary purpose of NVIDIA Nsight Systems as a performance analysis tool?',
      options: [
        'Exclusively profiling GPU shader code without any system-wide analysis or CPU interaction visualization',
        'Only debugging application crashes without providing any performance profiling or optimization capabilities',
        'Solely managing GPU memory allocation without analyzing workload execution or performance characteristics',
        'System-wide performance analysis visualizing application algorithms to identify optimization opportunities across CPUs and GPUs'
      ],
      correctAnswer: 3,
      explanation: 'Nsight Systems is a system-wide performance analysis tool designed to visualize an application\'s algorithms, identify the largest opportunities to optimize, and tune to scale efficiently across any quantity or size of CPUs and GPUs, from large servers to smallest SoCs.'
    },
    {
      id: 'q2',
      question: 'How does Nsight Systems help developers understand system-wide application performance?',
      options: [
        'Visualizes unbiased, system-wide activity data on unified timeline allowing investigation of correlations, dependencies, and bottlenecks',
        'Provides only text-based reports without any visual timeline or graphical representation of events',
        'Exclusively monitors GPU metrics without showing any CPU activity or cross-component interactions',
        'Generates summary statistics at application completion without detailed chronological event visualization'
      ],
      correctAnswer: 0,
      explanation: 'Nsight Systems visualizes unbiased, system-wide activity data on a unified timeline, allowing developers to investigate correlations, dependencies, activity, bottlenecks, and resource allocation to ensure hardware components work harmoniously.'
    },
    {
      id: 'q3',
      question: 'What range of NVIDIA platforms does Nsight Systems support for application development?',
      options: [
        'Wide range from NVIDIA DGX to RTX workstations, including NVIDIA DRIVE and Jetson platforms',
        'Only high-end datacenter systems like DGX without support for edge or automotive platforms',
        'Exclusively desktop RTX workstations without capabilities for server or embedded device profiling',
        'Solely cloud-based environments without any support for on-premises or edge deployment scenarios'
      ],
      correctAnswer: 0,
      explanation: 'Nsight Systems is the universal tool for developing applications on NVIDIA platforms. It scales across a wide range including NVIDIA DGX, RTX workstations, NVIDIA DRIVE for automotive, and NVIDIA Jetson for edge AI and robotics.'
    },
    {
      id: 'q4',
      question: 'What type of overhead does Nsight Systems maintain while providing comprehensive performance analysis?',
      options: [
        'High overhead requiring dedicated profiling hardware without impacting application execution significantly',
        'Low-overhead performance analysis accurately visualizing events and metrics without significantly affecting execution',
        'Moderate overhead acceptable only for development environments without production profiling capabilities',
        'Zero overhead achieved through hardware-only sampling without any software instrumentation requirements'
      ],
      correctAnswer: 1,
      explanation: 'Nsight Systems offers low-overhead performance analysis that visualizes otherwise hidden layers of events and metrics. With low overhead, data can be visualized accurately and in parallel for ease of understanding.'
    },
    {
      id: 'q5',
      question: 'What detailed GPU information can GPU Metrics Sampling expose in Nsight Systems?',
      options: [
        'Exclusively GPU temperature and power consumption without any computational or memory activity details',
        'Only high-level GPU utilization percentages without detailed throughput or architectural metrics',
        'Solely error rates and crash diagnostics without performance metrics or resource utilization data',
        'SM utilization, Tensor Core activity, instruction throughput, warp occupancy, and PCIe/DRAM activity'
      ],
      correctAnswer: 3,
      explanation: 'GPU Metrics Sampling plots low-level I/O activity such as PCIe throughput, NVLink, and DRAM activity. It also exposes SM utilization, Tensor Core activity, instruction throughput, and warp occupancy for comprehensive GPU performance analysis.'
    },
    {
      id: 'q6',
      question: 'Which CUDA libraries does Nsight Systems support for tracing compute workloads?',
      options: [
        'CUDA API tracing including cuBLAS, cuDNN, and NVIDIA TensorRT libraries for compute tasks',
        'Only custom CUDA kernels without support for any standard library tracing or API analysis',
        'Exclusively basic CUDA runtime without advanced library support like cuBLAS or cuDNN',
        'Solely host-side CUDA code without any device library or GPU kernel tracing capabilities'
      ],
      correctAnswer: 0,
      explanation: 'For compute tasks, Nsight Systems supports investigating the CUDA API and tracing CUDA libraries, including cuBLAS, cuDNN, and NVIDIA TensorRT. This enables comprehensive analysis of GPU-accelerated computing workloads.'
    },
    {
      id: 'q7',
      question: 'What graphics APIs does Nsight Systems support for profiling graphics computing applications?',
      options: [
        'Only proprietary NVIDIA APIs without support for industry-standard graphics programming interfaces',
        'Exclusively OpenGL without any DirectX, Vulkan, or ray-tracing API profiling capabilities',
        'Solely legacy DirectX 9 and OpenGL 2.0 without modern graphics API support',
        'Vulkan, OpenGL, DirectX 11, DirectX 12, DXR, and NVIDIA OptiX APIs'
      ],
      correctAnswer: 3,
      explanation: 'For graphics computing, Nsight Systems supports profiling Vulkan, OpenGL, DirectX 11, DirectX 12, DXR, and NVIDIA OptiX APIs. This comprehensive support covers modern graphics and ray-tracing workloads.'
    },
    {
      id: 'q8',
      question: 'What capability does multi-node profiling in Nsight Systems provide for large-scale deployments?',
      options: [
        'Only supports single-node analysis requiring manual correlation of data across multiple systems',
        'Exclusively profiles CPU clusters without any GPU or DPU performance analysis capabilities',
        'Solely collects data from multiple nodes without providing any automatic analysis or diagnosis',
        'Multi-node profiling automatically diagnoses performance limiters across many nodes simultaneously with network metrics'
      ],
      correctAnswer: 3,
      explanation: 'Nsight Systems supports multi-node profiling to resolve performance limiters at data center and cluster scale. Multi-node analysis automatically diagnoses performance limiters across many nodes simultaneously, including network metrics and internode communication.'
    },
    {
      id: 'q9',
      question: 'How does Nsight Systems support Python application optimization for deep learning workloads?',
      options: [
        'Python applications are not supported requiring developers to rewrite code in C++ for profiling',
        'Only provides basic execution timing without detailed call stack or GPU utilization analysis',
        'Exclusively profiles Python syntax errors without any performance optimization or GPU utilization insights',
        'Backtraces and automatic call stack sampling allow fine-tuning performance for deep learning applications'
      ],
      correctAnswer: 3,
      explanation: 'Nsight Systems helps write Python applications that maximize GPU utilization. Backtraces and automatic call stack sampling allow developers to fine-tune performance for deep learning applications, with integration for Jupyter Lab enabling direct profiling.'
    },
    {
      id: 'q10',
      question: 'What functionality does Jupyter Lab integration provide for Nsight Systems users?',
      options: [
        'Only displays static reports without interactive analysis or detailed GUI access for investigations',
        'Exclusively exports profiling data to external tools without any in-Jupyter visualization or analysis',
        'Solely provides basic timing statistics without comprehensive profiling or performance metric collection',
        'Profile Python and supported languages directly in Jupyter, including detailed analysis with full Nsight Systems GUI'
      ],
      correctAnswer: 3,
      explanation: 'Integration with Jupyter Lab allows profiling Python and other supported languages directly in Jupyter, including detailed analysis with the full Nsight Systems GUI. This enables seamless workflow for data scientists and AI developers.'
    },
    {
      id: 'q11',
      question: 'What frame performance issues does Nsight Systems automatically detect for game developers?',
      options: [
        'Only detects application crashes without identifying frame timing issues or performance inconsistencies',
        'Exclusively monitors average frame rates without detecting individual slow frames or stutter patterns',
        'Solely profiles GPU memory usage without analyzing frame timing, stutters, or frame-to-frame consistency',
        'Automatically detects slow frames and local stutter frames, reporting CPU times and API calls causing stutters'
      ],
      correctAnswer: 3,
      explanation: 'Nsight Systems automatically detects slow frames (highlighting frame times higher than target) and local stutter frames (highlighting frames with higher times than neighbors). It also reports CPU times per frame and API calls likely causing stutters.'
    },
    {
      id: 'q12',
      question: 'What is NVIDIA Nsight Compute\'s primary specialization within the Nsight Developer Tools suite?',
      options: [
        'Interactive kernel profiler for CUDA applications providing detailed performance metrics and API debugging',
        'System-wide multi-GPU profiling focusing on distributed computing workloads across clusters',
        'Graphics debugging exclusively for DirectX and Vulkan without any compute profiling capabilities',
        'Crash dump generation for GPU failures without any live profiling or performance analysis features'
      ],
      correctAnswer: 0,
      explanation: 'Nsight Compute is an interactive kernel profiler for CUDA applications. It provides detailed performance metrics and API debugging via a user interface and command-line tool, with customizable, data-driven user interface and metric collection.'
    },
    {
      id: 'q13',
      question: 'What impressive GPU utilization improvement did Tracxpoint achieve using Nsight Systems?',
      options: [
        'Improved from 50% to 60% GPU utilization with minimal impact on training time',
        'Increased utilization from 70% to 75% with moderate performance gains in model training',
        'Reached 80% GPU utilization cutting training duration approximately in half from baseline',
        'Achieved over 90% GPU utilization reducing training time from 600 minutes to only 90 minutes'
      ],
      correctAnswer: 3,
      explanation: 'Tracxpoint achieved over 90% GPU utilization using Nsight Systems. A deep learning model that previously took 600 minutes to train now takes only 90 minutes, representing a dramatic 6.7x speedup.'
    },
    {
      id: 'q14',
      question: 'What specific challenge did Microsoft Azure HPC+AI team address using Nsight Systems?',
      options: [
        'Only managed hardware procurement without any software optimization or performance analysis activities',
        'Exclusively handled billing and cost allocation without performance profiling or optimization work',
        'Solely monitored system uptime without analyzing workload performance characteristics or optimization opportunities',
        'Performed detailed analysis to optimize GPU-accelerated AI software, identifying top time-consuming functions and cold spots'
      ],
      correctAnswer: 3,
      explanation: 'Microsoft Azure HPC+AI team used Nsight Systems to perform detailed analysis and optimize GPU-accelerated AI software. The tool painted a clear picture of events on CPUs, GPUs, NICs, and OS, allowing them to quickly identify top time-consuming functions and cold spots.'
    },
    {
      id: 'q15',
      question: 'What does NVIDIA Nsight Aftermath SDK specifically provide for game developers?',
      options: [
        'Real-time performance profiling during gameplay without any crash analysis or debugging capabilities',
        'Exclusively optimizes shader compilation without providing any crash investigation or debugging features',
        'Only provides post-mortem frame analysis without any crash dump or exception handling functionality',
        'Library integrating into crash reporter to generate GPU mini-dumps when exceptions or TDRs occur'
      ],
      correctAnswer: 3,
      explanation: 'Nsight Aftermath SDK is a library that integrates into a D3D12 or Vulkan game\'s crash reporter to generate GPU "mini-dumps" when an exception or TDR (Timeout Detection and Recovery) occurs, exposing pipeline information to resolve unexpected crashes.'
    }
  ],
  
  '4-deployment-scaling/6-Kube-Prometheus.txt': [
    {
      id: 'q1',
      question: 'What is the primary purpose of implementing Prometheus and Grafana in GPU-accelerated computing environments?',
      options: [
        'Exclusively managing GPU driver installations and updates across distributed computing infrastructure',
        'Only handling resource allocation decisions without any performance monitoring or metrics collection capabilities',
        'Primarily optimizing GPU workload scheduling without collecting or displaying any telemetry data',
        'Providing comprehensive monitoring, visualization, and analysis of GPU performance metrics and cluster health'
      ],
      correctAnswer: 3,
      explanation: 'Prometheus and Grafana provide a complete monitoring stack for GPU-accelerated environments. Prometheus collects and stores metrics while Grafana visualizes them, enabling teams to monitor GPU performance, identify bottlenecks, and ensure efficient resource utilization across clusters.'
    },
    {
      id: 'q2',
      question: 'How do Prometheus Operator and Helm package manager simplify cluster monitoring deployment?',
      options: [
        'They provide standardized configurations and automated deployment reducing manual setup complexity significantly',
        'They eliminate all configuration requirements by automatically detecting optimal settings without user input',
        'They only support basic CPU monitoring without any GPU or specialized hardware capabilities',
        'They exclusively handle storage management without simplifying deployment or configuration processes'
      ],
      correctAnswer: 0,
      explanation: 'The Prometheus Operator provides standard configurations and dashboards, while Helm enables packaged deployment. Together they automate much of the complex setup, allowing teams to deploy a full cluster monitoring solution efficiently rather than manually configuring each component.'
    },
    {
      id: 'q3',
      question: 'What role does DCGM (Data Center GPU Manager) play in NVIDIA GPU monitoring infrastructure?',
      options: [
        'It serves as the primary interface collecting GPU telemetry and exposing metrics to monitoring systems',
        'DCGM exclusively manages GPU power consumption and thermal throttling without metrics collection',
        'DCGM only handles GPU memory allocation without providing any performance monitoring capabilities',
        'It primarily focuses on driver compatibility testing without real-time telemetry or monitoring features'
      ],
      correctAnswer: 0,
      explanation: 'DCGM collects comprehensive GPU telemetry including utilization, memory usage, temperature, and other performance metrics. It exposes this data to monitoring systems like Prometheus, serving as the bridge between NVIDIA GPUs and observability platforms.'
    },
    {
      id: 'q4',
      question: 'Why is real-time GPU metrics monitoring particularly important for AI and machine learning workloads?',
      options: [
        'ML workloads consume minimal GPU resources making monitoring unnecessary for optimization purposes',
        'Monitoring only matters for debugging crashes without providing any optimization or efficiency insights',
        'AI applications automatically optimize themselves eliminating any need for human monitoring or intervention',
        'GPU utilization directly impacts training time, cost efficiency, and ability to identify performance bottlenecks'
      ],
      correctAnswer: 3,
      explanation: 'GPU utilization directly affects training duration and infrastructure costs in AI workloads. Real-time monitoring helps identify underutilized resources, performance bottlenecks, and optimization opportunities, enabling teams to maximize expensive GPU investments and reduce time-to-solution.'
    },
    {
      id: 'q5',
      question: 'What advantage does visualizing GPU metrics on a timeline provide for performance analysis?',
      options: [
        'Timeline visualization only shows historical data without enabling real-time monitoring or analysis',
        'It enables correlating GPU activity with application events to identify performance patterns and issues',
        'Timelines exclusively display errors without showing utilization, memory usage, or throughput metrics',
        'Visualization provides aesthetics without offering any practical debugging or optimization value'
      ],
      correctAnswer: 1,
      explanation: 'Timeline visualization allows teams to correlate GPU metrics with application behavior, helping identify when and why performance issues occur. This temporal context makes it easier to understand workload patterns, spot anomalies, and diagnose the root causes of inefficiencies.'
    },
    {
      id: 'q6',
      question: 'How does containerized monitoring with Kubernetes benefit GPU-accelerated infrastructure management?',
      options: [
        'Containers eliminate all monitoring overhead making GPU tracking completely free in resource terms',
        'Containerization only supports CPU monitoring without any GPU-specific metric collection capabilities',
        'Monitoring containers require dedicated GPUs reducing available compute resources for applications',
        'Kubernetes orchestration enables scalable, automated monitoring deployment across heterogeneous GPU clusters'
      ],
      correctAnswer: 3,
      explanation: 'Kubernetes orchestration allows monitoring components to be deployed, scaled, and managed automatically across clusters. This is particularly valuable for GPU infrastructure where monitoring needs to work consistently across diverse hardware configurations and deployment scales.'
    },
    {
      id: 'q7',
      question: 'What operational insight does monitoring GPU memory allocation provide for workload optimization?',
      options: [
        'Tracking memory usage helps identify whether workloads are appropriately sized for available GPU resources',
        'Memory metrics only indicate total capacity without revealing utilization patterns or optimization opportunities',
        'GPU memory monitoring exclusively detects hardware failures without providing performance optimization guidance',
        'Memory allocation metrics are irrelevant since applications automatically optimize their memory consumption'
      ],
      correctAnswer: 0,
      explanation: 'Monitoring GPU memory allocation reveals whether workloads efficiently use available resources. Underutilization suggests opportunities to increase batch sizes or run concurrent jobs, while memory pressure indicates need for optimization or larger GPUs.'
    },
    {
      id: 'q8',
      question: 'Why is it important to monitor both GPU utilization and CPU activity simultaneously?',
      options: [
        'CPU and GPU activities are completely independent requiring separate monitoring without any correlation analysis',
        'Modern GPUs operate autonomously making CPU monitoring irrelevant for GPU-accelerated applications',
        'Monitoring both components doubles overhead without providing additional debugging or optimization insights',
        'Simultaneous monitoring reveals data transfer bottlenecks and ensures balanced utilization across system components'
      ],
      correctAnswer: 3,
      explanation: 'Many performance issues arise from CPU-GPU interactions, such as data transfer bottlenecks or CPU preprocessing delays. Monitoring both simultaneously helps identify whether GPUs are starved by slow CPU operations or if the bottleneck lies elsewhere in the pipeline.'
    },
    {
      id: 'q9',
      question: 'What business value does comprehensive GPU monitoring provide to organizations running AI workloads?',
      options: [
        'Monitoring only benefits researchers without providing any value to business operations or financial planning',
        'It enables cost optimization, capacity planning, and ROI measurement for expensive GPU infrastructure investments',
        'Business value is negligible since monitoring focuses exclusively on technical metrics without financial implications',
        'GPU monitoring exclusively prevents hardware failures without contributing to efficiency or cost management'
      ],
      correctAnswer: 1,
      explanation: 'Comprehensive monitoring helps organizations optimize GPU spending by identifying underutilization, plan capacity needs based on usage trends, and measure ROI on infrastructure investments. This visibility is essential for justifying and managing expensive GPU resources.'
    },
    {
      id: 'q10',
      question: 'How does dashboard customization benefit different stakeholders in GPU-accelerated computing environments?',
      options: [
        'Customization serves only aesthetic purposes without providing any practical benefits for different roles',
        'Single standardized dashboard works optimally for all users eliminating any need for customization',
        'Customization exclusively benefits administrators without providing value to developers or business stakeholders',
        'Different roles need different metrics: developers want performance details while executives need utilization summaries'
      ],
      correctAnswer: 3,
      explanation: 'Different stakeholders have different needs: data scientists want detailed performance metrics to optimize models, DevOps needs resource utilization for capacity planning, and executives need high-level cost and efficiency summaries. Customizable dashboards serve all these needs effectively.'
    },
    {
      id: 'q11',
      question: 'What challenge does monitoring help address when running multiple AI workloads on shared GPU infrastructure?',
      options: [
        'It helps ensure fair resource allocation and identify workloads consuming disproportionate GPU resources',
        'Monitoring prevents multiple workloads from running simultaneously by enforcing strict isolation policies',
        'Shared infrastructure monitoring is impossible requiring dedicated GPUs for each individual workload',
        'Multiple workloads automatically balance themselves making monitoring unnecessary for resource management'
      ],
      correctAnswer: 0,
      explanation: 'In shared environments, monitoring reveals which workloads consume resources and helps ensure fair allocation. This visibility enables teams to identify resource-intensive jobs, detect inefficient utilization patterns, and make informed decisions about scheduling and prioritization.'
    },
    {
      id: 'q12',
      question: 'Why is metric retention and historical analysis important for GPU infrastructure management?',
      options: [
        'Historical data only consumes storage without providing any actionable insights for future planning',
        'Real-time metrics are sufficient making historical data retention unnecessary for operations',
        'Historical analysis exclusively supports compliance requirements without operational or planning benefits',
        'Trend analysis reveals usage patterns enabling better capacity planning and budget forecasting'
      ],
      correctAnswer: 3,
      explanation: 'Historical metrics reveal trends in GPU usage over time, helping predict future capacity needs, budget for infrastructure expansion, and identify seasonal or project-based usage patterns. This long-term visibility is essential for strategic planning and investment decisions.'
    },
    {
      id: 'q13',
      question: 'How does monitoring support debugging and troubleshooting in GPU-accelerated applications?',
      options: [
        'Monitoring only shows symptoms without providing any diagnostic information for root cause analysis',
        'Metric correlation helps identify performance degradation causes like memory bottlenecks or data transfer issues',
        'Debugging requires specialized tools making general monitoring systems completely irrelevant for troubleshooting',
        'Modern applications self-diagnose issues eliminating any need for external monitoring or metrics analysis'
      ],
      correctAnswer: 1,
      explanation: 'Monitoring provides visibility into system behavior that aids troubleshooting. By correlating metrics like GPU utilization, memory usage, and data transfer rates with application performance, teams can pinpoint issues like CPU bottlenecks, memory constraints, or inefficient data pipelines.'
    },
    {
      id: 'q14',
      question: 'What role does alerting play in proactive GPU infrastructure management?',
      options: [
        'Alerts exclusively notify about complete system failures without detecting performance degradation early',
        'Alerting systems create unnecessary noise making manual dashboard checking more effective for monitoring',
        'Modern systems self-heal automatically making alerting redundant for GPU infrastructure management',
        'Proactive alerts on anomalies enable intervention before issues impact applications or user experience'
      ],
      correctAnswer: 3,
      explanation: 'Alerting enables proactive management by notifying teams when metrics exceed thresholds or exhibit unusual patterns. This allows intervention before minor issues become critical problems, reducing downtime and maintaining performance for users and applications.'
    },
    {
      id: 'q15',
      question: 'How does standardized monitoring across heterogeneous GPU infrastructure benefit operations teams?',
      options: [
        'Standardization only works with identical hardware making it useless for heterogeneous environments',
        'Heterogeneous environments require completely different monitoring tools preventing any standardization benefits',
        'Standardized monitoring reduces flexibility making customized per-GPU monitoring more effective',
        'Consistent monitoring framework enables unified visibility across diverse GPU types and vendor platforms'
      ],
      correctAnswer: 3,
      explanation: 'Standardized monitoring provides consistent visibility across diverse GPU types (different models, generations, or vendors). This unified approach simplifies operations, enables cross-platform comparison, and reduces the learning curve for teams managing complex, heterogeneous infrastructure.'
    }
  ],
  
  '4-deployment-scaling/7-scaling-LLM-Kubernetes.txt': [
    {
      id: 'q1',
      question: 'What primary business challenge does autoscaling LLM deployments with Kubernetes address for enterprises?',
      options: [
        'Handling variable inference request volumes during peak and non-peak hours while optimizing total cost',
        'Eliminating all infrastructure costs by running models exclusively on free cloud tier resources',
        'Preventing any need for GPU hardware by using CPU-only inference for all workloads',
        'Completely automating model training without requiring any data scientist involvement or oversight'
      ],
      correctAnswer: 0,
      explanation: 'Autoscaling enables enterprises to handle different volumes of inference requests during peak and non-peak hours with flexibility, while benefiting from reduced total cost compared to purchasing maximum hardware resources to handle peak workloads continuously.'
    },
    {
      id: 'q2',
      question: 'How do TensorRT-LLM and Triton Inference Server complement each other in LLM deployment?',
      options: [
        'Both tools perform identical functions providing redundancy in case one component fails',
        'TensorRT-LLM handles inference serving while Triton exclusively manages model training workflows',
        'Triton optimizes models for deployment while TensorRT-LLM only monitors performance metrics',
        'TensorRT-LLM optimizes models with techniques like quantization while Triton serves optimized models in production'
      ],
      correctAnswer: 3,
      explanation: 'TensorRT-LLM provides optimizations such as kernel fusion, quantization, in-flight batch, and paged attention to make models efficient. Triton Inference Server then deploys these optimized models in production, serving inference requests across multiple frameworks and platforms.'
    },
    {
      id: 'q3',
      question: 'What fundamental optimization techniques does TensorRT-LLM provide to improve LLM inference performance?',
      options: [
        'Exclusively focuses on data preprocessing without any model-level or runtime optimizations',
        'Kernel fusion, quantization, in-flight batching, and paged attention for efficient GPU execution',
        'Only handles model compression without addressing memory management or batching strategies',
        'Primarily optimizes network bandwidth usage without improving computational efficiency or latency'
      ],
      correctAnswer: 1,
      explanation: 'TensorRT-LLM provides multiple optimizations including kernel fusion, quantization, in-flight batch, and paged attention. These techniques enable inference using optimized models to be performed efficiently on NVIDIA GPUs with improved throughput and reduced latency.'
    },
    {
      id: 'q4',
      question: 'Why is Horizontal Pod Autoscaler (HPA) particularly valuable for LLM inference workloads?',
      options: [
        'HPA eliminates GPU requirements by automatically converting workloads to run on CPUs',
        'It dynamically adjusts deployment scale based on inference demand, optimizing resource utilization and costs',
        'HPA exclusively handles data storage scaling without affecting compute resource allocation',
        'It only works during scheduled maintenance windows without supporting real-time scaling'
      ],
      correctAnswer: 1,
      explanation: 'HPA automatically scales the number of Pods (and therefore GPUs) based on metrics like queue-to-compute ratio. This enables the system to handle thousands of real-time requests during peaks and scale down during low-demand periods, optimizing both performance and cost.'
    },
    {
      id: 'q5',
      question: 'What role does Prometheus play in the autoscaling architecture for LLM deployments?',
      options: [
        'Prometheus exclusively manages GPU driver updates without collecting any performance or application metrics',
        'Prometheus only handles log aggregation without supporting metrics collection or autoscaling integration',
        'It primarily focuses on security monitoring without involvement in performance metrics or scaling',
        'It scrapes Triton metrics and provides data to HPA for making intelligent scaling decisions'
      ],
      correctAnswer: 3,
      explanation: 'Prometheus scrapes Triton metrics from Pods and provides this data to the Horizontal Pod Autoscaler. HPA uses these metrics to make decisions on scaling up or down the number of deployments and GPUs based on inference request volume.'
    },
    {
      id: 'q6',
      question: 'What is the "queue-to-compute ratio" metric and why is it useful for autoscaling?',
      options: [
        'Ratio of failed requests to successful requests indicating overall system reliability',
        'Queue time divided by compute time reflecting response time and indicating when scaling is needed',
        'Number of queued models divided by active models showing deployment readiness',
        'Percentage of GPU memory allocated versus available measuring resource saturation'
      ],
      correctAnswer: 1,
      explanation: 'The queue-to-compute ratio is defined as queue time divided by compute time for an inference request. It reflects response time—when the ratio is high (queue time exceeds compute time), it indicates insufficient replicas to respond quickly, triggering scale-up.'
    },
    {
      id: 'q7',
      question: 'How does tensor parallelism (TP) enable deployment of large models that don\'t fit on single GPUs?',
      options: [
        'TP compresses models to fit any GPU size without requiring multiple devices',
        'TP exclusively handles data parallelism without addressing model partitioning across devices',
        'It only improves training speed without providing any benefits for inference deployment',
        'It partitions model across multiple GPUs allowing each Pod to use several GPUs for larger models'
      ],
      correctAnswer: 3,
      explanation: 'Tensor parallelism (TP) allows models to be partitioned across multiple GPUs. For models needing multiple GPUs, you can configure TP accordingly (e.g., TP=2 for models requiring two GPUs), and each Kubernetes Pod will utilize multiple GPUs for deployment.'
    },
    {
      id: 'q8',
      question: 'Why is storing TensorRT engine files on the host node beneficial for scaled deployments?',
      options: [
        'Host storage eliminates all GPU memory requirements making deployment possible on CPU-only nodes',
        'Stored files automatically improve model accuracy without requiring any retraining or optimization',
        'Host storage exclusively benefits security without providing any efficiency or performance advantages',
        'It avoids regenerating identical files when scaling up additional Pods on the same node'
      ],
      correctAnswer: 3,
      explanation: 'Storing generated TensorRT engine and plan files on the host node and remapping them to all Pods on that node eliminates the need to regenerate the same files when additional Pods are scaled up, saving time and computational resources.'
    },
    {
      id: 'q9',
      question: 'What advantages does using foundation models with techniques like RAG and fine-tuning provide?',
      options: [
        'Foundation models eliminate all need for domain-specific data or customization efforts',
        'Foundation models exclusively work for general tasks without supporting any specialized applications',
        'These techniques only reduce costs without providing any accuracy or time-to-deployment benefits',
        'Developers avoid expensive training from scratch while achieving higher accuracy for specific tasks quickly'
      ],
      correctAnswer: 3,
      explanation: 'Foundation models like Llama, Gemma, and GPT demonstrate human-like understanding, allowing developers to avoid expensive training from scratch. Techniques like RAG, prompt engineering, and fine-tuning customize these models to achieve higher accuracy for specific tasks in much shorter time.'
    },
    {
      id: 'q10',
      question: 'How does Triton Inference Server\'s multi-framework support benefit deployment flexibility?',
      options: [
        'Multi-framework support exclusively improves security without affecting deployment options or compatibility',
        'Triton only supports NVIDIA-specific frameworks limiting deployment to proprietary infrastructure',
        'Framework support solely affects training without providing any benefits for inference serving',
        'It enables serving models from TensorRT, TensorFlow, PyTorch, and ONNX on diverse hardware platforms'
      ],
      correctAnswer: 3,
      explanation: 'Triton supports multiple deep learning frameworks including TensorRT, TensorFlow, PyTorch, and ONNX. It can run across cloud, data center, edge, and embedded devices on NVIDIA GPUs, x86 and ARM CPUs, providing exceptional deployment flexibility.'
    },
    {
      id: 'q11',
      question: 'What purpose does a load balancer serve in scaled LLM deployment architectures?',
      options: [
        'Load balancers exclusively handle authentication without distributing any inference workload across Pods',
        'Load balancers only manage storage access patterns without affecting compute workload distribution',
        'They primarily monitor performance metrics without actively routing or distributing any traffic',
        'They distribute inference requests among running Pods ensuring balanced utilization and high availability'
      ],
      correctAnswer: 3,
      explanation: 'Load balancers distribute inference workload among all running Pods. They operate at either Layer 4 (transport level, network-based) or Layer 7 (application level, content-based), ensuring requests are balanced across available Triton servers for optimal resource utilization.'
    },
    {
      id: 'q12',
      question: 'Why is monitoring individual Pod metrics important when autoscaling LLM deployments?',
      options: [
        'Pod-level metrics exclusively track errors without providing any performance or utilization insights',
        'Monitoring only benefits debugging without contributing to autoscaling decisions or resource optimization',
        'Individual Pod metrics are irrelevant since cluster-wide averages provide sufficient scaling information',
        'HPA uses average metrics across Pods to make informed scaling decisions based on actual workload'
      ],
      correctAnswer: 3,
      explanation: 'HPA takes the average of metrics like queue-to-compute ratio across all Pods. This aggregated view helps HPA determine whether to increase replicas (when average ratio is too high) or decrease them (when ratio is low), ensuring scaling decisions reflect actual system-wide demand.'
    },
    {
      id: 'q13',
      question: 'What operational challenge does Kubernetes help address when scaling LLM inference across heterogeneous GPU infrastructure?',
      options: [
        'Kubernetes eliminates all need for GPUs by automatically converting workloads to CPU-only execution',
        'Kubernetes exclusively handles data storage without addressing compute orchestration or GPU scheduling',
        'It only supports identical GPU configurations preventing any deployment on heterogeneous infrastructure',
        'It provides automated orchestration, discovery, and scheduling across diverse GPU types and configurations'
      ],
      correctAnswer: 3,
      explanation: 'Kubernetes with GPU plugins enables automatic discovery of GPU-equipped nodes and makes them available to containers. It orchestrates deployment across diverse GPU types, automating scheduling, scaling, and resource management for heterogeneous infrastructure.'
    },
    {
      id: 'q14',
      question: 'How does the combination of custom metrics and HPA enable more intelligent autoscaling than CPU-based scaling?',
      options: [
        'Custom metrics only provide aesthetic dashboards without affecting actual autoscaling behavior or decisions',
        'CPU-based scaling is always superior making custom metrics unnecessary for any workloads',
        'Custom metrics exclusively benefit debugging without contributing to scaling decision accuracy or relevance',
        'Application-specific metrics like queue-to-compute ratio reflect actual user experience better than generic CPU utilization'
      ],
      correctAnswer: 3,
      explanation: 'Custom metrics like queue-to-compute ratio directly reflect inference response time and user experience. This is more meaningful than generic CPU utilization for LLM workloads, where inference queue times better indicate whether additional capacity is needed to maintain service quality.'
    },
    {
      id: 'q15',
      question: 'What business value does automated LLM scaling provide compared to static GPU allocation?',
      options: [
        'Automated scaling eliminates all infrastructure costs by sharing resources across unlimited users',
        'Static allocation always provides better performance making automated scaling counterproductive for businesses',
        'Automated scaling only benefits development environments without production or business value',
        'It optimizes costs by matching resources to demand while maintaining performance during variable workloads'
      ],
      correctAnswer: 3,
      explanation: 'Automated scaling enables handling peak loads without permanently provisioning for maximum capacity. Organizations avoid the total cost of purchasing enough hardware for peak workloads while still serving thousands of real-time requests with low latency during high-demand periods and scaling down during quieter times.'
    }
  ],
  
  '4-deployment-scaling/8-TensorRT-performance-analysis.txt': [
    {
      id: 'q1',
      question: 'Why is performance profiling particularly important for Large Language Model (LLM) applications?',
      options: [
        'Long runtimes and diverse workloads during inference make understanding performance critical for optimization',
        'LLMs always run at optimal performance without requiring any analysis or optimization efforts',
        'Profiling exclusively benefits hardware vendors without providing value to application developers',
        'LLM performance is entirely deterministic making profiling unnecessary for production deployments'
      ],
      correctAnswer: 0,
      explanation: 'Given the potential long runtimes of LLMs and the diversity of workloads a model may experience during a single inference pass or binary execution, performance profiling is essential. It helps understand application behavior and identify optimization opportunities.'
    },
    {
      id: 'q2',
      question: 'What key advantage does toggling the CUDA profiler on and off provide for LLM performance analysis?',
      options: [
        'Toggling eliminates all profiling overhead making it completely free in terms of resources',
        'It allows focusing on specific regions of interest while producing smaller, more manageable profile files',
        'Profiler toggling exclusively improves accuracy without affecting file size or analysis focus',
        'Toggling only benefits visualization aesthetics without providing practical analysis advantages'
      ],
      correctAnswer: 1,
      explanation: 'Toggling the CUDA profiler allows users to know specifically what the profiled region corresponds to and results in smaller files to post-process. This makes analysis more focused and manageable, especially for long-running LLM workloads.'
    },
    {
      id: 'q3',
      question: 'Why might profiling only specific iterations be preferable to profiling an entire LLM execution?',
      options: [
        'Specific iterations always contain all performance issues making full profiling redundant',
        'Full profiling is technically impossible for any application requiring iteration-based selective profiling',
        'Limiting profiling reduces file size and focuses analysis on representative or problematic execution periods',
        'Iteration-specific profiling exclusively benefits storage costs without improving analysis quality'
      ],
      correctAnswer: 2,
      explanation: 'Profiling specific iterations reduces the profile file size and allows controlling which iterations are collected. This is particularly valuable for understanding representative behavior or investigating specific performance issues without overwhelming data volumes.'
    },
    {
      id: 'q4',
      question: 'What purpose do NVTX (NVIDIA Tools Extension) markers serve in performance analysis?',
      options: [
        'NVTX markers exclusively handle memory allocation without providing any performance visibility',
        'They annotate code regions enabling correlation between application logic and performance metrics in timelines',
        'Markers only improve compilation speed without contributing to runtime performance analysis',
        'NVTX exclusively benefits security monitoring without any performance profiling applications'
      ],
      correctAnswer: 1,
      explanation: 'NVTX markers provide annotations that help users understand which regions of code correspond to observed performance behavior. They enable correlating application-level logic with low-level performance metrics in profiling tools like Nsight Systems.'
    },
    {
      id: 'q5',
      question: 'How does Nsight Systems provide a "middle-ground" between timing analysis and kernel-level profiling?',
      options: [
        'It exclusively focuses on high-level timing without any detailed metrics or kernel information',
        'Nsight Systems only performs kernel-level analysis without any application-level capabilities',
        'The middle-ground approach eliminates all need for other profiling tools or analysis methods',
        'Metric sampling provides application-level insights with more detail than timing but less depth than kernel profiling'
      ],
      correctAnswer: 3,
      explanation: 'Nsight Systems reports at the application level with metric sampling capabilities provide a clean middle-ground between simple timing analysis and deep kernel-level dives with Nsight Compute. This offers balanced insight without overwhelming detail.'
    },
    {
      id: 'q6',
      question: 'What benefit does PyTorch profiler integration provide when analyzing PyTorch-based LLM workflows?',
      options: [
        'PyTorch profiler exclusively handles data loading without any model execution performance analysis',
        'It helps users understand performance breakdown within the model with framework-specific insights',
        'Integration only supports training analysis without providing any inference profiling capabilities',
        'PyTorch profiler eliminates need for CUDA profiling by replacing all lower-level analysis'
      ],
      correctAnswer: 1,
      explanation: 'The PyTorch profiler helps users analyze the performance breakdown in the model, providing framework-specific insights. Combined with toggling capabilities, it results in focused, smaller files for post-processing while maintaining valuable analysis detail.'
    },
    {
      id: 'q7',
      question: 'Why is understanding "which regions to focus on" important for effective LLM performance analysis?',
      options: [
        'All regions of LLM execution have identical performance characteristics making focus irrelevant',
        'Regional focus only benefits visualization without improving actual optimization effectiveness',
        'LLMs automatically optimize themselves eliminating any need for focused performance analysis',
        'Identifying bottleneck regions enables targeted optimization efforts where they\'ll have greatest impact'
      ],
      correctAnswer: 3,
      explanation: 'Providing means to understand which regions users may want to focus on enables targeted analysis. Not all parts of LLM execution contribute equally to performance issues, so identifying critical regions makes optimization efforts more efficient and effective.'
    },
    {
      id: 'q8',
      question: 'What challenge does profiling file size present for long-running LLM applications?',
      options: [
        'Massive files can be difficult to post-process for metric extraction and may overwhelm analysis tools',
        'Large profile files exclusively consume storage without affecting analysis capabilities or workflows',
        'File size is completely irrelevant since all modern systems handle unlimited data volumes',
        'Smaller files always contain insufficient information making size reduction counterproductive'
      ],
      correctAnswer: 0,
      explanation: 'Long-running LLM applications can generate very large profile files. Selective profiling results in smaller files to post-process for metric extraction or similar analysis, making the data more manageable and analysis more practical.'
    },
    {
      id: 'q9',
      question: 'How does coordinating profiling tools with application execution improve analysis quality?',
      options: [
        'Coordination exclusively improves aesthetics without affecting data quality or analysis accuracy',
        'Independent profiling without coordination always produces superior results for all applications',
        'Tool coordination only benefits automated scripts without improving manual analysis workflows',
        'Synchronized profiling captures relevant execution phases ensuring collected data represents intended workload behavior'
      ],
      correctAnswer: 3,
      explanation: 'Coordinating profiling tools (like Nsight Systems) with application execution ensures that profiling captures the intended execution phases. This synchronization guarantees that collected data represents the workload behavior you want to analyze and optimize.'
    },
    {
      id: 'q10',
      question: 'What role does garbage collection (GC) profiling play in understanding Python-based LLM performance?',
      options: [
        'GC profiling exclusively tracks memory leaks without revealing any performance impact information',
        'Garbage collection has no performance impact making GC profiling unnecessary for optimization',
        'GC profiling only benefits memory capacity planning without affecting performance analysis',
        'GC markers reveal memory management overhead that can significantly impact overall application performance'
      ],
      correctAnswer: 3,
      explanation: 'Enabling garbage collection NVTX markers allows understanding memory management overhead. In Python-based LLM applications, GC can significantly impact performance, so visualizing when and how often it occurs helps identify optimization opportunities.'
    },
    {
      id: 'q11',
      question: 'Why might analyzing the Global Interpreter Lock (GIL) be relevant for PyTorch LLM performance?',
      options: [
        'GIL exclusively affects network communication without impacting any computational performance',
        'GIL contention can limit parallelism in Python, affecting overall application throughput and efficiency',
        'Modern Python completely eliminated GIL making its analysis irrelevant for all applications',
        'GIL only matters for training without affecting inference performance or optimization'
      ],
      correctAnswer: 1,
      explanation: 'The GIL can limit parallelism in Python applications. Including GIL information in NVTX markers helps identify when the GIL is causing contention or limiting multi-threaded performance in PyTorch-based LLM workflows.'
    },
    {
      id: 'q12',
      question: 'What advantage does visualizing profiling results in timeline format provide for LLM analysis?',
      options: [
        'Timeline visualization only provides aesthetic appeal without any practical debugging advantages',
        'Timelines exclusively show errors without revealing any performance patterns or optimization insights',
        'Temporal correlation between events helps identify dependencies, bottlenecks, and optimization opportunities',
        'Statistical summaries always provide superior insights making timeline visualization unnecessary'
      ],
      correctAnswer: 2,
      explanation: 'Timeline visualization enables seeing when events occur and how they relate temporally. This helps identify dependencies between operations, understand where time is spent, and correlate application-level events with low-level performance metrics for effective optimization.'
    },
    {
      id: 'q13',
      question: 'How does selective metric collection benefit post-profiling analysis workflows?',
      options: [
        'Collecting all possible metrics always produces better results making selective collection counterproductive',
        'Focusing on relevant metrics reduces data volume and speeds analysis without sacrificing critical insights',
        'Metric selection exclusively affects storage costs without improving analysis speed or effectiveness',
        'Selective collection eliminates all valuable data making comprehensive profiling always superior'
      ],
      correctAnswer: 1,
      explanation: 'Selective profiling and metric collection produces smaller, more focused datasets. This makes post-processing for metric extraction faster and more manageable while still capturing the critical performance information needed for optimization decisions.'
    },
    {
      id: 'q14',
      question: 'What insight does understanding performance breakdown within a model provide to developers?',
      options: [
        'Breakdown analysis only identifies what components exist without revealing any optimization opportunities',
        'Performance breakdown exclusively benefits researchers without providing value to production deployments',
        'All model components contribute equally to runtime making breakdown analysis unnecessary',
        'It reveals which model components consume most time, guiding where optimization efforts should focus'
      ],
      correctAnswer: 3,
      explanation: 'Understanding performance breakdown within the model helps identify which components or operations consume the most time. This guides developers to focus optimization efforts where they\'ll have the greatest impact on overall application performance.'
    },
    {
      id: 'q15',
      question: 'Why is the combination of application-level and kernel-level profiling tools valuable for LLM optimization?',
      options: [
        'Multiple profiling tools only create redundant data without providing complementary insights',
        'Single-level profiling always provides sufficient information making multi-level analysis wasteful',
        'Tool combination exclusively benefits academic research without practical optimization value',
        'Different profiling levels provide complementary perspectives from high-level patterns to low-level kernel details'
      ],
      correctAnswer: 3,
      explanation: 'Application-level tools like Nsight Systems show overall patterns and workflows, while kernel-level tools like Nsight Compute provide detailed GPU operation analysis. Together, they offer complementary perspectives enabling both strategic optimization decisions and tactical kernel improvements.'
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
  
  // Function to find quiz data by matching file paths flexibly
  const findQuizData = (path: string | undefined): QuizQuestion[] | null => {
    if (!path) return null;
    
    // Try exact match first
    if (QUIZ_DATA[path]) {
      console.log('Quiz found: exact match for', path);
      return QUIZ_DATA[path];
    }
    
    // Try matching without directory prefix (e.g., "1-agent-architecture-design/file.txt")
    const pathWithoutPrefix = path.replace(/^(summaries|readings|generated-content)\//, '');
    if (QUIZ_DATA[pathWithoutPrefix]) {
      console.log('Quiz found: match without prefix for', path, '->', pathWithoutPrefix);
      return QUIZ_DATA[pathWithoutPrefix];
    }
    
    // Try with different directory prefixes
    const possiblePaths = [
      `summaries/${pathWithoutPrefix}`,
      `readings/${pathWithoutPrefix}`,
      `generated-content/${pathWithoutPrefix}`,
      pathWithoutPrefix
    ];
    
    for (const possiblePath of possiblePaths) {
      if (QUIZ_DATA[possiblePath]) {
        console.log('Quiz found: match with prefix for', path, '->', possiblePath);
        return QUIZ_DATA[possiblePath];
      }
    }
    
    // Try fuzzy matching by normalizing file names
    // Extract the base filename and normalize it
    const baseFileName = path.split('/').pop()?.replace('.txt', '').toLowerCase() || '';
    const normalizedBase = baseFileName
      .replace(/^\d+[-.]/, '') // Remove leading numbers with dash or dot
      .replace(/[-_]/g, '-') // Normalize separators
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .trim();
    
    // Get directory path without prefix
    const pathDir = path.substring(0, path.lastIndexOf('/'));
    const pathDirWithoutPrefix = pathDir.replace(/^(summaries|readings|generated-content)\//, '');
    
    // Extract key words from filename (remove common words like "design", "implement", etc.)
    const extractKeywords = (name: string): string[] => {
      const words = name.split('-').filter(w => w.length > 2);
      // Remove common prefixes/suffixes
      return words.filter(w => 
        !['design', 'implement', 'config', 'manage', 'orchestrate', 'apply', 'ensure', 'user', 'interfaces', 
          'overview', 'tutorials', 'faq', 'launching', 'intro', 'introductory'].includes(w.toLowerCase())
      );
    };
    
    const baseKeywords = extractKeywords(normalizedBase);
    
    // Search through all QUIZ_DATA keys for a match
    for (const [key, questions] of Object.entries(QUIZ_DATA)) {
      const keyFileName = key.split('/').pop()?.replace('.txt', '').toLowerCase() || '';
      const normalizedKey = keyFileName
        .replace(/^\d+[-.]/, '') // Remove leading numbers
        .replace(/[-_]/g, '-') // Normalize separators
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .trim();
      
      // Get key directory without prefix
      const keyDir = key.substring(0, key.lastIndexOf('/'));
      const keyDirWithoutPrefix = keyDir.replace(/^(summaries|readings|generated-content)\//, '');
      
      // Check directory match first (must be in same category)
      const dirsMatch = keyDirWithoutPrefix === pathDirWithoutPrefix || 
          keyDirWithoutPrefix.includes(pathDirWithoutPrefix) ||
          pathDirWithoutPrefix.includes(keyDirWithoutPrefix);
      
      if (!dirsMatch) continue;
      
      // Try multiple matching strategies
      const exactMatch = normalizedBase === normalizedKey;
      const substringMatch = normalizedBase.includes(normalizedKey) || normalizedKey.includes(normalizedBase);
      
      // Keyword-based matching
      const keyKeywords = extractKeywords(normalizedKey);
      const keywordOverlap = baseKeywords.length > 0 && keyKeywords.length > 0 &&
        baseKeywords.some(kw => keyKeywords.some(kk => kw.includes(kk) || kk.includes(kw)));
      
      // Check if significant portion of words match
      const baseWords = normalizedBase.split('-').filter(w => w.length > 2);
      const keyWords = normalizedKey.split('-').filter(w => w.length > 2);
      const wordOverlap = baseWords.length > 0 && keyWords.length > 0 &&
        baseWords.filter(bw => keyWords.some(kw => bw === kw || bw.includes(kw) || kw.includes(bw))).length >= 
        Math.min(2, Math.min(baseWords.length, keyWords.length));
      
      // Special handling for agent intelligence toolkit files - match based on core keywords
      // Files like "agent-intelligence-toolkit-overview" should match "agent-intelligence-toolkit-FAQ"
      // if they're in the same directory category
      const coreAgentTerms = ['agent', 'intelligence', 'toolkit'];
      const baseHasCoreTerms = coreAgentTerms.every(term => normalizedBase.includes(term));
      const keyHasCoreTerms = coreAgentTerms.every(term => normalizedKey.includes(term));
      
      // If both files contain the core agent intelligence toolkit terms, they're related
      // This allows overview/tutorials files to match FAQ/launching quiz data in the same category
      const agentIntelligenceMatch = baseHasCoreTerms && keyHasCoreTerms;
      
      if (exactMatch || substringMatch || keywordOverlap || wordOverlap || agentIntelligenceMatch) {
        console.log('Quiz found: fuzzy match for', path, '->', key, 
          '(normalized:', normalizedBase, 'vs', normalizedKey, 
          ', keywords:', baseKeywords, 'vs', keyKeywords, ')');
        return questions;
      }
    }
    
    console.log('No quiz found for', path, '- checked', Object.keys(QUIZ_DATA).length, 'quiz entries');
    return null;
  };
  
  // Check if this file has a quiz
  const quizQuestions = findQuizData(filePath);
  const hasQuiz = quizQuestions !== null;

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



