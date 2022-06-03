import React, {useEffect, useState, } from 'react';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../styles/navbar.css";



const image = require("../components/assets/logo.png");

<>
<style type="text/css">
  {`
  .btn-secondary {
    background-color: #dfe4ea;
color: #f0572d;
padding: 5px 20px;
font-weight: 700;
font-size: 16px;
background: #ffffff;
border: 1px solid #f0572d;
border-radius: 5px;
  }
  `}
</style>
</>


const Navbar = ({authenticated, username}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  useEffect(() => setIsAuthenticatedMenu(authenticated), [authenticated]);
  const { pathname } = useLocation();

    const buttonsView = {      
        '/' : <>
            <Link to='/account'><Button variant="secondary" className='buttonNavBarAccount' >Crear cuenta</Button></Link>
            <Link to='/login'><Button variant="primary" className='buttonNavBarLogin'>Iniciar Sesión</Button></Link>   
  
        </>,
        '/productos': <>
            <Link to='/account'><Button variant="secondary" className='buttonNavBarAccount' >Crear cuenta</Button></Link>
            <Link to='/login'><Button variant="primary" className='buttonNavBarLogin'>Iniciar Sesión</Button></Link>
            
            
        </>,
        '/account': <><Link to='/login'><Button variant="primary" className='buttonNavBarLogin'>Iniciar Sesión</Button></Link></>,
        '/login': <><Link to='/account'><Button variant="secondary" className='buttonNavBarAccount' >Crear cuenta</Button></Link></>
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