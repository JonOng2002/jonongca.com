import React from 'react';

export const HeroCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 ring-4 ring-white/80 shadow-sm">
        <img src="/images/pfp.jpeg" alt="Jonathan Ong" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-forest font-display tracking-tight">Jonathan Ong</h1>
        <p className="text-[13px] text-forest-accent font-semibold mt-1">AI & Data Engineering Intern @ Inland Revenue Authority of Singapore</p>
        <p className="text-[13px] text-forest/50 mt-2 max-w-md leading-relaxed">
          Data Engineering · AI Engineering · MLOps · Cloud Infrastructure
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <a href="https://github.com/JonOng2002" target="_blank" className="w-9 h-9 rounded-xl bg-forest/5 flex items-center justify-center text-forest/60 hover:bg-forest/10 hover:text-forest transition-all" title="GitHub">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
        </a>
        <a href="https://linkedin.com/in/jonathan-ong-66502a2b8" target="_blank" className="w-9 h-9 rounded-xl bg-forest/5 flex items-center justify-center text-forest/60 hover:bg-forest/10 hover:text-forest transition-all" title="LinkedIn">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        </a>
        <a href="mailto:jonongca@gmail.com" className="w-9 h-9 rounded-xl bg-forest/5 flex items-center justify-center text-forest/60 hover:bg-forest/10 hover:text-forest transition-all" title="Email">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </a>
      </div>
    </div>
  );
};