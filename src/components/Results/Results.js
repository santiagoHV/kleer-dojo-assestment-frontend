import React, {useState} from "react";
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";
import './Results.css'

const Results = (props) => {
    const results = props.results.map((item) => item.value)
    const categories = props.results.map((item) => item.name)

    return(
        <div className={'results'}>
            <RadarGraphic series={results} categories={categories} className={'principal-graphic'}/>
            <div className={'secondary graphics'}>
                <RadialGradientGraphic name={'Contenido'} value={4.5} />
                <RadialGradientGraphic name={'Proceso'} value={3} />
            </div>

        </div>
    )
}

export default Results