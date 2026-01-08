import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what are the main limitations of traditional fraud detection models that lead to their failure in modern fraud scenarios?',
    options: [
      'They require too much computational power and are expensive to operate in real-time environments',
      'They function as black boxes with little interpretability and struggle with concept drift when attacker behavior changes over time',
      'They can only detect fraud patterns that occur during business hours and fail with international transactions',
      'They are too complex for analysts to understand and require specialized technical expertise to maintain'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "despite their statistical power, these models often function as black boxes, offering little interpretability and struggling with concept drift — a critical issue in fraud scenarios where attacker behavior changes over time." This lack of interpretability and inability to adapt to changing fraud patterns are identified as key limitations.'
  },
  {
    id: 'q2',
    question: 'What are the six specialized AI agents in the multi-agent fraud detection system described in the document?',
    options: [
      'Data Collector, Pattern Matcher, Risk Calculator, Report Generator, Decision Maker, and Feedback Processor',
      'Contextual Feature Extractor, Pattern Divergence Analyst, Risk Synthesizer Agent, Explanation Generation Agent, Decision Recommender Agent, and Feedback Integration Loop',
      'Transaction Monitor, Anomaly Detector, Fraud Classifier, Alert Generator, Review Router, and Learning Engine',
      'Input Validator, Behavior Analyzer, Threat Assessor, Compliance Checker, Action Executor, and Performance Tracker'
    ],
    correctAnswer: 1,
    explanation: 'The document explicitly lists the six agents: "Agent 1: Contextual Feature Extractor," "Agent 2: Pattern Divergence Analyst," "Agent 3: Risk Synthesizer Agent," "Agent 4: Explanation Generation Agent," "Agent 5: Decision Recommender Agent," and "Agent 6: Feedback Integration Loop." Each agent has a specialized role in the fraud detection pipeline.'
  },
  {
    id: 'q3',
    question: 'What is the primary function of the Pattern Divergence Analyst agent in the multi-agent fraud detection system?',
    options: [
      'It generates plain-language justifications for risk classifications to meet audit requirements',
      'It compares transactions to dynamic behavioral profiles and evaluates deviations in transaction patterns, devices, and frequency',
      'It enriches transaction metadata with contextual signals like merchant behavior and device fingerprint anomalies',
      'It performs weighted decisioning based on risk scores, confidence thresholds, and customer tiers'
    ],
    correctAnswer: 1,
    explanation: 'The document describes Agent 2 as comparing "the transaction to a dynamic behavioral profile of the user" and evaluating "Deviations in transaction size/time/geo, New devices or merchant IDs, Sudden frequency bursts." This agent specifically focuses on detecting patterns that diverge from normal user behavior.'
  },
  {
    id: 'q4',
    question: 'According to the document, what key benefits does the multi-agent architecture provide over monolithic fraud models?',
    options: [
      'Lower computational costs, faster processing speeds, and reduced memory requirements',
      'Explainability, Scalability, Domain Adaptability, Resilience, and Human-in-the-loop readiness',
      'Better data compression, improved network security, and enhanced database performance',
      'Simplified maintenance, reduced training time, and automatic feature selection'
    ],
    correctAnswer: 1,
    explanation: 'The document explicitly states the key benefits: "Explainability: Every decision is narratively justified and traceable. Scalability: Each agent can scale independently. Domain Adaptability: You can swap or fine-tune agents per region or risk category. Resilience: If one agent fails, others can still carry the signal forward. Human-in-the-loop Ready: Designed for seamless analyst intervention."'
  },
  {
    id: 'q5',
    question: 'What does the Feedback Integration Loop agent learn from to ensure long-term improvement without full model retraining?',
    options: [
      'Real-time transaction volumes, system performance metrics, and database query speeds',
      'Market trends, economic indicators, and seasonal spending patterns',
      'Analyst overrides, post-event fraud labeling, and customer dispute resolutions',
      'Network traffic patterns, API response times, and user interface interactions'
    ],
    correctAnswer: 2,
    explanation: 'The document specifies that the Feedback Integration Loop agent "learns from feedback loops: Analyst overrides, Post-event fraud labeling, Customer dispute resolutions. It fine-tunes the agent-specific prompting and weights based on this feedback, ensuring long-term improvement without full model retraining."'
  },
  {
    id: 'q6',
    question: 'According to the document, what specific improvements were achieved by implementing the agentic fraud detection system?',
    options: [
      'Processing time reduced by 50%, storage costs decreased by 40%, and system uptime improved to 99.9%',
      'Precision improved by 18%, false positives reduced by 30%, and analysts now use AI-generated rationale summaries in their workflows',
      'Customer satisfaction increased by 25%, transaction volume capacity doubled, and regulatory compliance scores improved by 35%',
      'Energy consumption decreased by 20%, hardware requirements reduced by 15%, and maintenance costs lowered by 45%'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The implementation has shown early success. Precision improved by 18%, false positives reduced by 30%, and analysts now use rationale summaries generated by Agent 4 directly in their review workflows." These specific metrics demonstrate the quantifiable improvements achieved.'
  }
];

