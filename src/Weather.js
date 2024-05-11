import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  return (
    <div className="Weather">
      <ul>
        <li>New York</li>
        <li>Saturday, 13:40</li>
      </ul>
      <form>
        <input type="text" placeholder="Enter city" autoFocus="on" />
        <input type="submit" value="Search" />
      </form>
      <FontAwesomeIcon icon={faLocationDot} />
      <ul className="weather-today">
        <li>Icon</li>
        <li>Temperature current</li>
        <li>Description</li>
      </ul>
      <div className="wrapper">
        <div>
          <FontAwesomeIcon icon={faDroplet} /> <br />
          Humidity
        </div>
        <div>
          <FontAwesomeIcon icon={faWind} /> <br />
          Wind
        </div>
      </div>
    </div>
  );
}
