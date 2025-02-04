export default function AboutPage() {
    return(
        <>
            <div className="dark:bg-gray-900 font-sans leading-relaxed tracking-normal">
                <div className="max-w-3xl mx-auto py-8 px-4 lg:px-0">
                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            About
                        </h1>
                    </header>

                    {/* 1. Introduction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Welcome to MusicaDoctrina! On this page, you&#39;ll learn more about
                            our mission, our background, and the values that guide our project.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            We aim to provide accessible, open-source tools for everyone interested
                            in music theory. Whether you’re a beginner or an experienced musician,
                            our goal is to help you explore, learn, and create.
                        </p>
                    </section>

                    {/* 2. Our Mission */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            2. Our Mission
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Our mission is to simplify the understanding of scales, chords, and
                            theory through interactive and intuitive tools. We believe that
                            knowledge of music theory should be freely available and easy to grasp.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            With this project, we hope to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                            <li>Empower users to learn new scales and chords efficiently.</li>
                            <li>Encourage creativity by visualizing theoretical concepts.</li>
                            <li>Foster collaboration and growth within the open-source community.</li>
                        </ul>
                    </section>

                    {/* 3. The Team */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            3. The Team
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            This project is developed and maintained by passionate individuals who
                            love both music and coding. We welcome contributions, feedback, and
                            support from the community to make this project even better.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            If you wish to contribute, please check out our GitHub repository or
                            get in touch with us directly. We appreciate any form of help, from
                            reporting issues to submitting pull requests.
                        </p>
                        <strong className="text-gray-700 dark:text-gray-300">GitHub Repo:</strong> <a href="https://github.com/LilianBoinard/MusicaDoctrina"
                                                                                                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">MusicaDoctrina</a>
                    </section>

                    {/* 4. Contact Us */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            4. Contact Us
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Have questions, comments, or suggestions? Feel free to reach out:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>Via GitHub:</strong> <a href="https://github.com/LilianBoinard" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lilian Boinard</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}