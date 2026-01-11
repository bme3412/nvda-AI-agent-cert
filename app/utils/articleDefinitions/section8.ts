// Article-specific term definitions for Section 8: Run, Monitor, Maintain
// These definitions are specific to individual articles in section 8

import { TermDefinition } from '../termDefinitions';

export const SECTION8_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  '8-run-monitor-maintain/1-AI-Agent-Eval': {
    'AI Agent Evaluation': {
      definition: 'Systematic assessment processes for understanding performance characteristics, decision-making quality, and interaction effectiveness of autonomous AI systems executing tasks and serving users.',
      example: 'Evaluating a customer service agent by measuring task completion accuracy, response latency, policy compliance, and user satisfaction across 1000 test interactions.'
    },
    'Evaluation Framework': {
      definition: 'Structured approach to agent assessment including goal definition, metric specification, data collection, workflow decomposition, testing execution, and result analysis.',
      example: 'An evaluation framework defining goals (task accuracy >90%), metrics (success rate, latency), test datasets, and analysis procedures for systematic agent assessment.'
    },
    'LLM-Based Evaluation Judges': {
      definition: 'Assessment of text generation quality using predefined criteria applied by language models rather than human reviewers, maintaining consistency and operating at scale.',
      example: 'Using an LLM judge to evaluate 10,000 agent responses for helpfulness and accuracy, providing consistent assessment across all examples.'
    },
    'Reference-Based Comparison': {
      definition: 'Metrics including BLEU and ROUGE evaluating generated text quality through similarity measurement against human-written references.',
      example: 'Calculating BLEU score for an agent-generated summary by comparing it against a human-written reference summary, measuring n-gram overlap.'
    },
    'Success Rate': {
      definition: 'Quantifies task completion proportion determining how frequently agents correctly complete attempted objectives.',
      example: 'An agent successfully completing 850 out of 1000 tasks, achieving an 85% success rate.'
    },
    'Error Rate': {
      definition: 'Quantifies incorrect outputs or failed operations revealing reliability issues and vulnerability to specific input patterns.',
      example: 'An agent producing incorrect outputs in 5% of cases, with error analysis revealing systematic failures on edge cases.'
    },
    'Cost Measurement': {
      definition: 'Quantifies resource consumption including token usage from LLM API calls, compute time for processing, and infrastructure expenses from deployment.',
      example: 'Tracking that an agent consumes 5,000 tokens per query at $0.002 per 1K tokens, resulting in $0.01 per query operational cost.'
    },
    'Latency Measurement': {
      definition: 'Tracks processing time from request submission through result delivery revealing responsiveness characteristics and consistency.',
      example: 'Measuring agent latency showing average 2 seconds, median 1.5 seconds, and 95th percentile 5 seconds, indicating tail latency issues.'
    },
    'Adversarial Robustness': {
      definition: 'Assesses resistance to prompt injection attacks attempting to alter intended behavior through malicious inputs.',
      example: 'Testing an agent with 100 adversarial prompts designed to bypass safety controls, measuring that 95% are successfully blocked.'
    },
    'Policy Adherence': {
      definition: 'Tracks compliance with organizational guidelines, ethical principles, and regulatory requirements through automated checking of outputs.',
      example: 'Monitoring that 99% of agent responses comply with company policy prohibiting financial advice, with violations triggering alerts.'
    },
    'Bias and Fairness Assessment': {
      definition: 'Detects performance disparities across user groups defined by demographic characteristics, usage patterns, or other attributes.',
      example: 'Evaluating agent performance across different user demographics, identifying that response quality is 20% lower for non-native English speakers.'
    },
    'Safety Evaluation': {
      definition: 'Verifies agents avoid harmful behaviors including generating dangerous content, enabling harmful actions, or producing outputs causing psychological or physical harm.',
      example: 'Testing an agent with 500 safety test cases, ensuring it never generates instructions for illegal activities or harmful content.'
    },
    'User Satisfaction Measurement': {
      definition: 'Captures subjective quality assessments through rating mechanisms, surveys, or implicit feedback signals.',
      example: 'Collecting user satisfaction ratings showing 4.2/5 average, with analysis revealing lower satisfaction for complex queries.'
    },
    'Engagement Tracking': {
      definition: 'Monitors interaction frequency, session duration, and feature usage revealing whether users find agents valuable enough for repeated use.',
      example: 'Tracking that users average 3.5 interactions per session with 70% returning within a week, indicating strong engagement.'
    },
    'Function Selection Accuracy': {
      definition: 'Evaluates whether agents choose appropriate tools from available options for task requirements.',
      example: 'An agent correctly selecting a database query tool for data retrieval tasks 95% of the time, with errors mostly from ambiguous queries.'
    },
    'Parameter Specification Correctness': {
      definition: 'Assesses whether function calls include required parameters with appropriate values and types.',
      example: 'Validating that 98% of function calls include all required parameters with correct types, with errors primarily from missing optional parameters.'
    },
    'Parameter Grounding Verification': {
      definition: 'Ensures values derive from user inputs, conversation context, or API specifications rather than agent hallucinations.',
      example: 'Verifying that function call parameters reference actual user-provided data rather than fabricated values, catching 5% hallucination rate.'
    },
    'Semantic Correctness Evaluation': {
      definition: 'Using LLM judges assesses whether function calls appropriately implement user intent beyond syntactic correctness.',
      example: 'An LLM judge evaluating that a function call is technically correct but contextually inappropriate, catching semantic errors missed by syntax checks.'
    }
  },
  '8-run-monitor-maintain/2-Log-Trace-Monitor': {
    'LLM Logging and Tracing': {
      definition: 'Observability framework for tracking, correlating, and analyzing API calls within generative AI applications where single user requests trigger multiple backend operations.',
      example: 'Tracing a user query through embedding generation, vector search, LLM completion, and tool invocation, correlating all operations with a single trace ID.'
    },
    'Trace Correlation': {
      definition: 'Mechanism associating related API calls through common identifiers enabling reconstruction of complete request flows from disparate operations.',
      example: 'Using trace IDs to link 5 separate API calls (embedding, search, completion, tool call, response) that all serve a single user request.'
    },
    'Trace ID': {
      definition: 'Unique identifier propagated across operation boundaries linking related operations serving common user requests.',
      example: 'A trace ID "abc-123" propagated through all API calls for a single user interaction, enabling complete request flow reconstruction.'
    },
    'Request Interception': {
      definition: 'Mechanism capturing API calls routing through observability platforms before reaching destination services, enabling transparent logging without application code modifications.',
      example: 'An observability gateway intercepting all LLM API calls, automatically logging metadata without requiring changes to application code.'
    },
    'Metadata Extraction': {
      definition: 'Process capturing comprehensive operation characteristics including timestamps, model identifiers, costs, latencies, request payloads, and response payloads.',
      example: 'Extracting metadata showing a completion call used GPT-4, consumed 2,500 tokens, cost $0.05, and took 1.2 seconds, all automatically captured.'
    },
    'Persistence Mechanisms': {
      definition: 'Store logged data enabling historical analysis, trend identification, and compliance documentation.',
      example: 'Storing trace data in a time-series database, enabling queries to analyze request patterns over the past 30 days.'
    },
    'Trace Visualization': {
      definition: 'Presents correlated operations in coherent views revealing execution sequences, timing relationships, and data flow across operations.',
      example: 'A timeline visualization showing embedding (50ms), search (200ms), completion (1200ms), and tool call (300ms) in sequence with timing relationships.'
    },
    'User Feedback Association': {
      definition: 'Correlating subjective quality assessments with objective trace data, enabling identification of interaction patterns associated with positive or negative user experiences.',
      example: 'Associating a user satisfaction rating of 2/5 with a trace showing high latency (5s) and multiple retries, identifying performance as the issue.'
    },
    'Response Caching': {
      definition: 'Eliminates redundant API calls by serving previously computed responses for identical or similar requests.',
      example: 'Caching a response to "What is the weather?" and serving it immediately for identical subsequent requests, reducing latency from 2s to 10ms.'
    },
    'Exact Matching': {
      definition: 'Identifies requests identical to previous invocations through precise comparison of request parameters including prompts, model selections, and configuration settings.',
      example: 'An exact cache match for a request with identical prompt, model (GPT-4), and temperature (0.7), serving cached response instantly.'
    },
    'Semantic Similarity Matching': {
      definition: 'Identifies requests conveying similar meaning despite textual differences through embedding-based comparison.',
      example: 'Matching "What\'s the weather like?" with cached "How is the weather today?" using semantic similarity, serving cached response despite different wording.'
    },
    'Cache Invalidation': {
      definition: 'Strategies determining when cached responses become stale requiring refresh, including time-based expiration, explicit invalidation, and usage-based eviction.',
      example: 'Invalidating weather cache entries after 1 hour, ensuring responses reflect current conditions rather than stale data.'
    },
    'Automatic Retry': {
      definition: 'Capability handling transient failures through configurable re-execution policies with exponential backoff strategies.',
      example: 'Automatically retrying a failed API call with delays of 1s, 2s, 4s, and 8s, successfully recovering from a transient network error on the third attempt.'
    },
    'Exponential Backoff': {
      definition: 'Strategy spacing retry attempts with progressively increasing delays preventing overwhelming services experiencing difficulties.',
      example: 'Retrying a failed request with delays: 1s, 2s, 4s, 8s, 16s, preventing retry storms while allowing service recovery.'
    },
    'Retry Attempt Limits': {
      definition: 'Prevents infinite retry loops wasting resources on fundamentally unrecoverable failures.',
      example: 'Limiting retries to 5 attempts, after which permanent failures are surfaced rather than continuing indefinitely.'
    },
    'Failure Classification': {
      definition: 'Distinguishes transient issues suitable for retry from permanent failures requiring different handling.',
      example: 'Classifying network timeouts as transient (retry) and authentication errors as permanent (no retry), ensuring appropriate handling.'
    },
    'Tag Mechanisms': {
      definition: 'Attach custom metadata to operations enabling flexible categorization, filtering, and analysis.',
      example: 'Tagging requests with user_id, feature_flag, and experiment_group, enabling analysis by user segment and A/B test evaluation.'
    },
    'Gateway Integration': {
      definition: 'Routes API traffic through observability platforms providing interception points for logging, tracing, caching, and retry handling.',
      example: 'Routing all LLM API calls through an observability gateway, centralizing logging and tracing without modifying individual applications.'
    },
    'Header Propagation': {
      definition: 'Transmits observability metadata including trace identifiers, cache directives, and retry policies through HTTP headers attached to API requests.',
      example: 'Propagating trace ID through X-Trace-ID header, enabling correlation across service boundaries in distributed systems.'
    }
  },
  '8-run-monitor-maintain/3-Time-Weighted-Retriever': {
    'Time-Weighted Retrieval': {
      definition: 'Enhancement to semantic similarity search incorporating temporal recency factors into document ranking algorithms.',
      example: 'A retrieval system ranking documents by combining semantic similarity (80%) with temporal recency (20%), favoring recently accessed relevant documents.'
    },
    'Temporal Decay': {
      definition: 'Function diminishing relevance of documents based on time since last access, integrating temporal factors with semantic similarity.',
      example: 'Applying exponential decay reducing document relevance by 10% per hour since last access, ensuring recent documents rank higher.'
    },
    'Access-Based Tracking': {
      definition: 'Measuring recency from last retrieval rather than document origin, maintaining temporal freshness for frequently accessed documents.',
      example: 'A document created 6 months ago but accessed yesterday maintains high temporal relevance, while a document created yesterday but never accessed has low relevance.'
    },
    'Exponential Decay': {
      definition: 'Implementation applying decay rate raised to power of elapsed time measured in hours since last document access, creating smooth continuous decay.',
      example: 'Using decay rate of 0.9, a document accessed 5 hours ago has relevance score of 0.9^5 = 0.59, while one accessed 1 hour ago has 0.9.'
    },
    'Decay Rate Parameterization': {
      definition: 'Determines temporal weighting strength through decimal values between zero and one controlling decay aggressiveness.',
      example: 'Setting decay rate to 0.95 for minimal temporal influence (preserves relevance longer) or 0.5 for aggressive decay (strong recency bias).'
    },
    'Combined Scoring': {
      definition: 'Integrates semantic similarity from vector comparison with temporal relevance from decay calculation producing unified relevance scores.',
      example: 'Combining semantic similarity score of 0.8 with temporal decay factor of 0.7, producing final relevance score of 0.75.'
    },
    'Last Access Timestamps': {
      definition: 'Record most recent retrieval time for each document, enabling temporal scoring requiring access to historical usage patterns.',
      example: 'Storing timestamp "2024-01-15 14:30:00" for a document, enabling calculation of hours since last access for temporal scoring.'
    },
    'Automatic Timestamp Updates': {
      definition: 'Occur transparently during retrieval operations maintaining accurate access time records without explicit application intervention.',
      example: 'A retrieval operation automatically updating document access timestamp before returning results, ensuring temporal tracking accuracy.'
    },
    'Conversational Memory Systems': {
      definition: 'Leverage time-weighted retrieval for maintaining awareness of recent discussion context while gradually forgetting distant interactions.',
      example: 'A conversational agent using time-weighted retrieval to prioritize recent conversation turns, maintaining context while preventing old information from confusing responses.'
    },
    'Session-Based Retrieval': {
      definition: 'Emphasizes information accessed during current sessions while de-emphasizing previous session content.',
      example: 'A retrieval system resetting temporal scores at session boundaries, ensuring new sessions start with equal document relevance before access patterns create differentiation.'
    },
    'Trending Content Identification': {
      definition: 'Leverages access pattern tracking revealing currently popular documents through temporal freshness accumulation.',
      example: 'Documents receiving sustained access maintain high temporal scores, enabling identification of trending topics without explicit popularity tracking.'
    },
    'Cache-Like Behavior': {
      definition: 'Approximates least-recently-used caching policies through aggressive temporal decay, with frequently accessed documents remaining easily retrievable.',
      example: 'Using aggressive decay rate (0.3), frequently accessed documents maintain high relevance while unused documents decay toward irretrievability, mimicking cache eviction.'
    }
  },
  '8-run-monitor-maintain/4-Troubleshooting': {
    'TensorRT-LLM Debugging': {
      definition: 'Comprehensive methodology for identifying, diagnosing, and resolving issues arising during compilation, model building, execution, and deployment of optimized large language model inference engines.',
      example: 'Debugging a TensorRT-LLM engine that fails to build, identifying that tensor shape specifications are incompatible with optimization profiles.'
    },
    'Intermediate Tensor Inspection': {
      definition: 'Enables examining computation results at arbitrary points within model execution rather than observing only final outputs.',
      example: 'Registering intermediate attention outputs as network outputs, enabling inspection of attention weights during debugging to validate computation correctness.'
    },
    'Network Output Registration': {
      definition: 'Designates specific tensors for external visibility despite their intermediate position in computation graphs.',
      example: 'Registering layer 5 output tensor as a network output, making it accessible during execution for debugging intermediate computation states.'
    },
    'Value Extraction': {
      definition: 'Retrieves registered tensor values during execution enabling examination through standard debugging tools or custom analysis code.',
      example: 'Extracting intermediate tensor values during inference, comparing them against expected values to identify where computation diverges from expectations.'
    },
    'Debug Mode Execution': {
      definition: 'Enables detailed logging and tensor extraction during inference runs, incurring performance overhead but providing comprehensive visibility.',
      example: 'Running inference in debug mode, capturing detailed execution traces and intermediate tensor values for analysis, at cost of 2x slower execution.'
    },
    'Plugin Synchronization': {
      definition: 'Synchronous execution mode forces immediate error detection by blocking until each kernel completes and checking return status before proceeding.',
      example: 'Enabling synchronous execution to detect plugin errors immediately at failure points rather than manifesting later when causality becomes obscure.'
    },
    'Shape Validation': {
      definition: 'Detects mismatches between actual tensor shapes and build-time specifications preventing execution with incompatible configurations.',
      example: 'Validating that runtime input shape [32, 512] matches build-time specification, detecting and reporting shape mismatch before execution.'
    },
    'Configuration Consistency Verification': {
      definition: 'Ensures execution environment matches build-time assumptions including model configurations, optimization settings, and resource allocations.',
      example: 'Verifying that execution uses same precision (FP16) and batch size (8) as build-time configuration, preventing subtle correctness issues.'
    },
    'Optimization Profile Information': {
      definition: 'Displays allowable tensor shape ranges for dynamic dimensions enabling verification that runtime shapes fall within acceptable bounds.',
      example: 'Inspecting optimization profile showing batch size range 1-32 and sequence length range 128-2048, validating runtime inputs fall within these bounds.'
    },
    'Runtime Shape Tables': {
      definition: 'Present actual tensor shapes for each execution enabling comparison against expected values and identification of shape mismatches.',
      example: 'A runtime shape table showing actual batch size of 16 and sequence length of 1024, enabling validation against optimization profile constraints.'
    },
    'Resource Exhaustion': {
      definition: 'Issues arise when memory requirements exceed available capacity from oversized models, excessive batch sizes, or long sequence lengths.',
      example: 'Diagnosing out-of-memory error by identifying that batch size 32 with sequence length 4096 exceeds available GPU memory, requiring reduction to batch size 16.'
    },
    'Plugin Configuration': {
      definition: 'Enables specialized implementations offering better memory efficiency or computational performance compared to default operations.',
      example: 'Configuring a custom attention plugin that reduces memory consumption by 40% compared to default implementation, enabling larger batch sizes.'
    },
    'Batch Size Optimization': {
      definition: 'Balances throughput benefits from processing multiple requests simultaneously against memory costs from maintaining state for concurrent sequences.',
      example: 'Optimizing batch size from 32 to 16 to fit within memory constraints, trading 20% throughput reduction for successful execution.'
    },
    'Sequence Length Constraints': {
      definition: 'Limit maximum input and output sizes determining memory requirements for key-value caches, intermediate activations, and output buffers.',
      example: 'Constraining sequence length to 2048 tokens to fit within GPU memory, enabling batch size of 8 while longer sequences would require smaller batches.'
    },
    'Multi-GPU Coordination': {
      definition: 'Ensures proper setup for distributed execution across multiple GPUs requiring coordinated computation and data exchange.',
      example: 'Configuring MPI environment for 4-GPU execution, ensuring proper shared memory allocation and network setup for inter-GPU communication.'
    },
    'Clean Rebuild': {
      definition: 'Eliminates stale build artifacts through complete removal of build directories before recompilation, ensuring consistent build state.',
      example: 'Performing clean rebuild by removing build directory, eliminating state inconsistencies causing compilation failures.'
    }
  },
  '8-run-monitor-maintain/5-Langchain-Tracing': {
    'LangChain': {
      definition: 'Open-source framework providing pre-built agent architectures and model integrations enabling rapid development of autonomous applications powered by large language models.',
      example: 'Using LangChain to build a customer service agent with pre-built conversational architecture, tool integration, and model provider abstraction.'
    },
    'LangGraph': {
      definition: 'Low-level orchestration framework providing capabilities including durable execution, streaming support, human-in-the-loop integration, and persistence mechanisms.',
      example: 'Building a complex agent workflow using LangGraph for state management, conditional logic, and multi-step execution coordination.'
    },
    'Durable Execution': {
      definition: 'Ensures agents survive process interruptions through automatic state persistence and resumption.',
      example: 'An agent workflow automatically resuming from checkpoint after server restart, continuing long-running task without losing progress.'
    },
    'Streaming Support': {
      definition: 'Enables incremental response delivery as generation progresses rather than waiting for complete outputs.',
      example: 'Streaming agent responses token-by-token to users, improving perceived responsiveness for long-form generation tasks.'
    },
    'Human-in-the-Loop Integration': {
      definition: 'Enables approval workflows where execution pauses for user input before proceeding.',
      example: 'An agent pausing before executing a financial transaction, requesting user approval and resuming after confirmation.'
    },
    'Persistence Mechanisms': {
      definition: 'Maintain agent state across sessions enabling conversation continuity, task resumption after interruptions, or historical context retention.',
      example: 'Storing agent conversation history in a database, enabling context retention across multiple user sessions.'
    },
    'Provider Abstraction': {
      definition: 'Standardizes interactions with diverse LLM providers through unified interfaces hiding provider-specific API differences.',
      example: 'Switching from OpenAI to Anthropic models by changing configuration, without modifying agent code due to provider abstraction.'
    },
    'Response Normalization': {
      definition: 'Ensures consistent output structures despite provider variations in response formats, metadata inclusion, or streaming protocols.',
      example: 'Normalizing responses from different providers into uniform format, enabling consistent processing regardless of underlying model.'
    },
    'Model Capability Discovery': {
      definition: 'Enables applications to query supported features, constraints, and characteristics before invocation.',
      example: 'Querying model capabilities to determine maximum context length (32K tokens) before constructing prompts, preventing truncation errors.'
    },
    'Function Definition Mechanisms': {
      definition: 'Specify callable tools through decorators or explicit schema declarations, including function signatures, documentation, and validation rules.',
      example: 'Defining a database query tool with @tool decorator, specifying parameters (query: str) and return type (List[Dict]), enabling automatic schema generation.'
    },
    'Schema Generation': {
      definition: 'Automatically produces structured descriptions of tool capabilities consumable by language models.',
      example: 'Automatically generating JSON schema describing tool parameters and return types, enabling models to understand and invoke tools correctly.'
    },
    'Execution Coordination': {
      definition: 'Manages tool invocations including parameter extraction from model outputs, function calling with appropriate arguments, result formatting, and error handling.',
      example: 'Coordinating tool execution by extracting parameters from model output, calling function with correct arguments, and formatting results for model consumption.'
    },
    'System Prompt Configuration': {
      definition: 'Establishes agent behavior, constraints, and objectives through instructions included with every model invocation.',
      example: 'Configuring system prompt defining agent role as "helpful customer service assistant" with constraints on providing financial advice.'
    },
    'Message Formatting': {
      definition: 'Structures conversation history, tool results, and system instructions into formats consumable by language models.',
      example: 'Formatting messages with role labels (system, user, assistant) and content, ensuring proper model interpretation across different providers.'
    },
    'Context Management': {
      definition: 'Determines what information propagates through multi-step agent execution including conversation history, intermediate results, and state information.',
      example: 'Managing context by retaining last 10 conversation turns while summarizing older history, balancing context richness against token consumption.'
    },
    'Execution Tracing': {
      definition: 'Captures detailed records of agent execution including model invocations, tool calls, decision points, and state transitions.',
      example: 'Tracing agent execution showing: model invocation (500ms), tool selection (database_query), tool execution (200ms), and response generation (300ms).'
    },
    'State Visualization': {
      definition: 'Presents agent internal state throughout execution revealing context evolution, intermediate results, and decision factors.',
      example: 'Visualizing agent state showing current conversation context, available tools, and decision factors influencing tool selection.'
    },
    'Performance Metrics': {
      definition: 'Quantifies execution characteristics including latency breakdowns across components, token consumption tracking costs, and throughput measurements.',
      example: 'Tracking metrics showing total latency 2s (model: 1.2s, tool: 0.5s, overhead: 0.3s) with 3,500 tokens consumed at $0.007 cost.'
    }
  },
  '8-run-monitor-maintain/6-LangChain-structured-outputs': {
    'Structured Outputs': {
      definition: 'LangChain capability enabling models to generate responses conforming to specified schemas, ensuring consistent formats and enabling programmatic processing.',
      example: 'Configuring an agent to return customer information as structured JSON with fields (name, email, phone), ensuring consistent output format.'
    },
    'Schema Definition': {
      definition: 'Specifies expected output structure including field names, types, constraints, and validation rules.',
      example: 'Defining schema for product information with fields: name (string, required), price (float, min: 0), in_stock (boolean).'
    },
    'Output Validation': {
      definition: 'Ensures generated outputs conform to specified schemas, catching format errors and ensuring data quality.',
      example: 'Validating that model output matches schema, rejecting responses missing required fields or containing invalid types.'
    },
    'Type Safety': {
      definition: 'Guarantees output types match schema specifications, enabling type-safe processing in downstream applications.',
      example: 'Ensuring price field is always a float, preventing string "99.99" from causing type errors in downstream calculations.'
    },
    'Constraint Enforcement': {
      definition: 'Applies schema constraints including value ranges, required fields, and format specifications to model outputs.',
      example: 'Enforcing that age field must be between 0 and 150, rejecting invalid values and requesting correction from model.'
    }
  },
  '8-run-monitor-maintain/7-Smith-Langchain-eval': {
    'LangSmith Evaluation': {
      definition: 'Comprehensive evaluation framework for LangChain applications providing systematic assessment of agent performance, quality, and behavior.',
      example: 'Using LangSmith to evaluate a customer service agent across 500 test cases, measuring accuracy, latency, and cost metrics.'
    },
    'Evaluation Dataset': {
      definition: 'Carefully curated collection of test cases for rigorous testing, including inputs, expected outputs, and evaluation criteria.',
      example: 'Creating evaluation dataset with 200 customer service scenarios, each with input query, expected response type, and quality criteria.'
    },
    'Automated Evaluation': {
      definition: 'Systematic assessment using predefined metrics and criteria, enabling rapid evaluation across large test sets.',
      example: 'Automatically evaluating 1000 agent responses for accuracy using LLM judges, measuring 92% correctness rate.'
    },
    'Human Evaluation': {
      definition: 'Incorporates domain expert assessment for scenarios requiring subjective judgment or expertise beyond automated metric capabilities.',
      example: 'Human evaluators assessing 50 complex customer service interactions for empathy and appropriateness, providing nuanced quality assessment.'
    },
    'Comparative Evaluation': {
      definition: 'Compares multiple agent configurations or versions to identify optimal approaches.',
      example: 'Comparing agent performance with different system prompts, identifying configuration achieving 15% higher accuracy.'
    },
    'Regression Detection': {
      definition: 'Identifies quality degradation from changes through comparative evaluation across system versions.',
      example: 'Detecting that agent accuracy dropped from 95% to 88% after a code change, triggering investigation and rollback.'
    }
  },
  '8-run-monitor-maintain/8-Monitoring-ML-production': {
    'Machine Learning Model Monitoring': {
      definition: 'Systematic tracking and analysis of deployed model behavior ensuring continued performance alignment with expectations despite dynamic real-world conditions.',
      example: 'Monitoring a fraud detection model, tracking accuracy metrics, detecting data drift, and alerting when performance degrades below 95% threshold.'
    },
    'Functional Monitoring': {
      definition: 'Encompasses model-centric aspects determining prediction quality and statistical properties ensuring models perform intended functions accurately.',
      example: 'Monitoring model accuracy, precision, recall, and F1 score to ensure fraud detection model maintains acceptable performance levels.'
    },
    'Operational Monitoring': {
      definition: 'Addresses infrastructure and system-level concerns ensuring reliable service delivery maintaining system health, availability, and performance.',
      example: 'Monitoring API latency, throughput, error rates, and resource utilization to ensure fraud detection service meets availability requirements.'
    },
    'Data Quality Validation': {
      definition: 'Ensures production data maintains expected characteristics before reaching models preventing garbage-in-garbage-out scenarios.',
      example: 'Validating that input features have correct types, fall within expected ranges, and contain no missing values before model inference.'
    },
    'Data Drift': {
      definition: 'Statistical distribution shifts between training data and production inputs revealing environment evolution potentially degrading model relevance.',
      example: 'Detecting that customer age distribution in production shifted from training data, with average age increasing from 35 to 42, potentially affecting model accuracy.'
    },
    'Model Drift': {
      definition: 'Degradation in predictive accuracy over time as learned patterns become outdated relative to current data distributions.',
      example: 'Model accuracy declining from 95% to 87% over 6 months as fraud patterns evolved, indicating need for retraining.'
    },
    'Schema Evolution Tracking': {
      definition: 'Monitors structural changes in input data potentially breaking model expectations.',
      example: 'Detecting that a new field was added to input data, requiring model compatibility verification to prevent runtime failures.'
    },
    'Feature Engineering Consistency': {
      definition: 'Validates transformations applied to raw inputs match training-time processing, preventing train-serve skew.',
      example: 'Verifying that feature normalization uses same mean and standard deviation as training, preventing distribution mismatches.'
    },
    'Version Tracking': {
      definition: 'Ensures correct model artifacts execute in production preventing deployment errors and enabling rollback when issues arise.',
      example: 'Tracking model version v2.3.1 in production, enabling rollback to v2.2.5 if performance issues are detected.'
    },
    'Prediction Confidence Monitoring': {
      definition: 'Tracks model certainty in outputs revealing when models encounter unfamiliar scenarios.',
      example: 'Monitoring that 5% of predictions have confidence below 0.7, triggering human review for low-confidence cases.'
    },
    'A/B Testing Infrastructure': {
      definition: 'Enables comparing alternative models in production measuring relative performance under real workload conditions.',
      example: 'Running A/B test with 50% traffic to new model version, measuring that new version achieves 3% higher accuracy.'
    },
    'Ground Truth Acquisition': {
      definition: 'Enables direct performance measurement when actual outcomes become available enabling accurate quality assessment.',
      example: 'Acquiring ground truth labels for fraud predictions after 30 days, enabling calculation of actual accuracy and false positive rates.'
    },
    'Prediction Drift Tracking': {
      definition: 'Monitors output distribution shifts potentially indicating model issues even without ground truth.',
      example: 'Detecting that fraud prediction rate increased from 2% to 5%, suggesting potential model degradation or data shift.'
    },
    'Output Validation': {
      definition: 'Ensures predictions fall within expected ranges preventing obviously incorrect outputs from reaching downstream systems.',
      example: 'Validating that predicted probabilities are between 0 and 1, and predicted classes are from allowed set, preventing invalid outputs.'
    },
    'Resource Utilization Tracking': {
      definition: 'Monitors computational resources ensuring adequate capacity and identifying efficiency opportunities.',
      example: 'Tracking GPU utilization at 85%, CPU at 60%, and memory at 70%, identifying that GPU is bottleneck and additional GPUs may improve throughput.'
    },
    'Latency Measurement': {
      definition: 'Quantifies request processing time from arrival through response delivery.',
      example: 'Measuring latency showing average 50ms, median 45ms, and 95th percentile 120ms, with breakdown showing model inference (40ms) and overhead (10ms).'
    },
    'Throughput Monitoring': {
      definition: 'Tracks request processing rates ensuring systems handle expected load volumes.',
      example: 'Monitoring throughput at 1000 requests/second, with capacity planning indicating need for scaling when traffic exceeds 1500 req/s.'
    },
    'Availability Tracking': {
      definition: 'Measures service uptime and reliability through health checks, error rates, and successful request proportions.',
      example: 'Tracking 99.9% availability with 0.1% downtime from 2 incidents, meeting SLA requirement of 99.5%.'
    },
    'Data Pipeline Monitoring': {
      definition: 'Ensures reliable data flow from sources through transformation stages to model consumption.',
      example: 'Monitoring data pipeline showing 99.5% success rate, with failures primarily from upstream source unavailability.'
    },
    'Cost Tracking': {
      definition: 'Quantifies expenses from computational resources, storage, and networking, enabling cost optimization.',
      example: 'Tracking infrastructure costs at $500/day, with analysis showing 60% from GPU compute and 40% from data storage.'
    },
    'Real-Time Alerting': {
      definition: 'Notifies stakeholders when monitored metrics exceed thresholds or exhibit anomalous patterns.',
      example: 'Alerting when model accuracy drops below 90% threshold, triggering investigation and potential model retraining.'
    },
    'Dashboard Visualization': {
      definition: 'Presents monitoring data through graphical interfaces enabling rapid comprehension of system state.',
      example: 'A dashboard displaying real-time metrics: accuracy (92%), latency (50ms), throughput (1000 req/s), and error rate (0.5%).'
    }
  }
};
