import React from "react";
import { useDispatch } from "react-redux";
import * as MapInfoActions from "../../store/actions/mapInformation";
function MapButton(props) {
  const dispatch = useDispatch();

  async function displayFunctionBasedOnId(id, dispatch) {
    if (id === "btnAdd") {
      try {
        const txtLat = document.getElementById("txtLatitude").value;
        const txtLng = document.getElementById("txtLongitude").value;
        if (txtLat && txtLat !== "" && txtLng && txtLng !== "") {
          const latitude = parseFloat(txtLat);
          const longitude = parseFloat(txtLng);
          dispatch(
            MapInfoActions.setCurrentPinInfo({ lat: latitude, lng: longitude })
          );
          dispatch(MapInfoActions.setErrors(""));
        } else {
          dispatch(
            MapInfoActions.setErrors(
              "You're trying to give either an invalid latitude or longitude"
            )
          );
        }
      } catch (error) {
        console.log(error);
        dispatch(
          MapInfoActions.setErrors(
            "You're trying to give either an invalid latitude or longitude"
          )
        );
      }
    } else if (id === "btnRem") {
      dispatch(MapInfoActions.setCurrentPinInfo({}));
    }
  }

  return (
    <>
      <div className="col-md-4 pl-3 pr-3 pt-1 pb-1">
        <button
          id={props.btnId}
          onClick={() => {
            displayFunctionBasedOnId(props.btnId, dispatch);
          }}
          type="button"
          className={`${props.btnCategory} btn-block responsive-width`}
        >
          {props.text}
        </button>
      </div>
    </>
  );
}
export default MapButton;
