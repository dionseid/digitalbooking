import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faLocationDot,
  faStar,
  faShareNodes,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import Galeria from "../components/Galeria";
import Calendario from "../components/Calendario";
import "../styles/pages/productos.css";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Media from "react-media";
import { Link } from "react-router-dom";
import Caracteristicas from "../components/Caracteristicas";

const Productos = () => { 
  return (
    <div id="page-wrap">
      
      <header >
        <Navbar />
        <div className="headerProducto">
          <div>
            <p>HOTEL</p>
            <h2>Hermitage Hotel</h2>
          </div>
          <Link to="/"><FontAwesomeIcon icon={faAngleLeft} className="iconoVolver"/></Link>          
        </div>                
      </header>
      <body>
        <section className="ubicacion">
          <div>
            <dt>
              <FontAwesomeIcon icon={faLocationDot} style={{"paddingRight":"5px"}}/>
              Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina.
            </dt>
            <dd>A 940 m del centro</dd>
          </div>
          <div className="calificacionProductos">            
            <div className="contenedorEstrellas">
              <dt style={{ fontWeight: "700" }}>Muy bueno</dt>
              <dd><FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" /></dd>             
            </div>
            <span className="puntaje">8</span>
          </div>
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
          <h2>Alójate en el corazón de Buenos Aires</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ornare sapien ac nibh vulputate feugiat. Morbi euismod velit sit
            amet libero volutpat ultrices in quis sem. Sed sit amet placerat
            sem. Curabitur vitae lectus nec purus accumsan faucibus. Donec vitae
            volutpat tortor. Suspendisse tempor rutrum urna, in consequat est
            tincidunt vitae. Cras et ligula at felis placerat tempor. Fusce
            elementum metus non justo luctus iaculis.
          </p>
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
                <div>
                  <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                  <button className="botonReservaFecha">Iniciar reserva</button>
                </div> 
            </div> 
                       
        </section>
        <section className="contenedorMapa">
            <h2>¿Dónde vas a estar?</h2>            
        </section>
        <section>
            <h2>¿Qué tenes que saber?</h2>
            <div className="contenedorNormas">
                <div>
                    <h5>Normas de la casa</h5>
                    <ul>
                        <li>norma 1</li>
                        <li>norma 2</li>
                        <li>norma 3</li>
                    </ul>
                </div>
                <div>
                    <h5>Salud y seguridad</h5>
                    <ul>
                        <li>norma 1</li>
                        <li>norma 2</li>
                        <li>norma 3</li>
                    </ul>
                </div>
                <div>
                    <h5>Política de cancelación</h5>
                    <ul>
                        <li>norma 1</li>
                        <li>norma 2</li>
                        <li>norma 3</li>
                    </ul>
                </div>                
            </div>            
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Productos;
