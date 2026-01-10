import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does LangChain Templates and NeMo Guardrails integration represent?',
    options: [
      'Architectural pattern combining reusable application templates with programmable safety controls for trustworthy LLM applications',
      'A deployment platform for scaling large language models across distributed infrastructure environments',
      'A security framework for protecting language models from unauthorized access and malicious attacks',
      'An automated optimization system for improving model performance without manual tuning requirements'
    ],
    correctAnswer: 0,
    explanation: 'LangChain Templates and NeMo Guardrails integration represents architectural pattern combining reusable application templates with programmable safety controls enabling rapid development of trustworthy LLM-powered applications, addressing dual requirements of development velocity and production safety.'
  },
  {
    id: 'q2',
    question: 'How does template architecture enable development acceleration?',
    options: [
      'Through universal compatibility ensuring identical behavior across all deployment environments',
      'By eliminating all configuration requirements through intelligent automation and optimization',
      'By organizing reusable components including chain definitions, agent configurations, and deployment scaffolding',
      'Through automatic code generation that eliminates need for manual development effort'
    ],
    correctAnswer: 2,
    explanation: 'Template architecture organizes reusable application components including chain definitions implementing specific workflows, agent configurations orchestrating multi-step reasoning, and deployment scaffolding providing API infrastructure, enabling developers to instantiate working applications requiring customization rather than complete implementation.'
  },
  {
    id: 'q3',
    question: 'What does guardrails integration provide for LLM behavior control?',
    options: [
      'Automatic optimization that improves performance without manual configuration requirements',
      'Complete elimination of problematic behaviors through advanced prevention algorithms',
      'Programmable controls including input validation, output filtering, and dialogue management',
      'Universal controls that work identically across all model types without customization'
    ],
    correctAnswer: 2,
    explanation: 'Guardrails integration provides programmable controls governing LLM behavior through input validation preventing problematic queries, output filtering ensuring response appropriateness, and dialogue management guiding conversation flows, operating transparently without requiring model modifications.'
  },
  {
    id: 'q4',
    question: 'How does safety assurance benefit from integrated guardrail controls?',
    options: [
      'By providing systematic input validation, output filtering, and dialogue management from initial development',
      'Through automatic safety optimization that eliminates all possible risks without manual oversight',
      'Through universal safety measures that apply identically across all application types',
      'By eliminating all safety requirements through advanced protection algorithms'
    ],
    correctAnswer: 0,
    explanation: 'Safety assurance benefits from systematic input validation preventing malicious or inappropriate queries, output filtering ensuring response quality, and dialogue management maintaining conversational boundaries, with integrated controls operating from initial development rather than requiring post-hoc addition.'
  },
  {
    id: 'q5',
    question: 'What customization flexibility do templates provide while maintaining benefits?',
    options: [
      'Automatic customization that adapts to requirements without manual configuration or intervention',
      'Complete flexibility eliminating all template constraints through intelligent automation',
      'Adaptation through model selection, chain modification, and guardrail configuration while maintaining template structure',
      'Universal flexibility that allows unlimited modifications without any constraints or limitations'
    ],
    correctAnswer: 2,
    explanation: 'Customization flexibility enables adapting templates to specific requirements through model selection, chain modification, and guardrail configuration while maintaining template structure benefits, with organizations customizing applications to match exact requirements without sacrificing template advantages.'
  },
  {
    id: 'q6',
    question: 'How do chain definitions demonstrate proven architectures?',
    options: [
      'Through universal patterns that work optimally for all possible use cases',
      'By eliminating all architectural decisions through intelligent automation',
      'By implementing specific workflows including RAG patterns, conversational interactions, and multi-step reasoning',
      'Through automatic optimization that generates optimal architectures without manual design'
    ],
    correctAnswer: 2,
    explanation: 'Chain definitions implement specific workflows including retrieval-augmented generation patterns, conversational interactions, and multi-step reasoning processes, demonstrating proven architectures, encoding best practices in implementations, and providing starting points requiring customization rather than complete design.'
  },
  {
    id: 'q7',
    question: 'What does configuration-driven guardrail specification enable?',
    options: [
      'Guardrail customization without code modifications supporting diverse policies through declarations',
      'Automatic guardrail optimization that improves protection without manual configuration',
      'Universal guardrails that work identically across all application types without customization',
      'Complete elimination of guardrail requirements through advanced automation algorithms'
    ],
    correctAnswer: 0,
    explanation: 'Configuration specification defines guardrail behaviors through policy declarations, flow definitions, and validation criteria, with configuration-driven approach enabling guardrail customization without code modifications and supporting diverse policies across applications from shared templates.'
  },
  {
    id: 'q8',
    question: 'How does input validation prevent problematic model processing?',
    options: [
      'Through automatic input optimization that improves quality without manual validation',
      'By eliminating all input requirements through intelligent automation and preprocessing',
      'By analyzing user inputs before LLM processing to detect policy violations, inappropriate content, or security threats',
      'Through universal validation that works identically for all input types without configuration'
    ],
    correctAnswer: 2,
    explanation: 'Input validation mechanisms analyze user inputs before LLM processing detecting policy violations, inappropriate content, or security threats, encompassing content screening, prompt injection detection, and policy compliance verification, preventing problematic queries from reaching models.'
  },
  {
    id: 'q9',
    question: 'What does output filtering accomplish for response appropriateness?',
    options: [
      'Analysis of LLM responses before delivery ensuring appropriateness, accuracy, and policy compliance',
      'Universal filtering that works identically across all response types without customization',
      'Automatic response optimization that improves quality without manual filtering requirements',
      'Complete elimination of problematic responses through advanced prevention algorithms'
    ],
    correctAnswer: 0,
    explanation: 'Output filtering analyzes LLM responses before delivery ensuring appropriateness, accuracy, and policy compliance, with capabilities including fact-checking validating response groundedness, sensitive information masking, and content appropriateness verification ensuring responses satisfy standards.'
  },
  {
    id: 'q10',
    question: 'How does dialogue management guide conversation flows?',
    options: [
      'Through universal management that works identically across all conversation types',
      'By eliminating all conversation management requirements through intelligent automation',
      'Via predefined responses for specific scenarios, topic steering, and capability communication',
      'Through automatic conversation optimization that improves engagement without manual guidance'
    ],
    correctAnswer: 2,
    explanation: 'Dialogue management guides conversation flows through predefined responses for specific scenarios, topic steering maintaining conversational boundaries, and capability communication explaining system limitations, ensuring conversations remain productive and appropriate while handling out-of-scope queries gracefully.'
  },
  {
    id: 'q11',
    question: 'Why do RAG applications particularly benefit from guardrails?',
    options: [
      'Because they require ensuring retrieved information appropriateness and generated response grounding in sources',
      'RAG applications operate identically to other systems without special guardrail requirements',
      'Through automatic RAG optimization that eliminates need for manual guardrail configuration',
      'RAG systems cannot utilize guardrails due to technical incompatibilities'
    ],
    correctAnswer: 0,
    explanation: 'RAG applications benefit from guardrails ensuring retrieved information appropriateness, generated responses remain grounded in sources, and sensitive information receives proper handling, with applications often accessing confidential data requiring careful output filtering and serving diverse users necessitating contextual appropriateness.'
  },
  {
    id: 'q12',
    question: 'How does prompt injection detection protect against manipulation?',
    options: [
      'Through automatic input optimization that eliminates injection possibilities without detection',
      'By requiring all inputs to use standardized formats eliminating injection opportunities',
      'By identifying manipulation attempts including instruction overrides, role-playing requests, and system prompt leakage',
      'Through universal detection that prevents all possible manipulation without false positives'
    ],
    correctAnswer: 2,
    explanation: 'Prompt injection detection identifies manipulation attempts including instruction overrides, role-playing requests, or system prompt leakage attempts, using detection strategies encompassing pattern recognition, semantic analysis, and validation against allowed input patterns to prevent adversarial users from compromising system behavior.'
  },
  {
    id: 'q13',
    question: 'What does fact-checking validation prevent in response generation?',
    options: [
      'Hallucinations where models generate plausible-sounding but incorrect information',
      'All possible errors in responses through comprehensive verification without false positives',
      'Only technical errors without consideration for factual accuracy or content appropriateness',
      'Universal errors through automatic optimization that guarantees correctness'
    ],
    correctAnswer: 0,
    explanation: 'Fact-checking validates response groundedness in provided context preventing hallucinations where models generate plausible-sounding but incorrect information, with checking mechanisms comparing responses against source materials, identifying unsupported claims, and providing confidence assessments.'
  },
  {
    id: 'q14',
    question: 'How does API exposure enable application deployment?',
    options: [
      'Through universal APIs that work identically across all client types without customization',
      'By eliminating all deployment requirements through cloud-based automation',
      'By providing HTTP endpoints using FastAPI framework with high-performance implementation and standard compatibility',
      'Through automatic deployment that eliminates manual infrastructure requirements'
    ],
    correctAnswer: 2,
    explanation: 'API exposure mechanisms provide HTTP endpoints enabling application invocation through standard protocols, leveraging FastAPI framework providing high-performance implementation, supporting standard HTTP methods enabling broad client compatibility, and including automatic documentation simplifying integration.'
  },
  {
    id: 'q15',
    question: 'What does authentication integration support for enterprise deployments?',
    options: [
      'Access control through token validation, permission verification, and audit logging',
      'Universal authentication that works identically across all identity providers without configuration',
      'Automatic authentication that eliminates security requirements through intelligent protection',
      'Complete security eliminating all access control needs through advanced protection algorithms'
    ],
    correctAnswer: 0,
    explanation: 'Authentication integration supports access control through token validation, permission verification, and audit logging, proving essential for enterprise deployments where access restrictions protect sensitive functionality, usage tracking enables cost allocation, and compliance requirements demand access documentation.'
  }
];