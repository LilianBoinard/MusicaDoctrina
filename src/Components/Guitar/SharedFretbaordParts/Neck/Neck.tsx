import React, {FC} from "react";

interface NeckProps {
    neckSize: {
        width: number
        height: number
    }
    nutWidth: number
}

const Neck: FC<NeckProps> = ({neckSize, nutWidth}) => {
    return (
        <>
            <rect
                className="fill-gray-50"
                x={nutWidth}
                ry="3"
                width={neckSize.width}
                height={neckSize.height}
            />
        </>
    )
}

export default React.memo(Neck);