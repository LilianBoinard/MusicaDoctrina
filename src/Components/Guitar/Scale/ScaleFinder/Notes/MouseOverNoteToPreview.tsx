import {FC} from "react";
import ScaleFinderPreviewNote from "./ScaleFinderPreviewNote.tsx";
import {FinderNoteMouseOver, FinderScaleNotes, Fretboard} from "../../../../../Context/Guitar/GuitarType.ts";

interface MouseOverNoteToPreviewProps {
    fretboard: Fretboard
    finderNoteMouseOver: FinderNoteMouseOver
    finderScaleNotes: FinderScaleNotes
}

const MouseOverNoteToPreview: FC<MouseOverNoteToPreviewProps> = (
    {
        fretboard,
        finderNoteMouseOver,
        finderScaleNotes
    }) => {

    return (
        <>
            {finderNoteMouseOver && (
                <ScaleFinderPreviewNote
                    fretboard={fretboard}
                    note={fretboard[finderNoteMouseOver.string][finderNoteMouseOver.fret]['note'] || ""}
                    string={finderNoteMouseOver.string}
                    fret={finderNoteMouseOver.fret}
                    finderScaleNotes={finderScaleNotes}
                />
            )}
        </>
    )

}

export default MouseOverNoteToPreview