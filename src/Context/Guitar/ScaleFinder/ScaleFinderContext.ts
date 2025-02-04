import { createContext } from "react";
import {
    FinderNoteMouseOver,
    FinderScaleList,
    FinderScaleNotes,
    FinderScaleSelectedTuningNotes,
    FinderScaleToPreview,
    SetFinderNoteMouseOver,
    SetFinderScaleList,
    SetFinderScaleNotes,
    SetFinderScaleToPreview,
    SetFinderScaleSelectedTuningNotes
} from "../GuitarType.ts";

export interface ScaleFinderContextType {
    finderScaleNotes: FinderScaleNotes;
    setFinderScaleNotes: SetFinderScaleNotes
    finderScaleList: FinderScaleList
    setFinderScaleList: SetFinderScaleList;
    finderScaleSelectedTuningNotes: FinderScaleSelectedTuningNotes;
    setFinderScaleSelectedTuningNotes: SetFinderScaleSelectedTuningNotes;
    finderNoteMouseOver: FinderNoteMouseOver,
    setFinderNoteMouseOver: SetFinderNoteMouseOver,
    finderScaleToPreview: FinderScaleToPreview,
    setFinderScaleToPreview: SetFinderScaleToPreview
}

/* --- Create Context (NO COMPONENT EXPORT) --- */
export const ScaleFinderContext = createContext<ScaleFinderContextType | undefined>(undefined);