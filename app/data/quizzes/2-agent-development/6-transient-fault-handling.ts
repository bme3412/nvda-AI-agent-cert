import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What characterizes transient faults in distributed systems?',
    options: [
      'Security vulnerabilities that compromise authentication mechanisms',
      'Permanent hardware failures requiring physical replacement',
      'Temporary, self-correcting issues like connectivity loss',
      'Software bugs that persist across system restarts'
    ],
    correctAnswer: 2,
    explanation: 'Transient faults are temporary issues that are often self-correcting, including momentary loss of network connectivity, temporary service unavailability, and timeouts when services are busy. If the action is repeated after a suitable delay, it\'s likely to succeed. This distinguishes them from permanent failures or security issues. Understanding this characteristic is crucial for designing appropriate retry strategies, as transient faults don\'t require system replacement or physical intervention—they resolve on their own given time.'
  },
  {
    id: 'q2',
    question: 'Why are transient faults more common in cloud environments compared to traditional on-premises infrastructure?',
    options: [
      'On-premises systems use more reliable network protocols',
      'Cloud providers prioritize cost reduction over reliability',
      'On-premises hardware is always enterprise-grade quality',
      'Shared resources, throttling, and dynamic allocation'
    ],
    correctAnswer: 3,
    explanation: 'Cloud environments experience more transient faults due to several architectural characteristics: resources are shared among many tenants (subject to throttling), they use large numbers of commodity hardware units that are dynamically managed, and there are more infrastructure components between applications and services. Dynamic resource allocation and automatic recycling of failed units, while improving overall reliability, can temporarily cause connection issues. This isn\'t about hardware quality—cloud providers often offer higher overall availability through redundancy and automatic failover.'
  },
  {
    id: 'q3',
    question: 'What is the primary purpose of throttling in cloud services?',
    options: [
      'Protecting shared resources by limiting access under load',
      'Permanently blocking malicious client applications',
      'Reducing infrastructure operating costs significantly',
      'Encrypting communications between services and clients'
    ],
    correctAnswer: 0,
    explanation: 'Throttling protects shared resources by refusing connections when load reaches specific levels or maximum throughput rates are met. This allows processing of existing requests and maintains performance for all users sharing the resource. It helps maintain quality of service for neighbors and other tenants. Throttling is a temporary measure, not a permanent block, and is about resource management rather than cost reduction or security. Understanding throttling is important because it\'s a common cause of transient faults that should be handled with appropriate retry strategies.'
  },
  {
    id: 'q4',
    question: 'What is exponential back-off and when should it be used?',
    options: [
      'Randomly selecting intervals without systematic approach',
      'Retrying immediately after each failure without delay',
      'Waiting for fixed intervals between all retry attempts',
      'Increasing delays exponentially for background operations'
    ],
    correctAnswer: 3,
    explanation: 'Exponential back-off starts with a short wait before the first retry and exponentially increases time between subsequent retries (e.g., 3 seconds, 12 seconds, 30 seconds). This strategy is recommended for background operations because it gives systems time to recover without overwhelming them with rapid retry attempts. The exponentially increasing delays help prevent the "vicious circle" where aggressive retries prevent a service from recovering. This contrasts with immediate retries (appropriate for interactive operations) or regular intervals (same delay each time).'
  },
  {
    id: 'q5',
    question: 'When implementing retry logic, what makes determining appropriate retry intervals the most challenging aspect?',
    options: [
      'Converting time zones correctly across regions',
      'Ensuring compatibility with programming languages',
      'Calculating exact hardware specifications needed',
      'Balancing recovery time with resource consumption'
    ],
    correctAnswer: 3,
    explanation: 'Determining appropriate intervals is difficult because you must balance multiple factors: giving services enough time to recover, avoiding overwhelming resources with too-frequent retries, meeting user experience expectations (short waits for interactive operations), and staying within SLA requirements. Too short intervals might prevent service recovery; too long intervals degrade user experience. This balance varies by operation type, resource characteristics, and current conditions, making it context-dependent and challenging to optimize. It\'s not about technical calculations or language compatibility but about strategic timing decisions.'
  },
  {
    id: 'q6',
    question: 'What is the purpose of adding randomization to retry strategies?',
    options: [
      'Reducing total retry attempts needed across system',
      'Making behavior unpredictable for security purposes',
      'Meeting regulatory compliance for distributed systems',
      'Preventing synchronized retry attempts from clients'
    ],
    correctAnswer: 3,
    explanation: 'Randomization prevents multiple instances of clients from sending subsequent retry attempts at exactly the same time, which could overwhelm the recovering service with synchronized traffic spikes. For example, if many clients all fail simultaneously and retry after exactly 3 seconds, they\'ll all hit the service again at once. By introducing randomness (e.g., 3-4 seconds instead of exactly 3), retry attempts are spread out over time. This "jitter" helps services recover more smoothly and can be combined with other strategies like exponential back-off.'
  },
  {
    id: 'q7',
    question: 'According to best practices, how should you approach operations that are not idempotent when implementing retry logic?',
    options: [
      'Only retry them during scheduled maintenance windows',
      'Always retry multiple times to ensure completion',
      'Design operations as idempotent or handle inconsistencies',
      'Never implement retry mechanisms for such operations'
    ],
    correctAnswer: 2,
    explanation: 'Non-idempotent operations (where repeating them produces different results) can cause data inconsistencies when retried. For example, an operation that increments a value produces invalid results if repeated, or sending a message to a queue might create duplicates if retried. Best practice is to design each step as an idempotent operation when possible. When that\'s not feasible, you must carefully consider the scope of retries, implement duplicate detection, or use compensating transactions. Simply avoiding retries altogether isn\'t practical, but neither is blindly retrying without considering consequences.'
  },
  {
    id: 'q8',
    question: 'What antipattern should be avoided when implementing retry mechanisms in distributed systems?',
    options: [
      'Testing strategies under various load conditions',
      'Logging all retry attempts for monitoring purposes',
      'Using exponential back-off for background operations',
      'Creating cascading retries without tracking total attempts'
    ],
    correctAnswer: 3,
    explanation: 'Cascading retry mechanisms create multiplicative effects—if one component retries 3 times and calls another that also retries 3 times, you get 9 total attempts against the target service. This antipattern can overwhelm services and make recovery impossible. The document explicitly warns against duplicated layers of retry code and cascading mechanisms unless you have specific requirements and understand the consequences. Most services have built-in retry mechanisms, and adding multiple retry layers without coordination can prevent service recovery and violate SLAs.'
  },
  {
    id: 'q9',
    question: 'How should transient faults be logged differently from actual application errors?',
    options: [
      'Store them in completely separate database systems',
      'Always log as critical errors requiring attention',
      'Avoid logging them to reduce storage costs',
      'Log as warnings to prevent false monitoring alerts'
    ],
    correctAnswer: 3,
    explanation: 'Transient faults should be logged as warning entries rather than errors because they\'re expected, normal occurrences that don\'t indicate actual problems. Logging them as errors would cause monitoring systems to detect them as application failures and trigger false alerts. However, you still want to track them because regular and increasing numbers of retries might indicate actual problems. The log entries should also differentiate between types of faults (throttling vs. connection failures) to enable proper analysis and trend detection without overwhelming operations teams with false alarms.'
  },
  {
    id: 'q10',
    question: 'What is the Circuit Breaker pattern designed to prevent?',
    options: [
      'Memory leaks in applications running continuously',
      'Data corruption during network transmission events',
      'Unauthorized access to protected system resources',
      'Repeated retries against persistently failing operations'
    ],
    correctAnswer: 3,
    explanation: 'The Circuit Breaker pattern prevents endless retry attempts against consistently failing operations. When failures within a specified time window exceed a threshold, the circuit "opens" and requests immediately return errors without attempting to access the failed service. This prevents the application from wasting resources on operations that will fail anyway. The circuit periodically tests if the service has recovered (with long intervals between tests), and when successful, resumes normal operations. This is crucial for handling situations where a service experiences permanent or long-lasting failures rather than transient ones.'
  },
  {
    id: 'q11',
    question: 'When should immediate retry (with minimal or no delay) be considered appropriate?',
    options: [
      'Only during scheduled system maintenance windows',
      'When services explicitly request aggressive behavior',
      'Brief faults like network packet collisions',
      'For all operations regardless of fault type'
    ],
    correctAnswer: 2,
    explanation: 'Immediate retry is appropriate when transient faults are very brief—potentially caused by events like network packet collisions or momentary spikes in hardware components. The fault might clear in the time it takes to assemble and send the next request. However, there should never be more than one immediate retry attempt; if that fails, you should switch to alternative strategies like exponential back-off. Using immediate retry for all situations or repeatedly is an antipattern that can prevent service recovery and create cascading failures.'
  },
  {
    id: 'q12',
    question: 'What critical factor must be considered when choosing retry counts and intervals for user-facing operations?',
    options: [
      'The programming language used for implementation',
      'Geographic location of hosting data centers',
      'Physical hardware specifications of client devices',
      'User expectations and maintaining perceived availability'
    ],
    correctAnswer: 3,
    explanation: 'For user-facing interactive operations, retry intervals should be short with only a few attempts to avoid making users wait for responses. Holding connections open affects availability for other users. The approach balances completing the operation against user experience—users won\'t tolerate long waits. This differs from background or critical workflows where longer waits and more retries are acceptable since they don\'t directly impact user interaction. The choice of intervals and counts must align with user expectations and overall system SLA requirements.'
  },
  {
    id: 'q13',
    question: 'Why is it important to consider the timeout values of operations when designing retry intervals?',
    options: [
      'Shorter timeouts always improve system performance',
      'Timeouts must match retry intervals exactly',
      'Timeouts should always exceed retry intervals',
      'To prevent launching retries before completion'
    ],
    correctAnswer: 3,
    explanation: 'You must consider operation timeouts when choosing retry intervals to avoid launching subsequent retry attempts immediately—for example, if the timeout period is similar to the retry interval. This could result in multiple concurrent attempts, wasting resources and potentially overwhelming the service. You also need to ensure the total possible period (timeout plus all retry intervals) stays within overall time requirements and SLAs. The relationship between timeouts and retry intervals affects the total operation time and resource consumption.'
  },
  {
    id: 'q14',
    question: 'What information might services provide to help clients implement effective retry strategies?',
    options: [
      'Direct access to service configuration files',
      'Guaranteed maximum response times for operations',
      'Complete access to internal service source code',
      'Error codes with transience indicators and delays'
    ],
    correctAnswer: 3,
    explanation: 'Well-designed services provide error codes, messages, or headers that help clients determine whether faults are transient and when to retry. For example, HTTP 503 (Service Unavailable) might include a Retry-After header indicating how long to wait. Services might return an "isTransient" flag or suggest suitable delays between attempts. Custom error codes defined in service contracts help clients make informed retry decisions. This is far more practical than exposing internal implementation details or guaranteeing response times, and it enables clients to adapt their retry behavior intelligently.'
  },
  {
    id: 'q15',
    question: 'How should retry policy configurations be managed in production applications?',
    options: [
      'Use different values for each instance',
      'Hard-code parameters directly into logic',
      'Require restarts for any parameter changes',
      'Store centrally in configuration files'
    ],
    correctAnswer: 3,
    explanation: 'Best practice is to store retry policy values (intervals, counts, etc.) in central configuration files that can be read at runtime and used to programmatically build retry policies. This makes it easier to manage settings, modify values in response to changing requirements, and fine-tune parameters without code changes. Rather than hard-coding values at multiple locations, centralizing configuration enables consistency across the application and faster adaptation to operational needs. The system should cache these values rather than rereading configuration constantly, and use suitable defaults if values can\'t be obtained.'
  }
];

