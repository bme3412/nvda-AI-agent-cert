import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is machine learning model monitoring and why does it prove essential?',
    options: [
      'A deployment platform for scaling machine learning models across distributed infrastructure',
      'Systematic tracking and analysis of deployed model behavior ensuring continued performance alignment with expectations',
      'An automated optimization system for improving model accuracy through continuous retraining',
      'A security framework for protecting machine learning models from unauthorized access'
    ],
    correctAnswer: 1,
    explanation: 'Machine learning model monitoring represents systematic tracking and analysis of deployed model behavior ensuring continued performance alignment with expectations despite dynamic real-world conditions where data distributions shift and operational contexts evolve beyond training assumptions.'
  },
  {
    id: 'q2',
    question: 'How does monitoring complexity exceed traditional software systems?',
    options: [
      'ML systems require only functional testing without operational monitoring considerations',
      'Due to behavior emerging from interactions between code, trained models, and unpredictable input data',
      'Machine learning monitoring uses identical approaches to traditional software without differences',
      'ML systems exhibit completely predictable behavior eliminating monitoring complexity'
    ],
    correctAnswer: 1,
    explanation: 'Monitoring complexity exceeds traditional software systems because machine learning systems exhibit behavior emerging from interactions between code, trained models, and input data originating from unpredictable real-world sources, unlike traditional software behavior deriving entirely from code-specified rules.'
  },
  {
    id: 'q3',
    question: 'What component interactions create entanglements in ML system monitoring?',
    options: [
      'All components operate independently without affecting overall system behavior',
      'Changes in any component potentially affect overall behavior in non-obvious ways',
      'Only code changes affect system behavior while data and model changes prove inconsequential',
      'Component interactions follow predictable patterns enabling straightforward isolation'
    ],
    correctAnswer: 1,
    explanation: 'System component interactions create entanglements where changes in any component potentially affect overall behavior in non-obvious ways, with data distribution shifts altering learned approximations, model architecture modifications changing inference characteristics, and code updates modifying processing pipelines.'
  },
  {
    id: 'q4',
    question: 'How do stakeholder perspective differences complicate monitoring implementation?',
    options: [
      'All stakeholders focus on identical monitoring objectives eliminating perspective conflicts',
      'Data scientists emphasize functional objectives while engineers prioritize operational objectives',
      'Monitoring requirements prove universal across all roles without perspective-specific needs',
      'Stakeholder differences only affect reporting without impacting monitoring implementation'
    ],
    correctAnswer: 1,
    explanation: 'Stakeholder perspective diversity complicates monitoring as data scientists focus on functional objectives including model accuracy and prediction quality, while engineers prioritize operational objectives encompassing system reliability, resource utilization, and service availability.'
  },
  {
    id: 'q5',
    question: 'How does business value protection emerge from model monitoring?',
    options: [
      'Monitoring automatically optimizes business value without manual intervention',
      'By ensuring models continue delivering expected outcomes despite environmental changes preventing value erosion',
      'Business value remains constant regardless of model performance making monitoring unnecessary',
      'Protection occurs only through security measures without performance considerations'
    ],
    correctAnswer: 1,
    explanation: 'Business value protection emerges from ensuring models continue delivering expected outcomes despite environmental changes, with unmonitored degradation allowing models producing suboptimal decisions to remain deployed eroding business value while timely detection enables interventions maintaining value delivery.'
  },
  {
    id: 'q6',
    question: 'What does data quality validation prevent in production systems?',
    options: [
      'All possible data issues through comprehensive automated correction',
      'Garbage-in-garbage-out scenarios by ensuring production data maintains expected characteristics before reaching models',
      'Any need for data preprocessing through universal compatibility algorithms',
      'All performance issues through advanced optimization techniques'
    ],
    correctAnswer: 1,
    explanation: 'Data quality validation ensures production data maintains expected characteristics before reaching models preventing garbage-in-garbage-out scenarios, with validation checks encompassing data type consistency, value range verification, and completeness assessment identifying missing required fields.'
  },
  {
    id: 'q7',
    question: 'Why does data drift detection prove essential for model relevance?',
    options: [
      'Data distributions remain constant making drift detection unnecessary for system operation',
      'Because real-world conditions evolve rendering models trained on historical data increasingly outdated',
      'Drift detection applies only to training without relevance for production deployments',
      'Model performance proves independent of data distribution changes eliminating drift concerns'
    ],
    correctAnswer: 1,
    explanation: 'Data drift detection identifies statistical distribution shifts between training data and production inputs revealing environment evolution potentially degrading model relevance, proving essential as real-world conditions evolve rendering models trained on historical data increasingly outdated.'
  },
  {
    id: 'q8',
    question: 'What does model drift detection identify for predictive accuracy?',
    options: [
      'Only improvements in model performance without degradation considerations',
      'Degradation in predictive accuracy over time as learned patterns become outdated relative to current distributions',
      'Drift detection focuses exclusively on hardware performance without accuracy considerations',
      'Model accuracy remains constant eliminating need for drift detection'
    ],
    correctAnswer: 1,
    explanation: 'Model drift detection identifies degradation in predictive accuracy over time as learned patterns become outdated relative to current data distributions, with performance metrics tracking revealing trends, comparison against historical baselines quantifying degradation magnitude, and threshold-based alerting triggering interventions.'
  },
  {
    id: 'q9',
    question: 'How does prediction confidence monitoring enable risk-aware decision making?',
    options: [
      'Confidence monitoring eliminates all uncertainty from model predictions',
      'By tracking model certainty revealing when models encounter unfamiliar scenarios requiring human review',
      'Prediction confidence remains constant across all scenarios eliminating monitoring value',
      'Confidence monitoring applies only to training without production relevance'
    ],
    correctAnswer: 1,
    explanation: 'Prediction confidence monitoring tracks model certainty in outputs revealing when models encounter unfamiliar scenarios, with low confidence predictions indicating model uncertainty suggesting human review may prove valuable while confidence distribution shifts potentially signal data drift or model degradation.'
  },
  {
    id: 'q10',
    question: 'What does ground truth acquisition enable for performance measurement?',
    options: [
      'Universal performance measurement that works identically across all application types',
      'Direct performance measurement when actual outcomes become available enabling accurate quality assessment',
      'Automatic performance optimization without manual measurement requirements',
      'Ground truth remains unnecessary for production model monitoring'
    ],
    correctAnswer: 1,
    explanation: 'Ground truth acquisition enables direct performance measurement when actual outcomes become available enabling accurate quality assessment, with acquisition strategies varying by application and availability fundamentally determining monitoring approach feasibility.'
  },
  {
    id: 'q11',
    question: 'Why does latency measurement track percentile and tail behavior?',
    options: [
      'Average latency provides complete information without need for distribution analysis',
      'Because tail behavior determines worst-case user experience beyond just average performance',
      'Latency measurement focuses exclusively on optimal scenarios without tail considerations',
      'Percentile tracking applies only to development without production relevance'
    ],
    correctAnswer: 1,
    explanation: 'Latency measurement tracks processing time with latency distributions exposing not just average performance but consistency and tail behavior determining worst-case user experience, proving critical for interactive applications where delays degrade user experience.'
  },
  {
    id: 'q12',
    question: 'How does pipeline monitoring ensure reliable data flow?',
    options: [
      'Pipeline monitoring focuses exclusively on final outputs without intermediate considerations',
      'Through ensuring reliable data flow from sources through transformation stages to model consumption',
      'Data pipelines operate independently without requiring monitoring for system operation',
      'Pipeline monitoring applies only to training without production deployment relevance'
    ],
    correctAnswer: 1,
    explanation: 'Data pipeline monitoring ensures reliable data flow from sources through transformation stages to model consumption, with metrics including data freshness measuring delays, throughput tracking volume processing rates, error rates quantifying failures, and quality metrics assessing output characteristics.'
  },
  {
    id: 'q13',
    question: 'What does cost attribution enable for infrastructure management?',
    options: [
      'Universal cost optimization that eliminates all infrastructure expenses',
      'Associating expenses with specific models, environments, or organizational units enabling accountability',
      'Cost attribution applies only to development without production relevance',
      'Infrastructure costs remain constant making attribution unnecessary'
    ],
    correctAnswer: 1,
    explanation: 'Infrastructure cost tracking quantifies expenses from computational resources with cost attribution associating expenses with specific models, environments, or organizational units enabling accountability and optimization prioritization, revealing cost trends informing capacity planning and identifying cost spikes.'
  },
  {
    id: 'q14',
    question: 'How does real-time alerting transform monitoring data into actionable signals?',
    options: [
      'Alerting eliminates all monitoring requirements through automatic problem resolution',
      'By notifying stakeholders when metrics exceed thresholds or exhibit anomalous patterns driving intervention',
      'Real-time alerting applies only to security without performance monitoring considerations',
      'Monitoring data provides complete information without requiring alert mechanisms'
    ],
    correctAnswer: 1,
    explanation: 'Real-time alerting mechanisms notify stakeholders when monitored metrics exceed thresholds or exhibit anomalous patterns, with alert configuration defining thresholds balancing sensitivity against false positive rates, routing directing notifications to appropriate teams, and escalation procedures ensuring critical issues receive adequate attention.'
  },
  {
    id: 'q15',
    question: 'Why does integration with development workflows prevent monitoring gaps?',
    options: [
      'Development integration eliminates all monitoring requirements through automated optimization',
      'By enabling monitoring from experimentation through production deployment maintaining continuity across stages',
      'Monitoring applies exclusively to production without development or staging relevance',
      'Development workflows operate independently without requiring monitoring integration'
    ],
    correctAnswer: 1,
    explanation: 'Integration with development workflows enables monitoring from experimentation through production deployment, with experiment tracking capturing development-phase metrics, staging environment monitoring validating pre-production behavior, and production monitoring ensuring operational performance, preventing monitoring gaps and maintaining continuity.'
  }
];