import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Button } from "react-bootstrap";
import BootstrapModal from "./BootstrapModal";
import "../styles/galeria.css";
import { useParams } from "react-router-dom";



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Galeria = () => {
  const [modalShow, setModalShow] = useState(false);
  const [dataImagen, setDataImagen] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // TODO cambiar url
    axios.get("http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com/imagenes/listarImagenes")
      .then(response => {
        setDataImagen(response.data)
      })

  }, [])

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <ImageList variant="quilted" cols={4} rowHeight={200}>
          {dataImagen.filter((imagen) => imagen.producto?.id == id)
            .map((item, index) => (
              <ImageListItem
                key={item.id}
                cols={
                  pattern[
                    index - Math.floor(index / pattern.length) * pattern.length
                  ].cols
                }
                rows={
                  pattern[
                    index - Math.floor(index / pattern.length) * pattern.length
                  ].rows
                }
                sx={{
                  opacity: '.7',
                  transition: 'opacity .3s linear',
                  cursor: 'pointer',
                  '&:hover': { opacity: 1 },
                }}
              >

                <img
                  {...srcset(
                    item.url,
                    200,
                    pattern[
                      index - Math.floor(index / pattern.length) * pattern.length
                    ].rows,
                    pattern[
                      index - Math.floor(index / pattern.length) * pattern.length
                    ].cols
                  )}
                  alt={item.nombre}
                  loading="lazy"
                  className="imagenGaleria"
                />
              </ImageListItem>
            ))}
        </ImageList>
        <div className="contendorGaleria">
          <Button variant="link" onClick={() => setModalShow(true)} className="botonGaleria">ver más</Button>
        </div>
        <BootstrapModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </SRLWrapper>
    </SimpleReactLightbox>
  )




}



const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  }
];

export default Galeria;