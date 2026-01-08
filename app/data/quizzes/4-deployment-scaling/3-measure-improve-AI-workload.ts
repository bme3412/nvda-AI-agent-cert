import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary purpose of NVIDIA DGX Cloud Benchmarking beyond comparing raw GPU specifications?',
    options: [
      'Exclusively measuring individual GPU floating-point operations without considering infrastructure or software factors',
      'Only comparing hourly cost per GPU across different cloud providers without performance analysis',
      'Primarily validating hardware specifications match manufacturer datasheets without application-level testing',
      'Assessing real-world, end-to-end AI workload performance and total cost of ownership across platforms'
    ],
    correctAnswer: 3,
    explanation: 'DGX Cloud Benchmarking assesses training and inference performance across AI workloads and platforms, accounting for infrastructure software, cloud platforms, and application configurations—not just GPUs. It focuses on real-world, end-to-end performance and total cost of ownership.'
  },
  {
    id: 'q2',
    question: 'What impressive performance improvement was achieved when training Llama 3 70B by scaling GPU count?',
    options: [
      'Approximately 50% reduction in training time with proportional 50% increase in overall costs',
      'About 75% reduction in time to solution requiring 80% additional investment in resources',
      'Nearly 85% faster training completion but with 60% higher total cost of ownership',
      'Up to 97% reduction in time to train 1 trillion tokens for only 2.6% cost increase'
    ],
    correctAnswer: 3,
    explanation: 'When training Llama 3 70B, scaling GPU count achieved up to a 97% reduction in time to train 1 trillion tokens (from 115.4 days to 3.8 days) for a cost increase of only 2.6%, demonstrating exceptional efficiency.'
  },
  {
    id: 'q3',
    question: 'Why does perfect linear scaling rarely occur when increasing GPU counts for AI training?',
    options: [
      'Increased communication overhead at higher GPU counts causes slight deviation from perfect linearity',
      'Hardware limitations in GPU memory bandwidth prevent any scaling beyond eight devices',
      'Software frameworks inherently cannot support more than 64 GPUs in single training job',
      'Cloud providers intentionally throttle performance to maintain consistent pricing across configurations'
    ],
    correctAnswer: 0,
    explanation: 'While well-optimized AI workloads can come very close to perfect linear scaling, the slight deviation at higher GPU counts is typically due to increased communication overhead between GPUs during distributed training operations.'
  },
  {
    id: 'q4',
    question: 'What key advantage does FP8 precision provide compared to BF16 for AI model training?',
    options: [
      'FP8 eliminates all numerical stability concerns making it universally superior to BF16',
      'FP8 provides identical performance to BF16 but requires less storage for checkpoints',
      'Only marginal performance gains insufficient to justify the complexity of implementation',
      'Significantly increased throughput and cost-efficiency due to higher math throughput and lower memory requirements'
    ],
    correctAnswer: 3,
    explanation: 'FP8 precision significantly increases throughput and cost-efficiency compared to BF16 due to higher math or communication throughput and lower memory bandwidth requirements. This can also enable training larger models on fewer GPUs.'
  },
  {
    id: 'q5',
    question: 'What challenge does FP8 precision introduce that requires specialized mitigation techniques?',
    options: [
      'Narrower dynamic range that can cause instability or divergence requiring per-tensor scaling techniques',
      'FP8 requires completely different optimizer algorithms that are incompatible with existing training pipelines',
      'FP8 consumes more GPU memory than BF16 despite offering higher computational throughput',
      'Complete incompatibility with modern GPU architectures limiting adoption to legacy systems'
    ],
    correctAnswer: 0,
    explanation: 'FP8 training introduces challenges such as narrower dynamic range that can cause instability or divergence. Specialized techniques providing per-tensor or sub-block scaling for conversions between BF16 and FP8 are required to maintain numerical stability.'
  },
  {
    id: 'q6',
    question: 'How does Transformer Engine in Hopper and Blackwell architectures help developers use FP8?',
    options: [
      'By completely eliminating the need for any BF16 computations throughout entire training process',
      'Automatically converting all operations to FP8 without requiring any developer intervention or configuration',
      'Exclusively handling inference workloads without providing any benefits during model training phases',
      'Enabling selective FP8 use on per-layer basis, using reduced precision only where it won\'t affect accuracy'
    ],
    correctAnswer: 3,
    explanation: 'Transformer Engine in Hopper and Blackwell architectures helps developers use FP8 selectively on a per-layer basis, using reduced precision only where it will not adversely affect model accuracy and training stability.'
  },
  {
    id: 'q7',
    question: 'What performance improvement did NeMo Framework optimization achieve in 2024?',
    options: [
      'Approximately 10% increase in platform performance through minor efficiency improvements and bug fixes',
      'Nearly 50% performance boost requiring significant changes to existing training workflows and configurations',
      'Roughly 15% improvement limited to specific model architectures without broader applicability',
      'About 25% increase in overall platform performance with proportional cost savings due to hardware-software co-engineering'
    ],
    correctAnswer: 3,
    explanation: 'In 2024, NeMo software optimization resulted in a 25% increase in overall platform performance with proportional cost savings to users. This was achieved through deep hardware and software co-engineering efforts.'
  },
  {
    id: 'q8',
    question: 'Why does framework selection significantly impact training performance even with identical models and hardware?',
    options: [
      'Only licensing costs vary between frameworks without any actual performance differences in training',
      'Framework selection exclusively affects user interface without influencing underlying computation efficiency',
      'Differences are negligible making framework choice irrelevant for performance optimization considerations',
      'Frameworks differ in workload infrastructure fingerprint, communication patterns, and continuous optimization efforts'
    ],
    correctAnswer: 3,
    explanation: 'Framework choice affects performance due to differences in workload infrastructure fingerprint (how it interacts with infrastructure), communication patterns (efficiency of data exchange), and continuous optimization efforts by framework developers.'
  },
  {
    id: 'q9',
    question: 'What advantage does training models in FP8 provide for subsequent inference deployment?',
    options: [
      'FP8-trained models require mandatory quantization before any inference deployment can begin',
      'FP8 training provides no inference benefits requiring full BF16 precision for deployment',
      'Inference performance remains identical regardless of training precision used during development',
      'Models can be deployed directly for FP8 inference reducing inference costs without additional quantization'
    ],
    correctAnswer: 3,
    explanation: 'Training a model in FP8 can additionally reduce inference costs since the model can be deployed directly for FP8 inference without requiring additional quantization steps or post-training modifications.'
  },
  {
    id: 'q10',
    question: 'What is the objective of NVIDIA DGX Cloud Benchmarking Performance Explorer for GPU count optimization?',
    options: [
      'Always recommending maximum available GPU count regardless of workload characteristics or budget constraints',
      'Exclusively minimizing costs without considering training time or throughput requirements for projects',
      'Only analyzing single-GPU performance without any multi-GPU or distributed training considerations',
      'Identifying ideal GPU count that minimizes both total training time and costs for given workloads'
    ],
    correctAnswer: 3,
    explanation: 'The Performance Explorer helps users identify the ideal GPU count that minimizes both total training time and costs. The objective is finding the right number of GPUs that maximizes throughput and minimizes expenses across projects.'
  },
  {
    id: 'q11',
    question: 'What benefit does completing training work sooner provide beyond just faster iteration cycles?',
    options: [
      'Slower time to market delaying when trained models can be deployed to generate organizational value',
      'Training completion speed has no relationship to business value generation or deployment timelines',
      'Only technical benefits without any impact on business outcomes or revenue generation potential',
      'Faster time to market where trained model can be deployed to generate value for organization'
    ],
    correctAnswer: 3,
    explanation: 'Completing training work sooner means faster time to market where the trained model can be deployed to generate value for the organization. This represents a significant business benefit beyond just technical efficiency.'
  },
  {
    id: 'q12',
    question: 'Which organizations are early adopters of DGX Cloud Benchmarking Performance Recipes?',
    options: [
      'Exclusively academic institutions and research laboratories without any commercial cloud provider participation',
      'Only NVIDIA\'s internal teams without external validation or adoption by industry partners',
      'Primarily small startups without involvement from major cloud infrastructure providers or enterprises',
      'Leading cloud providers AWS, Google Cloud, Microsoft Azure, Oracle Cloud, and partners CoreWeave, Crusoe, Nebius'
    ],
    correctAnswer: 3,
    explanation: 'Early adopters include leading cloud providers AWS, Google Cloud, Microsoft Azure, and Oracle Cloud, as well as NVIDIA cloud partners CoreWeave, Crusoe, and Nebius, demonstrating broad industry adoption.'
  },
  {
    id: 'q13',
    question: 'What approach does NVIDIA take to ensure DGX Cloud Benchmarking optimizations remain practical?',
    options: [
      'Exclusively using synthetic benchmarks without considering real-world application scenarios or workloads',
      'Focusing solely on theoretical maximum performance without validation against actual usage patterns',
      'Only testing with NVIDIA\'s internal workloads without external validation or customer input',
      'Characterizing real user workloads through Benchmarking Recipes to ground optimizations in practical scenarios'
    ],
    correctAnswer: 3,
    explanation: 'By leveraging DGX Cloud Benchmarking Recipes, NVIDIA characterizes real user workloads to ensure optimizations are grounded in practical scenarios. This ensures recommendations are relevant to actual deployment situations.'
  },
  {
    id: 'q14',
    question: 'Why does DGX Cloud Benchmarking emphasize continuous performance assessment beyond initial validation?',
    options: [
      'Initial validation provides sufficient data making ongoing assessment redundant and unnecessary overhead',
      'Hardware specifications never change making continuous monitoring wasteful use of engineering resources',
      'Only required for compliance purposes without any technical or performance optimization benefits',
      'Ensuring delivered throughput closely matches theoretical specifications throughout infrastructure lifecycle'
    ],
    correctAnswer: 3,
    explanation: 'Continuous performance assessment, beyond initial infrastructure validation, ensures that delivered throughput closely matches theoretical specifications. This ongoing validation helps identify when performance degrades or optimization opportunities arise.'
  },
  {
    id: 'q15',
    question: 'How does DGX Cloud Benchmarking evolve to remain relevant for AI industry needs?',
    options: [
      'Remaining static after initial release to maintain consistency and comparability across time periods',
      'Exclusively focusing on legacy hardware without adapting to new GPU architectures or frameworks',
      'Only updating pricing information without changing performance testing methodologies or model coverage',
      'Regular updates incorporating new models, emerging hardware platforms, and innovative software optimizations'
    ],
    correctAnswer: 3,
    explanation: 'DGX Cloud Benchmarking is designed to evolve alongside the AI industry with regular updates incorporating new models, emerging hardware platforms, and innovative software optimizations. This ensures users have access to most relevant and up-to-date insights.'
  }
];

