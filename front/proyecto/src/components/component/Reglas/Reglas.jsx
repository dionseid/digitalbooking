import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosConnection from "../../../helpers/axiosConnection";
import "./reglas.scss";

export default function Reglas() {
  const [dataReglas, setDataReglas] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // TODO cambiar url
    axiosConnection.get("/politicas/listarPoliticas").then((response) => {
      setDataReglas(response.data.data);
    });
    return
  }, []);

  return (
    <div className="contenedorTodasReglas">
      <div className="contenedorReglas">
        <div>
          <h4>Normas de la casa</h4>
        </div>
        <div className="listaReglas">
          <ul>
            {dataReglas
              .filter((regla) => regla.tipo === 1 && regla.producto?.id == id)
              .map((regla) => (
                <li key={regla.id}>{regla.descripcion}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className="contenedorReglas">
        <div>
          <h4>Salud y Seguridad</h4>
        </div>
        <div className="listaReglas">
          <ul>
            {dataReglas
              .filter((regla) => regla.tipo === 2 && regla.producto?.id == id)
              .map((regla) => (
                <li key={regla.id}>{regla.descripcion}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className="contenedorReglas">
        <div>
          <h4>Politicas de cancelación</h4>
        </div>
        <div className="listaReglas">
          <ul>
            {dataReglas
              .filter((regla) => regla.tipo === 3 && regla.producto?.id == id)
              .map((regla) => (
                <li key={regla.id}>{regla.descripcion}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
