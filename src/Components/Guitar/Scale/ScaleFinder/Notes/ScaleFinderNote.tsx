import {FC} from "react";
import {
    FinderNoteMouseOver,
    FinderScaleNotes,
    Fretboard, SetFinderNoteMouseOver,
    SetFinderScaleNotes
} from "../../../../../Context/Guitar/GuitarType.ts";



interface ScaleFinderNotesProps {
    note: string | null
    string: number
    fret: number
    showNotesOnBoard: boolean
    fretboard: Fretboard
    finderScaleNotes: FinderScaleNotes
    setFinderScaleNotes: SetFinderScaleNotes
    finderNoteMouseOver: FinderNoteMouseOver
    setFinderNoteMouseOver: SetFinderNoteMouseOver
    tonicNote: string
}

const ScaleFinderNote: FC<ScaleFinderNotesProps> = (
    {
        note,
        string,
        fret,
        showNotesOnBoard,
        finderScaleNotes,
        setFinderScaleNotes,
        finderNoteMouseOver,
        setFinderNoteMouseOver,
        fretboard,
        tonicNote
    }) => {

    if (!string || !fret) return

    const cx = fretboard[string][fret].position.x
    const cy = fretboard[string][fret].position.y

    const getColor = (note: string) => {
        if (note === tonicNote) {
            return "stroke-red-900";
        }
        return "stroke-green-400 fill-black";
    };

    const handleFinderNoteClick = (string: number, fret: number) => {

        const noteIndex = finderScaleNotes.findIndex(
            finderNote => finderNote.position.string === string && finderNote.position.fret === fret
        )

        if (noteIndex !== -1) {
            setFinderScaleNotes(
                finderScaleNotes.filter(
                    item => item.position.string !== string || item.position.fret !== fret
                )
            );
        }
    }

    const handleFinderNoteMouseOver = () => {
        if (!finderNoteMouseOver) return
        setFinderNoteMouseOver(null)

    }

    return (
        <>
            {cx && cy && note && (
                <g
                    onClick={() => handleFinderNoteClick(string, fret)}
                    onMouseOver={() => handleFinderNoteMouseOver}

                >
                    <circle
                        cx={cx}
                        cy={cy}
                        r="13"
                        strokeWidth="3"
                        className={`${getColor(note)} `}
                    />
                    {showNotesOnBoard && (
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
                    )}
                </g>
            )}
        </>
    )
}

export default ScaleFinderNote