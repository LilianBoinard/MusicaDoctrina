import { useState, ReactNode } from "react";
import { ScaleVisualizerContext } from "./ScaleVisualizerContext";

export function ScaleVisualizerProvider({ children }: { children: ReactNode }) {

    /** 🎸 SCALE VISUALIZER STATE */
    const [scaleNotes, setScaleNotes] = useState<string[]>([]);
    const [currentScaleKey, setCurrentScaleKey] = useState<string>("C");
    const [currentScaleName, setCurrentScaleName] = useState<string>("major");


    return (
        <ScaleVisualizerContext.Provider
            value={{
                scaleNotes,
                setScaleNotes,
                currentScaleKey,
                setCurrentScaleKey,
                currentScaleName,
                setCurrentScaleName,
            }}
        >
            {children}
        </ScaleVisualizerContext.Provider>
    );
}
