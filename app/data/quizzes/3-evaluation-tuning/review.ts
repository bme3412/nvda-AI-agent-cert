import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the fundamental challenge in evaluating and tuning agentic AI systems?',
    options: [
      'The autonomous nature of agentic systems introduces variability through autonomous decision-making, non-deterministic outputs, and continuous adaptation, requiring sophisticated evaluation approaches',
      'The lack of available tools and frameworks for measuring agent performance',
      'The high cost of deploying agents makes evaluation prohibitively expensive',
      'The deterministic nature of agents makes evaluation unnecessary'
    ],
    correctAnswer: 0,
    explanation: 'Evaluation and tuning represent the critical disciplines of understanding, measuring, and improving agentic AI systems as they transition from experimental prototypes to production deployments. Unlike traditional software where behavior is deterministic and predictable, agentic AI systems introduce complexity through autonomous decision-making, non-deterministic outputs, and continuous adaptation. This domain focuses on transforming agents from "black boxes" with opaque reasoning into "glass boxes" that provide transparency, enabling trust, optimization, and reliable operation at scale. The fundamental challenge lies in the autonomous nature of agentic systems. Traditional AI operates on simple input-output patterns where you can test specific inputs and verify outputs. Agentic AI systems, however, make autonomous decisions about how to achieve goals, which tools to use, and what information to gather. This autonomy introduces variability that requires sophisticated evaluation approaches combining offline testing with online monitoring, quantitative metrics with qualitative assessment, and automated evaluation with human judgment.'
  },
  {
    id: 'q2',
    question: 'What role does observability play in evaluation and tuning?',
    options: [
      'Observability is optional and only useful for debugging, not for evaluation or tuning',
      'Observability forms the foundation of effective evaluation and tuning, providing visibility into agent behavior through traces and spans that enable diagnosing issues, optimizing performance, and ensuring reliability',
      'Observability is only relevant for offline evaluation, not for production monitoring',
      'Observability requires replacing existing frameworks and cannot work with current agent implementations'
    ],
    correctAnswer: 1,
    explanation: 'Observability forms the foundation of effective evaluation and tuning. Without visibility into agent behavior, diagnosing issues, optimizing performance, and ensuring reliability becomes nearly impossible. Observability tools capture traces representing complete agent tasks and spans representing individual steps, creating hierarchical structures that reveal exactly what happened at each stage of execution. This visibility enables teams to identify bottlenecks, understand decision-making processes, and build trust through transparency. Observability transforms AI agents from opaque systems where internal state and reasoning are invisible into transparent systems that provide the visibility needed for trust, debugging, and optimization.'
  },
  {
    id: 'q3',
    question: 'What is the NVIDIA NeMo Agent Toolkit and what makes it unique?',
    options: [
      'A proprietary agent framework that requires replacing existing frameworks with NVIDIA-specific implementations',
      'A language model training platform exclusively for NVIDIA-developed agent architectures',
      'A framework-agnostic observability and evaluation toolkit that works alongside any agent framework without requiring rebuilds or framework lock-in, previously known as Agent Intelligence Toolkit or AIQ',
      'A deployment orchestration system that only works with NVIDIA hardware infrastructure'
    ],
    correctAnswer: 2,
    explanation: 'The NVIDIA NeMo Agent Toolkit (formerly Agent Intelligence Toolkit or AIQ) represents a paradigm shift in agent development tooling, providing framework-agnostic observability and evaluation that works alongside any agent framework without requiring rebuilds or framework lock-in. Whether you\'re using LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, Google ADK, Strands Agents, custom enterprise frameworks, or simple Python agents, the toolkit complements existing technology stacks without forcing replatforming. The toolkit also supports deploying agents securely on Amazon Bedrock AgentCore runtime, expanding deployment options for enterprise environments.'
  },
  {
    id: 'q4',
    question: 'What are traces and spans in observability?',
    options: [
      'Traces are error logs and spans are performance metrics',
      'Traces are user interactions and spans are agent responses',
      'Traces are data storage units and spans are processing units',
      'Traces represent complete agent tasks from start to finish, while spans are individual steps within that trace, creating hierarchical structures that reveal execution details'
    ],
    correctAnswer: 3,
    explanation: 'Traces and spans form the core data structures of observability. A trace represents a complete agent task from start to finish, like handling a user query or executing a multi-step workflow. Spans are the individual steps within that trace, such as calling a language model, retrieving data from a vector database, or invoking a tool. This hierarchical structure allows teams to understand exactly what happened at each stage of an agent\'s execution, providing the granularity needed to diagnose problems and optimize performance.'
  },
  {
    id: 'q5',
    question: 'What are the two complementary categories of agent evaluation?',
    options: [
      'Offline evaluation using test datasets in controlled settings, and online evaluation in live production environments monitoring real user interactions',
      'Automated evaluation and manual evaluation',
      'Quantitative evaluation and qualitative evaluation',
      'Development evaluation and production evaluation'
    ],
    correctAnswer: 0,
    explanation: 'Agent evaluation is the process of analyzing observability data and performing tests to determine how well an AI agent is performing and how it can be improved. Regular evaluation is important because AI agents are often non-deterministic and can evolve through updates or drifting model behavior—without evaluation, you wouldn\'t know if your agent is actually doing its job well or if it has regressed. There are two complementary categories: offline evaluation and online evaluation. Offline evaluation involves evaluating the agent in a controlled setting using test datasets rather than live user queries. Online evaluation refers to evaluating the agent in live, real-world environments during actual usage in production. These two evaluation approaches are highly complementary rather than mutually exclusive.'
  },
  {
    id: 'q6',
    question: 'What is the key difference between agentic AI and traditional AI?',
    options: [
      'Agentic AI only works with NVIDIA hardware while traditional AI works on any platform',
      'Agentic AI has autonomy and goal-orientation, with the independence to seek out additional information and context to make better decisions, while traditional AI is rule- and logic-based with predefined tasks',
      'Agentic AI requires more data storage than traditional AI',
      'Agentic AI is faster but less accurate than traditional AI'
    ],
    correctAnswer: 1,
    explanation: 'The key difference between agentic AI and traditional AI lies in autonomy and goal-orientation. Traditional AI systems are rule- and logic-based, taking in data, processing it, and producing output for predefined tasks. Agentic AI, by contrast, has the independence to seek out additional information and context to make better decisions. This ability to autonomously gather relevant context and make nuanced decisions is what sets agentic AI apart. Agentic AI represents the next evolution beyond generative AI, moving from simple one-step prompt-and-response interactions to complex multi-step processes where AI systems interact with different platforms to achieve desired outcomes.'
  },
  {
    id: 'q7',
    question: 'What are the major challenges in agentic AI adoption?',
    options: [
      'Only technical implementation challenges without organizational or security concerns',
      'Exclusively cost-related challenges without technical or security considerations',
      'Model logic and critical thinking requirements, reliability and predictability concerns, data privacy and security risks, and data quality and relevancy challenges',
      'Only deployment challenges without development or operational concerns'
    ],
    correctAnswer: 2,
    explanation: 'Agentic AI presents several significant challenges that organizations must address to ensure trustworthiness and security. The first major challenge is model logic and critical thinking, requiring extensive training data and many iterations before models function effectively. Reliability and predictability present the second challenge, as autonomy introduces randomness in outputs that requires dedicated effort to minimize. Data privacy and security represent perhaps the most concerning challenge, as these issues are similar to those in generative AI but amplified by agentic AI\'s broader access and autonomy. Data quality and relevancy constitute the fourth challenge, as agentic models must deliver results grounded in quality data relevant to user prompts across a wide variety of platforms and sources.'
  },
  {
    id: 'q8',
    question: 'What are the five common pitfalls when adopting agentic AI?',
    options: [
      'Only technical implementation pitfalls without organizational or people-related concerns',
      'Exclusively cost-related pitfalls without strategic or governance considerations',
      'Only deployment pitfalls without development or adoption concerns',
      'Taking a technology-only approach, not aligning leadership expectations, not closing AI literacy gaps, failing to engage impacted users, and overlooking governance and responsible AI'
    ],
    correctAnswer: 3,
    explanation: 'Organizations face five common pitfalls when adopting agentic AI that can significantly impede success. The first critical pitfall is taking a technology-only approach, ignoring broader organizational context. The second pitfall involves not aligning and setting leadership expectations, with unclear or unrealistic expectations leading to transformation failures. The third pitfall is not closing AI literacy gaps, as low AI literacy among leaders and employees can significantly hinder adoption. The fourth pitfall is failing to engage impacted users or change champions, with 70% of AI adoption failures tracing back to process or people issues. The fifth and final pitfall is overlooking governance and responsible AI, as failing to address security and privacy concerns can significantly impede adoption.'
  },
  {
    id: 'q9',
    question: 'What strategies can help manage costs when deploying AI agents to production?',
    options: [
      'Using smaller models (SLMs) for simpler tasks, employing router models to route requests based on complexity, and caching responses for common requests to reduce volume',
      'Only reducing the number of agents deployed, without model optimization strategies',
      'Exclusively using larger models for all tasks to ensure performance',
      'Limiting agent functionality to reduce costs, without optimization approaches'
    ],
    correctAnswer: 0,
    explanation: 'Managing costs when deploying AI agents to production requires strategic approaches. Using smaller models—Small Language Models (SLMs)—can perform well on certain agentic use cases while significantly reducing costs, with evaluation systems helping determine performance versus larger models. Teams should consider using SLMs for simpler tasks like intent classification or parameter extraction while reserving larger models for complex reasoning. Using router models represents a similar strategy, employing diverse models and sizes with an LLM/SLM or serverless function to route requests based on complexity to best-fit models, reducing costs while ensuring performance on appropriate tasks. Caching responses for common requests and tasks before they go through the agentic system reduces the volume of similar requests, with flows to identify similarity to cached requests using basic AI models.'
  },
  {
    id: 'q10',
    question: 'What are key metrics for monitoring agent behavior?',
    options: [
      'Only response time and error rates without cost or quality considerations',
      'Latency, costs, request errors, user feedback, accuracy, and automated evaluation metrics using LLMs to score outputs for helpfulness and accuracy',
      'Exclusively user satisfaction scores without technical performance metrics',
      'Only model accuracy without operational or user experience metrics'
    ],
    correctAnswer: 1,
    explanation: 'Key metrics for monitoring agent behavior include latency (how quickly the agent responds), costs (expense per agent run), request errors (failed requests including API errors or failed tool calls), user feedback (both explicit ratings and implicit behaviors like query rephrasing), accuracy (frequency of correct or desirable outputs), and automated evaluation metrics using LLMs to score outputs for helpfulness and accuracy. These metrics provide comprehensive visibility into agent performance across technical, operational, and user experience dimensions.'
  },
  {
    id: 'q11',
    question: 'What is the data flywheel in agentic AI systems?',
    options: [
      'A data storage mechanism that rotates information through different storage tiers',
      'A processing architecture that cycles through multiple model checkpoints',
      'A self-reinforcing cycle where agent performance generates high-quality data that improves future agent performance, creating continuous improvement through operational experience',
      'A training methodology that alternates between different datasets'
    ],
    correctAnswer: 2,
    explanation: 'What makes these systems particularly compelling is their ability to adapt based on real-time data and apply recorded results into a systematic feedback loop, commonly known as the "data flywheel," which improves accuracy and efficiency over time. This continuous learning capability enables agents to become more effective through operational experience, unlike static systems that require manual updates. The data flywheel creates a virtuous cycle where each interaction makes the agent more capable, more accurate, and more valuable to the organization.'
  },
  {
    id: 'q12',
    question: 'What is OpenTelemetry and why is it important for LLM observability?',
    options: [
      'A proprietary NVIDIA protocol for agent communication',
      'A data storage format for agent logs',
      'A programming language for building agent frameworks',
      'An industry standard for LLM observability providing APIs, SDKs, and tools for generating, collecting, and exporting telemetry data, with many instrumentation libraries wrapping existing agent frameworks'
    ],
    correctAnswer: 3,
    explanation: 'OpenTelemetry has emerged as an industry standard for LLM observability, providing APIs, SDKs, and tools for generating, collecting, and exporting telemetry data. Many instrumentation libraries wrap existing agent frameworks, making it easy to export spans to observability tools with minimal code. Developers can also manually create spans and enrich them with custom attributes like user IDs, session IDs, or model versions, including business-specific data, intermediate computations, or any context useful for debugging or analysis.'
  },
  {
    id: 'q13',
    question: 'What is RAGAS and how is it used in evaluation?',
    options: [
      'An open-source framework for evaluating RAG workflows using judge LLMs to assess answer accuracy, context relevance, and response groundedness',
      'A proprietary NVIDIA evaluation tool that only works with NVIDIA models',
      'A data storage system for agent training data',
      'A deployment platform for agent workflows'
    ],
    correctAnswer: 0,
    explanation: 'Evaluation capabilities provide structured validation using frameworks like RAGAS for RAG workflows, assessing answer accuracy, context relevance, and response groundedness through judge LLMs. The toolkit includes a built-in evaluation system to validate and maintain accuracy of agentic workflows, going beyond simple pass-fail metrics to provide nuanced quality assessments that guide iterative improvement. RAGAS enables comprehensive evaluation of retrieval-augmented generation systems by assessing multiple dimensions of response quality.'
  },
  {
    id: 'q14',
    question: 'What is the Model Context Protocol (MCP) and how does the toolkit support it?',
    options: [
      'A proprietary NVIDIA communication protocol that requires specialized hardware',
      'A standard protocol for how agents discover and interact with external data sources and tools, with the toolkit supporting use as either an MCP client or MCP server',
      'A data format for storing agent configurations',
      'A training methodology for improving model performance'
    ],
    correctAnswer: 1,
    explanation: 'Full Model Context Protocol (MCP) support enables using the toolkit as either an MCP client to connect to remote MCP servers or as an MCP server to publish your own tools via MCP, providing versatile integration with the broader tool ecosystem. MCP is a standard protocol for how agents discover and interact with external data sources and tools, enabling tool ecosystem integration and interoperability across different agent frameworks and platforms.'
  },
  {
    id: 'q15',
    question: 'What are the key requirements for getting started with the NeMo Agent Toolkit?',
    options: [
      'Only NVIDIA GPU hardware with proprietary software',
      'Complete replacement of existing agent frameworks',
      'Python 3.11, 3.12, or 3.13 with installation through PyPI, optional framework-specific dependencies, and Node.js v18+ for the UI',
      'Specialized development environments that cannot run on standard systems'
    ],
    correctAnswer: 2,
    explanation: 'Getting started with the toolkit requires Python 3.11, 3.12, or 3.13, with installation available through PyPI. The toolkit offers optional dependencies grouped by framework that can be installed alongside the core package—for example, you can install LangChain/LangGraph plugins separately or install all optional dependencies at once. The toolkit provides a simple "Hello World" example that can be run in Google Colab with no setup required. The user interface lives in a git submodule and requires Node.js version 18 or higher. Starting the toolkit server uses a simple command with a configuration file that defines your workflow.'
  }
];
