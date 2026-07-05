import React from 'react';

const TILES = [
  {
    label: 'Cats',
    desc: 'Timmy & Yuumi',
    bg: 'url(/cats/cats.jpg)',
  },
  {
    label: 'TFT',
    desc: 'Challenger peak',
    bg: 'url(/images/gaming/tft-bg.jpg)',
    href: 'https://www.metatft.com/player/sea/teefus-2828',
  },
  {
    label: 'Reading',
    desc: 'Productivity & systems',
    bg: 'url(/images/reading/books-bg.jpg)',
    href: 'https://goodreads.com/jonongca',
  },
  {
    label: 'Travel',
    desc: 'Cities, food, memories',
    bg: 'linear-gradient(135deg, #E8F0EB, #D4E8DD)',
  },
];

export const LifeCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] p-5 md:p-6 h-full flex flex-col">
      <p className="text-[10px] font-bold uppercase tracking-widest text-forest/25 mb-4">Beyond work</p>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {TILES.map(t => {
          const hasBg = t.bg.startsWith('url');
          const inner = (
            <div className="rounded-2xl overflow-hidden h-full min-h-[80px] relative group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: t.bg }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <p className="text-[10px] font-bold text-white/90 leading-tight">{t.label}</p>
                <p className="text-[8px] text-white/60 leading-tight">{t.desc}</p>
              </div>
            </div>
          );
          return t.href ? (
            <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer" className="no-drag">
              {inner}
            </a>
          ) : (
            <div key={t.label}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
};
