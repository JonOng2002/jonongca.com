import React from 'react';

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  achievements?: string[];
  imageUrl?: string;
  logoUrl?: string; // New prop for company logo
  showBadge?: boolean;
  badgeText?: string;
  onClick?: () => void;
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  role,
  period,
  achievements,
  imageUrl,
  logoUrl,
  showBadge = true,
  badgeText = "Internship",
  onClick
}) => {
  const highlightTerms = /(70%|100%|67%|Jenkins|GCP|SME|Terraform|Azure DevOps|CI\/CD|YAML|15\+|80%|Azure App Service)/g;

  // Fallback to text-centric layout if no image is provided
  if (!imageUrl) {
    return (
      <div
        onClick={onClick}
        className={`glass rounded-3xl p-8 flex flex-col h-full group relative overflow-hidden bg-gradient-to-br from-white to-beige/30 dark:from-obsidian-900/40 dark:to-accent-950/20 ${onClick ? 'cursor-pointer' : ''}`}
      >
        {/* Label - appearing only on hover, slicker style */}
        <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(124,58,237,0.8)]"></div>
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
              {badgeText}
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              {logoUrl && <img src={logoUrl} alt={`${company} logo`} className="w-8 h-8 rounded-full border border-forest/10 dark:border-accent-500/20" />}
              <h4 className="font-bold text-2xl tracking-tight text-forest dark:text-white font-display">{company}</h4>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-forest-accent dark:text-accent-400 font-bold uppercase tracking-wider font-display">{role}</p>
            <span className="text-[9px] font-mono font-bold text-forest/40 dark:text-accent-500/40 bg-forest/5 dark:bg-obsidian-900/30 px-3 py-1 rounded-full border border-forest/10 dark:border-accent-500/10">
              {period}
            </span>
          </div>
        </div>

        <div className="space-y-6 flex-grow">
          {achievements && (
            <div className="flex flex-col gap-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-2 h-1 w-1 rounded-full shrink-0 bg-forest dark:bg-accent-500 shadow-[0_0_8px_currentColor]"></div>
                  <p className="text-[11px] md:text-xs text-forest/60 dark:text-accent-100/50 leading-relaxed">
                    {ach.split(highlightTerms).map((part, i) =>
                      highlightTerms.test(part) ? (
                        <span key={i} className="font-bold text-forest dark:text-accent-300 border-b border-forest/20 dark:border-accent-500/30">{part}</span>
                      ) : part
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // New Image-Driven Eric Wu Style Layout
  return (
    <div
      onClick={onClick}
      className={`glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden bg-white dark:bg-obsidian-900 flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px] ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Background/Slanted Image */}
      <div className="absolute inset-0 z-0 p-5">
        <div className="w-full h-full rounded-2xl overflow-hidden rotate-[-5deg] scale-[1.02] shadow-md border border-black/5 dark:border-white/10 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700 ease-out">
          <img src={imageUrl} alt={`${company} at work`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      {/* Dark gradient overlay — fades in on hover */}
      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Right Logo Circle - Always visible */}
      {logoUrl && (
        <div className="absolute top-6 right-6 z-20 w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 shadow-xl bg-white/90 dark:bg-zinc-900 transition-transform duration-500 group-hover:scale-110">
          <img src={logoUrl} alt={`${company} Logo`} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Slick Bottom Button on Hover */}
      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl">
          <span className="text-sm font-bold text-white tracking-tight font-display">
            {company}
          </span>
          <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};