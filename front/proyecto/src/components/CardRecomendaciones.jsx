import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot, faWifi, faPersonSwimming, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState, useEffect, useMemo, useContext } from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";
import { useAccordionButton, Card } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'


const CardRecomendacion = ({ selectCiudad, selectCategoria }) => {
    const [dataProducto, setDataProducto] = useState([]);
    const [dataImagen, setImagen] = useState([]);
    const [idProducto, setIdProducto] = useState([]);
    const [verMas, setVerMas] = useState(false);



    const getUrl = () => selectCiudad ? `http://awseb-awseb-185hfl68ks755-374311792.us-west-1.elb.amazonaws.com:8080/productos/filtroCiudad/${selectCiudad}` : "http://awseb-awseb-185hfl68ks755-374311792.us-west-1.elb.amazonaws.com:8080/productos/traerTodos"

    useEffect(() => {
        axios.get(getUrl())
            .then(response => {
                setDataProducto(response.data)
            })

    }, [selectCiudad])

    useEffect(() => {
        axios.get(`http://awseb-awseb-185hfl68ks755-374311792.us-west-1.elb.amazonaws.com:8080/productos/filtroCategoria/${selectCategoria}`)
            .then(response => {
                setDataProducto(response.data)
            })

    }, [selectCategoria])

    const filteredList = useMemo(() => {
        if (!selectCiudad) { // Cuando selectCiudad es null entonces no filtrar
            return selectCategoria ? dataProducto.filter((prod) => prod.categoria.id == selectCategoria) : dataProducto;
        } else {
            if (!selectCategoria) {   //cuando selectCategoria es null no filtrar por categoria, solo ciudad
                return dataProducto.filter((prod) => prod.ciudad.id == selectCiudad)
            }
            return dataProducto.filter((prod) => prod.ciudad.id == selectCiudad && prod.categoria.id == selectCategoria)
        }
        return dataProducto;

    }, [dataProducto, selectCategoria, selectCiudad])

    //const getFilteredList = () => selectCiudad ? dataProducto.filter((prod) => prod.ciudad.id == selectCiudad) : dataProducto;

    //const getFilteredCategoryList = () => selectCategoria ? dataProducto.filter((prod) => prod.categoria.id == selectCategoria) : dataProducto;
    return (
        <div className="cards">
            {filteredList.map((card) => (
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
                        <p>{verMas ? card.descripcion : card.descripcion.split(' ', 8).join(" ")}<span className="mas" onClick={() => setVerMas(!verMas)}>
                            {verMas ? " ver menos" : " ver más..."}</span></p>
                        <Link to={`/productos/${card.id}`}><button className="buttonCard">ver más</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )


}
export default CardRecomendacion;


