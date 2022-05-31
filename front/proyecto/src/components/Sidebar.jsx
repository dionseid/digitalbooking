import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
import SocialIconsSidebar from './SocialIconsSidebar';
import { useLocation } from 'react-router-dom';

const Sidebar = ({authenticated, username}) => {
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
    useEffect(() => setIsAuthenticatedMenu(authenticated), [authenticated]);
    const { pathname } = useLocation();

    const buttonsView = {
        '/': <>
            <a className="menu-item" href="/account">Crear cuenta</a>
            <br />
            <a className="menu-item" href="/login">Iniciar sesión</a>
        </>,
        '/account': <><a className="menu-item" href="/login">Iniciar sesión</a></>,
        '/login': <>
            <a className="menu-item" href="/account">Crear cuenta</a></>
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
        <Menu right>
            <div className='upper-colored-box'>
                {isAuthenticatedMenu ?
                    <>
                        <span>{username.slice(2)}</span>
                        <p>Hola,</p>
                        <p>{username}</p>
                    </>
                    :
                    <span className='menu'>MENU</span>
                }
            </div>
            <div className="menuConFooter">
                <div className='menu-main'>
                    {handleIsAuthMenu()}
                </div>
                <div>
                    <SocialIconsSidebar />
                </div>
            </div>
        </Menu>
    )

}

export default Sidebar;