// Article-specific term definitions for Section 10: Human-AI Interaction
// These definitions are specific to individual articles in section 10

import { TermDefinition } from '../termDefinitions';

export const SECTION10_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  '10-Human-AI-Interaction/1-Data-Flywheel': {
    'AI Data Flywheel': {
      definition: 'Self-improving continuous loop where data collected from system interactions feeds model refinement, generating progressively better outcomes and higher-quality training data.',
      example: 'A customer service AI collecting user interactions, using feedback to improve responses, which generates better interactions that provide even more valuable training data for further improvement.'
    },
    'Continuous Improvement Architecture': {
      definition: 'Integrates feedback collection, model retraining, and deployment into ongoing process rather than discrete project phases.',
      example: 'A system that continuously collects user feedback, retrains models weekly, and deploys improvements automatically rather than annual model updates.'
    },
    'Institutional Knowledge Accumulation': {
      definition: 'Enables organizations to capture domain expertise, operational patterns, and user preferences in structured forms supporting AI customization.',
      example: 'Capturing customer service patterns, industry-specific terminology, and organizational preferences from interactions to customize AI for enterprise needs.'
    },
    'Workflow Architecture': {
      definition: 'Encompasses data processing, model customization, model evaluation, guardrails implementation, model deployment with retrieval augmentation, and enterprise data refinement.',
      example: 'A complete workflow from extracting raw data, fine-tuning models, validating performance, implementing safety controls, deploying with RAG, and continuously refining based on usage.'
    },
    'Data Processing': {
      definition: 'Extracts and refines raw enterprise data spanning text documents, images, videos, tables, and graphs, filtering noise and removing personally identifiable information.',
      example: 'Processing customer emails, support tickets, and documentation to create clean training datasets by removing PII, filtering toxic content, and standardizing formats.'
    },
    'Model Customization': {
      definition: 'Applies domain adaptation techniques including continued pretraining, parameter-efficient fine-tuning, and supervised learning incorporating enterprise-specific knowledge.',
      example: 'Fine-tuning a general LLM on company-specific documentation and terminology to understand internal processes and industry jargon.'
    },
    'Model Evaluation': {
      definition: 'Verifies customized models meet application requirements through systematic testing against performance criteria including accuracy metrics, robustness testing, and alignment verification.',
      example: 'Testing a customized model on 1000 diverse scenarios, measuring accuracy, testing robustness against edge cases, and verifying alignment with company values.'
    },
    'Guardrails Implementation': {
      definition: 'Ensures deployed models meet enterprise privacy, security, and safety requirements through input validation, output filtering, and behavior constraints.',
      example: 'Implementing guardrails to prevent models from generating sensitive information, responding to inappropriate queries, or violating company policies.'
    },
    'Model Deployment with Retrieval Augmentation': {
      definition: 'Enables accessing current information from expanding data sources beyond training data through retrieval mechanisms fetching relevant context at inference time.',
      example: 'Deploying a customer service AI that retrieves current product information from knowledge base at query time, ensuring responses reflect latest updates.'
    },
    'Enterprise Data Refinement': {
      definition: 'Captures inference logs, user feedback, and system behavior continuously updating institutional knowledge through classification and identification of valuable training examples.',
      example: 'Collecting user feedback on AI responses, classifying high-quality interactions, and adding them to training datasets for continuous improvement.'
    },
    'Model Drift Prevention': {
      definition: 'Maintains performance through real-world usage data capture, performance evaluation triggers, targeted refinement, and alignment maintenance.',
      example: 'Monitoring model performance, detecting when accuracy drops below 95%, and triggering targeted retraining on recent data to restore performance.'
    },
    'Model Distillation': {
      definition: 'Creates smaller efficient models reducing inference costs while preserving accuracy through knowledge transfer from large models to compact versions.',
      example: 'Distilling a 70B parameter model into a 7B parameter model, reducing inference costs by 90% while maintaining 95% of original accuracy.'
    },
    'Selective Retraining': {
      definition: 'Focuses computational resources on components requiring updates rather than retraining entire models, reducing costs and accelerating improvement cycles.',
      example: 'Retraining only the classification head of a model when new categories emerge, rather than retraining the entire model architecture.'
    },
    'Total Cost of Ownership Optimization': {
      definition: 'Balances improvement benefits against infrastructure and operational expenses including compute costs, inference expenses, storage requirements, and human effort.',
      example: 'Optimizing TCO by using efficient hardware, batch processing, and selective retraining to reduce costs while maintaining improvement velocity.'
    },
    'Automation Economics': {
      definition: 'Favors flywheel approaches where automation costs prove substantially lower than manual alternatives despite infrastructure investments.',
      example: 'Automated continuous improvement costing $10K/month but saving $50K/month compared to manual quarterly model updates, providing 5x ROI.'
    }
  },
  '10-Human-AI-Interaction/2-AI-Agents-HITl': {
    'Human-in-the-Loop (HITL)': {
      definition: 'AI systems that actively incorporate human input and oversight into operational processes, ensuring AI systems benefit from human judgment especially in areas where machines may lack context or ethical considerations.',
      example: 'A customer service AI that automatically handles routine queries but pauses to request human approval before processing refunds or handling sensitive complaints.'
    },
    'Agentic Applications': {
      definition: 'AI systems capable of independent, objective-driven action with Large Language Models assisting in task decomposition and creating chains of action.',
      example: 'An AI agent that receives a complex request, breaks it into sub-tasks, selects appropriate tools, executes a sequence of actions, and reaches a conclusion autonomously.'
    },
    'Tools': {
      definition: 'Defined capabilities agents can use to solve challenges, each with descriptions allowing agents to know when to select tools in sequence.',
      example: 'An agent with access to tools like API research portals (Arxiv, HuggingFace), search engines (Bing, Serp API), and Human-in-the-Loop tool for human consultation.'
    },
    'LangGraph': {
      definition: 'Graph-based orchestration framework that adds control to agent workflows through node and edge approach where each node constitutes a task or step, and edges are links between nodes subject to conditions.',
      example: 'A LangGraph workflow with nodes for "receive_query", "search_knowledge_base", "generate_response", and edges determining flow based on query complexity.'
    },
    'Interrupt Nodes': {
      definition: 'Designated points in agent workflows where execution pauses and waits for human input, creating natural collaboration points where human judgment enhances automated workflows.',
      example: 'An interrupt node before executing a financial transaction, pausing workflow to wait for human approval before proceeding with payment processing.'
    },
    'Prior Interrupts': {
      definition: 'Human involvement before a particular node to grant approval or validate inputs before execution.',
      example: 'Requiring human approval before an agent sends a high-value purchase order, ensuring human oversight before critical actions.'
    },
    'Post Interrupts': {
      definition: 'Human involvement after a particular node to check transactions or validate outputs post interaction.',
      example: 'A human reviewing AI-generated content after creation but before publication, checking for accuracy and appropriateness.'
    },
    'Humans as Tools': {
      definition: 'Paradigm treating humans as tools within agent workflows rather than external handoff points, enabling selective engagement where automation continues even after human interaction.',
      example: 'An AI agent handling customer service, invoking a human expert only for specific technical questions, then continuing automation seamlessly after receiving human input.'
    },
    'Selective Engagement': {
      definition: 'Human involvement accessed only when necessary, creating efficient collaboration patterns rather than binary handoff models where entire workflows transfer to humans.',
      example: 'An AI agent autonomously processing 90% of requests, selectively engaging humans only for complex cases requiring judgment, then continuing automation.'
    },
    'Workflow Continuity': {
      definition: 'Maintaining context and workflow state even when humans provide input, enabling seamless automation continuation after human intervention.',
      example: 'An AI agent maintaining conversation history and workflow state when pausing for human approval, seamlessly resuming automation after receiving human input.'
    },
    'Graph-Based Orchestration': {
      definition: 'Method for creating state machines for conversational flow by defining them as graphs, making it easier to visualize and manage complex agent workflows.',
      example: 'Visualizing an agent workflow as a graph with nodes representing steps (search, analyze, respond) and edges showing conditional flow paths.'
    },
    'Transparency': {
      definition: 'LangGraph makes agents more transparent by allowing inspection of behavior and striking balance between autonomy and following defined sequence.',
      example: 'Inspecting a LangGraph agent\'s execution path to understand which nodes were executed and why, providing visibility into decision-making process.'
    },
    'LangGraph Cloud': {
      definition: 'Service for deploying and scaling LangGraph applications, featuring a Studio for easy prototyping, debugging, and sharing.',
      example: 'Using LangGraph Cloud Studio to prototype agent workflows, debug execution paths, and share working examples with team members.'
    }
  },
  '10-Human-AI-Interaction/3-HITL-Holistic': {
    'Holistic Human-in-the-Loop AI': {
      definition: 'Integrates human oversight throughout entire AI lifecycle from design and training through deployment and ongoing operation, ensuring human judgment, validation, and intervention embedded into AI agent lifecycle.',
      example: 'A comprehensive HITL system where humans participate in data annotation, model training feedback, pre-deployment validation, and continuous production monitoring.'
    },
    'Continuous Human Involvement': {
      definition: 'Humans participate at various stages of the AI lifecycle including training, validation, and real-time operation enabling real-time adjustments and continual improvement.',
      example: 'Human experts continuously reviewing AI outputs during training, validating model performance before deployment, and monitoring decisions in production for ongoing refinement.'
    },
    'Iterative Learning': {
      definition: 'AI system learns and evolves by incorporating feedback from human experts, refining algorithms and enhancing ability to handle complex or ambiguous situations.',
      example: 'An AI model receiving feedback from human reviewers on each batch of predictions, using corrections to improve accuracy on subsequent batches.'
    },
    'Ethical Oversight': {
      definition: 'Human oversight crucial in ensuring AI decisions adhere to ethical standards and societal norms, reducing risk of bias and unintended consequences.',
      example: 'Human ethicists reviewing AI hiring recommendations to ensure fairness across demographic groups and prevent discriminatory patterns.'
    },
    'Enhanced Flexibility': {
      definition: 'Human operators can intervene, recalibrate, and guide AI\'s learning process, allowing system to adapt more readily to changing environments or new information.',
      example: 'Human operators adjusting AI decision thresholds when business conditions change, enabling rapid adaptation without full retraining.'
    },
    'Data Annotation': {
      definition: 'Human experts label and categorize data, providing foundational "ground truth" that AI models learn from, with quality directly influencing AI accuracy and reliability.',
      example: 'Medical experts annotating X-ray images with diagnoses, creating labeled dataset that trains AI to identify medical conditions accurately.'
    },
    'Model Training with Human Feedback': {
      definition: 'Human feedback helps refine AI predictions during training, with experts reviewing outputs, correcting errors, and guiding model learning process.',
      example: 'Human reviewers correcting AI-generated summaries during training, providing feedback that improves model\'s summarization quality over iterations.'
    },
    'Validation and Testing': {
      definition: 'Human experts rigorously test AI system against benchmarks before deployment to ensure it generalizes well and performs reliably, intervening to correct errors or biases.',
      example: 'Human testers evaluating AI system on diverse test cases, identifying failure modes, and ensuring system is fair and ready for real-world application.'
    },
    'Continuous Feedback Loops': {
      definition: 'Maintain human involvement through ongoing monitoring and refinement, with experts providing continuous feedback allowing AI to adapt to new data and challenges.',
      example: 'Human reviewers monitoring AI outputs in production, providing feedback on errors, enabling model to adapt and maintain accuracy over time.'
    },
    'Quality Control': {
      definition: 'Human intervention helps identify and correct errors that automated systems might overlook, ensuring accuracy and reliability.',
      example: 'Human reviewers catching subtle errors in AI-generated reports that automated systems miss, ensuring high-quality outputs.'
    },
    'Expert Insight': {
      definition: 'Provides context and domain-specific knowledge that enhances AI\'s decision-making capabilities.',
      example: 'Medical experts providing clinical context that helps AI understand nuanced patient situations beyond what training data alone can convey.'
    },
    'Bias Mitigation': {
      definition: 'Humans can detect and address biases in data and algorithms, promoting fairness and equity.',
      example: 'Human reviewers identifying that AI hiring system favors certain demographics, providing corrective feedback to retrain model for fairness.'
    },
    'Regulatory Adherence': {
      definition: 'Human oversight maintains compliance with legal and ethical standards, reducing risk of reputational damage.',
      example: 'Legal experts reviewing AI decisions to ensure compliance with employment laws, preventing discriminatory practices.'
    },
    'Dynamic Environments': {
      definition: 'Human input allows AI systems to adapt to new situations and evolving data landscapes.',
      example: 'Human operators updating AI system when new regulations emerge, enabling rapid adaptation without full retraining.'
    },
    'Complex Problem-Solving': {
      definition: 'Humans guide AI through complex scenarios that require judgment beyond algorithmic capabilities.',
      example: 'Human experts guiding AI through ambiguous customer service scenarios requiring nuanced judgment and empathy.'
    },
    'Transparency': {
      definition: 'Increases transparency in AI operations, making it easier for stakeholders to understand and trust AI decisions.',
      example: 'Human oversight providing explanations for AI decisions, building stakeholder confidence through visible accountability.'
    },
    'Accountability': {
      definition: 'Creates shared responsibility between humans and AI, fostering culture of accountability within organizations.',
      example: 'Clear assignment of responsibility where humans oversee AI decisions, ensuring accountability for outcomes.'
    },
    'Scalability Concerns': {
      definition: 'Need for human involvement limits ability to scale HITL AI systems efficiently, creating bottlenecks as data and task complexity grow.',
      example: 'Human review bottleneck limiting AI system to processing 1000 requests per day when automation could handle 10,000 without human oversight.'
    },
    'Cost Implications': {
      definition: 'Continuous human input increases costs, especially in specialized fields requiring skilled labor, making HITL AI potentially less cost-effective compared to fully automated systems.',
      example: 'HITL AI requiring $50K/month in human reviewer costs, potentially offsetting automation savings compared to fully autonomous system.'
    },
    'Dependency Issues': {
      definition: 'Over-reliance on human input can hinder AI autonomy, slowing decision-making and reducing efficiency gains expected from AI.',
      example: 'AI system waiting for human approval on every decision, reducing response time from seconds to hours, negating automation benefits.'
    }
  },
  '10-Human-AI-Interaction/4-HITL-One-Reach': {
    'Human-in-the-Loop Agentic AI': {
      definition: 'Ensures that while machines operate autonomously, human oversight is embedded at key decision points to safeguard reliability, ethics, and compliance in AI systems.',
      example: 'An autonomous AI agent handling customer service, with human oversight embedded at critical decision points like refund approvals or sensitive complaint handling.'
    },
    'Continuous Feedback Loop': {
      definition: 'People stay involved at key moments such as checking outputs, fixing errors, and guiding learning, rather than letting AI agents run completely on their own.',
      example: 'Human reviewers continuously monitoring AI agent outputs, providing corrections and guidance that improve agent performance over time.'
    },
    'Augmented Intelligence': {
      definition: 'Combines machine speed with human judgment, where AI agents analyze vast amounts of data and find patterns, while humans bring context, ethics, and nuance to decision-making.',
      example: 'AI agent rapidly analyzing thousands of customer interactions to identify patterns, with human experts providing ethical judgment and contextual understanding for decisions.'
    },
    'Ethical Lapses': {
      definition: 'AI can optimize for efficiency but overlook societal norms or individual rights, requiring human oversight to ensure ethical alignment.',
      example: 'AI system optimizing for cost reduction by denying all insurance claims, requiring human oversight to ensure ethical treatment of legitimate claims.'
    },
    'Security Threats': {
      definition: 'Autonomous agents can be manipulated or exploited by malicious actors, leading to misuse or unintended consequences.',
      example: 'An AI agent manipulated through prompt injection to reveal sensitive information, requiring human oversight to detect and prevent such attacks.'
    },
    'Lack of Contextual Judgment': {
      definition: 'AI often lacks nuance and empathy required for ambiguous or sensitive situations.',
      example: 'AI agent providing technically correct but insensitive response to customer experiencing personal crisis, requiring human judgment for appropriate handling.'
    },
    'Regulatory Non-Compliance': {
      definition: 'Automated AI decision-making can inadvertently violate laws or industry standards, exposing organizations to legal and reputational harm.',
      example: 'AI system automatically denying loan applications based on factors that violate fair lending laws, requiring human review for compliance.'
    },
    'Strategic Oversight': {
      definition: 'Human oversight serves as critical checkpoint ensuring AI decisions align with organizational values, ethical standards, and regulatory requirements.',
      example: 'In healthcare, physicians reviewing AI diagnostic recommendations to ensure patient safety and ethical treatment before finalizing diagnoses.'
    },
    'Real-Time Error Correction': {
      definition: 'Enables humans to catch and correct errors early, preventing them from cascading into larger failures.',
      example: 'Human reviewer catching AI error in financial transaction before it executes, preventing cascading failures that could cause significant financial loss.'
    },
    'Bias Mitigation and Model Refinement': {
      definition: 'Human reviewers can spot skewed outputs, provide corrective feedback, and help retrain models, reducing risk of systemic bias.',
      example: 'Human reviewers identifying that AI hiring system shows gender bias, providing corrective feedback used to retrain model for fairness.'
    },
    'Reinforcement Learning from Human Feedback (RLHF)': {
      definition: 'Used to align agentic AI behavior with human values and organizational goals through human feedback.',
      example: 'Using RLHF to train AI agent to prefer responses that human reviewers rate as helpful and ethical, aligning agent behavior with human values.'
    },
    'Trust, Transparency, and Explainability': {
      definition: 'Stakeholders more likely to trust Agentic AI systems when they know humans are monitoring, validating, and able to intervene, with explainable AI tools clarifying decision logic.',
      example: 'Providing explanations for AI decisions showing which factors influenced outcomes, with human oversight visible to stakeholders, building trust.'
    },
    'Tiered Oversight': {
      definition: 'Routine tasks handled autonomously by AI, while high-stakes or complex cases automatically trigger human review.',
      example: 'AI agent autonomously handling 80% of customer service queries, automatically escalating sensitive complaints or complex issues to human agents.'
    },
    'Explainable AI (XAI)': {
      definition: 'Tools ensure human overseers understand AI decision logic, supporting transparency and compliance.',
      example: 'XAI tools showing that AI denied loan application based on credit score, income, and debt-to-income ratio, enabling human reviewer to understand and validate decision.'
    },
    'Audit Trails': {
      definition: 'Records of all AI-driven decisions enabling post-hoc analysis and regulatory reporting.',
      example: 'Maintaining comprehensive audit trail of all AI decisions including inputs, reasoning, outputs, and human reviews for regulatory compliance.'
    },
    'Training and Empowerment': {
      definition: 'Equips human overseers with AI literacy, intuitive dashboards, and authority to intervene or override AI actions.',
      example: 'Training human reviewers on AI system capabilities, providing dashboard showing decision confidence scores, and enabling override authority for questionable decisions.'
    },
    'Adaptive Autonomy': {
      definition: 'Systems where AI autonomy dynamically adjusts based on context, risk, or confidence levels.',
      example: 'Autonomous vehicle operating independently in clear conditions, but yielding control to human driver in complex or dangerous scenarios based on risk assessment.'
    },
    'Continuous Feedback and Model Improvement': {
      definition: 'Integrates RLHF and other feedback mechanisms ensuring Agentic AI systems learn from human expertise and adapt to new challenges.',
      example: 'Continuous feedback loop where human corrections improve AI agent performance, with improvements visible in subsequent interactions.'
    },
    'Scalability Bottlenecks': {
      definition: 'Human oversight can become bottleneck as AI handles more tasks, limiting automation speed and scale.',
      example: 'Human review bottleneck preventing AI system from scaling beyond 1000 requests per day, limiting automation benefits.'
    },
    'Cost of Continuous Oversight': {
      definition: 'Skilled human reviewers add labor costs that can offset automation savings if not carefully managed.',
      example: 'Human oversight costing $30K/month, potentially offsetting $40K/month automation savings, requiring optimization of oversight efficiency.'
    },
    'Human Error and Bias': {
      definition: 'Human overseers can introduce their own biases, contradicting goal of fair AI decision-making.',
      example: 'Human reviewers unconsciously applying personal biases when validating AI decisions, potentially introducing new sources of unfairness.'
    },
    'Skill Gap in Workforce': {
      definition: 'Employees lack AI literacy to effectively review and validate AI decisions, requiring substantial training.',
      example: 'Employees unfamiliar with AI capabilities struggling to provide effective oversight, requiring comprehensive training programs.'
    },
    'Integration Complexity': {
      definition: 'Seamlessly integrating human feedback into AI systems requires sophisticated architecture; poor integration wastes capabilities.',
      example: 'Complex integration required to route AI decisions to appropriate human reviewers based on expertise, risk level, and workload.'
    },
    'Consistency Challenges': {
      definition: 'Maintaining audit trails and ensuring consistent decision-making across different reviewers creates operational complexity.',
      example: 'Ensuring consistent review standards across multiple human reviewers, requiring standardized guidelines and quality assurance processes.'
    },
    'Edge Case Determination': {
      definition: 'Figuring out when human involvement is needed versus unnecessary overhead, requiring careful system design.',
      example: 'Determining threshold for human review: should 95% confidence decisions require review, or only 80% confidence decisions?'
    },
    'GSX Agent Platform': {
      definition: 'OneReach.ai platform enabling organizations to create and orchestrate tailored Agentic AI solutions with built-in Human-in-the-Loop capability.',
      example: 'Using GSX platform to create customer service agent with automatic escalation to human experts for complex cases, maintaining seamless workflow.'
    }
  },
  '10-Human-AI-Interaction/5-Aporia-Ai-Guardrails': {
    'AI Guardrails': {
      definition: 'Policies and frameworks designed to ensure that Large Language Models operate within ethical, legal, and technical boundaries, preventing AI from causing harm, making biased decisions, or being misused.',
      example: 'Implementing guardrails to prevent AI from generating harmful content, making discriminatory decisions, or responding to malicious prompt injections.'
    },
    'Ethical Guardrails': {
      definition: 'Ensure LLM responses are aligned with human values and societal norms, checking against bias and discrimination based on gender, race, or age.',
      example: 'Guardrails preventing AI from generating responses that discriminate against protected groups or violate ethical standards.'
    },
    'Security Guardrails': {
      definition: 'Ensure the app complies with laws and regulations, handling personal data and protecting individuals\' rights.',
      example: 'Guardrails ensuring AI system complies with GDPR, HIPAA, or other regulations, protecting user privacy and data rights.'
    },
    'Technical Guardrails': {
      definition: 'Protect the app against attempts of prompt injections often carried out by hackers or users trying to reveal sensitive information, and safeguard against hallucinations.',
      example: 'Guardrails detecting and blocking prompt injection attempts like "Ignore previous instructions" or preventing AI from generating false information.'
    },
    'Prompt Engineering': {
      definition: 'Involves designing and refining the backend prompts given to AI models, but relying solely on prompt engineering is not sufficient to mitigate hallucinations.',
      example: 'Crafting detailed prompts with instructions and examples, but finding that adding too many guidelines degrades model\'s ability to follow instructions accurately.'
    },
    'Retrieval-Augmented Generation (RAG)': {
      definition: 'Connects the Large Language Model to a vector database, allowing the LLM to provide results based mostly on the data provided, but does not entirely solve the problem of hallucinations.',
      example: 'Using RAG to ground AI responses in knowledge base, but still experiencing hallucinations when AI generates information not in retrieved context.'
    },
    'Hallucinations': {
      definition: 'AI generates false or misleading information that often occurs with AI, requiring guardrails to detect and mitigate such issues.',
      example: 'AI chatbot promising a discount that doesn\'t actually exist, leading to customer complaints and potential legal liability.'
    },
    'Guarding Against Bias': {
      definition: 'AI systems can inadvertently perpetuate or amplify biases present in training data, with guardrails helping identify and correct these biases.',
      example: 'AI hiring tool trained on biased data showing preference for certain demographics, with guardrails detecting and correcting these biases.'
    },
    'Privacy and Data Protection': {
      definition: 'Generative AI often requires access to vast amounts of data, raising concerns about privacy and data protection, with guardrails ensuring compliance with data protection laws.',
      example: 'Healthcare AI system implementing guardrails to ensure HIPAA compliance, protecting patient data and implementing secure data handling practices.'
    },
    'Data Anonymization': {
      definition: 'Technique for protecting personal information by removing or masking identifying details.',
      example: 'Anonymizing patient records by removing names, addresses, and other PII before using data for AI training.'
    },
    'Preventing Misuse': {
      definition: 'Helps prevent misuse of generative AI for malicious purposes, such as by influencing the bot to say certain things, through robust monitoring and control mechanisms.',
      example: 'Detecting and blocking attempts to manipulate AI chatbot into providing inappropriate responses or revealing sensitive information.'
    },
    'Technical Challenges': {
      definition: 'Implementing technical guardrails requires advanced engineering and robust testing, ensuring AI systems can handle edge cases and unexpected inputs without failing.',
      example: 'Developing guardrails that can detect subtle prompt injection attempts while maintaining system performance and not blocking legitimate queries.'
    },
    'Operational Challenges': {
      definition: 'Operationalizing AI guardrails involves integrating them into existing workflows and systems, requiring collaboration across different teams.',
      example: 'Integrating guardrails into customer service workflow requires coordination between data scientists, engineers, legal experts, and customer service teams.'
    },
    'Legal and Regulatory Challenges': {
      definition: 'Navigating complex landscape of laws and regulations governing AI, ensuring compliance with diverse legal frameworks across different jurisdictions.',
      example: 'Ensuring AI system complies with EU AI Act, GDPR, and industry-specific regulations across multiple countries, requiring continuous adaptation as regulations evolve.'
    },
    'External Observer': {
      definition: 'AI guardrails act as external observer, ensuring that results received by AI system are accurate and legitimate.',
      example: 'Guardrails system monitoring AI outputs independently, detecting when AI generates false information or violates policies, blocking inappropriate responses.'
    }
  },
  '10-Human-AI-Interaction/6-CoT-prompting': {
    'Chain of Thought (CoT) Prompting': {
      definition: 'Prompt engineering technique where we use examples or instructions to improve reasoning capabilities of LLM models so they can solve problems step by step, breaking complex questions into smaller steps.',
      example: 'Asking an LLM to solve "What is 3+4+19-12?" by showing step-by-step reasoning: first add 3+4=7, then 7+19=26, then 26-12=14, improving accuracy.'
    },
    'Step-by-Step Reasoning': {
      definition: 'LLM model provides result as well as intermediate steps required to generate it, improving responses to problems requiring multiple reasoning and calculation steps.',
      example: 'LLM solving math problem by showing: "Step 1: Calculate 5+7=12, Step 2: Add 9 to get 21, Step 3: Subtract 12 to get 9. Final answer: 9."'
    },
    'Human Cognitive Processes': {
      definition: 'Chain of thought prompting works by teaching LLM applications to replicate human cognitive processes to solve problems through specialized examples and instructions.',
      example: 'Providing examples showing how humans break down complex problems into steps, teaching LLM to follow similar reasoning patterns.'
    },
    'Zero-Shot Chain of Thought': {
      definition: 'Prompting technique where we tell model to show reasoning behind output using instructions without providing examples, using phrases like "Solve this problem step by step" or "Let\'s think step by step".',
      example: 'Prompting LLM with "Solve this problem step by step: What is 5+7+9-12?" without providing examples, relying on instruction to generate reasoning.'
    },
    'Few-Shot Chain of Thought': {
      definition: 'Giving LLM model example problems and their reasoning sequences so it can learn from them and logically generate steps for similar problems.',
      example: 'Providing examples: "3+4+19-12: Step 1: 3+4=7, Step 2: 7+19=26, Step 3: 26-12=14. Now solve 5+7+9-12 step by step."'
    },
    'Automatic Chain of Thought': {
      definition: 'Uses zero-shot and few-shot Chain of Thought to generate reasoning sequences automatically by creating dataset, clustering questions, generating reasoning for examples, and inserting them into prompts.',
      example: 'Automatically clustering similar math problems, generating reasoning for one example from each cluster using zero-shot CoT, then using these examples for few-shot prompting of new problems.'
    },
    'Question Clustering': {
      definition: 'Grouping questions into multiple clusters using sentence transformer models to encode questions and find cosine similarity between them.',
      example: 'Clustering math problems by type (addition, subtraction, multiplication), then selecting representative examples from each cluster for few-shot prompting.'
    },
    'Reasoning Chain Generation': {
      definition: 'Generating reasoning sequences for example questions using zero-shot Chain of Thought, then inserting them into prompts for new questions.',
      example: 'Using zero-shot CoT to generate step-by-step reasoning for example problems, then including these examples in prompts to guide reasoning for similar new problems.'
    },
    'Prompt Templates': {
      definition: 'Used in LangChain to implement chain-of-thought prompting, allowing structured prompts with instructions or examples.',
      example: 'Creating LangChain prompt template with instruction "Solve this step by step" or including example problems with reasoning sequences.'
    },
    'Supervised Output Generation': {
      definition: 'Chain of Thought prompting helps supervise LLM models\' output generation process, allowing model to pay more attention to each part of question.',
      example: 'Breaking complex question into steps forces LLM to consider each component carefully, improving overall accuracy compared to direct answers.'
    },
    'Debugging Capability': {
      definition: 'Chain of Thought makes it easier to debug LLM model when it produces wrong outputs by identifying exact step where error occurs.',
      example: 'Seeing that LLM correctly calculated 5+7=12 and 12+9=21, but incorrectly calculated 21-12=8, identifying subtraction step as error source.'
    },
    'Performance Limitations': {
      definition: 'Chain of Thought fails to improve performance of small-scale LLMs, with performance gains only visible for large-scale LLMs with very large number of parameters.',
      example: 'Small 1B parameter model producing reasoning sequences that seem logical but are incorrect, performing worse with CoT than standard prompts.'
    },
    'Large-Scale LLMs': {
      definition: 'LLMs with very large number of parameters where Chain of Thought prompting shows performance gains, unlike small-scale models.',
      example: 'GPT-4 or Claude showing significant accuracy improvements with Chain of Thought prompting, while smaller models show no improvement or degradation.'
    },
    'Cosine Similarity': {
      definition: 'Used in Automatic Chain of Thought to find similarity between questions for clustering, enabling selection of most relevant examples.',
      example: 'Calculating cosine similarity between question embeddings to find most similar problems, selecting best examples for few-shot prompting.'
    },
    'Sentence Transformer Models': {
      definition: 'Used to encode questions in Automatic Chain of Thought, converting text into vectors for similarity computation.',
      example: 'Using sentence transformer to convert "What is 5+7?" into vector representation, enabling similarity comparison with other math problems.'
    }
  }
};
