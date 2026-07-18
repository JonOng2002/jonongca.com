export interface AIWorkflowStep {
  agent: string;
  role: string;
  model: string;
  description: string;
  shortLabel: string;
}

export interface AIWorkflowModel {
  name: string;
  role: string;
  rationale: string;
}

export interface AIWorkflowData {
  title: string;
  hook: string;
  summary: string;
  steps: AIWorkflowStep[];
  models: AIWorkflowModel[];
  principles: string[];
  evolutionNote: string;
  safetyNotes: string[];
  githubUrl: string;
  heroScreenshot: string;
  workflowScreenshot: string;
  promptExample: string;
  outputExample: string;
  reviewScreenshot: string;
  architectureDiagram: string;
}

export const aiWorkflow: AIWorkflowData = {
  title: "AI-Assisted Development Workflow",
  hook: "A specialised multi-agent development workflow where AI models handle research, planning, implementation, and verification — and a human makes every final decision.",
  summary:
    "A multi-agent OpenCode workflow for repository-aware software development with human review at every phase.",
  steps: [
    {
      agent: "Input",
      role: "References & Requirements",
      model: "—",
      description:
        "Reference screenshots, design research, or written requirements feed into the workflow as the starting context.",
      shortLabel: "Provides starting context",
    },
    {
      agent: "Vision",
      role: "Visual & Multimodal Analysis",
      model: "Qwen 3.6 Plus",
      description:
        "Analyses screenshots, references, and visual design context to produce a structured visual research document.",
      shortLabel: "Analyses screenshots",
    },
    {
      agent: "Planning",
      role: "Repository-Aware Planning",
      model: "GLM-5.2",
      description:
        "Inspects the actual repository structure, reads relevant files, and produces a phased implementation plan grounded in the real codebase.",
      shortLabel: "Reads the codebase",
    },
    {
      agent: "Build",
      role: "Phased Implementation",
      model: "DeepSeek Flash High",
      description:
        "Implements the plan phase by phase, modifying only the files specified in the plan and preserving existing functionality.",
      shortLabel: "Implements plan",
    },
    {
      agent: "QA",
      role: "Verification & Debugging",
      model: "DeepSeek Flash High (read-only)",
      description:
        "Reviews the implementation against acceptance criteria, runs validation commands, and reports issues without modifying code directly.",
      shortLabel: "Verifies output",
    },
    {
      agent: "Human Review",
      role: "Final Decision-Maker",
      model: "Jonathan",
      description:
        "Reviews every change, approves or rejects, and decides what ships. The workflow is human-in-the-loop, not autonomous.",
      shortLabel: "Decides what ships",
    },
  ],
  models: [
    {
      name: "Qwen 3.6 Plus",
      role: "Vision agent",
      rationale:
        "Strong image understanding — translates screenshots into structured written research.",
    },
    {
      name: "GLM-5.2",
      role: "Planning agent",
      rationale:
        "Repository-aware planning — reads actual codebases and produces grounded implementation plans.",
    },
    {
      name: "DeepSeek Flash High",
      role: "Build agent",
      rationale:
        "Fast, capable code generation that follows the plan's scope and file map precisely.",
    },
    {
      name: "DeepSeek Flash High",
      role: "QA agent (read-only)",
      rationale:
        "Reused in a read-only QA role — separates verification from implementation to reduce bias.",
    },
  ],
  principles: [
    "Each agent has a single responsibility and a defined handoff.",
    "Agent instructions are scoped to their task, not generic.",
    "Vision, planning, implementation, and verification each use a model suited to that task.",
    "The build agent does not verify its own work — verification is a separate read-only phase.",
    "Plans are grounded in the actual codebase, not assumptions.",
    "A human reviews and approves every change before it ships.",
  ],
  evolutionNote:
    "Model selection may evolve; the durable capability is designing the workflow and validation process, not the specific models.",
  safetyNotes: [
    "No API keys, tokens, or credentials are published in any portfolio artifact.",
    "No private paths, confidential work information, or proprietary prompts are exposed.",
    "Agent permissions are scoped — the QA agent operates read-only; the build agent only modifies files in the approved plan.",
    "The GitHub repository (when published) will contain only public-safe agent configuration files.",
  ],
  githubUrl: "",
  heroScreenshot: "",
  workflowScreenshot: "/images/ai-agents/agents-workflow.png",
  promptExample: "",
  outputExample: "",
  reviewScreenshot: "",
  architectureDiagram: "",
};
