import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What foundational concept did Kubernetes introduce to enable multiple containers to share resources without conflict?',
    options: [
      'Pods grouping multiple containers on host machines with shared services like directories, IP addresses, or storage',
      'Virtual machines providing complete isolation through hardware virtualization without any resource sharing capabilities',
      'Namespaces creating virtual clusters within clusters for logical separation of workloads across teams',
      'Microservices architecture decomposing monolithic applications into independently deployable distributed service components'
    ],
    correctAnswer: 0,
    explanation: 'Kubernetes introduced the "pod" concept that enables multiple containers to run on a host machine and share resources without risk of conflict. A pod can define shared services like directories, IP addresses, or storage and expose them to all containers in the pod.'
  },
  {
    id: 'q2',
    question: 'How do containers differ from virtual machines in terms of virtualization approach and resource efficiency?',
    options: [
      'Containers virtualize hardware like VMs but require significantly more system resources for operation',
      'Virtual machines virtualize operating systems while containers virtualize complete hardware stacks for isolation',
      'Containers virtualize the operating system instead of hardware, making them more lightweight and portable',
      'Both approaches use identical virtualization techniques without any meaningful differences in resource consumption'
    ],
    correctAnswer: 2,
    explanation: 'Containers virtualize the operating system instead of hardware, making them more lightweight than virtual machines. They are more portable, take up less space, use far fewer system resources, and can be spun up in seconds.'
  },
  {
    id: 'q3',
    question: 'What organization serves as the vendor-neutral home for Kubernetes and other cloud-native open source projects?',
    options: [
      'Docker Foundation established to govern container technology standards and prevent proprietary implementations',
      'Open Container Initiative focusing exclusively on container image format specifications and runtime standards',
      'Cloud Native Computing Foundation (CNCF) created as Linux Foundation project to drive cloud-native adoption',
      'Kubernetes Foundation operating independently to manage the orchestration platform without external governance'
    ],
    correctAnswer: 2,
    explanation: 'The Cloud Native Computing Foundation (CNCF) was established as a Linux Foundation project in 2015 to drive adoption of cloud-native technologies. The CNCF serves as the vendor-neutral home for Kubernetes and many fastest-growing open source projects.'
  },
  {
    id: 'q4',
    question: 'What component in Kubernetes manages pods, containers, and images at the node level?',
    options: [
      'Master controller exclusively handling all pod operations across entire cluster without node-level agents',
      'Node agent called kubelet managing pods, containers, and images on individual host machines',
      'Container runtime directly managing all orchestration without any Kubernetes-specific management components',
      'Scheduler responsible for pod placement decisions without involvement in ongoing container management'
    ],
    correctAnswer: 1,
    explanation: 'A node agent called a kubelet manages the pods, containers, and images at the individual node level. Kubernetes controllers then manage clusters of pods to ensure adequate resources are allocated for desired scalability and performance.'
  },
  {
    id: 'q5',
    question: 'What key services does Kubernetes automate to simplify clustered environment management?',
    options: [
      'Exclusively handles storage provisioning without any networking, discovery, or deployment automation capabilities',
      'Only manages container placement without monitoring health, implementing rollouts, or handling sensitive information',
      'Automates service discovery, load balancing, storage mounting, rollouts/rollbacks, and health monitoring',
      'Primarily focuses on security without providing any automation for deployment, scaling, or resource management'
    ],
    correctAnswer: 2,
    explanation: 'Kubernetes automates service discovery and load balancing, automatically mounts storage systems, automates rollouts and rollbacks, monitors container health, restarts failed containers, and enables safe storage of sensitive information like passwords and encryption keys.'
  },
  {
    id: 'q6',
    question: 'Why did containers quickly become popular and create need for orchestration tools like Kubernetes?',
    options: [
      'Containers required less developer training than virtual machines making them immediately accessible to teams',
      'Organizations rapidly scaled to thousands of containers creating need to automate management at scale',
      'Container technology was mandated by cloud providers forcing rapid adoption across enterprise environments',
      'Virtual machines were completely deprecated making containers the only viable deployment option available'
    ],
    correctAnswer: 1,
    explanation: 'Because of their benefits, containers became an immediate hit and quickly popular for cloud deployment. Organizations soon ran thousands of them, creating a need to automate management, which drove Kubernetes adoption and made containers mainstream.'
  },
  {
    id: 'q7',
    question: 'What namespace feature in Kubernetes enables teams to share physical infrastructure without conflicts?',
    options: [
      'Physical partitioning dividing hardware into dedicated segments for each team with complete isolation',
      'Virtual cluster within cluster allowing operations and development teams to share machines and services',
      'Container segregation preventing any communication between different teams\' workloads on shared infrastructure',
      'Hardware allocation requiring separate physical servers for each team to prevent any resource contention'
    ],
    correctAnswer: 1,
    explanation: 'Kubernetes namespaces create virtual clusters within clusters. This enables operations and development teams to share the same set of physical machines and access the same services without creating conflicts.'
  },
  {
    id: 'q8',
    question: 'How does Kubernetes benefit data scientists in creating reproducible machine learning experiments?',
    options: [
      'Kubernetes exclusively handles model training without providing any support for experiment tracking or reproducibility',
      'Data scientists must manually configure all dependencies without any automation or containerization benefits',
      'Containers enable repeatable pipelines with coordinated stages and declarative configurations describe service connections',
      'Kubernetes only supports production deployment without any capabilities for development or experimentation workflows'
    ],
    correctAnswer: 2,
    explanation: 'Containers offer the ability to create repeatable pipelines with multiple coordinated stages that work reproducibly. Declarative configurations in Kubernetes describe connections between services, and microservices architectures enable easier debugging and improved team collaboration.'
  },
  {
    id: 'q9',
    question: 'What functionality does Kubeflow provide for machine learning workflows in Kubernetes environments?',
    options: [
      'Exclusively handles data storage without any support for training pipelines or model deployment',
      'Only manages compute resources without providing any ML-specific workflow or pipeline capabilities',
      'Streamlines setting up and maintaining machine learning workflows and pipelines in Kubernetes',
      'Primarily focuses on model serving without any support for training or development workflows'
    ],
    correctAnswer: 2,
    explanation: 'Kubeflow streamlines the process of setting up and maintaining machine learning workflows and pipelines in Kubernetes. Combined with the orchestrator\'s portability benefits, data scientists can develop on laptops and deploy anywhere.'
  },
  {
    id: 'q10',
    question: 'What service mesh layer makes it easy to create networks of deployed services with automated features?',
    options: [
      'Docker Swarm providing basic orchestration without advanced networking or traffic management capabilities',
      'Kubernetes native networking exclusively handling pod-to-pod communication without service mesh features',
      'CoreDNS only providing DNS resolution without any traffic management or service-to-service authentication',
      'Istio offering configurable service mesh with load balancing, authentication, and monitoring with minimal code changes'
    ],
    correctAnswer: 3,
    explanation: 'Istio is a configurable, open-source service-mesh layer that makes it easy to create networks with automated load balancing, service-to-service authentication, and monitoring with little or no code changes. It provides fine-grained traffic control, routing rules, retries, failovers, and fault injection.'
  },
  {
    id: 'q11',
    question: 'How does NVIDIA device plug-in enable GPU support within Kubernetes environments?',
    options: [
      'GPUs are automatically detected without requiring any plug-ins or special configuration for Kubernetes',
      'NVIDIA plug-ins exclusively handle monitoring without enabling actual GPU allocation to containers',
      'Device plug-ins only support CPU resources without any capabilities for specialized hardware like GPUs',
      'Device plug-ins enable pods access to GPU hardware features and expose them as schedulable resources'
    ],
    correctAnswer: 3,
    explanation: 'Device plug-ins enable pods to access specialized hardware features such as GPUs and expose them as schedulable resources. This makes it easy to configure and use GPU resources for accelerating data science, machine learning, and deep learning workloads.'
  },
  {
    id: 'q12',
    question: 'What key capabilities does Kubernetes on NVIDIA GPUs provide for heterogeneous GPU clusters?',
    options: [
      'Only supports homogeneous GPU clusters without any capabilities for mixed GPU types or configurations',
      'Exclusively handles GPU monitoring without enabling specification of GPU attributes or deployment requirements',
      'Enables GPU plug-in support, specifies GPU attributes like type and memory, and allows visualization of GPU metrics',
      'Provides GPU allocation but without any monitoring, metrics visualization, or attribute specification capabilities'
    ],
    correctAnswer: 2,
    explanation: 'Kubernetes on NVIDIA GPUs enables GPU support using NVIDIA device plug-in, specifies GPU attributes such as GPU type and memory requirements for heterogeneous clusters, and allows visualization and monitoring of GPU metrics with integrated stack of NVIDIA DCGM, Prometheus, and Grafana.'
  },
  {
    id: 'q13',
    question: 'What is NVIDIA Triton\'s role in abstracting hardware within Kubernetes-managed nodes?',
    options: [
      'Triton exclusively handles cluster orchestration while Kubernetes manages individual node hardware abstraction',
      'Triton only provides monitoring capabilities without any model serving or hardware abstraction features',
      'Kubernetes handles all hardware abstraction making Triton unnecessary for GPU-based inference workloads',
      'Open-source inference serving platform deploying AI models on any GPU/CPU, abstracting hardware within nodes'
    ],
    correctAnswer: 3,
    explanation: 'NVIDIA Triton is an open-source inference serving platform that enables deploying AI training models on any GPU or CPU-based interface. Triton handles hardware abstraction within the node, while Kubernetes orchestrates the cluster, enabling effective scale-out.'
  },
  {
    id: 'q14',
    question: 'What breakthrough capability does Multi-Instance GPU (MIG) provide on NVIDIA A100 GPUs?',
    options: [
      'MIG exclusively improves training performance without providing any benefits for inference or deployment',
      'MIG combines multiple physical GPUs into single logical unit for increased memory capacity',
      'Only supports single workload per GPU without any partitioning or instance isolation capabilities',
      'Single A100 GPU can be segmented into seven smaller GPUs enabling finer-grained application scaling'
    ],
    correctAnswer: 3,
    explanation: 'MIG enables a single A100 GPU to be segmented into seven smaller GPUs, similar to CPU core segmentation. This allows users to automatically scale applications with much greater granularity, with a single A100 now supporting up to seven smaller nodes.'
  },
  {
    id: 'q15',
    question: 'How does the CNCF\'s work benefit the Kubernetes ecosystem regarding code base fragmentation?',
    options: [
      'CNCF encourages multiple incompatible forks to promote innovation and competitive development approaches',
      'CNCF exclusively manages licensing without any involvement in technical direction or code governance',
      'Multiple fragmented versions exist despite CNCF efforts making cross-platform compatibility challenging',
      'Vendor-neutral governance credited with preventing Kubernetes code base forks from emerging across implementations'
    ],
    correctAnswer: 3,
    explanation: 'The CNCF\'s work has been credited with helping to prevent forks of the Kubernetes code base from emerging. As a result, every major computing platform and cloud provider now supports the same Kubernetes code base, despite branded versions like Red Hat OpenShift or Amazon EKS.'
  }
];

