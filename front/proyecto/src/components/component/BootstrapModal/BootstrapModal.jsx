import React from 'react'
import { /*Button,*/ Modal } from 'react-bootstrap'
import BootstrapCarousel from '../BootstrapCarousel/BootstrapCarousel'

export default function BootstrapModal(props) {
  return (
    <div>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <BootstrapCarousel/>
        </Modal.Body>
{/*         <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  )
}

