'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './ContentViewer.module.css';
import Quiz from './Quiz';

interface ContentViewerProps {
  filePath?: string;
  onFileSelect?: (path: string | undefined) => void;
}

interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}

interface ProgressStats {
  total: number;
  read: number;
  percentage: number;
  byCategory: Array<{
    name: string;
    total: number;
    read: number;
    percentage: number;
  }>;
}

interface FormattedContent {
  title: string;
  sections: Array<{ type: 'heading' | 'paragraph'; content: string; level?: number }>;
}

// Key terms to automatically bold - only the most important concepts
const KEY_TERMS = [
  // Core foundational concepts
  'Enterprise AI Factory', 'Agentic AI', 'autonomous agents',
  
  // Critical infrastructure components
  'Kubernetes', 'RAG', 'retrieval-augmented generation', 'vector databases',
  'GitOps', 'observability', 'defense-in-depth',
  
  // Key NVIDIA technologies
  'NIM', 'NeMo', 'NVIDIA NeMo', 'NVIDIA AI Blueprints', 'NeMo Guardrails',
  'Triton Inference Server', 'TensorRT', 'Agent Intelligence Toolkit', 'AIQ',
  
  // Important operational concepts
  'Agent Ops', 'microservices', 'artifact repository',
  
  // Critical metrics
  'Time To First Token', 'faithfulness metrics',
  
  // Security essentials
  'RBAC', 'IAM',
  
  // Memory concepts
  'short-term memory', 'long-term memory',
  
  // Planning concepts
  'task decomposition', 'Chain of Thought',
  
  // Agent development concepts
  'dynamic batching', 'model instances', 'LoRA', 'P-tuning', 'prompt tuning',
  'Circuit Breaker', 'Retry pattern', 'transient faults', 'exponential back-off',
  'idempotency', 'LangChain', 'LlamaIndex', 'CrewAI',
];

// Quiz data organized by reading/section
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSet {
  [key: string]: QuizQuestion[];
}

// Import quiz questions from separate files
import { questions as agenticAIFactoryQuestions } from '@/app/data/quizzes/1-agent-architecture-design/1-agentic-AI-factory';
import { questions as buildingAutonomousAIQuestions } from '@/app/data/quizzes/1-agent-architecture-design/2-building-autonomous-AI';
import { questions as buildingBlocksCustomerServiceQuestions } from '@/app/data/quizzes/1-agent-architecture-design/3-building-blocks-customer-service';
import { questions as agenticAIAutonomousAIAgentsQuestions } from '@/app/data/quizzes/1-agent-architecture-design/4-agentic-AI-autonomous-AI-agents';
import { questions as catchMeIfYouCanQuestions } from '@/app/data/quizzes/1-agent-architecture-design/5-catch-me-if-you-can';
import { questions as multiAgentSystemsQuestions } from '@/app/data/quizzes/1-agent-architecture-design/6-multi-agent-systems';
import { questions as designUserInterfacesQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.1-Design-user-interfaces';
import { questions as implementReasoningReActQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.2-Implement-Reasoning-ReAct';
import { questions as configAgentProtocolQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.3-Config-Agent-agent-protocol';
import { questions as manageMemoryQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.4-Manage-memory';
import { questions as orchestrateMultiAgentQuestions } from '@/app/data/quizzes/generated-content/1-agent-architecture-design/1.5-Orchestrate-multi-agent';
import { questions as applyingLogicTreesQuestions } from '@/app/data/quizzes/1-agent-architecture-design/12-applying-logic-trees';
import { questions as designingUserInterfacesSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/7-designing-user-interfaces';
import { questions as implementingReasoningReactSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/8-implementing-reasoning-react';
import { questions as configuringAgentCommunicationSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/9-configuring-agent-communication';
import { questions as orchestratingMultiAgentWorkflowsSummaryQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/11-orchestrating-multi-agent-workflows';
import { questions as implementingKnowledgeGraphsQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/13-implementing-knowledge-graphs';
import { questions as ensuringAdaptabilityAndScalabilityQuestions } from '@/app/data/quizzes/summaries/1-agent-architecture-design/14-ensuring-adaptability-and-scalability';
import { questions as optimizationNVDATritonQuestions } from '@/app/data/quizzes/2-agent-development/1-optimization-NVDA-Triton';
import { questions as nvdaAgentIntelligenceToolkitQuestions } from '@/app/data/quizzes/2-agent-development/2-NVDA-agent-intelligence-toolkit';
import { questions as introLLMPTuningQuestions } from '@/app/data/quizzes/2-agent-development/3-intro-LLM-p-tuning';
import { questions as buildingMultiModalAIRAGQuestions } from '@/app/data/quizzes/2-agent-development/4-building-multi-modal-AI-RAG';
import { questions as designConsiderationsAgenticQuestions } from '@/app/data/quizzes/2-agent-development/5-design-considerations-Agentic';
import { questions as transientFaultHandlingQuestions } from '@/app/data/quizzes/2-agent-development/6-transient-fault-handling';
import { questions as circuitBreakerPatternQuestions } from '@/app/data/quizzes/2-agent-development/7-circuit-breaker-pattern';
import { questions as retryPatternQuestions } from '@/app/data/quizzes/2-agent-development/8-retry-pattern';
import { questions as evaluateDecisionStrategiesQuestions } from '@/app/data/quizzes/generated-content/2-agent-development/2.6-Evaluate-decision-strategies';
import { questions as agentIntelligenceToolkitFAQQuestions } from '@/app/data/quizzes/3-evaluation-tuning/4-agent-intelligence-toolkit-FAQ';
import { questions as launchingAgentIntelligenceToolkitQuestions } from '@/app/data/quizzes/3-evaluation-tuning/5-launching-agent-intelligence-toolkit';
import { questions as nvdaNemoAgentQuestions } from '@/app/data/quizzes/3-evaluation-tuning/6-NVDA-NEMO-agent';
import { questions as agenticAINextBigThingQuestions } from '@/app/data/quizzes/3-evaluation-tuning/7-agentic-AI-next-big-thing';
import { questions as agenticAIChallengesQuestions } from '@/app/data/quizzes/3-evaluation-tuning/8-agentic-AI-challenges';
import { questions as aiAgentsBeginnersQuestions } from '@/app/data/quizzes/3-evaluation-tuning/9-AI-agents-beginners';
import { questions as navigatingChallengesQuestions } from '@/app/data/quizzes/3-evaluation-tuning/10-navigating-challenges';
import { questions as agenticAIFactoryDeploymentQuestions } from '@/app/data/quizzes/4-deployment-scaling/1-agentic-AI-factory';
import { questions as tensorRTLLMGithubQuestions } from '@/app/data/quizzes/4-deployment-scaling/2-TensorRTLLM-Github';
import { questions as measureImproveAIWorkloadQuestions } from '@/app/data/quizzes/4-deployment-scaling/3-measure-improve-AI-workload';
import { questions as kubernetesGlossaryQuestions } from '@/app/data/quizzes/4-deployment-scaling/4-Kubernetes-glossary';
import { questions as nvdaNSightQuestions } from '@/app/data/quizzes/4-deployment-scaling/5-NVDA-NSight';
import { questions as kubePrometheusQuestions } from '@/app/data/quizzes/4-deployment-scaling/6-Kube-Prometheus';
import { questions as scalingLLMKubernetesQuestions } from '@/app/data/quizzes/4-deployment-scaling/7-scaling-LLM-Kubernetes';
import { questions as tensorRTPerformanceAnalysisQuestions } from '@/app/data/quizzes/4-deployment-scaling/8-TensorRT-performance-analysis';
import { questions as nvdaNemoQuestions } from '@/app/data/quizzes/5-cognition-planning-memory/1-NVDA-NeMO';
import { questions as llmContextLearnersQuestions } from '@/app/data/quizzes/5-cognition-planning-memory/2-LLM-context-learners';
import { questions as nemoRLDocQuestions } from '@/app/data/quizzes/5-cognition-planning-memory/3-NemO-RL-doc';
import { questions as jamba15Questions } from '@/app/data/quizzes/5-cognition-planning-memory/4-Jamba-1.5';
import { questions as understandingPlanningLLMQuestions } from '@/app/data/quizzes/5-cognition-planning-memory/5-Understanding-planning-LLM';
import { questions as aiAgentMemoryQuestions } from '@/app/data/quizzes/5-cognition-planning-memory/6-AI-Agent-Memory';
import { questions as understandingPlanningLLM2Questions } from '@/app/data/quizzes/5-cognition-planning-memory/7-Understanding-Planning-LLM';
import { questions as ragMoreAccurateQuestions } from '@/app/data/quizzes/6-knowledge-integration-data-handling/1-RAG-more-accurate';
import { questions as bestPracticesTensorRTQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/1-Best-Practices-TensorRT';
import { questions as batchersQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/2-Batchers';
import { questions as nemoGuardrailsQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/4-NeMO-Guardrails';
import { questions as tritonServerBackendQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/3-Triton-server-backend';
import { questions as performanceTuningGuideQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/5-performance-tuning-guide';
import { questions as nemoBestPracticesQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/6-NeMo-best-practices';
import { questions as optimizationQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/7-Optimization';
import { questions as nemoAgentQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/8-NEmo-Agent';
import { questions as nemoAgentIntelligenceToolkitQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/9-Nemo-Agent-intelligence-toolkit';
import { questions as aiqQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/10-AIQ';
import { questions as masteringLLMsQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/11-Mastering-LLMs';
import { questions as deployInferenceWorkloadsQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/12-Deploy-Inference-Workloads';
import { questions as nemotronAdvancedAgentsQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/13-Nemotron-advanced-agents';
import { questions as aiAgentBlueprintQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/14-AI-Agent-blueprint';
import { questions as improveAICodeGenQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/15-Improve-AI-code-gen';
import { questions as nemoScalableAiQuestions } from '@/app/data/quizzes/7-NVDA-Platform-Integration/16-Nemo-Scalable-Ai';
import { questions as aiAgentEvalQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/1-AI-Agent-Eval';
import { questions as logTraceMonitorQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/2-Log-Trace-Monitor';
import { questions as timeWeightedRetrieverQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/3-Time-Weighted-Retriever';
import { questions as troubleshootingQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/4-Troubleshooting';
import { questions as langchainTracingQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/5-Langchain-Tracing';
import { questions as langchainStructuredOutputsQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/6-LangChain-structured-outputs';
import { questions as smithLangchainEvalQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/7-Smith-Langchain-eval';
import { questions as monitoringMLProductionQuestions } from '@/app/data/quizzes/8-run-monitor-maintain/8-Monitoring-ML-production';

// Quiz questions organized by reading files
const QUIZ_DATA: QuizSet = {
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
  '8-run-monitor-maintain/8-Monitoring-ML-production.txt': monitoringMLProductionQuestions
};

function boldKeyTerms(text: string): string {
  let result = text;
  
  // Sort by length (longest first) to avoid partial matches
  const sortedTerms = [...KEY_TERMS].sort((a, b) => b.length - a.length);
  
  for (const term of sortedTerms) {
    // Create regex that matches whole words, case-insensitive
    const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
    
    // Check if already wrapped in strong tags
    const alreadyBolded = new RegExp(`<strong>${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</strong>`, 'gi');
    
    if (!alreadyBolded.test(result)) {
      result = result.replace(regex, '<strong>$1</strong>');
    }
  }
  
  return result;
}

function formatContent(content: string): FormattedContent {
  const lines = content.split('\n').map(line => line.trim());
  
  if (lines.length === 0 || lines.every(line => line.length === 0)) {
    return { title: '', sections: [] };
  }

  // First line is typically the title
  const title = lines[0];
  const sections: Array<{ type: 'heading' | 'paragraph'; content: string; level?: number }> = [];
  let skipRemaining = false;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines
    if (line.length === 0) {
      continue;
    }
    
    // Check if this is the REVIEW QUESTIONS section - skip it and everything after
    if (line.toUpperCase().includes('REVIEW QUESTIONS')) {
      skipRemaining = true;
      break;
    }
    
    // If we've hit REVIEW QUESTIONS, skip everything
    if (skipRemaining) {
      continue;
    }
    
    // Check if line is a heading (all caps, or ends with colon, or short line with specific patterns)
    const isAllCaps = line === line.toUpperCase() && line.length < 100 && /^[A-Z\s:]+$/.test(line);
    const endsWithColon = line.endsWith(':') && line.length < 80 && !line.includes('.');
    const isShortHeading = line.length < 60 && !line.includes('.') && !line.match(/^[a-z]/);
    
    if (isAllCaps || endsWithColon || isShortHeading) {
      // Determine heading level
      let level = 1;
      if (isAllCaps) level = 1;
      else if (endsWithColon) level = 2;
      else level = 3;
      
      sections.push({
        type: 'heading',
        content: line.replace(/:$/, ''),
        level
      });
    } else {
      // Treat each non-empty line as a separate paragraph
      // This works well for files where each line is a complete paragraph
      sections.push({
        type: 'paragraph',
        content: boldKeyTerms(line)
      });
    }
  }

  return { title, sections };
}

export default function ContentViewer({ filePath, onFileSelect }: ContentViewerProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRead, setIsRead] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState<ProgressStats | null>(null);
  const [structure, setStructure] = useState<SummaryItem[]>([]);
  const [navigation, setNavigation] = useState<{ prev: string | null; next: string | null }>({ prev: null, next: null });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [readStatusUpdate, setReadStatusUpdate] = useState(0);

  // Format display name helper (moved up for use in getCategoryFiles)
  const formatDisplayName = useCallback((name: string): string => {
    let display = name.replace(/\.txt$/, '');
    display = display.replace(/^\d+-/, '');
    const words = display.split('-');
    const formatted = words.map(word => {
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'nvidia') return 'NVIDIA';
      if (word.toLowerCase() === 'nemo') return 'NeMo';
      if (word.toLowerCase() === 'nim') return 'NIM';
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formatted.join(' ');
  }, []);

  // Get files for a specific category
  const getCategoryFiles = useCallback((categoryName: string, items: SummaryItem[]): Array<{ path: string; name: string; isRead: boolean }> => {
    const files: Array<{ path: string; name: string; isRead: boolean }> = [];
    
    const findCategory = (items: SummaryItem[], targetCategory: string): SummaryItem[] | null => {
      for (const item of items) {
        if (item.type === 'folder') {
          const categoryName = item.name.replace(/^\d+-/, '').replace(/-/g, ' ');
          const formattedName = categoryName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          if (formattedName === targetCategory && item.children) {
            return item.children;
          }
          if (item.children) {
            const found = findCategory(item.children, targetCategory);
            if (found) return found;
          }
        }
      }
      return null;
    };

    const categoryItems = findCategory(items, categoryName);
    if (categoryItems) {
      categoryItems.forEach((item) => {
        if (item.type === 'file') {
          const isRead = typeof window !== 'undefined' && localStorage.getItem(`read:${item.path}`) === 'true';
          files.push({
            path: item.path,
            name: formatDisplayName(item.name),
            isRead,
          });
        }
      });
    }
    
    return files.sort((a, b) => {
      // Put review.txt first
      if (a.path.toLowerCase().includes('review.txt')) return -1;
      if (b.path.toLowerCase().includes('review.txt')) return 1;
      return a.path.localeCompare(b.path);
    });
  }, [formatDisplayName, readStatusUpdate]);

  // Calculate progress stats
  const calculateProgress = useCallback((structure: SummaryItem[]): ProgressStats => {
    if (typeof window === 'undefined') {
      return { total: 0, read: 0, percentage: 0, byCategory: [] };
    }

    let totalFiles = 0;
    let readFiles = 0;
    const categoryStats: Map<string, { total: number; read: number }> = new Map();

    const countFiles = (items: SummaryItem[], categoryName?: string) => {
      items.forEach((item) => {
        if (item.type === 'file') {
          totalFiles++;
          const isRead = localStorage.getItem(`read:${item.path}`) === 'true';
          if (isRead) readFiles++;

          if (categoryName) {
            const stats = categoryStats.get(categoryName) || { total: 0, read: 0 };
            stats.total++;
            if (isRead) stats.read++;
            categoryStats.set(categoryName, stats);
          }
        } else if (item.type === 'folder' && item.children) {
          const categoryName = item.name.replace(/^\d+-/, '').replace(/-/g, ' ');
          countFiles(item.children, categoryName);
        }
      });
    };

    countFiles(structure);

    const byCategory = Array.from(categoryStats.entries()).map(([name, stats]) => ({
      name: name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      total: stats.total,
      read: stats.read,
      percentage: stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0,
    }));

    return {
      total: totalFiles,
      read: readFiles,
      percentage: totalFiles > 0 ? Math.round((readFiles / totalFiles) * 100) : 0,
      byCategory: byCategory.sort((a, b) => a.name.localeCompare(b.name)),
    };
  }, []);

  // Load structure for navigation
  useEffect(() => {
    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data: SummaryItem[]) => {
        setStructure(data);
        // Mark as ready after structure loads
        setTimeout(() => {
          setIsReady(true);
          setIsInitialLoad(false);
        }, 100);
      })
      .catch((err) => {
        console.error('Failed to load structure:', err);
        setIsReady(true);
        setIsInitialLoad(false);
      });
  }, []);

  // Find previous and next files
  const findNavigation = useCallback((items: SummaryItem[], currentPath: string): { prev: string | null; next: string | null } => {
    const allFiles: string[] = [];
    
    const collectFiles = (items: SummaryItem[]) => {
      items.forEach((item) => {
        if (item.type === 'file') {
          allFiles.push(item.path);
        } else if (item.type === 'folder' && item.children) {
          collectFiles(item.children);
        }
      });
    };
    
    collectFiles(items);
    
    // Sort files to match sidebar order (folders first, then files, review.txt at top)
    allFiles.sort((a, b) => {
      const aParts = a.split('/');
      const bParts = b.split('/');
      const aName = aParts[aParts.length - 1];
      const bName = bParts[bParts.length - 1];
      
      // Put review.txt first
      if (aName.toLowerCase() === 'review.txt') return -1;
      if (bName.toLowerCase() === 'review.txt') return 1;
      
      return a.localeCompare(b);
    });
    
    const currentIndex = allFiles.findIndex(path => path === currentPath);
    if (currentIndex === -1) {
      return { prev: null, next: null };
    }
    
    return {
      prev: currentIndex > 0 ? allFiles[currentIndex - 1] : null,
      next: currentIndex < allFiles.length - 1 ? allFiles[currentIndex + 1] : null,
    };
  }, []);

  // Update navigation when filePath changes
  useEffect(() => {
    if (filePath && structure.length > 0) {
      const nav = findNavigation(structure, filePath);
      setNavigation(nav);
    } else {
      setNavigation({ prev: null, next: null });
    }
  }, [filePath, structure, findNavigation]);

  // Load and update progress stats
  const updateProgress = useCallback(() => {
    if (filePath) return; // Only show progress when no file is selected

    fetch('/api/summaries')
      .then((res) => res.json())
      .then((data: SummaryItem[]) => {
        setProgress(calculateProgress(data));
      })
      .catch((err) => {
        console.error('Failed to load progress:', err);
      });
  }, [filePath, calculateProgress]);

  // Load progress on initial mount (only when no file selected and ready)
  useEffect(() => {
    if (!filePath && isReady) {
      updateProgress();
    }
  }, [filePath, isReady, updateProgress]);

  // Load progress stats on mount
  useEffect(() => {
    updateProgress();
  }, [updateProgress]);

  // Update progress when read status changes
  useEffect(() => {
    if (filePath || !isReady) return;

    const handleUpdate = () => {
      updateProgress();
      setReadStatusUpdate(prev => prev + 1);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('readStatusChanged', handleUpdate);
      window.addEventListener('storage', handleUpdate);
      return () => {
        window.removeEventListener('readStatusChanged', handleUpdate);
        window.removeEventListener('storage', handleUpdate);
      };
    }
  }, [filePath, isReady, updateProgress]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!expandedCategory) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.progressCategory}`)) {
        setExpandedCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCategory]);

  // Load read status from localStorage
  useEffect(() => {
    if (!filePath) {
      setIsRead(false);
      return;
    }
    
    const readStatus = localStorage.getItem(`read:${filePath}`);
    setIsRead(readStatus === 'true');
  }, [filePath]);

  // Handle checkbox change
  const handleReadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!filePath) return;
    
    const checked = e.target.checked;
    setIsRead(checked);
    localStorage.setItem(`read:${filePath}`, checked.toString());
    
    // Dispatch custom event to notify Sidebar
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('readStatusChanged'));
    }
    
    // Show celebration animation when marked as read
    if (checked) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
      }, 2000);
    }
  };

  useEffect(() => {
    // Mark initial load as complete after first render
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }

    if (!filePath) {
      setContent('');
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    fetch(`/api/summaries/${encodeURIComponent(filePath)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load file');
        }
        return res.json();
      })
      .then((data) => {
        setContent(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load file:', err);
        setError('Failed to load file content');
        setLoading(false);
      });
  }, [filePath, isInitialLoad]);

  if (!filePath && isReady) {
    return (
      <main className={styles.viewer}>
        <div className={styles.empty}>
          <div className={styles.emptyContent}>
            <div className={styles.emptyIcon}>📚</div>
            <h1 className={styles.emptyTitle}>NVIDIA Agentic AI Study Guide</h1>
            <p className={styles.emptyDescription}>
              Welcome to your comprehensive study guide for NVIDIA Agentic AI certification. 
              Explore articles, summaries, and key concepts organized by topic.
            </p>

            {progress && progress.total > 0 && (
              <div className={styles.progressSection}>
                <div className={styles.progressHeader}>
                  <h2 className={styles.progressTitle}>Your Progress</h2>
                  <div className={styles.progressOverall}>
                    <div className={styles.progressMain}>
                      <div className={styles.progressNumberLarge}>{progress.percentage}%</div>
                      <div className={styles.progressText}>
                        <span className={styles.progressRead}>{progress.read}</span>
                        <span className={styles.progressOf}> of </span>
                        <span className={styles.progressTotal}>{progress.total}</span>
                        <span className={styles.progressLabel}> articles completed</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressBarFill}
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {progress.byCategory.length > 0 && (
                  <div className={styles.progressCategories}>
                    <h3 className={styles.progressCategoriesTitle}>By Category</h3>
                    <div className={styles.progressCategoriesList}>
                      {progress.byCategory.map((category) => {
                        const isExpanded = expandedCategory === category.name;
                        const categoryFiles = isExpanded ? getCategoryFiles(category.name, structure) : [];
                        
                        return (
                          <div key={category.name} className={styles.progressCategory}>
                            <div className={styles.progressCategoryHeader}>
                              <div className={styles.progressCategoryInfo}>
                                <span className={styles.progressCategoryName}>{category.name}</span>
                                <span className={styles.progressCategoryPercent}>
                                  {category.read}/{category.total}
                                </span>
                              </div>
                              <button
                                className={styles.progressCategoryToggle}
                                onClick={() => setExpandedCategory(isExpanded ? null : category.name)}
                                aria-label={isExpanded ? 'Collapse' : 'Expand'}
                              >
                                {isExpanded ? '▼' : '▶'}
                              </button>
                            </div>
                            <div className={styles.progressCategoryBar}>
                              <div 
                                className={styles.progressCategoryBarFill}
                                style={{ width: `${category.percentage}%` }}
                              />
                            </div>
                            {isExpanded && categoryFiles.length > 0 && (
                              <div className={styles.progressCategoryDropdown}>
                                {categoryFiles.map((file) => (
                                  <button
                                    key={file.path}
                                    className={`${styles.progressCategoryFile} ${file.isRead ? styles.progressCategoryFileRead : ''}`}
                                    onClick={() => onFileSelect?.(file.path)}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={file.isRead}
                                      readOnly
                                      className={styles.progressCategoryCheckbox}
                                    />
                                    <span className={styles.progressCategoryFileName}>{file.name}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className={styles.emptyFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📖</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Structured Learning</h3>
                  <p className={styles.featureText}>Articles organized by topic with clear navigation</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎯</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Key Concepts</h3>
                  <p className={styles.featureText}>Important terms automatically highlighted for quick reference</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Progress Tracking</h3>
                  <p className={styles.featureText}>Mark articles as read to track your learning progress</p>
                </div>
              </div>
            </div>
            <div className={styles.emptyCta}>
              <p className={styles.emptyCtaText}>Select an article from the sidebar to begin</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show loading state during initial load or when loading content
  if (!isReady || (loading && filePath)) {
    return (
      <main className={styles.viewer}>
        <div className={styles.loading}>Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.viewer}>
        <div className={styles.error}>{error}</div>
      </main>
    );
  }

  const { title, sections } = formatContent(content);
  const fileName = filePath ? filePath.split('/').pop()?.replace('.txt', '') || '' : '';
  const isReview = fileName.toLowerCase() === 'review';
  
  // Function to find quiz data by matching file paths flexibly
  const findQuizData = (path: string | undefined): QuizQuestion[] | null => {
    if (!path) return null;
    
    // Try exact match first
    if (QUIZ_DATA[path]) {
      console.log('Quiz found: exact match for', path);
      return QUIZ_DATA[path];
    }
    
    // Try matching without directory prefix (e.g., "1-agent-architecture-design/file.txt")
    const pathWithoutPrefix = path.replace(/^(summaries|readings|generated-content)\//, '');
    if (QUIZ_DATA[pathWithoutPrefix]) {
      console.log('Quiz found: match without prefix for', path, '->', pathWithoutPrefix);
      return QUIZ_DATA[pathWithoutPrefix];
    }
    
    // Try with different directory prefixes
    const possiblePaths = [
      `summaries/${pathWithoutPrefix}`,
      `readings/${pathWithoutPrefix}`,
      `generated-content/${pathWithoutPrefix}`,
      pathWithoutPrefix
    ];
    
    for (const possiblePath of possiblePaths) {
      if (QUIZ_DATA[possiblePath]) {
        console.log('Quiz found: match with prefix for', path, '->', possiblePath);
        return QUIZ_DATA[possiblePath];
      }
    }
    
    // Try fuzzy matching by normalizing file names
    // Extract the base filename and normalize it
    const baseFileName = path.split('/').pop()?.replace('.txt', '').toLowerCase() || '';
    const normalizedBase = baseFileName
      .replace(/^\d+[-.]/, '') // Remove leading numbers with dash or dot
      .replace(/[-_]/g, '-') // Normalize separators
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .trim();
    
    // Get directory path without prefix
    const pathDir = path.substring(0, path.lastIndexOf('/'));
    const pathDirWithoutPrefix = pathDir.replace(/^(summaries|readings|generated-content)\//, '');
    
    // Extract key words from filename (remove common words like "design", "implement", etc.)
    const extractKeywords = (name: string): string[] => {
      const words = name.split('-').filter(w => w.length > 2);
      // Remove common prefixes/suffixes
      return words.filter(w => 
        !['design', 'implement', 'config', 'manage', 'orchestrate', 'apply', 'ensure', 'user', 'interfaces', 
          'overview', 'tutorials', 'faq', 'launching', 'intro', 'introductory'].includes(w.toLowerCase())
      );
    };
    
    const baseKeywords = extractKeywords(normalizedBase);
    
    // Search through all QUIZ_DATA keys for a match
    for (const [key, questions] of Object.entries(QUIZ_DATA)) {
      const keyFileName = key.split('/').pop()?.replace('.txt', '').toLowerCase() || '';
      const normalizedKey = keyFileName
        .replace(/^\d+[-.]/, '') // Remove leading numbers
        .replace(/[-_]/g, '-') // Normalize separators
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .trim();
      
      // Get key directory without prefix
      const keyDir = key.substring(0, key.lastIndexOf('/'));
      const keyDirWithoutPrefix = keyDir.replace(/^(summaries|readings|generated-content)\//, '');
      
      // Check directory match first (must be in same category)
      const dirsMatch = keyDirWithoutPrefix === pathDirWithoutPrefix || 
          keyDirWithoutPrefix.includes(pathDirWithoutPrefix) ||
          pathDirWithoutPrefix.includes(keyDirWithoutPrefix);
      
      if (!dirsMatch) continue;
      
      // Try multiple matching strategies
      const exactMatch = normalizedBase === normalizedKey;
      const substringMatch = normalizedBase.includes(normalizedKey) || normalizedKey.includes(normalizedBase);
      
      // Keyword-based matching
      const keyKeywords = extractKeywords(normalizedKey);
      const keywordOverlap = baseKeywords.length > 0 && keyKeywords.length > 0 &&
        baseKeywords.some(kw => keyKeywords.some(kk => kw.includes(kk) || kk.includes(kw)));
      
      // Check if significant portion of words match
      const baseWords = normalizedBase.split('-').filter(w => w.length > 2);
      const keyWords = normalizedKey.split('-').filter(w => w.length > 2);
      const wordOverlap = baseWords.length > 0 && keyWords.length > 0 &&
        baseWords.filter(bw => keyWords.some(kw => bw === kw || bw.includes(kw) || kw.includes(bw))).length >= 
        Math.min(2, Math.min(baseWords.length, keyWords.length));
      
      // Special handling for agent intelligence toolkit files - match based on core keywords
      // Files like "agent-intelligence-toolkit-overview" should match "agent-intelligence-toolkit-FAQ"
      // if they're in the same directory category
      const coreAgentTerms = ['agent', 'intelligence', 'toolkit'];
      const baseHasCoreTerms = coreAgentTerms.every(term => normalizedBase.includes(term));
      const keyHasCoreTerms = coreAgentTerms.every(term => normalizedKey.includes(term));
      
      // If both files contain the core agent intelligence toolkit terms, they're related
      // This allows overview/tutorials files to match FAQ/launching quiz data in the same category
      const agentIntelligenceMatch = baseHasCoreTerms && keyHasCoreTerms;
      
      if (exactMatch || substringMatch || keywordOverlap || wordOverlap || agentIntelligenceMatch) {
        console.log('Quiz found: fuzzy match for', path, '->', key, 
          '(normalized:', normalizedBase, 'vs', normalizedKey, 
          ', keywords:', baseKeywords, 'vs', keyKeywords, ')');
        return questions;
      }
    }
    
    console.log('No quiz found for', path, '- checked', Object.keys(QUIZ_DATA).length, 'quiz entries');
    return null;
  };
  
  // Check if this file has a quiz
  const quizQuestions = findQuizData(filePath);
  const hasQuiz = quizQuestions !== null;

  // Build breadcrumbs
  const breadcrumbs = filePath ? filePath.split('/').map((part, index, array) => {
    const path = array.slice(0, index + 1).join('/');
    const isLast = index === array.length - 1;
    const displayName = formatDisplayName(part);
    return { name: displayName, path, isLast };
  }) : [];

  return (
    <main className={styles.viewer}>
      {showCelebration && (
        <div className={styles.celebration}>
          <div className={styles.celebrationContent}>
            <span className={styles.celebrationIcon}>🎉</span>
            <span className={styles.celebrationText}>Great job! Article marked as read</span>
          </div>
        </div>
      )}
      <div className={`${styles.header} ${isReview ? styles.reviewHeader : ''}`}>
        {breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <button
              className={styles.breadcrumbLink}
              onClick={() => onFileSelect?.(undefined as any)}
            >
              Home
            </button>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.path} className={styles.breadcrumbItem}>
                <span className={styles.breadcrumbSeparator}>›</span>
                {crumb.isLast ? (
                  <span className={styles.breadcrumbCurrent}>{crumb.name}</span>
                ) : (
                  <span className={styles.breadcrumbText}>{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className={styles.headerTop}>
          <h1 className={styles.title}>{title || fileName}</h1>
          <label className={styles.readCheckbox}>
            <input
              type="checkbox"
              checked={isRead}
              onChange={handleReadChange}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxLabel}>Mark as read</span>
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <article className={styles.article}>
          {sections.map((section, index) => {
            if (section.type === 'heading') {
              const HeadingTag = section.level === 1 ? 'h2' : section.level === 2 ? 'h3' : 'h4';
              const headingClass = section.level === 1 
                ? styles.heading1 
                : section.level === 2 
                ? styles.heading2 
                : styles.heading3;
              return (
                <div key={index}>
                  <HeadingTag className={headingClass}>
                    {section.content}
                  </HeadingTag>
                </div>
              );
            } else {
              return (
                <p 
                  key={index} 
                  className={styles.paragraph}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            }
          })}
          
          {/* Quiz - appears after all content if available */}
          {hasQuiz && quizQuestions && (
            <div className={styles.quizSection}>
              <Quiz questions={quizQuestions} articleTitle={title || fileName} />
            </div>
          )}
        </article>
      </div>
    </main>
  );
}



