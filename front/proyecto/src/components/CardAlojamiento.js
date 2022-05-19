import React from "react";
import data from "../helpers/data.json";



class CardAlojamiento extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <div className="cards">
                {data.informacionAlojamiento.map((card)=>(
                    <div key={card.id} className="cardAlojamiento">
                        <div style={{backgroundImage:"url(./img/" + card.URLimg + ")"}} className="fondoImagen"/>
                        <div className="cardBody">
                            <h4>{card.titulo}</h4>
                            <p style={{fontWeight:"700"}}>{card.parrafo}</p>
                        </div>
                    </div>
                ))}
            </div>
        ) 
    }

}

export default CardAlojamiento;