import React from 'react';

interface NotesCardProps {
  onClick: () => void;
}

const DONE = 85;
const TOTAL = 174;
const PCT = Math.round((DONE / TOTAL) * 100);

export const NotesCard: React.FC<NotesCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="glass rounded-[2rem] p-6 h-full flex flex-col bg-white dark:bg-obsidian-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-accent-500/10 flex items-center justify-center text-emerald-500 dark:text-accent-500 border border-emerald-500/20 dark:border-accent-500/20 shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-forest dark:text-white text-[15px] font-display">Notes & Reflections</h3>
          <p className="text-[10px] text-forest/40 dark:text-accent-400/40 font-mono uppercase tracking-[0.15em] mt-0.5">Learning in public</p>
        </div>
      </div>

      <div className="flex-1 space-y-5">
        <div className="bg-forest/5 dark:bg-accent-500/5 rounded-2xl p-4 border border-forest/10 dark:border-accent-500/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-forest-accent dark:text-accent-400">PySpark Certification</span>
            <span className="text-[10px] font-mono text-forest/40 dark:text-accent-400/40">{DONE}/{TOTAL} videos</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden mb-2">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 dark:from-accent-500 to-emerald-400 dark:to-accent-400 transition-all duration-1000" style={{ width: `${PCT}%` }} />
          </div>
          <span className="text-[10px] font-mono text-forest/40 dark:text-accent-400/40">Ansh Lamba course • Databricks prep</span>
        </div>

        <div className="bg-forest/5 dark:bg-accent-500/5 rounded-2xl p-4 border border-forest/10 dark:border-accent-500/10">
          <span className="text-[10px] font-bold uppercase tracking-wider text-forest-accent dark:text-accent-400">Monthly Reflections</span>
          <p className="text-[11px] text-forest/60 dark:text-accent-200/60 mt-2 leading-relaxed">
            I write monthly engineering reflections covering what I'm learning in data engineering, MLOps, and cloud — sharing insights from real work and certification prep.
          </p>
        </div>

        <div className="flex items-center gap-2 text-emerald-500 dark:text-accent-500 text-[10px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
          <span>View Notion Notes</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
