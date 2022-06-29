import React from "react";
import Footer from "../../components/component/Footer/Footer";
import MensajeCreacionProducto from "../../components/component/MensajeExito/MensajeCreacionProducto/MensajeCreacionProducto"
import Navbar from "../../components/component/Navbar/Navbar";
import "../Login/login.scss";

const CreacionExitosa = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <MensajeCreacionProducto />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CreacionExitosa;