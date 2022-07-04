import React from "react";
import Footer from "../../components/component/Footer/Footer";
import MensajeReservaExitosa from "../../components/component/MensajeExito/MensajeReservaExitosa/MensajeReservaExitosa";
import Navbar from "../../components/component/Navbar/Navbar";
import "../Login/login.scss";

const ReservaExitosa = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <MensajeReservaExitosa />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ReservaExitosa;
