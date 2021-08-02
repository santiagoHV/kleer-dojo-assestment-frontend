import React from "react";
import './PrintableResults.css'
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import Logo from '../../assets/img/LOGO magenta.png'

const PrintableResults = (props) => {

    const contenido = props.results
    console.log(contenido)
    return(
        <div id={'printable-results'}>
            <h1>
                Agile Coach Competency Framework Assessment
            </h1>
            <h4>{props.name.toUpperCase()}</h4>
            <div className={'result__graphics'}>
                <RadarGraphic series={props.results} categories={props.categories} className={'principal-graphic'}/>
                <div className={'secondary-graphics'}>
                    {props.children}
                </div>
                <div className={'results-logo'}>
                    <img src={Logo} height={200}/>
                </div>

            </div>
        </div>
    )
}

export default PrintableResults