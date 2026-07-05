import React, { useMemo } from 'react';

export const BackgroundParticles: React.FC = () => {
  const particles = useMemo(() => {
    const colours = ['#8B5CF6', '#A78BFA'];
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 20 + 25}s`,
      delay: `${Math.random() * 15}s`,
      opacity: Math.random() * 0.08 + 0.03,
      colour: colours[Math.floor(Math.random() * colours.length)],
      animationType: i % 2 === 0 ? 'animate-float' : 'animate-float-delayed',
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.animationType}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            backgroundColor: p.colour,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};