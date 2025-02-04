import { useState, ReactNode } from "react";
import { FretboardContext } from "./FretboardContext.ts"; // Import the separate context

/* --- Context Provider --- */
export function FretboardProvider({ children }: { children: ReactNode }) {

    /** 🎸 FRETBOARD STATE */
    const [stringsCount, setStringsCount] = useState<number>(6);
    const [fretsCount, setFretsCount] = useState<number>(24);
    const [dotMarkersList] = useState<number[]>([3, 5, 7, 9, 12, 14, 17, 19, 21]);
    const [showNotesOnBoard, setShowNotesOnBoard] = useState<boolean>(true);
    const [currentTuningKey, setCurrentTuningKey] = useState<string>("E");
    const [currentTuningType, setCurrentTuningType] = useState<string>("standard");
    const [alteration, setAlteration] = useState<'sharp' | 'flat'>('sharp')

    return (
        <FretboardContext.Provider
            value={{
                stringsCount,
                setStringsCount,
                fretsCount,
                setFretsCount,
                dotMarkersList,
                showNotesOnBoard,
                setShowNotesOnBoard,
                currentTuningKey,
                setCurrentTuningKey,
                currentTuningType,
                setCurrentTuningType,
                alteration,
                setAlteration,
            }}
        >
            {children}
        </FretboardContext.Provider>
    );
}
