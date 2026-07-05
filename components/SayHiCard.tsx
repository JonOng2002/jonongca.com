import React from 'react';

const LINKS = [
  { label: 'Resume', href: '/resume.pdf', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  )},
  { label: 'GitHub', href: 'https://github.com/JonOng2002', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
  )},
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jonathan-ong-66502a2b8', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
  )},
  { label: 'Email', href: 'mailto:jonongca@gmail.com', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  )},
];

export const SayHiCard: React.FC = () => {
  return (
    <div className="glass-mint rounded-[2rem] p-6 md:p-8 h-full flex flex-col justify-center">
      <p className="font-serif italic text-2xl md:text-3xl text-forest-accent mb-6">Say Hi</p>
      <div className="grid grid-cols-2 gap-3">
        {LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-1.5 bg-white rounded-2xl p-4 text-forest hover:bg-forest hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{ transition: 'transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease' }}
            onMouseEnter={(e) => { if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { e.currentTarget.style.transform = 'translateY(-2px) rotate(8deg)'; } }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {link.icon}
            </div>
            <span className="text-[10px] font-semibold tracking-wide">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
