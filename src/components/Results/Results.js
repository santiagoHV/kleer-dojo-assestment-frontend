import React, {useState} from "react";
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";
import './Results.css'
import {Container} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";

const Results = (props) => {
    const results = props.results.map((item) => item.value)
    const categories = props.results.map((item) => item.name)

    const ref = React.createRef()

    return(
        <Container className={'results'}>
            <div ref={ref}>
                <h1>
                    Agile Coach Competency Framework Assessment
                </h1>
                <h4>{props.name.toUpperCase()}</h4>
                <div className={'restults__graphics'}>
                    <RadarGraphic series={results} categories={categories} className={'principal-graphic'}/>
                    <div className={'secondary-graphics'}>
                        <RadialGradientGraphic name={'Contenido'} value={4.5} />
                        <RadialGradientGraphic name={'Proceso'} value={3} />
                    </div>
                </div>
            </div>
            <ReactToPdf
                targetRef={ref}
                filename="assesstment-results.pdf"
                options={{
                    orientation: 'landscape'
                }}
            >
                {({toPdf}) => (
                    <button
                        onClick={toPdf}
                        className={'btn my-btn-primary ml-4'}
                    >Descargar resultados</button>
                )}
            </ReactToPdf>

            <button
                onClick={props.goBack}
                className={'btn my-btn-primary results--btn'}
            >
                Volver a presentar
            </button>


        </Container>
    )
}

export default Results