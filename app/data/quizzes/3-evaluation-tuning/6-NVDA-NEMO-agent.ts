import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
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
];

