import React from 'react';
import "./label.css";


const Label =({text}) =>{
    return(
        <div className='parrafo'>
            <label>{text}</label>
        </div>
    )
};

export default Label;