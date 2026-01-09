import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does agentic tool use evaluation represent?',
    options: [
      'Simple performance testing focused exclusively on response speed and computational efficiency',
      'Systematic assessment methodologies measuring autonomous agent performance across goal achievement, tool selection, and conversation management',
      'Basic accuracy testing without consideration for multi-dimensional agent capabilities or behaviors',
      'Universal evaluation that works identically across all agent types without specialized considerations'
    ],
    correctAnswer: 1,
    explanation: 'Agentic tool use evaluation represents systematic assessment methodologies for measuring autonomous agent performance across multiple dimensions including goal achievement, tool selection accuracy, conversation management, and topic adherence, addressing unique challenges emerging from agent autonomy.'
  },
  {
    id: 'q2',
    question: 'Why does multi-dimensional assessment prove necessary for agent quality evaluation?',
    options: [
      'Single metrics provide complete agent quality assessment without need for additional dimensions',
      'Because agent quality emerges from multiple factors beyond simple accuracy including tool selection, argument accuracy, and goal achievement',
      'Multi-dimensional assessment complicates evaluation without providing additional insight into agent performance',
      'All agent evaluation dimensions correlate perfectly making single metric sufficient'
    ],
    correctAnswer: 1,
    explanation: 'Multi-dimensional assessment recognizes agent quality emerges from multiple factors beyond simple accuracy metrics, with tool selection correctness, argument accuracy, sequence alignment, and goal achievement all contributing to overall performance, as agents may exhibit high performance on individual dimensions while failing overall tasks.'
  },
  {
    id: 'q3',
    question: 'How do reference-based and reference-free evaluation approaches address varying data availability?',
    options: [
      'Reference-based methods provide sufficient evaluation without need for reference-free approaches',
      'Reference-based compares against expected behaviors while reference-free infers expectations from conversation context',
      'Reference-free approaches prove more accurate than reference-based methods in all scenarios',
      'Both approaches provide identical evaluation results regardless of ground truth availability'
    ],
    correctAnswer: 1,
    explanation: 'Reference-based methods compare agent behaviors against expected tool sequences or predetermined outcomes enabling objective assessment, while reference-free approaches infer expected behaviors from conversation context enabling evaluation without explicit specifications, accommodating diverse deployment scenarios.'
  },
  {
    id: 'q4',
    question: 'What quality assurance benefits emerge from systematic agent evaluation?',
    options: [
      'Automatic quality improvement without need for human oversight or intervention',
      'Systematic validation revealing agent weaknesses, identifying failure patterns, and verifying improvements enhance performance',
      'Quality assurance proves unnecessary for autonomous agents due to self-correction capabilities',
      'All agents perform identically making quality assurance evaluation irrelevant'
    ],
    correctAnswer: 1,
    explanation: 'Quality assurance benefits emerge from systematic validation revealing agent weaknesses, identifying failure patterns, and verifying improvements actually enhance rather than degrade performance, with comprehensive assessment proving more reliable than ad-hoc testing potentially missing edge cases.'
  },
  {
    id: 'q5',
    question: 'How does development velocity improve from evaluation feedback?',
    options: [
      'Evaluation feedback provides minimal impact on development velocity or improvement prioritization',
      'Through rapid feedback enabling iterative refinement, automated evaluation supporting continuous integration, and quantitative metrics guiding optimization',
      'Development velocity improves automatically without need for systematic evaluation or feedback',
      'Manual testing provides superior feedback compared to systematic evaluation approaches'
    ],
    correctAnswer: 1,
    explanation: 'Development velocity improvements result from rapid feedback enabling iterative refinement, automated evaluation supporting continuous integration, and quantitative metrics guiding optimization priorities, with empirical measurements proving more effective than intuition for identifying highest-impact improvements.'
  },
  {
    id: 'q6',
    question: 'Why does domain constraint validation prove important for specialized assistants?',
    options: [
      'Domain constraints prove unnecessary for assistant systems with advanced capabilities',
      'To ensure agents maintain focus on intended subject areas rather than responding to arbitrary queries',
      'All assistants should respond to any query regardless of domain expertise or boundaries',
      'Domain validation complicates assistant operation without providing meaningful benefits'
    ],
    correctAnswer: 1,
    explanation: 'Domain constraint validation ensures agents maintain focus on intended subject areas rather than responding to arbitrary queries, proving particularly important for specialized assistants expected to provide expertise within specific domains while declining out-of-scope requests, preventing attempts at tasks beyond competencies.'
  },
  {
    id: 'q7',
    question: 'What does precision-focused evaluation measure for topic adherence?',
    options: [
      'How comprehensively agents address all possible topics regardless of appropriateness',
      'How frequently agent responses stay within allowed topics revealing tendency toward topic drift',
      'Universal precision that applies identically across all topic domains without variation',
      'Only technical precision without consideration for topic appropriateness or domain boundaries'
    ],
    correctAnswer: 1,
    explanation: 'Precision-focused evaluation measures how frequently agent responses stay within allowed topics revealing tendency toward topic drift, with high precision indicating reliable domain focus while low precision suggests agents frequently stray into inappropriate subjects.'
  },
  {
    id: 'q8',
    question: 'How does sequence alignment assessment validate tool workflow logic?',
    options: [
      'Through universal alignment that works identically regardless of workflow dependencies or logic',
      'By validating agents invoke tools in correct order when workflow logic demands specific sequencing',
      'Sequence alignment proves unnecessary for tool-using agents with autonomous capabilities',
      'All tool sequences produce identical results regardless of ordering or execution patterns'
    ],
    correctAnswer: 1,
    explanation: 'Sequence alignment assessment validates agents invoke tools in correct order when workflow logic demands specific sequencing, with order sensitivity proving appropriate when operations have dependencies requiring predetermined execution patterns such as search preceding filtering or authentication preceding data access.'
  },
  {
    id: 'q9',
    question: 'What does argument accuracy assessment validate for tool execution?',
    options: [
      'Universal argument validation that works identically across all tool types without customization',
      'Tool parameters match expected values ensuring correct operation specification',
      'Argument accuracy proves irrelevant for autonomous agents with self-correction capabilities',
      'All tool arguments provide identical results regardless of specific parameter values'
    ],
    correctAnswer: 1,
    explanation: 'Argument accuracy assessment validates tool parameters match expected values ensuring correct operation specification, proving essential for tool execution success as incorrect arguments cause failures, inappropriate behaviors, or unexpected results, enabling identifying specific parameter issues guiding targeted corrections.'
  },
  {
    id: 'q10',
    question: 'How does Tool Call F1-Score provide nuanced evaluation?',
    options: [
      'F1-Score provides identical evaluation to simple binary metrics without additional insight',
      'By quantifying precision revealing over-invocation tendencies and recall revealing under-invocation tendencies',
      'F1-Score evaluation proves unnecessary for tool-using agents with advanced capabilities',
      'All evaluation metrics provide identical results regardless of specific measurement approaches'
    ],
    correctAnswer: 1,
    explanation: 'Tool Call F1-Score provides nuanced evaluation by quantifying precision measuring what fraction of invoked tools represent correct choices and recall measuring what fraction of required tools agents actually invoke, with soft evaluation recognizing partial success providing more informative feedback than binary metrics.'
  },
  {
    id: 'q11',
    question: 'Why does outcome-focused assessment prove appropriate for goal evaluation?',
    options: [
      'Implementation details prove more important than ultimate objective achievement',
      'Because multiple valid approaches exist for achieving objectives making specific methods less important than final results',
      'Outcome assessment provides insufficient information about agent performance quality',
      'All agents use identical approaches making outcome assessment irrelevant'
    ],
    correctAnswer: 1,
    explanation: 'Outcome-focused assessment validates ultimate objective achievement regardless of intermediate steps or tool selections, proving appropriate when multiple valid approaches exist for achieving objectives or when specific implementation details matter less than final results, with high-level assessment recognizing task success.'
  },
  {
    id: 'q12',
    question: 'How does reference-free goal evaluation work without explicit specifications?',
    options: [
      'Reference-free evaluation proves impossible without explicit goal specifications',
      'By inferring intended objectives from conversation context without explicit specifications',
      'All goal evaluation requires predetermined reference standards for accurate assessment',
      'Reference-free approaches provide less accurate evaluation than reference-based methods'
    ],
    correctAnswer: 1,
    explanation: 'Reference-free goal evaluation infers intended objectives from conversation context without explicit specifications, proving valuable for production monitoring, exploratory testing, or scenarios where creating explicit references proves impractical, recognizing conversation structure often reveals goal achievement.'
  },
  {
    id: 'q13',
    question: 'When do strict ordering requirements apply for tool evaluation?',
    options: [
      'Strict ordering applies universally to all tool usage scenarios without exception',
      'When workflow logic demands specific execution sequences due to dependencies',
      'Ordering requirements prove unnecessary for autonomous agents with advanced capabilities',
      'All tool operations prove independent making ordering requirements irrelevant'
    ],
    correctAnswer: 1,
    explanation: 'Strict ordering requirements apply when workflow logic demands specific execution sequences, with sequential dependencies including authentication before access, search before retrieval, or validation before processing necessitating order enforcement to prevent logically invalid execution patterns.'
  },
  {
    id: 'q14',
    question: 'How does metric complementarity provide comprehensive performance assessment?',
    options: [
      'Single metrics provide complete performance assessment without need for complementary measures',
      'Through combining different metrics revealing various performance dimensions guiding targeted improvements',
      'Complementary metrics complicate assessment without providing additional insight into performance',
      'All metrics provide identical information making complementarity unnecessary'
    ],
    correctAnswer: 1,
    explanation: 'Metric complementarity provides comprehensive performance assessment through combining tool accuracy capturing exact match requirements with F1-scores quantifying partial correctness, distinguishing implementation correctness from outcome achievement, and evaluating both conversation management and technical execution dimensions.'
  },
  {
    id: 'q15',
    question: 'Why do multi-metric dashboards prove valuable for holistic visibility?',
    options: [
      'Single metrics provide sufficient visibility without need for dashboard approaches',
      'Because comprehensive measurement proves more informative than single metrics potentially missing important quality dimensions',
      'Dashboard approaches complicate performance understanding without providing additional value',
      'All performance metrics correlate perfectly making multi-metric displays unnecessary'
    ],
    correctAnswer: 1,
    explanation: 'Multi-metric dashboards provide holistic performance visibility revealing strengths, weaknesses, and optimization opportunities, with comprehensive measurement proving more informative than single metrics potentially missing important quality dimensions, supporting nuanced quality understanding guiding development priorities.'
  }
];