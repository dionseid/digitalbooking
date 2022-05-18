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
        <section>
          <h2>Recomendaciones</h2>
          <CardRecomendacion/>
        </section>
      </body>
      <footer>
        <p>©2021 Digital Booking</p>
        <div>
          <FontAwesomeIcon icon={faFacebook} className="redes"/>
          <FontAwesomeIcon icon={faLinkedinIn} className="redes"/>
          <FontAwesomeIcon icon={faTwitter} className="redes"/>
          <FontAwesomeIcon icon={faInstagram} className="redes"/>
        </div>
      </footer>
    </div>
  );
  
}

export default App;
