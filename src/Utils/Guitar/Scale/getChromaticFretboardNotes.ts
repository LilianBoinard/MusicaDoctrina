interface IGetChromaticFretboardNotes {
    tuning: string[];
    fretsCount: number;
    chromaticScaleNotes: string[];
}

// Generates the chromatic notes for each fret on every string of a stringed instrument.

const getChromaticFretboardNotes = (
    {
        tuning,
        fretsCount,
        chromaticScaleNotes,
    }: IGetChromaticFretboardNotes
): string[][] => {
    return tuning.map((rootNote) => {
        // Find the index of the root note in the chromatic scale
        const rootIndex = chromaticScaleNotes.indexOf(rootNote);

        // If the root note is not found, throw an error
        if (rootIndex === -1) {
            throw new Error(`Note ${rootNote} not found in chromatic scale`);
        }

        // Generate an array of notes for each fret on the current string
        return Array.from({ length: fretsCount + 1 }, (_, fret) => {
            // Calculate the note index by adding the fret number to the root index, wrapping around using modulo
            const noteIndex = (rootIndex + fret) % chromaticScaleNotes.length;
            return chromaticScaleNotes[noteIndex];
        });
    });
};

export default getChromaticFretboardNotes;
