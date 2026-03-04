import React from 'react';

export const AboutCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] p-8 flex flex-col h-full bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl transition-all duration-300">
      <h3 className="text-sm font-bold text-forest dark:text-emerald-400 mb-6 uppercase tracking-widest font-display">About Me</h3>
      <div className="flex-grow space-y-6 text-forest/70 dark:text-emerald-100/60 text-sm leading-relaxed">
        <p>
          Hi! I am Jonathan, a SMU Information Systems student with a passion for <strong className="text-forest dark:text-white font-bold">Cloud Infrastructure</strong> and <strong className="text-forest dark:text-emerald-400 font-bold">DevOps</strong>.
        </p>
        <p>
          I am passionate about building scalable and secure systems, and I am always looking for new challenges to grow my skills! Feel free to explore my page to know more about me!
        </p>
      </div>
      <div className="mt-auto pt-6 border-t border-forest/10 dark:border-emerald-500/10">
        <p className="font-mono text-[10px] text-forest/40 dark:text-emerald-500/50 uppercase tracking-tighter">
          Targeting: DevOps / Cloud Engineering Roles
        </p>
      </div>
    </div>
  );
};