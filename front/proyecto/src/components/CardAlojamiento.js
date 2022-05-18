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
                        <img src={card.URLimg} alt="hotel" className="imagen"/>
                        <div className="cardBody">
                            <h4>{card.titulo}</h4>
                            <p style={{color:"#31363F", fontWeight:"700"}}>{card.parrafo}</p>
                        </div>
                    </div>
                ))}
            </div>
        ) 
    }

}

export default CardAlojamiento;