import React from "react";
import './PrintableResults.css'
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import Logo from '../../assets/imgold/LOGO magenta.png'

const PrintableResults = (props) => {

    const contenido = props.results
    console.log(contenido)
    return(
        <>
            <div id={'printable-results'}>
                <h1>
                    Agile Coach Competency Framework Assessment
                </h1>
                <h4>{props.name.toUpperCase()}</h4>
                <div className={'result__graphics'}>
                    <RadarGraphic
                        series={props.results}
                        categories={props.categories}
                        className={'principal-graphic'}
                        height={600}
                        width={600}
                        animated={false}
                    />
                    <div className={'secondary-graphics'}>
                        {props.children}
                    </div>
                    <div className={'results-logo'}>
                        <img src={Logo} height={200}/>
                    </div>
                </div>
            </div>
            {/*<img />*/}
        </>
    )
}

export default PrintableResults