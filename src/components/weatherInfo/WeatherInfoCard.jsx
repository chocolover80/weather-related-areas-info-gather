import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./css/weatherCard.css";
function WeatherInfoCard(props) {
  return (
    <>
      <div className="m-2 col-md-3 p-2 weatherCard">
        <div className="row">
          <div className="col-md-4">
            <span>
              <FontAwesomeIcon icon={faSun} size="5x" />
            </span>
          </div>
          <div className="col-md-8">
            <p>
              <b> {props.name} </b> <br />
              <span>{props.main}</span>
              <br />
              <span>{props.description}</span>
              <br />
              <span>Temp: {props.temp}</span>
              <br />
              <span>Feels like: {props.feelsLike}</span>
              <br />
              <span>Minimum of: {props.tempMin}</span>
              <br />
              <span>Maximum of: {props.tempMax}</span>
              <br />
              <span>Pressure: {props.pressure}</span>
              <br />
              <span>Humidity: {props.humidity}</span>
              <br />
              <span>Wind: {props.wind}</span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default WeatherInfoCard;
