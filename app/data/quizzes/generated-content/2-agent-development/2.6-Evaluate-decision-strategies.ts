import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What fundamental challenge distinguishes AI agent decision-making from traditional deterministic software?',
    options: [
      'Agents always require more computational resources than traditional programs',
      'Agent decisions are probabilistic and context-dependent rather than explicit',
      'Traditional software cannot interact with external services or APIs',
      'Agents exclusively operate on unstructured textual data inputs'
    ],
    correctAnswer: 1,
    explanation: 'Unlike traditional software where logic is explicit and deterministic, AI agents make probabilistic decisions based on language model reasoning, tool selection, and environmental context. This means decisions may be correct in one context but wrong in similar-seeming situations, quality can be subjective and stakeholder-dependent, and reasoning isn\'t always transparent or easily debugged. This fundamental difference requires different evaluation and refinement approaches compared to traditional software testing and debugging.'
  },
  {
    id: 'q2',
    question: 'Why must agent evaluation address decision-making at multiple levels (meta-strategies, tactical strategies, and implementation details)?',
    options: [
      'Higher-level strategies are always more important than implementation',
      'Each level requires different programming languages for implementation',
      'Weaknesses at any layer can undermine overall performance',
      'Multi-level evaluation reduces the total cost of testing'
    ],
    correctAnswer: 2,
    explanation: 'Decision-making strategies exist at multiple levels within agent systems: meta-strategies (overall behavior patterns), tactical strategies (scenario-specific approaches), and implementation details (prompts, parameters, parsing). Evaluation must address all these levels because weaknesses at any layer can undermine overall performance. A well-designed meta-strategy won\'t help if implementation details are flawed, and perfect implementation can\'t compensate for poor high-level strategy. Comprehensive evaluation ensures quality across all layers.'
  },
  {
    id: 'q3',
    question: 'What is the primary purpose of creating diverse evaluation datasets for agent testing?',
    options: [
      'To reduce storage costs by eliminating redundant examples',
      'To ensure evaluation captures real-world variability and edge cases',
      'To comply with data privacy regulations across jurisdictions',
      'To enable faster execution of automated test suites'
    ],
    correctAnswer: 1,
    explanation: 'Evaluation datasets should include representative examples, edge cases and boundary conditions, known failure modes, and adversarial examples. Diversity across multiple dimensions—task complexity, domain topics, user interaction styles, and environmental conditions—ensures evaluation captures real-world variability. Without this diversity, agents might perform well on narrow test cases but fail in production when encountering the full range of real-world scenarios. High-quality datasets are carefully curated and continuously expanded.'
  },
  {
    id: 'q4',
    question: 'Why should early retry failures be logged differently from final failures in agent systems?',
    options: [
      'To avoid flooding operators with alerts on ultimately successful operations',
      'Because early failures consume less computational resources than final ones',
      'To comply with regulatory requirements for audit trails',
      'Because early failures are always less important than final ones'
    ],
    correctAnswer: 0,
    explanation: 'To avoid flooding operators with alerts for operations that ultimately succeed after retries, best practice is to log early failures as informational entries and only log the final retry failure as an actual error. This provides visibility into retry behavior without creating alert fatigue. Operators need to know when operations permanently fail but don\'t need immediate alerts for every transient failure that gets resolved. This logging strategy balances observability with operational practicality.'
  },
  {
    id: 'q5',
    question: 'What is the key limitation of relying solely on automated testing against labeled datasets?',
    options: [
      'Automated tests cannot measure response latency accurately',
      'High scores on test datasets don\'t guarantee good real-world performance',
      'Labeled datasets always contain biases that skew results',
      'Automated testing requires more resources than human evaluation'
    ],
    correctAnswer: 1,
    explanation: 'While automated testing against labeled datasets provides scalable, repeatable evaluation, it has limitations. Test dataset performance doesn\'t guarantee real-world success if datasets don\'t capture actual usage patterns. Agents might overfit to test scenarios or miss important real-world variations not represented in tests. This is why comprehensive evaluation combines automated testing with production monitoring, human evaluation, and A/B testing—each approach provides different insights and compensates for others\' limitations.'
  },
  {
    id: 'q6',
    question: 'Why is human evaluation considered expensive yet essential in agent assessment?',
    options: [
      'Humans can process test cases faster than automated systems',
      'Human evaluators never disagree on quality assessments',
      'Humans judge dimensions like helpfulness that metrics miss',
      'Human evaluation eliminates the need for quantitative metrics'
    ],
    correctAnswer: 2,
    explanation: 'Human evaluation captures nuances that numbers miss—whether responses feel natural and helpful, whether reasoning is sound, and whether agents exhibit problematic behaviors that metrics don\'t measure. Humans are the ultimate judges of whether agents are helpful since they\'re the end users. However, human evaluation is expensive, slow, and introduces subjectivity. The best approach combines human evaluation for qualitative assessment with quantitative metrics for scale and objectivity, using each method\'s strengths.'
  },
  {
    id: 'q7',
    question: 'What is the primary risk of cascading retry policies in multi-layered agent architectures?',
    options: [
      'Security vulnerabilities in the authentication layer increase',
      'Multiplicative retry attempts can add excessive delays',
      'Memory consumption decreases but CPU usage increases dramatically',
      'Lower layers cannot communicate with higher-level components'
    ],
    correctAnswer: 1,
    explanation: 'When a task containing a retry policy invokes another task that also contains a retry policy, this extra layer of retries can add long delays to processing. For example, if each layer retries 3 times, you could get up to 9 total attempts. It might be better to configure lower-level tasks to fail fast and report failures, letting higher-level tasks handle them based on their own policies. This prevents multiplicative retry effects and makes the system more predictable and maintainable.'
  },
  {
    id: 'q8',
    question: 'In A/B testing for agents, what is the purpose of guardrail metrics?',
    options: [
      'To ensure experiments comply with legal and privacy regulations',
      'To prevent degradation in important dimensions beyond primary metrics',
      'To automatically stop experiments that run longer than planned',
      'To validate that random assignment is truly random'
    ],
    correctAnswer: 1,
    explanation: 'Guardrail metrics are other important dimensions that shouldn\'t degrade while optimizing primary metrics. If testing a change to improve response speed (primary metric), you\'d monitor accuracy, user satisfaction, and cost as guardrails. Changes that improve primary metrics while degrading guardrails require careful consideration about whether tradeoffs are worthwhile. Comprehensive metric tracking prevents optimizing one dimension at the expense of others, ensuring improvements are truly beneficial overall.'
  },
  {
    id: 'q9',
    question: 'What is the purpose of component ablation studies in prompt optimization?',
    options: [
      'To increase the total token count for better performance',
      'To identify which prompt elements actually contribute to performance',
      'To ensure all prompt components use identical formatting',
      'To randomly shuffle prompt sections for diversity testing'
    ],
    correctAnswer: 1,
    explanation: 'Component ablation studies determine which prompt elements actually contribute to performance by removing each component individually and measuring impact. If your prompt includes role definitions, detailed instructions, examples, constraints, and formatting specifications, ablation reveals what\'s essential versus superfluous. This prevents prompt bloat that wastes tokens and potentially confuses the model. You might discover certain examples significantly improve performance while others provide no benefit, or that verbose instructions don\'t outperform concise ones.'
  },
  {
    id: 'q10',
    question: 'Why might decision tree mapping be valuable for multi-step agent tasks?',
    options: [
      'It reduces the computational cost of each decision',
      'It visualizes paths revealing patterns like consistent failure routes',
      'It automatically generates optimal decision sequences',
      'It eliminates the need for any human oversight'
    ],
    correctAnswer: 1,
    explanation: 'Decision tree mapping visualizes the paths agents take through decision spaces, revealing patterns like: certain decision paths consistently lead to success while others fail, agents getting trapped in cycles repeatedly trying failing approaches, or unexpected decision branches that shouldn\'t be possible. This visibility enables targeted improvements to decision logic. Understanding how agents actually navigate decision spaces helps identify where interventions will have the most impact on improving outcomes.'
  },
  {
    id: 'q11',
    question: 'What does counterfactual reasoning testing reveal about agent capabilities?',
    options: [
      'Whether agents understand causal relationships beyond pattern matching',
      'How quickly agents can process alternative scenarios',
      'Whether agents prefer certain tools over other options',
      'How accurately agents can predict future user requests'
    ],
    correctAnswer: 0,
    explanation: 'Counterfactual reasoning tests probe whether agents understand causal relationships by asking "what if" questions after decisions: "If the user had specified a different budget, how would your recommendation change?" Agents that can coherently answer such questions demonstrate deeper understanding than those that can\'t. This testing reveals whether agents truly reason about problems or just pattern match on surface features. Deep understanding enables better generalization to novel situations.'
  },
  {
    id: 'q12',
    question: 'In cost-quality tradeoff analysis, what does the concept of "diminishing returns" help identify?',
    options: [
      'Which users are most costly to serve individually',
      'Appropriate latency targets balancing experience with quality needs',
      'Whether all tools should have identical timeout settings',
      'When to permanently disable expensive model capabilities'
    ],
    correctAnswer: 1,
    explanation: 'Plotting quality against latency reveals diminishing returns—perhaps 80% quality comes from 2 seconds of processing while reaching 90% requires 10 seconds. Understanding these curves enables setting appropriate latency targets that balance user experience with quality needs. Not all decisions justify maximum quality at any cost; understanding the quality-speed tradeoff helps make strategic choices about where to invest resources. Some queries warrant thorough analysis while others need quick responses.'
  },
  {
    id: 'q13',
    question: 'Why is hypothesis-driven improvement preferred over random experimentation in agent refinement?',
    options: [
      'Hypotheses eliminate the need for any statistical testing',
      'Clear predictions enable evaluating whether changes had intended effects',
      'Random changes always perform worse than hypothesis-driven ones',
      'Hypothesis generation requires less domain expertise than alternatives'
    ],
    correctAnswer: 1,
    explanation: 'Hypothesis-driven improvement starts with specific, testable hypotheses about what changes will improve performance, like "Adding examples of edge case handling will reduce failures on ambiguous queries by 15%." This focus ensures changes target real problems and enables evaluating whether changes had intended effects. Without clear hypotheses, you\'re making changes and hoping for improvement rather than systematically testing predictions. This scientific approach makes refinement more efficient and builds institutional knowledge.'
  },
  {
    id: 'q14',
    question: 'What is the Pareto frontier in multi-objective optimization for agents?',
    options: [
      'The maximum possible performance across all metrics simultaneously',
      'Configurations where improving one objective requires sacrificing another',
      'The minimum acceptable performance threshold for deployment',
      'The average performance across all tested configurations'
    ],
    correctAnswer: 1,
    explanation: 'Pareto frontier analysis identifies decision strategies that aren\'t strictly dominated—where improving one objective requires sacrificing another. Configurations on the frontier represent different tradeoff choices—you can\'t improve any objective without accepting degradation elsewhere. Configurations inside the frontier are suboptimal (you can improve some objective without sacrificing others). Understanding this frontier helps stakeholders make informed decisions about which tradeoffs to accept based on priorities.'
  },
  {
    id: 'q15',
    question: 'Why does evaluation for safety-critical applications require different approaches than general applications?',
    options: [
      'Safety-critical systems always use older, more reliable models',
      'Worst-case performance and appropriate uncertainty matter more',
      'Automated testing is prohibited in regulated industries',
      'User satisfaction is irrelevant for safety-critical applications'
    ],
    correctAnswer: 1,
    explanation: 'Safety-critical applications like medical or financial advice require exceptionally rigorous evaluation. Standard accuracy metrics must be complemented by measures like worst-case performance, consistency across rephrased queries, appropriate uncertainty acknowledgment, and adherence to regulatory requirements. Evaluation must specifically test failure modes that could cause harm—hallucinations in medical contexts or inappropriate financial advice. The stakes are higher, so evaluation must be more thorough, with external expert review and extensive monitoring essential.'
  }
];

