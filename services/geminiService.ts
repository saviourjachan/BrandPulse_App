import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { AnalysisResult } from '../types';

const getAiClient = () => {
    // We assume process.env.API_KEY is available. 
    // In a real specific runtime, ensure this is handled safely.
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const analyzeBrandImage = async (base64Image: string): Promise<AnalysisResult> => {
    try {
        const ai = getAiClient();
        
        // Remove header if present (data:image/jpeg;base64,)
        const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");

        const prompt = `Analyze this brand image. Identify the brand (if possible) or describe the visual identity. 
        Evaluate the brand on: Consistency, Recognition, Sentiment, and Reach (0-100 scores).
        Extract the main color palette (hex codes) and identify the font style.
        Determine the brand personality (3 keywords).
        Provide 3 actionable recommendations: one Critical, one Quick Win, and one Strategic.
        
        Return the response in JSON format.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: "image/jpeg",
                            data: cleanBase64
                        }
                    },
                    {
                        text: prompt
                    }
                ]
            },
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        brandName: { type: Type.STRING },
                        scores: {
                            type: Type.OBJECT,
                            properties: {
                                consistency: { type: Type.NUMBER },
                                recognition: { type: Type.NUMBER },
                                sentiment: { type: Type.NUMBER },
                                reach: { type: Type.NUMBER },
                            }
                        },
                        visualIdentity: {
                            type: Type.OBJECT,
                            properties: {
                                colors: { 
                                    type: Type.ARRAY,
                                    items: { type: Type.STRING }
                                },
                                font: { type: Type.STRING }
                            }
                        },
                        personality: {
                            type: Type.OBJECT,
                            properties: {
                                tags: {
                                    type: Type.ARRAY,
                                    items: { type: Type.STRING }
                                }
                            }
                        },
                        recommendations: {
                            type: Type.OBJECT,
                            properties: {
                                critical: { type: Type.STRING },
                                quickWins: { type: Type.STRING },
                                strategic: { type: Type.STRING }
                            }
                        }
                    }
                }
            }
        });

        if (response.text) {
             const data = JSON.parse(response.text);
             return data as AnalysisResult;
        }
        
        throw new Error("No data returned from Gemini");

    } catch (error) {
        console.error("Gemini Analysis Failed:", error);
        // Return fallback data to avoid app crash
        return {
            brandName: "Unknown Brand",
            scores: { consistency: 50, recognition: 50, sentiment: 50, reach: 50 },
            visualIdentity: { colors: ["#CCCCCC", "#888888"], font: "Sans Serif" },
            personality: { tags: ["Neutral", "Unidentified"] },
            recommendations: { 
                critical: "Could not analyze image properly.", 
                quickWins: "Try a clearer image.", 
                strategic: "Ensure logo is visible." 
            }
        };
    }
};
