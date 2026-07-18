import React from 'react';
import { aiWorkflow } from '../src/data/aiWorkflow';

export const AIWorkflowDiagram: React.FC = () => {
  return (
    <div className="w-full">
      {/* Screen reader text alternative */}
      <h3 className="sr-only">Workflow steps</h3>
      <ol className="sr-only">
        {aiWorkflow.steps.map((step, i) => (
          <li key={i}>
            {step.agent} ({step.model}): {step.description}
          </li>
        ))}
      </ol>

      {/* Visual diagram */}
      <div
        className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2 md:flex-wrap lg:flex-nowrap"
        aria-hidden="true"
      >
        {aiWorkflow.steps.map((step, i) => (
          <React.Fragment key={i}>
            {/* Input step: minimal label */}
            {step.agent === 'Input' ? (
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-forest/40 whitespace-nowrap">
                  {step.role}
                </span>
              </div>
            ) : step.agent === 'Human Review' ? (
              /* Human Review step: visually distinct */
              <div className="glass-mint rounded-[20px] p-4 flex-1 min-w-[140px] md:min-w-[120px] border border-accent-500/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <svg
                    className="w-4 h-4 text-forest-accent shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-bold text-forest text-sm font-display">
                    {step.agent}
                  </span>
                </div>
                <p className="text-[10px] text-forest/50 font-semibold uppercase tracking-wider mb-1">
                  {step.model}
                </p>
                <p className="text-[11px] text-forest/60 leading-tight">
                  {step.shortLabel}
                </p>
              </div>
            ) : (
              /* Agent steps: standard glass card */
              <div className="glass rounded-[20px] p-4 flex-1 min-w-[140px] md:min-w-[120px]">
                <p className="text-[10px] text-forest/40 font-bold uppercase tracking-wider mb-1">
                  {step.role}
                </p>
                <p className="font-bold text-forest text-sm font-display">
                  {step.agent}
                </p>
                <p className="text-[11px] text-forest/50 font-semibold mt-0.5">
                  {step.model}
                </p>
                <p className="text-[11px] text-forest/60 leading-tight mt-1.5">
                  {step.shortLabel}
                </p>
              </div>
            )}

            {/* Arrow between steps */}
            {i < aiWorkflow.steps.length - 1 && (
              <div className="flex items-center justify-center shrink-0 w-5 h-5 rotate-90 md:rotate-0 md:w-5 md:h-5">
                <svg
                  className="w-4 h-4 text-forest/15"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
