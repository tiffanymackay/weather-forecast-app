import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ready: false})
    let [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
      console.log(response.data);
      setWeatherData({
            ready: true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          city: response.data.name,
          description: response.data.weather[0].description,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
          date: new Date(response.data.dt * 1000),
      });
}

  function handleSearch(event) {
    event.preventDefault(); 
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = `dc249be89a0015c3980887c32be65599`;   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }

  if (weatherData.ready) {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
      <form
    onSubmit={handleSearch}
    className="d-inline-flex flex-fill flex-wrap flex-sm-nowrap align-items-center p-2 mb-2"
  >
    <input
      onChange={updateCity}
      className="form-control me-2 my-2"
      type="search"
      placeholder="Enter a city..."
      aria-label="Search"
    />
    <button
      value="Search"
      id="search"
      className="btn btn-secondary mx-1 p-1"
      type="submit"
    >
      Search
    </button>
    <button className="btn btn-secondary mx-1 p-1" type="submit">
      Current
    </button>
  </form>
        <WeatherInfo data={weatherData}/>
      </div>
    </nav>
  );
  } else {
    search();
    return "Loading...";
  }
}
