import React from 'react';
import { LifeWidgetCard } from './LifeWidgetCard';
import { lifeWidgets } from '../src/data/lifeWidgets';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
      <div className="mb-16">
        <div className="w-16 h-16 rounded-2xl bg-forest/5 flex items-center justify-center border border-forest/10 mb-6">
          <svg className="w-8 h-8 text-forest-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-forest font-display tracking-tight">Hello! I'm<span className="inline-block w-3" /> <span className="font-serif italic text-forest-accent">Jonathan</span></h2>
        <p className="text-forest/50 text-[11px] font-bold uppercase tracking-widest mt-4 leading-loose">
          SMU Information Systems · Data Engineering, AI & Cloud
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2 space-y-10 text-forest/70 text-base leading-relaxed">
          <section>
            <h3 className="font-serif italic text-xl text-forest-accent mb-5">My journey</h3>
            <p className="mb-4">
              I'm an Information Systems undergraduate at SMU focused on <span className="text-forest font-semibold">Data Engineering</span>, <span className="text-forest font-semibold">AI Engineering</span>, <span className="text-forest font-semibold">MLOps</span> and <span className="text-forest font-semibold">Cloud Infrastructure</span>.
            </p>
            <p className="mb-4">
              Currently an <span className="text-forest font-semibold">AI & Data Engineering Intern at Inland Revenue Authority of Singapore</span>, working on modernising legacy data and ML workflows through SAS-to-PySpark ETL migration, large-scale data validation, internal AI assistant improvements, Azure ML API refactoring and endpoint testing.
            </p>
            <p>
              I enjoy building reliable systems across data, AI and cloud, especially when the work involves making messy processes more structured, testable and production-ready.
            </p>
          </section>

          <section>
            <h3 className="font-serif italic text-xl text-forest-accent mb-5">Beyond work</h3>
            <p>
              This portfolio is not only for interviews or job applications. It is also a personal space where people can get to know me better through my learning notes, monthly engineering reflections, projects, interests and life outside of tech.
            </p>
          </section>

          <section>
            <h3 className="font-serif italic text-xl text-forest-accent mb-5">Experience Timeline</h3>
            <div className="space-y-6 border-l border-forest/10 pl-6">
              <div>
                <span className="text-[10px] font-mono text-forest/40 uppercase">Current</span>
                <h4 className="text-forest font-bold mt-1">Inland Revenue Authority of Singapore</h4>
                <p className="text-sm text-forest/50">AI & Data Engineering Intern</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-forest/40 uppercase">Jan — Apr 2026</span>
                <h4 className="text-forest font-bold mt-1">YTL PowerSeraya</h4>
                <p className="text-sm text-forest/50">DevOps Engineer Intern</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-forest/40 uppercase">May — Aug 2025</span>
                <h4 className="text-forest font-bold mt-1">Global Enterprise Mobility</h4>
                <p className="text-sm text-forest/50">Cloud Engineer Intern</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-serif italic text-xl text-forest-accent mb-4">Life</h3>
            <div className="grid grid-cols-2 gap-3">
              {lifeWidgets.map(w => (
                <LifeWidgetCard key={w.id} widget={w} />
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-forest/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif italic text-xl text-forest-accent">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest text-white text-[11px] font-bold uppercase tracking-wider hover:bg-forest-accent transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Resume
              </a>
              <a href="https://github.com/JonOng2002" target="_blank" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest/5 text-forest text-[11px] font-bold uppercase tracking-wider hover:bg-forest/10 transition-all border border-forest/10">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/jonathan-ong-66502a2b8" target="_blank" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest/5 text-forest text-[11px] font-bold uppercase tracking-wider hover:bg-forest/10 transition-all border border-forest/10">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn
              </a>
              <a href="mailto:jonongca@gmail.com" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest/5 text-forest text-[11px] font-bold uppercase tracking-wider hover:bg-forest/10 transition-all border border-forest/10">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-center pb-12">
        <p className="text-forest/20 text-[10px] font-mono uppercase tracking-widest">
          Stay curious, keep building
        </p>
      </footer>
    </div>
  );
};
