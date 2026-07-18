import React, { useState, useEffect } from 'react';

const STATIC = {
  reading: { value: 'Designing Data-Intensive Applications' },
  running: { value: '12km this week' },
  goal: { value: 'PySpark Certification prep' },
};

export const CurrentlyIntoCard: React.FC = () => {
  const [reading, setReading] = useState(STATIC.reading.value);
  const [running, setRunning] = useState(STATIC.running.value);

  useEffect(() => {
    fetch('/api/widgets')
      .then(r => r.json())
      .then(data => {
        if (data.reading) setReading(data.reading.title);
        if (data.running?.kmThisWeek) setRunning(`${data.running.kmThisWeek}km this week`);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="glass rounded-[20px] p-6 md:p-8 h-full flex flex-col">
      <p className="font-serif italic text-2xl text-forest-accent mb-5">Currently into</p>
      <div className="space-y-4 flex-1">
        <div className="flex items-center gap-3">
          <img src="/images/icons/goodreads.svg" className="w-5 h-5 shrink-0 opacity-60" alt="" />
          <div className="min-w-0">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest/30 mb-0.5">Reading</p>
            <p className="text-sm text-forest/70 leading-snug font-medium">{reading}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="https://www.vectorlogo.zone/logos/strava/strava-icon.svg" className="w-5 h-5 shrink-0 opacity-60" alt="" />
          <div className="min-w-0">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest/30 mb-0.5">Running</p>
            <p className="text-sm text-forest/70 leading-snug font-medium">{running}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/images/icons/goal.svg" className="w-5 h-5 shrink-0 opacity-60" alt="" />
          <div className="min-w-0">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest/30 mb-0.5">Goal of the month</p>
            <p className="text-sm text-forest/70 leading-snug font-medium">{STATIC.goal.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
