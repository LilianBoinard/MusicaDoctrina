import {FC} from "react";
import {FinderScaleNotes, Fretboard} from "../../../../../Context/Guitar/GuitarType.ts";

interface ScaleFinderPreviewNoteProps {
    fretboard: Fretboard
    note: string
    string: number
    fret: number
    finderScaleNotes: FinderScaleNotes
}

const ScaleFinderPreviewNote: FC<ScaleFinderPreviewNoteProps> = (
    {
        fretboard,
        note,
        string,
        fret,
        finderScaleNotes
    }) => {

    const cx = fretboard[string][fret].position.x
    const cy = fretboard[string][fret].position.y

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
            {cx && cy && (
                <g
                    pointerEvents="none"

                >
                    <circle
                        cx={cx}
                        cy={cy}
                        r="13"
                        strokeWidth="3"
                        className={`${getColor(note)}`}
                    />
                    <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dy=".3em"
                        fontFamily="sans-serif"
                        fontSize="95%"
                        fontWeight="bold"
                        className="fill-gray-50"
                    >
                        {note}
                    </text>
                </g>
            )}
        </>
    )
}

export default ScaleFinderPreviewNote