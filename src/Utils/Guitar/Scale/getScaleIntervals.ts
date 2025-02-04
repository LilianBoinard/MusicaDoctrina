import { ScaleType } from "tonal";

interface IGetScaleIntervals {
    scaleName: string;
}

// Retrieves the intervals that define a specified musical scale.

const getScaleIntervals = ({ scaleName }: IGetScaleIntervals): string[] => {
    // Use the 'tonal' library to get the scale type based on the provided scale name
    const scaleType = ScaleType.get(scaleName);

    // If the scale type is not found or intervals are undefined, throw an error
    if (!scaleType || !scaleType.intervals) {
        throw new Error(`Scale "${scaleName}" not found or does not have defined intervals.`);
    }

    // Return the array of intervals that define the scale
    return scaleType.intervals;
};

export default getScaleIntervals;
