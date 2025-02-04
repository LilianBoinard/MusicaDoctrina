interface GetFretsCoordinatesProps {
    fretsCount: number;
    neckSize: {
        width: number;
        height: number;
    };
}

const getFretsCoordinates = ({ fretsCount, neckSize }: GetFretsCoordinatesProps): number[] => {

    // Calculate the scale length based on the number of frets using a logarithmic formula
    // This formula simulates the natural scaling of fret distances, where each fret halves the remaining distance
    const scaleLength: number = 0.985 / (1 - Math.pow(2, -(fretsCount) / 12));

    // Generate an array containing the relative positions (in scale length units) of each fret along the neck
    // We create an array of length fretsCount + 2 to include the nut (fret 0) and the position beyond the last fret
    const percentages = Array(fretsCount + 2).fill(0)
        .map((_d, n) => scaleLength * (1 - Math.pow(2, -(n) / 12)));

    // Convert the relative fret positions into actual positions on the neck's width
    // Each relative position is multiplied by the neck's width to get the real distance from the nut
    return percentages.map(f => f * neckSize.width);
}

export default getFretsCoordinates;
