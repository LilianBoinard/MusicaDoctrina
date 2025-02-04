import React, {FC} from "react";

interface DotMarkProps {
    fretboardSize: {
        width: number
        height: number
    }
    dotMarkersList: number[]
    fretsCoordinates: number[]
    nutWidth: number
}

const DotMarkOnBottom: FC<DotMarkProps> = ({fretboardSize, dotMarkersList, fretsCoordinates, nutWidth}) => {
    return (
        <>
            <rect className="fill-gray-950"
                  x="0"
                  y="0"
                  ry="3"
                  width={`${fretboardSize.width}`}  // Match the width of the first SVG
                  height="12">
            </rect>

            {dotMarkersList.map((fret) => (
                fret !== 12 ? (
                    <circle
                        key={`dot-${fret}`}
                        id={`dot-${fret}`}
                        className="fill-indigo-500"
                        cx={((fretsCoordinates[fret] + nutWidth) + (fretsCoordinates[fret - 1] + nutWidth)) / 2}
                        cy="8"
                        r="3"
                    />
                ) : (
                    <g
                        key={`dot-${fret}`}
                        id={`dots-${fret}`}
                        className="fill-indigo-500">
                        <circle
                            cx={(((fretsCoordinates[fret] + nutWidth) + (fretsCoordinates[fret - 1] + nutWidth)) / 2) - 10}
                            cy="8"
                            r="3"
                        />
                        <circle
                            cx={(((fretsCoordinates[fret] + nutWidth) + (fretsCoordinates[fret - 1] + nutWidth)) / 2) + 10}
                            cy="8"
                            r="3"
                        />
                    </g>
                )
            ))}
        </>
    )
}

export default React.memo(DotMarkOnBottom)