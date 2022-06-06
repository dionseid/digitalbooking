import React from 'react';
import CardRecomendacion from '../components/CardRecomendaciones';
import CardAlojamiento from '../components/CardAlojamiento';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import "../styles/pages/home.css";


const Home = ({authenticated, setIsAuthenticated}) => {
  return (
    <div id="page-wrap">
      <header>
        <Navbar authenticated={authenticated} setIsAuthenticated={setIsAuthenticated}/>
        <Banner />
      </header>
      <body>
        <section className='Alojamiento'>
          <h2>Buscar por tipo de alojamiento</h2>
          <CardAlojamiento />
        </section>
        <section className='Recomendaciones'>
          <h2>Recomendaciones</h2>
          <CardRecomendacion />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home;