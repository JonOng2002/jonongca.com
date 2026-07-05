import React, { useState } from 'react';

export interface ExperienceDetails {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
    achievements: string[];
    logoUrl?: string;
    companyBgUrl?: string;
    galleryUrls?: string[];
}

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
    experience: ExperienceDetails | null;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose, experience }) => {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    if (!isOpen || !experience) return null;

    return (
        <>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={onClose} />

                <div className="relative bg-white dark:bg-obsidian-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-forest/10 dark:border-accent-500/20 flex flex-col animate-in fade-in zoom-in duration-300">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <div className="relative h-48 md:h-56 rounded-t-3xl overflow-hidden shrink-0">
                        {experience.companyBgUrl ? (
                            <img src={experience.companyBgUrl} alt={`${experience.company}`} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-forest to-emerald-900" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end gap-4">
                            {experience.logoUrl && (
                                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-white/30 bg-white shadow-xl translate-y-2 md:translate-y-4">
                                    <img src={experience.logoUrl} alt={`${experience.company} Logo`} className="w-full h-full object-cover" />
                                </div>
                            )}
                            <div className="pb-1 md:pb-0">
                                <h2 className="text-3xl md:text-4xl font-black text-white font-display drop-shadow-md">{experience.company}</h2>
                                <div className="text-emerald-300 font-bold uppercase tracking-wider text-sm mt-1 drop-shadow-md">{experience.role}</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-8">
                        <div className="flex items-center gap-2 text-forest/70 dark:text-accent-300">
                            <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="text-sm font-mono font-bold">{experience.period}</span>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Overview</h3>
                            <p className="text-forest/80 dark:text-accent-100/70 leading-relaxed">
                                {experience.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 bg-forest/5 dark:bg-accent-500/10 text-forest dark:text-accent-400 text-xs font-bold rounded-lg border border-forest/10 dark:border-accent-500/20">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Key Contributions</h3>
                            <div className="space-y-3">
                                {experience.achievements.map((achievement, idx) => {
                                    const highlightTerms = /(70%|100%|67%|Jenkins|GCP|SME|Terraform|Azure DevOps|CI\/CD|YAML|15\+|80%|Azure App Service)/g;
                                    return (
                                        <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-forest/5 dark:bg-accent-900/10 border border-forest/10 dark:border-accent-500/10">
                                            <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-forest/10 dark:bg-accent-800/30 flex items-center justify-center text-forest dark:text-accent-400">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <p className="text-sm text-forest/70 dark:text-accent-100/60 leading-relaxed font-medium">
                                                {achievement.split(highlightTerms).map((part, i) =>
                                                    highlightTerms.test(part) ? (
                                                        <span key={i} className="font-bold text-forest dark:text-accent-300">{part}</span>
                                                    ) : part
                                                )}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {experience.galleryUrls && experience.galleryUrls.length > 0 && (
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-accent-500/50 mb-3 border-b border-forest/10 dark:border-accent-500/10 pb-2">Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {experience.galleryUrls.map((url, idx) => (
                                        <div key={idx} className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-forest/10 dark:border-accent-500/20">
                                            <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" onClick={() => setFullscreenImage(url)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {fullscreenImage && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200" onClick={() => setFullscreenImage(null)}>
                    <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" onClick={() => setFullscreenImage(null)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <img src={fullscreenImage} alt="Fullscreen Preview" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                </div>
            )}
        </>
    );
};
