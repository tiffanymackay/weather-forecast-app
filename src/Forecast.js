import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);

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
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
              return (
                <ForecastDay data={dailyForecast} />
              );
            }
          }
          )}
        </div>
      </div>
    );
    
  } else {
    let apiKey = `608af81e20cb247f5c26d81688ec22f5`;  
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    return null;
    
  }

}
