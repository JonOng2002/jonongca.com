import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroCard } from './components/HeroCard';
import { AboutCard } from './components/AboutCard';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectMiniCard } from './components/ProjectMiniCard';
import { QuickLinks } from './components/QuickLinks';
import { VolunteeringCard } from './components/VolunteeringCard';
import { CatsCard } from './components/CatCard';
import { ProjectModal } from './components/ProjectModal';
import { TechSphere } from './components/TechSphere';
import { AiChatCard } from './components/AiChatCard';
import { BackgroundParticles } from './components/BackgroundParticles';
import { SpotifyWidget } from './components/SpotifyWidget';

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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

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

  const CARDS: Card[] = [
    // ── Row 1-3: Profile + About ─────────────────────────────────────────────
    {
      id: 'hero',
      category: 'all',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: () => <HeroCard />
    },
    {
      id: 'about',
      category: 'work',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><AboutCard /></div>
    },
    // ── Row 4-6: YTL (4col = 2/3 width) + TechSphere (2col) = 6 ──────────────
    {
      id: 'ytl',
      category: 'work',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ExperienceCard
            company="YTL PowerSeraya"
            role="DevOps Engineer Intern"
            period="Jan 2026 - Apr 2026"
            achievements={["Implemented automated testing and approval gates", "Standardised Azure App Service deployment patterns"]}
            imageUrl="/images/company-logos/ytl.jpg"
            logoUrl="/images/company-logos/ytl-logo.jpeg"
          />
        </div>
      )
    },
    {
      id: 'techsphere',
      category: 'life',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><TechSphere /></div>
    },
    // ── Row 7-12: AiChat (2col, tall=6rows) | GEM (4col, rows 7-9) then AllInOne+Menswear (2+2, rows 10-12) ─
    {
      id: 'ai-chat',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-6',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><AiChatCard /></div>
    },
    {
      id: 'gem',
      category: 'work',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ExperienceCard
            company="Global Enterprise Mobility"
            role="Cloud Engineer Intern"
            period="May 2025 - Aug 2025"
            achievements={["Reduced release time by 70% with GitHub Actions", "Eliminated webhook duplicates via DynamoDB idempotency layer"]}
            imageUrl="/images/company-logos/gem-main.png"
            logoUrl="/images/company-logos/gem.png"
          />
        </div>
      )
    },
    {
      id: 'allInOne',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="All-In-One"
            subtitle="DevOps / Team Collaboration"
            description="Owned deployment for a 6-person team project. Managed environments and releases on AWS Amplify."
            tags={['AWS Amplify', 'GitHub Actions', 'Terraform']}
            workflowUrl={projectData.allInOne.workflowUrl}
            onClick={() => rel >= 10 && setSelectedProject(projectData.allInOne)}
          />
        </div>
      )
    },
    // ── Row 11-14: Menswear (2col) + RAG (2col) next to AllInOne ─────────────
    {
      id: 'menswear',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="Menswear"
            subtitle="Microservices Web App"
            description="E-commerce microservices on AWS Fargate."
            tags={['AWS ECS/Fargate', 'DynamoDB', 'RDS']}
            workflowUrl={projectData.menswear.workflowUrl}
            onClick={() => rel >= 10 && setSelectedProject(projectData.menswear)}
          />
        </div>
      )
    },
    // ── Row 13-15: Spotify (2/3 width) + Tracker (1/3 width) ─────────────────
    {
      id: 'spotify',
      category: 'life',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><SpotifyWidget /></div>
    },
    {
      id: 'tracker',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="Internship Tracker"
            description="Python automation for Notion-powered internship sync."
            tags={['FastAPI', 'Notion', 'Python']}
            workflowUrl={projectData.tracker.workflowUrl}
            onClick={() => rel >= 10 && setSelectedProject(projectData.tracker)}
          />
        </div>
      )
    },
    // ── Row 16-18: RAG (1/3) + Volunteering (1/3) + Cats (1/3) ───────────────
    {
      id: 'rag',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="YilongMa RAG"
            description="RAG pipeline with ChromaDB & Llama for Elon transcripts."
            tags={['RAG', 'Llama', 'VectorDB']}
            workflowUrl={projectData.rag.workflowUrl}
            onClick={() => rel >= 10 && setSelectedProject(projectData.rag)}
          />
        </div>
      )
    },
    {
      id: 'volunteering',
      category: 'life',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><VolunteeringCard imageUrl="/images/life/trtl/preview.jpeg" /></div>
    },
    {
      id: 'cat',
      category: 'life',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><CatsCard /></div>
    },
  ];

  const sortedCards = useMemo(() => {
    return CARDS.map((card, index) => {
      let score = 0;
      if (card.id === 'hero') return { card, score: 10000 };

      const catMap: Record<FilterType, CardCategory> = {
        'all': 'all',
        'projects': 'project',
        'work experiences': 'work',
        'life': 'life'
      };

      if (selectedFilter === 'all') {
        score = 100 - index;
      } else {
        const targetCategory = catMap[selectedFilter];
        if (card.category === targetCategory) score += 500;
        if (selectedFilter === 'work experiences' && card.category === 'project') score += 200;
        if (selectedFilter === 'projects' && card.category === 'work') score += 100;
        score += (CARDS.length - index);
      }
      return { card, score };
    }).sort((a, b) => b.score - a.score);
  }, [selectedFilter]);

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 selection:bg-forest-accent/30 font-sans relative z-0 overflow-x-hidden">
      <BackgroundParticles />
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />

      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex bg-white/40 dark:bg-[#0d1f14]/80 backdrop-blur-md p-1.5 rounded-2xl border border-forest/10 dark:border-emerald-500/10 shadow-lg">
          {(['all', 'projects', 'work experiences', 'life'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${selectedFilter === filter
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 scale-105'
                : 'text-forest/60 dark:text-emerald-700/60 hover:text-emerald-400'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white dark:bg-[#0d1f14] border border-forest/10 dark:border-emerald-500/20 rounded-2xl text-forest dark:text-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          layout
          transition={{ duration: 0.6, type: "spring", stiffness: 180, damping: 24 }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 grid-flow-row-dense"
        >
          <AnimatePresence mode="popLayout">
            {sortedCards.map(({ card, score }) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, layout: { duration: 0.6 } }}
                className={`${card.colSpan} ${card.rowSpan}`}
              >
                {card.render(score)}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default App;