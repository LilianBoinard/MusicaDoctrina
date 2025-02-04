import React, {FC} from "react";
import {Modal} from "flowbite-react";
import TuningInput from "./Input/TuningInput.tsx";
import ShowNotesOnBoardInput from "./Input/ShowNotesOnBoardInput.tsx";
import StringsCountInput from "./Input/StringsCountInput.tsx";
import FretsCountInput from "./Input/FretsCountInput.tsx";
import {useFretboardContext} from "../../../../Hooks/Guitar/Fretboard/useFretboardContext.ts";

interface FretboardSettingsModalProps {
    openFretboardSettingsModal: boolean;
    setOpenFretboardSettingsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FretboardSettingsModal: FC<FretboardSettingsModalProps> = ({
    openFretboardSettingsModal,
    setOpenFretboardSettingsModal,}) => {

    // Using the hook
    const {
        stringsCount,
        setStringsCount,
        fretsCount,
        setFretsCount,
        showNotesOnBoard,
        setShowNotesOnBoard,
        currentTuningKey,
        setCurrentTuningKey,
        currentTuningType,
        setCurrentTuningType,
    } = useFretboardContext();

    return (
        <>
            <Modal show={openFretboardSettingsModal} onClose={() => setOpenFretboardSettingsModal(false)}>
                <Modal.Header>Fretboard Settings</Modal.Header>
                <Modal.Body>
                    <div className="grid grid-rows mt-7 gap-10">
                        <div className="flex flex-auto gap-7">
                            <TuningInput
                                currentTuningKey={currentTuningKey}
                                setCurrentTuningKey={setCurrentTuningKey}
                                currentTuningType={currentTuningType}
                                setCurrentTuningType={setCurrentTuningType}/>
                            <ShowNotesOnBoardInput
                                showNotesOnBoard={showNotesOnBoard}
                                setShowNotesOnBoard={setShowNotesOnBoard}/>
                        </div>
                        <div className="flex flex-auto gap-7">
                            <StringsCountInput
                                stringsCount={stringsCount}
                                setStringsCount={setStringsCount}/>
                            <FretsCountInput
                                fretsCount={fretsCount}
                                setFretsCount={setFretsCount}/>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )

}

export default FretboardSettingsModal