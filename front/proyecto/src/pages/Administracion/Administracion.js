import React from "react";
import Footer from "../../components/component/Footer/Footer";
import FormCrearProducto from "../../components/component/Forms/FormCrearProducto/FormCrearProducto";
import Navbar from "../../components/component/Navbar/Navbar";
import TituloProducto from "../../components/component/TituloProducto/TituloProducto";
import "./administracion.scss";

const Administracion = () => {
  return (
    <>
      <header>
        <Navbar />
        <TituloProducto/>
      </header>
      <body className="bodyAdministracion">
        <FormCrearProducto/>        
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Administracion;
