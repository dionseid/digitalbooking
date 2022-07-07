import React from "react";
//import Calendar from 'react-calendar';
//import { useParams } from 'react-router';
import Calendario from "../../components/component/Calendario/Calendario";
//import FechaRangoContextProvider from '../components/context/FechaRangoContextProvider';
import DatosUsuario from "../../components/component/DatosUsuario/DatosUsuario";
import DetallesReserva from "../../components/component/DetallesReserva/DetallesReserva";
import Footer from "../../components/component/Footer/Footer";
import HorarioLlegada from "../../components/component/HorarioLlegada/HorarioLlegada";
import Navbar from "../../components/component/Navbar/Navbar";
import Reglas from "../../components/component/Reglas/Reglas";
import TituloProducto from "../../components/component/TituloProducto/TituloProducto";
//import UbicacionProducto from '../components/component/UbicacionProducto';
import "./reserva.scss";

export default function Reserva() {
  return (
    <>
      <header>
        <Navbar />
        <TituloProducto />
      </header>
      <body>
        <div className="tablasDeInformacion">
          <div className="completarDatos">
            <DatosUsuario />
            <div>
              <h2>Seleccioná tu fecha de reserva</h2>
              <Calendario />
            </div>
            <HorarioLlegada />
          </div>
          <div className="contenedorDeDetalleReserva">
            <DetallesReserva />
          </div>
        </div>
        <section>
          <h2>¿Qué tenes que saber?</h2>
          <div className="linea" />
          <Reglas />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
