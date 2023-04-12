import React, {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import PrettoSlider from "../SliderCustom/SliderCustom";
import './FormAssessment.css'
import levels from "../../models/levels";
import dreyfusQuestions from "../../assets/static_data/questions.json"
import DreyfusSkillScale from "../DreyfusSkillScale/DreyfusSkillScale";
import {useSelector} from "react-redux";

const FormAssessment = (props) => {

    const actualQuestion = useSelector(state => state.takeAssessment.actualQuestion)
    const skills = useSelector(state => state.takeAssessment.skills)

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
                                max={5}
                                onChange={(e, data) => {props.onChange(data,index)}}
                            />
                            {/*<p>{levels.getLevel(item.value)}</p>*/}
                        </Form.Group>
                    )
                })}
            </div>
        )
    }

    const textButton = () => {
        if(actualQuestion < dreyfusQuestions.length - 1 && actualQuestion >= 0){
            return 'Siguiente habilidad'
        }else if(actualQuestion < 0){
            return 'Iniciar'
        }else{
            return 'Enviar'
        }
    }
    return(
        <Form onSubmit={props.onSubmit} className={'form'}>
            <Row>
                <Col sm={12} md={12}
                     className={'form__basic-data'}
                >
                    <h2>¡Aquí inicia tu camino!</h2>
                    <div className={'basic-data__form-group'}>
                        <div className={'sliders-container'}>
                            { actualQuestion < 0 ?
                                <div className={'basic-data__form-group'}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre Completo</Form.Label>
                                        <Form.Control
                                            type={'text'}
                                            placeholder={'Ingresa tu nombre completo'}
                                            onChange={props.onChangeFormValue}
                                            name={'name'}
                                            className={props.isValid.name ? '' : 'form-error-control'}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type={'email'}
                                            placeholder={'Ingresa tu email'}
                                            onChange={props.onChangeFormValue}
                                            name={'email'}
                                            className={props.isValid.email ? '' :'form-error-control'}
                                        />
                                    </Form.Group>
                                </div>
                                :
                                <DreyfusSkillScale
                                    onChange={props.onChange}
                                    scale={dreyfusQuestions[actualQuestion].scale}
                                    title={dreyfusQuestions[actualQuestion].title}
                                    name={dreyfusQuestions[actualQuestion].name}
                                    description={dreyfusQuestions[actualQuestion].description}
                                    value={skills[dreyfusQuestions[actualQuestion].name]}
                                    index={props.actualQuestion}/>

                            }

                            <div className={'mt-3 space-btn'}>
                                <button className={'btn my-btn-primary form--btn'}>
                                    {textButton() }
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>


                </Col>
            </Row>
        </Form>
    )
}

export default FormAssessment