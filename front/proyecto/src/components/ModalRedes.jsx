import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../styles/modalRedes.css";

export default function ModalRedes(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
          ¿Desea compartir en redes este producto?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <ul className="listaRedes">
          <li>
            <a href="#">
              <i class="fab fa-facebook-f icon"></i>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter icon"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-google-plus-g icon"></i>
            </a>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
