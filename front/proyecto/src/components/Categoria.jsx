import React from 'react';

function Categoria({ card }) {
    return (
        <div className="cards">
            <div key={card.id} className="cardAlojamiento">
                <div style={{backgroundImage:"url(../img/" + card.URLimg + ")"}} className="fondoImagen"/>
                <div className="cardBody">
                    <h4>{card.titulo}</h4>
                    <p style={{fontWeight:"700"}}>{card.parrafo}</p>
                </div>
            </div>
        </div>
    );
  }

export default Categoria;