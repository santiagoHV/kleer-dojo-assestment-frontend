import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import './Home.css'
import SELLO from '../../assets/img/certified-agile-coach.png'
import WOMAN from '../../assets/img/assessment.png'
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../redux/actions/uiActions";
import {restartForm} from "../../redux/actions/takeAssessmentActions";

const Home = (props) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(toggleLoader(false))
        dispatch(restartForm())

        props.onWhiteNav()

        return () => {
            props.onRedNav()
        }
    },[])

    return(
        <section className={'home'}>
                <img src={WOMAN} alt={'Woman assessment'} className={'home-img'}/>
                <div
                    className={'home__content'}
                >
                        <img src={SELLO} alt={'sello'}/>

                        <h3>¡Bienvenid@ Agile Coach!</h3>
                        <p>
                            A continuación podrás tomar un auto-assessment, que te permitirá reflexionar sobre las competencias planteadas para un Agile Coach, basado en el Agile competency Framework de Lysa Adkins y los niveles de adquisición de competencias de Ubert Dreyfus.
                            Si quieres entender mejor antes qué es el Agile Coaching puedes consultar <a href={'https://kleer.la/es/blog/agile-coach'}>este blog post</a> donde intentamos aclararlo.
                        </p>
                        <p>
                            ¿Cómo leer el radar?
                        </p>
                        <p>
                            El radar ubica las competencias del <b>Agile Coach</b> en cada uno de los niveles de conocimiento planteados por Ubert Dreyfus: <b>(Novato, principiante avanzado, competente, profesional, experto)</b>.
                        </p>
                        <p>
                            En función de la afirmación que elijas para competencia al final podrás ver un radar qué te ubica en un nivel de Dreyfus para cada competencia de Agile Coaching.
                        </p>
                        <Link
                            to={'/take-assessment'}
                            className={'btn my-btn-primary home__content--button'}
                        >
                            ¡¡Comenzar!!
                        </Link>
                    </div>
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