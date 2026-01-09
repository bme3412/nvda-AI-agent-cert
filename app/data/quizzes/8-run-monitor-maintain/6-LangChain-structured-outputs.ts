import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How does LangChain\'s tool integration framework extend agent capabilities?',
    options: [
      'By providing automatic tool generation that creates optimal implementations without manual development',
      'Through function calling mechanisms invoking external systems, APIs, or custom logic beyond language generation',
      'By eliminating all external dependencies through comprehensive built-in functionality',
      'Through universal compatibility ensuring identical tool behavior across all deployment environments'
    ],
    correctAnswer: 1,
    explanation: 'Tool integration framework enables agents to extend capabilities beyond language generation through function calling mechanisms invoking external systems, APIs, or custom logic, with tool abstraction providing consistent interfaces for defining callable functions and automatic schema generation.'
  },
  {
    id: 'q2',
    question: 'What architectural modularity advantages stem from LangChain\'s layered approach?',
    options: [
      'Universal compatibility ensuring identical behavior across all agent implementations and deployments',
      'Separation enabling developers to leverage appropriate abstraction levels matching specific requirements',
      'Automatic optimization that eliminates need for manual configuration across different use cases',
      'Complete elimination of complexity through advanced automation and intelligent algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Architectural modularity advantages stem from separation between high-level agent abstractions and low-level orchestration enabling developers to leverage appropriate abstraction levels, with simple applications benefiting from pre-built agents while complex scenarios access LangGraph primitives for fine-grained control.'
  },
  {
    id: 'q3',
    question: 'How does LangSmith observability integration benefit production deployments?',
    options: [
      'Through automatic performance optimization that eliminates need for manual monitoring and analysis',
      'By providing visibility including trace visualization, state transition capture, and runtime metrics',
      'Through universal monitoring that works identically across all agent types without configuration',
      'By eliminating all observability requirements through advanced automation and error prevention'
    ],
    correctAnswer: 1,
    explanation: 'Observability integration through LangSmith provides visibility into agent execution including trace visualization revealing execution paths, state transition capture exposing decision points, and runtime metrics quantifying performance characteristics, proving essential for debugging and optimization.'
  },
  {
    id: 'q4',
    question: 'What does model capability discovery enable for applications?',
    options: [
      'Automatic model optimization that improves performance without manual configuration requirements',
      'Querying supported features, constraints, and characteristics before invocation for adaptive behavior',
      'Universal compatibility ensuring identical capabilities across all model providers and implementations',
      'Elimination of all model-specific considerations through advanced abstraction algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Model capability discovery enables applications to query supported features, constraints, and characteristics before invocation, including supported modalities, maximum context lengths, and available features, enabling applications to adapt behavior based on model capabilities and select appropriate models for specific tasks.'
  },
  {
    id: 'q5',
    question: 'How does configuration management simplify deployment flexibility?',
    options: [
      'Through automatic configuration generation that eliminates manual setup requirements',
      'By centralizing model selection, parameter specification, and credential handling with deployment-specific separation',
      'Through universal configurations that work identically across all deployment environments',
      'By eliminating all configuration requirements through intelligent automation and optimization'
    ],
    correctAnswer: 1,
    explanation: 'Configuration management centralizes model selection, parameter specification, and credential handling, with configuration abstractions separating deployment-specific details from application logic and enabling environment-specific model selection without code changes.'
  },
  {
    id: 'q6',
    question: 'What does the tool ecosystem provide for agent development acceleration?',
    options: [
      'Universal tools that work identically for all possible use cases without customization',
      'Pre-built integrations for search engines, databases, APIs, and computational tools eliminating custom implementation',
      'Automatic tool generation that creates optimal implementations without manual development effort',
      'Complete elimination of external integration requirements through comprehensive built-in functionality'
    ],
    correctAnswer: 1,
    explanation: 'Tool ecosystem provides pre-built integrations for common external systems including search engines, databases, APIs, and computational tools, accelerating development by eliminating custom integration implementation and demonstrating integration patterns for custom tools.'
  },
  {
    id: 'q7',
    question: 'How does message formatting handle provider diversity?',
    options: [
      'Through universal formats that work identically across all model providers without adaptation',
      'By structuring conversation history and instructions into formats consumable by language models with transparent translation',
      'Through automatic format optimization that improves performance without manual configuration',
      'By eliminating all format considerations through advanced standardization algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Message formatting structures conversation history, tool results, and system instructions into formats consumable by language models, with abstraction layer handling format variations transparently enabling applications to specify messages in standard structures automatically translated to provider-preferred formats.'
  },
  {
    id: 'q8',
    question: 'What does context management balance for multi-step agent execution?',
    options: [
      'Universal context handling that works identically across all agent types without optimization',
      'Context richness supporting informed decision making against token consumption affecting costs and latency',
      'Automatic context optimization that eliminates need for manual management decisions',
      'Complete context elimination through advanced algorithms that maintain performance without memory'
    ],
    correctAnswer: 1,
    explanation: 'Context management determines what information propagates through multi-step agent execution, with management strategies balancing context richness supporting informed decision making against token consumption affecting costs and latency, proving essential for maintaining coherent multi-turn interactions.'
  },
  {
    id: 'q9',
    question: 'Why do pre-built agent patterns accelerate development?',
    options: [
      'Through automatic customization that adapts to requirements without manual configuration',
      'By providing template implementations requiring configuration rather than complete implementation',
      'Through universal patterns that work optimally for all possible use cases',
      'By eliminating all implementation requirements through advanced automation algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Pre-built agent patterns provide template implementations for common agent architectures including reasoning-action loops and tool-using agents, accelerating development by providing working starting points requiring configuration rather than complete implementation and demonstrating best practices.'
  },
  {
    id: 'q10',
    question: 'How does persistence mechanism abstraction benefit agent implementations?',
    options: [
      'Through universal persistence that works identically across all storage systems without configuration',
      'By maintaining agent state across sessions while abstracting storage concerns from implementations',
      'Through automatic persistence optimization that improves performance without manual management',
      'By eliminating all persistence requirements through advanced memory algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Persistence mechanisms maintain agent state across sessions enabling conversation continuity and task resumption after interruptions, with persistence abstracting storage concerns from agent implementations while proving essential for conversational applications requiring memory of previous interactions.'
  },
  {
    id: 'q11',
    question: 'What does ecosystem integration enable for framework capabilities?',
    options: [
      'Universal compatibility ensuring identical behavior across all possible plugins and extensions',
      'Extension through plugins, extensions, and tool integrations contributed by community or maintained officially',
      'Automatic integration that eliminates need for manual plugin development and maintenance',
      'Complete self-sufficiency eliminating need for external ecosystem contributions'
    ],
    correctAnswer: 1,
    explanation: 'Ecosystem integration extends framework capabilities through plugins, extensions, and tool integrations contributed by community or maintained officially, with ecosystem growth increasing framework utility through broader tool coverage and demonstrating usage patterns through example implementations.'
  },
  {
    id: 'q12',
    question: 'How do backward compatibility considerations balance framework evolution?',
    options: [
      'Through universal compatibility ensuring all changes work with existing applications',
      'By balancing enabling improvements against preserving existing application functionality through versioning and compatibility layers',
      'Through automatic migration that updates applications without manual intervention',
      'By preventing all breaking changes through advanced compatibility algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Backward compatibility considerations balance enabling improvements against preserving existing application functionality, with evolution strategies employing versioning, deprecation periods, and compatibility layers balancing progress against stability while minimizing costs on users requiring code updates.'
  },
  {
    id: 'q13',
    question: 'What integration flexibility benefits result from LangChain\'s architecture?',
    options: [
      'Universal integration ensuring identical behavior across all external systems and frameworks',
      'Provider-agnostic abstractions, extensible architecture, and framework compatibility enabling adaptation to changing requirements',
      'Automatic integration optimization that improves performance without manual configuration',
      'Complete independence eliminating need for external integrations or compatibility considerations'
    ],
    correctAnswer: 1,
    explanation: 'Integration flexibility benefits result from provider-agnostic abstractions enabling model swapping without code modifications, extensible architecture supporting custom tools alongside pre-built options, and framework compatibility allowing integration with broader ecosystems.'
  },
  {
    id: 'q14',
    question: 'How does abstraction refinement navigate framework evolution tradeoffs?',
    options: [
      'Through universal solutions that eliminate all complexity while maintaining complete functionality',
      'By balancing simplicity for common cases against flexibility for sophisticated requirements through layered architecture',
      'Through automatic evolution that adapts to requirements without manual intervention',
      'By standardizing all requirements eliminating conflicts between different use cases'
    ],
    correctAnswer: 1,
    explanation: 'Abstraction refinement balances simplicity for common cases against flexibility for sophisticated requirements, with framework evolution navigating tradeoffs through layered architecture providing simple high-level interfaces while exposing low-level primitives for advanced scenarios.'
  },
  {
    id: 'q15',
    question: 'What development velocity improvements emerge from LangChain\'s pre-built components?',
    options: [
      'Universal acceleration ensuring identical performance improvements across all development scenarios',
      'Elimination of boilerplate orchestration code, standard integration patterns, and reusable components reducing implementation effort',
      'Automatic development that eliminates need for manual coding and configuration',
      'Complete automation eliminating all development requirements through intelligent code generation'
    ],
    correctAnswer: 1,
    explanation: 'Development velocity improvements emerge from pre-built agent templates eliminating boilerplate orchestration code, standard integration patterns accelerating model and tool connectivity, and reusable components reducing implementation effort for common agent capabilities.'
  }
];