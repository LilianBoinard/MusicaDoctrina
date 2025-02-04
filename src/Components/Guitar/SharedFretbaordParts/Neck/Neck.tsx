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
                className="fill-gray-50 stroke-2 stroke-gray-300 dark:fill-gray-50"
                x={nutWidth}
                ry="5"
                width={neckSize.width}
                height={neckSize.height}
            />
        </>
    )
}

export default React.memo(Neck);