import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../sidebar.scss";

const SocialIcons = () => {
  return (
    <>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="redesSidebar" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedinIn} className="redesSidebar" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} className="redesSidebar" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} className="redesSidebar" />
      </a>
    </>
  );
};

export default SocialIcons;
