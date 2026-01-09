import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is LLM Agent Planning and how does it differ from traditional planning approaches?',
    options: [
      'Uses Large Language Models as cognitive cores for autonomous agents, leveraging emergent intelligence to overcome symbolic and RL limitations',
      'Implements rule-based decision trees with predetermined action sequences for predictable task execution',
      'Employs classical search algorithms with heuristic evaluation functions for optimal path finding',
      'Utilizes reinforcement learning exclusively with reward-based optimization for policy development'
    ],
    correctAnswer: 0,
    explanation: 'LLM Agent Planning represents the application of Large Language Models as the cognitive core of autonomous agents, leveraging emergent intelligence to overcome limitations of traditional symbolic methods and reinforcement learning approaches that require extensive human expertise or large numbers of environment interactions.'
  },
  {
    id: 'q2',
    question: 'What key advantages do LLM-based planning approaches offer over conventional methods?',
    options: [
      'Natural language understanding, improved fault tolerance, broad embedded knowledge, and rapid prototyping capabilities',
      'Guaranteed optimal solutions, perfect accuracy, unlimited scalability, and zero computational overhead',
      'Hardware-specific optimizations, proprietary algorithms, exclusive cloud deployment, and automated licensing',
      'Mathematical proof generation, symbolic theorem proving, formal verification, and complete logical consistency'
    ],
    correctAnswer: 0,
    explanation: 'LLM-based planning offers natural language understanding without symbolic conversion, improved fault tolerance through dynamic adjustment, access to broad knowledge from pre-training, and rapid prototyping through prompt engineering rather than complex symbolic modeling.'
  },
  {
    id: 'q3',
    question: 'What are the five complementary methodologies that encompass the LLM agent planning landscape?',
    options: [
      'Task Decomposition, Multi-Plan Selection, External Planner-Aided Planning, Reflection and Refinement, and Memory-Augmented Planning',
      'Supervised Learning, Unsupervised Learning, Reinforcement Learning, Transfer Learning, and Meta-Learning',
      'Data Collection, Model Training, Hyperparameter Tuning, Evaluation, and Deployment',
      'Problem Definition, Solution Generation, Implementation, Testing, and Maintenance'
    ],
    correctAnswer: 0,
    explanation: 'The five complementary methodologies are Task Decomposition, Multi-Plan Selection, External Planner-Aided Planning, Reflection and Refinement, and Memory-Augmented Planning, each addressing different aspects of the planning challenge.'
  },
  {
    id: 'q4',
    question: 'How does Task Decomposition approach simplify complex planning problems?',
    options: [
      'Breaks complex problems into manageable sub-tasks using divide-and-conquer strategy with sequential or interleaved execution',
      'Eliminates complex problems by focusing only on simple, single-step tasks that require minimal reasoning',
      'Converts all problems into mathematical optimization functions with gradient-based solution methods',
      'Uses crowd-sourcing to distribute problem components across multiple human experts for manual solution'
    ],
    correctAnswer: 0,
    explanation: 'Task Decomposition approaches simplify complex problems by breaking them into manageable sub-tasks following a divide-and-conquer strategy, with planning performed sequentially for each component using decomposition-first or interleaved methods.'
  },
  {
    id: 'q5',
    question: 'What are the two primary patterns supported by Task Decomposition approaches?',
    options: [
      'Top-down approaches that start from high-level goals and bottom-up approaches that build from basic actions',
      'Decomposition-first methods that create complete task breakdown upfront and interleaved methods that dynamically alternate',
      'Sequential processing that handles tasks one at a time and parallel processing that executes multiple tasks simultaneously',
      'Deterministic planning with fixed sequences and stochastic planning with probabilistic action selection'
    ],
    correctAnswer: 1,
    explanation: 'Task Decomposition supports decomposition-first methods that create the complete task breakdown upfront before executing sub-plans, and interleaved methods that dynamically alternate between task decomposition and sub-task execution based on environmental feedback.'
  },
  {
    id: 'q6',
    question: 'How does Multi-Plan Selection methodology enhance planning robustness?',
    options: [
      'Generates diverse candidate plans through sampling strategies and selects optimal solutions using systematic evaluation',
      'Creates identical backup plans that can be used if the primary plan encounters unexpected failures',
      'Uses majority voting among random plan generators to ensure democratic decision-making processes',
      'Implements predetermined plan templates that are selected based on simple keyword matching'
    ],
    correctAnswer: 0,
    explanation: 'Multi-Plan Selection generates diverse candidate plans through sampling strategies in the decoding process and selects optimal solutions through systematic evaluation, including heuristic search algorithms and tree-of-thought architectures.'
  },
  {
    id: 'q7',
    question: 'What advanced search methods are utilized in Multi-Plan Selection approaches?',
    options: [
      'Tree-of-thought architectures, Monte Carlo Tree Search algorithms, and classic AI search methods for exploration-exploitation balance',
      'Only simple linear search and binary search algorithms without any sophisticated exploration techniques',
      'Exclusively brute-force enumeration of all possible plans with exhaustive evaluation of each option',
      'Random walk algorithms and genetic programming without any structured search or evaluation framework'
    ],
    correctAnswer: 0,
    explanation: 'Advanced implementations utilize tree-of-thought architectures supporting breadth-first and depth-first search, Monte Carlo Tree Search algorithms for exploration-exploitation balance, and classic artificial intelligence search methods.'
  },
  {
    id: 'q8',
    question: 'How does External Planner-Aided Planning integrate specialized planning modules?',
    options: [
      'Leverages external symbolic or neural planners while LLMs handle task formalization and semantic understanding',
      'Completely replaces language models with traditional planning systems for improved computational efficiency',
      'Uses external planners only for validation while language models handle all planning and execution tasks',
      'Implements hybrid systems where external planners and LLMs compete to generate the best possible solutions'
    ],
    correctAnswer: 0,
    explanation: 'External Planner-Aided Planning integrates language models with specialized planning modules where external planners (symbolic or neural) elevate the planning process while the language model primarily handles task formalization and semantic understanding.'
  },
  {
    id: 'q9',
    question: 'What dual-process approach is implemented in neural planner integration?',
    options: [
      'Parallel processing using multiple neural networks simultaneously with real-time result aggregation and selection',
      'Sequential processing where neural planners handle simple tasks and LLMs handle only the most complex scenarios',
      'Fast-thinking through trained neural networks for rapid responses and slow-thinking through LLM deliberation for complex problems',
      'Competitive processing where neural planners and LLMs generate solutions independently and users choose the better option'
    ],
    correctAnswer: 2,
    explanation: 'Neural planner integration employs a dual-process approach implementing fast-thinking through trained neural networks for rapid responses and slow-thinking through language model deliberation for complex problems.'
  },
  {
    id: 'q10',
    question: 'How do Reflection and Refinement mechanisms enhance planning capabilities?',
    options: [
      'Implement iterative processes of generation, feedback, and refinement where agents evaluate and correct their own outputs',
      'Use external validation systems that automatically reject any plans that do not meet predefined quality criteria',
      'Employ human oversight to manually review and approve every plan before execution begins',
      'Implement rigid quality checkpoints that prevent any deviation from initial planning specifications'
    ],
    correctAnswer: 0,
    explanation: 'Reflection and Refinement mechanisms enhance fault tolerance through iterative cycles of generation, feedback, and refinement where agents evaluate their own outputs, identify errors, and make corrections based on environmental feedback.'
  },
  {
    id: 'q11',
    question: 'What are the two primary approaches in Memory-Augmented Planning?',
    options: [
      'Retrieval-augmented generation methods using external memory and embodied memory systems with parameter fine-tuning',
      'Short-term memory for current tasks and long-term memory for historical information exclusively',
      'Local memory stored on individual devices and distributed memory shared across network systems',
      'Static memory with fixed content and dynamic memory that updates in real-time during execution'
    ],
    correctAnswer: 0,
    explanation: 'Memory-Augmented Planning has two primary approaches: retrieval-augmented generation methods that store experiences in external memory structures, and embodied memory approaches that fine-tune language models on historical samples.'
  },
  {
    id: 'q12',
    question: 'What storage formats are used in retrieval-augmented memory approaches?',
    options: [
      'Only binary data formats and compressed numerical representations for optimal storage efficiency',
      'Natural language texts, structured tables, and knowledge graphs with retrieval based on relevance, recency, and similarity',
      'Exclusively video and audio recordings of past interactions for comprehensive experience capture',
      'Proprietary encrypted formats that require specialized decoding algorithms for information access'
    ],
    correctAnswer: 1,
    explanation: 'Retrieval-augmented approaches store past experiences, knowledge, and strategies in formats including natural language texts, structured tables, and knowledge graphs with retrieval based on relevance, recency, and similarity metrics.'
  },
  {
    id: 'q13',
    question: 'What consistent patterns are revealed in performance analysis across planning benchmarks?',
    options: [
      'Effectiveness increases with computational investment, few-shot examples are essential, and reflection mechanisms improve success rates',
      'All planning methods perform equally well regardless of computational resources or example quality',
      'Simple approaches always outperform complex methods in terms of both accuracy and efficiency',
      'Performance is randomly distributed with no correlation between method sophistication and results'
    ],
    correctAnswer: 0,
    explanation: 'Performance analysis reveals that planning effectiveness increases with computational investment, few-shot examples prove essential for complex tasks, and reflection mechanisms play crucial roles in success rate improvements.'
  },
  {
    id: 'q14',
    question: 'What are the primary challenges that current LLM agent planning faces?',
    options: [
      'Hallucination issues, feasibility concerns from statistical foundations, efficiency optimization needs, and multi-modal feedback limitations',
      'Perfect accuracy with no errors, unlimited computational resources, instant response times, and universal compatibility',
      'Only minor user interface improvements and cosmetic enhancements to existing planning systems',
      'Complete replacement of human oversight and elimination of all manual intervention requirements'
    ],
    correctAnswer: 0,
    explanation: 'Current challenges include hallucination issues leading to irrational plans, feasibility concerns from statistical learning foundations, efficiency optimization needs, and multi-modal environment feedback limitations.'
  },
  {
    id: 'q15',
    question: 'What evaluation environments are used to assess planning capability performance?',
    options: [
      'Interactive gaming, text-based interactive environments, interactive retrieval systems, and interactive programming environments',
      'Only static datasets with predetermined correct answers and no environmental interaction',
      'Exclusively real-world deployment scenarios without any simulated or controlled testing environments',
      'Simple multiple-choice questionnaires and basic knowledge recall tests without complex reasoning'
    ],
    correctAnswer: 0,
    explanation: 'Planning evaluation employs diverse benchmarking environments including interactive gaming with real-time feedback, text-based interactive environments, interactive retrieval systems, and interactive programming environments for comprehensive assessment.'
  }
];