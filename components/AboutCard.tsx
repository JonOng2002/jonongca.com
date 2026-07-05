import React from 'react';

interface AboutCardProps {
  onClick?: () => void;
}

export const AboutCard: React.FC<AboutCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`glass rounded-[2rem] p-8 flex flex-col h-full bg-white dark:bg-obsidian-900 shadow-sm hover:shadow-xl transition-all duration-300 ${onClick ? 'cursor-pointer group' : ''}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 mb-8 uppercase tracking-[0.2em]">About Me</h3>
        {onClick && (
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 dark:bg-accent-500/10 flex items-center justify-center text-emerald-500 dark:text-accent-500 group-hover:bg-emerald-500 dark:group-hover:bg-accent-500 group-hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        )}
      </div>
      <div className="flex-grow space-y-4 text-zinc-600 dark:text-zinc-400 text-[16px] leading-[1.6] antialiased">
        <p>
          I'm Jonathan, an Information Systems undergraduate at <strong className="text-zinc-900 dark:text-white font-semibold">SMU</strong> focused on <strong className="text-emerald-600 dark:text-accent-400 font-semibold">Data Engineering</strong>, <strong className="text-emerald-600 dark:text-accent-400 font-semibold">AI Engineering</strong>, <strong className="text-emerald-600 dark:text-accent-400 font-semibold">MLOps</strong> and <strong className="text-zinc-900 dark:text-white font-semibold">Cloud Infrastructure</strong>.
        </p>
      </div>
      <div className="mt-auto pt-4 flex items-center gap-2 text-emerald-600 dark:text-accent-400 group-hover:gap-3 transition-all">
        <span className="text-[10px] font-bold uppercase tracking-wider">Learn more about me</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};