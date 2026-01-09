import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is AI agent evaluation and why is it essential for autonomous AI systems?',
    options: [
      'A testing framework for validating model accuracy and computational performance against standardized benchmarks',
      'Systematic assessment processes for understanding performance characteristics, decision-making quality, and interaction effectiveness',
      'A deployment platform for monitoring resource consumption and infrastructure utilization in production environments',
      'An automated optimization system for improving agent efficiency through machine learning algorithms'
    ],
    correctAnswer: 1,
    explanation: 'AI agent evaluation represents systematic assessment processes for understanding performance characteristics, decision-making quality, and interaction effectiveness of autonomous AI systems, proving essential given inherent autonomy creating risks from unintended behaviors.'
  },
  {
    id: 'q2',
    question: 'How does agent evaluation scope differ from traditional text generation quality metrics?',
    options: [
      'Agent evaluation focuses exclusively on computational efficiency and resource optimization requirements',
      'By extending beyond coherence and relevance to examine multi-step operations, tool invocations, and interaction sequences',
      'Agent systems require only functional testing without consideration for subjective quality measures',
      'Traditional metrics prove sufficient for agents since they generate identical output types'
    ],
    correctAnswer: 1,
    explanation: 'Agent evaluation scope extends beyond traditional text generation quality metrics to examine complex multi-step operations including iterative reasoning processes, tool invocations accessing external systems, and interaction sequences coordinating multiple components.'
  },
  {
    id: 'q3',
    question: 'What complicates evaluation when agents produce non-textual outputs?',
    options: [
      'Agents producing non-textual outputs cannot be evaluated using any existing methodologies',
      'Success measurement focuses on correct execution, state consistency, and side effect appropriateness rather than text quality',
      'Non-textual outputs require specialized hardware and infrastructure for proper assessment',
      'All agent outputs must be converted to text format before evaluation can proceed'
    ],
    correctAnswer: 1,
    explanation: 'Output diversity complicates evaluation when agents produce non-textual outputs like record updates or system modifications, requiring success measurement to focus on correct execution, state consistency, and side effect appropriateness rather than text quality metrics.'
  },
  {
    id: 'q4',
    question: 'What critical evaluation dimensions beyond functional performance must be assessed?',
    options: [
      'Only computational efficiency and latency measurements are required for production deployment',
      'Safety, trustworthiness, policy compliance, and bias mitigation preventing harmful or discriminatory behaviors',
      'Technical specifications and infrastructure requirements determine all necessary evaluation criteria',
      'Functional performance alone provides sufficient validation for agent deployment decisions'
    ],
    correctAnswer: 1,
    explanation: 'Critical evaluation dimensions include safety ensuring agents avoid harmful behaviors, trustworthiness maintaining user confidence, policy compliance adhering to organizational requirements, and bias mitigation preventing discriminatory behaviors across user populations.'
  },
  {
    id: 'q5',
    question: 'How does risk mitigation benefit from comprehensive agent evaluation?',
    options: [
      'Risk mitigation occurs automatically through advanced machine learning without requiring explicit evaluation',
      'Early detection of problematic behaviors before production deployment and identification of vulnerabilities enabling manipulation',
      'Risk assessment focuses only on technical failures without consideration for behavioral issues',
      'Evaluation eliminates all risks from agent deployment making additional safeguards unnecessary'
    ],
    correctAnswer: 1,
    explanation: 'Risk mitigation benefits from early detection of problematic behaviors before production deployment, identification of vulnerabilities enabling manipulation or misuse, and verification of safety constraints preventing harmful actions.'
  },
  {
    id: 'q6',
    question: 'What does goal definition establish for evaluation framework architecture?',
    options: [
      'Automatic optimization targets that improve agent performance without manual intervention',
      'Evaluation purposes determining what agent capabilities require assessment and why evaluation matters for deployment success',
      'Universal standards that apply identically across all agent types and deployment scenarios',
      'Technical specifications for hardware and infrastructure requirements for agent operation'
    ],
    correctAnswer: 1,
    explanation: 'Goal definition establishes evaluation purposes determining what agent capabilities require assessment and why evaluation matters for deployment success, focusing evaluation efforts on relevant capabilities and preventing wasted resources measuring irrelevant characteristics.'
  },
  {
    id: 'q7',
    question: 'How does workflow decomposition enable granular agent assessment?',
    options: [
      'By automatically optimizing agent performance through machine learning without manual analysis',
      'Through mapping execution paths identifying individual steps, decision points, and component interactions',
      'By eliminating complex workflows in favor of simple linear processing sequences',
      'Through standardizing all agent workflows to use identical processing patterns'
    ],
    correctAnswer: 1,
    explanation: 'Workflow decomposition maps agent execution paths identifying individual steps, decision points, and component interactions enabling granular assessment, with step-level evaluation determining which workflow phases perform well versus problematic areas requiring improvement.'
  },
  {
    id: 'q8',
    question: 'What advantage do LLM-based evaluation judges provide for assessment?',
    options: [
      'Perfect accuracy in all evaluation scenarios without possibility of errors or biases',
      'Consistency across evaluations, scale processing, and sophisticated criteria when ground truth proves unavailable',
      'Elimination of all human oversight requirements for evaluation processes',
      'Universal compatibility with any agent type regardless of domain or application'
    ],
    correctAnswer: 1,
    explanation: 'LLM-based evaluation judges provide consistency across evaluations, operate at scale processing numerous examples rapidly, and apply sophisticated criteria potentially exceeding simple heuristic capabilities, particularly valuable when ground truth proves unavailable or subjective quality assessment requires expertise.'
  },
  {
    id: 'q9',
    question: 'How does error rate tracking contribute to agent reliability assessment?',
    options: [
      'Error tracking eliminates all failures by automatically correcting agent behaviors',
      'By quantifying incorrect outputs revealing reliability issues and vulnerability to specific input patterns',
      'Error rates provide only superficial information without actionable insights',
      'Tracking focuses exclusively on technical errors without considering behavioral issues'
    ],
    correctAnswer: 1,
    explanation: 'Error rate tracking quantifies incorrect outputs or failed operations revealing reliability issues and vulnerability to specific input patterns, with error analysis categorizing failure modes identifying systematic weaknesses versus random errors enabling targeted improvements.'
  },
  {
    id: 'q10',
    question: 'What does adversarial robustness evaluation assess for agent security?',
    options: [
      'Only technical vulnerabilities in underlying infrastructure and hardware systems',
      'Resistance to prompt injection attacks attempting to alter intended behavior through malicious inputs',
      'General system performance under normal operating conditions without adversarial scenarios',
      'Compatibility with various deployment environments and infrastructure configurations'
    ],
    correctAnswer: 1,
    explanation: 'Adversarial robustness evaluation assesses resistance to prompt injection attacks attempting to alter intended behavior through malicious inputs, with injection vulnerability testing measuring success rates of adversarial prompts revealing security weaknesses enabling misuse.'
  },
  {
    id: 'q11',
    question: 'How does bias and fairness assessment ensure equitable agent service?',
    options: [
      'Through automatic adjustment algorithms that eliminate bias without manual intervention',
      'By detecting performance disparities across user groups and revealing whether agents exhibit systematic biases',
      'Bias assessment applies only to text generation without relevance for agent actions',
      'Fairness evaluation requires only technical performance metrics without demographic considerations'
    ],
    correctAnswer: 1,
    explanation: 'Bias and fairness assessment detects performance disparities across user groups defined by demographic characteristics, usage patterns, or other attributes, with fairness metrics revealing whether agents provide equitable service or exhibit systematic biases favoring particular populations.'
  },
  {
    id: 'q12',
    question: 'What does user satisfaction measurement capture beyond objective performance metrics?',
    options: [
      'Only technical performance data without subjective quality considerations',
      'Subjective quality assessments revealing whether agents meet user expectations and preferences',
      'Automatic optimization targets that improve performance without user input',
      'Universal satisfaction standards that apply identically across all user populations'
    ],
    correctAnswer: 1,
    explanation: 'User satisfaction measurement captures subjective quality assessments through rating mechanisms, surveys, or implicit feedback signals, revealing whether agents meet user expectations and preferences beyond objective performance metrics and proving essential for adoption and continued usage.'
  },
  {
    id: 'q13',
    question: 'How does function selection accuracy evaluation benefit multi-tool environments?',
    options: [
      'By automatically optimizing tool selection without requiring explicit evaluation criteria',
      'Through evaluating whether agents choose appropriate tools from available options for task requirements',
      'Function selection requires only technical compatibility testing without accuracy considerations',
      'Tool selection evaluation applies only to single-tool scenarios without multi-tool relevance'
    ],
    correctAnswer: 1,
    explanation: 'Function selection accuracy evaluates whether agents choose appropriate tools from available options for task requirements, with selection errors including wrong function choices or inappropriate tool combinations revealing planning or reasoning weaknesses essential for multi-tool environments.'
  },
  {
    id: 'q14',
    question: 'What does parameter grounding verification ensure for function calling?',
    options: [
      'Automatic parameter optimization that improves performance without manual configuration',
      'That values derive from user inputs, conversation context, or API specifications rather than agent hallucinations',
      'Universal parameter formats that work identically across all function types',
      'Only technical parameter validation without consideration for factual accuracy'
    ],
    correctAnswer: 1,
    explanation: 'Parameter grounding verification ensures values derive from user inputs, conversation context, or API specifications rather than agent hallucinations, with grounded parameters proving factually justified and appropriate to context while ungrounded values risk errors from incorrect assumptions.'
  },
  {
    id: 'q15',
    question: 'Why does semantic correctness evaluation using LLM judges prove essential?',
    options: [
      'LLM judges provide perfect evaluation without possibility of errors or inconsistencies',
      'To assess whether function calls appropriately implement user intent beyond syntactic correctness',
      'Semantic evaluation applies only to natural language without relevance for function calling',
      'Technical correctness alone provides sufficient validation for all function calling scenarios'
    ],
    correctAnswer: 1,
    explanation: 'Semantic correctness evaluation using LLM judges assesses whether function calls appropriately implement user intent beyond syntactic correctness, catching errors including technically correct but contextually inappropriate calls and ensuring agents truly serve user needs rather than just syntactically valid operations.'
  }
];