interface IGetCyclicIntervals {
    intervals: string[]
    stringStartIndex: number
    stringsCount: number
}

// Retrieves a specified number of cyclic intervals from the provided intervals array.

const getCyclicStandardIntervals = ({ intervals, stringStartIndex, stringsCount }: IGetCyclicIntervals): string[] => {
    // Calculate the number of excess strings beyond the first six
    const excessStrings = Math.max(0, stringsCount - 6);
    const cyclicIntervals = [];

    // Add excess strings before the starting index, wrapping around the array if needed
    for (let i = excessStrings; i > 0; i--) {
        const intervalIndex = (stringStartIndex - i + intervals.length) % intervals.length;
        cyclicIntervals.push(intervals[intervalIndex]);
    }

    // Add up to six strings starting from the starting index, wrapping around the array if needed
    for (let i = 0; i < 6 && cyclicIntervals.length < stringsCount; i++) {
        const intervalIndex = (stringStartIndex + i) % intervals.length;
        cyclicIntervals.push(intervals[intervalIndex]);
    }

    return cyclicIntervals;
}

export default getCyclicStandardIntervals;
