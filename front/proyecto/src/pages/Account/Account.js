import React from "react";
import Footer from "../../components/component/Footer/Footer";
import "./account.scss";
import FormCuenta from "../../components/component/Forms/FormCuenta/FormCuenta";
import Navbar from "../../components/component/Navbar/Navbar";

const Account = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <FormCuenta />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Account;
