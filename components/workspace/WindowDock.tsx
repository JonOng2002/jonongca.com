import React from 'react';

type WindowDockProps = {
  terminalMinimised: boolean;
  browserAvailable: boolean;
  browserFocused: boolean;
  onTerminal: () => void;
  onBrowser: () => void;
};

export const WindowDock: React.FC<WindowDockProps> = ({ terminalMinimised, browserAvailable, browserFocused, onTerminal, onBrowser }) => (
  <nav aria-label="Workspace windows" className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-white/10 bg-[var(--chrome)]/95 p-1.5 shadow-xl backdrop-blur">
    <button type="button" onClick={onTerminal} aria-label="Focus Terminal" className={`flex min-h-11 items-center gap-2 rounded-xl px-3 font-mono text-xs text-white/75 hover:bg-white/10 ${!terminalMinimised && !browserFocused ? 'bg-white/10 text-white' : ''}`}><span aria-hidden="true">⌘</span>Terminal</button>
    <span className="h-6 w-px bg-white/10" aria-hidden="true" />
    <button type="button" onClick={onBrowser} disabled={!browserAvailable} aria-label="Focus Browser" className={`flex min-h-11 items-center gap-2 rounded-xl px-3 font-mono text-xs hover:bg-white/10 ${browserAvailable ? 'text-white/75' : 'cursor-not-allowed text-white/25'} ${browserFocused ? 'bg-white/10 text-white' : ''}`}><span aria-hidden="true">▣</span>Browser</button>
  </nav>
);
