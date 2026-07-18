import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);
import { AboutSection } from './components/AboutModal';
import { ExperienceModal, ExperienceDetails } from './components/ExperienceModal';
import { ProjectMiniCard } from './components/ProjectMiniCard';
import { ProjectModal } from './components/ProjectModal';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { BlogModal } from './components/BlogModal';
import { IdentityCard } from './components/IdentityCard';
import { PhotoCard } from './components/PhotoCard';
import { NowCard } from './components/NowCard';
import { TechSphere } from './components/TechSphere';
import { CurrentlyIntoCard } from './components/CurrentlyIntoCard';
import { SayHiCard } from './components/SayHiCard';
import { LifeWidgetCard } from './components/LifeWidgetCard';
import { lifeWidgets } from './src/data/lifeWidgets';
import { projects } from './src/data/projects';
import { experiences } from './src/data/experience';
import { AIWorkflowCard } from './components/AIWorkflowCard';
import { AIWorkflowPage } from './components/AIWorkflowPage';

type Page = 'home' | 'projects' | 'ai' | 'experience' | 'life' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedDetailProject, setSelectedDetailProject] = useState<any>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetails | null>(null);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const initialLg = [
    { i: 'identity', x: 0, y: 0, w: 4, h: 3 },
    { i: 'photo', x: 4, y: 0, w: 2, h: 3 },
    { i: 'now', x: 0, y: 3, w: 3, h: 3 },
    { i: 'project1', x: 3, y: 3, w: 3, h: 3 },
    { i: 'project2', x: 0, y: 6, w: 3, h: 3 },
    { i: 'project3', x: 3, y: 6, w: 3, h: 3 },
    { i: 'currentlyInto', x: 0, y: 9, w: 3, h: 3 },
    { i: 'learning', x: 3, y: 9, w: 3, h: 3 },
    { i: 'sayhi', x: 0, y: 12, w: 6, h: 3 },
  ];

  const initialMd = [
    { i: 'identity', x: 0, y: 0, w: 4, h: 3 },
    { i: 'photo', x: 0, y: 3, w: 2, h: 3 },
    { i: 'now', x: 2, y: 3, w: 2, h: 3 },
    { i: 'project1', x: 0, y: 6, w: 4, h: 3 },
    { i: 'project2', x: 0, y: 9, w: 2, h: 3 },
    { i: 'project3', x: 2, y: 9, w: 2, h: 3 },
    { i: 'currentlyInto', x: 0, y: 12, w: 2, h: 3 },
    { i: 'learning', x: 2, y: 12, w: 2, h: 3 },
    { i: 'sayhi', x: 0, y: 15, w: 4, h: 3 },
  ];

  const initialSm = [
    { i: 'identity', x: 0, y: 0, w: 1, h: 3 },
    { i: 'photo', x: 0, y: 3, w: 1, h: 3 },
    { i: 'now', x: 0, y: 6, w: 1, h: 3 },
    { i: 'project1', x: 0, y: 9, w: 1, h: 3 },
    { i: 'project2', x: 0, y: 12, w: 1, h: 3 },
    { i: 'project3', x: 0, y: 15, w: 1, h: 3 },
    { i: 'currentlyInto', x: 0, y: 18, w: 1, h: 3 },
    { i: 'learning', x: 0, y: 21, w: 1, h: 3 },
    { i: 'sayhi', x: 0, y: 24, w: 1, h: 3 },
  ];

  const [layout, setLayout] = useState<any>({ lg: initialLg, md: initialMd, sm: initialSm });
  const [isInitializing, setIsInitializing] = useState(true);
  const draggingRef = useRef(false);
  const [justDragged, setJustDragged] = useState(false);

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

  const constraintsRef = useRef(null);

  const makeProjectCard = (key: string, data: typeof projects.allInOne) => [{
    key,
    component: (
      <ProjectMiniCard
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        tags={data.tech}
        workflowUrl={data.workflowUrl}
        onClick={() => handleCardClick(() => setSelectedDetailProject(data))}
      />
    ),
  }];

  const gridCards = [
    { key: 'identity', component: <IdentityCard onViewProjects={() => setCurrentPage('projects')} /> },
    { key: 'photo', component: <PhotoCard /> },
    { key: 'now', component: <NowCard /> },
    ...makeProjectCard('project1', projects.allInOne),
    ...makeProjectCard('project2', projects.menswear),
    ...makeProjectCard('project3', projects.tracker),
    { key: 'currentlyInto', component: <TechSphere /> },
    { key: 'learning', component: <CurrentlyIntoCard /> },
    { key: 'sayhi', component: <SayHiCard /> },
  ];

  const projectsSection = (
    <div className="max-w-6xl mx-auto mt-8 relative z-10">
      <h2 className="font-serif italic text-2xl text-forest-accent mb-5 px-2">Featured projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectMiniCard
          title="All-In-One"
          subtitle="AWS Amplify · CI/CD"
          description="Owned deployment for a 6-person team. GitHub Actions, Terraform, shipped on AWS Amplify."
          tags={['AWS Amplify', 'GitHub Actions', 'Terraform']}
          workflowUrl={projects.allInOne.workflowUrl}
          onClick={() => handleCardClick(() => setSelectedDetailProject(projects.allInOne))}
        />
        <ProjectMiniCard
          title="Menswear"
          subtitle="AWS Fargate · Microservices"
          description="E-commerce on ECS/Fargate. DynamoDB, DocumentDB, RDS multi-database architecture."
          tags={['AWS ECS/Fargate', 'DynamoDB', 'RDS']}
          workflowUrl={projects.menswear.workflowUrl}
          onClick={() => handleCardClick(() => setSelectedDetailProject(projects.menswear))}
        />
        <ProjectMiniCard
          title="Internship Tracker"
          subtitle="Python · Notion API"
          description="FastAPI automation on AWS Lambda. Synced 50+ records, eliminated manual entry."
          tags={['FastAPI', 'Notion', 'Python', 'AWS Lambda']}
          workflowUrl={projects.tracker.workflowUrl}
          onClick={() => handleCardClick(() => setSelectedDetailProject(projects.tracker))}
        />
      </div>
    </div>
  );

  const experienceKeys = Object.keys(experiences) as (keyof typeof experiences)[];

  const experienceSection = (
    <div className="max-w-6xl mx-auto mt-8 relative z-10">
      <h2 className="font-serif italic text-2xl text-forest-accent mb-5 px-2">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceKeys.map((key) => {
          const exp = experiences[key];
          return (
            <button
              key={key}
              onClick={() => setSelectedExperience(exp)}
              className="glass rounded-[20px] p-6 md:p-8 text-left w-full transition-all duration-200 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-hover)] cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <img
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-forest text-lg font-display">{exp.company}</h3>
                  <p className="text-sm text-forest-accent font-semibold mt-0.5">{exp.role}</p>
                  <p className="text-xs text-forest/40 font-medium mt-0.5">{exp.period}</p>
                  <p className="text-sm text-forest/60 mt-2 line-clamp-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const lifeSection = (
    <div className="max-w-6xl mx-auto mt-8 relative z-10">
      <h2 className="font-serif italic text-2xl text-forest-accent mb-5 px-2">Life</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lifeWidgets.map(w => (
          <LifeWidgetCard key={w.id} widget={w} />
        ))}
      </div>
    </div>
  );

  const navPages: { key: Page; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'projects', label: 'Projects' },
    { key: 'ai', label: 'AI Agents Workflow' },
    { key: 'experience', label: 'Experience' },
    { key: 'life', label: 'Life' },
    { key: 'about', label: 'About' },
  ];

  return (
    <div className={`min-h-screen p-4 md:p-8 lg:px-12 lg:py-8 selection:bg-forest-accent/20 font-sans relative z-0 overflow-x-hidden ${isInitializing ? 'layout-initializing' : ''}`}>
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      <ExperienceModal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)} experience={selectedExperience} />
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />

      <div className="max-w-6xl mx-auto mb-8 relative z-10">
        <div className="glass rounded-3xl px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-lg font-bold text-forest font-display tracking-tight hover:text-forest-accent transition-colors"
          >
            Jonathan Ong
          </button>
          <div className="flex items-center gap-1 sm:gap-2">
            {navPages.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  currentPage === key
                    ? 'bg-forest text-white shadow-sm'
                    : 'text-forest/50 hover:text-forest hover:bg-forest/5'
                }`}
              >
                {label}
              </button>
            ))}
            <span className="w-px h-5 bg-forest/10 mx-1" />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume (opens in new tab)"
              className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-forest/50 hover:text-forest hover:bg-forest/5 transition-all inline-flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </a>
          </div>
        </div>
      </div>

      {selectedDetailProject ? (
        <ProjectDetailPage
          project={selectedDetailProject}
          onBack={() => setSelectedDetailProject(null)}
        />
      ) : (
        <>
          {currentPage === 'home' && (
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
                  {gridCards.map(({ key, component }) => (
                    <div key={key} className="drag-handle h-full">
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="h-full w-full"
                      >
                        {component}
                      </motion.div>
                    </div>
                  ))}
                </ResponsiveGridLayout>
              </div>

              {/* AI Workflow highlight card */}
              <div className="max-w-6xl mx-auto mt-8 relative z-10">
                <AIWorkflowCard onClick={() => setCurrentPage('ai')} />
              </div>

              <div className="max-w-6xl mx-auto mt-8 relative z-10">
                <h2 className="font-serif italic text-2xl text-forest-accent mb-5 px-2">Outside the terminal</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {lifeWidgets.map(w => (
                    <LifeWidgetCard key={w.id} widget={w} />
                  ))}
                </div>
              </div>
            </>
          )}

          {currentPage === 'projects' && projectsSection}

          {currentPage === 'ai' && <AIWorkflowPage />}

          {currentPage === 'experience' && experienceSection}

          {currentPage === 'life' && lifeSection}

          {currentPage === 'about' && <AboutSection />}
        </>
      )}

      <footer className="max-w-6xl mx-auto mt-12 pb-8 text-center relative z-10">
        <p className="text-forest/25 text-xs font-mono">&copy; Jonathan Ong 2026</p>
      </footer>
    </div>
  );
};

export default App;
