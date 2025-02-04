import React, { createContext } from "react";

export interface ScaleVisualizerContextType {
    scaleNotes: string[];
    setScaleNotes: React.Dispatch<React.SetStateAction<string[]>>;
    currentScaleKey: string;
    setCurrentScaleKey: React.Dispatch<React.SetStateAction<string>>;
    currentScaleName: string;
    setCurrentScaleName: React.Dispatch<React.SetStateAction<string>>;

}

/* --- Create Context (NO COMPONENT EXPORT) --- */
export const ScaleVisualizerContext = createContext<ScaleVisualizerContextType | undefined>(undefined);