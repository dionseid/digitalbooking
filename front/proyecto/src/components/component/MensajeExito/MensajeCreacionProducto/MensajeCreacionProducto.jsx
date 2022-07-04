import React from "react";
import { Link } from "react-router-dom";
import "../mensajeExito.scss";
import { Boton } from "../../../elementStyle/Form";

export default function MensajeCreacionProducto() {
  return (
    <div className="contenedorMensajeReserva">
      <div className="contenidoMensajeReserva">
        <span class="material-symbols-outlined">verified</span>
        <span className="agradecimiento">¡Muchas gracias!</span>
        <p>Tu propiedad se ha creado con éxito</p>
        <Link to="/">
          <Boton>ok</Boton>
        </Link>
      </div>
    </div>
  );
}