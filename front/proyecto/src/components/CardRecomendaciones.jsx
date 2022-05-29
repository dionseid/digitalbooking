import React from "react";
import data from "../helpers/data.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faLocationDot, faWifi, faPersonSwimming} from "@fortawesome/free-solid-svg-icons"
import "../styles/cards.css";

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
                        <div style={{backgroundImage:"url(../img/" + card.URLimg + ")"}} className="fondoImagen"/>
                        <div className="cardBody">
                            <div className="presentacion">
                                <div>
                                    <p className="hotel">HOTEL <FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/><FontAwesomeIcon icon={faStar} className="estrella"/></p>
                                    <h3 className="nombreHotel">{card.titulo}</h3>
                                </div>
                                <div className="calificacion">
                                    <span className="puntaje">{card.puntaje}</span>
                                    <p style={{fontWeight: "700"}}>{card.calificacion}</p>
                                </div>
                            </div>
                            <div className="infoHotel">                            
                            <p><FontAwesomeIcon icon={faLocationDot} style={{marginRight:"4px"}}/>{card.ubicacion} <span className="mostrarMapa">MOSTRAR EN EL MAPA</span></p>
                            <p className="iconosInfoHotel"><FontAwesomeIcon icon={faWifi} style={{marginRight:"8px"}}/><FontAwesomeIcon icon={faPersonSwimming}/></p>
                            </div>
                            <p>{card.parrafo} <span className="mas">más...</span></p>
                            <button className="buttonCard">ver más</button>
                        </div>
                    </div>
                ))}
            </div>

        )
    }

}

export default CardRecomendacion;