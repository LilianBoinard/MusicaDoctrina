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
                                                                     setOpenFretboardSettingsModal,
                                                                 }) => {

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
                <Modal.Body >
                    <div className="grid grid-cols-2 place-content-center gap-4 ">
                        <div>
                            <TuningInput
                                currentTuningKey={currentTuningKey}
                                setCurrentTuningKey={setCurrentTuningKey}
                                currentTuningType={currentTuningType}
                                setCurrentTuningType={setCurrentTuningType}/>
                        </div>
                        <div>
                            <StringsCountInput
                                stringsCount={stringsCount}
                                setStringsCount={setStringsCount}/>
                        </div>
                        <div>
                            <ShowNotesOnBoardInput
                                showNotesOnBoard={showNotesOnBoard}
                                setShowNotesOnBoard={setShowNotesOnBoard}/>
                        </div>
                        <div>
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