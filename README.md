# OpenUV - UV Index Checker

This project is a simple web application that allows users to check the current UV index at a specified location. The application uses the OpenUV API to fetch real-time UV index data based on latitude and longitude coordinates provided by the user.

## Features

- Get the current UV index based on latitude and longitude.
- Displays the maximum UV index for the day.
- Shows sunrise and sunset times.
- Provides safety recommendations based on the UV index level.
- User-friendly interface with responsive design.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Axios (for HTTP requests)
- OpenUV API
- HTML/CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager).
- You have a working API key from OpenUV. (Replace the placeholder API key in the code with your own.)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GavriloaiaMircea/Open-UV.git
    cd OpenUV-Checker
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Replace the placeholder API key in `app.js` with your own OpenUV API key:

    ```javascript
    const apiKey = "your-openuv-api-key";
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

    Alternatively, if you have `nodemon` installed, you can use:

    ```bash
    nodemon app.js
    ```

2. Open your web browser and go to:

    ```
    http://localhost:3000
    ```

3. Enter the latitude and longitude of the location you want to check and press "Search".

4. The UV index information will be displayed along with safety recommendations.
