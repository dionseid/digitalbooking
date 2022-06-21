import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "../styles/cards.css";



const CardAlojamiento= ({idCategoria,setIdCategoria, onDoubleClick}) =>{  
    const [dataCategoria, setDataCategoria] = useState([]);
    //const [idCategoria, setIdCategoria] = useState([]);
    
    useEffect( () => {
        axios.get("http://localhost:8080/categorias")
        .then(response => {
           setDataCategoria(response.data)})
    
    }, [])
    
    
    
            return (
                <div className="cards" >
                    {dataCategoria.map((cat)=>(
                        <div key={cat.id} className="cardAlojamiento" onDoubleClick={(e)=>{onDoubleClick(cat.id,e)}}>
                            <div style={{backgroundImage:"url('" + cat.urlImg + "')"}} className="fondoImagen"/>
                            <div className="cardBody">
                                <h4>{cat.titulo}</h4>
                                <p style={{fontWeight:"700"}}>{cat.descripcion}</p>
                            </div>                        
                        </div>
                    ))}
                </div>
            ) 
    
    
    }
    
    export default CardAlojamiento;
    