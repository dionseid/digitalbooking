import React from 'react';
import Footer from '../components/Footer';
import FormLogin from '../components/FormLogin';
import Navbar from '../components/Navbar';
import "../styles/pages/login.css";

const Login = ({setIsAuthenticated}) => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <FormLogin setIsAuthenticated={setIsAuthenticated} />
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Login;