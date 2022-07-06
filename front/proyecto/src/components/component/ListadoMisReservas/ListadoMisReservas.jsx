import React, { useEffect, useState} from "react";
import axiosConnection from "../../../helpers/axiosConnection";
import './ListadoMisReservas.scss'


const ListadoMisReservas = ({reservas}) => {
    const [imagenes, setImagenes] = useState([])
    
    const traerImagenes = async () => {
        try{
            const respApi = await axiosConnection.get('/imagenes/listarImagenes')
            setImagenes(respApi.data.data)
            console.log("Traer Imagenes: ",respApi)
            return respApi.data.data
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        traerImagenes()
    },[])

    const filtrarImagenes = id => {
        if(imagenes.length>0)
            return imagenes.filter(e => e.producto.id === id)[0]?.url
    }
    return<div className="contenedorReservas">
        {console.log("ListadoMisReservas: ",reservas)   }
        {reservas.map((e)=><div className="reserva">
            <div className="contenedorImagen">
                <img src={filtrarImagenes(e.producto.id)}/>
            </div>
            <span className="categoriaListadoMisReservas">{e.producto.categoria.titulo}</span>
            <h2 className="tituloListadoMisReservas">{e.producto.nombre}</h2>
            <p className="ciudadListadoReserva">{`${e.producto.ciudad.provincia}, ${e.producto.ciudad.nombre}, ${e.producto.ciudad.pais}.`}</p>
            <div className="checkinReservaListadoContenedor">
                <span className="checkinReservaListadoDescripcion">Check in</span>
                <span className="fechaReservaListado">{e.fechaInicial}</span>
            </div>
            <div className="checkoutReservaListado">
                <span className="checkoutReservaListadoDescripcion">Check out</span>
                <span className="fechaReservaListado">{e.fechaFinal}</span>
            </div>
        </div>)}
    </div>
}

export default ListadoMisReservas;