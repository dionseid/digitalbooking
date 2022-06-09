import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot, faWifi, faPersonSwimming } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";


const CardRecomendacion = () => {
    const [dataProducto, setDataProducto] = useState([]);
    useEffect(() => {
        axios.get("http://awseb-AWSEB-19H8QAMA3KCJ1-539654579.us-west-1.elb.amazonaws.com:5000/productos/traerTodos")
            .then(response => {
                setDataProducto(response.data)
            })

    }, [])


    return (
        <div className="cards">
            {dataProducto.map((card) => (
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
