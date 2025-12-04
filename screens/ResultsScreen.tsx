import React, { useState } from 'react';
import { AnalysisResult } from '../types';

interface ResultsScreenProps {
    data: AnalysisResult;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ data }) => {
    // Determine overall score
    const overallScore = Math.round(
        (data.scores.consistency + data.scores.recognition + data.scores.sentiment + data.scores.reach) / 4
    );

    const circumference = 2 * Math.PI * 16; // r=16
    const strokeDashoffset = circumference - (overallScore / 100) * circumference;

    return (
        <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark pb-28">
            {/* Sticky Header / Top App Bar */}
            <header className="sticky top-0 z-10 w-full bg-background-dark/80 backdrop-blur-lg border-b border-white/10">
                <div className="flex items-center p-4">
                    <div className="flex size-12 shrink-0 items-center justify-start">
                        <div 
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-lg" 
                            style={{ backgroundImage: `url("${data.imageUrl || ''}")` }}
                        ></div>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="relative size-16">
                            <svg className="size-full" height="36" width="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle className="stroke-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                <circle 
                                    className="stroke-primary" cx="18" cy="18" fill="none" r="16" 
                                    strokeDasharray={`${circumference} ${circumference}`} 
                                    strokeDashoffset={strokeDashoffset} 
                                    strokeLinecap="round" strokeWidth="3" 
                                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-lg font-bold">{overallScore}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-24 shrink-0 items-center justify-end gap-2">
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-white/10 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em]">
                            <span className="material-symbols-outlined text-xl">bookmark_border</span>
                        </button>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-white/10 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em]">
                            <span className="material-symbols-outlined text-xl">ios_share</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 space-y-6 px-4 pt-6">
                {/* Score Summary Card */}
                <section className="glassmorphism rounded-xl shadow-lg">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5 pb-3">Score Summary</h2>
                    <div className="grid grid-cols-2 gap-4 p-4 pt-0">
                        <ScoreCard label="Consistency" score={data.scores.consistency} />
                        <ScoreCard label="Recognition" score={data.scores.recognition} />
                        <ScoreCard label="Sentiment" score={data.scores.sentiment} />
                        <ScoreCard label="Reach" score={data.scores.reach} />
                    </div>
                </section>

                {/* Visual Identity Card */}
                <section className="glassmorphism rounded-xl shadow-lg">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5 pb-3">Visual Identity</h2>
                    <div className="flex flex-col gap-4 p-4 pt-0">
                        <div className="flex flex-wrap items-center gap-3">
                            {data.visualIdentity.colors.map((color, i) => (
                                <div key={i} className="size-10 rounded-full border border-white/20" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                        <div className="flex items-baseline gap-4">
                            <p className="text-white text-3xl font-bold">Aa</p>
                            <p className="text-white/80 text-base">{data.visualIdentity.font}</p>
                        </div>
                    </div>
                </section>

                {/* Brand Personality Card */}
                <section className="glassmorphism rounded-xl shadow-lg p-4">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pt-1 pb-3">Brand Personality</h2>
                    <div className="flex items-center gap-4 py-2">
                        <span className="text-5xl">⚡️</span>
                        <div className="flex flex-wrap gap-2">
                            {data.personality.tags.map(tag => (
                                <span key={tag} className="inline-block bg-primary/30 text-blue-300 px-3 py-1 text-sm font-medium rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recommendations Accordion */}
                <section className="glassmorphism rounded-xl shadow-lg p-4">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pt-1 pb-3">Recommendations</h2>
                    <div className="space-y-2">
                        <RecommendationDetails title="Critical" content={data.recommendations.critical} />
                        <RecommendationDetails title="Quick Wins" content={data.recommendations.quickWins} />
                        <RecommendationDetails title="Strategic" content={data.recommendations.strategic} />
                    </div>
                </section>
            </main>
        </div>
    );
};

const ScoreCard = ({ label, score }: { label: string; score: number }) => (
    <div className="flex flex-col gap-2 rounded-lg p-4 bg-white/5">
        <p className="text-white/80 text-base font-medium leading-normal">{label}</p>
        <p className="text-white tracking-light text-2xl font-bold leading-tight">{score}/100</p>
    </div>
);

const RecommendationDetails = ({ title, content }: { title: string; content: string }) => (
    <details className="group rounded-lg bg-white/5" open={title === 'Critical'}>
        <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-white">
            {title}
            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <p className="p-4 pt-0 text-white/70">{content}</p>
    </details>
);