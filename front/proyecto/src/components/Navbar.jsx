import React, { useState } from 'react';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';


const image = require("../components/assets/logo.png");


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className='navBar'>
        <div className='logoNavBar'>
          <img src={image} alt='logo' />
          <p className='parrafoNavBar'>Sentite como en tu hogar</p>
        </div>
        <div className='botones'>
          <div className='buttonCrearCuenta'><button className='buttonNavBar'>Crear cuenta</button></div>
          
          <div className='buttonIniciarSesion'><button className='buttonNavBar'>Iniciar Sesión</button></div>
          {/* <FontAwesomeIcon icon={faBars} className="menu" onClick={() => setShowSidebar(true)} />
          {showSidebar && <Sidebar />} */}

        </div>
      </div>
    </>
  )

}

export default Navbar;