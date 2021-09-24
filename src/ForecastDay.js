import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}˚`;
    }
    
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}˚`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return (
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
            <div className="row justify-content-center days">{day()}</div>
            <div className="row justify-content-center icons">
            <WeatherIcon code={props.data.weather[0].icon} />
            </div>
            <div className="temp">
            <span className="high-temp"> {maxTemperature()}</span>| <span className="low-temp">{minTemperature()}</span>
            </div>
        </div> 
    );
}