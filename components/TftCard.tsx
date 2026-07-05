import React from 'react';

interface TftCardProps {
  onClick: () => void;
}

export const TftCard: React.FC<TftCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden cursor-pointer bg-white dark:bg-obsidian-900 flex flex-col justify-end p-5 hover:shadow-xl no-drag"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img
            src="/images/gaming/tft-bg.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            alt="TFT"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="relative z-20 flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-2 group-hover:scale-110 transition-transform duration-500">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className="font-bold text-white text-[13px] font-display drop-shadow-lg">TFT</h3>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex items-center justify-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl">
          <span className="text-[11px] font-bold text-white tracking-tight">MetaTFT Profile</span>
          <svg className="w-3 h-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
