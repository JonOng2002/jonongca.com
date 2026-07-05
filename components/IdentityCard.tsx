import React from 'react';

export const IdentityCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] p-8 md:p-10 h-full flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-forest font-display tracking-tight leading-[1.05]">
        Jonathan Ong
      </h1>
      <p className="text-base text-forest-accent font-semibold mt-4">Data Engineering · AI Engineering · MLOps · Cloud</p>
      <p className="text-lg text-forest/50 mt-4 max-w-md leading-relaxed">
        I build reliable systems across data, AI and cloud.
      </p>
    </div>
  );
};
