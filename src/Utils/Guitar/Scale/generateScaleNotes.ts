import { Interval } from "tonal";

interface IGenerateScaleNotes {
    rootNote: string;
    intervals: string[];
    chromaticScaleNotes: string[];
}

// Generates a sequence of scale notes based on the provided root note, intervals, and chromatic scale.
const generateScaleNotes = ({ rootNote, intervals, chromaticScaleNotes }: IGenerateScaleNotes): string[] => {
    // Find the index of the root note within the chromatic scale
    const rootIndex = chromaticScaleNotes.indexOf(rootNote);
    if (rootIndex === -1) {
        throw new Error(`Root note ${rootNote} not found in chromatic scale`);
    }

    // Generate each scale note by applying the interval to the root note
    return intervals.map(interval => {
        // Get the number of semitones for the current interval
        const semitoneDistance = Interval.semitones(interval);
        // Calculate the index of the new note, wrapping around the chromatic scale if necessary
        const noteIndex = (rootIndex + semitoneDistance) % chromaticScaleNotes.length;
        return chromaticScaleNotes[noteIndex];
    });
}

export default generateScaleNotes;
