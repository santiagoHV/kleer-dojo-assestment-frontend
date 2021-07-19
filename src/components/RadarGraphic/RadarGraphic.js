import React from "react";
import ReactApexChart from 'react-apexcharts'

const RadarGraphic = (props) => {
    return(
       <ReactApexChart
            type={'radar'}
            width={800}
            series={[{
                name: 'Score',
                data: props.series
            }]}
            options={{
                chart: {
                    type: 'radar',
                },
                title: {
                    text: 'Agile Coach Competency Framework Assessment'
                },
                xaxis: {
                    categories: props.categories
                }
            }}
       />
    )
}

export default RadarGraphic