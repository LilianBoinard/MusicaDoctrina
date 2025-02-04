import {FC} from "react";
import {FinderScaleNotes, Fretboard} from "../../../../../Context/Guitar/GuitarType.ts";

interface ScaleFinderPreviewTuningNoteProps {
    fretboard: Fretboard
    note: string
    string: number
    fret: number
    x: number
    y: number
    finderScaleNotes: FinderScaleNotes
}

const ScaleFinderPreviewTuningNote: FC<ScaleFinderPreviewTuningNoteProps> = (
    {
        fretboard,
        note,
        string,
        fret,
        finderScaleNotes,
        x,
        y
    }) => {

    const inSelectedNote = (note: string): boolean =>
        Array.isArray(finderScaleNotes) && finderScaleNotes.some(n => n.note === note);

    const degree = fretboard[string][fret].degree

    const getColor = (note: string): string => {
        const defaultColor = "stroke-indigo-400 fill-gray-600"
        if (finderScaleNotes.length === 0) return defaultColor
        switch (degree) {
            case 1: return "stroke-red-900 fill-gray-600";
        }
        return inSelectedNote(note) ? "stroke-green-400 fill-gray-600" : defaultColor
    }


    return (
        <>
            {x && y && (
                (note
                    ? (
                        <g>
                            <rect
                                x={x}
                                width="21"
                                height="25"
                                y={y}
                                r="1.1%"
                                strokeWidth="3.3"
                                className={`${getColor(note)}`}
                                rx="7"
                            />
                            <text
                                x={16}
                                y={y + 13.3}
                                textAnchor="middle"
                                dy=".3em"
                                fontFamily="sans-serif"
                                fontSize="100%"
                                fontWeight="bold"
                                className="fill-gray-50"
                            >
                                {note}
                            </text>
                        </g>
                    ) : (
                        <text
                            x={16}
                            y={y + 13.3}
                            textAnchor="middle"
                            dy=".3em"
                            fontFamily="sans-serif"
                            fontSize="100%"
                            fontWeight="bold"
                            className="fill-gray-50"
                        >
                            {note}
                        </text>
                    ))

            )}
        </>
    )
}

export default ScaleFinderPreviewTuningNote