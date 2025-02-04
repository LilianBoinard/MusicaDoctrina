import React, {FC} from "react";

interface NutProps {
    nutSize: {
        width: number
        height: number
    }
}

const Nut: FC<NutProps> = ({ nutSize }) => {
    return (
        <>
            <rect
                className="fill-gray-950"
                ry="3"
                width={nutSize.width}
                height={nutSize.height}
            />
        </>
    )
}

export default React.memo(Nut);