import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp, faFacebook, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./modalRedes.scss";

export default function ModalRedes(props) {
    const { id } = useParams();
    const urlACompartir = `http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com/productos/${id}`

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
            <a href={"https://www.facebook.com/sharer/sharer.php?u=" + urlACompartir}>
              <i class="fab fa-facebook-f icon"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/intent/tweet?text=[text]&url=[url]&hashtags=[hashtag]">
              <i class="fab fa-twitter icon"></i>
            </a>
          </li>
          <li>
            <a href={'https://www.linkedin.com/sharing/share-offsite/?url=' + urlACompartir}>
              <i class="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a href={"https://api.whatsapp.com/send?text=digital%20booking%20" + urlACompartir}>              
              <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
            </a>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
