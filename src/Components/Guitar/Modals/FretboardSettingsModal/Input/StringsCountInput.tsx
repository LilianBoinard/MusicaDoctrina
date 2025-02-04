import React, {FC, useState} from "react";

interface StringsCountInputProps {
    stringsCount: number
    setStringsCount: React.Dispatch<React.SetStateAction<number>>
}

const StringsCountInput: FC<StringsCountInputProps> = ({ stringsCount, setStringsCount }) => {

    const [inputValue, setInputValue] = useState<number>(stringsCount);

    const handleStringsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setStringsCount(newValue);
        }
    };

    const handleStringsCountIncrement = (): void => {
        if (stringsCount === 9) return
        setInputValue(stringsCount + 1)
        return setStringsCount(stringsCount + 1)
    }

    const handleStringsCountDecrement = (): void => {
        if (stringsCount === 1) return
        setInputValue(stringsCount - 1)
        return setStringsCount(stringsCount - 1)
    }

    return (
        <>
            <div className="grid grid-rows">
                <label
                    htmlFor="strings-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Strings count
                </label>
                <div className="relative flex items-center max-w-[8rem]">
                    <button
                        type="button"
                        id="decrement-button"
                        onClick={handleStringsCountDecrement}
                        data-input-counter-decrement="strings-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                        <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        id="strings-input"
                        value={inputValue}
                        onChange={handleStringsChange} // Controlled input with value and onChange
                        data-input-counter="strings-input"
                        data-input-counter-min="4"
                        data-input-counter-max="9"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button
                        type="button"
                        id="increment-button"
                        onClick={handleStringsCountIncrement}
                        data-input-counter-increment="strings-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                        <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                    </button>
                </div>
                <p
                    id="helper-text-explanation"
                    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                    Select a number from 1 to 9.
                </p>
            </div>
        </>
    )
}

export default StringsCountInput