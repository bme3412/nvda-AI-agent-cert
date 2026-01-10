import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is AI-Q NVIDIA Blueprint and what does it provide?',
    options: [
      'A security framework for protecting enterprise AI systems from adversarial attacks and data breaches',
      'A cloud-based platform for automated machine learning model training and deployment at scale',
      'Open-source reference architecture for building artificial general agents connecting to enterprise data sources',
      'A proprietary toolkit for developing custom large language models for specific industry applications'
    ],
    correctAnswer: 2,
    explanation: 'AI-Q NVIDIA Blueprint represents open-source reference architecture for building artificial general agents connecting to enterprise data sources, reasoning across multimodal information, and delivering comprehensive accurate answers at scale.'
  },
  {
    id: 'q2',
    question: 'What three foundational building blocks enable robust scalable agent development?',
    options: [
      'NVIDIA NIM microservices, NeMo Retriever microservices, and NeMo Agent toolkit',
      'Data preprocessing pipelines, model training infrastructure, and automated deployment systems',
      'Security authentication, performance monitoring, and cost optimization frameworks',
      'Cloud integration APIs, edge computing support, and hybrid deployment architectures'
    ],
    correctAnswer: 0,
    explanation: 'The architecture integrates three foundational building blocks: performance-optimized NVIDIA NIM microservices for model serving, NVIDIA NeMo Retriever microservices for multimodal data extraction, and NVIDIA NeMo Agent toolkit for orchestrating complex workflows.'
  },
  {
    id: 'q3',
    question: 'How does the reference implementation approach demonstrate practical agent construction?',
    options: [
      'Through theoretical documentation and architectural diagrams without concrete implementation examples',
      'Through automated code generation that creates agents based on high-level specification inputs',
      'By offering template-based solutions that require minimal customization for deployment',
      'By providing complete working examples including research assistant and biomedical research agent implementations'
    ],
    correctAnswer: 3,
    explanation: 'Reference implementation approach demonstrates practical agent construction through complete working examples rather than abstract documentation, including research assistant implementation and biomedical research agent for medical literature analysis.'
  },
  {
    id: 'q4',
    question: 'What fundamental enterprise challenge does enterprise data integration address?',
    options: [
      'Information accessibility where substantial organizational data remains unused despite potential value',
      'Inconsistent data quality and validation across different organizational departments',
      'Regulatory compliance and data governance requirements for sensitive information handling',
      'Network security and access control for distributed data storage across multiple locations'
    ],
    correctAnswer: 0,
    explanation: 'Enterprise data integration addresses fundamental challenge of information accessibility where substantial organizational data remains unused despite potential value, enabling agents to connect diverse data sources and deliver contextualized insights.'
  },
  {
    id: 'q5',
    question: 'How do multimodal processing capabilities simplify enterprise data handling?',
    options: [
      'By enabling handling diverse enterprise data formats through unified architecture rather than separate pipelines',
      'Through automatic format conversion that standardizes all data types into unified representations',
      'Through intelligent compression algorithms that reduce storage requirements for multimedia content',
      'By implementing universal protocols that work identically across all possible data modalities'
    ],
    correctAnswer: 0,
    explanation: 'Multimodal processing capabilities enable handling diverse enterprise data formats including text documents, PDFs, images, tables, and databases through unified architecture rather than requiring separate processing pipelines for different modalities.'
  },
  {
    id: 'q6',
    question: 'What does framework agnosticism prevent and how does it benefit organizations?',
    options: [
      'Data corruption and ensures universal compatibility across all possible enterprise systems',
      'Performance degradation through automatic optimization that works across all framework types',
      'Security vulnerabilities by implementing standardized encryption and access control mechanisms',
      'Vendor lock-in by supporting integration with diverse agentic platforms through modular plugin architecture'
    ],
    correctAnswer: 3,
    explanation: 'Framework agnosticism prevents vendor lock-in by supporting integration with diverse agentic platforms and tools through modular plugin architecture, enabling organizations to select frameworks appropriate to specific requirements without blueprint compatibility constraints.'
  },
  {
    id: 'q7',
    question: 'What does document processing achieve through structure preservation?',
    options: [
      'Extraction of content while preserving semantic structure, layout information, and embedded objects',
      'Automatic quality control and validation ensuring all extracted content meets accuracy standards',
      'Real-time synchronization of document changes across multiple storage and processing systems',
      'Universal format support enabling processing of any document type without modification'
    ],
    correctAnswer: 0,
    explanation: 'Document processing extracts content from PDFs and documents preserving semantic structure, layout information, and embedded objects including images and tables, which proves essential for understanding complex documents where layout conveys meaning.'
  },
  {
    id: 'q8',
    question: 'How does continuous extraction and indexing maintain information currency?',
    options: [
      'By maintaining current vector representations processing new documents and updating when information changes',
      'Through automatic backup and recovery systems that prevent data loss during processing operations',
      'Through intelligent compression that reduces storage requirements while maintaining data accuracy',
      'By implementing universal compatibility protocols that work with any enterprise data source'
    ],
    correctAnswer: 0,
    explanation: 'Continuous extraction and indexing maintains current vector representations of enterprise data by processing new documents as they become available, updating representations when information changes, and removing obsolete content.'
  },
  {
    id: 'q9',
    question: 'What does dynamic reasoning activation enable for resource optimization?',
    options: [
      'Automatic hardware provisioning based on predicted computational demand and usage patterns',
      'Real-time load balancing that distributes computational work across available processing resources',
      'Intelligent caching mechanisms that eliminate redundant computation for repeated query patterns',
      'Selective engagement of intensive logical processing based on query characteristics optimizing resource utilization'
    ],
    correctAnswer: 3,
    explanation: 'Dynamic reasoning activation enables selective engagement of intensive logical processing based on query characteristics optimizing resource utilization, with complex queries activating advanced processing while straightforward requests use lighter-weight execution.'
  },
  {
    id: 'q10',
    question: 'How does problem decomposition handle complex queries systematically?',
    options: [
      'By breaking complex queries into manageable subproblems enabling systematic analysis of multifaceted questions',
      'Through automatic simplification that reduces complex problems to basic information retrieval tasks',
      'Through parallel processing that distributes query components across multiple computational resources',
      'By implementing universal algorithms that solve any problem type without domain-specific customization'
    ],
    correctAnswer: 0,
    explanation: 'Problem decomposition breaks complex queries into manageable subproblems enabling systematic analysis of multifaceted questions, identifying constituent elements, determining processing order considering dependencies, and synthesizing subproblem results.'
  },
  {
    id: 'q11',
    question: 'What does Model Context Protocol compatibility enable for agent systems?',
    options: [
      'Interoperability with tools served by MCP servers expanding available capabilities through ecosystem tool sharing',
      'Automatic performance optimization and cost reduction without manual configuration requirements',
      'Universal data format support enabling processing of any information type without preprocessing',
      'Real-time synchronization of agent states across distributed deployment environments'
    ],
    correctAnswer: 0,
    explanation: 'Model Context Protocol compatibility enables interoperability with tools served by MCP servers expanding available capabilities through ecosystem tool sharing, facilitating reuse of specialized tools and reducing duplication across agent implementations.'
  },
  {
    id: 'q12',
    question: 'How does OpenTelemetry integration benefit enterprise monitoring infrastructure?',
    options: [
      'By exporting metrics through standardized formats preventing vendor lock-in while leveraging established infrastructure',
      'Through automatic troubleshooting and resolution of performance issues without human intervention',
      'Through universal compatibility that ensures monitoring works identically across all deployment environments',
      'By providing specialized AI-specific monitoring capabilities not available through standard tools'
    ],
    correctAnswer: 0,
    explanation: 'OpenTelemetry integration exports metrics through standardized formats enabling connectivity with enterprise monitoring platforms, preventing vendor lock-in while leveraging established monitoring infrastructure and operational expertise.'
  },
  {
    id: 'q13',
    question: 'What do evaluation frameworks enable for systematic agent quality assessment?',
    options: [
      'Systematic agent quality assessment measuring accuracy, relevance, completeness, and other quality dimensions',
      'Automatic model retraining and optimization without human oversight or intervention requirements',
      'Real-time performance monitoring that automatically scales resources based on demand patterns',
      'Universal testing protocols that work identically for any agent type without customization'
    ],
    correctAnswer: 0,
    explanation: 'Evaluation frameworks enable systematic agent quality assessment measuring accuracy, relevance, completeness, and other quality dimensions through both automated evaluation supporting rapid iteration and human evaluation incorporating domain expertise.'
  },
  {
    id: 'q14',
    question: 'How does stateless API architecture enable deployment scalability?',
    options: [
      'By enabling horizontal scaling through load distribution across multiple agent instances without session affinity',
      'Through automatic load balancing that optimizes request distribution without configuration requirements',
      'Through intelligent caching that reduces computational requirements for frequently requested operations',
      'By implementing universal protocols that work identically across all possible infrastructure types'
    ],
    correctAnswer: 0,
    explanation: 'Stateless API architecture enables horizontal scaling through load distribution across multiple agent instances without session affinity requirements, simplifying scaling infrastructure and improving fault tolerance through instance interchangeability.'
  },
  {
    id: 'q15',
    question: 'What does security integration enforce throughout agent operations?',
    options: [
      'Authentication, authorization, and audit logging protecting confidential information and ensuring compliance',
      'Automatic threat detection and response that eliminates need for manual security monitoring',
      'Universal encryption that secures all data regardless of source type or destination requirements',
      'Real-time vulnerability scanning that prevents security issues before they impact operations'
    ],
    correctAnswer: 0,
    explanation: 'Security integration enforces authentication, authorization, and audit logging throughout agent operations protecting confidential information and ensuring compliance, with integration with enterprise identity providers and comprehensive audit logging supporting compliance requirements.'
  }
];