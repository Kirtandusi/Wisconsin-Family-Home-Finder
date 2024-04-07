import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MarkerPopup from "./MarkerPopup";
import cityCoordinates from "./cityCoordinates";

const WisconsinMapMain = ({ finalCity, tryAgain }) => {
  const [cityLatLong, setCityLatLong] = useState(null);

  async function getLatLong() {
    const resolvedFinalCity = await finalCity;
    console.log(resolvedFinalCity.city);
    if (resolvedFinalCity) {
      let coordinatesArray = cityCoordinates[resolvedFinalCity.city];
      setCityLatLong([coordinatesArray[0], coordinatesArray[1]]);
    }
  }

  useEffect(() => {
    getLatLong();
  }, [finalCity]);

  // Add the locations, see if can add hover effect
  // Limit the map around wisconsin,
  // Change map theme to be less ugly
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 43.784439,
    longitude: -88.787865,
    zoom: 4.49,
  });

  // Define maxBounds with correct coordinates
  const maxBounds = [
    [-95.294851, 42.303316], // [minLongitude, minLatitude]
    [-85.290764, 46.839153], // [maxLongitude, maxLatitude]
  ];

  return (
    <div className="h-screen">
      <div className="h-full w-screen">
        <ReactMapGL
          initialViewState={{
            latitude: 43.784439,
            longitude: -88.787865,
            zoom: 6,
          }}
          width="50vw"
          height="100vh"
          mapStyle="mapbox://styles/ignasd/clt0ndnh600sj01qs6v5n3ug8"
          mapboxAccessToken={
            "pk.eyJ1IjoiaWduYXNkIiwiYSI6ImNsdDBkb3dxczB4em4yb21uZ2hmdDZ3aXoifQ.pbbOUb_r8sNLbwrJPNmlkw"
          }
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          maxBounds={maxBounds}
        >
          {!tryAgain && finalCity && cityLatLong && (
            <MarkerPopup
              lat={cityLatLong[0]}
              long={cityLatLong[1]}
              finalCity={finalCity}
            />
          )}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default WisconsinMapMain;
