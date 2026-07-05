import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
    title: string;
    date: string;
    imageUrl: string;
    url: string;
}

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BLOG_POSTS: BlogPost[] = [
    {
        title: "Apache PySpark Certification",
        date: "Jul 2026",
        imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop",
        url: "https://jonongca.notion.site/apache-certification"
    }
];

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[150] bg-black/95 flex flex-col items-center overflow-y-auto px-4 py-12 md:py-20"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-8 right-8 z-[160] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform active:scale-90 border border-white/10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <header className="text-center mb-16 space-y-4 max-w-2xl px-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.459 4.211c.2-.243.514-.4.852-.4h15.4c.338 0 .652.157.852.4l2.126 2.583c.193.234.311.53.311.856V20.15c0 .746-.605 1.35-1.35 1.35H1.35c-.746 0-1.35-.605-1.35-1.35V7.65c0-.326.118-.622.311-.856L2.333 4.21zM5.9 7.4v11.35c0 .359.291.65.65.65h10.9c.359 0 .65-.291.65-.65V7.4H5.9zm.65-1.35a.65.65 0 100 1.3h10.9a.65.65 0 100-1.3H6.55zM17.45 7.4v11.35c0 .359.291.65.65.65h.65a.65.65 0 00.65-.65V7.4h-1.95zM4.6 7.4h1.3v11.35c0 .359-.291.65-.65.65H4.6A.65.65 0 013.95 18.75V7.4h.65z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white font-display tracking-tight">Writing & Thoughts</h2>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-accent-400/60 text-[11px] font-bold uppercase tracking-widest">Personal Blog • Notion Powered</p>
                            <span className="px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-[9px] font-bold uppercase tracking-widest">
                                Updated Regularly
                            </span>
                        </div>
                    </header>

                    <div className="max-w-2xl w-full flex flex-col gap-8">
                        {/* Featured Post */}
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.a
                                key={idx}
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group flex flex-col md:flex-row gap-6 p-6 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-accent-500/30 transition-all duration-500"
                            >
                                <div className="w-full md:w-48 aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <span className="text-[10px] text-accent-400 font-bold uppercase tracking-[0.2em] font-display">Latest Chapter</span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-400 transition-colors font-display tracking-tight leading-tight">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="text-[11px] text-white/40 font-mono uppercase tracking-tighter">
                                            {post.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-white/10"></span>
                                        <span className="text-[11px] text-white/40 font-mono uppercase tracking-tighter hover:text-white transition-colors">
                                            Open in Notion
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        <div className="h-px w-full bg-white/10 my-4"></div>

                        {/* General Notion Workspace Link */}
                        <a
                            href="https://jonongca.notion.site/apache-certification"
                            target="_blank"
                            className="group p-8 rounded-[2.5rem] bg-accent-500/10 border border-accent-500/20 hover:bg-accent-500/20 transition-all duration-300 flex items-center justify-between"
                        >
                            <div>
                                <h4 className="text-white font-bold font-display text-lg mb-1">Visit My Full Notion</h4>
                                <p className="text-accent-400/60 text-xs font-medium">Read all my sharings and tech notes</p>
                            </div>
                            <div className="w-11 h-11 rounded-full bg-accent-500 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </a>
                    </div>

                    <footer className="mt-24 text-center pb-20">
                        <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
                            End of available chapters
                        </p>
                    </footer>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
