import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  function reload() {
    const apiKey = "9fb66eat3c45068of64821d7cabe200f";
    const city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            return index > 0 && index < 6 ? (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  } else {
    reload();
    return null;
  }
}
