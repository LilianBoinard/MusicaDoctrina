import React, {FC} from "react";

interface StringsProps {
    stringsCoordinates: number[]
    neckWidth: number
    nutWidth: number
}

const Strings: FC<StringsProps> = ({stringsCoordinates, neckWidth, nutWidth}) => {
    return (
        <>
            {stringsCoordinates.map((y, index) => (
                <line
                    key={`string-${index}`}
                    id={`string-${index}`}
                    x1={nutWidth}
                    y1={y}
                    x2={neckWidth + nutWidth}
                    y2={y}
                    stroke="#000"
                    strokeWidth={((stringsCoordinates.length + 1) - index).toLocaleString()}
                />
            ))}
        </>
    )
}

export default React.memo(Strings)