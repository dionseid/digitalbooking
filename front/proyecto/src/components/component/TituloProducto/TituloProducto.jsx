import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../pages/Productos/productos.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosConnection from "../../../helpers/axiosConnection";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import UserProvider from "../../context/UserContext";

const TituloProducto = () => {
  const [dataTitulo, setDataTitulo] = useState([]);
  const { id } = useParams();
  const { user } = useContext(UserProvider)
  useEffect(() => {
    axiosConnection
      .get(`/productos/buscarProductoPorId/${id}`)
      .then((response) => {
        setDataTitulo(response.data.data);
      });
  }, [id]);

  const Titulo = () => {
    if (dataTitulo.length === 0) {
      return (<>
        <h2>{user.rol === "ADMIN" ? "Administración" : "Mis Reservas"}</h2>
      </>
      );
    } else {
      return (
        <>
          <h2>{dataTitulo.nombre}</h2>
        </>
      );
    }
  };

  return (
    <>
      <div className="headerProducto">
        <div>
          {Titulo()}
        </div>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className="iconoVolver" />
        </Link>
      </div>
    </>
  );
};

export default TituloProducto;
