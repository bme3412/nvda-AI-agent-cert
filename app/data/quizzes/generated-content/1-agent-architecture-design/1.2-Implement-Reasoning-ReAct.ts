import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, how does ReAct differ from traditional AI systems in terms of reasoning and action capabilities?',
    options: [
      'ReAct systems are faster and require less computational resources than traditional AI systems',
      'Traditional AI systems had pure reasoning systems that could think but not act, or action-taking systems that could execute but not think, while ReAct bridges this gap with continuous reasoning-action loops',
      'ReAct systems only work with pre-programmed responses while traditional systems can adapt to new situations',
      'Traditional AI systems are more reliable and accurate than ReAct systems in complex scenarios'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "Before ReAct and similar frameworks, most AI systems fell into two camps. You had pure reasoning systems that could think through problems and generate plans but couldn\'t actually do anything in the real world. Then you had action-taking systems that could execute tasks but didn\'t really think through their approach... ReAct bridges this gap by creating a continuous loop where agents alternate between reasoning about what they should do next and actually taking actions based on that reasoning."'
  },
  {
    id: 'q2',
    question: 'What does the ReAct cycle consist of, and how does it operate in practice?',
    options: [
      'Plan-Execute-Evaluate in a linear sequence without iteration',
      'Reason, Act, Observe in a continuous loop until the task is complete',
      'Input-Process-Output with feedback mechanisms',
      'Search-Analyze-Report with human validation at each step'
    ],
    correctAnswer: 1,
    explanation: 'The document describes the ReAct cycle as "reason, act, observe, reason, act, observe—until the agent has enough information to provide a comprehensive answer." It operates by having the agent "alternate between reasoning about what they should do next and actually taking actions based on that reasoning," creating "a continuous loop."'
  },
  {
    id: 'q3',
    question: 'What are the key benefits of explicit reasoning traces in ReAct frameworks?',
    options: [
      'They reduce computational costs and improve processing speed',
      'They make agent behavior interpretable and debuggable, allow course-correction mid-execution, and create natural checkpoint systems for human intervention',
      'They eliminate the need for human oversight and monitoring',
      'They simplify the agent architecture and reduce complexity'
    ],
    correctAnswer: 1,
    explanation: 'The document states that explicit reasoning traces serve multiple purposes: "First, it makes the agent\'s behavior interpretable and debuggable... Second, it allows the agent to course-correct mid-execution... Third, it creates a natural checkpoint system where human operators can intervene, approve actions, or redirect the agent\'s approach."'
  },
  {
    id: 'q4',
    question: 'According to the document, what distinguishes high-quality reasoning in ReAct implementations from poor reasoning?',
    options: [
      'High-quality reasoning uses more complex vocabulary and longer sentences',
      'High-quality reasoning is specific and analytical, explaining why certain actions are needed rather than being vague',
      'High-quality reasoning always leads to successful task completion without errors',
      'High-quality reasoning requires fewer reasoning steps to reach conclusions'
    ],
    correctAnswer: 1,
    explanation: 'The document emphasizes that "Effective ReAct implementations encourage the agent to be specific and analytical in its thought steps. Instead of vague thoughts like \'I should search for information,\' high-quality reasoning looks like \'The user asked about recent developments, and my knowledge cutoff is January 2025, so I need to search for events after that date to provide accurate information.\' This specificity directly improves action selection."'
  },
  {
    id: 'q5',
    question: 'How does error recovery work naturally in ReAct frameworks?',
    options: [
      'The system automatically restarts from the beginning when errors occur',
      'Errors are handled through the reasoning loop, where the next reasoning step can acknowledge failures and adjust strategy',
      'Human operators must manually intervene to correct any errors that occur',
      'The agent stops execution and reports the error to the user immediately'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "Error recovery in ReAct frameworks happens naturally through the reasoning loop. If an action fails or returns unexpected results, the next reasoning step can acknowledge this and adjust strategy." It provides examples of how agents can reason through failures and try different approaches, making "ReAct-based agents much more robust than systems that commit to an action sequence upfront."'
  },
  {
    id: 'q6',
    question: 'What fundamental shift does implementing ReAct represent in how agents approach problems?',
    options: [
      'From complex decision-making to simple rule-following',
      'From "do this specific thing" to "figure out what needs to be done and do it thoughtfully"',
      'From collaborative problem-solving to autonomous operation',
      'From real-time processing to batch processing of requests'
    ],
    correctAnswer: 1,
    explanation: 'The document concludes that "When you implement ReAct in your own systems... You\'re moving from \'do this specific thing\' to \'figure out what needs to be done and do it thoughtfully.\' That shift is what separates basic automation from true agentic behavior, and mastering ReAct frameworks is essential for building AI agents that can handle real-world complexity with the kind of adaptive intelligence we expect from capable human assistants."'
  }
];

