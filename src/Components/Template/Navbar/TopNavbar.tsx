import {ReactElement} from "react";
import {DarkThemeToggle} from "flowbite-react";
import {useNavigate} from "react-router";
import { SiMusicbrainz } from "react-icons/si";

export default function TopNavbar(): ReactElement {

    const navigate = useNavigate()

    return(
        <>
            <nav
                className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="sidebar" data-drawer-toggle="sidebar"
                                    aria-controls="sidebar" type="button"
                                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd"
                                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a onClick={() => {navigate('./')}} className="flex ms-1 md:me-24">
                                <SiMusicbrainz className="w-9 h-9 flex-shrink-0 text-black dark:text-gray-100" fill="currentColor"/>
                                <span
                                    className="self-center -translate-y-0.5 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">MDoctrina</span>
                            </a>
                        </div>

                        {/* Switch Theme Button */}
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <DarkThemeToggle className="pb-0 pt-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}