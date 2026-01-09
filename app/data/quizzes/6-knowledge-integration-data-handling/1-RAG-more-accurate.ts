import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What are the two fundamental approaches for enhancing Large Language Model capabilities discussed in this document?',
    options: [
      'Retrieval Augmented Generation and Fine-Tuning for adapting models to specific tasks and domains',
      'Supervised Learning and Unsupervised Learning for comprehensive model training approaches',
      'Pre-training and Post-training for establishing foundational and specialized model capabilities',
      'Parameter Scaling and Data Scaling for optimizing model performance across different dimensions'
    ],
    correctAnswer: 0,
    explanation: 'Retrieval Augmented Generation and Fine-Tuning represent two fundamental approaches for enhancing Large Language Model capabilities and adapting them to specific tasks, domains, and organizational requirements.'
  },
  {
    id: 'q2',
    question: 'How does Retrieval Augmented Generation extend language models?',
    options: [
      'By retraining the entire model with new domain-specific data sets',
      'By providing access to external knowledge sources during the inference phase while keeping the base model unchanged',
      'By increasing the number of parameters in the model architecture',
      'By combining multiple smaller models into a single larger ensemble system'
    ],
    correctAnswer: 1,
    explanation: 'Retrieval Augmented Generation extends language models during the inference phase by providing access to external knowledge sources, enabling retrieval of information not stored in model parameters while the base model remains unchanged.'
  },
  {
    id: 'q3',
    question: 'What is the primary mechanism by which Fine-Tuning adapts language models?',
    options: [
      'Further training existing base models with domain-specific data sets to adjust model weights',
      'Accessing external databases during inference to supplement model responses',
      'Combining outputs from multiple pre-trained models using ensemble methods',
      'Implementing rule-based systems that override model predictions when necessary'
    ],
    correctAnswer: 0,
    explanation: 'Fine-Tuning adapts language models during the training phase by further training existing base models with domain-specific data sets, adjusting model weights to internalize specialized knowledge while preserving general language understanding.'
  },
  {
    id: 'q4',
    question: 'What key advantage does RAG provide for resource-constrained environments?',
    options: [
      'Provides resource efficiency with minimal upfront computational requirements as the base model remains unchanged',
      'Requires extensive GPU infrastructure for optimal performance',
      'Needs complete model retraining for any knowledge updates',
      'Demands specialized hardware for vector database operations'
    ],
    correctAnswer: 0,
    explanation: 'RAG provides resource efficiency by requiring minimal upfront computational requirements, as the base model remains unchanged and no extensive training processes are necessary, making it suitable for resource-constrained environments.'
  },
  {
    id: 'q5',
    question: 'Which embedding models are commonly mentioned for query vectorization in RAG systems?',
    options: [
      'BERT-base and RoBERTa-large for comprehensive natural language understanding',
      'text-embedding-ada-002 from OpenAI and all-MiniLM-L6-v2 from Hugging Face',
      'Word2Vec and GloVe for traditional word embedding approaches',
      'GPT-3.5 and Claude-2 for conversational embedding generation'
    ],
    correctAnswer: 1,
    explanation: 'Common implementations leverage models such as text-embedding-ada-002 from OpenAI or all-MiniLM-L6-v2 from Hugging Face to transform natural language queries into dense numerical vectors for similarity search.'
  },
  {
    id: 'q6',
    question: 'What vector database systems are mentioned as implementations for similarity search?',
    options: [
      'PostgreSQL with pgvector extension and MySQL with vector search capabilities',
      'Redis with vector similarity and Elasticsearch with dense vector search',
      'FAISS from Meta, ChromaDB for small to medium tasks, and specialized vector databases',
      'MongoDB Atlas Search and Amazon OpenSearch Service for semantic retrieval'
    ],
    correctAnswer: 2,
    explanation: 'Implementations commonly utilize systems such as FAISS from Meta for high-performance similarity search in extensive data sets, ChromaDB for small to medium-sized retrieval tasks, or specialized vector databases optimized for semantic search operations.'
  },
  {
    id: 'q7',
    question: 'What frameworks are mentioned for building RAG pipelines?',
    options: [
      'LangChain for comprehensive framework support and Hugging Face Transformers Library with specialized RAG classes',
      'TensorFlow and PyTorch for deep learning model development',
      'Apache Spark and Hadoop for distributed data processing',
      'Django and Flask for web application development'
    ],
    correctAnswer: 0,
    explanation: 'LangChain provides comprehensive framework support for building RAG pipelines, while alternative implementations leverage the Hugging Face Transformers Library with specialized RAG classes including RagTokenizer, RagRetriever, and RagSequenceForGeneration.'
  },
  {
    id: 'q8',
    question: 'What training data formats are typically used for fine-tuning conversational models?',
    options: [
      'JSONL for OpenAI models with role and content fields, CSV or JSON for structured data, and framework-specific formats',
      'XML with conversation markup and YAML for configuration-based training data',
      'Plain text files with delimiter-separated conversations and binary encoded message streams',
      'SQL databases with relational conversation tables and NoSQL document stores'
    ],
    correctAnswer: 0,
    explanation: 'Conversational models typically employ standardized chat formats including JSONL for OpenAI models with messages containing role and content fields, CSV or JSON for structured data sets, and framework-specific formats such as PyTorch datasets.'
  },
  {
    id: 'q9',
    question: 'Which parameter-efficient fine-tuning method is specifically mentioned for reducing computational demands?',
    options: [
      'Gradient Checkpointing for memory optimization during training',
      'Low-Rank Adaptation (LoRA) that inserts trainable low-rank decomposition matrices into model layers',
      'Mixed Precision Training using half-precision floating point operations',
      'Data Parallelism for distributing training across multiple GPUs'
    ],
    correctAnswer: 1,
    explanation: 'Low-Rank Adaptation approaches insert trainable low-rank decomposition matrices into model layers, dramatically reducing the number of trainable parameters while achieving comparable adaptation effectiveness.'
  },
  {
    id: 'q10',
    question: 'In what scenarios does RAG excel according to the document?',
    options: [
      'Applications requiring consistent specialized expertise with stable knowledge over time',
      'Contexts requiring dynamic information access where knowledge bases undergo frequent updates',
      'Systems needing optimal inference performance with minimal latency requirements',
      'Offline deployments where external knowledge base access is impractical or prohibited'
    ],
    correctAnswer: 1,
    explanation: 'RAG implementations excel in contexts requiring dynamic information access where knowledge bases undergo frequent updates or expansion, enabling current information without model retraining.'
  },
  {
    id: 'q11',
    question: 'What types of applications are cited as benefiting from fine-tuning approaches?',
    options: [
      'FAQ chatbots with evolving knowledge bases and real-time news systems',
      'Multi-tenant systems serving diverse users with personalized information access',
      'Medical applications with clinical terminology and legal systems with jurisdiction-specific regulations',
      'Technical documentation systems requiring the latest specifications and API changes'
    ],
    correctAnswer: 2,
    explanation: 'Medical applications benefit from fine-tuned models that internalize clinical terminology, diagnostic patterns, and treatment protocols, while legal systems leverage fine-tuning to encode jurisdiction-specific regulations and legal precedents.'
  },
  {
    id: 'q12',
    question: 'What is Retrieval Augmented Fine-Tuning (RAFT) and when is it used?',
    options: [
      'A sequential process that applies RAG first, then fine-tuning to optimize model performance',
      'A competitive approach where RAG and fine-tuning systems compete to provide better responses',
      'A replacement technique that eliminates the need for both traditional RAG and fine-tuning methods',
      'A hybrid approach that combines fine-tuning for domain expertise with RAG for real-time information access'
    ],
    correctAnswer: 3,
    explanation: 'Retrieval Augmented Fine-Tuning combines both methodologies to leverage complementary strengths, first fine-tuning models on domain-specific data to establish specialized knowledge foundations, then using RAG augmentation for access to current information.'
  },
  {
    id: 'q13',
    question: 'What distance metrics are typically used for vector similarity computation in RAG systems?',
    options: [
      'Hamming distance and Jaccard similarity for categorical data comparison',
      'Cosine similarity and Euclidean distance to quantify vector relationships',
      'Manhattan distance and Chebyshev distance for high-dimensional space analysis',
      'Pearson correlation and Spearman correlation for statistical relationship measurement'
    ],
    correctAnswer: 1,
    explanation: 'The similarity computation typically employs distance metrics such as cosine similarity or Euclidean distance to quantify vector relationships, ranking retrieved candidates by relevance scores.'
  },
  {
    id: 'q14',
    question: 'What are the key factors mentioned in the decision framework for selecting between RAG and Fine-Tuning?',
    options: [
      'Model architecture complexity, programming language preferences, and team expertise levels',
      'Knowledge characteristics, resource availability, update frequency, performance requirements, and operational constraints',
      'Data privacy regulations, compliance requirements, and legal jurisdiction considerations',
      'User interface design, system integration capabilities, and deployment platform compatibility'
    ],
    correctAnswer: 1,
    explanation: 'Method selection requires systematic evaluation of knowledge characteristics, resource availability, update frequency, performance requirements, and operational constraints to determine the most appropriate approach.'
  },
  {
    id: 'q15',
    question: 'What advanced optimization technique for fine-tuning is mentioned to enable training on consumer hardware?',
    options: [
      'Distributed training across multiple consumer GPUs with gradient synchronization',
      'Quantized Low-Rank Adaptation (QLoRA) using 4-bit quantization to reduce memory footprint',
      'Cloud-based training services that eliminate local hardware requirements entirely',
      'Transfer learning from smaller pre-trained models to reduce computational complexity'
    ],
    correctAnswer: 1,
    explanation: 'Quantized Low-Rank Adaptation further optimizes efficiency by applying quantization to model weights, enabling fine-tuning on consumer hardware with reduced memory footprint through techniques such as 4-bit quantization.'
  }
];