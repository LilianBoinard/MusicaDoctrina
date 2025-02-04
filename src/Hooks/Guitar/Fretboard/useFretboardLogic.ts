import React, { useState, useMemo } from "react";
import getStringsCoordinates from "../../../Utils/Guitar/Strings/getStringsCoordinates.ts";
import getFretsCoordinates from "../../../Utils/Guitar/Frets/getFretsCoordinates.ts";
import { useFretboardContext } from "./useFretboardContext.ts";

/* --- Type definitions --- */

/**
 * Interface representing the size with width and height.
 */
interface ISize {
    width: number;
    height: number;
}

/**
 * Interface representing the return type of useFretboardLogic hook.
 */
interface IFretboardLogic {
    fretboardSize: ISize;
    nutSize: ISize;
    neckSize: ISize;
    stringsCoordinates: number[];
    fretsCoordinates: number[];
    stringsCount: number;
    setStringsCount: React.Dispatch<React.SetStateAction<number>>;
    fretsCount: number;
    setFretsCount: React.Dispatch<React.SetStateAction<number>>;
    dotMarkersList: number[]
    showNotesOnBoard: boolean;
    setShowNotesOnBoard: React.Dispatch<React.SetStateAction<boolean>>;
    currentTuningKey: string;
    setCurrentTuningKey: React.Dispatch<React.SetStateAction<string>>;
    currentTuningType: string;
    setCurrentTuningType: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Custom React hook that manages and calculates the dimensions and coordinates for the fretboard visualization.
 *
 * This hook accesses global fretboard-related state from the `FretboardContext` and computes various
 * dimensions and positions required for rendering the fretboard. It utilizes memoization to optimize
 * performance by avoiding unnecessary recalculations when dependencies remain unchanged.
 *
 */
export default function useFretboardLogic(): IFretboardLogic {
    // Initialize the base size of the fretboard using React useState hook
    const [fretboardSizeCount] = useState<ISize>({ width: 1700, height: 50 });

    // Access global fretboard-related state and setters from the FretboardContext
    const {
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
    } = useFretboardContext();

    /** 📏 DIMENSION CALCULATIONS */

    /**
     * Calculates the overall size of the fretboard based on the base size and the number of strings.
     * Utilizes useMemo to memoize the calculation for performance optimization.
     */
    const fretboardSize = useMemo(() => ({
        width: fretboardSizeCount.width,
        height: (fretboardSizeCount.width / fretboardSizeCount.height) * stringsCount,
    }), [fretboardSizeCount.width, fretboardSizeCount.height, stringsCount]);

    /**
     * Defines the size of the nut based on the fretboard height.
     * Memoized to prevent unnecessary recalculations.
     */
    const nutSize = useMemo(() => ({
        width: 30,
        height: fretboardSize.height,
    }), [fretboardSize.height]);

    /**
     * Calculates the size of the neck by subtracting the nut's width from the fretboard width.
     * Memoized for performance benefits.
     */
    const neckSize = useMemo(() => ({
        width: fretboardSize.width - nutSize.width,
        height: fretboardSize.height,
    }), [fretboardSize.width, fretboardSize.height, nutSize.width]);

    /** 🎶 STRING & FRET POSITION CALCULATIONS */

    /**
     * Generates the y-coordinates for each string based on the number of strings and neck size.
     * Utilizes the getStringsCoordinates utility function and memoizes the result.
     */
    const stringsCoordinates = useMemo(() => getStringsCoordinates({ stringsCount, neckSize }), [stringsCount, neckSize]);

    /**
     * Generates the x-coordinates for each fret based on the number of frets and neck size.
     * Utilizes the getFretsCoordinates utility function and memoizes the result.
     */
    const fretsCoordinates = useMemo(() => getFretsCoordinates({ fretsCount, neckSize }), [fretsCount, neckSize]);

    /** 📤 EXPORTING VALUES */

    return {
        fretboardSize,
        nutSize,
        neckSize,
        stringsCoordinates,
        fretsCoordinates,
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
    };
}
