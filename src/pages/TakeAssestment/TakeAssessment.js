import React, {useState} from "react";
import {Container} from "react-bootstrap";

import FormAssessment from "../../components/FormAssessment/FormAssessment";
import './TakeAssessment.css'

const TakeAssessment = (props) => {

    return (
        <section>
            <Container className={'form-container'}>
                <FormAssessment
                    categories={props.categories}
                    name={props.basicData.name}
                    email={props.basicData.email}
                    onChangeFormValue={props.onChangeFormValue}
                    onChange={props.onChangeSlider}
                    onSubmit={props.onSubmit}
                />
            </Container>
        </section>
    )
}

export default TakeAssessment