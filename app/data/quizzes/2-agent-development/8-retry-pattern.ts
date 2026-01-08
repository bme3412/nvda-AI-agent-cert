import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What characterizes transient faults that the Retry pattern is designed to handle?',
    options: [
      'Permanent hardware failures requiring replacement',
      'Self-correcting issues expected to resolve after brief delays',
      'Security vulnerabilities in application authentication',
      'Performance bottlenecks caused by inefficient algorithms'
    ],
    correctAnswer: 1,
    explanation: 'Transient faults are typically self-correcting issues including momentary loss of network connectivity, temporary service unavailability, or timeouts when services are busy. If the action that triggered a fault is repeated after a suitable delay, it\'s likely to succeed. These differ from permanent failures, security issues, or fundamental performance problems. Understanding this characteristic is crucial because the Retry pattern is specifically designed for temporary, recoverable failures rather than persistent problems.'
  },
  {
    id: 'q2',
    question: 'When should an application cancel an operation rather than retry it?',
    options: [
      'After any single failure regardless of type',
      'When the fault indicates it\'s not transient or unlikely to succeed',
      'Whenever the operation takes longer than one second',
      'Only during scheduled system maintenance windows'
    ],
    correctAnswer: 1,
    explanation: 'An application should cancel the operation and report an exception when the fault indicates the failure isn\'t transient or is unlikely to be successful if repeated. Not all failures warrant retries—some indicate fundamental problems that won\'t resolve with time. Continuing to retry in these situations wastes resources and delays proper error handling. The application should distinguish between transient faults (suitable for retry) and persistent failures (requiring different handling like cancellation or alternative approaches).'
  },
  {
    id: 'q3',
    question: 'What situation makes an immediate retry (without delay) the most appropriate strategy?',
    options: [
      'When the service explicitly requests aggressive retry behavior',
      'For all database connection failures regardless of cause',
      'When faults are unusual, like corrupted network packets',
      'Only when the application is in a low-traffic period'
    ],
    correctAnswer: 2,
    explanation: 'Immediate retry is appropriate when the specific fault is unusual or rare, such as a network packet becoming corrupted during transmission. In these cases, the issue is likely resolved by the time the next request is assembled and sent. However, immediate retry should be used sparingly—for most common connectivity or busy failures, a delay is more appropriate. Using immediate retry for common failures can overwhelm recovering services and prevent them from stabilizing.'
  },
  {
    id: 'q4',
    question: 'Why should delays between retry attempts be programmatically varied across multiple application instances?',
    options: [
      'To comply with regulatory requirements for distributed systems',
      'To reduce the chance of overwhelming recovering services',
      'To make the system behavior unpredictable for security',
      'To minimize total storage space required for logs'
    ],
    correctAnswer: 1,
    explanation: 'When multiple instances of an application fail simultaneously, spreading retry attempts helps prevent them all from hitting the recovering service at the same time. If all instances retry after exactly the same delay, they create synchronized traffic spikes that can overwhelm the service. By varying delays (often using randomization or jitter), retry attempts are distributed over time, giving the service better chances to recover and handle requests successfully. This is similar to randomization in retry strategies.'
  },
  {
    id: 'q5',
    question: 'How should early retry failures be logged differently from final retry failures?',
    options: [
      'Early failures as informational; final failures as actual errors',
      'All failures should be logged with identical severity levels',
      'Early failures should never be logged to save space',
      'Only final failures should trigger any logging whatsoever'
    ],
    correctAnswer: 0,
    explanation: 'To avoid flooding operators with alerts for operations that ultimately succeed after retries, best practice is to log early failures as informational entries and only log the final retry failure as an actual error. This approach provides visibility into retry behavior without creating alert fatigue. Operators need to know when operations permanently fail but don\'t need immediate alerts for every transient failure that gets resolved through successful retries. This logging strategy balances observability with operational practicality.'
  },
  {
    id: 'q6',
    question: 'What is idempotency and why is it important for retry logic?',
    options: [
      'Idempotent operations produce the same result when repeated safely',
      'Idempotent systems always complete faster than non-idempotent ones',
      'Idempotency refers to the speed of retry attempts',
      'Idempotent operations never require any error handling'
    ],
    correctAnswer: 0,
    explanation: 'An idempotent operation can be executed multiple times without causing unintended side effects—repeating it produces the same result. This is crucial for retry logic because a service might receive a request, process it successfully, but fail to send a response. The retry logic would then resend the request. If the operation isn\'t idempotent (like charging a credit card), this could cause it to execute twice with unintended consequences. Designing operations to be idempotent makes retries inherently safe.'
  },
  {
    id: 'q7',
    question: 'What problem can aggressive retry policies create for busy services?',
    options: [
      'They improve performance but reduce security significantly',
      'They eliminate all transient faults automatically',
      'They can further degrade services running near capacity',
      'They require significantly more memory than passive policies'
    ],
    correctAnswer: 2,
    explanation: 'An aggressive retry policy with minimal delay between attempts and a large number of retries can further degrade a busy service running close to or at capacity. Instead of giving the service breathing room to recover, aggressive retries add more load, potentially creating a downward spiral. This could also affect application responsiveness if it\'s continually trying to perform failing operations. The retry policy should be tuned to match business requirements and the nature of failures, not simply maximize retry attempts.'
  },
  {
    id: 'q8',
    question: 'When implementing retry logic within a transaction, what is the key consideration?',
    options: [
      'Transactions should never use any retry mechanisms',
      'Fine-tune retry policy to maximize success and minimize rollbacks',
      'Always use the maximum possible number of retries',
      'Retry delays should match transaction timeout values exactly'
    ],
    correctAnswer: 1,
    explanation: 'When retrying operations that are part of a transaction, you must consider how retries affect overall transaction consistency. The retry policy should be fine-tuned to maximize the chance of success while reducing the need to undo all transaction steps. Failed retries in transactional contexts can leave the system in inconsistent states or require complex rollback procedures. Careful design ensures retries support rather than complicate transactional integrity.'
  },
  {
    id: 'q9',
    question: 'What issue can arise when tasks with retry policies invoke other tasks that also have retry policies?',
    options: [
      'The nested policies always cancel each other out',
      'Security vulnerabilities in the authentication layer',
      'Extra retry layers can add excessive processing delays',
      'Memory consumption decreases but CPU usage increases'
    ],
    correctAnswer: 2,
    explanation: 'When a task containing a retry policy invokes another task that also contains a retry policy, this extra layer of retries can add long delays to processing. For example, if each layer retries 3 times, you could get up to 9 total attempts. It might be better to configure the lower-level task to fail fast and report the failure reason, letting the higher-level task handle it based on its own policy. This prevents multiplicative retry effects and makes the system more predictable.'
  },
  {
    id: 'q10',
    question: 'According to the pattern, when is the Retry pattern NOT appropriate to use?',
    options: [
      'When interacting with any remote service or resource',
      'For handling internal exceptions from business logic errors',
      'Whenever applications communicate over networks',
      'When services might experience momentary unavailability'
    ],
    correctAnswer: 1,
    explanation: 'The Retry pattern is not appropriate for handling failures that aren\'t due to transient faults, such as internal exceptions caused by errors in the business logic of an application. These are logic errors or bugs that won\'t resolve by simply retrying—they require code fixes. The pattern is designed specifically for transient issues with external services and resources, not for masking programming errors or business logic failures. Using retries for non-transient issues wastes resources and delays proper error identification.'
  },
  {
    id: 'q11',
    question: 'What should an application do when a service is frequently unavailable or busy?',
    options: [
      'Increase retry attempts to ensure eventual success',
      'Reduce retry frequency and consider scaling the service',
      'Switch to immediate retries without any delays',
      'Disable all monitoring to reduce system overhead'
    ],
    correctAnswer: 1,
    explanation: 'If a service is frequently unavailable or busy, it often means the service has exhausted its resources. Rather than increasing retries (which adds more load), you should reduce the frequency of these faults by scaling out the service. For example, if a database is continually overloaded, partitioning and spreading the load across multiple servers might be beneficial. Persistent busy signals indicate capacity problems, not transient issues, requiring architectural solutions rather than more aggressive retry policies.'
  },
  {
    id: 'q12',
    question: 'How should retry policies differ between interactive web applications and batch applications?',
    options: [
      'Both should always use identical retry configurations',
      'Interactive apps need fewer retries; batch apps can retry more',
      'Batch applications should never implement any retry logic',
      'Interactive apps require longer delays between retry attempts'
    ],
    correctAnswer: 1,
    explanation: 'For interactive web applications accessing remote services, it\'s better to fail after a smaller number of retries with short delays, then display a message to users (like "please try again later"). Users won\'t tolerate long waits. For batch applications, it might be more appropriate to increase retry attempts with exponentially increasing delays since there\'s no user waiting for immediate feedback. The retry policy should match business requirements—user experience for interactive apps versus completion reliability for batch processes.'
  },
  {
    id: 'q13',
    question: 'Why is it important to adjust retry timing based on exception types?',
    options: [
      'Different exception types indicate varying failure durations',
      'Exception types have no relationship to retry strategies',
      'All exceptions should trigger identical retry behavior',
      'Only network exceptions should influence retry timing'
    ],
    correctAnswer: 0,
    explanation: 'Requests can fail for various reasons, raising different exceptions depending on the nature of the failure. Some exceptions indicate failures that can be resolved quickly, while others indicate longer-lasting issues. It\'s useful for the retry policy to adjust the time between retry attempts based on exception type. For example, a timeout might warrant a short retry delay, while a service unavailable error might need a longer delay. Understanding exception semantics enables more intelligent, context-appropriate retry strategies.'
  },
  {
    id: 'q14',
    question: 'What is the recommended approach before implementing custom retry logic?',
    options: [
      'Always write custom logic for complete control',
      'Use established frameworks like Polly or Resilience4j',
      'Avoid any retry mechanisms in production systems',
      'Only use retry logic provided by hardware vendors'
    ],
    correctAnswer: 1,
    explanation: 'Before writing custom retry logic, consider using general frameworks such as Polly for .NET or Resilience4j for Java. Many client libraries and cloud services now have built-in retry mechanisms with configurable parameters for maximum retries, delays, and other settings. These established frameworks have been tested extensively and handle edge cases that custom implementations might miss. They also provide consistency across applications and reduce development time while improving reliability.'
  },
  {
    id: 'q15',
    question: 'When should the Retry pattern be combined with the Circuit Breaker pattern?',
    options: [
      'After significant retries fail to prevent further attempts',
      'These patterns should never be combined under any circumstances',
      'Only when applications run in containerized environments',
      'Whenever the application uses more than three retry attempts'
    ],
    correctAnswer: 0,
    explanation: 'If a request still fails after a significant number of retries, it\'s better to prevent further requests going to the same resource and report a failure immediately—this is where the Circuit Breaker pattern becomes useful. The two patterns can work together: use the Retry pattern for handling expected transient faults, and when retries are exhausted or failures indicate longer-lasting issues, the Circuit Breaker prevents continued attempts. This combination provides both resilience for transient issues and protection against persistent failures.'
  }
];

