import React, { useState } from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import LocationInfo from "./LocationInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      alt: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      windspeed: Math.round(response.data.wind.speed),
      date: new Date(response.data.time * 1000),
    });

    setReady(true);
  }

  function search() {
    const apiKey = "9fb66eat3c45068of64821d7cabe200f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <LocationInfo data={weatherData} />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city"
            autoFocus
            autoComplete="off"
            onChange={getCity}
          />
          <input type="submit" value="Search" className="search-button" />{" "}
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div className="Weather">Loading...</div>;
  }
}
