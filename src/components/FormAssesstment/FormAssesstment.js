import React, {useState} from "react";
import {Form} from "react-bootstrap";
import { withStyles,Slider} from '@material-ui/core';
import './FormAssesstment.css'
import data from '../../assets/data'

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const FormAssesstment = (props) => {
    const [dataSlider, setDataSlider] = useState(data)


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e,data) => {
        console.log(data.name)
    }

    const handleChangeSlider = (index) => {

    }

    const sliders = () => {
        return (
            <div>
                {dataSlider.map((item, index) => {
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
                                onChange={handleChange}
                            />
                        </Form.Group>
                    )
                })}
            </div>
        )



    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                    type={'text'}
                    placeholder={'Ingresa tu nombre completo'}
                    onChange={handleChange}
                    name={'name'}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type={'email'}
                    placeholder={'Ingresa tu email'}
                    onChange={handleChange}
                    name={'email'}
                />
            </Form.Group>
            {sliders()}
            <button className={'btn btn-primary'}>Enviar</button>
        </Form>
    )
}

export default FormAssesstment