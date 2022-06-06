import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/caracteristicas.css"



export default function Caracteristicas() {
    const [dataCaracteristicas, setDataCaracteristicas] = useState([]);
    useEffect( () => {
    axios.get("http://localhost:8080/caracteristicas")
        .then(response => {
            setDataCaracteristicas(response.data)})

}, [])

        return (
            <>            
                <h2>¿Qué ofrece este lugar?</h2>
                <div className='contendorCaracteristicas'>
                    {dataCaracteristicas.map((cat)=>(                                               
                        <div key={cat.id} className="caracteristica">                            
                        <span class="material-symbols-outlined">{cat.icono}</span>
                            <p>{cat.nombre}</p>
                        </div>
                    ))}
                </div>
            </>
        ) 


}

