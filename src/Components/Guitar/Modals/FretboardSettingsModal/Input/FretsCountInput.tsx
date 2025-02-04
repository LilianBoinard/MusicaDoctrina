import React, {FC, useState} from "react";

interface FretsCountInputProps {
    fretsCount: number
    setFretsCount: React.Dispatch<React.SetStateAction<number>>
}

const FretsCountInput: FC<FretsCountInputProps> = ({ fretsCount, setFretsCount }) => {

    const [inputValue, setInputValue] = useState<number>(fretsCount)

    const handleFretsCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setFretsCount(newValue); // Update the store
        }
    };

    const handleFretsCountIncrement = () => {
        if (fretsCount === 28) return
        setInputValue(fretsCount + 1)
        return setFretsCount(fretsCount + 1)
    }

    const handleFretsCountDecrement = () => {
        if (fretsCount === 12) return
        setInputValue(fretsCount - 1)
        return setFretsCount(fretsCount - 1)
    }

    return (
        <>
            <div className="grid grid-rows">
                <label
                    htmlFor="frets-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Frets count
                </label>
                <div className="relative flex items-center max-w-[8rem]">
                    <button
                        type="button"
                        id="decrement-button"
                        onClick={handleFretsCountDecrement}
                        data-input-counter-decrement="frets-input"
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
                        id="frets-input"
                        value={inputValue}
                        onChange={handleFretsCountChange} // Controlled input with value and onChange
                        data-input-counter=""
                        data-input-counter-min="12"
                        data-input-counter-max="26"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button
                        type="button"
                        id="increment-button"
                        onClick={handleFretsCountIncrement}
                        data-input-counter-increment="frets-input"
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
                    Select a number from 12 to 28.
                </p>
            </div>
        </>
    )
}

export default FretsCountInput