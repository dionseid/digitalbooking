import React from 'react';
import Footer from '../home/components/footer/Footer';
import "./account.css";
import Form from './components/form/Form';
import Header from './components/header/Header';

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