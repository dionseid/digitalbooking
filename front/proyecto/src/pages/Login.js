import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/FormLogin';
import Header from '../components/Header';
import "../styles/pages/login.css";

const Login = () =>{

    return(
        <>
        <header>
            <Header/>
        </header>
        <body>
            <Form/>
        </body>
        <footer>
            <Footer/>
        </footer>
        </>
    )
};

export default Login;