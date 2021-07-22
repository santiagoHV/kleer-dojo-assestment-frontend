import React from "react";
import './PrintableResults.css'
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";

const PrintableResults = (props) => {

    return(
        <div id={'printable-results'}>
            <h1>
                Agile Coach Competency Framework Assessment
            </h1>
            <h4>{props.name.toUpperCase()}</h4>
            <div className={'result__graphics'}>
                <RadarGraphic series={props.results} categories={props.categories} className={'principal-graphic'}/>
                <div className={'secondary-graphics'}>
                    <RadialGradientGraphic name={'Contenido'} value={4.5} />
                    <RadialGradientGraphic name={'Proceso'} value={3} />
                </div>
            </div>
        </div>
    )
}

export default PrintableResults