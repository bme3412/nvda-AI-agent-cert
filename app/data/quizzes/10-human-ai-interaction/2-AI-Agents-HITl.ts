import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What is the key difference between traditional chatbot handovers and agentic AI with Human-in-the-Loop (HITL)?",
    options: [
      "Traditional systems require more computational resources",
      "Agentic AI maintains context and can continue automation after human intervention, rather than full handover",
      "Traditional systems provide better customer satisfaction scores",
      "Agentic AI eliminates the need for human agents entirely"
    ],
    correctAnswer: 1,
    explanation: "Unlike traditional systems where handover means full transfer to humans, agentic AI with HITL maintains context and can continue automation after selective human intervention."
  },
  {
    id: 'q2',
    question: "In LangChain's agentic framework, how are humans integrated as tools for AI agents?",
    options: [
      "Humans replace all automated decision-making processes",
      "Human agents are contacted selectively when the AI agent needs specific expertise or approval",
      "Humans only monitor system performance metrics",
      "Human involvement is limited to initial system configuration"
    ],
    correctAnswer: 1,
    explanation: "In LangChain's framework, humans function as specialized tools that agents can access when they need specific expertise, approval, or guidance for complex decisions."
  },
  {
    id: 'q3',
    question: "What is LangGraph's primary approach to implementing Human-in-the-Loop functionality?",
    options: [
      "Real-time human monitoring of all AI decisions",
      "Graph-based orchestration with interrupt nodes for human intervention at critical checkpoints",
      "Complete human control over agent decision-making",
      "Automated escalation based on conversation length"
    ],
    correctAnswer: 1,
    explanation: "LangGraph uses a graph-based approach where specific nodes can be designated as interrupt points, allowing human intervention at critical checkpoints before execution."
  },
  {
    id: 'q4',
    question: "How does LangGraph's interrupt mechanism work in agent workflows?",
    options: [
      "It stops all agent operations until human review is complete",
      "It pauses execution at designated nodes and waits for human approval before proceeding",
      "It creates backup copies of agent states for rollback",
      "It logs all agent decisions for post-hoc human review"
    ],
    correctAnswer: 1,
    explanation: "LangGraph's interrupt mechanism pauses workflow execution at specific nodes (interrupt_before parameters) and waits for human approval before allowing the agent to proceed."
  },
  {
    id: 'q5',
    question: "What advantage does the graph representation provide for agentic AI transparency?",
    options: [
      "It reduces computational complexity of agent operations",
      "It allows inspection of agent behavior and provides visual clarity of decision flows",
      "It eliminates the need for agent training data",
      "It standardizes agent responses across different domains"
    ],
    correctAnswer: 1,
    explanation: "Graph representation makes agent behavior transparent by providing visual clarity of decision flows, making it easier to inspect, debug, and understand agent operations."
  },
  {
    id: 'q6',
    question: "In LangGraph implementations, what is the purpose of StateGraph and node definitions?",
    options: [
      "To reduce memory usage during agent execution",
      "To define workflow steps and state transitions with clear control flow between tasks",
      "To encrypt sensitive data during processing",
      "To optimize network communication between agents"
    ],
    correctAnswer: 1,
    explanation: "StateGraph and node definitions create structured workflows where each node represents a task or step, with clear state transitions and control flow between different operations."
  },
  {
    id: 'q7',
    question: "How does the HITL approach in agentic AI address concerns about autonomous decision-making?",
    options: [
      "By eliminating all autonomous capabilities",
      "Through strategic human checkpoints that maintain oversight while preserving automation benefits",
      "By requiring human approval for every agent action",
      "Through complete human control of agent learning processes"
    ],
    correctAnswer: 1,
    explanation: "HITL addresses autonomy concerns by implementing strategic human checkpoints at critical decision points, maintaining oversight while preserving the efficiency benefits of automation."
  },
  {
    id: 'q8',
    question: "What is the primary benefit of treating humans as tools within the agentic AI framework?",
    options: [
      "It reduces the cost of human labor in AI systems",
      "It enables selective engagement of human expertise while maintaining automated workflow continuity",
      "It eliminates the need for agent training and fine-tuning",
      "It standardizes human decision-making processes"
    ],
    correctAnswer: 1,
    explanation: "Treating humans as tools enables agents to selectively engage human expertise when needed while maintaining automated workflow continuity, optimizing both efficiency and quality."
  },
  {
    id: 'q9',
    question: "How does LangGraph's memory and checkpointing system support HITL implementations?",
    options: [
      "By storing all conversation history in encrypted databases",
      "Through state persistence that enables resumption after human intervention",
      "By creating redundant copies of all agent decisions",
      "Through automatic rollback mechanisms for failed operations"
    ],
    correctAnswer: 1,
    explanation: "LangGraph's memory and checkpointing system enables state persistence, allowing workflows to resume exactly where they left off after human intervention or approval."
  },
  {
    id: 'q10',
    question: "What role do tools play in the architecture of HITL agentic applications?",
    options: [
      "Tools replace the need for Large Language Models in agent systems",
      "Agents access various tools including human experts to solve complex problems in sequence",
      "Tools are only used for data storage and retrieval operations",
      "Tools eliminate the need for agent planning and reasoning"
    ],
    correctAnswer: 1,
    explanation: "Tools, including human experts, provide agents with capabilities to solve complex problems by accessing appropriate resources in sequence based on the task requirements."
  },
  {
    id: 'q11',
    question: "How does the graph-based approach in LangGraph improve agent control compared to traditional approaches?",
    options: [
      "It eliminates the need for agent training data",
      "It provides structured control flow with defined decision points and conditional routing",
      "It reduces computational requirements for agent operations",
      "It standardizes agent responses across all use cases"
    ],
    correctAnswer: 1,
    explanation: "The graph-based approach provides structured control flow with clearly defined decision points, conditional routing, and explicit state management, improving agent predictability and control."
  },
  {
    id: 'q12',
    question: "What is the significance of the 'interrupt_before' parameter in LangGraph workflows?",
    options: [
      "It automatically terminates workflows that exceed time limits",
      "It designates specific nodes where human approval is required before execution",
      "It creates backup checkpoints for error recovery",
      "It optimizes computational resource allocation"
    ],
    correctAnswer: 1,
    explanation: "The 'interrupt_before' parameter designates specific nodes in the workflow where execution must pause and wait for human approval before proceeding to that step."
  },
  {
    id: 'q13',
    question: "How does LangGraph Cloud support the deployment of HITL agentic applications?",
    options: [
      "By providing only batch processing capabilities for agent workflows",
      "Through deployment services with Studio tools for prototyping, debugging, and scaling HITL applications",
      "By eliminating the need for human intervention in deployed systems",
      "Through automatic conversion of all workflows to fully autonomous systems"
    ],
    correctAnswer: 1,
    explanation: "LangGraph Cloud provides deployment and scaling services with Studio tools that support prototyping, debugging, and managing HITL applications in production environments."
  },
  {
    id: 'q14',
    question: "What architectural advantage does the return to graph-based conversation design provide?",
    options: [
      "It reduces the memory requirements for conversation storage",
      "It enables visual representation and flow-based control that balances autonomy with structured guidance",
      "It eliminates the need for natural language processing",
      "It standardizes conversation patterns across all domains"
    ],
    correctAnswer: 1,
    explanation: "Graph-based design provides visual representation and flow-based control, allowing developers to balance agent autonomy with structured guidance and clear decision pathways."
  },
  {
    id: 'q15',
    question: "How do conditional edges in LangGraph support dynamic HITL decision-making?",
    options: [
      "By automatically routing all decisions through human reviewers",
      "Through dynamic routing based on conditions that determine when human intervention is needed",
      "By creating random decision paths to increase system unpredictability",
      "Through elimination of all automated decision-making capabilities"
    ],
    correctAnswer: 1,
    explanation: "Conditional edges enable dynamic routing based on specific conditions, allowing the system to intelligently determine when human intervention is needed versus when automated processing can continue."
  }
];