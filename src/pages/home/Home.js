import React from "react";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import './Home.css'

const Home = (props) => {
    return(
        <Container className={'home-container'}>

            <Link
                to={'/take-assesstment'}
                className={'btn btn-primary'}
            >
                Tomar assesstment
            </Link>
        </Container>
    )
}

export default Home