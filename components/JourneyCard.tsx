import React from 'react';

interface JourneyEntry {
  id: string;
  number: number;
  company: string;
  role: string;
  period: string;
  metric: string;
  logoUrl?: string;
  onClick: () => void;
}

interface JourneyCardProps {
  entries: JourneyEntry[];
}

export const JourneyCard: React.FC<JourneyCardProps> = ({ entries }) => {
  return (
    <div className="glass rounded-[2rem] p-6 md:p-8 h-full flex flex-col bg-white dark:bg-obsidian-900 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-accent-500/10 flex items-center justify-center text-emerald-500 dark:text-accent-500 border border-emerald-500/20 dark:border-accent-500/20 shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-forest dark:text-white text-[15px] font-display">Experience</h3>
          <p className="text-[10px] text-forest/40 dark:text-accent-400/40 font-mono uppercase tracking-[0.15em] mt-0.5">4 roles • engineering growth</p>
        </div>
      </div>

      <div className="flex-1 relative pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500 dark:from-accent-500 via-emerald-500/50 dark:via-accent-500/50 to-emerald-500/10 dark:to-accent-500/10 rounded-full" />

        {entries.map((entry, idx) => (
          <div
            key={entry.id}
            onClick={entry.onClick}
            className="relative mb-6 last:mb-0 group cursor-pointer"
          >
            <div className="absolute -left-[29px] top-1 w-[22px] flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-emerald-500 dark:bg-accent-500 flex items-center justify-center ring-4 ring-white dark:ring-obsidian-900 transition-transform group-hover:scale-125">
                <span className="text-[9px] font-bold text-white">{entry.number}</span>
              </div>
              {idx > 0 && (
                <div className="absolute top-5 w-0.5 h-full bg-emerald-500/20 dark:bg-accent-500/20 -z-10" />
              )}
            </div>

            <div className="bg-forest/5 dark:bg-accent-500/5 rounded-2xl p-4 border border-forest/10 dark:border-accent-500/10 group-hover:border-emerald-500/30 dark:group-hover:border-accent-500/30 transition-all">
              <div className="flex items-start gap-3">
                {entry.logoUrl && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-forest/10 dark:border-accent-500/20 shrink-0 mt-0.5 bg-white">
                    <img src={entry.logoUrl} alt={entry.company} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <h4 className="font-bold text-forest dark:text-white text-[13px] font-display leading-tight">{entry.role}</h4>
                  <p className="text-[11px] text-forest-accent dark:text-accent-400 font-semibold mt-0.5">{entry.company}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-mono text-forest/40 dark:text-accent-400/40">{entry.period}</span>
                  </div>
                  <p className="text-[11px] text-forest/60 dark:text-accent-200/60 mt-2 leading-relaxed">{entry.metric}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-forest/10 dark:border-accent-500/10 flex items-center justify-center gap-1.5 text-emerald-500 dark:text-accent-500">
        <span className="text-[9px] font-bold uppercase tracking-wider">Click any role for details</span>
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};
