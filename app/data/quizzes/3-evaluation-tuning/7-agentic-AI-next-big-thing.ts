import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What distinguishes agentic AI from traditional AI systems in terms of operational autonomy?',
    options: [
      'Agentic AI requires constant human supervision and prompting for each individual decision and action',
      'Traditional AI systems have greater autonomy while agentic AI follows stricter rule-based protocols',
      'Agentic AI exclusively processes predefined inputs without any capability for independent decision-making',
      'Agentic AI can make autonomous decisions toward goals with minimal oversight, planning and executing steps independently'
    ],
    correctAnswer: 3,
    explanation: 'Agentic AI can make autonomous decisions based on both past performance and current assessment of what\'s needed to accomplish tasks, operating with minimal human oversight. Unlike traditional AI locked into input/output models, agentic AI can take complex steps toward goals, checking in with humans only when required.'
  },
  {
    id: 'q2',
    question: 'Using the manager versus technician analogy, how does agentic AI differ from specialized AI agents?',
    options: [
      'Agentic AI acts like a manager deploying various techniques and making decisions, while agents are like technicians doing set tasks',
      'Specialized AI agents manage multiple systems while agentic AI performs single focused tasks like technicians',
      'Both operate identically with no meaningful distinction between their operational capabilities and decision-making authority',
      'Agentic AI requires more training data than specialized agents which can function with minimal supervision'
    ],
    correctAnswer: 0,
    explanation: 'Specialized AI agents are trained to do set tasks based on external inputs, like skilled technicians assigned to jobs. Agentic AI can deploy various AI techniques while making autonomous decisions, like a manager deciding which technicians are necessary to complete a project.'
  },
  {
    id: 'q3',
    question: 'What represents the "third wave" of AI development according to the article?',
    options: [
      'The introduction of recommendation engines and auto-fill text that analyze large datasets for correlations',
      'The development of algorithms enabling AI to generate creative content including text, images, and music',
      'The integration of quantum computing with traditional neural networks for exponential processing improvements',
      'The ability to bring disparate elements together under autonomous choice and decision-making capabilities'
    ],
    correctAnswer: 3,
    explanation: 'The third wave of AI focuses on bringing disparate elements and abilities together under the umbrella of choice. Agentic AI analyzes paths to goals and makes decisions on the best way to complete tasks autonomously.'
  },
  {
    id: 'q4',
    question: 'How do agentic AI systems differ from individual AI agents in terms of scope and capability?',
    options: [
      'Individual agents are more powerful than agentic systems which simply coordinate basic operations between components',
      'Agentic AI systems weave together individual AI agents and tools into cohesive wholes for larger objectives',
      'Both terms describe identical concepts with no practical distinction in their architecture or implementation',
      'AI agents handle complex strategic decisions while agentic systems perform narrowly defined tactical operations'
    ],
    correctAnswer: 1,
    explanation: 'Agentic AI systems go bigger by weaving together individual AI agents and other appropriate systems or tools into a cohesive whole. For example, an agentic system can use data from individual agents to help multiple departments adapt offerings.'
  },
  {
    id: 'q5',
    question: 'In the fraud detection example, how does agentic AI improve upon traditional AI approaches?',
    options: [
      'Traditional AI provides more context by analyzing broader patterns while agentic AI focuses narrowly',
      'Traditional AI makes autonomous decisions while agentic AI strictly follows predefined detection rules',
      'Agentic AI processes transactions faster but with lower accuracy than traditional rule-based systems',
      'Agentic AI can gather additional contextual information from external systems like weather data for better decisions'
    ],
    correctAnswer: 3,
    explanation: 'Agentic AI can communicate with other systems to gather further details, such as requesting weather information that might explain unusual purchasing patterns. This additional context enables better-informed decisions compared to traditional AI\'s predefined task execution.'
  },
  {
    id: 'q6',
    question: 'What is the key difference between generative AI and agentic AI in terms of workflow?',
    options: [
      'Generative AI operates autonomously without prompts while agentic AI requires constant human input and supervision',
      'Both technologies function identically with no meaningful distinction in their operational characteristics or purposes',
      'Generative AI makes strategic decisions while agentic AI exclusively handles content generation and creative tasks',
      'Generative AI focuses on content creation from prompts while agentic AI focuses on autonomous decision-making toward goals'
    ],
    correctAnswer: 3,
    explanation: 'Generative AI focuses on content generation and still requires prompts (data in/data out workflow). Agentic AI focuses on decision-making and actions, autonomously refining outputs and communicating with multiple sources to achieve goals.'
  },
  {
    id: 'q7',
    question: 'Using the real-world analogy, how does agentic AI compare to generative AI and individual AI agents?',
    options: [
      'GenAI is a toolkit for DIY, AI agents are individual contractors, and agentic AI is a general contractor coordinating specialists',
      'GenAI is like hiring a general contractor, AI agents are plumbers, and agentic AI is a basic toolkit',
      'All three function as identical toolkits with no differentiation in capability or coordination requirements',
      'GenAI coordinates all activities, AI agents provide tools, and agentic AI performs manual implementation tasks'
    ],
    correctAnswer: 0,
    explanation: 'GenAI is like a toolkit to DIY fix a leak, an AI agent is like bringing in a plumber to fix and explore related issues, and agentic AI is like a general contractor who can direct specialists and coordinate across multiple domains.'
  },
  {
    id: 'q8',
    question: 'What healthcare application demonstrates agentic AI\'s autonomous decision-making capabilities?',
    options: [
      'Following strict protocols to input patient information into electronic health record systems without deviation',
      'Generating medical images from text descriptions provided by healthcare professionals during diagnostic procedures',
      'Translating medical documents between languages while maintaining exact terminology without contextual interpretation',
      'Processing patient data from multiple sources to identify emerging patterns and autonomously gather additional information'
    ],
    correctAnswer: 3,
    explanation: 'Agentic AI can quickly process all incoming patient data from wearables, blood results, and vitals to identify emerging patterns. The agent has autonomy to grab additional data as needed to identify issues and produce reports for physicians.'
  },
  {
    id: 'q9',
    question: 'How does agentic AI improve supply chain management beyond traditional optimization?',
    options: [
      'By strictly following predetermined logistics routes without considering external variables or contextual factors',
      'By generating synthetic data to simulate supply chain scenarios without accessing real-time information',
      'By replacing human decision-makers entirely and operating without any oversight or intervention mechanisms',
      'By interfacing with multiple systems to consider weather, traffic, and political factors for route optimization'
    ],
    correctAnswer: 3,
    explanation: 'In transportation management, AI agents can interface with other systems to consider route optimization based on weather, traffic, political stability, and national holidays. This autonomous data gathering and analysis enables agent-generated adjustments for optimal delivery routes.'
  },
  {
    id: 'q10',
    question: 'What key benefit distinguishes agentic AI\'s "always-on operations" from traditional AI systems?',
    options: [
      'Traditional AI can work continuously without breaks while agentic AI requires regular maintenance downtime',
      'Both systems require identical levels of human intervention and supervision throughout their operational lifecycle',
      'Agentic AI consumes less power than traditional systems allowing for extended continuous operation periods',
      'Agentic AI works autonomously toward goals without needing input after completing tasks, enabling continuous operations'
    ],
    correctAnswer: 3,
    explanation: 'Agentic AI goes beyond nonagentic AI\'s need for input upon finishing tasks and instead works toward goals autonomously. This decision-making autonomy enables always-on operations for data processing, research, customer responses, and other functions.'
  },
  {
    id: 'q11',
    question: 'What challenge does "accuracy" present for newly deployed agentic AI systems?',
    options: [
      'Agentic systems always produce perfect results but are extremely slow in processing decisions',
      'Accuracy is never a concern because agentic AI inherently self-corrects without any human oversight',
      'Traditional AI systems are always more accurate than agentic systems regardless of training data quality',
      'Bad data can lead to undesirable outcomes, requiring monitoring like a new employee until consistently correct'
    ],
    correctAnswer: 3,
    explanation: 'Agentic systems generally improve on human-level accuracy, but bad data can lead to undesirable outcomes. Like new employees, businesses should monitor newly deployed systems until results are consistently correct, starting with low-risk tasks.'
  },
  {
    id: 'q12',
    question: 'Why is transparency particularly important for agentic AI systems compared to traditional AI?',
    options: [
      'Traditional AI requires no explanation while agentic AI must document every calculation for compliance',
      'Transparency is irrelevant because agentic AI systems operate in completely isolated environments',
      'Agentic AI decisions are always correct and therefore require no explanation or justification mechanisms',
      'Agents should explain decisions and conclusions, with logic and evaluation methods made accessible for verification'
    ],
    correctAnswer: 3,
    explanation: 'Agents should be developed with means to explain decisions and conclusions. Key elements like the agent\'s logic and evaluation methods should be accessible so they can be confirmed as well-founded or corrected if needed.'
  },
  {
    id: 'q13',
    question: 'What is the recommended first step when implementing an agentic AI project?',
    options: [
      'Immediately deploy the most advanced agentic system available without preliminary planning or assessment',
      'Purchase expensive hardware infrastructure before determining what the system will actually accomplish',
      'Hire additional staff members specifically dedicated to manually supervising every AI decision made',
      'Define clear objectives to focus team efforts and inform what prebuilt system to start with'
    ],
    correctAnswer: 3,
    explanation: 'Until the desired objective is defined, teams can\'t focus on building a system based on available resources. Objectives can also inform what prebuilt system to start with, making this the critical first step.'
  },
  {
    id: 'q14',
    question: 'Why should initial tasks for agentic AI systems be "low risk and easily fixable"?',
    options: [
      'Complex tasks are impossible for agentic AI systems regardless of their training or capabilities',
      'Agentic AI performs better on simple tasks and deteriorates rapidly when handling complex operations',
      'High-risk tasks require traditional AI systems which are inherently more reliable than agentic approaches',
      'Starting with low-risk tasks allows monitoring and trust-building, similar to onboarding new employees'
    ],
    correctAnswer: 3,
    explanation: 'Just like a new employee, trust should be earned for agentic AI systems. Early tasks should be low risk and easily fixable, allowing businesses to monitor systems until results are consistently correct before expanding to higher-stakes applications.'
  },
  {
    id: 'q15',
    question: 'What future development area focuses on addressing AI\'s "greatest challenges" for agentic systems?',
    options: [
      'Integration into enterprise systems with more adaptable and customizable entry points across functions',
      'Improving accuracy through reinforcement learning and better filtering and validation techniques',
      'Achieving proper balance of autonomy, functionality, and control without requiring human oversight',
      'Energy efficiency to reduce the power consumption footprint of complex agentic AI processes'
    ],
    correctAnswer: 3,
    explanation: 'Power consumption is one of AI\'s greatest challenges. Agentic AI, with inherently more complex processes and self-directed research, is projected to use more resources than previous AI use cases, making energy efficiency key to long-term success.'
  }
];
