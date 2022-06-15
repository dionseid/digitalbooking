import React from 'react';
import Footer from '../components/Footer';
import MensajeReservaExitosa from '../components/MensajeReservaExitosa';
import Navbar from '../components/Navbar';
import "../styles/pages/login.css";

const ReservaExitosa = () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <MensajeReservaExitosa/>
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default ReservaExitosa;