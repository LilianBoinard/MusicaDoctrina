import React, { useMemo, useEffect } from "react";
import getScaleIntervals from "../../../Utils/Guitar/Scale/getScaleIntervals.ts";
import getChromaticScaleNotes from "../../../Utils/Guitar/Scale/getChromaticScaleNotes.ts";
import generateScaleNotes from "../../../Utils/Guitar/Scale/generateScaleNotes.ts";
import getTuning from "../../../Utils/Guitar/Tuning/getTuning.ts";
import getChromaticFretboardNotes from "../../../Utils/Guitar/Scale/getChromaticFretboardNotes.ts";
import generateFretboard from "../../../Utils/Guitar/Fretboard/generateFretboard.ts";
import { Fretboard } from "../../../Context/Guitar/GuitarType.ts";

// Helper function to compare two arrays for shallow equality.
const arraysEqual = (a: any[], b: any[]): boolean => {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
};

// Define the interface for the hook's input properties.
interface UseGetScaleFretboardObjectProps {
    scaleKey: string;
    scaleName: string; 
    tonic?: string; 
    scaleNotes?: string[]; 
    setScaleNotes?: React.Dispatch<React.SetStateAction<string[]>>;
    stringsCount: number;
    fretsCount: number;
    currentTuningKey: string;
    currentTuningType: string;    
    stringsCoordinates: number[];
    fretsCoordinates: number[];   
    nutSize: {                     
        width: number;
        height: number;
    };
}

// Custom hook to generate a fretboard object based on musical and configuration parameters.
const useGetScaleFretboardObject = ({
                                        scaleKey,
                                        scaleName,
                                        tonic,
                                        scaleNotes,
                                        setScaleNotes,
                                        stringsCount,
                                        fretsCount,
                                        currentTuningKey,
                                        currentTuningType,
                                        stringsCoordinates,
                                        fretsCoordinates,
                                        nutSize,
                                    }: UseGetScaleFretboardObjectProps): Fretboard | null => {
    // Memoize the chromatic scale notes based on the provided scaleKey.
    const chromaticScaleNotes = useMemo(
        () => getChromaticScaleNotes({ scaleKey }),
        [scaleKey]
    );

    // Memoize the tuning configuration using the current parameters.
    const tuning = useMemo(() => {
        try {
            return getTuning({
                chromaticScaleNotes,
                currentTuningKey,
                currentTuningType,
                stringsCount,
            });
        } catch (error) {
            console.error("Error in getTuning:", error);
            return [];
        }
    }, [chromaticScaleNotes, currentTuningKey, currentTuningType, stringsCount]);

    // Memoize the scale intervals for the given scaleName.
    const scaleIntervals = useMemo(() => {
        try {
            return getScaleIntervals({ scaleName });
        } catch (error) {
            console.error("Error in getScaleIntervals:", error);
            return [];
        }
    }, [scaleName]);

    // Memoize the generated scale notes using the tonic (or fallback to scaleKey),
    // the computed intervals, and the chromatic scale notes.
    const generatedScaleNotes = useMemo(() => {
        return generateScaleNotes({
            rootNote: tonic || scaleKey,
            intervals: scaleIntervals,
            chromaticScaleNotes,
        });
    }, [tonic, scaleKey, scaleIntervals, chromaticScaleNotes]);

    // If an external state setter is provided, update the external scaleNotes
    // only if they differ from the computed generatedScaleNotes.
    useEffect(() => {
        if (setScaleNotes && !arraysEqual(generatedScaleNotes, scaleNotes || [])) {
            setScaleNotes(generatedScaleNotes);
        }
    }, [generatedScaleNotes, scaleNotes, setScaleNotes]);

    // Memoize the computation of fretboard notes based on tuning, fretsCount, and chromatic scale.
    const fretboardNotes = useMemo(() => {
        try {
            return getChromaticFretboardNotes({
                tuning,
                fretsCount,
                chromaticScaleNotes,
            });
        } catch (error) {
            console.error("Error in getChromaticFretboardNotes:", error);
            return [];
        }
    }, [tuning, fretsCount, chromaticScaleNotes]);

    // Generate and memoize the final fretboard object using all computed data.
    const fretboard = useMemo(() => {
        try {
            return generateFretboard({
                tuning,
                fretsCount,
                fretboardNotes,
                scaleNotes: generatedScaleNotes, // Use computed scale notes for fretboard generation.
                stringsCoordinates,
                fretsCoordinates,
                nutSize,
            });
        } catch (error) {
            console.error("Error in generateFretboard:", error);
            return null;
        }
    }, [
        tuning,
        fretsCount,
        fretboardNotes,
        generatedScaleNotes,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
    ]);

    return fretboard;
};

export default useGetScaleFretboardObject;
