import React, {useState} from "react";
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";
import './Results.css'
import {Container} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";
import PrintableResults from "../PrintableResults/PrintableResults";

const Results = (props) => {
    const [printVisible, setPrintVisible] = useState(false)

    const results = props.results.map((item) => item.value)
    const categories = props.results.map((item) => item.name)

    const ref = React.createRef()

    return(
        <Container className={'results'}>
            <div className={'results__container'} >
                <h1>
                    Agile Coach Competency Framework Assessment
                </h1>
                <h4>{props.name.toUpperCase()}</h4>
                <div className={'results__graphics'}>
                    <RadarGraphic series={results} categories={categories} className={'principal-graphic'}/>
                    <div className={'secondary-graphics'}>
                        <RadialGradientGraphic name={'Contenido'} value={4.5} />
                        <RadialGradientGraphic name={'Proceso'} value={3} />
                    </div>
                </div>
            </div>

            <div className={`static-printable ${printVisible ? '' : 'printable-results'}`} ref={ref} >
                <div className={'static-printable'}>
                    <PrintableResults
                        name={props.name}
                        results={results}
                        categories={categories}
                    />
                </div>

            </div>

            <ReactToPdf
                targetRef={ref}
                filename="assesstment-results.pdf"
                options={{
                    orientation: 'landscape'
                }}
                x={25}
                y={25}
            >
                {({toPdf}) => (
                    <button
                        onClick={async () => {
                            setPrintVisible(true)
                            await toPdf()
                            setPrintVisible(false)
                        }}
                        className={'btn my-btn-primary ml-4 results--btn'}
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