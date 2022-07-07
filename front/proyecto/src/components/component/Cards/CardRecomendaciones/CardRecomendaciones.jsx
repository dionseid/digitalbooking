import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useMemo } from "react";
import "../cards.scss";
import { Link } from "react-router-dom";
import axiosConnection from "../../../../helpers/axiosConnection";
import ImageEmptyState from "../../../img/EmptyState@2x.png";

//import { useAccordionButton, Card } from "react-bootstrap";
//import Accordion from 'react-bootstrap/Accordion'

const CardRecomendacion = ({
  selectCiudad,
  selectCategoria,
  startDate,
  endDate,
}) => {
  const [dataProducto, setDataProducto] = useState([]);
  const [dataImagen, setImagen] = useState([]);
  const [dataCaracteristicas, setCaracteristicas] = useState([]);
  //const [/*idProducto,*/ setIdProducto] = useState([]);
  const [verMas, setVerMas] = useState(false);

  const fechaInicio = new Date(startDate).toISOString().slice(0, 10);
  const fechaFinal = new Date(endDate).toISOString().slice(0, 10);

  const getUrl = () =>
    selectCiudad
      ? `/productos/FiltroPorCiudadYFechas/${selectCiudad}/${fechaInicio}/${fechaFinal}`
      : "/productos/traerTodos";

  useEffect(() => {
    axiosConnection.get(getUrl()).then((response) => {
      setDataProducto(response.data.data);
    });
    // TODO Modificar url
    axiosConnection.get(`/imagenes/listarImagenes`).then((response) => {
      setImagen(response.data.data);
    });
    return
  }, [selectCiudad, startDate, endDate]);

  console.log(startDate);
  useEffect(() => {
    axiosConnection
      .get(`/caracteristicas/listarCaracteristicas`)
      .then((response) => {
        setCaracteristicas(response.data.data);
      });
    return
  }, []);

  const getImage = (card) => {
    const imagenes = dataImagen.filter((img) => img.producto?.id === card.id);
    //console.log("imagenes: ", imagenes);
    return imagenes[0]?.url;
  };

  const filteredList = useMemo(() => {
    return selectCategoria
      ? dataProducto.filter((prod) => prod.categoria.id === selectCategoria)
      : dataProducto;
  }, [dataProducto, selectCategoria, selectCiudad]);

  //const getFilteredList = () => selectCiudad ? dataProducto.filter((prod) => prod.ciudad.id == selectCiudad) : dataProducto;

  //const getFilteredCategoryList = () => selectCategoria ? dataProducto.filter((prod) => prod.categoria.id == selectCategoria) : dataProducto;
  const buscadorCards = () => {
    if (filteredList.length === 0) {
      return (
        <>
            <div className="emptyState">
                <p className="parrafoEmpty">Lo sentimos, no hay productos disponibles en este momento</p>
                <img src={ImageEmptyState}/>
                
            </div>
        </>
      );
    } else {
      return (
        <>
          {filteredList?.map((card) => (
            <div key={card.id} className="cardRecomendacion">
              <div
                style={{ backgroundImage: "url('" + getImage(card) + "')" }}
                className="fondoImagenProducto"
              />
              <div className={`cardBody ${verMas? null : "widthBody"}`}>
                <div className="presentacion">
                  <div>
                    <div className="categoriaYEstrellas">
                      <p className="categoria">{card.categoria.titulo}</p>
                      <p>
                        <FontAwesomeIcon icon={faStar} className="estrella" />
                        <FontAwesomeIcon icon={faStar} className="estrella" />
                        <FontAwesomeIcon icon={faStar} className="estrella" />
                        <FontAwesomeIcon icon={faStar} className="estrella" />
                        <FontAwesomeIcon icon={faStar} className="estrella" />
                      </p>
                    </div>
                    <h3 className="nombreHotel">{card.nombre}</h3>
                  </div>
                  <div className="calificacion">
                    <span className="puntaje">8</span>
                    <p style={{ fontWeight: "700", textAlign: "right" }}>
                      Muy Bueno
                    </p>
                  </div>
                </div>
                <div className="infoHotel">
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ marginRight: "4px" }}
                    />
                    {card.ciudad.nombre}{" "}
                    <span className="mostrarMapa">MOSTRAR EN EL MAPA</span>
                  </p>
                  <p className="iconosInfoHotel">
                    {card.caracteristicas
                      .map((cat) => (
                        <span class="material-symbols-outlined">
                          {cat.caracteristica?.icono}
                        </span>
                      ))}
                  </p>
                </div>
                <p>
                  {verMas
                    ? card.descripcion
                    : card.descripcion?.split(" ", 12).join(" ")}
                  <span className="mas" onClick={() => setVerMas(!verMas)}>
                    {verMas ? " ver menos" : " ver más..."}
                  </span>
                </p>
                <Link to={`/productos/${card.id}`}>
                  <button className="buttonCard">ver más</button>
                </Link>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  //const getFilteredList = () => selectCiudad ? dataProducto.filter((prod) => prod.ciudad.id == selectCiudad) : dataProducto;

  //const getFilteredCategoryList = () => selectCategoria ? dataProducto.filter((prod) => prod.categoria.id == selectCategoria) : dataProducto;

  return <div className="cards">{buscadorCards()}</div>;
};

export default CardRecomendacion;
