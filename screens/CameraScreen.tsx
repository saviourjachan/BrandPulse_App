import React, { useRef, useState, useEffect } from 'react';

interface CameraScreenProps {
    onBack: () => void;
    onCapture: (file: File) => void;
}

export const CameraScreen: React.FC<CameraScreenProps> = ({ onBack, onCapture }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        let active = true;
        const startCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ 
                    video: { facingMode: 'environment' } 
                });
                if (active && videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                    setStream(mediaStream);
                }
            } catch (err) {
                console.log("Camera access denied or unavailable, using fallback UI");
            }
        };

        startCamera();

        return () => {
            active = false;
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const handleTriggerCapture = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onCapture(e.target.files[0]);
        }
    };

    return (
        <div className="relative flex h-screen w-full max-w-md mx-auto flex-col overflow-hidden bg-background-dark font-display">
            {/* Camera View Background */}
            <div className="absolute inset-0 h-full w-full">
                {stream ? (
                     <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        muted 
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0tcbIp6kY__MkfIz4yJR_MoPXSYYgivWZvxqxntaiHWoBIVe-AoT1DoQw3bEhGpoYCCOXBKnxCgyji7Uqx0fRhFoTMU419E-VyOB3kTIzVKX0ddYx4p3cO4g1Z1UmVGDMAIX0XvIeyXU7DTEPI0s8mGYH7yXtyb8v8qLHDAsAZ_HJ9Sx2CKcYXES1AxnHE9yd3X8IhBgHhmDjApQYy6W8qycpWLwwLA3iUr3HbYEEGiGy6Ea4-UVBaxpA2PJO3pq5FrwinmSTaVI" alt="Camera background" />
                )}
            </div>

            {/* Main UI Overlay */}
            <div className="relative z-10 flex h-full flex-col justify-between">
                {/* Top App Bar (Glassmorphism) */}
                <div className="glassmorphism p-4 pt-12 pb-2">
                    <div className="flex items-center justify-between">
                        <button onClick={onBack} className="flex size-12 items-center justify-start text-white">
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </button>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">BrandPulse</h2>
                        <button className="flex size-12 items-center justify-end text-white">
                            <span className="material-symbols-outlined">info</span>
                        </button>
                    </div>
                </div>

                {/* Central Viewfinder and Tip */}
                <div className="flex flex-1 flex-col items-center justify-center px-4">
                    {/* Viewfinder */}
                    <div className="relative mb-4 h-64 w-64">
                        {/* Corners */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg animate-[pulse_2s_infinite_ease-in-out]"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg animate-[pulse_2s_infinite_ease-in-out]"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg animate-[pulse_2s_infinite_ease-in-out]"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg animate-[pulse_2s_infinite_ease-in-out]"></div>
                        {/* Crosshair */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-primary/70 animate-[spin_10s_linear_infinite]">
                                <span className="material-symbols-outlined text-4xl">add</span>
                            </div>
                        </div>
                    </div>
                    {/* Body Text */}
                    <p className="text-white text-base font-normal leading-normal text-center drop-shadow-md">Position logo within frame</p>
                    
                    {/* Tip Badge */}
                    <div className="mt-auto mb-4 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-sm">
                        <span className="material-symbols-outlined text-base text-yellow-400">lightbulb</span>
                        <p className="text-xs font-medium">Tip: Use good lighting for best results</p>
                        <button className="ml-2 text-white/50 hover:text-white">
                            <span className="material-symbols-outlined text-base">close</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Control Panel (Glassmorphism) */}
                <div className="glassmorphism p-4 pb-8">
                    <div className="flex items-center justify-center gap-8">
                        {/* Gallery Button */}
                        <button onClick={handleTriggerCapture} className="flex shrink-0 items-center justify-center rounded-full size-12 bg-black/20 text-white">
                            <span className="material-symbols-outlined">photo_library</span>
                        </button>
                        {/* Capture Button */}
                        <button onClick={handleTriggerCapture} className="flex shrink-0 items-center justify-center rounded-full size-20 bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg ring-4 ring-white/30">
                            <div className="h-16 w-16 rounded-full bg-white"></div>
                        </button>
                        {/* Flash Button */}
                        <button className="flex shrink-0 items-center justify-center rounded-full size-12 bg-black/20 text-white">
                            <span className="material-symbols-outlined">flash_on</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Hidden Input */}
            <input 
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};