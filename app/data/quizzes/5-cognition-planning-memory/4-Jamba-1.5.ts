import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the Jamba 1.5 model family and what tasks is it designed to excel at?',
    options: [
      'A cutting-edge collection of large language models designed to excel in generative AI tasks like content creation, document analysis, and insight extraction',
      'A specialized computer vision model family optimized for image recognition, object detection, and visual scene understanding',
      'A speech processing model suite focused on audio transcription, voice synthesis, and real-time language translation',
      'A robotics control system designed for autonomous navigation, manipulation tasks, and human-robot interaction'
    ],
    correctAnswer: 0,
    explanation: 'The Jamba 1.5 model family is AI21 Labs\' latest and most advanced collection of large language models (LLMs) designed to excel in a wide array of generative AI tasks, including creating content, summarizing and comparing documents, and extracting valuable insights from vast datasets.'
  },
  {
    id: 'q2',
    question: 'What unique hybrid architecture approach does Jamba 1.5 employ?',
    options: [
      'Combines Mamba and transformer architectures with a mixture of experts (MoE) module for efficiency and accuracy',
      'Integrates convolutional neural networks with recurrent neural networks for improved sequence processing',
      'Merges supervised and unsupervised learning techniques within a single unified training framework',
      'Combines symbolic reasoning with neural networks to enable both logical inference and pattern recognition'
    ],
    correctAnswer: 0,
    explanation: 'Jamba 1.5 is built with a unique hybrid approach that combines the strengths of the Mamba and transformer architectures, in addition to a mixture of experts (MoE) module, delivering superior efficiency, latency, and long context handling.'
  },
  {
    id: 'q3',
    question: 'How are the Mamba and transformer architectures balanced within a Jamba block?',
    options: [
      'Jamba blocks use equal proportions with a 4:4 ratio of attention to Mamba layers',
      'Each Jamba block contains eight layers with an attention-to-Mamba ratio of 1:7 layers',
      'The architecture employs a 2:6 ratio favoring attention layers over Mamba components',
      'Jamba blocks implement a dynamic ratio that adjusts based on input complexity and context length'
    ],
    correctAnswer: 1,
    explanation: 'Each Jamba block fits in a single NVIDIA H100 80 GB GPU and is configured with eight layers consisting of an attention-to-Mamba ratio of 1:7 layers, with Mamba architecture managing long contexts efficiently.'
  },
  {
    id: 'q4',
    question: 'What is the context window size of Jamba 1.5 models and what does this represent?',
    options: [
      'A 256K token context window, which translates to approximately 800 pages of text',
      'A 128K token context window, which translates to approximately 400 pages of text',
      'A 512K token context window, which translates to approximately 1,600 pages of text',
      'A 64K token context window, which translates to approximately 200 pages of text'
    ],
    correctAnswer: 0,
    explanation: 'The model offers a substantial 256K token context window, which translates to about 800 pages of text. This extended context capability enables the model to process and generate more accurate responses by retaining more relevant information.'
  },
  {
    id: 'q5',
    question: 'How does the MoE (Mixture of Experts) module function in Jamba 1.5 architecture?',
    options: [
      'Applied to all layers with 8 total experts, using 4 experts at each token generation',
      'Applied to every third layer with 32 total experts, using 1 expert at each token generation',
      'Applied to every other layer with 16 total experts, using 2 experts at each token generation',
      'Applied to specific layers with 64 total experts, using 8 experts at each token generation'
    ],
    correctAnswer: 2,
    explanation: 'MoE is applied to every other layer with a total of 16 experts, out of which two experts are used at each token generation. This helps increase model capacity without increasing computational requirements.'
  },
  {
    id: 'q6',
    question: 'What capability does Jamba 1.5\'s function calling feature enable for AI systems?',
    options: [
      'Enables AI systems to perform complex actions based on user inputs with structured JSON data output',
      'Allows automatic debugging and error correction in software development applications',
      'Provides real-time translation between multiple programming languages and natural language',
      'Enables direct hardware control and IoT device management through voice commands'
    ],
    correctAnswer: 0,
    explanation: 'One of the standout capabilities is robust function calling with JSON data interchange support, greatly expanding what AI systems can do by enabling them to perform complex actions based on user inputs and handle sophisticated queries with structured data output.'
  },
  {
    id: 'q7',
    question: 'How does Jamba 1.5 enhance business applications through function calling?',
    options: [
      'Enables handling diverse queries from loan term sheet generation to shopping assistants in real time with high precision',
      'Provides automated customer service through pre-programmed responses and decision trees',
      'Offers basic chatbot functionality limited to simple question-answering scenarios',
      'Supports only technical documentation generation and code completion tasks'
    ],
    correctAnswer: 0,
    explanation: 'By extending model capabilities through external function and tool calling, businesses can deploy Jamba 1.5 models to handle a wide range of queries, from loan term sheet generation for financial services to shopping assistants for retail stores, all in real time with high precision.'
  },
  {
    id: 'q8',
    question: 'How does Jamba 1.5 improve retrieval-augmented generation (RAG) performance?',
    options: [
      'Implements advanced caching mechanisms that store frequently accessed information for faster retrieval',
      'Uses specialized embedding models optimized for semantic search across diverse knowledge domains',
      'Employs real-time web crawling to access the most current information during generation',
      'The 256K token context window manages large information volumes without continuous chunking, ideal for comprehensive data analysis'
    ],
    correctAnswer: 3,
    explanation: 'Jamba 1.5 models effectively fit with retrieval-augmented generation (RAG) by leveraging their 256K token context window to manage large volumes of information without needing continuous chunking, ideal for comprehensive data analysis scenarios.'
  },
  {
    id: 'q9',
    question: 'What advantage does the extended context window provide for RAG applications?',
    options: [
      'Simplifies retrieval and improves accuracy by providing more relevant information in fewer chunks',
      'Eliminates the need for external knowledge bases by storing all information within the model',
      'Reduces computational costs by processing smaller amounts of data per query',
      'Enables real-time learning from user interactions without requiring model retraining'
    ],
    correctAnswer: 0,
    explanation: 'RAG is particularly useful in environments with extensive and scattered knowledge bases, enabling Jamba 1.5 to simplify retrieval and improve accuracy by providing more relevant information in fewer chunks due to the large context window.'
  },
  {
    id: 'q10',
    question: 'Where are Jamba 1.5 models available for users to experience and deploy?',
    options: [
      'On the NVIDIA API catalog as part of over 100 AI models supported by NVIDIA NIM microservices',
      'Exclusively through AI21 Labs\' proprietary cloud platform with subscription-based access',
      'Only through direct enterprise licensing agreements with custom deployment requirements',
      'Available open-source on GitHub with community-driven development and support'
    ],
    correctAnswer: 0,
    explanation: 'Users can experience the Jamba 1.5 models on the NVIDIA API catalog, where they join over 100 popular AI models supported by NVIDIA NIM microservices designed to simplify deployment of performance-optimized foundation models.'
  },
  {
    id: 'q11',
    question: 'What other notable AI models are mentioned alongside Jamba 1.5 on NVIDIA\'s platform?',
    options: [
      'GPT-4, Claude-3, Bard, and ChatGPT as competitive alternatives',
      'BERT, RoBERTa, T5, and ALBERT as foundational language models',
      'Llama 3.1 405B, Mistral 8x22B, Phi-3, and Nemotron 340B Reward models',
      'ResNet, EfficientNet, YOLO, and MobileNet as computer vision models'
    ],
    correctAnswer: 2,
    explanation: 'NVIDIA is working with leading model builders to support models on a fully accelerated stack, including Llama 3.1 405B, Mistral 8x22B, Phi-3, Nemotron 340B Reward, and many more on their platform alongside Jamba 1.5.'
  },
  {
    id: 'q12',
    question: 'What key advantage does the transformer-Mamba-MoE combination provide?',
    options: [
      'Achieves balance between memory usage, reduced compute for long context, and higher model accuracy',
      'Enables faster training times while reducing the overall model size and parameter count',
      'Provides perfect accuracy guarantees with minimal computational resource requirements',
      'Offers unlimited scalability without any hardware or infrastructure constraints'
    ],
    correctAnswer: 0,
    explanation: 'By interweaving the Mamba and transformer architectures with MoE, these models achieve a balance between memory usage, less compute for long context, and higher model accuracy, providing optimal performance across multiple dimensions.'
  },
  {
    id: 'q13',
    question: 'How does the Mamba architecture specifically contribute to Jamba 1.5\'s performance?',
    options: [
      'Handles all natural language processing tasks while transformers focus exclusively on mathematical computations',
      'Manages memory allocation and garbage collection while transformers handle all inference operations',
      'Processes structured data formats while transformers handle unstructured text and multimedia content',
      'Excels in managing long contexts with minimal computational overhead while transformers provide accuracy and reasoning'
    ],
    correctAnswer: 3,
    explanation: 'The Mamba architecture excels in managing long contexts with minimal computational overhead, while the transformer layers provide unmatched accuracy and reasoning capabilities, creating a complementary hybrid system.'
  },
  {
    id: 'q14',
    question: 'What does it mean that each Jamba block can fit in a single NVIDIA H100 80 GB GPU?',
    options: [
      'The architecture is optimized for efficient deployment on high-end GPU hardware with memory constraints',
      'Each block requires exactly 80 GB of memory and cannot be distributed across multiple GPUs',
      'The model can only run on NVIDIA hardware and is incompatible with other GPU manufacturers',
      'Training requires at least one H100 GPU per block with no support for smaller GPU configurations'
    ],
    correctAnswer: 0,
    explanation: 'Each Jamba block can fit in a single NVIDIA H100 80 GB GPU, indicating the architecture is optimized for efficient deployment on high-end GPU hardware while managing memory constraints effectively.'
  },
  {
    id: 'q15',
    question: 'What is the significance of enabling deployment on any accelerated platform?',
    options: [
      'Enables enterprises to run applications on secure environments close to where their data resides',
      'Requires specific hardware certifications and proprietary acceleration libraries for optimal performance',
      'Limits deployment to cloud-based platforms with guaranteed service level agreements',
      'Mandates the use of specialized AI accelerators that are not widely available in the market'
    ],
    correctAnswer: 0,
    explanation: 'The ease of deployment on any accelerated platform enables enterprises to run their applications on secure environments close to where their data resides, providing flexibility in deployment while maintaining data security and locality.'
  }
];