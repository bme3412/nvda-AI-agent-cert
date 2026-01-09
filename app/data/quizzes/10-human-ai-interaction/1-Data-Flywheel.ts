import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What is an AI data flywheel in the context of agentic AI systems?",
    options: [
      "A mechanism for storing large datasets in distributed systems",
      "A self-reinforcing cycle where data quality and AI performance continuously improve each other",
      "A backup system for critical AI model parameters",
      "A load balancing technique for AI inference workloads"
    ],
    correctAnswer: 1,
    explanation: "An AI data flywheel is a self-reinforcing cycle where better data leads to improved AI performance, which in turn generates more high-quality data, creating a continuous improvement loop."
  },
  {
    id: 'q2',
    question: "How does the data flywheel concept benefit enterprise AI deployments?",
    options: [
      "Reduces computational costs through data compression",
      "Creates continuous learning and improvement cycles that enhance AI system performance over time",
      "Eliminates the need for human oversight in AI systems",
      "Standardizes data formats across different AI platforms"
    ],
    correctAnswer: 1,
    explanation: "The data flywheel creates continuous learning cycles where AI systems improve through iterative feedback, leading to better performance and more valuable insights for enterprises."
  },
  {
    id: 'q3',
    question: "What role does user feedback play in maintaining an effective AI data flywheel?",
    options: [
      "It provides quality signals that help refine model predictions and training data",
      "It reduces the need for automated data collection systems",
      "It eliminates bias from AI decision-making processes",
      "It standardizes data input formats across platforms"
    ],
    correctAnswer: 0,
    explanation: "User feedback provides crucial quality signals that help identify successful predictions, correct errors, and improve the overall training dataset quality."
  },
  {
    id: 'q4',
    question: "In enterprise AI data flywheel architecture, what is the primary purpose of workflow optimization?",
    options: [
      "To reduce hardware requirements for AI training",
      "To create seamless data collection and processing pipelines that maximize learning efficiency",
      "To eliminate manual data annotation processes",
      "To standardize AI model architectures across teams"
    ],
    correctAnswer: 1,
    explanation: "Workflow optimization creates efficient pipelines that automatically collect, process, and incorporate data back into the learning cycle, maximizing the flywheel's effectiveness."
  },
  {
    id: 'q5',
    question: "How do AI data flywheels address the challenge of model degradation over time?",
    options: [
      "By freezing model parameters after initial training",
      "Through continuous data ingestion and model retraining based on new patterns",
      "By implementing stricter data validation rules",
      "Through periodic manual model architecture updates"
    ],
    correctAnswer: 1,
    explanation: "Data flywheels continuously incorporate new data and patterns, allowing models to adapt and maintain performance as conditions change, preventing degradation."
  },
  {
    id: 'q6',
    question: "What is the relationship between data quality and flywheel momentum in AI systems?",
    options: [
      "Higher data quality creates faster flywheel acceleration and better AI outcomes",
      "Data quality has no impact on flywheel effectiveness",
      "Lower data quality speeds up the learning process",
      "Data quality only matters during initial model training"
    ],
    correctAnswer: 0,
    explanation: "Higher data quality creates better AI outputs, which generate more valuable insights and feedback, accelerating the flywheel and creating a virtuous improvement cycle."
  },
  {
    id: 'q7',
    question: "How do cost optimization strategies integrate with AI data flywheel implementations?",
    options: [
      "By eliminating all data storage costs",
      "Through efficient resource allocation and automated scaling based on learning value",
      "By reducing model complexity to minimal configurations",
      "Through manual cost monitoring and budget controls"
    ],
    correctAnswer: 1,
    explanation: "Cost optimization in data flywheels involves smart resource allocation, automated scaling, and focusing computational resources on high-value learning opportunities."
  },
  {
    id: 'q8',
    question: "What is the primary advantage of self-improving AI systems powered by data flywheels?",
    options: [
      "They require less initial training data than traditional models",
      "They automatically adapt and improve performance without constant manual intervention",
      "They eliminate the need for data validation and quality checks",
      "They can operate effectively with any type of input data"
    ],
    correctAnswer: 1,
    explanation: "Self-improving systems powered by data flywheels can automatically adapt and enhance their performance through continuous learning, reducing the need for manual tuning."
  },
  {
    id: 'q9',
    question: "In enterprise deployments, how do data flywheels impact scalability of AI systems?",
    options: [
      "They limit system growth to prevent data overload",
      "They enable systems to handle increasing complexity while maintaining or improving performance",
      "They require linear scaling of computational resources",
      "They only work effectively at small scale implementations"
    ],
    correctAnswer: 1,
    explanation: "Data flywheels enable AI systems to scale effectively by continuously learning from new data and improving their ability to handle increased complexity and volume."
  },
  {
    id: 'q10',
    question: "What role does automated data collection play in sustaining AI data flywheels?",
    options: [
      "It replaces the need for human-generated training data",
      "It ensures continuous data flow without manual bottlenecks, maintaining flywheel momentum",
      "It eliminates data preprocessing requirements",
      "It standardizes all data to a single format"
    ],
    correctAnswer: 1,
    explanation: "Automated data collection ensures continuous data flow without manual bottlenecks, maintaining the momentum needed for effective flywheel operation and continuous improvement."
  },
  {
    id: 'q11',
    question: "How do enterprise data flywheels handle data diversity and multi-modal inputs?",
    options: [
      "By converting all data to a single standardized format",
      "Through adaptive processing pipelines that learn from diverse data types to improve overall understanding",
      "By filtering out non-standard data inputs",
      "Through manual data type classification systems"
    ],
    correctAnswer: 1,
    explanation: "Enterprise data flywheels use adaptive pipelines that can process diverse data types, learning from this variety to create more robust and comprehensive AI systems."
  },
  {
    id: 'q12',
    question: "What is the impact of real-time feedback loops on data flywheel effectiveness?",
    options: [
      "They slow down the learning process due to processing overhead",
      "They enable immediate course corrections and accelerate improvement cycles",
      "They are only useful for batch processing scenarios",
      "They require significant manual intervention to be effective"
    ],
    correctAnswer: 1,
    explanation: "Real-time feedback loops enable immediate course corrections and rapid learning, significantly accelerating the improvement cycles in data flywheel systems."
  },
  {
    id: 'q13',
    question: "How do data flywheels contribute to competitive advantage in AI-driven enterprises?",
    options: [
      "By reducing the cost of AI infrastructure to minimal levels",
      "Through continuous learning that creates increasingly sophisticated and hard-to-replicate AI capabilities",
      "By eliminating the need for specialized AI talent",
      "Through standardization that reduces development costs"
    ],
    correctAnswer: 1,
    explanation: "Data flywheels create continuous learning cycles that build increasingly sophisticated AI capabilities over time, creating competitive advantages that are difficult for competitors to replicate."
  },
  {
    id: 'q14',
    question: "What is the role of data governance in maintaining effective AI data flywheels?",
    options: [
      "To slow down data processing to ensure perfect accuracy",
      "To establish frameworks that ensure data quality and compliance while maintaining learning velocity",
      "To eliminate all automated data collection processes",
      "To standardize data formats across all enterprise systems"
    ],
    correctAnswer: 1,
    explanation: "Data governance establishes frameworks that balance data quality, compliance requirements, and privacy while maintaining the velocity needed for effective flywheel operation."
  },
  {
    id: 'q15',
    question: "How do AI data flywheels integrate with existing enterprise data infrastructure?",
    options: [
      "They require complete replacement of existing data systems",
      "Through adaptive integration layers that leverage existing data while optimizing for continuous learning",
      "They operate independently without connecting to enterprise systems",
      "They only work with cloud-native data architectures"
    ],
    correctAnswer: 1,
    explanation: "AI data flywheels integrate through adaptive layers that can leverage existing enterprise data infrastructure while optimizing data flows for continuous learning and improvement."
  }
];