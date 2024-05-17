import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    const temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    const temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div>
        <span>{maxTemperature()} °C</span>{" "}
        <span className="min-temperature">{minTemperature()} °C</span>
      </div>
    </div>
  );
}
