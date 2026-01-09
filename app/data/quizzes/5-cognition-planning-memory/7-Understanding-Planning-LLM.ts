import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is AI Memory in the LLM Era and how does it serve as a foundation for AI experiences?',
    options: [
      'The ability of LLM systems to encode, store, retain, and retrieve information from past interactions to create personalized, continuous, and context-aware AI experiences',
      'A specialized hardware component that provides additional computational power for large language model training and inference',
      'A software framework that enables AI models to access external databases and knowledge repositories in real-time',
      'A training methodology that helps large language models memorize vast amounts of factual information during the pre-training phase'
    ],
    correctAnswer: 0,
    explanation: 'AI Memory represents the ability of Large Language Model-driven systems to encode, store, retain, and retrieve information from past interactions to improve future responses and decision-making, serving as the foundation for creating personalized, continuous, and context-aware AI experiences.'
  },
  {
    id: 'q2',
    question: 'How does memory in AI systems mirror human cognitive processes?',
    options: [
      'Allows AI to overcome context window constraints and enables learning from experiences, building relationships, adapting to changes, and maintaining coherent long-term interactions',
      'Provides perfect recall of all information without any forgetting or information degradation over time',
      'Enables AI systems to process information at exactly the same speed and accuracy as human cognitive functions',
      'Allows AI to directly access human memories and thoughts through neural interface connections'
    ],
    correctAnswer: 0,
    explanation: 'Memory in AI systems mirrors human cognitive processes by allowing artificial intelligence to overcome context window constraints and enabling capabilities such as learning from past experiences, building relationships with users, adapting to changes, and maintaining coherent long-term interactions.'
  },
  {
    id: 'q3',
    question: 'What transformative advantages do memory-enhanced AI systems deliver across multiple dimensions?',
    options: [
      'Personalized interaction capabilities, enhanced cognitive abilities, improved adaptability, efficient resource utilization, and sophisticated self-evolution capabilities',
      'Unlimited computational resources, perfect accuracy guarantees, instant response times, and zero maintenance requirements',
      'Complete automation of all tasks, elimination of human oversight, and guaranteed optimal performance in all scenarios',
      'Universal compatibility with all systems, automatic regulatory compliance, and unlimited scalability without constraints'
    ],
    correctAnswer: 0,
    explanation: 'Memory-enhanced AI systems deliver personalized interaction capabilities, enhanced cognitive abilities through sophisticated reasoning, improved adaptability through continuous learning, efficient resource utilization through computational reuse, and sophisticated self-evolution capabilities for autonomous optimization.'
  },
  {
    id: 'q4',
    question: 'What are the three fundamental dimensions that organize memory architecture in LLM-driven AI systems?',
    options: [
      'Object Dimension (information source), Form Dimension (representation mechanism), and Time Dimension (retention duration)',
      'Input Dimension (data sources), Processing Dimension (computation methods), and Output Dimension (result formats)',
      'Local Dimension (device storage), Distributed Dimension (network storage), and Cloud Dimension (remote storage)',
      'Static Dimension (fixed content), Dynamic Dimension (changing content), and Hybrid Dimension (mixed content)'
    ],
    correctAnswer: 0,
    explanation: 'The memory architecture organizes memory across three fundamental dimensions: Object Dimension (defines memory based on information source and purpose), Form Dimension (categorizes by representation and storage mechanism), and Time Dimension (organizes by retention duration and temporal relevance).'
  },
  {
    id: 'q5',
    question: 'How does the Object Dimension distinguish between different types of memory information?',
    options: [
      'Distinguishes between personal memory derived from human input and system memory generated during task execution',
      'Separates factual information from emotional content and behavioral patterns from preference data',
      'Divides memory into successful experiences and failed attempts for learning optimization purposes',
      'Categorizes information by complexity levels ranging from simple facts to complex reasoning patterns'
    ],
    correctAnswer: 0,
    explanation: 'The Object Dimension defines memory based on information source and purpose, distinguishing between personal memory derived from human input and feedback versus system memory generated during task execution for cognitive enhancement.'
  },
  {
    id: 'q6',
    question: 'What is the key difference between parametric and non-parametric memory in the Form Dimension?',
    options: [
      'Parametric memory is embedded within model parameters through training, while non-parametric memory is maintained in external structures like databases',
      'Parametric memory stores numerical data exclusively, while non-parametric memory handles only text and multimedia content',
      'Parametric memory operates in real-time during inference, while non-parametric memory is processed offline in batch systems',
      'Parametric memory requires specialized hardware, while non-parametric memory can run on standard computing systems'
    ],
    correctAnswer: 0,
    explanation: 'The Form Dimension differentiates between parametric memory embedded within model parameters through training versus non-parametric memory maintained in external structures such as databases or retrieval systems, balancing permanence against accessibility and updateability.'
  },
  {
    id: 'q7',
    question: 'How does the Time Dimension organize memory by retention duration?',
    options: [
      'Separates short-term memory maintained within current interactions from long-term memory persisted across sessions and extended periods',
      'Divides memory into past experiences, present contexts, and future predictions for comprehensive temporal coverage',
      'Organizes information by creation date, modification date, and expiration date for systematic lifecycle management',
      'Categories memory by processing speed requirements from instant access to batch-processed information'
    ],
    correctAnswer: 0,
    explanation: 'The Time Dimension organizes memory by retention duration, separating short-term memory maintained within current interactions from long-term memory persisted across sessions and extended periods for comprehensive temporal memory management.'
  },
  {
    id: 'q8',
    question: 'What creates the eight-quadrant memory taxonomy in the comprehensive memory framework?',
    options: [
      'The intersection of the three fundamental dimensions (Object, Form, Time) creates eight distinct memory quadrants with specific functional roles',
      'A predetermined classification system based on traditional computer science memory management principles',
      'User-defined categories that can be customized based on specific application requirements and use cases',
      'An artificial division created for academic purposes without practical implementation significance'
    ],
    correctAnswer: 0,
    explanation: 'The intersection of the three fundamental dimensions (Object, Form, Time) creates eight distinct memory quadrants, each serving specific functional roles within the overall memory architecture and providing a structured framework for optimization.'
  },
  {
    id: 'q9',
    question: 'What function does Personal Non-Parametric Short-Term Memory serve in the memory architecture?',
    options: [
      'Functions as working memory for real-time context supplementation, including multi-turn dialogue history within current conversations',
      'Stores permanent user preferences and behavioral patterns that persist across multiple sessions and interactions',
      'Handles system-level computational results and intermediate processing states during task execution',
      'Manages authentication tokens and security credentials for accessing protected resources and services'
    ],
    correctAnswer: 0,
    explanation: 'Personal Non-Parametric Short-Term Memory functions as working memory for real-time context supplementation during active sessions, including multi-turn dialogue history that enables coherent interactions and contextually appropriate responses.'
  },
  {
    id: 'q10',
    question: 'How does Personal Non-Parametric Long-Term Memory enable cross-session functionality?',
    options: [
      'Serves as episodic memory storing user-specific information and interaction histories, enabling memory retrieval-augmented generation',
      'Provides only basic user identification and login credentials for system access control purposes',
      'Maintains system configuration settings and operational parameters that remain constant across sessions',
      'Stores computational cache data to improve system performance without any user-specific personalization'
    ],
    correctAnswer: 0,
    explanation: 'Personal Non-Parametric Long-Term Memory serves as episodic memory for retention beyond session boundaries, storing user-specific information and enabling memory retrieval-augmented generation that overcomes context window limitations with personalized experiences.'
  },
  {
    id: 'q11',
    question: 'What advantages and challenges characterize Personal Parametric Long-Term Memory?',
    options: [
      'Offers compression efficiency and global user representation but faces computational resource requirements and scalability challenges',
      'Provides unlimited storage capacity and instant access but requires specialized hardware for optimal performance',
      'Enables perfect memory retention and recall but suffers from slow processing speeds and high latency',
      'Guarantees complete privacy protection and security but lacks any personalization or adaptation capabilities'
    ],
    correctAnswer: 0,
    explanation: 'Personal Parametric Long-Term Memory implements deep personalization through knowledge editing, offering advantages in compression efficiency and global user representation but facing substantial challenges in computational resource requirements and deployment scalability.'
  },
  {
    id: 'q12',
    question: 'How does System Non-Parametric Short-Term Memory enhance agent cognitive capabilities?',
    options: [
      'Enhances working memory for reasoning and planning by capturing intermediate outputs including thought processes and decision-making steps',
      'Provides basic system monitoring and performance metrics without any cognitive enhancement capabilities',
      'Stores user interface elements and display preferences for improved visual presentation of information',
      'Manages network connections and communication protocols for distributed system coordination and data sharing'
    ],
    correctAnswer: 0,
    explanation: 'System Non-Parametric Short-Term Memory enhances working memory for reasoning and planning within current task contexts, capturing intermediate outputs including thought processes, action sequences, and decision-making steps for sophisticated cognitive patterns.'
  },
  {
    id: 'q13',
    question: 'What capabilities does System Non-Parametric Long-Term Memory provide for continuous improvement?',
    options: [
      'Supports procedural memory through reflection and refinement, capturing historical experiences and forming reusable workflows and skill libraries',
      'Maintains only basic error logs and debugging information without any learning or improvement capabilities',
      'Provides simple data backup and recovery services for system reliability and disaster recovery purposes',
      'Stores static configuration files and system parameters that never change during operational deployment'
    ],
    correctAnswer: 0,
    explanation: 'System Non-Parametric Long-Term Memory supports procedural memory through reflection and refinement mechanisms, capturing historical experiences and self-improvement insights to form reusable workflows, skill libraries, and abstracted patterns for future guidance.'
  },
  {
    id: 'q14',
    question: 'What future challenges and opportunities are identified for advancing memory capabilities?',
    options: [
      'Multimodal memory integration, stream memory processing, comprehensive memory architectures, shared memory networks, and automated self-evolution',
      'Only hardware upgrades and computational speed improvements without any architectural or functional enhancements',
      'Exclusively cost reduction and simplified programming interfaces without advancing actual memory capabilities',
      'Basic bug fixes and maintenance updates without any significant technological advancement or innovation'
    ],
    correctAnswer: 0,
    explanation: 'Future directions include multimodal memory integration for diverse data types, stream memory processing for real-time adaptation, comprehensive architectures emulating human memory, shared memory networks for collaboration, and automated self-evolution capabilities.'
  },
  {
    id: 'q15',
    question: 'How do memory mechanisms constitute foundational elements of advanced AI systems?',
    options: [
      'Profoundly influence personalization, adaptability, reasoning, planning, and self-evolution capabilities while enabling robust real-world applications',
      'Provide only basic data storage capabilities without any impact on system intelligence or performance',
      'Serve as optional add-on features that can be easily removed without affecting core AI functionality',
      'Function exclusively as debugging tools for developers without any user-facing benefits or capabilities'
    ],
    correctAnswer: 0,
    explanation: 'Memory mechanisms constitute foundational elements that profoundly influence personalization, adaptability, reasoning, planning, and self-evolution capabilities, enabling dynamic, adaptive, and intelligent memory architectures for robust applications across complex real-world tasks.'
  }
];