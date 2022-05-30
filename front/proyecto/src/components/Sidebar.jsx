import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
import SocialIcons from './SocialIcons';

const Sidebar = props => {
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
    useEffect(() => setIsAuthenticatedMenu(props.authenticated), [props.authenticated]);

    return <Menu right>
        <div className='upper-colored-box'>
            {!isAuthenticatedMenu && <span className='menu'>MENU</span>}
            {isAuthenticatedMenu && <div>
                <span>{props.username.split(' ')[0][0] + props.username.split(' ')[1][0]}</span>
                <p>Hola,</p>
                <p>{props.username}</p></div>}</div>
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