import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the fundamental difference between storing knowledge as text versus storing it as a knowledge graph?',
    options: [
      'Knowledge graphs require less storage space than equivalent text representations',
      'Knowledge graphs can only store structured data while text can handle any type of information',
      'Knowledge graphs preserve and make explicit the relationships between pieces of knowledge, treating relationships as first-class citizens rather than implicit or buried in prose',
      'Knowledge graphs are faster to search than text documents'
    ],
    correctAnswer: 2,
    explanation: 'The document explains that "A knowledge graph is fundamentally a way of representing information that preserves and makes explicit the relationships between pieces of knowledge... The key insight is that relationships are first-class citizens in knowledge graphs, not afterthoughts. In a traditional database or text document, relationships are implicit or buried in prose... In a knowledge graph, these become explicit edges."'
  },
  {
    id: 'q2',
    question: 'According to the document, what capability do knowledge graphs enable that is nearly impossible with pure text-based knowledge?',
    options: [
      'Multi-hop reasoning that systematically traverses chains of relationships to answer complex questions',
      'Faster text search and retrieval across large document collections',
      'Automatic translation between different natural languages',
      'Real-time synchronization between multiple databases'
    ],
    correctAnswer: 0,
    explanation: 'The document states: "When agents integrate with knowledge graphs, they gain multi-hop reasoning capabilities that are nearly impossible with pure text-based knowledge." It provides an example of analyzing semiconductor cost impacts by traversing: "semiconductor manufacturers -> [supply to] -> electronics companies -> [manufacture] -> consumer products -> [sell to] -> retailers, identifying every company in this chain that would face margin pressure."'
  },
  {
    id: 'q3',
    question: 'What is the purpose of graph schemas in knowledge graph design?',
    options: [
      'To compress the graph data and reduce storage requirements',
      'To automatically generate SQL queries from natural language',
      'To encrypt sensitive information within the knowledge graph',
      'To provide structure by defining what types of entities can exist and what relationships can connect them, enforcing consistency and guiding agent reasoning'
    ],
    correctAnswer: 3,
    explanation: 'The document explains: "Graph schemas provide structure to prevent your knowledge graph from becoming an incomprehensible mess. A schema defines what types of entities can exist (Person, Company, Product, Technology) and what types of relationships can connect them... This structure is crucial for agent reasoning because it lets the agent understand what kinds of questions make sense."'
  },
  {
    id: 'q4',
    question: 'How does graph-enhanced RAG differ from traditional text-based RAG?',
    options: [
      'Graph-enhanced RAG only works with structured data while traditional RAG handles unstructured text',
      'Graph-enhanced RAG retrieves relevant subgraphs (entities plus their relationships and connected entities) in addition to or instead of just text chunks based on semantic similarity',
      'Graph-enhanced RAG uses graph databases to store documents while traditional RAG uses relational databases',
      'Graph-enhanced RAG is faster but less accurate than traditional RAG approaches'
    ],
    correctAnswer: 1,
    explanation: 'The document states: "Standard RAG retrieves relevant text chunks based on semantic similarity to the query. Graph-enhanced RAG additionally retrieves relevant subgraphs—the entities mentioned in the query plus their immediate relationships and connected entities... This richer, more structured context dramatically improves the quality of the LLM\'s reasoning and responses."'
  },
  {
    id: 'q5',
    question: 'Why are temporal knowledge graphs important for agent applications?',
    options: [
      'They synchronize multiple knowledge graphs across different time zones',
      'They automatically delete outdated information to keep the graph current',
      'They process queries faster by timestamping each operation',
      'They store relationships with start and end timestamps, allowing agents to reason about how relationships change over time and understand historical context'
    ],
    correctAnswer: 3,
    explanation: 'The document explains: "Temporal knowledge graphs add a time dimension that\'s crucial for many agent applications. Relationships aren\'t static—they change over time... Temporal graphs store not just relationships but when those relationships were valid. Each edge has start and end timestamps. This allows agents to reason about change over time... Without temporal information, knowledge graphs can only represent current state, losing the historical context that\'s often essential for understanding trends and making predictions."'
  },
  {
    id: 'q6',
    question: 'What is the typical integration pattern for combining LLMs with knowledge graphs?',
    options: [
      'The LLM generates all knowledge which is then stored in the graph for future reference',
      'The agent analyzes questions to identify relevant entities and relationships, constructs and executes graph queries to retrieve pertinent subgraphs, then uses the LLM to reason over that retrieved graph structure',
      'The knowledge graph replaces the LLM entirely by encoding all reasoning rules',
      'The LLM and knowledge graph operate independently and their results are averaged'
    ],
    correctAnswer: 1,
    explanation: 'The document describes: "The integration pattern of LLMs plus knowledge graphs typically works like this: the user asks a question, the agent analyzes the question to identify what entities and relationships are relevant, constructs and executes graph queries to retrieve pertinent subgraphs, and then uses the LLM to reason over that retrieved graph structure to formulate an answer. This is fundamentally different from pure LLM approaches where all knowledge must be either in the model\'s parameters or in retrieved text passages."'
  }
];

