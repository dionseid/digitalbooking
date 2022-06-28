import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./reservaDetalle.scss";
//import { Button } from 'react-bootstrap';
//import { Boton } from '../../elementStyle/Form';
import FechaRangoContextProvider from "../../context/FechaRangoContextProvider";
import HoraContextProvider from "../../context/HoraContextProvider";
import UserProvider from "../../context/UserContext";
import axiosConnection from "../../../helpers/axiosConnection";

export default function DetallesReserva() {
  const { user } = useContext(UserProvider);
  const { isHora, setIsHora } = useContext(HoraContextProvider);
  const { rango, setRango } = useContext(FechaRangoContextProvider);
  console.log("rango: ", rango);
  const [dataProducto, setDataProducto] = useState([]);
  const [dataImagen, setDataImagen] = useState([]);
  const [isCiudad, setIsCiudad] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("isCiudad: ", isCiudad);
  useEffect(() => {
    if (user.ciudad !== "") {
      setIsCiudad(true);
    } else if (user.ciudad === "") {
      setIsCiudad(false);
    }
  }, [user.ciudad]);

  const fechaInicio = rango[0]
    ? new Date(rango[0]).toISOString().slice(0, 10)
    : "_/_/_";
  const fechaFinal = rango[1]
    ? new Date(rango[1]).toISOString().slice(0, 10)
    : "_/_/_";

  useEffect(() => {
    axiosConnection
      .get(`/productos/buscarProductoPorId/${id}`)
      .then((response) => {
        setDataProducto(response.data);
      });
  }, []);

  useEffect(() => {
    // TODO modificar url
    axiosConnection
      .get(`/imagenes/listarImagenes`)
      .then((response) => {
        setDataImagen(response.data);
      });
  }, []);

  const getImage = () => {
    if (dataImagen.length !== 0) {
      const imagenes = dataImagen.filter((img) => img.producto?.id === id);
      return imagenes[0]?.url;
    }
  };

  const isProducto = () => {
    if (dataProducto.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  console.log("isHora:", isHora);
  const getLoginApi = async () => {
    try {
      // ** CAMBIAR POR EL URL DE LA API
      // const token = sessionStorage.getItem('token')&& JSON.parse(sessionStorage.getItem('token'));
      const respuesta = await axiosConnection.get("/login", {
        headers: {
          Authorization: `Bearer `,
        },
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (rango[0] !== null && rango[1] !== null && isHora && isCiudad) {
      // if(getLoginApi().status === 200 ){
      axiosConnection.post('/reserva/nuevaReserva',{
        hora: "15:00:00",
        fechaInicial: fechaInicio,
        fechaFinal: fechaFinal,
        producto: {
          id: id,
        },
        usuario: {
          id: user.id,
        },
      })
      navigate(`/reservaExitosa`);
    } //}
  };

  return (
    <div className="tablaDatos">
      {isProducto() && (
        <div className="contenedorTablaDetalle">
          <h2 className="tituloDetalleReserva">Detalle de la reserva</h2>
          <div className="contenidoTablaDetalle">
            <div
              style={{ backgroundImage: "url('" + getImage() + "')" }}
              className="fondoImagen"
            />
            <div className="contenedorDetalle">
              <span>{dataProducto.categoria.titulo}</span>
              <h2>{dataProducto.nombre}</h2>
              <div className="contenedorEstrellas">
                <FontAwesomeIcon icon={faStar} className="estrella" />
                <FontAwesomeIcon icon={faStar} className="estrella" />
                <FontAwesomeIcon icon={faStar} className="estrella" />
                <FontAwesomeIcon icon={faStar} className="estrella" />
                <FontAwesomeIcon icon={faStar} className="estrella" />
              </div>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ paddingRight: "5px" }}
                />
                {dataProducto.ciudad.provincia}, {dataProducto.ciudad.nombre},{" "}
                {dataProducto.ciudad.pais}.
              </p>
              <div className="linea" />
              <div className="check">
                <p>Check in</p>
                <p>{fechaInicio}</p>
              </div>
              <div className="linea" />
              <div className="check">
                <p>Check out</p>
                <p>{fechaFinal}</p>
              </div>
              <button className="confirmarReserva" onClick={onSubmit}>
                Confirmar reserva
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
