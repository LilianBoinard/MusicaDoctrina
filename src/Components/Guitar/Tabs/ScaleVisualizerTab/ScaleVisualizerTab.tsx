import React, {FC} from "react";
import ScaleVisualizerInputs from "./ScaleVisualizerInputs/ScaleVisualizerInputs.tsx";
import ScaleVisualizerAlterationButton from "./ScaleVisualizerAlterationButton/ScaleVisualizerAlterationButton.tsx";
import ScaleVisualizerInformation from "./ScaleVisualizerInformation/ScaleVisualizerInformation.tsx";
import {Fretboard} from "../../../../Context/Guitar/GuitarType.ts";
import {useFretboardContext} from "../../../../Hooks/Guitar/Fretboard/useFretboardContext.ts";

interface ScaleVisualizerTabProps {
    fretboard: Fretboard
    scaleNotes: string[] | null
    currentScaleKey: string
    setCurrentScaleKey: React.Dispatch<React.SetStateAction<string>>
    currentScaleName: string
    setCurrentScaleName: React.Dispatch<React.SetStateAction<string>>
}

const ScaleVisualizerTab: FC<ScaleVisualizerTabProps> = (
    {
        fretboard,
        scaleNotes,
        currentScaleKey,
        setCurrentScaleKey,
        currentScaleName,
        setCurrentScaleName
    }) => {

    const { alteration, setAlteration } = useFretboardContext()

    const onClickFlat = () => {
        if (alteration === 'flat') return;
        setAlteration('flat');
    };

    const onClickSharp = () => {
        if (alteration === 'sharp') return;
        setAlteration('sharp');
    };

    return (
        <>
            <div className="mt-7">
                <p className="text-xl dark:text-white">
                    Choose a music <span className="font-medium text-gray-800 dark:text-white">Scale </span>
                    to display on the Fretboard.
                </p>

                <div className="grid grid-rows gap-9 mt-7">
                    <div className="flex flex-auto gap-10">
                        <ScaleVisualizerInputs
                            currentScaleKey={currentScaleKey}
                            setCurrentScaleKey={setCurrentScaleKey}
                            currentScaleName={currentScaleName}
                            setCurrentScaleName={setCurrentScaleName}
                            alteration={alteration}
                        />
                        <ScaleVisualizerAlterationButton alteration={alteration} onClickSharp={onClickSharp} onClickFlat={onClickFlat}/>
                    </div>
                    <ScaleVisualizerInformation
                        fretboard={fretboard}
                        scaleNotes={scaleNotes}
                        currentScaleKey={currentScaleKey}
                        currentScaleName={currentScaleName}/>
                </div>
            </div>
        </>
    )
}

export default ScaleVisualizerTab