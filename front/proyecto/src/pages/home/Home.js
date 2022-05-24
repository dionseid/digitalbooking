import React from 'react';
import CardRecomendacion from './components/CardRecomendacion';
import CardAlojamiento from './components/CardAlojamiento';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import "./home.css";


const Home = () =>{
    return(
      <>
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <body>
        <section className='Alojamiento'>
          <h2>Buscar por tipo de alojamiento</h2>
          <CardAlojamiento/>
        </section>
        <section className='Recomendaciones'>
          <h2>Recomendaciones</h2>
          <CardRecomendacion/>
        </section>
      </body>
    <footer>
        <Footer/>
    </footer>
      </>
    )
}

export default Home;