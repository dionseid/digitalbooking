import React from "react";
import Footer from "../../components/component/Footer/Footer";
import FormLogin from "../../components/component/Forms/FormLogin/FormLogin";
import Navbar from "../../components/component/Navbar/Navbar";
import "./login.scss";

const Login = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <FormLogin />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
