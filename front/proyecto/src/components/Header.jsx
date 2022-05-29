import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"



const image = require("../components/assets/logo.png");


const Header = () => {
 
  return (
    <>
            <div className='navBar'>
                <div className='logoNavBar'>
                    <img src={image} alt='logo' />
                    <p className='parrafoNavBar'>Sentite como en tu hogar</p>
                </div>
                <div className='botones'>
                    <button className='buttonNavBar'>Crear Cuenta</button>                    
                    <button className='buttonNavBar'>Iniciar Sesión</button>
                    <div><FontAwesomeIcon icon={faBars} className="menu"/></div>                    
                </div>
            </div>
    </>
  )
 
}

export default Header;