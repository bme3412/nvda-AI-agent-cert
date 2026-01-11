// Article-specific term definitions for Section 9: Safety and Ethics
// These definitions are specific to individual articles in section 9

import { TermDefinition } from '../termDefinitions';

export const SECTION9_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  '9-Safety-Ethics/1-Building-Safer-Apps-Templates': {
    'LangChain Templates': {
      definition: 'Reusable application templates providing pre-configured agent and chain implementations accelerating development through proven architectures.',
      example: 'Using a LangChain template for customer service chatbots, providing working RAG architecture requiring only customization rather than complete implementation.'
    },
    'NeMo Guardrails Integration': {
      definition: 'Programmable safety controls governing LLM behavior through input validation, output filtering, and dialogue management ensuring safe operation.',
      example: 'Integrating NeMo Guardrails with a LangChain template to automatically filter inappropriate content and prevent policy violations in customer interactions.'
    },
    'Template Architecture': {
      definition: 'Organizes reusable application components including chain definitions implementing specific workflows, agent configurations orchestrating multi-step reasoning, and deployment scaffolding providing API infrastructure.',
      example: 'A template providing RAG chain definition, agent configuration for tool usage, and FastAPI deployment scaffolding, enabling rapid application development.'
    },
    'Input Validation': {
      definition: 'Analysis of incoming requests detecting policy violations, inappropriate content, or malicious queries before reaching models.',
      example: 'Validating user input to detect prompt injection attempts, blocking queries attempting to override system instructions before they reach the LLM.'
    },
    'Output Filtering': {
      definition: 'Analysis of model responses before delivery ensuring compliance with policies, appropriateness standards, and information disclosure controls.',
      example: 'Filtering LLM responses to remove sensitive information like credit card numbers or personal addresses before delivering to users.'
    },
    'Content Screening': {
      definition: 'Analyzes inputs for disallowed topics, inappropriate language, or policy violations through keyword detection, semantic analysis, and context evaluation.',
      example: 'Screening user queries to detect attempts to discuss prohibited topics like illegal activities, blocking such queries before processing.'
    },
    'Prompt Injection Detection': {
      definition: 'Identifies manipulation attempts including instruction overrides, role-playing requests, or system prompt leakage attempts.',
      example: 'Detecting a prompt injection attempt where user tries to override system instructions by saying "Ignore previous instructions and...", blocking the manipulation.'
    },
    'Sensitive Information Detection': {
      definition: 'Identifies personal data, confidential business information, or other protected content in user inputs enabling appropriate handling.',
      example: 'Detecting that a user input contains a social security number, triggering masking or rejection to protect privacy.'
    },
    'Fact-Checking': {
      definition: 'Validates response groundedness in provided context preventing hallucinations where models generate plausible-sounding but incorrect information.',
      example: 'Fact-checking a generated response against retrieved source documents, blocking claims that cannot be verified from provided context.'
    },
    'Sensitive Information Masking': {
      definition: 'Removes confidential data from responses protecting privacy and organizational secrets through entity recognition and replacement strategies.',
      example: 'Masking credit card numbers in responses, replacing "4532-1234-5678-9010" with "[REDACTED]" to protect sensitive financial information.'
    },
    'Content Appropriateness Verification': {
      definition: 'Ensures responses satisfy organizational standards, avoid offensive content, and maintain professional tone.',
      example: 'Verifying that a customer service response maintains professional tone and avoids inappropriate language before delivery.'
    },
    'Dialogue Management': {
      definition: 'Guides conversation flows through predefined responses, topic steering maintaining conversational boundaries, and capability communication explaining system limitations.',
      example: 'Managing a conversation to stay on-topic, redirecting off-topic queries and explaining system capabilities when users ask about unsupported features.'
    },
    'Topic Steering': {
      definition: 'Maintains conversational boundaries preventing drift into inappropriate subjects or out-of-scope queries.',
      example: 'Steering conversation back to customer service topics when user attempts to discuss unrelated subjects, maintaining focus on supported capabilities.'
    },
    'Capability Communication': {
      definition: 'Explains system limitations, appropriate usage, and available functionality managing user expectations.',
      example: 'Communicating to users that the system can answer product questions but cannot process orders, setting appropriate expectations.'
    },
    'Predefined Response Handling': {
      definition: 'Routes specific query types to template responses ensuring consistent high-quality answers for common scenarios.',
      example: 'Handling "What are your hours?" queries with predefined response rather than generating new text, ensuring consistency and accuracy.'
    },
    'Self-Checking Mechanisms': {
      definition: 'Validates inputs and outputs against policies through automated evaluation using validation prompts, rule-based checking, and semantic analysis.',
      example: 'A self-checking mechanism using an LLM to evaluate whether a response violates company policy, providing explanation for validation decisions.'
    },
    'API Exposure': {
      definition: 'Provides HTTP endpoints enabling application invocation through standard protocols, leveraging FastAPI framework for high-performance implementation.',
      example: 'Exposing a LangChain template application as REST API with endpoints for query processing, enabling integration with web and mobile applications.'
    },
    'Authentication Integration': {
      definition: 'Supports access control through token validation, permission verification, and audit logging.',
      example: 'Integrating OAuth2 authentication to restrict API access to authorized users, tracking usage for compliance and cost allocation.'
    }
  },
  '9-Safety-Ethics/2-AI-ML-Software-Med-Device': {
    'AI/ML Medical Devices': {
      definition: 'Machine-based systems making predictions, recommendations, or decisions influencing healthcare delivery through automated analysis of clinical data.',
      example: 'A diagnostic imaging system using AI to identify tumors in medical scans, providing recommendations to radiologists for review.'
    },
    'Adaptive Learning': {
      definition: 'Capabilities enabling devices to refine diagnostic accuracy as exposure to diverse patient populations increases, adapting algorithms to individual patient characteristics.',
      example: 'A monitoring device learning patient-specific baseline patterns, adapting alert thresholds to reduce false alarms while maintaining sensitivity.'
    },
    'Premarket Review': {
      definition: 'Pathways determining market authorization through risk-appropriate evaluation mechanisms including clearance, de novo classification, and premarket approval.',
      example: 'A new AI diagnostic device undergoing premarket review to demonstrate safety and effectiveness before market placement.'
    },
    'Modification Review': {
      definition: 'Requirements addressing post-market changes including software updates, algorithm refinements, and functionality enhancements.',
      example: 'Reviewing an algorithm update that improves diagnostic accuracy, determining whether it requires regulatory submission based on significance.'
    },
    'Predetermined Change Control Plans': {
      definition: 'Authorization of modification types without individual premarket reviews for continuously learning systems, specifying allowable changes, validation requirements, and monitoring mechanisms.',
      example: 'A predetermined change control plan authorizing algorithm updates within specified performance bounds without individual premarket reviews, enabling continuous improvement.'
    },
    'Change Control Architecture': {
      definition: 'Enables continuous improvement while maintaining regulatory oversight through prospective change authorization and ongoing performance monitoring.',
      example: 'A change control system specifying that algorithm updates improving accuracy by <5% can proceed with validation testing, while larger changes require regulatory review.'
    },
    'Modification Scope Specification': {
      definition: 'Defines allowable changes including algorithm updates, training data additions, and functionality enhancements.',
      example: 'Specifying that modifications can include adding training data from new patient populations but cannot change core algorithm architecture without review.'
    },
    'Validation Requirements': {
      definition: 'Demonstrate modification safety through testing protocols, performance benchmarking, and risk assessment.',
      example: 'Validating an algorithm update by testing on 1000 diverse cases, demonstrating accuracy improvement without introducing new failure modes.'
    },
    'Performance Monitoring': {
      definition: 'Mechanisms track device behavior detecting unexpected modification impacts through clinical outcome tracking and adverse event surveillance.',
      example: 'Monitoring device performance after algorithm update, tracking diagnostic accuracy and false positive rates to detect any degradation.'
    },
    'Clinical Validation': {
      definition: 'Demonstrates real-world performance through prospective studies, retrospective analysis, or post-market surveillance across diverse patient populations.',
      example: 'Conducting a clinical study with 500 patients across multiple sites, validating that diagnostic device maintains accuracy in real-world conditions.'
    },
    'Failure Mode Analysis': {
      definition: 'Identifies potential device errors, assesses error probabilities, and evaluates harm severity informing risk mitigation strategies.',
      example: 'Analyzing potential failure modes including false negatives missing critical diagnoses, false positives causing unnecessary procedures, and system failures.'
    },
    'Human Factors Evaluation': {
      definition: 'Assesses device usability, error susceptibility, and clinical workflow integration.',
      example: 'Evaluating how clinicians interact with AI diagnostic recommendations, identifying usability issues that could lead to misinterpretation or errors.'
    },
    'Post-Market Surveillance': {
      definition: 'Tracks real-world performance through adverse event reporting, clinical outcome monitoring, and device malfunction analysis.',
      example: 'Monitoring device performance in production, collecting adverse event reports and analyzing clinical outcomes to detect rare issues not found in premarket testing.'
    },
    'Performance Characteristic Disclosure': {
      definition: 'Communicates device capabilities, limitations, and appropriate use contexts including accuracy metrics and contraindication specifications.',
      example: 'Disclosing that a diagnostic device achieves 95% sensitivity and 98% specificity for specific conditions, with limitations in pediatric populations.'
    },
    'Training Data Attribute Description': {
      definition: 'Reveals dataset characteristics including population demographics, data sources, and labeling methodologies.',
      example: 'Describing training data as containing 10,000 images from adult patients (ages 18-75) across 5 medical centers, labeled by board-certified radiologists.'
    },
    'Algorithm Limitation Communication': {
      definition: 'Identifies scenarios where device performance may degrade including edge cases, out-of-distribution inputs, and known failure modes.',
      example: 'Communicating that device accuracy decreases for images with unusual artifacts or for patient populations not well-represented in training data.'
    }
  },
  '9-Safety-Ethics/3-Proposed-Regulation-Harmonized': {
    'EU AI Act': {
      definition: 'Harmonized regulatory framework establishing rules for artificial intelligence system development, deployment, and usage across European Union member states.',
      example: 'The EU AI Act requiring high-risk AI systems to undergo conformity assessment, maintain documentation, and implement human oversight before market placement.'
    },
    'Risk-Based Regulatory Approach': {
      definition: 'Tailors requirements proportionally to potential harms where unacceptable risks face prohibition, high-risk systems require compliance, and low-risk systems face minimal obligations.',
      example: 'Classifying a medical diagnostic AI as high-risk requiring comprehensive compliance, while a recommendation system for movies faces minimal transparency obligations.'
    },
    'Prohibited Practices': {
      definition: 'AI applications deemed unacceptable as contravening fundamental values including subliminal manipulation, social scoring by public authorities, and real-time remote biometric identification.',
      example: 'Prohibiting AI systems that manipulate users through subliminal techniques or use social scoring to discriminate against individuals.'
    },
    'High-Risk Classification': {
      definition: 'Applies to AI systems posing significant threats to health, safety, or fundamental rights based on intended purpose and deployment context.',
      example: 'Classifying an AI system used for credit scoring as high-risk due to fundamental rights implications, requiring comprehensive compliance measures.'
    },
    'Standalone High-Risk Domains': {
      definition: 'Encompass biometric identification, critical infrastructure management, education access, employment management, essential service access, law enforcement, migration control, and justice administration.',
      example: 'An AI system used for hiring decisions classified as high-risk due to employment management domain, requiring bias testing and human oversight.'
    },
    'Data Governance Requirements': {
      definition: 'Ensure training, validation, and testing datasets exhibit appropriate quality characteristics including relevance, representativeness, error minimization, and completeness.',
      example: 'Requiring that training data for a credit scoring system represents diverse populations to prevent bias against protected groups.'
    },
    'Documentation and Record-Keeping': {
      definition: 'Obligations mandate maintaining technical documentation enabling conformity assessment and traceability information supporting accountability.',
      example: 'Maintaining documentation describing system architecture, training data characteristics, validation results, and risk management processes for regulatory review.'
    },
    'Transparency and Information Provision': {
      definition: 'Requirements ensure users receive necessary information for appropriate system usage including capabilities, limitations, accuracy levels, and human oversight requirements.',
      example: 'Providing users with information that an AI system makes recommendations with 85% accuracy, requires human review for critical decisions, and has limitations in edge cases.'
    },
    'Human Oversight': {
      definition: 'Mechanisms ensure natural persons can understand system functioning, intervene when necessary, and override system outputs.',
      example: 'Implementing human oversight where a human reviewer can review, modify, or reject AI-generated credit decisions before final approval.'
    },
    'Robustness and Accuracy Requirements': {
      definition: 'Mandate systems achieve appropriate performance levels considering state-of-the-art capabilities, with robustness encompassing resilience against errors and adversarial attacks.',
      example: 'Requiring that a medical diagnostic AI achieves accuracy comparable to state-of-the-art while maintaining robustness against adversarial inputs.'
    },
    'Cybersecurity Requirements': {
      definition: 'Address AI-specific vulnerabilities including training data poisoning, adversarial examples, and model extraction attacks alongside traditional infrastructure security.',
      example: 'Implementing protections against adversarial attacks that could manipulate AI system outputs, ensuring security appropriate to risk level.'
    },
    'Conformity Assessment': {
      definition: 'Pathway selection depends on system classification with product safety components following existing procedures and standalone high-risk systems generally undergoing internal control-based assessment.',
      example: 'A high-risk AI system undergoing internal control assessment where provider self-assesses compliance, documents evidence, and implements quality management systems.'
    },
    'CE Marking': {
      definition: 'Indicates conformity enabling free circulation within internal market, providing visible indication of regulatory compliance.',
      example: 'Affixing CE marking to an AI system after successful conformity assessment, enabling market placement across all EU member states.'
    },
    'Regulatory Sandboxes': {
      definition: 'Provide controlled environments for testing innovative AI systems under regulatory supervision before market placement.',
      example: 'A startup testing a novel AI application in a regulatory sandbox, receiving guidance on compliance while validating innovation before full market access.'
    },
    'SME Support Measures': {
      definition: 'Address specific challenges faced by smaller organizations including reduced conformity assessment fees, technical guidance, and awareness initiatives.',
      example: 'Providing reduced fees and simplified procedures for small companies developing AI systems, recognizing disproportionate compliance burden.'
    }
  },
  '9-Safety-Ethics/4-Ethically-Alinged-Design': {
    'AI Ethics Standards Framework': {
      definition: 'Systematic approach to embedding ethical considerations throughout artificial intelligence system lifecycles addressing risks and responsibilities emerging from autonomous intelligent systems.',
      example: 'An ethics framework requiring fairness assessment, transparency documentation, and human oversight throughout AI system development and deployment.'
    },
    'Applied Ethics': {
      definition: 'Implementation-focused standards providing concrete assessment criteria, measurable requirements, and verification procedures enabling organizations to demonstrate ethical compliance.',
      example: 'An applied ethics standard specifying measurable fairness metrics (demographic parity within 5%), enabling objective evaluation rather than subjective assessment.'
    },
    'Lifecycle Integration': {
      definition: 'Ensures ethical considerations influence decisions from initial concept through deployment and ongoing operation rather than constituting afterthoughts.',
      example: 'Integrating ethics review at each development phase: requirements (fairness goals), design (bias mitigation), testing (fairness validation), and deployment (monitoring).'
    },
    'Ethics Assessment Certification': {
      definition: 'Provides independent verification of AI system ethical characteristics through structured evaluation against defined criteria.',
      example: 'A third-party organization certifying that an AI hiring system meets fairness standards, transparency requirements, and accountability mechanisms.'
    },
    'Third-Party Independence': {
      definition: 'Ensures assessment credibility through separation from commercial interests, expertise in ethical evaluation methodologies, and accountability to certification standards.',
      example: 'An independent ethics certification body with no financial interest in system approval, providing credible verification of ethical compliance.'
    },
    'Certificate Validity Periods': {
      definition: 'Require periodic reassessment ensuring continued compliance as systems evolve, organizational practices change, or ethical standards advance.',
      example: 'An ethics certificate valid for 2 years, requiring renewal assessment to ensure system maintains ethical standards after updates or changes.'
    },
    'Ethics Training Programs': {
      definition: 'Bridge gap between abstract principles and practical implementation providing participants with actionable knowledge for embedding ethics throughout development processes.',
      example: 'Training developers on identifying bias in training data, implementing fairness metrics, and conducting ethical impact assessments during system design.'
    },
    'System Design Training': {
      definition: 'Focuses on incorporating ethical considerations from planning phase through detailed design and implementation.',
      example: 'Training product managers on ethical requirements elicitation, helping them identify fairness, transparency, and accountability needs during planning.'
    },
    'Procurement Training': {
      definition: 'Addresses organizational challenges in acquiring AI systems where purchasing decisions affect ethical outcomes despite limited technical transparency.',
      example: 'Training procurement professionals on evaluating vendor ethics practices, contract requirements for ethical AI, and ongoing monitoring mechanisms.'
    },
    'Standards Development': {
      definition: 'Processes employ inclusive participation mechanisms ensuring diverse perspectives inform framework development including technical experts, ethicists, and affected communities.',
      example: 'Developing an AI ethics standard through working groups including engineers, ethicists, civil society representatives, and affected community members.'
    },
    'Sociotechnical Approach': {
      definition: 'Recognizes AI ethics spans technical characteristics and social contexts requiring integrated consideration.',
      example: 'Addressing algorithmic fairness (technical) alongside governance structures and stakeholder engagement (social) for comprehensive ethical AI.'
    },
    'Living Standards Evolution': {
      definition: 'Enables updating frameworks as technology advances, ethical understanding deepens, or new challenges emerge.',
      example: 'Updating an AI ethics standard to address new challenges from generative AI, incorporating lessons learned from deployment experience.'
    },
    'Age-Appropriate Design': {
      definition: 'Standards address children\'s unique vulnerabilities in digital environments requiring specialized protections.',
      example: 'Designing an AI educational system with stronger privacy protections for children, limiting data collection and requiring parental consent.'
    },
    'Data Minimization': {
      definition: 'Principles prove particularly important for children where extensive data collection creates lifetime privacy risks.',
      example: 'Limiting data collection for a children\'s AI application to only what\'s necessary for functionality, avoiding extensive profiling.'
    },
    'Parental Involvement Mechanisms': {
      definition: 'Enable guardian oversight while respecting children\'s legitimate privacy interests, balancing parental authority against developmental needs.',
      example: 'Providing parents visibility into AI system interactions with their children while respecting age-appropriate privacy for older children.'
    }
  },
  '9-Safety-Ethics/5-Securing-Gen-AI-Deployments': {
    'NIM and NeMo Guardrails Integration': {
      definition: 'Architectural pattern combining high-performance AI model inference microservices with programmable safety controls enabling secure enterprise deployment of generative AI applications.',
      example: 'Deploying a GPT model through NIM microservices with NeMo Guardrails enforcing content policies, ensuring secure and compliant enterprise deployment.'
    },
    'NIM Microservices': {
      definition: 'Containerized microservices for optimized model serving across diverse infrastructure including data centers, workstations, and cloud environments.',
      example: 'Deploying a Llama 2 model as a NIM microservice in Kubernetes, providing optimized inference with standard APIs for enterprise integration.'
    },
    'Guardrails Runtime Integration': {
      definition: 'Provides programmable controls governing LLM behavior through input validation, output filtering, and dialog management operating transparently without model modifications.',
      example: 'Integrating NeMo Guardrails runtime to automatically validate inputs, filter outputs, and manage dialogue flows for a customer service chatbot.'
    },
    'Malicious Use Prevention': {
      definition: 'Addresses attempts to exploit models for unauthorized purposes including data exfiltration, generating harmful content, or circumventing access controls.',
      example: 'Preventing attempts to extract sensitive information by detecting queries designed to elicit confidential data, blocking such requests before processing.'
    },
    'Jailbreak Detection': {
      definition: 'Identifies attempts to override model instructions, bypass safety controls, or manipulate behavior through adversarial prompts.',
      example: 'Detecting a jailbreak attempt where user tries to override safety instructions by using role-playing prompts, blocking the manipulation.'
    },
    'Information Protection': {
      definition: 'Mechanisms prevent disclosing sensitive data through query responses including sensitive entity detection, redaction, and query rejection.',
      example: 'Detecting that a generated response contains a customer\'s credit card number, automatically redacting it before delivery to protect privacy.'
    },
    'Topical Rails': {
      definition: 'Constrain conversations to approved subjects through semantic similarity matching between user inputs and defined topic boundaries.',
      example: 'Configuring topical rails to allow discussion of product features but block queries about internal company policies, maintaining appropriate boundaries.'
    },
    'Dialog Management': {
      definition: 'Orchestrates multi-turn conversations maintaining context, enforcing flow constraints, and ensuring appropriate progression.',
      example: 'Managing a customer service conversation to maintain professional tone, handle multi-turn interactions, and ensure appropriate conversation flow.'
    },
    'Fact-Checking Validation': {
      definition: 'Verifies response groundedness in provided context preventing hallucinations by comparing generated responses against source materials.',
      example: 'Validating that a RAG-generated response about product specifications matches retrieved documentation, blocking unsupported claims.'
    },
    'Embedding Model Integration': {
      definition: 'Enables semantic similarity computation for efficient policy matching through vector space operations.',
      example: 'Using embedding models to compute semantic similarity between user queries and policy definitions, enabling robust content filtering beyond keyword matching.'
    },
    'Declarative Policy Specification': {
      definition: 'Enables defining guardrails through structured configuration rather than procedural code, proving more maintainable and enabling non-technical stakeholders to define policies.',
      example: 'Defining content policies in YAML configuration specifying prohibited topics, allowed domains, and response templates, enabling policy updates without code changes.'
    },
    'Authentication Integration': {
      definition: 'Ensures only authorized users access inference services through API key validation, token-based authentication, or organizational identity providers.',
      example: 'Integrating with enterprise SSO to authenticate users before allowing API access, ensuring only authorized personnel can invoke AI services.'
    },
    'Audit Trail Generation': {
      definition: 'Captures request details, guardrails decisions, and response characteristics enabling retrospective analysis.',
      example: 'Logging all API requests with user IDs, input queries, guardrails decisions (blocked/allowed), and response characteristics for compliance auditing.'
    },
    'Latency Minimization': {
      definition: 'Addresses real-time application requirements through efficient guardrails processing and optimized inference.',
      example: 'Optimizing guardrails processing to complete in <100ms, ensuring total response latency remains acceptable for interactive applications.'
    },
    'Caching Strategies': {
      definition: 'Reduce redundant computation for repeated queries or common patterns including embedding caching, response caching, and policy evaluation caching.',
      example: 'Caching embeddings for common queries and policy evaluations, reducing computation time from 200ms to 20ms for repeated patterns.'
    }
  },
  '9-Safety-Ethics/6-Metrics-Agentic-Ai': {
    'Agentic Tool Use Evaluation': {
      definition: 'Systematic assessment methodologies for measuring autonomous agent performance across multiple dimensions including goal achievement, tool selection accuracy, conversation management, and topic adherence.',
      example: 'Evaluating a customer service agent by measuring tool selection accuracy (95%), goal achievement rate (88%), and topic adherence (92%).'
    },
    'Multi-Dimensional Assessment': {
      definition: 'Recognizes agent quality emerges from multiple factors beyond simple accuracy metrics including tool selection, argument accuracy, sequence alignment, and goal achievement.',
      example: 'Assessing an agent across dimensions: correctly selects tools (90%), provides accurate arguments (85%), follows correct sequences (95%), and achieves goals (88%).'
    },
    'Reference-Based Evaluation': {
      definition: 'Compares agent behaviors against expected tool sequences, predetermined outcomes, or defined topic boundaries enabling objective quantitative assessment.',
      example: 'Evaluating agent tool usage against expected sequence: [search, filter, format], measuring exact match accuracy.'
    },
    'Reference-Free Evaluation': {
      definition: 'Infers expected behaviors from conversation context without explicit specifications, enabling evaluation without ground truth.',
      example: 'Inferring agent goal from conversation context ("user wants product information"), evaluating whether agent achieved inferred goal.'
    },
    'Topic Adherence Evaluation': {
      definition: 'Measures how frequently agent responses stay within allowed topics, with precision measuring drift tendency and recall measuring constraint tendency.',
      example: 'Measuring topic adherence: precision 95% (stays on-topic), recall 90% (covers allowed topics), F1-score 92.5% (balanced performance).'
    },
    'Precision-Focused Evaluation': {
      definition: 'Measures how frequently agent responses stay within allowed topics revealing tendency toward topic drift.',
      example: 'High precision (98%) indicating agent rarely drifts off-topic, appropriate for regulated domains where off-topic responses create liability.'
    },
    'Recall-Focused Evaluation': {
      definition: 'Measures how comprehensively agents address allowed topics revealing tendency toward excessive constraint.',
      example: 'High recall (95%) indicating agent covers full topic scope, appropriate when comprehensiveness matters more than occasional drift.'
    },
    'Tool Call Accuracy': {
      definition: 'Validates agents invoke tools in correct order and with accurate arguments, with sequence alignment and argument accuracy assessment.',
      example: 'Evaluating tool call accuracy: sequence correct (90%), arguments correct (95%), overall accuracy 85.5% (multiplicative combination).'
    },
    'Sequence Alignment': {
      definition: 'Validates agents invoke tools in correct order when workflow logic demands specific sequencing.',
      example: 'Validating that agent performs authentication before data access, ensuring correct sequence: [authenticate, query, format].'
    },
    'Argument Accuracy': {
      definition: 'Validates tool parameters match expected values ensuring correct operation specification.',
      example: 'Validating that database query tool receives correct SQL query string and connection parameters, ensuring successful execution.'
    },
    'Tool Call F1-Score': {
      definition: 'Combines precision (fraction of invoked tools that are correct) and recall (fraction of required tools actually invoked) providing balanced evaluation.',
      example: 'Tool call F1-score: precision 90% (most invoked tools are correct), recall 85% (most required tools are invoked), F1-score 87.4%.'
    },
    'Agent Goal Accuracy': {
      definition: 'Validates ultimate objective achievement regardless of intermediate steps or tool selections, focusing on outcome rather than method.',
      example: 'Evaluating goal accuracy: agent achieves user objective (find product information) in 88% of cases, regardless of specific tools used.'
    },
    'Binary Scoring': {
      definition: 'Provides clear pass-fail assessment useful for strict validation requirements.',
      example: 'Binary evaluation: agent either correctly completes task (1) or fails (0), providing clear deployment readiness determination.'
    },
    'Compositional Scoring': {
      definition: 'Combines sequence and argument assessment providing nuanced evaluation where both dimensions must be correct.',
      example: 'Compositional score: sequence accuracy (0.9) × argument accuracy (0.95) = 0.855 overall score, recognizing both must be correct.'
    },
    'Strict Ordering Requirements': {
      definition: 'Apply when workflow logic demands specific execution sequences with sequential dependencies.',
      example: 'Requiring strict ordering: authentication must precede data access, search must precede filtering, validation must precede processing.'
    },
    'Flexible Ordering Allowances': {
      definition: 'Apply when operations prove independent or commutative, permitting flexible sequencing.',
      example: 'Allowing flexible ordering for parallel information gathering from multiple APIs, where order doesn\'t affect correctness.'
    },
    'Precision Optimization': {
      definition: 'Suits scenarios where false positives prove more costly than false negatives, avoiding undesired behaviors.',
      example: 'Optimizing for precision in financial transactions, preferring to miss some valid operations rather than execute incorrect ones.'
    },
    'Recall Optimization': {
      definition: 'Suits scenarios where false negatives prove more costly than false positives, ensuring comprehensive coverage.',
      example: 'Optimizing for recall in security monitoring, preferring false alarms rather than missing actual threats.'
    },
    'Balanced Assessment': {
      definition: 'Suits scenarios where both false positives and false negatives impose costs requiring trade-off consideration, using F1-scores.',
      example: 'Balanced evaluation using F1-score when both missing required tools and invoking unnecessary tools impose costs.'
    },
    'Multi-Metric Dashboards': {
      definition: 'Provide holistic performance visibility revealing strengths, weaknesses, and optimization opportunities across multiple dimensions.',
      example: 'A dashboard displaying tool accuracy (90%), goal achievement (88%), topic adherence (92%), and latency (2s), providing comprehensive agent performance view.'
    }
  },
  '9-Safety-Ethics/7-AI-Regulatory': {
    'AI for Regulatory Compliance': {
      definition: 'Application of machine learning, natural language processing, predictive analytics, and robotic process automation to automate, enhance, and optimize organizational adherence to laws, regulations, and industry standards.',
      example: 'Using AI to automatically analyze financial regulations, extract compliance requirements, and monitor transactions for violations in real-time.'
    },
    'Regulatory Technology': {
      definition: 'RegTech - Integration addressing compliance complexity emerging from multi-jurisdictional operations, rapidly evolving regulatory landscapes, and extensive documentation requirements.',
      example: 'A RegTech platform automatically tracking regulatory changes across multiple jurisdictions, identifying applicable requirements, and updating compliance procedures.'
    },
    'Compliance Automation': {
      definition: 'Encompasses document analysis extracting requirements, transaction monitoring detecting violations, reporting generation, and change management tracking regulatory updates.',
      example: 'Automating compliance by analyzing 10,000 pages of regulations, extracting 500 specific requirements, and generating compliance checklists automatically.'
    },
    'Anomaly Detection': {
      definition: 'Identifies unusual patterns deviating from expected behaviors revealing potential compliance violations.',
      example: 'Detecting anomalous transaction patterns indicating potential money laundering, flagging for investigation when transactions deviate from normal patterns.'
    },
    'Trend Analysis': {
      definition: 'Employs deep learning for understanding complex patterns in regulatory data, enforcement actions, and industry dynamics.',
      example: 'Analyzing regulatory enforcement trends to predict areas receiving increased scrutiny, enabling proactive compliance strategy adaptation.'
    },
    'Risk Prediction Models': {
      definition: 'Forecast potential high-risk areas, activities, or individuals within organizations enabling preventive interventions.',
      example: 'Predicting that certain business units have elevated compliance risk based on historical violations, enabling targeted monitoring and controls.'
    },
    'Document Analysis': {
      definition: 'Automates reviewing extensive regulatory text extracting requirements, obligations, and deadlines.',
      example: 'Analyzing 5,000 pages of new financial regulations, extracting 200 specific compliance obligations relevant to the organization.'
    },
    'Regulatory Interpretation': {
      definition: 'Converts legal text into actionable requirements specifying what organizations must do, report, or avoid.',
      example: 'Interpreting complex regulatory language into concrete operational procedures: "maintain records" becomes specific data retention and access requirements.'
    },
    'Communication Surveillance': {
      definition: 'Monitors emails, chats, and other internal communications detecting policy violations, inappropriate content, or potential misconduct.',
      example: 'Monitoring employee communications for prohibited content like insider trading discussions, detecting violations in real-time.'
    },
    'Regulatory Reporting Automation': {
      definition: 'Generates required disclosures by extracting relevant information from operational systems, formatting according to regulatory specifications, and validating completeness.',
      example: 'Automatically generating quarterly regulatory reports by extracting transaction data, formatting according to regulatory templates, and validating completeness.'
    },
    'Entity Extraction': {
      definition: 'Identifies relevant persons, organizations, products, or transactions mentioned in documents or communications.',
      example: 'Extracting all company names, individuals, and transaction amounts from regulatory documents, enabling structured analysis and tracking.'
    },
    'Sentiment Analysis': {
      definition: 'Evaluates tone and intent in communications detecting potentially problematic interactions, customer complaints, or employee concerns.',
      example: 'Analyzing customer service communications for negative sentiment indicating potential complaints requiring compliance review.'
    },
    'Breach Prediction': {
      definition: 'Forecasts potential compliance violations enabling preventive interventions before issues materialize.',
      example: 'Predicting that current transaction patterns indicate 30% probability of compliance violation, triggering preventive review and controls.'
    },
    'Operational Impact Forecasting': {
      definition: 'Predicts how regulatory changes affect business processes, systems, and resources enabling proactive adaptation planning.',
      example: 'Forecasting that new data protection regulation will require 6 months and $500K to implement, enabling proactive resource allocation.'
    },
    'Risk Area Identification': {
      definition: 'Reveals business segments, product lines, or operational processes exhibiting elevated compliance risk.',
      example: 'Identifying that international operations have 3x higher compliance risk than domestic, enabling targeted monitoring and controls.'
    },
    'Routine Compliance Checking': {
      definition: 'Automates periodic verification of compliance parameters across systems ensuring continued adherence without manual intervention.',
      example: 'Automatically checking daily that all systems maintain required security configurations, access controls, and data retention policies.'
    },
    'Automated Alert Generation': {
      definition: 'Provides instant notifications when compliance metrics exceed acceptable ranges or potential violations occur.',
      example: 'Alerting compliance team immediately when transaction monitoring detects pattern matching known money laundering schemes.'
    },
    'Compliance Workflow Orchestration': {
      definition: 'Coordinates multi-step compliance processes including approvals, reviews, and documentation.',
      example: 'Orchestrating compliance workflow: automated check → manager review → legal approval → documentation, ensuring proper sequence and completion.'
    },
    'Fraud Detection': {
      definition: 'Leverages anomaly detection identifying suspicious transaction patterns potentially indicating illegal activities.',
      example: 'Detecting fraud through pattern recognition identifying coordinated transactions across multiple accounts indicating money laundering scheme.'
    },
    'Transaction Monitoring': {
      definition: 'Analyzes vast transaction volumes identifying potential policy violations, market manipulation, or prohibited activities.',
      example: 'Monitoring all financial transactions in real-time, detecting patterns indicating insider trading or market manipulation.'
    }
  },
  '9-Safety-Ethics/8-Responsible-Ai': {
    'Responsible AI': {
      definition: 'Framework ensuring AI systems operate ethically, fairly, and in alignment with human values throughout their lifecycle.',
      example: 'Implementing Responsible AI framework requiring fairness assessment, transparency documentation, accountability mechanisms, and human oversight for all AI deployments.'
    },
    'Transparency': {
      definition: 'Disclosure of AI system characteristics including intended use, performance characteristics, training data attributes, and limitations enabling informed decision-making.',
      example: 'Disclosing that a hiring AI system uses resume analysis with 85% accuracy, trained on data from 2018-2022, with limitations for non-traditional career paths.'
    },
    'Fairness Assessment': {
      definition: 'Detection of performance disparities across user groups defined by demographic characteristics, usage patterns, or other attributes.',
      example: 'Assessing fairness by measuring that loan approval rates are within 5% across demographic groups, ensuring equitable treatment.'
    },
    'Bias Mitigation': {
      definition: 'Approaches ensuring AI systems do not discriminate against protected groups or exhibit unfair treatment.',
      example: 'Mitigating bias by ensuring training data represents diverse populations and implementing fairness constraints during model training.'
    },
    'Accountability': {
      definition: 'Mechanisms ensuring responsibility for AI system decisions and outcomes with clear ownership and audit trails.',
      example: 'Establishing accountability by designating a responsible AI officer, maintaining decision audit trails, and providing mechanisms for addressing issues.'
    },
    'Human Oversight': {
      definition: 'Integration of human judgment into AI decision processes ensuring alignment with human values and ethical principles.',
      example: 'Implementing human oversight where critical AI decisions require human review and approval before final execution.'
    },
    'Regulatory Compliance': {
      definition: 'Ensuring AI systems adhere to applicable laws, regulations, and industry standards.',
      example: 'Ensuring AI system complies with GDPR for data protection, EU AI Act for high-risk systems, and industry-specific regulations.'
    },
    'Data Protection': {
      definition: 'Mechanisms for handling personal information, sensitive data, and confidential business information including access controls and encryption.',
      example: 'Protecting data through encryption at rest and in transit, access controls limiting data access to authorized personnel, and data minimization principles.'
    },
    'Algorithmic Transparency': {
      definition: 'Disclosure of AI system decision processes enabling understanding of how systems reach conclusions.',
      example: 'Providing explanations for AI decisions showing which factors influenced outcomes, enabling users to understand and challenge decisions.'
    },
    'Safety Assurance': {
      definition: 'Mechanisms ensuring AI systems operate safely without causing harm including safety testing, risk assessment, and monitoring.',
      example: 'Conducting safety testing for an autonomous vehicle AI, assessing risks, implementing safeguards, and monitoring performance in production.'
    },
    'Ethical Risk Assessment': {
      definition: 'Systematic identification and evaluation of ethical risks throughout AI system lifecycle.',
      example: 'Assessing ethical risks including potential bias, privacy violations, and safety concerns during AI system design and deployment.'
    },
    'Stakeholder Engagement': {
      definition: 'Integrates affected communities, technical experts, governance professionals, and civil society into governance processes.',
      example: 'Engaging with user communities, ethicists, and civil society organizations when developing AI systems affecting public services.'
    },
    'Continuous Monitoring': {
      definition: 'Ongoing assessment of AI system behavior detecting degradation, bias emergence, or safety issues.',
      example: 'Continuously monitoring AI system performance, detecting when accuracy degrades or bias emerges, triggering investigation and remediation.'
    },
    'Incident Response': {
      definition: 'Procedures for addressing AI system failures, bias incidents, or safety violations when they occur.',
      example: 'Establishing incident response procedures including immediate containment, investigation, remediation, and communication for AI system failures.'
    },
    'Ethical Design Principles': {
      definition: 'Fundamental principles guiding AI system design including fairness, transparency, accountability, and human-centered design.',
      example: 'Applying ethical design principles by ensuring systems are fair, explainable, accountable, and designed to augment rather than replace human judgment.'
    },
    'Value Alignment': {
      definition: 'Ensuring AI systems align with human values and ethical principles throughout their operation.',
      example: 'Aligning AI system values by training on data reflecting human values, implementing value constraints, and monitoring for value drift.'
    },
    'Explainability': {
      definition: 'Capability to explain AI system decisions in understandable terms enabling users to comprehend reasoning.',
      example: 'Providing explainability by showing which input features most influenced a credit decision, enabling users to understand and challenge outcomes.'
    },
    'Robustness': {
      definition: 'Ensuring AI systems maintain performance and safety despite adversarial inputs, distribution shifts, or environmental changes.',
      example: 'Ensuring robustness by testing systems against adversarial attacks, distribution shifts, and edge cases, maintaining performance across conditions.'
    },
    'Privacy by Design': {
      definition: 'Integrating privacy protections into AI system design from the outset rather than as afterthoughts.',
      example: 'Implementing privacy by design through data minimization, encryption, access controls, and privacy-preserving techniques built into system architecture.'
    },
    'Human-Centered Design': {
      definition: 'Designing AI systems to augment human capabilities and serve human needs rather than replacing human judgment.',
      example: 'Designing an AI assistant to support human decision-making by providing information and recommendations while maintaining human control over final decisions.'
    }
  }
};
