import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../pages/Productos/productos.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosConnection from "../../../helpers/axiosConnection";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const TituloProducto = () => {
  const [dataTitulo, setDataTitulo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosConnection
      .get(`http://localhost:8080/productos/buscarProductoPorId/${id}`)
      .then((response) => {
        setDataTitulo(response.data);
      });
  }, [id]);

  const Titulo = () => {
    if (dataTitulo.length === 0) {
      return (
            <h2>Administracion</h2>
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
