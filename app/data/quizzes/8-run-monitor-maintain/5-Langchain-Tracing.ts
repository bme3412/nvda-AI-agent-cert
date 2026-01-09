import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is LangChain and how does it enable rapid agent development?',
    options: [
      'A deployment platform for scaling machine learning models across distributed infrastructure',
      'Open-source framework providing pre-built agent architectures and model integrations enabling rapid autonomous application development',
      'A security system for protecting large language models from unauthorized access and malicious attacks',
      'A data preprocessing toolkit for preparing training datasets for natural language processing applications'
    ],
    correctAnswer: 1,
    explanation: 'LangChain represents open-source framework providing pre-built agent architectures and model integrations enabling rapid development of autonomous applications powered by large language models, abstracting complexities through standardized interfaces and reusable components.'
  },
  {
    id: 'q2',
    question: 'How does the model integration layer provide vendor independence?',
    options: [
      'Through automatic performance optimization that works identically across all model providers',
      'By providing unified interface eliminating vendor lock-in through seamless model swapping without code modifications',
      'Through universal compatibility ensuring identical behavior regardless of specific provider capabilities',
      'By automatically negotiating optimal pricing and terms with all supported model providers'
    ],
    correctAnswer: 1,
    explanation: 'Model integration layer provides unified interface across diverse LLM providers, with provider abstraction eliminating vendor lock-in by enabling seamless model swapping without application code modifications and standardizing interaction patterns across different provider APIs.'
  },
  {
    id: 'q3',
    question: 'What capabilities does LangGraph foundation provide for agent orchestration?',
    options: [
      'Only basic workflow management without advanced features for production deployments',
      'State management, control flow primitives, persistence mechanisms, and execution control supporting streaming and human intervention',
      'Exclusively real-time processing without support for durable or long-running operations',
      'Universal compatibility ensuring identical behavior across all deployment environments and configurations'
    ],
    correctAnswer: 1,
    explanation: 'LangGraph foundation provides underlying orchestration capabilities including state management maintaining context across multi-step execution, control flow primitives enabling conditional logic, persistence mechanisms surviving process interruptions, and execution control supporting streaming and human intervention.'
  },
  {
    id: 'q4',
    question: 'How do durable execution capabilities ensure agent reliability?',
    options: [
      'Through automatic error correction that prevents all possible failures from occurring',
      'By ensuring agents survive process interruptions through automatic state persistence and resumption',
      'Through universal compatibility ensuring identical behavior regardless of infrastructure failures',
      'By eliminating all processing interruptions through advanced optimization and resource management'
    ],
    correctAnswer: 1,
    explanation: 'Durable execution capabilities ensure agents survive process interruptions through automatic state persistence and resumption, proving essential for long-running tasks spanning multiple sessions, applications requiring reliability despite infrastructure failures, or workflows involving human approval.'
  },
  {
    id: 'q5',
    question: 'What advantages does streaming support provide for interactive applications?',
    options: [
      'Elimination of all computational overhead without affecting response quality or accuracy',
      'Incremental response delivery as generation progresses improving perceived responsiveness',
      'Universal compatibility ensuring identical streaming behavior across all model types',
      'Automatic optimization that reduces resource consumption without manual configuration'
    ],
    correctAnswer: 1,
    explanation: 'Streaming support enables incremental response delivery as generation progresses rather than waiting for complete outputs, proving valuable for interactive applications where partial results improve perceived responsiveness and long-form generation where users benefit from early access.'
  },
  {
    id: 'q6',
    question: 'How does human-in-the-loop integration enable approval workflows?',
    options: [
      'Through automatic decision-making that eliminates need for human oversight in all scenarios',
      'By enabling execution pauses for user input before proceeding with state preservation during pauses',
      'Through universal automation that handles all possible scenarios without human intervention',
      'By providing real-time guidance that prevents any decisions requiring human approval'
    ],
    correctAnswer: 1,
    explanation: 'Human-in-the-loop integration enables approval workflows where execution pauses for user input before proceeding, managing state preservation during pauses and coordinating resumption after human input, proving necessary for high-stakes decisions requiring judgment beyond agent capabilities.'
  },
  {
    id: 'q7',
    question: 'What does provider abstraction layer accomplish for LLM integration?',
    options: [
      'Automatic performance optimization that works identically across all provider implementations',
      'Standardization of interactions hiding provider-specific API differences through unified interfaces',
      'Universal compatibility ensuring identical behavior regardless of specific provider capabilities',
      'Elimination of all provider-specific requirements through advanced compatibility algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Provider abstraction layer standardizes interactions with diverse LLM providers through unified interfaces hiding provider-specific API differences, encompassing authentication mechanisms, request formatting, response parsing, and error handling translating provider-specific failures into standard exceptions.'
  },
  {
    id: 'q8',
    question: 'How does response normalization benefit multi-provider applications?',
    options: [
      'Through automatic response optimization that improves quality without manual configuration',
      'By ensuring consistent output structures despite provider variations in response formats and metadata',
      'Through universal compatibility ensuring identical responses regardless of provider differences',
      'By eliminating all provider-specific variations through advanced standardization algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Response normalization ensures consistent output structures despite provider variations in response formats, metadata inclusion, or streaming protocols, enabling applications to process model outputs uniformly and reducing conditional logic handling provider-specific variations.'
  },
  {
    id: 'q9',
    question: 'What does automatic schema generation accomplish for tool integration?',
    options: [
      'Universal tool compatibility ensuring identical behavior across all possible tool types',
      'Structured descriptions of tool capabilities consumable by language models with parameter specifications and constraints',
      'Automatic tool optimization that improves performance without manual configuration requirements',
      'Elimination of all tool configuration requirements through intelligent automation algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Schema generation automatically produces structured descriptions of tool capabilities consumable by language models, including parameter specifications, type information, usage examples, and constraints, reducing manual schema maintenance burden and ensuring consistency between implementations.'
  },
  {
    id: 'q10',
    question: 'How does execution coordination manage tool invocations?',
    options: [
      'Through automatic optimization that eliminates need for manual coordination across tool executions',
      'By managing parameter extraction, function calling, result formatting, and error handling for failed invocations',
      'Through universal compatibility ensuring identical behavior across all tool types and implementations',
      'By eliminating all tool invocation complexity through advanced automation and intelligent algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Execution coordination manages tool invocations including parameter extraction from model outputs, function calling with appropriate arguments, result formatting for model consumption, and error handling for failed invocations, handling complexities of translating between model outputs and function calls.'
  },
  {
    id: 'q11',
    question: 'Why does system prompt configuration prove critical for agent effectiveness?',
    options: [
      'Prompts provide automatic optimization that improves performance without manual tuning requirements',
      'Because instructions fundamentally determine reasoning patterns, tool usage strategies, and output characteristics',
      'System prompts eliminate all configuration requirements through intelligent automation algorithms',
      'Prompts ensure universal compatibility across all model types without provider-specific considerations'
    ],
    correctAnswer: 1,
    explanation: 'System prompt configuration establishes agent behavior, constraints, and objectives through instructions included with every model invocation, with prompt engineering proving critical as instructions fundamentally determine reasoning patterns, tool usage strategies, and output characteristics.'
  },
  {
    id: 'q12',
    question: 'What does execution tracing capture for agent observability?',
    options: [
      'Only high-level performance metrics without detailed visibility into agent decision-making processes',
      'Detailed records including model invocations, tool calls, decision points, and state transitions',
      'Universal monitoring that works identically across all agent types without configuration requirements',
      'Basic logging information without sophisticated analysis capabilities for complex debugging'
    ],
    correctAnswer: 1,
    explanation: 'Execution tracing captures detailed records of agent execution including model invocations, tool calls, decision points, and state transitions, providing visibility into complex agent behaviors enabling understanding of reasoning processes and identification of errors or inefficiencies.'
  },
  {
    id: 'q13',
    question: 'How does state visualization aid in agent debugging?',
    options: [
      'Through automatic error correction that eliminates need for manual debugging processes',
      'By presenting agent internal state revealing context evolution, intermediate results, and decision factors',
      'Through universal compatibility ensuring identical visualization across all agent implementations',
      'By eliminating all debugging requirements through advanced optimization and error prevention'
    ],
    correctAnswer: 1,
    explanation: 'State visualization presents agent internal state throughout execution revealing context evolution, intermediate results, and decision factors, aiding debugging by exposing what agents consider during decision making and supporting optimization by revealing unnecessary state or missing information.'
  },
  {
    id: 'q14',
    question: 'What performance insights do runtime metrics provide?',
    options: [
      'Only basic timing information without detailed analysis capabilities for optimization purposes',
      'Latency breakdowns across components, token consumption tracking costs, and throughput measurements',
      'Universal performance data that applies identically across all deployment scenarios and environments',
      'Automatic optimization recommendations without manual analysis or interpretation requirements'
    ],
    correctAnswer: 1,
    explanation: 'Performance metrics quantify execution characteristics including latency breakdowns across components, token consumption tracking costs, and throughput measurements for concurrent operations, enabling performance optimization through empirical identification of bottlenecks and cost management through consumption visibility.'
  },
  {
    id: 'q15',
    question: 'How does framework evolution balance competing requirements?',
    options: [
      'Through universal solutions that eliminate all complexity while maintaining full functionality',
      'By navigating tradeoff through layered architecture providing simple interfaces while exposing low-level primitives',
      'Through automatic evolution that adapts to requirements without manual intervention or configuration',
      'By standardizing all requirements to eliminate conflicts between different use cases'
    ],
    correctAnswer: 1,
    explanation: 'Framework evolution navigates tradeoff between simplicity for common cases against flexibility for sophisticated requirements through layered architecture providing simple high-level interfaces while exposing low-level primitives for advanced scenarios, balancing ease of use against capability.'
  }
];