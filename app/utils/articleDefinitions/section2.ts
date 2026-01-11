// Article-specific term definitions for Section 2: Agent Development
// These definitions are specific to individual articles in section 2

import { TermDefinition } from '../termDefinitions';

export const SECTION2_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  '2-agent-development/1-optimization-NVDA-Triton': {
    'Dynamic Batching': {
      definition: 'Triton\'s intelligent grouping of inference requests into larger batches for GPU efficiency. By combining multiple individual requests into a single batch, Triton can process them more efficiently, providing nearly 4x throughput improvements compared to processing requests individually.',
      example: 'Instead of processing 10 separate inference requests one at a time, Triton groups them into a single batch, allowing the GPU to process all 10 requests simultaneously, dramatically improving throughput.'
    },
    'Model Instances': {
      definition: 'Multiple copies of models running simultaneously on the same GPU to overlap memory transfers with computation. This technique is especially beneficial for smaller models where computation time is shorter than memory transfer time.',
      example: 'Running 4 instances of a small language model on a single GPU, where while one instance is computing, others are transferring data, maximizing GPU utilization.'
    },
    'TensorRT': {
      definition: 'NVIDIA\'s optimization framework that doubles throughput and halves latency for ONNX models through specialized compilation. TensorRT optimizes neural network inference by combining layers, optimizing kernel selection, and using precision calibration.',
      example: 'Converting a PyTorch model to ONNX format, then compiling it with TensorRT to achieve 2x faster inference with lower latency on NVIDIA GPUs.'
    },
    'NUMA': {
      definition: 'Non-Uniform Memory Access - A CPU architecture where memory access speed depends on physical location relative to cores. In NUMA systems, accessing local memory is faster than accessing memory attached to other CPU sockets, requiring careful process placement for optimal performance.',
      example: 'On a dual-socket server, ensuring a process runs on CPU cores that are physically closest to the memory it needs, reducing memory access latency.'
    },
    'OpenVINO': {
      definition: 'Intel-optimized acceleration framework for CPU deployments, providing framework-specific performance improvements. OpenVINO converts models to an intermediate representation and optimizes them for Intel hardware including CPUs, VPUs, and FPGAs.',
      example: 'Using OpenVINO to optimize a TensorFlow model for deployment on Intel Xeon CPUs, achieving better performance than the original framework.'
    },
    'Triton Inference Server': {
      definition: 'High-performance inference serving platform that manages model deployment, batching, and GPU utilization. It enables efficient serving of multiple models and handles dynamic batching to maximize throughput.',
      example: 'Deploying multiple language models on Triton Inference Server, with automatic dynamic batching that groups requests together for efficient GPU processing.'
    },
    'Model Warmup': {
      definition: 'Strategy for handling slower model loading times with optimizations like TensorRT. Models are loaded and initialized before serving requests, ensuring first requests don\'t experience cold-start delays.',
      example: 'Pre-loading a TensorRT-optimized model during system startup, so when the first inference request arrives, the model is ready to process it immediately without compilation delays.'
    },
    'Concurrent Requests': {
      definition: 'Multiple requests being processed simultaneously. For maximum throughput with dynamic batching, concurrent requests should equal roughly double the maximum batch size times the number of model instances.',
      example: 'With a maximum batch size of 8 and 2 model instances, optimal throughput is achieved with approximately 32 concurrent requests (2 × 8 × 2).'
    }
  },

  '2-agent-development/2-NVDA-agent-intelligence-toolkit': {
    'AIQ': {
      definition: 'Agent Intelligence Toolkit (formerly AIQ) - Framework-agnostic monitoring and optimization system for AI agents that works with any framework without requiring rebuilds. It provides observability, profiling, and evaluation capabilities across different agent frameworks.',
      example: 'Using AIQ to monitor a LangChain agent and a LlamaIndex agent in the same system, getting unified observability metrics without modifying either framework.'
    },
    'Agent Intelligence Toolkit': {
      definition: 'Framework-agnostic toolkit for profiling, observability, and evaluation of agentic workflows. It coordinates teams of AI agents across complex multi-step workflows, providing orchestration, state management, and communication patterns for multi-agent systems.',
      example: 'Deploying multiple specialized agents (data retrieval, analysis, report generation) and using the Agent Intelligence Toolkit to coordinate their interactions and track performance across the entire workflow.'
    },
    'RAGAS': {
      definition: 'Open-source framework for evaluating RAG workflows using judge LLMs to assess answer accuracy, context relevance, and response groundedness. RAGAS provides automated evaluation metrics that don\'t require ground truth labels.',
      example: 'Using RAGAS to automatically evaluate a RAG system by having a judge LLM assess whether answers are factually correct, relevant to the query, and properly grounded in the retrieved context.'
    },
    'Model Context Protocol': {
      definition: 'Standard protocol for how agents discover and interact with external data sources and tools, enabling tool ecosystem integration. MCP provides a unified interface for agents to access various data sources and APIs.',
      example: 'An agent using MCP to discover and connect to a company database, a weather API, and a calendar service, all through a standardized protocol without custom integration code.'
    },
    'MCP': {
      definition: 'Model Context Protocol - Standard for how agents discover and interact with external data sources and tools, enabling tool ecosystem integration.',
      example: 'An agent using MCP to discover and connect to a company database, a weather API, and a calendar service, all through a standardized protocol.'
    },
    'Trajectory Evaluator': {
      definition: 'Evaluation component that examines intermediate steps agents take to reach final answers, checking reasoning path validity beyond output correctness. It validates not just the final answer but the entire reasoning process.',
      example: 'Evaluating an agent that solved a math problem by checking not only if the final answer is correct, but also whether the intermediate calculation steps were logical and valid.'
    },
    'Profiling': {
      definition: 'Instrumentation of entire workflow execution, collecting comprehensive data about token usage, timing, tool invocations, and forecasting future patterns using time-series models. Reveals bottlenecks and optimization opportunities that would otherwise remain invisible.',
      example: 'Profiling a multi-agent workflow to discover that a database query tool is taking 2 seconds per call, identifying it as the primary bottleneck and optimization target.'
    },
    'Observability': {
      definition: 'Real-time monitoring and debugging that integrates with OpenTelemetry-compatible tools, creating distributed tracing across nested function calls with preserved parent-child relationships. Enables understanding complex agent workflows as they execute.',
      example: 'Using observability to trace a request through Agent A → Tool B → Function C, seeing timing relationships and understanding why a workflow performed slowly.'
    },
    'Evaluation': {
      definition: 'Structured validation using frameworks like RAGAS for RAG workflows, assessing answer accuracy, context relevance, and response groundedness through judge LLMs. Goes beyond simple pass-fail metrics to provide nuanced quality assessments.',
      example: 'Running evaluation on a customer service agent, measuring that 85% of responses are accurate, 90% are contextually relevant, and 88% are properly grounded in knowledge base content.'
    },
    'MCP Client': {
      definition: 'AIQ capability to connect to and use tools served by remote MCP servers, enabling integration with a broader ecosystem of tools and services.',
      example: 'An AIQ workflow acting as an MCP client, connecting to a remote MCP server that provides access to company databases and APIs.'
    },
    'MCP Server': {
      definition: 'AIQ capability to publish your own tools via MCP for others to use, enabling sharing custom tools with other developers in a standardized way.',
      example: 'Publishing a custom data analysis tool via MCP, allowing other developers to discover and use it in their agent workflows through the standard protocol.'
    },
    'Composability': {
      definition: 'Design principle where every component in AIQ exists as a reusable function call, allowing building something once and dropping it into different scenarios without rewriting code.',
      example: 'Creating a web search tool, document analyzer, and calculator function, then mixing and matching them across different agent workflows depending on project needs.'
    },
    'Token Efficiency': {
      definition: 'Optimization metric tracked by AIQ profiler, identifying where agents waste tokens through verbose outputs or inefficient prompt structures that don\'t improve quality.',
      example: 'Profiler identifying that an agent generates verbose outputs using 500 tokens when 200 tokens would suffice, revealing an opportunity to reduce costs without sacrificing quality.'
    },
    'Bottleneck Analysis': {
      definition: 'Detailed analysis produced by AIQ profiler showing exactly where workflows spend time waiting, identifying specific components that create latency spikes.',
      example: 'Bottleneck analysis revealing that 60% of workflow time is spent waiting for vector database queries, guiding optimization efforts toward improving retrieval speed.'
    },
    'Gantt Charts': {
      definition: 'Visualizations generated by AIQ profiler showing how different components overlap or block each other during execution, revealing concurrency opportunities and sequential bottlenecks.',
      example: 'A Gantt chart showing that tool calls A, B, and C could run in parallel but are currently executing sequentially, revealing a 3x speedup opportunity.'
    }
  },

  '2-agent-development/3-intro-LLM-p-tuning': {
    'Zero-Shot Prompting': {
      definition: 'Asking questions without examples, relying entirely on model training for task understanding. The model must understand the task from the prompt alone without any demonstration.',
      example: 'Asking an LLM "Translate this to French: Hello" without providing any translation examples beforehand.'
    },
    'Few-Shot Prompting': {
      definition: 'Providing examples before questions to enable in-context learning without parameter updates. The model learns the pattern from the examples in the prompt context.',
      example: 'Providing 3 example translations before asking the model to translate a new sentence, allowing it to learn the translation pattern in-context.'
    },
    'Chain-of-Thought': {
      definition: 'Step-by-step reasoning approach that dramatically improves accuracy on logic problems by breaking complex problems into intermediate steps. CoT forces the model to show its reasoning process.',
      example: 'Instead of asking "What is 15 * 23?", asking "Let\'s solve 15 * 23 step by step: First, 15 * 20 = 300. Then, 15 * 3 = 45. Finally, 300 + 45 = 345."'
    },
    'CoT': {
      definition: 'Chain-of-Thought - Step-by-step reasoning approach that improves accuracy on complex problems by breaking them into intermediate steps.',
      example: 'Solving a math problem by showing each calculation step rather than jumping directly to the answer.'
    },
    'Zero-Shot Chain-of-Thought': {
      definition: 'Triggering chain-of-thought reasoning without providing examples, simply by adding phrases like "Let\'s think about this logically" or "Let\'s work through this step by step" to prompts.',
      example: 'Asking "Let\'s solve this step by step: A juggler has 16 balls. Half are golf balls, and half the golf balls are blue. How many blue golf balls?" - triggering step-by-step reasoning without examples.'
    },
    'P-Tuning': {
      definition: 'Prompt Tuning - Training small auxiliary models to generate efficient virtual tokens instead of full fine-tuning. P-tuning requires only 20 minutes of training and provides deeper customization without updating all model parameters.',
      example: 'Training a small prompt encoder to generate 20 virtual tokens that guide a pre-trained LLM to perform medical diagnosis, without fine-tuning the entire model.'
    },
    'Prompt Tuning': {
      definition: 'Training small auxiliary models to generate efficient virtual tokens instead of full fine-tuning, requiring only 20 minutes. This provides deeper customization without full parameter updates.',
      example: 'Training a small prompt encoder to generate virtual tokens that guide a pre-trained LLM for a specific task, without fine-tuning the entire model.'
    },
    'Virtual Tokens': {
      definition: 'Learned representations that encode task information more efficiently than example text, providing deeper customization without full parameter updates. Virtual tokens are generated by a small trained model and fed to the main LLM.',
      example: 'A P-tuning system generating 20 virtual tokens that encode "medical diagnosis" context, which are more efficient than including 200 words of medical examples in the prompt.'
    },
    'Token Budget': {
      definition: 'The maximum length (in tokens) that a model can process in a single request. Every example included in a prompt uses tokens that could otherwise go to actual content, creating a tradeoff between examples and content space.',
      example: 'A model with a 4,000 token budget: using 1,000 tokens for examples leaves 3,000 tokens for the actual question and response, limiting how many examples can be included.'
    },
    'In-Context Learning': {
      definition: 'The ability of models to learn task structure from examples provided in the prompt without parameter updates. The model adapts its behavior based purely on prompt structure.',
      example: 'A model learning to format dates in a specific style from just 3 examples in the prompt, then applying that format to new dates without any training.'
    },
    'Three-Tier Customization Strategy': {
      definition: 'A systematic approach: use zero-shot or few-shot prompting for quick experiments and simple tasks, employ chain-of-thought for reasoning challenges, and resort to P-tuning when deeper customization is needed but full fine-tuning isn\'t justified.',
      example: 'Starting with zero-shot for simple classification, moving to few-shot when patterns emerge, using CoT for complex reasoning, and applying P-tuning when domain-specific behavior is needed.'
    }
  },

  '2-agent-development/4-building-multi-modal-AI-RAG': {
    'Vision Language Models': {
      definition: 'Models that can "see" images and describe them in words, enabling multimodal RAG capabilities. VLMs process both visual and textual inputs to understand and generate responses about images.',
      example: 'A VLM analyzing a medical X-ray image and describing the findings in natural language, or reading a chart and explaining the data trends.'
    },
    'VLMs': {
      definition: 'Vision Language Models - Models that can process both images and text, enabling multimodal understanding and generation.',
      example: 'A model that can look at a diagram and explain it, or analyze a photo and answer questions about what it sees.'
    },
    'Neva 22B': {
      definition: 'NVIDIA\'s Vision Language Model fine-tuned for general visual content understanding including images, diagrams, and screenshots. Neva 22B can understand and describe various types of visual content.',
      example: 'Using Neva 22B to analyze a software architecture diagram and generate a detailed explanation of the system components and their relationships.'
    },
    'DEOT': {
      definition: 'Google\'s specialized Vision Language Model specifically trained to interpret charts, plots, and graphical data with higher accuracy. DEOT excels at understanding data visualizations.',
      example: 'Using DEOT to read a complex bar chart showing quarterly sales data and extract specific values, trends, and insights from the visualization.'
    },
    'NV Embed': {
      definition: 'GPU-accelerated model for transforming text into high-dimensional vector embeddings with orders-of-magnitude speed improvements. NV Embed is optimized for NVIDIA GPUs and provides fast embedding generation for RAG systems.',
      example: 'Using NV Embed to convert 10,000 documents into vector embeddings in seconds instead of minutes, enabling real-time semantic search in a RAG system.'
    },
    'Milvus': {
      definition: 'GPU-accelerated vector database for storage and similarity search, optimized for high-performance retrieval. Milvus enables fast semantic search across large collections of embeddings.',
      example: 'Storing millions of document embeddings in Milvus and performing sub-millisecond similarity searches to find relevant documents for a RAG query.'
    },
    'Multimodal RAG': {
      definition: 'Extension of traditional text-only RAG that handles various data types by converting everything into text before proceeding with the standard RAG workflow. Vision Language Models serve as the bridge between visual content and text processing.',
      example: 'A multimodal RAG system processing PDFs with embedded charts: VLMs convert charts to text descriptions, then the system treats everything as text for embedding, storage, and retrieval.'
    },
    'Unified Pipeline': {
      definition: 'Architectural approach ensuring that whether content originates as text, images, or charts, everything flows through the same embedding, storage, and retrieval mechanisms. Enables seamless handling of mixed-media documents.',
      example: 'A unified pipeline where text from PDFs, image descriptions from VLMs, and chart interpretations all go through the same embedding model and vector database, queryable through a single interface.'
    },
    'LLaMA Index': {
      definition: 'Orchestration framework that manages the complete workflow from document upload through processing, embedding, storage, query handling, retrieval, and response generation. Abstracts away complexity of coordinating multiple specialized components.',
      example: 'Using LLaMA Index to orchestrate a multimodal RAG system, automatically routing images to VLMs, text to embeddings, storing in Milvus, and generating responses through LLM APIs.'
    },
    'Streamlit': {
      definition: 'Web framework that makes multimodal RAG systems accessible to non-technical users through clean interfaces. Users can upload files, process documents, and interact with the system through a chat interface without command-line knowledge.',
      example: 'A Streamlit interface where users upload PDFs and images, click "Process Documents", then ask questions in a chat interface and receive answers with citations.'
    },
    'GPU Acceleration': {
      definition: 'The use of GPUs to dramatically speed up multimodal RAG operations. GPU acceleration transforms systems from unusably slow to interactively responsive, with orders-of-magnitude improvements at embedding generation, vector search, and inference stages.',
      example: 'GPU acceleration reducing embedding generation from minutes to seconds, vector search from seconds to milliseconds, and inference from slow to real-time, making interactive multimodal RAG practical.'
    },
    'Content Routing': {
      definition: 'The process of routing different visual content types to appropriate specialized VLMs. General images go to models like Neva 22B, while charts and plots go to specialized models like DEOT for higher accuracy.',
      example: 'A system routing a photograph to Neva 22B for general understanding, but routing a bar chart to DEOT for precise data extraction and interpretation.'
    }
  },

  '2-agent-development/5-design-considerations-Agentic': {
    'Global Agent': {
      definition: 'System conductor that orchestrates workflows across different architectural approaches, coordinating specialized components. A Global Agent acts as the main coordinator for complex multi-component systems.',
      example: 'A Global Agent coordinating a data retrieval agent, an analysis agent, and a report generation agent to complete a complex business intelligence task.'
    },
    'ZERO_SHOT_REACT_DESCRIPTION': {
      definition: 'LangChain framework implementing thought-action-observation reasoning cycles for dynamic tool invocation. This pattern enables agents to reason about what action to take, execute it, observe results, and iterate.',
      example: 'An agent using ReAct to solve a problem: "I need to check the weather (thought), let me call the weather API (action), it\'s sunny (observation), now I can suggest outdoor activities (thought)."'
    },
    'StatefulMemory': {
      definition: 'Automatic state tracking that enables seamless retries and context preservation across agent execution. StatefulMemory maintains conversation history and agent state between interactions.',
      example: 'An agent remembering previous conversation context and maintaining state across multiple API calls, allowing it to resume from where it left off if interrupted.'
    },
    'Structured Planning': {
      definition: 'Predetermined task sequences for predictable workflows with explicit execution paths. Structured planning uses predefined steps and decision trees for reliable, repeatable agent behavior.',
      example: 'A customer service agent following a structured plan: 1) Greet customer, 2) Identify issue, 3) Check knowledge base, 4) Provide solution, 5) Confirm resolution.'
    },
    'Adaptive Planning': {
      definition: 'Dynamic task sequencing based on reasoning about current situation, enabling flexible execution. Adaptive planning allows agents to adjust their approach based on context and intermediate results.',
      example: 'An agent that starts with a plan but adapts when it discovers unexpected information, changing its approach mid-execution to better handle the situation.'
    },
    'Architecture 1': {
      definition: 'The structured, predictable approach with explicit class-based agents executing sequentially in hardcoded workflows. Provides transparency and debuggability but lacks flexibility for variable inputs.',
      example: 'Six explicit agents (ColumnNameAgent, ChainCreationAgent, EntityExtractionAgent, etc.) executing in a fixed sequence: Agent A finishes, then Agent B starts, then Agent C, like an assembly line.'
    },
    'Architecture 2': {
      definition: 'The dynamic flexibility approach using LangChain tools invoked dynamically through ZERO_SHOT_REACT_DESCRIPTION framework. The system decides which tools to use and in what order based on reasoning, providing remarkable adaptability but reduced transparency.',
      example: 'Five tools (ColumnNameExtraction, ChainCreation, EntityExtraction, etc.) that the system can invoke in any order based on reasoning, adapting to unexpected data without reprogramming.'
    },
    'Architecture 3': {
      definition: 'The hybrid design combining explicit agents for orchestration with dynamic tools for adaptability. Maintains six explicit agents for transparent, debuggable workflows while incorporating five LangChain tools for dynamic execution when needed.',
      example: 'A system with explicit agents handling routine workflows transparently, but switching to dynamic tools when encountering novel situations requiring adaptability.'
    },
    'Structured Approach': {
      definition: 'Design philosophy using explicit control flow, predictable behavior, and easy debugging. Works beautifully for static workflows but crumbles when facing variation. Represents traditional software engineering principles.',
      example: 'A hardcoded workflow where each step is explicitly defined, making it easy to trace execution and debug, but requiring code changes to handle new input formats.'
    },
    'Dynamic Approach': {
      definition: 'Design philosophy using dynamic reasoning, adaptive execution, and self-correction. Handles variation elegantly but trades transparency for adaptability. Represents the AI-native approach.',
      example: 'A system that looks at each situation and decides dynamically which tools to use, adapting to unexpected data without preset workflows, but making debugging more complex.'
    },
    'Hybrid Design': {
      definition: 'Synthesis of structured and dynamic approaches, recognizing that production systems need predictability where possible and flexibility where necessary. Combines explicit agents for orchestration with dynamic tools for adaptability.',
      example: 'A manager following standard procedures for routine operations but improvising when facing novel situations, providing both reliability and flexibility.'
    },
    'Agents versus Tools': {
      definition: 'Fundamental design choice: agents are independent entities capable of decision-making and maintaining their own logic, while tools are functional utilities invoked by something else to execute well-defined tasks. The distinction affects flexibility, modularity, and maintainability.',
      example: 'A ColumnNameAgent that autonomously parses data versus a ColumnNameExtraction tool that waits to be called by a reasoning framework.'
    },
    'Structured Databases': {
      definition: 'Organized tabular data storage systems (PostgreSQL, MySQL) that store structured information like customer records and transaction histories. Provides source of truth for deterministic queries.',
      example: 'A PostgreSQL database storing customer records with defined schemas, enabling precise queries like "Which customer bought what and when?"'
    },
    'Unstructured Databases': {
      definition: 'Free-form content storage systems (MongoDB, Elasticsearch) that hold natural language content like customer reviews, emails, and social media posts. Becomes input for LLMs to extract entities, sentiments, and insights.',
      example: 'An Elasticsearch database storing thousands of customer reviews in natural language, which an LLM processes to extract customer names, purchase dates, and sentiments.'
    },
    'Vector Databases': {
      definition: 'Specialized databases (Pinecone, Weaviate, Milvus) that store embeddings—numerical representations capturing semantic meaning. Enable similarity searches and semantic memory that complements structured databases.',
      example: 'A Milvus vector database storing review embeddings, enabling queries like "Find reviews similar to this complaint" based on semantic meaning rather than exact keywords.'
    }
  },

  '2-agent-development/6-transient-fault-handling': {
    'Transient Faults': {
      definition: 'Temporary failures in distributed systems that typically resolve themselves if retried. These include network timeouts, temporary service unavailability, or brief resource contention. Normal in cloud environments due to shared resources, commodity hardware, and complex networks.',
      example: 'A database connection that fails due to network congestion but succeeds on retry a few seconds later.'
    },
    'Sustained Failures': {
      definition: 'Persistent problems requiring human intervention or system fixes, not resolvable through retries. These indicate genuine service outages or configuration issues that won\'t self-correct.',
      example: 'A database server that has crashed and requires manual restart, or a service with misconfigured credentials that will continue failing until fixed.'
    },
    'Retry Pattern': {
      definition: 'Design pattern that handles transient failures by automatically retrying failed operations with configurable strategies like exponential backoff, incremental intervals, or immediate retry with jitter.',
      example: 'An API call that fails with a timeout, then automatically retries with increasing delays (1s, 2s, 4s) until it succeeds or reaches the maximum retry limit.'
    },
    'Retry Interval Strategies': {
      definition: 'Different approaches for determining wait times between retry attempts: exponential back-off (progressively longer waits), incremental intervals (gradual increases), regular intervals (same wait every time), or immediate retry (for briefest faults).',
      example: 'Exponential back-off: wait 3 seconds, then 12 seconds, then 30 seconds. Incremental: wait 3 seconds, then 7 seconds, then 13 seconds. Regular: wait 3 seconds every time.'
    },
    'Exponential Back-Off': {
      definition: 'Retry strategy with progressively longer waits (e.g., 3s, 12s, 30s) to spread out attempts and avoid overwhelming recovering services. Works beautifully for services under load by giving them time to recover.',
      example: 'Retrying a database connection with exponential back-off: first retry after 3 seconds, second after 12 seconds, third after 30 seconds, preventing retry storms.'
    },
    'Incremental Intervals': {
      definition: 'Retry strategy with gradual increases in wait time (e.g., 3s, 7s, 13s) as a middle ground between immediate retry and exponential back-off. Provides increasing recovery time without aggressive growth.',
      example: 'Retrying with incremental intervals: first retry after 3 seconds, second after 7 seconds, third after 13 seconds, giving gradual recovery time.'
    },
    'Regular Intervals': {
      definition: 'Retry strategy waiting the same amount every time (e.g., retry every 3 seconds regardless). Works when you have strong reasons to believe the fault is truly random rather than load-related, though it risks creating retry storms.',
      example: 'Retrying every 3 seconds consistently, suitable when failures are random network packet collisions rather than service overload.'
    },
    'Immediate Retry': {
      definition: 'Retry strategy for the briefest faults—a network packet collision that resolves in milliseconds. You retry instantly because the fault cleared while assembling your next request. Never do this more than once; if immediate retry fails, switch to a back-off strategy.',
      example: 'Retrying immediately for a brief network hiccup, but if that fails, switching to exponential back-off rather than repeatedly hammering the service.'
    },
    'Jitter': {
      definition: 'Randomization added to retry intervals to prevent synchronized retry storms when multiple clients retry simultaneously. Instead of all clients retrying at exactly the same time, jitter spreads out attempts.',
      example: 'Instead of all 1000 clients retrying at exactly 2 seconds, adding random jitter so they retry between 1.8-2.2 seconds, preventing a thundering herd problem.'
    },
    'Retry Count': {
      definition: 'The number of times to retry a failed operation. Balancing user experience against success probability: interactive operations need few retries with short intervals, while critical background workflows can tolerate many retries with longer waits.',
      example: 'A user-facing API retrying once immediately, then once more after 2 seconds, then failing fast. A background batch job retrying 10 times over 10 minutes for critical data processing.'
    },
    'Total Timeout': {
      definition: 'The sum of operation timeout plus all retry delays plus time spent on failed attempts. Must be calculated to ensure retry overhead doesn\'t exceed SLA promises or acceptable latency requirements.',
      example: 'If SLA promises 30-second response and operation takes 10 seconds when it works, you can only afford 20 seconds of retry time, requiring careful calculation of retry intervals and counts.'
    },
    'Cascading Retry Logic': {
      definition: 'Antipattern where multiple layers implement retries, causing multiplicative effects. If Component A, B, and C all retry 3 times, a single failure could trigger 3×3×3 = 27 total attempts. Should implement retries at one level only.',
      example: 'Component A calls B which calls Service C, all with 3 retries each, causing 27 attempts against Service C from a single request, destroying a struggling service trying to recover.'
    },
    'Transient Failure Contracts': {
      definition: 'Documentation from well-designed services explaining which errors are temporary and should be retried versus which indicate permanent failures. Helps applications distinguish transient from sustained faults.',
      example: 'A service documenting that "429 Too Many Requests" and "503 Service Unavailable" are transient and should be retried, while "401 Unauthorized" indicates permanent authentication failure.'
    }
  },

  '2-agent-development/7-circuit-breaker-pattern': {
    'Circuit Breaker': {
      definition: 'Design pattern that prevents cascading failures by stopping requests to a failing service. When failures exceed a threshold, the circuit "opens" and immediately fails requests without attempting the call.',
      example: 'A service detecting that 5 out of 10 recent calls to a downstream API failed, opening the circuit breaker to prevent further calls and immediately returning an error, protecting the system from overload.'
    },
    'Circuit Breaker Pattern': {
      definition: 'Design pattern that prevents cascading failures by stopping requests to a failing service after a threshold of failures is reached.',
      example: 'When a payment service is down, the circuit breaker opens to prevent all payment requests from waiting and timing out, instead immediately returning a "service unavailable" response.'
    },
    'Closed State': {
      definition: 'Normal operation state of a circuit breaker where everything is working fine. Requests flow through to the underlying service. The circuit breaker counts recent failures, but as long as failures stay below a threshold, it doesn\'t interfere.',
      example: 'A circuit breaker in Closed State allowing all requests through to a database, monitoring failure rates but not blocking requests as long as failures remain below 5 per 30 seconds.'
    },
    'Open State': {
      definition: 'State where circuit breaker trips after failures exceed threshold within a time window. Every request fails immediately without even attempting the operation. The breaker returns an exception instantly and starts a timeout timer, giving the failing service time to recover.',
      example: 'After detecting 5 failures in 30 seconds, circuit breaker enters Open State, immediately returning errors for all new requests without attempting database calls, protecting resources from being tied up.'
    },
    'Half-Open State': {
      definition: 'Cautious testing state after timeout expires. Allows a limited number of trial requests through to test if the service has recovered. If trials succeed, breaker resets to Closed; if any fail, immediately snaps back to Open.',
      example: 'After 60 seconds in Open State, circuit breaker enters Half-Open, allowing 3 trial requests. If all succeed, it assumes recovery and returns to Closed; if any fail, it immediately returns to Open.'
    },
    'Failure Counter': {
      definition: 'Time-based counter in Closed State that automatically resets at periodic intervals. Only trips to Open when seeing a cluster of failures within a short window, indicating sustained problem rather than random noise.',
      example: 'A failure counter tracking failures in 30-second windows, resetting each window. Only trips to Open when 5+ failures occur within a single 30-second window, not accumulating isolated failures across windows.'
    },
    'Timeout Duration': {
      definition: 'The period a circuit breaker stays in Open State before entering Half-Open to test recovery. Depends on expected recovery time—services that typically recover in 30 seconds need shorter timeouts than those requiring manual intervention.',
      example: 'A circuit breaker with 60-second timeout: after tripping to Open, it waits 60 seconds before entering Half-Open to test if the service has recovered.'
    },
    'Trial Requests': {
      definition: 'Limited number of requests allowed through in Half-Open State to test service recovery. Prevents immediately flooding a recovering service with full load, which could knock it back down again.',
      example: 'A circuit breaker in Half-Open State allowing only 3 trial requests. If all succeed, it assumes recovery; if any fail, it immediately returns to Open State.'
    },
    'Graceful Degradation': {
      definition: 'Maintaining core functionality when parts of the system fail, using fallback strategies like cached data, backup services, request queuing, or simplified responses. Circuit breakers enable this by failing fast rather than blocking.',
      example: 'A circuit breaker opening for a database, causing the application to return cached data or simplified responses instead of waiting indefinitely, keeping the application responsive.'
    },
    'Failure Pattern Detection': {
      definition: 'The ability of circuit breakers to recognize patterns indicating sustained failure rather than treating each failure as independent. Distinguishes between transient faults (handled by retries) and sustained failures (handled by circuit breakers).',
      example: 'A circuit breaker detecting that failures are clustering in time (5 failures in 30 seconds) rather than being random, indicating a sustained problem requiring circuit opening rather than continued retries.'
    }
  },

  '2-agent-development/8-retry-pattern': {
    'Exponential Backoff': {
      definition: 'Retry strategy that increases wait time between retry attempts exponentially (e.g., 1s, 2s, 4s, 8s). This prevents overwhelming a recovering service and reduces contention.',
      example: 'Retrying a failed API call after 1 second, then 2 seconds, then 4 seconds, giving the service time to recover while not waiting too long.'
    },
    'Jitter': {
      definition: 'Random variation added to retry intervals to prevent synchronized retry storms when multiple clients retry simultaneously. Jitter spreads out retry attempts.',
      example: 'Instead of all 1000 clients retrying at exactly 2 seconds, adding random jitter so they retry between 1.8-2.2 seconds, preventing a thundering herd problem.'
    },
    'Idempotency': {
      definition: 'Property of operations that can be safely retried multiple times without changing the result beyond the initial application. Idempotent operations produce the same outcome whether executed once or multiple times.',
      example: 'A payment processing operation that checks if a payment ID already exists before processing, ensuring that retrying a failed payment doesn\'t result in duplicate charges.'
    },
    'Retry Pattern': {
      definition: 'Design pattern that handles transient failures by automatically retrying failed operations. Provides second chances for temporary problems that resolve themselves if retried after a suitable delay.',
      example: 'Calling a busy restaurant repeatedly until the line is free—the failure (busy signal) is temporary, and retrying eventually succeeds.'
    },
    'Cancel Strategy': {
      definition: 'Retry strategy for failures that clearly aren\'t transient or where retrying won\'t help. Recognize immediate dead ends and fail fast rather than wasting time on hopeless retries.',
      example: 'A "401 Unauthorized" error with invalid credentials—retrying won\'t help, so cancel immediately rather than wasting time on futile attempts.'
    },
    'Retry After Delay': {
      definition: 'Retry strategy for connectivity issues or services temporarily busy. Introduces a programmatic delay before retrying, giving the problem time to resolve itself and preventing synchronized retry storms.',
      example: 'A database connection failing due to temporary overload, waiting 3 seconds before retrying to give the database time to process its backlog.'
    },
    'Increasing Delay Strategy': {
      definition: 'Retry strategy recognizing that if the first retry fails, the problem might be more persistent. Starts with short delays (1 second) then increases (3 seconds, 9 seconds) either incrementally or exponentially.',
      example: 'Starting with 1-second delay for first retry, then 3 seconds for second, 9 seconds for third, giving progressively more recovery time as failures persist.'
    },
    'Transaction Consistency': {
      definition: 'The challenge of maintaining data integrity when retrying multi-step transactions. If one step fails partway through, retrying that step might leave the system in an inconsistent state without proper transaction boundaries.',
      example: 'A transaction withdrawing from Account A (succeeds) then depositing to Account B (fails). Retrying the deposit without proper transaction boundaries could credit Account B twice while Account A was only debited once.'
    },
    'Built-In Retry Mechanisms': {
      definition: 'Retry logic included in modern cloud libraries (Azure SDK, Entity Framework, AWS clients) that are battle-tested against real-world failure patterns. Should be used rather than writing custom retry logic unless you have specific requirements.',
      example: 'Using Azure Storage client library\'s built-in retry logic, which knows Azure Storage\'s failure modes and is tuned for its specific error patterns.'
    },
    'Retry Storm': {
      definition: 'Problem where many clients all retry simultaneously, overwhelming a recovering service. Prevented by jitter (randomizing retry intervals) and exponential back-off (spreading out attempts over time).',
      example: '1000 clients all retrying at exactly 2 seconds, creating another spike that overwhelms the recovering service. Jitter prevents this by spreading retries between 1.8-2.2 seconds.'
    },
    'Thundering Herd Problem': {
      definition: 'When many clients all retry simultaneously when a service comes back online, immediately overwhelming it again. Prevented by circuit breakers entering Half-Open state with limited trial requests.',
      example: 'A service recovers, and thousands of clients all retry simultaneously, immediately knocking the service back down. Circuit breaker\'s Half-Open state prevents this by allowing only limited trial requests.'
    }
  },

  '2-agent-development/9-evaluating-decision-strategies': {
    'Offline Evaluation': {
      definition: 'Evaluating agents in controlled settings using test datasets with known expected outputs, providing repeatability and clear accuracy metrics during development.',
      example: 'Testing a customer service agent against 500 known question-answer pairs before deploying to production, measuring accuracy and identifying failure cases.'
    },
    'Online Evaluation': {
      definition: 'Evaluating agents in live, real-world production environments, monitoring performance on real user interactions and capturing unexpected scenarios not present in test data.',
      example: 'Monitoring a deployed agent\'s success rate, user satisfaction scores, and error patterns in production to identify issues that didn\'t appear in test data.'
    },
    'A/B Testing': {
      definition: 'Experimental method comparing two versions of an agent to determine which performs better. Users are randomly assigned to different versions, and metrics are compared.',
      example: 'Testing whether a new prompt engineering approach improves customer satisfaction by showing version A to 50% of users and version B to the other 50%, then comparing results.'
    },
    'Evaluation Framework': {
      definition: 'A systematic structure that defines what good decision-making looks like, how to measure it, and how to compare alternatives. Includes success criteria, evaluation datasets, and metrics selection that together enable rigorous assessment.',
      example: 'An evaluation framework for a customer service agent defining success as: resolving issues within 5 minutes, maintaining 90%+ satisfaction, correctly routing to departments, and adhering to policies—with specific metrics for each.'
    },
    'Success Criteria': {
      definition: 'Explicitly defined, measurable standards that determine what success looks like for an agent in a specific domain. Should be specific, aligned with user and business objectives, and comprehensive enough to capture different dimensions of quality.',
      example: 'Success criteria for a research assistant: finding relevant and accurate information (measured by citation quality), properly citing sources (measured by citation accuracy), acknowledging uncertainty when appropriate (measured by confidence statements).'
    },
    'Evaluation Dataset': {
      definition: 'Carefully curated collection of test cases including representative examples, edge cases, known failure modes, and adversarial examples. Should be diverse across task complexity, domain topics, user interaction styles, and environmental conditions.',
      example: 'An evaluation dataset with 1000 test cases: 700 representative examples, 200 edge cases, 50 known failure modes from previous versions, and 50 adversarial examples designed to expose weaknesses.'
    },
    'Quantitative Evaluation': {
      definition: 'Assessment using numerical metrics to objectively measure agent performance, enabling statistical comparison between different strategies and tracking performance over time. Includes automated testing, benchmark comparisons, statistical significance testing, and performance profiling.',
      example: 'Measuring that agent version B achieves 85% accuracy versus version A\'s 82%, with statistical testing confirming this 3% difference is meaningful, not random variation.'
    },
    'Qualitative Evaluation': {
      definition: 'Assessment that captures nuances numbers miss—whether responses feel natural and helpful, whether reasoning is sound, and whether agents exhibit problematic behaviors. Includes human evaluation, think-aloud protocols, expert reviews, and failure analysis.',
      example: 'Human evaluators rating agent responses for helpfulness, naturalness, and tone appropriateness, identifying that while accuracy is high, responses feel robotic and lack empathy.'
    },
    'Automated Testing': {
      definition: 'Scalable, repeatable evaluation against labeled datasets where each example has known correct answers or expected behaviors. Run the agent against these examples and compute metrics comparing actual to expected outcomes.',
      example: 'Running an agent against 1000 labeled test conversations, automatically measuring that 85% of intents are correctly identified, 90% of tool invocations are appropriate, and 80% of resolutions match expected outcomes.'
    },
    'Benchmark Comparisons': {
      definition: 'Measuring agent performance against standardized tests that enable comparing across systems or research results. Industry benchmarks for various capabilities provide external validation of agent quality.',
      example: 'Running a research assistant agent against industry question-answering benchmarks, comparing its performance to state-of-the-art systems and identifying relative strengths and weaknesses.'
    },
    'Statistical Significance Testing': {
      definition: 'Determining whether observed performance differences are meaningful or just random variation. Running statistical tests quantifies confidence that differences are genuine, preventing misinterpreting noise as signal.',
      example: 'Observing that version B achieves 85% accuracy versus version A\'s 82%. Statistical testing (t-test) confirms with 95% confidence this 3% difference is real, not random variation.'
    },
    'Performance Profiling': {
      definition: 'Identifying bottlenecks and inefficiencies in agent execution beyond measuring correctness. Reveals which tools consume most time or cost, where agents waste effort, which decision points introduce highest variance, and where errors most commonly occur.',
      example: 'Profiling revealing that 60% of workflow time is spent on vector database queries, identifying this as the primary optimization target rather than LLM inference.'
    },
    'Human Evaluation': {
      definition: 'People assessing agent outputs along various dimensions like helpfulness, accuracy, tone appropriateness, and completeness. Provides ground truth about user experience since humans are the ultimate judges of whether agents are helpful.',
      example: 'Human evaluators rating 100 agent responses on a 1-5 scale for helpfulness, with inter-rater reliability analysis ensuring consistent evaluation criteria.'
    },
    'Think-Aloud Protocols': {
      definition: 'Asking users to verbalize their thoughts while interacting with agents, revealing not just what users do but why—what they find confusing, what delights them, what frustrates them.',
      example: 'A user thinking aloud: "I asked for sales data, but the agent gave me marketing data. I\'m confused about why it didn\'t understand my request." - revealing a misunderstanding issue.'
    },
    'Expert Reviews': {
      definition: 'Engaging domain experts to assess whether agent decisions demonstrate appropriate expertise. Experts evaluate accuracy, appropriate caveats, and suitable depth for professional standards.',
      example: 'Healthcare professionals reviewing a medical information agent\'s responses, assessing whether information is accurate, appropriately caveated, and presented at suitable depth for the target audience.'
    },
    'Failure Analysis': {
      definition: 'Systematically examining cases where agents performed poorly to understand root causes. Categorizing failures reveals patterns and directly informs refinement priorities.',
      example: 'Analyzing 50 failure cases, discovering that 30 involve misunderstanding user intent, 15 involve inappropriate tool selection, and 5 involve logical errors—guiding refinement toward intent understanding improvements.'
    },
    'Prompt Engineering': {
      definition: 'The systematic process of crafting and refining prompts that shape language model behavior. Since prompts significantly influence agent decision-making, prompt refinement is central to improving decision quality. Includes variation testing, optimization, component ablation, and debugging.',
      example: 'Testing 10 different prompt formulations, discovering that adding "Think step by step" improves reasoning accuracy by 15%, then refining the prompt based on failure analysis.'
    },
    'Prompt Variation Testing': {
      definition: 'Comparing different prompt formulations to find what works best. Testing different instruction phrasings, levels of detail, example selections, component ordering, and tone specifications to optimize performance.',
      example: 'Testing prompts with 3 examples vs 5 examples, detailed instructions vs concise instructions, and different example orderings, measuring which combination produces best results.'
    },
    'Component Ablation Studies': {
      definition: 'Determining which prompt elements actually contribute to performance by removing each component individually and measuring impact. Reveals what\'s essential versus superfluous, preventing prompt bloat.',
      example: 'Testing a prompt with role definitions, instructions, examples, and constraints. Removing examples reduces performance by 20%, but removing role definitions has no impact—revealing examples are essential.'
    },
    'Tool Usage Analysis': {
      definition: 'Examination of patterns in how agents employ available tools, including invocation rates, success rates, tool sequences, parameter quality, and identification of unused tools. Reveals optimization opportunities.',
      example: 'Analysis showing that a web search tool is invoked 80% of the time but only succeeds 60% of the time, suggesting the tool description needs improvement or the tool should be replaced.'
    },
    'Tool Invocation Rates': {
      definition: 'Metrics tracking which tools are used frequently versus rarely. High invocation rates indicate important tools, while zero invocation suggests tools are unnecessary or poorly described.',
      example: 'Analysis showing that database query tool is used in 90% of workflows, calculator tool in 10%, and weather API tool in 0%—revealing weather tool might be unnecessary.'
    },
    'Tool Success Rates': {
      definition: 'Metrics tracking which tools fail often, suggesting poor selection or implementation. Low success rates indicate tools need better descriptions, parameter validation, or replacement.',
      example: 'A tool with 40% success rate suggests it\'s being selected inappropriately or has implementation issues, requiring investigation and improvement.'
    },
    'Tool Sequences': {
      definition: 'Common patterns of tool chaining that reveal how agents orchestrate multi-step tasks. Understanding sequences helps optimize tool descriptions and identify opportunities for tool combination.',
      example: 'Analysis revealing that agents frequently chain: web search → database query → calculator → report generator, suggesting these could be combined into a higher-level tool.'
    },
    'Reasoning Quality Assessment': {
      definition: 'Evaluation of agent reasoning processes beyond just final outputs, including logical consistency checking, transparency evaluation, counterfactual reasoning tests, and verification procedures.',
      example: 'Assessing whether an agent\'s reasoning steps follow logically from each other, whether conclusions are supported by premises, and whether the reasoning would convince a domain expert.'
    },
    'Logical Consistency Checking': {
      definition: 'Verifying that agent reasoning doesn\'t contain contradictions or non-sequiturs. Automated logic checkers identify blatant contradictions, while human reviewers assess whether reasoning steps follow logically.',
      example: 'Detecting that an agent asserts "the budget is $10,000" and "the budget is $15,000" in the same reasoning chain, indicating a logical inconsistency requiring investigation.'
    },
    'Transparency Evaluation': {
      definition: 'Measuring whether agent explanations help users understand decisions. Good explanations identify key factors, acknowledge uncertainty, describe alternatives considered, and are comprehensible to target users.',
      example: 'Showing agent explanations to representative users and assessing whether they understand and trust the agent\'s reasoning, identifying that technical jargon reduces comprehension.'
    },
    'Counterfactual Reasoning Tests': {
      definition: 'Probing whether agents understand causal relationships by asking "what if" questions. Agents that can coherently answer such questions demonstrate deeper understanding than those that just pattern match.',
      example: 'After an agent makes a recommendation, asking "If the user had specified a different budget, how would your recommendation change?" to test causal understanding.'
    },
    'Verification Procedures': {
      definition: 'Double-checking critical decisions through independent means. Implementing verification steps where decisions are validated through alternative approaches—different tools, reasoning strategies, or model configurations.',
      example: 'A high-stakes financial decision verified by having a different model configuration tackle the same problem, with agreement increasing confidence and disagreement flagging for review.'
    },
    'Cost-Quality Tradeoff': {
      definition: 'Analysis of tradeoffs between decision quality and computational or financial costs. Includes response quality versus latency analysis, model selection optimization, tool call economics, and caching strategy evaluation.',
      example: 'Analysis showing that 80% quality comes from 2 seconds of processing while reaching 90% requires 10 seconds, enabling setting appropriate latency targets that balance user experience with quality needs.'
    },
    'Response Quality versus Latency': {
      definition: 'Measuring how decision quality varies with allowed processing time. Faster decisions use cheaper models and fewer tool calls; slower decisions employ more powerful models and comprehensive analysis.',
      example: 'Plotting quality against latency reveals diminishing returns: 80% quality at 2 seconds, 85% at 5 seconds, 90% at 10 seconds—guiding latency target selection.'
    },
    'Model Selection Optimization': {
      definition: 'Evaluating whether using different models for different tasks improves cost-quality tradeoffs. Routine queries might work with efficient small models while complex analysis requires powerful large models.',
      example: 'Implementing routing logic that sends simple queries to a small, fast model and complex reasoning to a larger model, reducing costs by 60% while maintaining quality where it matters.'
    },
    'Tool Call Economics': {
      definition: 'Analyzing whether tool invocations justify their costs. Each tool call adds latency and often financial cost—does the information gained warrant these costs?',
      example: 'Analysis showing that a database query tool adds 200ms latency and $0.001 cost per call, but improves answer accuracy by 15%—justifying the cost for high-stakes queries but not for simple ones.'
    },
    'Caching Strategy Evaluation': {
      definition: 'Testing whether storing and reusing results from expensive operations improves cost-quality tradeoffs. Measures cache hit rates, quality of cached versus fresh results, and cost savings.',
      example: 'Evaluating caching LLM responses for common queries: 70% cache hit rate, cached responses maintain 95% of fresh response quality, reducing costs by 60%—justifying the caching strategy.'
    },
    'Production Monitoring': {
      definition: 'Ongoing assessment of agent decision-making quality in real-world conditions through real-time metrics, anomaly detection, cohort analysis, and feedback loop integration.',
      example: 'Monitoring dashboard showing success rates for common task types, average quality scores from user feedback, distribution of decision paths, and performance variance over time.'
    },
    'Real-Time Decision Quality Metrics': {
      definition: 'Tracking performance continuously in production, monitoring success rates, quality scores, decision paths, error rates, and performance variance. Enables quick identification of degradation.',
      example: 'A dashboard showing that success rates dropped from 90% to 75% in the last hour, triggering investigation into whether API changes, data drift, or emerging usage patterns caused the issue.'
    },
    'Anomaly Detection': {
      definition: 'Identifying unusual decision patterns that might indicate problems. Statistical methods flag when metrics deviate significantly from baselines, while machine learning approaches identify subtle patterns humans might miss.',
      example: 'Anomaly detection flagging that success rates dropped suddenly, certain tools started failing frequently, or response times increased—indicating problems requiring investigation.'
    },
    'Cohort Analysis': {
      definition: 'Segmenting users or tasks and comparing decision quality across segments. Reveals whether agent performs well for power users but poorly for novices, or excels on certain task types while struggling with others.',
      example: 'Analysis showing agent achieves 95% accuracy for power users but only 70% for novices, or excels on technical questions (90%) but struggles with conversational queries (60%)—guiding targeted improvements.'
    },
    'Feedback Loop Integration': {
      definition: 'Using production feedback to continuously refine agent behavior. User ratings, corrections, and complaints provide rich signals about decision quality, feeding back into prompt refinement and capability expansion.',
      example: 'Analyzing user feedback showing that 40% of corrections involve tone issues, 30% involve missing information, and 30% involve incorrect facts—guiding refinement priorities toward tone and information completeness.'
    },
    'Iterative Refinement': {
      definition: 'Hypothesis-driven improvement cycles making incremental changes with rollback readiness and learning documentation. Each iteration builds on previous insights, systematically improving performance while maintaining stability.',
      example: 'Hypothesis: "Adding edge case examples to prompt will reduce failures by 15%." Making the change, testing, confirming 12% improvement, documenting learnings, then moving to next hypothesis.'
    },
    'Hypothesis-Driven Improvement': {
      definition: 'Starting with specific, testable hypotheses about what changes will improve performance. Articulating clear predictions ensures changes target real problems and enables evaluating whether changes had intended effects.',
      example: 'Hypothesis: "Adding examples of edge case handling to the prompt will reduce failures on ambiguous queries by 15%." Testing confirms 12% improvement, validating the hypothesis direction.'
    },
    'Incremental Change Strategy': {
      definition: 'Making one significant change at a time rather than many simultaneous changes. Isolates variables, making it possible to attribute improvements or regressions to specific changes, preventing accumulation of unexplained changes.',
      example: 'Changing prompt examples first, evaluating thoroughly, committing or reverting, then moving to tool descriptions—not changing both simultaneously, which would make attribution impossible.'
    },
    'Rollback Readiness': {
      definition: 'Maintaining the ability to quickly revert changes that degrade performance. Version control for prompts, configuration, and code enables comparing current to previous versions, with feature flags and canary deployments supporting safe experimentation.',
      example: 'A canary deployment rolling out a prompt change to 5% of users, with automated rollback if key metrics degrade, enabling bold experimentation with safety nets.'
    },
    'Learning Documentation': {
      definition: 'Capturing insights from evaluation and refinement cycles. Maintains records of what changes were tried, what hypotheses they tested, what results showed, what was learned, and what next steps are planned.',
      example: 'Documentation: "Tried adding 5 examples to prompt. Hypothesis: improve accuracy by 10%. Result: 8% improvement. Learning: examples help but diminishing returns after 3. Next: test different example types."'
    }
  }
};
