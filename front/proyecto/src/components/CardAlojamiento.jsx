import axios from "axios";
import React, { useState , useEffect} from "react";
import data from "../helpers/data.json";
import "../styles/cards.css";



const CardAlojamiento= () =>{  
const [dataCategoria, setDataCategoria] = useState([]);
useEffect( () => {
    axios.get("http://localhost:8080/categorias")
    .then(response => {
       setDataCategoria(response.data)})

}, [])


        return (
            <div className="cards">
                {dataCategoria.map((cat)=>(
                    <div key={cat.id} className="cardAlojamiento">
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