import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosConnection from "../../../helpers/axiosConnection";
import "../Cards/cards.scss";

const DescripcionProducto = () => {
  const [dataDescripcion, setDataDescripcion] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosConnection
      .get(`http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com/productos/buscarProductoPorId/${id}`)
      .then((response) => {
        setDataDescripcion(response.data.data);
      });
  }, []);

  return (
    <>
      <h2>{dataDescripcion.nombre}</h2>
      <p key={dataDescripcion.id}>{dataDescripcion.descripcion}</p>
    </>
  );
};

export default DescripcionProducto;
