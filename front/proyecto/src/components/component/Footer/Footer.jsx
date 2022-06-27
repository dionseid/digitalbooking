import React from "react";
import "./footer.scss";
import SocialIcons from "./SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <>
      <p>©2021 Digital Booking</p>
      <div className="iconos">
        <SocialIcons />
      </div>
    </>
  );
};

export default Footer;
