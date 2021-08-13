import React, {useState} from "react";
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";
import './Results.css'
import {Container, ProgressBar} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";
import PrintableResults from "../PrintableResults/PrintableResults";
import levels from '../../models/levels'

const Results = (props) => {

    const [printVisible, setPrintVisible] = useState(false)
    let results = [], categories = []
    let name, date, email

    const ref = React.createRef()

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
                                {levels.getLevel(item)}
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

                <ReactToPdf
                    targetRef={ref}
                    filename="assesstment-results.pdf"
                    options={{
                        orientation: 'landscape',
                    }}
                    x={-35}
                    y={-37}
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

            </Container>

            <div className={`static-printable ${printVisible ? 'printable-results-visible' : 'printable-results-invisible'}`} ref={ref} >
                <div className={'static-printable'}>
                    <PrintableResults
                        name={name}
                        results={results}
                        categories={categories}
                    >
                        {progressBars()}
                    </PrintableResults>
                </div>

            </div>



        </div>

    )
}

export default Results