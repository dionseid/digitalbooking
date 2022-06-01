import axios from "axios";
import React, { useState , useEffect} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
//import "../styles/galeria.css";



/* const Galeria= () =>{  
const [dataImagen, setDataImagen] = useState([]);
useEffect( () => {
    axios.get("http://localhost:8080/imagenes")
    .then(response => {
        console.log(response.data);
        setDataImagen(response.data)})

}, [])


        return (
            <div className="contendorImagenes">
                {dataImagen.map((img)=>(
                    <div key={img.id} className="cardImagen" style={{backgroundImage:"url('" + img.url + "')"}}>
                        <img src={img.url} style={{width:'100%'}}/> 
                    </div>
                ))}
            </div>
        ) 
}

export default Galeria; */


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Galeria= () =>{
    const [dataImagen, setDataImagen] = useState([]);
useEffect( () => {
    axios.get("http://localhost:8080/imagenes")
    .then(response => {
        console.log(response.data);
        setDataImagen(response.data)})

}, [])

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <ImageList variant="quilted" cols={4} rowHeight={200}>
          {dataImagen.map((item, index) => (
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
              />            
            </ImageListItem>
          ))}
        </ImageList>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
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