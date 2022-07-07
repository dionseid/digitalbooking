import React, { useEffect, useState} from "react";
import axiosConnection from "../../../../helpers/axiosConnection";
import '../ListadoMisReservas.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MensajeSinReservas from "../../MensajeExito/MensajeSinReservas/MensajeSinReservas";


const ListadoMisReservas = ({reservas}) => {
    const [imagenes, setImagenes] = useState([])
    const [elementoEliminado, setElementoEliminado] = useState(false)
    const [reservasTraidas ,setReservasTraidas] = useState(reservas)
    const navigate = useNavigate()
    
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
        return
    },[])


    
    
    
    const filtrarImagenes = id => {
        if(imagenes.length>0)
        return imagenes.filter(e => e.producto.id === id)[0]?.url
    }
    
    const eliminarReserva = async (id) => {
        try{
            const respApi = await axiosConnection.delete(`/reserva/eliminarReserva/${id}`)
            setReservasTraidas(reservasTraidas.filter(e =>e.id !== id))
            console.log("reservas modificado", reservas)
            setElementoEliminado((prev) => !prev)
            
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=> {},[reservasTraidas])
    
    return <div className="contenedorReservas">
        {reservasTraidas?.map((e)=><div className="reserva">
            <div className="contenedorImagen">
                <span onClick={()=>eliminarReserva(e.id)}>&times;</span>
                <img src={filtrarImagenes(e.producto.id)}/>
            </div>
            <span className="categoriaListadoMisReservas">{e.producto.categoria.titulo}</span>
            <h2 className="tituloListadoMisReservas">{e.producto.nombre}</h2>
            <p className="ciudadListadoReserva">                
            <FontAwesomeIcon icon={faLocationDot} style={{ paddingRight: "5px" }}/>{`${e.producto.ciudad.provincia}, ${e.producto.ciudad.nombre}, ${e.producto.ciudad.pais}.`}</p>
            <div className="checkinReservaListadoContenedor">
                <span className="checkinReservaListadoDescripcion">Check in</span>
                <span className="fechaReservaListado">{e.fechaInicial}</span>
            </div>
            <div className="checkoutReservaListado">
                <span className="checkoutReservaListadoDescripcion">Check out</span>
                <span className="fechaReservaListado">{e.fechaFinal}</span>
            </div>
        </div>)}
        <div className="separador"/>
    </div> 
    
}

export default ListadoMisReservas;