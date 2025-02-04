import {FC, useState} from "react";
import {Alert} from "flowbite-react";
import { HiRefresh, HiInformationCircle } from "react-icons/hi";

interface FretboardFallbackProps {
    error: Error
}

const DisplayErrorBoundary: FC<FretboardFallbackProps> = ({error}) => {

    const [displayError, setDisplayError] = useState<boolean>(false)

    const handleRefreshPageClick = (): void => {
        window.location.reload()
    }

    const handleDisplayButtonClick = (): void => {
        return displayError ? setDisplayError(false) : setDisplayError(true)
    }

    return (
        <>
            {displayError && (
                <div className="mb-4 mt-2 text-sm text-gray-700 dark:text-gray-800">
                    Error for developer: {error.message}
                </div>
            )}
            <div className="flex">
                <button
                    onClick={handleRefreshPageClick}
                    type="button"
                    className="mr-2 inline-flex items-center rounded-lg bg-gray-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-900"
                >
                    <HiRefresh className="-ml-0.5 mr-2 h-4 w-4"/>
                    Refresh Page
                </button>
                <button
                    onClick={handleDisplayButtonClick}
                    type="button"
                    className="rounded-lg border border-gray-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-300 dark:border-gray-800 dark:text-gray-800 dark:hover:text-white"
                >
                    {displayError ? <>Hide Error</> : <>Display Error</>}
                </button>
            </div>
        </>
    )
}

const FretboardFallback: FC<FretboardFallbackProps> = ({error}) => {
    return (
        <>
            <Alert additionalContent={<DisplayErrorBoundary error={ error }/>} color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Oops..</span> An error occurred in the Fretboard Component
            </Alert>
        </>
    )
}

export default FretboardFallback