export interface ProjectData {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  github: string;
  architectureUrl?: string;
  workflowUrl: string;
}

export const projects: Record<string, ProjectData> = {
  allInOne: {
    title: "All-In-One",
    subtitle: "Team Collaboration Tool",
    description:
      "Owned application deployment for a 6-person team project on AWS Amplify. Built GitHub Actions workflows for CI/CD and developed Terraform configurations for infrastructure provisioning.",
    tech: ["AWS Amplify", "GitHub Actions", "Terraform"],
    github: "https://github.com/spm-group5/spm-group5",
    architectureUrl: "/images/projects/all-in-one/architecture.png",
    workflowUrl: "/images/projects/all-in-one/preview.jpg",
  },
  rag: {
    title: "YilongMa RAG Chatbot",
    description: "RAG pipeline built with ChromaDB & Llama for transcripts.",
    tech: ["RAG", "Llama", "VectorDB"],
    github: "https://github.com/hjmook/yilongma",
    architectureUrl: "/images/projects/rag/telegram-interface.jpg",
    workflowUrl: "/images/projects/rag/preview.png",
  },
  menswear: {
    title: "Menswear",
    subtitle: "Microservices Web Application",
    description:
      "Led end-to-end deployment of an e-commerce platform on AWS (ECS/Fargate, ALB). Designed a multi-database backend: DynamoDB (sessions), DocumentDB (catalog), and RDS (transactions).",
    tech: ["AWS ECS/Fargate", "DynamoDB", "DocumentDB", "RDS"],
    github: "https://github.com/JonOng2002/microservices-ecommerce",
    architectureUrl: "/images/projects/menswear/architecture.png",
    workflowUrl: "/images/projects/menswear/preview.jpg",
  },
  tracker: {
    title: "Internship Notion Tracker",
    subtitle: "Automation Tool",
    description:
      "Built a Python + Notion API workflow to auto-populate application data, eliminating 100% of manual entry via webhook automation on AWS (Lambda, Route 53, S3).",
    tech: ["Python", "AWS Lambda", "Notion API"],
    github: "https://github.com/JonOng2002/internship-notion-tracker",
    workflowUrl: "/images/projects/tracker/preview.png",
  },
};
