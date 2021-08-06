import React from "react";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import './Home.css'
import Hero from "../../components/Hero/Hero";

const Home = (props) => {
    return(
        <section className={'home'}>
            <Hero />
            <div className={'home__content'}>
                <div className={'home__content--description'}>
                    <p >
                        ¡Bienvenido Agile Coach!
                    </p>
                    <br />
                    <p>
                        Aquí te encontraras con un auto-assessment que te permitira reflexionar sobre las competencias planteadas en Kleer Dojo para un Agile Coach, basado en el agile competency framework de Lysa Adkins y los niveles de adquicisión de competencias de Uber Dreyfus.
                    </p>
                    <br />
                    <p>
                        Cuando estes listo embarcate oprimiento el botón.
                    </p>
                </div>

                <Link
                    to={'/take-assessment'}
                    className={'btn my-btn-primary home__content--button'}
                >
                    ¡¡Comenzar!!
                </Link>
            </div>

        </section>
    )
}

export default Home