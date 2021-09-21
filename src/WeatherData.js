import React from "react";

export default function weatherData() {
  return (
    <div className="weatherData">
      <div className="row px-2">
        <div className="col">
          <h1>🌤 Seattle</h1>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h2>Monday, Sep 13, 2021 3:35 PM</h2>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h3>82˚</h3>
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
          <h4>Overcast Clouds</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Feels like: 81˚</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Humidity: 61%</h4>
        </div>
      </div>
      <hr />
    </div>
  );
}
