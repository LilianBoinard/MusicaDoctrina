import {FC} from "react";
import ScaleVisualizerFrets from "./Frets/ScaleVisualizerFrets.tsx";
import ScaleVisualizerTuning from "./Tuning/ScaleVisualizerTuning.tsx";
import ScaleVisualizerNote from "./Notes/ScaleVisualizerNote.tsx";
import useScaleVisualizerLogic from "../../../../Hooks/Guitar/ScaleVisualizer/useScaleVisualizerLogic.ts";

interface ScaleVisualizerProps {
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
    showNotesOnBoard: boolean
}

const ScaleVisualizer: FC<ScaleVisualizerProps> =
    ({
         stringsCoordinates,
         fretsCoordinates,
         nutSize,
         neckSize,
         showNotesOnBoard }) => {

    // Using the ScaleVisualizer Hook
    const { fretboard } = useScaleVisualizerLogic()

    return (
        <>
            {fretboard && (
                <>
                    <ScaleVisualizerFrets stringsCoordinates={stringsCoordinates} fretsCoordinates={fretsCoordinates} nutSize={nutSize} neckSize={neckSize}/>
                    <ScaleVisualizerTuning fretboard={fretboard} />
                    {Object.keys(fretboard).map(string => (
                        Object.keys(fretboard[+string]).map(fret => (
                            fretboard[+string][+fret].note && (
                                <ScaleVisualizerNote
                                    key={`note-${string}${fret}`}
                                    fretboard={fretboard}
                                    note={fretboard[+string][+fret].note}
                                    degree={fretboard[+string][+fret].degree}
                                    string={+string}
                                    fret={+fret}
                                    showNotesOnBoard={showNotesOnBoard}
                                />
                            )
                        ))
                    ))}
                </>
            )}

        </>
    )
}

export default ScaleVisualizer