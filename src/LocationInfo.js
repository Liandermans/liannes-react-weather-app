import React from "react";
import FormatDate from "./FormatDate";

export default function LocationInfo(props) {
  return (
    <div className="LocationInfo">
      <ul className="city-date">
        <li>
          <h2>{props.data.city}</h2>
        </li>
        <li className="date-time">
          <FormatDate date={props.data.date} />
        </li>
      </ul>
    </div>
  );
}
