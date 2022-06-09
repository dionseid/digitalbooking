import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faShareNodes,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import Galeria from "../components/Galeria";
import Calendario from "../components/Calendario";
import "../styles/pages/productos.css";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Media from "react-media";
import { Link, useParams } from "react-router-dom";
import Caracteristicas from "../components/Caracteristicas";
import Reglas from "../components/Reglas";
import DescripcionProducto from "../components/DescripcionProducto";
import UbicacionProducto from "../components/UbicacionProducto";
import TituloProducto from "../components/TituloProducto";
import GoogleMaps from "../components/GoogleMaps";

const Productos = () => {   
  return (
    <div id="page-wrap">
      
      <header >
        <Navbar />
        <TituloProducto/>                
      </header>
      <body>
        <section className="ubicacion">
          <UbicacionProducto/>
        </section>
        <section className="imagenes">
          <p><FontAwesomeIcon icon={faShareNodes} className='iconosLike'/><FontAwesomeIcon icon={faHeart} className='iconosLike'/></p>
          <Media query="(max-width:768px)">
            {matches => {
              return matches ? 
              <BootstrapCarousel/> :
              <Galeria/>
            }}
          </Media>                   
        </section>
        <section className="texto">          
            <DescripcionProducto/>
        </section>
        <section>
            <Caracteristicas/>            
        </section>
        <section className="fechasDisponibles">
            <h2>Fechas disponibles</h2>
            <div className="contenedorCalendario">            
                <div>
                <Calendario/> 
                </div>             
                <div className="contendorReserva">
                  <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                  <button className="buttonCard">Iniciar reserva</button>
                </div> 
            </div>                        
        </section>
        <section className="contenedorMapa">
            <h2>¿Dónde vas a estar?</h2>
            <GoogleMaps/>            
        </section>
        <section>
            <h2>¿Qué tenes que saber?</h2>
            <Reglas/>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Productos;
