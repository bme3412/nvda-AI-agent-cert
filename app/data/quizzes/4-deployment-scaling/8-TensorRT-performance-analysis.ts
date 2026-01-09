import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Why is performance profiling particularly important for Large Language Model (LLM) applications?',
    options: [
      'Long runtimes and diverse workloads during inference make understanding performance critical for optimization',
      'LLMs always run at optimal performance without requiring any analysis or optimization efforts',
      'Profiling exclusively benefits hardware vendors without providing value to application developers',
      'LLM performance is entirely deterministic making profiling unnecessary for production deployments'
    ],
    correctAnswer: 0,
    explanation: 'Given the potential long runtimes of LLMs and the diversity of workloads a model may experience during a single inference pass or binary execution, performance profiling is essential. It helps understand application behavior and identify optimization opportunities.'
  },
  {
    id: 'q2',
    question: 'What key advantage does toggling the CUDA profiler on and off provide for LLM performance analysis?',
    options: [
      'Toggling eliminates all profiling overhead making it completely free in terms of resources',
      'It allows focusing on specific regions of interest while producing smaller, more manageable profile files',
      'Profiler toggling exclusively improves accuracy without affecting file size or analysis focus',
      'Toggling only benefits visualization aesthetics without providing practical analysis advantages'
    ],
    correctAnswer: 1,
    explanation: 'Toggling the CUDA profiler allows users to know specifically what the profiled region corresponds to and results in smaller files to post-process. This makes analysis more focused and manageable, especially for long-running LLM workloads.'
  },
  {
    id: 'q3',
    question: 'Why might profiling only specific iterations be preferable to profiling an entire LLM execution?',
    options: [
      'Specific iterations always contain all performance issues making full profiling redundant',
      'Full profiling is technically impossible for any application requiring iteration-based selective profiling',
      'Limiting profiling reduces file size and focuses analysis on representative or problematic execution periods',
      'Iteration-specific profiling exclusively benefits storage costs without improving analysis quality'
    ],
    correctAnswer: 2,
    explanation: 'Profiling specific iterations reduces the profile file size and allows controlling which iterations are collected. This is particularly valuable for understanding representative behavior or investigating specific performance issues without overwhelming data volumes.'
  },
  {
    id: 'q4',
    question: 'What purpose do NVTX (NVIDIA Tools Extension) markers serve in performance analysis?',
    options: [
      'NVTX markers exclusively handle memory allocation without providing any performance visibility',
      'They annotate code regions enabling correlation between application logic and performance metrics in timelines',
      'Markers only improve compilation speed without contributing to runtime performance analysis',
      'NVTX exclusively benefits security monitoring without any performance profiling applications'
    ],
    correctAnswer: 1,
    explanation: 'NVTX markers provide annotations that help users understand which regions of code correspond to observed performance behavior. They enable correlating application-level logic with low-level performance metrics in profiling tools like Nsight Systems.'
  },
  {
    id: 'q5',
    question: 'How does Nsight Systems provide a "middle-ground" between timing analysis and kernel-level profiling?',
    options: [
      'It exclusively focuses on high-level timing without any detailed metrics or kernel information',
      'Nsight Systems only performs kernel-level analysis without any application-level capabilities',
      'The middle-ground approach eliminates all need for other profiling tools or analysis methods',
      'Metric sampling provides application-level insights with more detail than timing but less depth than kernel profiling'
    ],
    correctAnswer: 3,
    explanation: 'Nsight Systems reports at the application level with metric sampling capabilities provide a clean middle-ground between simple timing analysis and deep kernel-level dives with Nsight Compute. This offers balanced insight without overwhelming detail.'
  },
  {
    id: 'q6',
    question: 'What benefit does PyTorch profiler integration provide when analyzing PyTorch-based LLM workflows?',
    options: [
      'PyTorch profiler exclusively handles data loading without any model execution performance analysis',
      'It helps users understand performance breakdown within the model with framework-specific insights',
      'Integration only supports training analysis without providing any inference profiling capabilities',
      'PyTorch profiler eliminates need for CUDA profiling by replacing all lower-level analysis'
    ],
    correctAnswer: 1,
    explanation: 'The PyTorch profiler helps users analyze the performance breakdown in the model, providing framework-specific insights. Combined with toggling capabilities, it results in focused, smaller files for post-processing while maintaining valuable analysis detail.'
  },
  {
    id: 'q7',
    question: 'Why is understanding "which regions to focus on" important for effective LLM performance analysis?',
    options: [
      'All regions of LLM execution have identical performance characteristics making focus irrelevant',
      'Regional focus only benefits visualization without improving actual optimization effectiveness',
      'LLMs automatically optimize themselves eliminating any need for focused performance analysis',
      'Identifying bottleneck regions enables targeted optimization efforts where they\'ll have greatest impact'
    ],
    correctAnswer: 3,
    explanation: 'Providing means to understand which regions users may want to focus on enables targeted analysis. Not all parts of LLM execution contribute equally to performance issues, so identifying critical regions makes optimization efforts more efficient and effective.'
  },
  {
    id: 'q8',
    question: 'What challenge does profiling file size present for long-running LLM applications?',
    options: [
      'Massive files can be difficult to post-process for metric extraction and may overwhelm analysis tools',
      'Large profile files exclusively consume storage without affecting analysis capabilities or workflows',
      'File size is completely irrelevant since all modern systems handle unlimited data volumes',
      'Smaller files always contain insufficient information making size reduction counterproductive'
    ],
    correctAnswer: 0,
    explanation: 'Long-running LLM applications can generate very large profile files. Selective profiling results in smaller files to post-process for metric extraction or similar analysis, making the data more manageable and analysis more practical.'
  },
  {
    id: 'q9',
    question: 'How does coordinating profiling tools with application execution improve analysis quality?',
    options: [
      'Coordination exclusively improves aesthetics without affecting data quality or analysis accuracy',
      'Independent profiling without coordination always produces superior results for all applications',
      'Tool coordination only benefits automated scripts without improving manual analysis workflows',
      'Synchronized profiling captures relevant execution phases ensuring collected data represents intended workload behavior'
    ],
    correctAnswer: 3,
    explanation: 'Coordinating profiling tools (like Nsight Systems) with application execution ensures that profiling captures the intended execution phases. This synchronization guarantees that collected data represents the workload behavior you want to analyze and optimize.'
  },
  {
    id: 'q10',
    question: 'What role does garbage collection (GC) profiling play in understanding Python-based LLM performance?',
    options: [
      'GC profiling exclusively tracks memory leaks without revealing any performance impact information',
      'Garbage collection has no performance impact making GC profiling unnecessary for optimization',
      'GC profiling only benefits memory capacity planning without affecting performance analysis',
      'GC markers reveal memory management overhead that can significantly impact overall application performance'
    ],
    correctAnswer: 3,
    explanation: 'Enabling garbage collection NVTX markers allows understanding memory management overhead. In Python-based LLM applications, GC can significantly impact performance, so visualizing when and how often it occurs helps identify optimization opportunities.'
  },
  {
    id: 'q11',
    question: 'Why might analyzing the Global Interpreter Lock (GIL) be relevant for PyTorch LLM performance?',
    options: [
      'GIL exclusively affects network communication without impacting any computational performance',
      'GIL contention can limit parallelism in Python, affecting overall application throughput and efficiency',
      'Modern Python completely eliminated GIL making its analysis irrelevant for all applications',
      'GIL only matters for training without affecting inference performance or optimization'
    ],
    correctAnswer: 1,
    explanation: 'The GIL can limit parallelism in Python applications. Including GIL information in NVTX markers helps identify when the GIL is causing contention or limiting multi-threaded performance in PyTorch-based LLM workflows.'
  },
  {
    id: 'q12',
    question: 'What advantage does visualizing profiling results in timeline format provide for LLM analysis?',
    options: [
      'Timeline visualization only provides aesthetic appeal without any practical debugging advantages',
      'Timelines exclusively show errors without revealing any performance patterns or optimization insights',
      'Temporal correlation between events helps identify dependencies, bottlenecks, and optimization opportunities',
      'Statistical summaries always provide superior insights making timeline visualization unnecessary'
    ],
    correctAnswer: 2,
    explanation: 'Timeline visualization enables seeing when events occur and how they relate temporally. This helps identify dependencies between operations, understand where time is spent, and correlate application-level events with low-level performance metrics for effective optimization.'
  },
  {
    id: 'q13',
    question: 'How does selective metric collection benefit post-profiling analysis workflows?',
    options: [
      'Collecting all possible metrics always produces better results making selective collection counterproductive',
      'Focusing on relevant metrics reduces data volume and speeds analysis without sacrificing critical insights',
      'Metric selection exclusively affects storage costs without improving analysis speed or effectiveness',
      'Selective collection eliminates all valuable data making comprehensive profiling always superior'
    ],
    correctAnswer: 1,
    explanation: 'Selective profiling and metric collection produces smaller, more focused datasets. This makes post-processing for metric extraction faster and more manageable while still capturing the critical performance information needed for optimization decisions.'
  },
  {
    id: 'q14',
    question: 'What insight does understanding performance breakdown within a model provide to developers?',
    options: [
      'Breakdown analysis only identifies what components exist without revealing any optimization opportunities',
      'Performance breakdown exclusively benefits researchers without providing value to production deployments',
      'All model components contribute equally to runtime making breakdown analysis unnecessary',
      'It reveals which model components consume most time, guiding where optimization efforts should focus'
    ],
    correctAnswer: 3,
    explanation: 'Understanding performance breakdown within the model helps identify which components or operations consume the most time. This guides developers to focus optimization efforts where they\'ll have the greatest impact on overall application performance.'
  },
  {
    id: 'q15',
    question: 'Why is the combination of application-level and kernel-level profiling tools valuable for LLM optimization?',
    options: [
      'Multiple profiling tools only create redundant data without providing complementary insights',
      'Single-level profiling always provides sufficient information making multi-level analysis wasteful',
      'Tool combination exclusively benefits academic research without practical optimization value',
      'Different profiling levels provide complementary perspectives from high-level patterns to low-level kernel details'
    ],
    correctAnswer: 3,
    explanation: 'Application-level tools like Nsight Systems show overall patterns and workflows, while kernel-level tools like Nsight Compute provide detailed GPU operation analysis. Together, they offer complementary perspectives enabling both strategic optimization decisions and tactical kernel improvements.'
  }
];
