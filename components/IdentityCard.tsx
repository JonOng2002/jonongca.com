import React from 'react';
import { Button } from './Button';

interface IdentityCardProps {
  onViewProjects?: () => void;
}

export const IdentityCard: React.FC<IdentityCardProps> = ({ onViewProjects }) => {
  return (
    <div className="glass rounded-[20px] p-6 md:p-8 h-full flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-forest font-display tracking-tight leading-[1.1]">
        Jonathan Ong
      </h1>
      <p className="text-base md:text-lg text-forest-accent font-semibold mt-3">
        Data Engineering · AI Engineering · MLOps · Cloud
      </p>
      <p className="text-sm md:text-base text-forest/50 mt-2 max-w-md leading-relaxed">
        Building distributed systems for data and AI.
      </p>
      <div className="flex items-center gap-3 mt-5">
        <Button variant="primary" onClick={onViewProjects}>
          View Projects
        </Button>
        <Button variant="secondary" href="/resume.pdf">
          Resume
        </Button>
      </div>
    </div>
  );
};
