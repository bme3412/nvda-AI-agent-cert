import { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How does the document distinguish between scalability and adaptability in agent architecture?',
    options: [
      'Scalability handles more users while adaptability handles more complex queries',
      'Scalability is about handling increases across multiple dimensions (users, queries, data, tools) without architectural redesign, while adaptability is about incorporating new capabilities and changes without requiring rewrites',
      'Scalability focuses on horizontal scaling while adaptability focuses on vertical scaling',
      'Scalability is a technical concern while adaptability is a business concern'
    ],
    correctAnswer: 1,
    explanation: 'The document explains: "Scalability isn\'t just about handling more users, though that\'s part of it. It\'s about your system\'s ability to handle increases across multiple dimensions simultaneously—more users, more complex queries, more data to process, more tools to integrate, more concurrent tasks—without falling apart or requiring complete architectural redesign." And "Adaptability is about change resilience—your system\'s ability to incorporate new capabilities, integrate new tools, handle new types of queries, and adjust to evolving requirements without requiring rewrites."'
  },
  {
    id: 'q2',
    question: 'Why are stateless components critical for horizontal scalability?',
    options: [
      'Stateless components use less memory than stateful ones',
      'Stateless components process requests faster than stateful components',
      'Stateless components don\'t store information between calls, allowing any instance to handle any request, enabling simple load balancing across multiple copies',
      'Stateless components automatically cache results for better performance'
    ],
    correctAnswer: 2,
    explanation: 'The document states: "A stateless component doesn\'t store information about specific requests or users between calls—all the context it needs arrives with each request, it processes that request, returns results, and forgets everything about it... If your components are stateless, you can run ten copies of them behind a load balancer, and it doesn\'t matter which copy handles which request. User A\'s request might go to instance 3, their next request to instance 7, and their third request back to instance 3—the system works identically because no instance maintains state between requests."'
  },
  {
    id: 'q3',
    question: 'What is state externalization and why is it important for scalable agent systems?',
    options: [
      'Moving state out of processing components into specialized state management systems (databases, caches) so agent components remain stateless and can scale horizontally',
      'Encrypting sensitive state information before storing it in external systems',
      'Exposing internal state through APIs for external monitoring',
      'Eliminating all state from the system to achieve maximum performance'
    ],
    correctAnswer: 0,
    explanation: 'The document explains: "State externalization is how you handle necessary state in a scalable way. You don\'t eliminate state—that\'s impossible for complex agents that need memory and context—but you move it out of your processing components into specialized state management systems. User conversation history lives in a database, not in the agent process. Session context gets stored in Redis or similar caching systems... Your agent components remain stateless—they pull whatever state they need from external systems, process requests, update state in those systems, and forget everything."'
  },
  {
    id: 'q4',
    question: 'According to the document, what is the purpose of circuit breakers in distributed agent systems?',
    options: [
      'To automatically restart failed services and restore functionality',
      'To reduce electrical power consumption during peak usage',
      'To prevent cascading failures by detecting unhealthy services and stopping requests to them temporarily, then testing recovery',
      'To encrypt communication between different system components'
    ],
    correctAnswer: 2,
    explanation: 'The document states: "Circuit breakers prevent cascading failures in distributed systems. If your web search service starts failing, you don\'t want every agent request to hang waiting for search timeouts, causing those requests to fail, causing retry storms that make things worse. Circuit breakers detect when a service is unhealthy (high error rate, slow responses) and \'open the circuit\'—stopping requests to that service temporarily and either returning cached results, graceful degradation responses, or fast failures. After a cooling-off period, the circuit half-opens to test if the service has recovered."'
  },
  {
    id: 'q5',
    question: 'How do message queues increase both scalability and adaptability in agent systems?',
    options: [
      'They store messages permanently for historical analysis',
      'They encrypt all communications between components for security',
      'They decouple components temporally through asynchronous messaging, allowing processing when ready and enabling new consumers without modifying publishers',
      'They compress messages to reduce bandwidth requirements'
    ],
    correctAnswer: 2,
    explanation: 'The document explains: "Instead of components calling each other directly via APIs, they communicate by publishing and consuming messages from queues... This decouples components temporally—they don\'t need to be available simultaneously—and allows asynchronous processing. If Service B is slow or temporarily down, messages queue up and get processed when it\'s ready rather than causing immediate failures. You can also easily add new consumers of messages without modifying publishers, making the system more extensible."'
  },
  {
    id: 'q6',
    question: 'What role does configuration management play in enabling adaptability?',
    options: [
      'It encrypts sensitive configuration data to prevent unauthorized access',
      'It separates behavior from code by storing parameters externally, enabling changes without deployments and supporting features like A/B testing and dynamic updates',
      'It automatically generates optimal configurations based on system performance',
      'It documents all configuration changes for compliance purposes'
    ],
    correctAnswer: 1,
    explanation: 'The document states: "Configuration management separates behavior from code. Instead of hardcoding thresholds, API endpoints, model parameters, or business rules directly in your code, you store them in configuration files or external configuration services... This enables changes without deployments, supports A/B testing, allows dynamic updates, and makes your system adaptable to changing requirements without code rewrites."'
  }
];

