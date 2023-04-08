import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import './Home.css'
import SELLO from '../../assets/img/Agile Coach Practitioner.png'
import WOMAN from '../../assets/img/assessment.png'
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../redux/actions/uiActions";

const Home = (props) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(toggleLoader(false))
        props.onWhiteNav()

        return () => {
            props.onRedNav()
        }
    },[])

    return(
        <section className={'home'}>
            <Container className={'home-container'}>
                <Row className={'home-container'}>
                    <Col sm={0} md={4} className={'image-container'}>
                        <img src={WOMAN} alt={'Woman assessment'} className={'home-img'}/>
                    </Col>

                    <Col
                        sm={11}
                        md={4}
                        className={'home__content'}
                    >
                        <img src={SELLO} alt={'sello'}/>

                        <h3>¡Bienvenid@ Agile Coach!</h3>
                        <p>
                            Aquí te encontrarás con un auto-assessment que te permitirá reflexionar sobre las competencias planteadas en Kleer Dojo para un Agile Coach, basado en el agile competency framework de Lysa Adkins y los niveles de adquisición de competencias de Ubert Dreyfus.
                        </p>
                        <p>
                            Cuando estés listo embárcate oprimiento el botón.
                        </p>
                        <Link
                            to={'/take-assessment'}
                            className={'btn my-btn-primary home__content--button'}
                        >
                            ¡¡Comenzar!!
                        </Link>
                    </Col>

                </Row>
            </Container>
            {/*<div className={'home__content'}>*/}
            {/*    <div className={'home__content--description'}>*/}
            {/*        <p >*/}
            {/*            ¡Bienvenido Agile Coach!*/}
            {/*        </p>*/}
            {/*        <br />*/}
            {/*        <p>*/}
            {/*            Aquí te encontraras con un auto-assessment que te permitira reflexionar sobre las competencias planteadas en Kleer Dojo para un Agile Coach, basado en el agile competency framework de Lysa Adkins y los niveles de adquicisión de competencias de Uber Dreyfus.*/}
            {/*        </p>*/}
            {/*        <br />*/}
            {/*        <p>*/}
            {/*            Cuando estes listo embarcate oprimiento el botón.*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*    <Link*/}
            {/*        to={'/take-assessment'}*/}
            {/*        className={'btn my-btn-primary home__content--button'}*/}
            {/*    >*/}
            {/*        ¡¡Comenzar!!*/}
            {/*    </Link>*/}
            {/*</div>*/}

        </section>
    )
}

export default Home