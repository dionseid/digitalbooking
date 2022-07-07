import axios from "axios";
import React, { useEffect, useState } from "react";
import "./googleMaps.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useParams } from "react-router-dom";
import axiosConnection from "../../../helpers/axiosConnection";

//import { parseTwoDigitYear } from "moment";

const GoogleMaps = () => {
  const [dataLocacion, setDataLocacion] = useState({
    currentLocation: { lat: "", lng: "" },
  });
  const { id } = useParams();


  useEffect(() => {
    axiosConnection
      .get(`/productos/buscarProductoPorId/${id}`)
      .then((res) => {
        setDataLocacion([res.data.data.latitud, res.data.data.longitud])
      });
    return
  }, []);

  const position = [dataLocacion[0], dataLocacion[1]];


  const isNotNull = () => {
    if (position[0] !== undefined) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div id="map">
        {!isNotNull() && (
          <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={position}
            ></Marker>
          </MapContainer>
        )}
      </div>
    </>
  );
};

export default GoogleMaps;

{
  /* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
 
</Marker>
</MapContainer> */
}
