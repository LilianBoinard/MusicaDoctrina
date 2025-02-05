import {ReactElement, useState} from "react";
import SettingsButton from "./Modals/FretboardSettingsModal/SettingsButton.tsx";
import FretboardSettingsModal from "./Modals/FretboardSettingsModal/FretboardSettingsModal.tsx";
import Fretboard from "./Fretboard/Fretboard.tsx";
import TabsMenu from "./Tabs/TabsMenu.tsx";
import {ErrorBoundary} from "react-error-boundary";
import FretboardFallback from "../ErrorBoundary/ErrorFallback/Guitar/FretboardFallback.tsx";
import {ScaleVisualizerProvider} from "../../Context/Guitar/ScaleVisualizer/ScaleVisualizerProvider.tsx";
import {ScaleFinderProvider} from "../../Context/Guitar/ScaleFinder/ScaleFinderProvider.tsx";

export default function Guitar(): ReactElement {


    // Settings modal Open/Close State
    const [openFretboardSettingsModal, setOpenFretboardSettingsModal] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-auto gap-6">
                <h1 className="font-medium text-4xl dark:text-white">Guitar Fretboard Tools</h1>
                <SettingsButton
                    openFretboardSettingsModal={openFretboardSettingsModal}
                    setOpenFretboardSettingsModal={setOpenFretboardSettingsModal}/>
            </div>

            {openFretboardSettingsModal && (
                <FretboardSettingsModal
                    openFretboardSettingsModal={openFretboardSettingsModal}
                    setOpenFretboardSettingsModal={setOpenFretboardSettingsModal}/>
            )}
            {/* Wrap ScaleVisualizer in its own provider */}
            <ErrorBoundary fallbackRender={FretboardFallback}>
                <ScaleVisualizerProvider>
                    <ScaleFinderProvider>
                        <Fretboard/>
                            <TabsMenu/>
                    </ScaleFinderProvider>
                </ScaleVisualizerProvider>
            </ErrorBoundary>




    </>
)
}
