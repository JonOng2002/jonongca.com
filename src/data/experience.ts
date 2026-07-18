export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
  logoUrl: string;
  companyBgUrl: string;
  galleryUrls: string[];
}

export const experiences: Record<string, ExperienceData> = {
  iras: {
    company: "Inland Revenue Authority of Singapore",
    role: "AI & Data Engineering Intern",
    period: "Current",
    description:
      "Working across AI engineering, data pipelines, and MLOps, including SAS-to-PySpark migration, vector-search ingestion with LanceDB, internal search integration, AI API development, and regression and performance testing for Kedro and FastAPI-based ML workflows.",
    skills: ["PySpark", "Apache Spark", "LanceDB", "Kedro", "FastAPI", "Zeppelin"],
    achievements: [
      "Supported migration and validation of large-scale SAS ETL workflows to PySpark, using systematic data-quality checks and Spark debugging to verify transformation correctness.",
      "Refactored ingestion and retrieval pipelines for AI applications, including loading transformed data into LanceDB and integrating data sources with an internal search platform.",
      "Implemented regression and performance testing for Kedro pipelines and FastAPI-served ML workflows to improve reliability across model and pipeline changes.",
    ],
    logoUrl: "/images/company-logos/iras.png",
    companyBgUrl: "/images/company-logos/iras.png",
    galleryUrls: ["/images/company-logos/iras.png"],
  },
  ytl: {
    company: "YTL PowerSeraya",
    role: "DevOps Engineer Intern",
    period: "Jan 2026 - Apr 2026",
    description:
      "During my time at YTL PowerSeraya, I worked closely with the infrastructure team to modernize deployment pipelines and establish robust CI/CD practices using Azure. Taking ownership of deployment procedures, I spearheaded initiatives to align our processes with modern DevOps standards.",
    skills: ["Azure App Service", "CI/CD", "Azure DevOps", "VM", "YAML", "Power BI"],
    achievements: [
      "Engineered CI/CD pipelines for PAAS & IAAS applications",
      "Standardised Azure App Service deployment patterns",
      "Proposed and implemented dedicated VM for Self-Hosted Agent to run pipelines",
      "PIC for Power BI KPI dashboard: Visualised cross-platform performance metrics/scorecards for department ops insights (ongoing)",
    ],
    logoUrl: "/images/company-logos/ytl-logo.jpeg",
    companyBgUrl: "/images/company-logos/ytl.jpg",
    galleryUrls: ["/images/company-logos/ytl.jpg", "/images/company-logos/ytl-logo.jpeg"],
  },
  gem: {
    company: "Global Enterprise Mobility",
    role: "Cloud Engineer Intern",
    period: "May 2025 - Aug 2025",
    description:
      "Designed and automated AWS infrastructure with Terraform IaC across dev/staging/prod environments, optimized CI/CD pipelines, and resolved production bugs—reducing manual overhead and deployment times across engineering teams.",
    skills: ["Amazon Web Services", "Terraform", "Jenkins", "Google Cloud Platform"],
    achievements: [
      "Built Terraform IaC for VPC/EC2/RDS/S3, improving environment parity and repeatability",
      "Automated CI/CD for 2 apps via GitHub Actions, cutting release time 70% (2h → 30min)",
      "Eliminated 100% webhook duplicates with DynamoDB idempotency layer (fixed bug impacting 12-15% transactions)",
      "Implemented CloudWatch monitoring/alerting, reducing incident response by 50%",
    ],
    logoUrl: "/images/company-logos/gem.png",
    companyBgUrl: "/images/company-logos/gem-main.png",
    galleryUrls: ["/images/company-logos/gem-main.png", "/images/company-logos/gem.png"],
  },
};
