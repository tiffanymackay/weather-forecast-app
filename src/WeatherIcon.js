import React from "react";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "clear-day",
        "01n": "starry-night",
        "02n": "partly-cloudy-night",
        "02d": "partly-cloudy-day",
        "03d": "partly-cloudy-day",
        "03n": "cloudy",
        "04d": "overcast-day",
        "04n": "overcast-night",
        "09d": "rain",
        "09n": "rain",
        "10d": "partly-cloudy-day-rain",
        "10n": "partly-cloudy-night-rain",
        "11d": "thunderstorms-day",
        "11n": "thunderstorms",
        "13d": "snow",
        "13n": "snow",
        "50d": "mist",
        "50n": "mist",

    };
    let imgUrl = `https://basmilius.github.io/weather-icons/production/fill/all/${codeMapping[props.code]}.svg`;
    
    return <img src={imgUrl} alt="weather icon" width="90px"></img>;
}