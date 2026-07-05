import React from 'react';

interface BlogCardProps {
    onClick?: () => void;
    imageUrl?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ onClick, imageUrl }) => {
    return (
        <div
            onClick={onClick}
            className="glass rounded-[2rem] h-full group transition-all duration-500 relative overflow-hidden cursor-pointer bg-white dark:bg-obsidian-900 flex flex-col justify-end p-6 hover:shadow-xl min-h-[300px]"
        >
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 z-0 p-5">
                <div className="w-full h-full rounded-2xl overflow-hidden rotate-[-3deg] scale-[1.05] shadow-xl border border-black/5 dark:border-white/10 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700 ease-out">
                    <img
                        src={imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt="Blog"
                    />
                    {/* Notion Watermark */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/10 opacity-60">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.459 4.211c.2-.243.514-.4.852-.4h15.4c.338 0 .652.157.852.4l2.126 2.583c.193.234.311.53.311.856V20.15c0 .746-.605 1.35-1.35 1.35H1.35c-.746 0-1.35-.605-1.35-1.35V7.65c0-.326.118-.622.311-.856L2.333 4.21zM5.9 7.4v11.35c0 .359.291.65.65.65h10.9c.359 0 .65-.291.65-.65V7.4H5.9zm.65-1.35a.65.65 0 100 1.3h10.9a.65.65 0 100-1.3H6.55zM17.45 7.4v11.35c0 .359.291.65.65.65h.65a.65.65 0 00.65-.65V7.4h-1.95zM4.6 7.4h1.3v11.35c0 .359-.291.65-.65.65H4.6A.65.65 0 013.95 18.75V7.4h.65z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Dark overlay — fades in on hover */}
            <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Slick Bottom Button on Hover */}
            <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl">
                    <span className="text-sm font-bold text-white tracking-tight font-display">
                        My Blog
                    </span>
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};
