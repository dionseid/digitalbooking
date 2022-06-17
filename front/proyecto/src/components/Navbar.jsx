import React, { useEffect, useState, useContext } from 'react';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { matchPath, Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import  {UserContext}  from '../components/context/UserContext';
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


const Navbar = ({onClick}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  useEffect(() => setIsAuthenticatedMenu(user.auth), [user.auth]);
  const {user, loginLogoutEvent } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();

    const buttonsView = {      
        '/' : <>
            <Link to='/account'><Button variant="secondary" className='buttonNavBarAccount' >Crear cuenta</Button></Link>
            <Link to='/login'><Button variant="primary" className='buttonNavBarLogin'>Iniciar Sesión</Button></Link>   
  
        </>,
        '/reserva' : <>
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
    if(isAuthenticatedMenu){
      ////const { nombre, apellido } = JSON.parse(localStorage.getItem('user'));
      return (
        <div className='SidebarBienvenida'>
        <div><span>{/*nombre[0] + apellido[0]*/ user.nombre+ user.apellido}</span></div>        
        <div>
          <p>Hola,</p>
          <p className='nombreCompletoMenu'>{`${user.nombre} ${user.apellido}`}</p>
        </div>
        <p className='cruz' onClick={handleClick}>X</p>        
      </div>
      )
    }else{
      return buttonsView[pathname]
    }    

  }

  const handleClick = () => {
    loginLogoutEvent({
      nombre: '',
      apellido: '',
      mail: '',
      auth: false
    })
    navigate('/');
  }

  return (
    <>
      <div className='navBar'>
        <div className='logoNavBar'>
          {<Link to='/'><img src={image} alt='logo' onClick={onClick}/></Link>}
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