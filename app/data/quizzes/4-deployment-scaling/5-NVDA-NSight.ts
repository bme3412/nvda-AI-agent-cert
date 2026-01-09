import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary purpose of NVIDIA Nsight Systems as a performance analysis tool?',
    options: [
      'Exclusively profiling GPU shader code without any system-wide analysis or CPU interaction visualization',
      'Only debugging application crashes without providing any performance profiling or optimization capabilities',
      'Solely managing GPU memory allocation without analyzing workload execution or performance characteristics',
      'System-wide performance analysis visualizing application algorithms to identify optimization opportunities across CPUs and GPUs'
    ],
    correctAnswer: 3,
    explanation: 'Nsight Systems is a system-wide performance analysis tool designed to visualize an application\'s algorithms, identify the largest opportunities to optimize, and tune to scale efficiently across any quantity or size of CPUs and GPUs, from large servers to smallest SoCs.'
  },
  {
    id: 'q2',
    question: 'How does Nsight Systems help developers understand system-wide application performance?',
    options: [
      'Visualizes unbiased, system-wide activity data on unified timeline allowing investigation of correlations, dependencies, and bottlenecks',
      'Provides only text-based reports without any visual timeline or graphical representation of events',
      'Exclusively monitors GPU metrics without showing any CPU activity or cross-component interactions',
      'Generates summary statistics at application completion without detailed chronological event visualization'
    ],
    correctAnswer: 0,
    explanation: 'Nsight Systems visualizes unbiased, system-wide activity data on a unified timeline, allowing developers to investigate correlations, dependencies, activity, bottlenecks, and resource allocation to ensure hardware components work harmoniously.'
  },
  {
    id: 'q3',
    question: 'What range of NVIDIA platforms does Nsight Systems support for application development?',
    options: [
      'Wide range from NVIDIA DGX to RTX workstations, including NVIDIA DRIVE and Jetson platforms',
      'Only high-end datacenter systems like DGX without support for edge or automotive platforms',
      'Exclusively desktop RTX workstations without capabilities for server or embedded device profiling',
      'Solely cloud-based environments without any support for on-premises or edge deployment scenarios'
    ],
    correctAnswer: 0,
    explanation: 'Nsight Systems is the universal tool for developing applications on NVIDIA platforms. It scales across a wide range including NVIDIA DGX, RTX workstations, NVIDIA DRIVE for automotive, and NVIDIA Jetson for edge AI and robotics.'
  },
  {
    id: 'q4',
    question: 'What type of overhead does Nsight Systems maintain while providing comprehensive performance analysis?',
    options: [
      'High overhead requiring dedicated profiling hardware without impacting application execution significantly',
      'Low-overhead performance analysis accurately visualizing events and metrics without significantly affecting execution',
      'Moderate overhead acceptable only for development environments without production profiling capabilities',
      'Zero overhead achieved through hardware-only sampling without any software instrumentation requirements'
    ],
    correctAnswer: 1,
    explanation: 'Nsight Systems offers low-overhead performance analysis that visualizes otherwise hidden layers of events and metrics. With low overhead, data can be visualized accurately and in parallel for ease of understanding.'
  },
  {
    id: 'q5',
    question: 'What detailed GPU information can GPU Metrics Sampling expose in Nsight Systems?',
    options: [
      'Exclusively GPU temperature and power consumption without any computational or memory activity details',
      'Only high-level GPU utilization percentages without detailed throughput or architectural metrics',
      'Solely error rates and crash diagnostics without performance metrics or resource utilization data',
      'SM utilization, Tensor Core activity, instruction throughput, warp occupancy, and PCIe/DRAM activity'
    ],
    correctAnswer: 3,
    explanation: 'GPU Metrics Sampling plots low-level I/O activity such as PCIe throughput, NVLink, and DRAM activity. It also exposes SM utilization, Tensor Core activity, instruction throughput, and warp occupancy for comprehensive GPU performance analysis.'
  },
  {
    id: 'q6',
    question: 'Which CUDA libraries does Nsight Systems support for tracing compute workloads?',
    options: [
      'CUDA API tracing including cuBLAS, cuDNN, and NVIDIA TensorRT libraries for compute tasks',
      'Only custom CUDA kernels without support for any standard library tracing or API analysis',
      'Exclusively basic CUDA runtime without advanced library support like cuBLAS or cuDNN',
      'Solely host-side CUDA code without any device library or GPU kernel tracing capabilities'
    ],
    correctAnswer: 0,
    explanation: 'For compute tasks, Nsight Systems supports investigating the CUDA API and tracing CUDA libraries, including cuBLAS, cuDNN, and NVIDIA TensorRT. This enables comprehensive analysis of GPU-accelerated computing workloads.'
  },
  {
    id: 'q7',
    question: 'What graphics APIs does Nsight Systems support for profiling graphics computing applications?',
    options: [
      'Only proprietary NVIDIA APIs without support for industry-standard graphics programming interfaces',
      'Exclusively OpenGL without any DirectX, Vulkan, or ray-tracing API profiling capabilities',
      'Solely legacy DirectX 9 and OpenGL 2.0 without modern graphics API support',
      'Vulkan, OpenGL, DirectX 11, DirectX 12, DXR, and NVIDIA OptiX APIs'
    ],
    correctAnswer: 3,
    explanation: 'For graphics computing, Nsight Systems supports profiling Vulkan, OpenGL, DirectX 11, DirectX 12, DXR, and NVIDIA OptiX APIs. This comprehensive support covers modern graphics and ray-tracing workloads.'
  },
  {
    id: 'q8',
    question: 'What capability does multi-node profiling in Nsight Systems provide for large-scale deployments?',
    options: [
      'Only supports single-node analysis requiring manual correlation of data across multiple systems',
      'Exclusively profiles CPU clusters without any GPU or DPU performance analysis capabilities',
      'Solely collects data from multiple nodes without providing any automatic analysis or diagnosis',
      'Multi-node profiling automatically diagnoses performance limiters across many nodes simultaneously with network metrics'
    ],
    correctAnswer: 3,
    explanation: 'Nsight Systems supports multi-node profiling to resolve performance limiters at data center and cluster scale. Multi-node analysis automatically diagnoses performance limiters across many nodes simultaneously, including network metrics and internode communication.'
  },
  {
    id: 'q9',
    question: 'How does Nsight Systems support Python application optimization for deep learning workloads?',
    options: [
      'Python applications are not supported requiring developers to rewrite code in C++ for profiling',
      'Only provides basic execution timing without detailed call stack or GPU utilization analysis',
      'Exclusively profiles Python syntax errors without any performance optimization or GPU utilization insights',
      'Backtraces and automatic call stack sampling allow fine-tuning performance for deep learning applications'
    ],
    correctAnswer: 3,
    explanation: 'Nsight Systems helps write Python applications that maximize GPU utilization. Backtraces and automatic call stack sampling allow developers to fine-tune performance for deep learning applications, with integration for Jupyter Lab enabling direct profiling.'
  },
  {
    id: 'q10',
    question: 'What functionality does Jupyter Lab integration provide for Nsight Systems users?',
    options: [
      'Only displays static reports without interactive analysis or detailed GUI access for investigations',
      'Exclusively exports profiling data to external tools without any in-Jupyter visualization or analysis',
      'Solely provides basic timing statistics without comprehensive profiling or performance metric collection',
      'Profile Python and supported languages directly in Jupyter, including detailed analysis with full Nsight Systems GUI'
    ],
    correctAnswer: 3,
    explanation: 'Integration with Jupyter Lab allows profiling Python and other supported languages directly in Jupyter, including detailed analysis with the full Nsight Systems GUI. This enables seamless workflow for data scientists and AI developers.'
  },
  {
    id: 'q11',
    question: 'What frame performance issues does Nsight Systems automatically detect for game developers?',
    options: [
      'Only detects application crashes without identifying frame timing issues or performance inconsistencies',
      'Exclusively monitors average frame rates without detecting individual slow frames or stutter patterns',
      'Solely profiles GPU memory usage without analyzing frame timing, stutters, or frame-to-frame consistency',
      'Automatically detects slow frames and local stutter frames, reporting CPU times and API calls causing stutters'
    ],
    correctAnswer: 3,
    explanation: 'Nsight Systems automatically detects slow frames (highlighting frame times higher than target) and local stutter frames (highlighting frames with higher times than neighbors). It also reports CPU times per frame and API calls likely causing stutters.'
  },
  {
    id: 'q12',
    question: 'What is NVIDIA Nsight Compute\'s primary specialization within the Nsight Developer Tools suite?',
    options: [
      'Interactive kernel profiler for CUDA applications providing detailed performance metrics and API debugging',
      'System-wide multi-GPU profiling focusing on distributed computing workloads across clusters',
      'Graphics debugging exclusively for DirectX and Vulkan without any compute profiling capabilities',
      'Crash dump generation for GPU failures without any live profiling or performance analysis features'
    ],
    correctAnswer: 0,
    explanation: 'Nsight Compute is an interactive kernel profiler for CUDA applications. It provides detailed performance metrics and API debugging via a user interface and command-line tool, with customizable, data-driven user interface and metric collection.'
  },
  {
    id: 'q13',
    question: 'What impressive GPU utilization improvement did Tracxpoint achieve using Nsight Systems?',
    options: [
      'Improved from 50% to 60% GPU utilization with minimal impact on training time',
      'Increased utilization from 70% to 75% with moderate performance gains in model training',
      'Reached 80% GPU utilization cutting training duration approximately in half from baseline',
      'Achieved over 90% GPU utilization reducing training time from 600 minutes to only 90 minutes'
    ],
    correctAnswer: 3,
    explanation: 'Tracxpoint achieved over 90% GPU utilization using Nsight Systems. A deep learning model that previously took 600 minutes to train now takes only 90 minutes, representing a dramatic 6.7x speedup.'
  },
  {
    id: 'q14',
    question: 'What specific challenge did Microsoft Azure HPC+AI team address using Nsight Systems?',
    options: [
      'Only managed hardware procurement without any software optimization or performance analysis activities',
      'Exclusively handled billing and cost allocation without performance profiling or optimization work',
      'Solely monitored system uptime without analyzing workload performance characteristics or optimization opportunities',
      'Performed detailed analysis to optimize GPU-accelerated AI software, identifying top time-consuming functions and cold spots'
    ],
    correctAnswer: 3,
    explanation: 'Microsoft Azure HPC+AI team used Nsight Systems to perform detailed analysis and optimize GPU-accelerated AI software. The tool painted a clear picture of events on CPUs, GPUs, NICs, and OS, allowing them to quickly identify top time-consuming functions and cold spots.'
  },
  {
    id: 'q15',
    question: 'What does NVIDIA Nsight Aftermath SDK specifically provide for game developers?',
    options: [
      'Real-time performance profiling during gameplay without any crash analysis or debugging capabilities',
      'Exclusively optimizes shader compilation without providing any crash investigation or debugging features',
      'Only provides post-mortem frame analysis without any crash dump or exception handling functionality',
      'Library integrating into crash reporter to generate GPU mini-dumps when exceptions or TDRs occur'
    ],
    correctAnswer: 3,
    explanation: 'Nsight Aftermath SDK is a library that integrates into a D3D12 or Vulkan game\'s crash reporter to generate GPU "mini-dumps" when an exception or TDR (Timeout Detection and Recovery) occurs, exposing pipeline information to resolve unexpected crashes.'
  }
];
