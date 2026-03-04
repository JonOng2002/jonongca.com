import React from 'react';

export const CatsCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden bg-white dark:bg-[#0c1a10] flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]">

      {/* Floating slanted photo frame — straightens on hover like Eric Wu's dog card */}
      <div className="absolute inset-0 z-0 p-5 flex items-center justify-center">
        <div
          className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10
                     rotate-[8deg] translate-x-4
                     group-hover:rotate-0 group-hover:translate-x-0
                     transition-all duration-700 ease-out"
        >
          <img
            src="/cats/cats.jpg"
            alt="Timmy and Yuumi"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Dark gradient overlay — fades in on hover for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label pill — always visible */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-white/90 dark:bg-emerald-900/80 backdrop-blur-md text-zinc-800 dark:text-emerald-300 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.1em] uppercase shadow-sm border border-zinc-200 dark:border-emerald-500/30">
          The Cats
        </div>
      </div>

      {/* Hover text content */}
      <div className="relative z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <h4 className="font-bold text-white text-2xl font-display drop-shadow-md">Timmy & Yuumi</h4>
        <p className="text-[12px] text-emerald-300 font-bold uppercase tracking-wider font-display drop-shadow-md">My Daily Motivation</p>
        <p className="text-white/80 text-xs leading-relaxed mt-2">
          Timmy is an American Curl tabby. Yuumi is a rescued tripod. They've been with me through the highs and lows!
        </p>
      </div>

    </div>
  );
};
