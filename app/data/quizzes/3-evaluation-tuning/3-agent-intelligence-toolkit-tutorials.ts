import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What role do workflows play in the NeMo Agent Toolkit?',
    options: [
      'Workflows form the heart of the toolkit, defining which agentic tools and models are used to perform a given task or series of tasks',
      'Workflows are optional components that only provide documentation without functional capabilities',
      'Workflows are pre-compiled binaries that cannot be customized or extended',
      'Workflows are deprecated features replaced by newer agent architectures'
    ],
    correctAnswer: 0,
    explanation: 'Workflows form the heart of the NeMo Agent Toolkit, defining which agentic tools and models are used to perform a given task or series of tasks. Understanding how to customize and extend workflows is essential for building production-ready agentic systems that meet specific organizational needs. The toolkit provides flexible mechanisms for workflow customization, tool integration, and component creation that enable developers to adapt pre-built solutions or build entirely new capabilities from scratch.'
  },
  {
    id: 'q2',
    question: 'How are workflow configuration files structured?',
    options: [
      'They are organized into distinct sections: functions define tools, llms and embedders specify models, and the workflow section ties everything together defining agent type, tools, and behavior',
      'They use a single monolithic structure without separation of concerns between components',
      'They require hardcoded values that cannot be modified without recompiling the toolkit',
      'They are binary configuration files that cannot be edited by developers'
    ],
    correctAnswer: 0,
    explanation: 'Workflow configuration files serve as the blueprint for agentic systems, specifying tools, models, and behavior through structured YAML files. These configuration files are organized into distinct sections: functions define the tools available to agents, llms and embedders specify the language models and embedding models to use, and the workflow section ties everything together, defining the agent type, which tools it can access, and how it should behave. This separation of concerns allows developers to mix and match components, swap models, and modify behavior without changing underlying code. The description fields within tool configurations are particularly important, as they instruct the language model when and how to use each tool, enabling agents to make intelligent decisions about tool selection based on context.'
  },
  {
    id: 'q3',
    question: 'What approaches are available for customizing existing workflows?',
    options: [
      'Runtime overrides for simple parameter adjustments, or copying and modifying configuration files for more substantial changes like adding tools or modifying workflow structure',
      'Only complete workflow replacement without any customization options',
      'Customization requires modifying the toolkit source code directly',
      'Customization is limited to predefined templates without flexibility'
    ],
    correctAnswer: 0,
    explanation: 'Customizing existing workflows can be accomplished through multiple approaches depending on the scope of changes needed. For simple parameter adjustments, the toolkit supports runtime overrides that allow modifying configuration values without editing files. This is particularly useful for experimentation, allowing developers to test different model temperatures, switch between model variants, or adjust retry limits on the fly. For more substantial changes, such as adding new tools or modifying workflow structure, developers can copy and modify configuration files to create customized versions. This approach maintains the original workflow as a reference while enabling iterative development of specialized variants.'
  },
  {
    id: 'q4',
    question: 'How can tools be added to workflows to expand agent capabilities?',
    options: [
      'Multiple built-in tools can be integrated into any workflow, covering common use cases like web page querying, internet search, date and time retrieval, and document processing, with support for multiple tool instances',
      'Tools are hardcoded and cannot be added or modified after workflow creation',
      'Only custom tools developed from scratch can be added, with no built-in tool support',
      'Tool addition requires complete workflow redesign and cannot be done incrementally'
    ],
    correctAnswer: 0,
    explanation: 'Adding tools to workflows expands agent capabilities by providing access to additional data sources, APIs, or computational resources. The toolkit includes numerous built-in tools that can be integrated into any workflow, covering common use cases like web page querying, internet search, date and time retrieval, and document processing. When a workflow needs to access information from multiple sources, developers can add multiple tool instances, each configured to query different data sources. For example, a workflow might include separate tools for querying different documentation sites, or combine a web search tool with specific knowledge base query tools to provide both broad and focused information retrieval capabilities.'
  },
  {
    id: 'q5',
    question: 'What is the process for creating new tools in the toolkit?',
    options: [
      'The toolkit provides automated scaffolding that generates necessary file structure, configuration objects, and registration code, following established conventions for seamless integration',
      'Tool creation requires manual implementation of all components without any scaffolding or automation support',
      'New tools can only be created by NVIDIA and cannot be developed by users',
      'Tool creation requires specialized hardware and cannot be done in standard development environments'
    ],
    correctAnswer: 0,
    explanation: 'Creating new tools extends the toolkit\'s capabilities by enabling integration with custom data sources, proprietary APIs, or specialized processing logic. The toolkit provides automated scaffolding that generates the necessary file structure, configuration objects, and registration code for new tools. This scaffolding follows established conventions that ensure new tools integrate seamlessly with the toolkit\'s discovery, configuration, and execution systems. Tool implementations typically involve defining a configuration object that specifies parameters like data source locations, processing options, and descriptions, then implementing the tool function that performs the actual work.'
  },
  {
    id: 'q6',
    question: 'What role do configuration objects play in tool implementation?',
    options: [
      'They serve as the interface between workflow configuration files and tool implementations, defining parameters, validation, field types, default values, and descriptions for both programmatic validation and developer discovery',
      'They are optional components that don\'t affect tool functionality',
      'They are automatically generated and cannot be customized by developers',
      'They only provide documentation without affecting tool behavior'
    ],
    correctAnswer: 0,
    explanation: 'Configuration objects serve as the interface between workflow configuration files and tool implementations, defining what parameters can be set and how they\'re validated. These objects inherit from base configuration classes and specify field types, default values, and descriptions that enable both programmatic validation and developer discovery. The name parameter in configuration objects must match the type identifier used in workflow configuration files, creating a clear connection between configuration and implementation. Field descriptions are particularly important as they appear in component discovery tools, helping developers understand available options without inspecting source code.'
  },
  {
    id: 'q7',
    question: 'What different agent types are available in the toolkit and how do they differ?',
    options: [
      'ReAct agents combine reasoning and action iteratively, reasoning agents add explicit planning phases, ReWOO agents use planning-execution-solution pattern, and tool-calling agents provide direct function invocation',
      'Only a single agent type is available without variations or customization options',
      'Agent types are proprietary and cannot be configured or customized',
      'Agent types differ only in performance characteristics without functional differences'
    ],
    correctAnswer: 0,
    explanation: 'Workflow configuration ties together all components into a cohesive agentic system. The workflow section specifies the agent type, which determines the reasoning and execution pattern used. Different agent types are optimized for different scenarios: ReAct agents combine reasoning and action in an iterative loop, reasoning agents add explicit planning phases before execution, ReWOO agents use a planning-execution-solution pattern for complex multi-step tasks, and tool-calling agents provide direct function invocation capabilities. Each agent type has configurable options that control behavior like verbosity, retry logic, maximum iterations, and error handling strategies.'
  },
  {
    id: 'q8',
    question: 'How does package management work in the toolkit?',
    options: [
      'Each workflow or tool is an installable package using standard Python packaging, with pyproject.toml defining metadata, dependencies, and entry points that enable automatic discovery and registration',
      'Packages are managed through proprietary NVIDIA systems without standard Python packaging support',
      'Package management requires manual installation and configuration without automation',
      'Packages cannot be versioned or distributed independently'
    ],
    correctAnswer: 0,
    explanation: 'Package management and distribution are handled through standard Python packaging mechanisms, with each workflow or tool being an installable package. The pyproject.toml file defines package metadata, dependencies, and entry points that enable the toolkit to discover and register components. Dependencies must specify the appropriate toolkit version and any required framework plugins, ensuring compatibility across different environments. Entry points tell the toolkit where to find component registration code, enabling automatic discovery when packages are installed. This packaging approach allows workflows and tools to be developed independently, versioned appropriately, and distributed through standard Python package repositories or internal artifact stores.'
  },
  {
    id: 'q9',
    question: 'What is the component discovery system and how does it help developers?',
    options: [
      'It enables developers to explore available tools, models, and workflows without inspecting source code, providing information about component types, parameters, default values, and descriptions',
      'It requires manual code inspection to discover available components',
      'It only works for built-in components and cannot discover custom extensions',
      'It provides only basic component names without detailed information'
    ],
    correctAnswer: 0,
    explanation: 'The toolkit\'s component discovery system enables developers to explore available tools, models, and workflows without inspecting source code. Discovery tools provide information about component types, available parameters, default values, and descriptions, significantly improving developer velocity by reducing the need to read documentation or examine implementations. This discovery mechanism works for both built-in components and custom extensions, as long as components follow the toolkit\'s registration and configuration conventions. The system aggregates metadata from all installed packages, creating a comprehensive catalog of available capabilities.'
  },
  {
    id: 'q10',
    question: 'What is the recommended workflow development process?',
    options: [
      'An iterative pattern: start with existing examples or templates, customize configuration, add or modify tools, test with sample inputs, refine based on results, and deploy to production',
      'A waterfall approach requiring complete specification before any development begins',
      'A process that requires starting from scratch without using existing examples or templates',
      'A process limited to prototyping without production deployment capabilities'
    ],
    correctAnswer: 0,
    explanation: 'The workflow development process follows an iterative pattern: start with existing examples or templates, customize configuration to match requirements, add or modify tools as needed, test with sample inputs, refine based on results, and deploy to production. This process is supported by the toolkit\'s flexible configuration system, comprehensive tooling, and extensive documentation. The combination of pre-built components, customization mechanisms, and extension capabilities enables teams to move quickly from initial prototypes to production deployments while maintaining the flexibility to adapt as requirements evolve.'
  }
];
