import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does AI for regulatory compliance represent?',
    options: [
      'Application of machine learning, NLP, predictive analytics, and RPA to automate and optimize organizational adherence to regulations',
      'Simple automation tools for basic administrative tasks without sophisticated compliance capabilities',
      'Manual compliance processes enhanced with basic digital tools and documentation systems',
      'Universal compliance solutions that work identically across all industries without customization'
    ],
    correctAnswer: 0,
    explanation: 'AI for regulatory compliance represents application of machine learning, natural language processing, predictive analytics, and robotic process automation to automate, enhance, and optimize organizational adherence to laws, regulations, and industry standards, addressing compliance complexity from multi-jurisdictional operations.'
  },
  {
    id: 'q2',
    question: 'Why does compliance automation prove essential for contemporary regulatory environments?',
    options: [
      'Because regulatory volumes expand beyond human processing capacity while enforcement penalties escalate substantially',
      'Manual processes provide sufficient capability for all regulatory compliance requirements',
      'Automation complicates compliance without providing meaningful efficiency or accuracy improvements',
      'All regulatory requirements remain constant making automation unnecessary'
    ],
    correctAnswer: 0,
    explanation: 'Compliance automation proves essential as regulatory volumes expand beyond human processing capacity while enforcement penalties for non-compliance escalate substantially, with systematic approach reducing compliance costs, minimizing human error, and enabling scaling operations without proportional resource increases.'
  },
  {
    id: 'q3',
    question: 'How does Regulatory Technology evolution address traditional compliance limitations?',
    options: [
      'Traditional manual approaches provide adequate coverage for contemporary regulatory requirements',
      'Technology evolution complicates compliance without improving coverage or effectiveness',
      'By transitioning from manual processes to intelligent automated systems providing continuous real-time monitoring',
      'All compliance approaches provide identical results regardless of automation level'
    ],
    correctAnswer: 2,
    explanation: 'Regulatory Technology evolution reflects transition from manual compliance processes to intelligent automated systems, with traditional approaches relying on human interpretation and periodic audits proving inadequate for contemporary environments requiring continuous real-time monitoring and comprehensive coverage.'
  },
  {
    id: 'q4',
    question: 'What operational efficiency improvements emerge from compliance automation?',
    options: [
      'Automation provides minimal efficiency improvements compared to manual compliance processes',
      'Operational efficiency improvements prove unnecessary for effective compliance management',
      'All compliance approaches achieve identical efficiency regardless of automation implementation',
      'Through eliminating manual document review, continuous monitoring replacing periodic audits, and automated reporting reducing workload'
    ],
    correctAnswer: 3,
    explanation: 'Operational efficiency improvements emerge from automation eliminating manual document review, continuous monitoring replacing periodic audits, and automated reporting reducing compliance team workload, with organizations achieving compliance at lower cost enabling resource reallocation to strategic activities.'
  },
  {
    id: 'q5',
    question: 'How does risk reduction benefit from real-time compliance monitoring?',
    options: [
      'Through real-time violation detection enabling immediate remediation and predictive analytics identifying emerging issues',
      'Risk levels remain constant regardless of monitoring frequency or detection capabilities',
      'Risk reduction proves unnecessary when compliance policies are clearly documented',
      'Manual periodic reviews provide superior risk detection compared to automated monitoring'
    ],
    correctAnswer: 0,
    explanation: 'Risk reduction benefits result from real-time violation detection enabling immediate remediation, predictive analytics identifying emerging compliance issues before materialization, and comprehensive monitoring eliminating coverage gaps, with early detection proving substantially less costly than addressing violations after discovery.'
  },
  {
    id: 'q6',
    question: 'What does anomaly detection identify for potential compliance violations?',
    options: [
      'Only technical system errors without consideration for behavioral patterns or policy violations',
      'Anomaly detection proves unnecessary for organizations with clear compliance policies',
      'Unusual patterns deviating from expected behaviors revealing potential compliance violations',
      'All organizational behaviors follow identical patterns making anomaly detection irrelevant'
    ],
    correctAnswer: 2,
    explanation: 'Anomaly detection identifies unusual patterns deviating from expected behaviors revealing potential compliance violations, with detection algorithms learning normal transaction patterns and operational behaviors enabling identifying deviations potentially indicating policy violations, fraud, or unauthorized activities.'
  },
  {
    id: 'q7',
    question: 'How does trend analysis employ deep learning for regulatory insights?',
    options: [
      'Trend analysis provides minimal insight into regulatory patterns or enforcement priorities',
      'Traditional analysis approaches prove superior to deep learning for regulatory trend identification',
      'All regulatory trends prove obvious without need for sophisticated pattern recognition',
      'By understanding complex patterns in regulatory data, enforcement actions, and industry dynamics'
    ],
    correctAnswer: 3,
    explanation: 'Trend analysis employs deep learning for understanding complex patterns in regulatory data, enforcement actions, and industry dynamics, with pattern recognition revealing emerging regulatory priorities, identifying areas receiving increased scrutiny, and predicting potential future regulatory directions.'
  },
  {
    id: 'q8',
    question: 'What does document analysis automation accomplish for regulatory compliance?',
    options: [
      'Automated reviewing of extensive regulatory text extracting requirements, obligations, and deadlines',
      'Document analysis proves unnecessary for organizations with clear compliance documentation',
      'Manual document review provides superior accuracy compared to automated analysis approaches',
      'All regulatory documents contain identical requirements making analysis automation irrelevant'
    ],
    correctAnswer: 0,
    explanation: 'Document analysis automates reviewing extensive regulatory text extracting requirements, obligations, and deadlines, with extraction capabilities processing thousands of pages identifying specific compliance obligations relevant to organizational operations, proving essential as regulatory volumes exceed human reading capacity.'
  },
  {
    id: 'q9',
    question: 'How does communication surveillance detect policy violations?',
    options: [
      'Communication surveillance proves unnecessary for organizations with clear compliance policies',
      'Manual communication review provides superior violation detection compared to automated surveillance',
      'All organizational communications naturally comply with policies making surveillance unnecessary',
      'By monitoring emails, chats, and internal communications detecting policy violations and inappropriate content in real-time'
    ],
    correctAnswer: 3,
    explanation: 'Communication surveillance monitors emails, chats, and other internal communications detecting policy violations, inappropriate content, or potential misconduct, with surveillance capabilities identifying problematic communications in real-time enabling immediate intervention before external disclosure or escalation.'
  },
  {
    id: 'q10',
    question: 'What does breach prediction enable for preventive compliance management?',
    options: [
      'Forecasting potential compliance violations enabling preventive interventions before issues materialize',
      'Breach prediction proves impossible due to unpredictable nature of compliance violations',
      'All compliance violations occur randomly making prediction approaches ineffective',
      'Reactive compliance management provides superior results compared to predictive approaches'
    ],
    correctAnswer: 0,
    explanation: 'Breach prediction forecasts potential compliance violations enabling preventive interventions before issues materialize, with prediction leveraging historical violation patterns, risk indicator trends, and leading indicator analysis, allowing organizations to address predicted issues proactively avoiding violation occurrence.'
  },
  {
    id: 'q11',
    question: 'How does routine compliance checking automation ensure continued adherence?',
    options: [
      'Manual periodic checks provide sufficient compliance verification without automation requirements',
      'Routine checking proves unnecessary for organizations with established compliance procedures',
      'Through automated periodic verification of compliance parameters across systems eliminating risk from forgotten checks',
      'All compliance parameters remain constant making automated checking irrelevant'
    ],
    correctAnswer: 2,
    explanation: 'Routine compliance checking automates periodic verification of compliance parameters across systems ensuring continued adherence without manual intervention, with automated checks executing consistently at required frequencies eliminating risk from forgotten or delayed manual checks.'
  },
  {
    id: 'q12',
    question: 'What does regulatory document processing accomplish for financial services?',
    options: [
      'Financial regulations remain constant making document processing automation unnecessary',
      'Manual document processing provides superior accuracy for financial regulatory compliance',
      'All financial institutions face identical regulatory requirements making processing automation irrelevant',
      'Automated analyzing and extracting critical information from extensive financial regulations ensuring timely updates'
    ],
    correctAnswer: 3,
    explanation: 'Regulatory document processing automates analyzing and extracting critical information from extensive financial regulations ensuring timely updates and comprehensive coverage, with processing capabilities handling regulatory volumes exceeding manual review capacity while identifying specific obligations relevant to institutional activities.'
  },
  {
    id: 'q13',
    question: 'How does HIPAA compliance monitoring protect patient data?',
    options: [
      'Through continuously tracking potential breaches ensuring data protection regulation adherence with real-time detection',
      'HIPAA compliance proves unnecessary for healthcare organizations with clear data policies',
      'Manual compliance monitoring provides superior protection compared to automated approaches',
      'All healthcare data usage naturally complies with HIPAA making monitoring unnecessary'
    ],
    correctAnswer: 0,
    explanation: 'HIPAA compliance monitoring continuously tracks potential breaches ensuring data protection regulation adherence, with monitoring systems detecting unauthorized access attempts, inappropriate data usage, or policy violations enabling immediate intervention, proving essential for protected health information where breaches trigger substantial penalties.'
  },
  {
    id: 'q14',
    question: 'What does carbon emissions management accomplish for environmental compliance?',
    options: [
      'Environmental regulations prove unnecessary for organizations with basic sustainability commitments',
      'Manual emissions tracking provides superior accuracy compared to automated management systems',
      'Designing cleaner production processes and monitoring fossil fuel usage ensuring environmental regulation compliance',
      'All organizations produce identical emissions making management automation irrelevant'
    ],
    correctAnswer: 2,
    explanation: 'Carbon emissions management designs cleaner production processes and monitors fossil fuel usage ensuring environmental regulation compliance, with management systems tracking emissions, identifying reduction opportunities, and verifying compliance with caps or trading programs, proving essential for climate regulation compliance.'
  },
  {
    id: 'q15',
    question: 'How does generative AI enhance compliance workflow automation?',
    options: [
      'Traditional compliance workflows provide sufficient capability without generative AI enhancement',
      'Generative AI complicates compliance workflows without providing meaningful improvements',
      'All compliance workflows operate identically regardless of AI integration',
      'Through assessment and planning automation, policy development support, and implementation facilitation'
    ],
    correctAnswer: 3,
    explanation: 'Generative AI workflow enhancement employs AI for identifying relevant regulations, conducting risk assessments, generating draft policies, suggesting controls and procedures, and providing ongoing evaluation support, with assessment capabilities summarizing regulatory requirements and generating comprehensive compliance schedules and reports.'
  }
];