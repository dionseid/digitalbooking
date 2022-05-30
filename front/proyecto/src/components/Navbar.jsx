import React, { useState } from 'react';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';


const image = require("../components/assets/logo.png");


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className='navBar'>
        <div className='logoNavBar'>
          <Link to='/'><img src={image} alt='logo' /></Link>
          <p className='parrafoNavBar'>Sentite como en tu hogar</p>
        </div>
        <div className='botones'>
          <Link to='/account'><button className='buttonNavBar'>Crear cuenta</button></Link>
          <Link to='/login'><button className='buttonNavBar'>Iniciar Sesión</button></Link>
          {/* <FontAwesomeIcon icon={faBars} className="menu" onClick={() => setShowSidebar(true)} />
          {showSidebar && <Sidebar />} */}

        </div>
      </div>
    </>
  )

}

export default Navbar;