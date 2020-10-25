import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import * as CityWeatherDetailsActions from "../../store/actions/cityWeatherDetails";
import {
  faQuestionCircle,
  faUmbrella,
  faCloudRain,
  faCloudSun,
  faSun,
  faCloud,
  faSmog,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "./css/weatherCard.css";
function WeatherInfoCard(props) {
  const dispatch = useDispatch();
  function defineIcon(weatherDesc) {
    return weatherDesc === "light rain" ? (
      faUmbrella
    ) : weatherDesc === "moderate rain" ? (
      <FontAwesomeIcon
        icon={faCloudRain}
        size="3x"
        style={{ color: "#92969c" }}
      />
    ) : weatherDesc === "few clouds" ? (
      <FontAwesomeIcon
        icon={faCloudSun}
        size="3x"
        style={{ color: "#92969c" }}
      />
    ) : weatherDesc === "clear sky" ? (
      <FontAwesomeIcon icon={faSun} size="3x" style={{ color: "#92969c" }} />
    ) : weatherDesc === "broken clouds" ? (
      <FontAwesomeIcon icon={faCloud} size="3x" style={{ color: "#66696e" }} />
    ) : weatherDesc === "overcast clouds" ? (
      <FontAwesomeIcon icon={faSmog} size="3x" style={{ color: "#66696e" }} />
    ) : weatherDesc === "heavy intensity rain" ? (
      <FontAwesomeIcon icon={faBolt} size="3x" style={{ color: "#66696e" }} />
    ) : (
      faQuestionCircle
    );
  }
  return (
    <>
      <div
        className="m-2 col-lg-3 col-md-4 col-sm-6 p-2 weatherCard"
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(CityWeatherDetailsActions.setIsShowing(true));
          dispatch(
            CityWeatherDetailsActions.setCurrentCityWeatherDetails({
              ...props,
            })
          );
        }}
      >
        <div className="row">
          <div className="col-md-3 pl-4 pr-4">
            <span>{defineIcon(props.description)}</span>
          </div>
          <div className="col-md-9">
            <p>
              <b> {props.name} </b> <br />
              <span>{props.main}</span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default WeatherInfoCard;
