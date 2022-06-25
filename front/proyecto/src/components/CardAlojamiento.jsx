import axios from "axios";
import React, { useState, useEffect, useRef, Suspense } from "react";
import "../styles/cards.css";
import SpinnerLoader from "./SpinnerLoader";



const CardAlojamiento= ({idCategoria,setIdCategoria, onDoubleClick}) =>{  
    const [dataCategoria, setDataCategoria] = useState([]);
    //const [idCategoria, setIdCategoria] = useState([]);
    
    useEffect( () => {
        axios.get("http://localhost:8080/categorias")
        .then(response => {
           setDataCategoria(response.data)})
    
    }, [])

    const buscadorCardsCategoria = () => {
        if (dataCategoria.length === 0) {
          return (
            <>
                <SpinnerLoader/>
            </>
          );
        } else {
          return (
            <>
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
            </>
          );
        }
      };
    
    
    
            return (
                <>
                {buscadorCardsCategoria()}
                </>
            ) 
    
    
    }
    
    export default CardAlojamiento;
    