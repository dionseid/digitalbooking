import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/cards.css";



const CardAlojamiento = () => {
    const [dataCategoria, setDataCategoria] = useState([]);
    useEffect(() => {
        axios.get({
            baseURL: "http://awseb-awseb-19h8qama3kcj1-539654579.us-west-1.elb.amazonaws.com:8080/categorias",
            header: { "Access-Control-Allow-Origin": "*" }
        })
            .then(response => {
                setDataCategoria(response.data)
            })

    }, [])


    return (
        <div className="cards">
            {dataCategoria.map((cat) => (
                <div key={cat.id} className="cardAlojamiento">
                    <div style={{ backgroundImage: "url('" + cat.urlImg + "')" }} className="fondoImagen" />
                    <div className="cardBody">
                        <h4>{cat.titulo}</h4>
                        <p style={{ fontWeight: "700" }}>{cat.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    )


}

export default CardAlojamiento;