import React from "react";
import Neck from "../SharedFretbaordParts/Neck/Neck.tsx";
import Nut from "../SharedFretbaordParts/Nut/Nut.tsx";
import Strings from "../SharedFretbaordParts/Strings/Strings.tsx";
import DotMarkOnFretboard from "../SharedFretbaordParts/DotMark/DotMarkOnFretboard.tsx";
import ScaleVisualizer from "../Scale/ScaleVisualizer/ScaleVisualizer.tsx";
import DotMarkOnBottom from "../SharedFretbaordParts/DotMark/DotMarkOnBottom.tsx";
import ScaleFinder from "../Scale/ScaleFinder/ScaleFinder.tsx";
import useFretboardLogic from "../../../Hooks/Guitar/Fretboard/useFretboardLogic.ts";
import {useTabsContext} from "../../../Hooks/Guitar/Tabs/useTabsContext.ts";

const Fretboard: React.FC = () => {

    const { activeTab } = useTabsContext()

    // Using the Fretboard Hook
    const {
        fretboardSize,
        neckSize,
        nutSize,
        dotMarkersList,
        stringsCoordinates,
        fretsCoordinates,
        showNotesOnBoard,
    } = useFretboardLogic();

    return (
        <div className="overflow-x-auto scrollbar scrollbar-thumb-black scrollbar-track-transparent relative mt-10 mb-10">
            {/* Main SVG for the Fretboard */}
            <svg
                className="block mx-auto"
                viewBox={`0 0 ${fretboardSize.width} ${fretboardSize.height}`}
                width={fretboardSize.width}
                height={fretboardSize.height}
            >
                {/* Render Neck */}
                <Neck neckSize={neckSize} nutWidth={nutSize.width} />

                {/* Render Nut */}
                <Nut nutSize={nutSize} />

                {/* Render Strings */}
                <Strings
                    stringsCoordinates={stringsCoordinates}
                    neckWidth={neckSize.width}
                    nutWidth={nutSize.width}
                />

                {/* Render Dot Markers on the fretboard */}
                <DotMarkOnFretboard
                    dotMarkersList={dotMarkersList}
                    fretsCoordinates={fretsCoordinates}
                    nutWidth={nutSize.width}
                    neckHeight={neckSize.height}
                />

                {/* Render Scale Visualizer if fretboard data is available */}
                {activeTab === 0 && (
                    <ScaleVisualizer
                        stringsCoordinates={stringsCoordinates}
                        fretsCoordinates={fretsCoordinates}
                        nutSize={nutSize}
                        neckSize={neckSize}
                        showNotesOnBoard={showNotesOnBoard}
                    />

                )}

                {/* Render Scale Finder if fretboard data is available */}
                {activeTab === 1 && (
                    <ScaleFinder
                        stringsCoordinates={stringsCoordinates}
                        fretsCoordinates={fretsCoordinates}
                        nutSize={nutSize}
                        neckSize={neckSize}
                        showNotesOnBoard={showNotesOnBoard}
                    />
                )}
            </svg>

            {/* Secondary SVG for Bottom Dot Markers */}
            <svg
                className="block mx-auto fill-gray-950"
                width={fretboardSize.width}
                height="12"
                viewBox={`0.3 3 ${fretboardSize.width} 12`}
            >
                <DotMarkOnBottom
                    fretboardSize={fretboardSize}
                    dotMarkersList={dotMarkersList}
                    fretsCoordinates={fretsCoordinates}
                    nutWidth={nutSize.width}
                />
            </svg>
        </div>
    );
};

export default Fretboard;
