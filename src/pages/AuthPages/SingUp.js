import {Container, Form} from "react-bootstrap";
import React from "react";

const SingUp = () => {
  return (
    <div>
      <h1>SingUp</h1>
        <Container className={'signup'}>
            <Form className={'signup__form'} onSubmit={props.onSubmit}>
                <h2>NUEVO REGISTRO</h2>
                <Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        name={'username'}
                        onChange={}
                        isInvalid={}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                        name={'username'}
                        onChange={}
                        isInvalid={}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                        name={'username'}
                        onChange={}
                        isInvalid={}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name={'password'}
                        type={'password'}
                        onChange={}
                        isInvalid={}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirme su contraseña</Form.Label>
                    <Form.Control
                        name={'password'}
                        type={'password'}
                        onChange={}
                        isInvalid={}
                    />
                </Form.Group>
                <button className={'btn my-btn-primary'}>
                    Login
                </button>
            </Form>
        </Container>
    </div>
  );
};