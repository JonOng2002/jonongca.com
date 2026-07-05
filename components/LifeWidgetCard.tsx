import React, { useState } from 'react';
import type { WidgetConfig } from '../src/data/lifeWidgets';

interface Props {
  widget: WidgetConfig;
}

const ICONS: Record<string, string> = {
  running: 'https://www.vectorlogo.zone/logos/strava/strava-icon.svg',
  goodreads: '/images/icons/goodreads.svg',
  photos: '/images/icons/photos.svg',
  notes: '/images/notion-icon.png',
};

export const LifeWidgetCard: React.FC<Props> = ({ widget }) => {
  const iconSrc = ICONS[widget.id] || `/images/icons/${widget.id}.svg`;
  const [imgError, setImgError] = useState(false);

  const inner = (
    <div
      className="group relative rounded-[2rem] overflow-hidden h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      style={{ background: widget.bg }}
    >
      {widget.items.map((item, i) => (
        <div
          key={i}
          className="absolute rounded-2xl bg-cover bg-center transition-all duration-700 ease-out pointer-events-none"
          style={{
            backgroundImage: `url(${item.image})`,
            width: item.size,
            height: item.size,
            left: item.pos.includes('left') ? '-5%' : item.pos.includes('right') ? '55%' : undefined,
            right: item.pos.includes('right') ? '-5%' : undefined,
            top: item.pos.includes('top') ? '-5%' : undefined,
            bottom: item.pos.includes('bottom') ? '-5%' : undefined,
            transform: `rotate(${item.rot}) scale(${item.scale})`,
            opacity: item.opacity,
            zIndex: parseInt(item.z),
          }}
        />
      ))}
      <div className="relative z-20 h-full flex flex-col p-5 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <p className="text-xl md:text-2xl font-extrabold text-forest font-display tracking-tight drop-shadow-sm">{widget.label}</p>
          <div className="w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 mt-1 overflow-hidden" style={{ backgroundColor: widget.accent + '30' }}>
            {!imgError && iconSrc ? (
              <img
                src={iconSrc}
                className="w-full h-full object-contain p-2"
                onError={() => setImgError(true)}
                alt={widget.label}
              />
            ) : (
              <span className="text-xs font-bold text-forest/40 uppercase tracking-wider">{widget.label.slice(0, 2)}</span>
            )}
          </div>
        </div>
        <p className="text-sm text-forest/70 leading-relaxed mt-auto font-medium">{widget.subtitle}</p>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-3 flex items-center gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: widget.accent }}>Explore</span>
          <svg className="w-3 h-3" style={{ color: widget.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </div>
    </div>
  );

  return widget.href ? (
    <a href={widget.href} target="_blank" rel="noopener noreferrer" className="no-drag block h-full">{inner}</a>
  ) : (
    <div className="h-full">{inner}</div>
  );
};
