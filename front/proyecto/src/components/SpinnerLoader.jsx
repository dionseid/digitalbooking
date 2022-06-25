import React from "react";
import { Spinner } from "react-bootstrap";
import "../styles/spinner.css"

export default function SpinnerLoader() {
  return (
    <div>
      <Spinner animation="border" role="status" className="spinnerReactstrap">
        <span className="visually-hidden">Loading...</span>
      </Spinner>      
    </div>
  );
}
