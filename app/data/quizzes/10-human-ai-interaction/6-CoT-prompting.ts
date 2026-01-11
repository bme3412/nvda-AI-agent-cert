import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What is Chain of Thought (CoT) prompting in the context of large language models?",
    options: [
      "A prompt engineering method that forces models to break complex problems into step-by-step logical sequences",
      "A security framework for preventing prompt injection attacks",
      "A data preprocessing approach for training more accurate language models",
      "A technique for optimizing LLM computational performance"
    ],
    correctAnswer: 0,
    explanation: "Chain of Thought prompting is a technique that uses examples or instructions to improve LLM reasoning by forcing the model to solve problems step-by-step in logical sequences."
  },
  {
    id: 'q2',
    question: "How does CoT prompting improve LLM responses to complex reasoning tasks?",
    options: [
      "Through automatic hyperparameter optimization during inference",
      "By eliminating the need for training data in language models",
      "Through step-by-step breakdown that provides both intermediate reasoning steps and final results",
      "By reducing the computational requirements for model inference"
    ],
    correctAnswer: 2,
    explanation: "CoT prompting improves responses by providing both the result and intermediate steps, helping models handle problems that require multiple reasoning and calculation steps more effectively."
  },
  {
    id: 'q3',
    question: "What distinguishes zero-shot CoT from few-shot CoT prompting approaches?",
    options: [
      "Zero-shot only works with mathematical problems while few-shot handles all domains",
      "Zero-shot requires more training data than few-shot methods",
      "Zero-shot uses instructions like 'solve step by step' while few-shot provides example problems with reasoning",
      "Zero-shot uses more computational resources than few-shot approaches"
    ],
    correctAnswer: 2,
    explanation: "Zero-shot CoT uses instructions to guide step-by-step reasoning without examples, while few-shot CoT provides example problems with their reasoning sequences for the model to learn from."
  },
  {
    id: 'q4',
    question: "What are typical instruction phrases used in zero-shot Chain of Thought prompting?",
    options: [
      "'Use advanced algorithms' and 'Apply machine learning techniques'",
      "'Generate the most accurate result' and 'Minimize processing time'",
      "'Let's think step by step' and 'Solve this problem step by step'",
      "'Process this data efficiently' and 'Optimize the solution'"
    ],
    correctAnswer: 2,
    explanation: "Zero-shot CoT uses phrases like 'Let's think step by step', 'Solve this problem step by step', or 'Let's work this out in a step by step manner' to guide reasoning."
  },
  {
    id: 'q5',
    question: "Why is few-shot CoT generally more accurate than zero-shot CoT?",
    options: [
      "Examples help the model learn appropriate reasoning patterns and generate more logical step sequences",
      "Examples reduce the model's memory requirements during inference",
      "Few-shot eliminates the need for natural language understanding",
      "Few-shot requires less computational processing power"
    ],
    correctAnswer: 0,
    explanation: "Few-shot CoT is more accurate because providing examples helps the LLM learn appropriate reasoning patterns, leading to more logical and accurate step sequences for new problems."
  },
  {
    id: 'q6',
    question: "What is the primary advantage of Automatic Chain of Thought (Auto-CoT) over manual approaches?",
    options: [
      "It standardizes all reasoning patterns to identical step sequences",
      "Auto-CoT requires no training data or model parameters",
      "It automatically generates diverse examples using clustering and zero-shot CoT for different question types",
      "Auto-CoT eliminates all computational overhead from reasoning processes"
    ],
    correctAnswer: 2,
    explanation: "Auto-CoT automates example generation by clustering diverse questions and using zero-shot CoT to create reasoning sequences, eliminating the need to manually design examples for each question type."
  },
  {
    id: 'q7',
    question: "How does the Auto-CoT process work for generating reasoning examples?",
    options: [
      "It clusters questions by similarity, selects representatives from each cluster, and generates reasoning using zero-shot CoT",
      "It copies reasoning patterns from the most successful previous models",
      "It uses human experts to manually create all reasoning sequences",
      "It randomly selects examples from existing training datasets"
    ],
    correctAnswer: 0,
    explanation: "Auto-CoT clusters questions by similarity using sentence transformers, selects representative questions from each cluster, then generates reasoning sequences using zero-shot CoT."
  },
  {
    id: 'q8',
    question: "What role does sentence transformer encoding play in Auto-CoT implementation?",
    options: [
      "It automatically generates final answers without reasoning steps",
      "It eliminates the need for natural language processing in CoT",
      "It enables question clustering by finding cosine similarity between encoded questions",
      "It optimizes computational performance during model inference"
    ],
    correctAnswer: 2,
    explanation: "Sentence transformers encode questions into vectors, allowing cosine similarity calculations to group similar questions into clusters for representative example selection."
  },
  {
    id: 'q9',
    question: "How is CoT prompting implemented in LangChain applications?",
    options: [
      "Using prompt templates that incorporate step-by-step instructions or example patterns",
      "Through direct neural network weight adjustments",
      "By replacing language models with symbolic reasoning systems",
      "Through automatic model architecture modifications"
    ],
    correctAnswer: 0,
    explanation: "CoT prompting in LangChain is implemented using prompt templates that incorporate step-by-step instructions (zero-shot) or example patterns with reasoning sequences (few-shot)."
  },
  {
    id: 'q10',
    question: "What is a key limitation of CoT prompting with small-scale language models?",
    options: [
      "CoT prompting increases memory requirements beyond small model capabilities",
      "Small models require more computational resources for CoT processing",
      "Performance gains are only visible with large-scale models; small models may produce illogical reasoning",
      "Small models process CoT prompts too quickly to be effective"
    ],
    correctAnswer: 2,
    explanation: "CoT prompting performance gains are only visible with large-scale LLMs. Small models may produce reasoning sequences that seem logical but are actually incorrect, leading to worse performance."
  },
  {
    id: 'q11',
    question: "How does CoT prompting enhance the debugging process for LLM outputs?",
    options: [
      "Through automatic rollback mechanisms when errors are detected",
      "It eliminates the possibility of errors in LLM reasoning processes",
      "By providing visible reasoning sequences, developers can identify exactly where errors occur",
      "It automatically fixes all errors without human intervention"
    ],
    correctAnswer: 2,
    explanation: "CoT prompting makes debugging easier because the visible reasoning sequences allow developers to identify the exact step where the model makes an error, enabling targeted corrections."
  },
  {
    id: 'q12',
    question: "What is the benefit of CoT prompting for understanding model decision-making?",
    options: [
      "It automatically generates documentation for all model decisions",
      "It reduces the complexity of model architectures to basic rule-based systems",
      "It provides transparency by showing how the model proceeds to derive outputs through reasoning steps",
      "It eliminates the need for explainable AI techniques"
    ],
    correctAnswer: 2,
    explanation: "CoT prompting provides transparency by making the model's reasoning process visible, showing how it proceeds step-by-step to derive outputs, improving interpretability."
  },
  {
    id: 'q13',
    question: "How does CoT prompting help LLMs handle complex multi-step problems?",
    options: [
      "Through automatic parallelization of all reasoning processes",
      "By eliminating the need for problem-solving capabilities",
      "Through decomposition into smaller steps that allow focused attention on each part of the problem",
      "By reducing problems to single-step calculations"
    ],
    correctAnswer: 2,
    explanation: "CoT prompting helps by breaking complex questions into small, simple steps, allowing the model to focus attention on each part and combine them for more accurate outputs."
  },
  {
    id: 'q14',
    question: "What is the recommended approach for implementing CoT in diverse question domains?",
    options: [
      "Use only zero-shot approaches to avoid bias from example selection",
      "Eliminate CoT prompting in favor of simpler direct questioning methods",
      "Implement Auto-CoT with clustered examples representing different question types and reasoning patterns",
      "Use the same examples for all types of questions to maintain consistency"
    ],
    correctAnswer: 2,
    explanation: "Auto-CoT is recommended for diverse domains because it automatically generates appropriate examples for different question types through clustering and representative selection."
  },
  {
    id: 'q15',
    question: "How do the three types of CoT prompting (zero-shot, few-shot, Auto-CoT) compare in terms of effectiveness?",
    options: [
      "All three approaches perform identically across different problem types",
      "Few-shot is always superior regardless of the application domain",
      "Auto-CoT often outperforms both zero-shot and few-shot by combining their strengths with automated diversity",
      "Zero-shot is most effective, followed by few-shot, then Auto-CoT"
    ],
    correctAnswer: 2,
    explanation: "Studies show that Auto-CoT often outperforms both zero-shot and few-shot CoT by combining the automated guidance of zero-shot with the example-based learning of few-shot while ensuring diverse question coverage."
  }
];