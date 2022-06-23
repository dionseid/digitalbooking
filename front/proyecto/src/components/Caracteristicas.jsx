import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/caracteristicas.css"



export default function Caracteristicas() {
    const [dataCaracteristicas, setDataCaracteristicas] = useState([]);
    const {id} = useParams();
    useEffect( () => {
        // TODO modificar url
    axios.get("http://localhost:8080/caracteristicas/listarCaracteristicas")
        .then(response => {
            setDataCaracteristicas(response.data)})

}, [])

        return (
            <>            
                <h2>¿Qué ofrece este lugar?</h2>
                <div className='contendorCaracteristicas'>
                    {dataCaracteristicas.filter((imagen)=>imagen.producto?.id == id)
                    .map((cat)=>(                                               
                        <div key={cat.id} className="caracteristica">                            
                        <span class="material-symbols-outlined">{cat.icono}</span>
                            <p>{cat.nombre}</p>
                        </div>
                    ))}
            </div>
        </>
    )


}

