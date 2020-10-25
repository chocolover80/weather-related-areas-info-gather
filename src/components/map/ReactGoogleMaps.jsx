import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import * as MapInfoActions from "../../store/actions/mapInformation";
import * as LocationSetter from "../../utils/locationSetter";
import { useDispatch, useSelector } from "react-redux";
import "./css/map.css";

function ReactGoogleMaps() {
  const mapInfo = useSelector((state) => state.mapInformation);
  const dispatch = useDispatch();
  const [, setMap] = React.useState(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    dispatch(
      MapInfoActions.setCurrentLocationInfo(LocationSetter.getLocationToSet())
    );
  }, [dispatch]);

  return (
    <div className="p-3">
      
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="google-map"
          center={mapInfo.location}
          zoom={mapInfo.zoom}
          // onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            {mapInfo.pin && mapInfo.pin.lat ? (
              <Marker position={{...mapInfo.pin}} />
            ) : (
              <></>
            )}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default ReactGoogleMaps;
