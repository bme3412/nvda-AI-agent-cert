import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How does LangChain enable model provider standardization?',
    options: [
      'Through automatic optimization that works identically across all provider implementations',
      'Through universal compatibility ensuring identical behavior regardless of provider capabilities',
      'By requiring all providers to implement identical APIs eliminating provider-specific variations',
      'By eliminating vendor-specific integration complexity through consistent interfaces abstracting API differences'
    ],
    correctAnswer: 3,
    explanation: 'Model provider standardization eliminates vendor-specific integration complexity through consistent interfaces abstracting API differences, enabling applications to interact with models through uniform patterns regardless of underlying providers and reducing integration maintenance burden.'
  },
  {
    id: 'q2',
    question: 'What does function definition mechanism accomplish for tool specification?',
    options: [
      'Automatic tool generation that creates optimal implementations without manual development',
      'Elimination of all tool configuration requirements through intelligent automation',
      'Specification of callable tools through decorators or explicit schema declarations with signatures and validation',
      'Universal tool compatibility ensuring identical behavior across all possible implementations'
    ],
    correctAnswer: 2,
    explanation: 'Function definition mechanisms specify callable tools through decorators or explicit schema declarations, with definitions including function signatures describing parameters and return types, documentation strings explaining tool purposes, and validation rules ensuring inputs meet requirements.'
  },
  {
    id: 'q3',
    question: 'How does LangChain handle complexity of model output to function call translation?',
    options: [
      'Through automatic optimization that eliminates need for manual coordination and translation logic',
      'By requiring all models to produce identical output formats eliminating translation requirements',
      'Via execution coordination managing parameter extraction, function calling, result formatting, and error handling',
      'Through universal translation that works identically across all model types and function implementations'
    ],
    correctAnswer: 2,
    explanation: 'Execution coordination manages tool invocations including parameter extraction from model outputs, function calling with appropriate arguments, result formatting for model consumption, and error handling for failed invocations, handling complexities of translating between model outputs and function calls.'
  },
  {
    id: 'q4',
    question: 'Why does streaming integration prove valuable for long-form generation?',
    options: [
      'Streaming provides universal compatibility ensuring identical behavior across all model types',
      'It eliminates all latency through advanced optimization and parallel processing',
      'Because users benefit from early access to outputs and downstream processing can begin before completion',
      'Streaming eliminates all computational overhead without affecting response quality'
    ],
    correctAnswer: 2,
    explanation: 'Streaming proves valuable for interactive applications where partial results improve perceived responsiveness, long-form generation where users benefit from early access to outputs, or scenarios where downstream processing can begin before generation completes.'
  },
  {
    id: 'q5',
    question: 'What does automatic durability eliminate for agent implementations?',
    options: [
      'Universal error handling ensuring no failures can occur during agent execution',
      'All configuration requirements through intelligent automation and optimization',
      'Manual checkpoint management reducing implementation complexity while ensuring reliability',
      'All processing requirements through advanced optimization and intelligent algorithms'
    ],
    correctAnswer: 2,
    explanation: 'Automatic durability eliminates manual checkpoint management reducing implementation complexity, proving essential for long-running tasks spanning multiple sessions, applications requiring reliability despite infrastructure failures, or workflows involving human approval where execution may pause.'
  },
  {
    id: 'q6',
    question: 'How does provider abstraction encompass integration complexity?',
    options: [
      'Through automatic optimization that improves performance without configuration',
      'By requiring all providers to implement identical interfaces eliminating abstraction needs',
      'By handling authentication mechanisms, request formatting, response parsing, and error handling across providers',
      'Through universal solutions that eliminate all provider-specific considerations'
    ],
    correctAnswer: 2,
    explanation: 'Provider abstraction layer standardizes interactions through unified interfaces, encompassing authentication mechanisms varying across providers, request formatting transforming standardized calls into provider-specific formats, response parsing normalizing outputs, and error handling translating provider-specific failures.'
  },
  {
    id: 'q7',
    question: 'What testing benefits result from response normalization?',
    options: [
      'Automatic test generation that eliminates need for manual testing development',
      'Complete elimination of testing requirements through guaranteed response consistency',
      'Predictable response structures simplifying testing and reducing conditional logic handling variations',
      'Universal testing that works identically across all model types without adaptation'
    ],
    correctAnswer: 2,
    explanation: 'Response normalization enables applications to process model outputs uniformly, simplifies testing through predictable response structures, and reduces conditional logic handling provider-specific variations, proving particularly valuable when applications support multiple providers.'
  },
  {
    id: 'q8',
    question: 'Why is automatic schema generation valuable for tool maintenance?',
    options: [
      'Automatic optimization that improves performance without manual configuration',
      'Complete elimination of schema requirements through advanced automation',
      'Reduces manual maintenance burden and ensures consistency between implementations and descriptions',
      'Universal schemas that work identically across all tool types without customization'
    ],
    correctAnswer: 2,
    explanation: 'Automatic generation reduces manual schema maintenance burden, ensures consistency between implementations and descriptions, and prevents schema drift as tool implementations evolve, producing structured descriptions of tool capabilities with parameter specifications and constraints.'
  },
  {
    id: 'q9',
    question: 'What coordination does human-in-the-loop integration provide?',
    options: [
      'Automatic decision-making that improves on human judgment without manual oversight',
      'Complete elimination of human requirements through advanced artificial intelligence',
      'State preservation during pauses and coordinated resumption after human input',
      'Universal automation that eliminates need for human intervention in all scenarios'
    ],
    correctAnswer: 2,
    explanation: 'Human-in-the-loop integration manages state preservation during pauses and coordinates resumption after human input, proving necessary for high-stakes decisions requiring judgment beyond agent capabilities and validation steps ensuring agent actions meet expectations.'
  },
  {
    id: 'q10',
    question: 'How does LangGraph foundation enable sophisticated orchestration?',
    options: [
      'Through automatic orchestration that eliminates need for manual coordination and control',
      'By requiring all agents to use identical orchestration patterns eliminating complexity',
      'By providing state management, control flow primitives, persistence mechanisms without direct low-level management',
      'Through universal orchestration that works identically across all agent types'
    ],
    correctAnswer: 2,
    explanation: 'LangGraph foundation provides underlying orchestration capabilities including state management maintaining context across multi-step execution, control flow primitives enabling conditional logic, persistence mechanisms, and execution control, enabling agent implementations to leverage sophisticated orchestration without directly managing low-level concerns.'
  },
  {
    id: 'q11',
    question: 'What performance optimization insights do empirical metrics provide?',
    options: [
      'Automatic optimization that eliminates need for manual performance analysis',
      'Complete elimination of performance issues through advanced monitoring algorithms',
      'More reliable guidance than intuition for optimization decisions through quantitative bottleneck identification',
      'Universal optimization that works identically across all deployment scenarios'
    ],
    correctAnswer: 2,
    explanation: 'Performance metrics enable performance optimization through empirical identification of bottlenecks, cost management through consumption visibility, and capacity planning through load characterization, with quantitative insights proving more reliable than intuition for optimization decisions.'
  },
  {
    id: 'q12',
    question: 'How does dynamic configuration support operational flexibility?',
    options: [
      'Through automatic configuration that eliminates need for manual setup and management',
      'By requiring identical configuration across all environments eliminating flexibility requirements',
      'By enabling dynamic configuration based on workload characteristics or availability without code changes',
      'Through universal configuration that works optimally across all deployment scenarios'
    ],
    correctAnswer: 2,
    explanation: 'Configuration management enables environment-specific model selection without code changes and supports dynamic configuration based on workload characteristics or availability, simplifying deployment across different environments and enabling operational flexibility.'
  },
  {
    id: 'q13',
    question: 'What visibility does state transition capture provide for debugging?',
    options: [
      'Automatic debugging that eliminates need for manual analysis and investigation',
      'Complete elimination of debugging requirements through advanced error prevention',
      'Exposure of decision points and reasoning processes enabling understanding of complex agent behaviors',
      'Universal monitoring that works identically across all agent implementations'
    ],
    correctAnswer: 2,
    explanation: 'State transition capture exposes decision points and provides visibility into complex agent behaviors enabling understanding of reasoning processes, identification of errors or inefficiencies, and validation of intended operations, proving essential for debugging non-trivial agents.'
  },
  {
    id: 'q14',
    question: 'Why does tool ecosystem breadth determine agent capabilities?',
    options: [
      'Through automatic capability generation that creates optimal tools without manual implementation',
      'By eliminating all external integration requirements through comprehensive built-in functionality',
      'Because pre-built integrations determine agent capabilities without custom development effort',
      'Universal tools that work identically for all possible use cases without limitation'
    ],
    correctAnswer: 2,
    explanation: 'Tool ecosystem provides pre-built integrations for common external systems, with ecosystem breadth determining agent capabilities without custom development effort, accelerating development by eliminating custom integration implementation and providing tested reliable implementations for common capabilities.'
  },
  {
    id: 'q15',
    question: 'How do evolution strategies balance progress against stability?',
    options: [
      'Through automatic migration that updates applications without manual intervention',
      'By preventing all breaking changes through advanced compatibility algorithms',
      'By employing versioning, deprecation periods, and compatibility layers balancing improvement against preservation',
      'Through universal compatibility ensuring all changes work with existing applications'
    ],
    correctAnswer: 2,
    explanation: 'Evolution strategies employ versioning, deprecation periods, and compatibility layers balancing progress against stability, with breaking changes imposing costs on users requiring code updates while compatibility constraints potentially limiting improvements addressing evolving requirements.'
  }
];