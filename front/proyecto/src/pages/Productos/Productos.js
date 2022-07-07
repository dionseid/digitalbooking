import React, { useContext, useState} from "react";
//import FechaRangoContextProvider from "../components/context/FechaRangoContextProvider";
import Footer from "../../components/component/Footer/Footer";
import Navbar from "../../components/component/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHeart } from "@fortawesome/free-solid-svg-icons";
import Galeria from "../../components/component/Galeria/Galeria";
import Calendario from "../../components/component/Calendario/Calendario";
import "./productos.scss";
import BootstrapCarousel from "../../components/component/BootstrapCarousel/BootstrapCarousel";
import Media from "react-media";
import { useNavigate, useParams } from "react-router-dom";
import Caracteristicas from "../../components/component/Caracteristicas/Caracteristicas";
import Reglas from "../../components/component/Reglas/Reglas";
import DescripcionProducto from "../../components/component/DescripcionProducto/DescripcionProducto";
import UbicacionProducto from "../../components/component/UbicacionProducto/UbicacionProducto";
import TituloProducto from "../../components/component/TituloProducto/TituloProducto";
import GoogleMaps from "../../components/component/GoogleMaps/GoogleMaps";
import UserProvider from "../../components/context/UserContext";
import ModalRedes from "../../components/component/ModalRedes/ModalRedes";

const Productos = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, loginLogoutEvent } = useContext(UserProvider);
  /*   const {idProducto, setIdProducto} = useContext(IdProductoContextProvider);
  console.log(idProducto);
  setIdProducto(id)
  console.log(idProducto); */

  //const {rango, setRango} = useContext(FechaRangoContextProvider);

  /*   useEffect(() => {
    if(dateRange !== null){
      setRango(dateRange)
    }
  }, []) */

  //console.log("fecha inicial: ", rango[0]);

  const redireccionIsLogued = () => {
    if (user.auth) {
      navigate(`/producto/${id}/reserva`);
    } else {
      loginLogoutEvent({
        nombre: "",
        apellido: "",
        mail: "",
        id: null,
        auth: false,
        redirect: true,
        rol:"",
        ciudad: "",
      });
      navigate(`/login`);
    }
  };

  return (
    <div id="page-wrap">
      <header>
        <Navbar />
        <TituloProducto />
      </header>
      <body>
        <section className="ubicacion">
          <UbicacionProducto />
        </section>
        <section className="imagenes">
        <p><button className="botonCompartir"><FontAwesomeIcon icon={faShareNodes} className='iconosLike' onClick={() => setModalShow(true)}/></button><FontAwesomeIcon icon={faHeart} className='iconosLike'/></p>
      <ModalRedes
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

          <Media query="(max-width:768px)">
            {(matches) => {
              return matches ? <BootstrapCarousel /> : <Galeria />;
            }}
          </Media>
        </section>
        <section className="texto">
          <DescripcionProducto />
        </section>
        <section>
          <Caracteristicas />
        </section>
        <section className="fechasDisponibles">
          <h2>Fechas disponibles</h2>
          <div className="contenedorCalendario">
            <div>
              <Calendario />
            </div>
            <div className="contendorReserva">
              <p>Agregá tus fechas de viaje para obtener precios exactos</p>
              <button className="buttonCard" onClick={redireccionIsLogued}>
                Iniciar reserva
              </button>
            </div>
          </div>
        </section>
        <section className="contenedorMapa">
          <h2>¿Dónde vas a estar?</h2>
          <GoogleMaps/>
        </section>
        <section>
          <h2>¿Qué tenes que saber?</h2>
          <div className="linea" />
          <Reglas />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Productos;
