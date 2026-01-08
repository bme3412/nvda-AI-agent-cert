import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary purpose of the Circuit Breaker pattern?',
    options: [
      'To encrypt communications between distributed services',
      'To temporarily block access to failing services for recovery',
      'To permanently disable services that experience any failures',
      'To automatically scale resources based on traffic demand'
    ],
    correctAnswer: 1,
    explanation: 'The Circuit Breaker pattern temporarily blocks access to a faulty service after detecting failures, preventing repeated unsuccessful attempts so the system can recover effectively. This improves application stability and resiliency by stopping the cascade of failures. It\'s not about encryption, permanent disabling, or scaling—it\'s about giving failing services breathing room to recover while protecting the overall system from being overwhelmed by futile retry attempts.'
  },
  {
    id: 'q2',
    question: 'How does the Circuit Breaker pattern differ from the Retry pattern?',
    options: [
      'Circuit breakers work only with database connections',
      'Retry patterns handle authentication while breakers handle authorization',
      'Circuit breakers prevent likely failures; retries expect eventual success',
      'Retry patterns are faster but consume more memory resources'
    ],
    correctAnswer: 2,
    explanation: 'The Retry pattern enables applications to retry operations expecting they\'ll eventually succeed, while the Circuit Breaker pattern prevents operations that are likely to fail from executing. These patterns serve different purposes and can be combined—an application can use the Retry pattern to invoke operations through a circuit breaker. However, the retry logic should be sensitive to circuit breaker exceptions and stop attempts if the breaker indicates the fault isn\'t transient.'
  },
  {
    id: 'q3',
    question: 'In the Circuit Breaker pattern, what characterizes the "Closed" state?',
    options: [
      'All requests are immediately rejected without processing',
      'Requests proceed normally while monitoring failure counts',
      'Only a limited number of test requests are allowed',
      'The system enters a permanent shutdown mode'
    ],
    correctAnswer: 1,
    explanation: 'In the Closed state, requests from the application are routed to the operation normally. The proxy maintains a count of recent failures, and if unsuccessful calls exceed a specified threshold within a given time period, the circuit breaker transitions to the Open state. This is the normal operating state where the system functions as expected while continuously monitoring for problems. It\'s not about rejection or limited access—those describe other states.'
  },
  {
    id: 'q4',
    question: 'What happens in the "Open" state of a circuit breaker?',
    options: [
      'Requests fail immediately and exceptions return to callers',
      'The system begins a graceful shutdown of all services',
      'All monitoring and logging functionality is temporarily disabled',
      'Requests queue indefinitely waiting for service recovery'
    ],
    correctAnswer: 0,
    explanation: 'In the Open state, requests from the application fail immediately and an exception is returned to the application without attempting to invoke the failing operation. This prevents the system from wasting resources on operations that will likely fail and allows the protected service time to recover. A timeout timer runs during this period, and when it expires, the breaker moves to the Half-Open state to test if the service has recovered.'
  },
  {
    id: 'q5',
    question: 'What is the purpose of the "Half-Open" state?',
    options: [
      'To permanently disable half of all service instances',
      'To test recovery by allowing limited trial requests',
      'To gradually increase timeout periods for all requests',
      'To split traffic evenly between primary and backup services'
    ],
    correctAnswer: 1,
    explanation: 'The Half-Open state allows a limited number of requests to pass through and invoke the operation to test if the fault has been resolved. If these requests succeed, the circuit breaker assumes the problem is fixed and switches to the Closed state. If any request fails, it assumes the fault persists and reverts to the Open state, restarting the timeout timer. This state prevents a recovering service from being suddenly flooded with requests while testing if recovery is complete.'
  },
  {
    id: 'q6',
    question: 'Why is the failure counter in the Closed state time-based?',
    options: [
      'To comply with regulatory requirements for audit trails',
      'To prevent entering Open state from occasional failures',
      'To synchronize with external monitoring system timestamps',
      'To calculate exact service level agreement penalties'
    ],
    correctAnswer: 1,
    explanation: 'The time-based failure counter automatically resets at periodic intervals to prevent the circuit breaker from entering the Open state due to occasional, isolated failures. This design ensures that only sustained failure patterns trigger the Open state—when a specified number of failures occur during a specified interval. Without this time-based reset, a few scattered failures over a long period could incorrectly trigger the breaker, even if the service is generally healthy.'
  },
  {
    id: 'q7',
    question: 'What challenge does the Circuit Breaker pattern address regarding cascading failures?',
    options: [
      'Detecting malicious traffic patterns before they cause damage',
      'Preventing failure in one component from exhausting system resources',
      'Automatically backing up data before any failure occurs',
      'Encrypting communications to prevent data loss during failures'
    ],
    correctAnswer: 1,
    explanation: 'When a service is busy or failing, concurrent requests can block and hold critical system resources like memory, threads, and database connections until timeouts expire. This resource exhaustion can fail other unrelated parts of the system. The Circuit Breaker pattern addresses this by failing operations immediately when the service is known to be unavailable, preventing resource exhaustion and cascading failures across the system. It\'s about resource management, not security or data backup.'
  },
  {
    id: 'q8',
    question: 'According to the pattern, how should circuit breakers handle different exception types?',
    options: [
      'All exceptions should be treated identically for consistency',
      'Only network exceptions should trigger state transitions',
      'Examine exception severity and adjust strategy accordingly',
      'Exceptions should be logged but never influence state'
    ],
    correctAnswer: 2,
    explanation: 'The pattern recommends that circuit breakers examine the types of exceptions that occur and adjust strategy based on their nature. For example, it might require a larger number of timeout exceptions to trigger the Open state compared to failures caused by complete service unavailability. Different failure modes have different severities—a crashed service needing minutes to recover versus an overloaded service causing timeouts require different handling approaches.'
  },
  {
    id: 'q9',
    question: 'What is "accelerated circuit breaking" in the context of this pattern?',
    options: [
      'Using faster processors to reduce circuit breaker latency',
      'Immediately tripping based on specific error response information',
      'Gradually increasing the speed of retry attempts over time',
      'Distributing circuit breaker logic across multiple data centers'
    ],
    correctAnswer: 1,
    explanation: 'Accelerated circuit breaking occurs when a failure response contains enough information for the circuit breaker to trip immediately and stay tripped for a minimum time. For example, an error response from an overloaded shared resource might indicate the application should wait several minutes before retrying. The breaker can use this information to immediately enter the Open state without waiting to accumulate failures, making the system more responsive to known failure conditions.'
  },
  {
    id: 'q10',
    question: 'When is the Circuit Breaker pattern NOT suitable?',
    options: [
      'When protecting against slow dependencies affecting performance',
      'When managing local in-memory resources within an application',
      'When preventing cascading failures from remote service calls',
      'When routing traffic based on real-time failure signals'
    ],
    correctAnswer: 1,
    explanation: 'The Circuit Breaker pattern is not suitable for managing access to local private resources like in-memory data structures because it adds unnecessary overhead to the system. The pattern is designed for protecting against remote service calls and shared resources where network issues, service unavailability, and resource exhaustion are concerns. For local resources, simpler error handling is more appropriate since you don\'t face the same types of transient failures or cascading resource exhaustion.'
  },
  {
    id: 'q11',
    question: 'What role does monitoring play in circuit breaker implementations?',
    options: [
      'Monitoring is optional and only needed during initial deployment',
      'Providing observability into failures and successes for health assessment',
      'Automatically fixing detected issues without human intervention',
      'Reducing the number of requests that applications send'
    ],
    correctAnswer: 1,
    explanation: 'Monitoring is essential for circuit breakers to provide clear observability into both failed and successful requests, enabling operations teams to assess system health. The pattern recommends using distributed tracing for end-to-end visibility across services. Circuit breakers should raise events when changing states, helping monitor protected component health and alert administrators when entering the Open state. Good monitoring enables informed decisions about system capacity, failure patterns, and recovery effectiveness.'
  },
  {
    id: 'q12',
    question: 'Why might a circuit breaker need a manual override capability?',
    options: [
      'To allow administrators to force close or open states',
      'To enable users to retry failed operations themselves',
      'To automatically increase system capacity during peaks',
      'To switch between different circuit breaker algorithms'
    ],
    correctAnswer: 0,
    explanation: 'If recovery time for a failing operation is extremely variable, a manual reset option enables administrators to close a circuit breaker and reset the failure counter when they know the issue is resolved. Similarly, administrators can force a breaker into the Open state if the protected operation is temporarily unavailable for known reasons (like maintenance). This manual control provides operational flexibility when automatic mechanisms might not respond appropriately to specific situations.'
  },
  {
    id: 'q13',
    question: 'What consideration is important when using a single circuit breaker for resources with multiple providers?',
    options: [
      'Single breakers always provide better performance than multiple',
      'Resource differentiation prevents blocking healthy providers unnecessarily',
      'Multiple providers should never share the same breaker',
      'Provider count doesn\'t affect circuit breaker design decisions'
    ],
    correctAnswer: 1,
    explanation: 'When using a single circuit breaker for resources with multiple underlying independent providers (like database shards), you must be careful about resource differentiation. If one shard is problematic while others are healthy, merging error responses might cause the application to block access to healthy shards while attempting access to failing ones. This can reduce overall system availability unnecessarily. Careful design ensures healthy resources remain accessible even when others fail.'
  },
  {
    id: 'q14',
    question: 'How do adaptive circuit breakers differ from traditional implementations?',
    options: [
      'They require significantly more computational resources to operate',
      'They use AI to dynamically adjust thresholds based on patterns',
      'They only work with specific cloud provider implementations',
      'They eliminate the need for any configuration parameters'
    ],
    correctAnswer: 1,
    explanation: 'Traditional circuit breakers rely on preconfigured thresholds like failure count and timeout duration, resulting in deterministic but sometimes suboptimal behavior. Adaptive techniques use AI and machine learning to dynamically adjust thresholds based on real-time traffic patterns, anomalies, and historical failure rates. This approach improves resiliency and efficiency by responding to actual system behavior rather than static configurations, though it does introduce additional complexity.'
  },
  {
    id: 'q15',
    question: 'In the Azure Cosmos DB example, what happens when the circuit breaker enters the Open state?',
    options: [
      'The database is permanently shut down until manual restart',
      'All user requests are queued for later processing',
      'The application returns cached responses with degraded experience',
      'The system automatically provisions additional database capacity'
    ],
    correctAnswer: 2,
    explanation: 'When the circuit breaker receives a 429 (Too Many Requests) response and trips to the Open state, subsequent requests are immediately short-circuited, returning default or cached responses while informing users of temporary degradation. This protects the application from further overload while maintaining some level of service. The system doesn\'t shut down, queue indefinitely, or auto-scale—it gracefully degrades functionality using cached data until the issue resolves or administrators increase capacity.'
  }
];

