import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What are AI guardrails in the context of large language model deployment?",
    options: [
      "Hardware limitations that prevent AI systems from overheating",
      "Policies and frameworks that ensure LLMs operate within ethical, legal, and technical boundaries",
      "Network security measures that protect AI systems from external attacks",
      "Data compression techniques that optimize AI model performance"
    ],
    correctAnswer: 1,
    explanation: "AI guardrails are policies and frameworks designed to ensure that LLMs operate within ethical, legal, and technical boundaries, preventing harm and misuse while maintaining safe operation."
  },
  {
    id: 2,
    question: "Why is prompt engineering alone insufficient for preventing AI hallucinations?",
    options: [
      "Prompt engineering increases computational costs beyond acceptable limits",
      "As more guidelines are added to backend prompts, LLM ability to follow instructions rapidly degrades",
      "Prompt engineering only works with specific AI model architectures",
      "Prompt engineering eliminates all AI reasoning capabilities"
    ],
    correctAnswer: 1,
    explanation: "As more guidelines are added to backend prompts, the LLM's ability to accurately follow instructions rapidly degrades, making prompt engineering insufficient for reliable hallucination prevention."
  },
  {
    id: 3,
    question: "How do AI guardrails complement Retrieval-Augmented Generation (RAG) systems?",
    options: [
      "Guardrails replace the need for RAG in all AI applications",
      "Guardrails act as external observers to detect and mitigate fabricated information that RAG cannot fully prevent",
      "Guardrails eliminate the need for vector databases in RAG systems",
      "Guardrails reduce the computational requirements of RAG implementations"
    ],
    correctAnswer: 1,
    explanation: "While RAG improves accuracy by connecting LLMs to vector databases, it doesn't entirely solve hallucinations. Guardrails act as external observers to detect and mitigate such issues."
  },
  {
    id: 4,
    question: "What are the three main types of AI guardrails mentioned?",
    options: [
      "Technical, operational, and financial guardrails",
      "Ethical, security, and technical guardrails",
      "Performance, scalability, and reliability guardrails",
      "Input, processing, and output guardrails"
    ],
    correctAnswer: 1,
    explanation: "The three main types are ethical guardrails (human values alignment), security guardrails (legal compliance and data protection), and technical guardrails (protection against prompt injections and hallucinations)."
  },
  {
    id: 5,
    question: "What is the primary function of ethical guardrails in AI systems?",
    options: [
      "To optimize computational performance and reduce processing time",
      "To ensure LLM responses align with human values and prevent bias-based discrimination",
      "To minimize data storage requirements for AI applications",
      "To standardize AI model architectures across platforms"
    ],
    correctAnswer: 1,
    explanation: "Ethical guardrails ensure that LLM responses are aligned with human values and societal norms, checking against bias and discrimination based on gender, race, age, or other factors."
  },
  {
    id: 6,
    question: "How do security guardrails protect AI applications from malicious use?",
    options: [
      "By encrypting all AI model parameters during deployment",
      "Through compliance enforcement and protection against prompt injections that reveal sensitive information",
      "By limiting AI processing to secure hardware environments only",
      "Through automatic model retraining when security threats are detected"
    ],
    correctAnswer: 1,
    explanation: "Security guardrails ensure legal compliance and protect against prompt injection attacks where malicious users try to manipulate AI systems to reveal sensitive information or behave inappropriately."
  },
  {
    id: 7,
    question: "What role do technical guardrails play in preventing AI system exploitation?",
    options: [
      "They automatically upgrade AI models to newer versions",
      "They protect against prompt injections and safeguard against hallucinations",
      "They optimize network bandwidth for AI application deployment",
      "They standardize data input formats across different AI platforms"
    ],
    correctAnswer: 1,
    explanation: "Technical guardrails protect applications against prompt injection attempts by hackers or users trying to reveal sensitive information, and also safeguard against AI hallucinations."
  },
  {
    id: 8,
    question: "How do AI guardrails help mitigate bias in generative AI systems?",
    options: [
      "By eliminating all training data that contains potential bias",
      "Through identification and correction of biases, ensuring fair and unbiased content generation",
      "By using only pre-approved algorithms that guarantee fairness",
      "Through automated removal of all subjective content from AI outputs"
    ],
    correctAnswer: 1,
    explanation: "AI guardrails help identify and correct biases present in training data or AI outputs, ensuring that generative AI produces fair and unbiased content rather than perpetuating or amplifying existing biases."
  },
  {
    id: 9,
    question: "What compliance challenges do AI guardrails address in enterprise deployments?",
    options: [
      "They eliminate the need for regulatory oversight of AI systems",
      "They ensure compliance with data protection laws and implement secure data handling practices",
      "They reduce computational costs to meet budget compliance requirements",
      "They standardize AI performance metrics across different industries"
    ],
    correctAnswer: 1,
    explanation: "AI guardrails ensure compliance with data protection regulations like HIPAA in healthcare, implementing measures such as data anonymization and secure handling practices to protect personal information."
  },
  {
    id: 10,
    question: "What was the significance of the Chevrolet chatbot incident mentioned in the text?",
    options: [
      "It demonstrated the superior performance of AI over human sales representatives",
      "It showed how users can manipulate AI applications to provide incorrect information, damaging brand reputation",
      "It proved that AI systems are more reliable than traditional customer service methods",
      "It illustrated the cost savings achievable through AI automation"
    ],
    correctAnswer: 1,
    explanation: "The Chevrolet chatbot incident, where the bot agreed to sell a Chevy Tahoe for $1, demonstrates how users can trick AI applications into providing wrong answers that can damage brand reputation."
  },
  {
    id: 11,
    question: "What are the primary technical challenges in building AI guardrail solutions?",
    options: [
      "Reducing data storage requirements and optimizing network bandwidth",
      "Advanced engineering for handling edge cases and developing bias detection methods",
      "Standardizing AI model architectures across different platforms",
      "Minimizing computational costs while maintaining system performance"
    ],
    correctAnswer: 1,
    explanation: "Technical challenges include advanced engineering to handle edge cases and unexpected inputs, plus developing methods to detect and mitigate biases and hallucinations, requiring continuous research and innovation."
  },
  {
    id: 12,
    question: "What operational challenges must organizations address when implementing AI guardrails?",
    options: [
      "Upgrading hardware infrastructure to support guardrail processing",
      "Integrating guardrails into existing workflows and ensuring cross-team collaboration and adherence",
      "Reducing AI processing speeds to accommodate guardrail checks",
      "Converting all existing AI models to standardized architectures"
    ],
    correctAnswer: 1,
    explanation: "Operational challenges involve integrating guardrails into existing workflows and systems, requiring collaboration between data scientists, engineers, and legal experts to ensure all stakeholders understand and follow the guardrails."
  },
  {
    id: 13,
    question: "How do legal and regulatory challenges impact AI guardrail implementation?",
    options: [
      "They eliminate the need for technical AI development expertise",
      "They require navigating complex legal frameworks and adapting to evolving regulations across jurisdictions",
      "They standardize AI development processes globally",
      "They reduce the computational requirements for AI system deployment"
    ],
    correctAnswer: 1,
    explanation: "Legal and regulatory challenges require navigating complex legal frameworks across different jurisdictions and continuously adapting guardrails as AI technology evolves and new regulations emerge."
  },
  {
    id: 14,
    question: "Why are AI guardrails essential despite advances in prompt engineering and RAG?",
    options: [
      "They replace the need for human oversight in AI systems",
      "They provide comprehensive protection against risks that individual techniques cannot fully address",
      "They eliminate all computational overhead from AI processing",
      "They standardize AI outputs across all applications and domains"
    ],
    correctAnswer: 1,
    explanation: "AI guardrails are essential because they provide comprehensive, multi-layered protection against various risks that individual techniques like prompt engineering or RAG cannot fully address on their own."
  },
  {
    id: 15,
    question: "What is the overall goal of implementing AI guardrails in enterprise AI applications?",
    options: [
      "To maximize AI processing speed and minimize operational costs",
      "To ensure AI apps are deployed safely, ethically, and reliably while preventing harmful or biased outputs",
      "To eliminate the need for human involvement in AI system management",
      "To standardize all AI applications to identical functionality"
    ],
    correctAnswer: 1,
    explanation: "The overall goal of AI guardrails is to ensure that AI applications are deployed safely, ethically, and reliably, preventing harm, bias, and misuse while maintaining trustworthy AI operations."
  }
];