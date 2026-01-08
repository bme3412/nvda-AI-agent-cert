import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to Gartner\'s prediction, what percentage of day-to-day work decisions will be made autonomously by agentic AI by 2028?',
    options: [
      'At least 15% of day-to-day work decisions, up from 0% in 2024 showing rapid adoption',
      'At least 5% of day-to-day work decisions, representing a modest but significant initial adoption phase',
      'At least 25% of day-to-day work decisions, indicating mainstream enterprise integration and deployment',
      'At least 35% of day-to-day work decisions, demonstrating complete transformation of workplace operations'
    ],
    correctAnswer: 0,
    explanation: 'Gartner predicts that by 2028, at least 15% of day-to-day work decisions will be made autonomously by agentic AI, up from 0% in 2024. This represents a significant and rapid adoption of agentic AI technology in enterprise environments.'
  },
  {
    id: 'q2',
    question: 'How does agentic AI differ from generative AI in terms of operational complexity?',
    options: [
      'Agentic AI engages in complex multi-step processes interacting with different systems, unlike generative AI\'s one-step process',
      'Generative AI handles multi-step processes while agentic AI focuses on simple one-step prompt-response interactions',
      'Both technologies operate identically with no meaningful distinction in their process complexity or capabilities',
      'Generative AI requires complex orchestration while agentic AI simply responds to straightforward user prompts'
    ],
    correctAnswer: 0,
    explanation: 'With agentic AI, we\'re not just prompting models and receiving answers in a simple one-step process. The AI engages in complex multi-step processes, often interacting with different systems to achieve desired outcomes.'
  },
  {
    id: 'q3',
    question: 'What role does the "critical thinker" function play in agentic AI systems?',
    options: [
      'It provides feedback on the planner\'s output and different agents\' execution, improving results through insights',
      'It writes the initial code that programmers use to build the foundational agent architecture and infrastructure',
      'It handles all customer-facing interactions while other agents focus exclusively on internal operations',
      'It monitors system performance metrics and automatically scales computational resources based on demand patterns'
    ],
    correctAnswer: 0,
    explanation: 'The critical thinker model offers feedback on the output of the planner and the different agents executing those instructions. The more feedback created, the more insights the model has, and the better the outputs become.'
  },
  {
    id: 'q4',
    question: 'What training challenge does the critical thinker model face before it can function effectively?',
    options: [
      'It requires hundreds or thousands of iterations with specific goals, plans, actions, and results before adequate training',
      'It needs only a few dozen examples to understand complex reasoning patterns and decision-making processes',
      'It must be trained exclusively on synthetic data to avoid bias from real-world examples and scenarios',
      'It can function immediately without training by leveraging pre-trained foundation models from external providers'
    ],
    correctAnswer: 0,
    explanation: 'The critical thinker needs training data closely grounded in reality with information on specific goals, plans, actions, and results. This can require many iterations—running through hundreds or even thousands of plans and results before the model has enough data.'
  },
  {
    id: 'q5',
    question: 'How does the programming paradigm shift with agentic AI compared to traditional software development?',
    options: [
      'With agentic AI, we specify the outcome and let the agent determine how to reach the goal autonomously',
      'Traditional software is unpredictable while agentic AI systems follow exact step-by-step instructions from engineers',
      'Agentic AI follows predetermined scripts while traditional programming allows for autonomous decision-making capabilities',
      'Both traditional programming and agentic AI require identical approaches with no fundamental differences in methodology'
    ],
    correctAnswer: 0,
    explanation: 'With traditional software, engineers write code telling computers exactly what to do step by step. With agentic AI, we lead with the outcome we want to achieve, and the agent determines how to reach the goal with some degree of autonomy.'
  },
  {
    id: 'q6',
    question: 'What similar challenge did early generative AI systems face that agentic AI now confronts?',
    options: [
      'Inconsistent and random outputs requiring fine-tuning, human feedback, and consistent training efforts for reliability',
      'Excessive energy consumption requiring specialized cooling systems and dedicated power infrastructure for operation',
      'Inability to process natural language inputs requiring users to learn specialized query languages and syntax',
      'Limited access to training data forcing developers to rely exclusively on synthetic datasets for model development'
    ],
    correctAnswer: 0,
    explanation: 'Early ChatGPT and LLM-based generative AI systems had consistency issues with outputs. Considerable improvements came from fine-tuning, human feedback loops, and consistent training efforts, which agentic AI will also need.'
  },
  {
    id: 'q7',
    question: 'Why are data privacy and security concerns potentially more serious for agentic AI than generative AI?',
    options: [
      'Software agents with high autonomy accessing many systems create increased risk of exposing private data from more sources',
      'Generative AI uses stronger encryption protocols that agentic AI systems cannot implement due to performance constraints',
      'Agentic AI stores all data permanently while generative AI automatically deletes information after processing requests',
      'Agentic AI requires internet connectivity while generative AI operates entirely offline within secure environments'
    ],
    correctAnswer: 0,
    explanation: 'While generative AI embeds information in models permanently, software agents have access to many different systems with high autonomy. This increased access creates greater risk of exposing private data from multiple sources.'
  },
  {
    id: 'q8',
    question: 'What approach is recommended for companies to address data privacy concerns when implementing agentic AI?',
    options: [
      'Start small with containerized data and anonymize information by stripping personally identifiable details before processing',
      'Immediately deploy across all systems to maximize efficiency and return on investment with minimal preparation',
      'Avoid using any real customer or employee data, relying exclusively on synthetic datasets for all operations',
      'Grant unlimited system access to agents to maximize their effectiveness and autonomous decision-making capabilities'
    ],
    correctAnswer: 0,
    explanation: 'Companies need to start small, containerizing data as much as possible to ensure it\'s not exposed beyond where needed. It\'s critical to anonymize data by obscuring users and stripping personally identifiable information before sending prompts to models.'
  },
  {
    id: 'q9',
    question: 'What distinguishes "Consumer agentic AI" in terms of business control and security implications?',
    options: [
      'Companies have zero control over the AI itself, only over the data and prompts they send to external models',
      'Companies have complete control over both the AI model and all data that flows through the system',
      'Companies control the AI model but have no control over what data users choose to input',
      'Companies have full control over model training but limited control over inference and output generation'
    ],
    correctAnswer: 0,
    explanation: 'Consumer agentic AI typically involves an internal user interface with an external AI model. As a company, we have zero control over the AI itself, only over the data and prompts we send to it.'
  },
  {
    id: 'q10',
    question: 'What risk does "Employee agentic AI" pose even though it\'s built internally for internal use?',
    options: [
      'Exposing highly private information to nonqualified users within the company who shouldn\'t have access to it',
      'External hackers can easily access internal systems due to insufficient external security measures and protocols',
      'Employees will become overly dependent on AI and lose all critical thinking and problem-solving capabilities',
      'Internal models always perform worse than external models, leading to poor decision-making and reduced productivity'
    ],
    correctAnswer: 0,
    explanation: 'While employee agentic AI has less risk than consumer-facing systems, it still poses the risk of exposing highly private information to nonqualified users within the company, even when built for internal use only.'
  },
  {
    id: 'q11',
    question: 'What fundamental data challenge do agentic AI systems face beyond what generative AI encounters?',
    options: [
      'Needing to access relevant, quality data across a wide variety of different platforms and sources simultaneously',
      'Agentic AI only works with structured data while generative AI handles all data types seamlessly',
      'Agentic AI requires manually labeled training data while generative AI uses completely unsupervised learning approaches',
      'Generative AI processes data faster than agentic AI which experiences significant performance bottlenecks'
    ],
    correctAnswer: 0,
    explanation: 'Generative AI models often fail when disconnected from accurate, current data. Agentic AI systems face additional issues because they need to access data across a wide variety of different platforms and sources for their multi-step processes.'
  },
  {
    id: 'q12',
    question: 'How can data streaming platforms (DSP) help address agentic AI\'s data quality challenges?',
    options: [
      'DSPs provide tools like Kafka Connect and Apache Flink to bring in data from disparate sources and communicate with models',
      'DSPs automatically generate synthetic training data to supplement insufficient real-world datasets for model training',
      'DSPs eliminate the need for any data preprocessing or cleaning by automatically correcting all quality issues',
      'DSPs store all historical data permanently, allowing agents to access complete information from any time period'
    ],
    correctAnswer: 0,
    explanation: 'Data streaming platforms provide engineers with tools to enable relevant answers using high-quality data. Developers can use Apache Kafka and Kafka Connect to bring in data from disparate sources, and Apache Flink to communicate with other models.'
  },
  {
    id: 'q13',
    question: 'What infrastructure investments are required for companies to implement agentic AI successfully?',
    options: [
      'Purchasing new hardware and GPUs, creating data infrastructure with specialized memory management and inference models',
      'Only software licensing fees with no hardware requirements since agentic AI runs exclusively in cloud environments',
      'Minimal investment since agentic AI reuses all existing infrastructure without requiring any new capabilities or resources',
      'Simple API integrations with existing systems requiring no additional computational resources or storage capacity'
    ],
    correctAnswer: 0,
    explanation: 'AI requires companies to purchase new hardware and GPUs, create new data infrastructure with memory management for caching and storage, and build inference models in-house. This represents significant upfront investment.'
  },
  {
    id: 'q14',
    question: 'What talent-related challenge do companies face when adopting agentic AI technology?',
    options: [
      'Hiring new talent with specialized AI skills or training existing workers on AI technologies and methodologies',
      'An oversupply of AI specialists makes hiring difficult due to candidates having too many competing offers',
      'AI specialists refuse to work on agentic AI projects preferring to focus exclusively on generative AI applications',
      'Automated tools eliminate all need for human talent, creating organizational resistance from existing employees'
    ],
    correctAnswer: 0,
    explanation: 'Companies need to hire new talent with specialized AI skills or train existing workers on AI technologies. This talent requirement, combined with infrastructure needs, means return on investment will take time, especially for early adopters.'
  },
  {
    id: 'q15',
    question: 'What evolution in Microsoft Copilot demonstrates the shift toward agentic AI capabilities?',
    options: [
      'Moving from automating certain code processes to acting agentically by writing and testing code autonomously',
      'Transitioning from cloud-based services to exclusively on-premises deployment models for enhanced security measures',
      'Shifting from enterprise focus to consumer applications targeting individual users rather than business customers',
      'Evolving from text-based interactions to exclusively voice-controlled interfaces for improved accessibility'
    ],
    correctAnswer: 0,
    explanation: 'Microsoft Copilot has evolved from simply automating certain code processes to acting in an agentic way to write and test code. This demonstrates how AI technology vendors are moving toward agentic capabilities.'
  }
];
