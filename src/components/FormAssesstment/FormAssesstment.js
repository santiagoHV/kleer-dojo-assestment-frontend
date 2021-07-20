import React, {useState} from "react";
import {Form} from "react-bootstrap";
import PrettoSlider from "../SliderCustom/SliderCustom";
import './FormAssesstment.css'



const FormAssesstment = (props) => {

    const sliders = () => {
        return (
            <div>
                {props.categories.map((item, index) => {
                    return(
                        <Form.Group key={index}>
                            <Form.Label>{item.name}</Form.Label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                defaultValue={item.value}
                                marks
                                step={1}
                                min={1}
                                max={5}
                                onChange={(e, data) => {props.onChangeFormValue(data,index)}}
                            />
                        </Form.Group>
                    )
                })}
            </div>
        )



    }

    return(
        <Form onSubmit={props.onSubmit} className={'form'}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                    type={'text'}
                    placeholder={'Ingresa tu nombre completo'}
                    onChange={props.onChange}
                    name={'name'}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type={'email'}
                    placeholder={'Ingresa tu email'}
                    onChange={props.onChange}
                    name={'email'}
                />
            </Form.Group>
            {sliders()}
            <div className={'space-btn'}>
                <button className={'btn my-btn-primary form--btn'}>Enviar</button>
            </div>

        </Form>
    )
}

export default FormAssesstment