import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What primary business challenge does autoscaling LLM deployments with Kubernetes address for enterprises?',
    options: [
      'Handling variable inference request volumes during peak and non-peak hours while optimizing total cost',
      'Eliminating all infrastructure costs by running models exclusively on free cloud tier resources',
      'Preventing any need for GPU hardware by using CPU-only inference for all workloads',
      'Completely automating model training without requiring any data scientist involvement or oversight'
    ],
    correctAnswer: 0,
    explanation: 'Autoscaling enables enterprises to handle different volumes of inference requests during peak and non-peak hours with flexibility, while benefiting from reduced total cost compared to purchasing maximum hardware resources to handle peak workloads continuously.'
  },
  {
    id: 'q2',
    question: 'How do TensorRT-LLM and Triton Inference Server complement each other in LLM deployment?',
    options: [
      'Both tools perform identical functions providing redundancy in case one component fails',
      'TensorRT-LLM handles inference serving while Triton exclusively manages model training workflows',
      'Triton optimizes models for deployment while TensorRT-LLM only monitors performance metrics',
      'TensorRT-LLM optimizes models with techniques like quantization while Triton serves optimized models in production'
    ],
    correctAnswer: 3,
    explanation: 'TensorRT-LLM provides optimizations such as kernel fusion, quantization, in-flight batch, and paged attention to make models efficient. Triton Inference Server then deploys these optimized models in production, serving inference requests across multiple frameworks and platforms.'
  },
  {
    id: 'q3',
    question: 'What fundamental optimization techniques does TensorRT-LLM provide to improve LLM inference performance?',
    options: [
      'Exclusively focuses on data preprocessing without any model-level or runtime optimizations',
      'Kernel fusion, quantization, in-flight batching, and paged attention for efficient GPU execution',
      'Only handles model compression without addressing memory management or batching strategies',
      'Primarily optimizes network bandwidth usage without improving computational efficiency or latency'
    ],
    correctAnswer: 1,
    explanation: 'TensorRT-LLM provides multiple optimizations including kernel fusion, quantization, in-flight batch, and paged attention. These techniques enable inference using optimized models to be performed efficiently on NVIDIA GPUs with improved throughput and reduced latency.'
  },
  {
    id: 'q4',
    question: 'Why is Horizontal Pod Autoscaler (HPA) particularly valuable for LLM inference workloads?',
    options: [
      'HPA eliminates GPU requirements by automatically converting workloads to run on CPUs',
      'It dynamically adjusts deployment scale based on inference demand, optimizing resource utilization and costs',
      'HPA exclusively handles data storage scaling without affecting compute resource allocation',
      'It only works during scheduled maintenance windows without supporting real-time scaling'
    ],
    correctAnswer: 1,
    explanation: 'HPA automatically scales the number of Pods (and therefore GPUs) based on metrics like queue-to-compute ratio. This enables the system to handle thousands of real-time requests during peaks and scale down during low-demand periods, optimizing both performance and cost.'
  },
  {
    id: 'q5',
    question: 'What role does Prometheus play in the autoscaling architecture for LLM deployments?',
    options: [
      'Prometheus exclusively manages GPU driver updates without collecting any performance or application metrics',
      'Prometheus only handles log aggregation without supporting metrics collection or autoscaling integration',
      'It primarily focuses on security monitoring without involvement in performance metrics or scaling',
      'It scrapes Triton metrics and provides data to HPA for making intelligent scaling decisions'
    ],
    correctAnswer: 3,
    explanation: 'Prometheus scrapes Triton metrics from Pods and provides this data to the Horizontal Pod Autoscaler. HPA uses these metrics to make decisions on scaling up or down the number of deployments and GPUs based on inference request volume.'
  },
  {
    id: 'q6',
    question: 'What is the "queue-to-compute ratio" metric and why is it useful for autoscaling?',
    options: [
      'Ratio of failed requests to successful requests indicating overall system reliability',
      'Queue time divided by compute time reflecting response time and indicating when scaling is needed',
      'Number of queued models divided by active models showing deployment readiness',
      'Percentage of GPU memory allocated versus available measuring resource saturation'
    ],
    correctAnswer: 1,
    explanation: 'The queue-to-compute ratio is defined as queue time divided by compute time for an inference request. It reflects response time—when the ratio is high (queue time exceeds compute time), it indicates insufficient replicas to respond quickly, triggering scale-up.'
  },
  {
    id: 'q7',
    question: 'How does tensor parallelism (TP) enable deployment of large models that don\'t fit on single GPUs?',
    options: [
      'TP compresses models to fit any GPU size without requiring multiple devices',
      'TP exclusively handles data parallelism without addressing model partitioning across devices',
      'It only improves training speed without providing any benefits for inference deployment',
      'It partitions model across multiple GPUs allowing each Pod to use several GPUs for larger models'
    ],
    correctAnswer: 3,
    explanation: 'Tensor parallelism (TP) allows models to be partitioned across multiple GPUs. For models needing multiple GPUs, you can configure TP accordingly (e.g., TP=2 for models requiring two GPUs), and each Kubernetes Pod will utilize multiple GPUs for deployment.'
  },
  {
    id: 'q8',
    question: 'Why is storing TensorRT engine files on the host node beneficial for scaled deployments?',
    options: [
      'Host storage eliminates all GPU memory requirements making deployment possible on CPU-only nodes',
      'Stored files automatically improve model accuracy without requiring any retraining or optimization',
      'Host storage exclusively benefits security without providing any efficiency or performance advantages',
      'It avoids regenerating identical files when scaling up additional Pods on the same node'
    ],
    correctAnswer: 3,
    explanation: 'Storing generated TensorRT engine and plan files on the host node and remapping them to all Pods on that node eliminates the need to regenerate the same files when additional Pods are scaled up, saving time and computational resources.'
  },
  {
    id: 'q9',
    question: 'What advantages does using foundation models with techniques like RAG and fine-tuning provide?',
    options: [
      'Foundation models eliminate all need for domain-specific data or customization efforts',
      'Foundation models exclusively work for general tasks without supporting any specialized applications',
      'These techniques only reduce costs without providing any accuracy or time-to-deployment benefits',
      'Developers avoid expensive training from scratch while achieving higher accuracy for specific tasks quickly'
    ],
    correctAnswer: 3,
    explanation: 'Foundation models like Llama, Gemma, and GPT demonstrate human-like understanding, allowing developers to avoid expensive training from scratch. Techniques like RAG, prompt engineering, and fine-tuning customize these models to achieve higher accuracy for specific tasks in much shorter time.'
  },
  {
    id: 'q10',
    question: 'How does Triton Inference Server\'s multi-framework support benefit deployment flexibility?',
    options: [
      'Multi-framework support exclusively improves security without affecting deployment options or compatibility',
      'Triton only supports NVIDIA-specific frameworks limiting deployment to proprietary infrastructure',
      'Framework support solely affects training without providing any benefits for inference serving',
      'It enables serving models from TensorRT, TensorFlow, PyTorch, and ONNX on diverse hardware platforms'
    ],
    correctAnswer: 3,
    explanation: 'Triton supports multiple deep learning frameworks including TensorRT, TensorFlow, PyTorch, and ONNX. It can run across cloud, data center, edge, and embedded devices on NVIDIA GPUs, x86 and ARM CPUs, providing exceptional deployment flexibility.'
  },
  {
    id: 'q11',
    question: 'What purpose does a load balancer serve in scaled LLM deployment architectures?',
    options: [
      'Load balancers exclusively handle authentication without distributing any inference workload across Pods',
      'Load balancers only manage storage access patterns without affecting compute workload distribution',
      'They primarily monitor performance metrics without actively routing or distributing any traffic',
      'They distribute inference requests among running Pods ensuring balanced utilization and high availability'
    ],
    correctAnswer: 3,
    explanation: 'Load balancers distribute inference workload among all running Pods. They operate at either Layer 4 (transport level, network-based) or Layer 7 (application level, content-based), ensuring requests are balanced across available Triton servers for optimal resource utilization.'
  },
  {
    id: 'q12',
    question: 'Why is monitoring individual Pod metrics important when autoscaling LLM deployments?',
    options: [
      'Pod-level metrics exclusively track errors without providing any performance or utilization insights',
      'Monitoring only benefits debugging without contributing to autoscaling decisions or resource optimization',
      'Individual Pod metrics are irrelevant since cluster-wide averages provide sufficient scaling information',
      'HPA uses average metrics across Pods to make informed scaling decisions based on actual workload'
    ],
    correctAnswer: 3,
    explanation: 'HPA takes the average of metrics like queue-to-compute ratio across all Pods. This aggregated view helps HPA determine whether to increase replicas (when average ratio is too high) or decrease them (when ratio is low), ensuring scaling decisions reflect actual system-wide demand.'
  },
  {
    id: 'q13',
    question: 'What operational challenge does Kubernetes help address when scaling LLM inference across heterogeneous GPU infrastructure?',
    options: [
      'Kubernetes eliminates all need for GPUs by automatically converting workloads to CPU-only execution',
      'Kubernetes exclusively handles data storage without addressing compute orchestration or GPU scheduling',
      'It only supports identical GPU configurations preventing any deployment on heterogeneous infrastructure',
      'It provides automated orchestration, discovery, and scheduling across diverse GPU types and configurations'
    ],
    correctAnswer: 3,
    explanation: 'Kubernetes with GPU plugins enables automatic discovery of GPU-equipped nodes and makes them available to containers. It orchestrates deployment across diverse GPU types, automating scheduling, scaling, and resource management for heterogeneous infrastructure.'
  },
  {
    id: 'q14',
    question: 'How does the combination of custom metrics and HPA enable more intelligent autoscaling than CPU-based scaling?',
    options: [
      'Custom metrics only provide aesthetic dashboards without affecting actual autoscaling behavior or decisions',
      'CPU-based scaling is always superior making custom metrics unnecessary for any workloads',
      'Custom metrics exclusively benefit debugging without contributing to scaling decision accuracy or relevance',
      'Application-specific metrics like queue-to-compute ratio reflect actual user experience better than generic CPU utilization'
    ],
    correctAnswer: 3,
    explanation: 'Custom metrics like queue-to-compute ratio directly reflect inference response time and user experience. This is more meaningful than generic CPU utilization for LLM workloads, where inference queue times better indicate whether additional capacity is needed to maintain service quality.'
  },
  {
    id: 'q15',
    question: 'What business value does automated LLM scaling provide compared to static GPU allocation?',
    options: [
      'Automated scaling eliminates all infrastructure costs by sharing resources across unlimited users',
      'Static allocation always provides better performance making automated scaling counterproductive for businesses',
      'Automated scaling only benefits development environments without production or business value',
      'It optimizes costs by matching resources to demand while maintaining performance during variable workloads'
    ],
    correctAnswer: 3,
    explanation: 'Automated scaling enables handling peak loads without permanently provisioning for maximum capacity. Organizations avoid the total cost of purchasing enough hardware for peak workloads while still serving thousands of real-time requests with low latency during high-demand periods and scaling down during quieter times.'
  }
];
