export type ScreenName = 'welcome' | 'camera' | 'loading' | 'results' | 'history' | 'settings';

export interface AnalysisResult {
  scores: {
    consistency: number;
    recognition: number;
    sentiment: number;
    reach: number;
  };
  visualIdentity: {
    colors: string[];
    font: string;
  };
  personality: {
    tags: string[];
  };
  recommendations: {
    critical: string;
    quickWins: string;
    strategic: string;
  };
  imageUrl?: string;
  timestamp?: string;
  brandName?: string;
}

export interface HistoryItem extends AnalysisResult {
  id: string;
}
