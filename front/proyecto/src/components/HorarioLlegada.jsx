import Select from 'react-select';
import React from 'react'
import { Label } from './elementStyle/Form'
import selectStyles from './elementStyle/selectStyles';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

export default function HorarioLlegada() {
  return (
    <>
        <h2>Tu horario de llegada</h2>
        <div className='tablaDatos'>
            <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
            <div className='contenedorHorario'>
                <Label htmlFor="horario"><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"4px"}}/>Indica tu horario estimado de llegada</Label>
                <Select
                placeholder={<div className='placeholderSelect'>seleccionar hora de llegada</div>} 
                className='inputBanner'
                styles={selectStyles}
                />
            </div>

        </div>
    </>
  )
}
