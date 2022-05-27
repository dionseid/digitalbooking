import React from 'react';
import Footer from '../components/Footer';
import "../styles/pages/account.css";
import Form from '../components/FormCuenta';
import Header from '../components/Header';

const Account = () =>{

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

export default Account;