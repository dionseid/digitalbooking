import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/caracteristicas.css"



export default function Caracteristicas() {
    const [dataCaracteristicas, setDataCaracteristicas] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com:8080/caracteristicas")
            .then(response => {
                setDataCaracteristicas(response.data)
            })

    }, [])

    return (
        <>
            <h2>¿Qué ofrece este lugar?</h2>
            <div className='contendorCaracteristicas'>
                {dataCaracteristicas.filter((imagen) => imagen.producto.id == id)
                    .map((cat) => (
                        <div key={cat.id} className="caracteristica">
                            <span class="material-symbols-outlined">{cat.icono}</span>
                            <p>{cat.nombre}</p>
                        </div>
                    ))}
            </div>
        </>
    )


}

