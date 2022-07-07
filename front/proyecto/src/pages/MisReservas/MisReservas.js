import React, { useEffect, useContext, useState } from "react";
import Navbar from "../../components/component/Navbar/Navbar";
import TituloProducto from "../../components/component/TituloProducto/TituloProducto";
import Footer from "../../components/component/Footer/Footer";
import axiosConnection from "../../helpers/axiosConnection";
import  UserProvider  from "../../components/context/UserContext";
import MensajeSinReservas from "../../components/component/MensajeExito/MensajeSinReservas/MensajeSinReservas";
import ListadoMisReservas from "../../components/component/Listados/ListadoMisReservas/ListadoMisReservas";


const MisReservas = () => {
    const [reservas, setReservas] = useState(null)
    const {user} = useContext(UserProvider)

    const traerReservas = async () => {
        try{
            console.log("user id", user.id)
            const respApi = await axiosConnection.get(`/reserva/listarByUsuario/${user.id}`)
            setReservas(respApi.data.data)
            console.log("Traer reservas",reservas)
            return traerReservas
        }catch(error){
            console.log("Traer reservas",error)
        }
    }

    useEffect(()=>{
        traerReservas()
        return
    },[])



    return <>
        <header>
            <Navbar />
            <TituloProducto/>
            {console.log("reservas: ",reservas)}
        </header>
        <body>
            {reservas === null ? <MensajeSinReservas />  : <ListadoMisReservas reservas={reservas} /> }
        </body>
        <footer>
            <Footer/>
        </footer>
    </>

}

export default MisReservas;