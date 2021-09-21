import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(false);
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

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
    setDisplay(true);
    setCity(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSearch(event) {
    event.preventDefault(); 
    let apiKey = `dc249be89a0015c3980887c32be65599`;   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (display) {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        {form}
      </div>
      <div className="weatherData">
      <div className="row px-2">
        <div className="col">
          <h1>
          <img src={icon} alt={description} /> {city}</h1>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h2>Monday, Sep 13, 2021 3:35 PM</h2>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h3>{temperature}˚</h3>
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
          <h4>{description}</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Wind: {wind} mph</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <h4>Humidity: {humidity}%</h4>
        </div>
      </div>
      <hr />
    </div>
    </nav>
  );
  } else return form;
}
