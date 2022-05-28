import React from 'react';
import Footer from '../components/Footer';
import FormLogin from '../components/FormLogin';
import Header from '../components/Header';
import "../styles/pages/login.css";

const Login = () =>{

    return(
        <>
        <header>
            <Header/>
        </header>
        <body>
            <FormLogin/>
        </body>
        <footer>
            <Footer/>
        </footer>
        </>
    )
};

export default Login;