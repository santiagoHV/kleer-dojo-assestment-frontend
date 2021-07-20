import React from "react";
import ReactApexChart from 'react-apexcharts'
import './RadarGraphic.css'

const RadarGraphic = (props) => {
    return(
       <ReactApexChart
            className={'graphic'}
            type={'radar'}
            width={600}
            height={500}
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