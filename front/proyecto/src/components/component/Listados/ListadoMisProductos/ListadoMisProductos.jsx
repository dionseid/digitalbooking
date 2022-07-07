import React, { useEffect, useState } from "react";
import axiosConnection from "../../../../helpers/axiosConnection";
import '../ListadoMisReservas.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const ListadoMisProductos = ({ productos }) => {
  const [dataImagen, setDataImagen] = useState([])
  const [productosTraidos, setProductosTraidos] = useState(productos)

  useEffect(() => {
    axiosConnection.get(`/imagenes/listarImagenes`).then((response) => {
      setDataImagen(response.data.data);
      console.log("info: ", response.data.data);
    });
    return
  }, []);

  useEffect(() => { }, [productosTraidos])

  const getImage = (card) => {
    const imagenes = dataImagen?.filter((img) => img.producto?.id == card.id);
    console.log("imagenes: ", imagenes);
    return imagenes[0]?.url;
  };

  const eliminarImagenesPorProducto = async (idProducto) => {
    const imagenes = dataImagen?.filter((img) => img?.producto?.id == idProducto);
    imagenes?.forEach(async (e) => {
      await axiosConnection.delete(`/imagenes/eliminarImagen/${e?.id}`)
    })
  };

  const eliminarProducto = async (id) => {
    try {
      const respFetch = await fetch(`/productos/eliminarProducto/${id}`, { mode: 'cors', method: 'DELETE' })
      const respApi = await respFetch.json()
      setProductosTraidos(productosTraidos?.filter(e => e?.id !== id))
      const respApiImagenes = await eliminarImagenesPorProducto(id)
      return respApi
    } catch (error) {
      console.error(error)
    }
  }



  return <div className="contenedorProductos">
    {console.log("ListadoMisProductos: ", productosTraidos)}
    {productosTraidos.map((prod) => <div className="productos">
      <div className="contenedorImagen">
        <span onClick={() => eliminarProducto(prod?.id)}>&times;</span>
        <img src={getImage(prod)} />
      </div>
      <span className="categoriaListadoMisProductos">{prod?.categoria.titulo}</span>
      <h2 className="tituloListadoMisProductos">{prod?.nombre}</h2>
      <p className="ciudadListadoProductos">                <FontAwesomeIcon
        icon={faLocationDot}
        style={{ paddingRight: "5px" }}
      />{`${prod.ciudad.provincia}, ${prod?.ciudad.nombre}, ${prod?.ciudad.pais}.`}</p>
      <div className="info">
        <p>Características:</p>
        <p className="iconosInfoHotel">
          {prod.caracteristicas
            .map((cat) => (
              <span class="material-symbols-outlined">
                {cat.caracteristica?.icono}
              </span>
            ))}
        </p>
      </div>
    </div>)}
    <div className="separador" />
  </div>

}

export default ListadoMisProductos;