import { useContext } from "react";
import {
    ScaleVisualizerContext,
    ScaleVisualizerContextType
} from "../../../Context/Guitar/ScaleVisualizer/ScaleVisualizerContext.ts";

/**
 * Custom React hook to access the ScaleVisualizer context.
 *
 * This hook allows components to consume and interact with the scale visualizer-related state and functions.
 * It ensures that the hook is used within a `ScaleVisualizerProvider`, throwing an error otherwise to prevent
 * unintended behavior.
 *
 */
export function useScaleVisualizerContext(): ScaleVisualizerContextType {
    // Access the ScaleVisualizerContext using React useContext hook
    const context = useContext(ScaleVisualizerContext);

    // If context is undefined, it means the hook is being used outside a ScaleVisualizerProvider
    if (!context) {
        throw new Error("useScaleVisualizerContext must be used within a ScaleVisualizerProvider");
    }

    // Return the context value, which includes state and any dispatch functions
    return context;
}
