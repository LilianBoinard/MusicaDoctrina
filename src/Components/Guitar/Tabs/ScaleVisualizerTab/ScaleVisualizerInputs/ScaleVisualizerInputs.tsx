import React, { FC, useState, useRef, useEffect } from "react";
import { ScaleType } from "tonal";

interface ScaleVisualizerInputs {
    currentScaleKey: string;
    setCurrentScaleKey: React.Dispatch<React.SetStateAction<string>>;
    currentScaleName: string;
    setCurrentScaleName: React.Dispatch<React.SetStateAction<string>>;
    alteration: string;
}

type ChromaticScale = {
    [type: string]: string[];
};

const ScaleVisualizerInputs: FC<ScaleVisualizerInputs> = ({
                                                              currentScaleKey,
                                                              setCurrentScaleKey,
                                                              currentScaleName,
                                                              setCurrentScaleName,
                                                              alteration,
                                                          }) => {
    const scaleList = ScaleType.names();

    const chromaticScale: ChromaticScale = {
        sharp: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
        flat: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    };

    const [showScaleKeyDropdown, setShowScaleKeyDropdown] = useState(false);
    const [showScaleListDropdown, setShowScaleListDropdown] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const scaleKeyDropdownRef = useRef<HTMLDivElement>(null);
    const scaleListDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                showScaleKeyDropdown &&
                scaleKeyDropdownRef.current &&
                !scaleKeyDropdownRef.current.contains(event.target as Node)
            ) {
                setShowScaleKeyDropdown(false);
            }
            if (
                showScaleListDropdown &&
                scaleListDropdownRef.current &&
                !scaleListDropdownRef.current.contains(event.target as Node)
            ) {
                setShowScaleListDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showScaleKeyDropdown, showScaleListDropdown]);

    const filteredScales = scaleList.filter((scale) =>
        scale.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleScaleKeyChange = (key: string) => {
        setCurrentScaleKey(key);
        setShowScaleKeyDropdown(false);
    };

    const handleScaleNameChange = (name: string) => {
        setCurrentScaleName(name);
        setShowScaleListDropdown(false);
        setSearchTerm("");
    };

    return (
        <div className="grid grid-rows-2 gap-2">
            <h3 className="-translate-y-2 mt-2 text-xl font-medium dark:text-white">
                Scale:
            </h3>

            <div className="flex flex-row gap-2">

                <div className="relative" ref={scaleKeyDropdownRef}>
                    <button
                        onClick={() => setShowScaleKeyDropdown((prev) => !prev)}
                        className="text-black bg-transparent border-indigo-700 border-2 hover:bg-indigo-200
                       focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium
                       rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                       dark:bg-transparent dark:text-white dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        type="button"
                    >
                        {currentScaleKey}
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {showScaleKeyDropdown && (
                        <div
                            className="dropdown z-10 absolute border-gray-600 border bg-white
                         divide-y divide-gray-100 rounded-lg shadow w-15 dark:bg-gray-700 mt-1"
                        >
                            <ul className="py-2 px-3 h-32 overflow-y-auto text-sm font-medium
                             text-gray-700 dark:text-gray-200">
                                {chromaticScale[alteration].map((key, index) => (
                                    <li key={index}>
                                        <button
                                            className="block px-4 py-2 hover:bg-gray-100
                                 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                                            onClick={() => handleScaleKeyChange(key)}
                                        >
                                            {key}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="relative" ref={scaleListDropdownRef}>
                    <button
                        onClick={() => setShowScaleListDropdown((prev) => !prev)}
                        className="text-black bg-transparent border-indigo-700 border-2 hover:bg-indigo-200
                       focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium
                       rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                       dark:bg-transparent dark:text-white dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        type="button"
                    >
                        {currentScaleName}
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {showScaleListDropdown && (
                        <div
                            className="dropdown z-10 absolute border-gray-600 border bg-white
                         divide-y divide-gray-100 rounded-lg shadow w-15 dark:bg-gray-700 mt-1"
                        >
                            <div className="p-3 relative">
                                <label htmlFor="input-group-search" className="sr-only">
                                    Search
                                </label>
                                <div className="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-4.35-4.35m0 0A8 8 0 103.52 3.52a8 8 0 0013.13 10.83z"
                                        />
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    id="input-group-search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border
                             border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
                             focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                             dark:focus:border-blue-500"
                                    placeholder="Search scale"
                                />
                            </div>

                            <ul
                                className="py-2 px-3 h-32 overflow-y-auto text-sm font-medium
                           text-gray-700 dark:text-gray-200"
                            >
                                {filteredScales.map((scale, index) => (
                                    <li key={index}>
                                        <button
                                            className="block px-4 py-2 hover:bg-gray-100
                                 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                                            onClick={() => handleScaleNameChange(scale)}
                                        >
                                            {scale}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ScaleVisualizerInputs;
