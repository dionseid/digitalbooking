import React from "react";
import "../styles/label.scss";

const Label = ({ attribute, text }) => {
  return (
    <div className="parrafo">
      <label htmlFor={attribute}>{text}</label>
    </div>
  );
};

export default Label;
