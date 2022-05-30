import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
import SocialIcons from './SocialIcons';

const Sidebar = props => {
    const data = JSON.parse(localStorage.getItem("user"));
    const { nombreStorage, apellidoStorage } = data;
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(true);
    const [isLog, setIsLog] = useState(false);
    
    const handleClick = () => {
        if (nombreStorage.campo !== null && apellidoStorage.campo!== null) {
            setIsLog(true); 
        }

    }
    
/*     if (nombreStorage.campo && apellidoStorage.campo) {
            setIsLog(true);        
    } */
    


   
    useEffect(() => setIsAuthenticatedMenu(props.authenticated), [props.authenticated]);

    return <Menu right onStateChange={handleClick}>
        <div className='upper-colored-box'>
            {!isLog && <span className='menu'>MENU</span>}
            {isLog && <div>
                {<span>{/* {nombreStorage.campo.split(' ')[1][0] + apellidoStorage.campo.split(' ')[1][0]} */}</span>}
                <span>Hola,</span>
                <p>{nombreStorage.campo}</p></div>}</div>
        <div className="menuConFooter">
        <div className='menu-main'>
            {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/') && <>
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
            <SocialIcons/></div>
        </div>
        </Menu>;
        
}

export default Sidebar;