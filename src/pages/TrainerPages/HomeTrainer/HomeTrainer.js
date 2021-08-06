import React from "react";
import {Container, Row} from "react-bootstrap";
import {URLS} from "../../../assets/urls";
import CardAssessment from "../../../components/CardAssesssment/CardAssessment";

const HomeTrainer = () => {

    const url = `${URLS.backAPIAssessment}/first-assessment`

    const fetchData = async () => {
        const response = await fetch(url, {
            method: 'GET',
        })

        const data = response.json()

        console.log(data)
    }

    // fetchData()

    return (
        <Container>
            <Row>
                hola
                {/*<CardAssessment />*/}
            </Row>
        </Container>
    )
}

export default HomeTrainer