import {ReactElement} from "react";
import TopNavbar from "./Navbar/TopNavbar.tsx";
import SideMenu from "./Navbar/SideMenu.tsx";
import OutletContent from "./Outlet/OutletContent.tsx";
import Footer from "./Footer/Footer.tsx";
import {TabsProvider} from "../../Context/Guitar/Tabs/TabsProvider.tsx";

export default function Template(): ReactElement {
    return (
        <>
            <TopNavbar/>
            <TabsProvider>
                <SideMenu/>
                <div className="p-4 pt-6 xl:pt-4 xl:ml-64 bg-gray dark:bg-gray-900">
                    <OutletContent/>
                    <Footer/>
                </div>
            </TabsProvider>
        </>
    )
}