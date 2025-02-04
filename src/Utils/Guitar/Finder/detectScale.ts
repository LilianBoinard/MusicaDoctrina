import { Interval, Scale, ScaleType } from "tonal";
import {Scales} from "../../../Context/Guitar/GuitarType.ts";

interface IDetectScale {
    chromaticScaleNotes: string[]
    notes: string[]
}

const detectScale = ({chromaticScaleNotes, notes}: IDetectScale) => {
    // Utility function to generate the notes of a scale
    const generateScaleNotes = (root: string, intervals: string[]) => {
        const rootIndex = chromaticScaleNotes.indexOf(root);
        if (rootIndex === -1) {
            throw new Error(`Root note ${root} not found in chromatic scale`);
        }

        return intervals.map((interval) => {
            const semitoneDistance = Interval.semitones(interval);
            const noteIndex =
                (rootIndex + semitoneDistance) % chromaticScaleNotes.length;
            return chromaticScaleNotes[noteIndex];
        });
    };

    // 1) Remove duplicate notes to avoid multiple instances of the same tonic
    const uniqueNotes = [...new Set(notes)];

    // 2) For each unique note, detect possible scales
    const allScalesPerNote = uniqueNotes.map((note) => {
        // Detect potential scales
        const scaleList = Scale.detect(uniqueNotes, { tonic: note });
        let scales: Scales = [];

        // For each detected scale, generate the notes of that scale
        scaleList.forEach((detectedScale) => {
            const scaleName = detectedScale
                .split(" ")
                .slice(1) // e.g., "C major" => ["C", "major"] => remove "C"
                .join(" ")
                .toLocaleString(); // => "major"

            const scaleIntervals = ScaleType.get(scaleName).intervals;
            const scaleNotes = generateScaleNotes(note, scaleIntervals);

            scales.push({
                scale: detectedScale, // e.g., "C major"
                scaleNotes,           // e.g., ["C", "D", "E", "F", "G", "A", "B"]
            });
        });

        // Limit to a maximum of 5 scales
        if (scales.length > 5) {
            scales = scales.slice(0, 5);
        }

        // Return an object containing the note and its corresponding scales
        return {
            note,   // e.g., "C"
            scales, // e.g., [{scale: "C major", scaleNotes: ["C", "D", ...]}, ...]
        };
    });

    return allScalesPerNote;
}

export default detectScale
