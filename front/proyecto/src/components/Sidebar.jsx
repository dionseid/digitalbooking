import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';
import { matchPath } from 'react-router';
import SocialIconsSidebar from './SocialIconsSidebar';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({authenticated}) => {
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
    useEffect(() => setIsAuthenticatedMenu(authenticated), [authenticated]);
    const { pathname } = useLocation();

    const buttonsView = {
        '/': <>
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
    const handleAuthenticated = () => {
        const { nombre , apellido } = JSON.parse(localStorage.getItem('user'));
        return isAuthenticatedMenu ?
            <>
                <span>{nombre[0] + apellido[0]}</span>
                <p>Hola,</p>
                <p>{`${nombre} ${apellido}`}</p>
            </>
            :
            <span className='menu'>MENU</span>        
    }

    return (
        <Menu right>
            <div className='upper-colored-box'>
                {handleAuthenticated()}
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