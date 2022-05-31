import React, { useEffect, useState } from 'react';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';


const image = require("../components/assets/logo.png");


const Navbar = ({authenticated, username}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  useEffect(() => setIsAuthenticatedMenu(authenticated), [authenticated]);
  const { pathname } = useLocation();

    const buttonsView = {
        '/' : <>
            <Link to='/account'><button className='buttonNavBarAccount'>Crear cuenta</button></Link>
            <Link to='/login'><button className='buttonNavBarLogin'>Iniciar Sesión</button></Link>
        </>,
        '/productos': <>
            <Link to='/account'><button className='buttonNavBarAccount'>Crear cuenta</button></Link>
            <Link to='/login'><button className='buttonNavBarLogin'>Iniciar Sesión</button></Link>
        </>,
        '/account': <><Link to='/login'><button className='buttonNavBarLogin'>Iniciar Sesión</button></Link></>,
        '/login': <><Link to='/account'><button className='buttonNavBarAccount'>Crear cuenta</button></Link></>
    }

    const handleIsAuthMenu = () => {
      if (isAuthenticatedMenu) {
          return (
              <>
                  <p>¿Deseas <a className="menu-item" href="/login">cerrar sesión</a>?</p>
                  <br />
              </>
          );
      } else {
          return buttonsView[pathname];
      }
  }

  return (
    <>
      <div className='navBar'>
        <div className='logoNavBar'>
          {<Link to='/'><img src={image} alt='logo' /></Link>}
          <p className='parrafoNavBar'>Sentite como en tu hogar</p>
        </div>
        <div className='botones'>
          {handleIsAuthMenu()}               
          {/* <FontAwesomeIcon icon={faBars} className="menu" onClick={() => setShowSidebar(true)} />
          {showSidebar && <Sidebar />} */}
        </div>
      </div>
    </>
  )

}

export default Navbar;