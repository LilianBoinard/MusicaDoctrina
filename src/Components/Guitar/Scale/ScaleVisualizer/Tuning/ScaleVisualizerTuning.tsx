import {FC} from "react";
import isTheTonic from "../../../../../Utils/Guitar/Note/isTheTonic.ts";
import {Fretboard} from "../../../../../Context/Guitar/GuitarType.ts";


interface ScaleVisualizerTuningProps {
    fretboard: Fretboard
}

const ScaleVisualizerTuning: FC<ScaleVisualizerTuningProps> = ({fretboard}: ScaleVisualizerTuningProps) => {

    const tuning: (string | null)[] = Object.keys(fretboard).map(
        string => fretboard[+string][0].note
    )

    const getColor = (note: string) => {

        return isTheTonic(fretboard, note) ? "stroke-red-900" : "stroke-indigo-400"

    }

    const isInFretboard = (fretboard: ScaleVisualizerTuningProps['fretboard'], note: string | null): boolean => {
        return Object.values(fretboard).some((string) =>
            Object.values(string).some((fret) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                return fret.note === note;
            })
        );
    }

    return (
        <>
            {tuning.map((note, index) => (
                note && isInFretboard(fretboard, note)) && (
                    <g key={`tuning-${index}`}>
                        <rect
                            x="5"
                            width="22"
                            height="25"
                            y={fretboard[index + 1][0].position.y - 13}
                            r="1.1%"
                            strokeWidth="3.3"
                            className={`${getColor(note)} fill-black`}
                            rx="7"
                        />
                        <text
                            x="16"
                            y={fretboard[index + 1][0].position.y}
                            textAnchor="middle"
                            dy=".3em"
                            fontFamily="sans-serif"
                            fontSize="100%"
                            fontWeight="bold"
                            className="fill-gray-50"
                        >
                            {tuning[index]}
                        </text>
                    </g>
                )
            )}
        </>
    )
}

export default ScaleVisualizerTuning