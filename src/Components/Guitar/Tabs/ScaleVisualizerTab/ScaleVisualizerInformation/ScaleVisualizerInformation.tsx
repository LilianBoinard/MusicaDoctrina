import {ScaleType} from "tonal";
import {FC} from "react";
import isTheTonic from "../../../../../Utils/Guitar/Note/isTheTonic.ts";
import {Fretboard} from "../../../../../Context/Guitar/GuitarType.ts";

interface ScaleVisualizerInformationProps {
    fretboard: Fretboard
    scaleNotes: string[] | null
    currentScaleKey: string
    currentScaleName: string
}

const ScaleVisualizerInformation: FC<ScaleVisualizerInformationProps> = (
    {
        fretboard,
        scaleNotes,
        currentScaleKey,
        currentScaleName
    }) => {

    const scaleType = ScaleType.get(`${currentScaleName}`)

    const getColor = (note: string) => {

        return isTheTonic(fretboard, note) ? "stroke-red-900" : "stroke-indigo-400"

    }

    return (
        <>
            {scaleNotes && scaleNotes.length > 0 && (
                <>
                    <h3 className="-translate-y-2 mt-4 text-4xl font-medium dark:text-white">{scaleType.name && scaleType.aliases.length > 0 ? `${currentScaleKey} ${scaleType.name}, ${scaleType.aliases.join(', ')}` : `${currentScaleKey} ${scaleType.name}`}</h3>
                    <div className="grid grid-rows-2 gap-3">

                        <div className="flex flex-row gap-2">
                            <h3 className="-translate-y-2 mt-4 text-xl font-medium dark:text-white">Notes: </h3>
                            <svg className="block w-80 h-12" viewBox="100 -5 40 40" xmlns="http://www.w3.org/2000/svg">
                                {scaleNotes.map((note, index) => (
                                    <g key={`note-${index}`}>
                                        <circle
                                            cx={index * 30}
                                            cy="13"
                                            r="12"
                                            strokeWidth="3"
                                            className={`${getColor(note)} fill-black`}
                                        />
                                        <text
                                            x={index * 30}
                                            y="13"
                                            textAnchor="middle"
                                            dy=".3em"
                                            fontFamily="sans-serif"
                                            fontSize="90%"
                                            fontWeight="bold"
                                            className="fill-gray-50"
                                        >
                                            {note}
                                        </text>
                                    </g>
                                ))}
                            </svg>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h3 className="text-xl font-medium dark:text-white">Intervals: </h3>
                            <p className="font-medium text-xl dark:text-white">{scaleType.intervals.join(" ")}</p>
                        </div>

                    </div>
                </>

            )}
        </>
    )
}

export default ScaleVisualizerInformation