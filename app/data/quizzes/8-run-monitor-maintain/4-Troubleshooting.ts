import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does TensorRT-LLM debugging and troubleshooting encompass?',
    options: [
      'Only basic performance monitoring without detailed diagnostic capabilities for complex issues',
      'Comprehensive methodology for identifying, diagnosing, and resolving compilation, building, execution, and deployment issues',
      'Automated error correction that resolves all problems without manual intervention requirements',
      'Simple logging mechanisms that capture basic information without sophisticated analysis capabilities'
    ],
    correctAnswer: 1,
    explanation: 'TensorRT-LLM debugging and troubleshooting represents comprehensive methodology for identifying, diagnosing, and resolving issues arising during compilation, model building, execution, and deployment of optimized large language model inference engines.'
  },
  {
    id: 'q2',
    question: 'How do debugging capabilities enable developers to inspect computation states?',
    options: [
      'Through automatic optimization that eliminates need for manual inspection of intermediate states',
      'By inspecting intermediate computation states, validating tensor shapes and values throughout execution pipelines',
      'Debugging applies only to final outputs without access to intermediate computation results',
      'Through universal compatibility ensuring identical behavior across all execution environments'
    ],
    correctAnswer: 1,
    explanation: 'Debugging capabilities enable developers to inspect intermediate computation states, validate tensor shapes and values throughout execution pipelines, and verify correctness of optimizations applied during engine compilation.'
  },
  {
    id: 'q3',
    question: 'What issue categories span the troubleshooting methodology?',
    options: [
      'Only runtime execution errors without consideration for installation or building problems',
      'Installation problems, model building failures, runtime execution errors, and performance issues',
      'Exclusively performance optimization without addressing functional correctness or error resolution',
      'Universal issues that apply identically across all deployment scenarios and environments'
    ],
    correctAnswer: 1,
    explanation: 'Issue categories span installation problems from dependency conflicts, model building failures from invalid network definitions, runtime execution errors from tensor shape mismatches or plugin failures, and performance issues from inefficient configurations.'
  },
  {
    id: 'q4',
    question: 'How do deployment reliability benefits result from comprehensive error handling?',
    options: [
      'Through automatic error correction that eliminates all possible failure modes',
      'By preventing undefined behaviors, detecting configuration mismatches, and enabling thorough pre-deployment testing',
      'Reliability improvements apply only to development environments without production relevance',
      'Through universal compatibility ensuring identical behavior across all deployment types'
    ],
    correctAnswer: 1,
    explanation: 'Deployment reliability benefits result from comprehensive error handling preventing undefined behaviors, validation mechanisms detecting configuration mismatches before execution, and debugging capabilities enabling thorough pre-deployment testing identifying issues under controlled conditions.'
  },
  {
    id: 'q5',
    question: 'What do clean rebuild strategies eliminate for compilation reliability?',
    options: [
      'All computational overhead from optimization processes without affecting correctness',
      'Stale build artifacts through complete removal of build directories before recompilation',
      'Security vulnerabilities through advanced protection mechanisms during compilation',
      'Dependency requirements by using universal compatibility libraries'
    ],
    correctAnswer: 1,
    explanation: 'Clean rebuild strategies eliminate stale build artifacts through complete removal of build directories before recompilation, sacrificing incremental compilation benefits for reliability ensuring each build starts from consistent clean state.'
  },
  {
    id: 'q6',
    question: 'How does intermediate tensor inspection enable computation validation?',
    options: [
      'Through automatic validation that eliminates need for manual inspection of computation results',
      'By examining computation results at arbitrary points within model execution rather than observing only final outputs',
      'Inspection applies only to final model outputs without access to intermediate computation states',
      'Through universal monitoring that works identically across all model architectures'
    ],
    correctAnswer: 1,
    explanation: 'Intermediate tensor inspection enables examining computation results at arbitrary points within model execution rather than observing only final outputs, requiring registering intermediate tensors as network outputs making them accessible during execution.'
  },
  {
    id: 'q7',
    question: 'What does network output registration accomplish for debugging flexibility?',
    options: [
      'Automatic optimization of network performance without manual configuration requirements',
      'Designating specific tensors for external visibility despite their intermediate position in computation graphs',
      'Universal compatibility ensuring all tensors can be accessed identically across deployments',
      'Elimination of debugging overhead through advanced efficiency algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Network output registration mechanisms designate specific tensors for external visibility despite their intermediate position in computation graphs, with registration APIs enabling dynamically marking tensors of interest without modifying core network definitions.'
  },
  {
    id: 'q8',
    question: 'How does debug mode execution provide comprehensive model visibility?',
    options: [
      'Through eliminating all performance overhead while maintaining full debugging capabilities',
      'By enabling detailed logging and tensor extraction during inference runs with performance overhead',
      'Debug mode applies only to development without relevance for production troubleshooting',
      'Through automatic debugging that requires no manual configuration or intervention'
    ],
    correctAnswer: 1,
    explanation: 'Debug mode execution enables detailed logging and tensor extraction during inference runs, incurring performance overhead from synchronization requirements and logging operations but providing comprehensive visibility into model behavior invaluable during development and troubleshooting.'
  },
  {
    id: 'q9',
    question: 'Why do plugin synchronization failures require synchronous execution mode?',
    options: [
      'Synchronous execution eliminates all plugin requirements through advanced optimization',
      'Because asynchronous kernel launches hide errors until subsequent operations attempt using incorrect results',
      'Synchronous mode provides automatic error correction without manual intervention requirements',
      'Plugin failures occur only in development environments without production relevance'
    ],
    correctAnswer: 1,
    explanation: 'Plugin synchronization failures arise from asynchronous kernel launches hiding errors until subsequent operations attempt using incorrect results, with synchronous execution mode forcing immediate error detection by blocking until each kernel completes and checking return status.'
  },
  {
    id: 'q10',
    question: 'What do shape validation mechanisms prevent during execution?',
    options: [
      'All performance overhead from validation processes without affecting error detection',
      'Execution with incompatible configurations by detecting mismatches between actual and build-time tensor shapes',
      'Shape validation applies only to static models without relevance for dynamic configurations',
      'Universal compatibility issues through automatic shape adjustment algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Shape validation mechanisms detect mismatches between actual tensor shapes and build-time specifications preventing execution with incompatible configurations, with shape errors manifesting when runtime inputs violate size constraints or dynamic shapes exceed optimization profile bounds.'
  },
  {
    id: 'q11',
    question: 'How does optimization profile information support shape constraint understanding?',
    options: [
      'Through automatic optimization that eliminates all shape constraint requirements',
      'By displaying allowable tensor shape ranges for dynamic dimensions enabling verification of runtime shape bounds',
      'Profile information applies only to static models without dynamic shape considerations',
      'Through universal compatibility ensuring identical shape handling across all models'
    ],
    correctAnswer: 1,
    explanation: 'Optimization profile information displays allowable tensor shape ranges for dynamic dimensions enabling verification that runtime shapes fall within acceptable bounds, revealing minimum, optimal, and maximum allowed shapes providing context for understanding shape-related errors.'
  },
  {
    id: 'q12',
    question: 'What resolution strategies address resource exhaustion issues?',
    options: [
      'Only hardware upgrades without consideration for configuration optimization or efficiency improvements',
      'Reducing resource requirements through smaller configurations, enabling memory-saving optimizations, or upgrading hardware',
      'Resource exhaustion requires complete system replacement without alternative solutions',
      'Universal optimization that works identically regardless of specific resource constraints'
    ],
    correctAnswer: 1,
    explanation: 'Resource exhaustion resolution strategies include reducing resource requirements through smaller configurations, enabling memory-saving optimizations, or upgrading hardware providing additional capacity when memory requirements exceed available capacity from oversized models or excessive batch sizes.'
  },
  {
    id: 'q13',
    question: 'How does batch size optimization balance competing requirements?',
    options: [
      'Through automatic optimization that eliminates manual configuration requirements',
      'By balancing throughput benefits from concurrent processing against memory costs from maintaining multiple sequence states',
      'Batch size optimization applies only to training without relevance for inference deployments',
      'Through universal batch sizes that work optimally across all deployment scenarios'
    ],
    correctAnswer: 1,
    explanation: 'Batch size optimization balances throughput benefits from processing multiple requests simultaneously against memory costs from maintaining state for concurrent sequences, with smaller batches reducing peak memory consumption while larger batches improve hardware utilization.'
  },
  {
    id: 'q14',
    question: 'What do communication library configuration issues manifest as during distributed execution?',
    options: [
      'Only performance improvements without any negative effects on system operation',
      'Communication timeouts, synchronization deadlocks, or data corruption from improper buffer management',
      'Communication issues apply only to single-GPU scenarios without multi-GPU relevance',
      'Universal compatibility ensuring identical behavior across all communication libraries'
    ],
    correctAnswer: 1,
    explanation: 'Communication library configuration issues manifest as communication timeouts, synchronization deadlocks, or data corruption from improper buffer management, requiring adequate shared memory allocation, appropriate memory locking limits, and correct network setup for multi-node scenarios.'
  },
  {
    id: 'q15',
    question: 'Why does cluster scheduler integration require understanding environment-specific constraints?',
    options: [
      'Scheduler integration provides automatic optimization without configuration requirements',
      'Because managed compute environments impose constraints on communication patterns and process management approaches',
      'Cluster scheduling applies only to development environments without production relevance',
      'Through universal compatibility ensuring identical behavior across all scheduler types'
    ],
    correctAnswer: 1,
    explanation: 'Cluster scheduler integration accommodates execution within managed compute environments requiring understanding environment-specific constraints, communication patterns, and process management approaches, ensuring distributed execution operates correctly within managed environments without conflicts from scheduler-imposed constraints.'
  }
];