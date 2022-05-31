import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
import SocialIconsSidebar from './SocialIconsSidebar';

const Sidebar = props => {
    const data = JSON.parse(localStorage.getItem("user"));
    const { nombreStorage, apellidoStorage } = data;
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
    const [isLog, setIsLog] = useState(false);
    //const [form, setForm] = useState(initailForm);
    
/*     const initailForm = [
        {
          nombre: nombreStorage.campo,
          apellido: apellidoStorage.campo
        }
      ]; */
    
    
    const handleChange = () => {
        if (nombreStorage !== "" && apellidoStorage!== null) {
            
            setIsLog(true); 
        }else{
            setIsLog(false);
        }
    }
    /* const handleClick = () =>{
        setForm({nombre: "",
            apellido: ""});

        setIsLog(false)
    } */

       
    useEffect(() => setIsAuthenticatedMenu(false), [props.authenticated]);

    return <Menu right onStateChange={handleChange}>
        <div className='upper-colored-box'>
            {!isAuthenticatedMenu && <span className='menu'>MENU</span>}
            {isAuthenticatedMenu && <div className='bienvenida'>
                {<span>{nombreStorage.campo.charAt(0) + apellidoStorage.campo.charAt(0)}</span>}
                <span>Hola,</span>
                <p>{nombreStorage.campo + " " + apellidoStorage.campo}</p></div>}
        </div>
        <div className="menuConFooter">
            <div className='menu-main'>
                {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/') && 
                    <>
                    <a className="menu-item" href="/account">Crear cuenta</a>
                    <br />
                    <a className="menu-item" href="/login">Iniciar sesión</a>
                    </>}
                {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/account') && <>
                    <a className="menu-item" href="/login">Iniciar sesión</a></>}
                {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/login') && 
                <>
                <a className="menu-item" href="/account">Crear cuenta</a>
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
        </div>
        </Menu>;
        
}

export default Sidebar;