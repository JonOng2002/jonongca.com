import React, { useState } from 'react';
import { aiWorkflow } from '../src/data/aiWorkflow';
import { AIWorkflowDiagram } from './AIWorkflowDiagram';

const EvidenceCard: React.FC<{ src: string; alt: string; caption: string }> = ({
  src,
  alt,
  caption,
}) => {
  const [hidden, setHidden] = useState(false);
  if (!src || hidden) return null;
  return (
    <div className="glass rounded-[20px] overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto object-cover"
        onError={() => setHidden(true)}
      />
      {caption && (
        <div className="px-5 py-3 border-t border-[var(--border)]">
          <p className="text-xs text-forest/50 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

export const AIWorkflowPage: React.FC = () => {
  const evidenceItems = [
    { src: aiWorkflow.workflowScreenshot, alt: "Workflow running in terminal", caption: "The workflow executing across multiple agents", section: 'evidence' },
    { src: aiWorkflow.promptExample, alt: "Example agent prompt", caption: "A sample prompt used to instruct an agent", section: 'evidence' },
    { src: aiWorkflow.outputExample, alt: "Agent output example", caption: "Example output produced by an agent", section: 'evidence' },
  ].filter((item) => item.src);

  const showEvidence = evidenceItems.length > 0;

  return (
    <div className="max-w-5xl mx-auto relative z-10">
      {/* Section 1: Hook */}
      <div className="mb-12">
        <h2 className="font-serif italic text-3xl md:text-4xl text-forest-accent leading-snug mb-5">
          {aiWorkflow.hook}
        </h2>
        <p className="text-forest/70 text-base md:text-lg leading-relaxed max-w-3xl">
          {aiWorkflow.summary}
        </p>
        {aiWorkflow.heroScreenshot && (
          <div className="mt-6">
            <EvidenceCard
              src={aiWorkflow.heroScreenshot}
              alt="AI Agents Workflow overview"
              caption=""
            />
          </div>
        )}
      </div>

      {/* Section 2: Workflow */}
      <div className="mb-12">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Workflow</h3>
        <AIWorkflowDiagram />
        {aiWorkflow.architectureDiagram && (
          <div className="mt-6">
            <EvidenceCard
              src={aiWorkflow.architectureDiagram}
              alt="Architecture diagram"
              caption="System architecture showing agent interactions"
            />
          </div>
        )}
      </div>

      {/* Section 3: Visual evidence (conditional) */}
      {showEvidence && (
        <div className="mb-12">
          <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Evidence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {evidenceItems.map((item, i) => (
              <EvidenceCard key={i} {...item} />
            ))}
          </div>
        </div>
      )}

      {/* Section 4: Model-selection rationale */}
      <div className="mb-12">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Model Selection</h3>
        <p className="text-forest/60 text-sm mb-5 leading-relaxed">
          Each agent uses a model selected for the specific task it performs. The same model
          can serve different roles depending on the demands of the phase.
        </p>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-wider text-forest/40">Model</th>
                <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-wider text-forest/40">Role</th>
                <th className="pb-3 text-xs font-bold uppercase tracking-wider text-forest/40">Rationale</th>
              </tr>
            </thead>
            <tbody>
              {aiWorkflow.models.map((model, i) => (
                <tr key={model.name + model.role} className="border-b border-[var(--border)] last:border-0">
                  <td className="py-3 pr-4 align-top">
                    <span className="font-bold text-forest text-sm font-display whitespace-nowrap">
                      {model.name}
                    </span>
                  </td>
                  <td className="py-3 pr-4 align-top">
                    <span className="text-xs text-forest/50 font-semibold uppercase tracking-wider whitespace-nowrap">
                      {model.role}
                    </span>
                  </td>
                  <td className="py-3 align-top">
                    <span className="text-sm text-forest/60 leading-relaxed">
                      {model.rationale}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-forest/40 mt-4 italic">{aiWorkflow.evolutionNote}</p>
      </div>

      {/* Section 5: Control & human review */}
      <div className="mb-12">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Control &amp; Human Review</h3>
        <div className="glass-mint rounded-[20px] p-6 md:p-8 mb-6">
          <p className="text-forest/70 text-base leading-relaxed">
            Every change produced by this workflow is reviewed by a human before it ships. The
            agents propose, plan, implement, and verify — but a human decides what to accept,
            reject, or revise. This is not an autonomous system.
          </p>
        </div>
        {aiWorkflow.reviewScreenshot && (
          <div className="mb-6">
            <EvidenceCard
              src={aiWorkflow.reviewScreenshot}
              alt="Human review process"
              caption="A human reviewing an agent's output before approving"
            />
          </div>
        )}
        <h4 className="font-bold text-forest text-base font-display mb-3">Design Principles</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {aiWorkflow.principles.map((principle, i) => (
            <div key={i} className="glass rounded-[20px] p-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-forest-accent shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-forest/70 leading-relaxed">{principle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: Limitations & future GitHub */}
      <div className="mb-10">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Implementation Notes</h3>
        <div className="glass rounded-[20px] p-6 md:p-8 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest/40 mb-2">Safety</h4>
            <ul className="space-y-2">
              {aiWorkflow.safetyNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-forest-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-forest/60 leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {aiWorkflow.githubUrl && (
          <div className="mt-6">
            <a
              href={aiWorkflow.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View agent configurations on GitHub (opens in new tab)"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 border border-forest/20 text-forest hover:bg-forest/5 hover:border-forest/40"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View agent configurations
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
