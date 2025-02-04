import React, {createContext} from "react";

export interface TabsContextType {
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

/* --- Create Context (NO COMPONENT EXPORT) --- */
export const TabsContext = createContext<TabsContextType | undefined>(undefined);