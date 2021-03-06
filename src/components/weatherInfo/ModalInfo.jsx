import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./css/modalInfo.css";
import WeatherInfoCard from "./WeatherInfoCard";
import DetailsModal from "./DetailsModal";
import WeatherInfoService from "../../service/WeatherInfoService";
import * as WeatherInfoListActions from "../../store/actions/citiesWeatherInformation";
function ModalInfo() {
  const dispatch = useDispatch();
  const currentMapInfo = useSelector((state) => state.mapInformation);
  const currentWeatherInfoList = useSelector(
    (state) => state.citiesWeatherInformation.currentWeatherInfoList
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const pin = currentMapInfo.pin;

    try {
      const payload = await WeatherInfoService.RetrieveWeatherInfoForCities(
        pin.lat,
        pin.lng,
        15
      );
      if (payload.status >= 400) {
        dispatch(WeatherInfoListActions.setErrors(payload.data));
        dispatch(WeatherInfoListActions.setCurrentWeatherInfoList([]));
      } else {
        dispatch(WeatherInfoListActions.setErrors(""));
        dispatch(
          WeatherInfoListActions.setCurrentWeatherInfoList(payload.data)
        );
      }
    } catch (error) {
      dispatch(WeatherInfoListActions.setErrors(error.message));
      dispatch(WeatherInfoListActions.setCurrentWeatherInfoList([]));
    }
    setShow(true);
  };

  return (
    <>
      <div className="col-md-4 pl-3 pr-3 pt-1 pb-1">
        <button
          id="btnSearch"
          onClick={async () => {
            await handleShow();
          }}
          type="button"
          className="btn btn-info btn-block responsive-width"
          text="Search"
        >
          Search
        </button>
      </div>

      <div>
        <Modal show={show} onHide={handleClose} animation={false} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Weather information obtained</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Below you're gonna see the weather information gathered via
              geolocation for the respective city and its surroundings:
            </p>
            <div
              className="row modal-lane-top"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <DetailsModal />
              {currentWeatherInfoList &&
              currentWeatherInfoList.list &&
              currentWeatherInfoList.list.length > 0 ? (
                currentWeatherInfoList.list.map((item, index) => (
                  <WeatherInfoCard
                    key={index}
                    name={item.name}
                    main={item.weather[0].main}
                    description={item.weather[0].description}
                    tempMin={(item.main.temp_min - 273.15).toFixed(2) + " ºC"}
                    tempMax={(item.main.temp_max - 273.15).toFixed(2) + " ºC"}
                  />
                ))
              ) : (
                <>
                  <h3>No data found for the location</h3>
                </>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ModalInfo;
