import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
        <span className="units">
            <h3>{Math.round(props.celsius)}˚</h3>
              <span className="conversion">C{" "}</span>
            |{" "}
            <a href="/" onClick={showFahrenheit} className="unit">
              F
            </a>
          </span>);
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <span className="units">
            <h3>{Math.round(fahrenheit)}˚</h3>
            <a href="/" onClick={showCelsius} className="unit">
            C{" "}
            </a>
            |{" "}
            <span className="conversion">F{" "}</span>
      </span>);
}
}