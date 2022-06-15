
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import "../styles/reservaDetalle.css";
import { Button } from 'react-bootstrap';
import { Boton } from './elementStyle/Form';


export default function DetallesReserva() {
    const [dataProducto, setDataProducto] = useState([]);
    //const [dataImagen, setDataImagen] = useState([]);
    const {id} = useParams();
    
    useEffect( () => {
        axios.get(`http://localhost:8080/productos/buscarProductoPorId/${id}`)
        .then(response => {
            setDataProducto(response.data)})
            console.log(dataProducto);

    }, [])

    const isProducto = () =>{
        if (dataProducto.length === 0) {
          return false      
        }else{
          return true
        }
    }




  return (
    <div className='tablaDatos'>  
    {isProducto() && ( <div className='contenedorTablaDetalle'>    
        <h2 className='tituloDetalleReserva'>Detalle de la reserva</h2>
        <div style={{ backgroundImage: "url('" + dataProducto.categoria.urlImg + "')" }} className="fondoImagen" />
        <div className='contenedorDetalle'>
          <span>{dataProducto.categoria.titulo}</span>
          <h2>{dataProducto.nombre}</h2>
          <div className='contenedorEstrellas'>
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
            <FontAwesomeIcon icon={faStar} className="estrella" />
          </div>
          <p><FontAwesomeIcon icon={faLocationDot} style={{"paddingRight":"5px"}}/>{dataProducto.ciudad.provincia}, {dataProducto.ciudad.nombre}, {dataProducto.ciudad.pais}.</p>
          <div className='linea'/>
          <div className='check'>
            <p>Check in</p>
            <p>fecha</p>
          </div>
          <div className='linea'/>
          <div className='check'>
            <p>Check out</p>
            <p>fecha</p>
          </div>
          <button className='confirmarReserva'>Confirmar reserva</button>
        </div>
        
        </div>
    )}

    </div>
    
  )
}
