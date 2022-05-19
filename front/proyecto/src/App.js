import logo from './logo.svg';
import './App.css';
import CardRecomendacion from './components/CardRecomendacion';
import CardAlojamiento from './components/CardAlojamiento';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>header</p>
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
        <p>©2021 Digital Booking</p>
        <div className='iconos'>
          <a href='#'><FontAwesomeIcon icon={faFacebook} className="redes"/></a>
          <a href='#'><FontAwesomeIcon icon={faLinkedinIn} className="redes"/></a>
          <a href='#'><FontAwesomeIcon icon={faTwitter} className="redes"/></a>
          <a href='#'><FontAwesomeIcon icon={faInstagram} className="redes"/></a>
        </div>
      </footer>
    </div>
  );
  
}

export default App;
