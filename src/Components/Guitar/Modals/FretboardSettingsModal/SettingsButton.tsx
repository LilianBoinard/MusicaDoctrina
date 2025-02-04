import React, {FC} from "react";

interface SettingsButtonProps {
    openFretboardSettingsModal: boolean;
    setOpenFretboardSettingsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsButton: FC<SettingsButtonProps> = ({openFretboardSettingsModal, setOpenFretboardSettingsModal}) => {

    const handleSettingsButtonClick = ():void => {
        if (!openFretboardSettingsModal) {
            setOpenFretboardSettingsModal(true);
        }
    }

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <svg
                    onClick={handleSettingsButtonClick}
                    className="w-6 h-6 mt-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"/>
                </svg>
            </div>
        </>
    )
}

export default SettingsButton