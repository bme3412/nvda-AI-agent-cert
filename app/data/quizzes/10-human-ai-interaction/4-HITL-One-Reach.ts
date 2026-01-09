import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the projected adoption rate of AI agents by organizations according to the 2025 data mentioned?",
    options: [
      "35% plan deployment in 2025, with 86% adoption projected by 2027",
      "50% plan deployment in 2025, with 95% adoption by 2027",
      "25% plan deployment in 2025, with 75% adoption by 2027",
      "60% plan deployment in 2025, with 100% adoption by 2027"
    ],
    correctAnswer: 0,
    explanation: "According to the text, 35% of organizations plan to deploy AI agents in 2025, with adoption projected to reach 86% by 2027, showing rapid growth in agentic AI adoption."
  },
  {
    id: 2,
    question: "How does Human-in-the-Loop (HITL) agentic AI differ from fully autonomous AI systems?",
    options: [
      "HITL systems are slower and less efficient than autonomous systems",
      "HITL embeds human oversight at key decision points while maintaining machine autonomy for routine operations",
      "HITL systems require human approval for every single AI operation",
      "HITL eliminates all AI decision-making capabilities"
    ],
    correctAnswer: 1,
    explanation: "HITL agentic AI maintains machine autonomy for routine operations while embedding human oversight at critical decision points, balancing efficiency with safety and accountability."
  },
  {
    id: 3,
    question: "What are the key risks of unchecked AI autonomy mentioned in high-stakes domains?",
    options: [
      "Increased computational costs and slower processing speeds",
      "Ethical lapses, security threats, lack of contextual judgment, and regulatory non-compliance",
      "Reduced accuracy and increased training time requirements",
      "Compatibility issues with existing software systems"
    ],
    correctAnswer: 1,
    explanation: "Unchecked AI autonomy risks include ethical lapses, security exploitation, lack of contextual judgment for sensitive situations, and potential regulatory non-compliance in critical domains."
  },
  {
    id: 4,
    question: "What is the primary scalability challenge of implementing HITL in agentic AI systems?",
    options: [
      "Increased hardware requirements for AI processing",
      "Human oversight can become a bottleneck limiting automation speed and scale",
      "Higher energy consumption from continuous monitoring",
      "Incompatibility with distributed computing architectures"
    ],
    correctAnswer: 1,
    explanation: "The primary scalability challenge is that human oversight can become a bottleneck as AI handles more tasks, potentially limiting the speed and scale of automation."
  },
  {
    id: 5,
    question: "How does HITL AI address the skill gap challenge in the workforce?",
    options: [
      "By eliminating the need for human workers entirely",
      "Through training programs that equip employees with AI literacy to effectively review AI decisions",
      "By simplifying AI systems to require no special skills",
      "Through automated skill development without human intervention"
    ],
    correctAnswer: 1,
    explanation: "HITL AI addresses skill gaps by requiring training programs that provide employees with AI literacy and the skills needed to effectively review and validate AI decisions."
  },
  {
    id: 6,
    question: "In healthcare applications, what is the typical HITL workflow for medical diagnostics?",
    options: [
      "AI systems make all diagnostic decisions independently",
      "AI pre-screens medical images for anomalies while physicians review and confirm diagnoses",
      "Physicians handle all diagnostics while AI only stores patient data",
      "AI and physicians make separate independent diagnoses"
    ],
    correctAnswer: 1,
    explanation: "In healthcare HITL, AI agents pre-screen medical images for anomalies, but physicians review and confirm diagnoses to prevent misdiagnoses and ensure patient safety."
  },
  {
    id: 7,
    question: "What is the concept of 'tiered oversight' in HITL agentic AI implementation?",
    options: [
      "Multiple AI systems reviewing each other's decisions",
      "Routine tasks handled autonomously while high-stakes cases automatically trigger human review",
      "Hierarchical management structures for AI system administration",
      "Different AI models for different complexity levels of tasks"
    ],
    correctAnswer: 1,
    explanation: "Tiered oversight allows routine tasks to be handled autonomously by AI while automatically escalating high-stakes or complex cases to human reviewers."
  },
  {
    id: 8,
    question: "How does Reinforcement Learning from Human Feedback (RLHF) support HITL systems?",
    options: [
      "It eliminates the need for ongoing human oversight",
      "It aligns agentic AI behavior with human values through continuous feedback integration",
      "It reduces computational requirements for AI training",
      "It standardizes AI responses across different applications"
    ],
    correctAnswer: 1,
    explanation: "RLHF integrates human feedback into the learning process, helping align agentic AI behavior with human values and organizational goals through continuous improvement."
  },
  {
    id: 9,
    question: "What role does Explainable AI (XAI) play in HITL implementations?",
    options: [
      "It reduces the computational complexity of AI models",
      "It clarifies AI decision logic for human overseers, supporting transparency and regulatory compliance",
      "It eliminates the need for human decision validation",
      "It standardizes AI algorithms across different domains"
    ],
    correctAnswer: 1,
    explanation: "XAI clarifies why AI agents made particular decisions, empowering human overseers to understand the reasoning and supporting both transparency and regulatory compliance."
  },
  {
    id: 10,
    question: "How does adaptive autonomy work in HITL agentic AI systems?",
    options: [
      "AI autonomy levels remain constant regardless of circumstances",
      "AI autonomy dynamically adjusts based on context, risk levels, or confidence scores",
      "Human operators manually adjust autonomy settings for each task",
      "Autonomy is completely eliminated in favor of human control"
    ],
    correctAnswer: 1,
    explanation: "Adaptive autonomy allows AI systems to dynamically adjust their level of independence based on factors like context, risk assessment, and confidence levels in their decisions."
  },
  {
    id: 11,
    question: "What are the key pillars of responsible HITL mentioned in the EU AI Act context?",
    options: [
      "Speed, efficiency, and cost-effectiveness",
      "AI ethics, explainability, and regulatory compliance",
      "Scalability, performance, and automation",
      "Integration, compatibility, and standardization"
    ],
    correctAnswer: 1,
    explanation: "The three pillars of responsible HITL are AI ethics (embedding human values), explainability (transparent decision-making), and compliance (adhering to regulations and policies)."
  },
  {
    id: 12,
    question: "How does OneReach.ai's GSX platform implement HITL capabilities?",
    options: [
      "Through complete human control over all AI operations",
      "By enabling seamless escalation from AI to human experts with continuous feedback loops",
      "Through automated systems that eliminate human involvement",
      "By replacing AI agents with human operators for all tasks"
    ],
    correctAnswer: 1,
    explanation: "OneReach.ai's GSX platform enables seamless escalation from AI agents to human experts in real-time, with feedback loops that inform future AI behavior for continuous improvement."
  },
  {
    id: 13,
    question: "According to research mentioned, what benefits do effective AI collaborators achieve?",
    options: [
      "1x ROI, 50 minutes saved daily, standard innovation levels",
      "2x ROI, 105 minutes saved daily, 1.5x more likely to learn new skills, 1.8x more innovative",
      "3x ROI, 200 minutes saved daily, guaranteed skill development",
      "Variable ROI with minimal time savings and reduced innovation"
    ],
    correctAnswer: 1,
    explanation: "Effective AI collaborators achieve 2x ROI, save 105 minutes daily, are 1.5x more likely to reinvest time in learning new skills, and are 1.8x more likely to be viewed as innovative."
  },
  {
    id: 14,
    question: "What is the key message for organizational leaders regarding HITL agentic AI deployment?",
    options: [
      "Focus solely on maximizing AI autonomy without human oversight",
      "Design AI systems that are intelligent, trustworthy, explainable, and aligned with human values",
      "Prioritize cost reduction over system reliability and ethics",
      "Implement AI systems only in low-stakes environments"
    ],
    correctAnswer: 1,
    explanation: "Leaders should design and deploy agentic AI systems that are not only intelligent but also trustworthy, explainable, and aligned with human values, especially for high-stakes use cases."
  },
  {
    id: 15,
    question: "How do HITL systems support bias mitigation in agentic AI?",
    options: [
      "By eliminating all training data to prevent bias introduction",
      "Through human reviewers who spot skewed outputs and provide corrective feedback for model refinement",
      "By using only pre-approved algorithms that guarantee fairness",
      "Through automated bias detection without human involvement"
    ],
    correctAnswer: 1,
    explanation: "HITL systems support bias mitigation by having human reviewers identify skewed outputs, provide corrective feedback, and help retrain models to reduce the risk of systemic bias."
  }
];