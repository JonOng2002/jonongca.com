import React, { useState } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle?: string;
    description: string;
    tech: string[];
    github?: string;
    longDescription?: string;
    architectureUrl?: string;
    workflowUrl?: string;
  } | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  if (!isOpen || !project) return null;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={onClose} />

        <div className="relative bg-white dark:bg-obsidian-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-forest/10 dark:border-accent-500/20 flex flex-col animate-in fade-in zoom-in duration-300">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="relative h-48 md:h-56 rounded-t-3xl overflow-hidden shrink-0 bg-gradient-to-br from-forest to-emerald-900">
            {project.workflowUrl && (
              <img src={project.workflowUrl} alt={project.title} className="w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-black text-white font-display drop-shadow-md">{project.title}</h2>
              {project.subtitle && (
                <div className="text-emerald-300 font-bold uppercase tracking-wider text-sm mt-1 drop-shadow-md">{project.subtitle}</div>
              )}
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1.5 bg-forest/5 dark:bg-accent-500/10 text-forest dark:text-accent-400 text-xs font-bold rounded-lg border border-forest/10 dark:border-accent-500/20">{t}</span>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Overview</h3>
              <p className="text-forest/80 dark:text-accent-100/70 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {(project.architectureUrl || project.workflowUrl) && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Diagrams</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architectureUrl && (
                    <div className="aspect-video rounded-2xl overflow-hidden border border-forest/10 dark:border-accent-500/20 cursor-pointer hover:opacity-90 transition-opacity bg-forest/5 dark:bg-accent-900/10">
                      <img
                        src={project.architectureUrl}
                        alt="Architecture"
                        className="w-full h-full object-contain"
                        onClick={() => setFullscreenImage(project.architectureUrl!)}
                      />
                    </div>
                  )}
                  {project.workflowUrl && (
                    <div className="aspect-video rounded-2xl overflow-hidden border border-forest/10 dark:border-accent-500/20 cursor-pointer hover:opacity-90 transition-opacity bg-forest/5 dark:bg-accent-900/10">
                      <img
                        src={project.workflowUrl}
                        alt="Workflow"
                        className="w-full h-full object-contain"
                        onClick={() => setFullscreenImage(project.workflowUrl!)}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-forest dark:bg-accent-600 hover:bg-forest-accent dark:hover:bg-accent-500 text-white font-bold text-sm transition-all shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  View Source on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200" onClick={() => setFullscreenImage(null)}>
          <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" onClick={() => setFullscreenImage(null)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={fullscreenImage} alt="Fullscreen Preview" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
};
