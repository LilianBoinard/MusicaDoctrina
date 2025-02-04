import { Scale } from "tonal";

interface IGetChromaticScaleNotes {
    scaleKey: string;
}

// Retrieves the chromatic scale notes based on the provided root note.

const getChromaticScaleNotes = ({ scaleKey }: IGetChromaticScaleNotes): string[] => {
    // Use the 'tonal' library to get the chromatic scale for the given root note
    return Scale.get(`${scaleKey} chromatic`).notes;
};

export default getChromaticScaleNotes;
