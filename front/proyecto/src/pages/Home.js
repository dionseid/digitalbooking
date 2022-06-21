import React, { useEffect, useState, useContext } from 'react';
import CardRecomendacion from '../components/CardRecomendaciones';
import CardAlojamiento from '../components/CardAlojamiento';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import UserProvider from '../components/context/UserContext';
import "../styles/pages/home.css";


const Home = ({authenticated}) => {
  const [search, setSearch] = useState(0);
  const [filter,setFilter] = useState(0);
  const [filterCategoria,setFilterCategoria] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const {user, loginLogoutEvent } = useContext(UserProvider);


  

  const handleClick = () =>{
    setFilter(search);
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
        <Navbar authenticated={authenticated}  onClick={onClick}/>
        <Banner startDate={startDate} endDate={endDate}  setDateRange={setDateRange} onChange={setSearch} onClick={handleClick}/>
      </header>
      <body>
        <section className='Alojamiento'>
          <h2>Buscar por tipo de alojamiento</h2>
          <CardAlojamiento idCategoria={filterCategoria} setIdCategoria={setFilterCategoria} onDoubleClick={onDoubleClick}/>
        </section>
        <section className='Recomendaciones'>
          <h2>Recomendaciones</h2>
          <CardRecomendacion selectCiudad={filter} selectCategoria={filterCategoria} startDate={startDate} endDate={endDate}/>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home;