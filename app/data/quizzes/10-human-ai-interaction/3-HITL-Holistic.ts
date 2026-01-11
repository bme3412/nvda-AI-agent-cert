import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What distinguishes Human-in-the-Loop AI from fully autonomous AI systems?",
    options: [
      "HITL AI can only operate in cloud-based environments",
      "HITL AI eliminates the need for machine learning algorithms",
      "HITL AI actively incorporates human input and oversight throughout operational processes",
      "HITL AI requires more computational resources than autonomous systems"
    ],
    correctAnswer: 2,
    explanation: "Human-in-the-Loop AI actively incorporates human input and oversight into its operational processes, unlike fully autonomous systems that operate without human intervention."
  },
  {
    id: 'q2',
    question: "What is the primary benefit of continuous human involvement in HITL AI systems?",
    options: [
      "It enables real-time adjustments and continual improvement through ongoing human-AI collaboration",
      "It standardizes AI outputs across different applications",
      "It reduces the need for training data in machine learning models",
      "It eliminates all computational costs associated with AI processing"
    ],
    correctAnswer: 0,
    explanation: "Continuous human involvement enables real-time adjustments, ongoing feedback, and continual improvement of the AI system through collaborative human-AI interaction."
  },
  {
    id: 'q3',
    question: "How does iterative learning in HITL AI systems improve AI performance?",
    options: [
      "By eliminating the need for validation datasets during training",
      "Through automated hyperparameter optimization without human input",
      "Through continuous incorporation of human expert feedback that refines algorithms and decision-making",
      "By reducing the size of neural networks to improve processing speed"
    ],
    correctAnswer: 2,
    explanation: "Iterative learning incorporates continuous feedback from human experts, allowing the AI system to refine its algorithms and improve its ability to handle complex situations."
  },
  {
    id: 'q4',
    question: "What role does ethical oversight play in HITL AI implementations?",
    options: [
      "It standardizes AI algorithms across different domains",
      "It slows down AI processing to ensure perfect accuracy",
      "It ensures AI decisions adhere to ethical standards and societal norms while reducing bias risks",
      "It eliminates the need for regulatory compliance"
    ],
    correctAnswer: 2,
    explanation: "Ethical oversight ensures that AI decisions align with ethical standards and societal norms, helping reduce the risk of bias and unintended consequences from automated systems."
  },
  {
    id: 'q5',
    question: "How does HITL AI address the challenge of adaptability in dynamic environments?",
    options: [
      "Through human intervention and guidance that allows systems to adapt to changing contexts and new information",
      "By limiting AI operations to controlled laboratory environments",
      "Through automated rollback mechanisms that restore previous system states",
      "By freezing AI models after initial training to ensure consistency"
    ],
    correctAnswer: 0,
    explanation: "HITL AI maintains adaptability through human intervention and guidance, allowing systems to remain flexible and responsive to changing environments and new information."
  },
  {
    id: 'q6',
    question: "In the HITL AI workflow, what is the significance of the data annotation phase?",
    options: [
      "It standardizes data formats across different platforms",
      "It reduces computational requirements during model training",
      "Human experts provide foundational 'ground truth' labeling that directly influences AI accuracy",
      "It eliminates the need for machine learning algorithms"
    ],
    correctAnswer: 2,
    explanation: "Data annotation by human experts provides the foundational 'ground truth' labeling that serves as the basis for AI learning and directly influences the system's accuracy and reliability."
  },
  {
    id: 'q7',
    question: "What is the purpose of human validation and testing in HITL AI systems?",
    options: [
      "To standardize AI performance metrics across applications",
      "To eliminate the need for automated testing frameworks",
      "To ensure AI systems generalize well and perform reliably through rigorous human expert review",
      "To reduce the computational costs of AI model deployment"
    ],
    correctAnswer: 2,
    explanation: "Human validation and testing ensure that AI systems can generalize effectively and perform reliably in real-world scenarios through expert review and intervention to correct errors or biases."
  },
  {
    id: 'q8',
    question: "How does the continuous feedback loop in HITL AI contribute to system improvement?",
    options: [
      "It reduces the computational complexity of AI algorithms",
      "It automatically fixes all AI errors without human intervention",
      "It allows ongoing human input to help AI adapt to new data and challenges while maintaining accuracy",
      "It eliminates the need for system monitoring and maintenance"
    ],
    correctAnswer: 2,
    explanation: "The continuous feedback loop enables ongoing human input and corrections, helping the AI system adapt to new data and challenges while maintaining accuracy and ethical alignment over time."
  },
  {
    id: 'q9',
    question: "What is a primary challenge of implementing HITL AI in terms of scalability?",
    options: [
      "Human oversight eliminates all automation benefits",
      "HITL systems cannot operate in cloud environments",
      "Human involvement can create bottlenecks that limit efficient scaling as complexity grows",
      "HITL systems require more powerful hardware than autonomous systems"
    ],
    correctAnswer: 2,
    explanation: "The need for human involvement in HITL AI can create bottlenecks that limit the ability to scale systems efficiently as data volume and task complexity increase."
  },
  {
    id: 'q10',
    question: "How do cost implications affect HITL AI implementation strategies?",
    options: [
      "Continuous human input increases costs, requiring careful balance against automation savings",
      "Human involvement only affects initial development costs",
      "HITL AI reduces hardware requirements to minimal configurations",
      "HITL AI eliminates all operational costs through automation"
    ],
    correctAnswer: 0,
    explanation: "HITL AI requires continuous human input from skilled professionals, which increases operational costs that must be carefully balanced against the efficiency gains from automation."
  },
  {
    id: 'q11',
    question: "In healthcare applications, how does HITL AI enhance medical diagnostics?",
    options: [
      "By eliminating the need for medical imaging and laboratory tests",
      "Through automated treatment recommendations without human oversight",
      "Through AI analysis combined with physician validation to ensure diagnostic accuracy and patient safety",
      "By completely replacing human doctors in diagnostic processes"
    ],
    correctAnswer: 2,
    explanation: "HITL AI in healthcare combines AI analysis capabilities with physician validation and expertise, ensuring diagnostic accuracy while maintaining the human judgment essential for patient safety."
  },
  {
    id: 'q12',
    question: "What role does HITL AI play in manufacturing quality control processes?",
    options: [
      "AI systems identify potential defects while human operators validate findings to maintain quality standards",
      "It standardizes all products to identical specifications",
      "It reduces manufacturing speed to ensure perfect quality",
      "It eliminates the need for human quality inspectors entirely"
    ],
    correctAnswer: 0,
    explanation: "In manufacturing, HITL AI uses AI systems to identify potential defects and quality issues, while human operators validate these findings to ensure accurate assessments and maintain high-quality standards."
  },
  {
    id: 'q13',
    question: "How does HITL AI improve customer service operations?",
    options: [
      "By standardizing all customer interactions to identical responses",
      "Through automated resolution of all customer complaints",
      "Through AI handling routine inquiries while escalating complex issues to human agents for resolution",
      "By eliminating all human customer service representatives"
    ],
    correctAnswer: 2,
    explanation: "HITL AI in customer service allows AI to efficiently handle routine inquiries while intelligently escalating complex issues to human agents who can provide personalized and effective problem resolution."
  },
  {
    id: 'q14',
    question: "What is essential for successful implementation of HITL AI in organizations?",
    options: [
      "Standardization of all AI algorithms to single architectures",
      "Elimination of all automated processes in favor of human oversight",
      "Assessment of impact areas, workforce training, ethical guidelines, and appropriate technology infrastructure",
      "Complete replacement of existing AI systems with HITL alternatives"
    ],
    correctAnswer: 2,
    explanation: "Successful HITL AI implementation requires assessing areas where human-AI collaboration adds value, training workers to interact with AI systems, establishing ethical guidelines, and investing in supporting technology infrastructure."
  },
  {
    id: 'q15',
    question: "How does HITL AI contribute to building trust in AI systems among stakeholders?",
    options: [
      "By reducing AI system complexity to basic rule-based systems",
      "Through complete human control over all AI operations",
      "By eliminating all AI decision-making capabilities",
      "Through transparency and human accountability that ensures AI decisions align with human values"
    ],
    correctAnswer: 3,
    explanation: "HITL AI builds trust by providing transparency in AI operations and maintaining human accountability, ensuring that AI decisions are aligned with human values and can be understood and validated by stakeholders."
  }
];