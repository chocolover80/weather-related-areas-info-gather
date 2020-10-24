import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function MapInputText(props) {
  const label =
    props.inputCategory.substring(0, 1).toUpperCase() +
    props.inputCategory.substring(1);
  return (
    <>
      <div className="col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>
          <input
            id={props.idInput}
            type="text"
            className="form-control numerical-inputs"
            placeholder={`Insert the ${props.inputCategory}`}
            aria-label={label}
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </>
  );
}
export default MapInputText;
