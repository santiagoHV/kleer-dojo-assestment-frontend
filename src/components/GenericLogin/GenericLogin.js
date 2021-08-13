import React from "react";
import { Container, Form} from "react-bootstrap";
import './GenericLogin.css'


const GenericLogin = (props) => {
    return (
        <Container className={'login'}>
            <Form className={'login__form'} onSubmit={props.onSubmit}>
                <h2>LOGIN</h2>
                <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        name={'username'}
                        onChange={props.onChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name={'password'}
                        type={'password'}
                        onChange={props.onChange}
                    />
                </Form.Group>
                <button className={'btn my-btn-primary'}>
                    Login
                </button>
            </Form>
        </Container>
    )
}

export default GenericLogin