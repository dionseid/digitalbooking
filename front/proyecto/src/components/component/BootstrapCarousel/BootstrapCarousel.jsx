import axios from "axios";
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axiosConnection from '../../../helpers/axiosConnection'


export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const { id } = useParams();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [dataImagen, setDataImagen] = useState([]);
  useEffect(() => {
    // TODO modificar url
    axiosConnection.get("/imagenes/listarImagenes")
      .then(response => {
        setDataImagen(response.data.data)
        console.log("Probando /imagenes/listarImagenes: ", response.data.data);
      })
    // fetch("imagenes/listarImagenes", {
    //   mode: 'cors'
    // }).then((response)=>response.json())
    // .then(data =>setDataImagen(data.data));
    return
  }, [])
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {dataImagen?.filter((imagen) => imagen?.producto?.id == id)
          ?.map((item, index) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={item.nombre}
              />
              <Carousel.Caption>
                <p style={{ "textAlign": "end" }}>{(index + 1) + "/" + dataImagen?.filter((imagen) => imagen?.producto.id == id).length}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}
