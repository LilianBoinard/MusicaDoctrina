import { useState, ReactNode } from "react";
import { ScaleFinderContext } from "./ScaleFinderContext";
import {
    FinderNoteMouseOver,
    FinderScaleList,
    FinderScaleNotes,
    FinderScaleSelectedTuningNotes,
    FinderScaleToPreview
} from "../GuitarType.ts";

export function ScaleFinderProvider({ children }: { children: ReactNode }) {

    /** 🎸 SCALE FINDER STATE */
    const [finderScaleNotes, setFinderScaleNotes] = useState<FinderScaleNotes>([])
    const [finderScaleList, setFinderScaleList] = useState<FinderScaleList>([]);
    const [finderScaleSelectedTuningNotes, setFinderScaleSelectedTuningNotes] = useState<FinderScaleSelectedTuningNotes>([])
    const [finderNoteMouseOver, setFinderNoteMouseOver] = useState<FinderNoteMouseOver>(null)
    const [finderScaleToPreview, setFinderScaleToPreview] = useState<FinderScaleToPreview>(null)
    return (
        <ScaleFinderContext.Provider
            value={{
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
            }}
        >
            {children}
        </ScaleFinderContext.Provider>
    );
}
