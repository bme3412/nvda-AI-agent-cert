// Centralized quiz data management
// All quiz imports and data mapping in one place

import { questions as agenticAIFactoryQuestions } from './1-agent-architecture-design/1-agentic-AI-factory';
import { questions as buildingAutonomousAIQuestions } from './1-agent-architecture-design/2-building-autonomous-AI';
import { questions as buildingBlocksCustomerServiceQuestions } from './1-agent-architecture-design/3-building-blocks-customer-service';
import { questions as agenticAIAutonomousAIAgentsQuestions } from './1-agent-architecture-design/4-agentic-AI-autonomous-AI-agents';
import { questions as catchMeIfYouCanQuestions } from './1-agent-architecture-design/5-catch-me-if-you-can';
import { questions as multiAgentSystemsQuestions } from './1-agent-architecture-design/6-multi-agent-systems';
import { questions as designUserInterfacesQuestions } from './generated-content/1-agent-architecture-design/1.1-Design-user-interfaces';
import { questions as implementReasoningReActQuestions } from './generated-content/1-agent-architecture-design/1.2-Implement-Reasoning-ReAct';
import { questions as configAgentProtocolQuestions } from './generated-content/1-agent-architecture-design/1.3-Config-Agent-agent-protocol';
import { questions as manageMemoryQuestions } from './generated-content/1-agent-architecture-design/1.4-Manage-memory';
import { questions as orchestrateMultiAgentQuestions } from './generated-content/1-agent-architecture-design/1.5-Orchestrate-multi-agent';
import { questions as applyingLogicTreesQuestions } from './1-agent-architecture-design/12-applying-logic-trees';
import { questions as designingUserInterfacesSummaryQuestions } from './summaries/1-agent-architecture-design/7-designing-user-interfaces';
import { questions as implementingReasoningReactSummaryQuestions } from './summaries/1-agent-architecture-design/8-implementing-reasoning-react';
import { questions as configuringAgentCommunicationSummaryQuestions } from './summaries/1-agent-architecture-design/9-configuring-agent-communication';
import { questions as orchestratingMultiAgentWorkflowsSummaryQuestions } from './summaries/1-agent-architecture-design/11-orchestrating-multi-agent-workflows';
import { questions as implementingKnowledgeGraphsQuestions } from './summaries/1-agent-architecture-design/13-implementing-knowledge-graphs';
import { questions as ensuringAdaptabilityAndScalabilityQuestions } from './summaries/1-agent-architecture-design/14-ensuring-adaptability-and-scalability';
import { questions as optimizationNVDATritonQuestions } from './2-agent-development/1-optimization-NVDA-Triton';
import { questions as nvdaAgentIntelligenceToolkitQuestions } from './2-agent-development/2-NVDA-agent-intelligence-toolkit';
import { questions as introLLMPTuningQuestions } from './2-agent-development/3-intro-LLM-p-tuning';
import { questions as buildingMultiModalAIRAGQuestions } from './2-agent-development/4-building-multi-modal-AI-RAG';
import { questions as designConsiderationsAgenticQuestions } from './2-agent-development/5-design-considerations-Agentic';
import { questions as transientFaultHandlingQuestions } from './2-agent-development/6-transient-fault-handling';
import { questions as circuitBreakerPatternQuestions } from './2-agent-development/7-circuit-breaker-pattern';
import { questions as retryPatternQuestions } from './2-agent-development/8-retry-pattern';
import { questions as evaluateDecisionStrategiesQuestions } from './generated-content/2-agent-development/2.6-Evaluate-decision-strategies';
import { questions as agentIntelligenceToolkitFAQQuestions } from './3-evaluation-tuning/4-agent-intelligence-toolkit-FAQ';
import { questions as launchingAgentIntelligenceToolkitQuestions } from './3-evaluation-tuning/5-launching-agent-intelligence-toolkit';
import { questions as nvdaNemoAgentQuestions } from './3-evaluation-tuning/6-NVDA-NEMO-agent';
import { questions as agenticAINextBigThingQuestions } from './3-evaluation-tuning/7-agentic-AI-next-big-thing';
import { questions as agenticAIChallengesQuestions } from './3-evaluation-tuning/8-agentic-AI-challenges';
import { questions as aiAgentsBeginnersQuestions } from './3-evaluation-tuning/9-AI-agents-beginners';
import { questions as navigatingChallengesQuestions } from './3-evaluation-tuning/10-navigating-challenges';
import { questions as agenticAIFactoryDeploymentQuestions } from './4-deployment-scaling/1-agentic-AI-factory';
import { questions as tensorRTLLMGithubQuestions } from './4-deployment-scaling/2-TensorRTLLM-Github';
import { questions as measureImproveAIWorkloadQuestions } from './4-deployment-scaling/3-measure-improve-AI-workload';
import { questions as kubernetesGlossaryQuestions } from './4-deployment-scaling/4-Kubernetes-glossary';
import { questions as nvdaNSightQuestions } from './4-deployment-scaling/5-NVDA-NSight';
import { questions as kubePrometheusQuestions } from './4-deployment-scaling/6-Kube-Prometheus';
import { questions as scalingLLMKubernetesQuestions } from './4-deployment-scaling/7-scaling-LLM-Kubernetes';
import { questions as tensorRTPerformanceAnalysisQuestions } from './4-deployment-scaling/8-TensorRT-performance-analysis';
import { questions as nvdaNemoQuestions } from './5-cognition-planning-memory/1-NVDA-NeMO';
import { questions as llmContextLearnersQuestions } from './5-cognition-planning-memory/2-LLM-context-learners';
import { questions as nemoRLDocQuestions } from './5-cognition-planning-memory/3-NemO-RL-doc';
import { questions as jamba15Questions } from './5-cognition-planning-memory/4-Jamba-1.5';
import { questions as understandingPlanningLLMQuestions } from './5-cognition-planning-memory/5-Understanding-planning-LLM';
import { questions as aiAgentMemoryQuestions } from './5-cognition-planning-memory/6-AI-Agent-Memory';
import { questions as understandingPlanningLLM2Questions } from './5-cognition-planning-memory/7-Understanding-Planning-LLM';
import { questions as ragMoreAccurateQuestions } from './6-knowledge-integration-data-handling/1-RAG-more-accurate';
import { questions as bestPracticesTensorRTQuestions } from './7-NVDA-Platform-Integration/1-Best-Practices-TensorRT';
import { questions as batchersQuestions } from './7-NVDA-Platform-Integration/2-Batchers';
import { questions as nemoGuardrailsQuestions } from './7-NVDA-Platform-Integration/4-NeMO-Guardrails';
import { questions as tritonServerBackendQuestions } from './7-NVDA-Platform-Integration/3-Triton-server-backend';
import { questions as performanceTuningGuideQuestions } from './7-NVDA-Platform-Integration/5-performance-tuning-guide';
import { questions as nemoBestPracticesQuestions } from './7-NVDA-Platform-Integration/6-NeMo-best-practices';
import { questions as optimizationQuestions } from './7-NVDA-Platform-Integration/7-Optimization';
import { questions as nemoAgentQuestions } from './7-NVDA-Platform-Integration/8-NEmo-Agent';
import { questions as nemoAgentIntelligenceToolkitQuestions } from './7-NVDA-Platform-Integration/9-Nemo-Agent-intelligence-toolkit';
import { questions as aiqQuestions } from './7-NVDA-Platform-Integration/10-AIQ';
import { questions as masteringLLMsQuestions } from './7-NVDA-Platform-Integration/11-Mastering-LLMs';
import { questions as deployInferenceWorkloadsQuestions } from './7-NVDA-Platform-Integration/12-Deploy-Inference-Workloads';
import { questions as nemotronAdvancedAgentsQuestions } from './7-NVDA-Platform-Integration/13-Nemotron-advanced-agents';
import { questions as aiAgentBlueprintQuestions } from './7-NVDA-Platform-Integration/14-AI-Agent-blueprint';
import { questions as improveAICodeGenQuestions } from './7-NVDA-Platform-Integration/15-Improve-AI-code-gen';
import { questions as nemoScalableAiQuestions } from './7-NVDA-Platform-Integration/16-Nemo-Scalable-Ai';
import { questions as aiAgentEvalQuestions } from './8-run-monitor-maintain/1-AI-Agent-Eval';
import { questions as logTraceMonitorQuestions } from './8-run-monitor-maintain/2-Log-Trace-Monitor';
import { questions as timeWeightedRetrieverQuestions } from './8-run-monitor-maintain/3-Time-Weighted-Retriever';
import { questions as troubleshootingQuestions } from './8-run-monitor-maintain/4-Troubleshooting';
import { questions as langchainTracingQuestions } from './8-run-monitor-maintain/5-Langchain-Tracing';
import { questions as langchainStructuredOutputsQuestions } from './8-run-monitor-maintain/6-LangChain-structured-outputs';
import { questions as smithLangchainEvalQuestions } from './8-run-monitor-maintain/7-Smith-Langchain-eval';
import { questions as monitoringMLProductionQuestions } from './8-run-monitor-maintain/8-Monitoring-ML-production';
import { questions as buildingSaferAppsTemplatesQuestions } from './9-Safety-Ethics/1-Building-Safer-Apps-Templates';
import { questions as aiMLSoftwareMedDeviceQuestions } from './9-Safety-Ethics/2-AI-ML-Software-Med-Device';
import { questions as proposedRegulationHarmonizedQuestions } from './9-Safety-Ethics/3-Proposed-Regulation-Harmonized';
import { questions as ethicallyAlignedDesignQuestions } from './9-Safety-Ethics/4-Ethically-Alinged-Design';
import { questions as securingGenAIDeploymentsQuestions } from './9-Safety-Ethics/5-Securing-Gen-AI-Deployments';
import { questions as metricsAgenticAiQuestions } from './9-Safety-Ethics/6-Metrics-Agentic-Ai';
import { questions as aiRegulatoryQuestions } from './9-Safety-Ethics/7-AI-Regulatory';
import { questions as responsibleAiQuestions } from './9-Safety-Ethics/8-Responsible-Ai';

import type { QuizQuestion } from './types';

export interface QuizSet {
  [key: string]: QuizQuestion[];
}

// Quiz questions organized by reading files
export const QUIZ_DATA: QuizSet = {
  '1-agent-architecture-design/1-agentic-AI-factory.txt': agenticAIFactoryQuestions,
  '1-agent-architecture-design/2-building-autonomous-AI.txt': buildingAutonomousAIQuestions,
  '1-agent-architecture-design/3-building-blocks-customer-service.txt': buildingBlocksCustomerServiceQuestions,
  '1-agent-architecture-design/4-agentic-AI-autonomous-AI-agents.txt': agenticAIAutonomousAIAgentsQuestions,
  '1-agent-architecture-design/5-catch-me-if-you-can.txt': catchMeIfYouCanQuestions,
  '1-agent-architecture-design/6-multi-agent-systems.txt': multiAgentSystemsQuestions,
  '1-agent-architecture-design/12-applying-logic-trees.txt': applyingLogicTreesQuestions,
  'generated-content/1-agent-architecture-design/1.1-Design-user-interfaces.txt': designUserInterfacesQuestions,
  'generated-content/1-agent-architecture-design/1.2-Implement-Reasoning-ReAct.txt': implementReasoningReActQuestions,
  'generated-content/1-agent-architecture-design/1.3-Config-Agent-agent-protocol.txt': configAgentProtocolQuestions,
  'generated-content/1-agent-architecture-design/1.4-Manage-memory.txt': manageMemoryQuestions,
  'generated-content/1-agent-architecture-design/1.5-Orchestrate-multi-agent.txt': orchestrateMultiAgentQuestions,
  'summaries/1-agent-architecture-design/7-designing-user-interfaces.txt': designingUserInterfacesSummaryQuestions,
  'summaries/1-agent-architecture-design/8-implementing-reasoning-react.txt': implementingReasoningReactSummaryQuestions,
  'summaries/1-agent-architecture-design/9-configuring-agent-communication.txt': configuringAgentCommunicationSummaryQuestions,
  'summaries/1-agent-architecture-design/11-orchestrating-multi-agent-workflows.txt': orchestratingMultiAgentWorkflowsSummaryQuestions,
  'summaries/1-agent-architecture-design/13-implementing-knowledge-graphs.txt': implementingKnowledgeGraphsQuestions,
  'summaries/1-agent-architecture-design/14-ensuring-adaptability-and-scalability.txt': ensuringAdaptabilityAndScalabilityQuestions,
  '2-agent-development/1-optimization-NVDA-Triton.txt': optimizationNVDATritonQuestions,
  '2-agent-development/2-NVDA-agent-intelligence-toolkit.txt': nvdaAgentIntelligenceToolkitQuestions,
  '2-agent-development/3-intro-LLM-p-tuning.txt': introLLMPTuningQuestions,
  '2-agent-development/4-building-multi-modal-AI-RAG.txt': buildingMultiModalAIRAGQuestions,
  '2-agent-development/5-design-considerations-Agentic.txt': designConsiderationsAgenticQuestions,
  '2-agent-development/6-transient-fault-handling.txt': transientFaultHandlingQuestions,
  '2-agent-development/7-circuit-breaker-pattern.txt': circuitBreakerPatternQuestions,
  '2-agent-development/8-retry-pattern.txt': retryPatternQuestions,
  'generated-content/2-agent-development/2.6-Evaluate-decision-strategies.txt': evaluateDecisionStrategiesQuestions,
  '3-evaluation-tuning/4-agent-intelligence-toolkit-FAQ.txt': agentIntelligenceToolkitFAQQuestions,
  '3-evaluation-tuning/5-launching-agent-intelligence-toolkit.txt': launchingAgentIntelligenceToolkitQuestions,
  '3-evaluation-tuning/6-NVDA-NEMO-agent.txt': nvdaNemoAgentQuestions,
  '3-evaluation-tuning/7-agentic-AI-next-big-thing.txt': agenticAINextBigThingQuestions,
  '3-evaluation-tuning/8-agentic-AI-challenges.txt': agenticAIChallengesQuestions,
  '3-evaluation-tuning/9-AI-agents-beginners.txt': aiAgentsBeginnersQuestions,
  '3-evaluation-tuning/10-navigating-challenges.txt': navigatingChallengesQuestions,
  '4-deployment-scaling/1-agentic-AI-factory.txt': agenticAIFactoryDeploymentQuestions,
  '4-deployment-scaling/2-TensorRTLLM-Github.txt': tensorRTLLMGithubQuestions,
  '4-deployment-scaling/3-measure-improve-AI-workload.txt': measureImproveAIWorkloadQuestions,
  '4-deployment-scaling/4-Kubernetes-glossary.txt': kubernetesGlossaryQuestions,
  '4-deployment-scaling/5-NVDA-NSight.txt': nvdaNSightQuestions,
  '4-deployment-scaling/6-Kube-Prometheus.txt': kubePrometheusQuestions,
  '4-deployment-scaling/7-scaling-LLM-Kubernetes.txt': scalingLLMKubernetesQuestions,
  '4-deployment-scaling/8-TensorRT-performance-analysis.txt': tensorRTPerformanceAnalysisQuestions,
  '5-cognition-planning-memory/1-NVDA-NeMO.txt': nvdaNemoQuestions,
  '5-cognition-planning-memory/2-LLM-context-learners.txt': llmContextLearnersQuestions,
  '5-cognition-planning-memory/3-NemO-RL-doc.txt': nemoRLDocQuestions,
  '5-cognition-planning-memory/4-Jamba-1.5.txt': jamba15Questions,
  '5-cognition-planning-memory/5-Understanding-planning-LLM.txt': understandingPlanningLLMQuestions,
  '5-cognition-planning-memory/6-AI-Agent-Memory.txt': aiAgentMemoryQuestions,
  '5-cognition-planning-memory/7-Understanding-Planning-LLM.txt': understandingPlanningLLM2Questions,
  '6-knowledge-integration-data-handling/1-RAG-more-accurate.txt': ragMoreAccurateQuestions,
  '7-NVDA-Platform-Integration/1-Best-Practices-TensorRT.txt': bestPracticesTensorRTQuestions,
  '7-NVDA-Platform-Integration/2-Batchers.txt': batchersQuestions,
  '7-NVDA-Platform-Integration/4-NeMO-Guardrails.txt': nemoGuardrailsQuestions,
  '7-NVDA-Platform-Integration/3-Triton-server-backend.txt': tritonServerBackendQuestions,
  '7-NVDA-Platform-Integration/5-performance-tuning-guide.txt': performanceTuningGuideQuestions,
  '7-NVDA-Platform-Integration/6-NeMo-best-practices.txt': nemoBestPracticesQuestions,
  '7-NVDA-Platform-Integration/7-Optimization.txt': optimizationQuestions,
  '7-NVDA-Platform-Integration/8-NEmo-Agent.txt': nemoAgentQuestions,
  '7-NVDA-Platform-Integration/9-Nemo-Agent-intelligence-toolkit.txt': nemoAgentIntelligenceToolkitQuestions,
  '7-NVDA-Platform-Integration/10-AIQ.txt': aiqQuestions,
  '7-NVDA-Platform-Integration/11-Mastering-LLMs.txt': masteringLLMsQuestions,
  '7-NVDA-Platform-Integration/12-Deploy-Inference-Workloads.txt': deployInferenceWorkloadsQuestions,
  '7-NVDA-Platform-Integration/13-Nemotron-advanced-agents.txt': nemotronAdvancedAgentsQuestions,
  '7-NVDA-Platform-Integration/14-AI-Agent-blueprint.txt': aiAgentBlueprintQuestions,
  '7-NVDA-Platform-Integration/15-Improve-AI-code-gen.txt': improveAICodeGenQuestions,
  '7-NVDA-Platform-Integration/16-Nemo-Scalable-Ai.txt': nemoScalableAiQuestions,
  '8-run-monitor-maintain/1-AI-Agent-Eval.txt': aiAgentEvalQuestions,
  '8-run-monitor-maintain/2-Log-Trace-Monitor.txt': logTraceMonitorQuestions,
  '8-run-monitor-maintain/3-Time-Weighted-Retriever.txt': timeWeightedRetrieverQuestions,
  '8-run-monitor-maintain/4-Troubleshooting.txt': troubleshootingQuestions,
  '8-run-monitor-maintain/5-Langchain-Tracing.txt': langchainTracingQuestions,
  '8-run-monitor-maintain/6-LangChain-structured-outputs.txt': langchainStructuredOutputsQuestions,
  '8-run-monitor-maintain/7-Smith-Langchain-eval.txt': smithLangchainEvalQuestions,
  '8-run-monitor-maintain/8-Monitoring-ML-production.txt': monitoringMLProductionQuestions,
  '9-Safety-Ethics/1-Building-Safer-Apps-Templates.txt': buildingSaferAppsTemplatesQuestions,
  '9-Safety-Ethics/2-AI-ML-Software-Med-Device.txt': aiMLSoftwareMedDeviceQuestions,
  '9-Safety-Ethics/3-Proposed-Regulation-Harmonized.txt': proposedRegulationHarmonizedQuestions,
  '9-Safety-Ethics/4-Ethically-Alinged-Design.txt': ethicallyAlignedDesignQuestions,
  '9-Safety-Ethics/5-Securing-Gen-AI-Deployments.txt': securingGenAIDeploymentsQuestions,
  '9-Safety-Ethics/6-Metrics-Agentic-Ai.txt': metricsAgenticAiQuestions,
  '9-Safety-Ethics/7-AI-Regulatory.txt': aiRegulatoryQuestions,
  '9-Safety-Ethics/8-Responsible-Ai.txt': responsibleAiQuestions
};
