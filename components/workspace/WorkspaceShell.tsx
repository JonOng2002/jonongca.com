import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppWindow, WindowBounds, WindowState } from './AppWindow';
import { executeCommand, parseCommand } from '../../src/lib/commands';
import { getNode, listDirectory, normalizePath, virtualRoot } from '../../src/lib/virtual-fs';
import { TerminalWindow } from './TerminalWindow';
import { WindowDock } from './WindowDock';
import { BrowserWindow } from './BrowserWindow';

type ManagedWindow = { id: string; title: string; bounds: WindowBounds; state: WindowState; zIndex: number };

const initialTerminal: ManagedWindow = { id: 'terminal', title: 'Jonathan’s Portfolio · Terminal', bounds: { x: 0, y: 0, width: 680, height: 680 }, state: 'normal', zIndex: 2 };

const browserBounds = (): WindowBounds => {
  if (typeof window !== 'undefined' && window.innerWidth >= 1440) return { x: Math.max(736, window.innerWidth - 704), y: 72, width: 680, height: 680 };
  return { x: 72, y: 56, width: 920, height: 640 };
};

export const WorkspaceShell: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [windows, setWindows] = useState<ManagedWindow[]>(() => {
    if (typeof window === 'undefined') return [initialTerminal];
    const startupWidth = Math.min(1400, Math.max(640, window.innerWidth * 0.8));
    const startupHeight = Math.min(900, Math.max(520, window.innerHeight * 0.8));
    return [{ ...initialTerminal, bounds: { ...initialTerminal.bounds, width: startupWidth, height: startupHeight, x: (window.innerWidth - startupWidth) / 2, y: Math.max(24, (window.innerHeight - startupHeight) / 2) } }];
  });
  const [nextZIndex, setNextZIndex] = useState(3);
  const [largeDesktop, setLargeDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1440);
  const [cwd, setCwd] = useState(virtualRoot);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [preview, setPreview] = useState<ReturnType<typeof executeCommand>['preview']>();
  const [menuOptions, setMenuOptions] = useState<string[]>([]);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const entries = useMemo(() => listDirectory(cwd), [cwd]);
  const commandSuggestions = useMemo(() => {
    const value = input.trim().toLowerCase();
    if (!value.startsWith('/')) return [];
    return ['/start', '/help', '/projects', '/experience', '/skills', '/resume', '/github', '/email'].filter((command) => command.startsWith(value));
  }, [input]);
  const focusBrowser = useCallback(() => {
    setNextZIndex((current) => {
      setWindows((items) => items.map((item) => item.id === 'browser'
        ? { ...item, zIndex: current, state: 'normal' }
        : item.id === 'terminal'
          ? { ...item, state: 'normal' }
          : item));
      return current + 1;
    });
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      setWindows((items) => items.filter((item) => item.id !== 'browser'));
      return;
    }
    setWindows((items) => {
      const existing = items.find((item) => item.id === 'browser');
      if (existing) {
        focusBrowser();
        return items.map((item) => item.id === 'browser' ? { ...item, title: `Jonathan’s Portfolio · Browser · ${pathname}` } : item);
      }
      const revealedItems = items.map((item) => item.id === 'terminal' ? { ...item, state: 'normal' } : item);
      const dockedItems = largeDesktop ? revealedItems.map((item) => item.id === 'terminal' ? { ...item, bounds: { ...item.bounds, x: 32, y: 72, width: Math.max(640, Math.floor(window.innerWidth * 0.48)), height: Math.min(760, window.innerHeight - 144) } } : item) : revealedItems;
      return [...dockedItems, { id: 'browser', title: `Jonathan’s Portfolio · Browser · ${pathname}`, bounds: browserBounds(), state: 'normal', zIndex: nextZIndex }];
    });
    setNextZIndex((current) => current + 1);
  }, [focusBrowser, largeDesktop, pathname]);

  const runResult = useCallback((result: ReturnType<typeof executeCommand>) => {
    if (result.clear) setOutput([]);
    else if (result.lines.length) setOutput((lines) => [...lines, ...result.lines].slice(-40));
    if (result.cwd) { setCwd(result.cwd); setSelectedIndex(0); }
    if (result.preview) setPreview(result.preview);
    setMenuOptions(result.menu ?? []);
    setSelectedMenuIndex(0);
    if (result.openRoute) { focusBrowser(); navigate(result.openRoute); }
    if (result.externalUrl) window.open(result.externalUrl, '_blank', 'noopener,noreferrer');
  }, [focusBrowser, navigate]);

  const quickCommand = (command: string) => {
    setInput(command);
    const result = executeCommand(parseCommand(command), cwd);
    setOutput((lines) => [...lines, `jon@portfolio:${cwd.replace('~/portfolio', '~')} $ ${command}`].slice(-40));
    runResult(result);
    setInput('');
  };

  const submitCommand = useCallback(() => {
    const submittedInput = commandSuggestions[selectedSuggestionIndex] ?? input;
    if (!submittedInput.trim()) {
      if (menuOptions.length > 0) {
        runResult(executeCommand(parseCommand(menuOptions[selectedMenuIndex]), cwd));
        return;
      }
      const selected = entries[selectedIndex];
      if (selected) runResult(executeCommand({ type: 'open', path: selected.path }, cwd));
      return;
    }
    const command = parseCommand(submittedInput);
    setOutput((lines) => [...lines, `jon@portfolio:${cwd.replace('~/portfolio', '~')} $ ${submittedInput}`].slice(-40));
    runResult(executeCommand(command, cwd));
    setInput('');
    setSelectedSuggestionIndex(0);
  }, [commandSuggestions, cwd, entries, input, menuOptions, runResult, selectedIndex, selectedMenuIndex, selectedSuggestionIndex]);

  const handleTerminalKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!input.trim() && menuOptions.length > 0 && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      event.preventDefault();
      setSelectedMenuIndex((index) => event.key === 'ArrowDown' ? Math.min(index + 1, menuOptions.length - 1) : Math.max(index - 1, 0));
      return;
    }
    if (commandSuggestions.length > 0 && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      event.preventDefault();
      setSelectedSuggestionIndex((index) => event.key === 'ArrowDown' ? Math.min(index + 1, commandSuggestions.length - 1) : Math.max(index - 1, 0));
      return;
    }
    if (event.key === 'ArrowDown') { event.preventDefault(); setSelectedIndex((index) => Math.min(index + 1, Math.max(0, entries.length - 1))); }
    if (event.key === 'ArrowUp') { event.preventDefault(); setSelectedIndex((index) => Math.max(0, index - 1)); }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const node = entries[selectedIndex];
      if (node?.kind === 'directory') runResult(executeCommand({ type: 'cd', path: node.path }, cwd));
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const parent = cwd.split('/').slice(0, -1).join('/') || virtualRoot;
      runResult(executeCommand({ type: 'cd', path: parent }, cwd));
    }
  };

  const handleTerminalKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') submitCommand();
  };

  const selectSidebar = (path: string) => {
    const node = getNode(path);
    if (node?.kind === 'directory') runResult(executeCommand({ type: 'cd', path }, cwd));
    else if (node) runResult(executeCommand({ type: 'cat', path }, cwd));
  };

  const selectEntry = (path: string) => {
    const index = entries.findIndex((entry) => entry.path === path);
    if (index >= 0) setSelectedIndex(index);
    const node = getNode(path);
    if (node?.kind === 'directory') runResult(executeCommand({ type: 'cd', path }, cwd));
    else if (node) runResult(executeCommand({ type: 'cat', path }, cwd));
  };

  const openBrowserPath = useCallback((path: string) => {
    runResult(executeCommand({ type: 'open', path }, cwd));
  }, [cwd, runResult]);

  const focusWindow = useCallback((id: string) => {
    setNextZIndex((current) => {
      setWindows((items) => items.map((item) => item.id === id ? { ...item, zIndex: current, state: item.state === 'minimised' ? 'normal' : item.state } : item));
      return current + 1;
    });
  }, []);

  const updateWindow = (id: string, patch: Partial<ManagedWindow>) => setWindows((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
  const terminal = windows.find((item) => item.id === 'terminal') ?? initialTerminal;
  const browser = windows.find((item) => item.id === 'browser');
  const focusTerminal = () => { if (!largeDesktop && browser) { navigate('/'); return; } focusWindow('terminal'); };

  useEffect(() => {
    const onResize = () => setLargeDesktop(window.innerWidth >= 1440);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <main className="font-terminal relative min-h-screen overflow-hidden bg-[var(--workspace)] text-white" aria-label="Jonathan Ong developer workspace">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {terminal.state !== 'maximised' && <div className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 md:left-6 md:top-6">JONONGCA.COM · WORKSPACE</div>}
      <div className="absolute inset-0 pb-20 pt-14">
        {(!browser || largeDesktop) && <AppWindow
          id={terminal.id}
          title={terminal.title}
          bounds={terminal.bounds}
          state={terminal.state}
          zIndex={terminal.zIndex}
          active={terminal.zIndex === Math.max(...windows.map((item) => item.zIndex))}
          onFocus={focusTerminal}
          onBoundsChange={(bounds) => updateWindow(terminal.id, { bounds })}
          onStateChange={(state) => updateWindow(terminal.id, { state })}
          onClose={() => updateWindow(terminal.id, { state: 'minimised' })}
        >
          <TerminalWindow cwd={cwd} preview={preview} onOpenBrowser={openBrowserPath} suggestions={commandSuggestions} selectedSuggestionIndex={selectedSuggestionIndex} menuOptions={menuOptions} selectedMenuIndex={selectedMenuIndex} input={input} output={output} selectedIndex={selectedIndex} onInputChange={setInput} onSubmit={submitCommand} onKeyDown={handleTerminalKeyDown} onKeyUp={handleTerminalKeyUp} onSelect={selectEntry} onSidebarSelect={selectSidebar} onQuickCommand={quickCommand} />
        </AppWindow>}
        {browser && (() => {
          return <AppWindow id={browser.id} title={browser.title} bounds={browser.bounds} state={browser.state} zIndex={browser.zIndex} minWidth={680} minHeight={480} active={browser.zIndex === Math.max(...windows.map((item) => item.zIndex))} onFocus={() => focusWindow(browser.id)} onBoundsChange={(bounds) => updateWindow(browser.id, { bounds })} onStateChange={(state) => updateWindow(browser.id, { state })} onClose={() => navigate('/')}><BrowserWindow onClose={() => navigate('/')} /></AppWindow>;
        })()}
      </div>
      <WindowDock terminalMinimised={terminal.state === 'minimised'} browserAvailable={Boolean(browser)} browserFocused={Boolean(browser && browser.zIndex > terminal.zIndex)} onTerminal={focusTerminal} onBrowser={() => browser ? focusBrowser() : undefined} />
    </main>
  );
};
