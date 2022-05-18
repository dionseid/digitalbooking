import React from "react";
import data from "../helpers/data.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faLocationDot, faWifi, faPersonSwimming} from "@fortawesome/free-solid-svg-icons"

class CardRecomendacion extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div className="cards">
                {data.informacionRecomendacion.map((card)=>(
                    <div key={card.id} className="cardRecomendacion">
                        <img src={card.URLimg} alt="hotel" className="imagen"/>
                        <div className="cardBody">
                            <div className="presentacion">
                                <div>
                                    <p>HOTEL <FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/></p>
                                    <h3>{card.titulo}</h3>
                                </div>
                                <div>
                                    <span className="puntaje">{card.puntaje}</span>
                                    <p style={{fontWeight: "700"}}>{card.calificacion}</p>
                                </div>
                            </div>                            
                            <p><FontAwesomeIcon icon={faLocationDot} style={{marginRight:"4px"}}/>{card.ubicacion} <span style={{color:"#F0572D", fontWeight: "700"}}>MOSTRAR EN EL MAPA</span></p>
                            <p><FontAwesomeIcon icon={faWifi} style={{marginRight:"8px"}}/><FontAwesomeIcon icon={faPersonSwimming}/></p>
                            <p>{card.parrafo} <span style={{color:"#F0572D"}}>más...</span></p>
                            <button className="buttonCard">ver más</button>
                        </div>
                    </div>
                ))}
            </div>

        )
    }

}

export default CardRecomendacion;