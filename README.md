# MusicaDoctrina

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4?logo=tailwindcss)
![Eslint](https://img.shields.io/badge/ESLint-9.17.0-4B32C3?logo=eslint)
![Vitest](https://img.shields.io/badge/Vitest-3.0.3-FFC700?logo=vitest)



**MusicaDoctrina** is an open-source music theory tool designed to help musicians visualize and discover scales, chords on their instrument. Whether you're a beginner looking to understand scales or an advanced guitarist seeking to explore new musical horizons, this tool offers an intuitive interface to enhance your musical journey.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contribute](#contribute)
- [License](#license)
- [Contact](#contact)

## Features

- **Scale Visualization:** Easily visualize any musical scale on a guitar fretboard.
- **Scale Detection:** Select notes on the fretboard to detect possible scales.
- **Custom Tunings:** Supports various guitar tunings, including standard and custom configurations.
- **Interactive Interface:** Hover over notes to preview their role within the scale.
- **Responsive Design:** Optimized for different screen sizes and devices.
- **Open Source:** Completely open for contributions and enhancements.

## Demo

[Online Demo](https://musicadoctrina.com/)

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/LilianBoinard/MusicaDoctrina.git
    cd MusicaDoctrina
    ```

2. **Install Dependencies**

   With npm:

    ```bash
    npm install
    ```

   Or with yarn:

    ```bash
    yarn install
    ```

3. **Run the Application**

   With npm:

    ```bash
    npm run dev
    ```

   Or with yarn:

    ```bash
    yarn dev
    ```
   The application will run in development mode.\
   Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

## Usage

1. **Select a Scale**
    - Choose the root note (e.g., C, G#, etc.).
    - Select the scale type (e.g., Major, Minor).

2. **Visualize the Scale**
    - The fretboard will display the selected scale, highlighting the corresponding notes.
    - Hover over a note to preview its role within the scale.

3. **Detect Scales**
    - Click on notes on the fretboard to select them.
    - The tool will automatically detect and list possible scales based on the selected notes.

4. **Custom Tunings**
    - Access the tuning settings to select or define a custom tuning.
    - The fretboard visualization will adjust accordingly.

## Technologies

- **Frontend:**
 
    - ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) - JavaScript library for building user interfaces.
    - ![Flowbite](https://img.shields.io/badge/Flowbite-2.5.2-0B7285) - React component library

- **Utilities:**
    - ![Tonal](https://img.shields.io/badge/Tonal-6.4.0-FF5733) - Music theory library for handling scales, notes, intervals, and more.

- **State Management:**

    - Custom hooks and contexts to manage global state related to the fretboard, tuning, and scales.

- **Package Management:**
    
    - ![npm](https://img.shields.io/badge/npm-vX.X.X-CB3837?logo=npm)
    - ![node](https://img.shields.io/badge/Node.js-22.10.7-339933?logo=node.js)


## Contribute

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.  
All contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**

   Click the **Fork** button at the top right of this page.

2. **Clone your Fork**

    ```bash
    git clone https://github.com/LilianBoinard/MusicaDoctrina.git
    cd MusicaDoctrina
    ```

3. **Create a Branch**

    ```bash
    git checkout -b feature/YourFeatureName
    ```

4. **Make your Changes**

   Implement your feature or bug fix.

5. **Commit your Changes**

    ```bash
    git commit -m "Add descriptive message"
    ```

6. **Push to the Branch**

    ```bash
    git push origin feature/YourFeatureName
    ```

7. **Open a Pull Request**

   Go to your forked repository on GitHub and click the **New Pull Request** button.

## Guidelines

- **Code Quality:** Ensure your code follows the project's coding standards and is well-documented.
- **Tests:** Add unit tests for new features or bug fixes.
- **Commit Messages:** Write clear and descriptive commit messages.
- **Respect the Community:** Be respectful and constructive in your interactions.

## License

Distributed under the **MIT License**. See the [`LICENSE`](LICENSE) file for more information.

## Contact

Lilian Boinard - [boinard.lilian@outlook.fr](mailto:boinard.lilian@outlook.fr)

Project Link: [https://github.com/LilianBoinard/MusicaDoctrina](https://github.com/LilianBoinard/MusicaDoctrina.git)
