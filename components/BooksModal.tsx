import React from 'react';

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BooksModal: React.FC<BooksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative bg-white dark:bg-obsidian-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-forest/10 dark:border-accent-500/20 flex flex-col animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="relative h-48 md:h-56 rounded-t-3xl overflow-hidden shrink-0">
          <img
            src="/images/reading/books-bg.jpg"
            alt="Books"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-black text-white font-display drop-shadow-md">Reading</h2>
            <div className="text-amber-300 font-bold uppercase tracking-wider text-sm mt-1 drop-shadow-md">Personal Growth</div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">My Journey</h3>
            <p className="text-forest/80 dark:text-accent-100/70 leading-relaxed">
              I recently got into reading and it's helped me build a better sense of control over my life.
              From productivity systems to mental models, I'm exploring how small daily habits compound into real change.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://goodreads.com/jonongca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-lg hover:shadow-amber-900/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View Goodreads Profile
            </a>
          </div>

          <p className="text-[11px] text-forest/40 dark:text-accent-400/40 text-center font-mono">
            Always looking for book recommendations — let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};
