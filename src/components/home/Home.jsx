import React from "react";
import { useSelector } from "react-redux";
import ReactGoogleMaps from "../map/ReactGoogleMaps";
import MapButton from "../map/MapButton";
import MapInputText from "../map/MapInputText";
import Modal from "react-modal";
function Home() {
  const currentMapInfo = useSelector((state) => state.mapInformation);
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
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

        <MapButton btnId="btnSearch" btnCategory="btn btn-info" text="Search" />
        {currentMapInfo.errors || currentMapInfo.errors !== "" ? (
          <div className="col-md-12 pl-3 pr-3 pt-1 pb-1">
            <div className="pl-2 pr-2 alert alert-danger" role="alert">
              {currentMapInfo.errors}
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
      {Modal.setAppElement("#root")}
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </>
  );
}
export default Home;
