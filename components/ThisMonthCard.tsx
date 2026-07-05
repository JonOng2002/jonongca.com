import React, { useState, useEffect } from 'react';

interface Props {
  onCertClick: () => void;
}

const DONE = 85;
const TOTAL = 174;
const PCT = Math.round((DONE / TOTAL) * 100);

export const ThisMonthCard: React.FC<Props> = ({ onCertClick }) => {
  const [reading, setReading] = useState<string | null>(null);
  const [running, setRunning] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/widgets')
      .then(r => r.json())
      .then(data => {
        if (data.reading) setReading(data.reading.title);
        if (data.running && data.running.kmThisWeek) setRunning(`${data.running.kmThisWeek}km`);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="glass rounded-[2rem] p-6 md:p-8 h-full flex flex-col">
      <p className="font-serif italic text-xl text-forest-accent mb-5">This month</p>

      <div className="flex-1 space-y-4">
        <div onClick={onCertClick} className="bg-forest/5 rounded-2xl p-4 cursor-pointer group hover:bg-forest/10 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest/40">PySpark Cert</span>
            <span className="text-xs font-mono text-forest/40">{DONE}/{TOTAL} videos</span>
          </div>
          <div className="h-2 rounded-full bg-forest/10 overflow-hidden">
            <div className="h-full rounded-full bg-forest-accent transition-all duration-1000" style={{ width: `${PCT}%` }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[11px] text-forest/40 font-mono">{PCT}% complete · Databricks prep</p>
            <span className="text-[10px] text-forest-accent/0 group-hover:text-forest-accent transition-colors font-bold uppercase tracking-wider">View →</span>
          </div>
        </div>

        {reading && (
          <div className="flex items-center gap-3">
            <img src="/images/icons/goodreads.svg" className="w-5 h-5 shrink-0 opacity-60" alt="" />
            <p className="text-sm text-forest/70 leading-snug font-medium truncate">Reading {reading}</p>
          </div>
        )}

        {running && (
          <div className="flex items-center gap-3">
            <img src="https://www.vectorlogo.zone/logos/strava/strava-icon.svg" className="w-5 h-5 shrink-0 opacity-60" alt="" />
            <p className="text-sm text-forest/70 leading-snug font-medium">{running} this week</p>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 shrink-0 rounded-md bg-forest-accent/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-forest-accent" />
          </div>
          <p className="text-sm text-forest/50 leading-snug">Building systems, shipping projects, staying curious</p>
        </div>
      </div>
    </div>
  );
};
