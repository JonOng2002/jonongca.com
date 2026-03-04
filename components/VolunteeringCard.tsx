import React from 'react';

interface VolunteeringProps {
  imageUrl?: string;
}

export const VolunteeringCard: React.FC<VolunteeringProps> = ({ imageUrl }) => {
  return (
    <div className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden bg-white dark:bg-[#0c1a10] flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]">

      {/* Floating slanted photo frame — straightens on hover */}
      <div className="absolute inset-0 z-0 p-5 flex items-center justify-center">
        <div
          className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10
                     rotate-[-7deg] -translate-x-3
                     group-hover:rotate-0 group-hover:translate-x-0
                     transition-all duration-700 ease-out"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Volunteering at TRTL SG"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-500/80 to-emerald-900/80 flex items-center justify-center">
              <svg className="w-24 h-24 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Dark gradient overlay — fades in on hover */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label pill — always visible */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-white/90 dark:bg-orange-900/60 backdrop-blur-md text-orange-600 dark:text-orange-300 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.1em] uppercase shadow-sm border border-zinc-200 dark:border-orange-500/30">
          Volunteering
        </div>
      </div>

      {/* Hover text content */}
      <div className="relative z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <h4 className="font-bold text-white text-2xl font-display drop-shadow-md">Giving Back</h4>
        <p className="text-[12px] text-orange-400 font-bold uppercase tracking-wider font-display drop-shadow-md">The Right To Live SG</p>
        <p className="text-white/70 text-xs mt-2 leading-relaxed">
          Animal enrichment and rehabilitation — improving quality of life for 15–20 rescue dogs each week.
        </p>
        <div className="flex gap-2 mt-3">
          <span className="text-[10px] font-mono font-bold text-white/70 bg-white/10 px-2 py-0.5 rounded-md border border-white/10">Jan – Dec 2024</span>
          <span className="text-[10px] font-mono font-bold text-orange-400/90 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">Animal Welfare</span>
        </div>
      </div>

    </div>
  );
};