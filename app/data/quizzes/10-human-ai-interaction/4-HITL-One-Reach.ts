import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What is the projected adoption rate of AI agents by organizations according to the 2025 data mentioned?",
    options: [
      "35% plan deployment in 2025, with 86% adoption projected by 2027",
      "25% plan deployment in 2025, with 75% adoption by 2027",
      "60% plan deployment in 2025, with 100% adoption by 2027",
      "50% plan deployment in 2025, with 95% adoption by 2027"
    ],
    correctAnswer: 0,
    explanation: "According to the text, 35% of organizations plan to deploy AI agents in 2025, with adoption projected to reach 86% by 2027, showing rapid growth in agentic AI adoption."
  },
  {
    id: 'q2',
    question: "How does Human-in-the-Loop (HITL) agentic AI differ from fully autonomous AI systems?",
    options: [
      "HITL eliminates all AI decision-making capabilities",
      "HITL systems require human approval for every single AI operation",
      "HITL embeds human oversight at key decision points while maintaining machine autonomy for routine operations",
      "HITL systems are slower and less efficient than autonomous systems"
    ],
    correctAnswer: 2,
    explanation: "HITL agentic AI maintains machine autonomy for routine operations while embedding human oversight at critical decision points, balancing efficiency with safety and accountability."
  },
  {
    id: 'q3',
    question: "What are the key risks of unchecked AI autonomy mentioned in high-stakes domains?",
    options: [
      "Ethical lapses, security threats, lack of contextual judgment, and regulatory non-compliance",
      "Compatibility issues with existing software systems",
      "Reduced accuracy and increased training time requirements",
      "Increased computational costs and slower processing speeds"
    ],
    correctAnswer: 0,
    explanation: "Unchecked AI autonomy risks include ethical lapses, security exploitation, lack of contextual judgment for sensitive situations, and potential regulatory non-compliance in critical domains."
  },
  {
    id: 'q4',
    question: "What is the primary scalability challenge of implementing HITL in agentic AI systems?",
    options: [
      "Incompatibility with distributed computing architectures",
      "Higher energy consumption from continuous monitoring",
      "Human oversight can become a bottleneck limiting automation speed and scale",
      "Increased hardware requirements for AI processing"
    ],
    correctAnswer: 2,
    explanation: "The primary scalability challenge is that human oversight can become a bottleneck as AI handles more tasks, potentially limiting the speed and scale of automation."
  },
  {
    id: 'q5',
    question: "How does HITL AI address the skill gap challenge in the workforce?",
    options: [
      "Through automated skill development without human intervention",
      "By simplifying AI systems to require no special skills",
      "Through training programs that equip employees with AI literacy to effectively review AI decisions",
      "By eliminating the need for human workers entirely"
    ],
    correctAnswer: 2,
    explanation: "HITL AI addresses skill gaps by requiring training programs that provide employees with AI literacy and the skills needed to effectively review and validate AI decisions."
  },
  {
    id: 'q6',
    question: "In healthcare applications, what is the typical HITL workflow for medical diagnostics?",
    options: [
      "AI pre-screens medical images for anomalies while physicians review and confirm diagnoses",
      "AI and physicians make separate independent diagnoses",
      "AI systems make all diagnostic decisions independently",
      "Physicians handle all diagnostics while AI only stores patient data"
    ],
    correctAnswer: 0,
    explanation: "In healthcare HITL, AI agents pre-screen medical images for anomalies, but physicians review and confirm diagnoses to prevent misdiagnoses and ensure patient safety."
  },
  {
    id: 'q7',
    question: "What is the concept of 'tiered oversight' in HITL agentic AI implementation?",
    options: [
      "Different AI models for different complexity levels of tasks",
      "Hierarchical management structures for AI system administration",
      "Routine tasks handled autonomously while high-stakes cases automatically trigger human review",
      "Multiple AI systems reviewing each other's decisions"
    ],
    correctAnswer: 2,
    explanation: "Tiered oversight allows routine tasks to be handled autonomously by AI while automatically escalating high-stakes or complex cases to human reviewers."
  },
  {
    id: 'q8',
    question: "How does Reinforcement Learning from Human Feedback (RLHF) support HITL systems?",
    options: [
      "It standardizes AI responses across different applications",
      "It reduces computational requirements for AI training",
      "It aligns agentic AI behavior with human values through continuous feedback integration",
      "It eliminates the need for ongoing human oversight"
    ],
    correctAnswer: 2,
    explanation: "RLHF integrates human feedback into the learning process, helping align agentic AI behavior with human values and organizational goals through continuous improvement."
  },
  {
    id: 'q9',
    question: "What role does Explainable AI (XAI) play in HITL implementations?",
    options: [
      "It clarifies AI decision logic for human overseers, supporting transparency and regulatory compliance",
      "It standardizes AI algorithms across different domains",
      "It eliminates the need for human decision validation",
      "It reduces the computational complexity of AI models"
    ],
    correctAnswer: 0,
    explanation: "XAI clarifies why AI agents made particular decisions, empowering human overseers to understand the reasoning and supporting both transparency and regulatory compliance."
  },
  {
    id: 'q10',
    question: "How does adaptive autonomy work in HITL agentic AI systems?",
    options: [
      "Autonomy is completely eliminated in favor of human control",
      "AI autonomy levels remain constant regardless of circumstances",
      "AI autonomy dynamically adjusts based on context, risk levels, or confidence scores",
      "Human operators manually adjust autonomy settings for each task"
    ],
    correctAnswer: 2,
    explanation: "Adaptive autonomy allows AI systems to dynamically adjust their level of independence based on factors like context, risk assessment, and confidence levels in their decisions."
  },
  {
    id: 'q11',
    question: "What are the key pillars of responsible HITL mentioned in the EU AI Act context?",
    options: [
      "AI ethics, explainability, and regulatory compliance",
      "Integration, compatibility, and standardization",
      "Scalability, performance, and automation",
      "Speed, efficiency, and cost-effectiveness"
    ],
    correctAnswer: 0,
    explanation: "The three pillars of responsible HITL are AI ethics (embedding human values), explainability (transparent decision-making), and compliance (adhering to regulations and policies)."
  },
  {
    id: 'q12',
    question: "How does OneReach.ai's GSX platform implement HITL capabilities?",
    options: [
      "By replacing AI agents with human operators for all tasks",
      "Through automated systems that eliminate human involvement",
      "By enabling seamless escalation from AI to human experts with continuous feedback loops",
      "Through complete human control over all AI operations"
    ],
    correctAnswer: 2,
    explanation: "OneReach.ai's GSX platform enables seamless escalation from AI agents to human experts in real-time, with feedback loops that inform future AI behavior for continuous improvement."
  },
  {
    id: 'q13',
    question: "According to research mentioned, what benefits do effective AI collaborators achieve?",
    options: [
      "2x ROI, 105 minutes saved daily, 1.5x more likely to learn new skills, 1.8x more innovative",
      "Variable ROI with minimal time savings and reduced innovation",
      "3x ROI, 200 minutes saved daily, guaranteed skill development",
      "1x ROI, 50 minutes saved daily, standard innovation levels"
    ],
    correctAnswer: 0,
    explanation: "Effective AI collaborators achieve 2x ROI, save 105 minutes daily, are 1.5x more likely to reinvest time in learning new skills, and are 1.8x more likely to be viewed as innovative."
  },
  {
    id: 'q14',
    question: "What is the key message for organizational leaders regarding HITL agentic AI deployment?",
    options: [
      "Implement AI systems only in low-stakes environments",
      "Prioritize cost reduction over system reliability and ethics",
      "Design AI systems that are intelligent, trustworthy, explainable, and aligned with human values",
      "Focus solely on maximizing AI autonomy without human oversight"
    ],
    correctAnswer: 2,
    explanation: "Leaders should design and deploy agentic AI systems that are not only intelligent but also trustworthy, explainable, and aligned with human values, especially for high-stakes use cases."
  },
  {
    id: 'q15',
    question: "How do HITL systems support bias mitigation in agentic AI?",
    options: [
      "Through automated bias detection without human involvement",
      "By using only pre-approved algorithms that guarantee fairness",
      "Through human reviewers who spot skewed outputs and provide corrective feedback for model refinement",
      "By eliminating all training data to prevent bias introduction"
    ],
    correctAnswer: 2,
    explanation: "HITL systems support bias mitigation by having human reviewers identify skewed outputs, provide corrective feedback, and help retrain models to reduce the risk of systemic bias."
  }
];