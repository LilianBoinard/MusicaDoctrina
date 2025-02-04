// GuitarTypes.ts

import React from "react";

/** FRETBOARD TYPES */

export interface Fretboard {
    [stringNumber: number]: {
        [fretNumber: number]: {
            note: string | null;
            degree: number | null;
            position: {
                x: number;
                y: number;
            };
        };
    };
}

/** FINDER TYPES */

export interface IFinderScaleNotes {
    note: string;
    degree: number;
    position: {
        string: number;
        fret: number;
    };
}
export type FinderScaleNotes = IFinderScaleNotes[];
export type SetFinderScaleNotes = React.Dispatch<React.SetStateAction<IFinderScaleNotes[]>>;

export type Scale = {
    scale: string;
    scaleNotes: string[];
}
export type Scales = Scale[]

export interface IFinderScaleList {
    note: string;
    scales: Scales;
}
export type FinderScaleList = IFinderScaleList[];
export type SetFinderScaleList = React.Dispatch<React.SetStateAction<IFinderScaleList[]>>;

export type FinderScaleSelectedTuningNotes = string[]
export type SetFinderScaleSelectedTuningNotes = React.Dispatch<React.SetStateAction<FinderScaleSelectedTuningNotes>>

export interface IFinderNoteMouseOver {
    'string': number,
    'fret': number
}
export type FinderNoteMouseOver = IFinderNoteMouseOver | null
export type SetFinderNoteMouseOver = React.Dispatch<React.SetStateAction<IFinderNoteMouseOver | null>>;

export interface IFinderScaleToPreview {
    scaleKey: string
    scaleName: string
}

export type FinderScaleToPreview = IFinderScaleToPreview | null
export type SetFinderScaleToPreview = React.Dispatch<React.SetStateAction<IFinderScaleToPreview | null>>;