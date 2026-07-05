import React from 'react';

interface LearningJourneyCardProps {
  onClick: () => void;
}

const DONE = 85;
const TOTAL = 174;
const PCT = Math.round((DONE / TOTAL) * 100);

export const LearningJourneyCard: React.FC<LearningJourneyCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="glass rounded-[2rem] p-5 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group bg-white dark:bg-obsidian-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer no-drag"
    >
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/5 flex items-center justify-center border border-orange-500/10 group-hover:scale-110 transition-transform duration-500">
          <img
            src="https://cdn.simpleicons.org/apachespark/E25A1C"
            alt="Apache Spark"
            className="w-10 h-10 object-contain"
          />
        </div>
        <div>
          <h3 className="font-bold text-forest dark:text-white text-[13px] font-display">PySpark Certification</h3>
          <p className="text-[9px] text-forest/40 dark:text-accent-300/40 font-mono uppercase tracking-[0.15em] mt-0.5">Databricks</p>
        </div>
      </div>

      <div className="w-full mt-3 space-y-1">
        <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-emerald-500 transition-all duration-1000"
            style={{ width: `${PCT}%` }}
          />
        </div>
        <div className="flex justify-between text-[8px] font-mono text-forest/40 dark:text-accent-400/40">
          <span>{DONE} / {TOTAL} videos</span>
          <span>{PCT}%</span>
        </div>
      </div>

      <p className="mt-2 text-[10px] text-zinc-500 dark:text-zinc-500 font-medium">
        Current: Spark SQL
      </p>

      <div className="mt-auto pt-2 flex items-center gap-1 text-emerald-600 dark:text-accent-400 group-hover:gap-1.5 transition-all">
        <span className="text-[8px] font-bold uppercase tracking-wider">Notion Notes</span>
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};
