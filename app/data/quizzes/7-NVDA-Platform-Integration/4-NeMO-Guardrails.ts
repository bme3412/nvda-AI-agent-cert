import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is NVIDIA NeMo Guardrails and what does it address in AI applications?',
    options: [
      'A hardware acceleration platform for training large language models on distributed GPU clusters',
      'A scalable orchestration framework for implementing safety, security, and compliance controls in LLM-powered applications',
      'A model compression toolkit for reducing inference latency and memory requirements',
      'A data preprocessing pipeline for cleaning and preparing training datasets'
    ],
    correctAnswer: 1,
    explanation: 'NVIDIA NeMo Guardrails is a scalable orchestration framework for implementing safety, security, and compliance controls in AI applications powered by large language models and autonomous agents.'
  },
  {
    id: 'q2',
    question: 'What types of safety dimensions do NeMo Guardrails address?',
    options: [
      'Content safety, topic control, PII detection, RAG grounding, and jailbreak prevention',
      'Model accuracy, inference speed, memory usage, and power consumption optimization',
      'Data encryption, network security, access control, and audit logging',
      'Version control, deployment automation, monitoring, and rollback capabilities'
    ],
    correctAnswer: 0,
    explanation: 'The framework addresses content safety, topic control, personally identifiable information detection, retrieval-augmented generation grounding, and jailbreak prevention through standardized interfaces.'
  },
  {
    id: 'q3',
    question: 'How does NeMo Guardrails integrate with AI development environments?',
    options: [
      'Through proprietary APIs that require specialized NVIDIA development tools exclusively',
      'By replacing existing frameworks with NVIDIA-specific alternatives and custom implementations',
      'Via seamless integration with popular environments including LangChain, LangGraph, and LlamaIndex',
      'Only through cloud-based services without support for on-premises deployments'
    ],
    correctAnswer: 2,
    explanation: 'The framework integrates seamlessly with popular AI development environments including LangChain, LangGraph, and LlamaIndex through standardized integration interfaces.'
  },
  {
    id: 'q4',
    question: 'What performance characteristics does NeMo Guardrails maintain for production deployments?',
    options: [
      'Multi-second latency increases that require specialized optimization for interactive applications',
      'Sub-second latency characteristics suitable for interactive applications despite multiple safety checks',
      'Batch-only processing that requires request queuing for acceptable performance levels',
      'Performance that scales linearly with the number of concurrent guardrails executed'
    ],
    correctAnswer: 1,
    explanation: 'The framework enables production-scale deployment maintaining sub-second latency characteristics suitable for interactive applications despite executing multiple sophisticated safety checks per inference.'
  },
  {
    id: 'q5',
    question: 'How does NeMo Guardrails leverage GPU acceleration?',
    options: [
      'Only for model training and fine-tuning operations during guardrail development',
      'For compute-intensive guardrail operations including content classification and semantic analysis',
      'Exclusively for data preprocessing and tokenization tasks before guardrail evaluation',
      'Through automatic model quantization and compression for faster inference'
    ],
    correctAnswer: 1,
    explanation: 'NeMo Guardrails leverages GPU acceleration for compute-intensive guardrail operations including content classification, semantic analysis, and pattern detection that benefit from parallel processing.'
  },
  {
    id: 'q6',
    question: 'What advantage does the multi-dimensional protection approach provide?',
    options: [
      'Reduced computational requirements compared to single-focus safety measures',
      'Simplified configuration and management through unified policy definitions',
      'More effective protection by addressing diverse failure modes and attack vectors',
      'Automatic adaptation to new types of safety threats without manual updates'
    ],
    correctAnswer: 2,
    explanation: 'The multi-dimensional protection approach proves more effective than single-focus safety measures by addressing diverse failure modes and attack vectors that sophisticated adversaries or edge-case scenarios might exploit.'
  },
  {
    id: 'q7',
    question: 'How do organizations adapt guardrail behavior according to specific requirements?',
    options: [
      'By retraining guardrail models with domain-specific data and custom architectures',
      'Through policy configuration modifications without requiring guardrail model retraining',
      'Via manual rule coding in specialized programming languages for each use case',
      'By purchasing industry-specific guardrail packages from NVIDIA marketplace'
    ],
    correctAnswer: 1,
    explanation: 'Organizations adapt guardrail behavior through policy configuration modifications rather than ML development cycles, dramatically reducing time-to-deployment for policy updates.'
  },
  {
    id: 'q8',
    question: 'What types of content safety specifications can be configured in guardrail policies?',
    options: [
      'Only basic profanity filtering and spam detection for general applications',
      'Hate speech, violence, sexual content, self-harm, profanity, and domain-specific prohibited topics',
      'Exclusively regulatory compliance categories mandated by government agencies',
      'Custom categories that must be defined through machine learning model training'
    ],
    correctAnswer: 1,
    explanation: 'Content safety specifications define unacceptable content categories including hate speech, violence, sexual content, self-harm, profanity, and domain-specific prohibited topics with granular control over thresholds.'
  },
  {
    id: 'q9',
    question: 'What does RAG grounding verification accomplish in guardrail policies?',
    options: [
      'Ensures generated responses maintain fidelity to retrieved source materials and prevent hallucination',
      'Validates the accuracy of retrieval algorithms and search result rankings',
      'Optimizes vector database queries for improved semantic search performance',
      'Automatically generates citations and references for all model responses'
    ],
    correctAnswer: 0,
    explanation: 'RAG grounding policies verify that model-generated responses maintain fidelity to retrieved source materials, preventing hallucination responses that contradict or extend beyond supporting evidence.'
  },
  {
    id: 'q10',
    question: 'How does parallel rail orchestration improve performance compared to sequential evaluation?',
    options: [
      'By reducing the accuracy requirements for individual guardrails to speed up processing',
      'Through minimizing aggregate latency by executing multiple guardrails concurrently rather than sequentially',
      'By automatically disabling less critical guardrails during high-load periods',
      'Via caching guardrail results to avoid repeated evaluations for similar content'
    ],
    correctAnswer: 1,
    explanation: 'Parallel execution minimizes aggregate latency compared to sequential evaluation that accumulates individual guardrail execution times, reducing total evaluation time toward maximum individual duration.'
  },
  {
    id: 'q11',
    question: 'What types of adversarial attacks does jailbreak detection identify?',
    options: [
      'Network security intrusions and unauthorized system access attempts',
      'Prompt injection, role-playing attacks, encoding obfuscation, and other manipulation techniques',
      'Data poisoning and model inversion attacks during training phases',
      'Distributed denial-of-service attacks against inference endpoints'
    ],
    correctAnswer: 1,
    explanation: 'Jailbreak detection policies identify adversarial prompts attempting to manipulate models through prompt injection, role-playing attacks, encoding obfuscation, or other manipulation techniques.'
  },
  {
    id: 'q12',
    question: 'What types of PII does the detection capability identify and potentially redact?',
    options: [
      'Only credit card numbers and social security numbers for financial compliance',
      'Names, addresses, phone numbers, email addresses, financial identifiers, and health information',
      'Exclusively government-issued identification numbers and official documents',
      'Custom PII patterns that must be manually defined for each deployment'
    ],
    correctAnswer: 1,
    explanation: 'PII detection identifies personally identifiable information including names, addresses, phone numbers, email addresses, social security numbers, financial account identifiers, and health information.'
  },
  {
    id: 'q13',
    question: 'What types of responses can be triggered by guardrail policy violations?',
    options: [
      'Only complete response blocking or full approval without intermediate options',
      'Complete blocking, content filtering, conversation redirection, audit logging, and graduated escalation',
      'Automatic model retraining to prevent similar violations in future responses',
      'User account suspension and access restriction based on violation severity'
    ],
    correctAnswer: 1,
    explanation: 'Policy violations can trigger complete response blocking, content filtering or modification, conversation redirection, audit logging, graduated response escalation, and application-specific handling logic.'
  },
  {
    id: 'q14',
    question: 'How do topic control policies help manage conversation boundaries?',
    options: [
      'By automatically generating relevant topics based on user interest patterns',
      'Through constraining conversations to designated domains and preventing harmful topic drift',
      'By providing real-time topic suggestions to improve conversation engagement',
      'Via dynamic topic modeling that adapts to emerging conversation trends'
    ],
    correctAnswer: 1,
    explanation: 'Topic control policies constrain conversations to designated subject domains, preventing topic drift that could lead applications beyond their competency or expose proprietary information.'
  },
  {
    id: 'q15',
    question: 'What enterprise-grade characteristics does NeMo Guardrails provide for production deployment?',
    options: [
      'Basic single-user deployment with limited scalability and support options',
      'High-volume scalability, multi-application deployment, reliability guarantees, and enterprise support',
      'Cloud-only deployment without options for on-premises or hybrid configurations',
      'Open-source licensing with community support and self-managed maintenance'
    ],
    correctAnswer: 1,
    explanation: 'Enterprise readiness includes high-volume scalability supporting thousands of concurrent requests, multi-application deployment, reliability guarantees, and enterprise support for production environments.'
  }
];