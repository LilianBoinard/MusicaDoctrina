import React, { createContext } from "react";

export interface FretboardContextType {
    stringsCount: number;
    setStringsCount: React.Dispatch<React.SetStateAction<number>>;
    fretsCount: number;
    setFretsCount: React.Dispatch<React.SetStateAction<number>>;
    dotMarkersList: number[];
    showNotesOnBoard: boolean;
    setShowNotesOnBoard: React.Dispatch<React.SetStateAction<boolean>>;
    currentTuningKey: string;
    setCurrentTuningKey: React.Dispatch<React.SetStateAction<string>>;
    currentTuningType: string;
    setCurrentTuningType: React.Dispatch<React.SetStateAction<string>>;
    alteration: 'sharp' | 'flat'
    setAlteration: React.Dispatch<React.SetStateAction<'sharp' | 'flat'>>;
}

/* --- Create Context (NO COMPONENT EXPORT) --- */
export const FretboardContext = createContext<FretboardContextType | undefined>(undefined);
