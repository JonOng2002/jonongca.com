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
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  role,
  period,
  achievements,
  imageUrl,
  logoUrl,
  showBadge = true,
  badgeText = "Internship"
}) => {
  const highlightTerms = /(70%|100%|67%|Jenkins|GCP|SME|Terraform|Azure DevOps|CI\/CD|YAML|15\+|80%|Azure App Service)/g;

  // Fallback to text-centric layout if no image is provided
  if (!imageUrl) {
    return (
      <div className={`glass rounded - 3xl p - 8 flex flex - col h - full group relative overflow - hidden bg - gradient - to - br from - white to - beige / 30 dark: from - slate - 900 / 40 dark: to - emerald - 950 / 20`}>
        {showBadge && (
          <div className="absolute top-0 right-4 z-20">
            <div className="bg-forest dark:bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-b-md tracking-[0.2em] uppercase shadow-md font-display">{badgeText}</div>
          </div>
        )}

        <div className="flex flex-col mb-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              {logoUrl && <img src={logoUrl} alt={`${company} logo`} className="w-8 h-8 rounded-full border border-forest/10 dark:border-emerald-500/20" />}
              <h4 className="font-bold text-2xl tracking-tight text-forest dark:text-white font-display">{company}</h4>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-forest-accent dark:text-emerald-400 font-bold uppercase tracking-wider font-display">{role}</p>
            <span className="text-[9px] font-mono font-bold text-forest/40 dark:text-emerald-500/40 bg-forest/5 dark:bg-[#0c1a10]/30 px-3 py-1 rounded-full border border-forest/10 dark:border-emerald-500/10">
              {period}
            </span>
          </div>
        </div>

        <div className="space-y-6 flex-grow">
          {achievements && (
            <div className="flex flex-col gap-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-2 h-1 w-1 rounded-full shrink-0 bg-forest dark:bg-emerald-500 shadow-[0_0_8px_currentColor]"></div>
                  <p className="text-[11px] md:text-xs text-forest/60 dark:text-emerald-100/50 leading-relaxed">
                    {ach.split(highlightTerms).map((part, i) =>
                      highlightTerms.test(part) ? (
                        <span key={i} className="font-bold text-forest dark:text-emerald-300 border-b border-forest/20 dark:border-emerald-500/30">{part}</span>
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
      className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden bg-white dark:bg-[#0c1a10] flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]"
    >
      {/* Background/Slanted Image */}
      <div className="absolute inset-0 z-0 p-5">
        <div className="w-full h-full rounded-2xl overflow-hidden rotate-[-5deg] scale-[1.02] shadow-md border border-black/5 dark:border-white/10 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700 ease-out">
          <img src={imageUrl} alt={`${company} at work`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      {/* Gradient Overlay for text readability on hover */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Pills Layer - Visible default, subtly shifted on hover */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start transition-transform duration-500 group-hover:-translate-y-1">
        {showBadge && (
          <div className="bg-white/90 dark:bg-[#0f2415]/90 backdrop-blur-md text-zinc-800 dark:text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.1em] uppercase shadow-sm border border-zinc-200 dark:border-emerald-500/30">
            {badgeText}
          </div>
        )}

        {logoUrl && (
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 dark:border-white/20 shadow-lg bg-white/90 dark:bg-[#0c1a10]/80 backdrop-blur-sm">
            <img src={logoUrl} alt={`${company} Logo`} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Hover Content */}
      <div className="relative z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col gap-2">
        <div>
          <h4 className="font-bold text-white text-2xl font-display drop-shadow-md">
            {company}
          </h4>
          <p className="text-[12px] text-emerald-300 font-bold uppercase tracking-wider font-display drop-shadow-md">
            {role}
          </p>
          <span className="inline-block mt-2 text-[10px] font-mono font-bold text-white/70 bg-white/10 px-2 py-0.5 rounded-md border border-white/10 backdrop-blur-sm">
            {period}
          </span>
        </div>
      </div>

    </div>
  );
};