import React, { useState } from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      windspeed: Math.round(response.data.wind.speed),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <ul className="city-date">
          <li>
            <h2>{weatherData.city}</h2>
          </li>
          <li className="date-time">Saturday, 13:40</li>
        </ul>

        <form>
          <input type="text" placeholder="Enter city" autoFocus="on" />
          <input type="submit" value="Search" className="search-button" />{" "}
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        </form>

        <ul className="weather-today">
          <li>
            <img src={weatherData.icon_url} alt={weatherData.icon} />
          </li>
          <li className="temperature">
            {weatherData.temperature} <span>°C</span>
          </li>
          <li className="description">{weatherData.description}</li>
        </ul>

        <div className="wrapper">
          <div>
            <FontAwesomeIcon icon={faDroplet} className="icon" />
            <br />
            {weatherData.humidity}%
          </div>
          <div>
            <FontAwesomeIcon icon={faWind} className="icon" />
            <br />
            {weatherData.windspeed} m/s
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9fb66eat3c45068of64821d7cabe200f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  return <div className="Weather">Loading...</div>;
}
