import React from "react";

export default function WeatherTemperature(props) {
        return (
        <span className="units">
            <h3>{Math.round(props.celsius)}˚
              <span className="conversion">F{" "}</span></h3>
          </span>);
}