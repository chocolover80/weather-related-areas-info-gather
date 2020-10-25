import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as CityWeatherDetailsActions from "../../store/actions/cityWeatherDetails";
import "./css/modalInfo.css";
function DetailsModal(props) {
  const dispatch = useDispatch();
  const cityWeatherDetails = useSelector((state) => state.cityWeatherDetails);
  const fillInfo = cityWeatherDetails.currentCityWeatherDetails;
  const handleClose = () => {
    dispatch(CityWeatherDetailsActions.setIsShowing(false));
  };
  return (
    <>
      <Modal
        show={cityWeatherDetails.isShowing}
        onHide={handleClose}
        centered
        animation={true}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Weather details for {fillInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Below you're gonna see the weather information for a single city,
            choosed on the previous modal between all the 15 ones:
          </p>
          <div className="row modal-lane-top">
            <div className="col-md-5">
              <b>Minimum temperature (in Celsius): </b>
            </div>
            <div className="col-md-7">
              {fillInfo.tempMin ? (
                <span>{fillInfo.tempMin}</span>
              ) : (
                <span>--</span>
              )}
            </div>
          </div>
          <div className="row modal-lane-top">
            <div className="col-md-5">
              <b>Maximum temperature (in Celsius): </b>
            </div>
            <div className="col-md-7">
              {fillInfo.tempMax ? (
                <span>{fillInfo.tempMax}</span>
              ) : (
                <span>--</span>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailsModal;
