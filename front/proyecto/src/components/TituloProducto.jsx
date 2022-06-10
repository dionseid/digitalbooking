import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";



const TituloProducto = () => {
    const [dataTitulo, setDataTitulo] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://awseb-awseb-19h8qama3kcj1-539654579.us-west-1.elb.amazonaws.com/productos/buscarProductoPorId/${id}`)
            .then(response => {
                setDataTitulo(response.data)
            })

    }, [])


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