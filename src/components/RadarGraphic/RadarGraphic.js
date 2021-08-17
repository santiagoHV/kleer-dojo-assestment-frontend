import React from "react";
import ReactApexChart from 'react-apexcharts'
import './RadarGraphic.css'



const RadarGraphic = (props) => {
    return (
        <ReactApexChart
            className={'graphic'}
            type={'radar'}
            width={props.width}
            height={props.height ? props.height : props.width * 0.7}
            series={[{
                name: 'Score',
                data: props.series
            }]}
            options={{
                chart: {
                    animations: {
                        enabled: props.animated
                    },
                    type: 'radar',
                },
                xaxis: {
                    categories: props.categories,
                    labels: {
                        style: {
                            colors: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
                            fontSize: `${props.fontSize}px`,
                            fontFamily: 'Arial'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 5,
                    tickAmount: 5,
                    labels: {
                        style: {
                            colors: [],
                            fontSize: `${props.fontSize + 2}px`,
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