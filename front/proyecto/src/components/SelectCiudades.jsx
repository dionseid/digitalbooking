import axios from 'axios';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/selectCiudades.css";
import selectStyles from './elementStyle/selectStyles';




export default function SelectCiudades({ onChange }) {
  const [dataCiudades, setDataCiudades] = useState([]);
  useEffect(() => {
    axios.get("http://awseb-awseb-19h8qama3kcj1-539654579.us-west-1.elb.amazonaws.com/ciudades", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        setDataCiudades(response.data)
      })
  })



  return (
    <div>
      <Select
        placeholder={<div className='placeholderSelect'><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "4px" }} />¿A dónde vamos?</div>}
        className='inputBanner'
        options={dataCiudades.map(ciudad => (
          {
            label: <div className='contenedorLabel'>
              <FontAwesomeIcon icon={faLocationDot} className='iconoLocacionLabel' />
              <div>
                <dt>{ciudad.nombre}</dt>
                <dd style={{ fontSize: "14px", lineHeight: "16px", color: "#31363F" }}>{ciudad.pais}</dd>
              </div>
            </div>,
            value: ciudad.id
          }))}
        styles={selectStyles}
        onChange={(e) => { onChange(e.value) }}
      />
    </div>
  )
}
