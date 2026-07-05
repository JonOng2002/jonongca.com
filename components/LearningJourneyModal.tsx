import React from 'react';

interface LearningJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearningJourneyModal: React.FC<LearningJourneyModalProps> = ({ isOpen, onClose }) => {
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

        <div className="relative h-48 md:h-56 rounded-t-3xl overflow-hidden shrink-0 bg-gradient-to-br from-orange-600 to-emerald-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://cdn.simpleicons.org/apachespark/FFFFFF"
              alt="Apache Spark"
              className="w-20 h-20 opacity-20"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-black text-white font-display drop-shadow-md">PySpark Certification</h2>
            <div className="text-orange-300 font-bold uppercase tracking-wider text-sm mt-1 drop-shadow-md">Databricks • Ansh Lamba Course</div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Why This Matters</h3>
            <p className="text-forest/80 dark:text-accent-100/70 leading-relaxed">
              With my current internship exposing me to Spark, I want to go deeper into distributed systems.
              Passing the Databricks certification is my immediate goal, but the real focus is understanding
              how Spark works under the hood — memory management, query optimization, fault tolerance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">The Course</h3>
            <p className="text-forest/80 dark:text-accent-100/70 leading-relaxed">
              Going through Ansh Lamba's Spark certification course on Udemy Business (courtesy of SMU).
              174 videos covering everything from Spark architecture to advanced optimization techniques.
              Taking it slow and actually enjoying the learning process.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Notion Notes</h3>
            <img
              src="/images/notion-icon.png"
              alt="Notion"
              className="w-16 h-16 rounded-2xl object-cover"
            />
          </div>

          <a
            href="https://jonongca.notion.site/apache-certification"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-accent-600 hover:bg-accent-500 text-white font-bold text-sm transition-all shadow-lg w-full"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.459 4.211c.2-.243.514-.4.852-.4h15.4c.338 0 .652.157.852.4l2.126 2.583c.193.234.311.53.311.856V20.15c0 .746-.605 1.35-1.35 1.35H1.35c-.746 0-1.35-.605-1.35-1.35V7.65c0-.326.118-.622.311-.856L2.333 4.21zM5.9 7.4v11.35c0 .359.291.65.65.65h10.9c.359 0 .65-.291.65-.65V7.4H5.9zm.65-1.35a.65.65 0 100 1.3h10.9a.65.65 0 100-1.3H6.55zM17.45 7.4v11.35c0 .359.291.65.65.65h.65a.65.65 0 00.65-.65V7.4h-1.95zM4.6 7.4h1.3v11.35c0 .359-.291.65-.65.65H4.6A.65.65 0 013.95 18.75V7.4h.65z" />
            </svg>
            Open Notion Notes
          </a>
        </div>
      </div>
    </div>
  );
};
