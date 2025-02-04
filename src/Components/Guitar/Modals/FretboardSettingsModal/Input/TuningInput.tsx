import React, {FC, useState} from "react";
import {Dropdown} from "flowbite-react";

interface TuningInputProps {
    currentTuningKey: string
    setCurrentTuningKey: React.Dispatch<React.SetStateAction<string>>
    currentTuningType: string
    setCurrentTuningType: React.Dispatch<React.SetStateAction<string>>
}

interface ITuningList {
    [tuningName: string]: {
        key: string,
        type: string
    }
}

const TuningInput: FC<TuningInputProps> = ({
                                               currentTuningKey,
                                               setCurrentTuningKey,
                                               currentTuningType,
                                               setCurrentTuningType,

                                           }) => {


    // TODO: JSON tuning list
    const tuningList: ITuningList = {
        "E Standard": {
            key: "E",
            type: "standard"
        },
        "Half step down": {
            key: "D#",
            type: "standard"
        },
        "Baritone": {
            key: "B",
            type: "standard"
        },
        "C Drop": {
            key: "C",
            type: "drop"
        },
        "A Drop": {
            key: "A",
            type: "drop"
        },
        "B Drop": {
            key: "B",
            type: "drop"
        },
        "G Drop": {
            key: "G",
            type: "drop"
        },
    }

    const [currentTuningInput, setCurrentTuningInput] = useState<string>(`${currentTuningKey} ${currentTuningType}`)

    const handleTuningChange = (newTuning: string): void => {
        if (newTuning === currentTuningInput) return
        setCurrentTuningKey(tuningList[newTuning].key)
        setCurrentTuningType(tuningList[newTuning].type)
        setCurrentTuningInput(newTuning)
    }

    return (
        <>
            <div className="w-auto">
                <label
                    htmlFor="input-group-search"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Tuning
                </label>

                <Dropdown color="gray" label={currentTuningInput}>
                    {tuningList &&
                        Object.keys(tuningList).map((tuning, index) => (
                            <Dropdown.Item key={index}
                                           onClick={() => {
                                               handleTuningChange(Object.keys(tuningList)[index])
                                           }}>
                                {tuning}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown>
            </div>
        </>
    )
}

export default TuningInput