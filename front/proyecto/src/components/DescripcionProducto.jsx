import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/cards.css";



const DescripcionProducto = () => {
        const [dataDescripcion, setDataDescripcion] = useState([]);
        const { id } = useParams();
        useEffect(() => {
                axios.get(`http://awseb-awseb-19h8qama3kcj1-539654579.us-west-1.elb.amazonaws.com/productos/buscarProductoPorId/${id}`)
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