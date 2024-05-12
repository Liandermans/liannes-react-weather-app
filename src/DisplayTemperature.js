import React, { useState } from "react";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        {props.celsius}{" "}
        <span className="degrees">
          °C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    if (unit === "fahrenheit") {
      const tempFahrenheit = Math.round((props.celsius * 9) / 5 + 32);
      return (
        <span>
          {tempFahrenheit}{" "}
          <span className="degrees">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </span>
      );
    }
  }
}
