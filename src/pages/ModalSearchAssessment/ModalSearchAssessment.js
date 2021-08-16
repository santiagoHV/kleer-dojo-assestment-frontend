import React, {useState} from "react";
import {Form, Modal, Button} from "react-bootstrap";
import validators from "../../models/validators";
import './ModalSearchAssessment.css'

const ModalSearchAssessment = (props) => {
    const [isValid, setIsValid] = useState(true)

    const handleChange = (e) => {
        if(!validators.validateEmail(e.target.value)){
            setIsValid(false)
        }else{
            setIsValid(true)
        }
        props.onChange(e)
    }

    const handleSubmit = () => {
        if(isValid){
            props.onSubmit()
        }else {
            //texto invalidando el control
        }
    }
    return (
        <Modal
            show={props.show}
            onHide={props.onClose}
            id={'modalSearchAssessment'}
        >
            <Modal.Header>
                <Modal.Title>Ingresa tu email</Modal.Title>
                <button className={'btn-close m-1'}
                        onClick={props.onClose}/>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Ingresa el email con el que realizaste tu assessment</Form.Label>
                    <Form.Control
                        name={'email'}
                        type={'email'}
                        onChange={handleChange}
                        className={!isValid ? 'form-error-control' : ''}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Cerrar
                </Button>
                <Button className={'my-btn-primary'} onClick={handleSubmit}>
                    Buscar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalSearchAssessment