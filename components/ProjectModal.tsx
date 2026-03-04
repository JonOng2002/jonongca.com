import React, { useState } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
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
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-[color:var(--primary-soft)] text-[color:var(--primary)] text-xs font-mono rounded-lg border border-[color:var(--primary)]/20">{t}</span>
                ))}
              </div>

              <div className="prose prose-sm dark:prose-invert">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Overview</h4>
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                  {(project.longDescription || project.description).split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-8">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-[color:var(--primary)] dark:hover:bg-[color:var(--primary)] dark:hover:text-white active:scale-95 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
                      View Source on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Architecture Diagram</h4>
                <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                  {project.architectureUrl ? (
                    <img
                      src={project.architectureUrl}
                      alt="Architecture"
                      className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setFullscreenImage(project.architectureUrl!)}
                    />
                  ) : (
                    <div className="text-center p-6 flex flex-col items-center">
                      <svg className="w-12 h-12 text-gray-300 dark:text-gray-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <p className="text-[10px] text-gray-400 uppercase font-mono leading-relaxed max-w-[200px]">
                        Architecture diagram coming soon. Repo contains Terraform and service definitions.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Workflow Visualization</h4>
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                  {project.workflowUrl ? (
                    <img
                      src={project.workflowUrl}
                      alt="Workflow"
                      className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setFullscreenImage(project.workflowUrl!)}
                    />
                  ) : (
                    <div className="text-center p-6">
                      <svg className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Workflow definitions included in CI/CD pipeline</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setFullscreenImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen Preview"
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};
