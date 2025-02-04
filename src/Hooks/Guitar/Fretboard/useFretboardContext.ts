import {useContext} from "react";
import {FretboardContext, FretboardContextType} from "../../../Context/Guitar/Fretboard/FretboardContext.ts";

/**
 * Custom React hook to access the Fretboard context.
 *
 * This hook allows components to consume and interact with the fretboard-related state and functions.
 * It ensures that the hook is used within a `FretboardProvider`, throwing an error otherwise to prevent
 * unintended behavior.
 *
 */
export function useFretboardContext(): FretboardContextType{
    // Access the FretboardContext using React's useContext hook
    const context = useContext(FretboardContext);

    // If context is undefined, it means the hook is being used outside of a FretboardProvider
    if (!context) {
        throw new Error("useFretboardContext must be used within a FretboardProvider");
    }

    // Return the context value, which includes state and any dispatch functions
    return context;
}
