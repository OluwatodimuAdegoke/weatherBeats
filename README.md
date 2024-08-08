# Weather Beats Application

The Weather Beats application is an innovative Next.js project that combines weather forecasting with music recommendations. By entering a city name, users can receive current weather information along with a curated list of songs that match the weather mood.

## Link

## Features

- **Weather Information**: Displays current weather conditions including temperature, weather conditions, and an icon representation.
- **Music Recommendations**: Suggests music tracks based on the current weather conditions of the specified city.
- **User Input**: Allows users to enter the name of the city for which they want weather information and music recommendations.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
        cd weather-muse
   ```
3. Install dependencies:
   ```bash
       npm install
   ```
4. Create a .env file in the root directory and add your API keys:
   ```bash
     SPOTIFY_ID=your_spotify_id
     SPOTIFY_SECRET=your_spotify_secret
     WEATHER_API=your_openweathermap_api_key
     GEMINI_API=your_google_generative_ai_key
   ```
5. Start the application:
   ```bash
    ng serve
   ```
6. Open your browser and navigate to http://localhost:4200.

## Usage

To use the Weather Muse application:

1. Enter the name of your current city in the input field.
2. Click the "Click Me" button to fetch the weather and music recommendations.
3. View the weather information displayed along with a list of recommended tracks.

![Screenshot 2024-08-07 231021](https://github.com/user-attachments/assets/18b0bd1e-4958-4dec-8cf9-66cf92ebad89)

## Built With

    Next.js
    Shadcn/UI
    Lucide
    Gemini Api
    Spotify Api
    OpenWeatherMap Api

License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

OpenWeatherMap API for providing weather data.
Spotify API for music recommendations.
