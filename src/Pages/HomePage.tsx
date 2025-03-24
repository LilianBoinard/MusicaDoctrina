import {ReactElement} from "react";
import {useNavigate} from "react-router";

export default function HomePage(): ReactElement {

    const navigate = useNavigate()

    return (
        <>
            <section
                className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <div
                        className="inline-flex justify-between items-center py-1.5 px-1.5 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        <span className="text-xs bg-indigo-600 rounded-full text-white px-4 py-1.5 me-3">New</span>
                        <span
                            className="text-sm font-medium">Piano coming soon ! Stay tuned</span>
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Bringing Music Education to the Digital Age
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                        At MusicaDoctrina, we harness technology to revolutionize music learning and understanding.
                    </p>
                    <button
                        onClick={() => {
                            navigate('/Guitar')
                        }}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                        Enter in MDoctrina
                        </span>
                    </button>
                </div>
                <div
                    className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 w-full h-96 absolute top-0 left-0 z-0"></div>
            </section>
        </>
    )
}