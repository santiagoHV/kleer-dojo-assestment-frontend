import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const CardAssessment = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                <Card.Text>
                    Promedio: experto
                </Card.Text>
                <Card.Link >
                    <Link
                        className={'btn my-btn-primary'}
                        to={`/results-assessment/${props.email}`}
                    >
                        Detalles
                    </Link>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardAssessment