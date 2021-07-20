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
                <Link
                    to={'/take-assesstment'}
                    className={'btn my-btn-primary home__content--button'}
                >
                    Tomar assesstment
                </Link>
            </div>

        </section>
    )
}

export default Home