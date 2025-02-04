import React, { FC } from "react";

interface DotMarkProps {
    dotMarkersList: number[];
    fretsCoordinates: number[];
    nutWidth: number;
    neckHeight: number;
}

const DotMarkOnFretboard: FC<DotMarkProps> = ({ dotMarkersList, fretsCoordinates, nutWidth, neckHeight }) => {
    return (
        <>
            {dotMarkersList.map((fret) => (
                fret !== 12 ? (
                    <circle
                        key={`dot-${fret}`}
                        id={`dot-${fret}`}
                        cx={((fretsCoordinates[fret] + nutWidth) + (fretsCoordinates[fret - 1] + nutWidth)) / 2}
                        cy={neckHeight / 2}
                        r="5.5"
                        fill="#000"
                    />
                ) : (
                    <g key={`dot-${fret}`} id={`dots-${fret}`}>
                        <circle
                            cx={((fretsCoordinates[fret] + nutWidth) + (fretsCoordinates[fret - 1] + nutWidth)) / 2}
                            cy={2 * neckHeight / 6}
                            r="5.5"
                            fill="#000"
                        />
                        <circle
                            cx={((fretsCoordinates[fret] + nutWidth) + (fretsCoordinates[fret - 1] + nutWidth)) / 2}
                            cy={4 * neckHeight / 6}
                            r="5.5"
                            fill="#000"
                        />
                    </g>
                )
            ))}
        </>
    );
};

export default React.memo(DotMarkOnFretboard)