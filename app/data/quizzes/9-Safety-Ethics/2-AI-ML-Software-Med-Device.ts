import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What do AI/ML technologies in medical devices represent?',
    options: [
      'Traditional rule-based software systems with enhanced computational capabilities and processing speed',
      'Machine-based systems making predictions, recommendations, or decisions influencing healthcare delivery through automated clinical data analysis',
      'Simple data storage and retrieval systems for managing patient information and medical records',
      'Hardware-only solutions for medical imaging and diagnostic equipment without software components'
    ],
    correctAnswer: 1,
    explanation: 'AI/ML technologies in medical devices represent machine-based systems making predictions, recommendations, or decisions influencing healthcare delivery through automated analysis of clinical data, encompassing capabilities perceiving clinical environments and formulating actionable options through model inference.'
  },
  {
    id: 'q2',
    question: 'What distinguishes adaptive learning capabilities in modern AI/ML medical devices?',
    options: [
      'Static software performance that remains constant throughout device operational lifetime',
      'Performance improvement through real-world experience accumulation, enabling refinement and adaptation',
      'Universal compatibility ensuring identical performance across all patient populations',
      'Complete automation eliminating need for any clinical oversight or human intervention'
    ],
    correctAnswer: 1,
    explanation: 'Adaptive learning capabilities distinguish modern AI/ML medical devices from traditional static software where performance improves through real-world experience accumulation, enabling devices to refine diagnostic accuracy, adapt monitoring algorithms to individual characteristics, and optimize interventions based on outcomes.'
  },
  {
    id: 'q3',
    question: 'Why does regulatory complexity emerge from AI/ML medical device characteristics?',
    options: [
      'AI/ML devices use identical regulatory frameworks to traditional software without complications',
      'Due to continuous evolution through learning, performance dependence on deployment environment, and behavior influenced by training data',
      'Regulatory frameworks prove unnecessary for AI/ML devices due to automatic safety assurance',
      'All AI/ML devices operate identically requiring universal regulatory approaches'
    ],
    correctAnswer: 1,
    explanation: 'Regulatory complexity emerges from AI/ML medical device characteristics including continuous evolution through learning, performance dependence on deployment environment data, and behavior influenced by training data characteristics alongside code specifications, requiring novel regulatory approaches.'
  },
  {
    id: 'q4',
    question: 'How does diagnostic enhancement emerge from AI/ML integration?',
    options: [
      'Through automatic diagnosis that eliminates need for clinical expertise and human oversight',
      'Via pattern recognition identifying subtle disease indicators, automated analysis reducing interpretation time, and continuous learning',
      'Through universal diagnostic capabilities that work identically for all medical conditions',
      'By replacing all traditional diagnostic methods with automated alternatives'
    ],
    correctAnswer: 1,
    explanation: 'Diagnostic enhancement emerges from pattern recognition capabilities identifying subtle disease indicators exceeding human perception, automated analysis reducing interpretation time enabling faster clinical decisions, and continuous learning improving accuracy through exposure to diverse cases.'
  },
  {
    id: 'q5',
    question: 'What therapeutic optimization benefits result from adaptive algorithms?',
    options: [
      'Universal treatment protocols that work optimally for all patients without customization',
      'Personalized interventions, predictive capabilities enabling proactive adjustments, and continuous protocol refinement',
      'Complete automation eliminating need for clinical decision-making and oversight',
      'Standard treatment approaches without consideration for individual patient characteristics'
    ],
    correctAnswer: 1,
    explanation: 'Therapeutic optimization benefits result from adaptive algorithms personalizing interventions based on individual patient responses, predictive capabilities enabling proactive treatment adjustments before complications manifest, and continuous refinement improving protocols based on outcome observations.'
  },
  {
    id: 'q6',
    question: 'How do diagnostic systems employ AI/ML for automated pathology detection?',
    options: [
      'Through universal detection that works identically for all pathology types without specialization',
      'Via automated pathology detection, quantitative assessment, and risk stratification with accuracy approaching human experts',
      'Through simple image enhancement without sophisticated analysis or interpretation capabilities',
      'By replacing all human interpretation with fully automated diagnosis without oversight'
    ],
    correctAnswer: 1,
    explanation: 'Diagnostic systems employ AI/ML for automated pathology detection, quantitative assessment, and risk stratification, with imaging analysis applications identifying lesions, classifying abnormalities, and measuring anatomical structures with accuracy approaching or exceeding human experts.'
  },
  {
    id: 'q7',
    question: 'What do monitoring devices leverage machine learning for?',
    options: [
      'Only basic data collection without sophisticated analysis or interpretation capabilities',
      'Continuous physiological signal analysis, anomaly detection, and event prediction with adaptive thresholds',
      'Universal monitoring that works identically for all patients without individualization',
      'Simple alarm generation without predictive capabilities or personalized assessment'
    ],
    correctAnswer: 1,
    explanation: 'Monitoring devices leverage machine learning for continuous physiological signal analysis, anomaly detection, and event prediction, with smart sensors estimating clinical event probabilities from complex signal patterns and adapting detection thresholds to individual baselines.'
  },
  {
    id: 'q8',
    question: 'How do premarket review pathways determine market authorization?',
    options: [
      'Through universal approval processes that apply identically to all device types',
      'Via risk-appropriate evaluation mechanisms including clearance pathways, de novo classification, and premarket approval',
      'Through automatic approval for all AI/ML devices without regulatory evaluation',
      'By requiring identical evaluation procedures regardless of device risk or complexity'
    ],
    correctAnswer: 1,
    explanation: 'Premarket review pathways determine market authorization through risk-appropriate evaluation mechanisms, with clearance pathways assessing safety and effectiveness relative to existing products, de novo classification establishing new categories, and premarket approval providing rigorous evaluation for highest-risk devices.'
  },
  {
    id: 'q9',
    question: 'What do predetermined change control plans enable for AI/ML devices?',
    options: [
      'Universal changes without any regulatory oversight or approval requirements',
      'Authorized modification types without individual premarket reviews while maintaining regulatory oversight',
      'Complete modification freedom without validation requirements or performance monitoring',
      'Standard changes that apply identically across all device types without customization'
    ],
    correctAnswer: 1,
    explanation: 'Predetermined change control plans enable authorized modification types without individual premarket reviews, specifying allowable change scopes, validation requirements demonstrating safety maintenance, and monitoring mechanisms detecting unexpected impacts while accommodating continuous improvement.'
  },
  {
    id: 'q10',
    question: 'Why do training data quality considerations prove fundamental?',
    options: [
      'Training data quality has minimal impact on algorithm performance in medical applications',
      'Because data quality fundamentally determines algorithm performance through representativeness, labeling accuracy, and bias mitigation',
      'All training data provides identical quality regardless of curation and preparation methods',
      'Training data requirements prove identical across all medical device types'
    ],
    correctAnswer: 1,
    explanation: 'Training data quality considerations address representativeness ensuring diversity matches intended use populations, labeling accuracy providing reliable learning signals, and bias mitigation preventing systematic errors, with data quality fundamentally determining algorithm performance making rigorous curation essential.'
  },
  {
    id: 'q11',
    question: 'What does algorithm validation demonstrate for medical device safety?',
    options: [
      'Universal validation that guarantees perfect performance across all possible scenarios',
      'Performance adequacy through testing, robustness verification, and generalization assessment',
      'Only basic functionality without consideration for safety or effectiveness requirements',
      'Automatic validation eliminating need for comprehensive testing and evaluation'
    ],
    correctAnswer: 1,
    explanation: 'Algorithm validation demonstrates performance adequacy through testing across representative scenarios, robustness verification ensuring stable operation despite input variations, and generalization assessment confirming performance beyond training data, with validation rigor scaling with device risk.'
  },
  {
    id: 'q12',
    question: 'How does performance monitoring establish ongoing surveillance?',
    options: [
      'Through automatic monitoring that eliminates need for manual oversight or intervention',
      'By detecting degradation, identifying failure patterns, and triggering interventions when performance falls below thresholds',
      'Through universal monitoring that works identically for all device types without customization',
      'By monitoring only during development without relevance for post-deployment surveillance'
    ],
    correctAnswer: 1,
    explanation: 'Performance monitoring establishes ongoing surveillance detecting degradation, identifying failure patterns, and triggering interventions when performance falls below acceptable thresholds, proving essential for adaptive systems where deployment environment differences from development conditions may impact performance.'
  },
  {
    id: 'q13',
    question: 'What do modification scope specifications define for change control?',
    options: [
      'Universal changes that apply identically to all device types without restriction',
      'Allowable changes including algorithm updates, training data additions, and functionality enhancements',
      'Complete modification freedom without any boundaries or risk considerations',
      'Standard modifications that require identical validation regardless of scope'
    ],
    correctAnswer: 1,
    explanation: 'Modification scope specification defines allowable changes including algorithm updates, training data additions, and functionality enhancements, with scope boundaries balancing continuous improvement enablement against change risk management, permitting beneficial modifications while constraining potentially hazardous alterations.'
  },
  {
    id: 'q14',
    question: 'Why does clinical validation prove essential for real-world performance?',
    options: [
      'Clinical validation provides identical results to laboratory testing without additional insights',
      'Because it demonstrates real-world performance through prospective studies, retrospective analysis, or post-market surveillance',
      'Clinical validation proves unnecessary for AI/ML devices due to algorithmic testing sufficiency',
      'All validation approaches provide identical information without complementary value'
    ],
    correctAnswer: 1,
    explanation: 'Clinical validation demonstrates real-world performance through prospective studies, retrospective analysis, or post-market surveillance, encompassing diverse patient populations, varied clinical settings, and extended time periods, ensuring device effectiveness translates from development through actual clinical use.'
  },
  {
    id: 'q15',
    question: 'What does cross-center collaboration coordinate across product domains?',
    options: [
      'Only device-specific approaches without consideration for other product categories',
      'AI/ML approaches across biologics, drugs, devices, and combination products for consistent frameworks',
      'Universal approaches that apply identically regardless of product characteristics',
      'Independent approaches without coordination or knowledge sharing across domains'
    ],
    correctAnswer: 1,
    explanation: 'Cross-center collaboration coordinates AI/ML approaches across biologics, drugs, devices, and combination products, ensuring consistent frameworks, sharing learnings applicable across product types, and promoting regulatory coherence given AI/ML technology applicability spans traditional product categories requiring unified approaches.'
  }
];