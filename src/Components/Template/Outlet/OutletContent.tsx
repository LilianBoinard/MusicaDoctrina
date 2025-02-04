import {ReactElement} from "react";
import {Outlet} from "react-router";

export default function OutletContent(): ReactElement {
    return(
        <>
            <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700 mt-14">
                <Outlet/>
            </div>
        </>
    )
}