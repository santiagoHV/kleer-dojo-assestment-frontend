import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import levels from "../../models/levels";

const CardAssessment = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                <Card.Text>
                    Promedio: {props.averange}
                </Card.Text>
                <Card.Link >
                    <Link
                        className={'btn'}
                        to={`/results-assessment/${props.email}`}
                    >
                        Detalles
                    </Link>
                    <button
                        className={'btn my-btn-primary'}
                        onClick={props.onDelete}
                    >
                        Borrar
                    </button>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardAssessment