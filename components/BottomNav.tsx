import React from 'react';
import { ScreenName } from '../types';

interface BottomNavProps {
    currentScreen: ScreenName;
    onNavigate: (screen: ScreenName) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
    // Determine active tab for style purposes
    const getActive = (name: string) => {
        if (name === 'Home' && (currentScreen === 'results' || currentScreen === 'welcome')) return true;
        if (name === 'History' && currentScreen === 'history') return true;
        if (name === 'Settings' && currentScreen === 'settings') return true;
        return false;
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-background-dark/80 backdrop-blur-lg">
            <div className="mx-auto flex h-20 max-w-md items-center justify-around px-4">
                <button
                    onClick={() => onNavigate('results')}
                    className={`flex flex-col items-center gap-1 ${getActive('Home') ? 'text-white' : 'text-white/60'}`}
                >
                    <span className="material-symbols-outlined text-2xl">home</span>
                    <span className="text-xs font-medium">Home</span>
                </button>
                <button
                    onClick={() => onNavigate('history')}
                    className={`flex flex-col items-center gap-1 ${getActive('History') ? 'text-primary' : 'text-white/60'}`}
                >
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: getActive('History') ? "'FILL' 1" : "'FILL' 0" }}>history</span>
                    <span className="text-xs font-medium">History</span>
                </button>
                <button
                    onClick={() => onNavigate('settings')}
                    className={`flex flex-col items-center gap-1 ${getActive('Settings') ? 'text-primary' : 'text-white/60'}`}
                >
                    <span className="material-symbols-outlined text-2xl">settings</span>
                    <span className="text-xs font-medium">Settings</span>
                </button>
            </div>
        </nav>
    );
};