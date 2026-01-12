import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What do traces and spans represent in agent observability tools like Langfuse?',
    options: [
      'Traces show individual tool calls while spans represent the complete workflow from beginning to end',
      'Both traces and spans are identical concepts referring to the same level of execution granularity',
      'Traces track user interactions while spans exclusively monitor external API calls and service dependencies',
      'Traces represent complete agent tasks from start to finish while spans are individual steps within traces'
    ],
    correctAnswer: 3,
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
      'From "white box" systems with full transparency to "black box" systems with enhanced security',
      'From "gray box" partially observable systems to "opaque box" fully encrypted implementations',
      'From "black box" agents with opaque behavior to "glass box" systems offering vital transparency',
      'From "transparent box" open systems to "locked box" secure implementations with restricted access'
    ],
    correctAnswer: 2,
    explanation: 'Without observability, AI agents feel like "black boxes" with opaque internal state and reasoning. With observability, agents become "glass boxes," offering transparency vital for building trust and ensuring they operate as intended.'
  },
  {
    id: 'q4',
    question: 'Why is tracking latency particularly important for AI agents in production?',
    options: [
      'Latency has no impact on user experience since users expect AI systems to be slow',
      'Latency tracking is only relevant for debugging and has no relationship to operational costs',
      'Faster agents always produce lower quality results making latency optimization counterproductive',
      'Long response times negatively impact user experience, requiring measurement to identify optimization opportunities'
    ],
    correctAnswer: 3,
    explanation: 'Latency measures how quickly agents respond, and long waiting times negatively impact user experience. Tracing agent runs helps identify slow operations, enabling optimization through faster models or parallel execution strategies.'
  },
  {
    id: 'q5',
    question: 'What insight can cost tracking provide beyond just monitoring expenses?',
    options: [
      'Cost tracking exclusively monitors spending without providing any actionable insights for system optimization',
      'It can identify excessive API calls from bugs, assess if multiple LLM calls justify quality improvements',
      'Cost monitoring only matters for small startups and is irrelevant for established enterprises',
      'Tracking costs reduces agent accuracy by limiting the computational resources available for reasoning'
    ],
    correctAnswer: 1,
    explanation: 'Cost tracking reveals if frequent tool usage or multiple prompts rapidly increase expenses. It helps assess whether multiple LLM calls justify quality improvements, identify bugs causing excessive API loops, and determine if cheaper models could work.'
  },
  {
    id: 'q6',
    question: 'What is the difference between explicit and implicit user feedback for agent evaluation?',
    options: [
      'Implicit feedback is always more accurate than explicit feedback which can be biased and unreliable',
      'Explicit feedback tracks system performance while implicit feedback exclusively monitors user demographics',
      'Both feedback types provide identical information with no meaningful distinction in evaluation value',
      'Explicit feedback includes ratings and comments while implicit feedback comes from behaviors like query rephrasing'
    ],
    correctAnswer: 3,
    explanation: 'Explicit user feedback includes ratings (thumbs up/down, stars) or textual comments. Implicit feedback comes from user behaviors like immediate question rephrasing, repeated queries, or clicking retry buttons, which provide indirect signals about agent performance.'
  },
  {
    id: 'q7',
    question: 'What is OpenTelemetry\'s role in agent observability?',
    options: [
      'OpenTelemetry is a proprietary NVIDIA tool exclusively designed for GPU monitoring in agent systems',
      'OpenTelemetry only works with specific cloud providers and cannot be used in on-premises deployments',
      'It exclusively monitors network performance without any capabilities for application-level tracing or metrics',
      'It\'s an industry standard providing APIs, SDKs, and tools for generating and exporting telemetry data'
    ],
    correctAnswer: 3,
    explanation: 'OpenTelemetry (OTel) has emerged as an industry standard for LLM observability. It provides APIs, SDKs, and tools for generating, collecting, and exporting telemetry data, with instrumentation libraries wrapping existing agent frameworks.'
  },
  {
    id: 'q8',
    question: 'What advantage do manual spans provide beyond automatic instrumentation libraries?',
    options: [
      'Manual spans are always faster and consume fewer resources than automatic instrumentation approaches',
      'Manual instrumentation eliminates the need for any automatic tracing or monitoring capabilities',
      'Automatic instrumentation provides more detailed information making manual spans completely unnecessary',
      'They allow enriching spans with custom attributes like user_id, session_id, or business-specific data'
    ],
    correctAnswer: 3,
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
      'Offline evaluation is too expensive and time-consuming to be practical for most development teams',
      'Test datasets may not be comprehensive or stay relevant to real-world production query patterns',
      'Offline evaluation always produces more errors than online evaluation making it completely unreliable',
      'Development teams lack the technical expertise required to construct appropriate offline test datasets'
    ],
    correctAnswer: 1,
    explanation: 'The key challenge is ensuring test datasets are comprehensive and stay relevant. Agents might perform well on fixed test sets but encounter very different queries in production, requiring updated test sets with new edge cases reflecting real-world scenarios.'
  },
  {
    id: 'q11',
    question: 'How do online and offline evaluations complement each other in practice?',
    options: [
      'Teams should choose one approach exclusively since combining them creates conflicting and contradictory results',
      'Offline evaluation replaces the need for online monitoring once agents achieve acceptable test performance',
      'Online evaluation eliminates the value of offline testing which becomes obsolete in production environments',
      'Insights from online monitoring improve offline datasets, while offline testing enables confident deployment for online monitoring'
    ],
    correctAnswer: 3,
    explanation: 'The approaches are highly complementary. Online insights (like new failure cases) improve offline test datasets. Agents performing well offline can be confidently deployed and monitored online, creating a continuous improvement loop: evaluate offline → deploy → monitor → refine.'
  },
  {
    id: 'q12',
    question: 'What strategy addresses AI agents running into continuous loops?',
    options: [
      'Increase computational resources and allow agents unlimited time to explore all possible solution paths',
      'Continuous loops are beneficial for agent learning and should be encouraged rather than prevented',
      'Reduce the number of available tools since tool access is the primary cause of all looping behaviors',
      'Ensure clear termination conditions so agents know when to stop, and use larger reasoning models for complex tasks'
    ],
    correctAnswer: 3,
    explanation: 'To prevent continuous loops, ensure clear termination terms and conditions so agents know when to stop. For complex tasks requiring reasoning and planning, use larger models specialized for reasoning tasks to improve decision-making quality.'
  },
  {
    id: 'q13',
    question: 'How can smaller language models (SLMs) help manage costs in agent deployments?',
    options: [
      'SLMs always produce identical results to large models while consuming significantly less computational resources',
      'SLMs can perform well on certain agentic use-cases like simple tasks, reducing costs while maintaining performance',
      'Using SLMs eliminates the need for any evaluation since smaller models are inherently more reliable',
      'SLMs should never be used in production since they consistently underperform on all tasks compared to large models'
    ],
    correctAnswer: 1,
    explanation: 'Small Language Models can perform well on certain agentic use-cases and significantly reduce costs. Consider using SLMs for simpler tasks like intent classification or parameter extraction, while reserving larger models for complex reasoning requiring more capability.'
  },
  {
    id: 'q14',
    question: 'What is the purpose of implementing a router model in multi-model agent architectures?',
    options: [
      'Routers exclusively handle network traffic without any involvement in model selection or request routing',
      'Router models eliminate the need for evaluation by automatically selecting the perfect model for every scenario',
      'Routing increases costs by adding an extra processing layer without providing any efficiency benefits',
      'A router directs requests based on complexity to appropriate model sizes, optimizing cost and performance'
    ],
    correctAnswer: 3,
    explanation: 'Using a router model or serverless function to route requests based on complexity ensures the best fit models are used. Route simple queries to smaller, faster models, and reserve expensive large models for complex reasoning tasks.'
  },
  {
    id: 'q15',
    question: 'What evaluation strategy is demonstrated in the flight booking code example?',
    options: [
      'The example shows how to prevent all errors by thoroughly testing tools before any production deployment',
      'The code prevents agents from ever encountering errors by validating all inputs before processing',
      'It shows that agents should immediately stop all operations when any single tool experiences failures',
      'It demonstrates handling external service failures with backup functions and allowing agents to continue operating'
    ],
    correctAnswer: 3,
    explanation: 'The example shows handling HTTP errors when flight times service is unavailable by having a backup function. Rather than failing completely, the agent can continue operating using available tools, demonstrating production resilience strategies for external service failures.'
  }
];
