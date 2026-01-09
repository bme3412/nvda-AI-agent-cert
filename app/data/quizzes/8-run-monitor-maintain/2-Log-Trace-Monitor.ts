import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is LLM logging and tracing and why is it essential for generative AI applications?',
    options: [
      'Observability framework for tracking and analyzing API calls within applications where single requests trigger multiple operations',
      'A security system for protecting large language models from unauthorized access and data breaches',
      'A performance optimization tool that automatically improves model inference speed and accuracy',
      'A deployment platform for scaling generative AI applications across distributed infrastructure'
    ],
    correctAnswer: 0,
    explanation: 'LLM logging and tracing represents observability framework for tracking, correlating, and analyzing API calls within generative AI applications where single user requests trigger multiple backend operations including embeddings, completions, and tool invocations.'
  },
  {
    id: 'q2',
    question: 'What observability challenges arise from independent API call execution?',
    options: [
      'API calls consume excessive computational resources reducing overall system performance',
      'Traditional logging treats each call as isolated event, obscuring relationships between operations serving common requests',
      'Independent execution prevents any form of monitoring or analysis of system behavior',
      'API calls execute too quickly for effective logging and analysis mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Observability challenges arise when API calls execute independently without correlation mechanisms, with traditional logging approaches treating each API call as isolated event, obscuring relationships between operations serving common user requests.'
  },
  {
    id: 'q3',
    question: 'How do trace correlation mechanisms enable request flow reconstruction?',
    options: [
      'By automatically optimizing API call sequences for improved performance and efficiency',
      'Through associating related API calls via common identifiers enabling complete request flow reconstruction',
      'By eliminating unnecessary API calls to reduce system complexity and overhead',
      'Through standardizing all API calls to use identical formats and protocols'
    ],
    correctAnswer: 1,
    explanation: 'Trace correlation mechanisms associate related API calls through common identifiers enabling reconstruction of complete request flows, with trace IDs propagating across operation boundaries linking embeddings, completions, and tool executions from single user interactions.'
  },
  {
    id: 'q4',
    question: 'What troubleshooting efficiency improvements result from end-to-end visibility?',
    options: [
      'Automatic error correction and resolution without human intervention requirements',
      'Rapid issue identification, error propagation tracking, and detailed request-response logging supporting reproduction',
      'Elimination of all possible errors through advanced prediction and prevention algorithms',
      'Universal compatibility ensuring identical behavior across all deployment environments'
    ],
    correctAnswer: 1,
    explanation: 'Troubleshooting efficiency improvements result from end-to-end request flow visibility enabling rapid issue identification, error propagation tracking revealing root causes across operation chains, and detailed request-response logging supporting reproduction and diagnosis.'
  },
  {
    id: 'q5',
    question: 'How do cost management capabilities enable precise expense attribution?',
    options: [
      'Through automatic cost reduction algorithms that optimize resource usage without manual intervention',
      'By enabling expense attribution to user requests aggregating costs across multiple API calls',
      'Through universal pricing models that standardize costs across all service providers',
      'By eliminating all operational costs through efficiency improvements and optimization'
    ],
    correctAnswer: 1,
    explanation: 'Cost management capabilities enable precise expense attribution to user requests aggregating costs across multiple API calls, identification of expensive interaction patterns, and cost trend analysis revealing usage patterns and optimization opportunities.'
  },
  {
    id: 'q6',
    question: 'What does request interception enable for logging architecture?',
    options: [
      'Automatic performance optimization and resource allocation without configuration requirements',
      'Transparent logging without application code modifications beyond initial configuration',
      'Universal compatibility ensuring identical behavior across all programming languages',
      'Elimination of all security vulnerabilities through advanced protection mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Request interception mechanisms capture API calls routing through observability platforms before reaching destination services, enabling transparent logging without application code modifications beyond initial configuration, ensuring comprehensive capture regardless of implementation details.'
  },
  {
    id: 'q7',
    question: 'What comprehensive operation characteristics does metadata extraction capture?',
    options: [
      'Only basic timing information without detailed request or response data',
      'Invocation timestamps, model identifiers, costs, execution times, request payloads, and response payloads',
      'Exclusively security-related information for compliance and audit purposes',
      'Universal metadata that applies identically across all operation types'
    ],
    correctAnswer: 1,
    explanation: 'Metadata extraction captures comprehensive operation characteristics including invocation timestamps enabling temporal analysis, model identifiers tracking which models handle requests, total costs, execution times, request payloads, and response payloads.'
  },
  {
    id: 'q8',
    question: 'How does trace identifier propagation enable operation correlation?',
    options: [
      'Through automatic optimization of operation sequences for improved performance',
      'By linking related operations through common identifiers passed across operation boundaries',
      'Through standardizing all operations to use identical execution patterns',
      'By eliminating the need for operation correlation through simplified architectures'
    ],
    correctAnswer: 1,
    explanation: 'Trace identifier propagation links related operations through common identifiers passed across operation boundaries, with applications assigning trace IDs representing logical user requests and propagating through all operations serving those requests.'
  },
  {
    id: 'q9',
    question: 'What advantages does exact matching provide for response caching?',
    options: [
      'Universal compatibility ensuring cache hits work identically across all request types',
      'Perfect precision ensuring cached responses match current requests exactly through precise parameter comparison',
      'Automatic cache optimization that improves hit rates without manual configuration',
      'Elimination of all cache misses through advanced prediction algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Exact matching identifies requests identical to previous invocations through precise comparison of request parameters including prompts, model selections, and configuration settings, providing perfect precision ensuring cached responses match current requests exactly.'
  },
  {
    id: 'q10',
    question: 'How does semantic similarity matching increase cache effectiveness?',
    options: [
      'By automatically generating optimal cache keys that guarantee maximum hit rates',
      'Through recognizing equivalent requests phrased differently using embedding-based comparison',
      'By standardizing all requests to use identical formats eliminating similarity considerations',
      'Through universal compatibility ensuring all requests can be served from cached responses'
    ],
    correctAnswer: 1,
    explanation: 'Semantic similarity matching identifies requests conveying similar meaning despite textual differences through embedding-based comparison, computing request embeddings and performing similarity search, increasing cache hit rates by recognizing equivalent requests phrased differently.'
  },
  {
    id: 'q11',
    question: 'What does automatic retry capability handle for reliability improvement?',
    options: [
      'All possible system failures regardless of their fundamental nature or cause',
      'Transient failures through configurable re-execution policies eliminating manual retry implementation',
      'Only permanent failures that require immediate escalation to human operators',
      'Universal error recovery that works identically across all failure types'
    ],
    correctAnswer: 1,
    explanation: 'Automatic retry capabilities handle transient failures through configurable re-execution policies, detecting failed requests based on error codes and automatically resubmitting according to configured policies while surfacing persistent failures after exhausting retry attempts.'
  },
  {
    id: 'q12',
    question: 'Why do exponential backoff strategies prove essential for retry mechanisms?',
    options: [
      'To guarantee successful retry on the first attempt without multiple attempts',
      'For spacing retry attempts with progressively increasing delays preventing overwhelming services experiencing difficulties',
      'To eliminate all retry attempts by resolving issues before they require retries',
      'For standardizing retry timing across all systems regardless of specific failure characteristics'
    ],
    correctAnswer: 1,
    explanation: 'Exponential backoff strategies space retry attempts with progressively increasing delays preventing overwhelming services experiencing difficulties, with initial retries occurring rapidly while subsequent attempts delay progressively allowing extended recovery time.'
  },
  {
    id: 'q13',
    question: 'How do tag mechanisms enable flexible operation categorization?',
    options: [
      'Through automatic categorization that eliminates need for manual tag assignment',
      'By attaching custom metadata enabling categorization, filtering, and analysis through key-value pairs',
      'Through universal tags that apply identically across all operations without customization',
      'By standardizing all operations to eliminate need for categorization mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Tag mechanisms attach custom metadata to operations enabling flexible categorization, filtering, and analysis through key-value pairs capturing operation characteristics including user identifiers, session identifiers, feature flags, or custom attributes supporting application-specific analysis.'
  },
  {
    id: 'q14',
    question: 'What advantages does gateway integration provide for observability platforms?',
    options: [
      'Automatic performance optimization and cost reduction without manual configuration',
      'Centralized observability logic avoiding distributed instrumentation across application code',
      'Universal compatibility ensuring identical behavior across all programming frameworks',
      'Elimination of all observability overhead through advanced efficiency algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Gateway integration routes API traffic through observability platforms providing centralized observability logic avoiding distributed instrumentation across application code, simplifying policy enforcement and enabling transparent feature adoption without application modifications.'
  },
  {
    id: 'q15',
    question: 'How does header propagation support observability metadata transmission?',
    options: [
      'Through automatic metadata optimization that reduces transmission overhead',
      'By transmitting observability metadata including trace identifiers and policies through HTTP headers',
      'Through universal protocols that work identically regardless of specific infrastructure',
      'By eliminating metadata transmission requirements through simplified architectures'
    ],
    correctAnswer: 1,
    explanation: 'Header propagation mechanisms transmit observability metadata including trace identifiers, cache directives, and retry policies through HTTP headers attached to API requests, maintaining stateless request handling and enabling middleware processing at multiple layers.'
  }
];