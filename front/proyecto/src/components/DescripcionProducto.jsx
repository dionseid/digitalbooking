import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/cards.css";



const DescripcionProducto = () => {
        const [dataDescripcion, setDataDescripcion] = useState([]);
        const { id } = useParams();
        useEffect(() => {
                axios.get(`http://awseb-AWSEB-19H8QAMA3KCJ1-539654579.us-west-1.elb.amazonaws.com:5000/productos/buscarProductoPorId/${id}`)
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