import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does NIM and NeMo Guardrails integration represent?',
    options: [
      'A data preprocessing framework for machine learning model training and optimization',
      'Architectural pattern combining high-performance AI model inference microservices with programmable safety controls',
      'A cloud storage solution for managing large language model weights and training data',
      'A network security framework for protecting enterprise data centers from external threats'
    ],
    correctAnswer: 1,
    explanation: 'NIM and NeMo Guardrails integration represents architectural pattern combining high-performance AI model inference microservices with programmable safety controls enabling secure enterprise deployment of generative AI applications, addressing dual requirements of production-grade performance and trustworthy operation.'
  },
  {
    id: 'q2',
    question: 'How does NIM microservices architecture deliver optimized inference?',
    options: [
      'Through automatic hardware optimization that eliminates need for manual configuration and tuning',
      'Via prebuilt containers encapsulating models, inference engines, and standard APIs eliminating deployment complexity',
      'By requiring specialized hardware configurations optimized exclusively for NVIDIA infrastructure',
      'Through universal compatibility ensuring identical performance across all possible deployment environments'
    ],
    correctAnswer: 1,
    explanation: 'NIM microservices architecture delivers optimized inference through prebuilt containers encapsulating models, inference engines, and standard APIs, with container approach eliminating deployment complexity from manual optimization, dependency management, and infrastructure configuration.'
  },
  {
    id: 'q3',
    question: 'What does guardrails runtime integration provide for LLM behavior control?',
    options: [
      'Universal controls that work identically across all model types without customization',
      'Programmable controls including input validation, output filtering, and dialog management operating transparently',
      'Automatic optimization that improves performance without manual configuration requirements',
      'Complete behavior modification requiring fundamental changes to underlying model architectures'
    ],
    correctAnswer: 1,
    explanation: 'Guardrails runtime integration provides programmable controls governing LLM behavior through input validation, output filtering, and dialog management, with runtime enforcement operating transparently without model modifications enabling applying controls to diverse models through common interface.'
  },
  {
    id: 'q4',
    question: 'How does security integration address enterprise concerns?',
    options: [
      'Through automatic security that eliminates all possible threats without manual oversight',
      'By ensuring models execute in secure containers, access controls limit API usage, and guardrails prevent prohibited content',
      'Through universal security measures that apply identically across all deployment scenarios',
      'By eliminating all security requirements through advanced protection algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Security integration addresses enterprise concerns including unauthorized access prevention, sensitive information protection, and malicious use mitigation, ensuring models execute in secure containerized environments with access controls limiting inference API usage and guardrails preventing prohibited content generation.'
  },
  {
    id: 'q5',
    question: 'What deployment acceleration benefits emerge from the integrated architecture?',
    options: [
      'Universal acceleration that works identically regardless of organizational infrastructure or requirements',
      'Prebuilt containers eliminating custom optimization, standardized APIs reducing integration complexity, and framework compatibility',
      'Automatic deployment that eliminates all manual configuration and infrastructure requirements',
      'Complete automation eliminating need for any technical expertise or configuration management'
    ],
    correctAnswer: 1,
    explanation: 'Deployment acceleration emerges from prebuilt containers eliminating custom optimization, standardized APIs reducing integration complexity, and framework compatibility enabling leveraging existing toolchains, with organizations achieving production deployment substantially faster compared to manual model serving implementation.'
  },
  {
    id: 'q6',
    question: 'How does container packaging provide consistent execution environments?',
    options: [
      'Through universal packaging that works identically across all infrastructure types without adaptation',
      'By encapsulating models, inference engines, dependencies, and configuration into deployable units',
      'Through automatic packaging that eliminates need for manual configuration or dependency management',
      'By requiring standardized infrastructure eliminating variations across deployment environments'
    ],
    correctAnswer: 1,
    explanation: 'Container packaging encapsulates models, inference engines, dependencies, and configuration into deployable units, providing consistent execution environments across infrastructure, eliminating dependency conflicts from host system variations, and simplifying deployment through standard container orchestration.'
  },
  {
    id: 'q7',
    question: 'What inference optimization techniques maximize throughput and minimize latency?',
    options: [
      'Universal optimization that works identically across all model types and hardware configurations',
      'Batching aggregating requests, kernel fusion reducing memory transfers, quantization, and caching frequent computations',
      'Automatic optimization that eliminates need for manual configuration and performance tuning',
      'Standard optimization techniques that apply identically regardless of specific deployment requirements'
    ],
    correctAnswer: 1,
    explanation: 'Inference optimization implements model-specific and hardware-specific enhancements including batching aggregating requests, kernel fusion reducing memory transfers, quantization reducing precision while maintaining accuracy, and caching frequently accessed computations, proving essential for production deployments.'
  },
  {
    id: 'q8',
    question: 'How does input validation examine incoming requests?',
    options: [
      'Through universal validation that works identically for all request types without customization',
      'By detecting policy violations, inappropriate content, or malicious queries before reaching models',
      'Through automatic validation that eliminates need for policy configuration or content screening',
      'By requiring standardized input formats eliminating need for validation or screening'
    ],
    correctAnswer: 1,
    explanation: 'Input validation examines incoming requests detecting policy violations, inappropriate content, or malicious queries before reaching models, with validation mechanisms encompassing topical rails preventing off-scope queries, jailbreak detection identifying manipulation attempts, and sensitive information screening.'
  },
  {
    id: 'q9',
    question: 'What do topical rails accomplish for conversation constraint?',
    options: [
      'Universal conversation management that works identically across all application types',
      'Constraining conversations to approved subjects through semantic similarity matching between inputs and topic boundaries',
      'Automatic topic management that eliminates need for defining allowed or prohibited subjects',
      'Complete conversation control eliminating need for user input validation or content screening'
    ],
    correctAnswer: 1,
    explanation: 'Topical rails constrain conversations to approved subjects through semantic similarity matching between user inputs and defined topic boundaries, with rail mechanisms converting queries to embeddings, computing similarity against allowed and prohibited topics, and blocking requests exceeding dissimilarity thresholds.'
  },
  {
    id: 'q10',
    question: 'How does output filtering analyze model responses before delivery?',
    options: [
      'Through universal filtering that works identically for all response types without customization',
      'By ensuring compliance with policies, appropriateness standards, and information disclosure controls',
      'Through automatic filtering that eliminates need for policy configuration or appropriateness verification',
      'By requiring standardized output formats eliminating need for filtering or validation'
    ],
    correctAnswer: 1,
    explanation: 'Output filtering analyzes model responses before delivery ensuring compliance with policies, appropriateness standards, and information disclosure controls, with filtering mechanisms detecting sensitive information requiring redaction, verifying factual groundedness, and ensuring tone appropriateness.'
  },
  {
    id: 'q11',
    question: 'What does semantic similarity computation enable for policy matching?',
    options: [
      'Universal policy matching that works identically across all policy types without adaptation',
      'Efficient policy matching through vector space operations where similarity corresponds to vector proximity',
      'Automatic policy generation that eliminates need for manual policy specification or configuration',
      'Complete policy automation eliminating need for similarity computation or matching algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Semantic similarity computation enables efficient policy matching through vector space operations, with embedding models converting text inputs into high-dimensional vectors where semantic similarity corresponds to vector proximity, proving more robust than rule-based matching for detecting semantically equivalent expressions.'
  },
  {
    id: 'q12',
    question: 'How does declarative policy specification enable guardrails definition?',
    options: [
      'Through universal policies that apply identically across all organizational contexts without customization',
      'By enabling defining guardrails through structured configuration rather than procedural code',
      'Through automatic policy generation that eliminates need for manual specification or configuration',
      'By requiring standardized policies eliminating need for organizational customization or adaptation'
    ],
    correctAnswer: 1,
    explanation: 'Declarative policy specification enables defining guardrails through structured configuration rather than procedural code, with configuration approaches proving more maintainable than imperative implementations, enabling non-technical stakeholders to define policies, and supporting systematic validation.'
  },
  {
    id: 'q13',
    question: 'What does malicious use prevention address for model security?',
    options: [
      'Universal security that prevents all possible threats without need for specific threat identification',
      'Attempts to exploit models for unauthorized purposes including data exfiltration and generating harmful content',
      'Only technical vulnerabilities without consideration for behavioral exploitation or misuse patterns',
      'Complete security automation eliminating need for threat detection or prevention mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Malicious use prevention addresses attempts to exploit models for unauthorized purposes including data exfiltration, generating harmful content, or circumventing access controls, with prevention mechanisms encompassing query pattern detection, intent classification, and behavioral analysis.'
  },
  {
    id: 'q14',
    question: 'How does jailbreak detection identify manipulation attempts?',
    options: [
      'Through universal detection that prevents all possible manipulation without false positives',
      'By identifying attempts to override model instructions, bypass safety controls, or manipulate behavior through adversarial prompts',
      'Through automatic detection that eliminates need for pattern recognition or behavioral analysis',
      'By requiring standardized input formats that eliminate possibility of manipulation attempts'
    ],
    correctAnswer: 1,
    explanation: 'Jailbreak detection identifies attempts to override model instructions, bypass safety controls, or manipulate behavior through adversarial prompts, with detection strategies including pattern matching identifying known jailbreak techniques, anomaly detection flagging unusual query structures, and semantic analysis understanding manipulation intent.'
  },
  {
    id: 'q15',
    question: 'What does framework integration enable for existing development patterns?',
    options: [
      'Universal integration that works identically across all development frameworks without adaptation',
      'Leveraging existing application development patterns including LangChain and LlamaIndex reducing integration complexity',
      'Automatic integration that eliminates need for framework-specific adaptation or configuration',
      'Complete framework independence eliminating need for integration with existing development tools'
    ],
    correctAnswer: 1,
    explanation: 'Framework integration enables leveraging existing application development patterns including LangChain and LlamaIndex, with framework compatibility reducing integration complexity, supporting gradual adoption, and enabling leveraging ecosystem tools, proving valuable for organizations with established development patterns.'
  }
];