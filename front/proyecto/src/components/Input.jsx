import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "../styles/input.css";

const Input = ({attribute, handleChange, param})=>{
    return(
        <div className='input-contenedor'>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e)=>handleChange(e.target.name, e.target.value)}
            className="regular-style">                
            </input>
            <FontAwesomeIcon icon={faCheckCircle} className="iconoValidacion"/>
            <p>error</p>
        </div>
    )
};

export default Input;

