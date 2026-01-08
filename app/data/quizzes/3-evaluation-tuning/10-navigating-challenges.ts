import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the 2024 survey, what percentage of organizations need to upgrade their technology stack to deploy AI agents?',
    options: [
      '66% of organizations must upgrade their technology infrastructure while maintaining current organizational structures',
      '86% of organizations need to upgrade existing technology stack and reevaluate their structures and processes',
      '76% of organizations need to upgrade existing infrastructure and completely reevaluate their structures and processes',
      '96% of organizations require comprehensive technology upgrades along with fundamental restructuring of operational workflows'
    ],
    correctAnswer: 1,
    explanation: 'The 2024 survey revealed that 86% of organizations need to upgrade their existing technology stack and reevaluate their structures and processes to deploy AI agents effectively. This demonstrates that agentic AI requires more than just plug-and-play technology solutions.'
  },
  {
    id: 'q2',
    question: 'What is the primary risk of taking a technology-only approach to agentic AI adoption?',
    options: [
      'Technology-only approaches are the most cost-effective method for implementing agentic AI in enterprise environments',
      'Focusing solely on technology while ignoring broader organizational context like strategy and workforce development leads to breakdowns',
      'Technology-focused approaches always produce better results than holistic strategies involving multiple organizational dimensions',
      'Prioritizing technology eliminates the need for change management or employee training in AI implementations'
    ],
    correctAnswer: 1,
    explanation: 'Treating agentic AI as merely a plug-and-play solution often leads to breakdowns. Successful AI transformation requires a holistic approach encompassing strategy, capabilities, ethical standards, and workforce development, not just technology.'
  },
  {
    id: 'q3',
    question: 'What components should organizational readiness assessments evaluate before implementing agentic AI?',
    options: [
      'Only financial budgets and projected return on investment timelines for the implementation project',
      'Technical and data preparedness, leadership alignment, AI literacy, support systems, and governance frameworks',
      'Exclusively technical infrastructure capacity without considering human factors or organizational culture elements',
      'Primarily employee satisfaction scores and existing technology vendor relationships within the organization'
    ],
    correctAnswer: 1,
    explanation: 'Organizational readiness assessments should evaluate technical and data preparedness (data availability and quality), leadership alignment, AI literacy, support systems, and governance frameworks. This comprehensive evaluation identifies gaps needing improvement for successful adoption.'
  },
  {
    id: 'q4',
    question: 'What statistic reveals the challenge leaders face in demonstrating AI value?',
    options: [
      'More than 90% of IT executives implemented AI, yet nearly half aren\'t sure how to demonstrate the value',
      'Approximately 75% of IT executives have implemented AI and all can clearly demonstrate measurable value',
      'Less than 50% of IT executives have attempted any AI implementation due to unclear value propositions',
      'Around 60% of IT executives implemented AI but most can easily quantify returns on investment'
    ],
    correctAnswer: 0,
    explanation: 'Recent data shows more than 90% of IT executives have implemented at least one instance of AI, yet nearly half aren\'t sure how to demonstrate the value. This highlights the critical importance of establishing clear ROI expectations.'
  },
  {
    id: 'q5',
    question: 'Why is strong leadership alignment particularly critical for agentic AI adoption?',
    options: [
      'Leaders only need to approve budgets without understanding capabilities, limitations, or implementation details',
      'Leadership involvement is unnecessary since technical teams can independently handle all adoption decisions',
      'Leaders must understand AI capabilities, limitations, risks, and how it aligns with organizational goals and values',
      'Leaders should delegate all AI decisions to data scientists without providing strategic direction or oversight'
    ],
    correctAnswer: 2,
    explanation: 'For agentic AI to effectively support strategic goals and values, leaders must understand its capabilities, limitations, and potential risks. They need to know how AI makes decisions, expected outcomes, and how to implement it responsibly and ethically.'
  },
  {
    id: 'q6',
    question: 'What percentage of AI-driven breakdowns come from leadership\'s unrealistic ROI timelines?',
    options: [
      'More than half of AI-driven breakdowns in enterprise come from leadership\'s unrealistic timelines for ROI',
      'Approximately 35% of AI-driven enterprise breakdowns result from leadership setting unrealistic ROI expectations',
      'Around 40% of AI implementation failures trace back to unrealistic leadership timelines for returns',
      'Nearly 25% of AI adoption challenges stem from leadership establishing impossible timeline expectations'
    ],
    correctAnswer: 0,
    explanation: 'More than half of AI-driven breakdowns in enterprise come from leadership\'s unrealistic timelines for ROI. This underscores why upskilling leadership in AI governance is critical for successful adoption.'
  },
  {
    id: 'q7',
    question: 'How does AI literacy impact employee acceptance and trust in agentic AI systems?',
    options: [
      'AI literacy has no measurable impact on employee acceptance since trust develops naturally over time',
      'Lower AI literacy actually increases trust because employees ask fewer questions about AI operations',
      'Employees with higher AI literacy are less likely to harbor misconceptions and more likely to accept and trust AI',
      'AI literacy exclusively benefits technical staff without affecting general employee acceptance or adoption rates'
    ],
    correctAnswer: 2,
    explanation: 'Employees with higher AI literacy are less likely to harbor misconceptions and more likely to accept and trust AI. Conversely, low AI literacy can significantly hinder adoption, limiting AI\'s transformative potential within organizations.'
  },
  {
    id: 'q8',
    question: 'What role did driver feedback and AI training play in UPS\'s ORION routing agent success?',
    options: [
      'Driver training delayed implementation but eventually reduced costs by approximately $50 million annually',
      'Driver feedback loops and training on AI systems were major contributors to success and $300 million annual savings',
      'Driver involvement was minimal and had negligible impact on the routing agent\'s performance outcomes',
      'UPS succeeded by implementing the routing agent without any driver input or training programs'
    ],
    correctAnswer: 1,
    explanation: 'UPS\'s ORION routing agent example shows that drivers\' feedback loops and training on AI systems were major contributors to AI success and a $300 million annual cost savings. This demonstrates the value of empowering employees with AI literacy.'
  },
  {
    id: 'q9',
    question: 'What percentage of AI adoption failures trace back to process or people issues rather than technical problems?',
    options: [
      'About 70% of AI adoption failures trace back to process or people issues rather than technical problems',
      'Approximately 50% of AI adoption failures result from process or people challenges instead of technology',
      'Around 60% of AI implementation failures stem from human factors rather than technical shortcomings',
      'Nearly 80% of AI deployment failures are caused by organizational factors instead of technological limitations'
    ],
    correctAnswer: 0,
    explanation: 'Recent data shows that 70% of AI adoption failures trace back to process or people issues rather than technical shortcomings. This emphasizes the critical importance of engaging employees and addressing human factors in AI adoption.'
  },
  {
    id: 'q10',
    question: 'Why is early and continuous employee involvement crucial for agentic AI adoption success?',
    options: [
      'Employee involvement is only necessary during initial planning phases and becomes irrelevant during implementation',
      'Continuous involvement slows adoption processes and should be minimized to accelerate deployment timelines',
      'Employee engagement matters exclusively for user interface design without affecting broader adoption outcomes',
      'Early engagement allows employees to identify risks, enhancing their confidence and understanding of AI\'s benefits'
    ],
    correctAnswer: 3,
    explanation: 'Early and continuous employee involvement from pilot phases to full-scale implementation mitigates both practical and psychological barriers. Engaging employees allows them to identify and address potential risks, enhancing their confidence and understanding of AI\'s benefits.'
  },
  {
    id: 'q11',
    question: 'What approach helps reduce perceived risks and build employee confidence in using AI?',
    options: [
      'Immediately deploying fully autonomous agents without any gradual introduction or training period for staff',
      'Preventing employee interaction with AI systems until they complete extensive certification programs',
      'Providing AI "co-pilot" modes before going fully autonomous, enabling staff to observe and learn from AI behavior',
      'Restricting AI access to senior management while keeping general employees completely isolated from systems'
    ],
    correctAnswer: 2,
    explanation: 'Some firms provide AI "co-pilot" modes before going fully autonomous, enabling staff to observe and learn from AI behavior. Experimenting with autonomous agents and offering feedback on outcomes reduces perceived risks and builds confidence.'
  },
  {
    id: 'q12',
    question: 'According to the late-2024 study, what do tech leaders cite as the top challenge in deploying AI agents?',
    options: [
      'Security concerns are cited by 53% of tech leaders as the top challenge in deploying AI agents',
      'High implementation costs and insufficient budget allocation represent the primary obstacles to deployment',
      'Lack of technical expertise and difficulty recruiting qualified AI talent create the biggest challenges',
      'Integration complexity with legacy systems poses the greatest difficulty for most organizations'
    ],
    correctAnswer: 0,
    explanation: 'A late-2024 study found 53% of tech leaders cite security as the top challenge in deploying AI agents. This underscores the importance of robust governance and addressing security concerns for successful adoption.'
  },
  {
    id: 'q13',
    question: 'What governance approach do many enterprises implement for early agentic AI deployments?',
    options: [
      'Fully autonomous operations without any human oversight to maximize efficiency and deployment speed',
      'Minimal governance frameworks that evolve only after significant adoption and operational experience',
      'AI governance committees and requiring human-in-the-loop approach, especially for early deployments',
      'Delegating all governance decisions to external consultants without internal committee involvement'
    ],
    correctAnswer: 2,
    explanation: 'Many enterprises are setting up AI governance committees and requiring a human-in-the-loop approach, especially for early deployments. This provides appropriate oversight while building trust and ensuring responsible AI implementation.'
  },
  {
    id: 'q14',
    question: 'What human role transitions are necessary as AI agents take on decision-making tasks?',
    options: [
      'Humans must focus exclusively on manual data entry and routine administrative tasks AI cannot handle',
      'Human roles become completely eliminated as AI agents achieve full autonomy in all organizational functions',
      'Humans shift entirely to technical programming roles maintaining and debugging AI agent systems exclusively',
      'Humans transition to more strategic, supervisory, and creative roles requiring critical thinking and problem-solving skills'
    ],
    correctAnswer: 3,
    explanation: 'As AI agents increasingly take on decision-making tasks, humans must transition to more strategic, supervisory, and creative roles, while broadening skills in critical thinking, complex problem-solving, and collaboration with autonomous systems.'
  },
  {
    id: 'q15',
    question: 'What elements can help mitigate employee anxiety about autonomous AI decision-making?',
    options: [
      'Limiting information about AI systems to prevent employees from understanding how decisions are made',
      'Accelerating deployment without addressing concerns to demonstrate AI capabilities through immediate results',
      'Restricting AI access to senior leadership while keeping most employees isolated from systems',
      'Transparent communication, strategic guidance, increased AI literacy, and updated interaction models'
    ],
    correctAnswer: 3,
    explanation: 'Transparent communication, strategic guidance, increased AI literacy, and updated interaction models can mitigate anxieties about perceived loss of control and ethical concerns. These elements help align autonomous decisions with organizational values and build trust.'
  }
];

