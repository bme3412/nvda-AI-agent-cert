import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What distinguishes Human-in-the-Loop AI from fully autonomous AI systems?",
    options: [
      "HITL AI requires more computational resources than autonomous systems",
      "HITL AI actively incorporates human input and oversight throughout operational processes",
      "HITL AI can only operate in cloud-based environments",
      "HITL AI eliminates the need for machine learning algorithms"
    ],
    correctAnswer: 1,
    explanation: "Human-in-the-Loop AI actively incorporates human input and oversight into its operational processes, unlike fully autonomous systems that operate without human intervention."
  },
  {
    id: 2,
    question: "What is the primary benefit of continuous human involvement in HITL AI systems?",
    options: [
      "It eliminates all computational costs associated with AI processing",
      "It enables real-time adjustments and continual improvement through ongoing human-AI collaboration",
      "It reduces the need for training data in machine learning models",
      "It standardizes AI outputs across different applications"
    ],
    correctAnswer: 1,
    explanation: "Continuous human involvement enables real-time adjustments, ongoing feedback, and continual improvement of the AI system through collaborative human-AI interaction."
  },
  {
    id: 3,
    question: "How does iterative learning in HITL AI systems improve AI performance?",
    options: [
      "By reducing the size of neural networks to improve processing speed",
      "Through continuous incorporation of human expert feedback that refines algorithms and decision-making",
      "By eliminating the need for validation datasets during training",
      "Through automated hyperparameter optimization without human input"
    ],
    correctAnswer: 1,
    explanation: "Iterative learning incorporates continuous feedback from human experts, allowing the AI system to refine its algorithms and improve its ability to handle complex situations."
  },
  {
    id: 4,
    question: "What role does ethical oversight play in HITL AI implementations?",
    options: [
      "It slows down AI processing to ensure perfect accuracy",
      "It ensures AI decisions adhere to ethical standards and societal norms while reducing bias risks",
      "It eliminates the need for regulatory compliance",
      "It standardizes AI algorithms across different domains"
    ],
    correctAnswer: 1,
    explanation: "Ethical oversight ensures that AI decisions align with ethical standards and societal norms, helping reduce the risk of bias and unintended consequences from automated systems."
  },
  {
    id: 5,
    question: "How does HITL AI address the challenge of adaptability in dynamic environments?",
    options: [
      "By freezing AI models after initial training to ensure consistency",
      "Through human intervention and guidance that allows systems to adapt to changing contexts and new information",
      "By limiting AI operations to controlled laboratory environments",
      "Through automated rollback mechanisms that restore previous system states"
    ],
    correctAnswer: 1,
    explanation: "HITL AI maintains adaptability through human intervention and guidance, allowing systems to remain flexible and responsive to changing environments and new information."
  },
  {
    id: 6,
    question: "In the HITL AI workflow, what is the significance of the data annotation phase?",
    options: [
      "It eliminates the need for machine learning algorithms",
      "Human experts provide foundational 'ground truth' labeling that directly influences AI accuracy",
      "It reduces computational requirements during model training",
      "It standardizes data formats across different platforms"
    ],
    correctAnswer: 1,
    explanation: "Data annotation by human experts provides the foundational 'ground truth' labeling that serves as the basis for AI learning and directly influences the system's accuracy and reliability."
  },
  {
    id: 7,
    question: "What is the purpose of human validation and testing in HITL AI systems?",
    options: [
      "To reduce the computational costs of AI model deployment",
      "To ensure AI systems generalize well and perform reliably through rigorous human expert review",
      "To eliminate the need for automated testing frameworks",
      "To standardize AI performance metrics across applications"
    ],
    correctAnswer: 1,
    explanation: "Human validation and testing ensure that AI systems can generalize effectively and perform reliably in real-world scenarios through expert review and intervention to correct errors or biases."
  },
  {
    id: 8,
    question: "How does the continuous feedback loop in HITL AI contribute to system improvement?",
    options: [
      "It automatically fixes all AI errors without human intervention",
      "It allows ongoing human input to help AI adapt to new data and challenges while maintaining accuracy",
      "It eliminates the need for system monitoring and maintenance",
      "It reduces the computational complexity of AI algorithms"
    ],
    correctAnswer: 1,
    explanation: "The continuous feedback loop enables ongoing human input and corrections, helping the AI system adapt to new data and challenges while maintaining accuracy and ethical alignment over time."
  },
  {
    id: 9,
    question: "What is a primary challenge of implementing HITL AI in terms of scalability?",
    options: [
      "HITL systems require more powerful hardware than autonomous systems",
      "Human involvement can create bottlenecks that limit efficient scaling as complexity grows",
      "HITL systems cannot operate in cloud environments",
      "Human oversight eliminates all automation benefits"
    ],
    correctAnswer: 1,
    explanation: "The need for human involvement in HITL AI can create bottlenecks that limit the ability to scale systems efficiently as data volume and task complexity increase."
  },
  {
    id: 10,
    question: "How do cost implications affect HITL AI implementation strategies?",
    options: [
      "HITL AI eliminates all operational costs through automation",
      "Continuous human input increases costs, requiring careful balance against automation savings",
      "HITL AI reduces hardware requirements to minimal configurations",
      "Human involvement only affects initial development costs"
    ],
    correctAnswer: 1,
    explanation: "HITL AI requires continuous human input from skilled professionals, which increases operational costs that must be carefully balanced against the efficiency gains from automation."
  },
  {
    id: 11,
    question: "In healthcare applications, how does HITL AI enhance medical diagnostics?",
    options: [
      "By completely replacing human doctors in diagnostic processes",
      "Through AI analysis combined with physician validation to ensure diagnostic accuracy and patient safety",
      "By eliminating the need for medical imaging and laboratory tests",
      "Through automated treatment recommendations without human oversight"
    ],
    correctAnswer: 1,
    explanation: "HITL AI in healthcare combines AI analysis capabilities with physician validation and expertise, ensuring diagnostic accuracy while maintaining the human judgment essential for patient safety."
  },
  {
    id: 12,
    question: "What role does HITL AI play in manufacturing quality control processes?",
    options: [
      "It eliminates the need for human quality inspectors entirely",
      "AI systems identify potential defects while human operators validate findings to maintain quality standards",
      "It reduces manufacturing speed to ensure perfect quality",
      "It standardizes all products to identical specifications"
    ],
    correctAnswer: 1,
    explanation: "In manufacturing, HITL AI uses AI systems to identify potential defects and quality issues, while human operators validate these findings to ensure accurate assessments and maintain high-quality standards."
  },
  {
    id: 13,
    question: "How does HITL AI improve customer service operations?",
    options: [
      "By eliminating all human customer service representatives",
      "Through AI handling routine inquiries while escalating complex issues to human agents for resolution",
      "By standardizing all customer interactions to identical responses",
      "Through automated resolution of all customer complaints"
    ],
    correctAnswer: 1,
    explanation: "HITL AI in customer service allows AI to efficiently handle routine inquiries while intelligently escalating complex issues to human agents who can provide personalized and effective problem resolution."
  },
  {
    id: 14,
    question: "What is essential for successful implementation of HITL AI in organizations?",
    options: [
      "Complete replacement of existing AI systems with HITL alternatives",
      "Assessment of impact areas, workforce training, ethical guidelines, and appropriate technology infrastructure",
      "Elimination of all automated processes in favor of human oversight",
      "Standardization of all AI algorithms to single architectures"
    ],
    correctAnswer: 1,
    explanation: "Successful HITL AI implementation requires assessing areas where human-AI collaboration adds value, training workers to interact with AI systems, establishing ethical guidelines, and investing in supporting technology infrastructure."
  },
  {
    id: 15,
    question: "How does HITL AI contribute to building trust in AI systems among stakeholders?",
    options: [
      "By eliminating all AI decision-making capabilities",
      "Through transparency and human accountability that ensures AI decisions align with human values",
      "By reducing AI system complexity to basic rule-based systems",
      "Through complete human control over all AI operations"
    ],
    correctAnswer: 1,
    explanation: "HITL AI builds trust by providing transparency in AI operations and maintaining human accountability, ensuring that AI decisions are aligned with human values and can be understood and validated by stakeholders."
  }
];