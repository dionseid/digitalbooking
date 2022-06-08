import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/cards.css";



const DescripcionProducto = () => {
        const [dataDescripcion, setDataDescripcion] = useState([]);
        const { id } = useParams();
        useEffect(() => {
                axios.get(`http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com:8080/productos/buscarProductoPorId/${id}`)
                        .then(response => {
                                setDataDescripcion(response.data)
                        })

        }, [])


        return (
                <>
                        <h2>{dataDescripcion.nombre}</h2>
                        <p key={dataDescripcion.id}>{dataDescripcion.descripcion}</p>
                </>
        )


}

export default DescripcionProducto;