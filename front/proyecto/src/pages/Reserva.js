import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Calendario from '../components/Calendario';
import DatosUsuario from '../components/DatosUsuario';
import Footer from '../components/Footer'
import HorarioLlegada from '../components/HorarioLlegada';
import Navbar from '../components/Navbar'
import Reglas from '../components/Reglas';
import TituloProducto from '../components/TituloProducto';
import UbicacionProducto from '../components/UbicacionProducto';
import "../styles/pages/reserva.css";

export default function Reserva({id}) {
  //const [loading, setloading] = useState(false);
  const [idProducto, setIdProducto ]= useState(id);

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
          <h2>Detalle de la reserva</h2>
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
