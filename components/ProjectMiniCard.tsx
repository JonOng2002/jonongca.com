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
}) => {
  const tagBadge =
    'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider border bg-forest/5 border-forest/10 text-forest/60';

  return (
    <div
      className="glass rounded-[20px] h-full overflow-hidden group cursor-pointer project-card-hover flex flex-col"
      onClick={onClick}
    >
      {/* Image section */}
      {workflowUrl && (
        <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
          <img
            src={workflowUrl}
            alt={`${title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content section */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2">
          <h4 className="project-title font-bold text-forest text-base font-display leading-snug">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[11px] text-forest/50 font-bold uppercase tracking-wider font-display mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-forest/60 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map(tag => (
            <span key={tag} className={tagBadge}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
