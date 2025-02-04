import {
    FinderScaleNotes,
    FinderScaleToPreview
} from "../../../../../Context/Guitar/GuitarType.ts";
import { FC } from "react";
import useFretboardLogic from "../../../../../Hooks/Guitar/Fretboard/useFretboardLogic.ts";
import useGetScaleFretboardObject from "../../../../../Hooks/Guitar/ScaleVisualizer/useGetScaleFretboardObject.ts";
import ScaleFinderPreviewNote from "./ScaleFinderPreviewNote.tsx";
import ScaleFinderPreviewTuningNote from "./ScaleFinderPreviewTuningNote.tsx";

interface ScaleFinderScalePreviewProps {
    finderScaleNotes: FinderScaleNotes
    finderScaleToPreview: FinderScaleToPreview
}

const ScaleFinderScalePreview: FC<ScaleFinderScalePreviewProps> = (
    {
        finderScaleNotes,
        finderScaleToPreview,
    }) => {

    if (!finderScaleToPreview) throw new Error("No preview Scale")

    const {
        stringsCount,
        fretsCount,
        currentTuningKey,
        currentTuningType,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
    } = useFretboardLogic()

    // Using the ScaleVisualizer Hook
    const fretboard = useGetScaleFretboardObject({
        scaleKey: "C",
        scaleName: finderScaleToPreview.scaleName,
        tonic: finderScaleToPreview.scaleKey,
        stringsCount,
        fretsCount,
        currentTuningKey,
        currentTuningType,
        stringsCoordinates,
        fretsCoordinates,
        nutSize
    })


    return (
        <>
            {fretboard && Object.keys(fretboard).map((string, string_index) => (
                <g key={`preview-fretboard-${finderScaleToPreview.scaleKey}-${finderScaleToPreview.scaleName}--${string}`}>

                        <ScaleFinderPreviewTuningNote
                            key={`tuning-preview-note-${finderScaleToPreview.scaleKey}-${finderScaleToPreview.scaleName}-${string}`}
                            fretboard={fretboard}
                            note={fretboard[+string][0].note as string}
                            string={+string}
                            fret={0}
                            y={stringsCoordinates[string_index] - 13.3}
                            x={5.5}
                            finderScaleNotes={finderScaleNotes}
                        />
                    )

                    {Object.keys(fretboard[+string]).map(fret => (

                        fretboard[+string][+fret]['note'] && (
                            <ScaleFinderPreviewNote
                                key={`preview-note-${finderScaleToPreview.scaleKey}-${finderScaleToPreview.scaleName}-${string}-${fret}`}
                                fretboard={fretboard}
                                note={fretboard[+string][+fret].note as string}
                                string={+string}
                                fret={+fret}
                                finderScaleNotes={finderScaleNotes}
                            />
                        )
                    ))}
                </g>

            ))}
        </>
    )
}

export default ScaleFinderScalePreview