// useScaleFinderLogic.ts

import React, { useEffect } from "react";
import { useScaleFinderContext } from "./useScaleFinderContext";
import useFretboardLogic from "../Fretboard/useFretboardLogic";
import useGetScaleFretboardObject from "../ScaleVisualizer/useGetScaleFretboardObject";
import detectScale from "../../../Utils/Guitar/Finder/detectScale";
import {
    FinderNoteMouseOver, FinderScaleList,
    FinderScaleNotes, FinderScaleSelectedTuningNotes, FinderScaleToPreview,
    Fretboard, Scales,
    SetFinderNoteMouseOver, SetFinderScaleList, SetFinderScaleSelectedTuningNotes, SetFinderScaleToPreview
} from "../../../Context/Guitar/GuitarType.ts";
import getChromaticScaleNotes from "../../../Utils/Guitar/Scale/getChromaticScaleNotes.ts";
import getTuning from "../../../Utils/Guitar/Tuning/getTuning.ts";

interface UseScaleFinderLogicReturn {
    fretboard: Fretboard | null;
    tuning: (string | null)[];
    finderScaleNotes: FinderScaleNotes;
    setFinderScaleNotes: React.Dispatch<React.SetStateAction<FinderScaleNotes>>;
    finderScaleList: FinderScaleList;
    setFinderScaleList: SetFinderScaleList;
    finderScaleSelectedTuningNotes: FinderScaleSelectedTuningNotes;
    setFinderScaleSelectedTuningNotes: SetFinderScaleSelectedTuningNotes;
    finderNoteMouseOver: FinderNoteMouseOver;
    setFinderNoteMouseOver: SetFinderNoteMouseOver;
    finderScaleToPreview: FinderScaleToPreview;
    setFinderScaleToPreview: SetFinderScaleToPreview;
}

export default function useScaleFinderLogic(): UseScaleFinderLogicReturn {
    // Retrieve the finder-related state and setters from context.
    const {
        finderScaleNotes,
        setFinderScaleNotes,
        finderScaleList,
        setFinderScaleList,
        finderScaleSelectedTuningNotes,
        setFinderScaleSelectedTuningNotes,
        finderNoteMouseOver,
        setFinderNoteMouseOver,
        finderScaleToPreview,
        setFinderScaleToPreview
    } = useScaleFinderContext();

    // Retrieve fretboard configuration and tuning parameters.
    const {
        stringsCount,
        fretsCount,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
        currentTuningKey,
        currentTuningType,
    } = useFretboardLogic();

    // Generate the fretboard object using the current configuration and a chromatic scale in key "C".
    const fretboard: Fretboard | null = useGetScaleFretboardObject({
        scaleKey: "C",            // Base key for the scale (here, "C").
        scaleName: "chromatic",     // Use the chromatic scale.
        stringsCount,
        fretsCount,
        currentTuningKey,
        currentTuningType,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
    });

    // Generate the chromatic scale notes using key "C".
    const chromaticScaleNotes = getChromaticScaleNotes({ scaleKey: "C" });

    // Compute the tuning based on the current configuration.
    const tuning: (string | null)[] = getTuning({
        chromaticScaleNotes,
        currentTuningKey,
        currentTuningType,
        stringsCount,
    });

    // useEffect to detect and update the available scales based on selected notes.
    useEffect(() => {
        // If no fretboard is available, exit early.
        if (!fretboard) return;

        // If no scale notes have been selected, clear the scale list if it isn't empty.
        if (finderScaleNotes.length === 0) {
            if (finderScaleList.length > 0) {
                setFinderScaleList([]);
            }
            return;
        }

        // Build an array of selected notes.
        const selectedNotes = finderScaleNotes.map((item) =>
            // If the note is on an open string (position 0,0), use it directly.
            (item.position.string === 0 && item.position.fret === 0)
                ? item.note
                : // Otherwise, retrieve the note from the fretboard if available, or fallback to the provided note.
                (fretboard[item.position.string]?.[item.position.fret]?.note || item.note)
        );

        // Use the detectScale utility to determine possible scales based on the selected notes.
        const newScaleList: { note: string; scales: Scales }[] = detectScale({
            chromaticScaleNotes,
            notes: selectedNotes
        });

        // Update the scale list state only if the new scale list differs from the current one.
        const isDifferent = JSON.stringify(newScaleList) !== JSON.stringify(finderScaleList);
        if (isDifferent) {
            setFinderScaleList(newScaleList);
        }
    }, [finderScaleNotes, chromaticScaleNotes, fretboard, finderScaleList, setFinderScaleList]);

    // useEffect to reset finder states when tuning or fretboard configuration changes.
    useEffect(() => {
        // Clear selected finder scale notes if any exist.
        if (finderScaleNotes.length > 0) {
            setFinderScaleNotes([]);
        }
        // Clear selected tuning notes if any exist.
        if (finderScaleSelectedTuningNotes.length > 0) {
            setFinderScaleSelectedTuningNotes([]);
        }
    }, [currentTuningKey, currentTuningType, stringsCount, fretsCount]);

    // Return all necessary values and setters for the scale finder logic.
    return {
        fretboard,
        tuning,
        finderScaleNotes,
        setFinderScaleNotes,
        finderScaleList,
        setFinderScaleList,
        finderScaleSelectedTuningNotes,
        setFinderScaleSelectedTuningNotes,
        finderNoteMouseOver,
        setFinderNoteMouseOver,
        finderScaleToPreview,
        setFinderScaleToPreview
    };
}
