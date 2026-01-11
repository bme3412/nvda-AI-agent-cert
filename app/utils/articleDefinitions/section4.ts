// Article-specific term definitions for Section 4: Deployment and Scaling
// These definitions are specific to individual articles in section 4

import { TermDefinition } from '../termDefinitions';

export const SECTION4_DEFINITIONS: Record<string, Record<string, TermDefinition>> = {
  '4-deployment-scaling/1-agentic-AI-factory': {
    'Enterprise AI Factory': {
      definition: 'A comprehensive, cloud-native platform built around Kubernetes that provides agility, scalability, and resilience for developing and deploying sophisticated AI agents. It integrates storage infrastructure, artifact repositories, observability systems, security frameworks, and data connectors into a cohesive ecosystem.',
      example: 'An organization deploying multiple AI agents across different departments using the Enterprise AI Factory, with automated scaling, monitoring, and security built into the platform.'
    },
    'Kubernetes': {
      definition: 'Open-source platform for automating container orchestration—the deployment, scaling, and management of containerized applications. Serves as the foundational orchestration layer for modern AI deployment, managing containerized components and enabling dynamic automation across distributed systems.',
      example: 'Using Kubernetes to automatically scale an AI agent deployment from 2 pods to 20 pods when inference request volume increases during peak hours.'
    },
    'NVIDIA AI Enterprise': {
      definition: 'Enterprise-grade AI software platform that provides containerized components, frameworks, and tools for building and deploying AI applications at scale, with support for Kubernetes orchestration and enterprise security features.',
      example: 'Deploying NVIDIA AI Enterprise components through Kubernetes to ensure consistent, secure, and scalable AI agent infrastructure across multiple data centers.'
    },
    'Storage Infrastructure': {
      definition: 'Critical foundation for AI workloads that must be architected correctly to avoid bottlenecks. Requires scalability for exponentially growing datasets, flexibility for diverse data types and access patterns, robust data protection, and comprehensive security features.',
      example: 'A storage system that can handle high-throughput sequential reads for training workloads while also supporting low-latency random access for inference and vector database operations.'
    },
    'NVIDIA-Certified Storage': {
      definition: 'Storage solutions that adhere to stringent performance and reliability standards specifically for AI tasks, ensuring efficient data access for large model weights, Vector Database I/O for RAG, and knowledge bases for AI agents. Offers Foundation-level and Enterprise-level certifications.',
      example: 'A storage system certified by NVIDIA that guarantees it can handle the I/O requirements of training a 70B parameter model while simultaneously serving vector database queries for RAG workflows.'
    },
    'Artifact Repository': {
      definition: 'Secure, version-controlled local hub for essential NVIDIA AI Enterprise components, particularly valuable for on-premises setups following GitOps principles. Stores containerized NVIDIA NIM microservices, AI models, libraries, and tools.',
      example: 'A private artifact repository storing versioned container images of AI models and microservices, with Git tracking which versions are deployed in production.'
    },
    'GitOps': {
      definition: 'Infrastructure as code approach where Git maintains the desired state and controllers reconcile the actual state, enabling version-controlled infrastructure and automated deployments. The GitOps Controller continuously monitors Git and ensures the system matches the desired state.',
      example: 'Updating a Git repository with a new model version, and the GitOps Controller automatically deploying it to production Kubernetes clusters without manual intervention.'
    },
    'GitOps Controller': {
      definition: 'Component that continuously monitors the desired state stored in Git and ensures the actual system state matches by automatically reconciling differences, creating an automated, auditable deployment pipeline.',
      example: 'A GitOps Controller detecting a change in the Git repository and automatically updating Kubernetes deployments to match the new configuration.'
    },
    'Observability': {
      definition: 'Comprehensive monitoring through centralized logging, continuous metrics tracking, detailed model and application tracing, and consolidated reporting. Captures logs from infrastructure, container platforms, core AI software components, and AI agents themselves.',
      example: 'An observability platform tracking Time To First Token, Tokens Per Second, GPU utilization, and error rates across all AI agent deployments in real-time.'
    },
    'Time To First Token': {
      definition: 'Critical performance metric measuring how quickly an agent starts responding after receiving a request, essential for user experience. Represents the latency from request submission to the first generated token.',
      example: 'An agent achieving 200ms Time To First Token, meaning users see the first word of the response within 200 milliseconds of submitting their query.'
    },
    'Tokens Per Second': {
      definition: 'Throughput metric measuring response speed, indicating how many tokens the system can generate per second. Higher values indicate faster response generation after the initial token.',
      example: 'An LLM generating 50 tokens per second, meaning it produces approximately 50 words per second after the initial response begins.'
    },
    'OpenTelemetry': {
      definition: 'Industry standard for observability, providing APIs, SDKs, and tools for generating, collecting, and exporting telemetry data. Enables detailed tracing of request flows through distributed services.',
      example: 'Instrumenting an AI agent with OpenTelemetry to trace a request from the API gateway through multiple microservices, identifying that a database query is causing a 2-second delay.'
    },
    'Service Mesh': {
      definition: 'Infrastructure layer that manages service-to-service communication, providing automatic encryption, load balancing, and traffic management. Automatically encrypts all traffic between services.',
      example: 'A service mesh automatically encrypting all communication between an AI agent service and a vector database service, without requiring changes to either application code.'
    },
    'RBAC': {
      definition: 'Role-Based Access Control - Access control mechanism that restricts system access based on user roles, implemented at multiple levels including orchestration platform RBAC, integrated platform RBAC, and granular data service controls.',
      example: 'Configuring RBAC so that data scientists can deploy new models but only system administrators can modify security policies or access production databases.'
    },
    'Role-Based Access Control': {
      definition: 'Access control mechanism that restricts system access based on user roles, implemented at multiple levels in Kubernetes deployments for security and compliance.',
      example: 'A developer role that allows deploying new agent versions but prevents accessing sensitive customer data stored in vector databases.'
    },
    'Data Connectors': {
      definition: 'Components that enable secure access to diverse enterprise data sources through connectors and API endpoints linking internal systems like CRM, ERP, and point-of-sale systems. Transform enterprise data into embeddings stored in vector databases.',
      example: 'A data connector pulling customer data from a CRM system, transforming it into embeddings, and storing them in a vector database for RAG workflows.'
    },
    'Model Context Protocol': {
      definition: 'Emerging standard providing structured ways for AI agents to discover and interact with external data sources and tools, enabling standardized integration patterns.',
      example: 'An AI agent using Model Context Protocol to discover and connect to a company database, a weather API, and a calendar service through a standardized protocol.'
    },
    'MCP': {
      definition: 'Model Context Protocol - Emerging standard providing structured ways for AI agents to discover and interact with external data sources and tools.',
      example: 'An agent using MCP to automatically discover available data sources and tools without manual configuration.'
    },
    'Agent Ops': {
      definition: 'The specialized practice of deploying and managing AI agents at scale through NVIDIA AI Blueprints that accelerate development across domains like supply chain, marketing, and customer service.',
      example: 'An Agent Ops team using NVIDIA AI Blueprints to deploy a customer service agent in one week instead of three months of custom development.'
    },
    'NVIDIA AI Blueprints': {
      definition: 'Pre-built workflows and applications that accelerate development across domains, combining NVIDIA NIM microservices with GPU components for large-scale deployments, including frameworks, pretrained models, Helm Charts, and Jupyter Notebooks.',
      example: 'Using the Digital Human Blueprint to quickly deploy a virtual customer service agent with avatar animation and speech AI capabilities.'
    },
    'Ingress Management': {
      definition: 'Controlled external access to internal AI services through mechanisms that route HTTP and HTTPS traffic based on configurable rules. Enables URL-based routing, load balancing, SSL/TLS termination, and name-based virtual hosting.',
      example: 'Configuring ingress to route requests to /api/agent to the AI agent service and /api/health to a health check endpoint, all through a single entry point with SSL termination.'
    },
    'NVIDIA NeMo Guardrails': {
      definition: 'Security framework for input validation and output filtering in AI agents, ensuring that inputs are safe and outputs meet safety and compliance requirements.',
      example: 'NeMo Guardrails automatically filtering out prompt injection attempts and ensuring agent responses don\'t contain sensitive information or harmful content.'
    }
  },

  '4-deployment-scaling/2-TensorRTLLM-Github': {
    'TensorRT-LLM': {
      definition: 'Open-sourced library specifically designed for optimizing Large Language Model inference performance on NVIDIA GPUs. Provides an easy-to-use Python API to define LLMs while incorporating state-of-the-art optimizations for efficient inference execution.',
      example: 'Using TensorRT-LLM to optimize a Llama 3 70B model, achieving 2x faster inference with 40% lower memory usage compared to standard PyTorch deployment.'
    },
    'TensorRT LLM': {
      definition: 'Open-sourced library specifically designed for optimizing Large Language Model inference performance on NVIDIA GPUs.',
      example: 'Deploying a GPT-4 model with TensorRT LLM to serve 1000 concurrent requests with sub-100ms latency per request.'
    },
    'Inflight Batching': {
      definition: 'Capability that improves throughput by processing multiple requests simultaneously, allowing the system to start processing new requests before previous ones complete, maximizing GPU utilization.',
      example: 'An inference server using inflight batching to process 8 requests concurrently, with new requests starting as soon as GPU resources become available, rather than waiting for all 8 to complete.'
    },
    'Paged KV Caching': {
      definition: 'Memory management technique that efficiently manages memory usage during inference by organizing key-value cache in pages, reducing memory fragmentation and improving cache hit rates.',
      example: 'A 70B parameter model using paged KV caching to reduce memory usage by 30% while maintaining the same cache hit rate for repeated queries.'
    },
    'Quantization': {
      definition: 'Technique for reducing model precision to decrease memory usage and increase inference speed. TensorRT-LLM supports FP8, FP4, INT4 AWQ, INT8 SmoothQuant, and other precision formats.',
      example: 'Quantizing a model from FP16 to INT8, reducing memory usage by 50% and increasing inference speed by 2x with minimal accuracy loss.'
    },
    'FP8': {
      definition: '8-bit floating point precision format that accelerates model training and inference while lowering costs. Requires specialized techniques for numerical stability due to narrower dynamic range.',
      example: 'Training a model with FP8 precision, achieving 2x faster training speed and 40% lower memory usage compared to BF16, with careful per-tensor scaling to maintain numerical stability.'
    },
    'FP4': {
      definition: '4-bit floating point precision format for extreme quantization, significantly reducing model size and memory requirements while maintaining reasonable accuracy for certain use cases.',
      example: 'Deploying a model with FP4 quantization, reducing model size from 140GB to 35GB, enabling deployment on a single GPU instead of requiring multiple GPUs.'
    },
    'INT4 AWQ': {
      definition: '4-bit integer quantization technique using Activation-aware Weight Quantization, which quantizes weights based on activation patterns to minimize accuracy loss.',
      example: 'Applying INT4 AWQ to a model, achieving 4x model size reduction with less than 1% accuracy degradation compared to the original FP16 model.'
    },
    'INT8 SmoothQuant': {
      definition: '8-bit integer quantization technique that smooths activation outliers before quantization, enabling INT8 quantization of both weights and activations with minimal accuracy loss.',
      example: 'Using SmoothQuant to quantize a model to INT8, achieving 2x speedup and 50% memory reduction while maintaining 99.5% of the original model accuracy.'
    },
    'Speculative Decoding': {
      definition: 'Technique that can significantly reduce latency by predicting multiple tokens ahead, allowing parallel processing of likely token sequences and faster overall generation.',
      example: 'Using speculative decoding to predict the next 5 tokens while generating the current token, reducing overall generation latency by 30% for common query patterns.'
    },
    'Kernel Fusion': {
      definition: 'Optimization technique that combines multiple GPU operations into single kernels, reducing memory transfers and improving overall performance by minimizing kernel launch overhead.',
      example: 'Fusing matrix multiplication and activation functions into a single kernel, reducing memory bandwidth usage by 40% and improving inference speed by 15%.'
    },
    'NVIDIA Dynamo': {
      definition: 'Framework for dynamic compilation and optimization of PyTorch models, working alongside TensorRT-LLM to provide additional performance optimizations.',
      example: 'Using NVIDIA Dynamo to automatically optimize a PyTorch model before TensorRT-LLM compilation, achieving additional 10% performance improvement.'
    },
    'Triton Inference Server': {
      definition: 'Open-source inference serving software that supports multiple frameworks and hardware platforms, providing a comprehensive deployment platform for optimized LLM engines.',
      example: 'Deploying a TensorRT-LLM optimized model through Triton Inference Server to serve inference requests across multiple GPUs with automatic load balancing.'
    },
    'Day-Zero Support': {
      definition: 'Capability to immediately support new model releases on the same day they are published, ensuring developers can leverage performance benefits with the latest AI models without waiting.',
      example: 'TensorRT-LLM providing day-zero support for GPT-4, allowing developers to optimize and deploy the model immediately upon release.'
    },
    'Tensor Parallelism': {
      definition: 'Technique for distributing model parameters across multiple GPUs, enabling larger models to fit in available GPU memory by splitting tensors across devices.',
      example: 'Using tensor parallelism to split a 70B parameter model across 8 GPUs, with each GPU holding 1/8 of the model weights and processing in parallel.'
    },
    'Pipeline Parallelism': {
      definition: 'Technique for distributing model layers across multiple GPUs, enabling sequential processing where different GPUs handle different stages of model execution.',
      example: 'A 24-layer model using pipeline parallelism across 4 GPUs, with each GPU processing 6 consecutive layers, processing batches in a pipeline fashion.'
    },
    'PyTorch-Native Design': {
      definition: 'Architecture that enables developers to work with familiar PyTorch tools and workflows while benefiting from TensorRT-LLM performance optimizations, without requiring extensive knowledge of low-level optimization details.',
      example: 'A PyTorch developer using TensorRT-LLM with their existing PyTorch code, getting 3x performance improvement without rewriting their model architecture.'
    }
  },

  '4-deployment-scaling/3-measure-improve-AI-workload': {
    'NVIDIA DGX Cloud Benchmarking': {
      definition: 'Comprehensive tools to assess real-world, end-to-end AI workload performance and total cost of ownership, moving beyond simple comparisons of raw FLOPs or hourly GPU costs. Accounts for infrastructure software, cloud platforms, and application configurations.',
      example: 'Using DGX Cloud Benchmarking to compare training costs across AWS, Azure, and Google Cloud, accounting for actual workload performance rather than just GPU pricing.'
    },
    'Total Cost of Ownership': {
      definition: 'Comprehensive cost assessment including hardware, software, infrastructure, and operational costs over the entire lifecycle of an AI deployment, not just initial purchase or hourly rates.',
      example: 'Calculating TCO for a 3-year AI training project, including GPU costs, software licenses, data center power, cooling, and operational overhead, revealing that infrastructure costs exceed hardware costs.'
    },
    'TCO': {
      definition: 'Total Cost of Ownership - Comprehensive cost assessment for AI deployments including all associated expenses.',
      example: 'Analyzing TCO to discover that using optimized frameworks reduces overall project costs by 40% despite higher initial software licensing fees.'
    },
    'GPU Scaling': {
      definition: 'Optimization strategy for reducing training time by scaling GPU count in AI training clusters, often achieving near-linear performance improvements while maintaining cost efficiency.',
      example: 'Scaling from 8 GPUs to 64 GPUs for training Llama 3 70B, reducing training time from 115 days to 4 days with only a 2.6% cost increase per epoch.'
    },
    'Performance Explorer': {
      definition: 'Tool that helps users identify optimal GPU counts that minimize both training time and costs, enabling faster iteration cycles and accelerated AI development timelines.',
      example: 'Using Performance Explorer to determine that 32 GPUs provides the optimal balance between training speed and cost for a specific model and dataset combination.'
    },
    'FP8 Precision': {
      definition: 'Reduced precision format that accelerates model training and inference while lowering costs due to higher math throughput, improved communication efficiency, and reduced memory bandwidth requirements. Requires specialized techniques for numerical stability.',
      example: 'Training a model with FP8 precision, achieving 2x faster training and 40% lower memory usage, with careful per-tensor scaling to prevent numerical instability.'
    },
    'BF16': {
      definition: 'Brain Float 16 - 16-bit floating point format commonly used in AI training, providing good balance between precision and performance. FP8 can provide better performance but requires more careful handling.',
      example: 'Comparing FP8 and BF16 training, finding that FP8 provides 2x speedup but requires additional numerical stability techniques that BF16 doesn\'t need.'
    },
    'Transformer Engine': {
      definition: 'Hardware and software technology in Hopper and Blackwell architectures that enables selective FP8 usage on a per-layer basis, using reduced precision only where accuracy won\'t be adversely affected.',
      example: 'Transformer Engine automatically using FP8 for attention layers where it\'s safe, while maintaining higher precision for sensitive operations like layer normalization.'
    },
    'NVIDIA NeMo Framework': {
      definition: 'Framework for building and training large language models, with continuous optimizations that significantly improve performance and reduce costs over time through deep hardware and software co-engineering.',
      example: 'Using NeMo Framework 2024 optimizations, achieving 25% overall platform performance increases and proportional cost savings compared to previous versions.'
    },
    'Performance Architects': {
      definition: 'NVIDIA experts who provide guidance for optimizing framework configurations, working directly with teams to benchmark workloads, analyze results, and recommend adjustments tailored to specific workloads.',
      example: 'A Performance Architect analyzing a training workload and recommending FP8 precision and tensor parallelism configuration that reduces training time by 40%.'
    },
    'LLM Benchmarking Collection': {
      definition: 'Tools to quantify trade-offs across precision, cluster scale, and other parameters, enabling organizations to unlock peak AI performance through data-driven decisions about infrastructure investments.',
      example: 'Using the LLM Benchmarking Collection to compare INT8 vs FP16 inference, finding that INT8 provides 2x speedup with acceptable accuracy loss for the specific use case.'
    },
    'Workload Infrastructure Fingerprint': {
      definition: 'Unique performance characteristics of a workload based on its infrastructure configuration, affecting performance through communication patterns, resource utilization, and optimization opportunities.',
      example: 'Analyzing workload infrastructure fingerprint to discover that network bandwidth is the bottleneck, not GPU compute, leading to optimization of data transfer patterns.'
    },
    'Communication Patterns': {
      definition: 'How data and gradients are exchanged between GPUs during distributed training, with efficiency significantly impacting overall training performance and scalability.',
      example: 'Optimizing communication patterns by using ring all-reduce instead of parameter server, reducing communication overhead by 60% in a 64-GPU training cluster.'
    }
  },

  '4-deployment-scaling/4-Kubernetes-glossary': {
    'Kubernetes': {
      definition: 'Open-source platform for automating container orchestration—the deployment, scaling, and management of containerized applications. Built upon more than ten years of experience developing container-management systems at Google.',
      example: 'Using Kubernetes to automatically scale an AI inference service from 5 pods to 50 pods when request volume increases, then scaling back down during low-traffic periods.'
    },
    'Containers': {
      definition: 'Lightweight, portable packages that include applications, dependencies, libraries, binaries, and configuration files. More efficient than virtual machines by virtualizing the operating system instead of hardware.',
      example: 'Packaging an AI agent with all its dependencies into a container, allowing it to run identically on a developer\'s laptop, a test server, and production Kubernetes clusters.'
    },
    'Pods': {
      definition: 'Kubernetes concept that enables multiple containers to run on a host machine and share resources without conflict. Pods define shared services like directories, IP addresses, or storage exposed to all containers within the pod.',
      example: 'A pod containing an AI agent container and a logging sidecar container, both sharing the same network namespace and storage volumes.'
    },
    'Kubelet': {
      definition: 'Node agent that manages pods, containers, and images on each Kubernetes node, ensuring containers are running and healthy according to pod specifications.',
      example: 'Kubelet automatically restarting a crashed AI agent container, ensuring high availability without manual intervention.'
    },
    'Service Discovery': {
      definition: 'Automated mechanism for services to find and communicate with each other in Kubernetes, using DNS names and service endpoints without needing to know specific IP addresses.',
      example: 'An AI agent service automatically discovering a vector database service by its DNS name "vector-db-service", without hardcoding IP addresses.'
    },
    'Load Balancing': {
      definition: 'Automatic distribution of incoming requests across multiple pod instances, ensuring even workload distribution and high availability.',
      example: 'Kubernetes load balancer distributing 1000 inference requests per second across 10 AI agent pods, with each pod handling approximately 100 requests per second.'
    },
    'Namespaces': {
      definition: 'Virtual clusters within clusters that enable operations and development teams to share physical machines and access services without conflicts, providing logical separation of resources.',
      example: 'Creating separate namespaces for "development", "staging", and "production" environments, allowing multiple teams to work independently on the same Kubernetes cluster.'
    },
    'Serverless Computing': {
      definition: 'Computing model where applications are built from services that execute functions solely for application needs, with containers managed by Kubernetes that can be spun up in milliseconds.',
      example: 'A serverless AI inference function that automatically starts when a request arrives, processes it, and shuts down when idle, paying only for actual compute time.'
    },
    'GPU Support': {
      definition: 'Kubernetes capability to configure and use GPU resources for accelerating workloads such as data science, machine learning, and deep learning through device plug-ins.',
      example: 'A Kubernetes pod requesting 2 GPUs, with Kubernetes automatically scheduling it on a node with available GPUs and exposing them to the container.'
    },
    'Device Plug-ins': {
      definition: 'Kubernetes components that enable pod access to specialized hardware features like GPUs and expose them as schedulable resources.',
      example: 'NVIDIA device plug-in exposing GPUs as a schedulable resource, allowing Kubernetes to allocate GPUs to pods that request them.'
    },
    'Multi-Instance GPU': {
      definition: 'MIG technology enabling a single A100 GPU to be segmented into seven smaller GPUs, allowing applications to scale automatically using container runtimes like Kubernetes with greater granularity.',
      example: 'Using MIG to split an A100 GPU into 7 smaller GPUs, allowing 7 different AI inference pods to each use a portion of the GPU, improving resource utilization.'
    },
    'MIG': {
      definition: 'Multi-Instance GPU - Technology enabling a single A100 GPU to be segmented into seven smaller GPUs for finer-grained resource allocation.',
      example: 'Configuring MIG to create 7 GPU instances from one A100, enabling better resource sharing across multiple smaller AI workloads.'
    },
    'NVIDIA EGX Stack': {
      definition: 'Cloud-native, scalable software stack for containerized accelerated AI computing managed by Kubernetes, providing optimized runtime for AI workloads.',
      example: 'Deploying the NVIDIA EGX stack on Kubernetes to provide optimized GPU acceleration for AI inference workloads across edge and data center environments.'
    },
    'NVIDIA Triton': {
      definition: 'Inference serving platform that handles hardware abstraction within nodes as Kubernetes orchestrates clusters, enabling effective scale-out capabilities for AI inference serving platforms.',
      example: 'Deploying Triton Inference Server on Kubernetes to serve multiple AI models with automatic scaling based on request volume.'
    },
    'BinderHub': {
      definition: 'Kubernetes extension that enables building and registering container images from repositories as shared notebooks, facilitating reproducible research environments.',
      example: 'Using BinderHub to automatically create containerized Jupyter notebook environments from Git repositories, allowing data scientists to share reproducible experiments.'
    },
    'Kubeflow': {
      definition: 'Kubernetes extension that streamlines machine learning workflow setup and maintenance, providing tools for building, deploying, and managing ML pipelines.',
      example: 'Using Kubeflow to create a complete ML pipeline from data preprocessing through model training to deployment, all running on Kubernetes.'
    },
    'Rollouts and Rollbacks': {
      definition: 'Kubernetes capability to gradually deploy new versions and automatically revert to previous versions if issues are detected, ensuring reliable deployments.',
      example: 'Performing a rolling update of an AI agent, gradually replacing old pods with new ones, and automatically rolling back if error rates increase above a threshold.'
    },
    'Container Health Monitoring': {
      definition: 'Automatic monitoring of container health with automatic restarts when containers fail, ensuring high availability of services.',
      example: 'Kubernetes detecting that an AI agent container has crashed and automatically restarting it, maintaining service availability.'
    }
  },

  '4-deployment-scaling/5-NVDA-NSight': {
    'NVIDIA Nsight Systems': {
      definition: 'Comprehensive system-wide performance analysis tool designed to visualize application algorithms, identify optimization opportunities, and tune performance to scale efficiently across any quantity or size of CPUs and GPUs.',
      example: 'Using Nsight Systems to identify that GPU utilization is only 60% because CPU preprocessing is the bottleneck, leading to optimization of the data pipeline.'
    },
    'Nsight Systems': {
      definition: 'System-wide performance analysis tool that provides unbiased, system-wide activity data visualization on a unified timeline, enabling investigation of correlations, dependencies, activity, bottlenecks, and resource allocation.',
      example: 'Profiling an AI training workload with Nsight Systems to discover that communication overhead between GPUs is limiting scaling efficiency.'
    },
    'GPU Metrics Sampling': {
      definition: 'Feature that provides detailed low-level input/output activity tracking including PCIe throughput, NVIDIA NVLink activity, dynamic RAM operations, streaming multiprocessor utilization, Tensor Core activity, instruction throughput, and warp occupancy metrics.',
      example: 'Using GPU Metrics Sampling to discover that memory bandwidth is the bottleneck, not compute, leading to optimization of memory access patterns.'
    },
    'CUDA': {
      definition: 'NVIDIA\'s parallel computing platform and programming model that enables dramatic increases in computing performance by harnessing the power of GPUs.',
      example: 'Writing CUDA kernels to accelerate custom operations in an AI inference pipeline, achieving 10x speedup compared to CPU implementation.'
    },
    'cuBLAS': {
      definition: 'CUDA Basic Linear Algebra Subroutines - GPU-accelerated library for linear algebra operations, providing optimized implementations of BLAS routines.',
      example: 'Using cuBLAS for matrix multiplications in a neural network, achieving significantly faster performance than CPU-based implementations.'
    },
    'cuDNN': {
      definition: 'CUDA Deep Neural Network library - GPU-accelerated library of primitives for deep neural networks, providing highly tuned implementations for standard routines.',
      example: 'Using cuDNN for convolution operations in a CNN model, leveraging highly optimized kernels that are faster than custom implementations.'
    },
    'NVIDIA TensorRT': {
      definition: 'Inference optimization platform that provides high-performance deep learning inference, including layer fusion, precision calibration, kernel auto-tuning, and dynamic tensor memory management.',
      example: 'Using TensorRT to optimize a trained model for inference, achieving 5x faster inference speed with INT8 quantization while maintaining accuracy.'
    },
    'Multi-Node Profiling': {
      definition: 'Capability to perform performance analysis at data center and cluster scales, automatically diagnosing performance limiters across many nodes simultaneously.',
      example: 'Profiling a distributed training job across 64 GPUs on 8 nodes, identifying that network communication between nodes is the primary bottleneck.'
    },
    'Frame Analysis': {
      definition: 'Automated performance monitoring for interactive applications that automatically detects slow frames by highlighting frame times exceeding targets and identifying local stutter frames.',
      example: 'Using frame analysis to identify that certain API calls are causing frame drops in a real-time AI visualization application, leading to optimization of those calls.'
    },
    'Stutter Detection': {
      definition: 'Capability that identifies frames with higher times than neighboring frames, reporting CPU times per frame and identifying API calls likely causing stutters.',
      example: 'Stutter detection identifying that database queries during frame rendering are causing inconsistent frame times, leading to optimization of query timing.'
    },
    'Nsight Graphics': {
      definition: 'Tool for debugging and profiling Direct3D, Vulkan, and OpenGL applications with ray-tracing support, providing detailed graphics pipeline analysis.',
      example: 'Using Nsight Graphics to optimize a real-time rendering pipeline for a 3D AI visualization application.'
    },
    'Nsight Compute': {
      definition: 'Interactive CUDA kernel profiler with detailed performance metrics, enabling deep analysis of individual GPU kernel performance.',
      example: 'Using Nsight Compute to analyze a custom CUDA kernel, discovering that shared memory bank conflicts are limiting performance.'
    },
    'Nsight Aftermath SDK': {
      definition: 'SDK for generating GPU crash diagnostics, providing detailed information about GPU crashes to aid in debugging.',
      example: 'Using Nsight Aftermath to capture crash dumps from a GPU crash during model training, identifying the exact kernel and parameters that caused the failure.'
    },
    'Python Backtrace Sampling': {
      definition: 'Feature that provides Python call stack information during profiling, enabling identification of Python code bottlenecks in AI applications.',
      example: 'Using Python backtrace sampling to discover that a data preprocessing function written in Python is taking 40% of total execution time.'
    },
    'NVTX Markers': {
      definition: 'NVIDIA Tools Extension markers that allow developers to annotate code with named ranges and events for visualization in profiling tools.',
      example: 'Adding NVTX markers around key operations in an AI pipeline to visualize their timing and relationships in Nsight Systems.'
    }
  },

  '4-deployment-scaling/6-Kube-Prometheus': {
    'Prometheus': {
      definition: 'Open-source monitoring and alerting toolkit that collects metrics from configured targets at given intervals, evaluating rule expressions, and triggering alerts. Essential for monitoring Kubernetes clusters and GPU-accelerated workloads.',
      example: 'Prometheus scraping GPU utilization metrics every 15 seconds from all nodes in a Kubernetes cluster, storing the data for analysis and alerting.'
    },
    'Helm': {
      definition: 'Package manager for Kubernetes that simplifies deployment and management of complex applications through charts that define, install, and upgrade Kubernetes applications.',
      example: 'Using Helm to install Prometheus with a single command, automatically creating all necessary Kubernetes resources including deployments, services, and config maps.'
    },
    'Prometheus Operator': {
      definition: 'Kubernetes operator that manages Prometheus and related monitoring components, using standard configurations and dashboards to simplify monitoring infrastructure deployment.',
      example: 'Deploying Prometheus Operator to automatically manage Prometheus instances, ensuring they are properly configured and updated as the cluster changes.'
    },
    'kube-prometheus': {
      definition: 'Project that provides standard configurations and dashboards for both Prometheus and Grafana, simplifying the deployment of comprehensive monitoring solutions.',
      example: 'Using kube-prometheus to deploy a complete monitoring stack with Prometheus, Grafana, and Alertmanager in a single Helm installation.'
    },
    'DCGM Exporter': {
      definition: 'NVIDIA Data Center GPU Manager Exporter that provides essential GPU telemetry collection capabilities through a dedicated Helm chart, integrating seamlessly with Prometheus monitoring stack.',
      example: 'Deploying DCGM Exporter to collect GPU utilization, memory usage, temperature, and power consumption metrics from all GPUs in a Kubernetes cluster.'
    },
    'DCGM': {
      definition: 'Data Center GPU Manager - NVIDIA tool for managing and monitoring GPUs in data center environments, providing comprehensive GPU telemetry.',
      example: 'DCGM collecting real-time metrics on GPU utilization, memory usage, and temperature across all GPUs in a data center.'
    },
    'ServiceMonitor': {
      definition: 'Kubernetes custom resource that enables Prometheus to discover and scrape metrics from services, automatically configuring target discovery.',
      example: 'Creating a ServiceMonitor for an AI inference service, allowing Prometheus to automatically discover and scrape metrics from all service pods.'
    },
    'PodMonitor': {
      definition: 'Kubernetes custom resource that enables Prometheus to discover and scrape metrics from pods directly, useful for services that don\'t use standard Kubernetes services.',
      example: 'Creating a PodMonitor to scrape GPU metrics from DCGM Exporter pods, ensuring comprehensive GPU monitoring coverage.'
    },
    'Grafana': {
      definition: 'Open-source analytics and visualization platform that integrates with Prometheus to create dashboards for monitoring and observability.',
      example: 'Creating Grafana dashboards to visualize GPU utilization, inference latency, and error rates across all AI agent deployments.'
    },
    'NodePort': {
      definition: 'Kubernetes service type that exposes a service on each node\'s IP at a static port, enabling external access to services within the cluster.',
      example: 'Configuring Prometheus with NodePort to access the Prometheus UI from outside the cluster at a specific port on any node.'
    },
    'GPU Metrics': {
      definition: 'Telemetry data specific to GPU performance and utilization, including utilization percentage, memory usage, temperature, power consumption, and compute/memory throughput.',
      example: 'Monitoring GPU metrics to identify that GPU memory is the limiting factor for batch size, leading to optimization of memory usage.'
    },
    'DCGM_FI_DEV_GPU_UTIL': {
      definition: 'DCGM metric that measures GPU utilization percentage, indicating how much of the GPU\'s compute capacity is being used.',
      example: 'Monitoring DCGM_FI_DEV_GPU_UTIL to discover that GPUs are only 30% utilized, indicating an opportunity to increase batch size or process more requests concurrently.'
    },
    'Scrape Configuration': {
      definition: 'Prometheus configuration that defines which targets to collect metrics from, how often to scrape, and what metrics to collect.',
      example: 'Configuring Prometheus to scrape GPU metrics from DCGM Exporter every 15 seconds, ensuring timely detection of performance issues.'
    },
    'Time-Series Data': {
      definition: 'Data points collected over time that enable trend analysis and historical performance comparison, essential for capacity planning and optimization.',
      example: 'Analyzing time-series data to identify that GPU utilization peaks during business hours, enabling right-sizing of GPU resources.'
    }
  },

  '4-deployment-scaling/7-scaling-LLM-Kubernetes': {
    'Triton Inference Server': {
      definition: 'Open-source inference serving software that supports multiple frameworks and hardware platforms, including TensorRT, TensorFlow, PyTorch, and ONNX. Provides comprehensive deployment platform for optimized LLM engines.',
      example: 'Deploying a TensorRT-LLM optimized model through Triton Inference Server to serve inference requests with automatic batching and multi-GPU support.'
    },
    'TensorRT-LLM': {
      definition: 'Library for optimizing Large Language Model inference performance on NVIDIA GPUs, providing easy-to-use Python API with multiple performance enhancements.',
      example: 'Using TensorRT-LLM to optimize a Llama 3 model, achieving 2x faster inference with optimized kernels, quantization, and batching.'
    },
    'Horizontal Pod Autoscaler': {
      definition: 'Kubernetes component that automatically scales deployment replicas based on metrics like CPU utilization or custom metrics such as queue-to-compute ratio, enabling dynamic resource allocation.',
      example: 'HPA automatically scaling an AI inference service from 3 pods to 10 pods when request volume increases, then scaling back to 3 when traffic decreases.'
    },
    'HPA': {
      definition: 'Horizontal Pod Autoscaler - Kubernetes component for automatic scaling of pod replicas based on metrics.',
      example: 'HPA monitoring request queue length and automatically adding more pods when the queue exceeds a threshold.'
    },
    'Queue-to-Compute Ratio': {
      definition: 'Custom metric calculated as queue time divided by compute time, indicating response time performance and triggering scaling decisions when values exceed configured thresholds.',
      example: 'Queue-to-compute ratio of 2.0 indicating that requests are waiting twice as long in the queue as they take to process, triggering HPA to add more pods.'
    },
    'Tensor Parallelism': {
      definition: 'Technique for distributing model parameters across multiple GPUs, enabling larger models to fit in available GPU memory by splitting tensors across devices.',
      example: 'Using tensor parallelism to split a 70B parameter model across 8 GPUs, with each GPU processing 1/8 of the model weights in parallel.'
    },
    'Pipeline Parallelism': {
      definition: 'Technique for distributing model layers across multiple GPUs, enabling sequential processing where different GPUs handle different stages of model execution.',
      example: 'A 24-layer model using pipeline parallelism across 4 GPUs, with each GPU processing 6 consecutive layers in a pipeline fashion.'
    },
    'Kubernetes Deployments': {
      definition: 'Kubernetes resource that manages pod replicas, ensuring a specified number of pods are running and automatically replacing failed pods.',
      example: 'Creating a Deployment for Triton Inference Server with 5 replicas, ensuring high availability and load distribution.'
    },
    'Kubernetes Services': {
      definition: 'Kubernetes resource that exposes pods as network services, providing stable IP addresses and DNS names for service discovery and load balancing.',
      example: 'Creating a Service for an AI inference deployment, providing a stable endpoint that load balances requests across all pod replicas.'
    },
    'Helm Charts': {
      definition: 'Packages of pre-configured Kubernetes resources that simplify deployment management across different environments, defined through values.yaml files.',
      example: 'Using a Helm chart to deploy Triton Inference Server, with values.yaml defining GPU types, model configurations, and scaling parameters.'
    },
    'PodMonitor': {
      definition: 'Kubernetes custom resource that enables Prometheus to discover and scrape metrics from pods, essential for autoscaling based on custom metrics.',
      example: 'Creating a PodMonitor for Triton pods to enable Prometheus metric collection for HPA scaling decisions.'
    },
    'ServiceMonitor': {
      definition: 'Kubernetes custom resource that enables Prometheus to discover and scrape metrics from services, used for monitoring and autoscaling.',
      example: 'Configuring ServiceMonitor to scrape metrics from Triton Inference Server, enabling HPA to make scaling decisions based on inference performance.'
    },
    'Load Balancer': {
      definition: 'Component that distributes incoming requests across multiple pod instances, ensuring even workload distribution and high availability.',
      example: 'A load balancer distributing 1000 inference requests per second across 10 Triton pods, with each pod handling approximately 100 requests.'
    },
    'Layer 4 Load Balancing': {
      definition: 'Transport-level load balancing that distributes traffic based on IP address and port, operating at the network layer.',
      example: 'Using Layer 4 load balancing to distribute TCP connections across multiple backend pods based on source IP and port.'
    },
    'Layer 7 Load Balancing': {
      definition: 'Application-level load balancing that can route traffic based on HTTP headers, URLs, and other application-layer information.',
      example: 'Using Layer 7 load balancing to route requests to /api/v1/models to one service and /api/v1/inference to another service.'
    },
    'Traefik': {
      definition: 'Modern HTTP reverse proxy and load balancer that can serve as a Kubernetes ingress controller, providing advanced routing capabilities.',
      example: 'Using Traefik as an ingress controller to route AI inference requests with SSL termination and advanced routing rules.'
    },
    'NGINX Plus': {
      definition: 'Commercial version of NGINX with advanced features for load balancing, monitoring, and high availability in Kubernetes environments.',
      example: 'Using NGINX Plus as an ingress controller for AI services, providing advanced load balancing and monitoring capabilities.'
    },
    'Model Checkpoints': {
      definition: 'Saved model states that can be loaded to resume training or for inference, typically stored in formats compatible with specific frameworks.',
      example: 'Downloading Llama 3 70B model checkpoints from Hugging Face and converting them to TensorRT-LLM format for optimized inference.'
    },
    'Kubernetes Secrets': {
      definition: 'Kubernetes resource for securely storing sensitive information like passwords, tokens, and keys, used for authentication and authorization.',
      example: 'Creating a Kubernetes Secret with Hugging Face API token to enable secure model downloads during container initialization.'
    },
    'NVIDIA GPU Cloud': {
      definition: 'NGC - Container registry providing optimized container images for AI workloads, including pre-configured environments with frameworks and tools.',
      example: 'Pulling a TensorRT-LLM container image from NVIDIA GPU Cloud that includes Triton Inference Server and all necessary dependencies.'
    },
    'NGC': {
      definition: 'NVIDIA GPU Cloud - Container registry providing optimized container images for AI and HPC workloads.',
      example: 'Using NGC to pull pre-optimized container images for AI training and inference, reducing setup time and ensuring compatibility.'
    },
    'TensorRT Engine Files': {
      definition: 'Optimized model files generated by TensorRT-LLM that contain performance enhancements, stored on host nodes and remapped to Kubernetes pods.',
      example: 'Generating TensorRT engine files for a model, storing them on persistent storage, and mounting them into pods to avoid redundant generation when scaling.'
    },
    'Autoscaling': {
      definition: 'Automatic adjustment of resource capacity based on workload demand, ensuring optimal performance while minimizing costs.',
      example: 'Autoscaling automatically adding more inference pods during peak hours and removing them during low-traffic periods, optimizing cost and performance.'
    }
  },

  '4-deployment-scaling/8-TensorRT-performance-analysis': {
    'NVIDIA Nsight Systems': {
      definition: 'Comprehensive application-level performance analysis tool essential for optimizing Large Language Model inference workloads, providing metric sampling capabilities that offer effective middle-ground between high-level timing analysis and detailed kernel-level investigation.',
      example: 'Using Nsight Systems to profile a TensorRT-LLM inference workload, identifying that memory transfers are the bottleneck rather than compute operations.'
    },
    'CUDA Profiler Runtime API': {
      definition: 'API that allows dynamic control of profiling data collection by toggling profiling on and off, enabling users to specify exactly which regions correspond to profiled sections for more manageable file sizes.',
      example: 'Using CUDA Profiler Runtime API to profile only the inference phase of a workload, excluding data loading and preprocessing to reduce profile file size.'
    },
    'PyTorch Profiler': {
      definition: 'Profiling tool integrated with PyTorch that enables detailed performance breakdown analysis within model execution, providing framework-specific metrics and insights.',
      example: 'Using PyTorch Profiler to identify that a specific layer in a model is taking 40% of total inference time, leading to optimization of that layer.'
    },
    'NVTX Markers': {
      definition: 'NVIDIA Tools Extension markers that allow developers to annotate code with named ranges and events for visualization in profiling tools, enabling correlation between code and performance data.',
      example: 'Adding NVTX markers around key operations in TensorRT-LLM to visualize their timing and relationships in Nsight Systems profiling output.'
    },
    'NVTX': {
      definition: 'NVIDIA Tools Extension - API for annotating code with markers that appear in profiling tools, enabling better understanding of performance characteristics.',
      example: 'Using NVTX to mark the start and end of model inference, making it easy to identify inference time in profiling output.'
    },
    'Global Interpreter Lock': {
      definition: 'GIL - Mechanism in Python that allows only one thread to execute Python bytecode at a time, which can limit parallelism in multi-threaded Python applications.',
      example: 'Profiling GIL contention to discover that Python data preprocessing is blocking GPU operations, leading to optimization using multiprocessing instead of multithreading.'
    },
    'GIL': {
      definition: 'Global Interpreter Lock - Python mechanism that can limit parallelism, important to profile in AI workloads that mix Python and GPU operations.',
      example: 'Identifying GIL contention as a bottleneck in a data preprocessing pipeline, leading to refactoring to use processes instead of threads.'
    },
    'TLLM_PROFILE_START_STOP': {
      definition: 'TensorRT-LLM environment variable that specifies iteration ranges for targeted profiling, reducing profile size and focusing analysis on particular execution phases.',
      example: 'Setting TLLM_PROFILE_START_STOP to profile only iterations 10-20 of a benchmark run, excluding warmup iterations and focusing on steady-state performance.'
    },
    'TLLM_NVTX_DEBUG': {
      definition: 'TensorRT-LLM environment variable that enables enhanced NVTX markers, providing more detailed annotations for comprehensive performance visibility.',
      example: 'Enabling TLLM_NVTX_DEBUG to get detailed NVTX markers for every operation in TensorRT-LLM, making it easier to identify bottlenecks.'
    },
    'TLLM_PROFILE_RECORD_GC': {
      definition: 'TensorRT-LLM environment variable that enables garbage collection profiling, providing insights into Python memory management overhead.',
      example: 'Using TLLM_PROFILE_RECORD_GC to identify that frequent garbage collection is causing performance spikes in an inference workload.'
    },
    'Chrome Tracing Interface': {
      definition: 'Visualization tool for PyTorch profiler results saved as JSON files, providing detailed execution timelines and performance breakdowns specific to PyTorch operations.',
      example: 'Loading PyTorch profiler JSON output into Chrome\'s tracing interface to visualize the execution timeline and identify slow operations.'
    },
    'Multi-Node Profiling': {
      definition: 'Performance analysis of large-scale LLM deployments across multiple GPUs and nodes, providing insights into communication patterns, load distribution, and scaling bottlenecks.',
      example: 'Profiling a distributed inference deployment across 8 nodes with 64 GPUs, identifying that network communication between nodes is limiting overall throughput.'
    },
    'MPI': {
      definition: 'Message Passing Interface - Standard for communication in parallel computing, used in multi-node profiling to analyze distributed workloads.',
      example: 'Using MPI options in Nsight Systems to profile a multi-node training job, analyzing communication patterns between nodes.'
    },
    'Streaming Inference': {
      definition: 'Inference pattern where results are generated and returned incrementally as tokens are produced, commonly used in production LLM deployments for better user experience.',
      example: 'Profiling streaming inference to optimize token generation latency, ensuring users see responses as quickly as possible.'
    },
    '.nsys-rep Files': {
      definition: 'NVIDIA Nsight Systems report files that provide comprehensive GPU and system-level performance data viewable through the Nsight Systems application interface.',
      example: 'Loading a .nsys-rep file into Nsight Systems to visualize GPU utilization, memory transfers, and kernel execution timelines for an inference workload.'
    },
    'Performance Characterization': {
      definition: 'Comprehensive analysis spanning hardware utilization, framework efficiency, and application-level metrics, supporting informed optimization decisions for production deployments.',
      example: 'Performing performance characterization to identify that framework overhead is 20% of total inference time, leading to optimization of the framework integration.'
    }
  }
};
