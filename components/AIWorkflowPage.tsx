import React, { useState, useEffect } from 'react';
import { aiWorkflow } from '../src/data/aiWorkflow';
import { AIWorkflowDiagram } from './AIWorkflowDiagram';
import { TypewriterText } from './TypewriterText';

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
  const [cascadeStep, setCascadeStep] = useState(0);
  const evidenceItems = [
    { src: aiWorkflow.workflowScreenshot, alt: "Workflow running in terminal", caption: "The workflow executing across multiple agents", section: 'evidence' },
    { src: aiWorkflow.promptExample, alt: "Example agent prompt", caption: "A sample prompt used to instruct an agent", section: 'evidence' },
    { src: aiWorkflow.outputExample, alt: "Agent output example", caption: "Example output produced by an agent", section: 'evidence' },
  ].filter((item) => item.src);

  const showEvidence = evidenceItems.length > 0;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCascadeStep(2);
      return;
    }
    const t1 = setTimeout(() => setCascadeStep(1), 400);
    const t2 = setTimeout(() => setCascadeStep(2), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="max-w-5xl mx-auto relative z-10">
      {/* Hook + Diagram + Evidence (combined) */}
      <div className="mb-12">
        <h2 className="font-mono text-sm md:text-base text-forest font-normal leading-relaxed max-w-3xl">
          <span className="text-forest-accent font-semibold">&gt; </span>
          <TypewriterText text={aiWorkflow.hook} speed={20} delay={300} />
        </h2>

        {/* Workflow diagram — immediately below the typewriter */}
        <div className="mt-8">
          <AIWorkflowDiagram />
        </div>

        {/* Workflow screenshot — directly below the diagram */}
        {aiWorkflow.workflowScreenshot && (
          <div className="mt-6">
            <EvidenceCard src={aiWorkflow.workflowScreenshot} alt="AI Agents Workflow screenshot" caption="The workflow executing across multiple agents" />
          </div>
        )}

        {/* Optional hero screenshot */}
        {aiWorkflow.heroScreenshot && (
          <div className="mt-6">
            <EvidenceCard src={aiWorkflow.heroScreenshot} alt="AI Agents Workflow overview" caption="" />
          </div>
        )}

        {/* Optional architecture diagram */}
        {aiWorkflow.architectureDiagram && (
          <div className="mt-6">
            <EvidenceCard src={aiWorkflow.architectureDiagram} alt="Architecture diagram" caption="System architecture showing agent interactions" />
          </div>
        )}

        {/* Other optional evidence (prompt, output examples) */}
        {showEvidence && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {evidenceItems.filter(item => item.src !== aiWorkflow.workflowScreenshot).map((item, i) => (
              <EvidenceCard key={i} {...item} />
            ))}
          </div>
        )}
      </div>

      {/* Section 4: Model-selection rationale */}
      <div className="mb-12">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Model Routing</h3>
        <div className="font-mono text-sm leading-relaxed space-y-3">
          <p className="text-forest/30"># Each agent uses a model selected for its specific task</p>
          {aiWorkflow.models.map((model) => (
            <div key={model.name + model.role} className="flex items-baseline gap-2 flex-wrap">
              <span className="text-forest-accent font-semibold shrink-0">$</span>
              <span className="text-forest font-bold shrink-0">{model.name}</span>
              <span className="text-forest/40 shrink-0">→</span>
              <span className="text-forest/70 font-medium">{model.role}</span>
              <span className="text-forest/30 hidden sm:inline">— {model.rationale}</span>
            </div>
          ))}
          <p className="text-forest/25 text-xs pt-2"># {aiWorkflow.evolutionNote}</p>
        </div>
      </div>

      {/* Section 5: Control & human review */}
      <div className="mb-12">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Control &amp; Review</h3>
        <div className="font-mono text-sm leading-relaxed space-y-2 mb-6">
          <div className={`cascade-line ${cascadeStep >= 1 ? 'revealed' : ''}`}>
            <p className="text-forest/30"># Every change is reviewed by a human before it ships</p>
          </div>
          <div className={`cascade-line ${cascadeStep >= 2 ? 'revealed' : ''}`} style={{ animationDelay: '0.1s' }}>
            <p className="text-forest/30"># Agents propose, plan, implement, verify — humans decide</p>
          </div>
          <div className={`cascade-line ${cascadeStep >= 2 ? 'revealed' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-forest-accent font-semibold shrink-0">$</span>
              <span className="text-forest/70">This is not an autonomous system</span>
            </div>
          </div>
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
        <h4 className="font-mono text-xs font-bold text-forest/40 mb-3"># Design Principles</h4>
        <div className="font-mono text-sm leading-relaxed space-y-1.5">
          {aiWorkflow.principles.map((principle, i) => (
            <p key={i} className="flex items-baseline gap-2">
              <span className="text-forest-accent/60 font-mono text-xs shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-forest/60">{principle}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Section 6: Limitations & future GitHub */}
      <div className="mb-10">
        <h3 className="font-serif italic text-2xl text-forest-accent mb-5">Safety</h3>
        <div className="font-mono text-sm leading-relaxed space-y-1.5">
          <p className="text-forest/30"># Agent permissions and data boundaries</p>
          {aiWorkflow.safetyNotes.map((note, i) => (
            <p key={i} className="flex items-baseline gap-2">
              <span className="text-forest-accent/60 font-mono text-xs shrink-0">✓</span>
              <span className="text-forest/60">{note}</span>
            </p>
          ))}
        </div>
        {aiWorkflow.githubUrl && (
          <div className="mt-6">
            <a
              href={aiWorkflow.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View agent configurations on GitHub (opens in new tab)"
              className="github-link inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 border border-forest/20 text-forest hover:bg-forest/5 hover:border-forest/40"
            >
              <svg className="github-link-arrow w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
