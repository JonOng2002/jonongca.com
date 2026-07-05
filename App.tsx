import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);
import { AboutSection } from './components/AboutModal';
import { ExperienceModal, ExperienceDetails } from './components/ExperienceModal';
import { ProjectMiniCard } from './components/ProjectMiniCard';
import { ProjectModal } from './components/ProjectModal';
import { BlogModal } from './components/BlogModal';
import { IdentityCard } from './components/IdentityCard';
import { PhotoCard } from './components/PhotoCard';
import { NowCard } from './components/NowCard';
import { TechSphere } from './components/TechSphere';
import { CurrentlyIntoCard } from './components/CurrentlyIntoCard';
import { SayHiCard } from './components/SayHiCard';
import { LifeWidgetCard } from './components/LifeWidgetCard';
import { lifeWidgets } from './src/data/lifeWidgets';

type CardCategory = 'project' | 'work' | 'life' | 'all';
type FilterType = 'all' | 'projects' | 'work experiences' | 'life';

interface Card {
  id: string;
  category: CardCategory;
  colSpan: string;
  rowSpan: string;
  render: (relevance: number) => React.ReactNode;
}

const App: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetails | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const initialLg = [
    { i: 'identity', x: 0, y: 0, w: 4, h: 5 },
    { i: 'photo', x: 4, y: 0, w: 2, h: 5 },
    { i: 'currentlyInto', x: 0, y: 5, w: 3, h: 4 },
    { i: 'now', x: 3, y: 5, w: 3, h: 4 },
    { i: 'learning', x: 0, y: 9, w: 3, h: 3 },
    { i: 'sayhi', x: 3, y: 9, w: 3, h: 3 },
  ];

  const [layout, setLayout] = useState<any>({ lg: initialLg });
  const [isInitializing, setIsInitializing] = useState(true);
  const draggingRef = useRef(false);
  const [justDragged, setJustDragged] = useState(false);

  function recalculateLayout(filter: FilterType) {
    if (filter === 'all') return initialLg;
    const catMap: Record<string, CardCategory> = { 'projects': 'project', 'work experiences': 'work', 'life': 'life' };
    const target = catMap[filter];
    if (!target) return initialLg;

    const match = initialLg.filter(item => CARDS.find(c => c.id === item.i)?.category === target);
    const nonMatch = initialLg.filter(item => CARDS.find(c => c.id === item.i)?.category !== target);

    let y = 0;
    const placed = match.map(item => { const h = item.h || 3; const pos = { ...item, x: item.x, y }; y += h; return pos; });
    let y2 = y + 1;
    const rest = nonMatch.map(item => { const h = item.h || 3; const pos = { ...item, x: item.x, y: y2 }; y2 += h; return pos; });

    return [...placed, ...rest];
  }

  useEffect(() => {
    if (isInitializing) return;
    const newLg = recalculateLayout(selectedFilter);
    setLayout({ lg: newLg });
  }, [selectedFilter]);

  useEffect(() => {
    setTimeout(() => setIsInitializing(false), 500);
  }, []);

  const onLayoutChange = (currentLayout: any, allLayouts: any) => {
    setLayout(allLayouts);
  };

  const onDragStart = () => {
    draggingRef.current = true;
    setJustDragged(true);
  };

  const onDragStop = () => {
    // Small timeout to allow the browser's click event to fire (and be ignored)
    setTimeout(() => {
      draggingRef.current = false;
      setJustDragged(false);
    }, 100);
  };

  const handleCardClick = (action: () => void) => {
    if (!draggingRef.current && !justDragged) {
      action();
    }
  };

  const projectData = {
    allInOne: {
      title: "All-In-One",
      subtitle: "Team Collaboration Tool",
      description: "Owned application deployment for a 6-person team project on AWS Amplify. Built GitHub Actions workflows for CI/CD and developed Terraform configurations for infrastructure provisioning.",
      tech: ['AWS Amplify', 'GitHub Actions', 'Terraform'],
      github: "https://github.com/spm-group5/spm-group5",
      architectureUrl: "/images/projects/all-in-one/architecture.png",
      workflowUrl: "/images/projects/all-in-one/preview.jpg"
    },
    rag: {
      title: "YilongMa RAG Chatbot",
      description: "RAG pipeline built with ChromaDB & Llama for transcripts.",
      tech: ['RAG', 'Llama', 'VectorDB'],
      github: "https://github.com/hjmook/yilongma",
      architectureUrl: "/images/projects/rag/telegram-interface.jpg",
      workflowUrl: "/images/projects/rag/preview.png"
    },
    menswear: {
      title: "Menswear",
      subtitle: "Microservices Web Application",
      description: "Led end-to-end deployment of an e-commerce platform on AWS (ECS/Fargate, ALB). Designed a multi-database backend: DynamoDB (sessions), DocumentDB (catalog), and RDS (transactions).",
      tech: ['AWS ECS/Fargate', 'DynamoDB', 'DocumentDB', 'RDS'],
      github: "https://github.com/JonOng2002/microservices-ecommerce",
      architectureUrl: "/images/projects/menswear/architecture.png",
      workflowUrl: "/images/projects/menswear/preview.jpg"
    },
    tracker: {
      title: "Internship Notion Tracker",
      subtitle: "Automation Tool",
      description: "Built a Python + Notion API workflow to auto-populate application data, eliminating 100% of manual entry via webhook automation on AWS (Lambda, Route 53, S3).",
      tech: ['Python', 'AWS Lambda', 'Notion API'],
      github: "https://github.com/JonOng2002/internship-notion-tracker",
      architectureUrl: "/images/projects/tracker/architecture.jpg",
      workflowUrl: "/images/projects/tracker/preview.png"
    }
  };

  const experienceData = {
    ytl: {
      company: "YTL PowerSeraya",
      role: "DevOps Engineer Intern",
      period: "Jan 2026 - Apr 2026",
      description: "During my time at YTL PowerSeraya, I worked closely with the infrastructure team to modernize deployment pipelines and establish robust CI/CD practices using Azure. Taking ownership of deployment procedures, I spearheaded initiatives to align our processes with modern DevOps standards.",
      skills: ["Azure App Service", "CI/CD", "Azure DevOps", "VM", "YAML", "Power BI"],
      achievements: [
        "Engineered CI/CD pipelines for PAAS & IAAS applications",
        "Standardised Azure App Service deployment patterns",
        "Proposed and implemented dedicated VM for Self-Hosted Agent to run pipelines",
        "PIC for Power BI KPI dashboard: Visualised cross-platform performance metrics/scorecards for department ops insights (ongoing)"
      ],
      logoUrl: "/images/company-logos/ytl-logo.jpeg",
      companyBgUrl: "/images/company-logos/ytl.jpg",
      galleryUrls: ["/images/company-logos/ytl.jpg", "/images/company-logos/ytl-logo.jpeg"]
    },
    gem: {
      company: "Global Enterprise Mobility",
      role: "Cloud Engineer Intern",
      period: "May 2025 - Aug 2025",
      description: "Designed and automated AWS infrastructure with Terraform IaC across dev/staging/prod environments, optimized CI/CD pipelines, and resolved production bugs—reducing manual overhead and deployment times across engineering teams.",
      skills: ["Amazon Web Services", "Terraform", "Jenkins", "Google Cloud Platform"],
      achievements: [
        "Built Terraform IaC for VPC/EC2/RDS/S3, improving environment parity and repeatability",
        "Automated CI/CD for 2 apps via GitHub Actions, cutting release time 70% (2h → 30min)",
        "Eliminated 100% webhook duplicates with DynamoDB idempotency layer (fixed bug impacting 12-15% transactions)",
        "Implemented CloudWatch monitoring/alerting, reducing incident response by 50%"
      ],
      logoUrl: "/images/company-logos/gem.png",
      companyBgUrl: "/images/company-logos/gem-main.png",
      galleryUrls: ["/images/company-logos/gem-main.png", "/images/company-logos/gem.png"]
    }
  };

  const CARDS: Card[] = [
    {
      id: 'identity',
      category: 'all',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-5',
      render: () => <IdentityCard />
    },
    {
      id: 'photo',
      category: 'all',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-5',
      render: () => <PhotoCard />
    },
    {
      id: 'currentlyInto',
      category: 'life',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-4',
      render: () => <TechSphere />
    },
    {
      id: 'now',
      category: 'work',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-4',
      render: () => <NowCard />
    },
    {
      id: 'learning',
      category: 'life',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-3',
      render: () => <CurrentlyIntoCard />
    },
    {
      id: 'sayhi',
      category: 'life',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-3',
      render: () => <SayHiCard />
    },
  ];

  const sortedCards = useMemo(() => {
    return CARDS.map((card) => {
      let score = 0;
      const catMap: Record<FilterType, CardCategory | 'none'> = {
        'all': 'all',
        'projects': 'project',
        'work experiences': 'work',
        'life': 'life',
      };

      if (selectedFilter === 'all') {
        score = 1000;
      } else {
        const targetCategory = catMap[selectedFilter];
        if (card.category === targetCategory) {
          score = 5000;
        } else {
          score = 5;
        }
      }
      return { card, score };
    });
  }, [selectedFilter]);

  const constraintsRef = useRef(null);

  return (
    <div className={`min-h-screen p-4 md:p-8 lg:px-12 lg:py-8 selection:bg-forest-accent/20 font-sans relative z-0 overflow-x-hidden ${isInitializing ? 'layout-initializing' : ''}`}>
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      <ExperienceModal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)} experience={selectedExperience} />
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />

      <div className="max-w-6xl mx-auto mb-8 relative z-10">
        <div className="glass rounded-3xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-bold text-forest font-display tracking-tight">Jonathan Ong</a>
          <div className="flex items-center gap-1 sm:gap-2">
            {(['all', 'projects', 'work experiences', 'life'] as FilterType[]).map((filter, i) => (
              <button
                key={filter}
                onClick={() => { setSelectedFilter(filter); setIsAboutOpen(false); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  !isAboutOpen && selectedFilter === filter
                    ? 'bg-forest text-white shadow-sm'
                    : 'text-forest/50 hover:text-forest hover:bg-forest/5'
                }`}
              >
                {filter === 'all' ? 'Home' : filter === 'work experiences' ? 'Experience' : filter}
              </button>
            ))}
            <span className="w-px h-5 bg-forest/10 mx-1" />
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                isAboutOpen
                  ? 'bg-forest text-white shadow-sm'
                  : 'text-forest/50 hover:text-forest hover:bg-forest/5'
              }`}
            >
              About
            </button>
            <a href="/resume.pdf" target="_blank" className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-forest/50 hover:text-forest hover:bg-forest/5 transition-all inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </a>
          </div>
        </div>
      </div>

      {isAboutOpen ? (
        <AboutSection />
      ) : (
        <>
          <div ref={constraintsRef} className="max-w-6xl mx-auto relative z-10">
            <ResponsiveGridLayout
              className="layout"
              layouts={layout}
              breakpoints={{ lg: 1024, md: 768, sm: 640 }}
              cols={{ lg: 6, md: 4, sm: 1 }}
              rowHeight={100}
              draggableHandle=".drag-handle"
              onLayoutChange={onLayoutChange}
              onDragStart={onDragStart}
              onDragStop={onDragStop}
              margin={[16, 16]}
              isResizable={false}
              draggableCancel=".no-drag"
            >
              {sortedCards.map(({ card, score }) => (
                <div key={card.id} className="drag-handle h-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full w-full"
                  >
                    {card.render(score)}
                  </motion.div>
                </div>
              ))}
            </ResponsiveGridLayout>
          </div>

          <div className="max-w-6xl mx-auto mt-8 relative z-10">
            <p className="font-serif italic text-2xl text-forest-accent mb-5 px-2">Featured projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ProjectMiniCard
                title="All-In-One"
                subtitle="AWS Amplify · CI/CD"
                description="Owned deployment for a 6-person team. GitHub Actions, Terraform, shipped on AWS Amplify."
                tags={['AWS Amplify', 'GitHub Actions', 'Terraform']}
                workflowUrl={projectData.allInOne.workflowUrl}
                onClick={() => handleCardClick(() => setSelectedProject(projectData.allInOne))}
              />
              <ProjectMiniCard
                title="Menswear"
                subtitle="AWS Fargate · Microservices"
                description="E-commerce on ECS/Fargate. DynamoDB, DocumentDB, RDS multi-database architecture."
                tags={['AWS ECS/Fargate', 'DynamoDB', 'RDS']}
                workflowUrl={projectData.menswear.workflowUrl}
                onClick={() => handleCardClick(() => setSelectedProject(projectData.menswear))}
              />
              <ProjectMiniCard
                title="Internship Tracker"
                subtitle="Python · Notion API"
                description="FastAPI automation on AWS Lambda. Synced 50+ records, eliminated manual entry."
                tags={['FastAPI', 'Notion', 'Python', 'AWS Lambda']}
                workflowUrl={projectData.tracker.workflowUrl}
                onClick={() => handleCardClick(() => setSelectedProject(projectData.tracker))}
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 relative z-10">
            <h3 className="font-serif italic text-2xl text-forest-accent mb-5 px-2">Outside the terminal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lifeWidgets.map(w => (
                <LifeWidgetCard key={w.id} widget={w} />
              ))}
            </div>
          </div>
        </>
      )}

      <footer className="max-w-6xl mx-auto mt-12 pb-8 text-center relative z-10">
        <p className="text-forest/25 text-xs font-mono">&copy; Jonathan Ong 2026</p>
      </footer>
    </div>
  );
};

export default App;