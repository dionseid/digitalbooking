import React, { useEffect, useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.scss";
//import { matchPath, useNavigate } from "react-router";
import SocialIconsSidebar from "./SocialIconsSidebar/SocialIconsSidebar";
import { Link, useLocation } from "react-router-dom";
//import { Button } from "react-bootstrap";
import UserProvider from "../../context/UserContext";

const Sidebar = () => {
  const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  const { user, loginLogoutEvent } = useContext(UserProvider);
  useEffect(() => setIsAuthenticatedMenu(user.auth), [user]);
  const { pathname } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuAbierto, setMenuAbierto] = useState(false)

  // const manejarCambioDeEstadoMenu = (estado) => {setMenuAbierto(estado)}

  // const cerrarMenu = () => {setMenuAbierto(false)}

  useEffect(() => {
    function handleSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  });

  // useEffect(()=>{
  //   console.log("Menu Abierto",menuAbierto)
  // },[menuAbierto])

  const handleClick = () => {
    loginLogoutEvent({
      nombre: "",
      apellido: "",
      mail: "",
      id: null,
      auth: false,
      redirect: false,
      rol: "",
      ciudad: "",
    });
  };

  const buttonsView = {
    "/": (
      <>
        <Link to="/account" className="buttonSideBarAccount" /*onClick={cerrarMenu}*/>
          Crear cuenta
        </Link>
        <Link to="/login" className="buttonNavSideLogin" /*onClick={cerrarMenu}*/>
          Iniciar sesión
        </Link>
      </>
    ),
    "/reserva": (
      <>
        <Link to="/account" className="buttonSideBarAccount" /*onClick={cerrarMenu}*/>
          Crear cuenta
        </Link>
        <Link to="/login" className="buttonNavSideLogin" /*onClick={cerrarMenu}*/>
          Iniciar sesión
        </Link>
      </>
    ),
    "/account": (
      <>
        <Link to="/login" className="buttonNavSideLogin" /*onClick={cerrarMenu}*/>
          Iniciar sesión
        </Link>
      </>
    ),
    "/login": (
      <>
        <Link to="/account" className="buttonSideBarAccount" /*onClick={cerrarMenu}*/ >
          Crear cuenta
        </Link>
      </>
    ),
  };

  const handleIsAuthMenu = () => {
    if (isAuthenticatedMenu) {
      return (
        <>
          <div className="contenedorMisReservas-administracion">
            {
              user.rol === "ADMIN" ?
                <Link to="/administracion" className="linkAdministracion">Administracion</Link> :
                <Link to="/misReservas" className="linkAdministracion">Mis Reservas</Link>
            }
          </div>
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
          {/* {console.log(user)} */}
          <span>{user.nombre[0] + user.apellido[0]}</span>
          {/* {console.log(user.nombre[0])} */}
          <p>Hola,</p>
          <p className="nombreCompletoMenu">{`${user.nombre} ${user.apellido}`}</p>
        </div>
      );
    } else {
      return <span className="menu">MENU</span>;
    }
  };

  return (
    <>
      {windowWidth <= 768 && (
        <Menu right /*isOpen={menuAbierto} onStateChange={estado=>manejarCambioDeEstadoMenu(estado)}*/  >
          <div className="upper-colored-box">{handleAuthenticated()}</div>
          <div className="menuConFooter">
            <div className="menu-main">{handleIsAuthMenu()}</div>
            <div>
              <SocialIconsSidebar />
            </div>
          </div>
        </Menu>
      )}
    </>
  );
};

export default Sidebar;
