import React from 'react';
import "./label.css";


const Label =({attribute, text}) =>{
    return(
        <div className='parrafo'>
            <label htmlFor={attribute}>{text}</label>
        </div>
    )
};

export default Label;