import React, {FC} from "react";

interface ShowNotesOnBoardInputProps {
    showNotesOnBoard: boolean
    setShowNotesOnBoard: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowNotesOnBoardInput: FC<ShowNotesOnBoardInputProps> = ({showNotesOnBoard, setShowNotesOnBoard}) => {

    const handleShowNotesChange = (): void => {
        return showNotesOnBoard ? setShowNotesOnBoard(false) : setShowNotesOnBoard(true)
    }

    return (
        <>
            <div className="w-auto">
                <label
                    htmlFor="input-group-search"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Notes
                </label>
                <div
                    className="flex items-center w-auto h-11 px-4 py-2.5 ps-4 border-2 border-gray-200 rounded-md dark:border-gray-700">
                    <input checked={showNotesOnBoard} onChange={handleShowNotesChange} id="bordered-checkbox-1" type="checkbox"
                           value="" name="bordered-checkbox"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="bordered-checkbox-1"
                           className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show
                        notes</label>
                </div>
            </div>
        </>
    )
}

export default ShowNotesOnBoardInput