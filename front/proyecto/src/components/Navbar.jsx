import React from 'react';
import "../styles/navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const image = require("../components/assets/logo.png");


const Navbar = () => {
 
  return (
    <>
            <div className='navBar'>
                <div className='logoNavBar'>
                    <img src={image} alt='logo' />
                    <p className='parrafoNavBar'>Sentite como en tu hogar</p>
                </div>
                <div className='botones'>                    
                    <button className='buttonNavBar'>Crear cuenta</button>
                    <button className='buttonNavBar'>Iniciar Sesión</button>
                    <FontAwesomeIcon icon={faBars} className="menu"/>                    
                </div>
            </div>
    </>
  )
 
}

export default Navbar;