import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the fundamental concept behind Agentic AI systems?',
    options: [
      'An AI system that requires constant human supervision and intervention',
      'A single monolithic AI model that handles all tasks sequentially',
      'Modular, task-specific agents working collaboratively to create scalable solutions',
      'A system designed exclusively for processing structured database queries'
    ],
    correctAnswer: 2,
    explanation: 'Agentic AI is characterized by systems composed of modular, task-specific agents that work collaboratively. This modular approach creates scalable and adaptable AI solutions where each agent focuses on specific tasks, and the system coordinates their activities to achieve complex goals. This is fundamentally different from monolithic systems where a single model tries to handle everything, as modularity enables better maintainability, scalability, and the ability to update individual components without affecting the entire system.'
  },
  {
    id: 'q2',
    question: 'What is the primary role of a Global Agent in an Agentic AI system?',
    options: [
      'To generate embeddings for vector databases and manage storage',
      'To execute all individual tasks independently without any coordination',
      'To store and archive all system data in multiple database formats',
      'To orchestrate workflows, coordinate agents, and adapt to system state'
    ],
    correctAnswer: 3,
    explanation: 'The Global Agent serves as the central orchestrator in Agentic AI systems, managing the sequence of task execution, coordinating between different agents or tools, and adapting dynamically to the system\'s state. It ensures smooth workflow execution by monitoring progress, handling errors, and determining next steps. The Global Agent doesn\'t execute individual tasks itself but rather coordinates how and when specialized agents or tools are invoked, making it the conductor of the entire system.'
  },
  {
    id: 'q3',
    question: 'How does the orchestration approach differ between static (Architecture 1) and dynamic (Architecture 2) systems?',
    options: [
      'Dynamic systems adaptively select tools using reasoning and context',
      'Dynamic systems cannot process any form of structured data',
      'Static systems always require more computational memory than dynamic ones',
      'Static systems execute faster due to their simplified architecture'
    ],
    correctAnswer: 0,
    explanation: 'The key difference lies in how tasks are coordinated. Static systems (Architecture 1) explicitly orchestrate predefined workflows by sequentially invoking agents in a hardcoded manner—the sequence is predetermined and follows a linear fashion. Dynamic systems (Architecture 2) leverage reasoning-driven execution where tools are invoked adaptively based on inputs, observations, and context. This fundamental difference affects flexibility: static systems are predictable but inflexible, while dynamic systems can adapt to varied scenarios but with added complexity.'
  },
  {
    id: 'q4',
    question: 'What is the key distinction between agents and tools in Agentic AI systems?',
    options: [
      'Tools require significantly more computational resources than agents',
      'Agents can only process text data while tools handle images',
      'Tools are functional utilities for tasks; agents make decisions',
      'Agents always execute slower than their tool counterparts'
    ],
    correctAnswer: 2,
    explanation: 'Agents are independent entities capable of decision-making and reasoning about what actions to take next, often maintaining state and coordinating complex workflows. Tools, on the other hand, are functional utilities that perform specific, well-defined tasks when invoked—they are more like specialized functions that agents call upon. The distinction is important for system design: agents provide the intelligence layer that decides what to do, while tools provide the execution layer that does the actual work. This separation enables modularity and reusability.'
  },
  {
    id: 'q5',
    question: 'What is the purpose of the ZERO_SHOT_REACT_DESCRIPTION framework in dynamic agentic systems?',
    options: [
      'To compress and optimize data for more efficient storage',
      'To eliminate the requirement for any training data whatsoever',
      'To reduce overall memory consumption during system execution',
      'To enable reasoning-driven tool selection with dynamic decision-making'
    ],
    correctAnswer: 3,
    explanation: 'ZERO_SHOT_REACT_DESCRIPTION is a reasoning framework that enables systems to dynamically decide which tool to invoke based on input context and observations. It follows the pattern of Thought (reasoning about the situation), Action (selecting a tool), Action Input (providing parameters), Observation (seeing results), and Final Answer. This framework allows systems to adapt flexibly to diverse scenarios without requiring retraining or predefined workflows, making it powerful for handling varied and unpredictable inputs.'
  },
  {
    id: 'q6',
    question: 'Why is state management critical in Agentic AI systems?',
    options: [
      'It tracks progress and maintains context for consistency and recovery',
      'It eliminates the need for all database infrastructure completely',
      'It reduces the physical size of language models in deployment',
      'It guarantees the system executes at maximum possible speed'
    ],
    correctAnswer: 0,
    explanation: 'State management is essential because agents and tools need to track progress, store intermediate results, and maintain workflow context. Without proper state management, the system would lose track of what has been accomplished, what failed, and what needs to be done next. This is particularly crucial for error recovery—if a task fails, persistent state allows the system to retry from the failure point rather than starting over. State also enables coordination between different agents, ensuring they work with consistent information.'
  },
  {
    id: 'q7',
    question: 'What is the primary advantage of using a dedicated memory class (like StatefulMemory) in dynamic systems?',
    options: [
      'It increases the raw processing speed by a factor of ten',
      'It automatically detects and fixes all system errors without intervention',
      'It eliminates the need for vector databases in the architecture',
      'It maintains persistent state centrally across retries and workflows'
    ],
    correctAnswer: 3,
    explanation: 'A dedicated memory class provides a centralized, persistent way to store, update, and retrieve state variables throughout workflow execution. This is particularly valuable because it ensures state consistency when tools are invoked multiple times, when retries occur after failures, or when the workflow spans multiple steps. Without persistent memory, each tool invocation would start fresh without context from previous steps, making complex workflows impossible. The memory class acts as the system\'s "working memory," maintaining continuity across all operations.'
  },
  {
    id: 'q8',
    question: 'What problem does hybrid architecture (Architecture 3) solve that neither pure static nor pure dynamic approaches address fully?',
    options: [
      'It reduces the overall electricity consumption of the system',
      'It guarantees zero errors during all workflow executions',
      'It balances predictable workflows with adaptive tool selection flexibility',
      'It exclusively processes image data with specialized algorithms'
    ],
    correctAnswer: 2,
    explanation: 'The hybrid approach (Architecture 3) addresses the limitations of both extremes. Pure static systems (Architecture 1) are predictable and debuggable but lack flexibility for handling unexpected scenarios. Pure dynamic systems (Architecture 2) are flexible but can be complex to debug and may introduce unnecessary overhead for simple, predictable tasks. The hybrid model uses explicit agents for structured workflows where predictability is valuable, while leveraging dynamic tools for scenarios requiring adaptability. This provides scalability, transparency, and flexibility in a single system.'
  },
  {
    id: 'q9',
    question: 'In the context of planning mechanisms, what is the difference between structured and adaptive planning?',
    options: [
      'Adaptive planning exclusively works with small-scale datasets only',
      'Structured planning always produces superior results in all cases',
      'Structured planning requires significantly more computational power',
      'Structured planning is predefined; adaptive planning uses reasoning'
    ],
    correctAnswer: 3,
    explanation: 'Structured planning involves predefined workflows where the sequence of actions is hardcoded and known in advance—each step follows a predetermined path. Adaptive planning makes decisions dynamically, selecting actions based on current state, reasoning, and context. Structured planning offers predictability and is easier to debug but lacks flexibility. Adaptive planning can handle varied scenarios and unexpected inputs but adds complexity. The choice between them (or combining them in hybrid systems) depends on whether tasks follow predictable patterns or require dynamic adaptation.'
  },
  {
    id: 'q10',
    question: 'What role do vector databases play in Agentic AI systems compared to structured and unstructured databases?',
    options: [
      'Vector databases are exclusively designed for image processing tasks',
      'Vector databases completely replace both structured and unstructured types',
      'Vector databases only handle numerical data without semantic meaning',
      'Vector databases enable semantic retrieval through embedding similarity'
    ],
    correctAnswer: 3,
    explanation: 'Vector databases serve a distinct but complementary role by storing vectorized representations (embeddings) of data, enabling semantic searches and similarity matching. While structured databases provide precise, organized information and unstructured databases store raw content, vector databases excel at finding semantically similar items—like "find reviews with similar sentiment" or "retrieve documents about similar topics." They work as external memory for context retrieval, enhancing the system\'s ability to find relevant information based on meaning rather than just exact matches. All three database types work together in comprehensive systems.'
  },
  {
    id: 'q11',
    question: 'What is the key benefit of converting class-based agents into LangChain tools?',
    options: [
      'It completely eliminates the need for large language models',
      'It reduces the total amount of code that must be written',
      'It makes the entire system completely error-free by design',
      'It enables dynamic tool selection replacing hardcoded workflows'
    ],
    correctAnswer: 3,
    explanation: 'Converting class-based agents to LangChain tools transforms rigid, sequential workflows into flexible, reasoning-driven systems. Class-based agents follow explicit sequences defined in code, requiring manual orchestration and state updates. LangChain tools, when combined with reasoning agents like ZERO_SHOT_REACT_DESCRIPTION, enable dynamic tool selection based on context and observations. This means the system can adapt to varied inputs and scenarios without manual workflow updates. The conversion essentially moves from "follow these exact steps" to "reason about what to do based on the situation."'
  },
  {
    id: 'q12',
    question: 'Why might error handling be more robust in dynamic systems with memory compared to static systems?',
    options: [
      'Dynamic systems are inherently designed to never encounter errors',
      'Static systems are fundamentally incapable of handling any errors',
      'Persistent memory enables retries without explicit error logic per agent',
      'Dynamic systems always process data faster reducing error likelihood'
    ],
    correctAnswer: 2,
    explanation: 'Dynamic systems with persistent memory have built-in advantages for error handling. When a tool fails, the persistent memory maintains the state of what was accomplished before the failure, enabling seamless retries without losing context. The reasoning framework can also adapt to errors by trying alternative approaches. In contrast, static systems require explicit error-handling logic coded for each agent and manually managing state recovery. The persistent memory in dynamic systems essentially provides automatic "checkpointing," making the system more resilient to failures while requiring less manual error-handling code.'
  },
  {
    id: 'q13',
    question: 'How do structured, unstructured, and vector databases work together in a comprehensive Agentic AI system?',
    options: [
      'Each database operates completely independently without interaction',
      'Only one database type should be used at any given time',
      'Vector databases replace the need for both other database types',
      'They provide complementary functions: reference, content, and semantic search'
    ],
    correctAnswer: 3,
    explanation: 'The three database types form an integrated ecosystem. Structured databases (SQL) provide organized, queryable reference data like customer records. Unstructured databases store rich, free-form content like reviews that supply raw input for LLM processing and entity extraction. Vector databases store embeddings that enable semantic searches and similarity matching. Together, they support different aspects of workflow: precise queries (structured), content analysis (unstructured), and contextual retrieval (vector). For example, a system might query structured data for a customer ID, retrieve their unstructured reviews, extract entities, and use vector search to find similar patterns—all in a single workflow.'
  },
  {
    id: 'q14',
    question: 'What is the main tradeoff between transparency and flexibility when choosing between static and dynamic architectures?',
    options: [
      'Dynamic architectures consistently provide better transparency',
      'Static systems sacrifice debuggability for increased flexibility',
      'Static systems are transparent but inflexible; dynamic are flexible but complex',
      'There is no meaningful tradeoff—one approach is objectively superior'
    ],
    correctAnswer: 2,
    explanation: 'This is a fundamental design tradeoff in Agentic AI. Static systems with explicit agents and predefined workflows are transparent—you can easily trace which agent runs when and why, making debugging straightforward. However, this transparency comes at the cost of flexibility; adapting to new scenarios requires code changes. Dynamic systems adaptively select tools based on reasoning, handling varied inputs elegantly. But this abstracted logic makes it harder to predict exact execution paths or debug when things go wrong. Understanding this tradeoff helps architects choose the right approach (or hybrid model) based on whether predictability or adaptability is more critical for their use case.'
  },
  {
    id: 'q15',
    question: 'In the context of actions and planning, what is the relationship between actions and tools?',
    options: [
      'Actions and tools are functionally identical concepts in practice',
      'Tools are consistently larger in scope than individual actions',
      'Actions represent decisions realized through tool invocation',
      'The presence of actions eliminates the need for any tools'
    ],
    correctAnswer: 2,
    explanation: 'Actions represent the atomic units of agent behavior—the specific operations an agent decides to perform. Tools are the mechanisms through which many actions are executed. For example, an agent might decide (through reasoning) that the action needed is "create an NER chain." This action is then realized by invoking the ChainCreation tool with specific inputs. Actions bridge the gap between high-level decision-making (what should be done) and low-level execution (how it\'s actually done). This separation allows agents to focus on reasoning about appropriate actions while tools focus on efficient implementation of those actions.'
  }
];

