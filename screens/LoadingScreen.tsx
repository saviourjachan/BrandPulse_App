import React from 'react';

export const LoadingScreen: React.FC = () => {
    return (
        <div className="relative flex h-screen min-h-screen w-full flex-col bg-background-dark overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover blur-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeApA4_zudhFQDwHamVb7ursgK5v6UIXTj1gZb1-PdUH8bOMzHCITjwLRETBd25fj1T-r8AhN7y98I2O37p56u6012Eitxz9MI6n4EJ_6RD77KPqloWRvSJhIasVKaZpFy_ilNzaj1f24NW8x6NsVVk5Yjxrj227Ho1qkPYhjEN5ZcUUyYHtciVTFE341JJmbmPKc_wtny3XIRw3jPE3fn5dKCVRwsGL5jpzBgscpMsInVzZEl_N2Qpir133QNlLh4CuJrXnX_a-c")' }}></div>
            
            {/* Particle Effects (Static representation) */}
            <div className="absolute inset-0 z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse delay-200"></div>
                <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-400"></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-100"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 right-1/2 w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-200"></div>
            </div>

            {/* Main Content */}
            <div className="relative flex h-full w-full items-center justify-center p-4 z-20">
                {/* Glassmorphism Card */}
                <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
                    {/* Animated Logo */}
                    <div className="flex items-center justify-center animate-pulse">
                        <span className="material-symbols-outlined text-white/90 text-5xl">insights</span>
                    </div>
                    {/* Circular Progress Indicator */}
                    <div className="relative flex h-40 w-40 items-center justify-center">
                        <svg className="h-full w-full" viewBox="0 0 100 100">
                            {/* Background Circle */}
                            <circle className="text-white/10" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                            {/* Progress Circle */}
                            <circle 
                                className="text-primary transition-all duration-300" 
                                cx="50" cy="50" fill="transparent" r="40" 
                                stroke="currentColor" strokeLinecap="round" strokeWidth="8" 
                                strokeDasharray="251.2" strokeDashoffset="62.8" /* 75% */
                                style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                            ></circle>
                        </svg>
                        <span className="absolute text-3xl font-semibold text-white">75%</span>
                    </div>
                    {/* Dynamic Status Text */}
                    <div className="text-center">
                        <p className="text-base font-medium text-white">Analyzing visual identity...</p>
                        <p className="text-sm text-white/60 mt-1">Extracting color palette...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};