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
            height={getWindowDimensions().width < 500 ? getWindowDimensions().width : 500}
            series={[{
                name: 'Score',
                data: props.series
            }]}
            options={{
                chart: {
                    type: 'radar',
                },
                xaxis: {
                    categories: props.categories
                },
                yaxis: {
                    min: 0,
                    max: 5,
                    tickAmount: 5
                },
                colors: ['#D83D45'],
            }}
       />
    )
}

export default RadarGraphic