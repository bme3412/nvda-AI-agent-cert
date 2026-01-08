import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary architectural philosophy behind AIQ toolkit\'s approach to working with existing agentic frameworks?',
    options: [
      'It replaces existing frameworks with a unified proprietary system',
      'It works side-by-side with frameworks like LangChain, LlamaIndex, and CrewAI without requiring replatforming',
      'It only supports NVIDIA-developed frameworks and tools',
      'It requires converting all existing agents to a new standard format'
    ],
    correctAnswer: 1,
    explanation: 'AIQ toolkit is explicitly designed to be framework agnostic, working alongside existing agentic frameworks rather than replacing them. This allows developers to use their current technology stack without replatforming. The toolkit complements any existing agentic framework or memory tool and isn\'t tied to any specific framework, enabling integration without disrupting existing infrastructure or requiring major architectural changes.'
  },
  {
    id: 'q2',
    question: 'What capability does AIQ toolkit\'s Model Context Protocol (MCP) support provide?',
    options: [
      'It only allows AIQ toolkit to consume tools from remote MCP servers',
      'It enables bidirectional functionality - both as an MCP client and as an MCP server',
      'It\'s limited to internal NVIDIA services only',
      'It only publishes tools but cannot consume them'
    ],
    correctAnswer: 1,
    explanation: 'AIQ toolkit provides full MCP support with bidirectional capability. It can function as an MCP client to connect to and use tools served by remote MCP servers, and it can also function as an MCP server to publish tools via MCP. This bidirectional support enables maximum flexibility in how components are shared and integrated across different systems and platforms.'
  },
  {
    id: 'q3',
    question: 'What is the purpose of AIQ toolkit\'s DiscoveryMetadata system?',
    options: [
      'To track runtime performance metrics during workflow execution',
      'To enable local and remote discovery of available components with their descriptions and configurations',
      'To automatically optimize component performance based on usage patterns',
      'To manage version control for deployed workflows'
    ],
    correctAnswer: 1,
    explanation: 'DiscoveryMetadata facilitates component discovery by aggregating information about each AIQ toolkit component including package name, version, component type, description, and developer notes. This metadata enables developers to discover what components are available through tools like the aiq info components CLI utility. The system pulls descriptions from configuration object docstrings and field metadata, making it easier for developers to find and understand available components without inspecting source code.'
  },
  {
    id: 'q4',
    question: 'When profiling a workflow, what does the token_uniqueness_forecast feature measure?',
    options: [
      'The total number of tokens used across all queries',
      'The expected number of unique tokens in the next query based on previous queries',
      'The percentage of duplicate tokens within a single query',
      'The optimal token limit for the LLM model'
    ],
    correctAnswer: 1,
    explanation: 'The token_uniqueness_forecast computes the inter-query token uniqueness, which predicts the expected number of unique tokens in the next query based on the tokens used in previous queries. This helps understand token reuse patterns across queries and can inform decisions about caching strategies, as repeated tokens may indicate opportunities for optimization through prompt caching or other techniques.'
  },
  {
    id: 'q5',
    question: 'What is the key requirement for AIQ toolkit component configuration objects to provide useful information in the discovery system?',
    options: [
      'They must be written in a specific proprietary format',
      'They should include a name, docstring, and Field annotations with descriptions',
      'They need to be registered with NVIDIA\'s central component registry',
      'They must include performance benchmarks and usage statistics'
    ],
    correctAnswer: 1,
    explanation: 'For the discovery system to provide useful information, component configuration objects must satisfy three hygiene requirements: specify a name (used in the component_name), include a docstring (pulled into the description), and annotate fields with pydantic.Field including descriptions. These requirements ensure developers can understand what components do and how to configure them without needing to inspect source code, significantly improving developer velocity.'
  },
  {
    id: 'q6',
    question: 'What is the primary benefit of AIQ toolkit\'s bottleneck analysis feature?',
    options: [
      'It automatically fixes performance issues in workflows',
      'It identifies where workflows spend time and reveals nested bottlenecks like tool calls within other tool calls',
      'It reduces memory consumption of deployed models',
      'It optimizes database query performance'
    ],
    correctAnswer: 1,
    explanation: 'Bottleneck analysis helps identify performance bottlenecks in workflows by analyzing where time is being spent. The nested stack option provides detailed analysis identifying nested bottlenecks like tool calls inside other tool calls, which is more comprehensive than simple_stack. This analysis helps developers understand workflow execution patterns through visualizations like Gantt charts, enabling targeted optimization efforts on the actual performance bottlenecks.'
  },
  {
    id: 'q7',
    question: 'In the context of AIQ toolkit evaluation, what does the RAGAS ContextRelevance metric evaluate?',
    options: [
      'Whether the final answer matches the expected ground truth',
      'The relevance of the context retrieved by the workflow against the question',
      'The grammatical correctness of the generated response',
      'The computational efficiency of the retrieval algorithm'
    ],
    correctAnswer: 1,
    explanation: 'The ContextRelevance metric from RAGAS evaluates the relevance of the context retrieved by the workflow against the original question. This is distinct from AnswerAccuracy (which evaluates the final answer against ground truth) and ResponseGroundedness (which evaluates if the response is grounded in the retrieved context). ContextRelevance specifically assesses whether the retrieval component of a RAG workflow is fetching relevant information for the given question.'
  },
  {
    id: 'q8',
    question: 'What is the recommended approach for declaring dependencies on AIQ toolkit packages for production deployment?',
    options: [
      'Always use the exact full version number (e.g., 1.0.0)',
      'Use the first two digits of the version number (e.g., 1.0)',
      'Use wildcards to always get the latest version',
      'Pin to the major version only (e.g., 1.*)'
    ],
    correctAnswer: 1,
    explanation: 'The documentation recommends using the first two digits of the version number when declaring dependencies. For example, if the version is 1.0.0, the dependency would be specified as 1.0 (using ~=1.0 or ==1.0.*). This approach balances stability with receiving patch updates, following semantic versioning principles where the first two digits indicate API compatibility while allowing patch-level updates.'
  },
  {
    id: 'q9',
    question: 'What distinguishes AIQ toolkit\'s Trajectory evaluator from RAGAS-based evaluators?',
    options: [
      'Trajectory evaluator uses the workflow\'s intermediate steps rather than just final outputs',
      'Trajectory evaluator doesn\'t require a judge LLM',
      'Trajectory evaluator only works with specific frameworks',
      'Trajectory evaluator measures execution speed rather than accuracy'
    ],
    correctAnswer: 0,
    explanation: 'The Trajectory evaluator is unique in that it evaluates the workflow trajectory using the intermediate steps generated during workflow execution, rather than just evaluating the final output. It uses a judge LLM to evaluate the trajectory based on the tools available to the workflow, providing insights into whether the workflow took appropriate reasoning paths and made good tool selection decisions, not just whether the final answer was correct.'
  },
  {
    id: 'q10',
    question: 'What is the purpose of the concurrency_spike_analysis feature in AIQ toolkit profiling?',
    options: [
      'It optimizes parallel execution of multiple workflows',
      'It identifies spikes where the number of concurrent running functions exceeds a specified threshold',
      'It automatically scales infrastructure based on load',
      'It prevents deadlocks in multi-threaded applications'
    ],
    correctAnswer: 1,
    explanation: 'Concurrency spike analysis identifies instances where the number of concurrent running functions reaches or exceeds a specified threshold (e.g., spike_threshold: 7). These spikes are surfaced to users in the workflow profiling report. This information helps developers understand workflow behavior under different load conditions and identify potential concurrency-related performance issues or resource contention problems that might occur at scale.'
  },
  {
    id: 'q11',
    question: 'How does AIQ toolkit\'s observability module integrate with existing monitoring infrastructure?',
    options: [
      'It requires proprietary NVIDIA monitoring tools exclusively',
      'It uses OpenTelemetry format, making it compatible with any OpenTelemetry-compatible observability tool',
      'It only supports console and file logging',
      'It requires custom adapters for each monitoring platform'
    ],
    correctAnswer: 1,
    explanation: 'The AIQ toolkit Observability Module translates usage statistics into OpenTelemetry format, making it compatible with any OpenTelemetry-compatible observability tool. The documentation specifically mentions examples using Phoenix and W&B Weave. This OpenTelemetry-based approach ensures broad compatibility with the observability ecosystem without locking users into specific vendor solutions, while maintaining the flexibility to use specialized tools as needed.'
  },
  {
    id: 'q12',
    question: 'What is the key advantage of AIQ toolkit\'s reusability principle for enterprise development?',
    options: [
      'It reduces licensing costs for production deployments',
      'Components exist as function calls that work together, allowing you to build once and reuse in different scenarios',
      'It automatically generates documentation for all workflows',
      'It eliminates the need for testing in different environments'
    ],
    correctAnswer: 1,
    explanation: 'The reusability principle means that every agent, tool, and agentic workflow exists as a function call that works together in complex software applications. The composability between these agents, tools, and workflows allows developers to build components once and reuse them in different scenarios. This significantly accelerates development and reduces maintenance burden compared to building isolated, non-reusable components for each use case.'
  },
  {
    id: 'q13',
    question: 'When evaluating remote workflows using AIQ toolkit, where does the evaluation actually occur?',
    options: [
      'All processing happens on the remote server',
      'The workflow runs on the remote server but evaluation is performed locally',
      'Everything runs locally regardless of the endpoint setting',
      'Evaluation is distributed across both local and remote servers'
    ],
    correctAnswer: 1,
    explanation: 'When using the aiq eval command with the --endpoint flag, the workflow execution happens on the remote server specified in the endpoint configuration, but the evaluation itself is performed on the local server. This separation allows for flexible deployment where compute-intensive workflow execution can happen on specialized infrastructure while evaluation and analysis can be done locally, enabling developers to evaluate production or staging systems without needing local copies of all resources.'
  },
  {
    id: 'q14',
    question: 'What information does AIQ toolkit\'s workflow_runtime_forecast feature provide?',
    options: [
      'The maximum possible runtime under worst-case conditions',
      'The expected workflow runtime based on historical execution patterns',
      'The minimum hardware requirements for the workflow',
      'The optimal batch size for maximum throughput'
    ],
    correctAnswer: 1,
    explanation: 'The workflow_runtime_forecast computes the expected runtime of the workflow based on the runtime of previous queries. This forecasting uses time-series style models (linear, random forest, etc.) to predict future performance. This client-side forecasting provides workflow-specific predictions that would be difficult or impossible to achieve server-side, helping with capacity planning and enabling developers to set realistic performance expectations.'
  },
  {
    id: 'q15',
    question: 'According to the AIQ toolkit documentation, which judge LLM is ranked highest for RAGAS evaluation metrics?',
    options: [
      'meta/llama-3.1-70b-instruct',
      'meta/llama-3.3-70b-instruct',
      'mistralai/mixtral-8x22b-instruct-v0.1',
      'mistralai/mixtral-8x7b-instruct-v0.1'
    ],
    correctAnswer: 2,
    explanation: 'The documentation provides a leadership board for judge LLMs where mistralai/mixtral-8x22b-instruct-v0.1 is listed as #1, followed by mixtral-8x7b-instruct-v0.1 (#2), llama-3.1-70b-instruct (#3), and llama-3.3-70b-instruct (#4). The choice of judge LLM significantly impacts evaluation quality since it\'s responsible for accurately assessing generated outputs and retrieved context. Using a higher-ranked judge LLM generally provides more reliable evaluation results for RAGAS metrics.'
  }
];

