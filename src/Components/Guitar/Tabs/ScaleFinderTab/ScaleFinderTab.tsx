import React, { FC } from "react";
import {
    FinderScaleList,
    FinderScaleNotes,
    FinderScaleToPreview,
    SetFinderScaleToPreview
} from "../../../../Context/Guitar/GuitarType.ts";

interface ScaleFinderTabProps {
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    finderScaleList: FinderScaleList
    finderScaleNotes: FinderScaleNotes
    finderScaleToPreview: FinderScaleToPreview
    setFinderScaleToPreview: SetFinderScaleToPreview
    currentScaleKey: string
    setCurrentScaleKey: React.Dispatch<React.SetStateAction<string>>
    currentScaleName: string
    setCurrentScaleName: React.Dispatch<React.SetStateAction<string>>
}

const ScaleFinderTab: FC<ScaleFinderTabProps> = (
    {
        setActiveTab,
        finderScaleList,
        finderScaleNotes,
        finderScaleToPreview,
        setFinderScaleToPreview,
        currentScaleKey,
        setCurrentScaleKey,
        currentScaleName,
        setCurrentScaleName
    }) => {

    // Determines circle color in the SVG for a particular note
    const color = (scaleNotes: string[], note: string) => {
        // If it's the very first note in that scale
        if (note === scaleNotes[0]) return "stroke-red-900";

        // If the user has selected this note among finderScaleNotes
        if (finderScaleNotes.some((item) => item.note === note)) return "stroke-green-400";

        // Otherwise, default color
        return "stroke-indigo-400";
    };

    const handleScaleMouseEnter = (scaleString: string) => {
        const key = scaleString.split(" ")[0];
        const name = scaleString.split(" ").slice(1).join(" ");
        if (finderScaleToPreview?.scaleKey !== key || finderScaleToPreview?.scaleName !== name) {
            setFinderScaleToPreview({scaleKey: key, scaleName: name});
        }
    };


    const handleScaleMouseLeave = () => {
        setFinderScaleToPreview(null);
    };

    // On click, navigate to the scale page
    const handleScaleClick = (scaleString: string) => {
        const key = scaleString.split(" ")[0];
        const name = scaleString.split(" ").slice(1).join(" ");
        if (currentScaleKey === key && currentScaleName === name) return
        setCurrentScaleKey(key)
        setCurrentScaleName(name)
        setActiveTab(0)
    };

    // If the list is empty, show a fallback row
    if (finderScaleList.length === 0) {
        return (
            <div className="max-w-full relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Scale Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Notes
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <td
                            colSpan={2}
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                            Pick some notes
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="max-w-full relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Scale Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Notes
                    </th>
                </tr>
                </thead>

                {/* We create one <tbody> per note to group rows */}
                {finderScaleList.map((list, noteIndex) => (
                    <tbody key={noteIndex}>
                    {/* We can add a "header row" for each note,
                or skip this if you just want the scale rows. */}
                    <tr className="border border-s-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-800">
                        <td
                            colSpan={2}
                            className="px-6 py-2 font-bold text-gray-800 dark:text-gray-100"
                        >Tonic: {list.note}
                        </td>
                    </tr>

                    {/* Show ONLY the first 3 scales for this note */}
                    {list.scales.slice(0, 3).map((scale, scaleIndex) => (
                        <tr
                            key={scaleIndex}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            onClick={() => handleScaleClick(scale.scale)}
                            onMouseEnter={() => handleScaleMouseEnter(scale.scale)}
                            onMouseLeave={handleScaleMouseLeave}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {scale.scale}
                            </th>
                            <td className="px-6 py-4">
                                <svg
                                    className="block w-80 h-12"
                                    viewBox="100 -5 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {scale.scaleNotes && scale.scaleNotes.length > 0 ? (
                                        scale.scaleNotes.map((note, i) => (
                                            <g key={`note-${i}`}>
                                                <circle
                                                    cx={i * 30}
                                                    cy="13"
                                                    r="12"
                                                    strokeWidth="3"
                                                    className={`${color(scale.scaleNotes, note)} fill-black`}
                                                />
                                                <text
                                                    x={i * 30}
                                                    y="13"
                                                    textAnchor="middle"
                                                    dy=".3em"
                                                    fontFamily="sans-serif"
                                                    fontSize="90%"
                                                    fontWeight="bold"
                                                    className="fill-gray-50"
                                                >
                                                    {note}
                                                </text>
                                            </g>
                                        ))
                                    ) : (
                                        <p>Empty</p>
                                    )}
                                </svg>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default ScaleFinderTab