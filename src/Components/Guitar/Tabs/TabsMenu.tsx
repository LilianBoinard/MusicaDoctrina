import {FC, useEffect, useRef} from "react";
import {Tabs, TabsRef} from "flowbite-react";
import ScaleVisualizerTab from "./ScaleVisualizerTab/ScaleVisualizerTab.tsx";
import ScaleFinderTab from "./ScaleFinderTab/ScaleFinderTab.tsx";
import useScaleFinderLogic from "../../../Hooks/Guitar/ScaleFinder/useScaleFinderLogic.ts";
import useScaleVisualizerLogic from "../../../Hooks/Guitar/ScaleVisualizer/useScaleVisualizerLogic.ts";
import {useTabsContext} from "../../../Hooks/Guitar/Tabs/useTabsContext.ts";

const TabsMenu: FC = () =>  {

    const { activeTab, setActiveTab } = useTabsContext()

    const tabsRef = useRef<TabsRef>(null);

    // Using the ScaleVisualizer Hook
    const {
        fretboard ,
        scaleNotes,
        currentScaleKey,
        setCurrentScaleKey,
        currentScaleName,
        setCurrentScaleName
    } = useScaleVisualizerLogic()

    const {
        finderScaleList,
        finderScaleNotes,
        finderScaleToPreview,
        setFinderScaleToPreview
    } = useScaleFinderLogic()

    useEffect(() => {
        if (activeTab != null) {
            tabsRef.current?.setActiveTab(activeTab)
        }
    }, [activeTab]);

    return(
        <>
            <Tabs ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)} aria-label="Tabs with underline" variant="underline" className="justify-center">

                {/*activeTab === 0*/}
                <Tabs.Item active={activeTab === 0} title="Scale Visualizer">
                    {/*<span className="font-medium text-gray-800 dark:text-white">Scale Visualizer associated content</span>*/}
                    {fretboard && (<ScaleVisualizerTab
                        fretboard={fretboard}
                        scaleNotes={scaleNotes}
                        currentScaleKey={currentScaleKey}
                        setCurrentScaleKey={setCurrentScaleKey}
                        currentScaleName={currentScaleName}
                        setCurrentScaleName={setCurrentScaleName}
                    />)}
                </Tabs.Item>

                <Tabs.Item active={activeTab === 1} title="Scale Finder">
                    {fretboard && (
                        <ScaleFinderTab
                            setActiveTab={setActiveTab}
                            finderScaleList={finderScaleList}
                            finderScaleNotes={finderScaleNotes}
                            finderScaleToPreview={finderScaleToPreview}
                            setFinderScaleToPreview={setFinderScaleToPreview}
                            currentScaleKey={currentScaleKey}
                            setCurrentScaleKey={setCurrentScaleKey}
                            currentScaleName={currentScaleName}
                            setCurrentScaleName={setCurrentScaleName}
                        />
                    )}
                </Tabs.Item>

                <Tabs.Item disabled title="Chords Visualizer">
                    <span className="font-medium text-gray-800 dark:text-white">Chords Visualizer associated content</span>
                </Tabs.Item>

                {/*activeTab === 3*/}
                <Tabs.Item disabled title="Chords Finder">
                    <span className="font-medium text-gray-800 dark:text-white">Chords Finder associated content</span>
                </Tabs.Item>

            </Tabs>
        </>
    )
}

export default TabsMenu