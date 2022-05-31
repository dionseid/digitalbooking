import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Productos = () => {
    return (
      <div id="page-wrap">
        <header>
            <Navbar/>
        </header>
        <body>
          <section className='Alojamiento'>
            <h2>Buscar por tipo de alojamiento</h2>
          </section>
          <section className='Recomendaciones'>
            <h2>Recomendaciones</h2>
          </section>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    )
  }
  
  export default Productos;