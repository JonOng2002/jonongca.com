import React from 'react';

interface ProjectMiniProps {
  title: string;
  subtitle?: string;
  description: string;
  workflowUrl?: string;
  tags: string[];
  onClick?: () => void;
  showProjectTag?: boolean;
  badgeText?: string;
}

export const ProjectMiniCard: React.FC<ProjectMiniProps> = ({
  title,
  subtitle,
  description,
  workflowUrl,
  tags,
  onClick,
  showProjectTag = true,
  badgeText = "Project"
}) => {
  const neutralBadge = "inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border transition-all bg-forest/5 dark:bg-[#0c1a10]/30 border-forest/10 dark:border-emerald-500/10 text-forest/50 dark:text-emerald-100/40";

  // If there is no image, fallback to the old text-centric layout
  if (!workflowUrl) {
    return (
      <div
        className="glass rounded-3xl p-8 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden cursor-pointer bg-gradient-to-br from-white to-beige/30 dark:from-slate-900 dark:to-emerald-950/20"
        onClick={onClick}
      >
        {showProjectTag && (
          <div className="absolute top-0 right-4 z-20">
            <div className="bg-forest dark:bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-b-md tracking-[0.2em] uppercase shadow-sm font-display">
              {badgeText}
            </div>
          </div>
        )}

        <div className="mb-4 pr-8">
          <h4 className="font-bold text-forest dark:text-white text-md group-hover:text-forest-accent dark:group-hover:text-emerald-400 transition-colors font-display">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[10px] text-forest-accent/70 dark:text-emerald-400/70 font-bold uppercase tracking-wider font-display">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-forest/60 dark:text-emerald-100/50 text-xs leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex justify-between items-end">
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span key={tag} className={neutralBadge}>
                {tag}
              </span>
            ))}
          </div>
          <div className="text-forest-accent dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      </div>
    );
  }

  // New Image-Driven Eric Wu Style Layout
  return (
    <div
      className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden cursor-pointer bg-white dark:bg-[#0c1a10] flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]"
      onClick={onClick}
    >
      {/* Background/Slanted Image */}
      <div className="absolute inset-0 z-0 p-5">
        <div className="w-full h-full rounded-2xl overflow-hidden rotate-[7deg] scale-[1.04] shadow-xl border border-black/5 dark:border-white/10 group-hover:rotate-[2deg] group-hover:scale-[1.02] transition-all duration-700 ease-out">
          <img src={workflowUrl} alt={`${title} preview`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      {/* Gradient Overlay for text readability on hover */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Hover Content */}
      <div className="relative z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-between items-end">
        <div>
          <h4 className="font-bold text-white text-xl font-display drop-shadow-md">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[11px] text-gray-200 font-bold uppercase tracking-wider font-display drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>

        <div className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/30 transform hover:scale-110 transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
      </div>

      {/* Project Badge that disappears on hover */}
      {showProjectTag && (
        <div className="absolute top-4 left-4 z-20 group-hover:opacity-0 transition-opacity duration-300">
          <div className="bg-forest/10 dark:bg-emerald-500/20 text-forest dark:text-emerald-400 text-[9px] font-black px-3 py-1.5 rounded-full tracking-[0.1em] uppercase shadow-sm border border-forest/20 dark:border-emerald-500/30 backdrop-blur-md">
            {badgeText}
          </div>
        </div>
      )}
    </div>
  );
};