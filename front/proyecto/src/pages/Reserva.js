import React, { useContext, useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import { useParams } from 'react-router';
import Calendario from '../components/Calendario';
import FechaRangoContextProvider from '../components/context/FechaRangoContextProvider';
import DatosUsuario from '../components/DatosUsuario';
import DetallesReserva from '../components/DetallesReserva';
import Footer from '../components/Footer'
import HorarioLlegada from '../components/HorarioLlegada';
import Navbar from '../components/Navbar'
import Reglas from '../components/Reglas';
import TituloProducto from '../components/TituloProducto';
import UbicacionProducto from '../components/UbicacionProducto';
import "../styles/pages/reserva.css";

export default function Reserva() {
  const {rango, setRango} = useContext(FechaRangoContextProvider);
  const {id} = useParams
/*   const [idP, setIdP ]= useState([]);
  const {idProducto} = useContext(IdProductoContextProvider);
  console.log("reserva: ", idProducto);
  useEffect(() => {
    setIdP(idProducto);
    
    
  }, [idProducto]) */
  

  
  return (
    <>
    <header>
        <Navbar />
        <TituloProducto/>
    </header>
    <body>
      <div className='tablasDeInformacion'>
        <div className='completarDatos'>
          <DatosUsuario/>
          <div>
            <h2>Seleccioná tu fecha de reserva</h2>
            <Calendario/>
          </div>
          <HorarioLlegada/>
        </div>
        <div>
          <DetallesReserva/>
        </div>
      </div>
      <section>
          <h2>¿Qué tenes que saber?</h2>
          <Reglas/>
      </section>        
    </body>
    <footer>
        <Footer />
    </footer>
</>
  )
}
