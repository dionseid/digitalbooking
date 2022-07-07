import React, { useEffect, useContext, useState } from "react";
import Navbar from "../../components/component/Navbar/Navbar";
import TituloProducto from "../../components/component/TituloProducto/TituloProducto";
import Footer from "../../components/component/Footer/Footer";
import axiosConnection from "../../helpers/axiosConnection";
import  UserProvider  from "../../components/context/UserContext";
import MensajeSinProductos from "../../components/component/MensajeExito/MensajeSinProductos/MensajeSinProductos";
import ListadoMisProductos from "../../components/component/Listados/ListadoMisProductos/ListadoMisProductos";


const MisProductos = () => {
    const [productos, setProductos] = useState(null)
    const {user} = useContext(UserProvider)

    const traerProductos = async () => {
        try{
            const respApi = await axiosConnection.get(`/productos/traerTodos`)
            setProductos(respApi.data.data)
            console.log("Traer productos",productos)
            return traerProductos
        }catch(error){
            console.log("Traer productos",error)
        }
    }

    useEffect(()=>{
        traerProductos()
        return
    },[])



    return <>
        <header>
            <Navbar />
            <TituloProducto/>
        </header>
        <body>
            {productos === null ? <MensajeSinProductos />  : <ListadoMisProductos productos={productos} /> }
        </body>
        <footer>
            <Footer/>
        </footer>
    </>

}

export default MisProductos;