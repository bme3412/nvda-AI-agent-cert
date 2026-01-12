import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the NVIDIA NeMo Agent Toolkit and what makes it unique?',
    options: [
      'A language model training platform exclusively for NVIDIA-developed agent architectures',
      'A framework-agnostic observability and evaluation toolkit that works alongside any agent framework without requiring rebuilds or framework lock-in, previously known as Agent Intelligence Toolkit or AIQ',
      'A deployment orchestration system that only works with NVIDIA hardware infrastructure',
      'A proprietary agent framework that requires replacing existing frameworks with NVIDIA-specific implementations'
    ],
    correctAnswer: 1,
    explanation: 'The NVIDIA NeMo Agent Toolkit represents a paradigm shift in agent development tooling, providing framework-agnostic observability and evaluation that works alongside any agent framework without requiring rebuilds or framework lock-in. Previously known as the Agent Intelligence Toolkit or AIQ, the toolkit has been renamed to better align with the NVIDIA NeMo family of products, though the core technologies, performance, and roadmap remain unchanged with full API compatibility for existing users. This flexible, lightweight, and unifying library allows organizations to easily connect existing enterprise agents to data sources and tools across any framework, whether you\'re using LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, Google ADK, Strands Agents, custom enterprise frameworks, or simple Python agents.'
  },
  {
    id: 'q2',
    question: 'What is the core philosophy of the NeMo Agent Toolkit regarding component design?',
    options: [
      'Mandating that components must be developed from scratch without reusing existing implementations',
      'Enforcing strict hierarchical structures where components cannot be combined or customized',
      'Emphasizing reusability and composability, with every agent, tool, and workflow existing as a function call that works together in complex software applications',
      'Requiring all components to be tightly integrated with no separation between agents, tools, and workflows'
    ],
    correctAnswer: 2,
    explanation: 'The toolkit\'s core philosophy emphasizes reusability and composability, with every agent, tool, and workflow existing as a function call that works together in complex software applications. This design enables developers to build components once and reuse them across different scenarios, significantly accelerating development. You can start with pre-built agents, tools, or workflows and customize them to specific needs, allowing teams to move quickly if they\'re already working with agents. The composability between these agents, tools, and workflows means that complex systems can be constructed from well-designed building blocks, each of which can be tested, optimized, and reused independently.'
  },
  {
    id: 'q3',
    question: 'How does the toolkit\'s framework-agnostic nature benefit organizations?',
    options: [
      'It mandates standardization across all frameworks, eliminating framework diversity',
      'It only supports a limited set of pre-approved frameworks with no extensibility options',
      'It works side-by-side and around existing agentic frameworks rather than replacing them, allowing organizations to use their current technology stack without replatforming',
      'It requires complete migration to NVIDIA frameworks, forcing organizations to abandon existing implementations'
    ],
    correctAnswer: 2,
    explanation: 'One of the most significant advantages of NeMo Agent Toolkit is its framework-agnostic nature, meaning it works side-by-side and around existing agentic frameworks rather than replacing them. This allows organizations to use their current technology stack without replatforming, complementing any existing agentic framework or memory tool without being tied to any specific framework, long-term memory solution, or data source. To keep the library lightweight, many first-party plugins are located in separate distribution packages, allowing teams to install only the integrations they need. This modular approach ensures that the core toolkit remains lean while providing extensive integration capabilities for popular frameworks and tools.'
  },
  {
    id: 'q4',
    question: 'What profiling capabilities does the NeMo Agent Toolkit provide?',
    options: [
      'Profiling exclusively focused on GPU utilization without tracking agent-specific metrics',
      'Basic profiling limited to only agent-level metrics without workflow or tool visibility',
      'Comprehensive profiling that instruments entire workflows down to the tool and agent level, monitoring input/output tokens, timings, and identifying bottlenecks with real-time statistics collection and offline analysis',
      'Profiling that requires manual instrumentation code for each component without automated collection'
    ],
    correctAnswer: 2,
    explanation: 'The toolkit includes comprehensive profiling capabilities that instrument entire workflows down to the tool and agent level, monitoring input/output tokens, timings, and identifying bottlenecks. The profiler collects usage statistics in real time through callbacks, records statistics on a per-invocation basis, stores data for offline analysis, and forecasts usage metrics using time-series models. This enables developers to dynamically stress test their workflows in pre-production phases to receive workflow-specific sizing guidance based on observed latency and throughput. The profiler can identify common prompt prefixes for caching optimization, analyze workflow bottlenecks, detect concurrency spikes, and compute workflow-specific metrics for performance analysis including latency, throughput, and runtime forecasts.'
  },
  {
    id: 'q5',
    question: 'What observability features does the toolkit provide?',
    options: [
      'Observability features that require proprietary NVIDIA monitoring tools exclusively',
      'Fixed telemetry configuration that cannot be customized or integrated with external platforms',
      'Observability limited to basic console logging without distributed tracing or metrics collection',
      'Configurable telemetry setup for logging, tracing, and metrics with dedicated integrations for Phoenix, Weave, and Langfuse, plus compatibility with OpenTelemetry-based platforms'
    ],
    correctAnswer: 3,
    explanation: 'Observability features provide configurable telemetry setup for logging, tracing, and metrics across AIQ toolkit workflows. The system enables users to configure telemetry options from a predefined list based on their preferences, listens to real-time usage statistics pushed by the IntermediateStepManager, and translates usage statistics to OpenTelemetry format for pushing to configured providers. This includes dedicated integrations with popular platforms like Phoenix, Weave, and Langfuse, plus compatibility with OpenTelemetry-based platforms, enabling comprehensive monitoring, debugging, and insights into agent behaviors across the entire execution graph. The system creates distributed tracing across nested function calls with preserved parent-child relationships, enabling developers to understand complex workflows as they execute.'
  },
  {
    id: 'q6',
    question: 'What evaluation capabilities does the toolkit include?',
    options: [
      'Evaluation that requires manual test case creation without automated assessment capabilities',
      'Simple pass-fail evaluation without nuanced quality assessments or intermediate step analysis',
      'Evaluation limited to offline testing only, without support for remote or distributed scenarios',
      'Structured validation using frameworks like RAGAS for RAG workflows, assessing answer accuracy, context relevance, and response groundedness through judge LLMs, with support for trajectory evaluators and distributed evaluation'
    ],
    correctAnswer: 3,
    explanation: 'Evaluation capabilities provide structured validation using frameworks like RAGAS for RAG workflows, assessing answer accuracy, context relevance, and response groundedness through judge LLMs. The toolkit includes a built-in evaluation system to validate and maintain accuracy of agentic workflows, going beyond simple pass-fail metrics to provide nuanced quality assessments that guide iterative improvement. The evaluation system supports multiple evaluator types including trajectory evaluators that examine intermediate steps agents take to reach final answers, checking reasoning path validity beyond output correctness. Evaluation can be performed both locally and remotely, with support for running workflows on remote servers while performing evaluation locally, enabling distributed evaluation scenarios.'
  },
  {
    id: 'q7',
    question: 'What recent enhancements have been added to the NeMo Agent Toolkit?',
    options: [
      'Features limited to NVIDIA-proprietary protocols without open standard support',
      'Only bug fixes and performance improvements without new feature additions',
      'Complete redesign requiring migration from previous toolkit versions',
      'Automatic hyperparameter tuning, Function Groups for packaging related functions, and full Model Context Protocol (MCP) support for versatile integration'
    ],
    correctAnswer: 3,
    explanation: 'Recent enhancements include automatic hyperparameter tuning that optimizes parameters and prompts of agents, tools, and workflows to maximize performance, minimize costs, and increase accuracy. Function Groups allow packaging multiple related functions together to share configuration, context, and resources, enabling better organization and reuse of agent components. Full Model Context Protocol (MCP) support enables using the toolkit as either an MCP client to connect to remote MCP servers or as an MCP server to publish your own tools via MCP, providing versatile integration with the broader tool ecosystem.'
  },
  {
    id: 'q8',
    question: 'What built-in user interface features does the toolkit provide?',
    options: [
      'A proprietary desktop application that requires separate installation and licensing',
      'A static documentation viewer without interactive agent interaction capabilities',
      'A command-line only interface without any graphical or web-based components',
      'A chat interface for interacting with agents and debugging workflows, with HTTP API and WebSocket connections, chat history, intermediate step controls, and real-time streaming support'
    ],
    correctAnswer: 3,
    explanation: 'The toolkit includes a built-in user interface that provides a chat interface for interacting with agents and debugging workflows. The UI allows interaction with running workflows through both HTTP API and WebSocket connections, providing features like chat history and controls for enabling or disabling intermediate steps. You can expand all intermediate steps by default or override steps that share the same ID, giving flexibility in how you view and manage workflow execution. The interface supports real-time streaming of intermediate results, allowing you to see workflow progress as it executes. Configuration options include theme selection, endpoint configuration for chat completion, WebSocket URL settings, and workflow schema type definitions for WebSocket connections.'
  },
  {
    id: 'q9',
    question: 'How does the toolkit\'s component architecture support extensibility and sharing?',
    options: [
      'Components are tightly coupled and cannot be shared or discovered independently',
      'Component sharing requires proprietary NVIDIA distribution channels exclusively',
      'Discovery mechanisms are limited to local components without remote support',
      'Every component is packaged inside a plugin designed to be shareable, with local and remote discovery through metadata including package information, version numbers, component types, descriptions, and developer notes'
    ],
    correctAnswer: 3,
    explanation: 'The toolkit\'s component architecture is designed for extensibility and sharing. Every AIQ toolkit component is packaged inside a plugin and designed to be shareable with the community of developers. Components include all pieces that leverage registration decorators, such as functions, LLM clients, and evaluators. The system supports local and remote discovery of components through metadata that includes package information, version numbers, component types, descriptions, and developer notes. This discovery mechanism enables developers to easily find and integrate useful components without needing to inspect source code, significantly improving developer velocity.'
  },
  {
    id: 'q10',
    question: 'What makes the NeMo Agent Toolkit accessible and practical for production deployment?',
    options: [
      'It requires specialized GPU hardware and proprietary NVIDIA infrastructure for all operations',
      'It has limited documentation and examples, making it difficult for teams to get started',
      'It\'s designed only for research and experimentation without production deployment capabilities',
      'It\'s a Python library that doesn\'t require a GPU to run workflows by default, with extensive examples, tutorials, comprehensive documentation, and a public roadmap'
    ],
    correctAnswer: 3,
    explanation: 'The toolkit is designed to be accessible and practical for production deployment. It\'s a Python library that doesn\'t require a GPU to run workflows by default, making it suitable for development and testing environments. The toolkit provides extensive examples and tutorials that demonstrate how to build custom workflows and tools, with comprehensive documentation covering getting started guides, contribution guidelines, workflow customization, evaluation concepts, and troubleshooting resources. NVIDIA provides a public roadmap showing future development plans, ensuring transparency about the toolkit\'s evolution.'
  }
];
