import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Reglas/reglas.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import axiosConnection from "../../../helpers/axiosConnection";

export default function UbicacionProducto() {
  const [dataUbicacion, setDataUbicacion] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosConnection
      .get(`/productos/buscarProductoPorId/${id}`)
      .then((response) => {
        setDataUbicacion(response.data.data.ciudad);
      });
    return
  }, []);

  return (
    <>
      <div className="contenedorDireccion">
        <dt>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ paddingRight: "5px" }}
          />
          <p>
            {dataUbicacion.provincia}, {dataUbicacion.nombre},{" "}
            {dataUbicacion.pais}.
          </p>
        </dt>
        <dd>A 940 m del centro</dd>
      </div>
      <div className="calificacionProductos">
        <div className="contenedorEstrellasProducto">
          <dt style={{ fontWeight: "700" }}>Muy bueno</dt>
          <dd>
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
          </dd>
        </div>
        <span className="puntaje">8</span>
      </div>
    </>
  );
}
