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
  const [filterCategoria,setFilterCategoria] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


  const handleClick = () =>{
    setFilter(search);
    alert(dateRange)
  }

  const onDoubleClick = (searchCategoria, e) =>{
    setFilterCategoria(searchCategoria)
}

  const onClick = () =>{
    setFilterCategoria(null)
    setFilter(null)
    setDateRange([null, null])
  }

  return (
    <div id="page-wrap">
      <header>
        <Navbar authenticated={authenticated} setIsAuthenticated={setIsAuthenticated} onClick={onClick}/>
        <Banner startDate={startDate} endDate={endDate} setDateRange={setDateRange} onChange={setSearch} onClick={handleClick}/>
      </header>
      <body>
        <section className='Alojamiento'>
          <h2>Buscar por tipo de alojamiento</h2>
          <CardAlojamiento idCategoria={filterCategoria} setIdCategoria={setFilterCategoria} onDoubleClick={onDoubleClick}/>
        </section>
        <section className='Recomendaciones'>
          <h2>Recomendaciones</h2>
          <CardRecomendacion selectCiudad={filter} selectCategoria={filterCategoria} selectDate={dateRange}/>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home;