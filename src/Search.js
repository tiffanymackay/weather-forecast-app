import React, { useState } from "react";
import axios from "axios";

export default function Search() {
    const [weatherData, setWeatherData] = useState({ready: false})
    let [city, setCity] = useState("");

  /*
  let [display, setDisplay] = useState(false);
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState(""); */

  let form = (
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
  );
  function showTemperature(response) {
      console.log(response.data);
      setWeatherData({
            ready: true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          city: response.data.name,
          description: response.data.weather[0].description,
          wind: response.data.wind.speed,
          iconUrl: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/282/sun_2600-fe0f.png",
          date: "Monday 7:00"
      });
    /* setDisplay(true);
    setCity(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/282/sun_2600-fe0f.png");
   */}

  function handleSearch(event) {
    event.preventDefault(); 
    let apiKey = `dc249be89a0015c3980887c32be65599`;   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }


  if (weatherData.ready) {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        {form}
      </div>
      <div className="weatherData">
      <div className="row px-2">
        <div className="col">
          <h1>
          <img src={weatherData.iconUrl} alt={weatherData.description} width="50px" /> {weatherData.city}</h1>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h2>{weatherData.date}</h2>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h3>{Math.round(weatherData.temperature)}˚</h3>
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
          <h4 className="text-capitalize">{weatherData.description}</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Wind: {Math.round(weatherData.wind)} mph</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Humidity: {weatherData.humidity}%</h4>
        </div>
      </div>
      <hr />
    </div>
    </nav>
  );
  } else {
         return form;
  }
}
