import React, { useState, useEffect } from "react";
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

  function load() {
    let apiKey = `608af81e20cb247f5c26d81688ec22f5`;  
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast justify-content-start">
        <hr />
        <div className="row mx-auto">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
              return (
                <div  className="col-6 col-sm-4 col-md-2 col-xl-2 py-3" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          }
          )}
        </div>
      </div>
    );
    
  } else {
    load();
    return null;
    
  }

}
