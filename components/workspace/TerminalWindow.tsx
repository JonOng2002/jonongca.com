import React, { useEffect, useRef } from 'react';
import { listDirectory } from '../../src/lib/virtual-fs';
import { CommandPreview } from '../../src/lib/commands';
import { jonongcaWordmark } from '../../src/data/jonongca-wordmark';

type TerminalWindowProps = {
  cwd: string;
  preview?: CommandPreview;
  onOpenBrowser: (path: string) => void;
  suggestions: string[];
  selectedSuggestionIndex: number;
  menuOptions: string[];
  selectedMenuIndex: number;
  input: string;
  output: string[];
  selectedIndex: number;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onSelect: (path: string) => void;
  onSidebarSelect: (path: string) => void;
  onQuickCommand: (command: string) => void;
};

const navigation = [
  { path: '~/portfolio/experience', label: 'Experience', detail: 'internships' },
  { path: '~/portfolio/projects', label: 'Projects', detail: 'University, Hackathons, Personal Productivity tools' },
  { path: '~/portfolio/skills', label: 'Skills', detail: 'My techstack and domain knowledge' },
  { path: '~/portfolio/README.md', label: 'Story', detail: 'Why I build' },
  { path: '~/portfolio/contact.json', label: 'Connect', detail: 'email & social links' },
];

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ cwd, preview, onOpenBrowser, suggestions, selectedSuggestionIndex, menuOptions, selectedMenuIndex, input, output, selectedIndex, onInputChange, onSubmit, onKeyDown, onKeyUp, onSelect, onSidebarSelect, onQuickCommand }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalScrollRef = useRef<HTMLElement>(null);
  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => {
    const terminal = terminalScrollRef.current;
    if (terminal) terminal.scrollTop = terminal.scrollHeight;
  }, [cwd, output, preview]);
  const children = listDirectory(cwd);
  const activeNav = navigation.find((item) => cwd.startsWith(item.path));

  return (
    <div className="flex h-full min-h-full bg-[var(--terminal)] font-mono text-[13px] leading-relaxed text-white/80 md:text-[13px]" onClick={() => inputRef.current?.focus()}>
      <aside className="hidden w-56 shrink-0 flex-col border-r border-[var(--terminal-rule)]/70 bg-black/20 p-4 md:flex" aria-label="Portfolio sections">
        <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--terminal-dim)]">Explore</p>
        <nav className="space-y-1">
          {navigation.map((item) => <button key={item.path} type="button" onClick={() => onSidebarSelect(item.path)} className={`w-full rounded px-2 py-2 text-left transition-colors hover:bg-[var(--terminal-accent)]/10 hover:text-[var(--terminal-accent)] ${activeNav?.path === item.path ? 'bg-[var(--terminal-accent)]/10 text-[var(--terminal-accent)]' : 'text-white/70'}`}><span className="block">{activeNav?.path === item.path ? '› ' : '  '}{item.label}</span><span className="ml-4 block text-[10px] text-[var(--terminal-green)]/70">{item.detail}</span></button>)}
        </nav>
        <div className="mt-auto border-t border-[var(--terminal-rule)] pt-4 text-[10px] text-white/45"><p>Singapore, SG</p><p className="mt-1">AI · Data · Cloud</p><a href="mailto:jonongca@gmail.com" className="mt-3 inline-flex min-h-8 items-center gap-2 text-[var(--terminal-accent)] hover:text-white" aria-label="Email Jonathan Ong"><span aria-hidden="true">✉</span> jonongca@gmail.com</a><p className="mt-3 text-white/30">© @jonongca</p></div>
      </aside>

      <details className="absolute left-3 top-3 z-10 md:hidden"><summary className="cursor-pointer list-none rounded border border-[var(--terminal-rule)] bg-[var(--terminal)] px-3 py-2 text-xs text-[var(--terminal-accent)]">Sections</summary><nav className="mt-2 w-52 rounded border border-[var(--terminal-rule)] bg-[var(--chrome)] p-2 shadow-xl">{navigation.map((item) => <button key={item.path} type="button" onClick={() => onSidebarSelect(item.path)} className="block w-full px-2 py-2 text-left text-xs text-white/75 hover:text-[var(--terminal-accent)]">{item.label}</button>)}</nav></details>

      <section className="flex h-full min-w-0 flex-1 flex-col px-5 py-5 md:px-7 md:py-6">
        <div ref={terminalScrollRef} className="min-h-0 flex-1 overflow-auto">
        <h1 className="sr-only">Jonathan Ong — AI and Data Engineering Intern at IRAS, seeking a Spring–Summer 2027 internship</h1>
        <p className="text-white/45">jon@portfolio:{cwd.replace('~/portfolio', '~')} $ ./portfolio</p>
        <div className="mt-5 grid gap-5 rounded-lg border border-[var(--terminal-accent)]/70 bg-black/20 p-4 lg:grid-cols-[minmax(0,1fr)_240px]" aria-label="Jonathan Ong welcome panel">
          <div className="flex min-h-32 flex-col justify-center"><pre className="jonongca-wordmark mb-4" aria-hidden="true">{jonongcaWordmark}</pre><p className="terminal-welcome text-xl font-semibold text-white">Welcome to jonongca.com!</p><p className="mt-3 text-[var(--terminal-green)]">AI &amp; Data Engineering Intern @ IRAS · seeking Spring–Summer 2027 internship · available Jan–Jul 2027</p><p className="mt-2 text-sm text-[var(--terminal-green)]/75">{activeNav ? activeNav.detail : 'Explore Jonathan’s work through commands or the sidebar.'}</p><p className="mt-4 font-mono text-xs text-white/45">{cwd}</p></div>
          <aside className="border-t border-[var(--terminal-rule)] pt-4 lg:sticky lg:top-4 lg:self-start lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0" aria-label="Quick start commands"><p className="text-[var(--terminal-accent)]">Getting started</p><p className="mt-1 text-xs text-white/55">Choose a command</p><div className="mt-3 space-y-1">{['/start', '/help', '/projects', '/experience', '/skills'].map((command) => <button key={command} type="button" onClick={() => onQuickCommand(command)} className="block min-h-8 w-full rounded px-2 text-left text-xs text-white hover:bg-[var(--terminal-accent)]/10 hover:text-[var(--terminal-accent)]">{command}</button>)}</div></aside>
        </div>
        {preview && <section className="mt-5 rounded-lg border border-[var(--terminal-rule)] bg-black/25 p-4" aria-label={`Terminal preview for ${preview.title}`}><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[var(--terminal-accent)]">{preview.title}</p><p className="mt-1 text-xs text-white/40">{preview.path}</p></div>{preview.route && <button type="button" onClick={() => onOpenBrowser(preview.path)} className="min-h-10 rounded border border-[var(--terminal-accent)]/60 px-3 text-xs text-white hover:bg-[var(--terminal-accent)]/10 hover:text-[var(--terminal-accent)]">Open full profile / case study</button>}</div><pre className="mt-4 max-h-40 overflow-auto whitespace-pre-wrap font-mono text-sm text-white/75">{preview.lines.join('\n')}</pre></section>}
        {output.length > 0 && <div className="mt-5 border-b border-[var(--terminal-rule)] pb-4" aria-live="polite" aria-label="Recent activity"><p className="mb-2 text-xs uppercase tracking-[0.16em] text-white/35">Recent activity</p>{output.map((line, index) => { const isCommand = line.startsWith('jon@portfolio:') || line.startsWith('/'); const isError = /^(command not found|(?:cd|cat|open|ls|tree):)/.test(line); const isSuccess = /^(opening |changed directory|Choose a section)/.test(line); const categoryClass = line.startsWith('Quick start:') ? 'text-[var(--terminal-accent)]' : line.startsWith('External:') ? 'text-[var(--terminal-green)]' : line.startsWith('Power users:') ? 'text-[#A7B6E8]' : ''; return <p key={`${index}-${line}`} className={`whitespace-pre-wrap ${isError ? 'text-[#E06B63]' : isSuccess ? 'text-[var(--terminal-green)]' : categoryClass || (isCommand ? 'text-white' : 'text-white/60')}`}>{line}</p>; })}</div>}
        {cwd !== '~/portfolio' && <div className="mt-2 space-y-1" role="listbox" aria-label="Virtual filesystem entries" aria-activedescendant={`terminal-entry-${selectedIndex}`}>
          {children.map((node, index) => <button id={`terminal-entry-${index}`} key={node.path} type="button" role="option" aria-selected={index === selectedIndex} className={`block min-h-8 w-full rounded px-2 py-1 text-left hover:bg-[var(--terminal-accent)]/15 ${index === selectedIndex ? 'bg-[var(--terminal-accent)]/10 text-[var(--terminal-accent)]' : 'text-white/75'}`} onClick={() => onSelect(node.path)}><span className="mr-3 text-white/30">{index === selectedIndex ? '›' : ' '}</span>{node.kind === 'directory' ? '▸ ' : '  '}{node.name}{node.kind === 'directory' ? '/' : ''}<span className="ml-3 text-white/35">{node.label}</span></button>)}
        </div>}
        {menuOptions.length > 0 && <div className="mb-3 rounded border border-[var(--terminal-accent)]/50 bg-black/30 p-2" role="listbox" aria-label="Start menu"><p className="px-2 pb-1 text-xs text-[var(--terminal-accent)]">Choose a section</p>{menuOptions.map((option, index) => <button key={option} type="button" role="option" aria-selected={index === selectedMenuIndex} className={`block min-h-10 w-full rounded px-3 text-left text-sm ${index === selectedMenuIndex ? 'bg-[var(--terminal-accent)]/15 text-[var(--terminal-accent)]' : 'text-white/75'} hover:bg-[var(--terminal-accent)]/10`} onClick={() => onQuickCommand(option)}><span className="mr-2 text-white/35">{index === selectedMenuIndex ? '›' : ' '}</span>{option}</button>)}</div>}
        </div>
        <div className="mt-3 shrink-0 border-t border-[var(--terminal-rule)] pt-3">
        {suggestions.length > 0 && <div className="mb-2 max-w-xs rounded border border-[var(--terminal-rule)] bg-black/40 p-0.5" role="listbox" aria-label="Command autocomplete">{suggestions.map((suggestion, index) => <button key={suggestion} type="button" role="option" aria-selected={index === selectedSuggestionIndex} className={`block min-h-7 w-full rounded px-2 text-left text-xs ${index === selectedSuggestionIndex ? 'bg-[var(--terminal-accent)]/15 text-[var(--terminal-accent)]' : 'text-white/70'} hover:bg-[var(--terminal-accent)]/10`} onClick={() => onQuickCommand(suggestion)}><span className="mr-2 text-white/35">{index === selectedSuggestionIndex ? '›' : ' '}</span>{suggestion}</button>)}</div>}
        <p className="mt-5 flex items-center text-white/70"><span aria-hidden="true">jon@portfolio:{cwd.replace('~/portfolio', '~')} $&nbsp;</span><input ref={inputRef} value={input} onChange={(event) => onInputChange(event.target.value)} onKeyDown={onKeyDown} onKeyUp={onKeyUp} aria-label="Terminal command" className="min-w-0 flex-1 bg-transparent text-white outline-none" autoComplete="off" spellCheck={false} /></p>
        <p className="mt-4 text-xs text-[var(--terminal-green)]/70">↑/↓ select · ←/→ navigate · Enter open · type “help” for commands</p>
        </div>
      </section>
    </div>
  );
};
