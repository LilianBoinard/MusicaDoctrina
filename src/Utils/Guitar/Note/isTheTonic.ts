import {Fretboard} from "../../../Context/Guitar/GuitarType.ts";

type fretboard = Fretboard

const isTheTonic = (fretboard: fretboard, note: string): boolean => {
    // Iterate over each string in the fretboard
    return Object.values(fretboard).some((string) =>
        // Iterate over each fret in the current string
        Object.values(string).some(
            // Check if the current fret's note matches the target note and if it's the tonic (degree === 1)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (fret) => fret.note === note && fret.degree === 1
        )
    );
};

export default isTheTonic;
