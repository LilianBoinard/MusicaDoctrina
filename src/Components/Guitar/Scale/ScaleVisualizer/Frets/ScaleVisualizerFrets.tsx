import {FC} from "react";

interface ScaleVisualizerFretsProps {
    stringsCoordinates: number[]
    fretsCoordinates: number[]
    nutSize: {
        width: number
        height: number
    }
    neckSize: {
        width: number
        height: number
    }
}

const ScaleVisualizerFrets: FC<ScaleVisualizerFretsProps> =
    ({
         stringsCoordinates,
         fretsCoordinates,
         nutSize,
         neckSize}) => {

    return (
        <>
            {fretsCoordinates.map((x, fret_index) => (
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

export default ScaleVisualizerFrets