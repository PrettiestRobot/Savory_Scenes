import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./Location.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const location = {
  lat: 35.7915,
  lng: -78.7811,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDBEKY8317mP1pqzba6EsrRWGmFbAZ7T-U",
  });

  return isLoaded ? (
    <div className="location-container">
      <div className="location-info">
        <h2>Location</h2>
        <h5>Address:</h5>
        <p>
          104 Bristol Hill Ct
          <br /> Cary, NC 275136
        </p>
        <h5>Telephone:</h5>
        <p>503-519-1092</p>
        <h5>Hours:</h5>
        <p>
          Monday - Thursday:
          <br /> 10 am - 9pm <br /> Friday - Saturday: <br /> 10am - 12am <br />{" "}
          Sunday:
          <br />
          Closed
        </p>
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Map;
