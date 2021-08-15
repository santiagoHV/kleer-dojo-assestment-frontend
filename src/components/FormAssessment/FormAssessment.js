import React, {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import PrettoSlider from "../SliderCustom/SliderCustom";
import './FormAssessment.css'
import levels from "../../models/levels";

const FormAssessment = (props) => {


    const sliders = () => {
        return (
            <div>
                {props.categories.map((item, index) => {
                    return(
                        <Form.Group key={index} className={'form-group'}>
                            <Form.Label>{item.name}</Form.Label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                defaultValue={item.value}
                                marks
                                step={1}
                                min={1}
                                max={6}
                                onChange={(e, data) => {props.onChange(data,index)}}
                            />
                            {/*<p>{levels.getLevel(item.value)}</p>*/}
                        </Form.Group>
                    )
                })}
            </div>
        )
    }

    return(
        <Form onSubmit={props.onSubmit} className={'form'}>
            <Row>
                <Col sm={12} md={6}
                     className={'form__basic-data'}
                >
                    <h2>¡Aquí inicia tu camino!</h2>
                    <div className={'basic-data__form-group'}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control
                                type={'text'}
                                placeholder={'Ingresa tu nombre completo'}
                                onChange={props.onChangeFormValue}
                                name={'name'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type={'email'}
                                placeholder={'Ingresa tu email'}
                                onChange={props.onChangeFormValue}
                                name={'email'}
                            />
                        </Form.Group>
                    </div>
                </Col>
                <Col sm={6} className={'center-container'}>
                    <div className={'sliders-container'}>
                        {sliders()}
                        <div className={'space-btn'}>
                            <button className={'btn my-btn-primary form--btn'}>Enviar</button>
                        </div>
                    </div>

                </Col>
            </Row>
        </Form>
    )
}

export default FormAssessment