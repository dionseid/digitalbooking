import React from 'react';
import Footer from '../components/Footer';
import "../styles/pages/account.css";
import FormCuenta from '../components/FormCuenta';
import Navbar from '../components/Navbar';

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
    )
};

export default Account;