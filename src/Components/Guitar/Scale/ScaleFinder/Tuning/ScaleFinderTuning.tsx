import { FC } from "react";
import {useScaleFinderContext} from "../../../../../Hooks/Guitar/ScaleFinder/useScaleFinderContext.ts";
import {FinderScaleNotes, SetFinderScaleNotes} from "../../../../../Context/Guitar/GuitarType.ts";

interface ScaleFinderTuningProps {
    tuning: (string | null)[]
    finderScaleNotes: FinderScaleNotes
    setFinderScaleNotes: SetFinderScaleNotes
    stringsCoordinates: number[]
    tonicNote: string
    
}

const ScaleFinderTuning: FC<ScaleFinderTuningProps> = (
    {
        tuning,
        finderScaleNotes,
        setFinderScaleNotes,
        stringsCoordinates,
        tonicNote
    }) => {

    const { finderScaleSelectedTuningNotes, setFinderScaleSelectedTuningNotes } = useScaleFinderContext()

    const handleTuningNoteClick = (note: string) => {
        if (!note || !finderScaleSelectedTuningNotes) return;

        // On vérifie si cette note est déjà dans tuningSelectedNotes
        const indexInSelectedNotes = finderScaleSelectedTuningNotes.indexOf(note);

        if (indexInSelectedNotes !== -1) {
            // --- CAS 1 : la note est déjà dans tuningSelectedNotes => on la retire

            // 1. On retire la note du state "tuningSelectedNotes"
            const newTuningSelectedNotes = [...finderScaleSelectedTuningNotes];
            newTuningSelectedNotes.splice(indexInSelectedNotes, 1);
            setFinderScaleSelectedTuningNotes(newTuningSelectedNotes);

            // 2. On retire aussi la note correspondante dans finderScaleNotes
            //    Position recherchée : ["tuning", "tuning"]
            const indexToRemove = finderScaleNotes.findIndex(
                (finderNote) =>
                    finderNote.note === note &&
                    !finderNote.position.string &&
                    !finderNote.position.fret
            );

            if (indexToRemove !== -1) {
                const newFinderScaleNotes = [...finderScaleNotes];
                newFinderScaleNotes.splice(indexToRemove, 1);
                setFinderScaleNotes(newFinderScaleNotes);
            }

        } else {
            // --- CAS 2 : la note n’est pas encore dans tuningSelectedNotes => on l’ajoute

            // On ajoute la note dans "finderScaleNotes" avec la position = ["tuning","tuning"]
            setFinderScaleNotes([
                ...finderScaleNotes,
                {
                    note: note,
                    degree: 0,
                    position: { string: 0, fret: 0 }
                }
            ]);

            // Et on l’ajoute aussi dans "tuningSelectedNotes"
            setFinderScaleSelectedTuningNotes([...finderScaleSelectedTuningNotes, note]);
        }
    };
    
    const getColor = (note: string) => {
        if (note === tonicNote) {
            return "stroke-red-900 fill-black";
        }
        return "stroke-green-400 fill-black";
    };
    
    return (
        <>
            {stringsCoordinates.length > 0 && stringsCoordinates.map((position, index) => {
                const note = tuning[index];
                if (!note) return
                const isInSelectedNotes = finderScaleSelectedTuningNotes.includes(note);

                return isInSelectedNotes ? (
                    <g
                        key={`tuning-${index}`}
                        onClick={() => handleTuningNoteClick(note)}>
                        <rect
                            x="5.5"
                            width="21"
                            height="25"
                            y={position - 13.3}
                            r="1.1%"
                            strokeWidth="3.3"
                            className={`${getColor(note)}`}
                            rx="7"
                        />
                        <text
                            x="16"
                            y={position}
                            textAnchor="middle"
                            dy=".3em"
                            fontFamily="sans-serif"
                            fontSize="100%"
                            fontWeight="bold"
                            className="fill-gray-50"
                        >
                            {note}
                        </text>
                    </g>
                ) : (
                    <text
                        key={`tuning-${index}`}
                        x="16"
                        y={position}
                        textAnchor="middle"
                        dy=".3em"
                        fontFamily="sans-serif"
                        fontSize="100%"
                        fontWeight="bold"
                        className="fill-gray-50 cursor-pointer"
                        onClick={() => handleTuningNoteClick(note)}
                    >
                        {note}
                    </text>
                );
            })}
        </>
    )
}

export default ScaleFinderTuning