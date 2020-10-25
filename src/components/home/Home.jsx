import React from "react";
import { useSelector } from "react-redux";
import ReactGoogleMaps from "../map/ReactGoogleMaps";
import MapButton from "../map/MapButton";
import MapInputText from "../map/MapInputText";
import ModalInfo from "../weatherInfo/ModalInfo";
function Home() {
  const currentMapInfo = useSelector((state) => state.mapInformation);
  const currentWeatherInfoList = useSelector(
    (state) => state.citiesWeatherInformation
  );
  return (
    <>
      <h1 className="pl-3"> My React App</h1>
      <div className="row col-md-12 p-0 mx-auto">
        <MapInputText idInput="txtLatitude" inputCategory="latitude" />
        <MapInputText idInput="txtLongitude" inputCategory="longitude" />

        <MapButton
          btnId="btnAdd"
          btnCategory="btn btn-success"
          text="Add Pin"
        />
        <MapButton
          btnId="btnRem"
          btnCategory="btn btn-danger"
          text="Remove pin"
        />
        <ModalInfo />
        {currentMapInfo.errors || currentMapInfo.errors !== "" ? (
          <div className="col-md-12 pl-3 pr-3 pt-1 pb-1">
            <div className="pl-2 pr-2 alert alert-danger" role="alert">
              {currentMapInfo.errors}
            </div>
          </div>
        ) : (
          <></>
        )}
        {currentWeatherInfoList.errors ||
        currentWeatherInfoList.errors !== "" ? (
          <div className="col-md-12 pl-3 pr-3 pt-1 pb-1">
            <div className="pl-2 pr-2 alert alert-danger" role="alert">
              {currentWeatherInfoList.errors}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <ReactGoogleMaps
        location={currentMapInfo.location}
        zoomInfo={currentMapInfo.zoom}
      />
    </>
  );
}
export default Home;
