import { useScaleVisualizerContext } from "./useScaleVisualizerContext.ts";
import useGetScaleFretboardObject from "./useGetScaleFretboardObject.ts";
import useFretboardLogic from "../Fretboard/useFretboardLogic.ts";
import React, {useEffect} from "react";
import {Fretboard} from "../../../Context/Guitar/GuitarType.ts";
import {useFretboardContext} from "../Fretboard/useFretboardContext.ts";
import {Note} from "tonal";

/**
 * Interface defining the return type of the useScaleVisualizerLogic hook.
 */
interface UseScaleVisualizerLogicReturn {
    fretboard: Fretboard | null
    currentScaleKey: string;
    setCurrentScaleKey: React.Dispatch<React.SetStateAction<string>>;
    currentScaleName: string;
    setCurrentScaleName: React.Dispatch<React.SetStateAction<string>>;
    scaleNotes: string[];
    setScaleNotes: React.Dispatch<React.SetStateAction<string[]>>;
}

/**
 * Custom React hook that integrates scale visualization logic with fretboard generation.
 *
 * This hook accesses scale-related state from the `ScaleVisualizerContext` and fretboard-related
 * configurations from the `useFretboardLogic` hook. It utilizes the `useGetScaleFretboardObject`
 * hook to generate the fretboard object based on the current scale and tuning settings.
 *
 */
export default function useScaleVisualizerLogic(): UseScaleVisualizerLogicReturn {
    // Extracting scale-related state and setters from the ScaleVisualizerContext
    const {
        scaleNotes,
        setScaleNotes,
        currentScaleKey,
        setCurrentScaleKey,
        currentScaleName,
        setCurrentScaleName,
    } = useScaleVisualizerContext();

    // Extracting fretboard-related configuration from the useFretboardLogic hook
    const {
        stringsCount,
        fretsCount,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
        currentTuningKey,
        currentTuningType,
    } = useFretboardLogic();

    /** 🎼 GENERATING THE FRETBOARD */

    /**
     * Generates the fretboard object based on the current scale and tuning configurations.
     * Utilizes the useGetScaleFretboardObject hook to compute the fretboard mapping.
     */
    const fretboard: Fretboard | null = useGetScaleFretboardObject({
        scaleKey: currentScaleKey,
        scaleName: currentScaleName,
        scaleNotes,
        setScaleNotes,
        stringsCount,
        fretsCount,
        currentTuningKey,
        currentTuningType,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
    });

    const { alteration } = useFretboardContext()
    // Replace current scale key by his enharmonic equivalent if alteration change
    useEffect(() => {
        setCurrentScaleKey(Note.enharmonic(currentScaleKey))
    }, [alteration]);

    return {
        fretboard,
        currentScaleKey,
        setCurrentScaleKey,
        currentScaleName,
        setCurrentScaleName,
        scaleNotes,
        setScaleNotes,
    };
}
