import React, {useState} from "react";
import { TabsContext } from "./TabsContext.ts";

export function TabsProvider({ children }: { children: React.ReactNode }) {
    /** GUITAR TABS MENU STATE */
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <TabsContext.Provider
            value={{
                activeTab,
                setActiveTab,
            }}
        >
            {children}
        </TabsContext.Provider>
    );
}
