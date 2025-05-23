import {ReactElement} from "react";
import {Outlet} from "react-router";

export default function OutletContent(): ReactElement {
    return(
        <>
            <div className="p-4 border border-gray-200 rounded-sm dark:border-gray-700 mt-16">
                <Outlet/>
            </div>
        </>
    )
}