import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
import { Link } from 'react-router-dom';

const Sidebar = props => {
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
    useEffect(() => setIsAuthenticatedMenu(props.authenticated), [props.authenticated]);

    return <Menu right>
        <div className='upper-colored-box'>
            {!isAuthenticatedMenu && <span>MENU</span>}
            {isAuthenticatedMenu && <div>
                <span>{props.username.split(' ')[0][0] + props.username.split(' ')[1][0]}</span>
                <p>Hola,</p>
                <p>{props.username}</p>
            </div>}
        </div>
        <div className='menu-main'>
            {!isAuthenticatedMenu && !!matchPath(window.location.pathname, '/') && <>
                <p to='/account'>Crear cuenta</p>
                <br />
                <p>Iniciar sesión</p>
            </>}
        </div>
        <a className="menu-item" href="/">
            Home
        </a>
        <a className="menu-item" href="/salads">
            Salads
        </a>
        <a className="menu-item" href="/pizzas">
            Pizzas
        </a>
        <a className="menu-item" href="/desserts">
            Desserts
        </a>
    </Menu>;
}

export default Sidebar;