import React from 'react';
import { HistoryItem } from '../types';

interface HistoryScreenProps {
    history: HistoryItem[];
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({ history }) => {
    return (
        <div className="relative flex h-screen w-full max-w-md mx-auto flex-col font-display bg-background-light dark:bg-background-dark">
            <div className="flex-1 overflow-y-auto pb-24">
                {/* Top App Bar */}
                <header className="sticky top-0 z-10 flex flex-col gap-2 bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 backdrop-blur-sm">
                    <div className="flex h-12 items-center justify-between">
                        <div className="flex size-12 shrink-0 items-center">
                            <span className="material-symbols-outlined text-3xl text-primary">insights</span>
                        </div>
                        <div className="flex w-12 items-center justify-end">
                            <button className="flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-transparent text-gray-500 dark:text-gray-400">
                                <span className="material-symbols-outlined text-2xl">tune</span>
                            </button>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">History</h1>
                </header>

                {/* Image Grid */}
                <main className="grid grid-cols-2 gap-4 p-4">
                    {history.map((item) => {
                        const overall = Math.round((item.scores.consistency + item.scores.recognition + item.scores.sentiment + item.scores.reach) / 4);
                        let badgeColor = 'bg-green-500';
                        if (overall < 70) badgeColor = 'bg-orange-500';
                        if (overall < 50) badgeColor = 'bg-red-500';

                        return (
                            <div key={item.id} className="group relative flex flex-col gap-3">
                                <div className="relative w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                                    <div 
                                        className="w-full aspect-square bg-cover bg-center" 
                                        style={{ backgroundImage: `url('${item.imageUrl}')` }}
                                    ></div>
                                    <div className={`absolute right-2 top-2 flex items-center justify-center rounded-full ${badgeColor} px-2.5 py-1 text-xs font-semibold text-white`}>
                                        {overall}%
                                    </div>
                                </div>
                                <div>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">{item.brandName}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.timestamp}</p>
                                </div>
                            </div>
                        );
                    })}
                </main>
            </div>
        </div>
    );
};