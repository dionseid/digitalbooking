import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/pages/productos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";



const TituloProducto = () => {
    const [dataTitulo, setDataTitulo] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com/productos/buscarProductoPorId/${id}`)
            .then(response => {
                setDataTitulo(response.data)
            })

    }, [id])


    return (
        <>
            <div className="headerProducto">
                <div>
                    <h2>{dataTitulo.nombre}</h2>
                </div>
                <Link to="/"><FontAwesomeIcon icon={faAngleLeft} className="iconoVolver" /></Link>
            </div>
        </>
    )


}

export default TituloProducto;