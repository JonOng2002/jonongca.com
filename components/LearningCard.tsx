import React from 'react';

interface LearningCardProps {
  onClick: () => void;
}

const DONE = 85;
const TOTAL = 174;
const PCT = Math.round((DONE / TOTAL) * 100);

export const LearningCard: React.FC<LearningCardProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="glass rounded-[2rem] p-6 md:p-8 h-full flex flex-col cursor-pointer group">
      <p className="font-serif italic text-xl text-forest-accent mb-5">Field Notes</p>
      <div className="flex-1">
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-forest">PySpark Certification</span>
            <span className="text-xs font-mono text-forest/30">{DONE}/{TOTAL}</span>
          </div>
          <div className="h-2 rounded-full bg-forest/5 overflow-hidden">
            <div className="h-full rounded-full bg-forest-accent transition-all duration-1000" style={{ width: `${PCT}%` }} />
          </div>
          <p className="text-[11px] text-forest/40 font-mono mt-1.5">PySpark cert prep · monthly reflections · data / MLOps / cloud notes</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-forest-accent text-xs font-bold uppercase tracking-wider mt-3 group-hover:gap-2 transition-all">
        <span>View Notes</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>
    </div>
  );
};
