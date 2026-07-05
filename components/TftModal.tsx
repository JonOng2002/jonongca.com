import React from 'react';

interface TftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TftModal: React.FC<TftModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative bg-white dark:bg-obsidian-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-forest/10 dark:border-accent-500/20 flex flex-col animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="relative h-48 md:h-56 rounded-t-3xl overflow-hidden shrink-0">
          <img
            src="/images/gaming/tft-bg.jpg"
            alt="TFT"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-black text-white font-display drop-shadow-md">Teamfight Tactics</h2>
            <div className="text-indigo-300 font-bold uppercase tracking-wider text-sm mt-1 drop-shadow-md">Competitive Gaming</div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">My Story</h3>
            <p className="text-forest/80 dark:text-accent-100/70 leading-relaxed">
              My favourite online game! Every game of TFT is different. RNG always gets in the way but the players who actually improve are the ones who focus on what they can control. Tempo, positioning, adapting to what the game gives you. I've been playing since Set 6 and peaked
              <span className="font-bold text-forest dark:text-accent-300"> Challenger </span>
              (top 0.01% in SEA).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.metatft.com/player/sea/teefus-2828"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-lg hover:shadow-indigo-900/40"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              View MetaTFT Profile
            </a>
          </div>

          <p className="text-[11px] text-forest/40 dark:text-accent-400/40 text-center font-mono">
            Always down to talk TFT — hit me up on LinkedIn if you play!
          </p>
        </div>
      </div>
    </div>
  );
};
