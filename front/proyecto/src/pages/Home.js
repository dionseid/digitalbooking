import React, { useEffect, useState } from 'react';
import CardRecomendacion from '../components/CardRecomendaciones';
import CardAlojamiento from '../components/CardAlojamiento';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import "../styles/pages/home.css";


const Home = ({authenticated, setIsAuthenticated}) => {
  const [search, setSearch] = useState(0);
  const [filter,setFilter] = useState(0);
  const [searchCategoria, setSearchCategoria] = useState(0);
  const [filterCategoria,setFilterCategoria] = useState(0);


  const handleClick = () =>{
    setFilter(search)
    console.log(search);
  }

  const onDoubleClick = () =>{
    setFilterCategoria(searchCategoria)

  }
  return (
    <div id="page-wrap">
      <header>
        <Navbar authenticated={authenticated} setIsAuthenticated={setIsAuthenticated}/>
        <Banner onChange={setSearch} onClick={handleClick}/>
      </header>
      <body>
        <section className='Alojamiento'>
          <h2>Buscar por tipo de alojamiento</h2>
          <CardAlojamiento onDoubleClickCapture={setSearchCategoria} onDoubleClick={onDoubleClick}/>
        </section>
        <section className='Recomendaciones'>
          <h2>Recomendaciones</h2>
          <CardRecomendacion selectCiudad={filter} selectCategoria={filterCategoria}/>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home;