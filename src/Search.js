import React, { useState } from "react";


export default function Search(props) {
  let [city, setCity] = useState("");

  function handleSearch(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

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
            placeholder="Search"
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
      </div>
    </nav>
  );
}
