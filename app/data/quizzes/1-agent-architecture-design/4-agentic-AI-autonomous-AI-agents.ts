import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the document, what are the key components that comprise an agent in the CrewAI framework?',
    options: [
      'Agent Core, Memory Module, Tools, and Planning Module',
      'Role Playing, Focus, Tools, Cooperation, Guardrails, and Memory',
      'Data Processing, Model Training, Evaluation, and Documentation',
      'Natural Language Processing, Decision Making, Task Execution, and Feedback'
    ],
    correctAnswer: 1,
    explanation: 'The document specifically states that "In CrewAI, the key components comprising the agent are Role Playing, Focus, Tools, Cooperation, Guardrails, and Memory." While the first option describes general agent components, CrewAI has its own specific framework with these six distinct components.'
  },
  {
    id: 'q2',
    question: 'What are the two main crews described in the financial services modeling system, and what is their primary relationship?',
    options: [
      'The Data Analysis Crew and the Reporting Crew work independently on separate datasets',
      'The Modeling Crew and the Model Risk Management (MRM) Crew, where MRM serves as a safeguard team ensuring the modeling crew operates as intended',
      'The Training Crew and the Testing Crew collaborate to validate machine learning algorithms',
      'The Compliance Crew and the Audit Crew work together to ensure regulatory adherence'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "The model risk management (MRM) crew can be seen as a safeguard team that ensures the modeling crew is operating as intended while upholding regulatory rules, business objectives, and modeling functions." The modeling crew performs tasks like data analysis and model training, while the MRM crew validates and ensures compliance.'
  },
  {
    id: 'q3',
    question: 'According to the document, what is the purpose of guardrails in agentic systems?',
    options: [
      'To increase the computational speed and efficiency of multi-agent processing',
      'To ensure operational safety and ethical practices by reducing bias, unsafe actions, and hallucinations',
      'To facilitate better communication protocols between different agent types',
      'To optimize memory allocation and improve data storage capabilities'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "Guardrails are a set of rules that ensure operational safety and ethical practices in machine learning applications" and "Guardrails reduce the likelihood of issues like bias, potential for unsafe actions, dataset poisoning, lack of explainability, hallucinations, and non-reproducibility." They are primarily safety and ethics mechanisms.'
  },
  {
    id: 'q4',
    question: 'What is the role of the planning module in LLM-based agentic systems?',
    options: [
      'It stores and manages long-term and short-term memory for personalized interactions',
      'It provides external APIs and tools for agents to interact with the outside world',
      'It acts as a task orchestration engine that breaks down complex tasks into manageable steps and manages decision-making',
      'It handles the natural language processing and text generation capabilities of the system'
    ],
    correctAnswer: 2,
    explanation: 'The document explains that "In LLM-based agentic systems, a planning module is responsible for managing the decision-making and task execution process by breaking down complex tasks into manageable steps. In other words, the planning module acts as a task orchestration engine that manages how an agent handles multi-step, goal-oriented tasks."'
  },
  {
    id: 'q5',
    question: 'What approach does the document recommend to address safety concerns and harmful outputs in agentic systems?',
    options: [
      'Complete automation without any human oversight to eliminate bias',
      'Using only pre-trained models without any fine-tuning or customization',
      'Implementation of human-in-the-loop (HITL) systems that allow humans to provide oversight, feedback, and intervention',
      'Restricting agents to simple, single-step tasks to minimize complexity'
    ],
    correctAnswer: 2,
    explanation: 'The document emphasizes that "One of the ways to tackle this issue is the introduction of human-in-the-loop. This is the ability for humans to intervene or be a part of the processing capabilities of agentic systems. This approach, when applied properly, will be critical to protecting end-users from biased or incorrect outputs." It also states that "humans can provide oversight, feedback, and intervention to prevent the agents from taking harmful actions."'
  },
  {
    id: 'q6',
    question: 'According to the memory system described in CrewAI, what types of memory help agents recall, reason, and learn from past events?',
    options: [
      'Cache memory, buffer memory, and volatile memory',
      'Short-term memory, long-term memory, entity memory, and contextual memory',
      'Working memory, episodic memory, and semantic memory',
      'Local memory, distributed memory, and shared memory'
    ],
    correctAnswer: 1,
    explanation: 'The document specifically states that "The memory system in CrewAI helps agents to recall, reason, and effectively learn from past events and interactions. The memory system consists of short-term memory, long-term memory, entity memory, and contextual memory." These four types of memory enable agents to maintain context and learn from interactions.'
  }
];

