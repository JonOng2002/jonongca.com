import React, { useEffect, useRef, useState } from 'react';

export type WindowState = 'normal' | 'minimised' | 'maximised';
export type WindowBounds = { x: number; y: number; width: number; height: number };

type AppWindowProps = {
  id: string;
  title: string;
  bounds: WindowBounds;
  state: WindowState;
  zIndex: number;
  active: boolean;
  minWidth?: number;
  minHeight?: number;
  onFocus: () => void;
  onBoundsChange: (bounds: WindowBounds) => void;
  onStateChange: (state: WindowState) => void;
  onClose: () => void;
  children: React.ReactNode;
};

type PointerOperation = { mode: 'drag' | 'resize'; pointerId: number; startX: number; startY: number; bounds: WindowBounds };

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), Math.max(min, max));

export const AppWindow: React.FC<AppWindowProps> = ({
  title, bounds, state, zIndex, active, minWidth = 640, minHeight = 420,
  onFocus, onBoundsChange, onStateChange, onClose, children,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const operation = useRef<PointerOperation | null>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const beginPointerOperation = (event: React.PointerEvent, mode: 'drag' | 'resize') => {
    if (isMobile || state === 'maximised') return;
    event.preventDefault();
    onFocus();
    operation.current = { mode, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, bounds };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  const movePointerOperation = (event: React.PointerEvent) => {
    const current = operation.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const workspace = windowRef.current?.parentElement;
    const width = workspace?.clientWidth ?? window.innerWidth;
    const height = workspace?.clientHeight ?? window.innerHeight;
    const dx = event.clientX - current.startX;
    const dy = event.clientY - current.startY;
    const next = current.mode === 'drag'
      ? { ...current.bounds, x: clamp(current.bounds.x + dx, 48 - current.bounds.width, width - 48) , y: clamp(current.bounds.y + dy, 48 - current.bounds.height, height - 48) }
      : { ...current.bounds, width: clamp(current.bounds.width + dx, minWidth, width - current.bounds.x - 24), height: clamp(current.bounds.height + dy, minHeight, height - current.bounds.y - 24) };
    onBoundsChange(next);
  };

  const endPointerOperation = () => { operation.current = null; };
  const mobileClass = isMobile ? 'fixed inset-0 !transform-none !w-full !h-full !left-0 !top-0 rounded-none' : '';
  const style = isMobile
    ? { zIndex }
    : state === 'maximised'
      ? { left: 16, top: 16, width: 'calc(100% - 32px)', height: 'calc(100% - 32px)', zIndex }
      : { left: bounds.x, top: bounds.y, width: bounds.width, height: state === 'minimised' ? 48 : bounds.height, zIndex };

  return (
    <section
      ref={windowRef}
      aria-label={`${title} window`}
      className={`absolute overflow-hidden rounded-2xl border border-white/10 bg-[var(--terminal)] text-white shadow-2xl transition-[box-shadow,opacity] duration-200 ${active ? 'ring-1 ring-[var(--green-bright)]/50' : ''} ${state === 'minimised' ? 'opacity-80' : ''} ${mobileClass}`}
      style={style}
      onPointerDown={onFocus}
    >
      <header
        className="flex h-12 select-none items-center gap-3 border-b border-white/10 bg-[var(--chrome)] px-3"
        onPointerDown={(event) => beginPointerOperation(event, 'drag')}
        onPointerMove={movePointerOperation}
        onPointerUp={endPointerOperation}
        onPointerCancel={endPointerOperation}
      >
        <div className="flex gap-1.5">
          <button type="button" className="group flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10" aria-label={`Close ${title}`} onPointerDown={(e) => e.stopPropagation()} onClick={onClose}><span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#E06B63] group-hover:brightness-110" aria-hidden="true"><svg className="h-2.5 w-2.5 opacity-0 group-hover:opacity-80" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3L3 9" stroke="#5B1717" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button>
          <button type="button" className="group flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10" aria-label={`Minimise ${title}`} onPointerDown={(e) => e.stopPropagation()} onClick={() => onStateChange('minimised')}><span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#D9A441] group-hover:brightness-110" aria-hidden="true"><svg className="h-2.5 w-2.5 opacity-0 group-hover:opacity-80" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7" stroke="#674B0B" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button>
          <button type="button" className="group flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10" aria-label={`${state === 'maximised' ? 'Restore' : 'Maximise'} ${title}`} onPointerDown={(e) => e.stopPropagation()} onClick={() => onStateChange(state === 'maximised' ? 'normal' : 'maximised')}><span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#5CB85C] group-hover:brightness-110" aria-hidden="true"><svg className="h-2.5 w-2.5 opacity-0 group-hover:opacity-80" viewBox="0 0 12 12" fill="none"><path d="M2 4.5V2h2.5M10 7.5V10H7.5M2.2 2.2l3 3M9.8 9.8l-3-3" stroke="#164B1B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button>
        </div>
        <h2 className="min-w-0 flex-1 truncate font-mono text-xs text-white/75">{title}</h2>
      </header>
      {state !== 'minimised' && <div className="h-[calc(100%-3rem)] overflow-auto">{children}</div>}
      {!isMobile && state !== 'maximised' && state !== 'minimised' && <button type="button" aria-label={`Resize ${title}`} className="absolute bottom-1 right-1 h-6 w-6 cursor-nwse-resize rounded-br-xl" onPointerDown={(event) => beginPointerOperation(event, 'resize')} onPointerMove={movePointerOperation} onPointerUp={endPointerOperation} onPointerCancel={endPointerOperation}><span className="sr-only">Resize window</span><span aria-hidden="true" className="absolute bottom-1 right-1 h-3 w-3 border-b-2 border-r-2 border-white/35" /></button>}
    </section>
  );
};
