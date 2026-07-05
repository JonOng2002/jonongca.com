import React from 'react';

interface VolunteeringProps {
  imageUrl?: string;
}

export const VolunteeringCard: React.FC<VolunteeringProps> = ({ imageUrl }) => {
  return (
    <div className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden bg-white dark:bg-obsidian-900 flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]">

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
      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Slick Bottom Button on Hover */}
      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl">
          <span className="text-sm font-bold text-white tracking-tight font-display">
            Volunteering
          </span>
          <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};