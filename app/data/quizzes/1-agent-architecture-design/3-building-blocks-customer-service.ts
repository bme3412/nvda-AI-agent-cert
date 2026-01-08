import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What are the three main functional components of the NVIDIA AI Blueprint for AI virtual assistants architecture?',
    options: [
      'User Interface, Language Processing, and Database Management',
      'Data ingestion and retrieval pipeline, AI agent, and Operations pipeline',
      'Authentication Layer, Processing Engine, and Analytics Dashboard',
      'Input Validation, Response Generation, and Feedback Collection'
    ],
    correctAnswer: 1,
    explanation: 'The document clearly outlines three functional components: "1. Data ingestion and retrieval pipeline" where administrators load structured and unstructured data, "2. AI agent" which handles user interactions through LangGraph, and "3. Operations pipeline" which provides insights to customer service operators through chat history, analytics, and feedback.'
  },
  {
    id: 'q2',
    question: 'Which NVIDIA NIM microservice is specifically responsible for enhancing retrieval performance with fine-tuned reranking to find the most relevant passages?',
    options: [
      'NVIDIA NIM for LLM',
      'NeMo Retriever Embedding NIM',
      'NeMo Retriever Reranking NIM',
      'Llama 3.1 70B Instruct NIM'
    ],
    correctAnswer: 2,
    explanation: 'The document states that "NeMo Retriever Reranking NIM: Enhances the retrieval performance further with a fine-tuned reranker, finding the most relevant passages to provide as context when querying an LLM." This microservice specifically handles the reranking functionality to improve retrieval accuracy.'
  },
  {
    id: 'q3',
    question: 'How does the AI agent handle multi-turn conversations and maintain context throughout customer interactions?',
    options: [
      'It stores all conversation data in external cloud databases for later reference',
      'It uses short-term and long-term memory functions, embedding conversation queries and responses for retrieval as context',
      'It requires customers to provide their full interaction history at the start of each session',
      'It maintains context only within a single session and resets between conversations'
    ],
    correctAnswer: 1,
    explanation: 'The document explains that "The AI agent also uses short-term and long-term memory functions to enable multi-turn conversation history. The active conversation queries and responses are embedded so they can be retrieved later in the conversation as additional context. This allows more human-like interactions and eliminates the need for customers to repeat information they\'ve already shared with the agent."'
  },
  {
    id: 'q4',
    question: 'What framework is used to implement the AI agent for handling complex customer queries and recursive problem-solving?',
    options: [
      'TensorFlow Agents',
      'LangChain Framework',
      'LangGraph agentic LLM programming framework',
      'PyTorch Lightning'
    ],
    correctAnswer: 2,
    explanation: 'The document specifically states that "An AI agent, implemented in the LangGraph agentic LLM programming framework, plans how to handle complex customer queries and solves recursively." LangGraph is identified as the framework used for the agentic AI implementation.'
  },
  {
    id: 'q5',
    question: 'What types of analytics can the operations pipeline generate to provide insights to customer service administrators?',
    options: [
      'Social media sentiment and competitor analysis metrics',
      'Average call time, time to resolution, and customer satisfaction',
      'Server performance metrics and system uptime statistics',
      'Marketing conversion rates and sales pipeline data'
    ],
    correctAnswer: 1,
    explanation: 'The document states that "The analytics microservice, which leverages the Llama 3.1 70B Instruct NIM, can be used to generate analytics such as average call time, time to resolution, and customer satisfaction. The analytics are also leveraged as user feedback to retrain the LLM models to improve accuracy."'
  },
  {
    id: 'q6',
    question: 'According to the document, what happens at the end of each customer conversation to improve future interactions?',
    options: [
      'The system automatically generates a customer satisfaction survey',
      'All conversation data is permanently deleted for privacy compliance',
      'The AI agent summarizes the discussion with sentiment determination and stores conversation history in the structured database',
      'The conversation is forwarded to human agents for quality review'
    ],
    correctAnswer: 2,
    explanation: 'The document explains that "at the end of the conversation, the AI agent summarizes the discussion along with a sentiment determination and stores the conversation history in the structured database. Subsequent interactions from the same user can be retrieved as additional context in future conversations." This process enables improved future interactions and provides valuable insights.'
  }
];

