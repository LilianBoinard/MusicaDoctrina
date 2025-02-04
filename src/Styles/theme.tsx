


const Theme = {

    footer: {
        root: {
            base: "fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
        },
        groupLink: {
            base: "flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        }
    },
    dropdown: {
        color: {
            primary: "bg-red-500 hover:bg-red-600",
        },
    },
    tabs: {
        "tablist": {
            "tabitem": {
                "base": "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-0 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                "variant": {
                    "underline": {
                        "base": "",
                        "active": {
                            "on": "active border-indigo-600 border-b-2 text-indigo-600 dark:text-indigo-500",
                            "off": "text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                        }
                    },
                },
            }
        },
    }

};

export default Theme