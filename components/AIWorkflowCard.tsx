import React from 'react';
import { aiWorkflow } from '../src/data/aiWorkflow';

interface AIWorkflowCardProps {
  onClick: () => void;
}

export const AIWorkflowCard: React.FC<AIWorkflowCardProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="glass rounded-[20px] p-6 md:p-8 w-full text-left transition-all duration-200 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-hover)] cursor-pointer group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest/40 mb-2">
            AI Engineering
          </p>
          <h3 className="font-bold text-forest text-xl font-display leading-snug group-hover:text-forest-accent transition-colors">
            {aiWorkflow.title}
          </h3>
          <p className="text-sm text-forest/60 mt-2 max-w-xl leading-relaxed">
            {aiWorkflow.summary}
          </p>
          <div className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-forest-accent group-hover:gap-2 transition-all">
            View workflow
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-[20px] bg-forest-accent/10 shrink-0">
          <svg className="w-8 h-8 text-forest-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </button>
  );
};
