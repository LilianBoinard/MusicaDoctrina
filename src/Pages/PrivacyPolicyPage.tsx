export default function PrivacyPolicyPage() {

    const currentYear = new Date().getFullYear()

    return (
        <>

            <div className="font-sans leading-relaxed tracking-normal">
                <div className="max-w-3xl mx-auto py-8 px-4 lg:px-0">
                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Last updated: <span className="font-medium">{currentYear}</span>
                        </p>
                    </header>

                    {/* 1. Introduction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Welcome to <strong>MusicaDoctrina</strong> (hereinafter referred to as
                            <em> “the Website”</em>), an open-source music theory tool that allows you
                            to visualize or search scales on a fretboard. This Privacy Policy explains
                            how we handle user data.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            By using the Website, you agree to the terms of this Privacy Policy.
                            If you disagree with any of its terms, please discontinue using the Website.
                        </p>
                    </section>

                    {/* 2. No Collection of Personal Data */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            2. No Collection of Personal Data
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>
                                <strong>No user accounts:</strong> The Website does not offer any account
                                creation or authentication features.
                            </li>
                            <li>
                                <strong>No direct collection:</strong> We do not ask for personal data
                                (name, email address, etc.) at any point in order to use the Website.
                            </li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300">
                            Therefore, <strong>we do not intentionally collect any personal data</strong> on our
                            servers.
                        </p>
                    </section>

                    {/* 3. Technical Data and Logging */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            3. Technical Data and Logging
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Like most websites, our server (or hosting provider) may automatically
                            maintain access logs that contain technical information, such as:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>Your IP address</li>
                            <li>The type of browser used</li>
                            <li>The date and time of your visit</li>
                            <li>The pages you accessed</li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300">
                            These logs are stored for security purposes, to detect any potential
                            malfunctions or malicious activity. They are not used to identify you
                            personally and may only be reviewed periodically by our team to
                            troubleshoot technical issues or to improve the Website’s performance.
                        </p>
                    </section>

                    {/* 4. Cookies and Similar Technologies */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            4. Cookies and Similar Technologies
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>
                                <strong>Cookies:</strong> To our knowledge, the Website does not set
                                advertising or tracking cookies. If any technical cookies are used
                                (e.g., for language preferences or session management), they are solely
                                intended to enhance your user experience and do not collect personal data.
                            </li>
                            <li>
                                <strong>Traffic analysis:</strong> We do not use third-party analytics
                                tools (e.g., Google Analytics, Matomo) at this time. If we decide to
                                implement them in the future, we will inform you and request your consent
                                if required by law.
                            </li>
                        </ul>
                    </section>

                    {/* 5. Third-Party Services and Open-Source Code */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            5. Third-Party Services and Open-Source Code
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>
                                <strong>Hosting:</strong> The Website is hosted by [Name of hosting
                                service or GitHub Pages]. Please review their own Privacy Policy to learn
                                about their data processing practices.
                            </li>
                            <li>
                                <strong>Open-source code:</strong> The Website’s source code is publicly
                                available on GitHub ([Link to the repository]). Any contribution or
                                interaction (Issues, Pull Requests) made directly on GitHub is governed
                                by GitHub’s Privacy Policy. We encourage you to review
                                <a
                                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub’s Privacy Statement
                                </a>
                                before contributing.
                            </li>
                        </ul>
                    </section>

                    {/* 6. Data Protection */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            6. Data Protection
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Although we do not deliberately collect personal data, we take reasonable
                            security measures to protect the information that passes through the Website
                            or our servers. However, no system is completely infallible; you use the
                            Website at your own risk.
                        </p>
                    </section>

                    {/* 7. User Rights (GDPR) */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            7. User Rights (GDPR)
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Since no personal data is intentionally collected, most provisions of the
                            GDPR do not apply. However, if you believe that any information about you
                            is stored in our server logs and would like it deleted, you may contact us.
                            We will do our best to comply with your request, subject to applicable law.
                        </p>
                    </section>

                    {/* 8. Changes to the Privacy Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            8. Changes to the Privacy Policy
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We may update this Privacy Policy from time to time to reflect technological
                            or legal changes. The version in effect is the one posted on the Website at
                            the time of your visit, indicated by the “Last updated” date above. We
                            encourage you to review this page periodically to stay informed of any changes.
                        </p>
                    </section>

                    {/* 9. Contact Us */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            9. Contact Us
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            If you have any questions, comments, or requests related to this Privacy
                            Policy, please contact us:
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