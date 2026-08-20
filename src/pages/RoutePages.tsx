import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { listDirectory } from '../lib/virtual-fs';

type LayoutProps = { children: React.ReactNode; title: string; eyebrow?: string };

const PageLayout: React.FC<LayoutProps> = ({ children, title, eyebrow = 'JONONGCA.COM' }) => (
  <main className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
    <div className="max-w-4xl mx-auto">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-forest/10 pb-5">
        <Link to="/" className="font-display font-bold text-forest hover:text-forest-accent">
          Jonathan Ong
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-2 text-sm">
          <Link className="px-3 py-2 rounded-xl hover:bg-forest/5" to="/story">Story</Link>
          <Link className="px-3 py-2 rounded-xl hover:bg-forest/5" to="/experience">Experience</Link>
          <Link className="px-3 py-2 rounded-xl hover:bg-forest/5" to="/projects">Projects</Link>
          <Link className="px-3 py-2 rounded-xl hover:bg-forest/5" to="/skills">Skills</Link>
          <Link className="px-3 py-2 rounded-xl hover:bg-forest/5" to="/contact">Contact</Link>
        </nav>
      </header>
      <div className="pt-12">
        <p className="font-mono text-xs tracking-[0.18em] text-forest/45">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-forest">{title}</h1>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  </main>
);

const PlainLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="font-semibold text-forest-accent underline underline-offset-4 hover:text-forest">
    {children}
  </Link>
);

export const StoryPage: React.FC = () => (
  <PageLayout title="A builder of reliable systems" eyebrow="THE STORY">
    <div className="space-y-8 text-lg leading-relaxed text-forest/75">
      <p className="font-serif italic text-3xl leading-tight text-forest">I became interested in reliable systems before I became interested in AI.</p>
      <section><h2 className="font-serif italic text-2xl text-forest-accent">Cloud foundations</h2><p className="mt-2">I started by learning how applications are deployed, operated, and kept dependable in the cloud.</p></section>
      <section><h2 className="font-serif italic text-2xl text-forest-accent">Delivery and DevOps</h2><p className="mt-2">I moved deeper into repeatable releases, infrastructure as code, observability, and safer delivery workflows.</p></section>
      <section><h2 className="font-serif italic text-2xl text-forest-accent">Data and AI systems</h2><p className="mt-2">Today I work across data pipelines, evaluation, and AI-enabled services while keeping ownership, testing, and documentation visible.</p></section>
      <p>Read the evidence in <PlainLink to="/experience">Experience</PlainLink> and <PlainLink to="/projects">Projects</PlainLink>.</p>
    </div>
  </PageLayout>
);

export const ExperiencePage: React.FC = () => (
  <PageLayout title="Experience" eyebrow="THE TIMELINE">
    <div className="divide-y divide-forest/10">
      {Object.entries(experiences).map(([slug, experience]) => (
        <Link key={slug} to={`/experience/${slug}`} className="block py-6 first:pt-0 hover:bg-forest/[0.025]">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl font-bold text-forest">{experience.company}</h2>
            <span className="font-mono text-xs text-forest/50">{experience.period}</span>
          </div>
          <p className="mt-1 font-semibold text-forest-accent">{experience.role}</p>
          <p className="mt-2 text-forest/65">{experience.description}</p>
          <p className="mt-3 text-sm text-forest/50">Open public-safe evidence →</p>
        </Link>
      ))}
    </div>
  </PageLayout>
);

const currentSlug = () => window.location.pathname.split('/').filter(Boolean).pop();
const projectKeyBySlug: Record<string, string> = {
  'all-in-one': 'allInOne',
  'yilongma-rag': 'rag',
  menswear: 'menswear',
  'internship-tracker': 'tracker',
};

export const ExperienceDetailPage: React.FC = () => {
  const slug = currentSlug();
  const experience = slug ? experiences[slug] : undefined;
  if (!experience) return <NotFoundPage />;
  return (
    <PageLayout title={experience.role} eyebrow={experience.company}>
      <p className="font-mono text-sm text-forest/55">{experience.period}</p>
      <p className="mt-6 text-lg leading-relaxed text-forest/75">{experience.description}</p>
      <h2 className="mt-10 font-serif italic text-2xl text-forest-accent">Evidence</h2>
      <ul className="mt-4 space-y-4 list-disc pl-5 text-forest/75">
        {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
      </ul>
      <div className="mt-8 flex flex-wrap gap-2">{experience.skills.map((skill) => <span key={skill} className="rounded-full bg-forest/5 px-3 py-1 text-sm text-forest/65">{skill}</span>)}</div>
    </PageLayout>
  );
};

export const ProjectsPage: React.FC = () => (
  <PageLayout title="Projects" eyebrow="~/PORTFOLIO/PROJECTS">
    <p className="max-w-2xl text-lg leading-relaxed text-forest/70">A curated project directory showing how I approach deployment, data, AI, and product usefulness.</p>
    <div className="mt-8 divide-y divide-forest/10">
      {listDirectory('~/portfolio/projects').map((node) => {
        const slug = node.path.split('/').pop() as string;
        const project = Object.values(projects).find((item) => item.title === node.label);
        if (!project) return null;
        return (
          <Link key={node.path} to={node.route ?? `/projects/${slug}`} className="block py-6 first:pt-0 hover:bg-forest/[0.025]">
            <h2 className="font-display text-xl font-bold text-forest">{node.label}</h2>
            {project.subtitle && <p className="mt-1 font-semibold text-forest-accent">{project.subtitle}</p>}
            <p className="mt-2 text-forest/65">{project.description}</p>
            <p className="mt-3 text-sm text-forest/50">Open case study →</p>
          </Link>
        );
      })}
    </div>
  </PageLayout>
);

export const ProjectPage: React.FC = () => {
  const slug = currentSlug();
  const projectKey = slug ? projectKeyBySlug[slug] : undefined;
  const project = projectKey ? projects[projectKey] : undefined;
  if (!project) return <NotFoundPage />;
  return (
    <PageLayout title={project.title} eyebrow={`~/PORTFOLIO/PROJECTS/${slug}`}>
      {project.subtitle && <p className="font-semibold text-forest-accent">{project.subtitle}</p>}
      <p className="mt-6 text-lg leading-relaxed text-forest/75">{project.description}</p>
      <h2 className="mt-10 font-serif italic text-2xl text-forest-accent">Technology and evidence</h2>
      <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full bg-forest/5 px-3 py-1 text-sm text-forest/65">{item}</span>)}</div>
      <div className="mt-8 flex flex-wrap gap-4"><a className="font-semibold text-forest-accent underline underline-offset-4" href={project.github} target="_blank" rel="noreferrer">View repository ↗</a></div>
    </PageLayout>
  );
};

export const SkillsPage: React.FC = () => (
  <PageLayout title="Skills" eyebrow="~/PORTFOLIO/SKILLS">
    <p className="max-w-2xl text-lg leading-relaxed text-forest/70">Evidence-backed capability packages, not percentage bars or unsupported ratings.</p>
    <div className="mt-8 space-y-4">
      {listDirectory('~/portfolio/skills').map((node) => {
        const slug = node.path.split('/').pop() as string;
        const summaries: Record<string, string> = {
          'data-engineering': 'PySpark, SQL, validation, and data pipelines',
          'ai-engineering': 'RAG, evaluation, and model-integrated services',
          'cloud-devops': 'Infrastructure, delivery automation, and reliability',
          'mlops-delivery': 'Testing, reproducibility, and release workflows',
        };
        return <Link key={node.path} to={node.route ?? `/skills/${slug}`} className="block border-b border-forest/10 py-4"><h2 className="font-display font-bold text-forest">{node.label}</h2><p className="mt-1 text-forest/65">{summaries[slug]}</p></Link>;
      })}
    </div>
  </PageLayout>
);

export const SkillPage: React.FC = () => {
  const slug = currentSlug();
  const labels: Record<string, { title: string; summary: string; evidence: string[] }> = {
    'data-engineering': { title: 'Data engineering', summary: 'Designing and validating data transformations that can be trusted.', evidence: ['IRAS · SAS-to-PySpark migration and DataFrame validation', 'YilongMa · transcript processing and retrieval evaluation'] },
    'ai-engineering': { title: 'AI engineering', summary: 'Building retrieval and AI workflows with evaluation rather than stack lists.', evidence: ['YilongMa · ChromaDB, Llama, hybrid retrieval, and evaluation notebooks', 'IRAS · public-safe adversarial testing and UAT evaluation'] },
    'cloud-devops': { title: 'Cloud and DevOps', summary: 'Making infrastructure and releases repeatable across cloud environments.', evidence: ['YTL · Azure DevOps pipelines and isolated self-hosted deployment agent', 'GEM · Terraform, Jenkins, AWS, and release automation', 'MensWear · ECS/Fargate microservices deployment'] },
    'mlops-delivery': { title: 'MLOps delivery', summary: 'Connecting testing, packaging, release workflows, and operational confidence.', evidence: ['IRAS · Dockerisation, CI/CD, UAT, and regression/performance testing', 'YTL and GEM · automated multi-stage delivery workflows'] },
  };
  const skill = slug ? labels[slug] : undefined;
  if (!skill) return <NotFoundPage />;
  return <PageLayout title={skill.title} eyebrow={`~/PORTFOLIO/SKILLS/${slug}/SKILL.MD`}><p className="text-lg leading-relaxed text-forest/75">{skill.summary}</p><h2 className="mt-10 font-serif italic text-2xl text-forest-accent">Evidence</h2><ul className="mt-4 space-y-4 list-disc pl-5 text-forest/75">{skill.evidence.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-8 text-sm text-forest/50">Current status: practised and continuing to learn.</p></PageLayout>;
};

export const ContactPage: React.FC = () => <PageLayout title="Contact" eyebrow="~/PORTFOLIO/CONTACT.JSON"><div className="space-y-4 text-lg text-forest/75"><p>For engineering roles, project conversations, or collaboration:</p><p><a className="text-forest-accent underline" href="mailto:jonongca@gmail.com">jonongca@gmail.com</a></p><p><a className="text-forest-accent underline" href="https://www.linkedin.com/in/jonongca" target="_blank" rel="noreferrer">LinkedIn ↗</a></p><p><a className="text-forest-accent underline" href="https://github.com/JonOng2002" target="_blank" rel="noreferrer">GitHub ↗</a></p><p><a className="text-forest-accent underline" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></p></div></PageLayout>;

export const NotFoundPage: React.FC = () => <PageLayout title="Not found"><p className="text-lg text-forest/70">This route is not in the portfolio yet.</p><Link className="mt-6 inline-block text-forest-accent underline" to="/">Return home</Link></PageLayout>;

export const RoutedPage: React.FC = () => {
  const path = window.location.pathname;
  if (path === '/story') return <StoryPage />;
  if (path === '/experience') return <ExperiencePage />;
  if (path.startsWith('/experience/')) return <ExperienceDetailPage />;
  if (path === '/projects') return <ProjectsPage />;
  if (path.startsWith('/projects/')) return <ProjectPage />;
  if (path === '/skills') return <SkillsPage />;
  if (path.startsWith('/skills/')) return <SkillPage />;
  if (path === '/contact') return <ContactPage />;
  return <NotFoundPage />;
};
