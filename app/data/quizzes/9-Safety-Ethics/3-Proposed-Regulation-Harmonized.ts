import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does the EU AI Act represent for artificial intelligence regulation?',
    options: [
      'Industry-specific guidelines for AI development without legal enforcement mechanisms',
      'Harmonized regulatory framework establishing rules for AI system development, deployment, and usage across EU member states',
      'Voluntary standards for AI safety without mandatory compliance requirements',
      'Technical specifications for AI hardware without consideration for software or applications'
    ],
    correctAnswer: 1,
    explanation: 'The EU AI Act represents harmonized regulatory framework establishing rules for artificial intelligence system development, deployment, and usage across European Union member states, addressing dual objectives of promoting AI adoption while managing risks to health, safety, and fundamental rights.'
  },
  {
    id: 'q2',
    question: 'How does the risk-based regulatory approach tailor requirements?',
    options: [
      'Through automatic risk assessment that eliminates need for regulatory categorization',
      'By applying maximum restrictions to all AI systems to ensure comprehensive safety',
      'By tailoring requirements proportionally to potential harms with prohibitions, high-risk compliance, and transparency obligations',
      'Through universal requirements that apply identically to all AI systems regardless of risk'
    ],
    correctAnswer: 2,
    explanation: 'Risk-based regulatory approach tailors requirements proportionally to potential harms where AI systems creating unacceptable risks face prohibition, high-risk systems require compliance with mandatory requirements and conformity assessment, and low-risk systems face minimal transparency obligations.'
  },
  {
    id: 'q3',
    question: 'What do harmonization objectives ensure for member state protection?',
    options: [
      'Consistent protection levels preventing regulatory arbitrage and competitive disadvantages from divergent rules',
      'Different protection levels across member states to accommodate local preferences',
      'Minimum protection standards allowing member states to impose additional restrictions',
      'Universal protection that eliminates all regulatory differences between jurisdictions'
    ],
    correctAnswer: 0,
    explanation: 'Harmonization objectives ensure consistent protection levels across member states preventing regulatory arbitrage or competitive disadvantages from divergent national rules, with uniform rules facilitating cross-border AI system circulation and establishing European standards potentially influencing global governance.'
  },
  {
    id: 'q4',
    question: 'Why does fundamental rights protection constitute core regulatory purpose?',
    options: [
      'Rights protection applies only to high-risk systems without broader regulatory relevance',
      'All AI systems automatically respect fundamental rights without explicit protection mechanisms',
      'Because AI systems potentially amplify discriminatory patterns, enable surveillance, and make consequential decisions affecting opportunities',
      'Fundamental rights prove unnecessary considerations for AI system regulation'
    ],
    correctAnswer: 2,
    explanation: 'Fundamental rights protection constitutes core regulatory purpose ensuring AI systems respect human dignity, privacy, data protection, and non-discrimination, recognizing AI systems\' potential for amplifying discriminatory patterns, enabling surveillance potentially chilling freedoms, and making consequential decisions affecting life opportunities.'
  },
  {
    id: 'q5',
    question: 'How does trust establishment emerge from regulatory implementation?',
    options: [
      'Trust proves irrelevant for AI adoption making regulatory mechanisms unnecessary',
      'All AI systems automatically command user trust regardless of safety or rights considerations',
      'Through safety assurance mechanisms, fundamental rights protection, and transparency requirements enabling informed adoption',
      'Trust develops automatically without need for regulatory safety assurance mechanisms'
    ],
    correctAnswer: 2,
    explanation: 'Trust establishment emerges from safety assurance mechanisms, fundamental rights protection, and transparency requirements enabling informed adoption decisions, with user confidence proving essential for AI uptake where concerns about safety, fairness, or privacy might otherwise limit deployment despite potential benefits.'
  },
  {
    id: 'q6',
    question: 'What practices constitute prohibited AI applications under the Act?',
    options: [
      'Subliminal manipulation, social scoring by public authorities, and real-time biometric identification with limited exceptions',
      'All commercial AI applications without exception due to inherent risks',
      'Any AI system that processes personal data regardless of purpose or safeguards',
      'Technical AI research and development activities in academic institutions'
    ],
    correctAnswer: 0,
    explanation: 'Prohibited practices constitute AI applications deemed unacceptable including subliminal manipulation techniques exploiting consciousness limitations, social scoring by public authorities enabling discriminatory treatment, and real-time remote biometric identification in public spaces for law enforcement with limited exceptions.'
  },
  {
    id: 'q7',
    question: 'How does high-risk classification apply to AI systems?',
    options: [
      'Only AI systems used in healthcare qualify for high-risk classification',
      'High-risk classification proves irrelevant under the regulatory framework',
      'Based on significant threats to health, safety, or fundamental rights considering intended purpose and deployment context',
      'All AI systems automatically qualify as high-risk regardless of purpose or deployment'
    ],
    correctAnswer: 2,
    explanation: 'High-risk classification applies to AI systems posing significant threats to health, safety, or fundamental rights based on intended purpose and deployment context, with classification methodology considering function performed, specific usage modalities, and sectors where deployment occurs.'
  },
  {
    id: 'q8',
    question: 'What domains encompass standalone high-risk AI system applications?',
    options: [
      'Biometric identification, critical infrastructure, education access, employment management, essential services, law enforcement, and justice',
      'Only government applications without private sector relevance or coverage',
      'Exclusively consumer applications without business or institutional considerations',
      'Technical research applications without practical deployment or operational use'
    ],
    correctAnswer: 0,
    explanation: 'Standalone high-risk domains encompass biometric identification and categorization, critical infrastructure management, education and vocational training access, employment and worker management, essential service access including credit scoring, law enforcement, migration and border control, and justice administration.'
  },
  {
    id: 'q9',
    question: 'What do data governance requirements ensure for high-risk systems?',
    options: [
      'Any available data proves suitable for training without curation requirements',
      'Data governance proves unnecessary for high-risk AI system compliance',
      'Training, validation, and testing datasets exhibit appropriate quality including relevance, representativeness, and error minimization',
      'Universal data usage without quality considerations or restrictions'
    ],
    correctAnswer: 2,
    explanation: 'Data governance requirements ensure training, validation, and testing datasets exhibit appropriate quality characteristics including relevance to intended purpose, representativeness of deployment populations, error minimization, and completeness for task requirements, addressing concerns about bias perpetuation and discrimination.'
  },
  {
    id: 'q10',
    question: 'What do human oversight mechanisms ensure for AI systems?',
    options: [
      'Natural persons can understand system functioning, intervene when necessary, and override system outputs',
      'Complete human replacement with automated decision-making without oversight requirements',
      'Human involvement proves unnecessary for automated systems with advanced capabilities',
      'Oversight requirements apply only to development without operational considerations'
    ],
    correctAnswer: 0,
    explanation: 'Human oversight mechanisms ensure natural persons can understand system functioning, intervene when necessary, and override system outputs, with oversight design considerations including operational constraint integration, interface design enabling effective monitoring, and operator competence requirements maintaining human agency.'
  },
  {
    id: 'q11',
    question: 'How does conformity assessment pathway selection depend on system characteristics?',
    options: [
      'Assessment pathways prove irrelevant under the regulatory framework requirements',
      'Universal third-party assessment applies to all AI systems without exception',
      'Based on system classification and applicable sectoral legislation with product safety components following existing procedures',
      'All AI systems use identical assessment procedures regardless of risk or application'
    ],
    correctAnswer: 2,
    explanation: 'Assessment pathway selection depends on system classification and applicable sectoral legislation, with product safety components following existing conformity assessment procedures under relevant harmonization legislation while standalone high-risk systems generally undergo internal control-based assessment.'
  },
  {
    id: 'q12',
    question: 'What does the European Artificial Intelligence Board provide?',
    options: [
      'Coordination, guidance, and expertise supporting consistent implementation across member states',
      'Direct regulation of individual AI systems through centralized approval processes',
      'Technical development standards for AI system design and implementation',
      'Commercial licensing for AI system deployment in European markets'
    ],
    correctAnswer: 0,
    explanation: 'European Artificial Intelligence Board provides coordination, guidance, and expertise supporting consistent implementation, with responsibilities including issuing opinions on implementation matters, facilitating cooperation among national authorities, collecting best practices, and advising Commission on technical matters.'
  },
  {
    id: 'q13',
    question: 'What do provider responsibilities encompass under the regulatory framework?',
    options: [
      'Universal responsibilities that apply identically regardless of AI system type or risk',
      'Responsibilities limited to initial development without ongoing operational obligations',
      'Conformity assessment, technical documentation, quality management systems, CE marking, and post-market monitoring',
      'Only technical development without consideration for compliance or market responsibilities'
    ],
    correctAnswer: 2,
    explanation: 'Provider responsibilities encompass conformity assessment, technical documentation, quality management systems, CE marking, and post-market monitoring, with providers bearing primary responsibility given their control over system design, development, and market placement decisions.'
  },
  {
    id: 'q14',
    question: 'How do regulatory sandboxes provide innovation support?',
    options: [
      'Controlled environments for testing innovative AI systems under regulatory supervision before market placement',
      'Complete exemption from all regulatory requirements without any oversight or restrictions',
      'Universal approval for any AI system developed within sandbox environments',
      'Technical infrastructure for AI development without regulatory considerations'
    ],
    correctAnswer: 0,
    explanation: 'Regulatory sandboxes provide controlled environments for testing innovative AI systems under regulatory supervision before market placement, offering benefits including reduced regulatory uncertainty, accelerated learning for authorities and participants, and facilitated market access for innovative approaches.'
  },
  {
    id: 'q15',
    question: 'What do transparency obligations require for human interaction with AI?',
    options: [
      'Disclosure when persons interact with AI systems enabling informed engagement, especially when users might expect human interaction',
      'Universal disclosure for all automated systems regardless of context or user expectations',
      'Transparency requirements prove unnecessary for user interaction scenarios',
      'Only technical system information without consideration for interaction context'
    ],
    correctAnswer: 0,
    explanation: 'Human interaction transparency requires disclosure when persons interact with AI systems enabling informed engagement, proving particularly important when users might reasonably expect human interaction or when interaction nature affects engagement decisions, enabling appropriate reliance calibration and interaction choices.'
  }
];