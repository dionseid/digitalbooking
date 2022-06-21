import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/mensajeReservaExitosa.css";
import { Boton } from './elementStyle/Form';

export default function MensajeReservaExitosa() {
  return (
    <div className='contenedorMensajeReserva'> 
      <div className='contenidoMensajeReserva'>
        <span class="material-symbols-outlined">verified</span>
        <span className='agradecimiento'>¡Muchas gracias!</span>
        <p>Su reserva se ha realizado con éxito</p>
        <Link to="/"><Boton>ok</Boton></Link>
      </div>        
    </div>
  )
}
