import React, {useState} from "react";
import PolarGraphic from "../../components/PolarGraphic/PolarGraphic";
import RadarGraphic from "../../components/RadarGraphic/RadarGraphic";
import {Link} from "react-router-dom";

const Home = (props) => {
    const [results, setResults] = useState([2,4,2,3,1,1,5,4])
    const [categories, setCategories] = useState([
        'Práctica Lean-Agile',
        'Coaching',
        'Facilitación',
        'Maestría de Transformación',
        'Maestría de Negocio',
        'Maestría Técnica',
        'Mentoría',
        'Entrenamiento'
    ])

    return(
        <div className={'home-container'}>

            <Link
                to={'/take-assesstment'}
                className={'btn btn-primary'}
            >
                Tomar assesstment
            </Link>
            {/*<PolarGraphic series={results} categories={categories}/>*/}
            {/*<RadarGraphic series={results} categories={categories}/>*/}

        </div>
    )
}

export default Home