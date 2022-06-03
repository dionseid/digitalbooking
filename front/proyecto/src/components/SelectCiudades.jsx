import axios from 'axios';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

export default function SelectCiudades() {
    const [dataCiudades, setDataCiudades] = useState([]);
    
    const handleSelectChange = (nombre)=>{
        console.log(nombre);
    }
    
    useEffect( () => {
    axios.get("http://localhost:8080/ciudades")
    .then(response => {
        console.log(response.data);
        setDataCiudades(response.data)})

}, [])

  return (
    <div>
            <Select 
            placeholder={<div><FontAwesomeIcon icon={faLocationDot} style={{marginRight:"4px"}}/>¿A dónde vamos?</div>} 
            className='inputBanner'
            options={dataCiudades.map( ciudad =>({label: ciudad.nombre, value: ciudad.nombre}))}  
            />
    </div>
  )
}
