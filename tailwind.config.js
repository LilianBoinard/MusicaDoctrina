const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./node_modules/flowbite/**/*.js",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
    ],
    theme: {},
    plugins: [
        flowbite.plugin(),
        require('tailwind-scrollbar')
    ],
}
