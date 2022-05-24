import React from 'react';
import "./footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";


const Footer =() =>{
    return(
        <>
            <p>©2021 Digital Booking</p>
            <div className='iconos'>
                <a href='#'><FontAwesomeIcon icon={faFacebook} className="redes"/></a>
                <a href='#'><FontAwesomeIcon icon={faLinkedinIn} className="redes"/></a>
                <a href='#'><FontAwesomeIcon icon={faTwitter} className="redes"/></a>
                <a href='#'><FontAwesomeIcon icon={faInstagram} className="redes"/></a>
            </div>
        </>
    )
};

export default Footer;