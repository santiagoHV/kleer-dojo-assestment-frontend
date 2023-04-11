import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import GIRL from '../../assets/img/señalando.png'
import FormAssessment from "../../components/FormAssessment/FormAssessment";
import './TakeAssessment.css'

const TakeAssessment = (props) => {
    return (
        <section id={'take-assessment'}>
            <Container className={'form-container'}>
                <Row className={'form-container-row'}>
                    <Col sm={5}>
                        <FormAssessment
                            categories={props.categories}
                            name={props.basicData.name}
                            email={props.basicData.email}
                            onChangeFormValue={props.onChangeFormValue}
                            onChange={props.onChangeSlider}
                            onSubmit={props.onSubmit}
                            isValid={props.isValid}
                            actualQuestion={props.actualQuestion}
                        />
                    </Col>
                    <Col sm={5} >
                        <div className={'form-container-info'}>
                            <p>
                                A continuación podrás tomar un auto-assessment, que te permitirá reflexionar sobre las competencias planteadas para un Agile Coach, basado en el Agile competency Framework de Lysa Adkins y los niveles de adquisición de competencias de Ubert Dreyfus.
                                Si quieres entender mejor antes qué es el Agile Coaching puedes consultar este blog post donde intentamos aclararlo.
                            </p>
                            <p>
                                ¿Cómo leer el radar?
                            </p>
                            <p>
                                El radar ubica las competencias del Agile Coach en cada uno de los niveles de conocimiento planteados por Ubert Dreyfus: (Novato, principiante avanzado, competente, profesional, experto).
                            </p>
                            <p>
                                En función de la afirmación que elijas para competencia al final podrás ver un radar qué te ubica en un nivel de Dreyfus para cada competencia de Agile Coaching.
                            </p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className={'img-container'}>
                            <img
                                src={GIRL}
                                alt={'Chica señalando'}
                                className={'take-assessment--img'}
                            />
                        </div>

                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default TakeAssessment