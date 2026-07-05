import React from 'react';

export const QuickLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
      <a 
        href="mailto:jonongca@gmail.com" 
        className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group hover:bg-emerald-500/10 dark:hover:bg-accent-500/10 transition-all active:scale-95"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 dark:bg-accent-500/10 rounded-2xl text-emerald-400 dark:text-accent-400 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <span className="text-xs font-bold text-emerald-700 dark:text-accent-100/70 tracking-wide">Email Me</span>
      </a>

      <a 
        href="/resume.pdf" 
        target="_blank"
        className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group hover:bg-emerald-500/10 dark:hover:bg-accent-500/10 transition-all active:scale-95"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 dark:bg-accent-500/10 rounded-2xl text-emerald-400 dark:text-accent-400 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-2m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <span className="text-xs font-bold text-emerald-700 dark:text-accent-100/70 tracking-wide">Resume</span>
      </a>

      <a 
        href="https://github.com/JonOng2002" 
        target="_blank"
        className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group hover:bg-emerald-500/10 dark:hover:bg-accent-500/10 transition-all active:scale-95"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 dark:bg-accent-500/10 rounded-2xl text-emerald-400 dark:text-accent-400 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
        </div>
        <span className="text-xs font-bold text-emerald-700 dark:text-accent-100/70 tracking-wide">GitHub</span>
      </a>

      <div 
        className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group transition-all"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 dark:bg-accent-500/10 rounded-2xl text-emerald-400 dark:text-accent-400 group-hover:scale-110 transition-transform">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold text-emerald-700 dark:text-accent-100/70 tracking-wide">SMU IS</span>
          <span className="text-[10px] text-emerald-600 dark:text-accent-500/50 font-mono uppercase mt-1">AI Major</span>
        </div>
      </div>
    </div>
  );
};
