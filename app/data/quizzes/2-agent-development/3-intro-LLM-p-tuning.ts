import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What fundamental task does a language model perform?',
    options: [
      'It provides a probability distribution of which word is valid in a sequence of words',
      'It translates text between different languages',
      'It generates images from text descriptions',
      'It compresses text data for storage efficiency'
    ],
    correctAnswer: 0,
    explanation: 'A language model\'s fundamental job is to predict which word is the best fit in a sentence by providing a probability distribution of words being valid in a sequence. This is the core capability that enables all other language model functions. While LLMs can perform translation and generation tasks, these are applications built upon this fundamental predictive capability rather than the primary function itself.'
  },
  {
    id: 'q2',
    question: 'What distinguishes a Large Language Model (LLM) from smaller language models like BERT?',
    options: [
      'LLMs are always faster at inference than smaller models',
      'LLMs exhibit emergent abilities that appear with increased scale across parameters, training data, and compute',
      'LLMs can only perform generative tasks while smaller models perform classification',
      'LLMs require less training data than smaller models'
    ],
    correctAnswer: 1,
    explanation: 'The key distinction is that with increased scale (in parameters, training data, and computational resources), LLMs develop emergent abilities that smaller models don\'t possess. These emergent capabilities include improved reasoning, generation, and the ability to handle diverse tasks without specific fine-tuning. The document notes that LLMs typically have 1B+ parameters (GPT-scale), which is significantly larger than models like BERT, and this scale enables qualitatively different capabilities.'
  },
  {
    id: 'q3',
    question: 'What is a significant operational challenge of using ensembles of smaller models compared to using a single LLM?',
    options: [
      'Ensembles require more training data than LLMs',
      'Each model in every ensemble requires its own MLOps pipeline and regular fine-tuning',
      'Ensembles always have higher inference costs',
      'Ensembles cannot perform multiple tasks'
    ],
    correctAnswer: 1,
    explanation: 'A major operational challenge with ensembles is that each model requires its own MLOps pipeline for deployment, monitoring, and maintenance. Additionally, each model must be fine-tuned regularly as data drifts over time. This creates significant maintenance overhead and complexity. While ensembles might appear cheaper from an inference cost perspective, the engineering time, maintenance costs, and complexity of managing multiple specialized models often outweighs the benefits compared to using a single flexible LLM.'
  },
  {
    id: 'q4',
    question: 'What is a zero-shot prompt?',
    options: [
      'A prompt that includes step-by-step reasoning',
      'A prompt that asks the model to perform a task without any examples of expected behavior',
      'A prompt that provides multiple examples before asking the actual question',
      'A prompt that requires no response from the model'
    ],
    correctAnswer: 1,
    explanation: 'A zero-shot prompt means prompting the model without providing any examples of the expected behavior. For instance, simply asking "What is the capital of France?" is a zero-shot prompt because no examples are provided. This contrasts with few-shot prompts (which include examples) and chain-of-thought prompts (which include reasoning steps). Zero-shot prompting tests the model\'s inherent knowledge and capabilities without additional guidance.'
  },
  {
    id: 'q5',
    question: 'How does a few-shot prompt help overcome limitations observed in zero-shot prompting?',
    options: [
      'It automatically fine-tunes the model for the specific task',
      'It provides examples that help the model understand the task format and context',
      'It reduces the computational requirements of the model',
      'It increases the maximum token limit for responses'
    ],
    correctAnswer: 1,
    explanation: 'Few-shot prompting provides a few examples before posing the actual question, helping the model understand the task format, context, and expected response pattern. This enables the model to learn without training or fine-tuning. In the document\'s example, when a simple question about "the capital of France" failed, providing examples of other capital questions helped the model understand the context and answer correctly. This is a form of in-context learning.'
  },
  {
    id: 'q6',
    question: 'What is the purpose of chain-of-thought prompting?',
    options: [
      'To make the model respond faster',
      'To enable the model to show its reasoning process and answer logically complex questions',
      'To reduce the length of the model\'s response',
      'To eliminate the need for training data'
    ],
    correctAnswer: 1,
    explanation: 'Chain-of-thought prompting helps the model develop and display its reasoning process, particularly for logically complex questions. By providing examples where the reasoning process is explained step-by-step, or by using phrases like "Let\'s think about this logically," the model learns to break down complex problems and show its work. This significantly improves accuracy on multi-step reasoning tasks, as demonstrated in the juggler example where simple prompting failed but chain-of-thought reasoning produced the correct answer.'
  },
  {
    id: 'q7',
    question: 'What is a key limitation of prompt engineering that P-tuning addresses?',
    options: [
      'Prompt engineering only works for text-based tasks',
      'Examples must be pre-appended to each prompt, consuming the token budget and limiting the number of examples',
      'Prompt engineering cannot work with LLMs over 1B parameters',
      'Prompt engineering requires expensive GPU hardware'
    ],
    correctAnswer: 1,
    explanation: 'Prompt engineering has two main limitations: only a small number of examples can be used (limiting control), and these examples must be pre-appended to every prompt, which consumes the token budget. P-tuning solves this by using a small trainable model to generate task-specific virtual tokens that can be stored in a lookup table and reused, eliminating the need to include examples in every prompt while providing more extensive customization than few-shot examples alone.'
  },
  {
    id: 'q8',
    question: 'How does P-tuning differ from traditional fine-tuning of an LLM?',
    options: [
      'P-tuning is only used for image generation tasks',
      'P-tuning trains a small model to generate virtual tokens while the LLM remains frozen',
      'P-tuning modifies all parameters of the LLM while fine-tuning modifies only some',
      'P-tuning requires more computational resources than full fine-tuning'
    ],
    correctAnswer: 1,
    explanation: 'P-tuning is a parameter-efficient approach that trains a small model to encode prompts and generate task-specific virtual tokens, while keeping the large LLM frozen. These virtual tokens are then used to guide the LLM\'s behavior without modifying its billions of parameters. Traditional fine-tuning would require updating the LLM\'s 530B+ parameters, which is extremely resource-intensive. P-tuning can be completed in as little as 20 minutes compared to the extensive time and resources required for full fine-tuning.'
  },
  {
    id: 'q9',
    question: 'What happens to the small model used during P-tuning after the tuning process is complete?',
    options: [
      'It is discarded entirely and cannot be reused',
      'The virtual tokens it generated are stored in a lookup table, replacing the need for the small model',
      'It remains in the inference pipeline for all future predictions',
      'It is merged with the LLM to create a new unified model'
    ],
    correctAnswer: 1,
    explanation: 'After P-tuning is complete, the virtual tokens generated by the small model are stored in a lookup table and used during inference, effectively replacing the smaller model. This means the small model is no longer needed during inference, making the deployment more efficient. Multiple p-tuned versions for different tasks can be saved as different lookup tables without requiring large amounts of memory, enabling easy task-switching with the same base LLM.'
  },
  {
    id: 'q10',
    question: 'Why might an organization choose LLMs over ensembles despite potentially higher inference costs?',
    options: [
      'LLMs never require any fine-tuning or customization',
      'LLMs eliminate engineering complexity, reduce time-to-market, and avoid per-model data acquisition challenges',
      'LLMs always produce more accurate results than ensembles',
      'LLMs are easier to deploy on mobile devices'
    ],
    correctAnswer: 1,
    explanation: 'While inference costs might seem higher, LLMs provide substantial value through reduced engineering time and costs (no need to build and maintain multiple pipelines), shorter time-to-ship features (p-tuning is faster than building new pipelines), and simplified data requirements (no need for separate datasets per model). Additionally, model drift maintenance costs accumulate quickly with ensembles since each model needs regular fine-tuning. These factors often make LLMs more cost-effective overall despite higher per-query inference costs.'
  },
  {
    id: 'q11',
    question: 'What role does prompt quality play in LLM responses?',
    options: [
      'Only the length of the prompt matters, not its content',
      'The quality and relevance of the model\'s response is heavily dependent on prompt quality',
      'Prompts have minimal impact since LLMs are pre-trained on large datasets',
      'Prompts are only important for image generation models'
    ],
    correctAnswer: 1,
    explanation: 'The document explicitly states that "the quality and relevance of the response generated by the LLM is heavily dependent on the quality of the prompt." Prompts play a critical role in customizing LLMs to ensure responses meet specific use case requirements. This is why prompt engineering—the careful design of prompts—is so important. Even powerful LLMs can produce poor or irrelevant outputs if the prompt is poorly constructed or ambiguous.'
  },
  {
    id: 'q12',
    question: 'What flexibility advantage do LLMs have over purpose-built ensembles?',
    options: [
      'LLMs require less electricity to operate',
      'LLMs can handle a wide variety of tasks due to generation capabilities and diverse training data',
      'LLMs can only perform one task extremely well',
      'LLMs work offline without internet connectivity'
    ],
    correctAnswer: 1,
    explanation: 'LLMs provide flexibility through their generation capabilities and training on large, diverse datasets covering a wide variety of tasks. A single LLM can handle question answering, content generation, paraphrasing, personal assistant tasks, and more without requiring separate specialized models. Ensembles, by their design, are not as flexible—each component is purpose-built for specific tasks, and adding new capabilities requires building and maintaining additional models with their own pipelines.'
  },
  {
    id: 'q13',
    question: 'In the context of prompt engineering, what can prompts include to guide model responses?',
    options: [
      'Just keywords without any structure',
      'Instructions, questions, constraints on tone, style, length, and specific requirements',
      'Only simple questions',
      'Only numerical data'
    ],
    correctAnswer: 1,
    explanation: 'Prompts are highly versatile and can include instructions, questions, constraints, or requirements like tone, style, or desired response length. The document provides examples ranging from simple questions to complicated problems to specific instructions. For instance, a prompt to write a letter can specify tone, word limit, and topics to include. This versatility in prompt design is what makes prompt engineering a powerful tool for customizing LLM behavior.'
  },
  {
    id: 'q14',
    question: 'What is a key benefit of P-tuning for organizations managing multiple use cases?',
    options: [
      'P-tuning makes the base LLM smaller and faster',
      'Models p-tuned on different tasks can be saved separately without requiring large memory, enabling easy task-switching',
      'P-tuning eliminates the need for any training data',
      'P-tuning only works with image-based models'
    ],
    correctAnswer: 1,
    explanation: 'A significant advantage of P-tuning is that models tuned for different tasks can be saved as separate virtual token sets without consuming large amounts of memory. Since only the virtual tokens (not the entire LLM) are stored per task, organizations can maintain multiple specialized versions of the same base LLM and switch between them efficiently. This provides the customization benefits of multiple models without the storage and maintenance overhead.'
  },
  {
    id: 'q15',
    question: 'What does the term "emergent abilities" refer to in the context of large language models?',
    options: [
      'The speed at which models can process queries',
      'Additional capabilities that appear when models reach sufficient scale that weren\'t present in smaller models',
      'The ability to generate images from text',
      'The model\'s ability to work without internet connectivity'
    ],
    correctAnswer: 1,
    explanation: 'Emergent abilities refers to capabilities that appear when language models reach sufficient scale (in parameters, training data, and compute) that weren\'t present or weren\'t as effective in smaller models. The document notes that while models like BERT could tackle downstream tasks, LLMs at scale exhibit additional abilities that emerge from their size. These might include complex reasoning, better generalization, or improved performance on tasks the model wasn\'t explicitly trained for.'
  }
];

