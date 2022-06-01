import React, { useState, useEffect } from "react";
import Categoria from "../Categoria";

export default function AjaxHooks() {
  const [categorias, setCategoria] = useState([]);

  /* useEffect(() => {
    let url = "http://localhost:8080/categorias";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              let categoria = {
                id: json.id,
                descripcion: json.descripcion,
                titulo: json.titulo,
                urlImg:json.urlImg,
              };

              setCategoria((categorias) => [...categorias, categoria]);
            })
            .catch(console.log);
        });
      })
      .catch(console.log);
  }, []); */

/*   useEffect(() => {
    const setCategoria = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        //console.log(json);
        let categoria = {
          id: json.id,
          descripcion: json.descripcion,
          titulo: json.titulo,
          url_img:json.url_img,
        };

        setCategoria((categorias) => [...categorias, categoria]);
      });
    };

    setCategoria("http://localhost:8080/categorias");
  }, []); */

  return (
    
    <div className="cards">
        {categorias.length === 0 ? (
            <h3>Cargando...</h3>
        ) : (categorias.map((card)=>(
            <Categoria key={card.id} descripcion={card.descripcion} titulo={card.titulo} urlImg={card.urlImg}/>
        ))
)}
</div>
    
  );
}


