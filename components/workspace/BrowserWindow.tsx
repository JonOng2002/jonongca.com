import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutedPage } from '../../src/pages/RoutePages';

type BrowserWindowProps = { onClose: () => void };

export const BrowserWindow: React.FC<BrowserWindowProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="min-h-full bg-[#F7F4EC] text-[#101814]">
      <div className="flex items-center gap-2 border-b border-[#D9DDD7] bg-[#EEECE4] px-3 py-2 text-xs">
        <button type="button" aria-label="Browser back" className="min-h-8 min-w-8 rounded-lg hover:bg-black/5" onClick={() => navigate(-1)}>←</button>
        <button type="button" aria-label="Browser forward" className="min-h-8 min-w-8 rounded-lg hover:bg-black/5" onClick={() => navigate(1)}>→</button>
        <button type="button" aria-label="Refresh route" className="min-h-8 min-w-8 rounded-lg hover:bg-black/5" onClick={() => navigate(pathname)}>↻</button>
        <div aria-label="Current route" className="min-w-0 flex-1 truncate rounded-md border border-[#D9DDD7] bg-white/70 px-3 py-2 font-mono text-[11px] text-[#5A625B]">jonongca.com{pathname}</div>
        <button type="button" aria-label="Close browser" className="min-h-8 min-w-8 rounded-lg hover:bg-black/5" onClick={onClose}>×</button>
      </div>
      <div className="flex items-center gap-2 border-b border-[#D9DDD7] bg-[#F7F4EC] px-4 py-2 text-[11px] text-[#5A625B]" aria-label="Bookmarks"><span className="mr-2 font-semibold text-[#101814]">Bookmarks</span><a href="https://www.linkedin.com/in/jonathan-ong-66502a2b8" target="_blank" rel="noreferrer" aria-label="Open LinkedIn" className="inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-black/5 hover:text-[#0FA36B]"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M5.2 8.4H2.1V22h3.1V8.4ZM3.7 2A1.85 1.85 0 1 0 3.7 5.7 1.85 1.85 0 0 0 3.7 2ZM22 14.2c0-4.1-2.2-6-5.1-6-2.3 0-3.3 1.3-3.9 2.1V8.4H9.9V22H13v-6.7c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22H21v-7.8Z" /></svg>LinkedIn</a><a href="https://github.com/JonOng2002" target="_blank" rel="noreferrer" aria-label="Open GitHub" className="inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-black/5 hover:text-[#0FA36B]"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" /></svg>GitHub</a><a href="https://github.com/JonOng2002/jonongca.com" target="_blank" rel="noreferrer" className="rounded px-2 py-1 hover:bg-black/5 hover:text-[#0FA36B]">Frontend</a><a href="https://jonongca.notion.site/apache-certification" target="_blank" rel="noreferrer" aria-label="Open Notion" className="inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-black/5 hover:text-[#0FA36B]"><span aria-hidden="true" className="flex h-3.5 w-3.5 items-center justify-center border border-current text-[9px] font-bold">N</span>Notion</a></div><div className="max-h-full overflow-auto"><RoutedPage /></div>
    </div>
  );
};
