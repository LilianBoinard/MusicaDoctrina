interface IGetCyclicIntervals {
    intervals: string[]
    stringStartIndex: number;
    stringsCount: number;
}

// Retrieves a specified number of cyclic intervals from the provided intervals array for drop tuning.

const getCyclicDropIntervals = ({ intervals, stringStartIndex, stringsCount }: IGetCyclicIntervals): string[] => {
    const cyclicIntervals = [];

    for (let i = 0; i < stringsCount; i++) {
        const intervalIndex = (stringStartIndex + i) % intervals.length;
        cyclicIntervals.push(intervals[intervalIndex]);
    }

    // Add up to six strings starting from the starting index, wrapping around the array if needed
    for (let i = 0; i < 6 && cyclicIntervals.length < stringsCount; i++) {
        const intervalIndex = (stringStartIndex + i) % intervals.length;
        cyclicIntervals.push(intervals[intervalIndex]);
    }

    return cyclicIntervals;
};

export default getCyclicDropIntervals;
