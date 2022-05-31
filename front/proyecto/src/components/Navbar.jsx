import React, { useState } from 'react';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';


const image = require("../components/assets/logo.png");


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className='navBar'>
        <div className='logoNavBar'>
          {<Link to='/'><img src={image} alt='logo' /></Link>}
          <p className='parrafoNavBar'>Sentite como en tu hogar</p>
        </div>
        <div className='botones'>
          {matchPath(window.location.pathname, '/') &&<>
          <Link to='/account'><button className='buttonNavBarAccount'>Crear cuenta</button></Link>
          <Link to='/login'><button className='buttonNavBarLogin'>Iniciar Sesión</button></Link>
          </>}
          {matchPath(window.location.pathname, '/account') &&<>
          <Link to='/login'><button className='buttonNavBarLogin'>Iniciar Sesión</button></Link>
          </>}
          {matchPath(window.location.pathname, '/login') &&<>
          <Link to='/account'><button className='buttonNavBarAccount'>Crear cuenta</button></Link>
          </>}     
          {/* <FontAwesomeIcon icon={faBars} className="menu" onClick={() => setShowSidebar(true)} />
          {showSidebar && <Sidebar />} */}
        </div>
      </div>
    </>
  )

}

export default Navbar;