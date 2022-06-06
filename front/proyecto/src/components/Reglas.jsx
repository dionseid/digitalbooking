import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/reglas.css";



export default function Reglas() {
    const [dataReglas, setDataReglas] = useState([]);
        
    useEffect( () => {
    axios.get("http://localhost:8080/tiposDePoliticaDelProducto")
    .then(response => {
        console.log(response.data);
        setDataReglas(response.data)})

}, [])

  return (
    <div className='contenedorTodasReglas'>
        <div className='contenedorReglas'>
            <h4>Normas de la casa</h4>
            {dataReglas.filter((regla)=>regla.titulo === "Norma")
              .map((regla)=>(
                      <ul>
                          <li>{regla.descripcion}</li>
                      </ul>    
              ))}
        </div>
        <div className='contenedorReglas'>
            <h4>Salud y Seguridad</h4>
            {dataReglas.filter((regla)=>regla.titulo === "Seguridad")
              .map((regla)=>(
                      <ul>
                          <li>{regla.descripcion}</li>
                      </ul>     
              ))}
        </div>
        <div className='contenedorReglas'>
            <h4>Politicas de cancelación</h4>
            {dataReglas.filter((regla)=>regla.titulo === "Cancelacion")
              .map((regla)=>(
                    <ul>
                        <li>{regla.descripcion}</li>
                    </ul>      
              ))}
        </div>            
    </div>
  )
}
