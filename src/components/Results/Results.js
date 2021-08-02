import React, {useState} from "react";
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";
import './Results.css'
import {Container, ProgressBar} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";
import PrintableResults from "../PrintableResults/PrintableResults";

const Results = (props) => {

    let results = [], categories = []
    let name, date, email

    for(let i in props.results){
        if(i === 'name'){
            name = props.results[i]
        }else if(i === 'email'){
            email = props.results[i]
        }else if(i === 'date'){
            date = props.results[i]
        }else{
            results.push(props.results[i])
            categories.push(i)
        }
    }

    const getLevel = (level) => {
        switch (level){
            case 1:
                return 'Novato'
            case 2:
                return 'Principiante'
            case 3:
                return 'Competente'
            case 4:
                return 'Avanzado'
            case 5:
                return 'Profesional'
            case 6:
                return 'Experto'
        }
    }

    const progressBars = () => {
        return(
            <div>
                {results.map((item, index) => {
                    return (
                        <div className={'competence-container'}>
                            <h4 className={'competence-container__title'}>
                                {categories[index].replace(/^\w/, (c) => c.toUpperCase())}
                            </h4>
                            <p className={'competence-container__level'}>
                                {getLevel(item)}
                            </p>
                            <ProgressBar
                                now={item / 6 * 100}
                                animated={true}
                                className={'progress-bar'}
                            />
                        </div>
                    )
                })}
            </div>

        )
    }
    const [printVisible, setPrintVisible] = useState(true)



    const ref = React.createRef()

    return(
        <div>
            <Container className={'results'}>
                <div className={'results__container'} >
                    <h1 className={'results__title'}>
                        Agile Coach Competency Framework Assessment
                    </h1>
                    <h4 className={'results__name'}>
                        {name.toUpperCase()}
                    </h4>
                    <div className={'results__graphics'}>
                        <RadarGraphic series={results} categories={categories} className={'principal-graphic'}/>
                        <div className={'secondary-graphics'}>
                            {progressBars()}

                        </div>
                    </div>
                </div>

            </Container>

            <div className={`static-printable ${printVisible ? 'printable-results-visible' : 'printable-results-invisible'}`} ref={ref} >
                <div className={'static-printable'}>
                    <PrintableResults
                        name={'name'}
                        results={results}
                        categories={categories}
                    >
                        {progressBars()}
                    </PrintableResults>
                </div>

            </div>

            <ReactToPdf
                targetRef={ref}
                filename="assesstment-results.pdf"
                options={{
                    orientation: 'landscape',
                    // unit: 'in',
                    // format: [4, 2]
                }}
                x={-15}
                y={-17}
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
        </div>

    )
}

export default Results