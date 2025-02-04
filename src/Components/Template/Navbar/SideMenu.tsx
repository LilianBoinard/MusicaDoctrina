import {ReactElement, useEffect} from "react";
import { initFlowbite } from 'flowbite'
import {useNavigate} from "react-router";
import {useTabsContext} from "../../../Hooks/Guitar/Tabs/useTabsContext.ts";
import { CgPiano } from "react-icons/cg";

export default function SideMenu(): ReactElement {
    useEffect(() => {
        initFlowbite();
    }, []);

    const navigate = useNavigate()

    const { setActiveTab } = useTabsContext()

    return(
        <>
            <aside id="sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 xl:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                   aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a onClick={() => {
                                navigate('./')
                            }}
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg
                                    className="w-[28px] h-[28px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="ms-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <button type="button"
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg viewBox="0 -0.5 17 17" version="1.1" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     className="w-8 h-8 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                        <path
                                            d="M16.781,0.959 L16.047,0.223 C15.735,-0.09 15.371,-0.00699999998 15.095,0.269 L12.806,2.564 C12.562,2.809 12.457,3.093 12.678,3.4 L9.324,6.763 C8.199,5.975 6.791,5.947 5.965,6.776 C5.722,7.02 5.049,7.822 4.951,8.144 C4.877,8.387 4.224,8.791 3.918,8.787 C3.129,8.78 2.388,9.041 1.84,9.591 C0.593,10.843 0.824,13.11 2.361,14.653 C3.9,16.193 6.159,16.427 7.406,15.174 C7.956,14.624 8.217,13.882 8.209,13.089 C8.205,12.783 8.623,12.125 8.873,12.046 C9.188,11.947 10.121,11.364 10.359,11.127 C11.177,10.306 11.156,8.915 10.392,7.793 L13.607,4.335 C13.916,4.561 14.23,4.414 14.476,4.168 L16.765,1.874 C17.041,1.596 17.096,1.274 16.781,0.959 L16.781,0.959 Z M7.512,11.133 C6.627,11.133 5.907,10.421 5.907,9.541 C5.907,8.66 6.628,7.948 7.512,7.948 C8.396,7.948 9.116,8.66 9.116,9.541 C9.115,10.421 8.396,11.133 7.512,11.133 L7.512,11.133 Z"
                                        />

                                </svg>
                                <span
                                    className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Guitar</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 10 6" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>

                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <a onClick={() => {
                                        setActiveTab(0)
                                        navigate('/Guitar/')
                                    }}
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg
                                            className="w-[28px] h-[28px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M21 9.5V12.5C21 14.9853 16.9706 17 12 17C7.02944 17 3 14.9853 3 12.5V9.5C3 11.9853 7.02944 14 12 14C16.9706 14 21 11.9853 21 9.5ZM3 14.5C3 16.9853 7.02944 19 12 19C16.9706 19 21 16.9853 21 14.5V17.5C21 19.9853 16.9706 22 12 22C7.02944 22 3 19.9853 3 17.5V14.5ZM12 12C7.02944 12 3 9.98528 3 7.5C3 5.01472 7.02944 3 12 3C16.9706 3 21 5.01472 21 7.5C21 9.98528 16.9706 12 12 12Z"></path>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Scale Visualizer</span>
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => {
                                        setActiveTab(1)
                                        navigate('/Guitar/')

                                    }}
                                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg
                                            className="w-[28px] h-[28px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M12 13.5351V3H20V6H14V17C14 19.2091 12.2091 21 10 21C7.79086 21 6 19.2091 6 17C6 14.7909 7.79086 13 10 13C10.7286 13 11.4117 13.1948 12 13.5351Z"></path>
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Scale Finder</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <CgPiano className="w-7 h-7 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor"/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Piano</span>
                                <span
                                    className="inline-flex items-center justify-center ms-3 px-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">Soon</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">

                    </ul>
                    <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div className="flex items-center mb-3">
                        <span
                            className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            <button type="button"
                                    className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                                    data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            Preview the Best Musical Theory Tool of the Future
                        </p>
                        <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                           onClick={() => navigate('/About/')}>About MusicaDoctrina</a>
                    </div>
                </div>
            </aside>
        </>
    )
}