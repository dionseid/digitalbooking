import React from "react";
import { Link } from "react-router-dom";
import { Boton } from "../../../elementStyle/Form";
import "../mensajeExito.scss";

const MensajeSinProductos = () => {
    return (
        <div className="contenedorMensajeReserva">
            <div className="contenidoMensajeReserva">
                <span class="material-symbols-outlined">
                    sentiment_dissatisfied
                </span>
                {/* <span className="agradecimiento">Sin reservas</span> */}
                <p>No se han encontrado productos</p>
                <Link to="/">
                    <Boton>Home</Boton>
                </Link>
            </div>
        </div>
    );
}

export default MensajeSinProductos