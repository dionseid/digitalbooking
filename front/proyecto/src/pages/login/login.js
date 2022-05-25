import React from 'react';
import Footer from '../../pages/home/components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import "./login.css";

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