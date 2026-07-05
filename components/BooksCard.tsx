import React, { useState, useEffect } from 'react';

interface BooksCardProps {
  onClick: () => void;
}

export const BooksCard: React.FC<BooksCardProps> = ({ onClick }) => {
  const [book, setBook] = useState<{ title: string; author: string; coverUrl: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reading')
      .then(r => r.json())
      .then(data => {
        if (data.book) setBook(data.book);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      onClick={onClick}
      className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden cursor-pointer bg-white dark:bg-obsidian-900 hover:shadow-xl no-drag"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full rounded-[2rem] overflow-hidden">
          <img
            src={book?.coverUrl || '/images/reading/books-bg.jpg'}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            alt="Books"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="relative z-20 h-full flex flex-col justify-end p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-white text-[13px] font-display drop-shadow-lg">
              {loading ? 'Loading...' : book ? 'Currently Reading' : 'Reading'}
            </h3>
            <p className="text-[9px] text-amber-300/80 font-mono uppercase tracking-wider">Goodreads</p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 md:p-4 border border-white/10 min-h-[60px] flex flex-col justify-center">
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
              <span className="text-white/50 text-[11px] font-mono">Syncing...</span>
            </div>
          ) : book ? (
            <>
              <p className="text-white font-semibold text-sm font-display leading-tight drop-shadow-md">{book.title}</p>
              <p className="text-white/60 text-[10px] font-mono mt-0.5">{book.author}</p>
            </>
          ) : (
            <p className="text-white/50 text-[11px] font-mono">Mark a book as currently reading on Goodreads</p>
          )}
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-white/60 group-hover:text-white transition-colors">
          <span className="text-[8px] font-bold uppercase tracking-wider">View Profile</span>
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
