import { FC } from "react";
import ScaleFinderTuning from "./Tuning/ScaleFinderTuning.tsx";
import MouseOverNoteToPreview from "./Notes/MouseOverNoteToPreview.tsx";
import ScaleFinderFrets from "./Frets/ScaleFinderFrets.tsx";
import ScaleFinderNote from "./Notes/ScaleFinderNote.tsx";
import ScaleFinderScalePreview from "./Notes/ScaleFinderScalePreview.tsx";
import useScaleFinderLogic from "../../../../Hooks/Guitar/ScaleFinder/useScaleFinderLogic.ts";

interface ScaleFinderProps {
    stringsCoordinates: number[];
    fretsCoordinates: number[];
    nutSize: {
        width: number;
        height: number;
    };
    neckSize: {
        width: number;
        height: number;
    };
    showNotesOnBoard: boolean
}

const ScaleFinder: FC<ScaleFinderProps> = (
    {
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
        neckSize,
        showNotesOnBoard}) => {

    const {
        fretboard,
        tuning,
        finderScaleNotes,
        setFinderScaleNotes,
        finderScaleList,
        finderScaleToPreview,
        finderNoteMouseOver,
        setFinderNoteMouseOver
    } = useScaleFinderLogic();

    return (
        <>
            {fretboard && (
                <>
                    <ScaleFinderTuning
                        tuning={tuning}
                        finderScaleNotes={finderScaleNotes}
                        setFinderScaleNotes={setFinderScaleNotes}
                        stringsCoordinates={stringsCoordinates}
                        tonicNote={finderScaleNotes[finderScaleNotes.length - 1]?.note} // Ajouter une valeur par défaut
                    />
                    <ScaleFinderFrets
                        finderScaleNotes={finderScaleNotes}
                        setFinderScaleNotes={setFinderScaleNotes}
                        finderNoteMouseOver={finderNoteMouseOver}
                        setFinderNoteMouseOver={setFinderNoteMouseOver}
                        fretboard={fretboard}
                        stringsCoordinates={stringsCoordinates}
                        fretsCoordinates={fretsCoordinates}
                        nutSize={nutSize}
                        neckSize={neckSize}
                    />
                    {finderNoteMouseOver && fretboard && (
                        <MouseOverNoteToPreview
                            fretboard={fretboard}
                            finderNoteMouseOver={finderNoteMouseOver}
                            finderScaleNotes={finderScaleNotes}
                        />
                    )}

                    {finderScaleNotes.length > 0 && finderScaleNotes.map((note) => {

                        return (
                            <ScaleFinderNote
                                key={"tuning-" + note.note}
                                note={note.note}
                                string={note.position.string}
                                fret={note.position.fret}
                                showNotesOnBoard={showNotesOnBoard}
                                fretboard={fretboard}
                                finderScaleNotes={finderScaleNotes}
                                setFinderScaleNotes={setFinderScaleNotes}
                                finderNoteMouseOver={finderNoteMouseOver}
                                setFinderNoteMouseOver={setFinderNoteMouseOver}
                                tonicNote={finderScaleNotes[finderScaleNotes.length - 1]?.note}
                            />);
                    })}

                    {fretboard && finderScaleList.length > 0 && (
                        <>
                            {finderScaleToPreview && (
                                <ScaleFinderScalePreview
                                    finderScaleNotes={finderScaleNotes}
                                    finderScaleToPreview={finderScaleToPreview}
                                />
                            )}
                        </>
                    )}
                </>
            )}

        </>
    );
}

export default ScaleFinder;
