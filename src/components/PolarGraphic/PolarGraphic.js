import React from "react";
import ReactApexChart from 'react-apexcharts'

const PolarGraphic = (props) => {

    return (
        <ReactApexChart
            width={600}
            type={'polarArea'}
            series={props.series}
            labels={props.categories}
            options={{
                chart: {
                    type: 'polarArea',
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                title: {
                    text: 'Agile Coach Competency Framework Assessment'
                },
                labels: props.categories,

                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        },

                    }
                }]
            }}
        />
    )
}

export default PolarGraphic