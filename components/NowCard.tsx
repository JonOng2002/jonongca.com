import React from 'react';

const TAGS = [
  { label: 'SAS-to-PySpark' },
  { label: 'Data Validation' },
  { label: 'Azure ML' },
];

export const NowCard: React.FC = () => {
  return (
    <div className="glass rounded-[20px] p-6 md:p-8 h-full flex flex-col">
      <p className="font-serif italic text-2xl text-forest-accent mb-5">Now</p>
      <h3 className="font-bold text-forest text-xl font-display leading-tight">AI & Data Engineering Intern</h3>
      <p className="text-lg text-forest-accent font-semibold mt-1">@ Inland Revenue Authority of Singapore</p>
      <div className="mt-auto pt-5 space-y-2">
        {TAGS.map(tag => (
          <div key={tag.label} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-forest/5 transition-colors group">
            <div className="w-1.5 h-1.5 rounded-full bg-forest-accent/40 shrink-0 group-hover:bg-forest-accent transition-colors" />
            <span className="text-[12px] text-forest/60 font-mono font-medium">{tag.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
