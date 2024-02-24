import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapGL from "react-map-gl";

const WisconsinMapMain = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.784439,
    longitude: -88.787865,
    zoom: 6,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="50%"
        height="100%"
        mapStyle="mapbox://styles/ignasd/clt0fp2za00ee01qf2xxfgflu"
        mapboxAccessToken={
          "pk.eyJ1IjoiaWduYXNkIiwiYSI6ImNsdDBkb3dxczB4em4yb21uZ2hmdDZ3aXoifQ.pbbOUb_r8sNLbwrJPNmlkw"
        }
        onViewportChange={setViewport}
      />
    </div>
  );
};

export default WisconsinMapMain;
