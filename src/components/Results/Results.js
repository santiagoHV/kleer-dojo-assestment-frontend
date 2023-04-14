import React, {useState} from "react";
import RadarGraphic from "../RadarGraphic/RadarGraphic";
import RadialGradientGraphic from "../RadialGradientGraphic/RadialGradientGraphic";
import './Results.css'
import {Container, ProgressBar} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";
import PrintableResults from "../PrintableResults/PrintableResults";
import levels from '../../models/levels'
import dreyfusQuestions from "../../assets/static_data/questions.json"

const getWindowDimensions = () => {
    const { availWidth: width, availHeight: height } = window.screen;
    const pantalla = window.screen
    console.log(pantalla)
    return {
        width,
        height
    };
}

const getName = (text) => dreyfusQuestions.find(e => e.name == text).title


const Results = (props) => {

    const [printVisible, setPrintVisible] = useState(true)
    const isMobile = getWindowDimensions().width <= 700
    let results = [], categories = []
    let name, date, email

    //ref to print pdf
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
            const name = getName(i)
            categories.push(name)
        }
    }
    console.log(categories)



    const progressBars = () => {
        return(
            <div className={'competence-container'}>

                {results.map((item, index) => {
                    return (
                        <div className={'competence-container'}>
                            <h3 className={'competence-container__title'}>
                                {/*{categories[index].replace(/^\w/, (c) => c.toUpperCase())}*/}
                                {categories[index]}
                            </h3>
                            <p className={'competence-container__level'}>
                                {levels.getLevel(item)}
                            </p>
                            <ProgressBar
                                now={item / 5 * 100}
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
                        {name && name.toUpperCase()}
                    </h4>
                    <div className={'results__graphics'}>
                        <RadarGraphic
                            series={results}
                            categories={categories}
                            className={'principal-graphic'}
                            width={isMobile ? getWindowDimensions().width : 600}//600
                            height={isMobile ? null : 500}
                            fontSize={isMobile ? 6 : 12}
                            animated={true}
                        />
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