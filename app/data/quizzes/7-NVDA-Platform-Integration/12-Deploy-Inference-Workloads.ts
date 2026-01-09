import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does NVIDIA NIM inference workload deployment provide?',
    options: [
      'Comprehensive framework for serving production-scale generative AI models through managed inference infrastructure',
      'Automated model training and fine-tuning platform for developing custom AI models',
      'Security framework for protecting deployed models against adversarial attacks and unauthorized access',
      'Data preprocessing and feature engineering pipeline for preparing training datasets'
    ],
    correctAnswer: 0,
    explanation: 'NVIDIA NIM inference workload deployment represents comprehensive framework for serving production-scale generative AI models through managed inference infrastructure.'
  },
  {
    id: 'q2',
    question: 'How does the deployment framework integrate NVIDIA NIM microservices?',
    options: [
      'Through requiring complete replacement of existing infrastructure with NVIDIA-specific implementations',
      'By providing orchestration platform integration enabling streamlined model serving without extensive infrastructure management',
      'Through automatic conversion of existing models to NIM-compatible formats and representations',
      'By implementing proprietary protocols that optimize performance exclusively for NVIDIA hardware'
    ],
    correctAnswer: 1,
    explanation: 'The deployment framework integrates NVIDIA NIM microservices with orchestration platforms enabling streamlined model serving without extensive infrastructure management overhead.'
  },
  {
    id: 'q3',
    question: 'What does project-based resource management provide for inference workloads?',
    options: [
      'Automatic cost optimization and billing allocation based on usage patterns and resource consumption',
      'Resource quota governance with GPU allocation, memory consumption, and concurrent workload limits',
      'Dynamic scaling that automatically adjusts resources based on real-time demand patterns',
      'Security isolation that prevents unauthorized access to computational resources and model artifacts'
    ],
    correctAnswer: 1,
    explanation: 'Project-based resource management assigns inference workloads to organizational projects with associated resource quotas governing GPU allocation, memory consumption, and concurrent workload limits.'
  },
  {
    id: 'q4',
    question: 'What operational advantages does NIM deployment deliver?',
    options: [
      'Automatic model optimization and accuracy improvements through advanced machine learning techniques',
      'Pre-configured microservices eliminating manual optimization, standardized patterns, and managed infrastructure abstraction',
      'Built-in security features and compliance capabilities meeting all regulatory requirements automatically',
      'Universal compatibility with any hardware platform without requiring specialized optimization or configuration'
    ],
    correctAnswer: 1,
    explanation: 'Operational simplification emerges from pre-configured NIM microservices eliminating manual optimization tasks, standardized deployment patterns, and managed infrastructure abstraction.'
  },
  {
    id: 'q5',
    question: 'How does model catalog integration simplify model selection?',
    options: [
      'Through automatic model recommendation based on application requirements and performance objectives',
      'By providing access to NVIDIA NIM microservices with categorization, documentation, and version management',
      'Through universal model compatibility ensuring all models work identically across deployment scenarios',
      'By implementing intelligent matching algorithms that select optimal models without manual intervention'
    ],
    correctAnswer: 1,
    explanation: 'Model catalog integration provides access to NVIDIA NIM microservices for diverse model architectures with catalog organization simplifying discovery through categorization, documentation, and version management.'
  },
  {
    id: 'q6',
    question: 'What do model profiles determine for deployment execution?',
    options: [
      'Model training parameters and fine-tuning configurations for improved accuracy on specific tasks',
      'Execution characteristics including inference engines, precision modes, and GPU hardware requirements',
      'Security policies and access control mechanisms for protecting model weights and inference data',
      'Networking configurations and data source connectivity for distributed inference deployments'
    ],
    correctAnswer: 1,
    explanation: 'Model profile specification determines execution characteristics including compatible inference engines, precision modes, latency-throughput optimization targets, and GPU hardware requirements.'
  },
  {
    id: 'q7',
    question: 'What does automatic profile selection enable for deployments?',
    options: [
      'Guaranteed optimal performance regardless of hardware capabilities and resource constraints',
      'NIM runtime choosing optimal profiles based on detected hardware capabilities and available resources',
      'Universal profile compatibility that works identically across all possible deployment scenarios',
      'Elimination of all manual configuration requirements through intelligent automation algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Automatic profile selection enables NIM runtime to choose optimal profiles based on detected hardware capabilities, considering performance optimization objectives and available infrastructure.'
  },
  {
    id: 'q8',
    question: 'How does endpoint access control balance security and operational requirements?',
    options: [
      'Through universal authentication that works with any identity provider without specific configuration',
      'By providing configurable authentication and authorization policies ranging from public to fine-grained permissions',
      'Through automatic security policy generation based on organizational structure and deployment context',
      'By implementing mandatory encryption and access logging for all endpoint interactions and communications'
    ],
    correctAnswer: 1,
    explanation: 'Endpoint access control determines inference endpoint invocation through configurable authentication and authorization policies, with options ranging from unrestricted public access to fine-grained permissions.'
  },
  {
    id: 'q9',
    question: 'What advantage does NGC-based model access provide?',
    options: [
      'Automatic model optimization and performance tuning based on deployment hardware characteristics',
      'On-demand download ensuring access to latest model versions without pre-staging requirements',
      'Built-in security scanning and vulnerability assessment for all downloaded model artifacts',
      'Universal model compatibility eliminating version conflicts and deployment configuration issues'
    ],
    correctAnswer: 1,
    explanation: 'NGC-based model access downloads models from NVIDIA catalog when workloads start, ensuring access to latest model versions without pre-staging requirements while validating entitlement.'
  },
  {
    id: 'q10',
    question: 'How does storage caching optimization improve deployment performance?',
    options: [
      'Through automatic data compression and deduplication that reduces storage requirements significantly',
      'By reducing model loading latency through persistent storage of downloaded models for reuse',
      'Through intelligent prefetching that anticipates model requirements based on usage patterns',
      'By implementing distributed caching that shares model artifacts across multiple deployment locations'
    ],
    correctAnswer: 1,
    explanation: 'Storage caching optimization reduces model loading latency by storing downloaded models in persistent storage for reuse across workload restarts, substantially reducing startup latency after initial download.'
  },
  {
    id: 'q11',
    question: 'What does compute resource specification fundamentally determine?',
    options: [
      'Model accuracy and quality characteristics achievable with specified computational constraints',
      'Workload performance characteristics, concurrent request capacity, and operational costs',
      'Security isolation and access control mechanisms for protecting computational resources',
      'Network bandwidth and data transfer capabilities for distributed inference operations'
    ],
    correctAnswer: 1,
    explanation: 'Compute resource specification defines GPU allocation, memory capacity, and computational resources, fundamentally determining workload performance characteristics, concurrent request capacity, and operational costs.'
  },
  {
    id: 'q12',
    question: 'How do replica management policies enable deployment scaling?',
    options: [
      'Through automatic performance tuning that optimizes resource utilization for varying workload characteristics',
      'By defining minimum and maximum instance counts for horizontal scaling adapting to request volumes',
      'Through intelligent workload distribution that balances requests across available computational resources',
      'By implementing predictive scaling that anticipates demand patterns based on historical usage'
    ],
    correctAnswer: 1,
    explanation: 'Replica management defines minimum and maximum instance counts for horizontal scaling adapting deployment capacity to varying request volumes, enabling autoscaling within defined bounds.'
  },
  {
    id: 'q13',
    question: 'What triggers autoscaling policy activation for dynamic capacity management?',
    options: [
      'Predictive algorithms that anticipate future demand based on historical patterns and trends',
      'Monitored metrics including request latency, throughput rates, and concurrent request counts',
      'Manual intervention from operators monitoring system performance and capacity utilization',
      'Scheduled scaling events based on predetermined time patterns and business requirements'
    ],
    correctAnswer: 1,
    explanation: 'Autoscaling policies trigger replica creation or deletion based on monitored metrics including request latency, throughput rates, and concurrent request counts exceeding configured thresholds.'
  },
  {
    id: 'q14',
    question: 'What benefit does scale-to-zero capability provide for resource management?',
    options: [
      'Automatic performance optimization that eliminates idle computational overhead and resource waste',
      'Complete replica elimination during idle periods freeing all associated resources for other workloads',
      'Intelligent resource allocation that dynamically adjusts capacity based on real-time demand patterns',
      'Enhanced security isolation that prevents unauthorized access to idle computational resources'
    ],
    correctAnswer: 1,
    explanation: 'Scale-to-zero capabilities enable complete replica elimination during idle periods freeing all associated resources, particularly valuable for development, testing, or intermittently-used models.'
  },
  {
    id: 'q15',
    question: 'How do annotation mechanisms support operational workflows?',
    options: [
      'Through automatic generation of operational documentation based on deployment characteristics',
      'By attaching descriptive metadata supporting documentation, monitoring integration, and automation tooling',
      'Through intelligent categorization that organizes workloads based on usage patterns and requirements',
      'By implementing version control that tracks changes and modifications to deployment configurations'
    ],
    correctAnswer: 1,
    explanation: 'Annotation mechanisms attach descriptive metadata to workloads supporting documentation, monitoring integration, and automation tooling through arbitrary key-value pairs for external tools.'
  }
];