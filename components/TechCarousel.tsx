
import React from 'react';

const TECH_LIST = [
  { id: 'aws', name: 'AWS' },
  { id: 'azure', name: 'Azure' },
  { id: 'docker', name: 'Docker' },
  { id: 'terraform', name: 'Terraform' },
  { id: 'githubactions', name: 'GitHub' },
  { id: 'python', name: 'Python' },
  { id: 'typescript', name: 'TS' },
  { id: 'llama', name: 'Llama' },
  { id: 'react', name: 'React' },
  { id: 'postgresql', name: 'SQL' },
  { id: 'bash', name: 'Bash' },
];

export const TechCarousel: React.FC = () => {
  const displayList = [...TECH_LIST, ...TECH_LIST];

  return (
    <div className="glass rounded-[2rem] p-6 flex flex-col h-full relative overflow-hidden group bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-gray-500">Technology Stack</h4>
        <div className="h-1 w-6 bg-[color:var(--primary)]/20 rounded-full group-hover:bg-[color:var(--primary)] transition-colors"></div>
      </div>

      <div className="scroll-container relative overflow-hidden">
        <div className="flex animate-scroll gap-6 py-2">
          {displayList.map((tech, idx) => (
            <div
              key={`${tech.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-900 rounded-2xl border border-slate-100 dark:border-gray-800 group/icon hover:border-[color:var(--primary)]/30 transition-all shadow-sm"
              title={tech.name}
            >
              <div className="relative h-12 w-12">
                <img
                  src={`/logos/${tech.id}.png`}
                  alt={tech.name}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith('.jpg')) {
                      target.src = `/logos/${tech.id}.jpg`;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
