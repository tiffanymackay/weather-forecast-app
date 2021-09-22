import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Search() {
  return (
    <div className="Forecast">
      <hr />
      <div className="row px-1 mx-auto">
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
          <div className="row justify-content-center days">MON</div>
          <div className="row justify-content-center icons">
          <WeatherIcon code="01d" />
          </div>
          <div className="row justify-content-center">81˚/ 61˚</div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
          <div className="row justify-content-center days">TUE</div>
          <div className="row justify-content-center icons">
          <WeatherIcon code="01d" />
          </div>
          <div className="row justify-content-center">81˚/ 61˚</div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
          <div className="row justify-content-center days">WED</div>
          <div className="row justify-content-center icons">
          <WeatherIcon code="01d" />
          </div>
          <div className="row justify-content-center">81˚/ 61˚</div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
          <div className="row justify-content-center days">THU</div>
          <div className="row justify-content-center icons">
          <WeatherIcon code="01d" />
          </div>
          <div className="row justify-content-center">81˚/ 61˚</div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
          <div className="row justify-content-center days">FRI</div>
          <div className="row justify-content-center icons">
          <WeatherIcon code="01d" />
          </div>
          <div className="row justify-content-center">81˚/ 61˚</div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
          <div className="row justify-content-center days">SAT</div>
          <div className="row justify-content-center icons">
          <WeatherIcon code="01d" />
          </div>
          <div className="row justify-content-center">81˚/ 61˚</div>
        </div>
      </div>
    </div>
  );
}
