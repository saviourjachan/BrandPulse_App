import React from 'react';

interface WelcomeScreenProps {
    onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
    return (
        <div className="relative flex h-screen min-h-screen w-full flex-col overflow-hidden" style={{ background: 'linear-gradient(45deg, #5E5CE6, #007AFF)' }}>
            <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <div className="flex-grow flex flex-col items-center justify-center w-full">
                    {/* HeadlineText Component */}
                    <h1 className="text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-6">BrandPulse</h1>
                    {/* BodyText Component */}
                    <p className="text-white/90 text-base font-normal leading-normal pb-3 pt-1">Check Your Brand's Vital Signs</p>
                </div>
                
                <div className="w-full max-w-md">
                    {/* TextGrid Component */}
                    <div className="grid grid-cols-1 gap-3 w-full mb-8">
                        <FeatureCard icon="visibility" title="Instant Visual Analysis" />
                        <FeatureCard icon="auto_awesome" title="AI-Powered Insights" />
                        <FeatureCard icon="stacked_line_chart" title="Actionable Recommendations" />
                    </div>
                    
                    {/* SingleButton Component */}
                    <div className="flex px-4 py-3 justify-center w-full">
                        <button 
                            onClick={onStart}
                            className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-[0_0_20px_rgba(0,122,255,0.5)]"
                            style={{ background: 'linear-gradient(45deg, #5E5CE6, #007AFF)' }}
                        >
                            <span className="truncate">Start Brand Scan</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

const FeatureCard = ({ icon, title }: { icon: string; title: string }) => (
    <div className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 p-4" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
        <div className="text-white flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{icon}</span>
        </div>
        <div className="flex flex-col gap-1 text-left">
            <h2 className="text-white text-base font-bold leading-tight">{title}</h2>
        </div>
    </div>
);