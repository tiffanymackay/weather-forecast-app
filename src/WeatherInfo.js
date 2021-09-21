import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="weatherData">
      <div className="row px-2">
        <div className="col">
          <h1>
              <WeatherIcon code="props.data.icon" alt={props.data.description} />
          {props.data.city}</h1>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h2><FormatDate date={props.data.date} /></h2>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h3>{Math.round(props.data.temperature)}˚</h3>
          <span>
            <a href="/" className="unit">
              F{" "}
            </a>
            |{" "}
            <a href="/" className="unit">
              C
            </a>
          </span>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4 className="text-capitalize">{props.data.description}</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Wind: {Math.round(props.data.wind)} mph</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Humidity: {props.data.humidity}%</h4>
        </div>
      </div>
    </div>
    );
}