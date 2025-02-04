import {FC} from "react";
import {Fretboard} from "../../../../../Context/Guitar/GuitarType.ts";

interface ScaleVisualizerNotesProps {
    fretboard: Fretboard
    note: string | null
    degree: number | null
    string: number
    fret: number
    showNotesOnBoard: boolean
}

const ScaleVisualiserNote: FC<ScaleVisualizerNotesProps> = (
    {
        fretboard,
        note,
        degree,
        string,
        fret,
        showNotesOnBoard
    }) => {

    const cx = fretboard[string][fret].position.x
    const cy = fretboard[string][0].position.y


    let color = "stroke-indigo-400 fill-black";
    switch (degree) {
        case 1:
            color = "stroke-red-900";
            break;
        case 5:
            color = "stroke-blue-700 fill-black";
            break;
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
                        className={`${color} fill-black`}
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

export default ScaleVisualiserNote