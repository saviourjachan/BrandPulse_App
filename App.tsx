import React, { useState } from 'react';
import { ScreenName, AnalysisResult } from './types';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { CameraScreen } from './screens/CameraScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { BottomNav } from './components/BottomNav';
import { analyzeBrandImage } from './services/geminiService';
import { INITIAL_ANALYSIS_STATE, MOCK_HISTORY } from './constants';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('welcome');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>(INITIAL_ANALYSIS_STATE);
  const [history, setHistory] = useState(MOCK_HISTORY);

  const navigate = (screen: ScreenName) => {
    setCurrentScreen(screen);
  };

  const handleCapture = async (file: File) => {
    setCurrentScreen('loading');
    
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    
    // Convert to base64 for API
    const reader = new FileReader();
    reader.onloadend = async () => {
        const base64 = reader.result as string;
        
        try {
            const result = await analyzeBrandImage(base64);
            
            // Enrich result with image URL and timestamp
            const enrichedResult = {
                ...result,
                imageUrl: imageUrl,
                timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };

            setAnalysisResult(enrichedResult);
            
            // Add to history
            setHistory(prev => [{...enrichedResult, id: Date.now().toString()}, ...prev]);
            
            setCurrentScreen('results');
        } catch (error) {
            console.error("Analysis failed", error);
            // In real app, show error toast/modal
            setCurrentScreen('camera'); 
        }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="font-display text-text-primary-light dark:text-text-primary-dark">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={() => navigate('camera')} />
      )}

      {currentScreen === 'camera' && (
        <CameraScreen 
          onBack={() => navigate('welcome')} 
          onCapture={handleCapture}
        />
      )}

      {currentScreen === 'loading' && <LoadingScreen />}

      {currentScreen === 'results' && (
        <>
          <ResultsScreen data={analysisResult} />
          <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
        </>
      )}

      {currentScreen === 'history' && (
        <>
          <HistoryScreen history={history} />
          <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
        </>
      )}

      {currentScreen === 'settings' && (
        <>
          <SettingsScreen />
          <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
        </>
      )}
    </div>
  );
}
