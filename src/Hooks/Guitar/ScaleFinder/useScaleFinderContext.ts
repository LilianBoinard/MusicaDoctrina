import { useContext } from "react";
import {
    ScaleFinderContext,
    ScaleFinderContextType
} from "../../../Context/Guitar/ScaleFinder/ScaleFinderContext.ts";

/**
 * Custom React hook to access the ScaleFinder context.
 *
 * This hook allows components to consume and interact with the scale finder-related state and functions.
 * It ensures that the hook is used within a `ScaleFinderProvider`, throwing an error otherwise to prevent
 * unintended behavior.
 *
 */
export function useScaleFinderContext(): ScaleFinderContextType {
    // Access the ScaleFinderContext using React useContext hook
    const context = useContext(ScaleFinderContext);

    // If context is undefined, it means the hook is being used outside a ScaleFinderProvider
    if (!context) {
        throw new Error("useScaleFinderContext must be used within a ScaleFinderProvider");
    }

    // Return the context value, which includes state and any dispatch functions
    return context;
}
