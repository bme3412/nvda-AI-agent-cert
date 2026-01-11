// Article-specific term definitions for Section 6: Knowledge Integration and Data Handling
// These definitions are specific to individual articles in section 6

import { TermDefinition } from '../termDefinitions';

export const SECTION6_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  '6-knowledge-integration-data-handling/1-RAG-more-accurate': {
    'Retrieval-Augmented Generation': {
      definition: 'RAG - Technique extending language models during inference by providing access to external knowledge sources, enabling retrieval of information not stored in model parameters. The base model remains unchanged while gaining capability to incorporate current and specific information through dynamic retrieval processes.',
      example: 'A customer service chatbot using RAG to retrieve current product information from a knowledge base, ensuring responses reflect the latest specifications and pricing without retraining the model.'
    },
    'RAG': {
      definition: 'Retrieval-Augmented Generation - Technique that extends language models during inference by providing access to external knowledge sources.',
      example: 'Using RAG to answer questions about company policies by retrieving relevant documents from a vector database and including them in the model context.'
    },
    'Fine-Tuning': {
      definition: 'Process adapting language models during training by further training existing base models with domain-specific data sets. The process adjusts model weights to internalize specialized knowledge, technical terminology, and specific content patterns while preserving general language understanding capabilities.',
      example: 'Fine-tuning a base language model on medical literature to create a specialized model that understands clinical terminology and can generate medical reports with appropriate language.'
    },
    'Vector Database': {
      definition: 'Specialized database storing data as high-dimensional vectors (embeddings), enabling semantic search and similarity matching for efficient information retrieval. Used in RAG systems to store and search document embeddings.',
      example: 'A vector database storing embeddings of all company documentation, allowing an AI system to quickly find semantically similar documents when answering employee questions.'
    },
    'Embedding': {
      definition: 'High-dimensional vector representation of text, images, or other data that captures semantic meaning, enabling similarity search and retrieval. Embeddings transform natural language into dense numerical vectors that preserve semantic relationships.',
      example: 'Converting the query "What are the refund policies?" into a 384-dimensional vector that can be compared against document embeddings to find relevant information.'
    },
    'Query Embedding': {
      definition: 'Process converting user requests into vector representations using specialized embedding models for semantic similarity computation. Enables systems to identify conceptually related information even when exact term matches do not exist.',
      example: 'Transforming a user question "How do I return a product?" into a vector using text-embedding-ada-002, then searching for similar vectors in the knowledge base.'
    },
    'Semantic Search': {
      definition: 'Search technique using meaning-based similarity rather than exact keyword matching, enabling identification of conceptually related information. Leverages vector embeddings to find documents with similar meaning even if they use different words.',
      example: 'A semantic search finding documents about "customer refunds" when a user queries "returning merchandise" because both concepts are semantically similar despite different wording.'
    },
    'Approximate Nearest Neighbors': {
      definition: 'ANN - Algorithms efficiently locating similar vectors within large collections, balancing accuracy against computational efficiency for similarity search. Used in vector databases to quickly find relevant documents without exhaustive comparison.',
      example: 'Using ANN algorithms to search through millions of document embeddings in milliseconds, finding the top 10 most relevant documents for a query.'
    },
    'ANN': {
      definition: 'Approximate Nearest Neighbors - Algorithms for efficiently locating similar vectors in large collections.',
      example: 'An ANN algorithm finding the 5 most similar document embeddings to a query vector from a database of 1 million documents in under 50ms.'
    },
    'FAISS': {
      definition: 'Meta\'s library for high-performance similarity search in extensive data sets, commonly used for vector database implementations. Provides efficient algorithms for approximate nearest neighbor search at scale.',
      example: 'Using FAISS to index and search through 10 million document embeddings, enabling fast retrieval of relevant information for RAG systems.'
    },
    'ChromaDB': {
      definition: 'Vector database optimized for small to medium-sized retrieval tasks, providing efficient semantic search capabilities. Offers easy-to-use APIs for storing and querying embeddings.',
      example: 'Using ChromaDB to store embeddings of company knowledge base documents, enabling quick semantic search for customer support queries.'
    },
    'Context Integration': {
      definition: 'Mechanism combining retrieved documents with original user queries in augmented prompts, providing language models with supporting information for accurate answers. Represents the critical mechanism through which external knowledge influences model outputs.',
      example: 'A RAG system retrieving relevant policy documents and including them in the prompt alongside the user question, enabling the model to generate accurate answers grounded in the retrieved information.'
    },
    'Augmented Prompt': {
      definition: 'Prompt construction that combines the original user query with relevant retrieved content, providing the language model with both the question and supporting information necessary for accurate answers.',
      example: 'An augmented prompt containing the user question "What is the refund policy?" plus retrieved text from the company refund policy document, giving the model context to answer accurately.'
    },
    'Source Attribution': {
      definition: 'Capability explicitly linking generated responses to source documents, enabling users to verify information origins and understand response foundations. Provides transparency in RAG systems.',
      example: 'A RAG system generating an answer about product specifications and citing "Product Manual v2.3, page 15" as the source, allowing users to verify the information.'
    },
    'Knowledge Base': {
      definition: 'Collection of documents, databases, or information repositories providing external knowledge sources for retrieval-augmented generation systems. Can include technical documentation, FAQs, policies, or any structured information.',
      example: 'A knowledge base containing all company technical documentation, customer service FAQs, and policy documents, used by a RAG system to answer employee and customer questions.'
    },
    'Parameter-Efficient Fine-Tuning': {
      definition: 'Methods reducing computational demands through selective weight updates, maintaining most base model parameters frozen while training small adapter modules. Enables fine-tuning with significantly reduced resource requirements.',
      example: 'Using parameter-efficient fine-tuning to adapt a 7B parameter model by training only 1% of the parameters, reducing training time and memory requirements by 90%.'
    },
    'Low-Rank Adaptation': {
      definition: 'LoRA - Approach inserting trainable low-rank decomposition matrices into model layers, dramatically reducing trainable parameters while achieving comparable adaptation effectiveness. Enables efficient fine-tuning on consumer hardware.',
      example: 'Using LoRA to fine-tune a language model by adding small trainable matrices to each layer, reducing trainable parameters from 7 billion to 4 million while maintaining performance.'
    },
    'LoRA': {
      definition: 'Low-Rank Adaptation - Parameter-efficient fine-tuning technique that inserts trainable low-rank matrices into model layers.',
      example: 'Applying LoRA to fine-tune a model for legal document analysis, training only 0.1% of parameters while achieving 95% of full fine-tuning performance.'
    },
    'Quantized LoRA': {
      definition: 'Further optimization applying quantization to model weights, enabling fine-tuning on consumer hardware with reduced memory footprint through techniques such as 4-bit quantization.',
      example: 'Using quantized LoRA with 4-bit quantization to fine-tune a 13B parameter model on a single consumer GPU with 24GB memory, which would normally require multiple high-end GPUs.'
    },
    'Retrieval-Augmented Fine-Tuning': {
      definition: 'RAFT - Hybrid approach combining fine-tuning for domain expertise with RAG for real-time information access. First fine-tunes models on domain-specific data, then uses RAG for current information.',
      example: 'A medical AI system fine-tuned on clinical terminology and medical knowledge, then augmented with RAG to retrieve the latest research papers and treatment guidelines for current information.'
    },
    'RAFT': {
      definition: 'Retrieval-Augmented Fine-Tuning - Hybrid approach combining fine-tuning and RAG methodologies.',
      example: 'Using RAFT to create a financial analysis system: fine-tuning for market analysis frameworks, then using RAG to access real-time market data and recent news.'
    },
    'Embedding Model': {
      definition: 'Specialized model that converts text, images, or other data into high-dimensional vector representations. Common examples include text-embedding-ada-002 from OpenAI or all-MiniLM-L6-v2 from Hugging Face.',
      example: 'Using text-embedding-ada-002 to convert customer service queries into embeddings, enabling semantic search across a knowledge base of support articles.'
    },
    'Cosine Similarity': {
      definition: 'Distance metric used to quantify vector relationships in semantic search, measuring the cosine of the angle between two vectors. Values range from -1 to 1, with higher values indicating greater similarity.',
      example: 'Calculating cosine similarity between a query embedding and document embeddings to rank documents by relevance, with scores above 0.8 indicating high relevance.'
    },
    'Euclidean Distance': {
      definition: 'Distance metric measuring straight-line distance between vectors in high-dimensional space, used as an alternative to cosine similarity for vector comparison.',
      example: 'Using Euclidean distance to find the closest document embeddings to a query vector, with smaller distances indicating greater similarity.'
    },
    'Hybrid Search': {
      definition: 'Search approach combining dense vector similarity with sparse keyword matching, providing both semantic understanding and exact term matching capabilities.',
      example: 'A hybrid search system using vector embeddings for semantic similarity while also matching exact product codes and model numbers for precise retrieval.'
    },
    'Reranking': {
      definition: 'Stage in retrieval pipelines that refines initial retrieval results, using more sophisticated models to reorder candidates by relevance. Improves final retrieval quality.',
      example: 'A RAG system using an initial vector search to retrieve 100 candidates, then reranking them with a cross-encoder model to select the top 5 most relevant documents.'
    },
    'Multi-Hop Reasoning': {
      definition: 'Reasoning process that chains multiple retrieval steps, where initial retrieved information informs subsequent queries to gather comprehensive context across multiple sources.',
      example: 'A RAG system first retrieving information about a product, then using that information to query for related customer reviews, combining both sources for a comprehensive answer.'
    },
    'LangChain': {
      definition: 'Comprehensive framework providing modular components for building RAG pipelines, facilitating the connection of language model calls with retrieval systems and enabling targeted information retrieval from external sources.',
      example: 'Using LangChain to build a RAG system that connects a vector database, embedding model, and language model into a cohesive pipeline for answering questions.'
    },
    'Hugging Face Transformers': {
      definition: 'Library providing specialized RAG classes including RagTokenizer, RagRetriever, and RagSequenceForGeneration for building retrieval-augmented generation systems.',
      example: 'Using Hugging Face Transformers RagRetriever to search a knowledge base and RagSequenceForGeneration to integrate retrieved documents into response generation.'
    },
    'RagTokenizer': {
      definition: 'Component in Hugging Face Transformers for processing input and retrieval results in RAG systems, handling tokenization of queries and retrieved documents.',
      example: 'Using RagTokenizer to prepare user queries and retrieved documents for processing by the RAG model, ensuring proper formatting and tokenization.'
    },
    'RagRetriever': {
      definition: 'Component in Hugging Face Transformers for semantic search and document retrieval from knowledge bases, handling the retrieval phase of RAG systems.',
      example: 'Using RagRetriever to search a vector database and retrieve the most relevant documents for a given query based on semantic similarity.'
    },
    'RagSequenceForGeneration': {
      definition: 'Component in Hugging Face Transformers for integrating retrieved documents into context and generating responses, handling the generation phase of RAG systems.',
      example: 'Using RagSequenceForGeneration to combine retrieved documents with user queries and generate accurate, grounded responses.'
    },
    'Training Data Preparation': {
      definition: 'Process of collecting and formatting high-quality training data for fine-tuning, ensuring accuracy, consistency, diversity, and representativeness of target domain characteristics.',
      example: 'Preparing a dataset of 10,000 medical question-answer pairs in JSONL format, ensuring they represent diverse medical scenarios and accurate clinical information.'
    },
    'Base Model Selection': {
      definition: 'Process of choosing an appropriate pre-trained language model as the starting point for fine-tuning, considering capabilities, computational requirements, licensing, and alignment with target tasks.',
      example: 'Selecting Llama 3 8B as the base model for fine-tuning a customer service chatbot, balancing performance requirements with available computational resources.'
    },
    'Supervised Learning': {
      definition: 'Training approach where model weights update through gradient descent on domain-specific training data with known correct outputs. Used in fine-tuning to adapt models to specific tasks.',
      example: 'Fine-tuning a model using supervised learning on a dataset of customer service conversations, where each input has a corresponding correct response.'
    },
    'Gradient Descent': {
      definition: 'Optimization algorithm used during training to update model weights by minimizing loss. In fine-tuning, adjusts weights to better match domain-specific patterns in training data.',
      example: 'Using gradient descent during fine-tuning to gradually adjust model parameters, reducing the difference between generated outputs and desired responses.'
    },
    'Learning Rate': {
      definition: 'Hyperparameter controlling the step size of weight updates during training. Too high causes instability, too low slows convergence. Critical for successful fine-tuning.',
      example: 'Setting a learning rate of 2e-5 for fine-tuning, which is small enough to preserve base model capabilities while allowing adaptation to new domain patterns.'
    },
    'Batch Size': {
      definition: 'Number of training examples processed together in a single forward and backward pass. Affects training stability, memory usage, and convergence speed.',
      example: 'Using a batch size of 8 for fine-tuning a large model, balancing memory constraints with training stability and efficiency.'
    },
    'Training Epochs': {
      definition: 'Number of complete passes through the training dataset during fine-tuning. Multiple epochs allow models to learn patterns, but too many can cause overfitting.',
      example: 'Training for 3 epochs during fine-tuning, allowing the model to see all training examples three times to learn domain-specific patterns.'
    },
    'Overfitting': {
      definition: 'Problem where models memorize training data patterns rather than learning generalizable features, reducing performance on new data. Prevented through validation and regularization.',
      example: 'A fine-tuned model that performs perfectly on training examples but fails on new, similar questions because it memorized specific patterns rather than learning general principles.'
    },
    'Validation': {
      definition: 'Process of assessing model performance on held-out data during training to identify optimal checkpoints and prevent overfitting. Helps determine when to stop training.',
      example: 'Evaluating fine-tuned model performance on a validation set after each epoch, stopping training when validation performance stops improving to prevent overfitting.'
    },
    'Inference Latency': {
      definition: 'Time required for a model to generate a response after receiving input. Fine-tuned models typically have lower latency than RAG systems due to eliminating retrieval overhead.',
      example: 'A fine-tuned model generating responses in 200ms, compared to a RAG system taking 800ms due to additional time for vector search and document retrieval.'
    },
    'Closed-Domain Application': {
      definition: 'Application where knowledge requirements are well-defined and relatively stable, making fine-tuning particularly effective. Examples include medical diagnosis, legal analysis, or technical support.',
      example: 'A closed-domain application for analyzing legal contracts, where the knowledge domain is well-defined and relatively stable, making fine-tuning an optimal approach.'
    },
    'Open-Domain Application': {
      definition: 'Application requiring access to broad, constantly changing knowledge, making RAG more suitable than fine-tuning. Examples include general question answering or news summarization.',
      example: 'An open-domain application answering questions about current events, where knowledge changes daily and RAG provides access to up-to-date information.'
    },
    'Multi-Tenant System': {
      definition: 'System serving diverse users or organizations, where RAG enables personalized information access through user-specific or tenant-specific knowledge bases while sharing common model infrastructure.',
      example: 'A SaaS platform using RAG to provide each customer with access to their own documentation and data, while using a shared language model for all tenants.'
    },
    'Air-Gapped Deployment': {
      definition: 'Deployment environment where external knowledge base access is impractical or prohibited, necessitating fine-tuning to incorporate required knowledge directly into model parameters.',
      example: 'A fine-tuned model deployed in a secure government facility where external API calls are blocked, requiring all knowledge to be encoded in the model itself.'
    },
    'Citation Mechanism': {
      definition: 'Feature in RAG systems that attributes specific claims to source documents, enabling users to verify information and understand response foundations.',
      example: 'A RAG system generating an answer and automatically citing "Company Policy Document v3.2, Section 4.1" for each factual claim, allowing users to verify sources.'
    },
    'Confidence Scoring': {
      definition: 'Mechanism in RAG systems that assesses the quality and reliability of retrieved information, helping determine response confidence based on retrieval quality.',
      example: 'A RAG system assigning a confidence score of 0.95 to an answer based on high similarity scores of retrieved documents, indicating high reliability.'
    },
    'Ground Truth': {
      definition: 'Known correct answers or expected behaviors used for evaluation, providing reference outputs enabling automated evaluation through comparison.',
      example: 'A test dataset with ground truth answers for evaluating RAG system performance, comparing generated responses against known correct answers.'
    },
    'Context Window': {
      definition: 'Limited buffer holding recent inputs and context during active interactions, requiring strategic management to prevent overflow. In RAG, determines how much retrieved content can be included.',
      example: 'A model with a 32K token context window that can include approximately 20 retrieved documents alongside the user query before reaching the limit.'
    },
    'Temporal Knowledge Constraints': {
      definition: 'Limitation where models trained at specific points in time lack knowledge of subsequent events. RAG addresses this by providing access to current information.',
      example: 'A model trained in 2023 not knowing about events in 2024, but RAG enabling it to access current information from knowledge bases updated in real-time.'
    },
    'Proprietary Information': {
      definition: 'Company-specific or confidential information that cannot be included in public training data. RAG enables access to such information without exposing it in model training.',
      example: 'A RAG system accessing internal company policies and procedures stored in a private knowledge base, enabling accurate responses about proprietary processes.'
    },
    'Domain-Specific Information': {
      definition: 'Specialized knowledge particular to specific industries, organizations, or applications. Both RAG and fine-tuning enable access to domain-specific information through different mechanisms.',
      example: 'Medical terminology and clinical protocols that are domain-specific, accessible through RAG retrieval or encoded through fine-tuning on medical literature.'
    }
  }
};
