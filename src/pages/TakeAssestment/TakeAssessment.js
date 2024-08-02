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
                    <Col
                        sm={{offset: 0, span: 12}}
                        md={{offset: 3, span: 6}}
                        className={'p-0'}
                    >
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
                </Row>

            </Container>
        </section>
    )
}

export default TakeAssessment