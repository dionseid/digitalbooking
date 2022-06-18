import React, { useEffect, useState, useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import { matchPath, useNavigate } from 'react-router';
import SocialIconsSidebar from './SocialIconsSidebar';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Sidebar = ({authenticated, setIsAuthenticated}) => {
    const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
    useEffect(() => setIsAuthenticatedMenu(authenticated), [authenticated]);
    const { pathname } = useLocation();

    const handleClick = () => {
        localStorage.setItem('user', JSON.stringify({nombre:' ', apellido:' '}));
        setIsAuthenticated(false);
      }


    const buttonsView = {
        '/': <>
            <Link to='/account' className='buttonSideBarAccount'>Crear cuenta</Link>
            <Link to='/login' className='buttonNavSideLogin'>Iniciar Sesión</Link>

        </>,
        '/reserva': <>
        <Link to='/account' className='buttonSideBarAccount'>Crear cuenta</Link>
        <Link to='/login' className='buttonNavSideLogin'>Iniciar Sesión</Link>

        </>,        
        '/account': <>
            <Link to='/login' className='buttonNavSideLogin'>Iniciar Sesión</Link>

        </>,
        '/login': <>
            <Link to='/account' className='buttonSideBarAccount'>Crear cuenta</Link>
        </>
    }

    const handleIsAuthMenu = () => {
        if (isAuthenticatedMenu) {
            return (
                <>
                    <p>¿Deseas <Link className="menu-item" to="/login" onClick={handleClick}>cerrar sesión</Link>?</p>
                    <br />
                </>
            );
        } else {
            return buttonsView[pathname];
        }
    }
    const handleAuthenticated = () => {
        if(isAuthenticatedMenu){
            const { nombre , apellido } = JSON.parse(localStorage.getItem('user'));
            return(
                <div className='SidebarBienvenida'>
                    <span>{nombre[0] + apellido[0]}</span>
                    <p>Hola,</p>
                    <p className='nombreCompletoMenu'>{`${nombre} ${apellido}`}</p>
                </div>
            )
        }else{
            return <span className='menu'>MENU</span>
        }
             
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