import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot, faWifi, faPersonSwimming } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";


const CardRecomendacion = ({ selectCiudad }) => {
    const [dataProducto, setDataProducto] = useState([]);
    const [selectedCiudad, setSelectedCiudad] = useState(selectCiudad);

    useEffect(() => {
        axios.get("http://awseb-awseb-19h8qama3kcj1-539654579.us-west-1.elb.amazonaws.com/productos/traerTodos")
            .then(response => {
                setDataProducto(response.data)
            })
    }, [])

    const getFilteredList = () => selectCiudad ? dataProducto.filter((prod) => prod.ciudad.id == selectCiudad) : dataProducto;

    return (
        <div className="cards">
            {getFilteredList().map((card) => (
                <div key={card.id} className="cardRecomendacion">
                    <div style={{ backgroundImage: "url('" + card.categoria.urlImg + "')" }} className="fondoImagen" />
                    <div className="cardBody">
                        <div className="presentacion">
                            <div>
                                <p className="hotel">{card.categoria.titulo} <FontAwesomeIcon icon={faStar} className="estrella" /><FontAwesomeIcon icon={faStar} className="estrella" /><FontAwesomeIcon icon={faStar} className="estrella" /><FontAwesomeIcon icon={faStar} className="estrella" /><FontAwesomeIcon icon={faStar} className="estrella" /></p>
                                <h3 className="nombreHotel">{card.nombre}</h3>
                            </div>
                            <div className="calificacion">
                                <span className="puntaje">8</span>
                                <p style={{ fontWeight: "700" }}>Muy Bueno</p>
                            </div>
                        </div>
                        <div className="infoHotel">
                            <p><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "4px" }} />{card.ciudad.nombre} <span className="mostrarMapa">MOSTRAR EN EL MAPA</span></p>
                            <p className="iconosInfoHotel"><FontAwesomeIcon icon={faWifi} style={{ marginRight: "8px" }} /><FontAwesomeIcon icon={faPersonSwimming} /></p>
                        </div>
                        <p>{card.descripcion} <span className="mas">más...</span></p>
                        <Link to={`/productos/${card.id}`}><button className="buttonCard">ver más</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )


}
export default CardRecomendacion;
