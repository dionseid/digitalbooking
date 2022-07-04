import React, { useEffect, useContext, useState } from "react";
import Navbar from "../../components/component/Navbar/Navbar";
import TituloProducto from "../../components/component/TituloProducto/TituloProducto";
import Footer from "../../components/component/Footer/Footer";
import axiosConnection from "../../helpers/axiosConnection";
import  UserProvider  from "../../components/context/UserContext";

const MisReservas = () => {
    const [reservas, setReservas] = useState()
    const {user} = useContext(UserProvider)

    const traerReservas = async () => {
        const respApi = await axiosConnection.get(`/reserva/listarByUsuario/${user.id}`)
        setReservas(respApi.data)
        console.log(reservas)
        return traerReservas
    }

    useEffect(()=>{
        
    })



    return <>
        <header>
            <Navbar />
            <TituloProducto/>
        </header>
        <body>
        </body>
        <footer>
            <Footer/>
        </footer>
    </>

}

export default MisReservas;