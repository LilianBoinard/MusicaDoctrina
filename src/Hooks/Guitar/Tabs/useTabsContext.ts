import {useContext} from "react";
import {TabsContext, TabsContextType} from "../../../Context/Guitar/Tabs/TabsContext.ts";

/**
 * Custom React hook to access the Tabs context.
 *
 * This hook allows components to consume and interact with the tabs-related state and functions.
 * It ensures that the hook is used within a `TabsProvider`, throwing an error otherwise to prevent
 * unintended behavior.
 *
 */
export function useTabsContext(): TabsContextType{
    // Access the TabsContext using React's useContext hook
    const context = useContext(TabsContext);

    // If context is undefined, it means the hook is being used outside of a TabsProvider
    if (!context) {
        throw new Error("useTabsContext must be used within a TabsProvider");
    }

    // Return the context value, which includes state and any dispatch functions
    return context;
}