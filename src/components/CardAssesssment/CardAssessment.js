import React from "react";
import {Card} from "react-bootstrap";

const CardAssessment = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Santiago Herrera</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">12-05-2021</Card.Subtitle>
                <Card.Text>
                    Promedio: experto
                </Card.Text>
                <Card.Link className={'btn my-btn-primary'} href="#">Detalles</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardAssessment