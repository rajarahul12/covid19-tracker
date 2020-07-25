import React from "react";
import "./Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

function Map({ countries, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {/* Function that loops countries and draw a bunch of circles*/}
      </LeafletMap>
    </div>
  );
}

export default Map;
