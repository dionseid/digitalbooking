import React, { useEffect, useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/sidebar.css";
import { matchPath, useNavigate } from "react-router";
import SocialIconsSidebar from "./SocialIconsSidebar";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import UserProvider from "../components/context/UserContext";

const Sidebar = () => {
  const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  const { user, loginLogoutEvent } = useContext(UserProvider);
  useEffect(() => setIsAuthenticatedMenu(user.auth), [user.auth]);
  const { pathname } = useLocation();

  const handleClick = () => {
    loginLogoutEvent({
      nombre: "",
      apellido: "",
      mail: "",
      id:null,
      auth: false,
      redirect: false,
      ciudad:""
    });
  };

  const buttonsView = {
    "/": (
      <>
        <Link to="/account" className="buttonSideBarAccount">
          Crear cuenta
        </Link>
        <Link to="/login" className="buttonNavSideLogin">
          Iniciar Sesión
        </Link>
      </>
    ),
    "/reserva": (
      <>
        <Link to="/account" className="buttonSideBarAccount">
          Crear cuenta
        </Link>
        <Link to="/login" className="buttonNavSideLogin">
          Iniciar Sesión
        </Link>
      </>
    ),
    "/account": (
      <>
        <Link to="/login" className="buttonNavSideLogin">
          Iniciar Sesión
        </Link>
      </>
    ),
    "/login": (
      <>
        <Link to="/account" className="buttonSideBarAccount">
          Crear cuenta
        </Link>
      </>
    ),
  };

  const handleIsAuthMenu = () => {
    if (isAuthenticatedMenu) {
      return (
        <>
          <p>
            ¿Deseas{" "}
            <Link className="menu-item" to="/login" onClick={handleClick}>
              cerrar sesión
            </Link>
            ?
          </p>
          <br />
        </>
      );
    } else {
      return buttonsView[pathname];
    }
  };
  const handleAuthenticated = () => {
    if (isAuthenticatedMenu) {
      return (
        <div className="SidebarBienvenida">
          {console.log(user)}
          <span>{user.nombre[0] + user.apellido[0]}</span>
          {console.log(user.nombre[0])}
          <p>Hola,</p>
          <p className="nombreCompletoMenu">{`${user.nombre} ${user.apellido}`}</p>
        </div>
      );
    } else {
      return <span className="menu">MENU</span>;
    }
  };

  return (
    <Menu right>
      <div className="upper-colored-box">{handleAuthenticated()}</div>
      <div className="menuConFooter">
        <div className="menu-main">{handleIsAuthMenu()}</div>
        <div>
          <SocialIconsSidebar />
        </div>
      </div>
    </Menu>
  );
};

export default Sidebar;
