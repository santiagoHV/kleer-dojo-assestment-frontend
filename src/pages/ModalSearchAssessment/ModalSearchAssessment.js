import React from "react";
import {Form, Modal, Button} from "react-bootstrap";

const ModalSearchAssessment = (props) => {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ingresa tu email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Ingresa el email con el que realizaste tu assessment</Form.Label>
                    <Form.Control
                        name={'email'}
                        type={'email'}
                        onChange={props.onChange}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={props.onSubmit}>
                    Buscar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalSearchAssessment