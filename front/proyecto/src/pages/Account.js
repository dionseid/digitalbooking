import React from 'react';
import Footer from '../components/Footer';
import "../styles/pages/account.css";
import FormCuenta from '../components/FormCuenta';
import Header from '../components/Header';

const Account = () =>{

    return(
        <>
        <header>
            <Header/>
        </header>
        <body>
            <FormCuenta/>
        </body>
        <footer>
            <Footer/>
        </footer>
        </>
    )
};

export default Account;