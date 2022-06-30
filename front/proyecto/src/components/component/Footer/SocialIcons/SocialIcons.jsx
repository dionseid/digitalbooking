import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../footer.scss";

const SocialIcons = () => {
  return (
    <>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="redes" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedinIn} className="redes" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} className="redes" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} className="redes" />
      </a>
    </>
  );
};

export default SocialIcons;
