export default function LicensingPage() {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className="dark:bg-gray-900 font-sans leading-relaxed tracking-normal">
                <div className="max-w-3xl mx-auto py-8 px-4 lg:px-0">
                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Licensing
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Last updated: <span className="font-medium">{currentYear}</span>
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Thank you for using our web application. This Licensing page outlines
                            the terms under which our project is made available. The project is
                            released under the MIT License, described below.
                        </p>
                    </section>

                    {/* MIT License */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            2. MIT License
                        </h2>
                        <div
                            className="bg-gray-100 dark:bg-gray-800 rounded p-4 text-sm text-gray-700 dark:text-gray-200">
            <pre className="whitespace-pre-wrap">
{`MIT License

Copyright (c) Lilian Boinard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES 
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE 
OR OTHER DEALINGS IN THE SOFTWARE.
`}
            </pre>
                        </div>
                    </section>

                    {/* Contact or Additional Notes */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            3. Additional Information
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Should you have any questions or concerns about this license, feel
                            free to reach out to us at:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>Via GitHub:</strong> <a href="https://github.com/LilianBoinard"
                                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lilian
                                Boinard</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}