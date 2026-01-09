import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary purpose of implementing Prometheus and Grafana in GPU-accelerated computing environments?',
    options: [
      'Exclusively managing GPU driver installations and updates across distributed computing infrastructure',
      'Only handling resource allocation decisions without any performance monitoring or metrics collection capabilities',
      'Primarily optimizing GPU workload scheduling without collecting or displaying any telemetry data',
      'Providing comprehensive monitoring, visualization, and analysis of GPU performance metrics and cluster health'
    ],
    correctAnswer: 3,
    explanation: 'Prometheus and Grafana provide a complete monitoring stack for GPU-accelerated environments. Prometheus collects and stores metrics while Grafana visualizes them, enabling teams to monitor GPU performance, identify bottlenecks, and ensure efficient resource utilization across clusters.'
  },
  {
    id: 'q2',
    question: 'How do Prometheus Operator and Helm package manager simplify cluster monitoring deployment?',
    options: [
      'They provide standardized configurations and automated deployment reducing manual setup complexity significantly',
      'They eliminate all configuration requirements by automatically detecting optimal settings without user input',
      'They only support basic CPU monitoring without any GPU or specialized hardware capabilities',
      'They exclusively handle storage management without simplifying deployment or configuration processes'
    ],
    correctAnswer: 0,
    explanation: 'The Prometheus Operator provides standard configurations and dashboards, while Helm enables packaged deployment. Together they automate much of the complex setup, allowing teams to deploy a full cluster monitoring solution efficiently rather than manually configuring each component.'
  },
  {
    id: 'q3',
    question: 'What role does DCGM (Data Center GPU Manager) play in NVIDIA GPU monitoring infrastructure?',
    options: [
      'It serves as the primary interface collecting GPU telemetry and exposing metrics to monitoring systems',
      'DCGM exclusively manages GPU power consumption and thermal throttling without metrics collection',
      'DCGM only handles GPU memory allocation without providing any performance monitoring capabilities',
      'It primarily focuses on driver compatibility testing without real-time telemetry or monitoring features'
    ],
    correctAnswer: 0,
    explanation: 'DCGM collects comprehensive GPU telemetry including utilization, memory usage, temperature, and other performance metrics. It exposes this data to monitoring systems like Prometheus, serving as the bridge between NVIDIA GPUs and observability platforms.'
  },
  {
    id: 'q4',
    question: 'Why is real-time GPU metrics monitoring particularly important for AI and machine learning workloads?',
    options: [
      'ML workloads consume minimal GPU resources making monitoring unnecessary for optimization purposes',
      'Monitoring only matters for debugging crashes without providing any optimization or efficiency insights',
      'AI applications automatically optimize themselves eliminating any need for human monitoring or intervention',
      'GPU utilization directly impacts training time, cost efficiency, and ability to identify performance bottlenecks'
    ],
    correctAnswer: 3,
    explanation: 'GPU utilization directly affects training duration and infrastructure costs in AI workloads. Real-time monitoring helps identify underutilized resources, performance bottlenecks, and optimization opportunities, enabling teams to maximize expensive GPU investments and reduce time-to-solution.'
  },
  {
    id: 'q5',
    question: 'What advantage does visualizing GPU metrics on a timeline provide for performance analysis?',
    options: [
      'Timeline visualization only shows historical data without enabling real-time monitoring or analysis',
      'It enables correlating GPU activity with application events to identify performance patterns and issues',
      'Timelines exclusively display errors without showing utilization, memory usage, or throughput metrics',
      'Visualization provides aesthetics without offering any practical debugging or optimization value'
    ],
    correctAnswer: 1,
    explanation: 'Timeline visualization allows teams to correlate GPU metrics with application behavior, helping identify when and why performance issues occur. This temporal context makes it easier to understand workload patterns, spot anomalies, and diagnose the root causes of inefficiencies.'
  },
  {
    id: 'q6',
    question: 'How does containerized monitoring with Kubernetes benefit GPU-accelerated infrastructure management?',
    options: [
      'Containers eliminate all monitoring overhead making GPU tracking completely free in resource terms',
      'Containerization only supports CPU monitoring without any GPU-specific metric collection capabilities',
      'Monitoring containers require dedicated GPUs reducing available compute resources for applications',
      'Kubernetes orchestration enables scalable, automated monitoring deployment across heterogeneous GPU clusters'
    ],
    correctAnswer: 3,
    explanation: 'Kubernetes orchestration allows monitoring components to be deployed, scaled, and managed automatically across clusters. This is particularly valuable for GPU infrastructure where monitoring needs to work consistently across diverse hardware configurations and deployment scales.'
  },
  {
    id: 'q7',
    question: 'What operational insight does monitoring GPU memory allocation provide for workload optimization?',
    options: [
      'Tracking memory usage helps identify whether workloads are appropriately sized for available GPU resources',
      'Memory metrics only indicate total capacity without revealing utilization patterns or optimization opportunities',
      'GPU memory monitoring exclusively detects hardware failures without providing performance optimization guidance',
      'Memory allocation metrics are irrelevant since applications automatically optimize their memory consumption'
    ],
    correctAnswer: 0,
    explanation: 'Monitoring GPU memory allocation reveals whether workloads efficiently use available resources. Underutilization suggests opportunities to increase batch sizes or run concurrent jobs, while memory pressure indicates need for optimization or larger GPUs.'
  },
  {
    id: 'q8',
    question: 'Why is it important to monitor both GPU utilization and CPU activity simultaneously?',
    options: [
      'CPU and GPU activities are completely independent requiring separate monitoring without any correlation analysis',
      'Modern GPUs operate autonomously making CPU monitoring irrelevant for GPU-accelerated applications',
      'Monitoring both components doubles overhead without providing additional debugging or optimization insights',
      'Simultaneous monitoring reveals data transfer bottlenecks and ensures balanced utilization across system components'
    ],
    correctAnswer: 3,
    explanation: 'Many performance issues arise from CPU-GPU interactions, such as data transfer bottlenecks or CPU preprocessing delays. Monitoring both simultaneously helps identify whether GPUs are starved by slow CPU operations or if the bottleneck lies elsewhere in the pipeline.'
  },
  {
    id: 'q9',
    question: 'What business value does comprehensive GPU monitoring provide to organizations running AI workloads?',
    options: [
      'Monitoring only benefits researchers without providing any value to business operations or financial planning',
      'It enables cost optimization, capacity planning, and ROI measurement for expensive GPU infrastructure investments',
      'Business value is negligible since monitoring focuses exclusively on technical metrics without financial implications',
      'GPU monitoring exclusively prevents hardware failures without contributing to efficiency or cost management'
    ],
    correctAnswer: 1,
    explanation: 'Comprehensive monitoring helps organizations optimize GPU spending by identifying underutilization, plan capacity needs based on usage trends, and measure ROI on infrastructure investments. This visibility is essential for justifying and managing expensive GPU resources.'
  },
  {
    id: 'q10',
    question: 'How does dashboard customization benefit different stakeholders in GPU-accelerated computing environments?',
    options: [
      'Customization serves only aesthetic purposes without providing any practical benefits for different roles',
      'Single standardized dashboard works optimally for all users eliminating any need for customization',
      'Customization exclusively benefits administrators without providing value to developers or business stakeholders',
      'Different roles need different metrics: developers want performance details while executives need utilization summaries'
    ],
    correctAnswer: 3,
    explanation: 'Different stakeholders have different needs: data scientists want detailed performance metrics to optimize models, DevOps needs resource utilization for capacity planning, and executives need high-level cost and efficiency summaries. Customizable dashboards serve all these needs effectively.'
  },
  {
    id: 'q11',
    question: 'What challenge does monitoring help address when running multiple AI workloads on shared GPU infrastructure?',
    options: [
      'It helps ensure fair resource allocation and identify workloads consuming disproportionate GPU resources',
      'Monitoring prevents multiple workloads from running simultaneously by enforcing strict isolation policies',
      'Shared infrastructure monitoring is impossible requiring dedicated GPUs for each individual workload',
      'Multiple workloads automatically balance themselves making monitoring unnecessary for resource management'
    ],
    correctAnswer: 0,
    explanation: 'In shared environments, monitoring reveals which workloads consume resources and helps ensure fair allocation. This visibility enables teams to identify resource-intensive jobs, detect inefficient utilization patterns, and make informed decisions about scheduling and prioritization.'
  },
  {
    id: 'q12',
    question: 'Why is metric retention and historical analysis important for GPU infrastructure management?',
    options: [
      'Historical data only consumes storage without providing any actionable insights for future planning',
      'Real-time metrics are sufficient making historical data retention unnecessary for operations',
      'Historical analysis exclusively supports compliance requirements without operational or planning benefits',
      'Trend analysis reveals usage patterns enabling better capacity planning and budget forecasting'
    ],
    correctAnswer: 3,
    explanation: 'Historical metrics reveal trends in GPU usage over time, helping predict future capacity needs, budget for infrastructure expansion, and identify seasonal or project-based usage patterns. This long-term visibility is essential for strategic planning and investment decisions.'
  },
  {
    id: 'q13',
    question: 'How does monitoring support debugging and troubleshooting in GPU-accelerated applications?',
    options: [
      'Monitoring only shows symptoms without providing any diagnostic information for root cause analysis',
      'Metric correlation helps identify performance degradation causes like memory bottlenecks or data transfer issues',
      'Debugging requires specialized tools making general monitoring systems completely irrelevant for troubleshooting',
      'Modern applications self-diagnose issues eliminating any need for external monitoring or metrics analysis'
    ],
    correctAnswer: 1,
    explanation: 'Monitoring provides visibility into system behavior that aids troubleshooting. By correlating metrics like GPU utilization, memory usage, and data transfer rates with application performance, teams can pinpoint issues like CPU bottlenecks, memory constraints, or inefficient data pipelines.'
  },
  {
    id: 'q14',
    question: 'What role does alerting play in proactive GPU infrastructure management?',
    options: [
      'Alerts exclusively notify about complete system failures without detecting performance degradation early',
      'Alerting systems create unnecessary noise making manual dashboard checking more effective for monitoring',
      'Modern systems self-heal automatically making alerting redundant for GPU infrastructure management',
      'Proactive alerts on anomalies enable intervention before issues impact applications or user experience'
    ],
    correctAnswer: 3,
    explanation: 'Alerting enables proactive management by notifying teams when metrics exceed thresholds or exhibit unusual patterns. This allows intervention before minor issues become critical problems, reducing downtime and maintaining performance for users and applications.'
  },
  {
    id: 'q15',
    question: 'How does standardized monitoring across heterogeneous GPU infrastructure benefit operations teams?',
    options: [
      'Standardization only works with identical hardware making it useless for heterogeneous environments',
      'Heterogeneous environments require completely different monitoring tools preventing any standardization benefits',
      'Standardized monitoring reduces flexibility making customized per-GPU monitoring more effective',
      'Consistent monitoring framework enables unified visibility across diverse GPU types and vendor platforms'
    ],
    correctAnswer: 3,
    explanation: 'Standardized monitoring provides consistent visibility across diverse GPU types (different models, generations, or vendors). This unified approach simplifies operations, enables cross-platform comparison, and reduces the learning curve for teams managing complex, heterogeneous infrastructure.'
  }
];
