import React, { useMemo } from 'react';

export const BackgroundParticles: React.FC = () => {
  const particles = useMemo(() => {
    // Warm complementary colors (amber, gold, soft orange) to contrast nicely with the dark blue grid and green accents
    const colours = ['#f59e0b', '#fbbf24', '#fcd34d', '#fb923c'];
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 3, // Increased size
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 15 + 15}s`,
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.25 + 0.15, // Increased opacity for visibility
      colour: colours[Math.floor(Math.random() * colours.length)],
      animationType: i % 2 === 0 ? 'animate-float' : 'animate-float-delayed',
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full shadow-[0_0_10px_currentColor] ${p.animationType}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            backgroundColor: p.colour,
            color: p.colour, // for shadow
            animationDuration: p.duration,
            animationDelay: p.delay,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};