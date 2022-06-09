import axios from "axios";
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";



export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const { id } = useParams();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [dataImagen, setDataImagen] = useState([]);
  useEffect(() => {
    axios.get("http://awseb-awseb-19h8qama3kcj1-539654579.us-west-1.elb.amazonaws.com:8080/imagenes")
      .then(response => {
        console.log(response.data);
        setDataImagen(response.data)
      })

  }, [])
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {dataImagen.filter((imagen) => imagen.producto.id == id)
          .map((item, index) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={item.nombre}
              />
              <Carousel.Caption>
                <p style={{ "textAlign": "end" }}>{(index + 1) + "/" + dataImagen.length}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}
