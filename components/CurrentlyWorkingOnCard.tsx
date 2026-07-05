import React from 'react';

const WORK_ITEMS = [
  'SAS-to-PySpark ETL migration',
  'Large-scale data validation',
  'Internal AI assistant workflows',
  'Azure ML API refactoring',
  'Endpoint testing',
];

export const CurrentlyWorkingOnCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] p-6 md:p-8 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-forest/5 flex items-center justify-center text-forest-accent border border-forest/10 shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-forest text-[15px] font-display">Currently Working On</h3>
          <p className="text-[10px] text-forest/40 font-mono uppercase tracking-[0.15em] mt-0.5">AI & Data Engineering @ Inland Revenue Authority of Singapore</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="space-y-2.5 pl-1">
          {WORK_ITEMS.map((item, i) => (
            <div key={i} className="flex items-start gap-3 group/item">
              <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-forest-accent shrink-0 group-hover/item:scale-150 transition-transform" />
              <span className="text-[13px] text-forest/60 leading-relaxed font-medium group-hover/item:text-forest/80 transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
