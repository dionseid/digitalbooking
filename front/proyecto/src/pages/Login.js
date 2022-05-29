import React from 'react';
import Footer from '../components/Footer';
import FormLogin from '../components/FormLogin';
import Navbar from '../components/Navbar';
import "../styles/pages/login.css";

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
    )
};

export default Login;