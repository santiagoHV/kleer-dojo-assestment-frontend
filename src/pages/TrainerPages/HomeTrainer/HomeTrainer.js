import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CardAssessment from "../../../components/CardAssesssment/CardAssessment";
import './HomeTrainer.css'
import levels from "../../../models/levels";

const HomeTrainer = (props) => {


    const renderCards = () => {
        return (
            <Row>
                {props.data.map((assessment) => {
                    return (
                        <Col
                            sm={4}
                            className={'assessment-card'}
                            key={assessment.email}
                        >
                            <CardAssessment
                                name={assessment.name}
                                date={assessment.date}
                                email={assessment.email}
                                averange={levels.getLevel(levels.getAverage(assessment))}
                                onDelete={() => {props.onDeleteAssessment(assessment.email)}}
                            />
                        </Col>
                    )
                })}
            </Row>
        )
    }

    return (
        <section>
            <Container className={'assessment-group'}>
                {renderCards()}
            </Container>
        </section>
    )


}

export default HomeTrainer