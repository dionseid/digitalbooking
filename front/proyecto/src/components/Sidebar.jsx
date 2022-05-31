import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
<<<<<<< HEAD
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';


=======
import SocialIconsSidebar from './SocialIconsSidebar';
>>>>>>> cf7f4877383ab8f422c31695137efe9cf3946e8e

const Sidebar = props => {
    const data = JSON.parse(localStorage.getItem("user"));
    //const { nombreStorage, apellidoStorage } = data;
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(true);
    const [isLog, setIsLog] = useState(false);
    //const [form, setForm] = useState(initailForm);
    
/*     const initailForm = [
        {
          nombre: nombreStorage.campo,
          apellido: apellidoStorage.campo
        }
      ]; */
    
    
/*     const handleChange = () => {
        if (initailForm.nombre !== "" && initailForm.apellido!== null) {
            
            setIsLog(true); 
        }else{
            setIsLog(false);
        }
    } */
    /* const handleClick = () =>{
        setForm({nombre: "",
            apellido: ""});

        setIsLog(false)
    } */

       
    useEffect(() => setIsAuthenticatedMenu(props.authenticated), [props.authenticated]);

    return <Menu right /* onStateChange={handleChange} */>
        <div className='upper-colored-box'>
            {!isLog && <span className='menu'>MENU</span>}
            {/* isLog && <div className='bienvenida'>
                {<span>{nombreStorage.campo.charAt(0) + apellidoStorage.campo.charAt(0)}</span>}
                <span>Hola,</span>
                <p>{nombreStorage.campo + " " + apellidoStorage.campo}</p></div> */}
        </div>
        <div className="menuConFooter">
            <div className='menu-main'>
                {!isLog && !!matchPath(window.location.pathname, '/') && 
                    <>
                    <a className="menu-item" href="/account">Crear cuenta</a>
                    <br />
                    <a className="menu-item" href="/login">Iniciar sesión</a>
                    </>}
                {!isLog && !!matchPath(window.location.pathname, '/account') && <>
                    <a className="menu-item" href="/login">Iniciar sesión</a></>}
                {!isLog && !!matchPath(window.location.pathname, '/login') && 
                <>
                <a className="menu-item" href="/account">Crear cuenta</a>
<<<<<<< HEAD
                </>}
            </div>
            <div className='redesModal'>
                {isLog && 
                <>
                    <p>¿Deseas <a href='/login' className='menu-item' /* onClick={handleClick} */><span>cerrar sesión</span></a>?</p>
                    <br />
                </>
                }
                <SocialIcons/>
            </div>
=======
                <br />
                <a className="menu-item" href="/login">Iniciar sesión</a></>}
            {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/account') && <>
                <a className="menu-item" href="/login">Iniciar sesión</a></>}
            {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/login') && <>
                <a className="menu-item" href="/account">Crear cuenta</a></>}</div>
        <div>
            {isAuthenticatedMenu && <>
                <p>¿Deseas <a className="menu-item" href="/login">cerrar sesión</a>?</p>
                <br /></>}
            <SocialIconsSidebar/></div>
>>>>>>> cf7f4877383ab8f422c31695137efe9cf3946e8e
        </div>
        </Menu>;
        
}

export default Sidebar;