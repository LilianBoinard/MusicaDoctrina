import { FC } from "react";
import {
    FinderNoteMouseOver,
    FinderScaleNotes,
    Fretboard, IFinderScaleNotes,
    SetFinderNoteMouseOver, SetFinderScaleNotes
} from "../../../../../Context/Guitar/GuitarType.ts";

interface ScaleFinderFretsProps {
    finderScaleNotes: FinderScaleNotes
    setFinderScaleNotes: SetFinderScaleNotes;
    finderNoteMouseOver: FinderNoteMouseOver
    setFinderNoteMouseOver: SetFinderNoteMouseOver
    fretboard: Fretboard
    stringsCoordinates: number[];
    fretsCoordinates: number[];
    nutSize: {
        width: number;
        height: number;
    };
    neckSize: {
        width: number;
        height: number;
    };
}

const ScaleFinderFrets: FC<ScaleFinderFretsProps> = ({
                                                         finderScaleNotes,
                                                         setFinderScaleNotes,
                                                         finderNoteMouseOver,
                                                         setFinderNoteMouseOver,
                                                         fretboard,
                                                         stringsCoordinates,
                                                         fretsCoordinates,
                                                         nutSize,
                                                         neckSize
                                                     }) => {

    if (!fretboard) throw new Error('No fretboard in ScaleFinderFrets');

    // ScaleFinderFrets.tsx

    const handleFinderFretClick = (string: number, fret: number) => {
        if (string == null || fret == null) return;

        const noteExists = finderScaleNotes.findIndex((finderNote: IFinderScaleNotes) =>
            finderNote.position.fret === fret && finderNote.position.string === string
        ) !== -1;

        if (noteExists) {
            return;
        }

        if (fretboard[string]?.[fret]?.note !== null && fretboard[string][fret].degree) {
            const newNote: IFinderScaleNotes = {
                note: fretboard[string][fret].note!,
                degree: fretboard[string][fret].degree,
                position: { string, fret }
            };
            setFinderScaleNotes([...finderScaleNotes, newNote]);
        } else {
            throw new Error("Cannot find clicked note");
        }
    }

    const handleFinderNoteMouseOver = (string: number, fret: number) => {
        if (finderNoteMouseOver && finderNoteMouseOver.string === string && finderNoteMouseOver.fret === fret) return;
        setFinderNoteMouseOver({ string, fret });
    }


    const handleFinderNoteMouseLeave = () => {
        if (finderNoteMouseOver) setFinderNoteMouseOver(null);
    }

    return (
        <>
            {fretsCoordinates.map((x: number, fret_index: number) => (
                (fret_index !== fretsCoordinates.length - 1)
                    ? (
                        <g
                            id={`fret-${fret_index}`}
                            key={`fret-${fret_index}`}
                        >
                            {stringsCoordinates.map((y: number, string_index: number) => (
                                <rect
                                    key={`fret-${fret_index}-string-${string_index}`}
                                    id={`fret-${fret_index}-string-${string_index}`}
                                    x={(x + nutSize.width)}
                                    y={y - 15}
                                    height="30"
                                    width={(fretsCoordinates[fret_index + 1] + nutSize.width) - (fretsCoordinates[fret_index] + nutSize.width)}
                                    fill="transparent"

                                    onClick={() => handleFinderFretClick(string_index + 1, fret_index + 1)}
                                    onMouseOver={() => handleFinderNoteMouseOver(string_index + 1, fret_index + 1)}
                                    onMouseOut={handleFinderNoteMouseLeave}
                                />
                            ))}
                            <line
                                key={`fret-line-${fret_index}`}
                                id={`fret-line-${fret_index}`}
                                x1={x + nutSize.width}
                                y1="0"
                                x2={x + nutSize.width}
                                y2={neckSize.height}
                                stroke="#000"
                                strokeWidth="5"
                            />
                        </g>
                    )
                    : (
                        <g key={`fret-line-${fret_index}`}>
                            <line
                                id={`fret-line-${fret_index}`}
                                x1={x + nutSize.width}
                                y1="0"
                                x2={x + nutSize.width}
                                y2={neckSize.height}
                                stroke="#000"
                                strokeWidth="5"
                            />
                        </g>
                    )
            ))}
        </>
    )
}

export default ScaleFinderFrets;
