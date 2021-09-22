import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast justify-content-start">
        <hr />
        <div className="row px-1 mx-auto">
          <div className="col-6 col-sm-4 col-md-2 col-xl-2 py-3">
            <div className="row justify-content-center days">{forecast[0].dt}</div>
            <div className="row justify-content-center icons">
            <WeatherIcon code={forecast[0].weather[0].icon} />
            </div>
            <div className="temp">
            <span className="high-temp"> {forecast[0].temp.max}˚</span>| <span className="low-temp">{forecast[0].temp.min}˚</span>
            </div>
          </div> 
        </div>
      </div>
    );
    
  } else {
    let apiKey = `608af81e20cb247f5c26d81688ec22f5`;  
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    return null;
    
  }

}
