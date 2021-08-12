import React from "react";
import ReactApexChart from 'react-apexcharts'
import './RadarGraphic.css'

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


const RadarGraphic = (props) => {
    return(
       <ReactApexChart
            className={'graphic'}
            type={'radar'}
            width={getWindowDimensions().width < 600 ? getWindowDimensions().width *0.95: 600}
            height={getWindowDimensions().width < 600 ? getWindowDimensions().width : 600}
            series={[{
                name: 'Score',
                data: props.series
            }]}
            options={{
                chart: {
                    type: 'radar',
                },
                xaxis: {
                    categories: props.categories,
                    labels: {
                        style: {
                            colors: ["#000000","#000000","#000000","#000000","#000000","#000000"],
                            fontSize: "11px",
                            fontFamily: 'Arial'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 6,
                    tickAmount: 6,
                    labels: {
                        style: {
                            colors: [],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    }
                },
                colors: ['#D83D45'],
            }}
       />
    )
}

export default RadarGraphic