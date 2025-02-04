import getCyclicStandardIntervals from "./getCyclicStandardIntervals.ts";
import {Note} from "tonal";
import getCyclicDropIntervals from "./getCyclicDropIntervals.ts";

// Interface representing the properties required to generate tuning.
interface GetTuningProps {
    chromaticScaleNotes: string[];

    currentTuningKey: string;
    currentTuningType: string;
    stringsCount: number;
}

// Define tuning intervals for different tuning types with the max of 9 strings
interface ITuningIntervals {
    [type: string]: string[];
}

// TODO: Replace with JSON configuration if necessary
const tuningIntervals: ITuningIntervals = {
    standard: ["-10m", "-7m", "-4M", "1P", "4M", "7m", "10m", "12M", "15M"],
    drop_on_6: ["1P", "5P", "8P", "4M", "6M", "2M"],
    drop_on_7: ["1P", "5P", "8P", "4M", "7m", "2M", "5P"],
    drop_on_8: ["1P", "5P", "8P", "4M", "7m", "2M", "5P", "8P"],
    drop_on_9: ["1P", "5P", "8P", "4M", "7m", "2M", "5P", "8P", "11m"],
    // Additional tuning types can be added here
};


// Matches a given note to its equivalent in the chromatic scale, considering enharmonic equivalents.
const matchChromaticNote = (note: string, chromaticScaleNotes: string[]): string => {
    if (chromaticScaleNotes.includes(note)) {
        return note;
    } else if (chromaticScaleNotes.includes(Note.enharmonic(note))) {
        return Note.enharmonic(note);
    } else {
        return <string>chromaticScaleNotes.find(
            (chromaticNote) => Note.enharmonic(chromaticNote) === Note.enharmonic(note)
        );
    }
};

// Generates a tuning configuration based on the provided properties.
const getTuning = ({
                       chromaticScaleNotes,
                       currentTuningKey,
                       currentTuningType,
                       stringsCount,
                   }: GetTuningProps): string[] => {

    const drop_on_index = `drop_on_${+stringsCount < 6 ? 6 : +stringsCount}`

    // Ensure that the current tuning type exists in the tuningIntervals
    if (!tuningIntervals[currentTuningType] && !tuningIntervals[drop_on_index]) {
        throw new Error(`Tuning type "${currentTuningType}" is not defined.`);
    }

    const intervals = currentTuningType === 'drop' ? tuningIntervals[drop_on_index] : tuningIntervals[currentTuningType]

    // Dynamically find the starting index based on the center point "1M"
    const stringStartIndex = intervals.indexOf("1P");
    if (stringStartIndex === -1) {
        throw new Error(`Center interval "1P" not found in tuning type "${currentTuningType}".`);
    }

    // Retrieve cyclic intervals based on the tuning type and string count
    let cyclicIntervals = null
    switch(currentTuningType) {
        case 'standard': {
            cyclicIntervals = getCyclicStandardIntervals({
                intervals,
                stringStartIndex,
                stringsCount
            });
            break
        }
        case 'drop': {
            cyclicIntervals = getCyclicDropIntervals({
                intervals,
                stringStartIndex,
                stringsCount
            })
            break
        }
        default: {
            throw new Error("Tuning type cannot be determined")
        }
    }

    // Map intervals to actual notes using the root key and handle enharmonic equivalents
    const generatedTuning = cyclicIntervals.map(interval => {
        const note = Note.transpose(currentTuningKey, interval);
        return matchChromaticNote(note, chromaticScaleNotes);
    });

    if (!generatedTuning) {
        throw new Error("Tuning cannot be generated");
    }

    return generatedTuning;
}

export default getTuning;
