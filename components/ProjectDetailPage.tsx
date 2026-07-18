import React from 'react';
import type { ProjectData } from '../src/data/projects';

interface ProjectDetailPageProps {
  project: ProjectData;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto relative z-10">
      {/* Back navigation */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-forest/50 hover:text-forest transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      {/* Title section */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-forest font-display tracking-tight">
          {project.title}
        </h2>
        {project.subtitle && (
          <p className="text-base md:text-lg text-forest-accent font-semibold mt-2">
            {project.subtitle}
          </p>
        )}
      </div>

      {/* Preview image */}
      {project.workflowUrl && (
        <div className="glass rounded-[20px] overflow-hidden mb-8">
          <img
            src={project.workflowUrl}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Description */}
      <div className="mb-8">
        <h3 className="font-bold text-forest text-xl font-display mb-3">Overview</h3>
        <p className="text-forest/70 text-base leading-relaxed">{project.description}</p>
      </div>

      {/* Architecture diagram */}
      {project.architectureUrl && (
        <div className="mb-8">
          <h3 className="font-bold text-forest text-xl font-display mb-3">Architecture</h3>
          <div className="glass rounded-[20px] overflow-hidden">
            <img
              src={project.architectureUrl}
              alt={`${project.title} architecture diagram`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Tech stack */}
      <div className="mb-8">
        <h3 className="font-bold text-forest text-xl font-display mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider border bg-forest/5 border-forest/10 text-forest/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub link */}
      <div className="mb-8">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub (opens in new tab)"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 border border-forest/20 text-forest hover:bg-forest/5 hover:border-forest/40"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
};
