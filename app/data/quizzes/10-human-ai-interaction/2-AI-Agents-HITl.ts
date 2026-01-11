import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What is the key difference between traditional chatbot handovers and agentic AI with Human-in-the-Loop (HITL)?",
    options: [
      "Agentic AI eliminates the need for human agents entirely",
      "Traditional systems provide better customer satisfaction scores",
      "Agentic AI maintains context and can continue automation after human intervention, rather than full handover",
      "Traditional systems require more computational resources"
    ],
    correctAnswer: 2,
    explanation: "Unlike traditional systems where handover means full transfer to humans, agentic AI with HITL maintains context and can continue automation after selective human intervention."
  },
  {
    id: 'q2',
    question: "In LangChain's agentic framework, how are humans integrated as tools for AI agents?",
    options: [
      "Human agents are contacted selectively when the AI agent needs specific expertise or approval",
      "Human involvement is limited to initial system configuration",
      "Humans only monitor system performance metrics",
      "Humans replace all automated decision-making processes"
    ],
    correctAnswer: 0,
    explanation: "In LangChain's framework, humans function as specialized tools that agents can access when they need specific expertise, approval, or guidance for complex decisions."
  },
  {
    id: 'q3',
    question: "What is LangGraph's primary approach to implementing Human-in-the-Loop functionality?",
    options: [
      "Automated escalation based on conversation length",
      "Complete human control over agent decision-making",
      "Graph-based orchestration with interrupt nodes for human intervention at critical checkpoints",
      "Real-time human monitoring of all AI decisions"
    ],
    correctAnswer: 2,
    explanation: "LangGraph uses a graph-based approach where specific nodes can be designated as interrupt points, allowing human intervention at critical checkpoints before execution."
  },
  {
    id: 'q4',
    question: "How does LangGraph's interrupt mechanism work in agent workflows?",
    options: [
      "It pauses execution at designated nodes and waits for human approval before proceeding",
      "It logs all agent decisions for post-hoc human review",
      "It creates backup copies of agent states for rollback",
      "It stops all agent operations until human review is complete"
    ],
    correctAnswer: 0,
    explanation: "LangGraph's interrupt mechanism pauses workflow execution at specific nodes (interrupt_before parameters) and waits for human approval before allowing the agent to proceed."
  },
  {
    id: 'q5',
    question: "What advantage does the graph representation provide for agentic AI transparency?",
    options: [
      "It standardizes agent responses across different domains",
      "It eliminates the need for agent training data",
      "It reduces computational complexity of agent operations",
      "It allows inspection of agent behavior and provides visual clarity of decision flows"
    ],
    correctAnswer: 3,
    explanation: "Graph representation makes agent behavior transparent by providing visual clarity of decision flows, making it easier to inspect, debug, and understand agent operations."
  },
  {
    id: 'q6',
    question: "In LangGraph implementations, what is the purpose of StateGraph and node definitions?",
    options: [
      "To optimize network communication between agents",
      "To define workflow steps and state transitions with clear control flow between tasks",
      "To encrypt sensitive data during processing",
      "To reduce memory usage during agent execution"
    ],
    correctAnswer: 1,
    explanation: "StateGraph and node definitions create structured workflows where each node represents a task or step, with clear state transitions and control flow between different operations."
  },
  {
    id: 'q7',
    question: "How does the HITL approach in agentic AI address concerns about autonomous decision-making?",
    options: [
      "By requiring human approval for every agent action",
      "Through complete human control of agent learning processes",
      "Through strategic human checkpoints that maintain oversight while preserving automation benefits",
      "By eliminating all autonomous capabilities"
    ],
    correctAnswer: 2,
    explanation: "HITL addresses autonomy concerns by implementing strategic human checkpoints at critical decision points, maintaining oversight while preserving the efficiency benefits of automation."
  },
  {
    id: 'q8',
    question: "What is the primary benefit of treating humans as tools within the agentic AI framework?",
    options: [
      "It standardizes human decision-making processes",
      "It eliminates the need for agent training and fine-tuning",
      "It enables selective engagement of human expertise while maintaining automated workflow continuity",
      "It reduces the cost of human labor in AI systems"
    ],
    correctAnswer: 2,
    explanation: "Treating humans as tools enables agents to selectively engage human expertise when needed while maintaining automated workflow continuity, optimizing both efficiency and quality."
  },
  {
    id: 'q9',
    question: "How does LangGraph's memory and checkpointing system support HITL implementations?",
    options: [
      "By creating redundant copies of all agent decisions",
      "Through automatic rollback mechanisms for failed operations",
      "Through state persistence that enables resumption after human intervention",
      "By storing all conversation history in encrypted databases"
    ],
    correctAnswer: 2,
    explanation: "LangGraph's memory and checkpointing system enables state persistence, allowing workflows to resume exactly where they left off after human intervention or approval."
  },
  {
    id: 'q10',
    question: "What role do tools play in the architecture of HITL agentic applications?",
    options: [
      "Agents access various tools including human experts to solve complex problems in sequence",
      "Tools eliminate the need for agent planning and reasoning",
      "Tools are only used for data storage and retrieval operations",
      "Tools replace the need for Large Language Models in agent systems"
    ],
    correctAnswer: 0,
    explanation: "Tools, including human experts, provide agents with capabilities to solve complex problems by accessing appropriate resources in sequence based on the task requirements."
  },
  {
    id: 'q11',
    question: "How does the graph-based approach in LangGraph improve agent control compared to traditional approaches?",
    options: [
      "It standardizes agent responses across all use cases",
      "It reduces computational requirements for agent operations",
      "It provides structured control flow with defined decision points and conditional routing",
      "It eliminates the need for agent training data"
    ],
    correctAnswer: 2,
    explanation: "The graph-based approach provides structured control flow with clearly defined decision points, conditional routing, and explicit state management, improving agent predictability and control."
  },
  {
    id: 'q12',
    question: "What is the significance of the 'interrupt_before' parameter in LangGraph workflows?",
    options: [
      "It optimizes computational resource allocation",
      "It creates backup checkpoints for error recovery",
      "It automatically terminates workflows that exceed time limits",
      "It designates specific nodes where human approval is required before execution"
    ],
    correctAnswer: 3,
    explanation: "The 'interrupt_before' parameter designates specific nodes in the workflow where execution must pause and wait for human approval before proceeding to that step."
  },
  {
    id: 'q13',
    question: "How does LangGraph Cloud support the deployment of HITL agentic applications?",
    options: [
      "Through automatic conversion of all workflows to fully autonomous systems",
      "By eliminating the need for human intervention in deployed systems",
      "Through deployment services with Studio tools for prototyping, debugging, and scaling HITL applications",
      "By providing only batch processing capabilities for agent workflows"
    ],
    correctAnswer: 2,
    explanation: "LangGraph Cloud provides deployment and scaling services with Studio tools that support prototyping, debugging, and managing HITL applications in production environments."
  },
  {
    id: 'q14',
    question: "What architectural advantage does the return to graph-based conversation design provide?",
    options: [
      "It standardizes conversation patterns across all domains",
      "It reduces the memory requirements for conversation storage",
      "It enables visual representation and flow-based control that balances autonomy with structured guidance",
      "It eliminates the need for natural language processing"
    ],
    correctAnswer: 2,
    explanation: "Graph-based design provides visual representation and flow-based control, allowing developers to balance agent autonomy with structured guidance and clear decision pathways."
  },
  {
    id: 'q15',
    question: "How do conditional edges in LangGraph support dynamic HITL decision-making?",
    options: [
      "By creating random decision paths to increase system unpredictability",
      "Through elimination of all automated decision-making capabilities",
      "By automatically routing all decisions through human reviewers",
      "Through dynamic routing based on conditions that determine when human intervention is needed"
    ],
    correctAnswer: 3,
    explanation: "Conditional edges enable dynamic routing based on specific conditions, allowing the system to intelligently determine when human intervention is needed versus when automated processing can continue."
  }
];