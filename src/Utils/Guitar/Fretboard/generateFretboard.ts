interface IGenerateFretboard {
    tuning: string[];
    fretsCount: number;
    fretboardNotes: string[][];
    scaleNotes: string[];
    stringsCoordinates: number[];
    fretsCoordinates: number[];
    nutSize: {
        width: number;
        height: number;
    };
}

interface IScaleFretboardObject {
    [stringNumber: number]: {
        [fretNumber: number]: {
            note: string | null;
            degree: number | null;
            position: { x: number; y: number };
        };
    };
}

const generateFretboard = (
    {
        tuning,
        fretsCount,
        fretboardNotes,
        scaleNotes,
        stringsCoordinates,
        fretsCoordinates,
        nutSize,
    }: IGenerateFretboard
): IScaleFretboardObject => {
    // Initialize the fretboard object.
    const fretboard: IScaleFretboardObject = {};

    // Loop through each string in the tuning.
    for (let stringIndex = 0; stringIndex < tuning.length; stringIndex++) {
        // Use 1-indexed string numbering for the fretboard.
        const currentString = stringIndex + 1;
        fretboard[currentString] = {};

        // --- 1) Process the open string (fret 0) ---
        const openNote = fretboardNotes[stringIndex][0];
        const openDegree = scaleNotes.indexOf(openNote) + 1;
        fretboard[currentString][0] = {
            note: scaleNotes.includes(openNote) ? openNote : null,
            degree: openDegree || null,
            position: {
                y: stringsCoordinates[stringIndex],
                x: 0, // Open string is positioned at x = 0.
            },
        };

        // --- 2) Process fretted notes (from fret 1 to fretsCount) ---
        for (let fret = 1; fret <= fretsCount; fret++) {
            const note = fretboardNotes[stringIndex][fret];
            const degree = scaleNotes.indexOf(note) + 1;

            // Calculate x position as the midpoint between the previous and current fret lines plus the nut's width.
            const prevLine = fretsCoordinates[fret - 1];
            const currentLine = fretsCoordinates[fret];
            const xPos = (prevLine + currentLine) / 2 + nutSize.width;

            fretboard[currentString][fret] = {
                note: scaleNotes.includes(note) ? note : null,
                degree: degree || null,
                position: {
                    y: stringsCoordinates[stringIndex],
                    x: xPos,
                },
            };
        }
    }

    // Return the fully generated fretboard object.
    return fretboard;
};

export default generateFretboard;
