import {ReactElement} from "react";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";

import Template from "./Components/Template/Template.tsx";
import HomePage from "./Pages/HomePage.tsx";
import GuitarPage from "./Pages/GuitarPage.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import AboutPage from "./Pages/AboutPage.tsx";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage.tsx";
import LicensingPage from "./Pages/LicensingPage.tsx";

export default function Router(): ReactElement {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Template/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '*',
                    element: <NotFoundPage/>
                },
                {
                    path: '/Guitar',
                    element: <GuitarPage/>
                },
                {
                    path: '/About',
                    element: <AboutPage/>
                },
                {
                    path: '/PrivacyPolicy',
                    element: <PrivacyPolicyPage/>
                },
                {
                    path: '/Licensing',
                    element: <LicensingPage/>,
                },
            ]
        }
    ])

    return <RouterProvider router={router}/>
}