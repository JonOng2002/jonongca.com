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
  const neutralBadge = "inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border transition-all bg-forest/5 dark:bg-obsidian-900/30 border-forest/10 dark:border-accent-500/10 text-forest/50 dark:text-accent-100/40";

  // If there is no image, fallback to the old text-centric layout
  if (!workflowUrl) {
    return (
      <div
        className="glass rounded-3xl p-8 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden cursor-pointer bg-gradient-to-br from-white to-beige/30 dark:from-obsidian-900 dark:to-accent-950/20"
        onClick={onClick}
      >
        {/* Label - appearing only on hover, slicker style */}
        <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-white shadow-sm font-display">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(124,58,237,0.8)]"></div>
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
              {badgeText}
            </span>
          </div>
        </div>

        <div className="mb-4 pr-8">
          <h4 className="font-bold text-forest dark:text-white text-md group-hover:text-forest-accent dark:group-hover:text-accent-400 transition-colors font-display">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[10px] text-forest-accent/70 dark:text-accent-400/70 font-bold uppercase tracking-wider font-display">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-forest/60 dark:text-accent-100/50 text-xs leading-relaxed mb-6 flex-grow">
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
          <div className="text-forest-accent dark:text-accent-400 opacity-0 group-hover:opacity-100 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      </div>
    );
  }

  // New Image-Driven Eric Wu Style Layout
  return (
    <div
      className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden cursor-pointer bg-white dark:bg-obsidian-900 flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]"
      onClick={onClick}
    >
      {/* Background/Slanted Image */}
      <div className="absolute inset-0 z-0 p-5">
        <div className="w-full h-full rounded-2xl overflow-hidden rotate-[7deg] scale-[1.04] shadow-xl border border-black/5 dark:border-white/10 group-hover:rotate-[2deg] group-hover:scale-[1.02] transition-all duration-700 ease-out">
          <img src={workflowUrl} alt={`${title} preview`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      {/* Dark gradient overlay — fades in on hover */}
      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Slick Bottom Button on Hover */}
      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl">
          <span className="text-sm font-bold text-white tracking-tight font-display">
            {title}
          </span>
          <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};