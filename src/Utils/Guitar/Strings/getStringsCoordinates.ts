// Define an interface to type the props expected by the getStringsCoordinates function
interface GetStringsCoordinatesProps {
    stringsCount: number // The total number of strings on the instrument
    neckSize: {
        width: number // The width of the instrument's neck
        height: number // The height of the instrument's neck
    }
}

// Calculates the vertical positions of strings on an instrument's neck.
const getStringsCoordinates = ({stringsCount, neckSize}: GetStringsCoordinatesProps): number[] => {
    // Validate input parameters
    if (stringsCount <= 0) {
        throw new TypeError("stringsCount must be a positive integer.");
    }
    if (neckSize.height <= 0) {
        throw new TypeError("neckSize.height must be a positive number.");
    }

    // Calculate the y-coordinate for each string
    return Array.from({ length: stringsCount }, (_, i) =>
        ((stringsCount - 0.5) - i) * neckSize.height / stringsCount
    );
};

export default getStringsCoordinates
