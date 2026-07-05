import React from 'react';

export const LifeContactCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] p-6 h-full flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-xl bg-forest/5 flex items-center justify-center text-forest-accent border border-forest/10 shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-forest text-[13px] font-display">Beyond Work</h3>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-3">
        <a href="https://www.metatft.com/player/sea/teefus-2828" target="_blank" rel="noopener noreferrer"
          className="bg-forest/5 rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 hover:bg-forest/10 transition-all group no-drag">
          <span className="text-xl">🎮</span>
          <span className="text-[10px] font-semibold text-forest/60 group-hover:text-forest transition-colors">TFT</span>
        </a>
        <a href="https://goodreads.com/jonongca" target="_blank" rel="noopener noreferrer"
          className="bg-forest/5 rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 hover:bg-forest/10 transition-all group no-drag">
          <span className="text-xl">📚</span>
          <span className="text-[10px] font-semibold text-forest/60 group-hover:text-forest transition-colors">Reading</span>
        </a>
        <a href="https://jonongca.notion.site/apache-certification" target="_blank" rel="noopener noreferrer"
          className="bg-forest/5 rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 hover:bg-forest/10 transition-all group no-drag">
          <span className="text-xl">📝</span>
          <span className="text-[10px] font-semibold text-forest/60 group-hover:text-forest transition-colors">Notes</span>
        </a>
        <a href="https://github.com/JonOng2002" target="_blank" rel="noopener noreferrer"
          className="bg-forest/5 rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 hover:bg-forest/10 transition-all group no-drag">
          <span className="text-xl">💻</span>
          <span className="text-[10px] font-semibold text-forest/60 group-hover:text-forest transition-colors">GitHub</span>
        </a>
      </div>

      <div className="mt-4 pt-4 border-t border-forest/10 flex justify-center gap-4">
        <a href="/resume.pdf" className="text-[10px] font-bold uppercase tracking-wider text-forest-accent hover:text-forest transition-colors">Resume</a>
        <a href="https://linkedin.com/in/jonathan-ong-66502a2b8" target="_blank" className="text-[10px] font-bold uppercase tracking-wider text-forest-accent hover:text-forest transition-colors">LinkedIn</a>
        <a href="mailto:jonongca@gmail.com" className="text-[10px] font-bold uppercase tracking-wider text-forest-accent hover:text-forest transition-colors">Email</a>
      </div>
    </div>
  );
};
