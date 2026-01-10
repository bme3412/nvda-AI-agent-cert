import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is time-weighted retrieval and how does it enhance standard vector retrieval?',
    options: [
      'Enhancement incorporating temporal recency factors into document ranking algorithms alongside semantic similarity',
      'A security mechanism that prevents unauthorized access to recently accessed documents',
      'An optimization technique that reduces computational costs by caching frequently accessed documents',
      'A compression algorithm that reduces storage requirements for temporal document metadata'
    ],
    correctAnswer: 0,
    explanation: 'Time-weighted retrieval represents enhancement to semantic similarity search incorporating temporal recency factors into document ranking algorithms, while standard vector retrieval selects documents based solely on embedding similarity disregarding temporal characteristics.'
  },
  {
    id: 'q2',
    question: 'How do temporal weighting mechanisms modify similarity scores?',
    options: [
      'By completely replacing semantic similarity with temporal ranking based purely on access time',
      'By automatically updating document content to maintain relevance over time',
      'Through standardizing all documents to have identical temporal characteristics',
      'Through decay functions diminishing document relevance based on time since last access'
    ],
    correctAnswer: 3,
    explanation: 'Temporal weighting mechanisms modify similarity scores through decay functions diminishing relevance of documents based on time since last access, with combined scoring integrating semantic relevance from vector similarity with temporal relevance from recency calculations.'
  },
  {
    id: 'q3',
    question: 'What distinguishes access-based temporal tracking from creation-based alternatives?',
    options: [
      'Access-based tracking requires specialized hardware while creation-based tracking uses standard systems',
      'By measuring recency from last retrieval rather than document origin, maintaining freshness through usage patterns',
      'Access-based tracking applies only to text documents while creation-based works with all media types',
      'Creation-based tracking provides more accurate temporal information than access-based approaches'
    ],
    correctAnswer: 1,
    explanation: 'Access-based temporal tracking distinguishes approaches by measuring recency from last retrieval rather than document origin, with frequently accessed documents maintaining temporal freshness despite potentially old creation dates while infrequently accessed documents decay regardless of recent creation.'
  },
  {
    id: 'q4',
    question: 'How does decay rate configuration provide control over temporal weighting strength?',
    options: [
      'Decay rates automatically optimize based on usage patterns without manual configuration',
      'All documents must use identical decay rates to ensure fair ranking across content types',
      'Decay rate configuration applies only to semantic similarity without affecting temporal factors',
      'Low rates preserve relevance across extended periods while high rates strongly favor recently accessed content'
    ],
    correctAnswer: 3,
    explanation: 'Decay rate configuration provides tunable control over temporal weighting strength, with low decay rates preserving document relevance across extended time periods while high decay rates strongly favor recently accessed content rapidly diminishing older document scores.'
  },
  {
    id: 'q5',
    question: 'How do conversational coherence improvements emerge from time-weighted retrieval?',
    options: [
      'Through automatic conversation flow optimization that eliminates all context switching',
      'By maintaining awareness of recent discussion context through temporal boosting of recently mentioned information',
      'Through standardizing all conversations to follow identical patterns regardless of content',
      'By eliminating temporal factors to ensure consistent retrieval regardless of timing'
    ],
    correctAnswer: 1,
    explanation: 'Conversational coherence improvements emerge from maintaining awareness of recent discussion context through temporal boosting of recently mentioned information, enabling agents to reference recent conversation elements appropriately rather than retrieving semantically similar but temporally distant content.'
  },
  {
    id: 'q6',
    question: 'What cache-like behavior emerges from access-based temporal tracking?',
    options: [
      'All documents become permanently cached eliminating the need for retrieval mechanisms',
      'Cache behavior applies only to technical documents without relevance for other content types',
      'Temporal tracking eliminates caching requirements through improved storage efficiency',
      'Recently used documents remain accessible through temporal boosting while unused documents decay toward irretrievability'
    ],
    correctAnswer: 3,
    explanation: 'Cache-like behavior emerges from access-based temporal tracking creating retrieval patterns resembling cache replacement policies, with recently used documents remaining readily accessible through temporal boosting while unused documents eventually become difficult to retrieve through temporal decay.'
  },
  {
    id: 'q7',
    question: 'How does the combined scoring computation integrate semantic and temporal factors?',
    options: [
      'By alternating between semantic and temporal ranking on successive retrievals',
      'By using only the highest score between semantic similarity and temporal relevance',
      'Through converting all semantic scores to temporal equivalents for unified ranking',
      'Through applying exponential decay to elapsed time and combining with vector similarity scores'
    ],
    correctAnswer: 3,
    explanation: 'Combined scoring computation integrates semantic similarity from vector comparison with temporal relevance from decay calculation, applying exponential decay to elapsed time since last access, scaling by configurable rate parameter, and combining with vector similarity score.'
  },
  {
    id: 'q8',
    question: 'Why does exponential decay implementation prove mathematically convenient?',
    options: [
      'Exponential functions eliminate all computational overhead compared to linear alternatives',
      'Creating smooth continuous decay where relevance decreases progressively over time matching intuitive expectations',
      'Exponential decay guarantees identical behavior regardless of specific parameter values',
      'Linear decay functions prove impossible to implement in practical retrieval systems'
    ],
    correctAnswer: 1,
    explanation: 'Exponential decay implementation applies decay rate raised to power of elapsed time creating smooth continuous decay where relevance decreases progressively over time rather than discrete thresholds, proving mathematically convenient while matching intuitive expectations that recent information matters substantially more than ancient data.'
  },
  {
    id: 'q9',
    question: 'How does automatic timestamp updating maintain accurate access records?',
    options: [
      'Through manual timestamp management requiring explicit application intervention for each access',
      'By transparently updating during retrieval operations maintaining accurate access time records without explicit intervention',
      'Timestamp updates occur only during system maintenance windows to avoid performance impact',
      'Automatic updating applies only to recently created documents without affecting older content'
    ],
    correctAnswer: 1,
    explanation: 'Automatic timestamp updates occur transparently during retrieval operations maintaining accurate access time records without explicit application intervention, with retrieval operations atomically updating last access timestamps before returning documents ensuring temporal metadata reflects actual usage patterns.'
  },
  {
    id: 'q10',
    question: 'Why do initialization requirements mandate dedicated document addition methods?',
    options: [
      'Dedicated methods provide automatic performance optimization unavailable through standard insertion',
      'To ensure proper metadata initialization since standard vector store insertion lacks temporal tracking awareness',
      'Standard insertion methods prove incompatible with all modern vector storage systems',
      'Dedicated addition methods eliminate security vulnerabilities present in standard approaches'
    ],
    correctAnswer: 1,
    explanation: 'Initialization requirements mandate using dedicated document addition methods rather than direct vector store insertion ensuring proper metadata initialization, as standard vector store insertion lacks awareness of temporal tracking requirements potentially omitting access metadata or using incorrect initialization values.'
  },
  {
    id: 'q11',
    question: 'How does decay rate selection determine application-specific retrieval tradeoffs?',
    options: [
      'All applications should use identical decay rates to ensure consistent behavior across systems',
      'Decay rate selection applies only to conversational systems without relevance for other applications',
      'Higher decay rates always provide better performance regardless of application requirements',
      'Conversational applications benefit from moderate to aggressive decay while knowledge retrieval may prefer minimal decay'
    ],
    correctAnswer: 3,
    explanation: 'Decay rate selection determines application-specific tradeoff between temporal and semantic relevance, with conversational applications often benefiting from moderate to aggressive decay maintaining focus on recent context while knowledge retrieval applications may prefer minimal decay prioritizing semantic relevance over recency.'
  },
  {
    id: 'q12',
    question: 'What behavioral edge cases emerge from extreme configurations?',
    options: [
      'Edge cases only occur with incorrect implementations without relevance for proper configurations',
      'Rarely accessed documents may become unretrievable while constantly accessed documents dominate despite marginal relevance',
      'Extreme configurations automatically adjust to prevent any problematic behaviors',
      'All configurations produce identical retrieval patterns regardless of parameter values'
    ],
    correctAnswer: 1,
    explanation: 'Behavioral edge cases emerge from extreme configurations where rarely accessed documents eventually decay toward irrelevance potentially becoming unretrievable even when appropriate, while constantly accessed documents may dominate results through temporal freshness despite marginal semantic relevance.'
  },
  {
    id: 'q13',
    question: 'How do conversational memory systems benefit from time-weighted retrieval?',
    options: [
      'By eliminating all memory requirements through improved efficiency algorithms',
      'Through maintaining awareness of recent discussion context while gradually forgetting distant interactions',
      'Conversational systems require only semantic similarity without temporal considerations',
      'Memory systems work identically regardless of whether temporal factors are included'
    ],
    correctAnswer: 1,
    explanation: 'Conversational memory systems leverage time-weighted retrieval for maintaining awareness of recent discussion context while gradually forgetting distant interactions, with recent conversation turns receiving temporal boosting ensuring agents reference current context appropriately while old discussions decay preventing obsolete context confusion.'
  },
  {
    id: 'q14',
    question: 'What does trending content identification reveal through access pattern tracking?',
    options: [
      'All content trends identically regardless of actual user interest or access patterns',
      'Trending identification requires manual curation without benefit from access tracking',
      'Access patterns provide no useful information about content popularity or trends',
      'Currently popular documents through temporal freshness accumulation from sustained access'
    ],
    correctAnswer: 3,
    explanation: 'Trending content identification leverages access pattern tracking revealing currently popular documents through temporal freshness accumulation, with documents receiving sustained access maintaining high temporal scores indicating ongoing relevance while previously popular documents decay revealing shifting interest patterns.'
  },
  {
    id: 'q15',
    question: 'How do cache-like information systems approximate LRU policies through temporal decay?',
    options: [
      'Cache approximation requires specialized hardware unavailable in standard retrieval systems',
      'LRU approximation works only with text documents without applicability to other content types',
      'Temporal decay eliminates caching requirements making LRU policies unnecessary',
      'Through aggressive temporal decay where frequently accessed documents remain retrievable while unused documents decay toward irretrievability'
    ],
    correctAnswer: 3,
    explanation: 'Cache-like information systems approximate least-recently-used caching policies through aggressive temporal decay, with frequently accessed documents remaining easily retrievable through temporal freshness while unused documents decay toward irretrievability mimicking cache eviction, proving useful for applications benefiting from access locality.'
  }
];