import React from 'react';
import CardRecomendacion from '../components/CardRecomendaciones';
import CardAlojamiento from '../components/CardAlojamiento';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import "../styles/pages/home.css";


const Home = () =>{
    return(
      <>
      <header>
        
        <Navbar/>
        <Banner/>
      </header>
      <body>
      <p>afafafasfasfafafasf</p>
      <p>afafafasfasfafafasf</p>
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